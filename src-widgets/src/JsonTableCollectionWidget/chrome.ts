/**
 * The ONE resolution of the Tabellen-Chrome (CONTEXT.md).
 *
 * @module JsonTableCollectionWidget/chrome
 * @remarks
 * Pure. Resolves RAW widget data plus the theme into every sx fragment of the
 * table's presentation shell: density-derived heights, the padded body, the outer
 * frame, the table's layout and row/cell borders, the sticky header bar, header cell
 * and text, and the even/odd row backgrounds (the Select/Button-Group chrome pattern).
 * Behaviour is frozen: every rule reproduces the legacy inline sx of the renderer
 * verbatim; the tests pin the results. Like the Button-Group-Chrome it is NOT a
 * colour contract — no field declares a fallback cascade; unset colours fall back to
 * the theme's divider or paper as the legacy code did. Cell content (Format type
 * rendering, conditional styles) and the column-resize affordance are not chrome and
 * stay in the renderer.
 */

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { gradientColor } from '../lib/helper/gradientColor';
import type { JsonTableFieldsRxData } from '../types';

/** Row height (px) per density. */
const DENSITY_ROW_HEIGHT: Record<string, number> = { compact: 36, standard: 52, comfortable: 68 };
/** Header height (px) per density. */
const DENSITY_HEADER_HEIGHT: Record<string, number> = { compact: 36, standard: 56, comfortable: 68 };

/**
 * A plain sx object. Loosely typed on purpose: frozen legacy values include `null`
 * (extractColorFromValue's "no colour"), which MUI's sx skips like `undefined`.
 */
type SxObject = Record<string, unknown>;

/** The raw chrome settings as vis-2 stores them in the widget data (any key may be missing). */
export type TableChromeSettings = Readonly<
    Pick<
        JsonTableFieldsRxData,
        | 'tableDensity'
        | 'tableRowHeight'
        | 'tableHeaderHeight'
        | 'tableAutoSize'
        | 'jsonTablePadding'
        | 'borderWidth'
        | 'borderStyle'
        | 'borderColor'
        | 'borderRadius'
        | 'tableShowRowBorders'
        | 'horizontalCellBorderWidth'
        | 'horizontalCellBorderColor'
        | 'tableShowCellBorders'
        | 'verticalCellBorderWidth'
        | 'verticalCellBorderColor'
        | 'tableHeaderElevation'
        | 'tableHeaderBgColor'
        | 'tableHeaderTextColor'
        | 'tableHeaderFontSize'
        | 'headerBorderWidth'
        | 'headerBorderColor'
        | 'evenRowColor'
        | 'oddRowColor'
    > & {
        /** Card styling off (common field) — the header bar loses its paper and shadow. */
        noCard?: boolean;
    }
>;

/** The theme slice the chrome reads: the shadow ladder and the divider colour. */
export type TableChromeTheme = Readonly<{
    shadows: readonly string[];
    palette: Readonly<{ divider: string }>;
}>;

/** The resolved Tabellen-Chrome. */
export type TableChrome = Readonly<{
    /** Body row height (px): `tableRowHeight`, else the density's. */
    rowHeight: number;
    /** The MUI `<Table size>`: small only in the compact density. */
    tableSize: 'small' | 'medium';
    /** The widget body around quick filter, table and pagination: a column padded by `jsonTablePadding`. */
    bodySx: SxObject;
    /** The outer frame around the table: border (width, style, colour), radius, scrollbar clipping. */
    frameSx: SxObject;
    /** The scroll container (`<TableContainer>`) inside the frame. */
    scrollSx: SxObject;
    /** The `<Table>`: layout (auto/fixed), row and cell borders. */
    tableSx: SxObject;
    /** Sticky header bar (`<TableHead>`): surface, elevation, colour, bottom line, resize-handle hover. */
    headerBarSx: SxObject;
    /** Header cell (`<TableCell component="th">`): height, padding, text colour and size. */
    headerCellSx: SxObject;
    /** Header text (the `<Typography>` inside the cell): text colour and size. */
    headerTextSx: SxObject;
    /** Body row (`<TableRow>`) by its index on the page: height and the even/odd background. */
    rowSx: (rowIndex: number) => SxObject;
    /** Body cell (`<TableCell>`): fixed to the row height, unpadded, clipped. */
    cellSx: SxObject;
}>;

/**
 * The header bar's surface: card paper with the configured elevation (default 6), or
 * transparent and flat with `noCard`; the bottom line as `::after` (stays visible while
 * the sticky bar scrolls); a gradient header colour as `background` over the base, a
 * solid one replacing its `backgroundColor`.
 */
function headerSurfaceSx(settings: TableChromeSettings, theme: TableChromeTheme): SxObject {
    const headerElevation = settings.tableHeaderElevation ?? 6;
    const headerBorderWidth = settings.headerBorderWidth ?? 0;
    const headerBorderColorValue = extractColorFromValue(settings.headerBorderColor);
    const headerBgColor = settings.tableHeaderBgColor;

    const base: SxObject =
        settings.noCard === true
            ? { backgroundColor: 'transparent', boxShadow: 'none' }
            : {
                  backgroundColor: 'background.paper',
                  boxShadow: headerElevation > 0 ? theme.shadows[headerElevation] : 'none',
              };

    if (headerBorderWidth > 0) {
        base['&::after'] = {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: `${headerBorderWidth}px`,
            backgroundColor: headerBorderColorValue || theme.palette.divider,
            pointerEvents: 'none',
        };
    }

    const gradientBg = headerBgColor ? gradientColor(headerBgColor) : null;
    if (gradientBg) {
        return { ...base, background: gradientBg };
    }
    if (headerBgColor) {
        return { ...base, backgroundColor: headerBgColor };
    }
    return base;
}

