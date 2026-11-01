import { describe, expect, it } from 'vitest';
import { sortingFns, type ColumnDef, type Row, type SortingFn } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import { buildColumnDefs } from './columnDefinitions';
import { tableCapabilities } from '../capabilities';
import { readJsonTable, type EffectiveColumn } from '../columns';
import type { ColumnConfigEntry } from '../types';

type FlatRow = Record<string, unknown>;
// The sorting function only calls row.getValue(columnId).
const row = (value: unknown): Row<FlatRow> => ({ getValue: () => value }) as unknown as Row<FlatRow>;
const sortAscending = (values: unknown[], sortingFn: SortingFn<FlatRow>): unknown[] =>
    values
        .map(row)
        .sort((a, b) => sortingFn(a, b, 'c'))
        .map(r => r.getValue('c'));

// ── buildColumnDefs — the TanStack adapter over the merged Columns ─────────────

/** The parts of a data column definition the tests read. */
type DataDef = {
    id: string;
    size: number;
    header: string;
    accessorFn: (row: FlatRow) => unknown;
    enableSorting: boolean;
    enableColumnFilter: boolean;
    enableHiding: boolean;
    sortingFn?: SortingFn<FlatRow> | string;
    filterFn: unknown;
    cell: (context: { getValue: () => unknown }) => unknown;
    meta: Record<string, unknown>;
};

/** The column definitions of a payload under a saved configuration. */
const defsOf = (
    value: unknown,
    saved: ColumnConfigEntry[] = [],
    settings: Record<string, unknown> = {},
): ColumnDef<FlatRow>[] =>
    buildColumnDefs({
        columns: readJsonTable(value, saved).columns,
        capabilities: tableCapabilities(settings),
        // The test renders a cell as what it was handed
        renderCell: (value, column) => ({ value, column }) as unknown as ReactNode,
        renderSelectionHeader: () => 'all',
        renderSelectionCell: () => 'one',
    });

const dataDefs = (defs: ColumnDef<FlatRow>[]): DataDef[] => defs as unknown as DataDef[];
const idsOf = (defs: ColumnDef<FlatRow>[]): string[] => dataDefs(defs).map(def => def.id);
const defOf = (defs: ColumnDef<FlatRow>[], id: string): DataDef => {
    const def = dataDefs(defs).find(d => d.id === id);
    expect(def).toBeDefined();
    return def as DataDef;
};

const saved = (path: string, extra: Partial<ColumnConfigEntry> = {}): ColumnConfigEntry => ({
    path,
    visible: true,
    headerName: `Saved ${path}`,
    ...extra,
});

describe('buildColumnDefs — the runtime shows the merged Columns', () => {
    it('a saved configuration plus a new field in the payload ⇒ the new Column appears', () => {
        expect(idsOf(defsOf('[{"a":1,"b":2}]', [saved('a')]))).toEqual(['a', 'b']);
    });

    it('a saved Column missing from the payload ⇒ no empty column', () => {
        expect(idsOf(defsOf('[{"a":1}]', [saved('gone'), saved('a')]))).toEqual(['a']);
    });

    it('without a configuration ⇒ every found Column', () => {
        expect(idsOf(defsOf('[{"b":2,"a":1}]'))).toEqual(['a', 'b']);
    });

    it('a Column hidden in the configuration gets no definition', () => {
        expect(idsOf(defsOf('[{"a":1,"b":2}]', [saved('a', { visible: false })]))).toEqual(['b']);
    });

    it('row selection puts the selection column first', () => {
        expect(idsOf(defsOf('[{"a":1}]', [], { tableRowSelection: true }))).toEqual(['__select__', 'a']);
    });
});

describe('buildColumnDefs — one definition per Column', () => {
    it('reads accessor, header, width and alignment from the Column', () => {
        const defs = defsOf('[{"n":{"x":1,"y":2}}]', [saved('n.x', { width: 90, align: 'right' })]);
        const configured = defOf(defs, 'n.x');
        expect(configured.accessorFn({ 'n.x': 7 })).toBe(7);
        expect(configured.accessorFn({})).toBeNull();
        expect([configured.header, configured.size, configured.meta]).toEqual([
            'Saved n.x',
            90,
            { align: 'right', width: 90, columnType: 'number' },
        ]);
        const fresh = defOf(defs, 'n.y');
        expect([fresh.header, fresh.size, fresh.meta.align, fresh.meta.columnType]).toEqual([
            'y',
            150,
            'left',
            'number',
        ]);
    });

    it('a detected image Column without format renders as image and is centered', () => {
        const def = defOf(defsOf('[{"i":"a.png"},{"i":"b.svg"}]'), 'i');
        expect(def.meta.align).toBe('center');
        const { column } = def.cell({ getValue: () => 'a.png' }) as { column: EffectiveColumn };
        expect(column.cellConfig.format).toEqual({ type: 'image' });
    });

    it('hands every cell its value and its Column', () => {
        const def = defOf(defsOf('[{"a":1}]'), 'a');
        const rendered = def.cell({ getValue: () => 42 }) as { value: unknown; column: EffectiveColumn };
        expect([rendered.value, rendered.column.path, rendered.column.type]).toEqual([42, 'a', 'number']);
    });

    it('the Column capabilities follow the Effektiver Typ and the overrides', () => {
        const defs = defsOf('[{"flag":true,"n":1,"s":"x"}]', [saved('s', { sortable: false })], {
            tableFiltering: true,
            tableHiding: false,
        });
        const capabilitiesOf = (id: string): boolean[] => {
            const def = defOf(defs, id);
            return [def.enableSorting, def.enableColumnFilter, def.enableHiding];
        };
        expect(capabilitiesOf('flag')).toEqual([false, true, false]);
        expect(capabilitiesOf('n')).toEqual([true, true, false]);
        expect(capabilitiesOf('s')).toEqual([false, true, false]);
    });

    it('every data Column carries its Spaltenfilter', () => {
        expect(dataDefs(defsOf('[{"a":1,"b":"x"}]')).every(def => typeof def.filterFn === 'function')).toBe(true);
    });
});

