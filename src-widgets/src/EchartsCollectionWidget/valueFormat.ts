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
 * The per-series value-format facts the Wert-Formatter reads (parity Build B, ADR-0057/0058) —
 * the presentation subset of the series meta: numeric facts (unit, decimals) plus the adapter's
 * text semantics (bool texts, enum state names — issue 06).
 */
export interface SeriesValueFacts {
    /** Value unit appended to this series' rendered values (adapter `unit`). Empty/whitespace = unset. */
    unit?: string;
    /** Fixed decimal count for this series' values (adapter `afterComma`). `undefined` = inherit. */
    decimals?: number;
    /** Text for TRUE (adapter `trueText`, bool OIDs). Unset while its sibling is set → adapter `TRUE`. */
    trueText?: string;
    /** Text for FALSE (adapter `falseText`, bool OIDs). Unset while its sibling is set → adapter `FALSE`. */
    falseText?: string;
    /** Enum state names keyed by value (adapter `states`); prefilled from `common.states`. */
    states?: Record<string, string>;
}

/**
 * The chart-level format context: the chart-wide comma switch plus the tooltip cluster
 * (units/decimals) acting as the FALLBACK for series without their own facts. Text facts have
 * NO chart-level fallback — bool/enum texts are per-series only (adapter parity).
 */
export interface ChartValueFormat {
    /** Comma as the decimal separator (adapter `useComma`; ADR-0054). */
    comma?: boolean;
    /** Chart-level units fallback (the tooltip cluster's `tooltipUnits`). */
    units?: string;
    /** Chart-level decimals fallback (the tooltip cluster's `tooltipDecimals`). */
    decimals?: number;
}

/**
 * The text mode of a formatting surface (adapter `yFormatter.forAxis`): `'exact'` (tooltip row,
 * legend value, labels — an exact state hit or EMPTY on a miss) vs `'axis'` (tick labels round
 * to the nearest state).
 */
export type SeriesValueTextMode = 'exact' | 'axis';

/** Facts per EFFECTIVE series name — the lookup seam the tooltip/legend builders share. */
export type SeriesFactsByName = Record<string, SeriesValueFacts>;

/** A trimmed unit, or `undefined` when empty/whitespace (a cleared field is unset). */
const cleanUnit = (raw: string | undefined): string | undefined => {
    const t = raw?.trim();
    return t ? t : undefined;
};

/** A states map with at least one entry, else `undefined` (an empty map is unset). */
const cleanStates = (raw: Record<string, string> | undefined): Record<string, string> | undefined =>
    raw && Object.keys(raw).length ? raw : undefined;

/**
 * The Wert-Formatter facts of one series meta — the SINGLE meta→facts projection (trimmed unit
 * and texts, empty map dropped, decimals verbatim), so the builder, the facts map and the raw
 * analysis gate stay identical.
 */
export const factsOfMeta = (m?: {
    unit?: string;
    decimals?: number;
    trueText?: string;
    falseText?: string;
    states?: Record<string, string>;
}): SeriesValueFacts => ({
    unit: cleanUnit(m?.unit),
    decimals: m?.decimals,
    trueText: cleanUnit(m?.trueText),
    falseText: cleanUnit(m?.falseText),
    states: cleanStates(m?.states),
});

/**
 * Resolve ONE series' effective facts: series-first, chart-level fallback (explicit beats
 * inherited — the ADR-0018 inheritance idiom, applied to value formatting).
 */
export const resolveValueFacts = (series?: SeriesValueFacts, chart?: ChartValueFormat): SeriesValueFacts => ({
    unit: cleanUnit(series?.unit) ?? cleanUnit(chart?.units),
    decimals: series?.decimals !== undefined ? series.decimals : chart?.decimals,
    trueText: cleanUnit(series?.trueText),
    falseText: cleanUnit(series?.falseText),
    states: cleanStates(series?.states),
});

/**
 * The emission gate every formatting surface shares: would {@link formatSeriesValue} differ from
 * the plain value text? True when any fact (series OR chart-level) is authored — unit, decimals,
 * a text fact (issue 06), or the chart-wide comma switch alone (the ADR-0054 rule: comma must
 * still route numbers through the formatter).
 */
