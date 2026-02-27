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

    /**
     * Padding applied to table container spacing.
     *
     * @default 1
     */
    jsonTablePadding?: number;

    // ── Pagination ──────────────────────────────────────────────────

    /** Enable pagination. @default true */
    tablePagination?: boolean;

    /** Page size (rows per page). @default 25 */
    tablePageSize?: number;

    /** Options offered in page-size selector. @default '10,25,50,100' */
    tablePageSizeOptions?: string;

    /** Row count threshold for virtualization when pagination is disabled. @default 50 */
    tableVirtualizeThreshold?: number;

    // ── Features ────────────────────────────────────────────────────

    /** Enable column sorting. @default true */
    tableSorting?: boolean;

    /** Enable multi-column sorting. @default false */
    tableSortingMulti?: boolean;

    /** Enable column filter. @default false */
    tableFiltering?: boolean;

    /** Enable quick-search toolbar. @default false */
    tableQuickFilter?: boolean;

    /** Show column menu on header click. @default true */
    tableColumnMenu?: boolean;

    // ── Table Border (Tabellenrahmen) ───────────────────────────────

    /** Table outer border width in pixels (0-20). @default 0 */
    borderWidth?: number;

    /** Table border style (CSS border-style). @default 'none' */
    borderStyle?:
        | 'none'
        | 'dotted'
        | 'dashed'
        | 'solid'
        | 'double'
        | 'groove'
        | 'ridge'
        | 'inset'
        | 'outset'
        | 'hidden';

    /** Table border color (CSS color). */
    borderColor?: string;

    /** Table border radius (CSS value like "4px" or "8px 8px 0 0"). */
    borderRadius?: string;

    // ── Selection ───────────────────────────────────────────────────

    /** Enable row selection (checkbox column). @default false */
    tableRowSelection?: boolean;

    // ── Border & Lines ──────────────────────────────────────────────

    /** Show vertical cell borders. @default false */
    tableShowCellBorders?: boolean;

    /** Vertical cell border width in pixels (0-10). @default 1 */
    verticalCellBorderWidth?: number;

    /** Vertical cell border color (CSS color). */
    verticalCellBorderColor?: string;

    /** Show horizontal row borders. @default true */
    tableShowRowBorders?: boolean;

    /** Horizontal cell border width in pixels (0-10). @default 1 */
    horizontalCellBorderWidth?: number;

    /** Horizontal cell border color (CSS color). */
    horizontalCellBorderColor?: string;

    // ── Header Styling ──────────────────────────────────────────────

    /** Header background color (CSS color). */
    tableHeaderBgColor?: string;

    /** Header text color (CSS color). */
    tableHeaderTextColor?: string;

    /** Header font size in pixels. */
    tableHeaderFontSize?: number;

    /** Header bottom border width in pixels (0-10). @default 0 */
    headerBorderWidth?: number;

    /** Header bottom border color (CSS color). */
    headerBorderColor?: string;

    // ── Cell Styling ────────────────────────────────────────────────

    /** Background color for even rows (0, 2, 4, ...). */
    evenRowColor?: string;

    /** Background color for odd rows (1, 3, 5, ...). */
    oddRowColor?: string;

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
