/**
 * Writing one Thermostat-Bedeutung through the Collection's write chain (ADR-0120, Nachtrag „Stage 1
 * writes one state per action“; guard rail „Ein Sollwert-Geber“).
 *
 * @module lib/heating/useMeaningWrite
 * @remarks
 * A thin seam over `useValueState`: the write stays optimistic and debounced (or immediate on
 * request), and `useValueState`'s guard never lets it reach a state whose object says
 * `write: false`. Whether the Bedeutung may be written at all is the Heizzonen-Lesung's answer
 * (`MeaningReading.writable`): controls that write a Bedeutung show only while it is writable, and
 * a write to a target that is not is dropped here, so no action reaches a data point it must not.
 * One call writes exactly one state.
 */
import { useCallback } from 'react';

import useValueState, { type UpdateValueOptions } from '../../hooks/useValueState';
import type { DeviceValue } from './valueMapping';
import type { MeaningReading } from './zoneReading';

/**
 * Writes one value into a Bedeutung's data point; nothing while it is not writable.
 *
 * @param value - The device value.
 * @param options - `immediate` writes past the debounce (one discrete action).
 */
export type MeaningWrite = (value: DeviceValue, options?: UpdateValueOptions) => void;

/**
 * The write of one Bedeutung.
 *
 * @param reading - The Bedeutung as the Heizzonen-Lesung reads it.
 * @returns The write.
 */
export function useMeaningWrite(reading: Pick<MeaningReading, 'idKey' | 'writable'>): MeaningWrite {
    const { updateValue } = useValueState(reading.idKey);
    const { writable } = reading;

    return useCallback(
        (value: DeviceValue, options?: UpdateValueOptions): void => {
            if (writable) {
                updateValue(value, options);
            }
        },
        [writable, updateValue],
    );
}
