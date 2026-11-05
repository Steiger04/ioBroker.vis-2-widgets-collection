/**
 * The per-series data-setting Erben-Override resolvers (ADR-0072) — the ONE place that knows
 * how a series' effective aggregate/diff/NULL handling composes from its own override and the
 * Data source section's Voreinstellung, and how a series maps onto its sparse Verlauf request
 * entry. Shared by the pipeline (request shaping, parse inputs, bar reduction) and the editor
 * (the series card's Daten cluster, the Data source summary) so the two can never drift.
 *
 * @module EchartsCollectionWidget/seriesDataOverrides
 * @remarks
 * The inherit semantics mirror the adapter's `line.aggregate || config.aggregate`
 * (src-chart/ChartModel.ts): unset = inherit, an explicit value wins. The diff tristate adds
 * 'raw' as the explicit NON-inherit (the adapter models only 'diff'; our tristate keeps the
 * chart default overridable in both directions).
 */
import type { EchartsAggregate, EchartsIgnoreNull, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';
import type { HistoryEntry } from './historyLogic';

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
 * The series' effective NULL-Behandlung (ADR-0059, ADR-0072 inherit rule): its own override,
 * else the chart-level setting. Only 'forward'/'zero' fill — an absent or non-canonical value
 * (a raw persisted `src.ignoreNull` arrives unchecked) reads as 'keep', exactly what the fill
 * stage does with an unknown mode. The JSON parse paths receive ONLY this resolved value; the
 * Verlauf fetch resolves it per entry over the sparse override of {@link historyEntryOf}.
 */
export const effectiveNullMode = (
    meta: Pick<EchartsSeriesMeta, 'nullMode'> | undefined,
    chartSetting: unknown,
): EchartsIgnoreNull => {
    const mode: unknown = meta?.nullMode ?? chartSetting;
    return mode === 'forward' || mode === 'zero' ? mode : 'keep';
};

/** The series fields {@link historyEntryOf} reads — its identity plus the request overrides. */
export type HistoryEntrySource = Pick<
    EchartsSeriesMeta,
    | 'name'
    | 'instance'
    | 'xOffset'
    | 'aggregate'
    | 'percentileValue'
    | 'integralUnit'
    | 'integralInterpolation'
    | 'nullMode'
    | 'valueMap'
> & { oid: string };

/**
 * The series' Verlauf request entry (ADR-0039 instance; ADR-0059 X-offset + NULL handling;
 * ADR-0072 aggregate + params; ticket 02 value map) — SPARSE: an unset override stays absent,
 * so the chart defaults keep riding the shared options and the entry's JSON (the fetch's
 * refetch key) changes only with what the series authors. The offset rides as SPEC (numeric
 * seconds and calendar keys resolve per fetch at the fetch seam, never precomputed here); a
 * zero offset is no shift. Params ride whenever authored — 0 is a valid level; the request
 * side gates them under the entry's effective aggregate (`entryRequestOptions`). The field
 * order is fixed (it is part of that JSON key).
 */
export const historyEntryOf = (s: HistoryEntrySource): HistoryEntry => ({
    oid: s.oid,
    name: s.name,
    instance: s.instance,
    ...(s.xOffset ? { xOffset: s.xOffset } : {}),
    ...(s.aggregate ? { aggregate: s.aggregate } : {}),
    ...(s.percentileValue !== undefined ? { percentile: s.percentileValue } : {}),
    ...(s.integralUnit !== undefined ? { integralUnit: s.integralUnit } : {}),
    ...(s.integralInterpolation ? { integralInterpolation: s.integralInterpolation } : {}),
    ...(s.nullMode ? { ignoreNull: s.nullMode } : {}),
    ...(s.valueMap ? { valueMap: s.valueMap } : {}),
});

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

/** The aggregate-cluster override subset (the summary's „own" counter reads this). */
export type AggregateOverrideMeta = Pick<
    EchartsSeriesMeta,
    'aggregate' | 'percentileValue' | 'integralUnit' | 'integralInterpolation'
>;

/** True when the series authors ANY aggregate-cluster override (ADR-0072) — the Data source summary's own counter. */
export const hasAggregateOverride = (meta: AggregateOverrideMeta | undefined): boolean =>
    meta?.aggregate !== undefined ||
    meta?.percentileValue !== undefined ||
    meta?.integralUnit !== undefined ||
    meta?.integralInterpolation !== undefined;
