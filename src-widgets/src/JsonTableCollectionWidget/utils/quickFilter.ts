/**
 * Date-aware global (quick) filter for the JSON table.
 *
 * @module JsonTableCollectionWidget/utils/quickFilter
 * @remarks
 * The quick filter is a case-insensitive substring search. For configured date
 * columns it additionally matches the FORMATTED display value (what the user
 * sees), not just the raw value — otherwise a visible "31.12.2024" could never
 * match a raw ISO/epoch cell.
 *
 * The formatted value is produced through the formatter registry
 * (`FORMATTERS.date`), the same source the cell renderer uses, so display and
 * filter can never drift apart.
 */

import type { FilterFn } from '@tanstack/react-table';
import { FORMATTERS } from './cellFormatters';
import type { EffectiveColumn } from '../columns';
import type { DateReader } from '../dateReader';
import type { ColumnFormatConfig } from '../types';

/** What the quick filter reads of a Column (after the Spalten-Merge). */
export type QuickFilterColumn = Pick<EffectiveColumn, 'path' | 'config' | 'readDate'>;

/** A date-formatted Column: its format plus its Datums-Leser. */
interface DateColumn {
    fmt: ColumnFormatConfig;
    readDate: DateReader;
}

/**
 * Build the global quick-filter function for a table's Columns.
 *
 * @param columns - The table's Columns; only those formatted as `date` get display-value
 * matching, through their own Datums-Leser — the one the cell renderer reads with — looked
 * up by column id (== column path).
 * @returns A TanStack `FilterFn` for use as `globalFilterFn`.
 */
export function createDateAwareGlobalFilter(columns: readonly QuickFilterColumn[]): FilterFn<Record<string, unknown>> {
    // Precompute date columns: column id (== column path) → format config and reader.
    const dateColumns = new Map<string, DateColumn>();
    for (const { path, config, readDate } of columns) {
        if (config.format?.type === 'date') {
            dateColumns.set(path, { fmt: config.format, readDate });
        }
    }

    // Display string for a date cell, via the same formatter and reader the renderer uses.
    const dateDisplayValue = (cellValue: unknown, { fmt, readDate }: DateColumn): string =>
        FORMATTERS.date.format(cellValue, { fmt, defaultDisplay: '', readDate }).displayValue ?? '';

    return (row, columnId, filterValue: unknown): boolean => {
        // String() is only called on primitives; objects would stringify to
        // "[object Object]" and are treated as no term instead.
        const term =
            typeof filterValue === 'string'
                ? filterValue.toLowerCase()
                : typeof filterValue === 'number' || typeof filterValue === 'boolean'
                  ? String(filterValue).toLowerCase()
                  : '';
        if (!term) {
            return true;
        }
        const cellValue = row.getValue(columnId);
        if (cellValue === null || cellValue === undefined) {
            return false;
        }
        // Date columns: also match against the formatted display string.
        const dateFmt = dateColumns.get(columnId);
        if (dateFmt && dateDisplayValue(cellValue, dateFmt).toLowerCase().includes(term)) {
            return true;
        }
        // Default: substring match on the raw value. String() is restricted to
        // primitives to avoid the "[object Object]" trap on object/array cells.
        const cellStr =
            typeof cellValue === 'string'
                ? cellValue
                : typeof cellValue === 'number' || typeof cellValue === 'boolean'
                  ? String(cellValue)
                  : '';
        return cellStr.toLowerCase().includes(term);
    };
}
