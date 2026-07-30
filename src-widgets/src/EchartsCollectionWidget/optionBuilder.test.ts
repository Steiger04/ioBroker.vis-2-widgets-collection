/**
 * Unit tests for the option builders + config parsers (the G side, ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/optionBuilder.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import { buildGeneratedOption, familyOf, parseJsonState, parseSeriesConfig, parseUserJson } from './optionBuilder';
import type { EchartsChartType } from '../types/field-definitions/echarts-fields';
import type { PresentationConfig } from './optionBuilders/types';

/** Minimal cartesian presentation config for tests. */
const P: PresentationConfig = {
    legendShow: true,
    legendPos: 'top',
    tooltipTrigger: 'axis',
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
    xSplit: false,
    yLog: false,
    ySplit: true,
    dataZoomSlider: false,
    dataZoomInside: false,
    palette: ['#1', '#2', '#3'],
    markLines: [],
};

describe('parseUserJson', () => {
    it('accepts an empty string as no overrides', () => {
        expect(parseUserJson('')).toEqual({ ok: true, value: {} });
        expect(parseUserJson('   ')).toEqual({ ok: true, value: {} });
    });

    it('accepts a JSON object of presentation keys', () => {
        const r = parseUserJson('{ "tooltip": { "trigger": "axis" } }');
        expect(r.ok).toBe(true);
        expect((r as { ok: true; value: Record<string, unknown> }).value.tooltip).toEqual({ trigger: 'axis' });
    });

    it('rejects a JSON array', () => {
        const r = parseUserJson('[1, 2, 3]');
        expect(r.ok).toBe(false);
    });

    it('rejects invalid JSON with the parse error', () => {
        const r = parseUserJson('{ not json');
        expect(r.ok).toBe(false);
        expect((r as { ok: false; error: string }).error).toBeTruthy();
    });
});

describe('parseJsonState', () => {
    it('parses { series: [{ name, data }] } into multiple series', () => {
        const out = parseJsonState(
            JSON.stringify({
                series: [
                    {
                        name: 'A',
                        data: [
                            [1, 10],
                            [2, 20],
                        ],
                    },
                    { name: 'B', data: [[1, 30]] },
                ],
            }),
        );
        expect(out).toHaveLength(2);
        expect(out[0]).toEqual({
            name: 'A',
            data: [
                [1, 10],
                [2, 20],
            ],
        });
        expect(out[1]).toEqual({ name: 'B', data: [[1, 30]] });
    });

    it('parses { data: [...] } into a single series', () => {
        const out = parseJsonState(
            JSON.stringify({
                data: [
                    [1, 5],
                    [2, 6],
                ],
            }),
        );
        expect(out).toEqual([
            {
                name: 'Series 1',
                data: [
                    [1, 5],
                    [2, 6],
                ],
            },
        ]);
    });

    it('parses a bare array of points into a single series', () => {
        const out = parseJsonState(
            JSON.stringify([
                [100, 1],
                [200, 2],
            ]),
        );
        expect(out).toEqual([
            {
                name: 'Series 1',
                data: [
                    [100, 1],
                    [200, 2],
                ],
            },
        ]);
    });

    it('normalizes object points { ts, val } / { time, value } / { x, y }', () => {
        const a = parseJsonState(JSON.stringify([{ ts: 1, val: 9 }]));
        const b = parseJsonState(JSON.stringify([{ time: 2, value: 8 }]));
        const c = parseJsonState(JSON.stringify([{ x: 3, y: 7 }]));
        expect(a[0].data).toEqual([[1, 9]]);
        expect(b[0].data).toEqual([[2, 8]]);
        expect(c[0].data).toEqual([[3, 7]]);
    });

    it('defaults a missing series name to "Series N"', () => {
        const out = parseJsonState(JSON.stringify({ series: [{ data: [[0, 0]] }, { data: [] }] }));
        expect(out[0].name).toBe('Series 1');
        expect(out[1].name).toBe('Series 2');
    });

    it('returns [] for empty / invalid JSON', () => {
        expect(parseJsonState(undefined)).toEqual([]);
        expect(parseJsonState('')).toEqual([]);
        expect(parseJsonState('nope')).toEqual([]);
        expect(parseJsonState('123')).toEqual([]);
    });
});

