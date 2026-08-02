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

/**
 * Build the radar G option.
 *
 * @param values - Current values of the indicator OIDs, in indicator order (null = gap).
 * @param meta - Per-polygon metadata (name + colour of the single v2 polygon).
 * @param p - Chart-wide + radar family presentation (`p.radar`).
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
        legend: { show: p.legendShow, data: [name], bottom: 4 },
        tooltip: buildTooltip(p),
        radar: {
            indicator: indicators,
            shape,
            splitNumber,
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: values.map(v => v ?? 0),
                        name,
                        lineStyle: { color },
                        itemStyle: { color },
                        ...(area ? { areaStyle: { color, opacity: 0.2 } } : {}),
                    },
                ],
                animation: p.animation,
                ...(p.animationDuration ? { animationDuration: p.animationDuration } : {}),
                ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
            },
        ],
    };
    return option as unknown as EChartsOption;
};
