/**
 * The palette's defaults read at runtime: what a widget reads for a key its data leaves unset
 * (KI-Integration, ADR-0114).
 *
 * @module lib/fieldDefaults
 * @remarks
 * A widget dropped from the vis-2 palette stores the `default` of every field (vis-2
 * `applyDefaultsOfNewFields`); the vis-2 assistant inserts a widget with only what it sets. So that
 * the assistant's widget looks like the palette's, a key the data leaves unset (`undefined`, or a
 * `null` the assistant's flat update wrote) reads as that field's `default`, taken from the field
 * definition itself — one source, no copy. The Rückfall-Regel runs first (`lib/usableWidgetData`):
 * an unusable value is unset and reads as the default, too.
 *
 * Not filled:
 * - a field without a default (`undefined`/`null`) — vis-2 stores none either;
 * - a field that declares `keepUnset` (`ExtendedField`): stored widgets of a release before the
 *   field lack its key, so a missing key keeps the widget's own unset reading for them;
 * - the fields of a vis-2 indexed group (`indexFrom`/`indexTo`): none declares a default (Naht 2
 *   rebuilds the palette with them and would show one);
 * - `''` and every other stored value: what is set wins, `''` keeps its meaning.
 *
 * The stored data is never written: the filled data is a copy, and data without an unset key that
 * has a default comes back as the same object.
 */
import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

/** The defaults a widget's missing keys read as, by field name. */
export type FieldDefaults = ReadonlyMap<string, unknown>;

/** The keys of a field definition this module reads. */
interface DefaultField {
    name?: string;
    default?: unknown;
    keepUnset?: string;
}

/** No defaults: the data reads as it is. */
export const NO_FIELD_DEFAULTS: FieldDefaults = new Map();

/**
 * The defaults of a widget's named fields, as the palette stores them: every field with a default,
 * unless it keeps its unset reading; the first definition of a name wins.
 *
 * @param visAttrs - The widget's `getWidgetInfo().visAttrs`.
 */
export const fieldDefaultsOf = (visAttrs: readonly RxWidgetInfoGroup[]): FieldDefaults => {
    const defaults = new Map<string, unknown>();
    for (const group of visAttrs) {
        if (group.indexFrom !== undefined) {
            continue;
        }
        for (const field of (group.fields ?? []) as DefaultField[]) {
            if (field.name && field.default != null && field.keepUnset === undefined && !defaults.has(field.name)) {
                defaults.set(field.name, field.default);
            }
        }
    }
    return defaults;
};

/**
 * The data with every unset key (`undefined`, `null`) that has a default read as that default.
 *
 * @param data - The widget data as the widget reads it; never changed.
 * @param defaults - The widget's {@link fieldDefaultsOf}.
 * @returns `data` itself when no unset key has a default, else a filled copy.
 */
export function withFieldDefaults<T extends object>(data: T, defaults: FieldDefaults): T {
    const values = data as Record<string, unknown>;
    let filled: Record<string, unknown> | undefined;
    defaults.forEach((value, name) => {
        if (values[name] === undefined || values[name] === null) {
            filled ??= { ...values };
            filled[name] = value;
        }
    });
    return (filled as T | undefined) ?? data;
}