describe('buildColumnDefs — sorting follows the Effektiver Typ', () => {
    /** The sorting TanStack runs for the Column: its own function, or the built-in it names. */
    const sortOf = (values: unknown[], config?: Partial<ColumnConfigEntry>): SortingFn<FlatRow> | undefined => {
        const { sortingFn } = defOf(
            defsOf(
                values.map(v => ({ c: v })),
                config ? [saved('c', config)] : [],
            ),
            'c',
        );
        return typeof sortingFn === 'string' ? sortingFns[sortingFn as keyof typeof sortingFns] : sortingFn;
    };

    it('a detected date Column sorts chronologically by its Datums-Leser', () => {
        const sortingFn = sortOf(['02.12.2024', '01.12.2024']);
        expect(sortingFn && sortAscending(['02.12.2024', '10.11.2024', '01.12.2024'], sortingFn)).toEqual([
            '10.11.2024',
            '01.12.2024',
            '02.12.2024',
        ]);
    });

    it('a detected date Column reads its values strictly', () => {
        const sortingFn = sortOf(['02.12.2024', '01.12.2024']);
        expect(sortingFn && sortAscending(['02.12.2024', '01.12.2024 23:00', '01.12.2024'], sortingFn)).toEqual([
            '01.12.2024',
            '01.12.2024 23:00',
            '02.12.2024',
        ]);
    });

    it('a Column formatted as date orders the tolerant patterns and epoch strings chronologically', () => {
        const at10 = String(new Date(2024, 11, 1, 10).getTime() / 1000);
        const sortingFn = sortOf(['x', 'y'], { format: { type: 'date' } });
        expect(
            sortingFn && sortAscending(['2024-12-02 09:00', at10, '2024-12-01T09:00', '2024-12-01 11:00'], sortingFn),
        ).toEqual(['2024-12-01T09:00', at10, '2024-12-01 11:00', '2024-12-02 09:00']);
    });

    it('an unreadable date counts as 0', () => {
        // "Dec 1, 2024" is no date (no browser heuristic) — it sorts with the unreadable.
        const sortingFn = sortOf(['x', 'y'], { format: { type: 'date' } });
        expect(sortingFn && sortAscending(['2024-12-01 10:00', 'Dec 1, 2024', '2024-11-30 10:00'], sortingFn)).toEqual([
            'Dec 1, 2024',
            '2024-11-30 10:00',
            '2024-12-01 10:00',
        ]);
    });

    it('a text Column sorts in natural text order, without case', () => {
        const sortingFn = sortOf(['Raum 10', 'raum 2']);
        expect(sortingFn && sortAscending(['Raum 10', 'raum 2', 'Raum 1', 'Bad'], sortingFn)).toEqual([
            'Bad',
            'Raum 1',
            'raum 2',
            'Raum 10',
        ]);
    });

    it('a detected date Column formatted as text is no date: it sorts as text', () => {
        const sortingFn = sortOf(['02.12.2024', '01.12.2024'], { format: { type: 'string' } });
        expect(sortingFn && sortAscending(['02.12.2024', '10.11.2024', '01.12.2024'], sortingFn)).toEqual([
            '01.12.2024',
            '02.12.2024',
            '10.11.2024',
        ]);
    });

    it('number values formatted as text sort by their text, not their value', () => {
        // Natural text order reads digit runs: "1.5" before "1.25"
        const sortingFn = sortOf([2, 1], { format: { type: 'string' } });
        expect(sortingFn && sortAscending([10, 1.25, 1.5], sortingFn)).toEqual([1.5, 1.25, 10]);
    });

    it('a number Column sorts numerically', () => {
        const sortingFn = sortOf([10, 9]);
        expect(sortingFn && sortAscending([10, 9, 100, -1], sortingFn)).toEqual([-1, 9, 10, 100]);
    });

    it('string values formatted as number sort numerically', () => {
        const sortingFn = sortOf(['10', '9'], { format: { type: 'number' } });
        expect(sortingFn && sortAscending(['10', '9', '100', '-1.5'], sortingFn)).toEqual(['-1.5', '9', '10', '100']);
    });

    it('an unreadable number counts as 0, as for dates', () => {
        const sortingFn = sortOf(['10', '9'], { format: { type: 'number' } });
        expect(sortingFn && sortAscending(['5', 'n/a', '-1'], sortingFn)).toEqual(['-1', 'n/a', '5']);
    });

    it('a boolean Column keeps the table default', () => {
        expect(sortOf([true, false])).toBeUndefined();
    });
});
