/**
 * The Maßstab rule of the heating family (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“): one
 * continuous factor relative to the design by which an arrangement draws its parts.
 *
 * @module lib/heating/scaleRule
 * @remarks
 * A type's plan computes the Maßstab of an arrangement from the room its box gives and draws every
 * part by it; the Kartenkopf and the Hinweiszeile follow damped (Nr. 1). The bounds (Nr. 2) hold for
 * every type: at most 2.0, at least the Maßstab at which ± keep 40 px and no text falls below 11 px —
 * below it the type takes a smaller arrangement. Sizes in px and in the theme's spacing units scale
 * alike, so theme typography and spacing stay the basis. Pure; no component.
 */

/** The Maßstab's bounds: the largest factor, the least ± edge and the least text in px (Nr. 2). */
export const SCALE_BOUNDS = { max: 2, minControl: 40, minText: 11 } as const;

/**
 * The damped factor at Maßstab 2.0 (Nr. 1: „roughly 1.3“). The curve is a power law through it:
 * each doubling of the Maßstab multiplies the head by this, each halving divides it.
 */
const HEAD_AT_DOUBLE = 1.3;

/** The exponent of the damped curve: 2^HEAD_EXPONENT = HEAD_AT_DOUBLE. */
const HEAD_EXPONENT = Math.log(HEAD_AT_DOUBLE) / Math.log(2);

/**
 * The factor of the Kartenkopf and the Hinweiszeile at a Maßstab: damped, so neighbouring widgets
 * keep similar names (1 at the design, 1.3 at 2.0).
 *
 * @param scale - The arrangement's Maßstab.
 * @returns The damped factor.
 */
export const headScale = (scale: number): number => scale ** HEAD_EXPONENT;

/** What bounds a design from below: its ± edges and its text sizes at the design, in px. */
export interface ScaleNeeds {
    readonly controls: readonly number[];
    readonly texts: readonly number[];
}

/**
 * The least Maßstab a design may draw at: its smallest ± keeps {@link SCALE_BOUNDS.minControl}, its
 * smallest text {@link SCALE_BOUNDS.minText}.
 *
 * @param needs - The design's ± edges and the text sizes that follow the Maßstab in full (damped
 *   texts shrink less; a type checks those it draws damped itself).
 * @returns The least Maßstab; above 1 only for a design that breaks the bounds itself.
 */
export function leastScale(needs: ScaleNeeds): number {
    const least = (sizes: readonly number[], bound: number): number => (sizes.length ? bound / Math.min(...sizes) : 0);
    return Math.max(least(needs.controls, SCALE_BOUNDS.minControl), least(needs.texts, SCALE_BOUNDS.minText));
}

/**
 * Design measures at a factor: every measure — px or spacing units — times the factor.
 *
 * @param design - The design's measures.
 * @param factor - The Maßstab, or the damped factor.
 * @returns The measures at the factor.
 */
export function scaled<Measures extends Readonly<Record<string, number>>>(
    design: Measures,
    factor: number,
): { readonly [Key in keyof Measures]: number } {
    return Object.fromEntries(Object.entries(design).map(([key, value]) => [key, value * factor])) as {
        readonly [Key in keyof Measures]: number;
    };
}
