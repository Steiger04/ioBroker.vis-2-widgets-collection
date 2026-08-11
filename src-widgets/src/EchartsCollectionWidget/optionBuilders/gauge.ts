/**
 * Gauge family option builder — the G side, ADR-0007/0008.
 *
 * @module EchartsCollectionWidget/optionBuilders/gauge
 * @remarks
 * A gauge is a single scalar (the bound OID's current value) drawn within a configured range
 * (min/max) — NOT a point series, so it does not use the cartesian time pipeline. Renders a
 * progress arc + pointer + detail label (with optional unit suffix).
 *
 * The optional **target** is drawn natively as a two-zone track colour (success colour up to the
 * target fraction, warning colour beyond) — no fragile `graphic` pixel geometry, so it is robust
 * without runtime verification. The target boundary is the colour change on the track; the
 * progress arc still shows the current value.
 */
import type { EChartsOption } from 'echarts';

import type { EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip } from './tooltip';
import { applyRawOverride } from '../utils/mergeOption';

/**
 * Build the gauge G option.
 *
 * @param value - Current scalar value of the bound OID (null = no data).
 * @param meta - Per-series metadata (name + colour applied to the progress arc).
 * @param p - Chart-wide + gauge family presentation (`p.gauge`).
 */
export const buildGaugeOption = (
    value: number | null,
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
): EChartsOption => {
    const g = p.gauge ?? {};
    const min = g.min ?? 0;
    const max = g.max ?? 100;
    const progressWidth = g.progressWidth ?? 14;
    const unit = g.unit ?? '';
    const color = meta[0]?.color ?? p.palette[0];
    const name = meta[0]?.name ?? '';
    const target = g.target;

    // Two-zone track colour when a target is configured: success up to the target fraction,
    // warning beyond. Theme-derived (ADR-0027); falls back to the neutral track (echarts default
    // grey) when no target is set.
    let axisLineColor: unknown;
    if (target !== undefined && Number.isFinite(target) && min < max) {
        const frac = Math.max(0, Math.min(1, (target - min) / (max - min)));
        axisLineColor = [
            [frac, p.themeTokens.success],
            [1, p.themeTokens.warning],
        ];
    }

    const option: Record<string, unknown> = {
        tooltip: buildTooltip(p),
        series: [
            applyRawOverride(
                {
                    type: 'gauge',
                    min,
                    max,
                    radius: '90%',
                    progress: { show: true, width: progressWidth, itemStyle: { color } },
                    axisLine: {
                        lineStyle: {
                            width: progressWidth,
                            ...(axisLineColor ? { color: axisLineColor } : {}),
                        },
                    },
                    axisTick: { show: false },
                    splitLine: { length: 8 },
                    pointer: { itemStyle: { color } },
                    detail: {
                        valueAnimation: true,
                        // Emit formatter only when a unit is set (ADR-0017 collision-hygiene): echarts
                        // already defaults detail.formatter to "{value}", so omitting it when unit is empty
                        // is behaviour-transparent and leaves the key free for a per-series raw override
                        // (the detail.formatter template). A set unit still wins (GUI owns it).
                        ...(unit ? { formatter: `{value} ${unit}` } : {}),
                        fontSize: 20,
                        offsetCenter: [0, '70%'],
                    },
                    data: [{ value: value ?? '--', ...(name ? { name } : {}) }],
                    animation: p.animation,
                    // Slider + easing drive BOTH enter and update (one honest knob; a live tick
                    // honours the value instead of echarts' update default). Duration always emitted.
                    animationDuration: p.animationDuration,
                    animationDurationUpdate: p.animationDuration,
                    ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
                    ...(p.animationEasing ? { animationEasingUpdate: p.animationEasing } : {}),
                },
                meta[0]?.raw,
            ),
        ],
    };
    return option as unknown as EChartsOption;
};
