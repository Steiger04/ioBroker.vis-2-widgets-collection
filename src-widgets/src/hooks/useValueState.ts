/**
 * Hook for local value state management with type conversion and debounced backend writes.
 *
 * @module hooks/useValueState
 * @remarks
 * This hook is used by multiple widgets to keep a local “optimistic” value in sync with ioBroker state.
 * It supports:
 * - type-aware conversion via the configured `OidObject.type`
 * - throttled/debounced writes via {@link module:hooks/useDebounce}
 * - a short “ignore window” to avoid immediately re-applying backend echoes while the user is interacting
 *
 * The decision logic is exported as pure transitions ({@link convertToOidType},
 * {@link isSignificantBackendChange}, {@link decideBackendChange} — the useOptimisticNumber /
 * useEditorHistory pattern) so the echo/significance contract is testable without React.
 * The hook itself is a thin shell: context reads, the ref carrying the last decision's
 * `next` state, and the debounced write wiring.
 */

import { useCallback, useContext, useMemo, useRef } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
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

/** Result of {@link decideBackendChange}: the flag plus the state to carry forward. */
export interface BackendChangeDecision {
    /** Whether this observation counts as a significant foreign backend change. */
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
 * @param ignoreUntil - Timestamp (ms) until which changes are absorbed as own-write echoes.
 * @param now - Current time (ms); injected so tests control the clock.
 * @returns The decision plus the state to remember.
 * @remarks
 * Precedence (first match wins):
 * 1. own optimistic write (`lc` = the {@link VALUE_NOT_CHANGED_TIMESTAMP} sentinel) → never significant
 * 2. inside the ignore window → not significant (the own write's backend echo)
 * 3. first observation (`prev.lc === undefined`) → not significant (initialisation)
 * 4. otherwise significant iff `lc` changed AND the value change is significant
 *    ({@link isSignificantBackendChange})
 */
export function decideBackendChange(
    prev: BackendChangeState,
    current: { lc: number | undefined; value: string | number | boolean | undefined | null },
    ignoreUntil: number,
    now: number,
): BackendChangeDecision {
    if (current.lc === VALUE_NOT_CHANGED_TIMESTAMP) {
        return { significant: false, next: { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: current.value } };
    }

    const next: BackendChangeState = { lc: current.lc, value: current.value };

    if (now < ignoreUntil) {
        return { significant: false, next };
    }

    if (prev.lc === undefined) {
        return { significant: false, next };
    }

    return { significant: prev.lc !== current.lc && isSignificantBackendChange(prev.value, current.value), next };
}

/**
 * Return type for {@link module:hooks/useValueState.default}.
 */
export interface UseValueStateReturn {
    /** Current (optimistic) value for the configured OID. */
    value: string | number | boolean | undefined | null;

    /** Indicates the backend value has changed since last local update. */
    hasBackendChange: boolean;

    /**
     * Updates the local widget value and (optionally) schedules a backend write.
     *
     * @param value - New value (string/number/boolean). `null` is intentionally not supported.
     * @param skipBackendWrite - When `true`, only the local state is updated.
     */
    updateValue: (value: string | number | boolean, skipBackendWrite?: boolean) => void;
}

/**
 * Manages a value associated with an OID, including conversion and debounced writes.
 *
 * @param idName - Name of the OID property (e.g. `"oid"`, `"oid1"`, `"oid2"`).
 * @returns An object containing the current value, backend-change flag, and an update function.
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
    const { setState, widget, getPropertyValue, values } = useContext(CollectionContext);

    const oidObject = widget.data[`${idName}Object` as keyof CommonObjectFieldsRxData] as OidObject | undefined;

    const value = getPropertyValue(idName);
    const prevStateRef = useRef<{
        lc: number | undefined;
        value: string | number | boolean | undefined | null;
    }>({ lc: undefined, value: undefined });
    const ignoreUntilRef = useRef<number>(0);

    // Echo-ignore window only — the write itself debounces in useDebounce.
    const delay = Number((widget.data as Partial<DelayFieldsRxData>).delay) || DEFAULT_WRITE_DELAY_MS;

    const currentLc = oidObject?._id ? values[`${oidObject._id}.lc`] : undefined;
    const currentValue = oidObject?._id ? values[`${oidObject._id}.val`] : undefined;

    const hasBackendChange = useMemo(() => {
        if (!oidObject?._id) {
            return false;
        }

        const decision = decideBackendChange(
            prevStateRef.current,
            { lc: currentLc, value: currentValue },
            ignoreUntilRef.current,
            Date.now(),
        );

        prevStateRef.current = decision.next;

        return decision.significant;
    }, [oidObject?._id, currentLc, currentValue]);

    const debounce = useDebounce({
        oidObject,
        data: {
            delay: (widget.data as Partial<DelayFieldsRxData>).delay,
            sampleInterval: (widget.data as Partial<DelayFieldsRxData>).sampleInterval,
            sampleIntervalValue: (widget.data as Partial<DelayFieldsRxData>).sampleIntervalValue,
        },
    });
    const updateValue = useCallback(
        (value: string | number | boolean, skipBackendWrite = false): void => {
            if (!oidObject?._id) {
                return;
            }

            // Never write to a read-only state, even if a widget forgets the UI guard
            // (lenient: only an explicit common.write === false blocks).
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

            ignoreUntilRef.current = Date.now() + delay + 1500;
            prevStateRef.current = {
                lc: VALUE_NOT_CHANGED_TIMESTAMP,
                value: processedValue,
            };

            if (skipBackendWrite) {
                return;
            }

            if (debounce) {
                debounce.next(processedValue);
            }
        },
        [delay, debounce, oidObject, setState],
    );

    return {
        value,
        hasBackendChange,
        updateValue,
    };
};

export default useValueState;
