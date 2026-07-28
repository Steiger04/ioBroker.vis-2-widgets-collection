/**
 * Unit tests for the data-wins seam (mergeOptionForEcharts, ADR-0007): G's data-binding keys are
 * forced back, U's supplemental presentation deep-merges over, the theme base is the floor.
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

describe('mergeOptionForEcharts — data-wins force-back (ADR-0007)', () => {
    it('forces the generated series back to G (U cannot inject data or restyle series)', () => {
        const merged = mergeOptionForEcharts(
            G(),
            { series: [{ name: 'evil', type: 'line', data: [[9, 9]] }] },
            THEME_BASE,
        );
        const series = merged.series as unknown as { name: string }[];
        expect(series).toHaveLength(1);
        expect(series[0].name).toBe('Temperature');
    });

    it('forces legend.data back to G but keeps U legend.top (chart-level styling)', () => {
        const merged = mergeOptionForEcharts(G(), { legend: { data: ['evil'], top: 40 } }, THEME_BASE);
        const legend = merged.legend as Record<string, unknown>;
        expect(legend.data).toEqual(['Temperature']); // forced back to G
        expect(legend.top).toBe(40); // U styling preserved
    });
});

describe('mergeOptionForEcharts — presentation layering', () => {
    it('GUI wins collisions with U on a GUI-owned key (tooltip trigger)', () => {
        const merged = mergeOptionForEcharts(G(), { tooltip: { trigger: 'item' } }, THEME_BASE);
        expect((merged.tooltip as Record<string, unknown>).trigger).toBe('axis'); // G wins (ADR-0007)
    });

    it('U supplements a presentation key the GUI does not own (tooltip backgroundColor)', () => {
        const merged = mergeOptionForEcharts(G(), { tooltip: { backgroundColor: '#abc' } }, THEME_BASE);
        const tooltip = merged.tooltip as Record<string, unknown>;
        expect(tooltip.trigger).toBe('axis'); // G
        expect(tooltip.backgroundColor).toBe('#abc'); // U supplement (G does not set it)
    });

    it('theme base is the floor when no higher layer sets the key', () => {
        const merged = mergeOptionForEcharts(G(), {}, THEME_BASE);
        expect(merged.color).toEqual(['#111', '#222']);
        expect((merged.textStyle as Record<string, unknown>).color).toBe('#text');
    });

    it('G contributes axis type (data part), U styling deep-merges over', () => {
        const merged = mergeOptionForEcharts(
            G(),
            { xAxis: { axisLine: { lineStyle: { color: '#abc' } } } },
            THEME_BASE,
        );
        const xAxis = merged.xAxis as Record<string, unknown>;
        expect(xAxis.type).toBe('time'); // from G
        expect((xAxis.axisLine as Record<string, unknown>).lineStyle).toEqual({ color: '#abc' }); // U supplement
    });
});

describe('mergeOptionForEcharts — per-series force-back (ADR-0007)', () => {
    it('U may supplement per-series presentation, but data + GUI styling always come from G', () => {
        const merged = mergeOptionForEcharts(
            G(),
            { series: [{ markPoint: { data: [{ type: 'min' }] }, data: [[9, 9]] }] },
            THEME_BASE,
        );
        const series = merged.series as unknown as {
            markPoint?: unknown;
            data: unknown[];
            name: string;
        }[];
        expect(series).toHaveLength(1);
        expect(series[0].name).toBe('Temperature'); // G wins (no U rename)
        expect(series[0].data).toEqual([[1, 2]]); // G data forced back per index
        expect(series[0].markPoint).toEqual({ data: [{ type: 'min' }] }); // U supplement retained
    });
});
