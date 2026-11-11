/**
 * The Rückfall-Regel of the KI-Integration (ADR-0114): a stored field value the widget cannot use
 * reads as unset.
 *
 * @module lib/usableWidgetData
 * @remarks
 * The vis-2 assistant writes widget data without defaults and without any check against
 * `visAttrs`, and its updates assign flat. One rule decides for every widget which stored values
 * are unusable, from the field definitions alone:
 * - `number` and `slider` fields: a finite number, or a string that reads as one (the vis-2 text
 *   input stores strings while typing, bindings deliver strings);
 * - `checkbox` fields: a boolean;
 * - `select` fields with an option list: one of the option values (strictly);
 * - data-bearing `custom` fields: the {@link StoredValue} their definition declares
 *   (`storedValue`) — a string, a number, a boolean, or JSON text (plain or as `b64:` blob) whose
 *   top level is an object or a list.
 *
 * `undefined`, `null` and `''` are never unusable: the first two are unset already, and `''`
 * keeps whatever it means for its field today. Every other field — text, html, OID, image,
 * undeclared custom fields, keys without a field — is left alone. Neither is an attribute whose
 * stored value the host substitutes — a binding (vis-2 hands its resolved value as text) or a group
 * attribute: the widget reads the host's value as before.
 *
 * An unusable value is dropped from what the widget reads, nothing else: the widget then takes
 * exactly the way it takes for an unset field, with its cascades and fallbacks, and the stored
 * data is never written. `Generic.renderWithProvider` applies the rule where the widget data
 * enters the Collection-Kontext, so no widget reads the raw values. Inner structure of a JSON
 * value (the entries of a list, the keys of an object) stays with the widget's own parse site.
 */
import { decodeBlob } from './encoding';

import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

/**
 * What a data-bearing `custom` field stores under its name, declared on its definition as
 * `storedValue` (vis-2 ignores the key). JSON is stored as text, plain or as `b64:` blob.
 */
export type StoredValue = 'string' | 'number' | 'boolean' | { json: 'object' | 'array' };

/** The rule of one field: a stored-value kind, or the option values of a select field. */
export type FieldRule = StoredValue | { options: readonly unknown[] };

/** The rules of a widget's fields by field name. */
export type FieldRules = ReadonlyMap<string, FieldRule>;

/** The keys of a field definition the rule reads. */
interface RuleField {
    name?: string;
    type?: string;
    options?: unknown;
    multiple?: boolean;
    storedValue?: StoredValue;
}

/** The value of an option entry: a plain value, or `{ value, label }`. */
const optionValue = (option: unknown): unknown =>
    option !== null && typeof option === 'object' && 'value' in option ? option.value : option;

/**
 * The rule of one field definition.
 *
 * @param field - A field of `visAttrs`.
 * @returns Its rule, `undefined` for a field the rule leaves alone.
 */
export const fieldRuleOf = (field: RuleField): FieldRule | undefined => {
    switch (field.type) {
        case 'number':
        case 'slider':
            return 'number';
        case 'checkbox':
            return 'boolean';
        case 'select':
            return Array.isArray(field.options) && !field.multiple
                ? { options: field.options.map(optionValue) }
                : undefined;
        case 'custom':
            return field.storedValue;
        default:
            return undefined;
    }
};

/**
 * The rules of all named fields of a widget's attribute groups; the first definition of a name wins.
 *
 * @param groups - The widget's `visAttrs`.
 * @returns The rules by field name.
 */
export const fieldRulesOf = (groups: readonly RxWidgetInfoGroup[]): FieldRules => {
    const rules = new Map<string, FieldRule>();
    for (const group of groups) {
        for (const field of (group.fields ?? []) as RuleField[]) {
            const rule = field.name ? fieldRuleOf(field) : undefined;
            if (field.name && rule !== undefined && !rules.has(field.name)) {
                rules.set(field.name, rule);
            }
        }
    }
    return rules;
};

