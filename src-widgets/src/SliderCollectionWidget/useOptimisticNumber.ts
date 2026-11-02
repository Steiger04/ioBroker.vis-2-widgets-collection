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

import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { CollectionContext } from '../components/CollectionProvider';
import useValueState from '../hooks/useValueState';
import type { CommonObjectFieldsRxData } from '../types';

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
 * Backend case: a Fremdänderung (CONTEXT; outside the ignore window, any size) wins.
 *
 * @param oidValue - Current optimistic backend value.
 * @returns The number, or `undefined` for a non-numeric value — which
 * dismantles the slider (the render gate keeps rendering nothing).
 */
export function adoptBackendValue(oidValue: OidValue): number | undefined {
    return typeof oidValue === 'number' ? oidValue : undefined;
}

/**
 * Rebind case: a changed OID binding drops the local value for the new OID's value.
 *
 * @param local - Current local (optimistic) value.
 * @param oidValue - Current optimistic backend value — already the new OID's.
 * @param prevOid - The OID bound at the previous run (`widget.data[idName]`).
 * @param oid - The OID bound now.
 * @returns The local value while the binding is unchanged; otherwise the new OID's number, or
 * `undefined` until it has one (the Init case adopts it then).
 * @remarks
 * Deterministic on purpose (ADR-0087 addendum 2026-11-02): it does not consult the old OID's
 * ignore window, so a rebind right after a write on the old OID still lands on the new value.
 */
export function rebindLocalValue(
    local: number | undefined,
    oidValue: OidValue,
    prevOid: unknown,
    oid: unknown,
): number | undefined {
    return prevOid === oid ? local : initLocalValue(undefined, oidValue);
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
 *    `useValueState`'s ignore window absorbs it, so only `hasForeignChange` (a
 *    Fremdänderung, CONTEXT — outside the window, of ANY size) overwrites the local
 *    value. Deliberately not `hasBackendChange` (Signifikante Backend-Änderung): its
 *    jitter filter (delta ≥ 1) would freeze a 0–1 dimmer (ADR-0087 addendum 2026-11-02).
 * 3. **Non-numeric** — such a Fremdänderung to a non-numeric value yields
 *    `undefined` and thereby dismantles the slider ({@link adoptBackendValue}),
 *    matching the render gate `typeof value === 'number'` in the component.
 * 4. **Rebind** — a changed binding (`widget.data[idName]`, the source of the backend
 *    value — not `oidObject._id`, which the editor fills later) drops the local value
 *    for the new OID's ({@link rebindLocalValue}), regardless of the old OID's window.
 */
const useOptimisticNumber = (idName: string): UseOptimisticNumberReturn => {
    const { value: oidValue, updateValue, hasForeignChange, locked } = useValueState(idName);
    const { widget } = useContext(CollectionContext);

    // The binding key: getPropertyValue reads rxData[idName], so this is what the value follows.
    const boundOid: unknown = widget.data[idName as keyof CommonObjectFieldsRxData];
    const boundOidRef = useRef(boundOid);

    const [localValue, setLocalValue] = useState<number | undefined>(initLocalValue(undefined, oidValue));

    // Init: adopt the backend value while there is nothing local yet.
    useEffect(() => {
        setLocalValue(prev => initLocalValue(prev, oidValue));
    }, [oidValue]);

    // Echo/backend: a Fremdänderung (any size) outside the ignore window wins;
    // a non-numeric value dismantles the control.
    useEffect(() => {
        if (!hasForeignChange) {
            return;
        }

        setLocalValue(adoptBackendValue(oidValue));
    }, [hasForeignChange, oidValue]);

    // Rebind: a new OID binding replaces the local value with the new OID's.
    useEffect(() => {
        const prevOid = boundOidRef.current;
        boundOidRef.current = boundOid;
        // An unchanged binding returns `prev` — React bails out of the update.
        setLocalValue(prev => rebindLocalValue(prev, oidValue, prevOid, boundOid));
    }, [boundOid, oidValue]);

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
