/**
 * Unit tests for the option builders + config parsers (the G side, ADR-0007/0008).
 *
 * @module EchartsCollectionWidget/optionBuilder.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../lib/encoding';
import {
    buildGeneratedOption,
    familyOf,
    parseJsonSeriesStyle,
    parseJsonState,
    parseSeriesConfig,
    parseUserJson,
} from './optionBuilder';
import type { ChartSeries, PresentationConfig } from './optionBuilders/types';
import type { EchartsChartType, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

/** Minimal cartesian presentation config for tests. */
const P: PresentationConfig = {
    legendShow: true,
    legendPos: 'topCenter',
    tooltipTrigger: 'axis',
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
    cartesianType: 'line',
    yAxes: [{}],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    palette: ['#1', '#2', '#3'],
    themeTokens: {
        primary: '#p',
        secondary: '#s',
        success: '#su',
        warning: '#w',
        error: '#e',
        info: '#i',
        divider: '#d',
        textPrimary: '#tp',
        textSecondary: '#ts',
    },
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
        expect(out.series).toHaveLength(2);
        expect(out.error).toBeUndefined();
        expect(out.series[0]).toEqual({
            name: 'A',
            data: [
                [1, 10],
                [2, 20],
            ],
        });
        expect(out.series[1]).toEqual({ name: 'B', data: [[1, 30]] });
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
        expect(out.series).toEqual([
            {
                name: 'Series 1',
                data: [
                    [1, 5],
                    [2, 6],
                ],
            },
        ]);
    });

    it('parses a bare points array into a single series', () => {
        const out = parseJsonState(
            JSON.stringify([
                [100, 1],
                [200, 2],
            ]),
        );
        expect(out.series).toEqual([
            {
                name: 'Series 1',
                data: [
                    [100, 1],
                    [200, 2],
                ],
            },
        ]);
    });

    it('parses a bare array of series objects into multiple series (ADR-0011)', () => {
        const out = parseJsonState(
            JSON.stringify([
                { name: 'PV', data: [[0, 1]] },
                { name: 'Grid', data: [[0, 2]] },
            ]),
        );
        expect(out.series).toHaveLength(2);
        expect(out.series.map(s => s.name)).toEqual(['PV', 'Grid']);
        expect(out.series[0].data).toEqual([[0, 1]]);
    });

    it('treats a bare array of point objects (no array `data`) as one series', () => {
        const out = parseJsonState(
            JSON.stringify([
                { ts: 1, val: 9 },
                { ts: 2, val: 8 },
            ]),
        );
        expect(out.series).toHaveLength(1);
        expect(out.series[0].data).toEqual([
            [1, 9],
            [2, 8],
        ]);
    });

    it('normalizes object points { ts, val } / { time, value } / { x, y }', () => {
        const a = parseJsonState(JSON.stringify([{ ts: 1, val: 9 }]));
        const b = parseJsonState(JSON.stringify([{ time: 2, value: 8 }]));
        const c = parseJsonState(JSON.stringify([{ x: 3, y: 7 }]));
        expect(a.series[0].data).toEqual([[1, 9]]);
        expect(b.series[0].data).toEqual([[2, 8]]);
        expect(c.series[0].data).toEqual([[3, 7]]);
    });

    it('defaults a missing series name to "Series N"', () => {
        const out = parseJsonState(JSON.stringify({ series: [{ data: [[0, 0]] }, { data: [] }] }));
        expect(out.series[0].name).toBe('Series 1');
        expect(out.series[1].name).toBe('Series 2');
    });

    it('returns empty series (no error) for empty / non-object / non-array JSON', () => {
        expect(parseJsonState(undefined).series).toEqual([]);
        expect(parseJsonState('').series).toEqual([]);
        expect(parseJsonState('123').series).toEqual([]); // valid JSON primitive, not chart data
        expect(parseJsonState(undefined).error).toBeUndefined();
    });

    it('surfaces a parse error for malformed JSON instead of a silent blank chart (ADR-0011)', () => {
        const out = parseJsonState('{ not json');
        expect(out.series).toEqual([]);
        expect(out.error).toBeTruthy();
    });
});

