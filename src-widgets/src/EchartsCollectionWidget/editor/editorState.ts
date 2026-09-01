/**
 * Editor state + the rxData ↔ EditorState round-trip for the v2 echarts configurator
 * (ADR-0007 GUI-owns-presentation, ADR-0008 type-family data model).
 *
 * @module EchartsCollectionWidget/editor/editorState
 * @remarks
 * The modal is the sole editor for every chart-specific field. On open it reads the widget
 * rxData (scalars + indexed `oid1..oidN` + the base64 `seriesConfig` / `chartConfig` /
 * `toolboxConfig` / `markLines` blobs) into one in-memory {@link EditorState}; on Apply it
 * writes a merged `onDataChange` patch back.
 *
 * The indexed `oidN` field is the subscription vehicle (ADR-0006): one entry per series,
 * mirrored by `series_count`.
 */

import { decodeBlob, encodeBlob } from '../../lib/encoding';
import { migrateLegacyRange } from '../timeWindow';
import { familyOf, parseJsonHidden, parseJsonSeriesStyle } from '../optionBuilder';
import {
    decodeAxes,
    decodeChartConfig,
    decodeLegendConfig,
    decodeMarkLines,
    decodeToolboxConfig,
    decodeXAxisWithLegacy,
    legacyAxis,
    normalizeLegendPos,
} from '../presentation';
import { withStableIds } from './stableId';
import { boundJsonView, dropUnboundAxes, reindexJsonOverlay } from './axisLayout';
import { parseFontStyle, parseFontWeight } from './fontOptions';
import { healLoadLevels, healSaveLevels } from './rawLevels';
import { FRAME_STYLES } from '../frameStyle';
import type { SeriesMeta } from '../optionBuilder';
import type {
    EchartsAggregate,
    EchartsAxisConfig,
    EchartsBarInterval,
    EchartsAreaFill,
    EchartsCartesianType,
    EchartsChartType,
    EchartsDarkMode,
    EchartsFontStyle,
    EchartsFontWeight,
    EchartsFrameStyle,
    EchartsIgnoreNull,
    EchartsLegendConfig,
    EchartsLegendPos,
    LegacyChartType,
    EchartsMarkLine,
    EchartsMode,
    EchartsPaletteSource,
    EchartsPieConfig,
    EchartsRenderer,
    EchartsRelativeEnd,
    EchartsTimeRange,
    EchartsTimeType,
    EchartsTitlePos,
    EchartsToolboxConfig,
    EchartsTooltipTrigger,
    EchartsXAxisConfig,
    EchartsZoomResetIdle,
} from '../../types/field-definitions/echarts-fields';

// Aliases of the single-source unions (echarts-fields.d.ts), under the short editor names.
export type ChartMode = EchartsMode;
export type TimeRange = EchartsTimeRange;
export type Aggregate = EchartsAggregate;
export type IgnoreNull = EchartsIgnoreNull;

