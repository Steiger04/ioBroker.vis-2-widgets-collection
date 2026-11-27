/**
 * The design measures of the heating family's shared parts — the Kartenkopf (ADR-0123) and the pill
 * row — and their sizes at a factor (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“).
 *
 * @module lib/heating/partSizes
 * @remarks
 * A type's plan hands each part its sizes: the Kartenkopf at the damped factor of the Maßstab, the
 * pills at the Maßstab (`lib/heating/scaleRule`). The parts set no size of their own. Measures named
 * `…Units` are in the theme's spacing units, the others in px. Fonts stay legible (`legible`: never
 * below 11 px). Pure; no component.
 */
import { legible, scaled } from './scaleRule';

/** The Kartenkopf's design measures. */
export const KARTENKOPF_DESIGN = {
    /** The name line's font. */
    name: 19,
    /** The second line's font. */
    second: 12.5,
    /** Between the name and the second line. */
    textGapUnits: 0.25,
    /** Between symbol, lines and chips in the row form. */
    rowGapUnits: 1.5,
    /** Between lines and chips in the stacked form. */
    stackGapUnits: 1.25,
    /** The type symbol's box and the symbol in it. */
    symbol: 44,
    icon: 22,
    /** The chip: height, font, gap between sign and text, inner padding, the Meldung's triangle. */
    chipHeight: 30,
    chipFont: 12.5,
    chipGap: 7,
    chipPadUnits: 1.5,
    chipMarkWidth: 9,
    chipMarkHeight: 8,
    /** Between two chips. */
    chipRowGapUnits: 1,
} as const;

/** The Kartenkopf's sizes. */
export type KartenkopfSizes = { readonly [Key in keyof typeof KARTENKOPF_DESIGN]: number };

/** The pill row's design measures. */
export const PILL_DESIGN = {
    /** A pill's height and font. */
    height: 44,
    font: 13.5,
    /** Between label and detail. */
    gap: 7,
    /** A pill's inner padding. */
    padUnits: 1,
    radius: 14,
    /** Between two pills. */
    rowGapUnits: 1,
} as const;

/** The pill row's sizes. */
export type PillSizes = { readonly [Key in keyof typeof PILL_DESIGN]: number };

/**
 * The Kartenkopf's sizes at a factor.
 *
 * @param factor - The damped factor of the Maßstab.
 * @returns The sizes.
 */
export function kartenkopfSizes(factor: number): KartenkopfSizes {
    const sizes = scaled(KARTENKOPF_DESIGN, factor);
    return { ...sizes, name: legible(sizes.name), second: legible(sizes.second), chipFont: legible(sizes.chipFont) };
}

/**
 * The pill row's sizes at a factor.
 *
 * @param factor - The Maßstab.
 * @returns The sizes.
 */
export function pillSizes(factor: number): PillSizes {
    const sizes = scaled(PILL_DESIGN, factor);
    return { ...sizes, font: legible(sizes.font) };
}
