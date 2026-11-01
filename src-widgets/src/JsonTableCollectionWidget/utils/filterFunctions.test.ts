import { describe, expect, it } from 'vitest';
import type { Row } from '@tanstack/react-table';
import { createDateFilterFn } from './filterFunctions';
import { dateReader } from '../dateReader';
import type { FilterOperator } from '../columnFilter';

// The date filter is rebuilt by the Spaltenfilter (ticket 04); these tests pin only its
// reading: the cell through the Column's Datums-Leser, compared at the local day.

type FlatRow = Record<string, unknown>;
const row = (value: unknown): Row<FlatRow> => ({ getValue: () => value }) as unknown as Row<FlatRow>;

const manual = createDateFilterFn(dateReader());
const detectedDmy = createDateFilterFn(dateReader({ type: 'date', dateFormat: 'dd.MM.yyyy' }));
const matches = (
    filterFn: ReturnType<typeof createDateFilterFn>,
    cell: unknown,
    operator: FilterOperator,
    value: string,
): boolean => filterFn(row(cell), 'c', { operator, value }, () => undefined);

describe("createDateFilterFn — compares the local day through the Column's Datums-Leser", () => {
    it('matches every time of the local day', () => {
        for (const cell of [new Date(2024, 11, 1, 0, 30).getTime(), new Date(2024, 11, 1, 23, 30).getTime()]) {
            expect(matches(manual, cell, 'equals', '2024-12-01')).toBe(true);
        }
        expect(matches(manual, new Date(2024, 11, 2, 0, 30).getTime(), 'equals', '2024-12-01')).toBe(false);
    });

    it('reads the date input value of a detected dd.MM.yyyy column', () => {
        expect(matches(detectedDmy, '01.12.2024', 'equals', '2024-12-01')).toBe(true);
        expect(matches(detectedDmy, '30.11.2024', 'lessThan', '2024-12-01')).toBe(true);
        expect(matches(detectedDmy, '01.12.2024', 'greaterThan', '2024-12-01')).toBe(false);
    });

    it('reads the tolerant patterns of a manual date column', () => {
        expect(matches(manual, '2024-12-01 10:00:00', 'equals', '2024-12-01')).toBe(true);
        expect(matches(manual, String(new Date(2024, 11, 1, 10).getTime() / 1000), 'equals', '2024-12-01')).toBe(true);
    });

    // Regression: the browser parser read "1.12.2024" as 12 January.
    it('never matches a value the reader cannot read', () => {
        expect(matches(manual, '1.12.2024', 'equals', '2024-01-12')).toBe(false);
        expect(matches(manual, '1.12.2024', 'notEquals', '2024-01-12')).toBe(false);
    });
});
