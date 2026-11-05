/**
 * The Wert-Kette (ADR-0077) as ONE module: the transform stage at the front and the FINAL
 * stage behind it — everything between the acquired series and the series the family builder
 * renders (ADR-0103 K1).
 *
 * @module EchartsCollectionWidget/valueChain
 * @remarks
 * The pure pipeline core ({@link module:EchartsCollectionWidget/useChartPipeline}) picks the
 * series and metas per data mode, calls {@link transformChainSeries} and
 * {@link finishValueChain}, and merges the returned presentation patch — dispatch, merge,
 * title, background and hasData stay there. The final stage runs, in order:
 *
 *  1. category bars (ADR-0065): bucketing onto the fetch grid with the per-series aggregate and
 *     diff (ADR-0072), then the window transforms on the BUCKETS; every other path runs the
 *     window transforms (smoothing, cumulative — ticket 04's final stone) on its own data;
 *  2. the table categories (ADR-0075) — string row labels, kept apart from the bucket grid;
 *  3. the Balken-Stapelmodus 100 % normalization (ADR-0084 decision 4) over the final values —
 *     the stack plan's shares (ADR-0103 K2), the same membership the builder stamps;
 *  4. the tabular pie rings (ADR-0075 decision 5): windowed values become row slices;
 *  5. the legend values (ADR-0054) — computed exactly ONCE, at the end, over the final series
 *     (the pie rings: over the windowed series before the slice split). One value, one truth:
 *     the legend reads what the axis sees, a new path cannot forget it.
 */
import type { ChartSeries, PieSliceDatum } from './optionBuilders/types';
import type { SeriesPoint } from './historyLogic';
import type { JsonTableXKind } from './jsonTableParse';
import type {
    EchartsAggregate,
    EchartsCartesianType,
    EchartsChartFamily,
    EchartsSeriesMeta,
    EchartsStackMode,
} from '../types/field-definitions/echarts-fields';
import { effectiveAggregate, effectiveDiff } from './seriesDataOverrides';
import { applyWindowTransforms, cutFuturePoints, transformPlainValues, transformSeriesData } from './seriesTransform';
import { applyBarDiff, bucketizeSeries } from './barBuckets';
import { effectiveCartesianType, resolveStackPlan, shares } from './stackMode';
import { effectiveSeriesName, resolveAxisPlan } from './axisResolution';

/** One series' meta as the value chain reads it — absent for an unstyled payload series. */
export type ValueChainMeta = EchartsSeriesMeta | undefined;

/** The transform stage's context (ADR-0059/0060). */
export interface ChainTransformContext {
    /** Plain per-row values (the table family's category/index X, ADR-0075) instead of points. */
    plain: boolean;
    /** The build's clock for the „Keine Zukunft" cut (ADR-0060). */
    now: number;
}

/**
 * The transform stage (ADR-0059/0060): „Keine Zukunft" cuts points after `now`, then the
 * Y-offset feeds the formula — over points, or over plain values for the table family's
 * category/index branch.
 */
export const transformChainSeries = (
    series: readonly ChartSeries[],
    meta: readonly ValueChainMeta[],
    ctx: ChainTransformContext,
): ChartSeries[] =>
    series.map((s, i) => ({
        name: s.name,
        data: ctx.plain
            ? transformPlainValues(s.data as (number | null)[], meta[i])
            : transformSeriesData(
                  meta[i]?.noFuture ? cutFuturePoints(s.data as SeriesPoint[], ctx.now) : (s.data as SeriesPoint[]),
                  meta[i],
              ),
    }));

/** The fetch facts the final stage needs (ADR-0065 category bars). */
export interface ValueChainFetch {
    /** The bar bucket grid from the history fetch; null/absent/empty ⇒ no bucketing. */
    barCategories?: number[] | null;
    /** The bucketed fetch window's exclusive end (the last bucket extends to it). */
    barWindowEnd?: number | null;
    /** The chart-level bar diff (the per-series diffMode inherits it, ADR-0072). */
    barDiff?: boolean;
    /** The chart-level aggregate (the per-series aggregate inherits it, ADR-0072). */
    aggregate?: EchartsAggregate;
}

/** The table family's parse facts (ADR-0075) — absent outside the table family. */
export interface ValueChainTable {
    xKind: JsonTableXKind;
    /** Per-row X labels for `category`/`index`. */
    categories?: string[];
    /** Per-row slice names for the pie rings. */
    sliceNames?: string[];
}

/** The cartesian stack facts (ADR-0084) — absent on families without stacks. */
export interface ValueChainStack {
    /** The normalized chart-level Stapelmodus. */
    mode: EchartsStackMode;
    /** The chart's default cartesian type (per-series types override it). */
    defaultType: EchartsCartesianType;
    /** The configured Y axis count (a series bound beyond it stacks on axis 0). */
    axisCount: number;
}

