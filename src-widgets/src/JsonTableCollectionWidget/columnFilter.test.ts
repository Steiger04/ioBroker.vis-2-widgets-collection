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
import type { Row } from '@tanstack/react-table';

import type { EffectiveType } from './capabilities';
import {
    coerceFilterValue,
    columnFilterFn,
    filterFits,
    filterOperators,
    getDefaultOperator,
    needsValue,
    type FilterOperator,
} from './columnFilter';
import { dateReader, type DateReader } from './dateReader';

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

// ── Evaluation ───────────────────────────────────────────────────────────────

type FlatRow = Record<string, unknown>;

/** A table row holding one cell, as TanStack hands it to a filterFn. */
const row = (cell: unknown): Row<FlatRow> => ({ getValue: () => cell }) as unknown as Row<FlatRow>;

/** Whether a cell passes a filter value on a Column of the given type. */
const passesValue = (type: EffectiveType, cell: unknown, filter: unknown, read: DateReader = dateReader()): boolean =>
    columnFilterFn(type, read)(row(cell), 'c', filter, () => undefined);

/** Whether a cell passes `{operator, value}` on a Column of the given type. */
const passes = (
    type: EffectiveType,
    cell: unknown,
    operator: FilterOperator,
    value: string | number | boolean,
    read?: DateReader,
): boolean => passesValue(type, cell, { operator, value }, read);

describe('columnFilterFn — string: text without case, nothing else', () => {
    it.each([
        ['Raum 1', 'contains', 'RAUM'],
        ['Raum 1', 'startsWith', 'raum'],
        ['Raum 1', 'endsWith', 'M 1'],
        ['Raum 1', 'equals', 'raum 1'],
        ['Raum 1', 'notEquals', 'Raum 2'],
        [42, 'contains', '4'],
    ] as const)('%o %s %o', (cell, operator, value) => {
        expect(passes('string', cell, operator, value)).toBe(true);
    });

    // Regression: the evaluation guessed a type from the values.
    it.each([
        ['"Raum 1" equals "Raum 01"', 'Raum 01', 'equals', 'Raum 1'],
        ['a day equals its midnight', '2024-12-01', 'equals', '2024-12-01T00:00'],
        ['"1.0" equals "1"', '1.0', 'equals', '1'],
        ['"10" is no number above "9"', '10', 'contains', '9'],
    ] as const)('never reads as date or number: %s', (_case, cell, operator, value) => {
        expect(passes('string', cell, operator, value)).toBe(false);
    });

    it('notEquals compares the text too', () => {
        expect(passes('string', '1.0', 'notEquals', '1')).toBe(true);
    });
});

describe('columnFilterFn — number: numerically only', () => {
    it.each([
        [42, 'equals', 42],
        ['42', 'equals', 42],
        [41, 'notEquals', 42],
        [43, 'greaterThan', 42],
        [42, 'greaterThanOrEqual', 42],
        [-1, 'lessThan', 0],
        [0, 'lessThanOrEqual', 0],
        // Regression: both were read as epochs — 9e10 as seconds (year 4821), 1e11 as ms (1973).
        [100000000000, 'greaterThan', 90000000000],
    ] as const)('%o %s %o', (cell, operator, value) => {
        expect(passes('number', cell, operator, value)).toBe(true);
    });

    it.each([
        [42, 'equals', 41],
        [42, 'greaterThan', 42],
        [42, 'lessThan', 42],
    ] as const)('%o not %s %o', (cell, operator, value) => {
        expect(passes('number', cell, operator, value)).toBe(false);
    });

    // Regression: a non-numeric cell fell back to text ("n/a" > "0").
    it.each(['n/a', '', ' ', true, { v: 0 }])('a non-numeric cell %o never matches a value operator', cell => {
        for (const operator of ['equals', 'notEquals', 'greaterThan', 'lessThanOrEqual'] as const) {
            expect(passes('number', cell, operator, 0)).toBe(false);
        }
    });
});

