/**
 * What an unset cell colour paints — read by the cell renderer and the column editor swatches.
 *
 * @module JsonTableCollectionWidget/utils/cellColors
 * @remarks
 * The column editor's colour rows (`ColorPickerField`) show without a value the colour the table
 * paints then. Like Theme Studio, the editor hands the row its value and that inherited colour
 * (`swatchValue`); the label row knows no cascade (ADR-0102), and the editor declares no
 * synthetic field contract. The inherited colour comes from the same source as the runtime,
 * never from a second calculation:
 * - a cell background, an image background, border or tint paints nothing:
 *   {@link UNPAINTED_CELL_COLOR} — the renderer's image background reads it too; the swatch
 *   shows the value, else that ({@link paintedCellColor});
 * - a cell's text inherits the table's text colour — the vis-2 widget CSS `color`, else the
 *   Collection theme's text colour: the inherited stages of the table text cascade
 *   (`jsonTableColorContracts.tableHeaderTextColor`, ADR-0004), {@link tableTextColor};
 * - a conditional text colour overrides the format's static text colour first
 *   (`staticStringTextColor`, the runtime's static string style), {@link cellBaseTextColor}.
 */
import type { Theme } from '@mui/material';
import { resolveEffectiveColor, type StyleColor } from '../../lib/helper/resolveEffectiveColor';
import { jsonTableColorContracts } from '../../lib/jsonTableColorContracts';
import type { ColumnFormatConfig } from '../types';
import { staticStringTextColor } from './cellFormatters';

/** The colour of a cell colour that is unset: nothing painted, what lies beneath shows. */
export const UNPAINTED_CELL_COLOR = 'transparent';

/**
 * What a cell colour without an inherited colour paints (cell, image background, border, tint):
 * its value, else nothing ({@link UNPAINTED_CELL_COLOR}).
 *
 * @param value - The stored colour (`''`/undefined: unset).
 * @returns The value, or `transparent` when it is unset.
 */
export function paintedCellColor(value: string | undefined): string {
    return value || UNPAINTED_CELL_COLOR;
}

/** What the table's cells inherit their text colour from. */
export interface CellColorInheritance {
    /** The Collection theme the table renders under (not the vis-2 host theme). */
    theme: Theme;
    /** The vis-2 widget style fragment carrying the CSS `color` of the table widget. */
    styleColor: StyleColor;
}

/**
 * The table's text colour — what header and cells inherit when they set none: the table text
 * cascade without an explicit value (vis-2 widget CSS `color`, else the theme text).
 *
 * @param inheritance - Collection theme and vis-2 widget style of the table.
 * @returns The inherited text colour.
 */
export function tableTextColor(inheritance: CellColorInheritance): string {
    return resolveEffectiveColor(
        jsonTableColorContracts.tableHeaderTextColor,
        {},
        inheritance.theme,
        inheritance.styleColor,
    );
}

/**
 * The text colour a cell paints before its conditional rules: the format's static text colour,
 * else the table's text colour.
 *
 * @param format - The column's format (undefined: none configured).
 * @param inheritance - Collection theme and vis-2 widget style of the table.
 * @returns The colour a conditional rule's text colour overrides.
 */
export function cellBaseTextColor(format: ColumnFormatConfig | undefined, inheritance: CellColorInheritance): string {
    return staticStringTextColor(format) || tableTextColor(inheritance);
}
