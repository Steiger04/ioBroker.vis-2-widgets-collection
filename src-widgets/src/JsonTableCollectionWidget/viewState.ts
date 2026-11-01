/**
 * The ONE resolution of the Ansichtszustand (CONTEXT.md, ADR-0092).
 *
 * @module JsonTableCollectionWidget/viewState
 * @remarks
 * Pure. Turns what the browser keeps of a table's view (the stored snapshot) into the
 * effective TanStack state, given the Tabellen-Fähigkeiten and the configuration — and
 * the effective state back into the snapshot to keep. Storage access lives in the hook
 * (`useViewState`).
 */

import type {
    ColumnFiltersState,
    ColumnSizingState,
    PaginationState,
    SortingState,
    VisibilityState,
} from '@tanstack/react-table';

import type { EffectiveType, TableCapabilities } from './capabilities';
import { filterFits } from './columnFilter';

/** The persisted parts of a table's view, in TanStack's state shapes. */
export type TableView = {
    sorting: SortingState;
    columnFilters: ColumnFiltersState;
    globalFilter: string;
    pagination: PaginationState;
    columnSizing: ColumnSizingState;
    columnVisibility: VisibilityState;
};

/** One persisted part of the view. */
export type ViewPart = keyof TableView;

/** What the browser keeps, per part as parsed from storage (`undefined` = nothing stored). */
export type StoredView = Partial<Record<ViewPart, unknown>>;

/** The configuration the view is resolved against. */
export type ViewConfig = Readonly<{
    /** The configured page size (`tablePageSize`). */
    pageSize: number;
    /** The page sizes the user may choose from (`tablePageSizeOptions`, parsed). */
    pageSizeOptions: readonly number[];
    /** The configured width per Column path (`cfg.width`, missing = none configured). */
    columnWidths: Readonly<Record<string, number | undefined>>;
    /** Auto-size mode (`tableAutoSize`): widths are measured, not dragged. */
    autoSize: boolean;
    /** The Effektiver Typ per Column id (missing = Column not known, e.g. before the data arrives). */
    columnTypes: Readonly<Record<string, EffectiveType>>;
}>;

/** The page sizes offered when `tablePageSizeOptions` is empty or unreadable. */
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/**
 * Parse `tablePageSizeOptions`.
 *
 * @param raw Comma-separated page sizes (e.g. `"10,25,50,100"`).
 * @returns The distinct positive sizes, ascending; the defaults when none is readable.
 */
export function parsePageSizeOptions(raw: string | undefined): number[] {
    const sizes = (raw ?? '')
        .split(',')
        .map(s => parseInt(s.trim(), 10))
        .filter(n => !isNaN(n) && n > 0);
    return sizes.length > 0 ? [...new Set(sizes)].sort((a, b) => a - b) : DEFAULT_PAGE_SIZE_OPTIONS;
}

// ── Stored forms ─────────────────────────────────────────────────────────────

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const isCount = (value: unknown): value is number => typeof value === 'number' && Number.isInteger(value) && value >= 0;

const readSorting = (stored: unknown): SortingState =>
    Array.isArray(stored)
        ? stored.filter(
              (entry): entry is SortingState[number] =>
                  isRecord(entry) && typeof entry.id === 'string' && typeof entry.desc === 'boolean',
          )
        : [];

/**
 * Whether a stored Spaltenfilter still fits — the ONE admission rule for stored filters.
 *
 * @param entry One stored entry of the column filters.
 * @param columnTypes The Effektiver Typ per Column id.
 * @returns `true` for `{id, value}` whose value is a valid filter for the Column
 *   (`filterFits`: the dialog's form `{operator, value}`, an operator the Column's
 *   Effektiver Typ offers); anything else is discarded on load.
 */
function storedFilterFits(entry: unknown, columnTypes: ViewConfig['columnTypes']): entry is ColumnFiltersState[number] {
    if (!isRecord(entry) || typeof entry.id !== 'string') {
        return false;
    }
    const type = Object.hasOwn(columnTypes, entry.id) ? columnTypes[entry.id] : undefined;
    return filterFits(type, entry.value);
}

const readColumnFilters = (stored: unknown, config: ViewConfig): ColumnFiltersState =>
    Array.isArray(stored)
        ? stored.filter((entry): entry is ColumnFiltersState[number] => storedFilterFits(entry, config.columnTypes))
        : [];

const readGlobalFilter = (stored: unknown): string => (typeof stored === 'string' ? stored : '');

const readVisibility = (stored: unknown): VisibilityState => {
    const visibility: VisibilityState = {};
    for (const [id, visible] of Object.entries(isRecord(stored) ? stored : {})) {
        if (typeof visible === 'boolean') {
            visibility[id] = visible;
        }
    }
    return visibility;
};