/**
 * The table: fixed layout (auto with auto-size), row borders (default on, 1 px) and
 * cell borders (default off, 1 px) between the cells only — never after the last one,
 * so the outer frame stays the container's. An unset or unreadable colour falls back to
 * the theme's `divider`, a gradient to its middle colour.
 */
function tableSx(settings: TableChromeSettings): SxObject {
    const sx: SxObject = {
        tableLayout: settings.tableAutoSize === true ? 'auto' : 'fixed',
        width: '100%',
    };

    if (settings.tableShowRowBorders === false) {
        sx['& .MuiTableCell-root'] = { borderBottom: 'none' };
    } else {
        const hBorderWidth = settings.horizontalCellBorderWidth ?? 1;
        const hBorderColorValue = extractColorFromValue(settings.horizontalCellBorderColor);
        sx['& .MuiTableCell-root'] = {
            borderBottom: `${hBorderWidth}px solid`,
            borderBottomColor: hBorderColorValue || 'divider',
        };
    }

    if (settings.tableShowCellBorders === true) {
        const vBorderWidth = settings.verticalCellBorderWidth ?? 1;
        const vBorderColorValue = extractColorFromValue(settings.verticalCellBorderColor);
        sx['& .MuiTableCell-root:not(:last-child)'] = {
            borderRight: `${vBorderWidth}px solid`,
            borderRightColor: vBorderColorValue || 'divider',
        };
    }

    return sx;
}

/**
 * The outer frame: a clipping flex column (its overflow hides the scrollbars at rounded
 * corners) with the configured border — only for a width above 0, style default solid,
 * an unset or unreadable colour the theme's `divider` — and radius.
 */
function frameSx(settings: TableChromeSettings): SxObject {
    const base: SxObject = {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    };

    const borderWidth = settings.borderWidth;
    const borderStyle = settings.borderStyle || 'solid';
    const borderColor = extractColorFromValue(settings.borderColor);
    const borderRadius = settings.borderRadius;

    if (borderWidth && borderWidth > 0) {
        base.border = `${borderWidth}px ${borderStyle}`;
        base.borderColor = borderColor || 'divider';
    }
    if (borderRadius) {
        base.borderRadius = borderRadius;
    }

    return base;
}

/** A row colour's sx: a gradient as `background`, a solid colour as `backgroundColor`, none without. */
function rowBackgroundSx(colorValue: string | null): SxObject | undefined {
    if (!colorValue) {
        return undefined;
    }
    const gradient = gradientColor(colorValue);
    return gradient ? { background: gradient } : { backgroundColor: colorValue };
}

/**
 * Resolves the Tabellen-Chrome.
 *
 * @param settings The raw widget data.
 * @param theme The effective MUI theme (only `shadows` and `palette.divider` are read).
 * @returns Every sx fragment of the table's presentation shell.
 */
export function buildTableChrome(settings: TableChromeSettings, theme: TableChromeTheme): TableChrome {
    const density = settings.tableDensity || 'standard';
    const rowHeight = Number(settings.tableRowHeight) || DENSITY_ROW_HEIGHT[density] || 52;
    const headerHeight = Number(settings.tableHeaderHeight) || DENSITY_HEADER_HEIGHT[density] || 56;

    const headerTextColor = settings.tableHeaderTextColor;
    const headerFontSize = settings.tableHeaderFontSize;
    // Applied to the header text too, so the Typography inside the cell cannot override it
    const headerTextSx: SxObject = {
        ...(headerTextColor && { color: headerTextColor }),
        ...(headerFontSize && { fontSize: `${headerFontSize}px` }),
    };

    const evenRowSx = rowBackgroundSx(settings.evenRowColor || null);
    const oddRowSx = rowBackgroundSx(settings.oddRowColor || null);

    return {
        rowHeight,
        tableSize: density === 'compact' ? 'small' : 'medium',
        bodySx: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            p: Number(settings.jsonTablePadding) || 0,
        },
        frameSx: frameSx(settings),
        scrollSx: { flex: 1, overflow: 'auto' },
        tableSx: tableSx(settings),
        headerBarSx: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            ...headerSurfaceSx(settings, theme),
            '& .resize-handle': { opacity: 0 },
            '&:hover .resize-handle': { opacity: 1 },
        },
        headerCellSx: {
            height: headerHeight,
            padding: 0,
            whiteSpace: 'nowrap',
            ...headerTextSx,
        },
        headerTextSx,
        rowSx: rowIndex => ({
            height: rowHeight,
            ...(rowIndex % 2 === 0 ? evenRowSx : oddRowSx),
        }),
        cellSx: {
            overflow: 'hidden',
            height: rowHeight,
            maxHeight: rowHeight,
            // Unpadded: TableCellRenderer pads inside, so its background covers the whole cell
            padding: 0,
            verticalAlign: 'middle',
        },
    };
}
