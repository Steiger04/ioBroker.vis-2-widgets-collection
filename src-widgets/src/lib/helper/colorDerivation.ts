/**
 * Color derivations that never throw.
 *
 * @module lib/helper/colorDerivation
 * @remarks
 * MUI's `alpha()` / `lighten()` throw on every value they cannot decompose — a
 * gradient, a color name, `transparent`, a CSS variable ("MUI: Unsupported …
 * color"). Every derivation outside ECharts and the configurator goes through
 * this module instead: the value is first reduced to its Repräsentative
 * Vollfarbe (`CONTEXT.md`, Farb- & Theme-Auflösung) — a solid color a color
 * calculation reads stands for itself, a gradient for its color at the
 * midpoint, anything else for none — and a value without one derives
 * `undefined`, never an exception.
 *
 * Derivation only: which CSS property paints a value (gradient → `background`,
 * solid → `backgroundColor`) stays with its consumers (ADR-0097).
 */

import { alpha, decomposeColor, lighten } from '@mui/material/styles';

import { isGradientColor } from './colorValidation';
import { extractColorFromValue } from './extractColorFromValue';

/** `rgb()` / `hsl()` in CSS's space syntax, an alpha after a slash. */
const SPACE_SYNTAX = /^(rgb|hsl)a?\(\s*([^\s,/]+)\s+([^\s,/]+)\s+([^\s,/]+)\s*(?:\/\s*([^\s,/]+)\s*)?\)\s*$/;

/**
 * A solid value as MUI's parser can calculate with it. MUI splits `rgb()` / `hsl()` on commas
 * only, so the space syntax CSS also reads comes out as `rgba(51, , , 0.5)` — hand it over in
 * the comma syntax. Every other value stays as it is.
 */
function forCalculation(solid: string): string {
    const match = SPACE_SYNTAX.exec(solid);
    if (!match) {
        return solid;
    }
    const [, name, first, second, third, opacity] = match;
    if (opacity === undefined) {
        return `${name}(${first}, ${second}, ${third})`;
    }
    const fraction = opacity.endsWith('%') ? parseFloat(opacity) / 100 : parseFloat(opacity);
    return `${name}a(${first}, ${second}, ${third}, ${fraction})`;
}

/**
 * Whether a colour calculation reads a solid value exactly as given: MUI's
 * `decomposeColor` (the parser behind `alpha`/`lighten`), else the collection's
 * own parser (`extractColorFromValue`) on a value without surrounding whitespace.
 * The second reading covers `rgb()`/`rgba()` in another letter case — CSS reads
 * it and the borders and lines have always drawn it; MUI's parser is case-sensitive.
 */
function readsAsGiven(value: string): boolean {
    try {
        decomposeColor(value);
        return true;
    } catch {
        return value === value.trim() && extractColorFromValue(value) !== null;
    }
}

/**
 * The Repräsentative Vollfarbe of a color value.
 *
 * @param value - Any color value: hex, rgb(a), hsl(a), a gradient, a CSS color name/keyword/variable, or nothing.
 * @returns A gradient's interpolated color at 50 %; any other value a color
 *   calculation reads as given (hex in every length, rgb(a), hsl(a), `color()`)
 *   UNCHANGED, never trimmed; `undefined` for a value none reads — a color name,
 *   `transparent`, `var(…)`, a gradient without hex/rgb stops, a value starting
 *   with whitespace, `''` and `null`/`undefined`.
 * @remarks
 * The color calculation itself is the criterion: before this module the hover
 * tints and shadows called MUI's `alpha()`/`lighten()` on the stored value, so
 * every value MUI reads as given keeps its legacy derivation — including one
 * the picker rejects (`hsl()`, `#rgba`) and one with trailing whitespace, which
 * MUI reads past. MUI throws on a value starting with whitespace, so that one
 * has none. The derivations below hand the unchanged value to MUI, only the
 * space syntax in the comma syntax MUI parses, so their output is MUI's own.
 * @example
 * solidOf('#ff0000') // → '#ff0000'
 * solidOf('hsl(0, 100%, 50%)') // → 'hsl(0, 100%, 50%)'
 * solidOf('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)') // → 'rgb(128, 0, 128)'
 * solidOf('transparent') // → undefined
 */
export function solidOf(value: string | null | undefined): string | undefined {
    if (typeof value !== 'string') {
        return undefined;
    }
    if (isGradientColor(value)) {
        return extractColorFromValue(value) ?? undefined;
    }
    return readsAsGiven(value) ? value : undefined;
}

/**
 * The value's Repräsentative Vollfarbe at the given opacity.
 *
 * @param value - Any color value (see {@link solidOf}).
 * @param opacity - Alpha in [0, 1] (MUI `alpha` semantics).
 * @returns The tinted color as MUI writes it (rgba(), hsla(), …), or `undefined` when the value has no
 *   Repräsentative Vollfarbe or MUI cannot calculate with it. Never throws.
 */
export function alphaOf(value: string | null | undefined, opacity: number): string | undefined {
    const solid = solidOf(value);
    if (solid === undefined) {
        return undefined;
    }
    try {
        return alpha(forCalculation(solid), opacity);
    } catch {
        return undefined;
    }
}

/**
 * The value's Repräsentative Vollfarbe, lightened.
 *
 * @param value - Any color value (see {@link solidOf}).
 * @param coefficient - Lightening in [0, 1] (MUI `lighten` semantics).
 * @returns The lightened color as MUI writes it, or `undefined` when the value has no Repräsentative
 *   Vollfarbe or MUI cannot calculate with it. Never throws.
 */
export function lightenOf(value: string | null | undefined, coefficient: number): string | undefined {
    const solid = solidOf(value);
    if (solid === undefined) {
        return undefined;
    }
    try {
        return lighten(forCalculation(solid), coefficient);
    } catch {
        return undefined;
    }
}
