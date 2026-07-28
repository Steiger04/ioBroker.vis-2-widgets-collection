/**
 * Pie family option builder — the G side, ADR-0007/0008.
 *
 * @module EchartsCollectionWidget/optionBuilders/pie
 * @remarks
 * Each bound OID becomes one slice. Because the cartesian/pie pipeline yields a time-series
 * `[ts, val]` per OID, each series is collapsed to a single scalar via the configured
 * {@link EchartsPieAggregate} (latest / sum / avg / min / max). Supports donut (innerRadius),
 * rose mode, and label content. No cartesian axes; legend + tooltip are chart-wide.
 */
import type { EChartsOption } from 'echarts';

import type { EchartsPieAggregate } from '../../types/field-definitions/echarts-fields';
import type { ChartSeries, EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip } from './tooltip';

/** Collapse a `[ts, val]` series to one scalar per the aggregate mode. */
const aggregate = (data: (readonly [number, number | null])[], mode: EchartsPieAggregate): number | null => {
    const vals = data.map(d => d[1]).filter((v): v is number => v !== null);
    if (!vals.length) {
        return null;
    }
    switch (mode) {
        case 'sum':
            return vals.reduce((a, b) => a + b, 0);
        case 'avg':
            return vals.reduce((a, b) => a + b, 0) / vals.length;
        case 'min':
            return Math.min(...vals);
        case 'max':
            return Math.max(...vals);
        case 'latest':
        default:
            return vals[vals.length - 1];
    }
};

/**
 * Build the pie G option.
 *
 * @param series - Resolved chart series (one per slice).
 * @param meta - Per-slice rendering metadata (name + colour).
 * @param p - Chart-wide + pie family presentation.
 */
export const buildPieOption = (
    series: readonly ChartSeries[],
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
): EChartsOption => {
    const mode = p.pie?.aggregate ?? 'latest';
    const inner = p.pie?.innerRadius ?? 0;
    const rose = p.pie?.rose ?? 'none';
    const labelMode = p.pie?.label ?? 'namePercent';

    const labelShow = labelMode !== 'none';
    const labelFormatter = labelMode === 'percent' ? '{d}%' : labelMode === 'name' ? '{b}' : '{b}: {d}%'; // namePercent

    const data = series.map((s, i) => {
        const m = meta[i];
        return {
            name: m?.name || s.name,
            value: aggregate(s.data, mode),
            itemStyle: { color: m?.color ?? p.palette[i % p.palette.length] },
        };
    });
    const names = data.map(d => d.name);

    const option: Record<string, unknown> = {
        legend: { show: p.legendShow, data: names, bottom: 4 },
        tooltip: buildTooltip(p),
        series: [
            {
                type: 'pie',
                radius: [`${Math.round(inner * 100)}%`, '70%'],
                ...(rose !== 'none' ? { roseType: rose } : {}),
                label: { show: labelShow, formatter: labelFormatter },
                data,
                animation: p.animation,
                ...(p.animationDuration ? { animationDuration: p.animationDuration } : {}),
            },
        ],
    };
    return option as unknown as EChartsOption;
};
