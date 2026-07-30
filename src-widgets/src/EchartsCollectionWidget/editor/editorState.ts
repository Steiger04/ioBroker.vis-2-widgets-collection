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
import { familyOf } from '../optionBuilder';
import { decodeChartConfig, decodeMarkLines } from '../presentation';
import type { SeriesMeta } from '../optionBuilder';
import type {
    EchartsAggregate,
    EchartsChartType,
    EchartsDarkMode,
    EchartsGaugeConfig,
    EchartsIgnoreNull,
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
    instance: string;
    ignoreNull: IgnoreNull;
    jsonOid: string;
    // title
    titleText: string;
    titlePos: EchartsTitlePos;
    // series (cartesian/pie full; gauge/radar = label+colour of the single polygon)
    series: EditorSeries[];
    // family config
    gauge: EchartsGaugeConfig;
    radar: EchartsRadarConfig;
    pie: EchartsPieConfig;
    // chart-wide presentation
    legendShow: boolean;
    legendPos: EchartsLegendPos;
    tooltipTrigger: EchartsTooltipTrigger;
    tooltipTemplate: string;
    tooltipUnits: string;
    tooltipDecimals: number;
    animation: boolean;
    animationDuration: number;
    bgColor: string;
    yMin: string;
    yMax: string;
    yName: string;
    yLog: boolean;
    yFormat: string;
    xSplit: boolean;
    ySplit: boolean;
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
}

export type EditorPatch = Partial<EditorState>;
export type SetEditor = (patch: EditorPatch) => void;

/** Default visualMap colour scale — a CSS gradient (the single gradient picker's native format). */
const DEFAULT_VMAP_COLORS = 'linear-gradient(90deg, #1976d2 0%, #4caf50 33%, #ff9800 66%, #f44336 100%)';

export const DEFAULT_EDITOR_STATE: EditorState = {
    chartType: 'cartesian',
    mode: 'history',
    timeRange: '24h',
    aggregate: 'average',
    count: 500,
    refreshMs: 60_000,
    instance: '',
    ignoreNull: 'keep',
    jsonOid: '',
    titleText: '',
    titlePos: 'topCenter',
    series: [],
    gauge: { min: 0, max: 100, progressWidth: 14, unit: '' },
    radar: { shape: 'polygon', splitNumber: 5, area: true, indicators: [] },
    pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' },
    legendShow: true,
    legendPos: 'top',
    tooltipTrigger: 'axis',
    tooltipTemplate: '',
    tooltipUnits: '',
    tooltipDecimals: 0,
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
    yMin: '',
    yMax: '',
    yName: '',
    yLog: false,
    yFormat: '',
    xSplit: false,
    ySplit: true,
    dataZoomSlider: false,
    dataZoomInside: false,
    paletteSource: 'theme',
    palettePreset: 'tableau',
    paletteCustom: '',
    darkMode: 'auto',
    renderer: 'canvas',
    markLines: [],
    visualMap: { enabled: false, min: 0, max: 100, colors: DEFAULT_VMAP_COLORS },
    userText: '',
};

const numOr = (v: unknown, dft: number): number => (typeof v === 'number' && Number.isFinite(v) ? v : dft);
const strOr = (v: unknown, dft = ''): string => (typeof v === 'string' ? v : dft);
const boolOr = (v: unknown, dft: boolean): boolean => (typeof v === 'boolean' ? v : dft);

/**
 * Load the editor state from the widget rxData.
 *
 * @param data - Widget data map (scalars + indexed `oidN` + blobs).
 */
