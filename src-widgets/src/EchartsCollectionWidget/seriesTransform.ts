/**
 * The per-series data transforms (ADR-0059, parity Build B issue 07) — the pure value chain of
 * the adapter's `ChartModel.processOneValue`: the Y-offset adds BEFORE the formula
 * (`f(val + yOffset)`), an invalid formula falls back to the offset-only values (never a
 * crash), null points survive every transform as gaps.
 *
 * @module EchartsCollectionWidget/seriesTransform
 * @remarks
 * The formula runs through **expr-eval** (a mathematical parser — deliberately NOT the
 * adapter's `new Function`, which would execute arbitrary JS in every viewer's browser): the
 * symbol is `val`, the surface is math operators/functions/constants. A non-finite result
 * (division by zero &c.) becomes a null gap — echarts never sees a broken axis value.
 *
 * Series-context symbols (ticket 03): `smin`/`smax`/`savg`/`sfirst`/`slast` read THIS series'
 * raw extent (the values the formula sees — post-intake, PRE-offset/formula, gaps skipped).
 * NAMING CONSTRAINT: `min`/`max` are expr-eval FUNCTIONS — the symbols MUST stay s-prefixed; a
 * scope value named `min` would shadow the function and crash `min(max(val, 0), 100)`.
 *
 * The value chain ends with the WINDOW transforms (ticket 04), the pipeline's final stone:
 * centered smoothing FIRST, then the cumulative total — over points or plain values alike.
 */
import { Parser } from 'expr-eval';

