/**
 * The chart pipeline — the ONE data-mode decision tree from acquisition to option (ADR-0046).
 *
 * @module EchartsCollectionWidget/useChartPipeline
 * @remarks
 * Formerly hand-rolled twice (`usePreviewOption` in the configurator, `EchartsCollection` in the
 * live body), with accidental drift (duplicated `RANGE_MS`/`toNum`, point caps 200 vs 5000, `hasData`
 * pre-merge vs post-merge, the three-source error only in the body, `refreshMs` ignored by the
 * preview). This module owns everything the data mode owns: series entries, subscriptions,
 * Verlauf/JSON acquisition, family dispatch, presentation resolution, the merge + title +
 * background block, and the unified return. Two adapters over the seam make it real:
 *
 *  - the ADAPTER supplies stabilised sources only — a plain-OID-keyed value map
 *    (`useValues`, normalising vis-2's `${oid}.val` convention on the body side), the history
 *    fetcher, and the theme trio (palette/tokens/themeBase/themeDark). Ref-churn keying
 *    (the body's `themeSig` content signature) stays in the adapter — churn is a property of
 *    the value source, not a pipeline rule.
 *  - the INPUT is the data-shaped record `toPresentationConfig` reads (rxData in the body,
 *    `editorSrc(state)` in the editor) plus already-decoded companions. Blob decoding stays
 *    caller-side: the body memo-decodes blobs, the editor holds decoded state and must never
 *    re-encode into blobs just so a callee can decode.
 *
 * All branching lives in pure exported functions (the test surface, ADR-0046); the hook is a
 * thin composition over them.
 */
import { useEffect, useMemo, useRef } from 'react';
import type { EChartsOption } from 'echarts';

import {
    buildGeneratedOption,
    familyOf,
    parseJsonState,
    type ChartSeries,
    type JsonStateResult,
    type PresentationConfig,
} from './optionBuilder';
import {
    buildTitleOption,
    markBoundOids,
    resolveMarkLines,
    toPresentationConfig,
    type ChartConfigBlob,
} from './presentation';
import { useHistory } from './useHistory';
import { mergeGeneratedOverTheme } from './utils/mergeOption';
import { toPlottableNumber, type Point, type RangeOptionsInput, type SeriesPoint } from './historyLogic';
import { cutFuturePoints, transformSeriesData, xOffsetMs } from './seriesTransform';
import { applyBarDiff, bucketizeSeries, makeBarPlan, type BarFetchExtras } from './barBuckets';
import type { ThemeTokens } from './echartsTheme';
import type {
    EchartsAxisConfig,
    EchartsFontStyle,
    EchartsFontWeight,
    EchartsMarkLine,
    EchartsSeriesMeta,
    EchartsTitlePos,
} from '../types/field-definitions/echarts-fields';

/** ioBroker history fetcher bound to a socket (the shape {@link useHistory} takes). */
export type ChartPipelineGetHistory = (id: string, options: ioBroker.GetHistoryOptions) => Promise<Point[]>;

/**
 * A series as the pipeline sees it: the per-series meta plus its bound OID. The editor passes
 * `state.series` directly; the body builds it from `oid1..N` + the decoded `seriesConfig` meta.
 */
export interface ChartPipelineSeries extends EchartsSeriesMeta {
    /** Bound state id; empty when unset. */
    oid: string;
}

/** Stabilised theme inputs the adapter supplies — never resolved inside the pipeline. */
export interface ChartPipelineTheme {
    /** Resolved series palette (theme / preset / custom). */
    palette: string[];
    /** Semantic theme colours for the theme-derived defaults (ADR-0027). */
    themeTokens: ThemeTokens;
    /** echarts presentation base from `buildEchartsTheme` (palette already applied). */
    themeBase: EChartsOption;
    /** The effective chart dark mode (toolbox token literals, ADR-0045). */
    themeDark: boolean;
}

/** The seam (ADR-0046): the pipeline's entire view of the outside world. */
export interface ChartPipelineAdapter {
    /** Current values keyed by PLAIN oid (no `.val` suffix) — the adapter normalises its source. */
    useValues: (oids: string[]) => Record<string, unknown>;
    getHistory: ChartPipelineGetHistory;
    theme: ChartPipelineTheme;
}

