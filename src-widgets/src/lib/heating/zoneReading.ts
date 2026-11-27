/**
 * Heizzonen-Lesung: what the bound data of one Heizzone say right now (ADR-0119, ADR-0120, ADR-0121
 * Nachtrag 2026-11-27; stage-1 spec „Noch nicht gemeldet“, guard rail „Gemeldet statt behauptet“).
 *
 * @module lib/heating/zoneReading
 * @remarks
 * Bound once to the widget data, the host's values and the entry number ({@link readZone}), it
 * answers per Thermostat-Bedeutung: bound or not and whether it has reported, its neutral value
 * through the Wertezuordnung, its display text, its number and unit, whether it may be written and
 * which device value a neutral value writes — plus the mean of the zone's valves. A single-room type
 * reads without an entry number, a list entry of a house type with its number; no caller passes the
 * number on.
 *
 * - **Reported:** the values map is the host's — per subscribed id `<id>.val`, `.ack`, `.ts`, `.lc`
 *   and `.q`. A data point has not reported yet when its quality says so (`q = 0x20`, the device's
 *   substitute value, as a HomeMatic device holds it until its first report) — never judged by the
 *   value itself. A data point without a value has no `<id>.val`, or the host's placeholder for a
 *   state without a value (`val = 'null'` with `q = 0`). There is no age and no threshold for stale
 *   values: after a restart the last reported value stands. No other widget reads `q` today, so the
 *   check lives with the heating building blocks.
 * - **Neutral value and display text:** the Wertezuordnung is read n:1 (`valueMapping`); a device
 *   value without a mapping gives no neutral value, and the display text then names the
 *   `commonStates` label, else the raw value — „–“ while nothing has reported.
 * - **Writable:** bound, the stored object (`<field>Object`, from the pick or the Lese-Naht) belongs
 *   to the bound id, and it is not read-only by the Sperre's rule (`isOidReadOnly`: `onlyDisplay` or
 *   `write === false`). The object check stays until the Lese-Naht covers numbered fields (stage 2,
 *   ADR-0121 Nachtrag 2026-11-27).
 * - **Valves:** without an entry number every bound valve counts (single-room types); with entry
 *   `n` only the valves whose zone reference (`ventil{m}Zone`) is `n` — a valve without one belongs
 *   to no entry.
 */
import isOidReadOnly from '../helper/isOidReadOnly';
import optionalNumber from '../helper/optionalNumber';
import { translate } from '../translate';
import { meaningKeys, MEANINGS, NEUTRAL_LABELS, type MeaningField, type NeutralKey } from './meaningCatalog';
import { NO_VALUE } from './readingFormat';
import {
    deviceValueOfNeutral,
    neutralOfDeviceValue,
    readValueMapping,
    type DeviceValue,
    type ValueMapping,
} from './valueMapping';
import { valveCountOf, valveKeys } from './valveListShape';

import type { OidObjectMeta } from '../../types';
import type { VisRxWidgetStateValues, WidgetData } from '@iobroker/types-vis-2';

/** The quality of a substitute value from the device: the data point has not reported yet. */
export const NOT_YET_REPORTED_QUALITY = 0x20;

/** The values map of the host. */
export type StateValues = VisRxWidgetStateValues;

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

/** Whether and what a Bedeutung's data point has reported. */
export type MeaningState =
    /** No data point is bound: the element is left out. */
    | { readonly kind: 'unbound' }
    /** Bound, but the data point has no value (none in the values map, or the host's placeholder). */
    | { readonly kind: 'noValue'; readonly id: string }
    /** Bound, the data point holds the device's substitute value (`q = 0x20`). */
    | { readonly kind: 'notReported'; readonly id: string }
    /** Bound and reported: the value, when it last changed and when it was last reported. */
    | {
          readonly kind: 'reported';
          readonly id: string;
          readonly value: DeviceValue;
          /** `<id>.lc` — when the value last changed, if the host knows. */
          readonly lc: number | undefined;
          /** `<id>.ts` — when the value was last reported, if the host knows. */
          readonly ts: number | undefined;
      };

/** What the Heizzonen-Lesung says about one Bedeutung. */
export type MeaningReading = MeaningState & {
    /** The stored id field the Bedeutung binds — the key the write chain writes through. */
    readonly idKey: string;
    /** Its stored object, as far as its keys hold their stored type; `{}` without one. */
    readonly object: StoredMeaningObject;
    /** Its usable Wertezuordnung; none for a Bedeutung without fixed values or without a mapping. */
    readonly mapping: ValueMapping | undefined;
    /** The neutral value the reported value maps to; none without a reported value or a mapping for it. */
    readonly neutral: NeutralKey | undefined;
    /** The display text: the neutral value's label, else the device value's label, else „–“. */
    readonly text: string;
    /** The reported value, where it is a finite number. */
    readonly number: number | undefined;
    /** The unit of its stored object. */
    readonly unit: string | undefined;
    /** It may be written: controls writing it may show. */
    readonly writable: boolean;
    /**
     * The device value a neutral value writes: the first of its Wertezuordnung.
     *
     * @param key - The neutral value.
     * @returns The device value; none while unbound, not mapped yet or „nicht vorhanden“.
     */
    readonly writeValue: (key: NeutralKey) => DeviceValue | undefined;
};

