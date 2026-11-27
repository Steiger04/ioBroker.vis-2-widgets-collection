/**
 * The stored Wertezuordnung of a Thermostat-Bedeutung (ADR-0120, Nachtrag „Spec Stufe 1
 * schreiben“): reading it, its two directions (device → neutral, neutral → device), changing it and
 * the patch that stores it.
 *
 * @module lib/heating/valueMapping
 * @remarks
 * Stored under `<bedeutung>Zuordnung` (`meaningKeys(...).mapping`) as a plain object, not as JSON
 * text: per neutral value the list of device values in their own type (first = write value, empty
 * list = „nicht vorhanden“), plus `einheit` or `zeitformat` where the Bedeutung carries one. A
 * missing neutral key is „noch nicht zugeordnet“; a missing `<bedeutung>Zuordnung` is a Bedeutung
 * without any mapping. The key is no declared field, so the Rückfall-Regel leaves it alone (like
 * `<field>Object`) and the palette stores no default: a missing mapping stays missing, which the
 * Lese-Naht reads (ADR-0120 Nachtrag). The inner structure is checked here, at its parse site.
 */
import type { MappingShape, NeutralKey } from './meaningCatalog';

/** One device value: what the data point reports or is written. */
export type DeviceValue = string | number | boolean;

/** The units of a duration. */
export const UNITS = ['s', 'min'] as const;

/** A unit of a duration. */
export type MappingUnit = (typeof UNITS)[number];

/** The named time formats; any other text is a pattern such as `YYYY_MM_DD HH:mm`. */
export const NAMED_TIME_FORMATS = ['timestamp', 'iso'] as const;

/** A named time format. */
export type NamedTimeFormat = (typeof NAMED_TIME_FORMATS)[number];

/**
 * A stored Wertezuordnung, in its stored form: per neutral value its device values (first = write
 * value, empty = „nicht vorhanden“), plus the unit of a duration or the format of a point in time
 * (`timestamp`, `iso` or a pattern). No neutral value is called `einheit` or `zeitformat`.
 */
export type ValueMapping = {
    readonly [key in NeutralKey]?: readonly DeviceValue[];
} & {
    readonly einheit?: MappingUnit;
    readonly zeitformat?: string;
};

/** Whether a value is a device value. */
const isDeviceValue = (value: unknown): value is DeviceValue =>
    typeof value === 'string' || (typeof value === 'number' && Number.isFinite(value)) || typeof value === 'boolean';

/** Whether a mapping holds nothing: no neutral key, no addition. */
const isEmptyMapping = (mapping: ValueMapping): boolean => Object.keys(mapping).length === 0;

/**
 * Reads a stored Wertezuordnung as far as it fits the Bedeutung's shape.
 *
 * @param stored - The stored `<bedeutung>Zuordnung`.
 * @param shape - The Bedeutung's mapping shape from the catalogue.
 * @returns The usable part (keys outside the shape and values that are no device value dropped);
 *   `undefined` for anything that is no object or holds nothing usable — the Bedeutung then has no
 *   mapping.
 */
export function readValueMapping(stored: unknown, shape: MappingShape): ValueMapping | undefined {
    if (stored === null || typeof stored !== 'object' || Array.isArray(stored)) {
        return undefined;
    }
    const record = stored as Record<string, unknown>;
    const mapping: Record<string, unknown> = {};
    for (const key of shape.keys) {
        const list = record[key];
        if (Array.isArray(list)) {
            mapping[key] = list.filter(isDeviceValue);
        }
    }
    const { einheit, zeitformat } = record;
    if (shape.additions.includes('einheit') && UNITS.includes(einheit as MappingUnit)) {
        mapping.einheit = einheit;
    } else if (shape.additions.includes('zeitformat') && typeof zeitformat === 'string' && zeitformat) {
        mapping.zeitformat = zeitformat;
    }
    return isEmptyMapping(mapping) ? undefined : mapping;
}