describe('parseSeriesConfig', () => {
    it('returns [] for empty input', () => {
        expect(parseSeriesConfig(undefined)).toEqual([]);
        expect(parseSeriesConfig('')).toEqual([]);
    });

    it('decodes a b64-encoded blob (round-trip with encodeBlob)', () => {
        const meta = [{ name: 'Temp', color: '#f00', type: 'line', yAxisIndex: 0 }];
        const out = parseSeriesConfig(encodeBlob(JSON.stringify(meta)));
        expect(out).toEqual(meta);
    });

    it('accepts a plain (non-prefixed) JSON array for backward compat', () => {
        const out = parseSeriesConfig(JSON.stringify([{ name: 'X' }]));
        expect(out).toEqual([{ name: 'X' }]);
    });

    it('returns [] for invalid JSON or non-array payload', () => {
        expect(parseSeriesConfig('b64:not-valid')).toEqual([]);
        expect(parseSeriesConfig(JSON.stringify({ nope: 1 }))).toEqual([]);
    });
});

describe('familyOf', () => {
    it('maps the cartesian family to "cartesian"', () => {
        expect(familyOf('cartesian')).toBe('cartesian');
        expect(familyOf(undefined)).toBe('cartesian');
    });
    it('tolerates legacy per-series chartType values without migration', () => {
        // Legacy widgets may still store 'line'/'bar'/'area' in chartType (ADR-0008 addendum).
        expect(familyOf('line' as EchartsChartType)).toBe('cartesian');
        expect(familyOf('bar' as EchartsChartType)).toBe('cartesian');
        expect(familyOf('area' as EchartsChartType)).toBe('cartesian');
    });
    it('maps the exotic types to their own family', () => {
        expect(familyOf('pie')).toBe('pie');
        expect(familyOf('gauge')).toBe('gauge');
        expect(familyOf('radar')).toBe('radar');
    });
});

describe('buildGeneratedOption — cartesian', () => {
    const legendData = (option: ReturnType<typeof buildGeneratedOption>): unknown[] | undefined =>
        (option.legend as { data?: unknown[] } | undefined)?.data;

    it('builds legend.data from (meta → series → fallback) names and maps series 1:1', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'ignored-when-meta-has-name', data: [[1, 2]] },
                { name: 'Second', data: [[1, 3]] },
            ],
            meta: [{ name: 'First' }],
            p: P,
        });
        expect(legendData(option)).toEqual(['First', 'Second']);
        expect(option.series).toHaveLength(2);
    });

    it('falls back to "Series N" when neither meta nor series provides a name', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: '', data: [[0, 0]] }],
            meta: [],
            p: P,
        });
        expect(legendData(option)).toEqual(['Series 1']);
    });

    it('applies meta colour to the series entry', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [] }],
            meta: [{ name: 'A', color: '#abc' }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.color).toBe('#abc');
        expect(first.itemStyle).toEqual({ color: '#abc' });
    });

    it('provides a time xAxis and a single value yAxis by default', () => {
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(option.xAxis).toMatchObject({ type: 'time' });
        const ya = option.yAxis as unknown as { type: string }[];
        expect(ya).toHaveLength(1);
        expect(ya[0].type).toBe('value');
    });

    it('adds a second yAxis only when a series targets yAxisIndex 1', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 1 }],
            p: P,
        });
        const ya = option.yAxis as unknown as unknown[];
        expect(ya).toHaveLength(2);
    });

    it('maps area type to a line series with an areaStyle', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'area' }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.type).toBe('line');
        expect(first.areaStyle).toBeDefined();
    });

    it('emits a dataZoom slider+inside when both enabled', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [],
            p: { ...P, dataZoomSlider: true, dataZoomInside: true },
        });
        const zoom = (option as unknown as { dataZoom?: unknown[] }).dataZoom;
        expect(Array.isArray(zoom)).toBe(true);
        expect((zoom as unknown[]).some(d => (d as Record<string, unknown>).type === 'slider')).toBe(true);
        expect((zoom as unknown[]).some(d => (d as Record<string, unknown>).type === 'inside')).toBe(true);
    });
});

