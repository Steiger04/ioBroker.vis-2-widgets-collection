/**
 * The defaults of the JSON table fields the widget reads while a field is unset or emptied.
 *
 * @module lib/jsonTableDefaults
 * @remarks
 * One source: the field definitions (`lib/jsonTableFields`) take their `default` from here, and the
 * runtime (the body, the Tabellen-Chrome, the capabilities, the Spalten-Merge) falls back to the
 * same constants. A plain module without React, so the pure table modules can import it.
 */

/** The rows per page (`tablePageSize`). */
export const TABLE_PAGE_SIZE_DEFAULT = 25;

/** The page sizes offered (`tablePageSizeOptions`), comma-separated. */
export const TABLE_PAGE_SIZE_OPTIONS_DEFAULT = '10,25,50,100';

/** The row count above which an unpaged table renders only the rows in view (`tableVirtualizeThreshold`). */
export const TABLE_VIRTUALIZE_THRESHOLD_DEFAULT = 50;

/** The Flattening-Tiefe (`tableMaxDepth`). */
export const TABLE_MAX_DEPTH_DEFAULT = 10;

/** The density (`tableDensity`). */
export const TABLE_DENSITY_DEFAULT = 'standard';

/** The style of the outer frame (`borderStyle`). */
export const TABLE_BORDER_STYLE_DEFAULT = 'solid';

/** The width of the header bar's bottom line (`headerBorderWidth`), in px. */
export const TABLE_HEADER_BORDER_WIDTH_DEFAULT = 0;

/** The header bar's elevation (`tableHeaderElevation`), a step of the theme's shadow ladder. */
export const TABLE_HEADER_ELEVATION_DEFAULT = 6;

/** The width of the row borders (`horizontalCellBorderWidth`) and the cell borders (`verticalCellBorderWidth`), in px. */
export const TABLE_CELL_BORDER_WIDTH_DEFAULT = 1;
