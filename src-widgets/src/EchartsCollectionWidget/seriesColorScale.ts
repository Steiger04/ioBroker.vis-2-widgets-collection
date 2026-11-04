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
 *
 * @module EchartsCollectionWidget/seriesColorScale
 */
import type { EchartsAxisConfig, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';
import { toEchartsLinearGradient, type EchartsColorStop } from '../lib/helper/extractColorFromValue';
import { mixRgba, parseSeriesColor, RGBA_BLACK, RGBA_WHITE, toRgbaString } from './seriesColorDerive';
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
 * Turn chosen stops into the evenly spaced colour list echarts' `inRange.color` expects.
 * THE seam for the stop positions (ticket 04): today the colours pass through evenly
 * distributed; resampling uneven offsets belongs here and nowhere else.
 */
export const colorScaleColorsFromStops = (stops: readonly EchartsColorStop[]): string[] => stops.map(s => s.color);

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

/**
 * Resolve the Farbskala range PER BOUND: the entry wins, then the bound Y axis' fixed bound,
 * then the data extent. Mixed origins are normal (min from the axis, max from the data).
 *
 * @param meta - The series' Farbskala fields.
 * @param axis - The Y axis the series binds to (its GUI min/max), absent = none.
 * @param extent - The series' loaded data extent; `null`/absent = unknown (the bound then names
 *   its data source without a value).
 */
export const resolveColorScaleRange = (
    meta: Pick<EchartsSeriesMeta, 'colorScaleMin' | 'colorScaleMax'> | undefined,
    axis: Pick<EchartsAxisConfig, 'min' | 'max'> | undefined,
    extent: ValueExtent | null | undefined,
): ColorScaleRange => {
    const bound = (entry: unknown, axisBound: unknown, dataBound: number | undefined): ColorScaleBound =>
        finite(entry)
            ? { value: entry, source: 'entry' }
            : finite(axisBound)
              ? { value: axisBound, source: 'axis' }
              : { value: dataBound, source: 'data' };
    return {
        min: bound(meta?.colorScaleMin, axis?.min, extent?.min),
        max: bound(meta?.colorScaleMax, axis?.max, extent?.max),
    };
};

/**
 * The `visualMap` entry of one series with an active Farbskala — `null` when the series has none
 * (switch off), nothing to colour with, or no resolvable range (e.g. a series without finite
 * values and no complete authored range). Edge cases (Min ≥ Max, constant series) are decided
 * here (ticket 05).
 *
 * @param seriesIndex - The series' index in the emitted `series` array (= its meta index).
 * @param meta - The series config.
 * @param seriesColor - The series' effective colour (explicit → palette slot).
 * @param axis - The Y axis config the series binds to.
 * @param data - The series' loaded data (the whole series, never the zoom window).
 */
export const buildColorScaleEntry = (
    seriesIndex: number,
    meta: EchartsSeriesMeta | undefined,
    seriesColor: string,
    axis: Pick<EchartsAxisConfig, 'min' | 'max'> | undefined,
    data: ChartSeries['data'],
): Record<string, unknown> | null => {
    if (!meta?.colorScale) {
        return null;
    }
    const colors = resolveColorScaleColors(meta.colorScaleColors, seriesColor);
    if (!colors) {
        return null;
    }
    const { min, max } = resolveColorScaleRange(meta, axis, seriesValueExtent(data));
    if (min.value === undefined || max.value === undefined) {
        return null;
    }
    return {
        type: 'continuous',
        seriesIndex,
        dimension: 1,
        show: false,
        min: min.value,
        max: max.value,
        inRange: { color: colors },
    };
};
