/**
 * Decision tables for the Spalten-Merge (CONTEXT.md, ADR-0094): the one intake, the one
 * merge rule and the effective Columns that runtime and editor share.
 *
 * @module JsonTableCollectionWidget/columns.test
 * @remarks
 * Inputs are state values exactly as ioBroker delivers them (a JSON string or an already
 * parsed value) plus the saved column configuration. Expected values come from the ticket's
 * tables, not from re-deriving the rule.
 */
import { describe, expect, it } from 'vitest';

import {
    depthWarningText,
    emptyState,
    headerNameOf,
    readJsonTable,
    type EffectiveColumn,
    type JsonTable,
} from './columns';
import type { ColumnConfigEntry } from './types';

describe('readJsonTable — one intake for runtime and editor', () => {
    // state value ⇒ rows
    it.each([
        ['a JSON array', '[{"a":1},{"a":2}]', [{ a: 1 }, { a: 2 }]],
        ['a JSON object', '{"a":1}', [{ a: 1 }]],
        ['an array', [{ a: 1 }, { a: 2 }], [{ a: 1 }, { a: 2 }]],
        ['an object', { a: 1 }, [{ a: 1 }]],
    ])('%s is data', (_case, value, rows) => {
        expect(readJsonTable(value, []).rows).toEqual(rows);
    });

    it.each([
        ['a JSON number', '5'],
        ['a JSON string', '"text"'],
        ['a JSON boolean', 'true'],
        ['JSON null', 'null'],
        ['invalid JSON', '{nope'],
        ['an empty string', ''],
        ['null', null],
        ['undefined', undefined],
        ['a number', 5],
        ['a boolean', false],
    ])('%s is no data', (_case, value) => {
        const table = readJsonTable(value, []);
        expect(table.rows).toEqual([]);
        expect(table.columns).toEqual([]);
    });
});

/** A saved Column entry with settings of its own. */
const saved = (path: string, extra: Partial<ColumnConfigEntry> = {}): ColumnConfigEntry => ({
    path,
    visible: true,
    headerName: `Saved ${path}`,
    ...extra,
});

/** The configuration a newly found path gets. */
const fresh = (path: string, headerName: string): ColumnConfigEntry => ({
    path,
    visible: true,
    headerName,
    sortable: 'auto',
    filterable: 'auto',
    enableHiding: 'auto',
});

const configsOf = (table: JsonTable): ColumnConfigEntry[] => table.columns.map(c => c.config);

describe('readJsonTable — the Spalten-Merge', () => {
    // The analysis orders paths alphabetically: a, b, c.
    const payload = '[{"c":3,"a":1,"b":2}]';

    it('without a saved configuration yields every found Column in analysis order', () => {
        expect(configsOf(readJsonTable(payload, []))).toEqual([fresh('a', 'a'), fresh('b', 'b'), fresh('c', 'c')]);
    });

    it('keeps saved Columns still present in their saved order and with their settings', () => {
        const c = saved('c', { width: 80, visible: false });
        const a = saved('a', { align: 'right', format: { type: 'number', numberDecimals: 1 } });
        const b = saved('b', { sortable: false });
        expect(configsOf(readJsonTable(payload, [c, a, b]))).toEqual([c, a, b]);
    });

    it('appends newly found paths visible with type defaults, after the saved ones', () => {
        const b = saved('b', { visible: false });
        expect(configsOf(readJsonTable(payload, [b]))).toEqual([b, fresh('a', 'a'), fresh('c', 'c')]);
    });

    it('leaves out saved Columns absent from the data', () => {
        const gone = saved('gone');
        const a = saved('a');
        expect(configsOf(readJsonTable(payload, [gone, a]))).toEqual([a, fresh('b', 'b'), fresh('c', 'c')]);
    });

    it('a saved path counts once', () => {
        const first = saved('a', { width: 1 });
        const twice = saved('a', { width: 2 });
        expect(configsOf(readJsonTable('[{"a":1}]', [first, twice]))).toEqual([first]);
    });

    it('a saved configuration over no data yields no Columns', () => {
        expect(readJsonTable('[]', [saved('a'), saved('b')]).columns).toEqual([]);
    });
});

/** The one Column of a single-path payload. */
const onlyColumn = (values: unknown[], config?: Partial<ColumnConfigEntry>): EffectiveColumn => {
    const table = readJsonTable(
        values.map(v => ({ x: v })),
        config ? [saved('x', config)] : [],
    );
    expect(table.columns).toHaveLength(1);
    return table.columns[0];
};

describe('readJsonTable — header names', () => {
    it.each([
        ['order.items[0].sku', 'sku'],
        ['order.total', 'total'],
        ['name', 'name'],
        ['items[0]', 'items[0]'],
    ])('a new path %s is headed by its last segment %s', (path, header) => {
        expect(headerNameOf(path)).toBe(header);
    });

    it('a new Column carries the derived header; a saved one its own, an empty one falls back to the path', () => {
        const table = readJsonTable('[{"order":{"total":1,"id":2,"note":3}}]', [
            saved('order.id', { headerName: 'Order' }),
            saved('order.note', { headerName: '' }),
        ]);
        expect(table.columns.map(c => [c.path, c.header])).toEqual([
            ['order.id', 'Order'],
            ['order.note', 'order.note'],
            ['order.total', 'total'],
        ]);
    });
});

