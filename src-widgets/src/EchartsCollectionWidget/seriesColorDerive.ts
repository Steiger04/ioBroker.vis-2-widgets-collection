/**
 * Derivations from the effective series colour (ADR-0101; colour model ADR-0027 „erben, nicht
 * stempeln"). Each derivation is ONE pure function shared by the option builder (runtime) and the
 * editor's inherit preview (the ColorField `fallback`), so both always show the same thing.
 *
 * - {@link deriveAreaGradient} — the derived Flächen-Verlauf of a line series in area mode
 *   „Verlauf" without a chosen gradient.
 * - The colour helpers ({@link parseSeriesColor}, {@link toRgbaString}, {@link mixRgba}) are the
 *   building blocks for the derived Farbskala as well (light → series colour → dark).
 *
 * @module EchartsCollectionWidget/seriesColorDerive
 */
import { color as zrColor } from 'echarts/core';
import type { EchartsLinearGradient } from '../lib/helper/extractColorFromValue';

/** A resolved colour: `[r, g, b, a]` — channels 0–255, alpha 0–1. */
export type Rgba = readonly [number, number, number, number];

/** Opaque white / black — the mix targets for lighter / darker variants. */
export const RGBA_WHITE: Rgba = [255, 255, 255, 1];
export const RGBA_BLACK: Rgba = [0, 0, 0, 1];

/** Round to 3 decimals (alpha values stay clean: 0.25, not 0.25000000000000006). */
const round3 = (n: number): number => Math.round(n * 1000) / 1000;

/**
 * Resolve any series colour the series picker or a palette can deliver (hex 3/4/6/8, rgb(a),
 * hsl(a), named colours) to `[r, g, b, a]`. Gradients, `var(…)` and garbage → `null` (the caller
 * then has nothing to derive from and keeps its previous behaviour).
 */
export const parseSeriesColor = (color: string | null | undefined): Rgba | null => {
    if (typeof color !== 'string' || !color.trim()) {
        return null;
    }
    const parsed = zrColor.parse(color.trim());
    if (!parsed || parsed.length < 4 || parsed.some(v => !Number.isFinite(v))) {
        return null;
    }
    return [parsed[0], parsed[1], parsed[2], round3(parsed[3])];
};

/**
 * Format a colour as `rgba(r, g, b, a)` — the one colour syntax the CSS→echarts gradient parser
 * reads as a stop (besides hex). `alphaFactor` scales the colour's own alpha.
 */
export const toRgbaString = (c: Rgba, alphaFactor = 1): string =>
    `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${round3(c[3] * alphaFactor)})`;

/**
 * Mix `c` towards `target` in RGB by `share` (0 = `c` unchanged, 1 = `target`). The alpha of `c`
 * is kept — mixing with white/black lightens/darkens, it does not change the transparency.
 */
export const mixRgba = (c: Rgba, target: Rgba, share: number): Rgba => {
    const t = Math.min(1, Math.max(0, share));
    const mix = (a: number, b: number): number => Math.round(a + (b - a) * t);
    return [mix(c[0], target[0]), mix(c[1], target[1]), mix(c[2], target[2]), c[3]];
};

/** The derived Flächen-Verlauf in both representations. */
export interface DerivedAreaGradient {
    /** For `areaStyle.color`: vertical (x 0 / y 0 → x2 0 / y2 1), bounding box = the area. */
    echarts: EchartsLinearGradient;
    /** The equivalent CSS gradient — the picker's inherit preview and start value. */
    css: string;
}

/** Stop offsets and alpha factors of the derived Flächen-Verlauf: top full, middle half, bottom none. */
const AREA_STOPS: readonly (readonly [offset: number, alpha: number])[] = [
    [0, 1],
    [0.5, 0.5],
    [1, 0],
];

/**
 * Derive the Flächen-Verlauf from the effective series colour: a vertical linear gradient with the
 * series colour at 100 % → 50 % → 0 % of its own opacity (top → bottom). The area-opacity slider
 * still applies on top (`areaStyle.opacity`). Returns `null` when the colour cannot be resolved.
 *
 * @example
 * deriveAreaGradient('#5470c6')!.css
 * // → 'linear-gradient(180deg, rgba(84, 112, 198, 1) 0%, rgba(84, 112, 198, 0.5) 50%, rgba(84, 112, 198, 0) 100%)'
 */
export const deriveAreaGradient = (seriesColor: string | null | undefined): DerivedAreaGradient | null => {
    const c = parseSeriesColor(seriesColor);
    if (!c) {
        return null;
    }
    const stops = AREA_STOPS.map(([offset, alpha]) => ({ offset, color: toRgbaString(c, alpha) }));
    return {
        echarts: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: stops },
        css: `linear-gradient(180deg, ${stops.map(s => `${s.color} ${s.offset * 100}%`).join(', ')})`,
    };
};
