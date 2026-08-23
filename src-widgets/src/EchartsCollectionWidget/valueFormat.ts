/**
 * The chart-wide VALUE formatting core (ADR-0054 parity Build E) — the base mechanic of the
 * adapter's `useComma` option — grown into the per-series Wert-Formatter (parity Build B,
 * ADR-0057, issue 05).
 *
 * @module EchartsCollectionWidget/valueFormat
 * @remarks
 * One place turns a chart value into display text honouring the chart-level decimals clamp and
 * the comma-as-decimal-separator switch: the tooltip's values (`makeValueFormatter`), the legend
 * value formatter (`Name [value]`) and the default (un-authored) Y-axis labels all call
 * {@link formatChartValue}. On top of that sits the per-series Wert-Formatter
 * ({@link formatSeriesValue}): unit + decimals per series (adapter `unit`/`afterComma`), with the
 * chart-level tooltip cluster as the fallback — explicit beats inherited (the ADR-0018 idiom).
 * Issue 06 grows the same entry point with bool/enum texts (adapter `yFormatter` semantics).
 *
 * The adapter applies the comma as a plain `String.replace('.', ',')` on the formatted number
 * (`ioBroker.echarts` `ChartOption.yFormatter`) — adopted verbatim, so a value without a
 * fractional part stays point-free and thousands separators are NOT introduced. The adapter
 * concatenates its unit without a space; WE keep the chart-level units idiom (`21.5 °C`) the
 * widget already shipped in Build E, so one chart renders one unit spelling everywhere.
 */

/**
 * Format one chart value for display.
 *
 * @param v - The value (numbers expected; other inputs follow the tooltip valueFormatter's
 * historical cast-through contract).
 * @param decimals - Fixed decimal count (`toFixed`); `undefined` = the number's own string.
 * @param comma - Replace the decimal POINT with a COMMA (adapter `useComma` parity).
 */
export const formatChartValue = (v: unknown, decimals?: number, comma?: boolean): string => {
    // Non-numeric payloads stringify as-is (null/undefined/boolean/text) — the decimals clamp
    // only ever applies to real numbers, and a non-castable value must not crash `toFixed`.
    if (v === null || v === undefined || typeof v === 'boolean') {
        return String(v);
    }
    const parsed = typeof v === 'number' ? v : Number(v);
    const finite = Number.isFinite(parsed) ? parsed : (v as number);
    const txt = typeof finite === 'number' && decimals !== undefined ? finite.toFixed(decimals) : String(finite);
    return comma ? txt.replace('.', ',') : txt;
};

/**
 * The per-series value-format facts the Wert-Formatter reads (parity Build B, ADR-0057) — the
 * presentation subset of the series meta. Issue 06 adds the bool/enum text facts here.
 */
export interface SeriesValueFacts {
    /** Value unit appended to this series' rendered values (adapter `unit`). Empty/whitespace = unset. */
    unit?: string;
    /** Fixed decimal count for this series' values (adapter `afterComma`). `undefined` = inherit. */
    decimals?: number;
}

/**
 * The chart-level format context: the chart-wide comma switch plus the tooltip cluster
 * (units/decimals) acting as the FALLBACK for series without their own facts.
 */
export interface ChartValueFormat {
    /** Comma as the decimal separator (adapter `useComma`; ADR-0054). */
    comma?: boolean;
    /** Chart-level units fallback (the tooltip cluster's `tooltipUnits`). */
    units?: string;
    /** Chart-level decimals fallback (the tooltip cluster's `tooltipDecimals`). */
    decimals?: number;
}

/** Facts per EFFECTIVE series name — the lookup seam the tooltip/legend builders share. */
export type SeriesFactsByName = Record<string, SeriesValueFacts>;

/** A trimmed unit, or `undefined` when empty/whitespace (a cleared field is unset). */
const cleanUnit = (raw: string | undefined): string | undefined => {
    const t = raw?.trim();
    return t ? t : undefined;
};

/**
 * The Wert-Formatter facts of one series meta — the SINGLE meta→facts projection (trimmed unit,
 * decimals verbatim), so the builder, the facts map and the raw analysis gate stay identical.
 */
export const factsOfMeta = (m?: { unit?: string; decimals?: number }): SeriesValueFacts => ({
    unit: cleanUnit(m?.unit),
    decimals: m?.decimals,
});

/**
 * Resolve ONE series' effective facts: series-first, chart-level fallback (explicit beats
 * inherited — the ADR-0018 inheritance idiom, applied to value formatting).
 */
export const resolveValueFacts = (series?: SeriesValueFacts, chart?: ChartValueFormat): SeriesValueFacts => ({
    unit: cleanUnit(series?.unit) ?? cleanUnit(chart?.units),
    decimals: series?.decimals !== undefined ? series.decimals : chart?.decimals,
});

/**
 * The emission gate every formatting surface shares: would {@link formatSeriesValue} differ from
 * the plain value text? True when any fact (series OR chart-level) is authored — unit, decimals,
 * or the chart-wide comma switch alone (the ADR-0054 rule: comma must still route numbers
 * through the formatter).
 */
export const hasSeriesValueFormat = (series?: SeriesValueFacts, chart?: ChartValueFormat): boolean => {
    const f = resolveValueFacts(series, chart);
    return !!f.unit || f.decimals !== undefined || chart?.comma === true;
};

/**
 * Format one value through the per-series Wert-Formatter (ADR-0057): decimals clamp + comma +
 * unit, the series facts winning over the chart-level fallback. The surfaces (tooltip row,
 * legend value, series/bar label) all call this — one formatter, like the adapter's.
 *
 * @param v - The value (the {@link formatChartValue} cast-through contract applies).
 * @param series - This series' facts; `undefined`/`{}` = chart-level only.
 * @param chart - The chart-level context (comma switch + tooltip-cluster fallbacks).
 */
export const formatSeriesValue = (v: unknown, series?: SeriesValueFacts, chart?: ChartValueFormat): string => {
    const f = resolveValueFacts(series, chart);
    const txt = formatChartValue(v, f.decimals, chart?.comma);
    return f.unit ? `${txt} ${f.unit}` : txt;
};
