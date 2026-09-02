/**
 * Pie family option builder — the G side, ADR-0007/0008.
 *
 * @module EchartsCollectionWidget/optionBuilders/pie
 * @remarks
 * TWO data shapes, two readings (ADR-0075 decision 5):
 *  - POINT-shaped (Verlauf + serien-förmig): each series collapses to ONE slice via the
 *    configured {@link EchartsPieAggregate} — one echarts pie series, unchanged.
 *  - SLICE-shaped (tabellarisch): each yPath series already carries N row slices
 *    ({@link PieSliceDatum}) — each becomes its own echarts pie series as a CONCENTRIC RING
 *    (radius bands from the donut inner radius to 70 %, series 0 outermost), with a
 *    CATEGORY-STABLE palette: the same category name wears the same colour in every ring
 *    (index by first occurrence); `meta.color` never paints slices (no per-slice override in
 *    v1 — the retired name-keyed identity model).
 * Donut (innerRadius), rose mode and label content are chart-wide in both readings; legend +
 * tooltip are chart-wide. No cartesian axes.
 */
import type { EChartsOption } from 'echarts';

import type { EchartsPieAggregate } from '../../types/field-definitions/echarts-fields';
import type { ChartSeries, EchartsSeriesMeta, PieSliceDatum, PresentationConfig } from './types';
import { buildTooltip } from './tooltip';
import { buildLegend } from '../presentation';
import { applyRawOverride } from '../utils/mergeOption';

/** The outer pie edge — the ring bands share the space between the donut hole and it. */
const OUTER_RADIUS_PCT = 70;

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
 * True when the first datum is a slice object — the tabellarische reading (ADR-0075). A
 *  `[ts, val]` POINT is an array and NOT one; a plain number never is.
 */
const isSliceShaped = (series: readonly ChartSeries[]): boolean =>
    series.length > 0 &&
    !!series[0].data.length &&
    typeof series[0].data[0] === 'object' &&
    !Array.isArray(series[0].data[0]);

/** Slice-shaped rings (ADR-0075): one echarts pie series per yPath series, series 0 OUTERMOST. */
const buildRingSeries = (
    series: readonly ChartSeries[],
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
    inner: number,
    rose: string,
    labelShow: boolean,
    labelFormatter: string,
): Record<string, unknown>[] => {
    const S = series.length;
    const innerPct = Math.round(inner * 100);
    const band = (OUTER_RADIUS_PCT - innerPct) / Math.max(S, 1);
    // Category-stable palette: the ring-index by FIRST OCCURRENCE in the shared row order —
    // every ring reads the same rowPath/xPath, so the name lists agree and one canon serves
    // all rings (a duplicate name keeps ITS first slot: the same colour, two slices).
    const katIndex = new Map<string, number>();
    for (const d of series[0].data as PieSliceDatum[]) {
        if (!katIndex.has(d.name)) {
            katIndex.set(d.name, katIndex.size);
        }
    }
    return series.map((s, i) => {
        const m = meta[i];
        // The same two raw hatches the point path owns, nested by priority: GUI > the ring's
        // per-series raw (m.raw) > the chart-wide whole-pie raw (p.pie.raw, ADR-0017).
        return applyRawOverride(
            applyRawOverride(
                {
                    type: 'pie',
                    // meta.name is the RING's identity (tooltip {a}, the series context) — the
                    // slice names stay the payload's.
                    name: m?.name || s.name,
                    radius: [
                        `${Math.round(innerPct + (S - 1 - i) * band)}%`,
                        `${Math.round(innerPct + (S - i) * band)}%`,
                    ],
                    ...(rose !== 'none' ? { roseType: rose } : {}),
                    label: { show: labelShow, formatter: labelFormatter },
                    data: (s.data as PieSliceDatum[]).map(d => ({
                        name: d.name,
                        value: d.value,
                        // Kategoriestabil — meta.color deliberately NOT read here (ADR-0075).
                        itemStyle: { color: p.palette[(katIndex.get(d.name) ?? 0) % p.palette.length] },
                    })),
                    animation: p.animation,
                    // Slider + easing drive BOTH enter and update (one honest knob; a live tick
                    // honours the value instead of echarts' update default). Duration always emitted.
                    animationDuration: p.animationDuration,
                    animationDurationUpdate: p.animationDuration,
                    ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
                    ...(p.animationEasing ? { animationEasingUpdate: p.animationEasing } : {}),
                },
                m?.raw,
            ),
            p.pie?.raw,
        );
    });
};

/**
 * Build the pie G option.
 *
 * @param series - Resolved chart series (one per slice — or one per RING slice-shaped, ADR-0075).
 * @param meta - Per-slice rendering metadata (name + colour; colour inert on rings).
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

    // Tabellarisch (ADR-0075): the rings + the category-name legend (ECharts unions the
    // legend across pie series — one click toggles the category in EVERY ring). Duplicate
    // category names stay SEPARATE SLICES but share ONE legend entry (same name = same
    // colour — the union is the deduped first-occurrence list).
    if (isSliceShaped(series)) {
        const names = [...new Set((series[0].data as PieSliceDatum[]).map(d => d.name))];
        return {
            legend: buildLegend(p, names),
            tooltip: buildTooltip(p),
            series: buildRingSeries(series, meta, p, inner, rose, labelShow, labelFormatter),
        } as unknown as EChartsOption;
    }

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
                    radius: [`${Math.round(inner * 100)}%`, `${OUTER_RADIUS_PCT}%`],
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
