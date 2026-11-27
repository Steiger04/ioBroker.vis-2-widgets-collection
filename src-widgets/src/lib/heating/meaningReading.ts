/**
 * Reading a Thermostat-Bedeutung at runtime: bound or not, and whether its data point has reported a
 * value (ADR-0119, ADR-0120; stage-1 spec „Noch nicht gemeldet“, guard rail „Gemeldet statt
 * behauptet“).
 *
 * @module lib/heating/meaningReading
 * @remarks
 * The values map is the host's: per subscribed id `<id>.val`, `.ack`, `.ts`, `.lc` and `.q`. A
 * data point has not reported yet when its quality says so (`q = 0x20`, the device's substitute
 * value, as a HomeMatic device holds it until its first report) — never judged by the value itself.
 * A data point without a value has no `<id>.val`, or the host's placeholder for a state without a
 * value (`val = 'null'` with `q = 0`). There is no age and no threshold for stale values: after a
 * restart the last reported value stands. No other widget reads `q` today, so the check lives
 * with the heating building blocks.
 *
 * The Wertezuordnung is read n:1 — several device values may map to one neutral value (window
 * OPEN and TILTED → `offen`); a device value without a mapping gives no neutral value, and the
 * display then names the `commonStates` label, else the raw value.
 */
import { meaningKeys, MEANINGS, VALVE_LIST, type MeaningField, type NeutralKey } from './meaningCatalog';
import { readValueMapping, type DeviceValue, type ValueMapping } from './valueMapping';
import { valveCountOf } from './valveListShape';

import type { OidObjectMeta } from '../../types';
import type { VisRxWidgetStateValues, WidgetData } from '@iobroker/types-vis-2';

/** The quality of a substitute value from the device: the data point has not reported yet. */
export const NOT_YET_REPORTED_QUALITY = 0x20;

/** What the widget knows about one Bedeutung's data point. */
export type MeaningReading =
    /** No data point is bound: the element is left out. */
    | { readonly kind: 'unbound' }
    /** Bound, but the data point has no value (none in the values map, or the host's placeholder). */
    | { readonly kind: 'noValue'; readonly id: string }
    /** Bound, the data point holds the device's substitute value (`q = 0x20`). */
    | { readonly kind: 'notReported'; readonly id: string }
    /** Bound and reported: the value and when it last changed. */
    | {
          readonly kind: 'reported';
          readonly id: string;
          readonly value: DeviceValue;
          /** `<id>.lc` — when the value last changed, if the host knows. */
          readonly lc: number | undefined;
      };

/** The values map of the host. */
export type StateValues = VisRxWidgetStateValues;

/**
 * The data point an id field binds.
 *
 * @param data - The widget data.
 * @param key - The id field's stored key.
 * @returns The id; `undefined` for an empty field or vis-2's `nothing_selected`.
 */
export function boundIdOf(data: WidgetData, key: string): string | undefined {
    const id: unknown = data[key];
    return typeof id === 'string' && id !== '' && id !== 'nothing_selected' ? id : undefined;
}

/**
 * A Bedeutung's stored object (`<field>Object`, the pick's copy {@link OidObjectMeta}) as far as its
 * keys hold their stored type: the widget data may hold anything (an older or a hand-edited
 * object), so a key of another type reads as missing.
 */
export type StoredMeaningObject = Partial<
    Pick<OidObjectMeta, '_id' | 'unit' | 'write' | 'minValue' | 'maxValue' | 'step' | 'commonStates'>
> & {
    /** The data type of the state, as stored. */
    readonly type?: string;
};

const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const isFilledText = (value: unknown): value is string => typeof value === 'string' && value !== '';

/**
 * Reads a Bedeutung's stored object.
 *
 * @param data - The widget data as the widget reads it.
 * @param field - The Bedeutung.
 * @param entry - The entry number of a list entry (ADR-0121); none for the unnumbered binding.
 * @returns Its keys of the stored type: `_id`, `type` and `unit` as non-empty text, `write` as a
 *   boolean, `minValue`/`maxValue`/`step` as finite numbers, `commonStates` as an object or a
 *   list; `{}` without an object.
 */
export function storedObjectOf(data: WidgetData, field: MeaningField, entry?: number): StoredMeaningObject {
    const object: unknown = data[meaningKeys(field, entry).object];
    if (!object || typeof object !== 'object') {
        return {};
    }
    const { _id, type, unit, write, minValue, maxValue, step, commonStates } = object as Record<string, unknown>;
    return {
        ...(isFilledText(_id) ? { _id } : {}),
        ...(isFilledText(type) ? { type } : {}),
        ...(isFilledText(unit) ? { unit } : {}),
        ...(typeof write === 'boolean' ? { write } : {}),
        ...(isFiniteNumber(minValue) ? { minValue } : {}),
        ...(isFiniteNumber(maxValue) ? { maxValue } : {}),
        ...(isFiniteNumber(step) ? { step } : {}),
        ...(commonStates && typeof commonStates === 'object'
            ? { commonStates: commonStates as OidObjectMeta['commonStates'] }
            : {}),
    };
}

/**
 * Reads a Bedeutung's stored Wertezuordnung as far as it fits the Bedeutung's shape.
 *
 * @param data - The widget data as the widget reads it (with the Lese-Naht's mappings).
 * @param field - The Bedeutung.
 * @param entry - The entry number of a list entry (ADR-0121); none for the unnumbered binding.
 * @returns The usable mapping; `undefined` for a Bedeutung without fixed values or without a usable
 *   mapping.
 */