export const loadEditorState = (data: Record<string, unknown>): EditorState => {
    const chartType = (data.chartType as EchartsChartType) ?? 'cartesian';
    const family = familyOf(chartType);
    const seriesCount = numOr(data.series_count, 0);

    // seriesConfig → per-index meta (name/colour/type/...)
    let meta: SeriesMeta[] = [];
    try {
        const metaRaw = data.seriesConfig ? JSON.parse(decodeBlob(data.seriesConfig as string)) : [];
        meta = Array.isArray(metaRaw) ? (metaRaw as SeriesMeta[]) : [];
    } catch {
        meta = [];
    }

    const chartConfig = decodeChartConfig(data.chartConfig as string);
    const oidAt = (i: number): string => {
        const v = data[`oid${i + 1}`];
        return typeof v === 'string' && v !== 'nothing_selected' ? v : '';
    };

    let series: EditorSeries[];
    let radar: EchartsRadarConfig;
    if (family === 'radar') {
        // oidN = indicator OIDs; meta[0] = polygon label/colour.
        const indicators = (chartConfig.radar?.indicators ?? []).map((ind, i) => ({
            name: ind.name,
            max: ind.max,
            oid: ind.oid || oidAt(i),
        }));
        radar = { ...(chartConfig.radar ?? DEFAULT_EDITOR_STATE.radar), indicators };
        series = [
            {
                oid: '',
                name: meta[0]?.name ?? '',
                color: meta[0]?.color,
            },
        ];
    } else if (family === 'gauge') {
        series = [{ oid: oidAt(0), name: meta[0]?.name, color: meta[0]?.color }];
        radar = DEFAULT_EDITOR_STATE.radar;
    } else {
        // cartesian / pie: oidN = series OIDs, 1:1 with meta.
        series = [];
        for (let i = 0; i < seriesCount; i++) {
            series.push({ oid: oidAt(i), ...(meta[i] ?? {}) });
        }
        radar = DEFAULT_EDITOR_STATE.radar;
    }

    const vm = {
        enabled: boolOr(data.visualMapEnabled, false),
        min: numOr(data.visualMapMin, 0),
        max: numOr(data.visualMapMax, 100),
        colors: strOr(data.visualMapColors, DEFAULT_VMAP_COLORS),
    };

    return {
        ...DEFAULT_EDITOR_STATE,
        chartType,
        mode: (data.mode as ChartMode) ?? DEFAULT_EDITOR_STATE.mode,
        timeRange: (data.timeRange as TimeRange) ?? DEFAULT_EDITOR_STATE.timeRange,
        aggregate: (data.aggregate as Aggregate) ?? DEFAULT_EDITOR_STATE.aggregate,
        count: numOr(data.count, DEFAULT_EDITOR_STATE.count),
        refreshMs: numOr(data.refreshMs, DEFAULT_EDITOR_STATE.refreshMs),
        instance: strOr(data.instance, ''),
        ignoreNull: (data.ignoreNull as IgnoreNull) ?? DEFAULT_EDITOR_STATE.ignoreNull,
        jsonOid: strOr(data.jsonOid, '') === 'nothing_selected' ? '' : strOr(data.jsonOid, ''),
        titleText: strOr(data.titleText, ''),
        titlePos: (data.titlePos as EchartsTitlePos) ?? DEFAULT_EDITOR_STATE.titlePos,
        series,
        gauge: chartConfig.gauge ?? DEFAULT_EDITOR_STATE.gauge,
        radar,
        pie: chartConfig.pie ?? DEFAULT_EDITOR_STATE.pie,
        legendShow: boolOr(data.legendShow, true),
        legendPos: (data.legendPos as EchartsLegendPos) ?? DEFAULT_EDITOR_STATE.legendPos,
        tooltipTrigger: (data.tooltipTrigger as EchartsTooltipTrigger) ?? (family === 'cartesian' ? 'axis' : 'item'),
        tooltipTemplate: strOr(data.tooltipTemplate, ''),
        tooltipUnits: strOr(data.tooltipUnits, ''),
        tooltipDecimals: numOr(data.tooltipDecimals, 0),
        animation: boolOr(data.animation, true),
        animationDuration: numOr(data.animationDuration, 600),
        bgColor: strOr(data.bgColor, 'transparent'),
        yMin: typeof data.yMin === 'number' ? String(data.yMin) : '',
        yMax: typeof data.yMax === 'number' ? String(data.yMax) : '',
        yName: strOr(data.yName, ''),
        yLog: boolOr(data.yLog, false),
        yFormat: strOr(data.yFormat, ''),
        xSplit: boolOr(data.xSplit, false),
        ySplit: boolOr(data.ySplit, true),
        dataZoomSlider: boolOr(data.dataZoomSlider, false),
        dataZoomInside: boolOr(data.dataZoomInside, false),
        paletteSource: (data.paletteSource as EchartsPaletteSource) ?? DEFAULT_EDITOR_STATE.paletteSource,
        palettePreset: strOr(data.palettePreset, 'tableau') || 'tableau',
        paletteCustom: strOr(data.paletteCustom, ''),
        darkMode: (data.darkMode as EchartsDarkMode) ?? DEFAULT_EDITOR_STATE.darkMode,
        renderer: (data.renderer as EchartsRenderer) ?? DEFAULT_EDITOR_STATE.renderer,
        markLines: decodeMarkLines(data.markLines as string),
        visualMap: vm,
        userText: strOr(data.chartOverrides ? decodeBlob(data.chartOverrides as string) : '', ''),
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
            },
        ];
    } else if (family === 'gauge') {
        seriesCount = 1;
        oidList = [state.series[0]?.oid ?? ''];
        metaBlob = [{ name: state.series[0]?.name, color: state.series[0]?.color }];
    } else {
        seriesCount = state.series.length;
        oidList = state.series.map(s => s.oid || '');
        metaBlob = state.series.map(({ oid: _oid, ...rest }) => rest);
    }

    const numOrEmpty = (s: string): number | '' => {
        if (s === '' || s === undefined) {
            return '';
        }
        const n = Number(s);
        return Number.isFinite(n) ? n : '';
    };

    const patch: Record<string, unknown> = {
        chartType: state.chartType,
        mode: state.mode,
        timeRange: state.timeRange,
        aggregate: state.aggregate,
        count: state.count,
        refreshMs: state.refreshMs,
        instance: state.instance,
        ignoreNull: state.ignoreNull,
        jsonOid: state.jsonOid,
        titleText: state.titleText,
        titlePos: state.titlePos,
        series_count: seriesCount,
        legendShow: state.legendShow,
        legendPos: state.legendPos,
        tooltipTrigger: state.tooltipTrigger,
        tooltipTemplate: state.tooltipTemplate,
        tooltipUnits: state.tooltipUnits,
        tooltipDecimals: state.tooltipDecimals,
        animation: state.animation,
        animationDuration: state.animationDuration,
        bgColor: state.bgColor,
        yMin: numOrEmpty(state.yMin),
        yMax: numOrEmpty(state.yMax),
        yName: state.yName,
        yLog: state.yLog,
        yFormat: state.yFormat,
        xSplit: state.xSplit,
        ySplit: state.ySplit,
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
                pie: state.pie,
            }),
        ),
        chartOverrides: encodeBlob(state.userText),
        markLines: encodeBlob(JSON.stringify(state.markLines)),
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
    EchartsRadarConfig,
    EchartsPieConfig,
    EchartsVisualMapConfig,
    EchartsMarkLine,
} from '../../types/field-definitions/echarts-fields';
