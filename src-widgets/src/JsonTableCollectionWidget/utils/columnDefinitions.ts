/**
 * Column definition builder utilities for TanStack Table.
 *
 * @module JsonTableCollectionWidget/utils/columnDefinitions
 * @remarks
 * Provides helper functions and the main `buildColumnDefs` factory
 * for constructing TanStack Table column definitions from widget configuration.
 */

import type { ColumnDef, SortingFn, Row } from '@tanstack/react-table';
import type { DateFormatId, JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';
import type { ColumnConfigEntry } from '../types';

import { normalizeToIsoDate } from './formatters';

// ── Types ─────────────────────────────────────────────────────────────────────

/** Flat row type used by TanStack Table */
type FlatRow = Record<string, unknown>;

/** Options for buildColumnDefs function */
export interface BuildColumnDefsOptions {
    /** User-configured column definitions from widget data */
    columnConfig: ColumnConfigEntry[];
    /** Auto-detected columns from JSON analysis */
    analysisColumns: JsonTableColumn[];
    /** Widget data flags for table features */
    widgetData: {
        tableSorting: boolean;
        tableFiltering: boolean;
        tableRowSelection: boolean;
    };
    /** Cell renderer component for configured columns */
    renderConfiguredCell: (value: unknown, config: ColumnConfigEntry) => React.ReactNode;
    /** Cell renderer component for auto-detected columns */
    renderAutoDetectedCell: (value: unknown) => React.ReactNode;
    /** Selection column header renderer */
    renderSelectionHeader?: (table: {
        getIsSomePageRowsSelected: () => boolean;
        getIsAllPageRowsSelected: () => boolean;
        getToggleAllPageRowsSelectedHandler: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
    /** Selection column cell renderer */
    renderSelectionCell?: (row: {
        getIsSelected: () => boolean;
        getToggleSelectedHandler: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
}

// ── Helper: toSortableTime ────────────────────────────────────────────────────

/**
 * Converts a date value to a sortable timestamp (milliseconds since epoch).
 *
 * @param value - The value to convert (number, string, or null/undefined)
 * @param inputFormat - Optional date format identifier for string parsing
 * @returns Timestamp in milliseconds, or 0 for invalid/null values
 * @example
 * toSortableTime(1704067200000)  // epoch-ms timestamp
 * toSortableTime(1704067200)     // epoch-s timestamp (auto-detected)
 * toSortableTime('2024-01-01')   // ISO date string
 * toSortableTime('01.01.2024', 'dd.MM.yyyy')  // German date format
 */
export function toSortableTime(value: unknown, inputFormat?: DateFormatId): number {
    if (value === null || value === undefined) {
        return 0;
    }
    if (typeof value === 'number') {
        // Using 1e11 threshold to correctly handle pre-2001 millisecond timestamps
        return value >= 1e11 ? value : value * 1000;
    }
    if (typeof value === 'string') {
        const iso = normalizeToIsoDate(value, inputFormat);
        if (!iso) {
            return 0;
        }
        return new Date(iso).getTime();
    }
    return 0;
}

// ── Helper: createDateSortingFn ────────────────────────────────────────────────

/**
 * Creates a custom sorting function for date columns.
 *
 * @param inputFormat - Optional date format identifier for parsing string values
 * @returns A TanStack Table compatible sorting function
 * @example
 * const sortingFn = createDateSortingFn('dd.MM.yyyy');
 * // Use in column definition:
 * const columnDef = {
 *   id: 'dateColumn',
 *   sortingFn: sortingFn,
 * };
 */
export function createDateSortingFn(inputFormat?: DateFormatId): SortingFn<FlatRow> {
    return (rowA: Row<FlatRow>, rowB: Row<FlatRow>, columnId: string): number =>
        toSortableTime(rowA.getValue(columnId), inputFormat) - toSortableTime(rowB.getValue(columnId), inputFormat);
}

// ── Main: buildColumnDefs ──────────────────────────────────────────────────────

/**
 * Builds TanStack Table column definitions from widget configuration.
 *
 * @param options - Configuration options including column config, analysis data, and renderers
 * @returns Array of TanStack Table column definitions
 * @remarks
 * This function handles three types of columns:
 * 1. Selection column (optional, based on tableRowSelection flag)
 * 2. Configured columns (from user-defined columnConfig)
 * 3. Auto-detected columns (fallback when no columnConfig exists)
 * Date sorting is automatically configured for columns with date format detection.
 */
export function buildColumnDefs(options: BuildColumnDefsOptions): ColumnDef<FlatRow>[] {
    const {
        columnConfig,
        analysisColumns,
        widgetData,
        renderConfiguredCell,
        renderAutoDetectedCell,
        renderSelectionHeader,
        renderSelectionCell,
    } = options;

    // Build map of analysis date formats for fallback
    const analysisDateFormats = new Map<string, DateFormatId | undefined>(
        analysisColumns.map(c => [c.path, c.dateFormat]),
    );

    // ── Selection Column ──────────────────────────────────────────────────────

    const selectionCol: ColumnDef<FlatRow> | null =
        widgetData.tableRowSelection && renderSelectionHeader && renderSelectionCell
            ? {
                  id: '__select__',
                  size: 48,
                  enableResizing: false,
                  enableSorting: false,
                  enableColumnFilter: false,
                  header: ({ table }) => renderSelectionHeader(table),
                  cell: ({ row }) => renderSelectionCell(row),
                  meta: { align: 'center', width: 48 },
              }
            : null;

    // ── Data Columns ───────────────────────────────────────────────────────────

    let dataCols: ColumnDef<FlatRow>[];

    if (columnConfig.length > 0) {
        // Configured columns mode
        dataCols = columnConfig
            .filter(cfg => cfg.visible)
            .map(cfg => {
                const inputFmt = cfg.format?.dateInputFormat ?? analysisDateFormats.get(cfg.path);
                const isDate = cfg.format?.type === 'date';

                const col: ColumnDef<FlatRow> = {
                    id: cfg.path,
                    size: cfg.width ?? 150,
                    // FIX-P2-1: Add optional chaining and nullish coalescing for safe property access
                    accessorFn: (row: FlatRow) => row?.[cfg.path] ?? null,
                    header: cfg.headerName || cfg.path,
                    enableSorting: cfg.sortable ?? widgetData.tableSorting !== false,
                    enableColumnFilter: cfg.filterable ?? widgetData.tableFiltering === true,
                    ...(isDate && { sortingFn: createDateSortingFn(inputFmt) }),
                    cell: ({ getValue }) => renderConfiguredCell(getValue(), cfg),
                    meta: {
                        align: cfg.align || 'left',
                        width: cfg.width,
                    },
                };
                return col;
            });
    } else {
        // Auto-detected columns mode
        dataCols = analysisColumns.map(col => {
            const isDate = col.type === 'date' && col.dateFormat;
            const fmt = col.dateFormat;

            const colDef: ColumnDef<FlatRow> = {
                id: col.path,
                size: 150,
                accessorFn: (row: FlatRow) => row[col.path],
                header: col.path.split('.').pop() || col.path,
                enableSorting: widgetData.tableSorting !== false,
                enableColumnFilter: widgetData.tableFiltering === true,
                ...(isDate && { sortingFn: createDateSortingFn(fmt) }),
                cell: ({ getValue }) => renderAutoDetectedCell(getValue()),
                meta: { align: 'left' },
            };
            return colDef;
        });
    }

    return selectionCol ? [selectionCol, ...dataCols] : dataCols;
}
