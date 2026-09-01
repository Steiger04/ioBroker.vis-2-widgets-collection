/**
 * Unit tests for the per-series data transforms (ADR-0059, parity Build B issue 07) — the pure
 * value chain (Y-offset BEFORE the formula, adapter `processOneValue` order) and the formula
 * compile/fallback contract.
 *
 * @module EchartsCollectionWidget/seriesTransform.test
 */
import { describe, expect, it } from 'vitest';

import { compileFormula, transformSeriesData } from './seriesTransform';
import type { SeriesPoint } from './historyLogic';

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
});