/**
 * Reading direction: the neutral value a device value maps to (n:1 — several device values may map
 * to one neutral value, window OPEN and TILTED → `offen`).
 *
 * @param mapping - The Bedeutung's mapping; `undefined` for none.
 * @param keys - The neutral keys of the Bedeutung, in catalogue order: the first that lists the
 *   value wins.
 * @param value - The reported device value.
 * @returns The neutral value; `undefined` when no neutral value lists the device value.
 */
export function neutralOfDeviceValue(
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
 * Writing direction: the device value a neutral value writes — the first of its list (ADR-0120:
 * reading may map several device values, writing uses the first).
 *
 * @param mapping - The Bedeutung's mapping; `undefined` for none.
 * @param key - The neutral value.
 * @returns The device value; `undefined` while the neutral value is not mapped yet or „nicht
 *   vorhanden“ (an empty list).
 */
export const deviceValueOfNeutral = (mapping: ValueMapping | undefined, key: NeutralKey): DeviceValue | undefined =>
    mapping?.[key]?.[0];

/**
 * The mapping with one neutral value set or taken out.
 *
 * @param mapping - The current mapping, `undefined` for none.
 * @param key - The neutral value.
 * @param values - Its device values (empty = „nicht vorhanden“); `undefined` takes the key out.
 * @returns The new mapping.
 */
export function withNeutralValues(
    mapping: ValueMapping | undefined,
    key: NeutralKey,
    values: readonly DeviceValue[] | undefined,
): ValueMapping {
    const { [key]: _old, ...others } = mapping ?? {};
    return values === undefined ? others : { ...others, [key]: values };
}

/** The addition of a mapping: a unit, a time format, or none. */
export type MappingAdditionValue = { einheit: MappingUnit } | { zeitformat: string } | undefined;

/**
 * The mapping with its addition replaced: a Bedeutung stores at most one of unit and time format.
 *
 * @param mapping - The current mapping, `undefined` for none.
 * @param addition - The new addition; `undefined` takes it out.
 * @returns The new mapping.
 */
export function withAddition(mapping: ValueMapping | undefined, addition: MappingAdditionValue): ValueMapping {
    const { einheit: _unit, zeitformat: _format, ...values } = mapping ?? {};
    return { ...values, ...addition };
}

/**
 * The mapping of a boolean data point: `trueKey` reads `true`, every other key `false` — or the
 * other way round with „Wert umkehren“.
 *
 * @param shape - The Bedeutung's mapping shape; it names the `trueKey`.
 * @param inverted - „Wert umkehren“ is on.
 * @returns The mapping.
 */
export const booleanMapping = (shape: MappingShape, inverted: boolean): ValueMapping =>
    Object.fromEntries(shape.keys.map(key => [key, [(key === shape.trueKey) !== inverted]]));

/**
 * Whether a boolean data point's mapping is inverted: its `trueKey` writes `false`.
 *
 * @param mapping - The mapping, `undefined` for none.
 * @param shape - The Bedeutung's mapping shape.
 * @returns `true` only for an inverted mapping; no mapping reads as not inverted.
 */
export const isInvertedMapping = (mapping: ValueMapping | undefined, shape: MappingShape): boolean =>
    shape.trueKey !== undefined && mapping?.[shape.trueKey]?.[0] === false;

/**
 * The patch that stores a mapping — the whole mapping in one key, as vis-2's patch contract needs
 * it (a missing key keeps the old value, `null` deletes it).
 *
 * @param mappingKey - The stored key (`meaningKeys(...).mapping`).
 * @param mapping - The new mapping.
 * @returns The patch; `null` for a mapping that holds nothing, so the Bedeutung reads as unmapped.
 */
export const valueMappingPatch = (mappingKey: string, mapping: ValueMapping): Record<string, unknown> => ({
    [mappingKey]: isEmptyMapping(mapping) ? null : mapping,
});