describe('parseJsonSeriesStyle', () => {
    it('returns {} for empty input', () => {
        expect(parseJsonSeriesStyle(undefined)).toEqual({});
        expect(parseJsonSeriesStyle('')).toEqual({});
    });

    it('decodes a name-keyed overlay blob', () => {
        const blob = encodeBlob(JSON.stringify({ PV: { color: '#f00', type: 'bar' } }));
        expect(parseJsonSeriesStyle(blob)).toEqual({ PV: { color: '#f00', type: 'bar' } });
    });

    it('returns {} for an invalid blob', () => {
        expect(parseJsonSeriesStyle('not-valid-base64-json')).toEqual({});
    });
});

describe('JSON-mode name-keyed overlay (ADR-0011)', () => {
    it('cartesian builder applies the per-name overlay (type override → mixed line/bar)', () => {
        const series: ChartSeries[] = [
            { name: 'PV', data: [[0, 1]] },
            { name: 'Grid', data: [[0, 2]] },
        ];
        const meta: EchartsSeriesMeta[] = [
            { color: '#f00', type: 'line' },
            { color: '#0f0', type: 'bar' },
        ];
        const g = buildGeneratedOption({ family: 'cartesian', series, meta, p: P });
        const built = g.series as { name: string; type: string; color: string }[];
        expect(built[0].type).toBe('line');
        expect(built[0].color).toBe('#f00');
        expect(built[1].type).toBe('bar');
        expect(built[1].color).toBe('#0f0');
    });

    it('pie builder applies the per-name slice colour', () => {
        const series: ChartSeries[] = [
            { name: 'PV', data: [[0, 10]] },
            { name: 'Grid', data: [[0, 20]] },
        ];
        const meta: EchartsSeriesMeta[] = [{ color: '#f00' }, { color: '#0f0' }];
        const g = buildGeneratedOption({ family: 'pie', series, meta, p: P });
        const data = (g.series as unknown as { data: { name: string; itemStyle: { color: string } }[] }[])[0].data;
        expect(data[0].itemStyle.color).toBe('#f00');
        expect(data[1].itemStyle.color).toBe('#0f0');
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
    it('maps the cartesian chart types to "cartesian"', () => {
        expect(familyOf('line')).toBe('cartesian');
        expect(familyOf('bar')).toBe('cartesian');
        expect(familyOf(undefined)).toBe('cartesian');
    });
    it('tolerates the legacy family-only "cartesian" and removed "area" values without migration', () => {
        // r2 stored the family-only value 'cartesian'; r3 stores the concrete chart type again;
        // r4 removed 'area' as a type — both old values still render as the cartesian family (line).
        expect(familyOf('cartesian' as EchartsChartType)).toBe('cartesian');
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

    it('emits one yAxis per configured axis (ADR-0012): alignTicks opt-in (off by default), position defaults', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 1 }],
            p: { ...P, yAxes: [{ name: 'kW' }, { name: '°C', position: 'right', color: '#f00' }] },
        });
        const ya = option.yAxis as unknown as {
            name?: string;
            position?: string;
            alignTicks?: boolean;
            axisLine?: { lineStyle: { color: string } };
        }[];
        expect(ya).toHaveLength(2);
        expect(ya[0].position).toBe('left'); // axis 0 defaults left
        expect(ya[1].position).toBe('right'); // explicit
        expect(ya[0].alignTicks).toBe(false); // explicit opt-in, off by default (ADR-0034)
        expect(ya[1].alignTicks).toBe(false);
        expect(ya[0].name).toBe('kW');
        // per-axis colour paints the axis line (multi-axis legibility)
        expect(ya[1].axisLine?.lineStyle.color).toBe('#f00');
    });

    it('defaults an axis colour to its first bound series colour (ADR-0018)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [
                { name: 'A', color: '#abc', yAxisIndex: 0 },
                { name: 'B', color: '#def', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{ name: 'A-axis' }, { name: 'B-axis' }] },
        });
        const ya = option.yAxis as unknown as {
            axisLine?: { lineStyle: { color: string } };
            nameTextStyle?: { color: string };
        }[];
        // No explicit axis colour → each axis inherits its bound series' colour (line + name).
        expect(ya[0].axisLine?.lineStyle.color).toBe('#abc');
        expect(ya[0].nameTextStyle?.color).toBe('#abc');
        expect(ya[1].axisLine?.lineStyle.color).toBe('#def');
    });

    it('an explicit axis colour wins over the series-colour default (ADR-0018)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', color: '#abc', yAxisIndex: 0 }],
            p: { ...P, yAxes: [{ color: '#explicit' }] },
        });
        const ya = option.yAxis as unknown as { axisLine?: { lineStyle: { color: string } } }[];
        expect(ya[0].axisLine?.lineStyle.color).toBe('#explicit');
    });

    it('defaults an axis name to its first bound series name (ADR-0018)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'Power', data: [[1, 2]] },
                { name: 'Temp', data: [[1, 3]] },
            ],
            meta: [
                { name: 'Power', yAxisIndex: 0 },
                { name: 'Temp', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{}, {}] },
        });
        const ya = option.yAxis as unknown as { name?: string }[];
        // No explicit axis name → each axis inherits its bound series' effective name.
        expect(ya[0].name).toBe('Power');
        expect(ya[1].name).toBe('Temp');
    });

    it('an explicit axis name wins over the series-name default (ADR-0018)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'Power', data: [[1, 2]] }],
            meta: [{ name: 'Power', yAxisIndex: 0 }],
            p: { ...P, yAxes: [{ name: 'kW' }] },
        });
        const ya = option.yAxis as unknown as { name?: string }[];
        expect(ya[0].name).toBe('kW');
    });

    it('an empty-string axis name falls back to the bound series name (not frozen out by ??)', () => {
        // Regression: a.name === '' (legacy yName:'' migration, or a name typed then cleared) must NOT
        // shadow the inherited series name. `??` let '' through and the truthy guard dropped it, so the
        // axis name never rendered — even though the configurator showed it as the field placeholder.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'Wohnzimmer', data: [[1, 2]] }],
            meta: [{ name: 'Wohnzimmer', yAxisIndex: 0 }],
            p: { ...P, yAxes: [{ name: '' }] },
        });
        const ya = option.yAxis as unknown as { name?: string }[];
        expect(ya[0].name).toBe('Wohnzimmer');
    });

    it('single axis: alignTicks defaults off; grid flush with full label+name containment', () => {
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        const ya = option.yAxis as unknown as { alignTicks?: boolean }[];
        expect(ya).toHaveLength(1);
        expect(ya[0].alignTicks).toBe(false);
        const grid = option.grid as { outerBoundsContain?: string };
        expect(grid.outerBoundsContain).toBe('all'); // reserves tick labels AND axis names
    });

    it('emits axisTick.show:true by default (a time xAxis makes echarts auto-hide value-axis ticks)', () => {
        // echarts' value-axis axisTick default is 'auto', which resolves to FALSE when the paired
        // axis is time/category. The builder must emit show:true explicitly so the "Ticks zeigen"
        // switch (which defaults on) and the chart agree — otherwise ticks are absent on first render.
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        const ya = option.yAxis as unknown as { axisTick?: { show?: boolean } }[];
        expect(ya[0].axisTick?.show).toBe(true);
    });

    it('honours an explicit axisTick:false', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 0 }],
            p: { ...P, yAxes: [{ axisTick: false }] },
        });
        const ya = option.yAxis as unknown as { axisTick?: { show?: boolean } }[];
        expect(ya[0].axisTick?.show).toBe(false);
    });

    it('grid is flush + contains labels AND names: left/right 0 + outerBoundsContain all (ADR-0024)', () => {
        // `outerBoundsContain:'all'` (the modern replacement for the deprecated `containLabel:true`,
        // which mapped to 'axisLabel' and reserved tick labels but NOT the axis name) reserves tick
        // labels + axis names + offset-axis labels — so the outermost offset axis NAME no longer
        // slips to x<0 at grid 0. grid.left/right = 0 + outerBoundsMode 'same' = flush edges. The grid
        // is identical regardless of axis count: the reservation is echarts' runtime job, not the
        // builder's. Regression for both ADR-0022's '+maxOffset' dead margin AND containLabel's name
        // clip.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
                { name: 'C', data: [[1, 4]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
                { name: 'C', yAxisIndex: 2 },
            ],
            p: { ...P, yAxes: [{}, { position: 'right' }, {}] },
        });
        const grid = option.grid as {
            left?: unknown;
            right?: unknown;
            outerBoundsMode?: string;
            outerBoundsContain?: string;
            containLabel?: boolean;
        };
        expect(grid.left).toBe(0);
        expect(grid.right).toBe(0);
        expect(grid.outerBoundsMode).toBe('same');
        expect(grid.outerBoundsContain).toBe('all');
        expect(grid.containLabel).toBeUndefined(); // deprecated; superseded by outerBoundsContain
    });

    it('empty yAxes falls back to a single default axis (last-axis-deletable, builder guarantees ≥1)', () => {
        // The editor allows deleting every axis; the builder must still emit one value axis so the
        // chart renders (echarts errors on yAxis:[]).
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 0 }],
            p: { ...P, yAxes: [] },
        });
        const ya = option.yAxis as unknown as { type?: string; splitLine?: { show?: boolean } }[];
        expect(ya).toHaveLength(1);
        expect(ya[0].type).toBe('value');
        expect(ya[0].splitLine?.show).toBe(true); // default axis 0 shows splitlines
    });

    it('tolerates legacy type:"area" as a line series with a flat areaStyle', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'area' as unknown as undefined }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.type).toBe('line');
        expect(first.areaStyle).toEqual({ opacity: 0.15 });
    });

    it('renders a flat area fill at the configured opacity (ADR-0008 r4 area mode)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'line', area: 'flat', areaOpacity: 0.3 }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.areaStyle).toEqual({ opacity: 0.3 });
    });

    it('renders a gradient area fill from a CSS gradient (honours the angle)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [
                {
                    name: 'A',
                    type: 'line',
                    area: 'gradient',
                    areaGradient: 'linear-gradient(180deg, #8ec6ad 0%, #ffe 100%)',
                },
            ],
            p: P,
        });
        const first = (option.series as unknown[])[0] as { areaStyle?: { opacity: number; color: unknown } };
        expect(first.areaStyle).toBeDefined();
        expect(first.areaStyle!.color).toMatchObject({
            type: 'linear',
            x: 0.5,
            y: 0,
            x2: 0.5,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#8ec6ad' },
                { offset: 1, color: '#ffe' },
            ],
        });
    });

    it('defaults smooth to false (matches ECharts Basic Line, not the smoothed example)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'line' }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.smooth).toBe(false);
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

    it('folds a per-series raw override into the series entry (ADR-0015); GUI wins on collision', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [
                {
                    name: 'A',
                    color: '#abc',
                    raw: '{ "markPoint": { "data": [{ "type": "max" }] }, "color": "#xxx" }',
                },
            ],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.markPoint).toEqual({ data: [{ type: 'max' }] }); // raw supplements an uncovered key
        expect(first.color).toBe('#abc'); // GUI wins the collision (raw's #xxx ignored)
    });

    it('always emits legend/tooltip/grid/xAxis/yAxis — show:false when off, never omitted (ADR-0016)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [],
            p: { ...P, legendShow: false, tooltipTrigger: 'none' },
        });
        // legend off + tooltip none → still PRESENT with show:false (never omitted: under default-merge
        // an omitted component is kept stale). grid/xAxis/yAxis always present. yAxis is also in
        // replaceMerge now (ADR-0016 addendum) — the builder still emits the full array so a replace
        // removes deleted axes cleanly instead of leaving a merge-retained ghost.
        expect((option.legend as { show?: boolean }).show).toBe(false);
        expect((option.tooltip as { show?: boolean }).show).toBe(false);
        expect(option.grid).toBeDefined();
        expect(option.xAxis).toBeDefined();
        expect(option.yAxis).toBeDefined();
    });

    it('multi-axis with mixed format → alignTicks OFF (explicit opt-in, ADR-0034)', () => {
        // °C vs. % — different units; and regardless, alignment is now opt-in, never a hidden default.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{ format: '{value} kW' }, { format: '{value} %' }] },
        });
        const ya = option.yAxis as unknown as { alignTicks?: boolean }[];
        expect(ya[0].alignTicks).toBe(false);
        expect(ya[1].alignTicks).toBe(false);
    });

    it('multi-axis with matching format → alignTicks still OFF (opt-in supersedes the ADR-0023 heuristic, ADR-0034)', () => {
        // Same format used to flip the smart-default ON; alignment is now explicit opt-in only.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{ format: '{value} °C' }, { format: '{value} °C' }] },
        });
        const ya = option.yAxis as unknown as { alignTicks?: boolean }[];
        expect(ya[0].alignTicks).toBe(false);
        expect(ya[1].alignTicks).toBe(false);
    });

    it('honours an explicit alignTicks:true per axis (opt-in, ADR-0034)', () => {
        // Off unless set; an explicit true on one axis is emitted, the unset axis stays off.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{}, { alignTicks: true }] },
        });
        const ya = option.yAxis as unknown as { alignTicks?: boolean }[];
        expect(ya[0].alignTicks).toBe(false); // not set → off
        expect(ya[1].alignTicks).toBe(true); // explicit opt-in honoured
    });

    it('attaches a threshold to the series on its own axis, not stur entries[0] (ADR-0023)', () => {
        // A 2000 W threshold must hang on the Power series (axis 1), not on Temp (entries[0]) —
        // otherwise it draws on the 0–40 °C axis and disappears at the top.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'Temp', data: [[1, 20]] },
                { name: 'Power', data: [[1, 2000]] },
            ],
            meta: [
                { name: 'Temp', yAxisIndex: 0 },
                { name: 'Power', yAxisIndex: 1 },
            ],
            p: {
                ...P,
                yAxes: [
                    { min: 0, max: 40 },
                    { min: 0, max: 5000, position: 'right' },
                ],
                markLines: [{ value: 2000, yAxisIndex: 1 }],
            },
        });
        const series = option.series as unknown as {
            name: string;
            markLine?: { data: { yAxis: number }[] };
        }[];
        const host = series.find(s => s.markLine);
        expect(host?.name).toBe('Power'); // hosted on the axis-1 series
        expect(host?.markLine?.data[0].yAxis).toBe(2000);
        expect(series[0].markLine).toBeUndefined(); // Temp (entries[0]) carries no markLine
    });

    it('a legacy threshold without yAxisIndex defaults to axis 0 (entries[0])', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 0 }],
            p: { ...P, markLines: [{ value: 10 }] }, // no yAxisIndex
        });
        const first = (option.series as unknown[])[0] as { markLine?: { data: { yAxis: number }[] } };
        expect(first.markLine?.data[0].yAxis).toBe(10);
    });
});

