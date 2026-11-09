import { describe, expect, it } from 'vitest';
import { createTable, getCoreRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { createDateAwareGlobalFilter, quickFilterOptions, type QuickFilterColumn } from './quickFilter';
import { dateReader, type DateReader } from '../dateReader';

/** A Column formatted as date, read by its Datums-Leser (default: no detection). */
const dateCol = (path: string, dateFormat?: string, readDate: DateReader = dateReader()): QuickFilterColumn => ({
    path,
    config: { path, visible: true, headerName: path, format: { type: 'date', dateFormat } },
    readDate,
});
const textCol = (path: string): QuickFilterColumn => ({
    path,
    config: { path, visible: true, headerName: path },
    readDate: dateReader(),
});

// Minimal row shape: the filter only calls row.getValue(columnId).
type FakeRow = { getValue: (columnId: string) => unknown };
type QuickFilter = (row: FakeRow, columnId: string, filterValue: unknown) => boolean;
const build = (columns: QuickFilterColumn[]): QuickFilter =>
    createDateAwareGlobalFilter(columns) as unknown as QuickFilter;
const row = (val: unknown): FakeRow => ({ getValue: () => val });

describe('createDateAwareGlobalFilter', () => {
    const filter = build([dateCol('d', 'dd.MM.yyyy'), textCol('t')]);

    it('matches everything when the term is empty', () => {
        expect(filter(row('x'), 't', '')).toBe(true);
        expect(filter(row(null), 't', '')).toBe(true);
    });

    it('rejects null/undefined cells for a non-empty term', () => {
        expect(filter(row(null), 't', 'x')).toBe(false);
        expect(filter(row(undefined), 't', 'x')).toBe(false);
    });

    it('matches a raw substring, case-insensitive', () => {
        expect(filter(row('Hello World'), 't', 'world')).toBe(true);
        expect(filter(row('Hello'), 't', 'xyz')).toBe(false);
    });

    it('stringifies numbers and booleans for matching', () => {
        expect(filter(row(42), 't', '42')).toBe(true);
        expect(filter(row(true), 't', 'true')).toBe(true);
    });

    it('does not match objects (avoids the [object Object] trap)', () => {
        expect(filter(row({ a: 1 }), 't', 'object')).toBe(false);
    });

    it('matches a date column by its formatted display value via the registry', () => {
        // raw ISO 2024-12-31 → formatted dd.MM.yyyy → 31.12.2024
        expect(filter(row('2024-12-31'), 'd', '31.12.2024')).toBe(true);
        expect(filter(row('2024-12-31'), 'd', '31.12')).toBe(true);
    });

    it('still matches a date column by its raw value', () => {
        expect(filter(row('2024-12-31'), 'd', '2024')).toBe(true);
    });

    it('rejects a non-matching date term', () => {
        expect(filter(row('2024-12-31'), 'd', '99.99')).toBe(false);
    });

    // Regression: epoch strings were sorted as dates but displayed raw, so the quick
    // filter could not find the date the user sees.
    it("matches a manual date column's epoch string by its formatted display", () => {
        const epochSeconds = String(new Date(2024, 11, 1, 10, 30).getTime() / 1000);
        expect(filter(row(epochSeconds), 'd', '01.12.2024')).toBe(true);
    });

    it("reads a detected date column through the Column's own Datums-Leser", () => {
        const detected = build([dateCol('d', 'yyyy/MM/dd', dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' }))]);
        expect(detected(row('01.12.2024'), 'd', '2024/12/01')).toBe(true);
    });

    it('matches a Column that is no date by its raw value only', () => {
        const detected = build([textCol('t')]);
        expect(detected(row('2024-12-31'), 't', '31.12.2024')).toBe(false);
    });

    it('does not match a date the browser would have guessed', () => {
        // "1.12.2024" is no date → displayed raw; the browser read it as 12 January.
        expect(filter(row('1.12.2024'), 'd', '12.01.2024')).toBe(false);
    });
});

describe('quickFilterOptions — on a real table', () => {
    /** The rows a table with these options keeps for a quick-filter term. */
    const rowsFound = (data: Record<string, unknown>[], columns: string[], term: string): unknown[] => {
        const table = createTable<Record<string, unknown>>({
            data,
            columns: columns.map(id => ({ id, accessorFn: row => row[id] ?? null })),
            state: { globalFilter: term },
            onStateChange: () => undefined,
            renderFallbackValue: null,
            getCoreRowModel: getCoreRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            ...quickFilterOptions(columns.map(textCol)),
        });
        table.setOptions(previous => ({ ...previous, state: { ...table.initialState, globalFilter: term } }));
        return table.getFilteredRowModel().rows.map(r => r.original);
    };

    it('searches a Column whose first row holds no value', () => {
        const data = [{ name: null }, { name: 'Lampe' }];
        expect(rowsFound(data, ['name'], 'lamp')).toEqual([{ name: 'Lampe' }]);
    });

    it('searches a boolean Column', () => {
        const data = [{ on: true }, { on: false }];
        expect(rowsFound(data, ['on'], 'false')).toEqual([{ on: false }]);
    });
});
