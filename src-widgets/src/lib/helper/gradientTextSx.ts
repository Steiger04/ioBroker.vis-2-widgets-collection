/**
 * The gradient-text sx fragment of the Collection widgets.
 *
 * @module lib/helper/gradientTextSx
 * @remarks
 * One owner of the four-property incantation that paints a text label whose
 * colour may be a CSS gradient: the gradient (or `null` without one — the
 * frozen legacy value {@link module:lib/helper/gradientColor.gradientColor}
 * produces) as `background`, the text clip through both the Webkit and the
 * standard `background-clip` property, and a transparent `color` so the
 * gradient shows through the glyphs while a solid colour paints them
 * directly. Extracted from the ten-plus duplicated sx literals across the
 * widget renderers (Button-group, Radio-group, Select, both Dialog variants,
 * the layout base, the value text, the Slider mark label and the two
 * JSON-table spots) so a correction of the technique happens exactly here.
 * Gradient text is CONTENT (the state/text side of the state-resolver
 * system), deliberately not button-group chrome. The fragment owns only the
 * colour/clip part — font size, layout and consumer deltas stay with the
 * caller. Behaviour is frozen: every value reproduces the legacy inline
 * computation verbatim; the tests pin the results.
 */

import { gradientColor } from './gradientColor';

/**
 * The frozen shape of the gradient-text fragment.
 *
 * `background` is `null` (not omitted) for solid or unset input — the call
 * sites have always piped `gradientColor`'s null return straight into the
 * property. `color` is present but `undefined` when no colour is configured.
 */
export interface GradientTextSx {
    /** The gradient, or `null` when the input is not one (frozen legacy value). */
    background: string | null;
    /** Vendor-prefixed text clip — without it the gradient renders as a box behind the text. */
    WebkitBackgroundClip: 'text';
    /** Standard text clip, kept in lockstep with the vendor property. */
    backgroundClip: 'text';
    /** `'transparent'` over a gradient, the configured colour otherwise, unset without input. */
    color: string | undefined;
}

/**
 * Builds the sx fragment for text whose colour may be a CSS gradient.
 *
 * Gradient input clips the gradient through the glyphs (transparent text
 * colour); solid colour input keeps the clip properties but paints the text
 * directly; unset input leaves the same keys with a `null` background and an
 * unset colour — byte-identical to the legacy inline incantation.
 *
 * @param color - Configured colour value: a gradient string, a solid colour or nothing.
 * @returns The colour/clip fragment; spread it into the caller's sx (which keeps fontSize & Co.).
 * @example
 * ```typescript
 * gradientTextSx('linear-gradient(red, blue)')
 * // { background: 'linear-gradient(red, blue)',
 * //   WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }
 *
 * gradientTextSx('#ff0000').color // '#ff0000'
 * ```
 */
export function gradientTextSx(color: string | null | undefined): GradientTextSx {
    const gradient = gradientColor(color);

    return {
        background: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: gradient ? 'transparent' : (color ?? undefined),
    };
}
