/**
 * The chart-wide VALUE formatting core (ADR-0054 parity Build E) — the base mechanic of the
 * adapter's `useComma` option.
 *
 * @module EchartsCollectionWidget/valueFormat
 * @remarks
 * One place turns a chart value into display text honouring the chart-level decimals clamp and
 * the comma-as-decimal-separator switch: the tooltip's values (`makeValueFormatter`), the legend
 * value formatter (`Name [value]`) and the default (un-authored) Y-axis labels all call
 * {@link formatChartValue}. Parity Build B (issue 05) grows this module into the full per-series
 * Wert-Formatter (unit, decimals, bool/enum texts); E delivers the shared numeric base first.
 *
 * The adapter applies the comma as a plain `String.replace('.', ',')` on the formatted number
 * (`ioBroker.echarts` `ChartOption.yFormatter`) — adopted verbatim, so a value without a
 * fractional part stays point-free and thousands separators are NOT introduced.
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
