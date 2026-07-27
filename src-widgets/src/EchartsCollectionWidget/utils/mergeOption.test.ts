/**
 * Unit tests for the data-wins seam (mergeOptionForEcharts): G's data-binding keys are forced
 * back, U's chart-level presentation wins, the theme base is the floor.
 *
 * @module EchartsCollectionWidget/utils/mergeOption.test
 */
import { describe, expect, it } from 'vitest';

import { deepMerge, mergeOptionForEcharts } from './mergeOption';
import type { EChartsOption } from 'echarts';

const G = (overrides: Record<string, unknown> = {}): EChartsOption =>
    ({
        legend: { data: ['Temperature'] },
        xAxis: { type: 'time' },
        yAxis: [{ type: 'value' }, { type: 'value' }],
        series: [{ name: 'Temperature', type: 'line', data: [[1, 2]] }],
        ...overrides,
    }) as EChartsOption;

const TEMPLATE_DEFAULTS = {
    tooltip: { trigger: 'axis' },
    grid: { left: 48 },
    legend: { top: 4 },
};

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

describe('mergeOptionForEcharts — data-wins force-back', () => {
    it('forces the generated series back to G (U cannot inject data)', () => {
        const merged = mergeOptionForEcharts(
            G(),
            TEMPLATE_DEFAULTS,
            { series: [{ name: 'evil', type: 'line', data: [[9, 9]] }] },
            THEME_BASE,
        );
        const series = merged.series as unknown as { name: string }[];
        expect(series).toHaveLength(1);
        expect(series[0].name).toBe('Temperature');
    });

    it('forces legend.data back to G but keeps U legend.top (chart-level styling)', () => {
        const merged = mergeOptionForEcharts(
            G(),
            TEMPLATE_DEFAULTS,
            { legend: { data: ['evil'], top: 40 } },
            THEME_BASE,
        );
        const legend = merged.legend as Record<string, unknown>;
        expect(legend.data).toEqual(['Temperature']); // forced back to G
        expect(legend.top).toBe(40); // U styling preserved
    });
});

describe('mergeOptionForEcharts — presentation layering', () => {
    it('U overrides templateDefaults (chart-level presentation wins)', () => {
        const merged = mergeOptionForEcharts(G(), TEMPLATE_DEFAULTS, { tooltip: { trigger: 'item' } }, THEME_BASE);
        expect((merged.tooltip as Record<string, unknown>).trigger).toBe('item');
    });

    it('theme base is the floor when no higher layer sets the key', () => {
        const merged = mergeOptionForEcharts(G(), TEMPLATE_DEFAULTS, {}, THEME_BASE);
        expect(merged.color).toEqual(['#111', '#222']);
        expect((merged.textStyle as Record<string, unknown>).color).toBe('#text');
    });

    it('G contributes axis type (data part), U styling deep-merges over', () => {
        const merged = mergeOptionForEcharts(
            G(),
            TEMPLATE_DEFAULTS,
            { xAxis: { axisLine: { lineStyle: { color: '#abc' } } } },
            THEME_BASE,
        );
        const xAxis = merged.xAxis as Record<string, unknown>;
        expect(xAxis.type).toBe('time'); // from G
        expect((xAxis.axisLine as Record<string, unknown>).lineStyle).toEqual({ color: '#abc' }); // from U
    });
});