/** A stored page: the page, the chosen page size and the configured page size it was chosen against. */
type StoredPage = { pageIndex: number; pageSize: number; pageSizeBaseline?: number };

const readPage = (stored: unknown): StoredPage | undefined =>
    isRecord(stored) && isCount(stored.pageIndex) && isCount(stored.pageSize) && stored.pageSize > 0
        ? {
              pageIndex: stored.pageIndex,
              pageSize: stored.pageSize,
              ...(typeof stored.pageSizeBaseline === 'number' && { pageSizeBaseline: stored.pageSizeBaseline }),
          }
        : undefined;

/** A stored column width: the dragged width and the configured width it was dragged against. */
type StoredWidth = { width: number; baseline?: number | null };

const isWidth = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0;

/** Reads both forms: `{width, baseline}` and the legacy bare number (no baseline). */
const readWidths = (stored: unknown): Record<string, StoredWidth> => {
    if (!isRecord(stored)) {
        return {};
    }
    const widths: Record<string, StoredWidth> = {};
    for (const [id, entry] of Object.entries(stored)) {
        if (isWidth(entry)) {
            widths[id] = { width: entry };
        } else if (isRecord(entry) && isWidth(entry.width)) {
            const { baseline } = entry;
            widths[id] =
                typeof baseline === 'number' || baseline === null
                    ? { width: entry.width, baseline }
                    : { width: entry.width };
        }
    }
    return widths;
};

// ── Parking ──────────────────────────────────────────────────────────────────

/** Every persisted part, in a stable order. */
export const VIEW_PARTS: readonly ViewPart[] = [
    'sorting',
    'columnFilters',
    'globalFilter',
    'pagination',
    'columnSizing',
    'columnVisibility',
];

/**
 * Whether a part is parked: its capability is off, so it is neither applied nor written,
 * and the stored value waits for the capability to return.
 *
 * @param part The view part.
 * @param capabilities The Tabellen-Fähigkeiten.
 * @param config The configuration.
 * @returns `true` while the part is parked.
 * @remarks
 * Widths are layout and hide no data: only auto-size (measured widths) parks them, a
 * hidden Header does not.
 */
export function isParked(part: ViewPart, capabilities: TableCapabilities, config: ViewConfig): boolean {
    switch (part) {
        case 'sorting':
            return !capabilities.sorting;
        case 'columnFilters':
            return !capabilities.columnFiltering;
        case 'globalFilter':
            return !capabilities.quickFilter;
        case 'pagination':
            return !capabilities.pagination;
        case 'columnSizing':
            return config.autoSize;
        case 'columnVisibility':
            return !capabilities.hiding;
    }
}

/** Pagination off: every row on one page. */
const ALL_ROWS: PaginationState = { pageIndex: 0, pageSize: Number.MAX_SAFE_INTEGER };

/**
 * The page and page size: the user's page size wins until the configured page size moves
 * away from the one it was chosen against, or it is no longer offered. A page size the
 * configuration replaced restarts on page 1.
 */
function resolvePage(page: StoredPage | undefined, config: ViewConfig): PaginationState {
    const configChanged = page?.pageSizeBaseline !== undefined && page.pageSizeBaseline !== config.pageSize;
    if (!page || configChanged || !config.pageSizeOptions.includes(page.pageSize)) {
        return { pageIndex: page?.pageSize === config.pageSize ? page.pageIndex : 0, pageSize: config.pageSize };
    }
    return { pageIndex: page.pageIndex, pageSize: page.pageSize };
}

/**
 * The column widths: a dragged width wins until its Column's configured width moves away
 * from the one it was dragged against; then the Column falls back to its configured width.
 */
function resolveWidths(widths: Record<string, StoredWidth>, config: ViewConfig): ColumnSizingState {
    const sizing: ColumnSizingState = {};
    for (const [id, { width, baseline }] of Object.entries(widths)) {
        if (baseline === undefined || (baseline ?? undefined) === config.columnWidths[id]) {
            sizing[id] = width;
        }
    }
    return sizing;
}

// ── Resolution ───────────────────────────────────────────────────────────────

/**
 * Resolve the effective view.
 *
 * @param stored The stored snapshot, per part.
 * @param capabilities The Tabellen-Fähigkeiten.
 * @param config The configuration.
 * @returns The effective TanStack state of the persisted parts; a parked part shows its
 *   neutral value (nothing sorted, filtered or hidden, all rows, natural widths).
 */
