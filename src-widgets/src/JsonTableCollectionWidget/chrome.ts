/**
 * The ONE resolution of the Tabellen-Chrome (CONTEXT.md).
 *
 * @module JsonTableCollectionWidget/chrome
 * @remarks
 * Pure. Resolves RAW widget data plus the theme into every sx fragment of the
 * table's presentation shell: density-derived heights, the padded body, the outer
 * frame, the table's layout and row/cell borders, the sticky header bar, header cell
 * and text, and the even/odd row backgrounds (the Select/Button-Group chrome pattern).
 * Behaviour is frozen: every rule reproduces the legacy inline sx of the renderer; the
 * tests pin the results. The colours of frame, lines and header are colour contracts
 * (ADR-0004, `lib/jsonTableColorContracts`): their fields declare the terminals the
 * runtime has always fallen back to — `divider` for the four lines (resolved as a solid
 * colour), `paper` for the header bar, `text` for the header text — and this module
 * resolves the same contracts. Three documented divergences: with `noCard` the header bar
 * stays transparent (the swatch shows paper), the header bar paints its explicit value
 * raw (a legacy value the picker rejects keeps painting), and the header text inherits
 * when unset (its contract only drives the swatch). The row stripes are not contracts yet. Cell
 * content (Format type rendering, conditional styles) and the column-resize affordance
 * are not chrome and stay in the renderer.
 */

import type { Theme } from '@mui/material/styles';

import { gradientColor } from '../lib/helper/gradientColor';
import {
    resolveEffectiveSolidColor,
    terminalColor,
    type ColorFieldContract,
} from '../lib/helper/resolveEffectiveColor';
import { jsonTableColorContracts } from '../lib/jsonTableColorContracts';
import type { JsonTableFieldsRxData } from '../types';

/** Row height (px) per density. */
const DENSITY_ROW_HEIGHT: Record<string, number> = { compact: 36, standard: 52, comfortable: 68 };
/** Header height (px) per density. */
const DENSITY_HEADER_HEIGHT: Record<string, number> = { compact: 36, standard: 56, comfortable: 68 };

/**
 * A plain sx object. Loosely typed on purpose: an unresolvable colour stays `undefined`,
 * which MUI's sx skips.
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
        /**
         * Card styling off (common field) — the header bar loses its paper and shadow. The RAW
         * flag only: an embedded table (`wrappedContent` false) keeps its opaque header bar.
         */
        noCard?: boolean;
    }
>;

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
 * A line colour (outer frame, header bottom line, cell and row borders): its field's
 * divider contract resolved as a solid colour — explicit value, a gradient as its middle
 * colour, else (unset or without a solid colour) the theme divider.
 */
function lineColor(contract: ColorFieldContract, settings: TableChromeSettings, theme: Theme): string | undefined {
    return resolveEffectiveSolidColor(contract, settings, theme);
}

/**
 * The header bar's surface: the `tableHeaderBgColor` contract over a base layer — card
 * paper with the configured elevation (default 6), or transparent and flat with `noCard`;
 * the bottom line as `::after` (stays visible while the sticky bar scrolls). A gradient
 * header colour paints as `background` over the base, any other set one replaces its
 * `backgroundColor` as stored; an unset one leaves the base.
 */
