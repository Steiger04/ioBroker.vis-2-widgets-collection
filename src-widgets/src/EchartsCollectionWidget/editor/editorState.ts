/**
 * Editor state + the rxData ↔ EditorState round-trip for the v2 echarts configurator
 * (ADR-0007 GUI-owns-presentation, ADR-0008 type-family data model).
 *
 * @module EchartsCollectionWidget/editor/editorState
 * @remarks
 * The modal is the sole editor for every chart-specific field. On open it reads the widget
 * rxData (scalars + indexed `oid1..oidN` + the base64 `seriesConfig` / `chartConfig` /
 * `chartOverrides` / `markLines` blobs) into one in-memory {@link EditorState}; on Apply it
 * writes a merged `onDataChange` patch back.
 *
 * The indexed `oidN` field is the subscription vehicle (ADR-0006) and its *meaning* is
 * family-dependent: cartesian/pie → the series OIDs; gauge → the single scalar OID (`oid1`);
 * radar → the indicator OIDs. `series_count` follows: number of series (cartesian/pie), 1
 * (gauge), or number of indicators (radar).
 */

import { decodeBlob, encodeBlob } from '../../lib/encoding';
import { familyOf, parseJsonHidden, parseJsonSeriesStyle } from '../optionBuilder';
import {
    decodeAxes,
    decodeChartConfig,
    decodeLegendConfig,
    decodeMarkLines,
    decodeXAxisWithLegacy,
    legacyAxis,
    normalizeLegendPos,
} from '../presentation';
import { AXIS_TEMPLATES } from './axisTemplates';
import { normalizeAxes, packStaggeredAxes, pruneOrphanAxes } from './axisLayout';
import { normalizeSeries } from './seriesIdentity';
import { withStableIds } from './identity';
import { parseFontStyle, parseFontWeight } from './fontOptions';
import { keepSnippetIds, pruneSnippetIds, type SnippetTemplate } from './snippetComposition';
import { CHART_TEMPLATES, chartTemplatesForFamily } from './advancedJsonTemplates';
import { SERIES_TEMPLATES, seriesSlotOf } from './seriesTemplates';
import type { SeriesMeta } from '../optionBuilder';
import type {
    EchartsAggregate,
    EchartsAxisConfig,
    EchartsAreaFill,
    EchartsCartesianType,
    EchartsChartType,
    EchartsDarkMode,
    EchartsFontStyle,
    EchartsFontWeight,
    EchartsGaugeConfig,
    EchartsIgnoreNull,
    EchartsLegendConfig,
    EchartsLegendPos,
    EchartsMarkLine,
    EchartsMode,
    EchartsPaletteSource,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsRenderer,
    EchartsTimeRange,
    EchartsTitlePos,
    EchartsTooltipTrigger,
    EchartsXAxisConfig,
} from '../../types/field-definitions/echarts-fields';

// Aliases of the single-source unions (echarts-fields.d.ts), under the short editor names.
export type ChartMode = EchartsMode;
export type TimeRange = EchartsTimeRange;
export type Aggregate = EchartsAggregate;
export type IgnoreNull = EchartsIgnoreNull;

/** A series as edited in the modal (rendering metadata + its bound OID). */
export interface EditorSeries extends SeriesMeta {
    /** Indexed rxData OID (`oidN`); empty when unset. (Unused for radar polygons.) */
    oid: string;
}

/** Visual-map editor state (value→colour scale). */
export interface EditorVisualMap {
    enabled: boolean;
    min: number;
    max: number;
    /** `;`/`,`-separated colour stops. */
    colors: string;
}