describe('buildGeneratedOption — cartesian yAxis raw + name placement (ADR-0037)', () => {
    it('folds the per-axis raw UNDER the built entry — the card wins collisions', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', yAxisIndex: 0 }],
            p: {
                ...P,
                yAxes: [
                    {
                        min: 0,
                        splitLine: true,
                        format: '{value} kW',
                        raw: JSON.stringify({
                            min: 50, // collides with the card's min → card wins
                            splitLine: { show: false }, // collides with the card's switch → card wins
                            axisLabel: { formatter: '{value} W' }, // collides with format → card wins
                        }),
                    },
                ],
            },
        });
        const ya = option.yAxis as unknown as {
            min?: number;
            splitLine?: { show?: boolean };
            axisLabel?: { formatter?: string };
        }[];
        expect(ya[0].min).toBe(0);
        expect(ya[0].splitLine?.show).toBe(true);
        expect(ya[0].axisLabel?.formatter).toBe('{value} kW');
    });

    it('lets builder-uncovered keys merge through (the escape-hatch promise)', () => {
        const raw = {
            axisLabel: { fontFamily: 'JetBrains Mono', fontSize: 14 },
            nameTextStyle: { fontWeight: 'bold' },
            minorTick: { show: true, splitNumber: 5 },
            minorSplitLine: { show: true },
            splitArea: { show: true },
            logBase: 2,
            boundaryGap: ['5%', '5%'],
            maxInterval: 25,
            inverse: true,
            axisLine: { symbol: ['none', 'arrow'] },
            axisPointer: { show: true, label: { show: true } },
        };
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, yAxes: [{ raw: JSON.stringify(raw) }] },
        });
        expect(option.yAxis as unknown[]).toHaveLength(1);
        const ya = (option.yAxis as unknown as unknown[])[0] as Record<string, unknown>;
        expect(ya.axisLabel).toMatchObject({ fontFamily: 'JetBrains Mono', fontSize: 14 });
        expect(ya.nameTextStyle).toMatchObject({ fontWeight: 'bold' });
        expect(ya.minorTick).toEqual({ show: true, splitNumber: 5 });
        expect(ya.minorSplitLine).toEqual({ show: true });
        expect(ya.splitArea).toEqual({ show: true });
        expect(ya.logBase).toBe(2);
        expect(ya.boundaryGap).toEqual(['5%', '5%']);
        expect(ya.maxInterval).toBe(25);
        expect(ya.inverse).toBe(true);
        expect(ya.axisLine).toMatchObject({ symbol: ['none', 'arrow'] });
        expect(ya.axisPointer).toEqual({ show: true, label: { show: true } });
    });

    it('ignores invalid raw JSON silently (validity is surfaced in the editor)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, yAxes: [{ raw: 'not json {', name: 'kW' }] },
        });
        const ya = (option.yAxis as unknown as unknown[])[0] as Record<string, unknown>;
        expect(ya.name).toBe('kW');
        expect(Object.keys(ya)).not.toContain('logBase');
    });

    it('the colour trio wins its collisions: raw axisLabel.color/nameTextStyle.color lose to the card colour', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                yAxes: [
                    {
                        color: '#f00',
                        raw: JSON.stringify({
                            axisLabel: { color: '#raw-c', fontFamily: 'mono' },
                            nameTextStyle: { color: '#raw-n', fontWeight: 'bold' },
                            axisLine: { lineStyle: { color: '#raw-l', type: 'dashed' } },
                        }),
                    },
                ],
            },
        });
        const ya = (option.yAxis as unknown as unknown[])[0] as {
            axisLabel?: Record<string, unknown>;
            nameTextStyle?: Record<string, unknown>;
            axisLine?: { lineStyle?: Record<string, unknown> };
        };
        // Managed colour leaves: the card (inherited series colour absent → explicit axis colour) wins.
        expect(ya.axisLabel?.color).toBe('#f00');
        expect(ya.nameTextStyle?.color).toBe('#f00');
        expect(ya.axisLine?.lineStyle?.color).toBe('#f00');
        // Free siblings merge through — that is the escape hatch's whole promise.
        expect(ya.axisLabel?.fontFamily).toBe('mono');
        expect(ya.nameTextStyle?.fontWeight).toBe('bold');
        expect(ya.axisLine?.lineStyle?.type).toBe('dashed');
    });

    it('raw merges leaf-wise into GUI sub-objects (splitLine.lineStyle survives the switch)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                yAxes: [{ splitLine: true, raw: '{ "splitLine": { "lineStyle": { "type": "dashed" } } }' }],
            },
        });
        const ya = (option.yAxis as unknown as unknown[])[0] as {
            splitLine?: { show?: boolean; lineStyle?: { type?: string } };
        };
        expect(ya.splitLine).toEqual({ show: true, lineStyle: { type: 'dashed' } });
    });

    it('nameLocation/nameGap are card-driven, defaulting to the former hard-emit values', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                yAxes: [{}, { nameLocation: 'end', nameGap: 42 }],
            },
        });
        const ya = option.yAxis as unknown as { nameLocation?: string; nameGap?: number }[];
        expect(ya[0]).toMatchObject({ nameLocation: 'middle', nameGap: 18 });
        expect(ya[1]).toMatchObject({ nameLocation: 'end', nameGap: 42 });
    });

    it('raw cannot override nameLocation/nameGap once they are card fields', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, yAxes: [{ raw: '{ "nameLocation": "start", "nameGap": 99 }' }] },
        });
        const ya = (option.yAxis as unknown as unknown[])[0] as { nameLocation?: string; nameGap?: number };
        expect(ya.nameLocation).toBe('middle');
        expect(ya.nameGap).toBe(18);
    });
});