describe('readJsonTable — the Effektiver Typ and the Datums-Leser', () => {
    // values, saved Format type ⇒ Effektiver Typ
    it.each([
        [[1, 2], undefined, 'number'],
        [[1, 2], 'string', 'string'],
        [['a', 'b'], 'number', 'number'],
        [['a', 'b'], 'date', 'date'],
        [['01.12.2024', '02.12.2024'], undefined, 'date'],
        [['01.12.2024', '02.12.2024'], 'string', 'string'],
        [['a.png', 'b.svg'], undefined, 'image'],
        [[true, false], undefined, 'boolean'],
    ] as const)('%j with Format %s is a %s Column', (values, format, type) => {
        expect(onlyColumn([...values], format ? { format: { type: format } } : undefined).type).toBe(type);
    });

    it('a detected date Column reads strictly by its detected format', () => {
        const column = onlyColumn(['01.12.2024', '02.12.2024']);
        expect(column.readDate('01.12.2024')).toBe(new Date(2024, 11, 1).getTime());
        expect(column.readDate('2024-12-01 10:00')).toBeNull();
    });

    it('a Column formatted as date without detection also reads the tolerant patterns', () => {
        const column = onlyColumn(['a', 'b'], { format: { type: 'date' } });
        expect(column.readDate('2024-12-01 10:00')).toBe(new Date(2024, 11, 1, 10).getTime());
    });
});

describe('readJsonTable — the depth warning', () => {
    /** One row nesting `depth` levels deep: {l1: {l2: … 1}}. */
    const nested = (depth: number): unknown => {
        let value: unknown = 1;
        for (let level = depth; level >= 1; level--) {
            value = { [`l${level}`]: value };
        }
        return [value];
    };

    // payload depth, tableMaxDepth ⇒ warning
    it.each([
        [3, 2, { actual: 3, configured: 2 }],
        [2, 2, null],
        [1, 2, null],
        [11, undefined, { actual: 11, configured: 10 }],
        [11, 0, { actual: 11, configured: 10 }],
        [10, undefined, null],
    ])('depth %s with tableMaxDepth %s ⇒ %j', (depth, maxDepth, warning) => {
        expect(readJsonTable(nested(depth), [], maxDepth).depthWarning).toEqual(warning);
    });

    it('no data, no warning', () => {
        expect(readJsonTable(null, []).depthWarning).toBeNull();
    });

    it('is one localized text', () => {
        const t = (key: string): string => `<${key}> {{actual}} > {{configured}}`;
        expect(depthWarningText({ actual: 12, configured: 4 }, t)).toBe('<json_table_depth_warning> 12 > 4');
    });
});

describe('emptyState — why no table is shown', () => {
    const data = '[{"a":1,"b":2}]';
    const columnsOf = (value: unknown, config: ColumnConfigEntry[] = []): readonly EffectiveColumn[] =>
        readJsonTable(value, config).columns;

    // ⇒ empty-state text (null = the table is shown), from OID type, valid type, Columns
    it.each([
        ['no OID', 'json_table_no_oid', undefined, false, columnsOf(data)],
        ['an invalid OID type', 'json_table_invalid_type', 'number', false, columnsOf(data)],
        ['no data', 'json_table_no_data', 'string', true, columnsOf(null)],
        ['an empty payload', 'json_table_no_data', 'string', true, columnsOf('[]')],
        [
            'an empty payload with a saved configuration',
            'json_table_no_data',
            'string',
            true,
            columnsOf('[]', [saved('a')]),
        ],
        [
            'every Column hidden',
            'json_table_all_columns_hidden',
            'string',
            true,
            columnsOf(data, [saved('a', { visible: false }), saved('b', { visible: false })]),
        ],
        ['one Column visible', null, 'string', true, columnsOf(data, [saved('a', { visible: false })])],
        ['no configuration', null, 'mixed', true, columnsOf(data)],
    ] as const)('%s ⇒ %s', (_case, text, oidType, validType, columns) => {
        expect(emptyState(oidType, validType, columns)).toBe(text);
    });
});

describe('readJsonTable — the image default', () => {
    const images = ['a.png', 'b.svg'];

    it('a detected image Column without format renders as image, centered', () => {
        const column = onlyColumn(images);
        expect(column.cellConfig).toEqual({ ...column.config, format: { type: 'image' }, align: 'center' });
    });

    it('keeps a saved alignment', () => {
        expect(onlyColumn(images, { align: 'right' }).cellConfig).toMatchObject({
            format: { type: 'image' },
            align: 'right',
        });
    });

    it('a Format type wins over the image default', () => {
        const column = onlyColumn(images, { format: { type: 'string' } });
        expect(column.cellConfig).toBe(column.config);
    });

    it('other Columns render with their configuration', () => {
        const column = onlyColumn([1, 2]);
        expect(column.cellConfig).toBe(column.config);
    });
});