/** In-memory state of the configurator modal. */
export interface EditorState {
    // family & data mode
    chartType: EchartsChartType;
    mode: ChartMode;
    timeRange: TimeRange;
    aggregate: Aggregate;
    count: number;
    refreshMs: number;
    ignoreNull: IgnoreNull;
    jsonOid: string;
    // title
    titleText: string;
    titlePos: EchartsTitlePos;
    /** Title horizontal pixel offset from the anchor (right-positive). ADR-0009. */
    titleDx: number;
    /** Title vertical pixel offset from the top edge (down-positive). ADR-0009. */
    titleDy: number;
    /** Title text colour override; `null` = inherit theme text-primary (ADR-0021). */
    titleColor: string | null;
    /** Title text size override; `undefined` = inherit (ADR-0021). */
    titleFontSize: number | undefined;
    /** Title text weight (ADR-0021; widened to the full doc set ADR-0029). @default 'normal' */
    titleWeight: EchartsFontWeight;
    /** Title font style (ADR-0029). @default 'normal' */
    titleFontStyle: EchartsFontStyle;
    // series (cartesian/pie full; gauge/radar = label+colour of the single polygon)
    series: EditorSeries[];
    // family config
    gauge: EchartsGaugeConfig;
    radar: EchartsRadarConfig;
    pie: EchartsPieConfig;
    // chart-wide presentation
    legendShow: boolean;
    legendPos: EchartsLegendPos;
    /** Legend styling (ADR-0021 `legendConfig` blob); flat `legendShow`/`legendPos` stay beside it. */
    legend: EchartsLegendConfig;
    tooltipTrigger: EchartsTooltipTrigger;
    tooltipTemplate: string;
    tooltipUnits: string;
    tooltipDecimals: number;
    animation: boolean;
    animationDuration: number;
    /** echarts animation easing (promoted from a JSON snippet, ADR-0011 D5). Empty = default. */
    animationEasing: string;
    bgColor: string;
    /** Cartesian Y-axes (ADR-0012). Axis 0 is the default; further axes render side-by-side. */
    yAxes: EchartsAxisConfig[];
    /** The single cartesian X-axis (ADR-0035) — flat config; empty = plain time axis. */
    xAxis: EchartsXAxisConfig;
    dataZoomSlider: boolean;
    dataZoomInside: boolean;
    paletteSource: EchartsPaletteSource;
    palettePreset: string;
    paletteCustom: string;
    darkMode: EchartsDarkMode;
    renderer: EchartsRenderer;
    markLines: EchartsMarkLine[];
    visualMap: EditorVisualMap;
    /** Decoded Advanced JSON text (the chartOverrides / U side). */
    userText: string;
    /**
     * Ordered ids of the ACTIVE chart-level templates (ADR-0042 "Aktive Vorlage") composing
     * `userText` together with the Eigenanteil. Persisted in the hidden `chartSnippets` blob;
     * pruned to the family catalog on Apply.
     */
    chartSnippets: string[];
    /**
     * JSON-mode per-series style overlay, keyed by the payload series name (ADR-0011). Only
     * edited in json mode (the Series section renders one card per payload series); carried
     * round-trip regardless so switching modes away and back preserves the user's style.
     */
    jsonSeriesStyle: Record<string, SeriesMeta>;
    /**
     * JSON-mode deny-list of payload series names hidden from the chart (Problem-2). The payload
     * owns the series; this only suppresses them. Restorable in the Series section.
     */
    jsonHidden: string[];
}

export type EditorPatch = Partial<EditorState>;
export type SetEditor = (patch: EditorPatch) => void;

export const DEFAULT_EDITOR_STATE: EditorState = {
    chartType: 'line',
    mode: 'history',
    timeRange: '24h',
    aggregate: 'average',
    count: 500,
    refreshMs: 60_000,
    ignoreNull: 'keep',
    jsonOid: '',
    titleText: '',
    titlePos: 'topCenter',
    titleDx: 0,
    titleDy: 0,
    titleColor: null,
    titleFontSize: undefined,
    titleWeight: 'normal',
    titleFontStyle: 'normal',
    series: [],
    gauge: { min: 0, max: 100, progressWidth: 14, unit: '' },
    radar: { shape: 'polygon', splitNumber: 5, area: true, indicators: [] },
    pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' },
    legendShow: true,
    legendPos: 'topCenter',
    legend: {},
    tooltipTrigger: 'axis',
    tooltipTemplate: '',
    tooltipUnits: '',
    tooltipDecimals: 0,
    animation: true,
    animationDuration: 600,
    animationEasing: '',
    bgColor: 'transparent',
    yAxes: [{ position: 'left', splitLine: true }],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    paletteSource: 'theme',
    palettePreset: 'tableau',
    paletteCustom: '',
    darkMode: 'auto',
    renderer: 'canvas',
    markLines: [],
    // visualMap colours empty by default → the builder inherits the theme-derived ramp
    // (primary→success→warning→error, ADR-0027), and the editor swatch previews it.
    visualMap: { enabled: false, min: 0, max: 100, colors: '' },
    userText: '',
    chartSnippets: [],
    jsonSeriesStyle: {},
    jsonHidden: [],
};

