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
    /** The texts that follow the Maßstab in full. */
    readonly texts: readonly number[];
    /** The texts that follow it damped (`headScale`): the Kartenkopf, the Hinweiszeile. */
    readonly damped?: readonly number[];
}

/**
 * The least Maßstab a design may draw at: its smallest ± keeps {@link SCALE_BOUNDS.minControl}, each
 * text — in full or damped — {@link SCALE_BOUNDS.minText}.
 *
 * @param needs - The design's ± edges, the text sizes that follow the Maßstab in full and those that
 *   follow it damped (they reach 11 px only at a smaller Maßstab).
 * @returns The least Maßstab; above 1 only for a design that breaks the bounds itself.
 */
export function leastScale(needs: ScaleNeeds): number {
    const least = (sizes: readonly number[], bound: number): number => (sizes.length ? bound / Math.min(...sizes) : 0);
    const damped = least(needs.damped ?? [], SCALE_BOUNDS.minText);
    return Math.max(
        least(needs.controls, SCALE_BOUNDS.minControl),
        least(needs.texts, SCALE_BOUNDS.minText),
        // The Maßstab whose damped factor reaches the bound: the inverse of `headScale`.
        damped ** (1 / HEAD_EXPONENT),
    );
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

/** The step the Maßstab is found in: a thousandth, so the plans stay stable across tiny box changes. */
const SCALE_STEP = 1000;

/**
 * The largest Maßstab up to {@link SCALE_BOUNDS.max} at which an arrangement fits its box — the
 * arrangement takes the room its box gives (Nr. 1). The type names the fit: whether its parts at a
 * Maßstab fit the box; it must hold for every smaller Maßstab once it holds for one.
 *
 * @param fits - Whether the arrangement's parts at a Maßstab fit its box.
 * @returns The Maßstab as a factor, rounded down to a thousandth; 0 when not even the smallest fits. The type
 *   compares it with its least Maßstab ({@link leastScale}) to decide whether the arrangement holds.
 */
export function fittingScale(fits: (scale: number) => boolean): number {
    let low = 0;
    let high = SCALE_BOUNDS.max * SCALE_STEP;
    if (fits(high / SCALE_STEP)) {
        return SCALE_BOUNDS.max;
    }
    // `low` fits (or is 0), `high` does not.
    while (high - low > 1) {
        const middle = Math.floor((low + high) / 2);
        if (fits(middle / SCALE_STEP)) {
            low = middle;
        } else {
            high = middle;
        }
    }
    return low / SCALE_STEP;
}
