/**
 * Unit tests for the shared Erben-Override resolvers (ADR-0072) — the pipeline and the series
 * card compute effective values through these, so their inherit semantics are pinned here once.
 *
 * @module EchartsCollectionWidget/seriesDataOverrides.test
 */
import { describe, expect, it } from 'vitest';

import {
    AGGREGATE_VALUES,
    effectiveAggregate,
    effectiveDiff,
    inheritedIntegralInterpolation,
    inheritedIntegralUnit,
    inheritedPercentileLevel,
} from './seriesDataOverrides';

describe('effectiveAggregate (ADR-0072 Erben-Override)', () => {
    it('unset inherits the chart default; an explicit override wins', () => {
        expect(effectiveAggregate(undefined, 'max')).toBe('max');
        expect(effectiveAggregate({}, 'max')).toBe('max');
        expect(effectiveAggregate({ aggregate: 'percentile' }, 'max')).toBe('percentile');
    });

    it("no chart default falls back to the request's own default 'average'", () => {
        expect(effectiveAggregate(undefined, undefined)).toBe('average');
    });
});

describe('effectiveDiff (ADR-0072 tristate)', () => {
    it("'diff' always diffs — even against a chart default of raw", () => {
        expect(effectiveDiff({ diffMode: 'diff' }, false)).toBe(true);
        expect(effectiveDiff({ diffMode: 'diff' }, undefined)).toBe(true);
    });

    it("'raw' never diffs — even against a chart default of diff", () => {
        expect(effectiveDiff({ diffMode: 'raw' }, true)).toBe(false);
    });

    it("unset and the explicit 'inherit' follow the chart-level barDiff", () => {
        expect(effectiveDiff(undefined, true)).toBe(true);
        expect(effectiveDiff(undefined, false)).toBe(false);
        expect(effectiveDiff({}, true)).toBe(true);
        expect(effectiveDiff({ diffMode: 'inherit' }, true)).toBe(true);
        expect(effectiveDiff({ diffMode: 'inherit' }, false)).toBe(false);
        // absent chart default (non-bar paths) reads as no diff
        expect(effectiveDiff(undefined, undefined)).toBe(false);
    });
});

describe('inherited params (the fetch-seam mirror for display, ADR-0072)', () => {
    it('a chart param rides only while the chart aggregate survives — else the server default', () => {
        expect(inheritedPercentileLevel('percentile', 75)).toBe(75);
        expect(inheritedPercentileLevel('average', 75)).toBe(50); // mismatched → server default
        expect(inheritedPercentileLevel('percentile', undefined)).toBe(50);
        expect(inheritedIntegralUnit('integral', 3600)).toBe(3600);
        expect(inheritedIntegralUnit('max', 3600)).toBeUndefined();
        expect(inheritedIntegralInterpolation('integral', 'linear')).toBe('linear');
        expect(inheritedIntegralInterpolation('average', 'linear')).toBe('none');
        expect(inheritedIntegralInterpolation('integral', undefined)).toBe('none');
    });
});

describe('AGGREGATE_VALUES (the one shared list)', () => {
    it('offers every member of the EchartsAggregate union, in the Data source select order', () => {
        expect(AGGREGATE_VALUES).toEqual([
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
        ]);
    });
});