/** Whether JSON text (plain or blob) parses to the given top level. */
const isJsonOf = (value: unknown, topLevel: 'object' | 'array'): boolean => {
    if (typeof value !== 'string') {
        return false;
    }
    try {
        const parsed: unknown = JSON.parse(decodeBlob(value));
        return topLevel === 'array'
            ? Array.isArray(parsed)
            : parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed);
    } catch {
        return false;
    }
};

/**
 * Whether a stored value is usable under a field's rule.
 *
 * @param rule - The field's rule.
 * @param value - The stored value.
 * @returns `false` only for a value the widget must read as unset.
 */
export const isUsableValue = (rule: FieldRule, value: unknown): boolean => {
    if (value === undefined || value === null || value === '') {
        return true;
    }
    if (typeof rule === 'object') {
        return 'options' in rule ? rule.options.includes(value) : isJsonOf(value, rule.json);
    }
    switch (rule) {
        case 'number':
            return typeof value === 'number'
                ? Number.isFinite(value)
                : typeof value === 'string' && value.trim() !== '' && Number.isFinite(Number(value));
        case 'boolean':
            return typeof value === 'boolean';
        default:
            return typeof value === 'string';
    }
};

/**
 * Whether a stored attribute is a vis-2 binding — vis-2's own test (`Vis/visUtils.tsx`
 * `extractBinding`, applied by `getUsedObjectIDsInWidget` to every string attribute): a `{…}`
 * whose content starts neither with `{` (nested) nor with `"` (JSON).
 *
 * @param stored - The attribute as stored in the project.
 * @returns `true` when vis-2 replaces the attribute with the binding's resolved text.
 */
export const isBinding = (stored: unknown): boolean =>
    typeof stored === 'string' && (stored.match(/{(.+?)}/g) ?? []).some(match => match[1] !== '{' && match[1] !== '"');

/**
 * Whether the host put the value the widget reads into the attribute itself: a binding, or any
 * other text substitution of the stored string (group attributes, `_PRJ_NAME`), visible as a value
 * that differs from the stored string. Such a value is the host's text, not stored data.
 */
const isHostSubstituted = (stored: unknown, value: unknown): boolean =>
    typeof stored === 'string' && (value !== stored || isBinding(stored));

/** A reading already made: for which stored data, with what result. */
interface Reading {
    stored: object;
    usable: object;
}

/** Readings already made, per rule set and data object: the same data reads as the same object. */
const readings = new WeakMap<FieldRules, WeakMap<object, Reading>>();

/**
 * The widget data as the widget reads it: every unusable value dropped.
 *
 * @param data - The widget data as vis-2 hands it to the widget (`rxData`, bindings resolved);
 *   never changed.
 * @param rules - The widget's field rules ({@link fieldRulesOf}).
 * @param stored - The data as stored in the project (`props.widget.data`, bindings unresolved);
 *   defaults to `data`. An attribute the host substituted (a binding, a group attribute) keeps
 *   the host's value unchecked: vis-2 resolves every binding to text, which the widgets read as
 *   before (e.g. `lib/helper/isOidReadOnly`).
 * @returns `data` itself when every value is usable, else one copy per data object without the
 *   unusable keys.
 */
export const usableWidgetData = <T extends object>(data: T, rules: FieldRules, stored: object = data): T => {
    let byData = readings.get(rules);
    if (!byData) {
        byData = new WeakMap();
        readings.set(rules, byData);
    }
    const known = byData.get(data);
    if (known?.stored === stored) {
        return known.usable as T;
    }

    const values = data as Record<string, unknown>;
    const storedValues = stored as Record<string, unknown>;
    const unusable = [...rules]
        .filter(
            ([name, rule]) =>
                !isUsableValue(rule, values[name]) && !isHostSubstituted(storedValues[name], values[name]),
        )
        .map(([name]) => name);
    if (unusable.length === 0) {
        byData.set(data, { stored, usable: data });
        return data;
    }

    const usable = { ...values };
    for (const name of unusable) {
        delete usable[name];
    }
    byData.set(data, { stored, usable });
    return usable as T;
};
