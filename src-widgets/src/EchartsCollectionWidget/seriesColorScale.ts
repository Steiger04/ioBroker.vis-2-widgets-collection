/**
 * The Farbskala of one series (ADR-0101) — value→colour scale per line/bar/scatter series. ONE
 * pure resolution shared by the option builder (runtime `visualMap` entry) and the editor (the
 * colour field's inherit preview, the header swatch, the Min/Max placeholders), so preview and
 * runtime always show the same scale.
 *
 * Resolution order:
 * - **Colours:** a chosen gradient wins ({@link chosenColorScaleStops} → {@link colorScaleColorsFromStops});
 *   without one the scale derives from the effective series colour (light → colour → dark,
 *   {@link deriveColorScaleColors}).
 * - **Range, per bound:** entry → the bound Y axis' fixed bound → the extent of all loaded
 *   finite Y values of the series ({@link resolveColorScaleRange}). Zoom never recolours: the
 *   extent covers the whole loaded series, not the zoom window.
 * - **Unit (ticket 08):** a percent-stacked bar carries SHARES 0–1 (the pipeline normalized them,
 *   ADR-0084) while its axis shows 0–100 %. The user enters and reads the bounds in displayed
 *   percent; {@link resolveColorScaleRange} converts the entries to shares, the placeholders
 *   convert back via {@link colorScaleDisplayValue} — ONE factor ({@link COLOR_SCALE_PERCENT_FACTOR}).
 *
 * @module EchartsCollectionWidget/seriesColorScale
 */
