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
 */

import { useCallback, useContext, useMemo, useRef } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import isNumber from '../lib/helper/isNumber';
import useData from './useData';
import useDebounce from './useDebounce';
import type { OidObject, OidType, CommonObjectFieldsRxData, DelayFieldsRxData } from '../types';
import { type VisRxWidgetState } from '@iobroker/types-vis-2';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';

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
function convertToOidType(
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
 * For numeric-like values, a delta of at least 1 is treated as significant.
 */
function isSignificantBackendChange(
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

    return Math.abs(prevNum - currNum) >= 1;
}

/**
 * Return type for {@link module:hooks/useValueState.default}.
 */
interface UseValueStateReturn {
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
 * Delay configuration is read from `DelayFieldsRxData` when available.
 * Widgets that don't expose delay fields effectively fall back to a default delay of 300ms.
 */
const useValueState = (idName: string): UseValueStateReturn => {
    const { setState, widget, getPropertyValue, values } = useContext(CollectionContext);
    const { data } = useData('oid');

    const oidObject = widget.data[`${idName}Object` as keyof CommonObjectFieldsRxData] as OidObject | undefined;

    const value = getPropertyValue(idName);
    const prevStateRef = useRef<{
        lc: number | undefined;
        value: string | number | boolean | undefined | null;
    }>({ lc: undefined, value: undefined });
    const ignoreUntilRef = useRef<number>(0);

    const delay =
        Number((data as Partial<DelayFieldsRxData>).delay ?? (widget.data as Partial<DelayFieldsRxData>).delay) || 300;

    const currentLc = oidObject?._id ? values[`${oidObject._id}.lc`] : undefined;
    const currentValue = oidObject?._id ? values[`${oidObject._id}.val`] : undefined;

    const hasBackendChange = useMemo(() => {
        if (!oidObject?._id) {
            return false;
        }

        if (currentLc === VALUE_NOT_CHANGED_TIMESTAMP) {
            prevStateRef.current = { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: currentValue };
            return false;
        }

        if (Date.now() < ignoreUntilRef.current) {
            prevStateRef.current = { lc: currentLc, value: currentValue };
            return false;
        }

        if (prevStateRef.current.lc === undefined) {
            prevStateRef.current = { lc: currentLc, value: currentValue };
            return false;
        }

        const lcChanged = prevStateRef.current.lc !== currentLc;
        const significantChange = isSignificantBackendChange(prevStateRef.current.value, currentValue);

        prevStateRef.current = { lc: currentLc, value: currentValue };

        return lcChanged && significantChange;
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
