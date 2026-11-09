/**
 * Hook for local value state management with type conversion and debounced backend writes.
 *
 * @module hooks/useValueState
 * @remarks
 * This hook is used by multiple widgets to keep a local “optimistic” value in sync with ioBroker state.
 * It supports:
 * - type-aware conversion via the configured `OidObject.type`
 * - throttled/debounced writes via {@link module:hooks/useDebounce}, or an immediate write on the same
 *   binding (ADR-0110 Nr. 5)
 * - a short “ignore window” to avoid immediately re-applying backend echoes while the user is interacting
 * - two outputs of one backend decision: `hasForeignChange` (Fremdänderung, CONTEXT — any change
 *   another party made) and `hasBackendChange` (Signifikante Backend-Änderung, CONTEXT — a
 *   Fremdänderung that also passes the jitter filter); ADR-0087 and its 2026-11-02 addendum
 *
 * The decision logic is exported as pure transitions ({@link convertToOidType},
 * {@link isSignificantBackendChange}, {@link decideBackendChange} — the useOptimisticNumber /
 * useEditorHistory pattern) so the echo/significance contract is testable without React.
 * The hook itself is a thin shell: context reads, the observation state carrying the last
 * decision's `next` state (decided while rendering, when the observed snapshot changes), the
 * ignore window as state a timer closes, and the write wiring.
 */

