/**
 * Cartesian family option builder (line / bar) — the G side, ADR-0007/0008 r4.
 *
 * @module EchartsCollectionWidget/optionBuilders/cartesian
 * @remarks
 * Owns the cartesian coordinate system: a time `xAxis`, a (optionally bounded, optionally
 * dual) `yAxis`, and one series entry per bound OID with the full per-series presentation
 * authored from `seriesConfig` (smooth / width / style / area fill / stack / step / symbol /
 * symbolSize / label / connectNulls / barGap / barCategoryGap / cornerRadius). Chart-wide
 * presentation (legend, tooltip, animation, dataZoom, markLine thresholds, visualMap) is
 * authored here too. Returns the full G fragment; the data-wins seam forces only
 * `series[].data` back afterwards.
 *
 * Area is NOT a cartesian type (ADR-0008 r4): echarts has no `type:'area'` — an area chart is
 * a `type:'line'` series with an `areaStyle`. Area fill is therefore a per-series fill mode
 * (`off` | `flat` | `gradient`), applied here. Legacy `type:'area'` and `area:true` are
 * tolerated at runtime (→ line + flat fill); migration to the concrete model happens in the
 * editor on re-save, never here.
 */
import type { EChartsOption } from 'echarts';

import type {
    EchartsAreaFill,
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsLineStyle,
    EchartsMarkLine,
    EchartsStep,
} from '../../types/field-definitions/echarts-fields';
import { toEchartsLinearGradient } from '../../lib/helper/extractColorFromValue';
import { buildLegend } from '../presentation';
import { applyRawOverride } from '../utils/mergeOption';
import type { ChartSeries, EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip } from './tooltip';

const LINE_STYLE_DASH: Record<EchartsLineStyle, 'solid' | 'dashed' | 'dotted'> = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
};

const STEP_ECHARTS: Record<EchartsStep, false | 'start' | 'middle' | 'end'> = {
    none: false,
    start: 'start',
    middle: 'middle',
    end: 'end',
};

/**
 * Normalize a possibly-legacy area value into the {@link EchartsAreaFill} model (ADR-0008 r4).
 * Legacy forms tolerated at runtime (no migration here — the editor rewrites on re-save):
 *  - `area: true` (boolean) → `flat`
 *  - per-series `type: 'area'` (with no explicit `area`) → `flat`
 *  - `area: false` / undefined / off → `off`
 */
const normalizeAreaMode = (meta: EchartsSeriesMeta | undefined): EchartsAreaFill => {
    // Read `area` loosely: legacy data may store a boolean `true` (not in the EchartsAreaFill union).
    const raw = (meta as { area?: unknown } | undefined)?.area;
    if (raw === 'flat' || raw === 'gradient') {
        return raw;
    }
    if (raw === true) {
        return 'flat'; // legacy boolean
    }
    // Legacy `type:'area'` (r4 removed it) implied a flat fill when no explicit area mode is set.
    if ((meta as { type?: string } | undefined)?.type === 'area') {
        return 'flat';
    }
    return 'off';
};