const numOr = (v: unknown, dft: number): number => (typeof v === 'number' && Number.isFinite(v) ? v : dft);
const strOr = (v: unknown, dft = ''): string => (typeof v === 'string' ? v : dft);
const boolOr = (v: unknown, dft: boolean): boolean => (typeof v === 'boolean' ? v : dft);

/**
 * Normalize a possibly-legacy area value into the {@link EchartsAreaFill} model (ADR-0008 r4).
 * Legacy forms (tolerated on load, rewritten on the next save):
 *  - `area: true` (boolean) → `flat`
 *  - per-series `type: 'area'` with no explicit `area` → `flat` (a legacy area series)
 *  - `area: false` / undefined → `off`
 */
const normalizeArea = (raw: unknown, legacyAreaType: boolean): EchartsAreaFill => {
    if (raw === 'flat' || raw === 'gradient') {
        return raw;
    }
    if (raw === true || legacyAreaType) {
        return 'flat';
    }
    return 'off';
};

/** True when a series stores the legacy removed `type: 'area'` (ADR-0008 r4) — → flat fill. */
const isLegacyAreaType = (m: SeriesMeta): boolean => (m as { type?: string }).type === 'area';

/**
 * Decode a snippet-activation blob (`chartSnippets`) into an ordered id list. Tolerant of every
 * legacy shape — missing, empty, invalid, non-array → `[]` (ADR-0042: no migration; a widget
 * saved before the multi-select simply has no activations).
 */
const decodeSnippetIds = (raw: unknown): string[] => {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(decodeBlob(raw as string));
        return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === 'string') : [];
    } catch {
        return [];
    }
};

/** Catalog prune + keep-only heal in one (ADR-0042 #6 + addendum) — for single-catalog levels. */
const healedIds = (templates: readonly SnippetTemplate[], ids: string[], raw: string | undefined): string[] =>
    keepSnippetIds(templates, pruneSnippetIds(templates, ids), raw ?? '');

/**
 * Normalize a series' activation list — the LOAD and APPLY paths share this (ADR-0042 decision 6
 * + addendum). Prune to the slot catalog (a stale id is silently dropped, its leaves remain in
 * the raw text as the user's own) and heal against the raw text (an activation whose template
 * has no leaf path left drops — the badge never outlives its content; never adds). Returns
 * `undefined` for an empty result so the blob stays lean.
 */
const normalizeSeriesSnippets = (
    family: ReturnType<typeof familyOf>,
    chartType: string,
    s: SeriesMeta,
): string[] | undefined => {
    if (!s.snippets?.length) {
        return undefined;
    }
    const healed = healedIds(SERIES_TEMPLATES[seriesSlotOf(family, chartType, s)], s.snippets, s.raw);
    return healed.length ? healed : undefined;
};

/**
 * Load the editor state from the widget rxData.
 *
 * @param data - Widget data map (scalars + indexed `oidN` + blobs).
 */
