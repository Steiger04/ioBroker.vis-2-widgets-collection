/**
 * seriesRawAnalysis — the state-aware ✓/◐/✗ classification of a series card's raw JSON
 * (the ADR-0037 axis analysis applied to series).
 *
 * @module EchartsCollectionWidget/editor/seriesRawAnalysis.test
 */
import { describe, expect, it } from 'vitest';

import { classifySeriesKeys, hostsMarkLines, type SeriesKeyChip } from './seriesRawAnalysis';

const chipOf = (
    raw: Record<string, unknown>,
    ctx: Parameters<typeof classifySeriesKeys>[1],
    key: string,
): SeriesKeyChip | undefined => classifySeriesKeys(raw, ctx).find(c => c.key === key);

describe('classifySeriesKeys — cartesian line', () => {
    const ctx = { slot: 'cartesian-line' as const };

    it('a GUI-uncovered key is effective (markPoint)', () => {
        expect(chipOf({ markPoint: { data: [] } }, ctx, 'markPoint')?.cls).toBe('effective');
    });

    it('data (scalar-managed) is ignored; lineStyle with only free leaves is effective', () => {
        expect(chipOf({ data: [1, 2] }, ctx, 'data')?.cls).toBe('ignored');
        expect(chipOf({ lineStyle: { cap: 'round', join: 'round' } }, ctx, 'lineStyle')?.cls).toBe('effective');
    });

    it('lineStyle mixes free leaves with the managed width/type → partial', () => {
        const c = chipOf({ lineStyle: { width: 5, cap: 'round' } }, ctx, 'lineStyle');
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['lineStyle.width']);
    });

    it('lineStyle with only managed leaves → ignored', () => {
        expect(chipOf({ lineStyle: { width: 5, type: 'solid' } }, ctx, 'lineStyle')?.cls).toBe('ignored');
    });

    it('areaStyle is FREE when the card has no area mode, managed-with-area', () => {
        expect(chipOf({ areaStyle: { opacity: 0.4 } }, ctx, 'areaStyle')?.cls).toBe('effective');
        const withArea = chipOf(
            { areaStyle: { opacity: 0.4 } },
            { slot: 'cartesian-line', meta: { area: 'flat' } },
            'areaStyle',
        );
        expect(withArea?.cls).toBe('ignored');
    });

    it('markLine is free without thresholds, managed on the host card', () => {
        expect(chipOf({ markLine: { data: [] } }, ctx, 'markLine')?.cls).toBe('effective');
        const host = chipOf(
            { markLine: { silent: true, data: [], lineStyle: { color: '#f00' } } },
            { ...ctx, markLineHost: true },
            'markLine',
        );
        expect(host?.cls).toBe('partial');
        expect(host?.managed).toEqual(['markLine.silent', 'markLine.data']);
    });

    it('conditional symbolSize classifies state-aware', () => {
        expect(chipOf({ symbolSize: 8 }, ctx, 'symbolSize')?.cls).toBe('effective');
        expect(chipOf({ symbolSize: 8 }, { slot: 'cartesian-line', meta: { symbolSize: 6 } }, 'symbolSize')?.cls).toBe(
            'ignored',
        );
    });
});

describe('hostsMarkLines — the builder markLine host rule', () => {
    const ml = (yAxisIndex?: number): { value: number; yAxisIndex?: number } => ({ value: 10, yAxisIndex });

    it('axis-0 threshold hosts on the first series bound to axis 0', () => {
        const ys = [1, 0, 0];
        expect(hostsMarkLines([ml(0)], ys, 1, 2)).toBe(true);
        expect(hostsMarkLines([ml(0)], ys, 0, 2)).toBe(false);
    });

    it('a threshold on an axis without series falls back to series 0', () => {
        expect(hostsMarkLines([ml(2)], [0, 1], 0, 3)).toBe(true);
        expect(hostsMarkLines([ml(2)], [0, 1], 1, 3)).toBe(false);
    });

    it('out-of-range series bindings normalise to axis 0 (builder rule, against the axis count)', () => {
        expect(hostsMarkLines([ml(0)], [5, 1], 0, 2)).toBe(true);
    });

    it('no markLines → nobody hosts', () => {
        expect(hostsMarkLines([], [0], 0, 1)).toBe(false);
    });
});

describe('classifySeriesKeys — cartesian bar / pie / radar / gauge', () => {
    it('bar: barGap free unless the card sets it; smooth is not a bar key (effective)', () => {
        const bar = { slot: 'cartesian-bar' as const };
        expect(chipOf({ barGap: '-30%' }, bar, 'barGap')?.cls).toBe('effective');
        expect(chipOf({ barGap: '-30%' }, { ...bar, meta: { barGap: 0.3 } }, 'barGap')?.cls).toBe('ignored');
        expect(chipOf({ smooth: true }, bar, 'smooth')?.cls).toBe('effective');
    });

    it('pie whole-series: label mixes managed show with free position → partial', () => {
        const c = chipOf(
            { label: { show: true, position: 'inside', formatter: '{b}' } },
            { slot: 'pie' as const },
            'label',
        );
        expect(c?.cls).toBe('partial');
        expect(c?.managed).toEqual(['label.show', 'label.formatter']);
        expect(chipOf({ roseType: 'radius' }, { slot: 'pie' as const }, 'roseType')?.cls).toBe('effective');
        expect(chipOf({ roseType: 'radius' }, { slot: 'pie' as const, pieRoseActive: true }, 'roseType')?.cls).toBe(
            'ignored',
        );
    });

    it('pie-slice: only name/value/itemStyle.color are managed — label/borderRadius are free', () => {
        const ctx = { slot: 'pie-slice' as const };
        expect(chipOf({ selected: true }, ctx, 'selected')?.cls).toBe('effective');
        expect(chipOf({ itemStyle: { borderRadius: 6 } }, ctx, 'itemStyle')?.cls).toBe('effective');
        expect(chipOf({ itemStyle: { color: '#f00', borderRadius: 6 } }, ctx, 'itemStyle')?.cls).toBe('partial');
    });

    it('radar: areaStyle free unless the area is on; symbol free', () => {
        const radar = { slot: 'radar' as const };
        expect(chipOf({ areaStyle: { opacity: 0.5 } }, radar, 'areaStyle')?.cls).toBe('effective');
        expect(chipOf({ areaStyle: { opacity: 0.5 } }, { ...radar, radarAreaActive: true }, 'areaStyle')?.cls).toBe(
            'ignored',
        );
        expect(chipOf({ symbol: 'circle' }, radar, 'symbol')?.cls).toBe('effective');
    });

    it('gauge: nested progress.itemStyle.color is a leaf; detail.formatter is conditional on the unit', () => {
        const gauge = { slot: 'gauge' as const };
        expect(chipOf({ progress: { itemStyle: { color: '#0f0' } } }, gauge, 'progress')?.cls).toBe('ignored');
        expect(chipOf({ progress: { itemStyle: { color: '#0f0' }, roundCap: true } }, gauge, 'progress')?.cls).toBe(
            'partial',
        );
        expect(chipOf({ detail: { formatter: '{value} kW' } }, gauge, 'detail')?.cls).toBe('effective');
        expect(
            chipOf({ detail: { formatter: '{value} kW' } }, { ...gauge, gaugeUnitActive: true }, 'detail')?.cls,
        ).toBe('ignored');
        expect(chipOf({ anchor: { show: true } }, gauge, 'anchor')?.cls).toBe('effective');
    });
});
