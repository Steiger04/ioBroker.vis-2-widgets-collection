/**
 * The Tabellen-Chrome colour contracts — declared once for the fields and the runtime.
 *
 * @module lib/jsonTableColorContracts
 * @remarks
 * ADR-0004, the Slider's Chrome-Farbvertrag pattern: each table colour field
 * (jsonTableFields) spreads its contract, so the editor swatch resolves it, and the
 * Tabellen-Chrome (`buildTableChrome`) resolves the same contract at runtime. For a chrome
 * slot the field follows the runtime: the lines have always fallen back to the theme
 * divider, the header bar to the theme paper — so the contracts declare exactly these
 * terminals and no fallback field.
 *
 * With `noCard` the header bar stays transparent and the swatch shows the checkerboard
 * (`terminalWithoutCard`). Two documented divergences between swatch and runtime: the header
 * bar paints its explicit value raw, so a legacy value that is no colour keeps painting (the
 * swatch counts it as unset); and the header text inherits at runtime when unset (its
 * contract only drives the swatch).
 *
 * The cells carry no colour field of their own for their text; their inherited text colour has
 * its own contract all the same ({@link jsonTableCellTextColorContract}), so the column editor's
 * swatches name what the cells inherit instead of borrowing the header text's contract.
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { ColorFieldContract } from './helper/resolveEffectiveColor';

/**
 * The table colour cascades, keyed by field name. An invalid explicit colour counts as unset
 * (swatch and lines; the header bar's runtime paints its explicit value raw).
 * - lines (outer frame, header bottom line, cell and row borders): explicit → theme divider,
 *   resolved as a solid colour;
 * - header bar surface: explicit → theme paper;
 * - header text: explicit → vis-2 CSS colour (`inheritTextStyle`) → theme text.
 */
export const jsonTableColorContracts = {
    borderColor: { name: 'borderColor', fallbackFields: [], terminal: 'divider' },
    headerBorderColor: { name: 'headerBorderColor', fallbackFields: [], terminal: 'divider' },
    verticalCellBorderColor: { name: 'verticalCellBorderColor', fallbackFields: [], terminal: 'divider' },
    horizontalCellBorderColor: { name: 'horizontalCellBorderColor', fallbackFields: [], terminal: 'divider' },
    tableHeaderBgColor: {
        name: 'tableHeaderBgColor',
        fallbackFields: [],
        terminal: 'paper',
        terminalWithoutCard: 'transparent',
    },
    tableHeaderTextColor: {
        name: 'tableHeaderTextColor',
        fallbackFields: [],
        terminal: 'text',
        inheritTextStyle: true,
    },
} satisfies Record<string, ColorFieldContract>;

/**
 * The text colour the table's cells inherit: vis-2 CSS colour (`inheritTextStyle`) → theme text.
 * It names the cells' inherited colour for the swatch side (the column editor's colour rows,
 * `utils/cellColors`); the cells themselves inherit it through CSS at runtime — the same split
 * as the header text, whose contract only drives the swatch (ADR-0004). No table field stores a
 * cell text colour, so the cascade has no explicit or fallback stage: `name` addresses no field.
 * Same stages as `tableHeaderTextColor` today, but its own declaration — the cells and the
 * header are separate slots.
 */
export const jsonTableCellTextColorContract = {
    name: 'cellTextColor',
    fallbackFields: [],
    terminal: 'text',
    inheritTextStyle: true,
} satisfies ColorFieldContract;
