/**
 * The formatter adapters (ADR-0103 K4): one place translates the callback shapes echarts hands a
 * `formatter` into the plain values the Wert-Formatter ({@link formatSeriesValue},
 * {@link formatPercentValue}) formats.
 *
 * @module EchartsCollectionWidget/optionBuilders/formatters
 * @remarks
 * echarts calls each surface with its own shape:
 *
 *  - series / percent / sum-anchor label → a PARAMS object; its `value` is the datum — a point
 *    `[ts, v]` on the time/bucket axes, a scalar on the category paths;
 *  - axis tick → the tick value (a scalar — it already IS the value slot);
 *  - legend → the series NAME (the value comes from the pipeline-resolved legend values).
 *
 * The label adapters read the value through the shared value-slot rule ({@link datumValueSlot},
 * the same rule the stack shares and sums read). A surface never builds its own lambda around
 * the Wert-Formatter again — a new label cannot expect a value where echarts passes params
 * (Bug A, „[object Object]"). The Wert-Formatter itself stays free of echarts. The tooltip keeps
 * its own param evaluation (`tooltip.ts`, out of scope).
 */
import { datumValueSlot } from '../stackMode';
import {
    formatPercentValue,
    formatSeriesValue,
    type ChartValueFormat,
    type SeriesFactsByName,
    type SeriesValueFacts,
    type SeriesValueTextMode,
} from '../valueFormat';

/** The fields of the params object echarts hands a series label `formatter` that the adapters read. */
export interface LabelParams {
    /** The datum: a point `[ts, v]` or a scalar. */
    value?: unknown;
    /** The datum's index in the series data. */
    dataIndex?: number;
}

/**
 * The value slot of a label callback argument. echarts passes a params object; a bare datum
 * (scalar or point) is accepted too — the slot rule reads both the same way.
 */
const labelValueOf = (arg: unknown): number | null =>
    datumValueSlot(arg !== null && typeof arg === 'object' && !Array.isArray(arg) ? (arg as LabelParams).value : arg);

/**
 * The series value label (ADR-0057/0058): the datum's value through this series' facts, the
 * chart-level cluster as the per-fact fallback. A gap renders no text.
 */
export const seriesLabelFormatter =
    (facts: SeriesValueFacts | undefined, chart: ChartValueFormat) =>
    (params: LabelParams): string => {
        const v = labelValueOf(params);
        return v === null ? '' : formatSeriesValue(v, facts, chart);
    };

/**
 * The 100 % segment label (ADR-0084): the datum is the share (0..1), rendered as `x,x %`.
 * A gap renders no text — never a `0 %` lie.
 */
export const percentLabelFormatter =
    (comma: boolean | undefined) =>
    (params: LabelParams): string => {
        const v = labelValueOf(params);
        return v === null ? '' : formatPercentValue(v, comma);
    };

/**
 * The stack sum anchor's label (ADR-0084): the anchor's own datum is the 0-height carrier, the
 * value is the stack plan's sum for the hovered category (`dataIndex`). A gap (`null`) renders
 * no text.
 */
export const sumAnchorLabelFormatter =
    (sums: readonly (number | null)[], facts: SeriesValueFacts | undefined, chart: ChartValueFormat) =>
    (params: { dataIndex: number }): string => {
        const sum = sums[params.dataIndex];
        return sum === null ? '' : formatSeriesValue(sum, facts, chart);
    };

/**
 * The default value-axis tick label (ADR-0054/0057/0058): the tick value through the facts every
 * bound series shares; `'axis'` mode maps bool/enum texts to the nearest state.
 */
export const axisTickFormatter =
    (facts: SeriesValueFacts | undefined, chart: ChartValueFormat, mode: SeriesValueTextMode) =>
    (v: number): string =>
        formatSeriesValue(v, facts, chart, mode);

/** The share-scale tick label of a 100 % axis (ADR-0084): `0–100 %`, no unit inheritance. */
export const percentTickFormatter =
    (comma: boolean | undefined) =>
    (v: number): string =>
        formatPercentValue(v, comma);

/**
 * The legend value (ADR-0054 `legActual`, ADR-0057): `Name [value]` from the pipeline-resolved
 * values, formatted through the series' facts; a name without a numeric value renders bare.
 */
export const legendValueFormatter =
    (
        values: Record<string, number | null> | undefined,
        facts: SeriesFactsByName | undefined,
        chart: ChartValueFormat,
    ) =>
    (name: string): string => {
        const v = values?.[name];
        return typeof v === 'number' ? `${name} [${formatSeriesValue(v, facts?.[name], chart)}]` : name;
    };
