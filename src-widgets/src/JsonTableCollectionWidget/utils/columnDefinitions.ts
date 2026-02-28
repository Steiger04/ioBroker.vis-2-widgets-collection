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

// ── Smart Defaults for Column Settings ─────────────────────────────────────────

/**
 * Type-based smart defaults for column sortable/filterable settings.
 *
 * @remarks
 * Different data types have different capabilities for sorting and filtering:
 * - string/number/date: Full sorting and filtering support
 * - boolean: Filtering makes sense, sorting is usually not needed
 * - array/object: Complex types cannot be meaningfully sorted or filtered
 */
export interface SmartDefaults {
    sortable: boolean;
    filterable: boolean;
    hiding: boolean;
    pinning: boolean;
}

/**
 * Returns type-based smart defaults for sortable/filterable column settings.
 *
 * @param detectedType - The detected data type from JSON analysis
 * @returns Smart default values for sortable and filterable
 * @example
 * getSmartDefaults('number')  // { sortable: true, filterable: true }
 * getSmartDefaults('boolean') // { sortable: false, filterable: true }
 * getSmartDefaults('array')   // { sortable: false, filterable: false }
 */
export function getSmartDefaults(detectedType: string): SmartDefaults {
    switch (detectedType) {
        case 'number':
        case 'date':
            return { sortable: true, filterable: true, hiding: true, pinning: true };
        case 'string':
            return { sortable: true, filterable: true, hiding: true, pinning: true };
        case 'boolean':
            // Boolean usually doesn't need sorting (only 2 values)
            return { sortable: false, filterable: true, hiding: true, pinning: true };
        case 'array':
        case 'object':
            // Complex types can't be sorted/filtered meaningfully
            return { sortable: false, filterable: false, hiding: true, pinning: true };
        default:
            // Default to enabled for unknown types
            return { sortable: true, filterable: true, hiding: true, pinning: true };
    }
}

/**
 * Resolves the effective sortable value for a column configuration.
 *
 * @param cfg - Column configuration entry
 * @param detectedType - The detected data type from JSON analysis
 * @param globalSorting - Global table sorting setting (undefined treated as true for backwards compatibility)
 * @returns Effective sortable boolean value
 */
export function resolveSortable(cfg: ColumnConfigEntry, detectedType: string, globalSorting: boolean): boolean {
    // If sortable is explicitly set (not 'auto'), use that value
    if (cfg.sortable !== undefined && cfg.sortable !== 'auto') {
        return cfg.sortable;
    }
    // For 'auto' or undefined, use smart defaults based on type
    const smartDefaults = getSmartDefaults(detectedType);
    // Use !== false for backwards compatibility (undefined defaults to enabled)
    return smartDefaults.sortable && globalSorting !== false;
}

/**
 * Resolves the effective filterable value for a column configuration.
 *
 * @param cfg - Column configuration entry
 * @param detectedType - The detected data type from JSON analysis
 * @param globalFiltering - Global table filtering setting (undefined treated as false)
 * @returns Effective filterable boolean value
 */
export function resolveFilterable(cfg: ColumnConfigEntry, detectedType: string, globalFiltering: boolean): boolean {
    // If filterable is explicitly set (not 'auto'), use that value
    if (cfg.filterable !== undefined && cfg.filterable !== 'auto') {
        return cfg.filterable;
    }
    // For 'auto' or undefined, use smart defaults based on type
    const smartDefaults = getSmartDefaults(detectedType);
    // Use explicit true check (filtering defaults to disabled unless explicitly enabled)
    return smartDefaults.filterable && globalFiltering === true;
}

/**
 * Resolves the effective hiding value for a column configuration.
 *
 * @param cfg - Column configuration entry
 * @param detectedType - The detected data type from JSON analysis
 * @param globalHiding - Global table hiding setting (undefined treated as true for backwards compatibility)
 * @returns Effective hiding boolean value
 */