export function resolveView(stored: StoredView, capabilities: TableCapabilities, config: ViewConfig): TableView {
    const live = (part: ViewPart): unknown => (isParked(part, capabilities, config) ? undefined : stored[part]);
    return {
        sorting: readSorting(live('sorting')),
        columnFilters: readColumnFilters(live('columnFilters'), config),
        globalFilter: readGlobalFilter(live('globalFilter')),
        pagination: isParked('pagination', capabilities, config)
            ? ALL_ROWS
            : resolvePage(readPage(stored.pagination), config),
        columnSizing: resolveWidths(readWidths(live('columnSizing')), config),
        columnVisibility: readVisibility(live('columnVisibility')),
    };
}

/**
 * The baselines to record for stored choices that have none (stored before baselines
 * existed): they count as made against the configuration they are first read under.
 *
 * @param stored The stored snapshot, per part.
 * @param capabilities The Tabellen-Fähigkeiten.
 * @param config The configuration.
 * @returns The parts to write back with their baselines recorded (values unchanged); empty
 *   when every choice has its baseline or its part is parked.
 * @remarks
 * Without the recording such a choice would count as "configuration unchanged" for good,
 * and later edits of the configured value would never reach this browser.
 */
export function recordBaselines(stored: StoredView, capabilities: TableCapabilities, config: ViewConfig): StoredView {
    const written: StoredView = {};
    const page = readPage(stored.pagination);
    if (!isParked('pagination', capabilities, config) && page && page.pageSizeBaseline === undefined) {
        written.pagination = { ...page, pageSizeBaseline: config.pageSize } satisfies StoredPage;
    }
    const widths = Object.entries(readWidths(stored.columnSizing));
    if (!isParked('columnSizing', capabilities, config) && widths.some(([, w]) => w.baseline === undefined)) {
        written.columnSizing = Object.fromEntries(
            widths.map(([id, { width, baseline }]) => [
                id,
                { width, baseline: baseline === undefined ? (config.columnWidths[id] ?? null) : baseline },
            ]),
        );
    }
    return written;
}

/**
 * Clamp the page to the rows that are there — the stored page itself stays, so it returns
 * when the rows do.
 *
 * @param pagination The effective page and page size.
 * @param rowCount The number of rows to page through (after filtering), unknown before the
 *   table has counted them.
 * @returns The page clamped to the last page (the same object when nothing is clamped).
 */
export function clampPage(pagination: PaginationState, rowCount: number | undefined): PaginationState {
    if (rowCount === undefined) {
        return pagination;
    }
    const lastPage = Math.max(Math.ceil(rowCount / pagination.pageSize) - 1, 0);
    return pagination.pageIndex > lastPage ? { ...pagination, pageIndex: lastPage } : pagination;
}

// ── Snapshot ─────────────────────────────────────────────────────────────────

/** The stored form of one part: choices carry the configured value they were made against. */
function storedForm(part: ViewPart, view: TableView, config: ViewConfig): unknown {
    switch (part) {
        case 'pagination':
            return { ...view.pagination, pageSizeBaseline: config.pageSize } satisfies StoredPage;
        case 'columnSizing':
            return Object.fromEntries(
                Object.entries(view.columnSizing).map(([id, width]) => [
                    id,
                    { width, baseline: config.columnWidths[id] ?? null } satisfies StoredWidth,
                ]),
            );
        default:
            return view[part];
    }
}

/** The parts whose change shows other rows on each page, so the page restarts. */
const RESTARTING_PARTS: readonly ViewPart[] = ['sorting', 'columnFilters', 'globalFilter'];

const sameContent = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * The snapshot to keep after the user changed the view.
 *
 * @param view The effective view the change applies to.
 * @param change The changed part(s), in TanStack's state shapes.
 * @param capabilities The Tabellen-Fähigkeiten.
 * @param config The configuration.
 * @returns The parts to write, in their stored forms; a parked part is never written.
 * @remarks
 * A changed sorting, Spaltenfilter, quick-filter term or page size restarts on page 1 —
 * nothing else does (data updates in particular keep the page).
 */
export function storeChange(
    view: TableView,
    change: Partial<TableView>,
    capabilities: TableCapabilities,
    config: ViewConfig,
): StoredView {
    const next: TableView = { ...view, ...change };
    const restart =
        RESTARTING_PARTS.some(part => part in change && !sameContent(change[part], view[part])) ||
        next.pagination.pageSize !== view.pagination.pageSize;
    const touched = new Set<ViewPart>(Object.keys(change) as ViewPart[]);
    if (restart) {
        next.pagination = { ...next.pagination, pageIndex: 0 };
        touched.add('pagination');
    }

    const written: StoredView = {};
    for (const part of VIEW_PARTS) {
        if (touched.has(part) && !isParked(part, capabilities, config)) {
            written[part] = storedForm(part, next, config);
        }
    }
    return written;
}