/** Already-decoded companions — blob decoding stays caller-side (ADR-0046). */
export interface ChartPipelineCompanions {
    /** Decoded chartConfig blob / editor family state (pie + section raws). */
    chartConfig: ChartConfigBlob;
    /** Decoded per-axis config (ADR-0012). */
    yAxes: EchartsAxisConfig[];
    /** Threshold mark lines. */
    markLines: EchartsMarkLine[];
    /** JSON-mode name-keyed per-series style overlay (ADR-0011). */
    jsonSeriesStyle: Record<string, EchartsSeriesMeta>;
    /** JSON-mode deny-list of hidden payload series names. */
    jsonHidden: string[];
    /** The widget's series list (editor `state.series`; body `oidN` + seriesConfig meta). */
    series: ChartPipelineSeries[];
}

export interface ChartPipelineOptions {
    /**
     * Hard ceiling on fetched points per series. The body passes 5000 (protection against absurd
     * history volumes); the preview passes 200 for responsiveness (ADR-0046).
     *
     * @default 5000
     */
    maxPoints?: number;
    /**
     * Debounced early re-fetch (1.5 s) in Verlauf when a subscribed value changes — the body's
     * behaviour; the preview keeps it off (ADR-0046).
     *
     * @default false
     */
    earlyRefresh?: boolean;
}

/** One return shape for both callers (ADR-0046) — the preview gains `error` and polling parity. */
export interface ChartPipelineResult {
    option: EChartsOption;
    loading: boolean;
    /** False → the caller renders its empty placeholder. Checks the MERGED `option.series`. */
    hasData: boolean;
    /** Unified error surface: JSON parse, Verlauf fetch, per-series — `null` when clean. */
    error: string | null;
}

/** Verlauf count fallback when `src.count` is unset — shared by both callers. */
export const DEFAULT_HISTORY_COUNT = 500;

/** The body's hard point ceiling (the ADR-0046 `maxPoints` default; the preview passes 200). */
export const BODY_MAX_HISTORY_POINTS = 5000;

/**
 * The pipeline's value coercion — the shared {@link toPlottableNumber} intake rule (booleans →
 * 1/0 so bool OIDs resolve, ADR-0058).
 */
const toNum = toPlottableNumber;

/** A state value as JSON text — primitives stringify, objects/undefined read as empty. */
const jsonText = (raw: unknown): string => {
    if (typeof raw === 'string') {
        return raw;
    }
    if (typeof raw === 'number' || typeof raw === 'boolean') {
        return String(raw);
    }
    return '';
};

const numOr = (raw: unknown, fallback: number): number =>
    typeof raw === 'number' && Number.isFinite(raw) ? raw : fallback;

/** A usable bound OID — non-empty and not vis-2's unset marker (single predicate, ADR-0046). */
export const isUsableOid = (oid: string | undefined): oid is string => !!oid && oid !== 'nothing_selected';

/** Series with a usable OID — drops empty + `nothing_selected` (rxData normalisation, one place). */
export const usableSeries = (series: readonly ChartPipelineSeries[]): ChartPipelineSeries[] =>
    series.filter(s => isUsableOid(s.oid));

const oidList = (oids: readonly (string | undefined)[]): string[] => oids.filter(isUsableOid);

/**
 * Which OIDs' CURRENT values the pipeline needs (family/mode knowledge — the preview adapter
 * subscribes exactly these; the body adapter reads them from vis-2's subscribed values).
 * Verlauf needs them only for the early refresh — off in the preview, so it subscribes nothing.
 * Marking bound OIDs (ADR-0062) are the exception: cartesian marks resolve their bounds from
 * CURRENT values, so they subscribe in EVERY mode (a bound follows its datapoint live — spec
 * story 33), never gated by the early refresh.
 */
export const subscribedOids = (
    family: ReturnType<typeof familyOf>,
    mode: string,
    series: readonly ChartPipelineSeries[],
    jsonOid: unknown,
    earlyRefresh: boolean,
    markLines: readonly EchartsMarkLine[] = [],
): string[] => {
    let base: string[];
    if (mode === 'json') {
        base = oidList([typeof jsonOid === 'string' ? jsonOid : undefined]);
    } else {
        // Verlauf: fetches — values only matter when the early refresh listens for them.
        base = earlyRefresh ? oidList(series.map(s => s.oid)) : [];
    }
    if (family === 'cartesian' && markLines.length) {
        return Array.from(new Set([...base, ...markBoundOids(markLines)]));
    }
    return base;
};