export function resolveHiding(cfg: ColumnConfigEntry, detectedType: string, globalHiding: boolean): boolean {
    // If enableHiding is explicitly set (not 'auto'), use that value
    if (cfg.enableHiding !== undefined && cfg.enableHiding !== 'auto') {
        return cfg.enableHiding;
    }
    // For 'auto' or undefined, use smart defaults based on type
    const smartDefaults = getSmartDefaults(detectedType);
    // Use !== false for backwards compatibility (undefined defaults to enabled)
    return smartDefaults.hiding && globalHiding !== false;
}

/**
 * Resolves the effective pinning value for a column configuration.
 *
 * @param cfg - Column configuration entry
 * @param detectedType - The detected data type from JSON analysis
 * @param globalPinning - Global table pinning setting (undefined treated as false)
 * @returns Effective pinning boolean value
 */
export function resolvePinning(cfg: ColumnConfigEntry, detectedType: string, globalPinning: boolean): boolean {
    // If enablePinning is explicitly set (not 'auto'), use that value
    if (cfg.enablePinning !== undefined && cfg.enablePinning !== 'auto') {
        return cfg.enablePinning;
    }
    // For 'auto' or undefined, use smart defaults based on type
    const smartDefaults = getSmartDefaults(detectedType);
    // Use explicit true check (pinning defaults to disabled unless explicitly enabled)
    return smartDefaults.pinning && globalPinning === true;
}

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
        tableHiding: boolean;
        tablePinning: boolean;
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

    // Build map of analysis date formats and types for fallback
    const analysisDateFormats = new Map<string, DateFormatId | undefined>(
        analysisColumns.map(c => [c.path, c.dateFormat]),
    );
    const analysisTypes = new Map<string, string>(analysisColumns.map(c => [c.path, c.type]));

    // ── Selection Column ──────────────────────────────────────────────────────

    const selectionCol: ColumnDef<FlatRow> | null =
        widgetData.tableRowSelection && renderSelectionHeader && renderSelectionCell
            ? {
                  id: '__select__',
                  size: 48,
                  enableResizing: false,
                  enableSorting: false,
                  enableColumnFilter: false,
                  enableHiding: false,
                  enablePinning: false,
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
                const detectedType = analysisTypes.get(cfg.path) || 'string';

                const col: ColumnDef<FlatRow> = {
                    id: cfg.path,
                    size: cfg.width ?? 150,
                    // FIX-P2-1: Add optional chaining and nullish coalescing for safe property access
                    accessorFn: (row: FlatRow) => row?.[cfg.path] ?? null,
                    header: cfg.headerName || cfg.path,
                    enableSorting: resolveSortable(cfg, detectedType, widgetData.tableSorting),
                    enableColumnFilter: resolveFilterable(cfg, detectedType, widgetData.tableFiltering),
                    enableHiding: resolveHiding(cfg, detectedType, widgetData.tableHiding),
                    enablePinning: resolvePinning(cfg, detectedType, widgetData.tablePinning),
                    ...(isDate && { sortingFn: createDateSortingFn(inputFmt) }),
                    cell: ({ getValue }) => renderConfiguredCell(getValue(), cfg),
                    meta: {
                        align: cfg.align || 'left',
                        width: cfg.width,
                        columnType: detectedType,
                    },
                };
                return col;
            });
    } else {
        // Auto-detected columns mode - use smart defaults based on detected type
        dataCols = analysisColumns.map(col => {
            const isDate = col.type === 'date' && col.dateFormat;
            const fmt = col.dateFormat;
            const smartDefaults = getSmartDefaults(col.type);

            const colDef: ColumnDef<FlatRow> = {
                id: col.path,
                size: 150,
                accessorFn: (row: FlatRow) => row[col.path],
                header: col.path.split('.').pop() || col.path,
                enableSorting: smartDefaults.sortable && widgetData.tableSorting,
                enableColumnFilter: smartDefaults.filterable && widgetData.tableFiltering,
                enableHiding: smartDefaults.hiding && widgetData.tableHiding,
                enablePinning: smartDefaults.pinning && widgetData.tablePinning,
                ...(isDate && { sortingFn: createDateSortingFn(fmt) }),
                cell: ({ getValue }) => renderAutoDetectedCell(getValue()),
                meta: { align: 'left', columnType: col.type },
            };
            return colDef;
        });
    }

    return selectionCol ? [selectionCol, ...dataCols] : dataCols;
}
