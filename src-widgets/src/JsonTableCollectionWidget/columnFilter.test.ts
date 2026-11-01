/**
 * The Spaltenfilter (CONTEXT „Spaltenfilter", „Effektiver Typ").
 *
 * @module widgets/JsonTableCollectionWidget/columnFilter.test
 * @remarks
 * Pins the operator catalog and default per Effektiver Typ, the coercion of the dialog's
 * value, the offer check, and the evaluation — bound to the Column's Effektiver Typ, never
 * guessed from the value.
 */
import { describe, expect, it } from 'vitest';

import type { EffectiveType } from './capabilities';
import { coerceFilterValue, filterFits, filterOperators, getDefaultOperator, needsValue } from './columnFilter';

const operatorsOf = (type: EffectiveType): string[] => filterOperators(type).map(o => o.operator);

const STRING_CATALOG = ['contains', 'startsWith', 'endsWith', 'equals', 'notEquals', 'isEmpty', 'isNotEmpty'];

describe('filterOperators — the catalog per Effektiver Typ', () => {
    it('offers text operators for strings', () => {
        expect(operatorsOf('string')).toEqual(STRING_CATALOG);
    });

    it('offers comparisons for numbers', () => {
        expect(operatorsOf('number')).toEqual([
            'equals',
            'notEquals',
            'greaterThan',
            'greaterThanOrEqual',
            'lessThan',
            'lessThanOrEqual',
            'isEmpty',
            'isNotEmpty',
        ]);
    });

    it('offers day comparisons for dates, worded as before/after', () => {
        expect(filterOperators('date')).toEqual([
            { operator: 'equals', label: 'json_table_filter_equals' },
            { operator: 'greaterThan', label: 'json_table_filter_after' },
            { operator: 'greaterThanOrEqual', label: 'json_table_filter_on_or_after' },
            { operator: 'lessThan', label: 'json_table_filter_before' },
            { operator: 'lessThanOrEqual', label: 'json_table_filter_on_or_before' },
            { operator: 'isEmpty', label: 'json_table_filter_is_empty' },
            { operator: 'isNotEmpty', label: 'json_table_filter_is_not_empty' },
        ]);
    });

    it('offers equality for booleans', () => {
        expect(operatorsOf('boolean')).toEqual(['equals', 'notEquals', 'isEmpty', 'isNotEmpty']);
    });

    it.each(['mixed', 'object', 'array', 'image', 'null'] as const)('offers the string catalog for %s', type => {
        expect(operatorsOf(type)).toEqual(STRING_CATALOG);
    });
});

describe('getDefaultOperator — the operator a new filter starts with', () => {
    it.each([
        ['number', 'equals'],
        ['date', 'equals'],
        ['boolean', 'equals'],
        ['string', 'contains'],
        ['mixed', 'contains'],
        ['object', 'contains'],
    ] as const)('%s ⇒ %s', (type, operator) => {
        expect(getDefaultOperator(type)).toBe(operator);
    });
});

describe('filterFits — a filter is valid only with an operator its Effektiver Typ offers', () => {
    it.each([
        ['string', { operator: 'contains', value: 'Raum' }],
        ['number', { operator: 'greaterThan', value: 20 }],
        ['date', { operator: 'lessThanOrEqual', value: '2024-12-01' }],
        ['boolean', { operator: 'equals', value: true }],
        ['object', { operator: 'contains', value: 'kitchen' }],
        ['number', { operator: 'isEmpty', value: '' }],
    ] as const)('%s offers %o', (type, filter) => {
        expect(filterFits(type, filter)).toBe(true);
    });

    it.each([
        ['number', { operator: 'contains', value: 'Raum' }],
        ['date', { operator: 'notEquals', value: '2024-12-01' }],
        ['date', { operator: 'startsWith', value: '2024' }],
        ['boolean', { operator: 'greaterThan', value: 1 }],
        ['string', { operator: 'lessThan', value: 'b' }],
    ] as const)('%s does not offer %o', (type, filter) => {
        expect(filterFits(type, filter)).toBe(false);
    });

    it('judges only the form when the Column has no known type', () => {
        expect(filterFits(undefined, { operator: 'lessThan', value: 5 })).toBe(true);
        expect(filterFits(undefined, { operator: 'matches', value: 5 })).toBe(false);
    });

    it.each([
        ['a bare value', 'kitchen'],
        ['no operator', { value: 'kitchen' }],
        ['no value', { operator: 'contains' }],
        ['an object value', { operator: 'equals', value: { nested: true } }],
        ['a null value', { operator: 'equals', value: null }],
        ['nothing', undefined],
    ])('rejects %s', (_case, filter) => {
        expect(filterFits('string', filter)).toBe(false);
    });
});

describe('needsValue — only the emptiness operators go without a value', () => {
    it.each([
        ['isEmpty', false],
        ['isNotEmpty', false],
        ['contains', true],
        ['equals', true],
        ['lessThan', true],
    ] as const)('%s ⇒ %s', (operator, expected) => {
        expect(needsValue(operator)).toBe(expected);
    });
});

describe("coerceFilterValue — the dialog's input as the value its Effektiver Typ compares", () => {
    it.each([
        ['42', 42],
        [' 7.5 ', 7.5],
        ['-3', -3],
        [42, 42],
    ] as const)('number: %o ⇒ %o', (input, expected) => {
        expect(coerceFilterValue('number', input)).toBe(expected);
    });

    it.each([
        ['true', true],
        ['false', false],
        [true, true],
        [false, false],
    ] as const)('boolean: %o ⇒ %o', (input, expected) => {
        expect(coerceFilterValue('boolean', input)).toBe(expected);
    });

    it("date: the date input's day stays, any readable instant becomes its local day", () => {
        expect(coerceFilterValue('date', '2024-12-01')).toBe('2024-12-01');
        expect(coerceFilterValue('date', new Date(2024, 11, 1, 23, 30).getTime())).toBe('2024-12-01');
    });

    it('text: trimmed, kept as typed', () => {
        expect(coerceFilterValue('string', '  Raum 1 ')).toBe('Raum 1');
        expect(coerceFilterValue('mixed', '007')).toBe('007');
        // A number kept from the time the Column was a number column
        expect(coerceFilterValue('string', 5)).toBe('5');
    });

    it.each([
        ['string', ''],
        ['string', '   '],
        ['number', ''],
        ['number', 'abc'],
        ['boolean', ''],
        ['boolean', 'yes'],
        ['date', ''],
        // No browser heuristic: V8 read this as 12 January
        ['date', '1.12.2024'],
    ] as const)('%s: %o is no filter', (type, input) => {
        expect(coerceFilterValue(type, input)).toBeUndefined();
    });
});
