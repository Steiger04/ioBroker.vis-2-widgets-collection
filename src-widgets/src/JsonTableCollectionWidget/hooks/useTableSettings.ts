/**
 * Custom hook for managing TanStack Table state settings.
 *
 * @module widgets/JsonTableCollectionWidget/hooks/useTableSettings
 * @remarks
 * Encapsulates all table state management (sorting, filtering, pagination, etc.)
 * including localStorage persistence for column sizing and automatic resets
 * when features are disabled.
 */

import { useState, useEffect, useMemo, type Dispatch, type SetStateAction } from 'react';
import type {
    SortingState,
    ColumnFiltersState,
    ColumnSizingState,
    PaginationState,
    RowSelectionState,
} from '@tanstack/react-table';

import type { ColumnConfigEntry } from '../types';

// ── Types ────────────────────────────────────────────────────────────────────

export interface UseTableSettingsOptions {
    /** Unique widget identifier for localStorage keys */
    widgetId: string;
    /** Column configuration array */
    columnConfig: ColumnConfigEntry[];
    /** Whether auto-size mode is enabled (disables column resizing) */
    tableAutoSize: boolean;
    /** Whether row selection is enabled */
    tableRowSelection: boolean;
    /** Configured page size */
    tablePageSize: number;
    /** Comma-separated string of page size options (e.g., "10,25,50,100") */
    tablePageSizeOptions?: string;
    /** Whether pagination is enabled */
    tablePagination: boolean;
    /** Whether column filtering is enabled */
    tableFiltering: boolean;
    /** Whether sorting is enabled */
    tableSorting: boolean;
    /** Whether quick filter (global filter) is enabled */
    tableQuickFilter: boolean;
    /** Total number of rows in the grid */
    gridRowsLength: number;
}

export interface UseTableSettingsReturn {
    // State
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
    globalFilter: string;
    rowSelection: RowSelectionState;
    columnSizing: ColumnSizingState;
    pagination: PaginationState;
    effectivePagination: PaginationState;

    // Setters
    setSorting: Dispatch<SetStateAction<SortingState>>;
    setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
    setGlobalFilter: Dispatch<SetStateAction<string>>;
    setRowSelection: Dispatch<SetStateAction<RowSelectionState>>;
    setColumnSizing: Dispatch<SetStateAction<ColumnSizingState>>;
    setPagination: Dispatch<SetStateAction<PaginationState>>;

    // Helpers
    pageSizeOptions: number[];
    parsePageSizeOptions: (raw: string | undefined) => number[];
}

// ── Helper Functions ──────────────────────────────────────────────────────────

/**
 * Parses a comma-separated string of page size options into an array of numbers.
 *
 * @param raw - Comma-separated string of page sizes (e.g., "10,25,50,100")
 * @returns Array of unique, sorted page size numbers, or defaults if parsing fails
 * @example
 * parsePageSizeOptions("10,25,50") // [10, 25, 50]
 * parsePageSizeOptions("") // [10, 25, 50, 100] (defaults)
 * parsePageSizeOptions("invalid") // [10, 25, 50, 100] (defaults)
 */
export function parsePageSizeOptions(raw: string | undefined): number[] {
    const defaults = [10, 25, 50, 100];
    if (!raw) {
        return defaults;
    }
    const result = raw
        .split(',')
        .map(s => parseInt(s.trim(), 10))
        .filter(n => !isNaN(n) && n > 0);
    return result.length > 0 ? [...new Set(result)].sort((a, b) => a - b) : defaults;
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * Manages all TanStack Table state with localStorage persistence and automatic resets.
 *
 * @param options - Configuration options for table settings
 * @returns Object containing all state values, setters, and helper functions
 */
export function useTableSettings(options: UseTableSettingsOptions): UseTableSettingsReturn {
    const {
        widgetId,
        columnConfig,
        tableAutoSize,
        tableRowSelection,
        tablePageSize,
        tablePageSizeOptions,
        tablePagination,
        tableFiltering,
        tableSorting,
        tableQuickFilter,
        gridRowsLength,
    } = options;

    // ── Sorting State ────────────────────────────────────────────────────────

    const [sorting, setSorting] = useState<SortingState>([]);

    // Reset sorting when sorting is disabled
    useEffect(() => {
        if (!tableSorting) {
            setSorting([]);
        }
    }, [tableSorting]);

    // ── Column Filters State ──────────────────────────────────────────────────

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    // Reset columnFilters when column filter is disabled
    useEffect(() => {
        if (!tableFiltering) {
            setColumnFilters([]);
        }
    }, [tableFiltering]);

    // ── Global Filter State ───────────────────────────────────────────────────

    const [globalFilter, setGlobalFilter] = useState('');

    // Reset globalFilter when quick filter is disabled
    useEffect(() => {
        if (!tableQuickFilter) {
            setGlobalFilter('');
        }
    }, [tableQuickFilter]);

    // ── Row Selection State ───────────────────────────────────────────────────

    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    // ── Column Sizing State ───────────────────────────────────────────────────

    const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(() => {
        if (tableAutoSize) {
            return {};
        }
        const storageKey = `jtc_col_sizes_${widgetId}`;
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                return JSON.parse(stored) as ColumnSizingState;
            }
        } catch {
            // ignore corrupt data
        }
        const init: ColumnSizingState = {};
        columnConfig.forEach(cfg => {
            if (cfg.width) {
                init[cfg.path] = cfg.width;
            }
        });
        if (tableRowSelection === true) {
            init.__select__ = 48;
        }
        return init;
    });

    // Sync columnSizing to localStorage
    useEffect(() => {
        if (tableAutoSize) {
            return;
        }
        try {
            localStorage.setItem(`jtc_col_sizes_${widgetId}`, JSON.stringify(columnSizing));
        } catch {
            // localStorage not available or full - silently ignore
        }
    }, [columnSizing, widgetId, tableAutoSize]);

    // ── Pagination State ──────────────────────────────────────────────────────

    const configuredPageSize = useMemo(() => Number(tablePageSize) || 25, [tablePageSize]);

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: configuredPageSize,
    });

    // Sync pagination pageSize with configured value
    useEffect(() => {
        setPagination(prev =>
            prev.pageSize === configuredPageSize ? prev : { pageIndex: 0, pageSize: configuredPageSize },
        );
    }, [configuredPageSize]);

    // Calculate effective pagination (all rows when pagination disabled)
    const effectivePagination = useMemo<PaginationState>(
        () => (tablePagination === false ? { pageIndex: 0, pageSize: Math.max(gridRowsLength, 1) } : pagination),
        [tablePagination, gridRowsLength, pagination],
    );

    // ── Page Size Options ─────────────────────────────────────────────────────

    const pageSizeOptions = useMemo(() => parsePageSizeOptions(tablePageSizeOptions), [tablePageSizeOptions]);

    // ── Return ─────────────────────────────────────────────────────────────────

    return {
        // State
        sorting,
        columnFilters,
        globalFilter,
        rowSelection,
        columnSizing,
        pagination,
        effectivePagination,

        // Setters
        setSorting,
        setColumnFilters,
        setGlobalFilter,
        setRowSelection,
        setColumnSizing,
        setPagination,

        // Helpers
        pageSizeOptions,
        parsePageSizeOptions,
    };
}
