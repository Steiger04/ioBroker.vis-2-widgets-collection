/**
 * The Ansichtszustand of one table, kept in the browser (CONTEXT.md, ADR-0092).
 *
 * @module JsonTableCollectionWidget/useViewState
 * @remarks
 * The hook fabric over the pure core (`viewState.ts`): reads the stored view from
 * localStorage, hands TanStack the effective state and writes the user's changes back.
 * Storage is the truth — a change applies to the stored view as it is now, so changes
 * batched into one render cannot overwrite each other. Row selection stays in the session.
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import type {
    ColumnFiltersState,
    ColumnSizingState,
    OnChangeFn,
    PaginationState,
    RowSelectionState,
    SortingState,
    Updater,
    VisibilityState,
} from '@tanstack/react-table';

import type { TableCapabilities } from './capabilities';
import type { ColumnConfigEntry } from './types';
import {
    VIEW_PARTS,
    clampPage,
    isParked,
    parsePageSizeOptions,
    recordBaselines,
    resolveView,
    storeChange,
    type StoredView,
    type TableView,
    type ViewConfig,
    type ViewPart,
} from './viewState';

// ── Storage ──────────────────────────────────────────────────────────────────

/** The storage key prefix per part (unchanged since the view was first persisted). */
const KEY_PREFIX: Record<ViewPart, string> = {
    sorting: 'jtc_sorting_',
    columnFilters: 'jtc_filters_',
    globalFilter: 'jtc_global_filter_',
    pagination: 'jtc_pagination_',
    columnSizing: 'jtc_col_sizes_',
    columnVisibility: 'jtc_visibility_',
};

/** Values the browser refused to store (quota, disabled storage): kept for the session. */
const unstored = new Map<string, string>();

