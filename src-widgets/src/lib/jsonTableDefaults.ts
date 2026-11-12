/**
 * The defaults of the JSON table fields the widget reads while a field is unset or emptied.
 *
 * @module lib/jsonTableDefaults
 * @remarks
 * One source: the field definitions (`lib/jsonTableFields`) take their `default` from here, and the
 * runtime (the body, the Tabellen-Chrome, the capabilities, the Spalten-Merge) falls back to the
 * same constants. A plain module without React, so the pure table modules can import it.
 */

/** The header bar's elevation (`tableHeaderElevation`), a step of the theme's shadow ladder. */
export const TABLE_HEADER_ELEVATION_DEFAULT = 6;

/** The width of the row borders (`horizontalCellBorderWidth`) and the cell borders (`verticalCellBorderWidth`), in px. */
export const TABLE_CELL_BORDER_WIDTH_DEFAULT = 1;
