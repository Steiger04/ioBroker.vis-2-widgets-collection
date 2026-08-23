/**
 * The chart pipeline — the ONE data-mode decision tree from acquisition to option (ADR-0046).
 *
 * @module EchartsCollectionWidget/useChartPipeline
 * @remarks
 * Formerly hand-rolled twice (`usePreviewOption` in the configurator, `EchartsCollection` in the
 * live body), with accidental drift (duplicated `RANGE_MS`/`toNum`, point caps 200 vs 5000, `hasData`
 * pre-merge vs post-merge, the three-source error only in the body, `refreshMs` ignored by the
 * preview). This module owns everything the data mode owns: series entries, subscriptions,
 * Verlauf/Live/JSON acquisition, family dispatch, presentation resolution, the merge + title +
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
import { buildTitleOption, toPresentationConfig, type ChartConfigBlob } from './presentation';
import { useHistory } from './useHistory';
import { useLiveBuffer } from './useLiveBuffer';
import { mergeGeneratedOverTheme } from './utils/mergeOption';
import { toPlottableNumber, type Point, type SeriesPoint } from './historyLogic';
import { transformSeriesData, xOffsetMs } from './seriesTransform';
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
    /** Bound state id; empty when unset. (Unused for radar polygons.) */
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
    /** Decoded chartConfig blob / editor family state (gauge/radar/pie + section raws). */
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

/** Time-range presets → ms. Single source (formerly duplicated body + preview). */
export const RANGE_MS: Record<string, number> = {
    '24h': 86_400_000,
    '7d': 7 * 86_400_000,
    '30d': 30 * 86_400_000,
};

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

const NO_INDICATORS: { oid?: string; name?: string; max?: number; id?: string }[] = [];

const oidList = (oids: readonly (string | undefined)[]): string[] => oids.filter(isUsableOid);

/**
 * Which OIDs' CURRENT values the pipeline needs (family/mode knowledge — the preview adapter
 * subscribes exactly these; the body adapter reads them from vis-2's subscribed values).
 * Verlauf needs them only for the early refresh — off in the preview, so it subscribes nothing.
 */