/** Build a single cartesian series entry from its data + per-series meta. */
const buildCartesianSeriesEntry = (
    s: ChartSeries,
    m: EchartsSeriesMeta | undefined,
    fallbackColor: string,
    index: number,
    defaultType: EchartsCartesianType,
): Record<string, unknown> => {
    // Per-series override wins; otherwise inherit the chart's cartesian type (ADR-0008 r3).
    // Legacy `type:'area'` (ADR-0008 r4 removed it) matches neither 'line' nor 'bar' → falls
    // through to `defaultType`, which a legacy 'area' chart normalises to 'line' upstream.
    const rawType = m?.type;
    const type: EchartsCartesianType = rawType === 'bar' ? 'bar' : rawType === 'line' ? 'line' : defaultType;
    const color = m?.color ?? fallbackColor;
    const areaMode = normalizeAreaMode(m);
    const name = m?.name || s.name || `Series ${index + 1}`;

    const entry: Record<string, unknown> = {
        name,
        type,
        yAxisIndex: m?.yAxisIndex ?? 0,
        data: s.data,
        color,
        itemStyle: { color, ...(m?.cornerRadius ? { borderRadius: m.cornerRadius } : {}) },
        animation: true,
    };
    if (m?.label) {
        entry.label = { show: true };
    }
    if (m?.stack) {
        entry.stack = m.stack;
    }

    if (type === 'line') {
        // D2: smooth defaults to false (matches ECharts 'Basic Line', not the smoothed example).
        entry.smooth = m?.smooth ?? false;
        entry.showSymbol = m?.symbol ?? false;
        if (m?.symbolSize !== undefined) {
            entry.symbolSize = m.symbolSize;
        }
        entry.connectNulls = m?.connectNulls ?? false;
        const step = m?.step ?? 'none';
        if (step !== 'none') {
            entry.step = STEP_ECHARTS[step];
        }
        entry.lineStyle = {
            width: m?.lineWidth ?? 2,
            type: LINE_STYLE_DASH[m?.lineStyle ?? 'solid'],
        };
        if (areaMode !== 'off') {
            const opacity = m?.areaOpacity ?? (areaMode === 'gradient' ? 0.8 : 0.15);
            if (areaMode === 'gradient') {
                // D5: honour the CSS gradient angle/direction → echarts LinearGradient.
                const grad = toEchartsLinearGradient(m?.areaGradient);
                entry.areaStyle = grad ? { opacity, color: grad } : { opacity };
            } else {
                entry.areaStyle = { opacity };
            }
        }
    } else {
        // bar — D7: expose both echarts bar gaps (between-bar + between-category).
        if (m?.barGap !== undefined) {
            entry.barGap = `${Math.round(m.barGap * 100)}%`;
        }
        if (m?.barCategoryGap !== undefined) {
            entry.barCategoryGap = `${Math.round(m.barCategoryGap * 100)}%`;
        }
    }
    return entry;
};

/** Threshold markLines attached to the first cartesian series (echarts markLine is series-level). */
const markLineOption = (markLines: EchartsMarkLine[]): Record<string, unknown> | undefined => {
    if (!markLines.length) {
        return undefined;
    }
    return {
        silent: true,
        symbol: 'none',
        data: markLines.map(ml => ({
            yAxis: ml.value,
            lineStyle: { type: ml.dashed ? 'dashed' : 'solid', color: ml.color ?? '#888' },
            ...(ml.label ? { label: { formatter: ml.label } } : {}),
        })),
    };
};

/**
 * Build one echarts `yAxis` entry from an {@link EchartsAxisConfig} + its index, applying the
 * smart defaults (ADR-0012): position axis-0 left / others right; splitlines axis-0-only;
 * `alignTicks` on for multi-axis (the #1 legibility lever); one colour paints line + label + name.
 */
const buildYAxisEntry = (
    a: EchartsAxisConfig,
    i: number,
    total: number,
    /** Default axis colour = first bound series' colour, when none is explicit (ADR-0018). */
    seriesColor?: string,
    /** Default axis name = first bound series' effective name, when none is explicit (ADR-0018). */
    seriesName?: string,
): Record<string, unknown> => {
    const entry: Record<string, unknown> = {
        type: a.log ? 'log' : 'value',
        position: a.position ?? (i === 0 ? 'left' : 'right'),
        offset: a.offset ?? 0,
        alignTicks: a.alignTicks ?? total > 1,
        splitLine: { show: a.splitLine ?? i === 0 },
        nameLocation: 'middle',
        nameGap: 50,
    };
    // Empty string counts as "not set": an axis whose name was cleared, or one migrated from legacy
    // `yName:''`, must still inherit its bound series' name. `??` would let '' through and the truthy
    // guard below would then drop the name entirely — the "axis name never renders" bug.
    const axisName = a.name || seriesName;
    if (axisName) {
        entry.name = axisName;
    }
    if (a.min !== undefined) {
        entry.min = a.min;
    }
    if (a.max !== undefined) {
        entry.max = a.max;
    }
    if (a.scale) {
        entry.scale = true;
    }
    if (a.splitNumber !== undefined) {
        entry.splitNumber = a.splitNumber;
    }
    if (a.minInterval !== undefined) {
        entry.minInterval = a.minInterval;
    }
    if (a.axisTick !== undefined) {
        entry.axisTick = { show: a.axisTick };
    }
    if (a.nameRotate !== undefined) {
        entry.nameRotate = a.nameRotate;
    }
    const axisLabel: Record<string, unknown> = {};
    if (a.format) {
        axisLabel.formatter = a.format;
    }
    const color = a.color ?? seriesColor;
    if (color) {
        // One colour codes axis line + label + name together (multi-axis legibility); defaults to the
        // first bound series' colour when no explicit axis colour is set (ADR-0018).
        axisLabel.color = color;
        entry.axisLine = { show: true, lineStyle: { color } };
        entry.nameTextStyle = { color };
    }
    if (Object.keys(axisLabel).length) {
        entry.axisLabel = axisLabel;
    }
    return entry;
};