describe('buildGeneratedOption — cartesian xAxis (ADR-0035)', () => {
    it('always emits the time axis with the honest echarts defaults (splitLine off, ticks on)', () => {
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        // Empty config = a plain time axis, pixel-identical to the pre-ADR-0035 hardcode:
        // echarts' time-axis splitLine default is false, and `axisTick.show:'auto'` resolves
        // TRUE for a time-x paired with a value-y — so both booleans are always emitted.
        expect(option.xAxis).toEqual({
            type: 'time',
            splitLine: { show: false },
            axisTick: { show: true },
        });
    });

    it('emits name (middle placement) + label formatter + one-colour styling when configured', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { name: 'Zeit', format: '{HH}:{mm}', color: '#0af' } },
        });
        expect(option.xAxis).toEqual({
            type: 'time',
            name: 'Zeit',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: { formatter: '{HH}:{mm}', color: '#0af' },
            axisLine: { show: true, lineStyle: { color: '#0af' } },
            nameTextStyle: { color: '#0af' },
            splitLine: { show: false },
            axisTick: { show: true },
        });
    });

    it('honours explicit switches (splitLine on, ticks off)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { splitLine: true, axisTick: false } },
        });
        expect(option.xAxis).toMatchObject({ splitLine: { show: true }, axisTick: { show: false } });
    });

    it('emits splitNumber/minInterval/nameRotate/offset only when set (unset = echarts defaults)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { splitNumber: 4, minInterval: 3_600_000, nameRotate: -45, offset: 24 } },
        });
        expect(option.xAxis).toMatchObject({
            splitNumber: 4,
            minInterval: 3_600_000,
            nameRotate: -45,
            offset: 24,
        });
        // And the unset case emits none of them (the always-emit booleans aside).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).not.toHaveProperty('splitNumber');
        expect(bare.xAxis).not.toHaveProperty('minInterval');
        expect(bare.xAxis).not.toHaveProperty('nameRotate');
        expect(bare.xAxis).not.toHaveProperty('offset');
        expect(bare.xAxis).not.toHaveProperty('axisLabel');
    });

    it('emits axisLabel.rotate when the label rotation is set (angled time labels)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { labelRotate: -30 } },
        });
        expect(option.xAxis).toMatchObject({ axisLabel: { rotate: -30 } });
    });

    it('x raw merges UNDER the built entry — free keys flow through, card-set keys win (ADR-0037 addendum)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: {
                ...P,
                xAxis: { splitNumber: 4, raw: '{ "splitNumber": 99, "axisTick": { "length": 9 }, "z": 4 }' },
            },
        });
        expect(option.xAxis).toMatchObject({ splitNumber: 4, axisTick: { length: 9 }, z: 4 });
        // No raw → the entry stands alone (no merge husk).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).not.toHaveProperty('z');
    });

    it('an offset detaches the axis line from the Y-zero (axisLine.onZero:false) — SSR-verified', () => {
        // Default axisLine.onZero:true pins the LINE to the first Y-axis' zero (= the grid floor
        // for positive data) while ticks/labels follow the offset — the axis visually splits.
        // Only with onZero:false does the whole axis (line+ticks+labels) move together.
        const withOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { offset: 24 } },
        });
        expect(withOffset.xAxis).toMatchObject({ offset: 24, axisLine: { show: true, onZero: false } });
        // With a colour set, the offset must not clobber the lineStyle (and vice versa).
        const withBoth = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { offset: 24, color: '#0af' } },
        });
        expect(withBoth.xAxis).toMatchObject({
            offset: 24,
            axisLine: { show: true, onZero: false, lineStyle: { color: '#0af' } },
        });
        // Without an offset the rendering stays exactly as before — no axisLine without a colour,
        // no onZero switch (onZero:true is the deliberate default: negative data keeps the line
        // at the y=0 level). An explicit 0 counts as unset (it IS the echarts default — a cleared
        // field must also restore the onZero default).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).not.toHaveProperty('axisLine');
        const zero = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { offset: 0 } },
        });
        expect(zero.xAxis).not.toHaveProperty('offset');
        expect(zero.xAxis).not.toHaveProperty('axisLine');
        const colored = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { color: '#0af' } },
        });
        expect(colored.xAxis).not.toHaveProperty('offset');
        expect((colored.xAxis as Record<string, { onZero?: boolean }>).axisLine).not.toHaveProperty('onZero');
    });
});

