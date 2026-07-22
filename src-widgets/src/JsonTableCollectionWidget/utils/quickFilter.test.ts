import { describe, expect, it } from 'vitest';
import { createDateAwareGlobalFilter } from './quickFilter';
import type { ColumnConfigEntry } from '../types';

const dateCol = (path: string, dateFormat?: string): ColumnConfigEntry => ({
    path,
    visible: true,
    headerName: path,
    format: { type: 'date', dateFormat },
});
const textCol = (path: string): ColumnConfigEntry => ({ path, visible: true, headerName: path });

// Minimal row shape: the filter only calls row.getValue(columnId).
type FakeRow = { getValue: (columnId: string) => unknown };
type QuickFilter = (row: FakeRow, columnId: string, filterValue: unknown) => boolean;
const build = (columns: ColumnConfigEntry[]): QuickFilter =>
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
});