import type { SeriesPoint } from './historyLogic';
import type { EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

/** One series' authored value transforms (the meta subset this module reads). */
export type SeriesValueTransform = Pick<EchartsSeriesMeta, 'yOffset' | 'formula'>;

/** The series-context symbols (ticket 03) — this series' raw extent, gaps skipped. */
interface SeriesFormulaContext {
    smin: number;
    smax: number;
    savg: number;
    sfirst: number;
    slast: number;
}

/**
 * The probe's neutral values for EVERY context symbol — typed over the interface's keys, so a
 * sixth symbol fails to compile here until the probe carries it (one list, compiler-synchronised).
 */
const NEUTRAL_CONTEXT: Record<keyof SeriesFormulaContext, number> = {
    smin: 1,
    smax: 1,
    savg: 1,
    sfirst: 1,
    slast: 1,
};

/** A compiled formula: one value + its series' context in, one number out. */
type FormulaFn = (val: number, ctx?: SeriesFormulaContext) => number;

/**
 * Compiled formulas keyed by their trimmed text — parse once per distinct formula, never per
 * point. Capped: the editor probes every keystroke (every draft stays cached, invalid ones as
 * `null`), so an unbounded map would grow with typing — a hard clear at the cap is the honest
 * cheap bound (the Theme-Studio LRU precedent, sized for a handful of formulas).
 */
const FORMULA_CACHE_CAP = 100;
const formulaCache = new Map<string, FormulaFn | null>();

/**
 * Compile a formula over `val` — `undefined` when unset/whitespace OR unparseable (the raw
 * fallback contract: the caller silently keeps the unconverted values, exactly like the
 * adapter's unparseable `new Function`).
 */
export const compileFormula = (formula: string | undefined): FormulaFn | undefined => {
    const text = formula?.trim();
    if (!text) {
        return undefined;
    }
    if (formulaCache.size >= FORMULA_CACHE_CAP) {
        formulaCache.clear(); // the cap guard — a session authors far fewer formulas than drafts
    }
    if (!formulaCache.has(text)) {
        try {
            const expr = Parser.parse(text);
            // Probe evaluation: expr-eval defers UNKNOWN FUNCTIONS AND SYMBOLS to
            // evaluate-time — a probe run catches them here so the formula counts as invalid
            // up front (the raw fallback) instead of nulling every point at runtime. The
            // s-context symbols ride with NEUTRAL values: a formula over them is valid even
            // before any series context exists (ticket 03's probe fix).
            expr.evaluate({ val: 1, ...NEUTRAL_CONTEXT });
            formulaCache.set(text, (val: number, ctx?: SeriesFormulaContext): number =>
                Number(expr.evaluate({ val, ...ctx })),
            );
        } catch {
            formulaCache.set(text, null); // parse error / unknown function or symbol — raw for this text
        }
    }
    return formulaCache.get(text) ?? undefined;
};

/**
 * True when a formula is authored but will NOT run (unset or unparseable) — the editor's
 * visible-invalid signal for the formula field.
 */
export const formulaIsInvalid = (formula: string | undefined): boolean =>
    !!formula?.trim() && compileFormula(formula) === undefined;

/**
 * Compute the series-context symbols over the values the formula SEES (ticket 03): nulls are
 * SKIPPED; an all-null series has no context (`undefined` — a formula touching an s-symbol
 * then throws at evaluate-time and gaps every point, the existing non-finite rule). Shared by
 * the point- and plain-value transforms — one rule set, no second law for the table family.
 */
const contextOf = (vals: readonly (number | null)[]): SeriesFormulaContext | undefined => {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let n = 0;
    let first: number | undefined;
    let last: number | undefined;
    for (const v of vals) {
        if (v === null) {
            continue; // gaps never feed the context
        }
        if (v < min) {
            min = v;
        }
        if (v > max) {
            max = v;
        }
        sum += v;
        n++;
        if (first === undefined) {
            first = v;
        }
        last = v;
    }
    if (n === 0 || first === undefined || last === undefined) {
        return undefined; // no numbers at all — no context
    }
    return { smin: min, smax: max, savg: sum / n, sfirst: first, slast: last };
};

/**
 * One non-null value through the chain (adapter order: the offset feeds the formula); a
 * non-finite or throwing formula result is a null gap — shared by the point- and plain-value
 * transforms below so the chain cannot drift apart.
 */
const transformValue = (val: number, off: number, fn?: FormulaFn, ctx?: SeriesFormulaContext): number | null => {
    const base = val + off; // adapter: convertFunc(value + yOffset)
    if (!fn) {
        return base;
    }
    try {
        const out = fn(base, ctx);
        return Number.isFinite(out) ? out : null;
    } catch {
        return null; // a runtime failure is a gap, never a broken chart
    }
};

/**
 * Apply one series' value transform to its points (the adapter order: offset feeds the
 * formula). Returns the SAME reference when nothing is authored — the pipeline stays cheap for
 * the unconfigured majority. The formula's series context is computed ONCE from the RAW values
 * (pre-offset, pre-formula — a formula never changes its own context).
 */
export const transformSeriesData = (data: SeriesPoint[], t?: SeriesValueTransform): SeriesPoint[] => {
    const off = t?.yOffset ?? 0;
    const fn = compileFormula(t?.formula);
    if (!off && !fn) {
        return data;
    }
    const ctx = fn ? contextOf(data.map(([, v]) => v)) : undefined;
    return data.map(
        ([ts, val]): SeriesPoint => (val === null ? [ts, null] : [ts, transformValue(val, off, fn, ctx)]), // gaps survive every transform
    );
};

/**
 * „Keine Zukunft" (adapter `noFuture`, ADR-0060): drop points after `now` — the adapter breaks
 * at the first future point; on sorted data a filter is the same cut. Returns the SAME reference
 * when nothing lies in the future.
 */
export const cutFuturePoints = (data: SeriesPoint[], now: number): SeriesPoint[] => {
    const cut = data.filter(([ts]) => ts <= now);
    return cut.length === data.length ? data : cut;
};

/**
 * The plain-values variant of {@link transformSeriesData} for category-aligned data (the JSON
 * table family, ADR-0075): the SAME value chain — the offset feeds the formula, gaps survive,
 * a non-finite/throwing formula result is a gap. The series context (ticket 03) comes from the
 * plain column's own values — the same {@link contextOf}, no second rule set.
 */
export const transformPlainValues = (data: (number | null)[], t?: SeriesValueTransform): (number | null)[] => {
    const off = t?.yOffset ?? 0;
    const fn = compileFormula(t?.formula);
    if (!off && !fn) {
        return data;
    }
    const ctx = fn ? contextOf(data) : undefined;
    return data.map(val => (val === null ? null : transformValue(val, off, fn, ctx))); // gaps survive
};

// ── window transforms (ticket 04) — the value chain's FINAL stone ──

/** The series' authored window transforms (ticket 04). */
export type SeriesWindowTransform = Pick<EchartsSeriesMeta, 'smoothWindow' | 'cumulative'>;

/**
 * Centered smoothing over a window of N points (ticket 04): half the window before, the point,
 * half after — CLIPPED at the edges (look-ahead at the right edge accepted, decision Q9).
 * Gaps are SKIPPED (the mean of the values present) but never FILLED — a null point stays
 * null (gap honesty). The window is LOCAL: nothing global like the formula's s-context. An
 * even N (hand-edited blob — the UI steps by 2) acts as the next ODD window (floor(N/2)
 * either side): a symmetric window stays symmetric.
 */
export const smoothWindowValues = (data: readonly (number | null)[], window: number): (number | null)[] => {
    const n = Math.abs(Math.round(window));
    if (!n || data.length === 0) {
        return data as (number | null)[];
    }
    const half = Math.floor(n / 2);
    return data.map((v, i) => {
        if (v === null) {
            return null; // gaps are never interpolated
        }
        let sum = 0;
        let k = 0;
        for (let j = Math.max(0, i - half); j <= Math.min(data.length - 1, i + half); j++) {
            const w = data[j];
            if (w !== null) {
                sum += w;
                k++;
            }
        }
        return sum / k; // the centre itself is non-null ⇒ k ≥ 1 — the window never runs dry
    });
};

/**
 * Running total over the non-null values (ticket 04): gaps stay gaps (no carry, no fill), no
 * reset (a calendar reset stays deliberately out of scope).
 */
export const cumulativeValues = (data: readonly (number | null)[]): (number | null)[] => {
    let total = 0;
    return data.map(v => (v === null ? null : (total += v)));
};

/**
 * The value chain's FINAL stone (ticket 04): smooth FIRST, then total — over whatever the axis
 * sees (`[ts, val]` points or plain values; the timestamps ride along index-stable, the
 * transforms never drop or add points). The SAME reference when nothing is authored or the
 * series holds no numbers at all (pipeline thriftiness).
 */
export const applyWindowTransforms = (
    data: SeriesPoint[] | (number | null)[],
    t?: SeriesWindowTransform,
): SeriesPoint[] | (number | null)[] => {
    const win = t?.smoothWindow ?? 0;
    const cum = t?.cumulative === true;
    if ((!win && !cum) || data.length === 0) {
        return data;
    }
    const isPoints = Array.isArray(data[0]);
    const vals = (isPoints ? (data as SeriesPoint[]).map(([, v]) => v) : data) as (number | null)[];
    if (vals.every(v => v === null)) {
        return data; // an all-gap series: both transforms are no-ops (same reference)
    }
    const smoothed = win ? smoothWindowValues(vals, win) : vals;
    const finaled = cum ? cumulativeValues(smoothed) : smoothed;
    return isPoints ? (data as SeriesPoint[]).map(([ts], i): SeriesPoint => [ts, finaled[i]]) : finaled;
};
