/**
 * Color derivations that never throw.
 *
 * @module lib/helper/colorDerivation
 * @remarks
 * MUI's `alpha()` / `lighten()` throw on every value they cannot decompose — a
 * gradient, a color name, `transparent`, a CSS variable ("MUI: Unsupported …
 * color"). Every derivation outside ECharts and the configurator goes through
 * this module instead: the value is first reduced to its Repräsentative
 * Vollfarbe (`docs/context/color-theme.md`) — a solid color stands for itself,
 * a gradient for its color at the midpoint, anything else for none — and a
 * value without one derives `undefined`, never an exception.
 *
 * Derivation only: which CSS property paints a value (gradient → `background`,
 * solid → `backgroundColor`) stays with its consumers (ADR-0097).
 */

import { alpha, lighten } from '@mui/material/styles';

import { isGradientColor } from './colorValidation';
import { extractColorFromValue } from './extractColorFromValue';

/**
 * The Repräsentative Vollfarbe of a color value.
 *
 * @param value - Any color value: hex, rgb(a), a gradient, a CSS color name/keyword/variable, or nothing.
 * @returns Hex and rgb(a) as given (trailing whitespace dropped); a gradient's interpolated
 *   color at 50 %; `undefined` for a color name, `transparent`, `var(…)`, a gradient without
 *   hex/rgb stops, a solid color starting with whitespace, `''` and `null`/`undefined`.
 * @remarks
 * A solid value is not trimmed at its start: MUI's color calculation, which the hover
 * tints used before this module, never read one starting with whitespace (it threw, the
 * Select's hover stayed untinted), but read past trailing whitespace. Keeping that line
 * keeps the rendering of such legacy values identical.
 * @example
 * solidOf('#ff0000') // → '#ff0000'
 * solidOf('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)') // → 'rgb(128, 0, 128)'
 * solidOf('transparent') // → undefined
 */
export function solidOf(value: string | null | undefined): string | undefined {
    if (typeof value === 'string' && /^\s/.test(value) && !isGradientColor(value)) {
        return undefined;
    }
    return extractColorFromValue(value) ?? undefined;
}

/**
 * The value's Repräsentative Vollfarbe at the given opacity.
 *
 * @param value - Any color value (see {@link solidOf}).
 * @param opacity - Alpha in [0, 1] (MUI `alpha` semantics).
 * @returns The rgba() string, or `undefined` when the value has no Repräsentative Vollfarbe. Never throws.
 */
export function alphaOf(value: string | null | undefined, opacity: number): string | undefined {
    const solid = solidOf(value);
    if (solid === undefined) {
        return undefined;
    }
    try {
        return alpha(solid, opacity);
    } catch {
        return undefined;
    }
}

/**
 * The value's Repräsentative Vollfarbe, lightened.
 *
 * @param value - Any color value (see {@link solidOf}).
 * @param coefficient - Lightening in [0, 1] (MUI `lighten` semantics).
 * @returns The lightened color string, or `undefined` when the value has no Repräsentative Vollfarbe. Never throws.
 */
export function lightenOf(value: string | null | undefined, coefficient: number): string | undefined {
    const solid = solidOf(value);
    if (solid === undefined) {
        return undefined;
    }
    try {
        return lighten(solid, coefficient);
    } catch {
        return undefined;
    }
}
