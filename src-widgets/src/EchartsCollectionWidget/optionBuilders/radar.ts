/**
 * Radar family option builder — the G side, ADR-0007/0008.
 *
 * @module EchartsCollectionWidget/optionBuilders/radar
 * @remarks
 * A radar's axes are the configured indicators (each bound to an OID supplying its current
 * value); a polygon connects one value per indicator. v2 ships a single "current" polygon
 * (multi-polygon comparison is a later addition). The indicator list (names + maxima + OIDs)
 * lives in `p.radar.indicators`; the resolved current values arrive in order as `values`.
 */
import type { EChartsOption } from 'echarts';

import type { EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip } from './tooltip';
import { buildLegend } from '../presentation';
import { applyRawOverride } from '../utils/mergeOption';

/**
 * Build the radar G option.
 *
 * @param values - Current values of the indicator OIDs, in indicator order (null = gap).
 * @param meta - Per-polygon metadata (name + colour of the single v2 polygon).
 * @param p - Chart-wide + radar family presentation (`p.radar` + the section raw).
 */
export const buildRadarOption = (
    values: readonly (number | null)[],
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
): EChartsOption => {
    const r = p.radar;
    const indicators = (r?.indicators ?? []).map(ind => ({ name: ind.name, max: ind.max ?? 100 }));
    const shape = r?.shape ?? 'polygon';
    const splitNumber = r?.splitNumber ?? 5;
    const area = r?.area ?? true;
    const color = meta[0]?.color ?? p.palette[0];
    const name = meta[0]?.name ?? 'Current';

    const option: Record<string, unknown> = {
        legend: buildLegend(p, [name]),
        tooltip: buildTooltip(p),
        // The Radar section's raw escape hatch (ADR-0045): deep-merged UNDER the built radar
        // component — the GUI wins every collision (indicator/shape/splitNumber); free keys
        // (axisName, splitArea, axisLine, startAngle, …) take effect. `radar` rides replaceMerge
        // (ADR-0036), so deleting the raw reverts.
        radar: applyRawOverride(
            {
                indicator: indicators,
                shape,
                splitNumber,
            },
            p.radarRaw,
        ),
        series: [
            applyRawOverride(
                {
                    type: 'radar',
                    // Per-polygon style lives at the SERIES level (ADR-0017): echarts radar inherits
                    // series-level lineStyle/itemStyle/areaStyle to the data items, so this is
                    // behaviour-preserving AND lets a per-series raw override reach the styling (it was
                    // previously nested on data[0], unreachable from a series-level raw).
                    lineStyle: { color },
                    itemStyle: { color },
                    ...(area ? { areaStyle: { color, opacity: 0.2 } } : {}),
                    data: [
                        {
                            value: values.map(v => v ?? 0),
                            name,
                        },
                    ],
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