/** What the final stage reads off the legend. */
export interface ValueChainLegend {
    /** The legend shows values (ADR-0054) — only then are legend values computed. */
    showValues: boolean;
    /** The runtime legend selection (ADR-0074) — deselected members leave the percent denominator. */
    selection?: Record<string, boolean>;
}

/** The final stage's input: the TRANSFORMED series plus the facts each stage reads. */
export interface ValueChainInput {
    /** Output of {@link transformChainSeries}. */
    series: readonly ChartSeries[];
    /** Per-series metas, index-aligned with `series`. */
    meta: readonly ValueChainMeta[];
    family: EchartsChartFamily;
    fetch: ValueChainFetch;
    table?: ValueChainTable;
    stack?: ValueChainStack;
    legend: ValueChainLegend;
}

/** The presentation keys the final stage resolves — merged into the presentation copy. */
export interface ValueChainPatch {
    /** The bucket grid, minus the diff's sacrificial first category (ADR-0065). */
    barCategories?: number[];
    /** The table family's row labels (ADR-0075). */
    xCategories?: string[];
    /** The pre-normalization values of the percent-normalized series (ADR-0084 tooltip). */
    percentAbsolute?: Record<string, (number | null)[]>;
    /** The legend values by series name (ADR-0054). */
    legendValues?: Record<string, number | null>;
}

export interface ValueChainResult {
    /** The final series the family builder renders. */
    series: ChartSeries[];
    patch: ValueChainPatch;
}

/** Window transforms (smoothing, cumulative) per series — the value chain's final stone. */
const windowSeries = (series: readonly ChartSeries[], meta: readonly ValueChainMeta[]): ChartSeries[] =>
    series.map((s, i) => ({
        name: s.name,
        // Never slice data here: the pie rings window before the split, every other path is
        // points or plain values (the ChartSeries union still allows slices).
        data: applyWindowTransforms(s.data as SeriesPoint[] | (number | null)[], meta[i]),
    }));

/**
 * Category bars (ADR-0065): bucket the transformed points onto the fetch's shared grid
 * (formula/offsets apply BEFORE bucketing, like the adapter's convert), run the diff, then the
 * window transforms on the BUCKETS — the values the axis, tooltips and labels show.
 */
const bucketStage = (
    series: readonly ChartSeries[],
    meta: readonly ValueChainMeta[],
    fetch: ValueChainFetch & { barCategories: number[] },
): { series: ChartSeries[]; categories: number[] } => {
    let cats = fetch.barCategories;
    const endBound = fetch.barWindowEnd ?? cats[cats.length - 1] ?? 0;
    // Per-series effective aggregate (ADR-0072): an override reshapes BOTH the entry's server
    // request (the fetch seam) and this client-side reduction — a max series reduces max inside
    // an average chart. Non-reducible aggregates (onchange/minmax/count/none/percentile/
    // integral) → last value (adapter parity, bucketizeSeries' default branch). The resolvers
    // are the SHARED Erben-Override ones (seriesDataOverrides.ts) — the series card renders
    // from the same semantics it fetches and reduces with.
    //
    // Per-series diff tristate (ADR-0072): only diff series lose their first category — when
    // EVERY series diffs, the axis drops the sacrificial bucket (ADR-0065 behaviour unchanged);
    // in a mixed chart the axis keeps it: a diff series pads a leading null (no predecessor
    // there), a raw series' first value simply stays standing. The window widening stays tied
    // to the CHART-level barDiff: the one extra bucket it may have bought for non-diff series is
    // harmless for exactly that reason, and an all-diff chart without it pays with its first
    // AUTHORED bucket (the diff's first bucket is meaningless without a predecessor — adapter
    // parity, under-shoot accepted).
    const seriesDiffs = meta.map(m => effectiveDiff(m, fetch.barDiff));
    const allDiff = seriesDiffs.length > 0 && seriesDiffs.every(Boolean);
    const bucketed = series.map((s, i) => {
        // Bar buckets are history/cartesian-only — the point-typed path (the plain-values
        // table branch never reaches here; ADR-0065 vs. ADR-0075).
        const vals = bucketizeSeries(
            s.data as SeriesPoint[],
            cats,
            effectiveAggregate(meta[i], fetch.aggregate),
            endBound,
        );
        if (!seriesDiffs[i]) {
            return { name: s.name, data: vals };
        }
        const diffs = applyBarDiff(vals);
        return { name: s.name, data: allDiff ? diffs : [null, ...diffs] };
    });
    if (allDiff) {
        cats = cats.slice(1); // the diff's first bucket has no predecessor
    }
    return { series: windowSeries(bucketed, meta), categories: cats };
};

/**
 * Balken-Stapelmodus 100 % (ADR-0084 decision 4), after every transform — the stack plan's
 * {@link shares} stage (ADR-0103 K2). The plan reads the SAME membership the builder stamps:
 * bars that resolve a stack, on the emitted axis of the axis plan; like the sum anchor (addendum
 * 1 item 3) the denominator counts the VISIBLE members only — deselected members leave it
 * (Legenden-Folge honesty; the assembly re-runs on every legend click, so a re-selected member
 * renormalizes). The ABSOLUTE values ride `percentAbsolute` for the tooltip.
 */