export function storedMappingOf(data: WidgetData, field: MeaningField, entry?: number): ValueMapping | undefined {
    const shape = MEANINGS[field].mapping;
    return shape ? readValueMapping(data[meaningKeys(field, entry).mapping], shape) : undefined;
}

/**
 * Reads what a bound data point has reported.
 *
 * @param values - The host's values map.
 * @param id - The bound data point.
 * @returns `noValue`, `notReported` or `reported` with the value.
 */
export function readDataPoint(values: StateValues, id: string): Exclude<MeaningReading, { kind: 'unbound' }> {
    const value: unknown = values[`${id}.val`];
    const quality: unknown = values[`${id}.q`];
    if (quality === NOT_YET_REPORTED_QUALITY) {
        return { kind: 'notReported', id };
    }
    if (value === undefined || value === null || (value === 'null' && (quality ?? 0) === 0)) {
        return { kind: 'noValue', id };
    }
    if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
        return { kind: 'noValue', id };
    }
    const lc: unknown = values[`${id}.lc`];
    return { kind: 'reported', id, value, lc: typeof lc === 'number' ? lc : undefined };
}

/**
 * Reads one Bedeutung of the widget.
 *
 * @param data - The widget data.
 * @param values - The host's values map.
 * @param field - The Bedeutung.
 * @param entry - The entry number of a list entry (ADR-0121); none for the unnumbered binding.
 * @returns What the widget knows about it.
 */
export function readMeaning(
    data: WidgetData,
    values: StateValues,
    field: MeaningField,
    entry?: number,
): MeaningReading {
    const id = boundIdOf(data, meaningKeys(field, entry).field);
    return id === undefined ? { kind: 'unbound' } : readDataPoint(values, id);
}

/**
 * The valve level of the room: the mean of all bound valves that have reported a value.
 *
 * @param data - The widget data (`ventil1…ventilN`, counted by `ventilAnzahl`).
 * @param values - The host's values map.
 * @returns `undefined` without a bound valve; `null` while no bound valve has reported a number;
 *   else the mean.
 */
export function valveMeanOf(data: WidgetData, values: StateValues): number | null | undefined {
    const levels: number[] = [];
    let bound = 0;
    for (let m = 1; m <= valveCountOf(data); m++) {
        const id = boundIdOf(data, `${VALVE_LIST.field}${m}`);
        if (id === undefined) {
            continue;
        }
        bound++;
        const reading = readDataPoint(values, id);
        if (reading.kind === 'reported' && typeof reading.value === 'number' && Number.isFinite(reading.value)) {
            levels.push(reading.value);
        }
    }
    if (bound === 0) {
        return undefined;
    }
    return levels.length ? levels.reduce((sum, level) => sum + level, 0) / levels.length : null;
}

/**
 * The neutral value a device value maps to (n:1).
 *
 * @param mapping - The Bedeutung's mapping; `undefined` for none.
 * @param keys - The neutral keys of the Bedeutung, in catalogue order (the first that lists the
 *   value wins).
 * @param value - The reported device value.
 * @returns The neutral value; `undefined` when no neutral value lists the device value.
 */
export function neutralValueOf(
    mapping: ValueMapping | undefined,
    keys: readonly NeutralKey[],
    value: DeviceValue,
): NeutralKey | undefined {
    if (!mapping) {
        return undefined;
    }
    // Compared as text: a mapping typed in without the object stores text, the data point may report a number.
    return keys.find(key => mapping[key]?.some(deviceValue => String(deviceValue) === String(value)));
}

/**
 * The neutral value a Bedeutung's reported value maps to through its stored Wertezuordnung.
 *
 * @param data - The widget data.
 * @param reading - What the widget knows about the Bedeutung ({@link readMeaning}).
 * @param field - The Bedeutung (one with a mapping).
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns The neutral value; `undefined` without a reported value or without a mapping for it.
 */
export function neutralReadingOf(
    data: WidgetData,
    reading: MeaningReading,
    field: MeaningField,
    entry?: number,
): NeutralKey | undefined {
    const shape = MEANINGS[field].mapping;
    if (reading.kind !== 'reported' || !shape) {
        return undefined;
    }
    return neutralValueOf(storedMappingOf(data, field, entry), shape.keys, reading.value);
}

/**
 * Reads one Bedeutung of the widget as its neutral value: {@link readMeaning}, then
 * {@link neutralReadingOf}.
 *
 * @param data - The widget data.
 * @param values - The host's values map.
 * @param field - The Bedeutung (one with a mapping).
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns The neutral value; `undefined` while unbound, without a reported value or without a
 *   mapping for it.
 */
export function readNeutral(
    data: WidgetData,
    values: StateValues,
    field: MeaningField,
    entry?: number,
): NeutralKey | undefined {
    return neutralReadingOf(data, readMeaning(data, values, field, entry), field, entry);
}

/**
 * The label of a device value that maps to no neutral value: its `commonStates` label, else the
 * raw value.
 *
 * @param object - The Bedeutung's stored object ({@link storedObjectOf}).
 * @param value - The reported device value.
 * @returns The text to show.
 */
export function deviceValueLabel(object: StoredMeaningObject, value: DeviceValue): string {
    const states = object.commonStates;
    if (states) {
        const label = (states as Record<string, unknown>)[String(value)];
        if (typeof label === 'string' && label !== '') {
            return label;
        }
    }
    return String(value);
}