/** `hasData` on the MERGED option (ADR-0046: unified — the preview formerly checked pre-merge). */
export const hasMergedData = (option: EChartsOption): boolean => {
    const list = (option.series as unknown[] | undefined) ?? [];
    return list.some(s => {
        const o = s as Record<string, unknown> | null | undefined;
        return Array.isArray(o?.data) && (o.data as unknown[]).length > 0;
    });
};

/**
 * The per-series CURRENT value for the legend (`Name [value]`, adapter `legActual`, ADR-0054) —
 * name-keyed so `buildLegend`'s formatter can look items up regardless of family/series source:
 * Verlauf = the last point of each history series; JSON = the last payload point. A series
 * with no usable point maps to `null` (the legend formatter renders the bare name then).
 */
export const resolveLegendValues = (
    mode: string,
    historySeries: readonly { name: string; data: SeriesPoint[] }[],
    jsonSeries: readonly { name: string; data: SeriesPoint[] }[],
): Record<string, number | null> => {
    const lastVal = (data: readonly SeriesPoint[]): number | null => {
        const last = data[data.length - 1];
        return last ? toNum(last[1]) : null;
    };
    const out: Record<string, number | null> = {};
    if (mode === 'json') {
        for (const s of jsonSeries) {
            out[s.name] = lastVal(s.data);
        }
    } else {
        for (const s of historySeries) {
            out[s.name] = lastVal(s.data);
        }
    }
    return out;
};

/**
 * Legend values over FINAL bucket data (category bars, ADR-0065 + K2): the last non-null bucket
 * of each series — the value the bars and tooltip show, the diff already applied. A series of
 * only null buckets resolves to null (the legend formatter renders the bare name).
 */
const bucketedLegendValues = (
    series: readonly { name: string; data: (number | null)[] }[],
): Record<string, number | null> => {
    const out: Record<string, number | null> = {};
    for (const s of series) {
        let v: number | null = null;
        for (let i = s.data.length - 1; i >= 0; i--) {
            if (s.data[i] !== null) {
                v = s.data[i]!;
                break;
            }
        }
        out[s.name] = v;
    }
    return out;
};

/** The unified error surface: JSON parse > Verlauf fetch > per-series — null when clean. */
export const pipelineError = (
    mode: string,
    jsonError: string | undefined,
    historyError: string | null | undefined,
    historySeries: readonly { error?: string }[] = [],
): string | null => {
    if (mode === 'json') {
        return jsonError ?? null;
    }
    if (mode === 'history') {
        return historyError ?? historySeries.find(s => s.error)?.error ?? null;
    }
    return null;
};

/** What the assemble step needs — the hook passes its acquisition-hook results in. */
export interface AssemblePipelineInput {
    family: ReturnType<typeof familyOf>;
    mode: string;
    usable: ChartPipelineSeries[];
    history: {
        series: readonly { name: string; data: SeriesPoint[]; error?: string }[];
        loading: boolean;
        error: string | null;
    };
    jsonParsed: JsonStateResult;
    presentation: PresentationConfig;
    themeBase: EChartsOption;
    companions: ChartPipelineCompanions;
    src: Record<string, unknown>;
    /**
     * The build's clock for the per-series cuts (ADR-0060 „Keine Zukunft") — injectable so the
     * core stays deterministic; the hook passes nothing (real `Date.now()`).
     */
    now?: number;
    /** The bar bucket grid from the history fetch (ADR-0065); null/absent ⇒ time-axis path. */
    barCategories?: number[] | null;
    /** The bucketed fetch window's exclusive end (the last bucket extends to it, ADR-0065). */
    barWindowEnd?: number | null;
    /** Bar diff post-processing on the buckets (ADR-0065) — drops the first category. */
    barDiff?: boolean;
}

/**
 * The pure build core (ADR-0046 test surface): the Verlauf-JSON series dispatch, the theme
 * merge, the title fold (incl. raw-without-text, ADR-0044), the background injection, and
 * `hasData` (the MERGED option). The hook is a thin composition over this + the fetch hook.
 */
