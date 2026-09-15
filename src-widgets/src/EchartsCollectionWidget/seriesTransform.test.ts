/**
 * Unit tests for the per-series data transforms (ADR-0059, parity Build B issue 07) — the pure
 * value chain (Y-offset BEFORE the formula, adapter `processOneValue` order) and the formula
 * compile/fallback contract.
 *
 * @module EchartsCollectionWidget/seriesTransform.test
 */
import { describe, expect, it } from 'vitest';

import {
    applyWindowTransforms,
    compileFormula,
    cumulativeValues,
    formulaIsInvalid,
    smoothWindowValues,
    transformPlainValues,
    transformSeriesData,
} from './seriesTransform';
import { toSeriesData, type SeriesPoint } from './historyLogic';

const pts = (...vals: (number | null)[]): SeriesPoint[] => vals.map((v, i) => [1000 + i, v]);

describe('compileFormula (expr-eval, symbol val)', () => {
    it('compiles a formula over the val symbol and evaluates it per value', () => {
        const fn = compileFormula('val / 1000 + 3');
        expect(fn).toBeTypeOf('function');
        expect(fn!(4000)).toBe(7);
        expect(fn!(-500)).toBe(2.5);
    });

    it('supports the math parser surface (functions, constants, operators)', () => {
        expect(compileFormula('round(val * 2)')!(1.4)).toBe(3);
        expect(compileFormula('sqrt(val)')!(9)).toBe(3);
        expect(compileFormula('max(val, 10)')!(4)).toBe(10);
    });

    it('an empty / whitespace formula is unset; an INVALID one is undefined too (raw fallback)', () => {
        expect(compileFormula(undefined)).toBeUndefined();
        expect(compileFormula('')).toBeUndefined();
        expect(compileFormula('   ')).toBeUndefined();
        expect(compileFormula('val +')).toBeUndefined(); // parse error
        expect(compileFormula('foo(val)')).toBeUndefined(); // unknown function
    });

    it('caches the compiled form per formula text (no re-parse per point)', () => {
        const a = compileFormula('val * 2');
        const b = compileFormula('val * 2');
        expect(a).toBe(b); // reference-equal through the cache
    });
});

describe('transformSeriesData (Y-offset → formula, adapter processOneValue order)', () => {
    it('applies the Y-offset alone when no formula is authored', () => {
        expect(transformSeriesData(pts(10, null, 20.5), { yOffset: -5 })).toEqual([
            [1000, 5],
            [1001, null],
            [1002, 15.5],
        ]);
    });

    it('applies the formula AFTER the offset: f(val + yOffset)', () => {
        const out = transformSeriesData(pts(10), { yOffset: 2, formula: 'val * 10' });
        expect(out).toEqual([[1000, 120]]); // (10 + 2) * 10 — offset feeds the formula
    });

    it('an invalid formula falls back to the offset-only values — no crash, raw values', () => {
        const out = transformSeriesData(pts(10, 3), { yOffset: 1, formula: 'val +' });
        expect(out).toEqual([
            [1000, 11],
            [1001, 4],
        ]);
    });

    it('null points stay null (gaps survive every transform)', () => {
        expect(transformSeriesData(pts(1, null), { formula: 'val * 2', yOffset: 1 })).toEqual([
            [1000, 4],
            [1001, null],
        ]);
    });

    it('a non-finite formula result becomes null (a gap, never a broken axis)', () => {
        // val - val is 0 for finite input; force infinity via division by an offset-derived zero.
        expect(transformSeriesData(pts(0), { yOffset: 0, formula: '1 / (val - val)' })).toEqual([[1000, null]]);
    });

    it('no authored transform returns the SAME data reference (the pipeline stays cheap)', () => {
        const data = pts(1, 2);
        expect(transformSeriesData(data, undefined)).toBe(data);
        expect(transformSeriesData(data, {})).toBe(data);
        expect(transformSeriesData(data, { yOffset: 0, formula: '' })).toBe(data);
    });

    it('the full chain over a MAPPED value (ticket 02): the mapped number runs offset + formula; a mapped gap SKIPS them', () => {
        const mapped = toSeriesData([{ ts: 1000, val: 'Sonne' }], 'keep', { Sonne: 3 });
        expect(transformSeriesData(mapped, { yOffset: 2, formula: 'val * 10' })).toEqual([[1000, 50]]); // (3 + 2) * 10
        const gapped = toSeriesData([{ ts: 1000, val: 'weg' }], 'keep', { weg: null });
        expect(transformSeriesData(gapped, { yOffset: 2, formula: 'val * 10' })).toEqual([[1000, null]]);
    });
});

