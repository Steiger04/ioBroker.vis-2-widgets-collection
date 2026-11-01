/**
 * The ONE Spaltenfilter of the JSON table (CONTEXT.md „Spaltenfilter").
 *
 * @module JsonTableCollectionWidget/columnFilter
 * @remarks
 * Pure. A Spaltenfilter is an operator plus a value, set through the column menu's filter
 * dialog. Everything about it follows the Column's Effektiver Typ: the operators offered,
 * the coercion of the dialog's value and the comparison — never a type guessed from the
 * value.
 */

import type { EffectiveType } from './capabilities';
import { dateReader, localDay } from './dateReader';

/** The operators of a Spaltenfilter. */
export type FilterOperator =
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'equals'
    | 'notEquals'
    | 'greaterThan'
    | 'greaterThanOrEqual'
    | 'lessThan'
    | 'lessThanOrEqual'
    | 'isEmpty'
    | 'isNotEmpty';

/** A Spaltenfilter as TanStack keeps it per Column (and the Ansichtszustand stores it). */
export interface FilterConfig {
    operator: FilterOperator;
    value: string | number | boolean;
}

/** One operator the filter dialog offers, with its i18n label key. */
export type OperatorOption = Readonly<{ operator: FilterOperator; label: string }>;

const option = (operator: FilterOperator, label: string): OperatorOption => ({ operator, label });

const EMPTINESS: readonly OperatorOption[] = [
    option('isEmpty', 'json_table_filter_is_empty'),
    option('isNotEmpty', 'json_table_filter_is_not_empty'),
];

const STRING_OPERATORS: readonly OperatorOption[] = [
    option('contains', 'json_table_filter_contains'),
    option('startsWith', 'json_table_filter_starts_with'),
    option('endsWith', 'json_table_filter_ends_with'),
    option('equals', 'json_table_filter_equals'),
    option('notEquals', 'json_table_filter_not_equals'),
    ...EMPTINESS,
];

const NUMBER_OPERATORS: readonly OperatorOption[] = [
    option('equals', 'json_table_filter_equals'),
    option('notEquals', 'json_table_filter_not_equals'),
    option('greaterThan', 'json_table_filter_greater_than'),
    option('greaterThanOrEqual', 'json_table_filter_greater_than_or_equal'),
    option('lessThan', 'json_table_filter_less_than'),
    option('lessThanOrEqual', 'json_table_filter_less_than_or_equal'),
    ...EMPTINESS,
];

const DATE_OPERATORS: readonly OperatorOption[] = [
    option('equals', 'json_table_filter_equals'),
    option('greaterThan', 'json_table_filter_after'),
    option('greaterThanOrEqual', 'json_table_filter_on_or_after'),
    option('lessThan', 'json_table_filter_before'),
    option('lessThanOrEqual', 'json_table_filter_on_or_before'),
    ...EMPTINESS,
];

const BOOLEAN_OPERATORS: readonly OperatorOption[] = [
    option('equals', 'json_table_filter_equals'),
    option('notEquals', 'json_table_filter_not_equals'),
    ...EMPTINESS,
];

/**
 * The operators a Column offers.
 *
 * @param type The Column's Effektiver Typ.
 * @returns The catalog of its type; every type without a catalog of its own (mixed, object,
 *   array, image, null) filters as text.
 */
export function filterOperators(type: EffectiveType): readonly OperatorOption[] {
    switch (type) {
        case 'number':
            return NUMBER_OPERATORS;
        case 'date':
            return DATE_OPERATORS;
        case 'boolean':
            return BOOLEAN_OPERATORS;
        default:
            return STRING_OPERATORS;
    }
}

/**
 * The operator a new filter starts with.
 *
 * @param type The Column's Effektiver Typ.
 * @returns `equals` for numbers, dates and booleans; `contains` for text.
 */
export function getDefaultOperator(type: EffectiveType): FilterOperator {
    return filterOperators(type) === STRING_OPERATORS ? 'contains' : 'equals';
}

/** Every operator any type offers. */
const KNOWN_OPERATORS = new Set<unknown>(
    [STRING_OPERATORS, NUMBER_OPERATORS, DATE_OPERATORS, BOOLEAN_OPERATORS].flatMap(catalog =>
        catalog.map(o => o.operator),
    ),
);

/**
 * Whether a filter is valid for a Column: the dialog's form `{operator, value}` with a
 * primitive value, and an operator the Column's Effektiver Typ offers.
 *
 * @param type The Column's Effektiver Typ; unknown (no such Column) ⇒ only the form and a
 *   known operator are judged.
 * @param filter The filter value as TanStack or the Ansichtszustand holds it.
 * @returns `true` for a valid filter; an invalid one filters nothing and is discarded on load.
 */
export function filterFits(type: EffectiveType | undefined, filter: unknown): filter is FilterConfig {
    if (typeof filter !== 'object' || filter === null || !('operator' in filter) || !('value' in filter)) {
        return false;
    }
    const { operator, value } = filter;
    return (
        ['string', 'number', 'boolean'].includes(typeof value) &&
        (type === undefined ? KNOWN_OPERATORS.has(operator) : filterOperators(type).some(o => o.operator === operator))
    );
}

/**
 * Whether an operator compares against a value.
 *
 * @param operator The filter operator.
 * @returns `false` for `isEmpty`/`isNotEmpty`, which judge the cell alone.
 */
export function needsValue(operator: FilterOperator): boolean {
    return operator !== 'isEmpty' && operator !== 'isNotEmpty';
}

// ── Reading values by type ───────────────────────────────────────────────────

/** A number: a finite number, or a string holding one; anything else (blank included) is none. */
function readNumber(value: unknown): number | null {
    if (typeof value === 'number') {
        return Number.isFinite(value) ? value : null;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        const n = Number(value);
        return Number.isFinite(n) ? n : null;
    }
    return null;
}

/** A boolean: `true`/`false`, `'true'`/`'false'`, `1`/`0`; anything else is none. */
function readBoolean(value: unknown): boolean | null {
    if (typeof value === 'boolean') {
        return value;
    }
    if (value === 'true' || value === 1) {
        return true;
    }
    if (value === 'false' || value === 0) {
        return false;
    }
    return null;
}

/** Reads a filter value as a date — it has no Column of its own, so no detection (stage 2). */
const readFilterDate = dateReader();

/**
 * The value of a filter, coerced from the dialog's input to what its Effektiver Typ compares.
 *
 * @param type The Column's Effektiver Typ.
 * @param input The dialog's input (or a stored filter value shown in it).
 * @returns A number for numbers, `true`/`false` for booleans, the local day `YYYY-MM-DD` for
 *   dates, the trimmed text otherwise — `undefined` when the input holds no such value (no filter).
 */
export function coerceFilterValue(type: EffectiveType, input: unknown): FilterConfig['value'] | undefined {
    switch (type) {
        case 'number':
            return readNumber(input) ?? undefined;
        case 'boolean':
            return readBoolean(input) ?? undefined;
        case 'date': {
            const ms = readFilterDate(input);
            return ms === null ? undefined : localDay(ms).key;
        }
        default: {
            const text = ['string', 'number', 'boolean'].includes(typeof input) ? String(input).trim() : '';
            return text === '' ? undefined : text;
        }
    }
}
