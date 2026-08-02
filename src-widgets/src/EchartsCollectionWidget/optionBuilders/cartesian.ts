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
    EchartsCartesianType,
    EchartsLegendPos,
    EchartsLineStyle,
    EchartsMarkLine,
    EchartsStep,
} from '../../types/field-definitions/echarts-fields';
import { toEchartsLinearGradient } from '../../lib/helper/extractColorFromValue';
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

/** Map the legend-position union to the echarts `top/left/orient` triplet. */
const legendPlacement = (pos: EchartsLegendPos): Record<string, unknown> => {
    const isTop = pos === 'top';
    const isBottom = pos === 'bottom';
    const horizontalAlign: Record<EchartsLegendPos, 'left' | 'right' | 'center'> = {
        top: 'center',
        bottom: 'center',
        left: 'left',
        right: 'right',
    };
    return {
        top: isTop ? 4 : 'auto',
        bottom: isBottom ? 4 : 'auto',
        left: horizontalAlign[pos],
        orient: pos === 'left' || pos === 'right' ? 'vertical' : 'horizontal',
    };
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
    const entries = series.map((s, i) =>
        buildCartesianSeriesEntry(s, meta[i], p.palette[i % p.palette.length], i, p.cartesianType),
    );
    if (markLineOption(p.markLines) && entries.length > 0) {
        entries[0].markLine = markLineOption(p.markLines);
    }

    const names = entries.map(e => e.name as string);
    // Emit the second (right-hand) value axis only when a series actually targets it, so a plain
    // single-axis chart does not render an empty right axis.
    const dualY = entries.some(e => e.yAxisIndex === 1);
    const axisType: 'value' | 'log' = p.yLog ? 'log' : 'value';
    const axisLabelFmt = p.yFormat ? { axisLabel: { formatter: p.yFormat } } : {};
    const option: Record<string, unknown> = {
        legend: { show: p.legendShow, data: names, ...legendPlacement(p.legendPos) },
        tooltip: buildTooltip(p),
        grid: { left: 48, right: 18, top: 30, bottom: p.dataZoomSlider ? 48 : 28 },
        xAxis: { type: 'time', splitLine: { show: p.xSplit } },
        yAxis: dualY
            ? [
                  {
                      type: axisType,
                      name: p.yName,
                      min: p.yMin,
                      max: p.yMax,
                      splitLine: { show: p.ySplit },
                      ...axisLabelFmt,
                  },
                  { type: axisType, splitLine: { show: p.ySplit } },
              ]
            : [
                  {
                      type: axisType,
                      name: p.yName,
                      min: p.yMin,
                      max: p.yMax,
                      splitLine: { show: p.ySplit },
                      ...axisLabelFmt,
                  },
              ],
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