import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
import isOidReadOnly from '../lib/helper/isOidReadOnly';
import useDebounce from './useDebounce';
import type { OidObject, OidType, CommonObjectFieldsRxData, DelayFieldsRxData } from '../types';
import { type VisRxWidgetState } from '@iobroker/types-vis-2';
import { DEFAULT_WRITE_DELAY_MS, VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';

/**
 * Converts a primitive value to the configured ioBroker OID type.
 *
 * @param value - Value to convert.
 * @param oidType - Target type as configured by the selected OID.
 * @returns The converted value or `undefined` if the conversion is not valid.
 * @remarks
 * Conversion rules:
 * - `string`: `String(value)`
 * - `number`: only converts if the input is numeric
 * - `boolean`: only the string `"true"` (case-insensitive) becomes `true`
 * - `mixed`: attempts boolean → number → string
 */
export function convertToOidType(
    value: string | number | boolean,
    oidType: OidType | undefined,
): string | number | boolean | undefined {
    switch (oidType) {
        case 'string':
            return String(value);
        case 'number':
            return isNumber(value) ? Number(value) : undefined;
        /*
         * Mixed type: tries to convert in this order:
         * - "true"/"false" (case-insensitive) → boolean
         * - numeric values → number
         * - everything else → string
         *
         * Note: numeric booleans (1/0) are treated as numbers, not booleans.
         */
        case 'mixed':
            return /^true$/i.test(String(value))
                ? true
                : /^false$/i.test(String(value))
                  ? false
                  : isNumber(value)
                    ? Number(value)
                    : String(value);
        /*
         * Boolean type: only the string "true" (case-insensitive) becomes true.
         * All other values (including "1", "yes", etc.) become false.
         */
        case 'boolean':
            return /^true$/i.test(String(value));
        default:
            return value;
    }
}

/**
 * Determines whether a backend value change should be treated as significant.
 *
 * @param prevValue - Previously observed value.
 * @param currentValue - Newly observed value.
 * @returns `true` if the change is considered significant.
 * @remarks
 * This is only evaluated when the backend "last change" timestamp has changed.
 * Type-aware (ADR-0087): while both sides coerce to finite numbers, a delta of
 * at least 1 is significant (the numeric jitter filter); as soon as one side
 * does not coerce (pure strings like `"#ff0000"` or `"an"`/`"aus"`), ANY change
 * is significant — the former `NaN >= 1` comparison silently swallowed those
 * forever.
 */
export function isSignificantBackendChange(
    prevValue: string | number | boolean | undefined | null,
    currentValue: string | number | boolean | undefined | null,
): boolean {
    const prevStr = String(prevValue ?? '');
    const currStr = String(currentValue ?? '');

    if (prevStr === currStr) {
        return false;
    }

    const prevNum = Number(prevValue ?? 0);
    const currNum = Number(currentValue ?? 0);

    if (!Number.isFinite(prevNum) || !Number.isFinite(currNum)) {
        return true;
    }

    return Math.abs(prevNum - currNum) >= 1;
}

/** Observed backend snapshot the significance decision runs over. */
export interface BackendChangeState {
    /** Last observed `lc` of the bound state (`undefined` until the first observation). */
    lc: number | undefined;
    /** Last observed raw value. */
    value: string | number | boolean | undefined | null;
}

/** Result of {@link decideBackendChange}: both flags plus the state to carry forward. */
export interface BackendChangeDecision {
    /**
     * Fremdänderung (CONTEXT): another party changed the state — neither the own write
     * (sentinel), nor its echo (ignore window), nor the first observation; the `lc` moved.
     * No value filter (ADR-0087 addendum 2026-11-02).
     */
    foreign: boolean;
    /**
     * Signifikante Backend-Änderung (CONTEXT): a {@link BackendChangeDecision.foreign} change
     * that also passes {@link isSignificantBackendChange} (the numeric jitter filter, ADR-0087).
     */
    significant: boolean;
    /** State to remember for the next decision. */
    next: BackendChangeState;
}

/**
 * Pure significance decision over one observed backend snapshot.
 *
 * @param prev - Previously observed state (the last decision's `next`).
 * @param current - The observation landing this render (`lc` + raw value).
 * @param current.lc - Last-change timestamp of the observed state.
 * @param current.value - Raw value of the observed state.
 * @param inIgnoreWindow - Whether the ignore window of an own write is open (its echo is absorbed).
 * @returns The decision plus the state to remember.
 * @remarks
 * Precedence (first match wins):
 * 1. own optimistic write (`lc` = the {@link VALUE_NOT_CHANGED_TIMESTAMP} sentinel) → neither flag
 * 2. inside the ignore window → neither flag (the own write's backend echo)
 * 3. first observation (`prev.lc === undefined`) → neither flag (initialisation)
 * 4. otherwise `foreign` iff `lc` changed (Fremdänderung); `significant` iff `foreign` AND the
 *    value change is significant ({@link isSignificantBackendChange}) — ADR-0087 addendum
 *    2026-11-02: the second output of the same decision, not a second decision.
 */
export function decideBackendChange(
    prev: BackendChangeState,
    current: { lc: number | undefined; value: string | number | boolean | undefined | null },
    inIgnoreWindow: boolean,
): BackendChangeDecision {
    if (current.lc === VALUE_NOT_CHANGED_TIMESTAMP) {
        return {
            foreign: false,
            significant: false,
            next: { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: current.value },
        };
    }

    const next: BackendChangeState = { lc: current.lc, value: current.value };

    if (inIgnoreWindow || prev.lc === undefined) {
        return { foreign: false, significant: false, next };
    }

    const foreign = prev.lc !== current.lc;

    return { foreign, significant: foreign && isSignificantBackendChange(prev.value, current.value), next };
}

/** The snapshot the hook last decided over, the state carried forward and the decision. */
interface Observation {
    oid: string | undefined;
    lc: unknown;
    value: unknown;
    next: BackendChangeState;
    foreign: boolean;
    significant: boolean;
}

/** Nothing observed yet: the first observation of a bound OID initialises without a flag. */
const UNOBSERVED: Observation = {
    oid: undefined,
    lc: undefined,
    value: undefined,
    next: { lc: undefined, value: undefined },
    foreign: false,
    significant: false,
};

/** Options of {@link UseValueStateReturn.updateValue}. */
export interface UpdateValueOptions {
    /**
     * Send past the debounce: the value goes to `context.setValue` at once and a waiting value is
     * dropped. The optimistic patch and the ignore window stay, so the echo is no Fremdänderung
     * (ADR-0087). A debounce would swallow the press value of a short Taster-Betätigung.
     */
    immediate?: boolean;
}

/**
 * Return type for {@link module:hooks/useValueState.default}.
 */
export interface UseValueStateReturn {
    /** Current (optimistic) value for the configured OID. */
    value: string | number | boolean | undefined | null;

    /**
     * Signifikante Backend-Änderung (CONTEXT): the last observation was a Fremdänderung that
     * passes the numeric jitter filter (delta ≥ 1 while both sides are numeric, ADR-0087).
     * A state, not an event — it stays true until the next observation decides otherwise.
     */
    hasBackendChange: boolean;

    /**
     * Fremdänderung (CONTEXT): the last observation was a change by another party, of ANY size
     * (ADR-0087 addendum 2026-11-02). The Slider syncs on this; Input and Light2 keep
     * {@link UseValueStateReturn.hasBackendChange}. A state, not an event, like that flag.
     */
    hasForeignChange: boolean;

    /**
     * Sperre (CONTEXT): the control must be disabled — the widget is display-only
     * (`onlyDisplay`) or the BOUND object is not writable (`write === false`).
     * Deliberately wider than the {@link UseValueStateReturn.updateValue} guard.
     */
    locked: boolean;

    /**
     * Updates the local widget value and writes it to the backend, behind the debounce by default.
     *
     * @param value - New value (string/number/boolean). `null` is intentionally not supported.
     * @param options - See {@link UpdateValueOptions}.
     */
    updateValue: (value: string | number | boolean, options?: UpdateValueOptions) => void;
}

/**
 * Manages a value associated with an OID, including conversion and debounced writes.
 *
 * @param idName - Name of the OID property (e.g. `"oid"`, `"oid1"`, `"oid2"`).
 * @returns An object containing the current value, both backend-change flags, the Sperre
 * (`locked`) and an update function.
 * @example
 * ```tsx
 * const { value, updateValue, hasBackendChange } = useValueState('oid');
 *
 * return (
 *   <TextField
 *     value={String(value ?? '')}
 *     error={hasBackendChange}
 *     onChange={e => updateValue(e.target.value)}
 *   />
 * );
 * ```
 * @remarks
 * Delay configuration is read from `DelayFieldsRxData` when available. A missing or non-numeric
 * delay/interval writes with the field defaults — 300 ms debounce, 200 ms throttle (see
 * {@link module:hooks/useDebounce}); an explicit `0` writes at once. The echo-ignore window
 * spans `Number(delay) || 300` (a configured `0` still yields 300) plus 1500 ms.
 */
const useValueState = (idName: string): UseValueStateReturn => {
    const { setState, setValue, widget, getPropertyValue, values } = useContext(CollectionContext);

    const oidObject = widget.data[`${idName}Object` as keyof CommonObjectFieldsRxData] as OidObject | undefined;

    const value = getPropertyValue(idName);

    // Sperre: decided against the object actually bound, not the root `write` copy.
    const onlyDisplay = (widget.data as Partial<CommonObjectFieldsRxData>).onlyDisplay;
    const objectWrite = oidObject?.write;
    const locked = useMemo(() => isOidReadOnly({ onlyDisplay, write: objectWrite }), [onlyDisplay, objectWrite]);

    // The ignore window of the own write: open from the write until a timer closes it.
    const [inIgnoreWindow, setInIgnoreWindow] = useState(false);
    const ignoreTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    useEffect(() => () => clearTimeout(ignoreTimerRef.current), []);

    // Echo-ignore window only — the write itself debounces in useDebounce.
    const delay = Number((widget.data as Partial<DelayFieldsRxData>).delay) || DEFAULT_WRITE_DELAY_MS;

    const currentLc = oidObject?._id ? values[`${oidObject._id}.lc`] : undefined;
    const currentValue = oidObject?._id ? values[`${oidObject._id}.val`] : undefined;

    // The last observed snapshot and its decision. A changed snapshot is decided while rendering;
    // without a bound OID nothing is decided and the remembered state stays.
    const oid = oidObject?._id;
    const [observation, setObservation] = useState<Observation>(UNOBSERVED);
    let { foreign: hasForeignChange, significant: hasBackendChange } = observation;
    if (
        !Object.is(observation.oid, oid) ||
        !Object.is(observation.lc, currentLc) ||
        !Object.is(observation.value, currentValue)
    ) {
        let { next } = observation;
        hasForeignChange = false;
        hasBackendChange = false;
        if (oid) {
            const decision = decideBackendChange(next, { lc: currentLc, value: currentValue }, inIgnoreWindow);
            next = decision.next;
            hasForeignChange = decision.foreign;
            hasBackendChange = decision.significant;
        }
        setObservation({
            oid,
            lc: currentLc,
            value: currentValue,
            next,
            foreign: hasForeignChange,
            significant: hasBackendChange,
        });
    }

    const debounce = useDebounce({
        oidObject,
        data: {
            delay: (widget.data as Partial<DelayFieldsRxData>).delay,
            sampleInterval: (widget.data as Partial<DelayFieldsRxData>).sampleInterval,
            sampleIntervalValue: (widget.data as Partial<DelayFieldsRxData>).sampleIntervalValue,
        },
    });
    const updateValue = useCallback(
        (value: string | number | boolean, options?: UpdateValueOptions): void => {
            if (!oidObject?._id) {
                return;
            }

            // Never write to a read-only state, even if a widget forgets the UI guard
            // (lenient: only an explicit common.write === false blocks).
            // The Sperre (`locked`, CONTEXT "Sperre") is deliberately WIDER than this
            // guard: Light2's Hilfs-OIDs can carry a leaked `onlyDisplay` (ADR-0096,
            // no heal) — a guard on `onlyDisplay` would stop their writes.
            if (oidObject?.write === false) {
                return;
            }

            const processedValue = convertToOidType(value, oidObject?.type);

            if (processedValue === undefined || processedValue === null) {
                return;
            }

            setState((prevState: VisRxWidgetState) => ({
                values: {
                    ...prevState.values,
                    [`${oidObject._id}.val`]: processedValue,
                    [`${oidObject._id}.lc`]: VALUE_NOT_CHANGED_TIMESTAMP,
                },
            }));

            clearTimeout(ignoreTimerRef.current);
            setInIgnoreWindow(true);
            ignoreTimerRef.current = setTimeout(() => setInIgnoreWindow(false), delay + 1500);
            setObservation(prev => ({
                ...prev,
                next: { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: processedValue },
            }));

            if (options?.immediate) {
                debounce?.cancel();
                setValue(oidObject._id, processedValue);
                return;
            }

            if (debounce) {
                debounce.next(processedValue);
            }
        },
        [delay, debounce, oidObject, setState, setValue],
    );

    return {
        value,
        hasBackendChange,
        hasForeignChange,
        locked,
        updateValue,
    };
};

export default useValueState;
