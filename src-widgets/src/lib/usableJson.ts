/**
 * The parse sites' half of the Rückfall-Regel (ADR-0114): reading a stored JSON value and the
 * inner structure the widget cannot use as unset.
 *
 * @module lib/usableJson
 * @remarks
 * The rule itself (`lib/usableWidgetData`) judges a stored JSON value by its top level only — JSON
 * text, plain or as `b64:` blob, whose top level is an object or a list. What lies inside belongs
 * to the widget that reads it, and every widget's parse site reads it by the same rule:
 * - the top level is judged again with {@link isUsableValue} — a configurator gets the raw data
 *   vis-2 hands it, and an attribute the host substituted skips the rule in `Generic`;
 * - a key whose value is not of the key's kind ({@link KeyKinds}) reads as not written, so the
 *   widget reads it the way it reads the key unset; keys a kind table does not name stay as written.
 *
 * Kinds are judged by the JSON type, strictly (a number is a finite number, not a numeric text: the
 * vis-2 text input and bindings, which justify numeric texts in number fields, do not write inside
 * JSON). `null` is no value of any kind.
 */
import { decodeBlob } from './encoding';
import { isUsableValue, type StoredValue } from './usableWidgetData';

/** A JSON value kind: whether a value is usable at a place. */
export type Kind = (value: unknown) => boolean;

/** The kind of each key of an object: whether a value is usable there. */
export type KeyKinds<T> = Readonly<Record<keyof T, Kind>>;

/** A plain object (no list, no `null`). */
export const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

/** A text. */
export const isText: Kind = value => typeof value === 'string';

/** A finite number. */
export const isNumber: Kind = value => typeof value === 'number' && Number.isFinite(value);

/** A boolean. */
export const isFlag: Kind = value => typeof value === 'boolean';

/** A list of texts. */
export const isTextList: Kind = value => Array.isArray(value) && value.every(isText);

/** One of the given values. */
export const oneOf =
    (...values: readonly unknown[]): Kind =>
    value =>
        values.includes(value);

/** A value of any of the given kinds. */
export const anyOf =
    (...kinds: readonly Kind[]): Kind =>
    value =>
        kinds.some(kind => kind(value));

/**
 * The stored JSON value parsed, when it is usable under the field's rule.
 *
 * @param rule - What the field stores: JSON text whose top level is an object or a list.
 * @param rule.json - The top level: `'object'` or `'array'`.
 * @param raw - The stored value.
 * @returns The parsed value; `undefined` for an unset value (`undefined`, `null`, `''`) and for a
 *   value the rule reads as unset (no text, not parsable, another top level).
 */
export function readUsableJson(rule: { json: 'object' }, raw: unknown): Record<string, unknown> | undefined;
export function readUsableJson(rule: { json: 'array' }, raw: unknown): unknown[] | undefined;
export function readUsableJson(rule: Extract<StoredValue, object>, raw: unknown): unknown {
    if (typeof raw !== 'string' || raw === '' || !isUsableValue(rule, raw)) {
        return undefined;
    }
    return JSON.parse(decodeBlob(raw)) as unknown;
}

/**
 * The object without the keys whose value is not of their kind; the object itself when all are.
 *
 * @param object - An object of a stored JSON value.
 * @param kinds - The kind of each key the widget reads.
 * @returns The object, or a copy without the broken keys.
 */
export function withoutBroken<T extends object>(object: T, kinds: Readonly<Record<string, Kind>>): T {
    const record = object as Record<string, unknown>;
    const broken = Object.entries(kinds).filter(([key, isUsable]) => key in record && !isUsable(record[key]));
    if (broken.length === 0) {
        return object;
    }
    const usable = { ...record };
    for (const [key] of broken) {
        delete usable[key];
    }
    return usable as T;
}