describe('columnFilterFn — boolean: true/false, "true"/"false", 1/0', () => {
    it.each([true, 'true', 1])('%o equals true', cell => {
        expect(passes('boolean', cell, 'equals', true)).toBe(true);
        expect(passes('boolean', cell, 'notEquals', false)).toBe(true);
        expect(passes('boolean', cell, 'equals', false)).toBe(false);
    });

    it.each([false, 'false', 0])('%o equals false', cell => {
        expect(passes('boolean', cell, 'equals', false)).toBe(true);
        expect(passes('boolean', cell, 'notEquals', true)).toBe(true);
    });

    it.each(['yes', 'TRUE', 2])('%o is no boolean and never matches', cell => {
        expect(passes('boolean', cell, 'equals', true)).toBe(false);
        expect(passes('boolean', cell, 'notEquals', true)).toBe(false);
    });
});

describe("columnFilterFn — date: the local day through the Column's Datums-Leser", () => {
    const dmy = dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' });

    it('equals every time of the local day', () => {
        for (const cell of [new Date(2024, 11, 1, 0, 30).getTime(), new Date(2024, 11, 1, 23, 30).getTime()]) {
            expect(passes('date', cell, 'equals', '2024-12-01')).toBe(true);
        }
        expect(passes('date', new Date(2024, 11, 2, 0, 30).getTime(), 'equals', '2024-12-01')).toBe(false);
    });

    it.each([
        ['30.11.2024', 'lessThan', true],
        ['01.12.2024', 'lessThan', false],
        ['01.12.2024', 'lessThanOrEqual', true],
        ['01.12.2024', 'greaterThan', false],
        ['01.12.2024', 'greaterThanOrEqual', true],
        ['02.12.2024', 'greaterThan', true],
    ] as const)('detected dd.MM.yyyy: %s %s 2024-12-01 ⇒ %s', (cell, operator, expected) => {
        expect(passes('date', cell, operator, '2024-12-01', dmy)).toBe(expected);
    });

    it('reads the tolerant patterns of a Column formatted as date', () => {
        expect(passes('date', '2024-12-01 10:00:00', 'equals', '2024-12-01')).toBe(true);
        expect(passes('date', String(new Date(2024, 11, 1, 10).getTime() / 1000), 'equals', '2024-12-01')).toBe(true);
    });

    // Regression: the browser parser read "1.12.2024" as 12 January.
    it('never matches a value the reader cannot read', () => {
        expect(passes('date', '1.12.2024', 'equals', '2024-01-12')).toBe(false);
        expect(passes('date', 'Raum 1', 'lessThan', '2099-01-01')).toBe(false);
    });
});

describe('columnFilterFn — mixed, object, array, image, null: text on the string form', () => {
    it('compares objects as their JSON, without case', () => {
        expect(passes('object', { room: 'Kitchen' }, 'contains', '"room":"kitchen"')).toBe(true);
        expect(passes('array', [1, 2], 'equals', '[1,2]')).toBe(true);
    });

    it('compares numbers in a mixed Column as text', () => {
        expect(passes('mixed', 5, 'equals', '5')).toBe(true);
        expect(passes('mixed', 1, 'equals', '1.0')).toBe(false);
        expect(passes('image', 'icons/Lamp.png', 'endsWith', '.PNG')).toBe(true);
    });
});

describe('columnFilterFn — isEmpty / isNotEmpty judge the cell alone', () => {
    const types: EffectiveType[] = ['string', 'number', 'date', 'boolean', 'object'];

    it.each([
        [null, true],
        [undefined, true],
        ['', true],
        [' ', false],
        [0, false],
        [false, false],
        [{}, false],
    ])('%o is empty: %s', (cell, empty) => {
        for (const type of types) {
            expect(passes(type, cell, 'isEmpty', '')).toBe(empty);
            expect(passes(type, cell, 'isNotEmpty', '')).toBe(!empty);
        }
    });

    it('a missing cell matches no value operator', () => {
        expect(passes('string', null, 'notEquals', 'x')).toBe(false);
        expect(passes('number', undefined, 'notEquals', 1)).toBe(false);
    });
});

describe('columnFilterFn — only a valid filter filters', () => {
    it('lets every row pass without a filter', () => {
        expect(passesValue('string', 'Raum 1', undefined)).toBe(true);
    });

    it.each([
        ['an operator the type does not offer', 'number', { operator: 'contains', value: '4' }],
        ['a bare value (no dialog form)', 'string', 'kitchen'],
        ['a bare number', 'number', 7],
    ] as const)('lets every row pass for %s', (_case, type, filter) => {
        expect(passesValue(type, 'Raum 1', filter)).toBe(true);
    });
});
