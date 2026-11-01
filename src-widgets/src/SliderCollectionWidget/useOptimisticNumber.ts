/**
 * Optimistic number binding for the Slider collection widget.
 *
 * @module widgets/SliderCollectionWidget/useOptimisticNumber
 * @remarks
 * One truth for the MUI controlled slider: the optimistic backend value from
 * {@link module:hooks/useValueState} plus a thin local copy that absorbs the
 * sync cases. The transitions are pure and exported for tests (the
 * useEditorHistory pattern); the hook itself is a thin React shell around
 * them.
 */

import { useCallback, useEffect, useState } from 'react';

import useValueState from '../hooks/useValueState';

/** Value shape delivered by the optimistic backend binding. */
export type OidValue = string | number | boolean | undefined | null;

/**
 * Init case: adopt the backend value only while there is no local one.
 *
 * @param local - Current local (optimistic) value; `undefined` when unset.
 * @param oidValue - Current optimistic backend value.
 * @returns The new local value (the old one when the case does not apply).
 */
export function initLocalValue(local: number | undefined, oidValue: OidValue): number | undefined {
    return local === undefined && typeof oidValue === 'number' ? oidValue : local;
}

/**
 * Backend case: a significant backend change (outside the ignore window) wins.
 *
 * @param oidValue - Current optimistic backend value.
 * @returns The number, or `undefined` for a non-numeric value — which
 * dismantles the slider (the render gate keeps rendering nothing).
 */
export function adoptBackendValue(oidValue: OidValue): number | undefined {
    return typeof oidValue === 'number' ? oidValue : undefined;
}

/** Return type for {@link useOptimisticNumber}. */
export interface UseOptimisticNumberReturn {
    /** Optimistic backend value (marks, CollectionBase) — may be non-numeric. */
    backendValue: OidValue;
    /** Current value for the controlled slider (`undefined` = no numeric state). */
    value: number | undefined;
    /** Sets the local value AND schedules the debounced backend write. */
    setValue: (value: number) => void;
    /** Sperre of the OID binding (CONTEXT "Sperre"): the slider must be disabled. */
    locked: boolean;
}

/**
 * Binds a slider-style control optimistically to an ioBroker number state.
 *
 * @param idName - Name of the OID property (e.g. `"oid"`).
 * @returns The backend value, the controlled slider value, the combined setter and the
 * binding's Sperre (`locked`).
 * @remarks
 * The sync cases, in the order their effects run:
 * 1. **Init** — while no local value exists, backend numbers are adopted
 *    ({@link initLocalValue}).
 * 2. **Echo** — the debounced own write echoes back through the backend value;
 *    `useValueState`'s ignore window absorbs it, so only `hasBackendChange` (a
 *    significant foreign change outside the window) overwrites the local value.
 * 3. **Non-numeric** — such a significant change to a non-numeric value yields
 *    `undefined` and thereby dismantles the slider ({@link adoptBackendValue}),
 *    matching the render gate `typeof value === 'number'` in the component.
 */
const useOptimisticNumber = (idName: string): UseOptimisticNumberReturn => {
    const { value: oidValue, updateValue, hasBackendChange, locked } = useValueState(idName);

    const [localValue, setLocalValue] = useState<number | undefined>(initLocalValue(undefined, oidValue));

    // Init: adopt the backend value while there is nothing local yet.
    useEffect(() => {
        setLocalValue(prev => initLocalValue(prev, oidValue));
    }, [oidValue]);

    // Echo/backend: a significant change outside the ignore window wins;
    // a non-numeric value dismantles the control.
    useEffect(() => {
        if (!hasBackendChange) {
            return;
        }

        setLocalValue(adoptBackendValue(oidValue));
    }, [hasBackendChange, oidValue]);

    const setValue = useCallback(
        (value: number): void => {
            setLocalValue(value);
            updateValue(value);
        },
        [updateValue],
    );

    return { backendValue: oidValue, value: localValue, setValue, locked };
};

export default useOptimisticNumber;