const percentStage = (
    series: readonly ChartSeries[],
    meta: readonly ValueChainMeta[],
    stack: ValueChainStack,
    selection: Record<string, boolean> | undefined,
): { series: ChartSeries[]; absolutes?: Record<string, (number | null)[]> } => {
    const names = series.map(s => s.name);
    // Only the bindings, the active flags and the remap matter here — the axis configs (owner,
    // geometry) are the builder's; `axisCount` placeholders resolve the same emitted indices.
    // The selection is keyed by the EFFECTIVE (display) name — the name echarts lists, not the
    // payload name an overlay may have renamed.
    const axes = resolveAxisPlan({
        axes: Array.from({ length: stack.axisCount }, () => ({})),
        entries: meta.map((m, i) => ({ yAxisIndex: m?.yAxisIndex, name: effectiveSeriesName(m, series[i], i) })),
        meta,
        series,
        selection,
    });
    const plan = resolveStackPlan({
        series: meta.map(m => ({ type: effectiveCartesianType(m?.type, stack.defaultType), stack: m?.stack })),
        names,
        mode: 'percent',
        axes,
    });
    return shares(plan, series);
};

/**
 * Pie tabellarisch (ADR-0075 decision 5): each yPath series becomes ONE echarts pie series with
 * N row slices — concentric rings (the builder's radius bands), over the WINDOWED values.
 */
const sliceStage = (windowed: readonly ChartSeries[], names: readonly string[]): ChartSeries[] =>
    windowed.map(s => ({
        name: s.name,
        data: (s.data as SeriesPoint[] | (number | null)[]).map(
            (d, i): PieSliceDatum => ({
                // names align 1:1 with every series' rows by construction — the literal is the
                // defensive fallback for a misaligned sight, never a reachable path.
                name: names[i] ?? `Zeile ${i + 1}`,
                value: Array.isArray(d) ? d[1] : d,
            }),
        ),
    }));

/**
 * The legend values (ADR-0054, ticket 04's one-value-one-truth decision): per series, by name,
 * the last NON-NULL value — points and plain arrays alike; a trailing gap is no value (the
 * formatter renders the bare name). Read over the FINAL series, so the legend shows exactly
 * what the axis sees (post offset/formula, bucketing/diff, smoothing/cumulative, share).
 */
const legendValuesOf = (series: readonly ChartSeries[]): Record<string, number | null> => {
    const out: Record<string, number | null> = {};
    for (const s of series) {
        // Points or plain values only — the pie rings pass their series BEFORE the slice split.
        const data = s.data as SeriesPoint[] | (number | null)[];
        let v: number | null = null;
        for (let i = data.length - 1; i >= 0; i--) {
            const val = Array.isArray(data[i]) ? (data[i] as SeriesPoint)[1] : (data[i] as number | null);
            if (val !== null) {
                v = val;
                break;
            }
        }
        out[s.name] = v;
    }
    return out;
};

/**
 * The value chain's FINAL stage (ADR-0103 K1): from the transformed series to the series the
 * family builder renders, plus the presentation patch (categories, percent absolutes, legend
 * values). Pure; see the module remarks for the stage order.
 */
export const finishValueChain = (input: ValueChainInput): ValueChainResult => {
    const { meta, family, fetch, table, stack, legend } = input;
    const patch: ValueChainPatch = {};
    const pieRings = family === 'pie' && !!table?.sliceNames?.length;
    const barCategories = fetch.barCategories;
    let series: ChartSeries[] = [...input.series];
    if (barCategories?.length) {
        const bucketed = bucketStage(input.series, meta, { ...fetch, barCategories });
        series = bucketed.series;
        patch.barCategories = bucketed.categories;
    } else if (!pieRings) {
        // Time-axis points, table points/plain — the pie rings window in their own stage below.
        series = windowSeries(input.series, meta);
    }
    // Two category flavours stay separate (timestamp buckets vs. string labels); the axis
    // itself is the cartesian builder's switch (ADR-0075 ticket 05).
    if (table && table.xKind !== 'time') {
        patch.xCategories = table.categories ?? [];
    }
    if (family === 'cartesian' && stack?.mode === 'percent') {
        const normalized = percentStage(series, meta, stack, legend.selection);
        series = normalized.series;
        if (normalized.absolutes) {
            patch.percentAbsolute = normalized.absolutes;
        }
    }
    let legendBasis = series;
    if (pieRings && table?.sliceNames) {
        const windowed = windowSeries(input.series, meta);
        legendBasis = windowed;
        series = sliceStage(windowed, table.sliceNames);
    }
    if (legend.showValues) {
        patch.legendValues = legendValuesOf(legendBasis);
    }
    return { series, patch };
};
