/**
 * Reading stored JSON blobs — the top level and the inner structure the widget cannot use as
 * unset (Rückfall-Regel, ADR-0114).
 *
 * @module lib/usableJson
 * @remarks
 * A blob is JSON text, plain or as `b64:` blob, whose top level is an object or a list
 * ({@link BlobShape}; {@link OBJECT_BLOB}, {@link LIST_BLOB}). The rule (`lib/usableWidgetData`)
 * judges a stored blob by its top level only, and it does so with {@link readUsableJson}, the one
 * parse of a blob. What lies inside belongs to the widget that reads it, and every widget's parse
 * site reads it by the same rule through the readers here:
 * - the top level is judged again at the parse site — a configurator gets the raw data vis-2
 *   hands it, and an attribute the host substituted skips the rule in `Generic`;
 * - a list entry that is not the list's kind of entry reads as an unset entry: left out, or an
 *   empty entry where the entry's place carries meaning;
 * - a key whose value is not of the key's kind ({@link KeyKinds}) reads as not written, so the
 *   widget reads it the way it reads the key unset; keys a kind table does not name stay as written.
 *
 * The kind tables stay with the widgets. Kinds are judged by the JSON type, strictly (a number is a
 * finite number, not a numeric text: the vis-2 text input and bindings, which justify numeric texts
 * in number fields, do not write inside JSON). `null` is no value of any kind.
 */
import { decodeBlob } from './encoding';

/** The top level of a stored JSON blob: an object or a list. */
export interface BlobShape {
    /** `'object'` or `'array'`. */
    readonly json: 'object' | 'array';
}

/** A blob that holds a JSON object. */
export const OBJECT_BLOB: { json: 'object' } = { json: 'object' };

/** A blob that holds a JSON list. */
export const LIST_BLOB: { json: 'array' } = { json: 'array' };

/** A JSON value kind: whether a value is usable at a place. */
export type Kind = (value: unknown) => boolean;

/** The kind of each key of an object: whether a value is usable there. */
export type KeyKinds<T> = Readonly<Record<keyof T, Kind>>;

/** A plain object (no list, no `null`). */
export const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

/** A text. */
export const isText: Kind = value => typeof value === 'string';

/** A finite JSON number; unlike `lib/helper/isNumber`, no numeric text. */
export const isJsonNumber: Kind = value => typeof value === 'number' && Number.isFinite(value);

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
 * The stored blob parsed, when its top level is the declared one — the one parse of a blob, shared
 * by the rule's top-level judgement and the parse sites.
 *
 * @param rule - What the field stores: JSON text whose top level is an object or a list.
 * @param rule.json - The top level: `'object'` or `'array'`.
 * @param raw - The stored value.
 * @returns The parsed value; `undefined` for an unset value (`undefined`, `null`, `''`) and for a
 *   value the rule reads as unset (no text, not parsable, another top level).
 */
export function readUsableJson(rule: { json: 'object' }, raw: unknown): Record<string, unknown> | undefined;
export function readUsableJson(rule: { json: 'array' }, raw: unknown): unknown[] | undefined;
export function readUsableJson(rule: BlobShape, raw: unknown): Record<string, unknown> | unknown[] | undefined;
export function readUsableJson(rule: BlobShape, raw: unknown): Record<string, unknown> | unknown[] | undefined {
    if (typeof raw !== 'string' || raw === '') {
        return undefined;
    }
    let parsed: unknown;
    try {
        parsed = JSON.parse(decodeBlob(raw));
    } catch {
        return undefined;
    }
    if (rule.json === 'array') {
        return Array.isArray(parsed) ? parsed : undefined;
    }
    return isRecord(parsed) ? parsed : undefined;
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

/**
 * The entries of a list, each without its broken keys.
 *
 * @param list - A list of a stored JSON value.
 * @param kinds - The kind of each key of an entry.
 * @param positional - Whether an entry's place carries meaning (an entry that is not of the list's
 *   kind then reads as an empty entry instead of being left out).
 * @param isEntry - Whether a value is the list's kind of entry; an object unless the widget says more.
 * @returns The entries of the list's kind without their broken keys.
 */
export const readEntries = <T extends object>(
    list: readonly unknown[],
    kinds: KeyKinds<T>,
    positional: boolean,
    isEntry: (entry: unknown) => boolean = isRecord,
): T[] => list.flatMap(entry => (isEntry(entry) ? [withoutBroken(entry as T, kinds)] : positional ? [{} as T] : []));

/**
 * Read an object blob.
 *
 * @param raw - The stored blob.
 * @param kinds - The kind of each key the widget reads.
 * @returns The object without its broken keys; `undefined` for no usable blob.
 */
export const readObjectBlob = <T extends object>(raw: unknown, kinds: KeyKinds<T>): T | undefined => {
    const parsed = readUsableJson(OBJECT_BLOB, raw);
    return parsed === undefined ? undefined : withoutBroken(parsed as T, kinds);
};

/**
 * Read a list blob of objects.
 *
 * @param raw - The stored blob.
 * @param kinds - The kind of each key of an entry.
 * @param positional - Whether an entry's place carries meaning (an entry that is not of the list's
 *   kind then reads as an empty entry instead of being left out).
 * @param isEntry - Whether a value is the list's kind of entry; an object unless the widget says more.
 * @returns The entries without their broken keys; empty for no usable blob.
 */
export const readListBlob = <T extends object>(
    raw: unknown,
    kinds: KeyKinds<T>,
    positional: boolean,
    isEntry: (entry: unknown) => boolean = isRecord,
): T[] => readEntries(readUsableJson(LIST_BLOB, raw) ?? [], kinds, positional, isEntry);

/**
 * Read a blob of objects by name.
 *
 * @param raw - The stored blob.
 * @param kinds - The kind of each key of a value.
 * @returns The values that are objects, without their broken keys; empty for no usable blob.
 */
export const readNamedBlob = <T extends object>(raw: unknown, kinds: KeyKinds<T>): Record<string, T> =>
    Object.fromEntries(
        Object.entries(readUsableJson(OBJECT_BLOB, raw) ?? {}).flatMap(([name, value]) =>
            isRecord(value) ? [[name, withoutBroken(value as T, kinds)]] : [],
        ),
    );

/**
 * Read a list blob of texts.
 *
 * @param raw - The stored blob.
 * @returns The entries that are texts; empty for no usable blob.
 */
export const readTextListBlob = (raw: unknown): string[] =>
    (readUsableJson(LIST_BLOB, raw) ?? []).filter((entry): entry is string => typeof entry === 'string');