/** echarts valueFormatter lives in {@link buildTooltip} (shared across families). */

/**
 * Build the cartesian G option.
 *
 * @param series - Resolved chart series (history / live / json → `[ts, val]`).
 * @param meta - Per-series rendering metadata from the `seriesConfig` blob.
 * @param p - Chart-wide + family presentation.
 */
export const buildCartesianOption = (
    series: readonly ChartSeries[],
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
): EChartsOption => {
    // Guarantee ≥1 Y-axis: the editor allows deleting every axis (the last one too), but a cartesian
    // chart must always render at least one value axis. An empty `p.yAxes` falls back to a single
    // default-config axis (left, splitLine on) — `buildYAxisEntry({}, 0, 1)` resolves exactly that.
    const axes: readonly EchartsAxisConfig[] = p.yAxes.length ? p.yAxes : [{}];
    const total = axes.length;
    const entries = series.map((s, i) => {
        const e = applyRawOverride(
            buildCartesianSeriesEntry(s, meta[i], p.palette[i % p.palette.length], i, p.cartesianType),
            meta[i]?.raw,
        );
        // Clamp the per-series axis index to the configured axes (ADR-0012): a removed axis must
        // not leave a series bound to a non-existent yAxisIndex (echarts would drop it).
        const yi = typeof e.yAxisIndex === 'number' ? e.yAxisIndex : 0;
        e.yAxisIndex = yi >= total ? 0 : yi;
        return e;
    });
    if (markLineOption(p.markLines) && entries.length > 0) {
        entries[0].markLine = markLineOption(p.markLines);
    }

    const names = entries.map(e => e.name as string);
    // Y-axes: one entry per configured axis (ADR-0012). position/offset place them side-by-side;
    // alignTicks is smart-defaulted on for multi-axis; the axis colour AND name default to the first
    // bound series' effective values when neither is explicit (ADR-0018).
    const yAxisEntries = axes.map((a, i) => {
        const bound = entries.find(e => e.yAxisIndex === i);
        const sc = bound?.color;
        const seriesColor = typeof sc === 'string' ? sc : undefined;
        const sn = bound?.name;
        const seriesName = typeof sn === 'string' ? sn : undefined;
        return buildYAxisEntry(a, i, total, seriesColor, seriesName);
    });
    // Grid padding grows with axes per side so multi-axis labels don't clip (containLabel handles
    // the rest).
    const leftCount = axes.filter((a, i) => (a.position ?? (i === 0 ? 'left' : 'right')) === 'left').length;
    const gridLeft = 48 + Math.max(0, leftCount - 1) * 60;
    const gridRight = 18 + Math.max(0, total - leftCount - 1) * 60;
    const option: Record<string, unknown> = {
        legend: buildLegend(p, names),
        tooltip: buildTooltip(p),
        grid: { left: gridLeft, right: gridRight, top: 30, bottom: p.dataZoomSlider ? 48 : 28, containLabel: true },
        xAxis: { type: 'time', splitLine: { show: p.xSplit } },
        yAxis: yAxisEntries,
        series: entries,
        animation: p.animation,
        ...(p.animationDuration ? { animationDuration: p.animationDuration } : {}),
        ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
    };

    if (p.dataZoomSlider || p.dataZoomInside) {
        const zoom: Record<string, unknown>[] = [];
        if (p.dataZoomInside) {
            zoom.push({ type: 'inside', start: 0, end: 100 });
        }
        if (p.dataZoomSlider) {
            zoom.push({ type: 'slider', start: 0, end: 100, height: 18, bottom: 8 });
        }
        option.dataZoom = zoom;
    }

    if (p.visualMap?.enabled) {
        option.visualMap = {
            show: false,
            min: p.visualMap.min ?? 0,
            max: p.visualMap.max ?? 100,
            inRange: { color: p.visualMap.colors ?? ['#1976d2', '#4caf50', '#ff9800', '#f44336'] },
            dimension: 1,
        };
    }

    return option as unknown as EChartsOption;
};
