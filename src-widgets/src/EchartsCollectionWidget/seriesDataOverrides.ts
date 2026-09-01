/**
 * The per-series data-setting Erben-Override resolvers (ADR-0072) — the ONE place that knows
 * how a series' effective aggregate/diff composes from its own override and the Data source
 * section's Voreinstellung. Shared by the pipeline (request shaping + bar reduction) and the
 * editor (the series card's Daten cluster, the Data source summary) so the two can never drift.
 *
 * @module EchartsCollectionWidget/seriesDataOverrides
 * @remarks
 * The inherit semantics mirror the adapter's `line.aggregate || config.aggregate`
 * (src-chart/ChartModel.ts): unset = inherit, an explicit value wins. The diff tristate adds
 * 'raw' as the explicit NON-inherit (the adapter models only 'diff'; our tristate keeps the
 * chart default overridable in both directions).
 */
import type { EchartsAggregate, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

/** The per-series override subset this module resolves. */
export type SeriesOverrideMeta = Pick<EchartsSeriesMeta, 'aggregate' | 'diffMode'>;

/** The aggregates the UI offers — the chart-level select's and the series card's one list. */
export const AGGREGATE_VALUES: readonly EchartsAggregate[] = [
    'average',
    'minmax',
    'min',
    'max',
    'total',
    'count',
    'onchange',
    'none',
    'percentile',
    'integral',
];

/**
 * The series' effective aggregate (ADR-0072): its own override, else the chart-level
 * Voreinstellung, else the request's own default 'average'.
 */
export const effectiveAggregate = (
    meta: SeriesOverrideMeta | undefined,
    chartDefault: EchartsAggregate | undefined,
): EchartsAggregate => meta?.aggregate ?? chartDefault ?? 'average';

/**
 * The series' effective bar diff (ADR-0072 tristate): 'diff' always diffs, 'raw' never,
 * unset (or the explicit 'inherit') follows the chart-level barDiff.
 */
export const effectiveDiff = (
    meta: Pick<EchartsSeriesMeta, 'diffMode'> | undefined,
    chartBarDiff: boolean | undefined,
): boolean => meta?.diffMode === 'diff' || (meta?.diffMode !== 'raw' && chartBarDiff === true);

/**
 * The param inherit rule (ADR-0072, mirroring the fetch seam of ticket 01): a chart param
 * rides only while the chart aggregate survives — a series switching aggregates inherits the
 * SERVER default, not a mismatched chart param. The card's fallback displays resolve through
 * these; the request-side gating lives in `entryRequestOptions` (sparse emission, same rule).
 */
const chartParamRides = (chartAggregate: EchartsAggregate | undefined, paramAgg: EchartsAggregate): boolean =>
    chartAggregate === paramAgg;

/** The percentile level the card shows as the inherit fallback (server default 50). */
export const inheritedPercentileLevel = (
    chartAggregate: EchartsAggregate | undefined,
    chartPercentile: number | undefined,
): number => (chartParamRides(chartAggregate, 'percentile') ? (chartPercentile ?? 50) : 50);

/** The integral unit (s) the empty field's placeholder shows; undefined = server default (60). */
export const inheritedIntegralUnit = (
    chartAggregate: EchartsAggregate | undefined,
    chartIntegralUnit: number | undefined,
): number | undefined => (chartParamRides(chartAggregate, 'integral') ? chartIntegralUnit : undefined);

/** The integral interpolation the inherit entry names (server default 'none'). */
export const inheritedIntegralInterpolation = (
    chartAggregate: EchartsAggregate | undefined,
    chartIntegralInterpolation: 'none' | 'linear' | undefined,
): 'none' | 'linear' => (chartParamRides(chartAggregate, 'integral') ? (chartIntegralInterpolation ?? 'none') : 'none');
