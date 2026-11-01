/**
 * Column definition builder utilities for TanStack Table.
 *
 * @module JsonTableCollectionWidget/utils/columnDefinitions
 * @remarks
 * Provides helper functions and the main `buildColumnDefs` factory
 * for constructing TanStack Table column definitions from widget configuration.
 */

import type { ColumnDef, SortingFn, Row } from '@tanstack/react-table';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';
import type { ColumnConfigEntry } from '../types';
import { columnCapabilities, effectiveType, type TableCapabilities } from '../capabilities';
import { dateReader, type DateReader } from '../dateReader';

import type { CellColumn } from './cellFormatters';
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
    /** Cell renderer component for configured columns; `column` says how the Column is read */
    renderConfiguredCell: (value: unknown, config: ColumnConfigEntry, column: CellColumn) => React.ReactNode;
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

// ── Helper: createDateSortingFn ────────────────────────────────────────────────

/**
 * Creates a custom sorting function for date columns: chronological by the instant the
 * Column's Datums-Leser reads; an unreadable value counts as 0.
 *
 * @param read - The Column's Datums-Leser
 * @returns A TanStack Table compatible sorting function
 */
export function createDateSortingFn(read: DateReader): SortingFn<FlatRow> {
    const sortableTime = (value: unknown): number => read(value) ?? 0;
    return (rowA: Row<FlatRow>, rowB: Row<FlatRow>, columnId: string): number =>
        sortableTime(rowA.getValue(columnId)) - sortableTime(rowB.getValue(columnId));
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

    // The analysis engine's detection per path: Detected type and the Datums-Leser's input
    const analysisByPath = new Map<string, JsonTableColumn>(analysisColumns.map(c => [c.path, c]));

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
                const detected = analysisByPath.get(cfg.path);
                const detectedType = detected?.type || 'string';
                // Unify "is this a date column?" for sort, filter AND the filter dialog (meta.columnType).
                // Previously sort used cfg.format.type while the filter dialog used the auto-detected type,
                // so manually configuring a string column as date gave date sort but string filter operators.
                const isDateColumn = cfg.format?.type === 'date' || detectedType === 'date';
                const type = effectiveType(cfg.format?.type, detectedType);
                const allowed = columnCapabilities(capabilities, type, cfg);
                // The live detection decides the reading — not a format id stored in the config
                const readDate = dateReader(detected);
                const cellColumn: CellColumn = { type, readDate };

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
                        sortingFn: createDateSortingFn(readDate),
                        filterFn: createDateFilterFn(readDate),
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
                            cellColumn,
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
            const type = effectiveType(undefined, col.type);
            const allowed = columnCapabilities(capabilities, type);
            const readDate = dateReader(col);

            const colDef: ColumnDef<FlatRow> = {
                id: col.path,
                size: 150,
                accessorFn: (row: FlatRow) => row[col.path],
                header: col.path.split('.').pop() || col.path,
                enableSorting: allowed.sortable,
                enableColumnFilter: allowed.filterable,
                enableHiding: allowed.hideable,
                ...(isDate && {
                    sortingFn: createDateSortingFn(readDate),
                    filterFn: createDateFilterFn(readDate),
                }),
                // Auto-detected image columns render as graphics immediately (default format),
                // so icons/images show on first view without manual configuration.
                cell: ({ getValue }) => {
                    const value = getValue();
                    if (col.type === 'image') {
                        return renderConfiguredCell(
                            value,
                            {
                                path: col.path,
                                visible: true,
                                headerName: col.path.split('.').pop() || col.path,
                                format: { type: 'image' },
                            },
                            { type, readDate },
                        );
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
