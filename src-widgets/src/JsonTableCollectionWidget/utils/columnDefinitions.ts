/**
 * Column definition builder utilities for TanStack Table.
 *
 * @module JsonTableCollectionWidget/utils/columnDefinitions
 * @remarks
 * Provides helper functions and the main `buildColumnDefs` factory
 * for constructing TanStack Table column definitions from widget configuration.
 */

import type { ColumnDef, SortingFn, Row } from '@tanstack/react-table';
import type { DateFormatId, DetectedType, JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';
import type { ColumnConfigEntry } from '../types';
import { columnCapabilities, effectiveType, type TableCapabilities } from '../capabilities';

import { toDateMs } from './formatters';
import { createDateFilterFn } from './filterFunctions';

// ── Types ─────────────────────────────────────────────────────────────────────

/** Flat row type used by TanStack Table */
type FlatRow = Record<string, unknown>;

/** Options for buildColumnDefs function */
export interface BuildColumnDefsOptions {
    /** User-configured column definitions from widget data */
    columnConfig: ColumnConfigEntry[];
    /** Auto-detected columns from JSON analysis */
    analysisColumns: JsonTableColumn[];
    /** The resolved Tabellen-Fähigkeiten (see `../capabilities`) */
    capabilities: TableCapabilities;
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
 * Delegates to the canonical {@link toDateMs} normalizer so that sorting, filtering
 * and the quick filter all agree on the same instant, with full precision (the previous
 * string path collapsed values to a UTC day, which broke within-day ordering).
 *
 * @param value - The value to convert (number, string, Date, or null/undefined)
 * @param inputFormat - Optional date format identifier for string parsing
 * @returns Timestamp in milliseconds, or 0 for invalid/null values
 * @example
 * toSortableTime(1704067200000)  // epoch-ms timestamp
 * toSortableTime(1704067200)     // epoch-s timestamp (auto-detected)
 * toSortableTime('2024-01-01')   // ISO date string
 * toSortableTime('01.01.2024', 'dd.MM.yyyy')  // German date format
 */
export function toSortableTime(value: unknown, inputFormat?: DateFormatId): number {
    return toDateMs(value, inputFormat) ?? 0;
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
        capabilities,
        renderConfiguredCell,
        renderAutoDetectedCell,
        renderSelectionHeader,
        renderSelectionCell,
    } = options;

    // Build map of analysis date formats and types for fallback
    const analysisDateFormats = new Map<string, DateFormatId | undefined>(
        analysisColumns.map(c => [c.path, c.dateFormat]),
    );
    const analysisTypes = new Map<string, DetectedType>(analysisColumns.map(c => [c.path, c.type]));

    // ── Selection Column ──────────────────────────────────────────────────────

    const selectionCol: ColumnDef<FlatRow> | null =
        capabilities.rowSelection && renderSelectionHeader && renderSelectionCell
            ? {
                  id: '__select__',
                  size: 48,
                  enableResizing: false,
                  enableSorting: false,
                  enableColumnFilter: false,
                  enableHiding: false,
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
                const detectedType = analysisTypes.get(cfg.path) || 'string';
                // Unify "is this a date column?" for sort, filter AND the filter dialog (meta.columnType).
                // Previously sort used cfg.format.type while the filter dialog used the auto-detected type,
                // so manually configuring a string column as date gave date sort but string filter operators.
                const isDateColumn = cfg.format?.type === 'date' || detectedType === 'date';
                const allowed = columnCapabilities(capabilities, effectiveType(cfg.format?.type, detectedType), cfg);

                const col: ColumnDef<FlatRow> = {
                    id: cfg.path,
                    size: cfg.width ?? 150,
                    // FIX-P2-1: Add optional chaining and nullish coalescing for safe property access
                    accessorFn: (row: FlatRow) => row?.[cfg.path] ?? null,
                    header: cfg.headerName || cfg.path,
                    enableSorting: allowed.sortable,
                    enableColumnFilter: allowed.filterable,
                    enableHiding: allowed.hideable,
                    ...(isDateColumn && {
                        sortingFn: createDateSortingFn(inputFmt),
                        filterFn: createDateFilterFn(inputFmt),
                    }),
                    cell: ({ getValue }) =>
                        renderConfiguredCell(
                            getValue(),
                            // 'auto' (no format) on a detected image column → render as image,
                            // consistent with auto-detected mode. Without this, configuring one
                            // column (which switches the table to configured-columns mode) would
                            // make sibling image columns fall back to text. Explicit 'string'
                            // format is unaffected.
                            !cfg.format && detectedType === 'image'
                                ? { ...cfg, format: { type: 'image' as const } }
                                : cfg,
                        ),
                    meta: {
                        align: cfg.align || 'left',
                        width: cfg.width,
                        columnType: isDateColumn ? 'date' : detectedType,
                    },
                };
                return col;
            });
    } else {
        // Auto-detected columns mode - no Format type, so the type defaults of the detected type
        dataCols = analysisColumns.map(col => {
            const isDate = col.type === 'date' && col.dateFormat;
            const fmt = col.dateFormat;
            const allowed = columnCapabilities(capabilities, effectiveType(undefined, col.type));

            const colDef: ColumnDef<FlatRow> = {
                id: col.path,
                size: 150,
                accessorFn: (row: FlatRow) => row[col.path],
                header: col.path.split('.').pop() || col.path,
                enableSorting: allowed.sortable,
                enableColumnFilter: allowed.filterable,
                enableHiding: allowed.hideable,
                ...(isDate && {
                    sortingFn: createDateSortingFn(fmt),
                    filterFn: createDateFilterFn(fmt),
                }),
                // Auto-detected image columns render as graphics immediately (default format),
                // so icons/images show on first view without manual configuration.
                cell: ({ getValue }) => {
                    const value = getValue();
                    if (col.type === 'image') {
                        return renderConfiguredCell(value, {
                            path: col.path,
                            visible: true,
                            headerName: col.path.split('.').pop() || col.path,
                            format: { type: 'image' },
                        });
                    }
                    return renderAutoDetectedCell(value);
                },
                meta: { align: col.type === 'image' ? 'center' : 'left', columnType: col.type },
            };
            return colDef;
        });
    }

    return selectionCol ? [selectionCol, ...dataCols] : dataCols;
}