describe('buildGeneratedOption — theme-token defaults (ADR-0027)', () => {
    it('a threshold without an explicit colour inherits the divider token', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, markLines: [{ id: '1', value: 10 }] },
        });
        const first = (option.series as unknown[])[0] as {
            markLine?: { data: { lineStyle: { color: string } }[] };
        };
        expect(first.markLine?.data[0].lineStyle.color).toBe('#d'); // P.themeTokens.divider
    });

    it('the visualMap ramp defaults to the theme token ramp when no colours are set', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, visualMap: { enabled: true, min: 0, max: 100, colors: [] } },
        });
        const vm = (option as { visualMap?: { inRange?: { color: string[] } } }).visualMap;
        expect(vm?.inRange?.color).toEqual(['#p', '#su', '#w', '#e']); // primary→success→warning→error
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

    it('folds a whole-pie series raw override into the pie series (ADR-0017)', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 10]] }],
            meta: [],
            p: {
                ...P,
                pie: {
                    aggregate: 'latest',
                    innerRadius: 0,
                    rose: 'none',
                    label: 'namePercent',
                    raw: '{ "startAngle": 0, "selectedMode": "single" }',
                },
            },
        });
        const s = (option.series as unknown[])[0] as { startAngle: number; selectedMode: string };
        expect(s.startAngle).toBe(0);
        expect(s.selectedMode).toBe('single');
    });

    it('folds a per-slice raw override into each slice (ADR-0017)', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 10]] }],
            meta: [{ raw: '{ "itemStyle": { "borderRadius": 6 }, "selected": true }' }],
            p: { ...P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
        });
        const s = (
            option.series as unknown as {
                data: { itemStyle: { borderRadius: number }; selected: boolean }[];
            }[]
        )[0];
        // GUI owns itemStyle.color; the raw adds borderRadius (uncovered). selected is uncovered.
        expect(s.data[0].itemStyle.borderRadius).toBe(6);
        expect(s.data[0].selected).toBe(true);
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
        // Target zones are theme-derived (ADR-0027): success up to the fraction, warning beyond.
        expect(series[0].axisLine.lineStyle.color).toEqual([
            [0.6, '#su'],
            [1, '#w'],
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

    it('emits detail.formatter only when a unit is set (ADR-0017 collision-hygiene)', () => {
        const withUnit = buildGeneratedOption({
            family: 'gauge',
            value: 5,
            meta: [],
            p: { ...P, gauge: { min: 0, max: 100, unit: '%' } },
        });
        const detailWith = ((withUnit.series as unknown[])[0] as { detail?: { formatter?: string } }).detail;
        expect(detailWith?.formatter).toBe('{value} %');

        // No unit → formatter omitted (echarts defaults to "{value}"): transparent, and the key is free
        // for a per-series raw override (the detail.formatter template).
        const noUnit = buildGeneratedOption({ family: 'gauge', value: 5, meta: [], p: P });
        const detailNone = ((noUnit.series as unknown[])[0] as { detail?: { formatter?: string } }).detail;
        expect(detailNone?.formatter).toBeUndefined();
    });

    it('folds a per-series raw override into the gauge series (ADR-0017); GUI wins on collision', () => {
        const option = buildGeneratedOption({
            family: 'gauge',
            value: 50,
            meta: [{ raw: '{ "axisLine": { "lineStyle": { "color": [[0.5, "#f00"]] } }, "min": 999 }' }],
            p: { ...P, gauge: { min: 0, max: 100 } },
        });
        const s = (option.series as unknown[])[0] as {
            axisLine: { lineStyle: { color: unknown } };
            min: number;
        };
        // No target → GUI emits no axisLine.lineStyle.color → the raw's colour zones apply (uncovered).
        expect(s.axisLine.lineStyle.color).toEqual([[0.5, '#f00']]);
        // GUI owns min → the raw's 999 is ignored (GUI wins the collision).
        expect(s.min).toBe(0);
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

    it('puts per-polygon style at the series level, not on data[0] (ADR-0017)', () => {
        const option = buildGeneratedOption({
            family: 'radar',
            values: [1, 2],
            meta: [{ color: '#abc' }],
            p: {
                ...P,
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [
                        { name: 'A', max: 100, oid: 'a' },
                        { name: 'B', max: 100, oid: 'b' },
                    ],
                },
            },
        });
        const s = (option.series as unknown[])[0] as {
            lineStyle?: { color: string };
            itemStyle?: { color: string };
            areaStyle?: { opacity: number };
            data: { value: number[]; lineStyle?: unknown; itemStyle?: unknown }[];
        };
        // Style inherited from series level (so a series raw override can reach it).
        expect(s.lineStyle?.color).toBe('#abc');
        expect(s.itemStyle?.color).toBe('#abc');
        expect(s.areaStyle?.opacity).toBe(0.2);
        // data[0] carries only value (+ name); no redundant style copy that would shadow a raw.
        expect(s.data[0].lineStyle).toBeUndefined();
        expect(s.data[0].itemStyle).toBeUndefined();
        expect(s.data[0].value).toEqual([1, 2]);
    });

    it('folds a per-series raw override into the radar series (ADR-0017)', () => {
        const option = buildGeneratedOption({
            family: 'radar',
            values: [1, 2],
            meta: [{ raw: '{ "lineStyle": { "width": 3 }, "emphasis": { "focus": "self" } }' }],
            p: {
                ...P,
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [
                        { name: 'A', max: 100, oid: 'a' },
                        { name: 'B', max: 100, oid: 'b' },
                    ],
                },
            },
        });
        const s = (option.series as unknown[])[0] as {
            lineStyle: { width: number };
            emphasis?: { focus: string };
        };
        // GUI owns lineStyle.color; the raw adds width (uncovered). emphasis is fully uncovered.
        expect(s.lineStyle.width).toBe(3);
        expect(s.emphasis?.focus).toBe('self');
    });
});