describe('series-context symbols smin/smax/savg/sfirst/slast (ticket 03)', () => {
    it('(val - smin) / (smax - smin) * 100 normalizes the series onto 0–100 — from the RAW extent, so the formula never changes its own context', () => {
        expect(transformSeriesData(pts(0, 50, 100), { formula: '(val - smin) / (smax - smin) * 100' })).toEqual([
            [1000, 0],
            [1001, 50],
            [1002, 100],
        ]);
    });

    it('val - sfirst is the deviation from the series start', () => {
        expect(transformSeriesData(pts(10, 12, 15), { formula: 'val - sfirst' })).toEqual([
            [1000, 0],
            [1001, 2],
            [1002, 5],
        ]);
    });

    it('the context SKIPS gaps — a null point neither feeds smin/smax nor gains a value', () => {
        expect(transformSeriesData(pts(5, null, 15), { formula: '(val - smin) / (smax - smin) * 100' })).toEqual([
            [1000, 0],
            [1001, null],
            [1002, 100],
        ]);
    });

    it('an ALL-NULL series has no context — an s-symbol formula gaps every point (no crash, no raw fallback)', () => {
        expect(transformSeriesData(pts(null, null), { formula: 'val - savg' })).toEqual([
            [1000, null],
            [1001, null],
        ]);
    });

    it('the probe accepts s-symbol formulas (NOT invalid) while unknown symbols stay invalid', () => {
        expect(formulaIsInvalid('(val - smin) / (smax - smin) * 100')).toBe(false);
        expect(formulaIsInvalid('val + xyz')).toBe(true); // unknown symbol → raw fallback
        expect(formulaIsInvalid('min(max(val, 0), 100)')).toBe(false); // min/max stay FUNCTIONS (collision regression)
    });

    it('the Y-offset does NOT flow into the context — savg reads the raw values', () => {
        // raw mean of 10,20 = 15; the offset feeds the val side only (f(val + 2))
        expect(transformSeriesData(pts(10, 20), { yOffset: 2, formula: 'savg' })).toEqual([
            [1000, 15],
            [1001, 15],
        ]);
        // sanity: the offset still shifts the val side
        expect(transformSeriesData(pts(10, 20), { yOffset: 2, formula: 'val - savg' })).toEqual([
            [1000, -3], // (10 + 2) − 15
            [1001, 7], // (20 + 2) − 15
        ]);
    });

    it('transformPlainValues gets the SAME context from the plain column (the table family)', () => {
        expect(transformPlainValues([0, null, 50, 100], { formula: '(val - smin) / (smax - smin) * 100' })).toEqual([
            0,
            null,
            50,
            100,
        ]);
        expect(transformPlainValues([10, 12], { formula: 'val - sfirst' })).toEqual([0, 2]);
        // all-null column: context-free → every value gaps
        expect(transformPlainValues([null], { formula: 'val - slast' })).toEqual([null]);
    });
});

describe('window transforms — smoothing + cumulative (ticket 04)', () => {
    it('centered N=5 over [1, _, 3, 4, _, 6]: gaps stay gaps, edges clipped, present values averaged', () => {
        expect(smoothWindowValues([1, null, 3, 4, null, 6], 5)).toEqual([2, null, 8 / 3, 13 / 3, null, 5]);
    });

    it('LOCAL window, not the global s-context: a rising ramp smooths to local means (savg-vs-smooth sharpness)', () => {
        expect(smoothWindowValues([1, 2, 3, 4, 5], 3)).toEqual([1.5, 2, 3, 4, 4.5]); // clipped edges
    });

    it('cumulative: running total over non-null values; gaps stay gaps, no reset', () => {
        // The ticket's example said [1, 2, _, 4] → [1, 3, null, 10] — arithmetically inconsistent
        // with its own definition (1+2+4 = 7); the DEFINITION wins (documented ticket deviation).
        expect(cumulativeValues([1, 2, null, 4])).toEqual([1, 3, null, 7]);
        expect(cumulativeValues([1, 2, null, 7])).toEqual([1, 3, null, 10]);
    });

    it('combined: smooth FIRST, then total — the order is pinned (smoothed cumulative sum)', () => {
        // [1, 2, 3] N=3 → [1.5, 2, 2.5] → cumulative [1.5, 3.5, 6]
        expect(applyWindowTransforms([1, 2, 3], { smoothWindow: 3, cumulative: true })).toEqual([1.5, 3.5, 6]);
    });

    it('points ride along index-stable — the timestamps never move', () => {
        const points: SeriesPoint[] = [
            [10, 1],
            [20, null],
            [30, 3],
        ];
        expect(applyWindowTransforms(points, { cumulative: true })).toEqual([
            [10, 1],
            [20, null],
            [30, 4],
        ]);
    });

    it('nothing authored or an all-gap series: the SAME reference (pipeline thriftiness)', () => {
        const plain = [1, 2];
        expect(applyWindowTransforms(plain)).toBe(plain);
        expect(applyWindowTransforms(plain, { cumulative: false })).toBe(plain);
        const gaps = [null, null];
        expect(applyWindowTransforms(gaps, { smoothWindow: 5, cumulative: true })).toBe(gaps);
    });
});