function readItem(key: string): string | null {
    if (unstored.has(key)) {
        return unstored.get(key) ?? null;
    }
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function writeItem(key: string, value: string): void {
    try {
        localStorage.setItem(key, value);
        unstored.delete(key);
    } catch {
        unstored.set(key, value);
    }
}

/** Read every part of a widget's stored view (unreadable JSON counts as nothing stored). */
function readStoredView(widgetId: string): StoredView {
    const stored: StoredView = {};
    for (const part of VIEW_PARTS) {
        const raw = readItem(`${KEY_PREFIX[part]}${widgetId}`);
        if (raw !== null) {
            try {
                stored[part] = JSON.parse(raw);
            } catch {
                // Corrupt JSON → nothing stored for this part.
            }
        }
    }
    return stored;
}

function writeStoredView(widgetId: string, written: StoredView): void {
    for (const part of VIEW_PARTS) {
        if (part in written) {
            writeItem(`${KEY_PREFIX[part]}${widgetId}`, JSON.stringify(written[part]));
        }
    }
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export interface UseViewStateOptions {
    /** The widget id: the view is kept per widget. */
    widgetId: string;
    /** The Tabellen-Fähigkeiten; a part whose capability is off is parked. */
    capabilities: TableCapabilities;
    /** The configured page size (`tablePageSize`). */
    pageSize: number;
    /** The configured page sizes to choose from (`tablePageSizeOptions`, comma-separated). */
    pageSizeOptions: string | undefined;
    /** Auto-size mode (`tableAutoSize`): widths are measured, the dragged ones parked. */
    autoSize: boolean;
    /** The column configuration (its `width` per Column is the configured width). */
    columnConfig: readonly ColumnConfigEntry[];
    /**
     * The Columns per id: a stored filter its Column's Effektiver Typ does not offer is
     * discarded, the filter of a Column that is not filterable is parked.
     */
    columns: ViewConfig['columns'];
}

export interface ViewState {
    /** The effective TanStack state: the persisted parts plus the session's row selection. */
    state: TableView & { rowSelection: RowSelectionState };
    onSortingChange: OnChangeFn<SortingState>;
    onColumnFiltersChange: OnChangeFn<ColumnFiltersState>;
    onGlobalFilterChange: OnChangeFn<string>;
    onPaginationChange: OnChangeFn<PaginationState>;
    onColumnSizingChange: OnChangeFn<ColumnSizingState>;
    onColumnVisibilityChange: OnChangeFn<VisibilityState>;
    onRowSelectionChange: OnChangeFn<RowSelectionState>;
    /** The page sizes the user may choose from. */
    pageSizeOptions: readonly number[];
    /** Show every hidden column again. */
    showAllColumns: () => void;
    /**
     * Tell the view how many rows there are to page through (the table's filtered row
     * count): the page shown is clamped to the last page, the stored page stays.
     */
    setRowCount: (rowCount: number) => void;
}

const applyUpdater = <T>(updater: Updater<T>, old: T): T =>
    typeof updater === 'function' ? (updater as (old: T) => T)(old) : updater;

/** The view as shown: resolved, with the page clamped to the counted rows. */
function shownView(
    stored: StoredView,
    capabilities: TableCapabilities,
    config: ViewConfig,
    rowCount: number | undefined,
): TableView {
    const resolved = resolveView(stored, capabilities, config);
    return { ...resolved, pagination: clampPage(resolved.pagination, rowCount) };
}

/**
 * Keep a table's Ansichtszustand in the browser.
 *
 * @param options The widget id, the Tabellen-Fähigkeiten and the configuration.
 * @returns The effective TanStack state and its change handlers.
 */
export function useViewState(options: UseViewStateOptions): ViewState {
    const {
        widgetId,
        capabilities,
        pageSize,
        pageSizeOptions: rawPageSizeOptions,
        autoSize,
        columnConfig,
        columns,
    } = options;

    const config = useMemo<ViewConfig>(
        () => ({
            pageSize,
            pageSizeOptions: parsePageSizeOptions(rawPageSizeOptions),
            columnWidths: Object.fromEntries(columnConfig.map(cfg => [cfg.path, cfg.width])),
            autoSize,
            columns,
        }),
        [pageSize, rawPageSizeOptions, columnConfig, autoSize, columns],
    );

    // The stored view as last read or written, tagged with what it was read for: a new
    // widget id, or a part parked or returning, reads anew (adjusting state while
    // rendering, React's pattern for state derived from changed props).
    const readKey = JSON.stringify([widgetId, VIEW_PARTS.filter(part => isParked(part, capabilities, config))]);
    const [snapshot, setSnapshot] = useState(() => ({ readKey, stored: readStoredView(widgetId) }));
    let { stored } = snapshot;
    if (snapshot.readKey !== readKey) {
        stored = readStoredView(widgetId);
        setSnapshot({ readKey, stored });
    }

    // Choices stored without baseline count as made against the configuration they are
    // first read under — record it, or later edits of the configuration could never win.
    useEffect(() => {
        const recorded = recordBaselines(stored, capabilities, config);
        if (Object.keys(recorded).length > 0) {
            writeStoredView(widgetId, recorded);
            setSnapshot({ readKey, stored: { ...stored, ...recorded } });
        }
    }, [widgetId, readKey, stored, capabilities, config]);

    // The rows to page through, as the table last counted them (after filtering): the page
    // shown is clamped to them, the stored page stays.
    const [rowCount, setRowCount] = useState<number>();

    const view = useMemo(
        () => shownView(stored, capabilities, config, rowCount),
        [stored, capabilities, config, rowCount],
    );

    const [rowSelection, onRowSelectionChange] = useState<RowSelectionState>({});

    const change = useCallback(
        <P extends ViewPart>(part: P, updater: Updater<TableView[P]>): void => {
            const latest = readStoredView(widgetId);
            const current = shownView(latest, capabilities, config, rowCount);
            const written = storeChange(
                current,
                { [part]: applyUpdater(updater, current[part]) },
                capabilities,
                config,
                latest,
            );
            if (Object.keys(written).length === 0) {
                return; // a parked part: neither applied nor written
            }
            writeStoredView(widgetId, written);
            setSnapshot({ readKey, stored: { ...latest, ...written } });
        },
        [widgetId, readKey, capabilities, config, rowCount],
    );

    const onSortingChange = useCallback<OnChangeFn<SortingState>>(u => change('sorting', u), [change]);
    const onColumnFiltersChange = useCallback<OnChangeFn<ColumnFiltersState>>(
        u => change('columnFilters', u),
        [change],
    );
    const onGlobalFilterChange = useCallback<OnChangeFn<string>>(u => change('globalFilter', u), [change]);
    const onPaginationChange = useCallback<OnChangeFn<PaginationState>>(u => change('pagination', u), [change]);
    const onColumnSizingChange = useCallback<OnChangeFn<ColumnSizingState>>(u => change('columnSizing', u), [change]);
    const onColumnVisibilityChange = useCallback<OnChangeFn<VisibilityState>>(
        u => change('columnVisibility', u),
        [change],
    );
    const showAllColumns = useCallback(() => change('columnVisibility', {}), [change]);

    const state = useMemo(() => ({ ...view, rowSelection }), [view, rowSelection]);

    return {
        state,
        onSortingChange,
        onColumnFiltersChange,
        onGlobalFilterChange,
        onPaginationChange,
        onColumnSizingChange,
        onColumnVisibilityChange,
        onRowSelectionChange,
        pageSizeOptions: config.pageSizeOptions,
        showAllColumns,
        setRowCount,
    };
}