export const subscribedOids = (
    family: ReturnType<typeof familyOf>,
    mode: string,
    series: readonly ChartPipelineSeries[],
    indicators: readonly { oid?: string }[],
    jsonOid: unknown,
    earlyRefresh: boolean,
): string[] => {
    if (family === 'gauge') {
        return oidList([series[0]?.oid]);
    }
    if (family === 'radar') {
        return oidList(indicators.map(i => i.oid));
    }
    if (mode === 'json') {
        return oidList([typeof jsonOid === 'string' ? jsonOid : undefined]);
    }
    if (mode === 'live') {
        return oidList(series.map(s => s.oid));
    }
    // Verlauf: fetches — values only matter when the early refresh listens for them.
    return earlyRefresh ? oidList(series.map(s => s.oid)) : [];
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
 * Verlauf = the last point of each history series; Live = the subscribed value (the rolling
 * buffer's last point as the pre-subscription fallback); JSON = the last payload point. A series
 * with no usable point maps to `null` (the legend formatter renders the bare name then).
 */
export const resolveLegendValues = (
    mode: string,
    usable: readonly ChartPipelineSeries[],
    values: Record<string, unknown>,
    historySeries: readonly { name: string; data: SeriesPoint[] }[],
    liveBuffers: Record<string, SeriesPoint[]>,
    jsonSeries: readonly { name: string; data: SeriesPoint[] }[],
): Record<string, number | null> => {
    const lastVal = (data: readonly SeriesPoint[]): number | null => {
        const last = data[data.length - 1];
        return last ? toNum(last[1]) : null;
    };
    const out: Record<string, number | null> = {};
    if (mode === 'live') {
        for (const s of usable) {
            out[s.name || s.oid] = toNum(values[s.oid]) ?? lastVal(liveBuffers[s.oid] ?? []);
        }
    } else if (mode === 'json') {
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

/** The unified error surface: JSON parse > Verlauf fetch > per-series — null off cartesian/pie. */
export const pipelineError = (
    family: ReturnType<typeof familyOf>,
    mode: string,
    jsonError: string | undefined,
    historyError: string | null | undefined,
    historySeries: readonly { error?: string }[] = [],
): string | null => {
    if (family !== 'cartesian' && family !== 'pie') {
        return null;
    }
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
    indicators: readonly { oid?: string }[];
    values: Record<string, unknown>;
    history: {
        series: readonly { name: string; data: SeriesPoint[]; error?: string }[];
        loading: boolean;
        error: string | null;
    };
    liveBuffers: Record<string, SeriesPoint[]>;
    jsonParsed: JsonStateResult;
    presentation: PresentationConfig;
    themeBase: EChartsOption;
    companions: ChartPipelineCompanions;
    src: Record<string, unknown>;
}

/**
 * The pure build core (ADR-0046 test surface): family dispatch (gauge value / radar values /
 * Verlauf-Live-JSON series), the theme merge, the title fold (incl. raw-without-text, ADR-0044),
 * the background injection, and `hasData` (values for gauge/radar, the MERGED option for
 * cartesian/pie). The hook is a thin composition over this + the acquisition hooks.
 */
export const assemblePipelineResult = (input: AssemblePipelineInput): { option: EChartsOption; hasData: boolean } => {
    const {
        family,
        mode,
        usable,
        indicators,
        values,
        history,
        liveBuffers,
        jsonParsed,
        presentation,
        themeBase,
        companions,
        src,
    } = input;
    let g: EChartsOption;
    // Legend values (ADR-0054): resolve the per-series current values and inject them into the
    // presentation copy when the toggle is on (radar/gauge have no per-item current value — the
    // formatter falls back to bare names there anyway, so no resolution is wasted on them).
    const presentationWithValues =
        presentation.legendShowValues && (family === 'cartesian' || family === 'pie')
            ? {
                  ...presentation,
                  legendValues: resolveLegendValues(
                      mode,
                      usable,
                      values,
                      history.series,
                      liveBuffers,
                      jsonParsed.series,
                  ),
              }
            : presentation;
    if (family === 'gauge') {
        const oid = usable[0]?.oid ?? '';
        g = buildGeneratedOption({
            family: 'gauge',
            value: oid ? toNum(values[oid]) : null,
            meta: usable,
            p: presentationWithValues,
        });
    } else if (family === 'radar') {
        const vals = indicators.map(ind => (ind.oid ? toNum(values[ind.oid]) : null));
        g = buildGeneratedOption({ family: 'radar', values: vals, meta: usable, p: presentationWithValues });
    } else {
        let series: ChartSeries[];
        if (mode === 'history') {
            series = history.series.map(s => ({ name: s.name, data: s.data }));
        } else if (mode === 'live') {
            series = usable.map(s => ({ name: s.name || s.oid, data: liveBuffers[s.oid] ?? [] }));
        } else {
            // jsonHidden deny-list: hidden payload series never reach the chart (Problem-2).
            series = jsonParsed.series.filter(s => !companions.jsonHidden.includes(s.name));
        }
        // JSON mode: per-series presentation is the name-keyed overlay (ADR-0011), not the
        // positional editor series (json has no per-series OIDs to key it by).
        const meta = mode === 'json' ? series.map(s => companions.jsonSeriesStyle[s.name] ?? {}) : usable;
        // Per-series value transforms (ADR-0059): the Y-offset feeds the formula over every
        // mode's points — Verlauf, Live and JSON all transform at this ONE pure seam.
        const transformed = series.map((s, i) => ({
            name: s.name,
            data: transformSeriesData(s.data, meta[i]),
        }));
        g = buildGeneratedOption({ family, series: transformed, meta, p: presentationWithValues });
    }

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

    const hasData =
        family === 'gauge'
            ? toNum(values[usable[0]?.oid ?? '']) !== null
            : family === 'radar'
              ? indicators.some(ind => (ind.oid ? toNum(values[ind.oid]) : null) !== null)
              : hasMergedData(merged);
    return { option: merged, hasData };
};

/**
 * Run the chart pipeline. Pure branching in the exported helpers; this hook composes them with
 * the acquisition hooks ({@link useHistory}, {@link useLiveBuffer}) over the adapter.
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
    const mode = (src.mode as string) ?? 'history';
    const isTimeFamily = family === 'cartesian' || family === 'pie';
    const maxPoints = opts.maxPoints ?? BODY_MAX_HISTORY_POINTS;

    const presentation = useMemo(
        () =>
            toPresentationConfig({
                src,
                palette: theme.palette,
                family,
                chartConfig: companions.chartConfig,
                markLines: companions.markLines,
                yAxes: companions.yAxes,
                themeTokens: theme.themeTokens,
                themeDark: theme.themeDark,
            }),
        [src, theme, family, companions],
    );

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
    const indicators = useMemo(() => companions.chartConfig.radar?.indicators ?? NO_INDICATORS, [companions]);

    const oids = useMemo(
        () => subscribedOids(family, mode, usable, indicators, src.jsonOid, opts.earlyRefresh === true),
        [family, mode, usable, indicators, src.jsonOid, opts.earlyRefresh],
    );
    const values = useValues(oids);

    // Verlauf acquisition: range/aggregate/count/refreshMs all ride the src record — the preview
    // now honours refreshMs too (polling while the modal is open, ADR-0046 parity decision).
    const history = useHistory(getHistory, entries, {
        rangeMs: RANGE_MS[src.timeRange as string] ?? RANGE_MS['24h'],
        aggregate: src.aggregate as ioBroker.GetHistoryOptions['aggregate'],
        count: Math.min((src.count as number) ?? DEFAULT_HISTORY_COUNT, maxPoints),
        refreshMs: (src.refreshMs as number) || undefined,
        ignoreNull: src.ignoreNull as Parameters<typeof useHistory>[2]['ignoreNull'],
        enabled: isTimeFamily && mode === 'history' && entries.length > 0,
    });

    const liveBuffers = useLiveBuffer(
        entries,
        values as Record<string, ioBroker.StateValue | undefined>,
        isTimeFamily && mode === 'live',
    );

    // JSON acquisition: the payload state's CURRENT value (subscribed via the adapter).
    const jsonOidRaw = typeof src.jsonOid === 'string' ? src.jsonOid : undefined;
    const jsonOid = isUsableOid(jsonOidRaw) ? jsonOidRaw : '';
    const jsonRaw = mode === 'json' && isTimeFamily ? values[jsonOid] : undefined;
    const jsonParsed = useMemo(() => parseJsonState(jsonText(jsonRaw)), [jsonRaw]);

    // Debounced early refresh in Verlauf (body behaviour, off in the preview): re-fetch soon when
    // a subscribed value changes instead of waiting for the periodic refresh. Driven from the
    // adapter's values map — no class ↔ body bridge needed (map decision 02).
    const firstValuesRef = useRef(true);
    const { refresh } = history;
    useEffect(() => {
        if (opts.earlyRefresh !== true || mode !== 'history' || !isTimeFamily || entries.length === 0) {
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
            indicators,
            values,
            history: { series: history.series, loading: history.loading, error: history.error },
            liveBuffers,
            jsonParsed,
            presentation,
            themeBase: theme.themeBase,
            companions,
            src,
        });
        return {
            option,
            hasData,
            loading: isTimeFamily && mode === 'history' && history.loading,
            error: pipelineError(family, mode, jsonParsed.error, history.error, history.series),
        };
    }, [
        family,
        mode,
        isTimeFamily,
        usable,
        values,
        history.series,
        history.loading,
        history.error,
        liveBuffers,
        jsonParsed,
        presentation,
        theme.themeBase,
        indicators,
        companions,
        src,
    ]);
}