describe('buildGeneratedOption — pie', () => {
    it('aggregates each OID-series to one slice (latest by default)', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 10],
                        [2, 20],
                        [3, 30],
                    ],
                },
                { name: 'B', data: [[1, 5]] },
            ],
            meta: [],
            p: { ...P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
        });
        const series = option.series as unknown as { data: { name: string; value: number | null }[] }[];
        const slices = series[0].data;
        expect(slices.map(s => s.value)).toEqual([30, 5]);
    });

    it('sums slice values when aggregate = sum', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 10],
                        [2, 20],
                    ],
                },
            ],
            meta: [],
            p: { ...P, pie: { aggregate: 'sum', innerRadius: 0, rose: 'none', label: 'namePercent' } },
        });
        const series = option.series as unknown as { data: { value: number | null }[] }[];
        expect(series[0].data[0].value).toBe(30);
    });
});

describe('buildGeneratedOption — gauge', () => {
    it('builds a single gauge series with min/max and the scalar value', () => {
        const option = buildGeneratedOption({
            family: 'gauge',
            value: 72,
            meta: [],
            p: { ...P, gauge: { min: 0, max: 100, progressWidth: 14, unit: '%' } },
        });
        const series = option.series as unknown as {
            type: string;
            min: number;
            max: number;
            data: { value: unknown }[];
        }[];
        expect(series[0].type).toBe('gauge');
        expect(series[0].min).toBe(0);
        expect(series[0].max).toBe(100);
        expect(series[0].data[0].value).toBe(72);
    });

    it('renders "--" when there is no value', () => {
        const option = buildGeneratedOption({ family: 'gauge', value: null, meta: [], p: P });
        const series = option.series as unknown as { data: { value: unknown }[] }[];
        expect(series[0].data[0].value).toBe('--');
    });

    it('renders the target as a two-zone track colour at the target fraction', () => {
        const option = buildGeneratedOption({
            family: 'gauge',
            value: 40,
            meta: [],
            p: { ...P, gauge: { min: 0, max: 100, target: 60, unit: '%' } },
        });
        const series = option.series as unknown as {
            axisLine: { lineStyle: { color?: unknown } };
        }[];
        expect(series[0].axisLine.lineStyle.color).toEqual([
            [0.6, '#4caf50'],
            [1, '#ff9800'],
        ]);
    });

    it('omits target zones when no target is set', () => {
        const option = buildGeneratedOption({
            family: 'gauge',
            value: 40,
            meta: [],
            p: { ...P, gauge: { min: 0, max: 100, unit: '%' } },
        });
        const series = option.series as unknown as { axisLine: { lineStyle: { color?: unknown } } }[];
        expect(series[0].axisLine.lineStyle.color).toBeUndefined();
    });
});

describe('buildGeneratedOption — radar', () => {
    it('builds indicators from config and one polygon from the values', () => {
        const option = buildGeneratedOption({
            family: 'radar',
            values: [10, 20, 30],
            meta: [],
            p: {
                ...P,
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [
                        { name: 'A', max: 100, oid: 'a' },
                        { name: 'B', max: 100, oid: 'b' },
                        { name: 'C', max: 100, oid: 'c' },
                    ],
                },
            },
        });
        const radar = (option as unknown as { radar: { indicator: { name: string }[] } }).radar;
        expect(radar.indicator.map(i => i.name)).toEqual(['A', 'B', 'C']);
        const series = option.series as unknown as { type: string; data: { value: (number | null)[] }[] }[];
        expect(series[0].type).toBe('radar');
        expect(series[0].data[0].value).toEqual([10, 20, 30]);
    });
});
