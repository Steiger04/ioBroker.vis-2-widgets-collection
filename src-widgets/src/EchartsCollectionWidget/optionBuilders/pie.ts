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
import { buildLegend } from '../presentation';
import { applyRawOverride } from '../utils/mergeOption';

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
        // Per-slice raw override (ADR-0017): folded UNDER the GUI slice (GUI owns name/value/color);
        // GUI-uncovered per-slice keys (borderRadius/borderColor, selected, label, emphasis) survive.
        return applyRawOverride(
            {
                name: m?.name || s.name,
                // Category-bar bucket arrays (ADR-0065) never reach the pie family — the
                // bucketing is cartesian-only; narrowed for the points-only aggregate.
                value: aggregate(s.data as Parameters<typeof aggregate>[0], mode),
                itemStyle: { color: m?.color ?? p.palette[i % p.palette.length] },
            },
            m?.raw,
        );
    });
    const names = data.map(d => d.name as string);

    const option: Record<string, unknown> = {
        legend: buildLegend(p, names),
        tooltip: buildTooltip(p),
        series: [
            applyRawOverride(
                {
                    type: 'pie',
                    radius: [`${Math.round(inner * 100)}%`, '70%'],
                    ...(rose !== 'none' ? { roseType: rose } : {}),
                    label: { show: labelShow, formatter: labelFormatter },
                    data,
                    animation: p.animation,
                    // Slider + easing drive BOTH enter and update (one honest knob; a live tick
                    // honours the value instead of echarts' update default). Duration always emitted.
                    animationDuration: p.animationDuration,
                    animationDurationUpdate: p.animationDuration,
                    ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
                    ...(p.animationEasing ? { animationEasingUpdate: p.animationEasing } : {}),
                },
                p.pie?.raw,
            ),
        ],
    };
    return option as unknown as EChartsOption;
};
