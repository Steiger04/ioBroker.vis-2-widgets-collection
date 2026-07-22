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
import type { ColumnConfigEntry, ColumnFormatConfig } from '../types';

/**
 * Build the global quick-filter function for a set of configured columns.
 *
 * @param columnConfig - The table's column configuration; only `date` columns
 * get display-value matching, looked up by column id (== column path).
 * @returns A TanStack `FilterFn` for use as `globalFilterFn`.
 */
export function createDateAwareGlobalFilter(columnConfig: ColumnConfigEntry[]): FilterFn<Record<string, unknown>> {
    // Precompute date columns: column id (== column path) → format config.
    const dateColumns = new Map<string, ColumnFormatConfig>();
    for (const cfg of columnConfig) {
        if (cfg.format?.type === 'date') {
            dateColumns.set(cfg.path, cfg.format);
        }
    }

    // Display string for a date cell, via the same formatter the renderer uses.
    const dateDisplayValue = (cellValue: unknown, dateFmt: ColumnFormatConfig): string =>
        FORMATTERS.date.format(cellValue, { fmt: dateFmt, defaultDisplay: '' }).displayValue ?? '';

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