function headerSurfaceSx(settings: TableChromeSettings, theme: Theme): SxObject {
    const headerElevation = settings.tableHeaderElevation ?? 6;
    const headerBorderWidth = settings.headerBorderWidth ?? 0;

    // Deliberately the RAW noCard, not noCard || usedInWidget (= !wrappedContent): inside
    // another widget the sticky bar keeps its paper and shadow, so it stays opaque and the
    // rows never scroll visibly underneath it.
    const flat = settings.noCard === true;

    // The header colour contract: explicit value → theme paper (terminal). Documented
    // deviation under noCard: the bar stays transparent — the terminal yields to
    // transparent, while the editor swatch keeps showing the paper.
    const terminal = flat ? 'transparent' : jsonTableColorContracts.tableHeaderBgColor.terminal;
    // The explicit stage goes into the CSS raw, as before the contract: every colour the
    // cascade reads (Regeln für Farbeingaben) paints as the swatch shows it; a legacy value
    // that is no colour never crashed, so it keeps painting instead of counting as unset
    // (spec: identical rendering, only crashing values change).
    const headerBgColor = settings.tableHeaderBgColor;

    const base: SxObject = {
        // The base layer is the terminal: the paper, or transparent under noCard
        backgroundColor: terminalColor(terminal, theme) || 'transparent',
        boxShadow: !flat && headerElevation > 0 ? theme.shadows[headerElevation] : 'none',
    };

    if (headerBorderWidth > 0) {
        base['&::after'] = {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: `${headerBorderWidth}px`,
            backgroundColor: lineColor(jsonTableColorContracts.headerBorderColor, settings, theme),
            pointerEvents: 'none',
        };
    }

    const gradientBg = gradientColor(headerBgColor);
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
 * so the outer frame stays the container's. Both colours are line colours ({@link lineColor}).
 */
function tableSx(settings: TableChromeSettings, theme: Theme): SxObject {
    const sx: SxObject = {
        tableLayout: settings.tableAutoSize === true ? 'auto' : 'fixed',
        width: '100%',
    };

    if (settings.tableShowRowBorders === false) {
        sx['& .MuiTableCell-root'] = { borderBottom: 'none' };
    } else {
        const hBorderWidth = settings.horizontalCellBorderWidth ?? 1;
        sx['& .MuiTableCell-root'] = {
            borderBottom: `${hBorderWidth}px solid`,
            borderBottomColor: lineColor(jsonTableColorContracts.horizontalCellBorderColor, settings, theme),
        };
    }

    if (settings.tableShowCellBorders === true) {
        const vBorderWidth = settings.verticalCellBorderWidth ?? 1;
        sx['& .MuiTableCell-root:not(:last-child)'] = {
            borderRight: `${vBorderWidth}px solid`,
            borderRightColor: lineColor(jsonTableColorContracts.verticalCellBorderColor, settings, theme),
        };
    }

    return sx;
}

/**
 * The outer frame: a clipping flex column (its overflow hides the scrollbars at rounded
 * corners) with the configured border — only for a width above 0, style default solid,
 * a line colour ({@link lineColor}) — and radius.
 */
function frameSx(settings: TableChromeSettings, theme: Theme): SxObject {
    const base: SxObject = {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    };

    const borderWidth = settings.borderWidth;
    const borderStyle = settings.borderStyle || 'solid';
    const borderRadius = settings.borderRadius;

    if (borderWidth && borderWidth > 0) {
        base.border = `${borderWidth}px ${borderStyle}`;
        base.borderColor = lineColor(jsonTableColorContracts.borderColor, settings, theme);
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
 * @param settings The raw widget data (the raw `noCard`, never `wrappedContent`).
 * @param theme The effective MUI theme (the shadow ladder and the contract terminals).
 * @returns Every sx fragment of the table's presentation shell.
 */
export function buildTableChrome(settings: TableChromeSettings, theme: Theme): TableChrome {
    const density = settings.tableDensity || 'standard';
    const rowHeight = Number(settings.tableRowHeight) || DENSITY_ROW_HEIGHT[density] || 52;
    const headerHeight = Number(settings.tableHeaderHeight) || DENSITY_HEADER_HEIGHT[density] || 56;

    // The header text contract (vis-2 CSS colour → theme text) drives only the editor
    // swatch: at runtime an unset colour sets no `color`, so the header inherits it.
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
        frameSx: frameSx(settings, theme),
        scrollSx: { flex: 1, overflow: 'auto' },
        tableSx: tableSx(settings, theme),
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