export const loadEditorState = (data: Record<string, unknown>): EditorState => {
    const chartTypeRaw = (data.chartType as EchartsChartType | 'cartesian' | 'area' | undefined) ?? 'line';
    const seriesCount = numOr(data.series_count, 0);

    // seriesConfig → per-index meta (name/colour/type/...)
    let meta: SeriesMeta[] = [];
    try {
        const metaRaw = data.seriesConfig ? JSON.parse(decodeBlob(data.seriesConfig as string)) : [];
        meta = Array.isArray(metaRaw) ? (metaRaw as SeriesMeta[]) : [];
    } catch {
        meta = [];
    }

    // Normalize legacy chartType values (ADR-0008 r4): the family-only 'cartesian' derives its
    // concrete type from the first series (default line); the removed 'area' type maps to 'line'
    // (area is a per-series fill mode now). In-memory only — rewritten to a concrete type on save.
    const chartType: EchartsChartType =
        chartTypeRaw === 'cartesian'
            ? meta[0]?.type === 'bar'
                ? 'bar'
                : 'line'
            : chartTypeRaw === 'area'
              ? 'line'
              : chartTypeRaw;
    const family = familyOf(chartType);

    const chartConfig = decodeChartConfig(data.chartConfig as string);
    const oidAt = (i: number): string => {
        const v = data[`oid${i + 1}`];
        return typeof v === 'string' && v !== 'nothing_selected' ? v : '';
    };

    let series: EditorSeries[];
    let radar: EchartsRadarConfig;
    if (family === 'radar') {
        // oidN = indicator OIDs; meta[0] = polygon label/colour. Carry + normalise a stable id so the
        // indicator card list reconciles by identity (fixes the wrong-card-unmounts bug on delete).
        const indicators = withStableIds(
            (chartConfig.radar?.indicators ?? []).map((ind, i) => ({
                id: ind.id,
                name: ind.name,
                max: ind.max,
                oid: ind.oid || oidAt(i),
            })),
        );
        radar = { ...(chartConfig.radar ?? DEFAULT_EDITOR_STATE.radar), indicators };
        // meta[0] carries the polygon's raw + template activations (ADR-0042; the raw rides the
        // meta blob since ADR-0041's parity — carried through load since the gap fix).
        series = [
            {
                oid: '',
                name: meta[0]?.name ?? '',
                color: meta[0]?.color,
                raw: meta[0]?.raw,
                snippets: meta[0]?.snippets,
            },
        ];
    } else if (family === 'gauge') {
        series = [
            {
                oid: oidAt(0),
                name: meta[0]?.name,
                color: meta[0]?.color,
                raw: meta[0]?.raw,
                snippets: meta[0]?.snippets,
            },
        ];
        radar = DEFAULT_EDITOR_STATE.radar;
    } else {
        // cartesian / pie: oidN = series OIDs, 1:1 with meta. For cartesian, normalise the type
        // model (ADR-0008 r3): a series whose stored type equals the chart type becomes "inherit"
        // (type undefined → follows the top selector); one that differs stays an explicit override.
        // Legacy `type:'area'` (ADR-0008 r4 removed it) is treated as inherit (line) + flat area.
        const inheritType: EchartsCartesianType | undefined =
            family === 'cartesian' ? (chartType as EchartsCartesianType) : undefined;
        series = [];
        for (let i = 0; i < seriesCount; i++) {
            const m = meta[i] ?? {};
            const t = m.type === 'line' || m.type === 'bar' ? m.type : undefined;
            series.push({
                oid: oidAt(i),
                ...m,
                type: t && inheritType && t !== inheritType ? t : undefined,
                area: normalizeArea(m.area, isLegacyAreaType(m)),
            });
        }
        radar = DEFAULT_EDITOR_STATE.radar;
    }

    // Normalise a stable `id` onto each series so React can reconcile series cards by identity, not
    // array index (fixes the wrong-card-unmounts bug on middle-series delete). All families pass
    // through here; gauge/radar ids are throwaway (their save path drops the id) but harmless.
    series = normalizeSeries(series);

    const vm = {
        enabled: boolOr(data.visualMapEnabled, false),
        min: numOr(data.visualMapMin, 0),
        max: numOr(data.visualMapMax, 100),
        // Empty default → the builder inherits the theme-derived ramp (ADR-0027); a stored value is kept.
        colors: strOr(data.visualMapColors, ''),
    };

    // Y-axes: decoded `yAxes` blob, else a single axis synthesised from the legacy chart-level
    // scalars (ADR-0012 migration — no silent rewrite; legacy widgets edit axis 0 on first open).
    // Normalise a stable `id` onto each so React can reconcile axis cards by identity, not array
    // index (fixes the wrong-card-unmounts bug on middle-axis delete).
    const yAxesDecoded = decodeAxes(data.yAxes as string);
    let yAxes = normalizeAxes(yAxesDecoded.length ? yAxesDecoded : [legacyAxis(data)]);
    const mode = (data.mode as ChartMode) ?? DEFAULT_EDITOR_STATE.mode;

    // Mode-switch orphan-prune (ADR-0033): a non-JSON cartesian widget must not carry JSON-derived
    // ghost axes. JSON axes are a derived projection of the payload (the modal reconcile effect
    // re-derives them on open), but once written to the persisted `yAxes` blob they leak into every
    // other mode — a widget saved in JSON with 6 axes reopened/switched to Live showed 6 cards, 5 of
    // them phantoms named "Achse 2..6". Leaving JSON is a bulk series-leave, so the same orphan-check
    // that runs on a single series-leave (ADR-0025) prunes here against `series` (undefined→0, like
    // the builder). Idempotent + safe on a clean widget (every axis bound → no-op); heals polluted
    // blobs without dirty-on-open noise (this IS the loaded snapshot). A prune that drops an axis is
    // a structural change → the survivors re-pack to the dense 80-px raster (ADR-0028); a no-op prune
    // leaves offsets (incl. hand-tuned) untouched.
    if (family === 'cartesian' && mode !== 'json') {
        const pruned = pruneOrphanAxes(series, yAxes);
        series = pruned.series;
        yAxes = pruned.yAxes.length < yAxes.length ? packStaggeredAxes(pruned.yAxes) : pruned.yAxes;
    }

    // Stale-activation prune (ADR-0043) + activation↔text heal (ADR-0042 addendum): the catalog
    // rework retired template ids deliberately — an activation referencing an unknown id drops
    // SILENTLY here (its composed leaves simply stay in the raw text as the user's own). The
    // keep-only heal then drops activations whose template has no leaf path left in the text
    // (the badge lied about content deleted inside the editor); additions never happen at load —
    // retro-detection of hand-typed content stays rejected. Filtering at LOAD also keeps the
    // family-switch loss count honest (a stale id is not a family loss) and covers the levels
    // the Apply-time prune never reached (axes are family-free by design; the chart list is
    // family-pruned at Apply).
    const userText = strOr(data.chartOverrides ? decodeBlob(data.chartOverrides as string) : '', '');
    const chartSnippetsLoaded = keepSnippetIds(
        CHART_TEMPLATES,
        pruneSnippetIds(chartTemplatesForFamily(family), decodeSnippetIds(data.chartSnippets)),
        userText,
    );
    series = series.map(s => ({ ...s, snippets: normalizeSeriesSnippets(family, chartType, s) }));
    yAxes = yAxes.map(a => ({
        ...a,
        snippets: a.snippets?.length ? healedIds(AXIS_TEMPLATES, a.snippets, a.raw) : a.snippets,
    }));
    const pieLoaded = chartConfig.pie ?? DEFAULT_EDITOR_STATE.pie;
    const pie = pieLoaded.snippets?.length
        ? { ...pieLoaded, snippets: healedIds(SERIES_TEMPLATES.pie, pieLoaded.snippets, pieLoaded.raw) }
        : pieLoaded;
    const jsonSeriesStyleLoaded = parseJsonSeriesStyle(data.jsonSeriesStyle as string);
    const jsonSeriesStyle = Object.fromEntries(
        Object.entries(jsonSeriesStyleLoaded).map(([name, m]) => [
            name,
            { ...m, snippets: normalizeSeriesSnippets(family, chartType, m) },
        ]),
    );

    return {
        ...DEFAULT_EDITOR_STATE,
        chartType,
        mode,
        timeRange: (data.timeRange as TimeRange) ?? DEFAULT_EDITOR_STATE.timeRange,
        aggregate: (data.aggregate as Aggregate) ?? DEFAULT_EDITOR_STATE.aggregate,
        count: numOr(data.count, DEFAULT_EDITOR_STATE.count),
        refreshMs: numOr(data.refreshMs, DEFAULT_EDITOR_STATE.refreshMs),
        ignoreNull: (data.ignoreNull as IgnoreNull) ?? DEFAULT_EDITOR_STATE.ignoreNull,
        jsonOid: strOr(data.jsonOid, '') === 'nothing_selected' ? '' : strOr(data.jsonOid, ''),
        titleText: strOr(data.titleText, ''),
        titlePos: (data.titlePos as EchartsTitlePos) ?? DEFAULT_EDITOR_STATE.titlePos,
        titleDx: numOr(data.titleDx, DEFAULT_EDITOR_STATE.titleDx),
        titleDy: numOr(data.titleDy, DEFAULT_EDITOR_STATE.titleDy),
        titleColor: typeof data.titleColor === 'string' && data.titleColor ? data.titleColor : null,
        titleFontSize: typeof data.titleFontSize === 'number' ? data.titleFontSize : undefined,
        titleWeight: parseFontWeight(data.titleWeight),
        titleFontStyle: parseFontStyle(data.titleFontStyle),
        series,
        gauge: chartConfig.gauge ?? DEFAULT_EDITOR_STATE.gauge,
        radar,
        pie,
        legendShow: boolOr(data.legendShow, true),
        legendPos: normalizeLegendPos(data.legendPos),
        legend: decodeLegendConfig(data.legendConfig as string),
        tooltipTrigger: (data.tooltipTrigger as EchartsTooltipTrigger) ?? (family === 'cartesian' ? 'axis' : 'item'),
        tooltipTemplate: strOr(data.tooltipTemplate, ''),
        tooltipUnits: strOr(data.tooltipUnits, ''),
        tooltipDecimals: numOr(data.tooltipDecimals, 0),
        animation: boolOr(data.animation, true),
        animationDuration: numOr(data.animationDuration, 600),
        animationEasing: strOr(data.animationEasing, ''),
        bgColor: strOr(data.bgColor, 'transparent'),
        yAxes,
        // X-axis (ADR-0035): decoded `xAxis` blob wins; a legacy widget's `xSplit` boolean is
        // synthesised into `splitLine` (shared resolver — same rule as the live body).
        xAxis: decodeXAxisWithLegacy(data.xAxis as string, boolOr(data.xSplit, false)),
        dataZoomSlider: boolOr(data.dataZoomSlider, false),
        dataZoomInside: boolOr(data.dataZoomInside, false),
        paletteSource: (data.paletteSource as EchartsPaletteSource) ?? DEFAULT_EDITOR_STATE.paletteSource,
        palettePreset: strOr(data.palettePreset, 'tableau') || 'tableau',
        paletteCustom: strOr(data.paletteCustom, ''),
        darkMode: (data.darkMode as EchartsDarkMode) ?? DEFAULT_EDITOR_STATE.darkMode,
        renderer: (data.renderer as EchartsRenderer) ?? DEFAULT_EDITOR_STATE.renderer,
        markLines: withStableIds(decodeMarkLines(data.markLines as string)),
        visualMap: vm,
        userText,
        chartSnippets: chartSnippetsLoaded,
        jsonSeriesStyle,
        jsonHidden: parseJsonHidden(data.jsonHidden as string),
    };
};

