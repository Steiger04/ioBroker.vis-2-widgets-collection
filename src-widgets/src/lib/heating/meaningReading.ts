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
import { meaningKeys, VALVE_LIST, type MeaningField, type NeutralKey } from './meaningCatalog';
import { valveCountOf } from './valveListShape';
import type { DeviceValue, ValueMapping } from './valueMapping';

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
 * The label of a device value that maps to no neutral value: its `commonStates` label, else the
 * raw value.
 *
 * @param object - The Bedeutung's stored object (`<field>Object`).
 * @param value - The reported device value.
 * @returns The text to show.
 */
export function deviceValueLabel(object: unknown, value: DeviceValue): string {
    const states = (object as { commonStates?: unknown } | undefined)?.commonStates;
    if (states && typeof states === 'object') {
        const label = (states as Record<string, unknown>)[String(value)];
        if (typeof label === 'string' && label !== '') {
            return label;
        }
    }
    return String(value);
}