/** A series as edited in the modal (rendering metadata + its bound OID). */
export interface EditorSeries extends SeriesMeta {
    /** Indexed rxData OID (`oidN`); empty when unset. */
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

/**
 * Chart-frame editor state (parity Build D, ADR-0056) — the CSS border around the chart area.
 * Container styling, never an echarts option; `width` 0 while enabled renders no frame (the
 * adapter's noBorder/border_width-0 collapse, resolved by `frameStyle.ts`).
 */
export interface EditorFrame {
    enabled: boolean;
    /** Border width in px; 0 = no frame even when enabled. */
    width: number;
    /** Border colour; '' = inherit the host divider token. */
    color: string;
    style: EchartsFrameStyle;
    /** Inner padding in px (the adapter's "Randabstand"). */
    padding: number;
}

/** In-memory state of the configurator modal. */
export interface EditorState {
    // family & data mode
    chartType: EchartsChartType;
    mode: ChartMode;
    timeRange: TimeRange;
    /** The window's type (ADR-0063): a moving relative span or fixed static dates. */
    timeType: EchartsTimeType;
    /** Where a relative window's END rounds to (17 adapter options; default now). */
    relativeEnd: EchartsRelativeEnd;
    /** Static window bounds (ISO strings, DateTimePicker) — read when timeType is static. */
    staticStart: string;
    staticEnd: string;
    /** Zeitschrittweite in SECONDS (ADR-0064); 0/unset = the count path. Set ⇒ step replaces count. */
    resolutionStep?: number;
    /** Percentile level 0–100 — read only under aggregate 'percentile' (server default 50). */
    percentileValue?: number;
    /** Integral unit in seconds — read only under aggregate 'integral' (server default 60). */
    integralUnit?: number;
    /** Integral interpolation — read only under aggregate 'integral' (server default none). */
    integralInterpolation?: 'none' | 'linear';
    /** Bar bucket interval (ADR-0065); 'auto'/unset = the time-axis path. */
    barInterval: EchartsBarInterval;
    /** Bar diff post-processing on the buckets (ADR-0065) — drops the first category. */
    barDiff: boolean;
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
    // series (cartesian/pie full)
    series: EditorSeries[];
    // family config
    pie: EchartsPieConfig;
    // chart-wide presentation
    legendShow: boolean;
    legendPos: EchartsLegendPos;
    /** Legend values toggle (`Name [value]`, adapter `legActual`; ADR-0054). */
    legendShowValues: boolean;
    /** Legend styling (ADR-0021 `legendConfig` blob); flat `legendShow`/`legendPos` stay beside it. */
    legend: EchartsLegendConfig;
    tooltipTrigger: EchartsTooltipTrigger;
    tooltipTemplate: string;
    tooltipUnits: string;
    tooltipDecimals: number;
    /** Tooltip background colour (adapter `hoverBackground`; ADR-0054). '' = theme default. */
    tooltipBgColor: string;
    /** Drop non-exact tooltip rows (adapter `hoverNoInterpolate`; ADR-0054). */
    tooltipNoInterpolate: boolean;
    /** Hide null-valued tooltip rows (adapter `hoverNoNulls`; ADR-0054). */
    tooltipHideNulls: boolean;
    /** Comma as the decimal separator in chart values (adapter `useComma`; ADR-0054). */
    decimalComma: boolean;
    animation: boolean;
    animationDuration: number;
    /** echarts animation easing (promoted from a JSON snippet, ADR-0011 D5). Empty = default. */
    animationEasing: string;
    bgColor: string;
    /**
     * Cartesian Y-axes (ADR-0012). 0-axes start (ADR-0067): a fresh/reset state has NONE —
     * axes arise only through the series auto-bind (first series → first axis). Further axes
     * render side-by-side, re-arranged by the auto-balance on every structural event.
     */
    yAxes: EchartsAxisConfig[];
    /** The single cartesian X-axis (ADR-0035) — flat config; empty = plain time axis. */
    xAxis: EchartsXAxisConfig;
    dataZoomSlider: boolean;
    dataZoomInside: boolean;
    /** Zoom idle-reset select value (adapter `resetZoom`; ADR-0054). '' = off. */
    zoomResetAfterIdle: EchartsZoomResetIdle;
    paletteSource: EchartsPaletteSource;
    palettePreset: string;
    paletteCustom: string;
    darkMode: EchartsDarkMode;
    renderer: EchartsRenderer;
    markLines: EchartsMarkLine[];
    visualMap: EditorVisualMap;
    /** Chart frame (parity Build D, ADR-0056) — persisted as flat `frame*` rxData scalars. */
    frame: EditorFrame;
    /** Toolbox GUI config (ADR-0045) — persisted as the base64 `toolboxConfig` blob. */
    toolbox: EchartsToolboxConfig;
    /** Title section raw (ADR-0044) — deep-merged UNDER buildTitleOption's output (GUI wins). */
    titleRaw: string;
    /** Ordered ACTIVE title-template ids (ADR-0042, riding the chartConfig blob). */
    titleSnippets: string[];
    /** Legend section raw (ADR-0044) — deep-merged UNDER buildLegend's output (GUI wins). */
    legendRaw: string;
    /** Ordered ACTIVE legend-template ids (ADR-0042, riding the chartConfig blob). */
    legendSnippets: string[];
    /** Tooltip section raw (ADR-0044) — deep-merged UNDER buildTooltip's output (GUI wins). */
    tooltipRaw: string;
    /** Ordered ACTIVE tooltip-template ids (ADR-0042, riding the chartConfig blob). */
    tooltipSnippets: string[];
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

/**
 * Commits a patch to the working copy. Sections declare `SetEditor<XxxSlice>` (ADR-0049): a
 * narrow slice setter is satisfied by the rail's full-state setter via parameter
 * contravariance, so the same setter is passed everywhere and the coalesce key (ADR-0038,
 * the sorted patch key set) is unchanged by slicing.
 */
export type SetEditor<S extends object = EditorState> = (patch: Partial<S>) => void;

export const DEFAULT_EDITOR_STATE: EditorState = {
    chartType: 'line',
    mode: 'history',
    timeRange: '1d',
    timeType: 'relative',
    relativeEnd: 'now',
    staticStart: '',
    staticEnd: '',
    resolutionStep: undefined,
    percentileValue: undefined,
    integralUnit: undefined,
    integralInterpolation: undefined,
    barInterval: 'auto',
    barDiff: false,
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
    pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' },
    legendShow: true,
    legendPos: 'topCenter',
    legendShowValues: false,
    legend: {},
    tooltipTrigger: 'axis',
    tooltipTemplate: '',
    tooltipUnits: '',
    tooltipDecimals: 0,
    tooltipBgColor: '',
    tooltipNoInterpolate: false,
    tooltipHideNulls: false,
    decimalComma: false,
    animation: true,
    animationDuration: 600,
    animationEasing: '',
    bgColor: 'transparent',
    // 0-axes start (ADR-0067): no ghost "Achse 1" in a fresh state — axes arise only through
    // the series auto-bind (first series → axisLayout(0): left, offset 0, splitLine on). The
    // chart still renders one value axis regardless: `toPresentationConfig` synthesises a
    // `legacyAxis` whenever the stored blob is empty (presentation.ts) — the builder's own
    // empty-array fallback (optionBuilders/cartesian.ts) sits behind it and practically never
    // fires.
    yAxes: [],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    zoomResetAfterIdle: '',
    paletteSource: 'theme',
    palettePreset: 'tableau',
    paletteCustom: '',
    darkMode: 'auto',
    renderer: 'canvas',
    markLines: [],
    // visualMap colours empty by default → the builder inherits the theme-derived ramp
    // (primary→success→warning→error, ADR-0027), and the editor swatch previews it.
    visualMap: { enabled: false, min: 0, max: 100, colors: '' },
    // Frame off by default; width 1 so the first switch-on renders a visible hairline.
    frame: { enabled: false, width: 1, color: '', style: 'solid', padding: 0 },
    toolbox: {},
    titleRaw: '',
    titleSnippets: [],
    legendRaw: '',
    legendSnippets: [],
    tooltipRaw: '',
    tooltipSnippets: [],
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
 * Load the editor state from the widget rxData.
 *
 * @param data - Widget data map (scalars + indexed `oidN` + blobs).
 */
export const loadEditorState = (data: Record<string, unknown>): EditorState => {
    const chartTypeRaw = (data.chartType as LegacyChartType) ?? 'line';
    const seriesCount = numOr(data.series_count, 0);

    // seriesConfig → per-index meta (name/colour/type/...)
    let meta: SeriesMeta[] = [];
    try {
        const metaRaw = data.seriesConfig ? JSON.parse(decodeBlob(data.seriesConfig as string)) : [];
        meta = Array.isArray(metaRaw) ? (metaRaw as SeriesMeta[]) : [];
    } catch {
        meta = [];
    }

    // Normalize legacy chartType values (ADR-0008 r4 + ADR-0071): the family-only 'cartesian'
    // derives its concrete type from the first series (default line); the removed 'area' type
    // maps to 'line' (area is a per-series fill mode now); the removed gauge/radar families
    // (ADR-0071) heal to 'line' — their oidN series (the gauge's scalar OID, the radar's
    // indicator OIDs) become ordinary cartesian line series in the branch below. In-memory
    // only — rewritten to a concrete type on save.
    const chartType: EchartsChartType =
        chartTypeRaw === 'cartesian'
            ? meta[0]?.type === 'bar'
                ? 'bar'
                : meta[0]?.type === 'scatter'
                  ? 'scatter'
                  : 'line'
            : chartTypeRaw === 'area' || chartTypeRaw === 'gauge' || chartTypeRaw === 'radar'
              ? 'line'
              : chartTypeRaw;
    const family = familyOf(chartType);

    const chartConfig = decodeChartConfig(data.chartConfig as string);
    const oidAt = (i: number): string => {
        const v = data[`oid${i + 1}`];
        return typeof v === 'string' && v !== 'nothing_selected' ? v : '';
    };

    // cartesian / pie: oidN = series OIDs, 1:1 with meta. For cartesian, normalise the type
    // model (ADR-0008 r3): a series whose stored type equals the chart type becomes "inherit"
    // (type undefined → follows the top selector); one that differs stays an explicit override.
    // Legacy `type:'area'` (ADR-0008 r4 removed it) is treated as inherit (line) + flat area.
    // A healed legacy gauge/radar lands here too (ADR-0071): its oidN entries become line series.
    const inheritType: EchartsCartesianType | undefined =
        family === 'cartesian' ? (chartType as EchartsCartesianType) : undefined;
    let series: EditorSeries[] = [];
    for (let i = 0; i < seriesCount; i++) {
        const m = meta[i] ?? {};
        const t = m.type === 'line' || m.type === 'bar' || m.type === 'scatter' ? m.type : undefined;
        series.push({
            oid: oidAt(i),
            ...m,
            type: t && inheritType && t !== inheritType ? t : undefined,
            area: normalizeArea(m.area, isLegacyAreaType(m)),
        });
    }

    // Normalise a stable `id` onto each series so React can reconcile series cards by identity,
    // not array index (fixes the wrong-card-unmounts bug on middle-series delete).
    series = withStableIds(series, 'sr-');

    const vm = {
        enabled: boolOr(data.visualMapEnabled, false),
        min: numOr(data.visualMapMin, 0),
        max: numOr(data.visualMapMax, 100),
        // Empty default → the builder inherits the theme-derived ramp (ADR-0027); a stored value is kept.
        colors: strOr(data.visualMapColors, ''),
    };

    // Chart frame (parity Build D): flat rxData scalars; an unknown style value (hand-edited
    // rxData) heals to 'solid' right here — the resolver tolerates it either way.
    const frameStyleRaw = strOr(data.frameStyle, 'solid');
    const frame: EditorFrame = {
        enabled: boolOr(data.frameEnabled, false),
        width: numOr(data.frameWidth, DEFAULT_EDITOR_STATE.frame.width),
        color: strOr(data.frameColor, ''),
        style: (FRAME_STYLES.includes(frameStyleRaw as EchartsFrameStyle)
            ? frameStyleRaw
            : 'solid') as EchartsFrameStyle,
        padding: numOr(data.framePadding, 0),
    };

    // Y-axes: decoded `yAxes` blob, else a single axis synthesised from the legacy chart-level
    // scalars — but ONLY for a legacy CARTESIAN widget that actually has series (ADR-0012
    // migration — no silent rewrite; legacy widgets edit axis 0 on first open). Everything else
    // (a fresh widget, pie) starts with 0 axes (ADR-0067): no blob → no axis; axes
    // arise through the series auto-bind alone. The load never re-arranges anything — stored
    // offsets/positions survive verbatim.
    // Normalise a stable `id` onto each so React can reconcile axis cards by identity, not array
    // index (fixes the wrong-card-unmounts bug on middle-axis delete).
    const yAxesDecoded = decodeAxes(data.yAxes as string);
    const yAxes = withStableIds(
        yAxesDecoded.length ? yAxesDecoded : family === 'cartesian' && seriesCount > 0 ? [legacyAxis(data)] : [],
        'ax-',
    );
    // ADR-0071: the retired 'live' mode heals to 'history' (decode-and-tolerate, the 24h→1d
    // precedent) — written back as history only on save; the runtime pipeline tolerates it too.
    const mode: ChartMode = data.mode === 'json' ? 'json' : 'history';

    // No mode-switch orphan-prune exists (ADR-0048's narrow effect deps remain the clobber
    // protection) — the only deliberate axis wipes are the two ADR-0067 data-path resets (fired
    // by the mode/family boundary toggles in controls.tsx via `dataPathReset`) and the ADR-0069
    // series-leave deaths inside the structural-event handlers.

    // Stale-activation prune (ADR-0043) + activation↔text heal (ADR-0042 addendum) — EVERY raw
    // level (sections, pie, series, axes, X, json overlay) heals in the registry's single load
    // pass at the end of this function (ADR-0047, rawLevels.ts): an activation referencing an
    // unknown id drops SILENTLY (its composed leaves stay in the raw text as the user's own),
    // the keep-only heal drops activations whose template has no leaf path left in the text,
    // additions never happen at load — retro-detection of hand-typed content stays rejected.
    // Filtering at LOAD also keeps the family-switch loss count honest (a stale id is not a
    // family loss). The chart-level activations died with the chart-U retirement (ADR-0045 —
    // no migration, stored chartSnippets are simply no longer read).
    const pie = chartConfig.pie ?? DEFAULT_EDITOR_STATE.pie;
    const jsonSeriesStyle = parseJsonSeriesStyle(data.jsonSeriesStyle as string);

    const state: EditorState = {
        ...DEFAULT_EDITOR_STATE,
        chartType,
        mode,
        // Legacy range keys migrate on load (ADR-0063) — the SHARED migration (timeWindow).
        timeRange: migrateLegacyRange((data.timeRange as string) ?? DEFAULT_EDITOR_STATE.timeRange) as TimeRange,
        timeType: (data.timeType as EchartsTimeType) ?? DEFAULT_EDITOR_STATE.timeType,
        relativeEnd: (data.relativeEnd as EchartsRelativeEnd) ?? DEFAULT_EDITOR_STATE.relativeEnd,
        staticStart: strOr(data.staticStart, ''),
        staticEnd: strOr(data.staticEnd, ''),
        resolutionStep: numOr(data.resolutionStep, 0) || undefined,
        // 0 is a VALID percentile level (the 0th = min) — unlike resolutionStep/integralUnit
        // (0 = unset there), the load must not coerce an authored 0 away (review catch: the
        // round-trip forgot a saved 0 and fell back to the 50 default).
        percentileValue:
            typeof data.percentileValue === 'number' && Number.isFinite(data.percentileValue)
                ? data.percentileValue
                : undefined,
        integralUnit: numOr(data.integralUnit, 0) || undefined,
        integralInterpolation:
            data.integralInterpolation === 'linear'
                ? 'linear'
                : data.integralInterpolation === 'none'
                  ? 'none'
                  : undefined,
        barInterval:
            data.barInterval === '15m' ||
            data.barInterval === '1h' ||
            data.barInterval === '1d' ||
            data.barInterval === '30d'
                ? data.barInterval
                : 'auto',
        barDiff: boolOr(data.barDiff, false),
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
        pie,
        legendShow: boolOr(data.legendShow, true),
        legendPos: normalizeLegendPos(data.legendPos),
        legendShowValues: boolOr(data.legendShowValues, false),
        legend: decodeLegendConfig(data.legendConfig as string),
        tooltipTrigger: (data.tooltipTrigger as EchartsTooltipTrigger) ?? (family === 'cartesian' ? 'axis' : 'item'),
        tooltipTemplate: strOr(data.tooltipTemplate, ''),
        tooltipUnits: strOr(data.tooltipUnits, ''),
        tooltipDecimals: numOr(data.tooltipDecimals, 0),
        tooltipBgColor: strOr(data.tooltipBgColor, ''),
        tooltipNoInterpolate: boolOr(data.tooltipNoInterpolate, false),
        tooltipHideNulls: boolOr(data.tooltipHideNulls, false),
        decimalComma: boolOr(data.decimalComma, false),
        animation: boolOr(data.animation, true),
        animationDuration: numOr(data.animationDuration, 600),
        animationEasing: strOr(data.animationEasing, ''),
        bgColor: strOr(data.bgColor, 'transparent'),
        yAxes,
        // X-axis (ADR-0035): decoded `xAxis` blob wins; a legacy widget's `xSplit` boolean is
        // synthesised into `splitLine` (shared resolver — same rule as the live body). The
        // activations heal in the registry's load pass (ADR-0047).
        xAxis: decodeXAxisWithLegacy(data.xAxis as string, boolOr(data.xSplit, false)),
        dataZoomSlider: boolOr(data.dataZoomSlider, false),
        dataZoomInside: boolOr(data.dataZoomInside, false),
        zoomResetAfterIdle: (strOr(data.zoomResetAfterIdle, '') || '') as EchartsZoomResetIdle,
        paletteSource: (data.paletteSource as EchartsPaletteSource) ?? DEFAULT_EDITOR_STATE.paletteSource,
        palettePreset: strOr(data.palettePreset, 'tableau') || 'tableau',
        paletteCustom: strOr(data.paletteCustom, ''),
        darkMode: (data.darkMode as EchartsDarkMode) ?? DEFAULT_EDITOR_STATE.darkMode,
        renderer: (data.renderer as EchartsRenderer) ?? DEFAULT_EDITOR_STATE.renderer,
        markLines: withStableIds(decodeMarkLines(data.markLines as string)),
        visualMap: vm,
        frame,
        toolbox: decodeToolboxConfig(data.toolboxConfig as string),
        titleRaw: chartConfig.titleRaw ?? '',
        titleSnippets: chartConfig.titleSnippets ?? [],
        legendRaw: chartConfig.legendRaw ?? '',
        legendSnippets: chartConfig.legendSnippets ?? [],
        tooltipRaw: chartConfig.tooltipRaw ?? '',
        tooltipSnippets: chartConfig.tooltipSnippets ?? [],
        jsonSeriesStyle,
        jsonHidden: parseJsonHidden(data.jsonHidden as string),
    };
    // ADR-0047: the single load-side heal pass — every scalar level's prune + keep-only heal
    // in one in-place sweep over the freshly constructed (still unhealed) state.
    healLoadLevels(state);
    // ADR-0069 load heal — the derived-citizen invariant: an axis no visible binder binds cannot
    // exist, so a blob from the resting era (ADR-0066) drops SILENTLY here, re-indexing series,
    // overlay and marking anchors around the holes. Never re-arranges (stored geometry survives
    // verbatim — {@link dropUnboundAxes} without the balance). JSON heals over the overlay-key
    // sight (the payload names are not resolved yet; the reconcile refines on their arrival),
    // history over the materialised series sight. Non-cartesian families carry no axes by
    // construction (the ADR-0067 resets) — nothing to heal there.
    if (family === 'cartesian') {
        if (mode === 'json') {
            const names = Object.keys(state.jsonSeriesStyle);
            const healed = dropUnboundAxes(
                boundJsonView(names, state.jsonSeriesStyle, state.jsonHidden),
                state.yAxes,
                state.markLines,
            );
            if (healed.diedIndices.length) {
                state.yAxes = healed.yAxes;
                state.markLines = healed.markLines;
                state.jsonSeriesStyle = reindexJsonOverlay(state.jsonSeriesStyle, healed.reindex);
            }
        } else if (state.yAxes.length) {
            const healed = dropUnboundAxes(state.series, state.yAxes, state.markLines);
            if (healed.diedIndices.length) {
                state.yAxes = healed.yAxes;
                state.series = healed.binders;
                state.markLines = healed.markLines;
            }
        }
    }
    return state;
};

/**
 * Build the merged `onDataChange` patch from the editor state.
 *
 * @param state - Current editor state.
 * @param previousCount - Previously loaded series count, so stale `oidN` are cleared.
 */
export const saveEditorState = (state: EditorState, previousCount = 0): Record<string, unknown> => {
    const seriesCount = state.series.length;
    const oidList = state.series.map(s => s.oid || '');
    // Skeleton (ADR-0047 series boundary): the raw + unhealed snippets ride via `rest`; the
    // registry's series entry writes the healed activations into the items.
    const metaBlob: SeriesMeta[] = state.series.map(({ oid: _oid, ...rest }) => rest);

    // ADR-0042 Apply-time prunes + addendum heal — the registry (ADR-0047, rawLevels.ts) owns
    // EVERY level now. The blob drafts below are skeletons (the per-item drafts are copies of
    // the working copy resp. the metaBlob built above); the
    // registry heals the activations into them in one pass WITHOUT rewriting the state —
    // between a family switch and Apply the stale ids deliberately stay in the working copy
    // (the stranded keys render nothing — verified against echarts), the actual prune rides
    // Apply, mirroring the bound-OID drop.
    const chartConfigDraft: Record<string, unknown> = {};
    const yAxesHealed = state.yAxes.map(a => ({ ...a }));
    const xAxisDraft = { ...state.xAxis };
    const jsonSeriesStyle = Object.fromEntries(
        Object.entries(state.jsonSeriesStyle).map(([name, m]) => [name, { ...m }]),
    );
    healSaveLevels(state, {
        chartConfig: chartConfigDraft,
        seriesConfig: metaBlob,
        yAxes: yAxesHealed,
        xAxis: xAxisDraft,
        jsonSeriesStyle,
    });

    const patch: Record<string, unknown> = {
        chartType: state.chartType,
        mode: state.mode,
        timeRange: state.timeRange,
        timeType: state.timeType,
        relativeEnd: state.relativeEnd,
        staticStart: state.staticStart,
        staticEnd: state.staticEnd,
        // Sparse fields (ADR-0064/0065) ride their UNSET form as `null`: vis-2's custom-field
        // patch contract (WidgetField.tsx) keeps a missing key's stored value and only `null`
        // DELETES it — omitting the key made a once-authored step/interval/diff impossible to
        // clear (the editor showed it cleared while the runtime kept using the stale value).
        ...(state.resolutionStep ? { resolutionStep: state.resolutionStep } : { resolutionStep: null }),
        ...(state.percentileValue !== undefined
            ? { percentileValue: state.percentileValue }
            : { percentileValue: null }),
        ...(state.integralUnit ? { integralUnit: state.integralUnit } : { integralUnit: null }),
        ...(state.integralInterpolation
            ? { integralInterpolation: state.integralInterpolation }
            : { integralInterpolation: null }),
        ...(state.barInterval !== 'auto' ? { barInterval: state.barInterval } : { barInterval: null }),
        ...(state.barDiff ? { barDiff: true } : { barDiff: null }),
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
        legendShowValues: state.legendShowValues,
        legendConfig: encodeBlob(JSON.stringify(state.legend)),
        tooltipTrigger: state.tooltipTrigger,
        tooltipTemplate: state.tooltipTemplate,
        tooltipUnits: state.tooltipUnits,
        tooltipDecimals: state.tooltipDecimals,
        tooltipBgColor: state.tooltipBgColor,
        tooltipNoInterpolate: state.tooltipNoInterpolate,
        tooltipHideNulls: state.tooltipHideNulls,
        decimalComma: state.decimalComma,
        animation: state.animation,
        animationDuration: state.animationDuration,
        animationEasing: state.animationEasing,
        bgColor: state.bgColor,
        dataZoomSlider: state.dataZoomSlider,
        dataZoomInside: state.dataZoomInside,
        zoomResetAfterIdle: state.zoomResetAfterIdle,
        paletteSource: state.paletteSource,
        palettePreset: state.palettePreset,
        paletteCustom: state.paletteCustom,
        darkMode: state.darkMode,
        renderer: state.renderer,
        visualMapEnabled: state.visualMap.enabled,
        visualMapMin: state.visualMap.min,
        visualMapMax: state.visualMap.max,
        visualMapColors: state.visualMap.colors,
        frameEnabled: state.frame.enabled,
        frameWidth: state.frame.width,
        frameColor: state.frame.color,
        frameStyle: state.frame.style,
        framePadding: state.frame.padding,
        // blobs
        seriesConfig: encodeBlob(JSON.stringify(metaBlob)),
        // The registry-filled draft (ADR-0047): the scalar raw levels'
        // fragments heal into it — pie unconditionally, the sections blob-lean.
        chartConfig: encodeBlob(JSON.stringify(chartConfigDraft)),
        toolboxConfig: encodeBlob(JSON.stringify(state.toolbox)),
        markLines: encodeBlob(JSON.stringify(state.markLines)),
        jsonSeriesStyle: encodeBlob(JSON.stringify(jsonSeriesStyle)),
        jsonHidden: encodeBlob(JSON.stringify(state.jsonHidden)),
        yAxes: encodeBlob(JSON.stringify(yAxesHealed)),
        xAxis: encodeBlob(JSON.stringify(xAxisDraft)),
    };
    const max = Math.max(seriesCount, previousCount);
    for (let i = 0; i < max; i++) {
        patch[`oid${i + 1}`] = i < oidList.length ? oidList[i] : '';
    }
    return patch;
};

// Re-export the config types the editor UI imports.
export type {
    EchartsLegendConfig,
    EchartsLegendIcon,
    EchartsLegendPos,
    EchartsPieConfig,
    EchartsTitlePos,
    EchartsVisualMapConfig,
    EchartsMarkLine,
} from '../../types/field-definitions/echarts-fields';
