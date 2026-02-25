/**
 * JSON Table widget field definitions for vis-2 Collection.
 * Configures a DataGrid-based table that renders data from a JSON state value.
 *
 * @remarks
 * The widget reads a JSON string from an ioBroker state, analyzes its structure
 * using `useJsonTableAnalysis`, and displays it in a TanStack Table v8 (headless).
 * Column configuration is stored as a serialized JSON string in `columnConfig`.
 */
export interface JsonTableFieldsRxData {
    // ── Layout ──────────────────────────────────────────────────────

    /** Table density. @default 'standard' */
    tableDensity?: 'compact' | 'standard' | 'comfortable';

    /** Row height in pixels (overrides density). */
    tableRowHeight?: number;

    /** Column header height in pixels. */
    tableHeaderHeight?: number;

    /** Auto-size columns to fit content on first render. @default false */
    tableAutoSize?: boolean;

    /** Header elevation/shadow intensity (0-24). @default 6 */
    tableHeaderElevation?: number;

    // ── Pagination ──────────────────────────────────────────────────

    /** Enable pagination. @default true */
    tablePagination?: boolean;

    /** Page size (rows per page). @default 25 */
    tablePageSize?: number;

    /** Options offered in page-size selector. @default '10,25,50,100' */
    tablePageSizeOptions?: string;

    // ── Features ────────────────────────────────────────────────────

    /** Enable column sorting. @default true */
    tableSorting?: boolean;

    /** Enable column filter. @default false */
    tableFiltering?: boolean;

    /** Enable quick-search toolbar. @default false */
    tableQuickFilter?: boolean;

    /** Show column menu on header click. @default true */
    tableColumnMenu?: boolean;

    // ── Selection ───────────────────────────────────────────────────

    /** Enable row selection (checkbox column). @default false */
    tableRowSelection?: boolean;

    // ── Border & Lines ──────────────────────────────────────────────

    /** Show vertical cell borders. @default false */
    tableShowCellBorders?: boolean;

    /** Show horizontal row borders. @default true */
    tableShowRowBorders?: boolean;

    // ── Header Styling ──────────────────────────────────────────────

    /** Header background color (CSS color). */
    tableHeaderBgColor?: string;

    /** Header text color (CSS color). */
    tableHeaderTextColor?: string;

    /** Header font size in pixels. */
    tableHeaderFontSize?: number;

    // ── Cell Styling ────────────────────────────────────────────────

    /** Alternate row background color for even rows (CSS color). */
    tableStripedColor?: string;

    /** Cell font size in pixels. */
    tableCellFontSize?: number;

    // ── Column Configuration ────────────────────────────────────────

    /**
     * JSON-stringified column configuration.
     *
     * @remarks
     * Stores per-column configuration as a JSON string. Edited via the custom
     * {@link JsonTableColumnEditor} modal dialog. Structure defined by
     * `ColumnConfigEntry` from `JsonTableCollectionWidget/types.ts`.
     *
     * Each entry includes:
     * - `path`: Dot-path column identifier
     * - `visible`: Column visibility toggle
     * - `headerName`: Display label for column header
     * - `width`: Optional fixed width in px (flex if undefined)
     * - `align`: Text alignment ('left' | 'center' | 'right')
     * - `format`: Optional formatting config (number/date/boolean)
     * - `cellStyle`: Optional conditional styling rules (first match wins)
     * - `sortable`/`filterable`: Per-column feature overrides
     *
     * @see ColumnConfigEntry in JsonTableCollectionWidget/types.ts
     */
    columnConfig?: string;

    // ── Analysis Options ────────────────────────────────────────────

    /** Maximum depth for nested JSON flattening. @default 10 */
    tableMaxDepth?: number;
}