export const assemblePipelineResult = (input: AssemblePipelineInput): { option: EChartsOption; hasData: boolean } => {
    const {
        family,
        mode,
        usable,
        history,
        jsonParsed,
        presentation,
        themeBase,
        companions,
        src,
        barCategories,
        barWindowEnd,
        barDiff,
    } = input;
    // Legend values (ADR-0054): resolve the per-series current values and inject them into the
    // presentation copy when the toggle is on.
    const presentationWithValues = presentation.legendShowValues
        ? {
              ...presentation,
              legendValues: resolveLegendValues(
                  mode,
                  history.series,
                  // JSON payload series are always `[ts, val]` points (bucketing is
                  // history/cartesian-only, ADR-0065) — narrowed for the legend resolver.
                  jsonParsed.series as { name: string; data: SeriesPoint[] }[],
              ),
          }
        : presentation;
    let series: ChartSeries[];
    if (mode === 'history') {
        series = history.series.map(s => ({ name: s.name, data: s.data }));
    } else {
        // jsonHidden deny-list: hidden payload series never reach the chart (Problem-2).
        series = jsonParsed.series.filter(s => !companions.jsonHidden.includes(s.name));
    }
    // JSON mode: per-series presentation is the name-keyed overlay (ADR-0011), not the
    // positional editor series (json has no per-series OIDs to key it by).
    const meta = mode === 'json' ? series.map(s => companions.jsonSeriesStyle[s.name] ?? {}) : usable;
    // The per-series data cuts + value transforms at this ONE pure seam (ADR-0059/0060):
    // „Keine Zukunft" cuts points after now in every mode; the Y-offset feeds the formula
    // over every mode's points. Point-typed here — category bars (below) are the only
    // non-point data shape (ADR-0065).
    const now = input.now ?? Date.now();
    const transformed = series.map((s, i) => ({
        name: s.name,
        data: transformSeriesData(
            meta[i]?.noFuture ? cutFuturePoints(s.data as SeriesPoint[], now) : (s.data as SeriesPoint[]),
            meta[i],
        ),
    }));
    // Category bars (ADR-0065): bucket the transformed points onto the fetch's shared grid
    // (formula/offsets apply BEFORE bucketing, like the adapter's convert), run the diff,
    // and ride the categories into the presentation copy — the builder switches to a
    // category x axis and the series data becomes plain bucket arrays.
    let presentationFinal = presentationWithValues;
    let bucketed: ChartSeries[] = transformed;
    if (barCategories?.length) {
        let cats = barCategories;
        const endBound = barWindowEnd ?? cats[cats.length - 1] ?? 0;
        bucketed = transformed.map(s => ({
            name: s.name,
            data: bucketizeSeries(s.data, cats, src.aggregate as Parameters<typeof bucketizeSeries>[2], endBound),
        }));
        if (barDiff) {
            bucketed = bucketed.map(s => ({
                name: s.name,
                data: applyBarDiff(s.data as (number | null)[]),
            }));
            cats = cats.slice(1); // the diff's first bucket has no predecessor
        }
        presentationFinal = { ...presentationWithValues, barCategories: cats };
        // Legend values (K2) resolve from the FINAL buckets — the last non-null (diff
        // included) value the chart actually shows. Reading the raw history series here
        // made the legend contradict the bars (a meter reading against its diff).
        if (presentationWithValues.legendValues) {
            presentationFinal = {
                ...presentationFinal,
                // Bucketed bars carry plain arrays by construction (the ChartSeries union
                // still allows points for the time-axis path) — narrowed for the resolver.
                legendValues: bucketedLegendValues(
                    bucketed.map(s => ({ name: s.name, data: s.data as (number | null)[] })),
                ),
            };
        }
    }
    const g = buildGeneratedOption({ family, series: bucketed, meta, p: presentationFinal });

    const merged = mergeGeneratedOverTheme(g, themeBase);
    const titleText = typeof src.titleText === 'string' ? src.titleText.trim() : '';
    // A raw title (frame/behaviour/subtitle) applies even without title text (ADR-0044).
    if (titleText || companions.chartConfig.titleRaw) {
        buildTitleOption(merged, {
            text: titleText,
            titlePos: (src.titlePos as EchartsTitlePos) ?? 'topCenter',
            dx: numOr(src.titleDx, 0),
            dy: numOr(src.titleDy, 0),
            color: typeof src.titleColor === 'string' && src.titleColor ? src.titleColor : null,
            fontSize: typeof src.titleFontSize === 'number' ? src.titleFontSize : undefined,
            fontWeight: (src.titleWeight as EchartsFontWeight) ?? null,
            fontStyle: (src.titleFontStyle as EchartsFontStyle) ?? null,
            raw: companions.chartConfig.titleRaw,
        });
    }
    if (presentation.bgColor && presentation.bgColor !== 'transparent') {
        merged.backgroundColor = presentation.bgColor;
    }

    return { option: merged, hasData: hasMergedData(merged) };
};

/**
 * Run the chart pipeline. Pure branching in the exported helpers; this hook composes them with
 * the acquisition hook ({@link useHistory}) over the adapter.
 */