export const hasSeriesValueFormat = (series?: SeriesValueFacts, chart?: ChartValueFormat): boolean => {
    const f = resolveValueFacts(series, chart);
    return !!f.unit || f.decimals !== undefined || !!f.states || !!f.trueText || !!f.falseText || chart?.comma === true;
};

/** True when enum/bool texts are authored on the RESOLVED facts (issue 06). */
export const textFactsActive = (f: SeriesValueFacts | undefined): boolean =>
    !!f?.states || !!f?.trueText || !!f?.falseText;

/**
 * The bool/enum TEXT for one value — the adapter `yFormatter` text semantics. Returns the text,
 * `''` for a deliberate miss (an in-between value must render EMPTY, not a number), or `null`
 * when no text path applies (the numeric path takes over).
 *
 *  - states: an exact key hit (booleans coerce to `'1'`/`'0'`); `'axis'` mode returns the first
 *    state ABOVE the value (keys sorted NUMERICALLY — the adapter's string sort is its bug),
 *    the last state beyond the top; an exact miss in `'exact'` mode is EMPTY.
 *  - bool texts: the adapter's literal sets (0/'0'/false/'false' vs 1/'1'/true/'true'), one
 *    authored text defaulting the other to TRUE/FALSE; `'axis'` mode splits at 0.5; anything
 *    else in `'exact'` mode is EMPTY.
 */
const textForValue = (v: unknown, f: SeriesValueFacts, mode: SeriesValueTextMode): string | null => {
    if (f.states) {
        const key = typeof v === 'boolean' ? (v ? '1' : '0') : String(v);
        const hit = f.states[key];
        if (hit !== undefined) {
            return String(hit);
        }
        if (mode === 'axis') {
            const num = typeof v === 'number' ? v : Number(v);
            if (Number.isFinite(num)) {
                const keys = Object.keys(f.states)
                    .map(Number)
                    .filter(Number.isFinite)
                    .sort((a, b) => a - b);
                for (const k of keys) {
                    if (num < k) {
                        return String(f.states[String(k)]);
                    }
                }
                return keys.length ? String(f.states[String(keys[keys.length - 1])]) : '';
            }
        }
        return ''; // an exact miss is EMPTY — no half states
    }
    if (f.trueText || f.falseText) {
        const trueText = f.trueText || 'TRUE';
        const falseText = f.falseText || 'FALSE';
        if (v === 1 || v === '1' || v === true || v === 'true') {
            return trueText;
        }
        if (v === 0 || v === '0' || v === false || v === 'false') {
            return falseText;
        }
        if (mode === 'axis') {
            const num = typeof v === 'number' ? v : Number(v);
            return Number.isFinite(num) && num >= 0.5 ? trueText : falseText;
        }
        return '';
    }
    return null;
};

/**
 * Format one value through the per-series Wert-Formatter (ADR-0057/0058): text facts first
 * (exact / axis mode — a hit suppresses unit and decimals, the adapter ignores the unit for
 * text series), else decimals clamp + comma + unit, the series facts winning over the
 * chart-level fallback. The surfaces (tooltip row, legend value, series/bar label, axis ticks)
 * all call this — one formatter, like the adapter's.
 *
 * @param v - The value (the {@link formatChartValue} cast-through contract applies).
 * @param series - This series' facts; `undefined`/`{}` = chart-level only.
 * @param chart - The chart-level context (comma switch + tooltip-cluster fallbacks).
 * @param mode - Text mode: `'exact'` (default) for tooltip/legend/labels, `'axis'` for ticks.
 */
export const formatSeriesValue = (
    v: unknown,
    series?: SeriesValueFacts,
    chart?: ChartValueFormat,
    mode: SeriesValueTextMode = 'exact',
): string => {
    const f = resolveValueFacts(series, chart);
    const text = textForValue(v, f, mode);
    if (text !== null) {
        return text;
    }
    const txt = formatChartValue(v, f.decimals, chart?.comma);
    return f.unit ? `${txt} ${f.unit}` : txt;
};