import type { ContinousVisualMapComponentOption } from 'echarts';
import type { EchartsAxisConfig, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';
import { toEchartsLinearGradient, type EchartsColorStop } from '../lib/helper/extractColorFromValue';
import { mixRgba, parseSeriesColor, RGBA_BLACK, RGBA_WHITE, toRgbaString, type Rgba } from './seriesColorDerive';
import type { ChartSeries } from './optionBuilders/types';

/** Share of white (low end) / black (high end) mixed into the series colour for the derived scale. */
export const COLOR_SCALE_MIX = 0.5;

/**
 * The derived Farbskala of a series colour: `[light, colour, dark]` (low → high) as `rgba()`
 * strings. `null` when the colour cannot be resolved (gradient, `var(…)`, garbage).
 */
export const deriveColorScaleColors = (seriesColor: string | null | undefined): string[] | null => {
    const c = parseSeriesColor(seriesColor);
    if (!c) {
        return null;
    }
    return [mixRgba(c, RGBA_WHITE, COLOR_SCALE_MIX), c, mixRgba(c, RGBA_BLACK, COLOR_SCALE_MIX)].map(x =>
        toRgbaString(x),
    );
};

/**
 * The stops of a chosen Farbskala gradient (CSS `linear-gradient(...)`) — colours with their
 * offsets 0–1 in gradient order. `null` when nothing usable is chosen (empty / not a gradient).
 */
export const chosenColorScaleStops = (css: string | null | undefined): EchartsColorStop[] | null => {
    const stops = toEchartsLinearGradient(css)?.colorStops;
    return stops?.length ? stops : null;
};

/**
 * Number of evenly spaced samples an uneven chosen gradient is resampled to. 21 = a 5 % grid:
 * fine enough that a colour change visibly sits at the chosen stop position (a stop at 80 %
 * lands exactly on a sample), small enough for a compact `inRange.color`.
 */
export const COLOR_SCALE_SAMPLE_COUNT = 21;

/** Tolerance for „the stop sits on its even position" (offsets are percent / 100 floats). */
const EVEN_EPSILON = 1e-6;

const clamp01 = (n: number): number => Math.min(1, Math.max(0, Number.isFinite(n) ? n : 0));

/** Interpolate two colours in RGB AND alpha (`mixRgba` keeps the first colour's alpha). */
const lerpRgba = (a: Rgba, b: Rgba, t: number): Rgba => {
    const [r, g, bl] = mixRgba(a, b, t);
    return [r, g, bl, a[3] + (b[3] - a[3]) * t];
};

/** Parsed stops: offsets clamped to 0–1, sorted ascending (stable — equal offsets keep CSS order). */
interface ParsedStop {
    offset: number;
    rgba: Rgba;
}

/** Normalise stops for interpolation; `null` when a colour cannot be resolved. */
const parseStops = (stops: readonly EchartsColorStop[]): ParsedStop[] | null => {
    const parsed: ParsedStop[] = [];
    for (const s of stops) {
        const rgba = parseSeriesColor(s.color);
        if (!rgba) {
            return null;
        }
        parsed.push({ offset: clamp01(s.offset), rgba });
    }
    return parsed.sort((a, b) => a.offset - b.offset);
};

/** The colour at position `t` (0–1) of sorted, clamped stops — piecewise linear, flat outside. */
const rgbaAt = (stops: readonly ParsedStop[], t: number): Rgba => {
    const pos = clamp01(t);
    if (pos <= stops[0].offset) {
        return stops[0].rgba;
    }
    // The last stop at or before `pos` (equal offsets = a hard edge: the later stop wins).
    let lower = 0;
    while (lower + 1 < stops.length && stops[lower + 1].offset <= pos) {
        lower++;
    }
    const upper = stops[lower + 1];
    if (!upper) {
        return stops[lower].rgba;
    }
    const from = stops[lower];
    return lerpRgba(from.rgba, upper.rgba, (pos - from.offset) / (upper.offset - from.offset));
};

/**
 * The colour at position `t` (0–1, clamped) of a stop list as an `rgba()` string — piecewise
 * linear between the stops, the first/last colour outside them. Offsets are clamped to 0–1 and
 * sorted first. `null` for no stops or an unresolvable colour.
 */
export const colorAtStopPosition = (stops: readonly EchartsColorStop[], t: number): string | null => {
    const parsed = stops.length ? parseStops(stops) : null;
    return parsed ? toRgbaString(rgbaAt(parsed, t)) : null;
};

/**
 * The colour at position `t` (0–1, clamped) of an evenly spaced colour list (e.g. the resolved
 * Farbskala, low → high) — `t = 0.5` is the middle colour of the scale. `null` for an empty list
 * or an unresolvable colour.
 */
export const colorScaleColorAt = (colors: readonly string[], t: number): string | null => {
    const last = colors.length - 1;
    return colorAtStopPosition(
        colors.map((color, i) => ({ offset: last > 0 ? i / last : 0, color })),
        t,
    );
};

/**
 * Turn chosen stops into the evenly spaced colour list echarts' `inRange.color` expects
 * (echarts always spreads `inRange.color` evenly over min…max). Offsets are clamped to 0–1 and
 * sorted. Evenly placed stops pass their colours through unchanged; uneven ones are resampled
 * piecewise linearly onto {@link COLOR_SCALE_SAMPLE_COUNT} even samples, so a stop at 80 % sits
 * at 80 % of the value range. THE one place for this conversion (runtime and editor preview).
 */
export const colorScaleColorsFromStops = (stops: readonly EchartsColorStop[]): string[] => {
    const sorted = stops.map(s => ({ offset: clamp01(s.offset), color: s.color })).sort((a, b) => a.offset - b.offset);
    const last = sorted.length - 1;
    const even = sorted.every((s, i) => Math.abs(s.offset - (last > 0 ? i / last : s.offset)) < EVEN_EPSILON);
    if (even) {
        return sorted.map(s => s.color);
    }
    const parsed = parseStops(sorted);
    if (!parsed) {
        return sorted.map(s => s.color);
    }
    return Array.from({ length: COLOR_SCALE_SAMPLE_COUNT }, (_, i) =>
        toRgbaString(rgbaAt(parsed, i / (COLOR_SCALE_SAMPLE_COUNT - 1))),
    );
};

/**
 * The effective Farbskala colours (low → high): the chosen gradient, else the derivation from
 * the effective series colour. `null` = nothing to colour with.
 */
export const resolveColorScaleColors = (
    chosen: string | null | undefined,
    seriesColor: string | null | undefined,
): string[] | null => {
    const stops = chosenColorScaleStops(chosen);
    return stops ? colorScaleColorsFromStops(stops) : deriveColorScaleColors(seriesColor);
};

/** The CSS gradient (left = low, right = high) of an evenly spaced colour list — picker preview + swatch. */
export const colorScaleCss = (colors: readonly string[]): string => {
    if (colors.length === 1) {
        return `linear-gradient(90deg, ${colors[0]} 0%, ${colors[0]} 100%)`;
    }
    const last = colors.length - 1;
    const pct = (i: number): string => `${Math.round((i / last) * 10000) / 100}%`;
    return `linear-gradient(90deg, ${colors.map((c, i) => `${c} ${pct(i)}`).join(', ')})`;
};

/** A numeric value range. */
export interface ValueExtent {
    min: number;
    max: number;
}

/** The Y value of one series datum — `[x, y]` points or plain category values. */
const datumY = (d: unknown): unknown => (Array.isArray(d) ? d[1] : d);

/**
 * The extent of all finite Y values of a series' loaded data (non-numbers, `null`, `NaN` and
 * infinities are ignored). `null` for a series without any finite value.
 */
export const seriesValueExtent = (data: readonly unknown[] | undefined): ValueExtent | null => {
    let min = Infinity;
    let max = -Infinity;
    for (const d of data ?? []) {
        const y = datumY(d);
        if (typeof y === 'number' && Number.isFinite(y)) {
            min = Math.min(min, y);
            max = Math.max(max, y);
        }
    }
    return min <= max ? { min, max } : null;
};

/** Where an effective Farbskala bound comes from. */
export type ColorScaleBoundSource = 'entry' | 'axis' | 'data';

/** One resolved bound: its value (`undefined` = data source without loaded data) and its source. */
export interface ColorScaleBound {
    value: number | undefined;
    source: ColorScaleBoundSource;
}

/** Both resolved bounds of a series' Farbskala. */
export interface ColorScaleRange {
    min: ColorScaleBound;
    max: ColorScaleBound;
}

const finite = (n: unknown): n is number => typeof n === 'number' && Number.isFinite(n);

/** Displayed percent per share of a percent-stacked bar (100 % = share 1). */
export const COLOR_SCALE_PERCENT_FACTOR = 100;

/**
 * A resolved bound (data units) as the user reads it: in displayed percent for a percent-stacked
 * bar, else unchanged. The placeholders' side of the one unit conversion.
 */
export const colorScaleDisplayValue = (value: number, percent: boolean): number =>
    percent ? value * COLOR_SCALE_PERCENT_FACTOR : value;

/**
 * Resolve the Farbskala range PER BOUND: the entry wins, then the bound Y axis' fixed bound,
 * then the data extent. Mixed origins are normal (min from the axis, max from the data).
 *
 * @param meta - The series' Farbskala fields.
 * @param axis - The Y axis the series binds to (its GUI min/max), absent = none.
 * @param extent - The series' loaded data extent; `null`/absent = unknown (the bound then names
 *   its data source without a value).
 * @param percent - The series is a percent-stacked bar: the entries are displayed percent and
 *   convert to shares; axis bounds and data are already shares. Every bound returns in data units.
 */
export const resolveColorScaleRange = (
    meta: Pick<EchartsSeriesMeta, 'colorScaleMin' | 'colorScaleMax'> | undefined,
    axis: Pick<EchartsAxisConfig, 'min' | 'max'> | undefined,
    extent: ValueExtent | null | undefined,
    percent = false,
): ColorScaleRange => {
    const bound = (entry: unknown, axisBound: unknown, dataBound: number | undefined): ColorScaleBound =>
        finite(entry)
            ? { value: percent ? entry / COLOR_SCALE_PERCENT_FACTOR : entry, source: 'entry' }
            : finite(axisBound)
              ? { value: axisBound, source: 'axis' }
              : { value: dataBound, source: 'data' };
    return {
        min: bound(meta?.colorScaleMin, axis?.min, extent?.min),
        max: bound(meta?.colorScaleMax, axis?.max, extent?.max),
    };
};

/**
 * The Y axis a series' Farbskala inherits its fixed bounds from — the builder's axis clamp
 * (ADR-0012): no index binds axis 0, a stale index beyond the axes falls back to axis 0.
 * `undefined` = no axes. ONE resolution for the builder and the Stil tab placeholders.
 */
export const colorScaleAxis = <A>(yAxes: readonly A[], yAxisIndex: number | undefined): A | undefined => {
    const yi = yAxisIndex ?? 0;
    return yAxes[yi < yAxes.length ? yi : 0];
};

/**
 * The INPUT ERROR of a Farbskala (ticket 05): the scale is on and BOTH bounds are entered with
 * Min ≥ Max. Shared by the builder (no entry for the series), the validation (the series warning)
 * and the Stil tab (the field error) — one predicate, three surfaces. Inherited or mixed bounds
 * that collide are no input error (they degrade to the middle colour instead).
 */
export const colorScaleRangeInvalid = (
    meta: Pick<EchartsSeriesMeta, 'colorScale' | 'colorScaleMin' | 'colorScaleMax'> | undefined,
): boolean =>
    meta?.colorScale === true &&
    finite(meta.colorScaleMin) &&
    finite(meta.colorScaleMax) &&
    meta.colorScaleMin >= meta.colorScaleMax;

/** The Farbskala a series' chart actually draws ({@link effectiveColorScale}). */
export interface EffectiveColorScale {
    /** The colours low → high; a degenerate range draws ONE colour, the middle of the scale. */
    colors: string[];
    /** The resolved value range; `null` while a data-inherited bound is unknown (editor without preview data). */
    range: ValueExtent | null;
    /** Min ≥ Max from inherited or mixed bounds: every value draws the middle colour. */
    degenerate: boolean;
}

/**
 * The EFFECTIVE Farbskala of one series — what the chart draws, for the builder (the `visualMap`
 * entry) and the editor (the header swatch) alike. `null` = no scale: the series draws its colour.
 *
 * Edge cases (ticket 05):
 * - switch off, or an ENTERED Min ≥ Max ({@link colorScaleRangeInvalid}) → no scale (the validation
 *   warns);
 * - nothing to colour with (an unresolvable series colour and no chosen gradient) → no scale;
 * - a series without finite values → no scale, unless its whole range is entered;
 * - a resolved Min ≥ Max from inherited or mixed bounds (a constant series, an entry beyond the
 *   data) → ONE colour, the middle of the scale (`degenerate`).
 *
 * @param meta - The series config.
 * @param seriesColor - The series' effective colour (explicit → palette slot).
 * @param axis - The Y axis config the series binds to ({@link colorScaleAxis}).
 * @param extent - The series' loaded data extent: a {@link ValueExtent}; `null` = loaded without
 *   any finite value; `undefined` = unknown (the editor before the preview loaded the series) —
 *   then only the known bounds decide and nothing is invented: the configured scale, unless the
 *   entered/axis bounds already collide.
 * @param percent - The series is a percent-stacked bar ({@link resolveColorScaleRange}).
 */
export const effectiveColorScale = (
    meta: EchartsSeriesMeta | undefined,
    seriesColor: string | null | undefined,
    axis: Pick<EchartsAxisConfig, 'min' | 'max'> | undefined,
    extent: ValueExtent | null | undefined,
    percent = false,
): EffectiveColorScale | null => {
    if (!meta?.colorScale || colorScaleRangeInvalid(meta)) {
        return null;
    }
    const colors = resolveColorScaleColors(meta.colorScaleColors, seriesColor);
    if (!colors) {
        return null;
    }
    const { min, max } = resolveColorScaleRange(meta, axis, extent, percent);
    // Nothing to colour: no finite value and no range the user fully authored.
    if (extent === null && !(min.source === 'entry' && max.source === 'entry')) {
        return null;
    }
    if (min.value === undefined || max.value === undefined) {
        // A data-inherited bound without known data (editor only): the scale as configured.
        return { colors, range: null, degenerate: false };
    }
    if (min.value >= max.value) {
        // The middle (50 %) of the scale; an unresolvable list keeps its lower-middle colour.
        const mid = colorScaleColorAt(colors, 0.5) ?? colors[Math.floor((colors.length - 1) / 2)];
        return {
            colors: [mid],
            range: { min: Math.min(min.value, max.value), max: Math.max(min.value, max.value) },
            degenerate: true,
        };
    }
    return { colors, range: { min: min.value, max: max.value }, degenerate: false };
};

/**
 * The `visualMap` entry of one series — {@link effectiveColorScale} over the series' whole loaded
 * data; `null` when the series draws no scale. A degenerate range paints its middle colour in-
 * AND out-of-range, so no value falls into echarts' default out-of-range look.
 *
 * @param seriesIndex - The series' index in the emitted `series` array (= its meta index).
 * @param meta - The series config.
 * @param seriesColor - The series' effective colour as emitted (explicit → palette slot); a raw
 *   override may set anything there — a non-string derives no scale.
 * @param axis - The Y axis config the series binds to.
 * @param data - The series' loaded data (the whole series, never the zoom window).
 * @param percent - The series is a percent-stacked bar ({@link resolveColorScaleRange}).
 */
export const buildColorScaleEntry = (
    seriesIndex: number,
    meta: EchartsSeriesMeta | undefined,
    seriesColor: unknown,
    axis: Pick<EchartsAxisConfig, 'min' | 'max'> | undefined,
    data: ChartSeries['data'],
    percent = false,
): ContinousVisualMapComponentOption | null => {
    const scale = effectiveColorScale(
        meta,
        typeof seriesColor === 'string' ? seriesColor : undefined,
        axis,
        seriesValueExtent(data),
        percent,
    );
    if (!scale?.range) {
        return null;
    }
    const entry: ContinousVisualMapComponentOption = {
        type: 'continuous',
        seriesIndex,
        dimension: 1,
        show: false,
        min: scale.range.min,
        max: scale.range.max,
        inRange: { color: scale.colors },
    };
    return scale.degenerate ? { ...entry, outOfRange: { color: scale.colors } } : entry;
};
