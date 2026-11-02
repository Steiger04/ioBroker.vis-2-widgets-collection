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
 * Three documented divergences between swatch and runtime: with `noCard` the header bar
 * stays transparent (the swatch shows paper); the header bar paints its explicit value raw,
 * so a legacy value the picker rejects keeps painting (the swatch counts it as unset); and
 * the header text inherits at runtime when unset (its contract only drives the swatch).
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
    tableHeaderBgColor: { name: 'tableHeaderBgColor', fallbackFields: [], terminal: 'paper' },
    tableHeaderTextColor: {
        name: 'tableHeaderTextColor',
        fallbackFields: [],
        terminal: 'text',
        inheritTextStyle: true,
    },
} satisfies Record<string, ColorFieldContract>;
