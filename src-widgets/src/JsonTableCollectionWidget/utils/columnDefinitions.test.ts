import { describe, expect, it } from 'vitest';
import type { Row } from '@tanstack/react-table';
import { createDateSortingFn } from './columnDefinitions';
import { dateReader } from '../dateReader';

type FlatRow = Record<string, unknown>;
// The sorting function only calls row.getValue(columnId).
const row = (value: unknown): Row<FlatRow> => ({ getValue: () => value }) as unknown as Row<FlatRow>;
const sortAscending = (values: unknown[], sortingFn: ReturnType<typeof createDateSortingFn>): unknown[] =>
    values
        .map(row)
        .sort((a, b) => sortingFn(a, b, 'c'))
        .map(r => r.getValue('c'));

describe("createDateSortingFn — sorts by the Column's Datums-Leser", () => {
    it('orders the tolerant patterns and epoch strings of a manual date column chronologically', () => {
        const at10 = String(new Date(2024, 11, 1, 10).getTime() / 1000);
        const sorted = sortAscending(
            ['2024-12-02 09:00', at10, '2024-12-01T09:00', '2024-12-01 11:00'],
            createDateSortingFn(dateReader()),
        );
        expect(sorted).toEqual(['2024-12-01T09:00', at10, '2024-12-01 11:00', '2024-12-02 09:00']);
    });

    it('counts an unreadable value as 0, as before', () => {
        // "Dec 1, 2024" is no date (no browser heuristic) — it sorts with the unreadable.
        const sorted = sortAscending(
            ['2024-12-01 10:00', 'Dec 1, 2024', '2024-11-30 10:00'],
            createDateSortingFn(dateReader()),
        );
        expect(sorted).toEqual(['Dec 1, 2024', '2024-11-30 10:00', '2024-12-01 10:00']);
    });

    it('reads a detected date column strictly', () => {
        const sorted = sortAscending(
            ['02.12.2024', '01.12.2024 23:00', '01.12.2024'],
            createDateSortingFn(dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' })),
        );
        expect(sorted).toEqual(['01.12.2024', '01.12.2024 23:00', '02.12.2024']);
    });
});