export function useChartPipeline(
    adapter: ChartPipelineAdapter,
    src: Record<string, unknown>,
    companions: ChartPipelineCompanions,
    opts: ChartPipelineOptions = {},
): ChartPipelineResult {
    const { useValues, getHistory, theme } = adapter;
    const chartType = src.chartType as Parameters<typeof familyOf>[0];
    const family = familyOf(chartType);
    // ADR-0071 decode-and-tolerate: a still-persisted 'live' (or any legacy/garbage value)
    // renders as Verlauf here — the editor load heals it to 'history' in memory; the body
    // never re-saves on its own.
    const mode = src.mode === 'json' ? 'json' : 'history';
    const maxPoints = opts.maxPoints ?? BODY_MAX_HISTORY_POINTS;

    const usable = useMemo(() => usableSeries(companions.series), [companions]);
    // History entries carry the per-series request overrides (ADR-0039 instance; ADR-0059
    // X-offset window shift + per-series NULL handling).
    const entries = useMemo(
        () =>
            usable.map(s => {
                const offsetMs = xOffsetMs(s.xOffset);
                return {
                    oid: s.oid,
                    name: s.name,
                    instance: s.instance,
                    ...(offsetMs !== undefined ? { offsetMs } : {}),
                    ...(s.nullMode ? { ignoreNull: s.nullMode } : {}),
                };
            }),
        [usable],
    );
    // A static window (ADR-0063) turns the body's early refresh OFF alongside the polling — one
    // switch read by the subscription set and the refresh effect below.
    const earlyRefresh = opts.earlyRefresh === true && src.timeType !== 'static';

    const oids = useMemo(
        () => subscribedOids(family, mode, usable, src.jsonOid, earlyRefresh, companions.markLines),
        [family, mode, usable, src.jsonOid, earlyRefresh, companions],
    );
    const values = useValues(oids);

    // Marking bounds (ADR-0062): resolve the OID bounds against the CURRENT values BEFORE the
    // presentation call — the builder only ever sees numeric bounds (assembly tested with
    // injected values; the subscription itself stays adapter-side). A missing/unconvertible
    // bound drops to undefined and the marking falls back to a line (or nothing).
    const resolvedMarkLines = useMemo(
        () => (family === 'cartesian' ? resolveMarkLines(companions.markLines, values) : companions.markLines),
        [family, companions, values],
    );
    const presentation = useMemo(
        () =>
            toPresentationConfig({
                src,
                palette: theme.palette,
                family,
                chartConfig: companions.chartConfig,
                markLines: resolvedMarkLines,
                yAxes: companions.yAxes,
                themeTokens: theme.themeTokens,
                themeDark: theme.themeDark,
            }),
        [src, theme, family, companions, resolvedMarkLines],
    );

    // Verlauf acquisition: the window/aggregate/count/refreshMs all ride the src record — the
    // preview honours refreshMs too (polling while the modal is open, ADR-0046 parity decision).
    // A STATIC window (ADR-0063) suppresses the polling AND the early refresh: a fixed span has
    // nothing to follow (adapter behaviour — their live select goes dark on static too).
    const isStaticWindow = src.timeType === 'static';
    // Category bars (ADR-0065): an EXPLICIT interval on an effective-bar chart in Verlauf
    // buckets the pipeline onto calendar categories; 'auto'/unset keeps today's time-axis path.
    // Mixed charts (a per-series bar in a line chart) stay on the time axis — the adapter bins
    // every series there, a quirk not copied.
    const barInterval = src.barInterval as string | undefined;
    const barBucketingOn =
        family === 'cartesian' &&
        mode === 'history' &&
        src.chartType === 'bar' &&
        !!barInterval &&
        barInterval !== 'auto';
    const barDiff = barBucketingOn && src.barDiff === true;
    // The shared request options — read once for BOTH paths (the plain options and the bar
    // plan's base). Memoized so the identities stay stable while `src` is (the fetch effect
    // keys on the JSON of the plain options and the bar plan's reference).
    const baseRequest = useMemo<RangeOptionsInput>(
        () => ({
            aggregate: src.aggregate as ioBroker.GetHistoryOptions['aggregate'],
            // The point ceiling bounds the count path (K3; preview 200, body/default 5000).
            count: Math.min((src.count as number) ?? DEFAULT_HISTORY_COUNT, maxPoints),
            // Zeitschrittweite (ADR-0064): seconds at the author level → ms here; a set step
            // replaces count (windowToOptions omits the dead key). The DEFAULT plan raises it
            // to span/maxPoints (sanitizeStep, K3) — the bar plan ignores it (the grid is the
            // resolution there, ADR-0065).
            step: (src.resolutionStep as number) > 0 ? (src.resolutionStep as number) * 1000 : undefined,
            // Aggregate params (ADR-0064) — windowToOptions emits them only under their aggregate.
            // percentile 0 is a VALID level (the 0th = min) — an explicit check, no `|| undefined`.
            percentile:
                typeof src.percentileValue === 'number' && Number.isFinite(src.percentileValue)
                    ? src.percentileValue
                    : undefined,
            integralUnit: (src.integralUnit as number) || undefined,
            integralInterpolation:
                src.integralInterpolation === 'linear'
                    ? 'linear'
                    : src.integralInterpolation === 'none'
                      ? 'none'
                      : undefined,
        }),
        [src, maxPoints],
    );
    // The bar fetch plan (K4, ADR-0065 addendum): ONE factory in barBuckets owns the bucketed
    // request — window widening, the category grid, the diff's extra bucket, the K3 count cap.
    // Memoized: the plan rides the fetch effect by IDENTITY (a new plan is a new request).
    const barPlan = useMemo(
        () => (barBucketingOn ? makeBarPlan(barInterval ?? 'auto', barDiff, maxPoints, baseRequest) : undefined),
        [barBucketingOn, barInterval, barDiff, maxPoints, baseRequest],
    );
    const history = useHistory<BarFetchExtras>(getHistory, entries, {
        window: {
            timeType: src.timeType as 'relative' | 'static' | undefined,
            timeRange: src.timeRange as string | undefined,
            relativeEnd: src.relativeEnd as string | undefined,
            staticStart: src.staticStart as string | undefined,
            staticEnd: src.staticEnd as string | undefined,
        },
        ...baseRequest,
        planFetch: barPlan,
        maxPoints,
        refreshMs: isStaticWindow ? undefined : (src.refreshMs as number) || undefined,
        ignoreNull: src.ignoreNull as Parameters<typeof useHistory>[2]['ignoreNull'],
        enabled: mode === 'history' && entries.length > 0,
    });

    // JSON acquisition: the payload state's CURRENT value (subscribed via the adapter).
    const jsonOidRaw = typeof src.jsonOid === 'string' ? src.jsonOid : undefined;
    const jsonOid = isUsableOid(jsonOidRaw) ? jsonOidRaw : '';
    const jsonRaw = mode === 'json' ? values[jsonOid] : undefined;
    const jsonParsed = useMemo(() => parseJsonState(jsonText(jsonRaw)), [jsonRaw]);

    // Debounced early refresh in Verlauf (body behaviour, off in the preview): re-fetch soon when
    // a subscribed value changes instead of waiting for the periodic refresh. Driven from the
    // adapter's values map — no class ↔ body bridge needed (map decision 02).
    const firstValuesRef = useRef(true);
    const { refresh } = history;
    useEffect(() => {
        if (!earlyRefresh || mode !== 'history' || entries.length === 0) {
            firstValuesRef.current = true;
            return;
        }
        if (firstValuesRef.current) {
            firstValuesRef.current = false;
            return; // the mount fetch already covers the initial load
        }
        const h = setTimeout(refresh, 1500);
        return (): void => clearTimeout(h);
        // Fire only on value updates; gating conditions are read at fire-time.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    return useMemo<ChartPipelineResult>(() => {
        const { option, hasData } = assemblePipelineResult({
            family,
            mode,
            usable,
            history: { series: history.series, loading: history.loading, error: history.error },
            jsonParsed,
            presentation,
            themeBase: theme.themeBase,
            companions,
            src,
            // The fetch's bar bucket grid (ADR-0065) — the plan's extras from the SAME fetch
            // the series came from, so categories and data can never drift apart.
            barCategories: history.extras?.cats ?? null,
            barWindowEnd: history.extras?.end ?? null,
            barDiff,
        });
        return {
            option,
            hasData,
            loading: mode === 'history' && history.loading,
            error: pipelineError(mode, jsonParsed.error, history.error, history.series),
        };
    }, [
        family,
        mode,
        barDiff,
        usable,
        history.series,
        history.loading,
        history.error,
        history.extras,
        jsonParsed,
        presentation,
        theme.themeBase,
        companions,
        src,
    ]);
}
