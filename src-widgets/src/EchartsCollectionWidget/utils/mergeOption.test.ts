/**
 * Unit tests for the theme-floor seam (mergeGeneratedOverTheme, ADR-0007/0045): the theme base
 * floors the keys G does not emit, G wins every collision. The former three-layer U merge
 * (data-wins force-backs, the ADR-0044 hard-ignore strip) retired with the chart-level
 * Advanced JSON — with U gone, deepMerge already gives G every key it emits.
 *
 * @module EchartsCollectionWidget/utils/mergeOption.test
 */
import { describe, expect, it } from 'vitest';

import { deepMerge, mergeGeneratedOverTheme } from './mergeOption';
import type { EChartsOption } from 'echarts';

const G = (overrides: Record<string, unknown> = {}): EChartsOption =>
    ({
        legend: { data: ['Temperature'] },
        xAxis: { type: 'time' },
        yAxis: [{ type: 'value' }, { type: 'value' }],
        series: [{ name: 'Temperature', type: 'line', data: [[1, 2]] }],
        tooltip: { trigger: 'axis' },
        ...overrides,
    }) as EChartsOption;

const THEME_BASE = {
    color: ['#111', '#222'],
    textStyle: { color: '#text' },
} as unknown as EChartsOption;

describe('deepMerge', () => {
    it('merges plain objects recursively, replaces arrays, over wins scalars', () => {
        const out = deepMerge({ a: { b: 1, c: 2 }, arr: [1, 2] }, { a: { c: 9 }, arr: [3] });
        expect(out).toEqual({ a: { b: 1, c: 9 }, arr: [3] });
    });

    it('returns a copy of base when over is null/undefined', () => {
        const base = { x: 1 };
        expect(deepMerge(base, undefined)).toEqual({ x: 1 });
    });
});

describe('mergeGeneratedOverTheme — layering (ADR-0007/0045)', () => {
    it('theme base is the floor when G does not emit the key', () => {
        const merged = mergeGeneratedOverTheme(G(), THEME_BASE);
        expect(merged.color).toEqual(['#111', '#222']);
        expect((merged.textStyle as Record<string, unknown>).color).toBe('#text');
    });

    it('G wins every collision with the theme base (arrays replaced whole)', () => {
        const merged = mergeGeneratedOverTheme(G({ color: ['#aaa'] }), {
            color: ['#111', '#222'],
            xAxis: { axisLine: { lineStyle: { color: '#theme' } } },
        } as unknown as EChartsOption);
        expect(merged.color).toEqual(['#aaa']); // G, not the theme palette
        const xAxis = merged.xAxis as Record<string, unknown>;
        expect(xAxis.type).toBe('time'); // from G
        expect((xAxis.axisLine as Record<string, unknown>).lineStyle).toEqual({ color: '#theme' }); // floored: G emits no axisLine
    });

    it('a conditional component absent from G stays absent (no floor ghost)', () => {
        // The toolbox master switch off → G carries no `toolbox`; the theme base carries none
        // either — the merged option must not invent one (replaceMerge then removes it).
        const merged = mergeGeneratedOverTheme(G(), THEME_BASE);
        expect('toolbox' in (merged as Record<string, unknown>)).toBe(false);
    });

    it('the theme axis floor never materializes axes G does not emit (ADR-0007 addendum)', () => {
        // A pie-like G (no axes — buildPieOption emits none) over the REAL theme base shape
        // (buildEchartsTheme carries xAxis/yAxis style objects): an option `xAxis` object is a
        // real axis COMPONENT, not a style default — surviving the merge, echarts draws faint
        // phantom axes around the pie. The component keys floor ONLY when G emits them.
        const pieLike = {
            legend: { data: ['A'] },
            series: [{ name: 'A', type: 'pie', data: [{ name: 'a', value: 1 }] }],
            tooltip: { trigger: 'item' },
        } as unknown as EChartsOption;
        const base = {
            color: ['#111', '#222'],
            textStyle: { color: '#text' },
            xAxis: { axisLine: { lineStyle: { color: '#theme' } } },
            yAxis: { axisLine: { lineStyle: { color: '#theme' } } },
        } as unknown as EChartsOption;
        const merged = mergeGeneratedOverTheme(pieLike, base) as Record<string, unknown>;
        expect('xAxis' in merged).toBe(false);
        expect('yAxis' in merged).toBe(false);
        expect(merged.textStyle).toEqual({ color: '#text' }); // style keys keep flooring
    });
});
