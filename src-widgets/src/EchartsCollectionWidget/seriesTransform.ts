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
 */
import { Parser } from 'expr-eval';

import type { SeriesPoint } from './historyLogic';
import type { EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

/** One series' authored value transforms (the meta subset this module reads). */
export type SeriesValueTransform = Pick<EchartsSeriesMeta, 'yOffset' | 'formula'>;

/** A compiled formula: one number in, one number out. */
type FormulaFn = (val: number) => number;

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
            // Probe evaluation: expr-eval defers UNKNOWN FUNCTIONS to evaluate-time — a probe
            // run (val=1) catches them here so the formula counts as invalid up front (the raw
            // fallback) instead of nulling every point at runtime.
            expr.evaluate({ val: 1 });
            formulaCache.set(text, (val: number): number => Number(expr.evaluate({ val })));
        } catch {
            formulaCache.set(text, null); // parse error / unknown function — raw for this text
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
 * Apply one series' value transform to its points (the adapter order: offset feeds the
 * formula). Returns the SAME reference when nothing is authored — the pipeline stays cheap for
 * the unconfigured majority.
 */
export const transformSeriesData = (data: SeriesPoint[], t?: SeriesValueTransform): SeriesPoint[] => {
    const off = t?.yOffset ?? 0;
    const fn = compileFormula(t?.formula);
    if (!off && !fn) {
        return data;
    }
    return data.map(([ts, val]): SeriesPoint => {
        if (val === null) {
            return [ts, null]; // gaps survive every transform
        }
        const base = val + off; // adapter: convertFunc(value + yOffset)
        if (!fn) {
            return [ts, base];
        }
        try {
            const out = fn(base);
            return [ts, Number.isFinite(out) ? out : null];
        } catch {
            return [ts, null]; // a runtime failure is a gap, never a broken chart
        }
    });
};

/**
 * The per-series request-window shift in ms — the adapter's `offset` is authored in SECONDS and
 * shifts the getHistory start/end; unset/0 (the echarts default) means no shift.
 */
export const xOffsetMs = (seconds: number | undefined): number | undefined => (seconds ? seconds * 1000 : undefined);

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
 * „Gültige Zeit" (adapter `validTime`, ADR-0060) — Live mode: while the last point is fresher
 * than `validTime` seconds, hold the line to `now` at that value (the still-valid assumption);
 * stale (or a null last value) expires to a gap point at `now`. Unset → the data unchanged.
 */
export const holdValidLiveValue = (
    data: SeriesPoint[],
    validTimeSec: number | undefined,
    now: number,
): SeriesPoint[] => {
    if (!validTimeSec || !data.length) {
        return data;
    }
    const [lastTs, lastVal] = data[data.length - 1];
    if (lastTs >= now) {
        return data; // already at (or past) now — nothing to extend
    }
    const fresh = now - lastTs <= validTimeSec * 1000;
    return [...data, [now, fresh && lastVal !== null ? lastVal : null] as SeriesPoint];
};