/** The Heizzonen-Lesung of one Heizzone. */
export interface ZoneReading {
    /**
     * Reads one Bedeutung of the zone.
     *
     * @param field - The Bedeutung.
     * @returns What the zone's data say about it.
     */
    readonly meaning: (field: MeaningField) => MeaningReading;
    /**
     * The mean of the zone's bound valves that have reported a number: `undefined` without a bound
     * valve, `null` while none has reported a number.
     */
    readonly valveMean: number | null | undefined;
}

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

const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const isFilledText = (value: unknown): value is string => typeof value === 'string' && value !== '';

/**
 * Reads a stored object: `_id`, `type` and `unit` as non-empty text, `write` as a boolean,
 * `minValue`/`maxValue`/`step` as finite numbers, `commonStates` as an object or a list.
 *
 * @param object - The stored `<field>Object`.
 * @returns Its keys of the stored type; `{}` without an object.
 */
function storedObject(object: unknown): StoredMeaningObject {
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

/** Reads what a bound data point has reported. */
function readDataPoint(values: StateValues, id: string): Exclude<MeaningState, { kind: 'unbound' }> {
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
    const ts: unknown = values[`${id}.ts`];
    return {
        kind: 'reported',
        id,
        value,
        lc: typeof lc === 'number' ? lc : undefined,
        ts: typeof ts === 'number' ? ts : undefined,
    };
}

/** The label of a device value that maps to no neutral value: its `commonStates` label, else the raw value. */
function deviceValueLabel(object: StoredMeaningObject, value: DeviceValue): string {
    const label: unknown = (object.commonStates as Record<string, unknown> | undefined)?.[String(value)];
    return typeof label === 'string' && label !== '' ? label : String(value);
}

/** Reads one Bedeutung of the zone. */
function readMeaning(data: WidgetData, values: StateValues, field: MeaningField, entry?: number): MeaningReading {
    const keys = meaningKeys(field, entry);
    const id = boundIdOf(data, keys.field);
    const state: MeaningState = id === undefined ? { kind: 'unbound' } : readDataPoint(values, id);
    const object = storedObject(data[keys.object]);
    const shape = MEANINGS[field].mapping;
    const mapping = shape ? readValueMapping(data[keys.mapping], shape) : undefined;
    const neutral =
        state.kind === 'reported' && shape ? neutralOfDeviceValue(mapping, shape.keys, state.value) : undefined;

    let text = NO_VALUE;
    if (neutral) {
        text = translate(NEUTRAL_LABELS[neutral]);
    } else if (state.kind === 'reported') {
        text = deviceValueLabel(object, state.value);
    }

    return {
        ...state,
        idKey: keys.field,
        object,
        mapping,
        neutral,
        text,
        number: state.kind === 'reported' && isFiniteNumber(state.value) ? state.value : undefined,
        unit: object.unit,
        writable:
            id !== undefined &&
            object._id === id &&
            !isOidReadOnly({ onlyDisplay: data.onlyDisplay as boolean | string | undefined, write: object.write }),
        writeValue: key => (id === undefined ? undefined : deviceValueOfNeutral(mapping, key)),
    };
}

/** The mean of the zone's bound valves that have reported a number. */
function valveMeanOf(data: WidgetData, values: StateValues, entry?: number): number | null | undefined {
    const levels: number[] = [];
    let bound = 0;
    for (let m = 1; m <= valveCountOf(data); m++) {
        const keys = valveKeys(m);
        const id = boundIdOf(data, keys.field);
        if (id === undefined || (entry !== undefined && optionalNumber(data[keys.zone]) !== entry)) {
            continue;
        }
        bound++;
        const state = readDataPoint(values, id);
        if (state.kind === 'reported' && isFiniteNumber(state.value)) {
            levels.push(state.value);
        }
    }
    if (bound === 0) {
        return undefined;
    }
    return levels.length ? levels.reduce((sum, level) => sum + level, 0) / levels.length : null;
}

/**
 * Binds the Heizzonen-Lesung to one Heizzone.
 *
 * @param data - The widget data as the widget reads it (with the Lese-Naht's objects and mappings).
 * @param values - The host's values map.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The zone's reading; each Bedeutung is read once, on first ask.
 */
export function readZone(data: WidgetData, values: StateValues, entry?: number): ZoneReading {
    const read = new Map<MeaningField, MeaningReading>();
    let valveMean: { value: number | null | undefined } | undefined;
    return {
        meaning: field => {
            let reading = read.get(field);
            if (!reading) {
                reading = readMeaning(data, values, field, entry);
                read.set(field, reading);
            }
            return reading;
        },
        get valveMean() {
            valveMean ??= { value: valveMeanOf(data, values, entry) };
            return valveMean.value;
        },
    };
}
