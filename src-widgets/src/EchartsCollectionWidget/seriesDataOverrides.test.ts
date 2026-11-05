/**
 * Unit tests for the shared Erben-Override resolvers (ADR-0072) — the pipeline and the series
 * card compute effective values through these, so their inherit semantics are pinned here once.
 *
 * @module EchartsCollectionWidget/seriesDataOverrides.test
 */
import { describe, expect, it } from 'vitest';

import type { EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

import {
    AGGREGATE_VALUES,
    effectiveAggregate,
    effectiveDiff,
    effectiveNullMode,
    hasAggregateOverride,
    historyEntryOf,
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

describe('hasAggregateOverride (the summary own counter, ADR-0072)', () => {
    it('any aggregate-cluster authoring counts; a pure inherit does not', () => {
        expect(hasAggregateOverride(undefined)).toBe(false);
        expect(hasAggregateOverride({})).toBe(false);
        expect(hasAggregateOverride({ aggregate: 'max' })).toBe(true);
        expect(hasAggregateOverride({ percentileValue: 90 })).toBe(true);
        expect(hasAggregateOverride({ integralUnit: 3600 })).toBe(true);
        expect(hasAggregateOverride({ integralInterpolation: 'linear' })).toBe(true);
    });
});

describe('effectiveNullMode (ADR-0059 NULL-Behandlung, ADR-0072 Erben-Override)', () => {
    it('unset inherits the chart-level setting', () => {
        expect(effectiveNullMode(undefined, 'forward')).toBe('forward');
        expect(effectiveNullMode({}, 'zero')).toBe('zero');
        expect(effectiveNullMode({}, 'keep')).toBe('keep');
    });

    it('an explicit override wins in both directions', () => {
        expect(effectiveNullMode({ nullMode: 'keep' }, 'forward')).toBe('keep');
        expect(effectiveNullMode({ nullMode: 'zero' }, 'keep')).toBe('zero');
        expect(effectiveNullMode({ nullMode: 'forward' }, undefined)).toBe('forward');
    });

    it("only 'forward'/'zero' fill — an absent or non-canonical chart setting reads as 'keep'", () => {
        expect(effectiveNullMode(undefined, undefined)).toBe('keep');
        expect(effectiveNullMode(undefined, 'true')).toBe('keep');
        expect(effectiveNullMode(undefined, 0)).toBe('keep');
        expect(effectiveNullMode({}, null)).toBe('keep');
    });

    it("a non-canonical override reads as 'keep' (the fill never runs on an unknown mode)", () => {
        expect(effectiveNullMode({ nullMode: 'bogus' as never }, 'forward')).toBe('keep');
    });
});

describe('historyEntryOf (the sparse Verlauf request entry, ADR-0039/0059/0072)', () => {
    it('a series without overrides carries only its identity', () => {
        expect(JSON.stringify(historyEntryOf({ oid: 'a.0.t', name: 'Temp' }))).toBe('{"oid":"a.0.t","name":"Temp"}');
    });

    it('every request override maps onto its entry field — the offset rides as SPEC', () => {
        expect(
            historyEntryOf({
                oid: 'a.0.t',
                name: 'Temp',
                instance: 'sql.0',
                xOffset: '1m',
                aggregate: 'percentile',
                percentileValue: 90,
                integralUnit: 3600,
                integralInterpolation: 'linear',
                nullMode: 'forward',
                valueMap: { on: 1, off: null },
            }),
        ).toEqual({
            oid: 'a.0.t',
            name: 'Temp',
            instance: 'sql.0',
            xOffset: '1m',
            aggregate: 'percentile',
            percentile: 90,
            integralUnit: 3600,
            integralInterpolation: 'linear',
            ignoreNull: 'forward',
            valueMap: { on: 1, off: null },
        });
        expect(historyEntryOf({ oid: 'x', xOffset: 3600 }).xOffset).toBe(3600);
    });

    it('a zero offset is no shift; zero params are valid levels and ride', () => {
        const entry = historyEntryOf({ oid: 'x', xOffset: 0, percentileValue: 0, integralUnit: 0 });
        expect('xOffset' in entry).toBe(false);
        expect(entry.percentile).toBe(0);
        expect(entry.integralUnit).toBe(0);
    });

    it('the request key is stable — fields in a fixed order, presentation knobs never leak', () => {
        // a full pipeline series, its keys authored in a different order
        const series: EchartsSeriesMeta & { oid: string } = {
            valueMap: { a: 1 },
            nullMode: 'zero',
            color: '#f00',
            formula: 'val * 2',
            aggregate: 'max',
            oid: 'x',
            name: 'X',
        };
        expect(JSON.stringify(historyEntryOf(series))).toBe(
            '{"oid":"x","name":"X","aggregate":"max","ignoreNull":"zero","valueMap":{"a":1}}',
        );
    });
});