/**
 * Build the merged `onDataChange` patch from the editor state.
 *
 * @param state - Current editor state.
 * @param previousCount - Previously loaded series count, so stale `oidN` are cleared.
 */
export const saveEditorState = (state: EditorState, previousCount = 0): Record<string, unknown> => {
    const family = familyOf(state.chartType);

    // series_count + oidN source depend on family.
    let seriesCount: number;
    let oidList: string[];
    let metaBlob: SeriesMeta[];
    if (family === 'radar') {
        seriesCount = state.radar.indicators.length;
        oidList = state.radar.indicators.map(ind => ind.oid || '');
        metaBlob = [
            {
                name: state.series[0]?.name,
                color: state.series[0]?.color,
                raw: state.series[0]?.raw,
                snippets: normalizeSeriesSnippets(family, state.chartType, state.series[0] ?? {}),
            },
        ];
    } else if (family === 'gauge') {
        seriesCount = 1;
        oidList = [state.series[0]?.oid ?? ''];
        metaBlob = [
            {
                name: state.series[0]?.name,
                color: state.series[0]?.color,
                raw: state.series[0]?.raw,
                snippets: normalizeSeriesSnippets(family, state.chartType, state.series[0] ?? {}),
            },
        ];
    } else {
        seriesCount = state.series.length;
        oidList = state.series.map(s => s.oid || '');
        metaBlob = state.series.map(({ oid: _oid, ...rest }) => ({
            ...rest,
            snippets: normalizeSeriesSnippets(family, state.chartType, rest),
        }));
    }

    // ADR-0042 Apply-time prunes + addendum heal: chart-level activations to the family catalog,
    // the whole-pie activations to the pie catalog, the JSON-mode overlay entries to their slot
    // catalogs (decision 9 covers the JSON-mode series cards). Between a family switch and Apply
    // the stale ids stay in the working copy (the stranded keys render nothing — verified against
    // echarts) and the actual prune rides Apply, mirroring the bound-OID drop. The heal then also
    // drops activations whose template has no leaf path left in the raw text — the persisted blob
    // never carries a badge its content cannot back (chart heals against the FULL catalog so the
    // family prune stays the only place a family-stale id drops).
    const chartSnippets = pruneSnippetIds(
        chartTemplatesForFamily(family),
        keepSnippetIds(CHART_TEMPLATES, state.chartSnippets, state.userText),
    );
    const pieSnippets = healedIds(SERIES_TEMPLATES.pie, state.pie.snippets ?? [], state.pie.raw);
    const yAxesHealed = state.yAxes.map(a => ({
        ...a,
        snippets: a.snippets?.length ? healedIds(AXIS_TEMPLATES, a.snippets, a.raw) : a.snippets,
    }));
    const jsonSeriesStyle = Object.fromEntries(
        Object.entries(state.jsonSeriesStyle).map(([name, m]) => [
            name,
            { ...m, snippets: normalizeSeriesSnippets(family, state.chartType, m) },
        ]),
    );

    const patch: Record<string, unknown> = {
        chartType: state.chartType,
        mode: state.mode,
        timeRange: state.timeRange,
        aggregate: state.aggregate,
        count: state.count,
        refreshMs: state.refreshMs,
        ignoreNull: state.ignoreNull,
        jsonOid: state.jsonOid,
        titleText: state.titleText,
        titlePos: state.titlePos,
        titleDx: state.titleDx,
        titleDy: state.titleDy,
        titleColor: state.titleColor ?? '',
        titleFontSize: state.titleFontSize,
        titleWeight: state.titleWeight,
        titleFontStyle: state.titleFontStyle,
        series_count: seriesCount,
        legendShow: state.legendShow,
        legendPos: state.legendPos,
        legendConfig: encodeBlob(JSON.stringify(state.legend)),
        tooltipTrigger: state.tooltipTrigger,
        tooltipTemplate: state.tooltipTemplate,
        tooltipUnits: state.tooltipUnits,
        tooltipDecimals: state.tooltipDecimals,
        animation: state.animation,
        animationDuration: state.animationDuration,
        animationEasing: state.animationEasing,
        bgColor: state.bgColor,
        dataZoomSlider: state.dataZoomSlider,
        dataZoomInside: state.dataZoomInside,
        paletteSource: state.paletteSource,
        palettePreset: state.palettePreset,
        paletteCustom: state.paletteCustom,
        darkMode: state.darkMode,
        renderer: state.renderer,
        visualMapEnabled: state.visualMap.enabled,
        visualMapMin: state.visualMap.min,
        visualMapMax: state.visualMap.max,
        visualMapColors: state.visualMap.colors,
        // blobs
        seriesConfig: encodeBlob(JSON.stringify(metaBlob)),
        chartConfig: encodeBlob(
            JSON.stringify({
                gauge: state.gauge,
                radar: state.radar,
                pie: { ...state.pie, snippets: pieSnippets.length ? pieSnippets : undefined },
            }),
        ),
        chartOverrides: encodeBlob(state.userText),
        chartSnippets: encodeBlob(JSON.stringify(chartSnippets)),
        markLines: encodeBlob(JSON.stringify(state.markLines)),
        jsonSeriesStyle: encodeBlob(JSON.stringify(jsonSeriesStyle)),
        jsonHidden: encodeBlob(JSON.stringify(state.jsonHidden)),
        yAxes: encodeBlob(JSON.stringify(yAxesHealed)),
        xAxis: encodeBlob(JSON.stringify(state.xAxis)),
    };
    const max = Math.max(seriesCount, previousCount);
    for (let i = 0; i < max; i++) {
        patch[`oid${i + 1}`] = i < oidList.length ? oidList[i] : '';
    }
    return patch;
};

// Re-export the config types the editor UI imports.
export type {
    EchartsGaugeConfig,
    EchartsLegendConfig,
    EchartsLegendIcon,
    EchartsLegendPos,
    EchartsPieConfig,
    EchartsRadarConfig,
    EchartsTitlePos,
    EchartsVisualMapConfig,
    EchartsMarkLine,
} from '../../types/field-definitions/echarts-fields';
