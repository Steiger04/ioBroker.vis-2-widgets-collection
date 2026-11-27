/**
 * Writing one Thermostat-Bedeutung through the Collection's write chain (ADR-0120, Nachtrag „Stage 1
 * writes one state per action“; guard rail „Ein Sollwert-Geber“).
 *
 * @module lib/heating/useMeaningWrite
 * @remarks
 * A thin seam over `useValueState`: the write stays optimistic and debounced (or immediate on
 * request) and never reaches a state whose object says `write: false`. On top it answers whether
 * the Bedeutung is a writable target at all — bound, its stored object (`<field>Object`, from the
 * pick or the Lese-Naht) belongs to the bound id, the object does not forbid writing and the widget
 * is no display-only widget. Controls that write a Bedeutung show only while it is writable, and a
 * write to a target that is not is dropped here, so no action reaches a data point it must not.
 * One call writes exactly one state.
 */
import { useCallback, useContext } from 'react';

import { CollectionContext } from '../../components/CollectionProvider';
import useValueState, { type UpdateValueOptions } from '../../hooks/useValueState';
import { meaningKeys, type MeaningField } from './meaningCatalog';
import { boundIdOf } from './meaningReading';
import type { DeviceValue } from './valueMapping';

import type { WidgetData } from '@iobroker/types-vis-2';

/** How one Bedeutung is written. */
export interface MeaningWrite {
    /** The Bedeutung is a writable target: controls writing it may show. */
    readonly writable: boolean;
    /**
     * Writes one value into the Bedeutung's data point; nothing while it is not writable.
     *
     * @param value - The device value.
     * @param options - `immediate` writes past the debounce (one discrete action).
     */
    readonly write: (value: DeviceValue, options?: UpdateValueOptions) => void;
}

/**
 * Whether a Bedeutung's stored object belongs to its bound id and allows writing.
 *
 * @param data - The widget data as the widget reads it.
 * @param field - The Bedeutung.
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns `true` while the object of the bound id does not forbid writing.
 */
export function isWritableMeaning(data: WidgetData, field: MeaningField, entry?: number): boolean {
    const keys = meaningKeys(field, entry);
    const id = boundIdOf(data, keys.field);
    const object = data[keys.object] as { _id?: unknown; write?: unknown } | undefined;
    return id !== undefined && object?._id === id && object.write !== false;
}

/**
 * The write of one Bedeutung.
 *
 * @param field - The Bedeutung.
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns Whether it is writable and the write.
 */
export function useMeaningWrite(field: MeaningField, entry?: number): MeaningWrite {
    const {
        widget: { data },
    } = useContext(CollectionContext);
    const { locked, updateValue } = useValueState(meaningKeys(field, entry).field);
    const writable = !locked && isWritableMeaning(data as WidgetData, field, entry);

    const write = useCallback(
        (value: DeviceValue, options?: UpdateValueOptions): void => {
            if (writable) {
                updateValue(value, options);
            }
        },
        [writable, updateValue],
    );

    return { writable, write };
}
