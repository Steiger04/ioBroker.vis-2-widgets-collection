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
} from './optionBuilder';
import { TOOLBOX_TOKENS } from './optionBuilders/toolbox';
import { FAMILY_CORES } from './families/cores';
import { SAMPLE_TS } from './timeFormat';
import type { CartesianFragment, ChartSeries, PieFragment, PresentationBase } from './optionBuilders/types';
import type { EchartsChartType, EchartsMarkLine, EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

/** Minimal chart-wide presentation base for tests (ADR-0083: base + family fragment). */
const BASE: PresentationBase = {
    legendShow: true,
    legendPos: 'topCenter',
    legendShowValues: false,
    tooltipTrigger: 'axis',
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
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
        paper: '#pa',
    },
    themeDark: false,
};

/** Minimal cartesian presentation (base + cartesian fragment) for tests. */
const P: PresentationBase & CartesianFragment = {
    ...BASE,
    cartesianType: 'line',
    yAxes: [{}],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    markLines: [],
};

/** The pie twin — the same base with the pie fragment (undefined = builder defaults, as before). */
const PIE_P: PresentationBase & PieFragment = { ...BASE, pie: undefined };

describe('buildGeneratedOption — toolbox layering (ADR-0045)', () => {
    // The toolbox block is chart-wide and layered at the orchestrator seam — one test pins the
    // contract for every family: absent when the master is off, sparse + token-coloured when on.
    const series: ChartSeries[] = [{ name: 'A', data: [[1, 2]] }];
    const meta: EchartsSeriesMeta[] = [{}];

    it('carries NO toolbox key when the config is unset (no ghost)', () => {
        const out = buildGeneratedOption({ family: 'cartesian', series, meta, p: P }) as Record<string, unknown>;
        expect('toolbox' in out).toBe(false);
    });

    it('carries the sparse toolbox block when show is on (cartesian)', () => {
        const out = buildGeneratedOption({
            family: 'cartesian',
            series,
            meta,
            p: { ...P, toolbox: { show: true, features: { restore: { show: true } } } },
        }) as Record<string, unknown>;
        expect(out.toolbox).toEqual({
            show: true,
            iconStyle: { borderColor: TOOLBOX_TOKENS.light.icon },
            emphasis: { iconStyle: { borderColor: TOOLBOX_TOKENS.light.hover } },
            feature: { restore: {} },
        });
    });

    it('carries the toolbox block on every non-cartesian family too (magicType filtered inside)', () => {
        const withToolbox = {
            ...PIE_P,
            toolbox: {
                show: true,
                features: { magicType: { show: true, type: ['line'] as ('line' | 'bar' | 'stack' | 'tiled')[] } },
            },
        };
        const cases = [buildGeneratedOption({ family: 'pie', series, meta, p: withToolbox })];
        for (const option of cases) {
            const toolbox = (option as Record<string, unknown>).toolbox as Record<string, unknown>;
            expect(toolbox.show).toBe(true);
            // D4 family filter: magicType was the ONLY configured feature and is filtered → the
            // feature block itself stays absent (it only emits with ≥1 active feature).
            expect((toolbox.feature as Record<string, unknown> | undefined)?.magicType).toBeUndefined();
        }
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

    it('NULL-Behandlung rides the name-keyed resolver (toter-Regler fix): intake nulls fill, mapped gaps immune', () => {
        const raw = JSON.stringify({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 10],
                        [2, 'garbage'],
                        [3, 30],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [1, 5],
                        [2, 'off'],
                        [3, 'garbage'],
                        [4, 8],
                    ],
                },
            ],
        });
        const out = parseJsonState(raw, { B: { off: null } }, name => (name === 'A' ? 'forward' : 'zero'));
        // A forwards 10 over the intake gap; B zeroes the intake null while the mapped gap
        // stays null — immunity holds under EVERY mode (ticket 02 decision 3).
        expect(out.series[0].data).toEqual([
            [1, 10],
            [2, 10],
            [3, 30],
        ]);
        expect(out.series[1].data).toEqual([
            [1, 5],
            [2, null],
            [3, 0],
            [4, 8],
        ]);
        // a mapped gap stays immune under forward (the ticket-02 rule, now on the JSON path too)
        const fwd = parseJsonState(raw, { B: { off: null } }, () => 'forward');
        expect(fwd.series[1].data).toEqual([
            [1, 5],
            [2, null],
            [3, 5],
            [4, 8],
        ]);
        // no resolver = keep (byte-stable pre-fix behaviour)
        const keep = parseJsonState(raw);
        expect(keep.series[0].data).toEqual([
            [1, 10],
            [2, null],
            [3, 30],
        ]);
    });

    it('string values parse through the shared intake — [[0, "7"]] → [[0, 7]] (ADR-0077)', () => {
        const pairs = parseJsonState(
            JSON.stringify([
                [0, '7'],
                [1, 'abc'],
            ]),
        );
        expect(pairs.series[0].data).toEqual([
            [0, 7],
            [1, null], // unconvertible stays a gap
        ]);
        const objects = parseJsonState(
            JSON.stringify([
                { ts: 1, val: '2.5' },
                { ts: 2, value: 'true' },
                { ts: 3, val: false },
            ]),
        );
        expect(objects.series[0].data).toEqual([
            [1, 2.5],
            [2, 1],
            [3, 0], // the seam unification: real booleans coerce now too (ADR-0058), was null
        ]);
    });

    it('value maps ride the name-keyed overlay identity — a hit adopts, an empty target gaps (ticket 02)', () => {
        const named = parseJsonState(
            JSON.stringify({
                series: [
                    {
                        name: 'A',
                        data: [
                            [0, 'Sonne'],
                            [1, 'x'],
                        ],
                    },
                ],
            }),
            {
                A: { Sonne: 3, x: null },
            },
        );
        expect(named.series[0].data).toEqual([
            [0, 3],
            [1, null],
        ]);
        // the nameless single-series shapes look up 'Series 1'
        const bare = parseJsonState(JSON.stringify([[0, '7']]), { 'Series 1': { 7: 9 } });
        expect(bare.series[0].data).toEqual([[0, 9]]);
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
        const g = buildGeneratedOption({ family: 'pie', series, meta, p: PIE_P });
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

    it('provides a time xAxis and a single value yAxis by default (grid off → edges stay open)', () => {
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(option.xAxis).toMatchObject({ type: 'time' });
        const ya = option.yAxis as unknown as { type: string }[];
        expect(ya).toHaveLength(1); // the X gridlines default OFF — no synthesized axes any more (ADR-0070 addendum 6)
        expect(ya[0].type).toBe('value');
    });

    it('emits one yAxis per configured axis (ADR-0012): alignTicks opt-in (off by default), position defaults', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{ name: 'A' }, { name: 'B', yAxisIndex: 1 }],
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

    it('the axis OWNER keeps name + colour — a rebind newcomer never steals them (ADR-0068)', () => {
        // S2 (earlier in the array) rebound onto axis 0 alongside the incumbent S3: without the
        // owner the FIRST binder in series order won and the axis rendered "S2" — the incumbent
        // series lost every visible trace (dropdown, axis card, chart name).
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'S1', data: [[1, 1]] },
                { name: 'S2', data: [[1, 2]] },
                { name: 'S3', data: [[1, 3]] },
            ],
            meta: [
                { id: 'sr-1', name: 'S1', yAxisIndex: 1 },
                { id: 'sr-2', name: 'S2', color: '#0f0', yAxisIndex: 0 }, // the newcomer on axis 0
                { id: 'sr-3', name: 'S3', color: '#00f', yAxisIndex: 0 }, // the incumbent owner
            ],
            p: { ...P, yAxes: [{ owner: 'sr-3' }, {}] },
        });
        const ya = option.yAxis as unknown as { name?: string; axisLine?: { lineStyle: { color: string } } }[];
        // Emitted axes in array order: axis 0 (S2+S3) first, axis 1 (S1) second.
        expect(ya[0].name).toBe('S3'); // the OWNER's name — not the array-earlier newcomer's
        expect(ya[0].axisLine?.lineStyle.color).toBe('#00f'); // the owner's colour
        expect(ya[1].name).toBe('S1');
    });

    it('the JSON owner (a payload name) resolves on id-less meta by series name (ADR-0068)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'N2', data: [[1, 2]] },
                { name: 'N3', data: [[1, 3]] },
            ],
            meta: [
                { name: 'N2', yAxisIndex: 0 },
                { name: 'N3', yAxisIndex: 0 },
            ],
            p: { ...P, yAxes: [{ owner: 'N3' }] },
        });
        const ya = option.yAxis as unknown as { name?: string }[];
        expect(ya[0].name).toBe('N3'); // owner-first even though N2 is the first binder
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
        expect(ya).toHaveLength(1); // grid off (default) — no synthesized axes (ADR-0070 addendum 6)
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
        expect(ya).toHaveLength(1); // the fallback axis alone — grid off, no synthesized axes (addendum 6)
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

    it('„Verlauf" without a chosen gradient draws the derived Flächen-Verlauf in the series colour (ADR-0101)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'line', area: 'gradient', color: '#5470c6' }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as { areaStyle?: Record<string, unknown> };
        expect(first.areaStyle).toEqual({
            opacity: 0.8, // the gradient-mode default — the slider still applies on top
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    { offset: 0, color: 'rgba(84, 112, 198, 1)' },
                    { offset: 0.5, color: 'rgba(84, 112, 198, 0.5)' },
                    { offset: 1, color: 'rgba(84, 112, 198, 0)' },
                ],
            },
        });
    });

    it('the derived Flächen-Verlauf follows the palette colour of a series without its own colour', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [
                { name: 'A', type: 'line' },
                { name: 'B', type: 'line', area: 'gradient', areaOpacity: 0.4 },
            ],
            p: { ...P, palette: ['#000000', 'rgb(10, 20, 30)'] },
        });
        const second = (option.series as unknown[])[1] as {
            areaStyle?: { opacity: number; color: { colorStops: unknown[] } };
        };
        expect(second.areaStyle!.opacity).toBe(0.4);
        expect(second.areaStyle!.color.colorStops).toEqual([
            { offset: 0, color: 'rgba(10, 20, 30, 1)' },
            { offset: 0.5, color: 'rgba(10, 20, 30, 0.5)' },
            { offset: 1, color: 'rgba(10, 20, 30, 0)' },
        ]);
    });

    it('„Flächig" keeps a colourless areaStyle even with a resolvable series colour', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A', type: 'line', area: 'flat', color: '#5470c6' }],
            p: P,
        });
        const first = (option.series as unknown[])[0] as Record<string, unknown>;
        expect(first.areaStyle).toEqual({ opacity: 0.15 });
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
                markLines: [{ upper: 2000, yAxisIndex: 1 }],
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
            p: { ...P, markLines: [{ upper: 10 }] }, // no yAxisIndex
        });
        const first = (option.series as unknown[])[0] as { markLine?: { data: { yAxis: number }[] } };
        expect(first.markLine?.data[0].yAxis).toBe(10);
    });
});

describe('buildGeneratedOption — marking style + label cluster (parity Build C, ADR-0061)', () => {
    /** One emitted mark-line data entry: lineStyle + (optional) label, permissively typed. */
    type MarkDatum = { lineStyle: Record<string, unknown>; label?: Record<string, unknown> };

    /** Build with one mark line and return its emitted data entry. */
    const mark = (ml: Partial<EchartsMarkLine>): MarkDatum => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, markLines: [{ id: '1', upper: 10, ...ml }] },
        });
        const first = (option.series as unknown[])[0] as {
            markLine?: { data: MarkDatum[] };
        };
        const datum = first.markLine?.data?.[0];
        if (!datum) {
            throw new Error('no markLine emitted');
        }
        return datum;
    };

    // ── the Wert-Fallback (ADR-0081) ───────────────────────────────────
    it('no label text → the Wert-Fallback label: formatter = the bound value, colour explicit', () => {
        // The label block is ALWAYS emitted — a textless edge must never fall back to echarts'
        // raw value default (whose colourless label strokes the bg-contrast halo, ADR-0080).
        expect(mark({}).label).toEqual({ formatter: '10', color: '#ts' });
        // An EMPTY text counts as no text (the cleared TextField stores '').
        expect(mark({ labelUpper: '' }).label).toEqual({ formatter: '10', color: '#ts' });
    });

    it('legacy dashed boolean is tolerated → lineStyle type (runtime migration on decode)', () => {
        expect(mark({ dashed: true }).lineStyle.type).toBe('dashed');
        expect(mark({ dashed: false }).lineStyle.type).toBe('solid');
    });

    it('label text only → { formatter, color } — everything else stays sparse', () => {
        // The colour is ALWAYS explicit (ADR 0080): a colourless attached label hands echarts
        // the bg-contrast auto path, which strokes a white 2px halo on a transparent canvas.
        expect(mark({ labelUpper: 'Max' }).label).toEqual({ formatter: 'Max', color: '#ts' });
    });

    // ── style cluster ──────────────────────────────────────────────────
    it('3-way lineStyle emits verbatim', () => {
        expect(mark({ lineStyle: 'dotted' }).lineStyle.type).toBe('dotted');
        expect(mark({ lineStyle: 'dashed' }).lineStyle.type).toBe('dashed');
        expect(mark({ lineStyle: 'solid' }).lineStyle.type).toBe('solid');
    });

    it('width emits authored; unset/0 → the 2 default (the card slider fallback, ADR-0076)', () => {
        expect(mark({ width: 3 }).lineStyle.width).toBe(3);
        expect(mark({}).lineStyle.width).toBe(2); // echarts' own default is 1 — the slider shows 2
        expect(mark({ width: 0 }).lineStyle.width).toBe(2); // 0 = unset (invisible line never a choice)
    });

    it('shadow uses the adapter os formula: blur/offsetY = v+1 in the line colour', () => {
        const ls = mark({ shadow: 4, color: '#c' }).lineStyle;
        expect(ls.shadowBlur).toBe(5);
        expect(ls.shadowOffsetY).toBe(5);
        expect(ls.shadowColor).toBe('#c'); // explicit colour, not the divider default
        expect('shadowBlur' in mark({}).lineStyle).toBe(false); // unset → no shadow keys
        expect('shadowBlur' in mark({ shadow: 0 }).lineStyle).toBe(false); // 0 = off
    });

    // ── label cluster (the upper edge's own — ADR-0081) ────────────────
    it('labelUpperPosition emits echarts-native; unset → no position key (echarts default end)', () => {
        expect(mark({ labelUpper: 'T', labelUpperPosition: 'insideMiddleTop' }).label!.position).toBe(
            'insideMiddleTop',
        );
        expect('position' in mark({ labelUpper: 'T' }).label!).toBe(false);
    });

    it('X offset emits distance [v, 0], NEGATED on the end places — including the unset default', () => {
        // Unset position = echarts' default 'end' → same negation as an explicit "Rechts", so
        // "Standard" and "Rechts" offset the same way (review c.1 fix).
        expect(mark({ labelUpper: 'T', labelUpperOffset: 5 }).label!.distance).toEqual([-5, 0]);
        expect(mark({ labelUpper: 'T', labelUpperPosition: 'insideEnd', labelUpperOffset: 5 }).label!.distance).toEqual(
            [5, 0],
        );
        expect(mark({ labelUpper: 'T', labelUpperPosition: 'end', labelUpperOffset: 5 }).label!.distance).toEqual([
            -5, 0,
        ]);
        expect(mark({ labelUpper: 'T', labelUpperPosition: 'start', labelUpperOffset: 5 }).label!.distance).toEqual([
            -5, 0,
        ]);
        expect('distance' in mark({ labelUpper: 'T' }).label!).toBe(false); // unset → no distance key
        // 0 = unset (consistent with width/shadow — a zero offset emits nothing).
        expect('distance' in mark({ labelUpper: 'T', labelUpperOffset: 0 }).label!).toBe(false);
    });

    it('label colour resolves explicitly (ADR 0080/0081): authored wins → marking colour → axis-text token', () => {
        const label = mark({ labelUpper: 'T', labelUpperSize: 11, labelUpperColor: '#ff0' }).label!;
        expect(label.fontSize).toBe(11);
        expect(label.color).toBe('#ff0'); // authored label colour beats everything
        expect(mark({ labelUpper: 'T', color: '#c' }).label!.color).toBe('#c'); // „Erbt" = the marking's colour
        expect(mark({ labelUpper: 'T' }).label!.color).toBe('#ts'); // no marking colour → axis-text token
        expect('fontSize' in mark({ labelUpper: 'T' }).label!).toBe(false); // size stays sparse
    });

    it('the lone upper line reads ONLY the upper cluster — lower fields stay inert', () => {
        expect(mark({ labelLower: 'Min' }).label).toEqual({ formatter: '10', color: '#ts' });
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
        expect(option.yAxis as unknown[]).toHaveLength(1); // real axis alone — grid off, no synthesized axes (addendum 6)
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
                // The raw `showMinLine:true` attack proves the brace is GUI-owned (ADR-0070
                // addendum 5): the edge splitlines stay off whatever the raw JSON says.
                yAxes: [
                    {
                        splitLine: true,
                        raw: '{ "splitLine": { "lineStyle": { "type": "dashed" }, "showMinLine": true } }',
                    },
                ],
            },
        });
        const ya = (option.yAxis as unknown as unknown[])[0] as {
            splitLine?: { show?: boolean; lineStyle?: { type?: string; color?: string } };
        };
        // The divider default rides along (always-emitted since the ADR-0055 addendum); the raw
        // `type` leaf merges through — the GUI owns only the colour. The min/max pair encodes
        // Achsen-Vorrang (ADR-0070 addendum 6: X at bottom → the Y-MIN line yields, Y-MAX shows)
        // and is GUI-owned — the raw `showMinLine:true` above loses the collision.
        expect(ya.splitLine).toEqual({
            show: true,
            showMinLine: false,
            showMaxLine: true,
            lineStyle: { color: '#d', type: 'dashed' },
        });
    });

    it('nameLocation/nameGap are card-driven, defaulting to the former hard-emit values', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{ name: 'A' }, { name: 'B', yAxisIndex: 1 }],
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

describe('buildGeneratedOption — unbound axes are never emitted (ADR-0066)', () => {
    it('a middle unbound axis is skipped and the series refs are remapped onto the compacted array', () => {
        // Axes 0 and 2 are bound (series A and B), axis 1 is unbound — B must land on emitted
        // index 1, not dangle on a non-existent array slot.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{ name: 'A' }, { name: 'B', yAxisIndex: 2 }],
            p: { ...P, yAxes: [{ name: 'A' }, { name: 'hole' }, { name: 'C' }] },
        });
        const ya = option.yAxis as unknown as { name?: string }[];
        expect(ya.map(a => a.name)).toEqual(['A', 'C']); // the hole is not emitted
        const entries = option.series as unknown as { yAxisIndex?: number; name?: string }[];
        expect(entries.map(e => e.yAxisIndex)).toEqual([0, 1]); // remapped onto [A, C]
    });

    it('an axis whose series all left falls back to the single default axis (no phantom)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, yAxes: [{ name: 'A' }, { name: 'B' }] },
        });
        const ya = option.yAxis as unknown as unknown[];
        expect(ya).toHaveLength(1); // the `[{}]` guarantee — ≥1 value axis holds (grid off)
    });

    it('a marking anchored to an unbound axis rests — no fallback onto another axis', () => {
        // One series on axis 0; a line mark on axis 0 (draws) + one on axis 1 (unbound → rests).
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                yAxes: [{ name: 'A' }, { name: 'B' }],
                markLines: [
                    { id: 'm0', upper: 3, yAxisIndex: 0 },
                    { id: 'm1', upper: 2000, yAxisIndex: 1 },
                ],
            },
        });
        const entry = (option.series as unknown as Record<string, unknown>[])[0];
        const markLine = entry.markLine as { data?: { yAxis?: number }[] } | undefined;
        expect(markLine?.data).toHaveLength(1); // only the axis-0 line
        expect(markLine?.data?.[0]?.yAxis).toBe(3); // the 2000 mark did NOT fall back to axis 0
    });

    it('a marking anchored to a bound axis still draws after the remap', () => {
        // Axis 1 unbound in the middle; the mark targets axis 2 (bound by series B) — it must
        // attach to B and survive the index compaction.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{ name: 'A' }, { name: 'B', yAxisIndex: 2 }],
            p: {
                ...P,
                yAxes: [{ name: 'A' }, { name: 'hole' }, { name: 'C' }],
                markLines: [{ id: 'm2', upper: 7, yAxisIndex: 2 }],
            },
        });
        const entries = option.series as unknown as Record<string, unknown>[];
        const b = entries.find(e => e.name === 'B') as { markLine?: { data?: { yAxis?: number }[] } };
        expect(b.markLine?.data?.[0]?.yAxis).toBe(7); // hosted on B (its axis), not on A
    });
});

describe('buildGeneratedOption — cartesian xAxis (ADR-0035 + ADR-0052 Time format)', () => {
    /** Pull the emitted moment formatter out of a built option (typed for direct calls). */
    const fmtOf = (option: ReturnType<typeof buildGeneratedOption>): ((v: number, i: number) => string) =>
        (option.xAxis as { axisLabel: { formatter: (v: number, i: number) => string } }).axisLabel.formatter;

    it('always emits the time axis with the honest echarts defaults (splitLine off, ticks on)', () => {
        const option = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        // Empty config = a plain time axis; the ALWAYS-emitted moment formatter (ADR-0052) and the
        // ALWAYS-emitted axis colours ride along — line+ticks AND labels inherit the presentation's
        // PRIMARY token (X-Default-Farbe spec revision 2026-10-19: the head of the colour chain,
        // one accent from the default on — a swapped token set reaches line+labels unchanged).
        // echarts' time-axis splitLine default is false, `axisTick.show:'auto'` resolves TRUE for
        // a time-x paired with a value-y. The grid is OFF here → NO min/max keys (they encode
        // Achsen-Vorrang and follow their switch).
        expect(option.xAxis).toEqual({
            type: 'time',
            splitLine: { show: false },
            axisTick: { show: true },
            axisLine: { show: true, lineStyle: { color: '#p' } },
            axisLabel: { formatter: expect.any(Function), color: '#p' },
        });
        // No data → span 0 counts as a sub-30-min span → seconds resolution with the start date
        // prefix; the span (and resolution) re-derives as soon as data arrives.
        expect(fmtOf(option)(new Date(2026, 7, 19, 14, 5).getTime(), 2)).toBe('19.08.\n14:05:00');
    });

    it('emits name (middle placement) + the moment label formatter + one-colour styling when configured', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { name: 'Zeit', format: 'HH:mm <br /> DD.MM.', color: '#0af' } },
        });
        // The authored pattern becomes a moment FUNCTION (ADR-0052) — never a string.
        expect(option.xAxis).toEqual({
            type: 'time',
            name: 'Zeit',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: { formatter: expect.any(Function), color: '#0af' },
            axisLine: { show: true, lineStyle: { color: '#0af' } },
            nameTextStyle: { color: '#0af' },
            splitLine: { show: false },
            axisTick: { show: true },
        });
        expect(fmtOf(option)(SAMPLE_TS, 0)).toBe('14:05\n19.08.');
    });

    it('derives the Auto labelling from the data span across all series (ADR-0052)', () => {
        const series: ChartSeries[] = [
            {
                name: 'a',
                data: [
                    [new Date(2026, 7, 19, 10).getTime(), 1],
                    [new Date(2026, 7, 26, 10).getTime(), 2],
                ],
            },
        ];
        const option = buildGeneratedOption({ family: 'cartesian', series, meta: [], p: P });
        // 7-day span → date-only two-line labels.
        expect(fmtOf(option)(new Date(2026, 7, 19, 14).getTime(), 3)).toBe('19.08.\n2026');
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
        // And the unset case emits none of them (the always-emit booleans + the moment formatter
        // of ADR-0052 aside — axisLabel now always carries the formatter function AND the primary
        // default colour, one accent with the line; spec revision 2026-10-19).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        const bareX = bare.xAxis as Record<string, unknown>;
        expect(bareX).not.toHaveProperty('splitNumber');
        expect(bareX).not.toHaveProperty('minInterval');
        expect(bareX).not.toHaveProperty('nameRotate');
        expect(bareX).not.toHaveProperty('offset');
        expect(bareX.axisLabel).toEqual({ formatter: expect.any(Function), color: '#p' });
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
        // Without an offset there is no onZero switch (onZero:true is the deliberate default:
        // negative data keeps the line at the y=0 level). The axis line itself is ALWAYS emitted
        // — defaulting to the presentation's primary token (ticks follow the line).
        // An explicit 0 counts as unset (it IS the echarts default).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).toMatchObject({ axisLine: { show: true, lineStyle: { color: '#p' } } });
        expect((bare.xAxis as Record<string, unknown>).axisLine).not.toHaveProperty('onZero');
        const zero = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { offset: 0 } },
        });
        expect(zero.xAxis).not.toHaveProperty('offset');
        expect((zero.xAxis as Record<string, unknown>).axisLine).not.toHaveProperty('onZero');
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

describe('buildGeneratedOption — cartesian tooltip time header (ADR-0052)', () => {
    const WED = SAMPLE_TS;
    type TooltipEntry = { trigger?: string; formatter?: unknown; valueFormatter?: unknown; show?: boolean };
    const tooltipOf = (p: PresentationBase & CartesianFragment): TooltipEntry =>
        buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p }).tooltip as TooltipEntry;

    it('emits a moment-header FORMATTER on cartesian (default header format, values rendered)', () => {
        const t = tooltipOf(P);
        expect(t.trigger).toBe('axis');
        expect(typeof t.formatter).toBe('function');
        expect(t.valueFormatter).toBeUndefined(); // folded INTO the callback (echarts would skip it)
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '<m>', seriesName: 'Temp', value: [WED, 21.5] },
            { axisValue: WED, marker: '<m>', seriesName: 'Hum', value: [WED, 40] },
        ]);
        expect(html).toBe('<b>Wed, 19.08.2026 14:05</b><br/><m> Temp: 21.5<br/><m> Hum: 40');
    });

    it('an authored Time format drives the header; units/decimals format the value rows', () => {
        const t = tooltipOf({ ...P, xAxis: { format: 'DD.MM.YY HH:mm' }, tooltipUnits: '°C', tooltipDecimals: 1 });
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '<m>', seriesName: 'Temp', value: [WED, 21.56] },
        ]);
        expect(html).toBe('<b>19.08.26 14:05</b><br/><m> Temp: 21.6 °C');
    });

    it('an authored tooltipTemplate overrides the moment header — resolved by OUR tokens (ADR-0052)', () => {
        // echarts' own string-template path is broken on a time axis: {b} maps to params.name,
        // which is EMPTY for time-axes (no name dimension — only category axes have one), so
        // '{b}: {c}' rendered ': 21.5' with the time missing entirely (verified against the
        // echarts 6.1.0 source: TooltipView._showTooltipContent → formatTpl over
        // $vars ['seriesName','name','value']). On cartesian we therefore resolve the template
        // ourselves: {b} = the time in the X-Karte's Time format.
        const t = tooltipOf({ ...P, tooltipTemplate: '{b}: {c}' });
        expect(typeof t.formatter).toBe('function');
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '<m>', seriesName: 'Temp', value: [WED, 21.5] },
            { axisValue: WED, marker: '<m>', seriesName: 'Hum', value: [WED, 40] },
        ]);
        expect(html).toBe('<m> Wed, 19.08.2026 14:05: 21.5<br/><m> Wed, 19.08.2026 14:05: 40');
    });

    it('template tokens: {a} series name, {c} honours units/decimals, missing time → empty {b}', () => {
        const t = tooltipOf({ ...P, tooltipTemplate: '{a} = {c}', tooltipUnits: '°C', tooltipDecimals: 1 });
        const html = (t.formatter as (params: unknown) => string)({
            marker: '<m>',
            seriesName: 'Temp',
            value: 21.56,
        });
        expect(html).toBe('<m> Temp = 21.6 °C');
    });

    it('non-cartesian keeps the echarts-native STRING template (category axes have real {b}/{d})', () => {
        const out = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...PIE_P, tooltipTemplate: '{b}: {d}%' },
        }) as { tooltip: { formatter?: unknown } };
        expect(out.tooltip.formatter).toBe('{b}: {d}%');
    });

    it('null values render as a dash; item-trigger params (no axisValue) read the point timestamp', () => {
        const t = tooltipOf(P);
        const single = (t.formatter as (params: unknown) => string)({
            marker: '<m>',
            seriesName: 'Temp',
            value: [WED, null],
        });
        expect(single).toBe('<b>Wed, 19.08.2026 14:05</b><br/><m> Temp: -');
    });

    it('non-cartesian families keep the valueFormatter path — no moment header without a time axis', () => {
        const out = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...PIE_P, tooltipUnits: 'kWh' },
        }) as { tooltip: TooltipEntry };
        expect(out.tooltip.valueFormatter).toEqual(expect.any(Function));
        expect(out.tooltip.formatter).toBeUndefined();
    });
});

describe('buildGeneratedOption — theme-token defaults (ADR-0027)', () => {
    it('a threshold without an explicit colour inherits the divider token', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, markLines: [{ id: '1', upper: 10 }] },
        });
        const first = (option.series as unknown[])[0] as {
            markLine?: { data: { lineStyle: { color: string } }[] };
        };
        expect(first.markLine?.data[0].lineStyle.color).toBe('#d'); // P.themeTokens.divider
    });

    it('emits no chart-level visualMap — stored visualMap* keys reach no output (ADR-0101)', () => {
        // The full presentation path from legacy rxData: fragment (from the stored keys) → builder.
        const fragment = FAMILY_CORES.cartesian.presentationFragment({
            src: { visualMapEnabled: true, visualMapMin: 0, visualMapMax: 100, visualMapColors: '#f00; #0f0' },
            chartConfig: {},
            markLines: [],
        });
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, ...fragment },
        });
        expect(option).not.toHaveProperty('visualMap');
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
            p: { ...PIE_P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
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
                ...PIE_P,
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
            p: { ...PIE_P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
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

    describe('pie label colour — always explicit (ADR-0080 addendum)', () => {
        it('Erbt resolves the primary text token; an authored labelColor wins (point reading)', () => {
            const erbt = buildGeneratedOption({
                family: 'pie',
                series: [{ name: 'A', data: [[1, 10]] }],
                meta: [],
                p: { ...PIE_P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
            });
            expect((erbt.series as unknown as { label?: { color?: string } }[])[0].label?.color).toBe('#tp');
            const authored = buildGeneratedOption({
                family: 'pie',
                series: [{ name: 'A', data: [[1, 10]] }],
                meta: [],
                p: {
                    ...PIE_P,
                    pie: {
                        aggregate: 'latest',
                        innerRadius: 0,
                        rose: 'none',
                        label: 'namePercent',
                        labelColor: '#f00',
                    },
                },
            });
            expect((authored.series as unknown as { label?: { color?: string } }[])[0].label?.color).toBe('#f00');
        });

        it('ring labels carry the same explicit resolution (tabellarisch reading)', () => {
            const option = buildGeneratedOption({
                family: 'pie',
                series: [
                    {
                        name: 'R',
                        data: [
                            { name: 'a', value: 1 },
                            { name: 'b', value: 2 },
                        ],
                    },
                ],
                meta: [{ name: 'R' }],
                p: {
                    ...PIE_P,
                    pie: {
                        aggregate: 'latest',
                        innerRadius: 0,
                        rose: 'none',
                        label: 'namePercent',
                        labelColor: '#0f0',
                    },
                },
            });
            const rings = option.series as unknown as { label?: { color?: string } }[];
            expect(rings).toHaveLength(1);
            expect(rings[0].label?.color).toBe('#0f0');

            // Erbt on the ring path too — one shared pieLabel block, both readings resolve alike.
            const erbt = buildGeneratedOption({
                family: 'pie',
                series: [{ name: 'R', data: [{ name: 'a', value: 1 }] }],
                meta: [{ name: 'R' }],
                p: { ...PIE_P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
            });
            expect((erbt.series as unknown as { label?: { color?: string } }[])[0].label?.color).toBe('#tp');
        });

        it('the GUI resolution wins over the whole-pie raw label colour (GUI-wins seam)', () => {
            const option = buildGeneratedOption({
                family: 'pie',
                series: [{ name: 'A', data: [[1, 10]] }],
                meta: [],
                p: {
                    ...PIE_P,
                    pie: {
                        aggregate: 'latest',
                        innerRadius: 0,
                        rose: 'none',
                        label: 'namePercent',
                        raw: '{ "label": { "color": "#raw" } }',
                    },
                },
            });
            // Documented ADR-0080-addendum deviation: label.color joins the GUI cluster
            // (show/formatter) — the per-slice raw stays the colour escape (data-level label
            // merges over series-level in echarts).
            expect((option.series as unknown as { label?: { color?: string } }[])[0].label?.color).toBe('#tp');
        });

        it('a per-slice raw label colour still wins (data-level escape)', () => {
            const option = buildGeneratedOption({
                family: 'pie',
                series: [{ name: 'A', data: [[1, 10]] }],
                meta: [{ raw: '{ "label": { "color": "#slice" } }' }],
                p: { ...PIE_P, pie: { aggregate: 'latest', innerRadius: 0, rose: 'none', label: 'namePercent' } },
            });
            const s = (option.series as unknown as { data: { label?: { color?: string } }[] }[])[0];
            expect(s.data[0].label?.color).toBe('#slice');
        });
    });
});

describe('buildGeneratedOption — parity Build E option cluster (ADR-0054)', () => {
    const WED = SAMPLE_TS;
    const EARLIER = WED - 60_000;
    type TooltipEntry = {
        trigger?: string;
        formatter?: unknown;
        valueFormatter?: unknown;
        show?: boolean;
        backgroundColor?: string;
        axisPointer?: unknown;
    };
    const tooltipOf = (p: PresentationBase & CartesianFragment): TooltipEntry =>
        buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p }).tooltip as TooltipEntry;

    // ── tooltip background (adapter hoverBackground) ─────────────────────
    it('emits the authored tooltip background colour into the built entry', () => {
        expect(tooltipOf({ ...P, tooltipBgColor: '#123456' }).backgroundColor).toBe('#123456');
    });

    it('emits the background on non-cartesian families too (shared builder)', () => {
        const out = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...PIE_P, tooltipBgColor: '#abc' },
        }) as { tooltip: TooltipEntry };
        expect(out.tooltip.backgroundColor).toBe('#abc');
    });

    it('no background key when unset, and the section raw cannot override the GUI colour (emitted before the fold)', () => {
        expect(tooltipOf(P)).not.toHaveProperty('backgroundColor');
        const t = tooltipOf({
            ...P,
            tooltipBgColor: '#gui',
            tooltipRaw: '{"backgroundColor":"#raw","axisPointer":{"type":"cross"}}',
        });
        expect(t.backgroundColor).toBe('#gui'); // GUI wins the collision…
        expect(t.axisPointer).toEqual({ type: 'cross' }); // …while free keys merge through
    });

    // ── no interpolation in tooltip (adapter hoverNoInterpolate) ─────────
    it('drops rows whose point ts ≠ the hovered ts when noInterpolate is on (moment header)', () => {
        const t = tooltipOf({ ...P, tooltipNoInterpolate: true });
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '<m>', seriesName: 'Exact', value: [WED, 21.5] },
            { axisValue: WED, marker: '<m>', seriesName: 'Carried', value: [EARLIER, 40] },
        ]);
        expect(html).toBe('<b>Wed, 19.08.2026 14:05</b><br/><m> Exact: 21.5');
    });

    it('applies the same filter to the authored-template formatter', () => {
        const t = tooltipOf({ ...P, tooltipTemplate: '{a}={c}', tooltipNoInterpolate: true });
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '', seriesName: 'Exact', value: [WED, 21.5] },
            { axisValue: WED, marker: '', seriesName: 'Carried', value: [EARLIER, 40] },
        ]);
        expect(html).toBe('Exact=21.5');
    });

    it('keeps carried-over rows when the switch is off (characterisation)', () => {
        const t = tooltipOf(P);
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '', seriesName: 'Exact', value: [WED, 21.5] },
            { axisValue: WED, marker: '', seriesName: 'Carried', value: [EARLIER, 40] },
        ]);
        expect(html).toContain('Carried: 40');
    });

    // ── hide nulls in tooltip (adapter hoverNoNulls) ─────────────────────
    it('drops null-valued rows when hideNulls is on, keeps them as "-" when off', () => {
        const params = [
            { axisValue: WED, marker: '<m>', seriesName: 'A', value: [WED, 21.5] },
            { axisValue: WED, marker: '<m>', seriesName: 'Gap', value: [WED, null] },
        ];
        const hidden = tooltipOf({ ...P, tooltipHideNulls: true }).formatter as (p: unknown) => string;
        expect(hidden(params)).toBe('<b>Wed, 19.08.2026 14:05</b><br/><m> A: 21.5');
        const shown = tooltipOf(P).formatter as (p: unknown) => string;
        expect(shown(params)).toContain('Gap: -');
    });

    // ── comma as decimal separator (adapter useComma) ────────────────────
    it('comma flows into the tooltip value rows (units/decimals semantics kept)', () => {
        const t = tooltipOf({ ...P, tooltipUnits: '°C', tooltipDecimals: 1, decimalComma: true });
        const html = (t.formatter as (params: unknown) => string)([
            { axisValue: WED, marker: '', seriesName: 'Temp', value: [WED, 21.56] },
        ]);
        expect(html).toContain('Temp: 21,6 °C');
    });

    it('comma flows into the non-cartesian valueFormatter path', () => {
        const out = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...PIE_P, tooltipDecimals: 1, decimalComma: true },
        }) as { tooltip: { valueFormatter?: (v: unknown) => string } };
        expect(out.tooltip.valueFormatter?.(12.34)).toBe('12,3');
    });

    it('comma emits a default Y-axis label formatter; an authored axis format wins verbatim', () => {
        const commaOption = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, decimalComma: true },
        });
        const yAxis0 = (commaOption.yAxis as { axisLabel?: { formatter?: unknown } }[])[0];
        expect(typeof yAxis0.axisLabel?.formatter).toBe('function');
        expect((yAxis0.axisLabel?.formatter as (v: number) => string)(1234.5)).toBe('1234,5');

        const plainOption = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect((plainOption.yAxis as Record<string, unknown>[])[0]).not.toHaveProperty('axisLabel');

        const authoredOption = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...P, decimalComma: true, yAxes: [{ format: '{value} kW' }] },
        });
        const authored = (authoredOption.yAxis as { axisLabel?: { formatter?: unknown } }[])[0];
        expect(authored.axisLabel?.formatter).toBe('{value} kW');
    });
});

describe('buildGeneratedOption — parity Build D axes fine-tuning (ADR-0055)', () => {
    /** First yAxis of a built option, loosely typed for leaf assertions. */
    const y0 = (option: ReturnType<typeof buildGeneratedOption>): Record<string, unknown> =>
        (option.yAxis as Record<string, unknown>[])[0];

    it('emits axisLabel.fontSize on Y when the label size is set; unset emits no axisLabel at all', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...P, yAxes: [{ labelFontSize: 16 }] },
        });
        // toMatchObject: the bound series also inherits its palette colour onto the label
        // (ADR-0018) — the shape test must not depend on that coupling.
        expect(y0(option).axisLabel).toMatchObject({ fontSize: 16 });

        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(y0(bare)).not.toHaveProperty('axisLabel');
    });

    it('emits axisTick.lineStyle.color on Y when the tick colour is set; unset keeps the bare show switch', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...P, yAxes: [{ tickColor: '#0f0' }] },
        });
        expect(y0(option).axisTick).toEqual({ show: true, lineStyle: { color: '#0f0' } });

        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(y0(bare).axisTick).toEqual({ show: true });
    });

    it('emits the Y grid colour: authored field wins, unset falls to the divider default (ADR-0055 addendum)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: { ...P, yAxes: [{ gridColor: '#777' }] },
        });
        // The min/max pair rides along always (ADR-0070 addendum 6: X at bottom → Achsen-Vorrang
        // suppresses the Y-MIN extent line, the Y-MAX line shows).
        expect(y0(option).splitLine).toEqual({
            show: true,
            showMinLine: false,
            showMaxLine: true,
            lineStyle: { color: '#777' },
        });

        // Unset = the divider stamp (unifies the horizontal Y grid with the vertical X grid —
        // the yAxis ARRAY never sees the theme floor, so a passive default would fall to echarts'
        // light builtin, the two-grey inconsistency live-measured 2026-08-30).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(y0(bare).splitLine).toEqual({
            show: true,
            showMinLine: false,
            showMaxLine: true,
            lineStyle: { color: '#d' },
        });
    });

    it('the raw override merges leaf-wise around the new Y leaves — GUI wins collisions, siblings flow through', () => {
        // The card owns axisTick.lineStyle.color/splitLine.lineStyle.color only when their fields
        // are set; raw siblings at the same level (width/type) must keep merging through.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{}],
            p: {
                ...P,
                yAxes: [
                    {
                        tickColor: '#gui',
                        gridColor: '#gui',
                        splitLine: true,
                        raw: JSON.stringify({
                            axisTick: { lineStyle: { color: '#raw', width: 2 } },
                            splitLine: { lineStyle: { color: '#raw', type: 'dashed' } },
                        }),
                    },
                ],
            },
        });
        expect(y0(option).axisTick).toEqual({ show: true, lineStyle: { color: '#gui', width: 2 } });
        expect(y0(option).splitLine).toEqual({
            show: true,
            showMinLine: false,
            showMaxLine: true,
            lineStyle: { color: '#gui', type: 'dashed' },
        });
    });

    it('emits the X label size into the always-present axisLabel block; unset stays formatter-only', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { labelFontSize: 14 } },
        });
        expect(option.xAxis).toMatchObject({ axisLabel: { fontSize: 14, formatter: expect.any(Function) } });

        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).toMatchObject({ axisLabel: { formatter: expect.any(Function) } });
        expect((bare.xAxis as { axisLabel: Record<string, unknown> }).axisLabel).not.toHaveProperty('fontSize');
    });

    it('emits the X tick and grid colours alongside the always-emitted show switches', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { tickColor: '#0f0', gridColor: '#777' } },
        });
        expect(option.xAxis).toMatchObject({
            axisTick: { show: true, lineStyle: { color: '#0f0' } },
            splitLine: { show: false, lineStyle: { color: '#777' } },
        });

        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).toMatchObject({ axisTick: { show: true }, splitLine: { show: false } });
        expect((bare.xAxis as { axisTick: Record<string, unknown> }).axisTick).not.toHaveProperty('lineStyle');
        expect((bare.xAxis as { splitLine: Record<string, unknown> }).splitLine).not.toHaveProperty('lineStyle');
    });

    it('emits the X position top/bottom when authored; unset = no key (echarts default bottom)', () => {
        const top = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'top', splitLine: true } },
        });
        // 'top' keeps xAxis the SINGLE object (addendum 6: no bottom twin any more — the Y-min
        // extent gridline closes the bottom edge instead).
        expect(top.xAxis).toMatchObject({ position: 'top' });
        expect(Array.isArray(top.xAxis)).toBe(false);

        const bottom = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'bottom' } },
        });
        expect(bottom.xAxis).toMatchObject({ position: 'bottom' });

        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(bare.xAxis).not.toHaveProperty('position');
    });

    it("position:'top' detaches the axis line from the Y-zero (axisLine.onZero:false) — like the offset", () => {
        // echarts' cartesianAxisHelper.layout() pins the LINE to the Y-zero whenever the default
        // axisLine.onZero:true is active, while the LABELS get a labelOffset to the raw position
        // ('top') — the axis visually splits (labels at the top, line stuck at y=0; this hits any
        // value Y whose extent contains 0, i.e. already the all-positive default). Only with
        // onZero:false does the whole axis (line+ticks+labels) move together. 'bottom' — authored
        // or default — keeps the onZero default: negative data keeps the line at the y=0 level.
        const top = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'top', splitLine: true } },
        });
        const topX = top.xAxis as Record<string, unknown>; // single object (addendum 6)
        expect(topX).toMatchObject({ position: 'top', axisLine: { show: true, onZero: false } });

        const bottom = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'bottom' } },
        });
        expect(bottom.xAxis).toMatchObject({ position: 'bottom' });
        // The line is always emitted now — defaulting to the presentation's primary token —
        // but stays onZero-defaulted at 'bottom' (negative data keeps the line at the y=0 level).
        expect(bottom.xAxis).toMatchObject({ axisLine: { show: true, lineStyle: { color: '#p' } } });
        expect((bottom.xAxis as Record<string, unknown>).axisLine).not.toHaveProperty('onZero');

        // top + offset: both triggers, one detach — offset stacks on the detached line (echarts
        // moves the axis away from the grid in the POSITION's direction, so positive = up at top).
        const topOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'top', splitLine: true, offset: 24 } },
        });
        expect(topOffset.xAxis as Record<string, unknown>).toMatchObject({
            position: 'top',
            offset: 24,
            axisLine: { show: true, onZero: false },
        });

        // With a colour set, the detach must not clobber the lineStyle (and vice versa).
        const topColored = buildGeneratedOption({
            family: 'cartesian',
            series: [],
            meta: [],
            p: { ...P, xAxis: { position: 'top', splitLine: true, color: '#0af' } },
        });
        expect(topColored.xAxis as Record<string, unknown>).toMatchObject({
            position: 'top',
            axisLine: { show: true, onZero: false, lineStyle: { color: '#0af' } },
        });
    });
});

describe('buildGeneratedOption — parity Build D bar labels + bar width (ADR-0056)', () => {
    /** First series entry of a built one-series bar option, loosely typed for leaf assertions. */
    const s0 = (
        meta: EchartsSeriesMeta[],
        pOverrides?: Partial<PresentationBase & CartesianFragment>,
    ): Record<string, unknown> => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta,
            p: { ...P, cartesianType: 'bar', ...pOverrides },
        });
        return (option.series as Record<string, unknown>[])[0];
    };

    it('label on emits { show: true } only — position/size/colour stay sparse (echarts bar default inside)', () => {
        // An unset position emits NO `position` — echarts paints the bar label inside; the
        // editor's select shows exactly that (ADR-0056), existing widgets render unchanged.
        expect(s0([{ label: true }]).label).toEqual({ show: true });
        expect(s0([{ label: true }]).label).not.toHaveProperty('position');
        // "Above bar" is stored as an explicit `top` and emitted as such.
        expect(s0([{ label: true, labelPosition: 'top' }]).label).toEqual({ show: true, position: 'top' });
    });

    it('labelPosition emits label.position; labelFontSize/labelColour size + colour the label', () => {
        const entry = s0([{ label: true, labelPosition: 'insideBottom', labelFontSize: 14, labelColor: '#f00' }]);
        expect(entry.label).toEqual({ show: true, position: 'insideBottom', fontSize: 14, color: '#f00' });
        // Each knob sparse on its own — no half-emitted defaults.
        expect(s0([{ label: true, labelPosition: 'inside' }]).label).toEqual({ show: true, position: 'inside' });
        expect(s0([{ label: true, labelFontSize: 11 }]).label).toEqual({ show: true, fontSize: 11 });
        expect(s0([{ label: true, labelColor: '#abc' }]).label).toEqual({ show: true, color: '#abc' });
    });

    it('the label values ride the chart-level formatting (units/decimals/comma); no knob → no formatter', () => {
        const withKnobs = s0([{ label: true }], {
            tooltipUnits: 'W',
            tooltipDecimals: 1,
            decimalComma: true,
        });
        // echarts calls a label formatter with its params object — `value` is the datum.
        const label = withKnobs.label as { formatter?: (params: { value: unknown }) => string };
        expect(label.formatter).toBeTypeOf('function');
        expect(label.formatter!({ value: [1, 1.5] })).toBe('1,5 W'); // decimals clamp + comma + unit

        // Gated like the tooltip's valueFormatter: no knob authored → echarts' own label default.
        expect(s0([{ label: true }]).label).not.toHaveProperty('formatter');
        // Comma alone is a knob too (ADR-0054 rule, same gate as the tooltip).
        const commaOnly = s0([{ label: true }], { decimalComma: true });
        expect(
            (commaOnly.label as { formatter: (params: { value: unknown }) => string }).formatter({ value: 2.5 }),
        ).toBe('2,5');
    });

    it('a line label ignores the bar POSITION knob, but resolves its colour explicitly (ADR 0080)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ label: true, labelPosition: 'inside', labelFontSize: 20, labelColor: '#f00' }],
            p: P, // cartesianType stays 'line'
        });
        // Position/size stay bar-only; an authored colour now WINS on lines too (it was a dead
        // knob before) — and the bare switch resolves to the series colour, never sparse: a
        // colourless attached label would get echarts' white bg-contrast halo.
        expect((option.series as Record<string, unknown>[])[0].label).toEqual({ show: true, color: '#f00' });
        const bare = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ label: true }],
            p: P,
        });
        expect((bare.series as Record<string, unknown>[])[0].label).toEqual({ show: true, color: '#1' }); // palette slot 0
    });

    it('a line label shows its symbols — echarts paints line labels only on symbols, so „Label an" stays visible', () => {
        const lineEntry = (meta: EchartsSeriesMeta): Record<string, unknown> =>
            (
                buildGeneratedOption({
                    family: 'cartesian',
                    series: [{ name: 'A', data: [[1, 21.5]] }],
                    meta: [meta],
                    p: P, // cartesianType stays 'line'
                }).series as Record<string, unknown>[]
            )[0];
        // Label on, symbols unset → the symbols carry the labels.
        expect(lineEntry({ label: true, unit: '°C' }).showSymbol).toBe(true);
        // An explicit symbol switch-off cannot hide the labels' only carrier: label on wins.
        expect(lineEntry({ label: true, symbol: false }).showSymbol).toBe(true);
        expect(lineEntry({ label: true, symbol: true }).showSymbol).toBe(true);
        // Without a label the symbol switch alone decides (unset = off), unchanged.
        expect(lineEntry({}).showSymbol).toBe(false);
        expect(lineEntry({ symbol: false }).showSymbol).toBe(false);
        expect(lineEntry({ symbol: true }).showSymbol).toBe(true);
        expect(lineEntry({ label: false }).showSymbol).toBe(false);
    });

    it('label off wins over authored knobs — no label key at all', () => {
        expect(s0([{ labelPosition: 'inside', labelFontSize: 20 }])).not.toHaveProperty('label');
    });

    it('barWidth: plain digits emit a px number, a trailing % emits the string, unset/invalid emit nothing', () => {
        expect(s0([{ barWidth: '20' }]).barWidth).toBe(20);
        expect(s0([{ barWidth: '20' }]).barWidth).not.toBe('20'); // real number, not the raw string
        expect(s0([{ barWidth: '30%' }]).barWidth).toBe('30%');
        expect(s0([{}])).not.toHaveProperty('barWidth');
        expect(s0([{ barWidth: '' }])).not.toHaveProperty('barWidth');
        expect(s0([{ barWidth: 'narrow' }])).not.toHaveProperty('barWidth'); // honest: invalid = default
        // Adapter parity: a resolved 0 is UNSET (auto), never a zero-width bar.
        expect(s0([{ barWidth: '0' }])).not.toHaveProperty('barWidth');
        expect(s0([{ barWidth: '0%' }])).not.toHaveProperty('barWidth');
    });
});

describe('buildGeneratedOption — per-series Wert-Formatter (ADR-0057, parity Build B)', () => {
    const WED = SAMPLE_TS;

    /** Build a cartesian option from series+meta pairs; the meta names must match the series. */
    const build = (
        meta: EchartsSeriesMeta[],
        over: Partial<PresentationBase & CartesianFragment> = {},
        series: ChartSeries[] = meta.map((m, i) => ({ name: m.name ?? `S${i}`, data: [[WED, i + 1]] })),
    ): ReturnType<typeof buildGeneratedOption> =>
        buildGeneratedOption({ family: 'cartesian', series, meta, p: { ...P, ...over } });

    /** The cartesian tooltip formatter invoked with one row per series name/value pair. */
    const tooltipRows = (
        option: ReturnType<typeof buildGeneratedOption>,
        rows: { name: string; value: unknown }[],
    ): string =>
        (option.tooltip as { formatter: (p: unknown) => string }).formatter(
            rows.map(r => ({ axisValue: WED, marker: '<m>', seriesName: r.name, value: [WED, r.value] })),
        );

    it('formats each tooltip ROW with its own series facts (unit + decimals)', () => {
        const option = build([
            { name: 'Temp', unit: '°C', decimals: 1 },
            { name: 'Power', unit: 'kW' },
            { name: 'Plain' },
        ]);
        const html = tooltipRows(option, [
            { name: 'Temp', value: 21.56 },
            { name: 'Power', value: 1.234 },
            { name: 'Plain', value: 3.7 },
        ]);
        expect(html).toContain('Temp: 21.6 °C'); // series decimals + unit
        expect(html).toContain('Power: 1.234 kW'); // series unit, no decimals → the number's own digits
        expect(html).toContain('Plain: 3.7'); // no facts at all → the bare value text
    });

    it('a series without facts falls back to the chart-level cluster; series facts win per fact', () => {
        const option = build([{ name: 'Own', unit: 'kWh' }, { name: 'Plain' }], {
            tooltipUnits: 'W',
            tooltipDecimals: 0,
        });
        const html = tooltipRows(option, [
            { name: 'Own', value: 21.56 }, // unit from the series, decimals from the chart
            { name: 'Plain', value: 3.7 }, // fully chart-level
        ]);
        expect(html).toContain('Own: 22 kWh');
        expect(html).toContain('Plain: 4 W');
    });

    it('resolves an authored template {c} through the per-series facts too', () => {
        const option = build([{ name: 'Temp', unit: '°C', decimals: 1 }], { tooltipTemplate: '{a} = {c}' });
        const html = (option.tooltip as { formatter: (p: unknown) => string }).formatter({
            marker: '<m>',
            seriesName: 'Temp',
            value: 21.56,
        });
        expect(html).toBe('<m> Temp = 21.6 °C');
    });

    it('bar label values ride the per-series formatter; series facts beat the chart-level cluster', () => {
        const option = build([{ name: 'W', label: true, unit: 'kW', decimals: 1 }], {
            cartesianType: 'bar',
            tooltipUnits: 'W',
        });
        const entry = (option.series as Record<string, unknown>[])[0];
        const fmt = (entry.label as { formatter: (params: { value: unknown }) => string }).formatter;
        expect(fmt({ value: 1.56 })).toBe('1.6 kW'); // the series unit + decimals win over the chart cluster
        // The chart-only path stays exactly as Build D shipped it (characterisation).
        const chartLevel = build([{ name: 'W', label: true }], {
            cartesianType: 'bar',
            tooltipUnits: 'W',
            tooltipDecimals: 1,
        });
        expect(
            (
                (chartLevel.series as Record<string, unknown>[])[0].label as {
                    formatter: (params: { value: unknown }) => string;
                }
            ).formatter({ value: 1.56 }),
        ).toBe('1.6 W');
    });

    it('a LINE label gets the formatter as well when facts exist; without facts it stays show + colour', () => {
        const withFacts = build([{ name: 'T', label: true, unit: '°C' }]);
        const lineLabel = (withFacts.series as Record<string, unknown>[])[0].label as {
            formatter?: (params: { value: unknown }) => string;
        };
        expect(lineLabel.formatter!({ value: [1, 21.5] })).toBe('21.5 °C');

        expect((build([{ name: 'T', label: true }]).series as Record<string, unknown>[])[0].label).toEqual({
            show: true,
            color: '#1', // the series colour — never colourless (ADR 0080)
        });
    });

    // ── Y-axis unit inheritance (explicit format wins, else the shared series unit) ─────
    it('inherits the unit into the default Y-axis labels when EVERY bound series shares it', () => {
        const option = build([
            { name: 'In', unit: '°C' },
            { name: 'Out', unit: '°C' },
        ]);
        const y0 = (option.yAxis as { axisLabel?: { formatter?: unknown } }[])[0];
        expect((y0.axisLabel?.formatter as (v: number) => string)(21.5)).toBe('21.5 °C');
        // The comma switch composes with the inherited unit.
        const comma = build([{ name: 'In', unit: '°C' }], { decimalComma: true });
        const yc = (comma.yAxis as { axisLabel?: { formatter?: unknown } }[])[0];
        expect((yc.axisLabel?.formatter as (v: number) => string)(21.5)).toBe('21,5 °C');
    });

    it('mixed or missing units inherit NOTHING (no label formatter without another axis knob)', () => {
        const mixed = build([
            { name: 'A', unit: '°C' },
            { name: 'B', unit: '%' },
        ]);
        expect((mixed.yAxis as { axisLabel?: Record<string, unknown> }[])[0].axisLabel).not.toHaveProperty('formatter');
        const withGap = build([{ name: 'A', unit: '°C' }, { name: 'B' }]); // one bound series unitless
        expect((withGap.yAxis as { axisLabel?: Record<string, unknown> }[])[0].axisLabel).not.toHaveProperty(
            'formatter',
        );
    });

    it('an authored axis format wins verbatim over the inherited unit', () => {
        const option = build([{ name: 'A', unit: '°C' }], { yAxes: [{ format: '{value} K' }] });
        const y0 = (option.yAxis as { axisLabel?: { formatter?: unknown } }[])[0];
        expect(y0.axisLabel?.formatter).toBe('{value} K');
    });
});

describe('buildGeneratedOption — bool/enum texts (ADR-0058, parity Build B)', () => {
    const WED = SAMPLE_TS;
    const STATES: Record<string, string> = { 0: 'AUS', 1: 'AUTO', 2: 'AN' };

    /** Build a cartesian option from series+meta pairs; the meta names must match the series. */
    const build = (
        meta: EchartsSeriesMeta[],
        over: Partial<PresentationBase & CartesianFragment> = {},
        series: ChartSeries[] = meta.map((m, i) => ({ name: m.name ?? `S${i}`, data: [[WED, i + 1]] })),
    ): ReturnType<typeof buildGeneratedOption> =>
        buildGeneratedOption({ family: 'cartesian', series, meta, p: { ...P, ...over } });

    const tooltipRows = (
        option: ReturnType<typeof buildGeneratedOption>,
        rows: { name: string; value: unknown }[],
    ): string =>
        (option.tooltip as { formatter: (p: unknown) => string }).formatter(
            rows.map(r => ({ axisValue: WED, marker: '<m>', seriesName: r.name, value: [WED, r.value] })),
        );

    it('tooltip rows map through the state names / bool texts; an in-between row stays empty', () => {
        const option = build([
            { name: 'Mode', states: STATES },
            { name: 'Pump', trueText: 'AN', falseText: 'AUS' },
        ]);
        const html = tooltipRows(option, [
            { name: 'Mode', value: 1 },
            { name: 'Mode', value: 0.5 }, // in-between — re-invoked formatter, empty text
            { name: 'Pump', value: 1 },
        ]);
        expect(html).toContain('Mode: AUTO');
        expect(html).toContain('Pump: AN');
        // The exact-miss row renders EMPTY (adapter: no half states) — not the bare number.
        const miss = (option.tooltip as { formatter: (p: unknown) => string }).formatter([
            { axisValue: WED, marker: '', seriesName: 'Mode', value: [WED, 0.5] },
        ]);
        expect(miss.endsWith('Mode: ')).toBe(true);
    });

    it('axis ticks map to the NEAREST state when every bound series shares the texts', () => {
        const option = build([
            { name: 'A', states: STATES },
            { name: 'B', states: STATES },
        ]);
        const fmt = (option.yAxis as { axisLabel?: { formatter?: unknown } }[])[0].axisLabel?.formatter as (
            v: number,
        ) => string;
        expect(fmt(1)).toBe('AUTO'); // exact hit too
        expect(fmt(0.5)).toBe('AUTO'); // next state up
        expect(fmt(1.7)).toBe('AN');
        expect(fmt(9)).toBe('AN'); // beyond the top → the highest state
    });

    it('a shared bool pair maps the axis split at 0.5', () => {
        const option = build([{ name: 'A', trueText: 'AN', falseText: 'AUS' }]);
        const fmt = (option.yAxis as { axisLabel?: { formatter?: unknown } }[])[0].axisLabel?.formatter as (
            v: number,
        ) => string;
        expect(fmt(1)).toBe('AN');
        expect(fmt(0.4)).toBe('AUS');
    });

    it('a textless or divergent bound series inherits NO axis mapping (its numbers must not lie)', () => {
        const textless = build([{ name: 'A', states: STATES }, { name: 'Plain' }]);
        expect((textless.yAxis as { axisLabel?: Record<string, unknown> }[])[0].axisLabel).not.toHaveProperty(
            'formatter',
        );
        const divergent = build([
            { name: 'A', states: STATES },
            { name: 'B', states: { 0: 'OFF', 1: 'ON' } },
        ]);
        expect((divergent.yAxis as { axisLabel?: Record<string, unknown> }[])[0].axisLabel).not.toHaveProperty(
            'formatter',
        );
    });

    it('the same mapping authored in a DIFFERENT row order still shares (order-insensitive equality)', () => {
        const reordered = build([
            { name: 'A', states: { 0: 'AUS', 1: 'AUTO', 2: 'AN' } },
            { name: 'B', states: { 2: 'AN', 1: 'AUTO', 0: 'AUS' } }, // same map, other order
        ]);
        const fmt = (reordered.yAxis as { axisLabel?: { formatter?: unknown } }[])[0].axisLabel?.formatter as (
            v: number,
        ) => string;
        expect(fmt(0.5)).toBe('AUTO');
    });

    it('label values render the text (bar), an authored axis format still wins over shared texts', () => {
        const labeled = build([{ name: 'M', label: true, states: STATES }], { cartesianType: 'bar' });
        const fmt = (
            (labeled.series as Record<string, unknown>[])[0].label as {
                formatter: (params: { value: unknown }) => string;
            }
        ).formatter;
        expect(fmt({ value: 2 })).toBe('AN');
        expect(fmt({ value: 0.5 })).toBe(''); // exact mode on a label

        const authored = build([{ name: 'A', states: STATES }], { yAxes: [{ format: '{value}' }] });
        expect((authored.yAxis as { axisLabel?: { formatter?: unknown } }[])[0].axisLabel?.formatter).toBe('{value}');
    });
});

describe('buildGeneratedOption — series rest knobs (ADR-0060, parity Build B)', () => {
    const WED = SAMPLE_TS;
    const s0 = (
        m: EchartsSeriesMeta,
        over: Partial<PresentationBase & CartesianFragment> = {},
    ): Record<string, unknown> =>
        (
            buildGeneratedOption({
                family: 'cartesian',
                series: [{ name: 'A', data: [[WED, 1]] }],
                meta: [m],
                p: { ...P, ...over },
            }).series as Record<string, unknown>[]
        )[0];

    it('scatter emits type scatter — no line/area/bar keys; symbolSize applies; stack is not emitted', () => {
        const scatter = s0({ type: 'scatter', symbolSize: 9, stack: 'A' });
        expect(scatter.type).toBe('scatter');
        expect(scatter.symbolSize).toBe(9);
        expect(scatter).not.toHaveProperty('lineStyle');
        expect(scatter).not.toHaveProperty('areaStyle');
        expect(scatter).not.toHaveProperty('stack');
        expect(scatter).not.toHaveProperty('barGap');
        // The chart-level default makes every non-overridden series a scatter too.
        const inherited = (
            buildGeneratedOption({
                family: 'cartesian',
                series: [{ name: 'A', data: [[WED, 1]] }],
                meta: [{}],
                p: { ...P, cartesianType: 'scatter' },
            }).series as Record<string, unknown>[]
        )[0];
        expect(inherited.type).toBe('scatter');
    });

    it('the line shadow emits lineStyle.shadowBlur in the series colour; unset stays sparse', () => {
        const withShadow = s0({ shadowBlur: 8, color: '#abc' });
        expect((withShadow.lineStyle as Record<string, unknown>).shadowBlur).toBe(8);
        expect((withShadow.lineStyle as Record<string, unknown>).shadowColor).toBe('#abc');
        expect(s0({}).lineStyle).not.toHaveProperty('shadowBlur');
    });

    it('„Nur in Legende": the series stays emitted, its legend entry lands PRE-DESELECTED', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[WED, 1]] },
                { name: 'B', data: [[WED, 2]] },
            ],
            meta: [{ legendOnly: true }, {}],
            p: P,
        });
        const legend = option.legend as Record<string, unknown>;
        expect(legend.selected).toEqual({ A: false, B: true });
        expect((option.series as unknown[]).map(s => (s as { name: string }).name)).toEqual(['A', 'B']);
        // Without the flag there is no selected key at all (ADR-0054 rule).
        expect(
            buildGeneratedOption({ family: 'cartesian', series: [{ name: 'A', data: [[WED, 1]] }], meta: [{}], p: P })
                .legend as Record<string, unknown>,
        ).not.toHaveProperty('selected');
    });
});

describe('buildGeneratedOption — Legenden-Folge (ADR-0074: axes follow the legend selection)', () => {
    // The standard interleaved trio (balanceAxes shape): L0 / R0 / L80.
    const threeP = {
        ...P,
        yAxes: [{}, { position: 'right' as const }, { position: 'left' as const, offset: 80 }],
    };
    const threeSeries: ChartSeries[] = [
        { name: 'A', data: [[1, 1]] },
        { name: 'B', data: [[1, 2]] },
        { name: 'C', data: [[1, 3]] },
    ];
    const threeMeta = [
        { name: 'A', yAxisIndex: 0 },
        { name: 'B', yAxisIndex: 1 },
        { name: 'C', yAxisIndex: 2 },
    ];
    const entriesOf = (option: { series?: unknown }): { name: string; yAxisIndex?: number }[] =>
        option.series as { name: string; yAxisIndex?: number }[];
    const axesOf = (option: { yAxis?: unknown }): Record<string, unknown>[] =>
        option.yAxis as Record<string, unknown>[];

    it('a fully deselected axis is not emitted — its series stays with the clamped ref (grid off, no synthesized axes)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: threeSeries,
            meta: threeMeta,
            p: { ...threeP, legendSelection: { A: false } },
        });
        expect(axesOf(option)).toHaveLength(2); // axis 0 gone
        const byName = Object.fromEntries(entriesOf(option).map(e => [e.name, e.yAxisIndex]));
        expect(byName).toEqual({ A: 0, B: 0, C: 1 }); // A clamped, B/C remapped onto the compact array
    });

    it('1:n — one active binder keeps the axis (the Alle-Binder rule)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'B', data: [[1, 2]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 0 },
            ],
            p: { ...P, legendSelection: { A: false } },
        });
        expect(axesOf(option)).toHaveLength(1);
    });

    it('„Nur in Legende" hides the axis from the first render — config parity, no state needed', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'B', data: [[1, 2]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0, legendOnly: true },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{}, {}] },
        });
        expect(axesOf(option)).toHaveLength(1);
        expect((option.legend as Record<string, unknown>).selected).toEqual({ A: false, B: true });
    });

    it('visible axes re-slot into the standard interleaving — sides flip (balanceAxes semantics, display-only)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: threeSeries,
            meta: threeMeta,
            p: { ...threeP, legendSelection: { A: false } },
        });
        const [first, second] = axesOf(option);
        expect(first).toMatchObject({ position: 'left', offset: 0 }); // B's axis, re-slotted from right
        expect(second).toMatchObject({ position: 'right', offset: 0 }); // C's axis, re-slotted from left/80
    });

    it('everything active → authored geometry verbatim (the all-visible invariant, byte-identical)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: threeSeries,
            meta: threeMeta,
            p: threeP,
        });
        expect(axesOf(option).map(a => [a.position, a.offset])).toEqual([
            ['left', 0],
            ['right', 0],
            ['left', 80],
        ]);
    });

    it('all deselected + grid OFF → ONE silent carrier axis keeps the grid renderable', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: threeSeries,
            meta: threeMeta,
            p: { ...threeP, legendSelection: { A: false, B: false, C: false } },
        });
        const ya = axesOf(option);
        expect(ya).toHaveLength(1);
        expect(ya[0].show).toBe(false); // silent in full — no line, no labels, no name
    });

    it('all deselected + grid ON → the ONE silent carrier; the X min/max gridlines close the edges', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: threeSeries,
            meta: threeMeta,
            p: { ...threeP, xAxis: { splitLine: true }, legendSelection: { A: false, B: false, C: false } },
        });
        const ya = axesOf(option);
        expect(ya).toHaveLength(1); // ONE silent carrier — no synthesized twins any more (addendum 6)
        expect(ya[0].show).toBe(false);
        // The invisible carrier staffs NO side (Achsen-Vorrang): both vertical edges get their
        // extent gridline in the full splitLine style.
        const x = option.xAxis as unknown as { splitLine: { showMinLine?: boolean; showMaxLine?: boolean } };
        expect(x.splitLine.showMinLine).toBe(true);
        expect(x.splitLine.showMaxLine).toBe(true);
    });

    it('grid ON: the freed side opens to the X-max extent gridline — the staffed check sees the re-slotted positions', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'B', data: [[1, 2]] },
            ],
            meta: [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, yAxes: [{}, {}], xAxis: { splitLine: true }, legendSelection: { A: false } },
        });
        const ya = axesOf(option);
        // B's real axis, re-slotted from right to left — no twin fills the freed side any more.
        expect(ya.map(a => a.position)).toEqual(['left']);
        expect((ya[0].axisLabel as { show?: boolean } | undefined)?.show).toBeUndefined(); // real axis keeps labels
        const x = option.xAxis as unknown as { splitLine: { showMinLine?: boolean; showMaxLine?: boolean } };
        expect(x.splitLine.showMinLine).toBe(false); // left staffed (re-slotted) → Achsen-Vorrang
        expect(x.splitLine.showMaxLine).toBe(true); // right freed → the extent gridline closes it
    });

    it('markings re-anchor to the first ACTIVE binder — they die with the axis, not with the host', () => {
        const build = (legendSelection: Record<string, boolean>): ReturnType<typeof buildGeneratedOption> =>
            buildGeneratedOption({
                family: 'cartesian',
                series: [
                    { name: 'A', data: [[1, 1]] },
                    { name: 'B', data: [[1, 2]] },
                ],
                meta: [
                    { name: 'A', yAxisIndex: 0 },
                    { name: 'B', yAxisIndex: 0 },
                ],
                p: { ...P, legendSelection, markLines: [{ id: 'm', upper: 5 }] },
            });
        const reAnchored = entriesOf(build({ A: false })) as { name: string; markLine?: unknown }[];
        expect(reAnchored[0].markLine).toBeUndefined();
        expect(reAnchored[1].markLine).toBeDefined(); // rides B now
        const resting = entriesOf(build({ A: false, B: false })) as { markLine?: unknown }[];
        expect(resting.every(s => s.markLine === undefined)).toBe(true); // the axis rests — the marking rests
        // All active → the first binder hosts (the pre-0074 shape).
        const host = entriesOf(build({})) as { name: string; markLine?: unknown }[];
        expect(host[0].markLine).toBeDefined();
        expect(host[1].markLine).toBeUndefined();
    });
});

describe('buildGeneratedOption — marking bands (ADR-0062 + ADR-0076 adapter-parity edges)', () => {
    /** Build with the given marks; return the first series' marker blocks. */
    const markers = (
        markLines: EchartsMarkLine[],
    ): { markLine?: { data: Record<string, unknown>[] }; markArea?: { data: unknown[] } } => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, markLines },
        });
        const first = (option.series as unknown[])[0] as {
            markLine?: { data: Record<string, unknown>[] };
            markArea?: { data: unknown[] };
        };
        return first;
    };

    it('both bounds ⇒ markArea band (fill default 0.2, colour, borderless) + TWO edge lines', () => {
        const m = markers([{ id: '1', upper: 24, lower: 18, color: '#c' }]);
        expect(m.markArea).toBeDefined();
        expect(m.markLine).toBeDefined(); // ADR-0076: the band KEEPS its two edge lines
        const [start, end] = m.markArea!.data[0] as [Record<string, unknown>, Record<string, unknown>];
        expect(start.yAxis).toBe(18);
        expect(end.yAxis).toBe(24);
        expect(start.itemStyle).toEqual({ color: '#c', borderWidth: 0, opacity: 0.2 });
        // Upper edge first, then the lower — both carry the full style, each its own label cluster.
        expect(m.markLine!.data).toHaveLength(2);
        expect(m.markLine!.data[0].yAxis).toBe(24);
        expect(m.markLine!.data[1].yAxis).toBe(18);
    });

    it('authored fill wins over the 0.2 default', () => {
        const [start] = markers([{ upper: 24, lower: 18, fill: 0.6 }]).markArea!.data[0] as [Record<string, unknown>];
        expect((start.itemStyle as Record<string, unknown>).opacity).toBe(0.6);
    });

    it('band edges carry the style cluster on BOTH edges (type/width/shadow, adapter formula)', () => {
        const m = markers([{ upper: 24, lower: 18, color: '#c', lineStyle: 'dotted', width: 4, shadow: 2 }]);
        const expectEdge = (entry: Record<string, unknown>): void => {
            expect(entry.lineStyle).toEqual({
                type: 'dotted',
                color: '#c',
                width: 4,
                shadowBlur: 3, // v+1 in the line's own colour — the adapter `os` formula
                shadowOffsetY: 3,
                shadowColor: '#c',
            });
        };
        expectEdge(m.markLine!.data[0]);
        expectEdge(m.markLine!.data[1]);
    });

    it('band edges without authored width draw the 2 default (the slider fallback)', () => {
        const m = markers([{ upper: 24, lower: 18 }]);
        expect((m.markLine!.data[0].lineStyle as Record<string, unknown>).width).toBe(2);
        expect((m.markLine!.data[1].lineStyle as Record<string, unknown>).width).toBe(2);
    });

    it('band edges carry their OWN label clusters (upper + lower, full incl. position/X-offset) — the area is label-less', () => {
        const m = markers([
            {
                upper: 24,
                lower: 18,
                labelUpper: 'Max',
                labelUpperSize: 11,
                labelUpperColor: '#ff0',
                labelUpperPosition: 'end',
                labelUpperOffset: 5,
                labelLower: 'Min',
                labelLowerSize: 9,
                labelLowerColor: '#0ff',
                labelLowerPosition: 'start',
                labelLowerOffset: 3,
            },
        ]);
        // Each edge carries its FULL cluster — position and X-offset work on bands (ADR-0076/0081).
        expect(m.markLine!.data[0].label).toEqual({
            formatter: 'Max',
            position: 'end',
            distance: [-5, 0], // negated on the end places, like the single-line case
            fontSize: 11,
            color: '#ff0',
        });
        expect(m.markLine!.data[1].label).toEqual({
            formatter: 'Min',
            position: 'start',
            distance: [-3, 0],
            fontSize: 9,
            color: '#0ff',
        });
        const [start] = m.markArea!.data[0] as [Record<string, unknown>, Record<string, unknown>];
        expect('label' in start).toBe(false); // the area itself carries NO label (adapter parity)
    });

    it('a textless band shows BOTH bound values (the Wert-Fallback, styled — never the echarts raw default)', () => {
        const m = markers([{ upper: 24, lower: 18, color: '#c' }]);
        expect(m.markLine!.data[0].label).toEqual({ formatter: '24', color: '#c' }); // inherit = marking colour
        expect(m.markLine!.data[1].label).toEqual({ formatter: '18', color: '#c' });
        const [start] = m.markArea!.data[0] as [Record<string, unknown>, Record<string, unknown>];
        expect('label' in start).toBe(false); // the area stays label-less
    });

    it("exactly one resolved bound ⇒ a markLine at that bound carrying ITS bound's cluster", () => {
        const up = markers([{ upper: 24 }]).markLine!;
        expect(up.data[0].yAxis).toBe(24);
        const low = markers([{ lower: 18, labelLower: 'Min', labelLowerColor: '#0ff' }]).markLine!;
        expect(low.data[0].yAxis).toBe(18);
        expect(low.data[0].label).toEqual({ formatter: 'Min', color: '#0ff' }); // the lower cluster rides the lone lower line
        expect(markers([{ upper: 24, labelLower: 'Min' }]).markLine!.data[0].label).toEqual({
            formatter: '24',
            color: '#ts',
        }); // the upper line ignores the inert lower cluster (Wert-Fallback)
        expect(markers([{ upper: 24 }]).markArea).toBeUndefined();
    });

    it('no resolved bound (or unresolved string bounds) ⇒ nothing emitted at all', () => {
        const none = markers([{ id: '1' }]);
        expect(none.markLine).toBeUndefined();
        expect(none.markArea).toBeUndefined();
        const unresolved = markers([{ upper: '0_userdata.0.x', lower: '0_userdata.0.y' }]);
        expect(unresolved.markLine).toBeUndefined();
        expect(unresolved.markArea).toBeUndefined();
    });

    it('a band and a line on the same axis share one host series', () => {
        const m = markers([{ upper: 24, lower: 18 }, { upper: 30 }]);
        expect(m.markArea).toBeDefined();
        expect(m.markLine).toBeDefined();
        expect(m.markLine!.data).toHaveLength(3); // two band edges + the standalone line
        expect(m.markArea!.data).toHaveLength(1);
    });

    it('the band attaches to the first series of the TARGET axis (multi-axis host, ADR-0023)', () => {
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
                yAxes: [{}, { position: 'right' }],
                markLines: [{ upper: 5000, lower: 4000, yAxisIndex: 1 }],
            },
        });
        const series = option.series as unknown as {
            name: string;
            markArea?: unknown;
            markLine?: unknown;
        }[];
        expect(series[1].markArea).toBeDefined();
        expect(series[1].markLine).toBeDefined(); // the edges follow their band's host
        expect(series[0].markArea).toBeUndefined();
        expect(series[0].markLine).toBeUndefined();
    });
});

describe('buildGeneratedOption — Plotkanten: native min/max gridlines + Achsen-Vorrang (ADR-0070 addendum 6)', () => {
    /** P with the X gridlines ON — the extent gridlines' gate (grid-coupled, addendum 4 unchanged). */
    const PG = { ...P, xAxis: { splitLine: true } };
    const splitOf = (option: { xAxis?: unknown }): Record<string, unknown> =>
        ((option.xAxis as Record<string, unknown> | undefined)?.splitLine ?? {}) as Record<string, unknown>;
    const gridOf = (option: Record<string, unknown>): Record<string, unknown> => option.grid as Record<string, unknown>;

    it('the unstaffed side closes via echarts own extent gridline in FULL splitLine style (the K1 case, addendum 6)', () => {
        // One bound axis (left, offset 0) staffs the LEFT edge — the right side's closure is the
        // native showMaxLine: same colour, width, type (GUI fields + raw) as every inner line.
        // A synthesized border axis could never inherit that style — the addendum-6 trigger.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { splitLine: true, gridColor: '#3ec429', gridWidth: 5 } },
        });
        expect(splitOf(option)).toEqual({
            show: true,
            showMinLine: false, // left staffed → Achsen-Vorrang: the axis line owns that edge
            showMaxLine: true, // right naked → the extent gridline closes it
            lineStyle: { color: '#3ec429', width: 5 },
        });
    });

    it('Achsen-Vorrang: a side whose axes all carry a Versatz is NAKED — the extent gridline owns it (K4)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, yAxes: [{ position: 'left', offset: 80 }], xAxis: { splitLine: true } },
        });
        expect(splitOf(option).showMinLine).toBe(true);
        expect(splitOf(option).showMaxLine).toBe(true);
    });

    it('a two-sided chart: BOTH vertical edges belong to the axis lines (both extent gridlines suppressed)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[1, 2]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{ name: 'A' }, { name: 'B', yAxisIndex: 1 }],
            p: { ...P, yAxes: [{}, { position: 'right' }], xAxis: { splitLine: true } },
        });
        expect(splitOf(option).showMinLine).toBe(false);
        expect(splitOf(option).showMaxLine).toBe(false);
    });

    it('X at TOP flips the horizontal Vorrang: the Y-MAX line yields, the Y-MIN line returns (single-object X)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { position: 'top', splitLine: true } },
        });
        // X stays the SINGLE object (no top-mirror twin array any more — addendum 6)
        expect(Array.isArray(option.xAxis)).toBe(false);
        const ya = option.yAxis as unknown as Record<string, { splitLine?: Record<string, unknown> }>[];
        expect(ya[0].splitLine).toMatchObject({ showMinLine: true, showMaxLine: false });
        // …and the default (X at bottom) suppresses Y-MIN instead:
        const bottom = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: PG,
        });
        const yb = bottom.yAxis as unknown as Record<string, { splitLine?: Record<string, unknown> }>[];
        expect(yb[0].splitLine).toMatchObject({ showMinLine: false, showMaxLine: true });
    });

    it('a raw `{ "position": "top" }` hand-edit counts for the Vorrang (emitted truth)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { splitLine: true, raw: '{ "position": "top" }' } },
        });
        const ya = option.yAxis as unknown as Record<string, { splitLine?: Record<string, unknown> }>[];
        expect(ya[0].splitLine).toMatchObject({ showMinLine: true, showMaxLine: false });
    });

    it('a VERSATZ lifts the X axis off both edges — BOTH horizontal gridlines draw (erratum, symmetric to a versetzte Y axis)', () => {
        const y0Of = (o: { yAxis?: unknown }): Record<string, unknown> | undefined =>
            (o.yAxis as { splitLine?: Record<string, unknown> }[])[0]?.splitLine;
        // X at 'bottom' + Versatz: the line floats below the plot — the bottom edge is NOT covered,
        // the Y-MIN gridline returns (the report case "unten kein Gitterstrich").
        const bottomOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { splitLine: true, offset: 24 } },
        });
        expect(y0Of(bottomOffset)).toMatchObject({ showMinLine: true, showMaxLine: true });

        // X at 'top' + Versatz: the top edge opens the same way.
        const topOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { position: 'top', splitLine: true, offset: 12 } },
        });
        expect(y0Of(topOffset)).toMatchObject({ showMinLine: true, showMaxLine: true });

        // A raw offset counts too (the same emitted-truth rule)…
        const rawOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { splitLine: true, raw: '{ "offset": 10 }' } },
        });
        expect(y0Of(rawOffset)).toMatchObject({ showMinLine: true, showMaxLine: true });

        // …and offset 0 is "unset" (never emitted) — the Vorrang stays intact at the edge.
        const zeroOffset = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: { ...P, xAxis: { splitLine: true, offset: 0 } },
        });
        expect(y0Of(zeroOffset)).toMatchObject({ showMinLine: false, showMaxLine: true });
    });

    it('the grid style cluster rides the splitLine: colour+width+type emit, unset stays sparse (X and Y)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                xAxis: { splitLine: true, gridColor: '#0a0', gridWidth: 3, gridType: 'dashed' },
                yAxes: [{ gridWidth: 2, gridType: 'dotted' }],
            },
        });
        expect(splitOf(option).lineStyle).toEqual({ color: '#0a0', width: 3, type: 'dashed' });
        const y0 = (option.yAxis as unknown as Record<string, unknown>[])[0] as {
            splitLine?: { lineStyle?: Record<string, unknown> };
        };
        expect(y0.splitLine?.lineStyle).toEqual({ color: '#d', width: 2, type: 'dotted' });

        // All unset → NO lineStyle leaf at all: the raw override keeps owning it wholesale
        // (the parity-Build-D sparseness rule, extended to the new leaves).
        const bare = buildGeneratedOption({ family: 'cartesian', series: [], meta: [], p: P });
        expect(splitOf(bare)).not.toHaveProperty('lineStyle');
    });

    it('the grid inset clears half the effective stroke width so the flush edge keeps its full line', () => {
        const at = (xAxis: Record<string, unknown>): Record<string, unknown> =>
            gridOf(
                buildGeneratedOption({
                    family: 'cartesian',
                    series: [{ name: 'A', data: [[1, 2]] }],
                    meta: [{ name: 'A' }],
                    p: { ...P, xAxis: { splitLine: true, ...xAxis } },
                }) as unknown as Record<string, unknown>,
            );
        expect(at({})).toMatchObject({ left: 1, right: 1 }); // echarts default width 1 → half a px, rounded up
        expect(at({ gridWidth: 5 })).toMatchObject({ left: 3, right: 3 }); // the user's report case
        expect(at({ raw: '{ "splitLine": { "lineStyle": { "width": 10 } } }' })).toMatchObject({
            left: 5,
            right: 5,
        }); // raw width feeds the inset too
        expect(at({ gridWidth: 4, raw: '{ "splitLine": { "lineStyle": { "width": 40 } } }' })).toMatchObject({
            left: 2,
            right: 2,
        }); // GUI width wins the collision
        expect(at({ raw: '{ "splitLine": { "lineStyle": { "width": 40 } } }' })).toMatchObject({
            left: 10,
            right: 10,
        }); // absurd widths cap at 10px so the layout survives

        // Grid OFF → no inset, and NO min/max keys at all (they follow their switch, addendum 4
        // — the emitted truth stays honest on every switch state).
        const off = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[1, 2]] }],
            meta: [{ name: 'A' }],
            p: P,
        });
        expect(gridOf(off as unknown as Record<string, unknown>)).toMatchObject({ left: 0, right: 0 });
        expect(splitOf(off)).not.toHaveProperty('showMinLine');
        expect(splitOf(off)).not.toHaveProperty('showMaxLine');
    });
});

// ── string categories on X (ADR-0075 ticket 05: the table family's Kategorieachse) ──

describe('buildGeneratedOption — string categories on X (ADR-0075 ticket 05)', () => {
    const pTable = (
        over: Partial<PresentationBase & CartesianFragment> = {},
    ): PresentationBase & CartesianFragment => ({
        ...P,
        xCategories: ['Jan', 'Feb', 'Jan'],
        ...over,
    });

    it('xCategories → type category + string data, NO moment formatter, time knobs skipped', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1, 2, 3] }],
            meta: [{ name: 'A' }],
            p: pTable({ xAxis: { format: 'DD.MM.YY', splitNumber: 5, minInterval: 1000 } }),
        });
        const xa = option.xAxis as Record<string, unknown>;
        expect(xa.type).toBe('category');
        expect(xa.data).toEqual(['Jan', 'Feb', 'Jan']);
        expect((xa.axisLabel as Record<string, unknown> | undefined)?.formatter).toBeUndefined();
        expect(xa.splitNumber).toBeUndefined(); // time-axis-only knobs skip on BOTH flavours
        expect(xa.minInterval).toBeUndefined();
    });

    it('barCategories (numbers) keep the moment formatter — the two flavours stay separate', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1, 2] }],
            meta: [{ name: 'A' }],
            p: { ...P, cartesianType: 'bar', barCategories: [100, 200] },
        });
        const xa = option.xAxis as Record<string, unknown>;
        expect(xa.type).toBe('category');
        expect(typeof (xa.axisLabel as Record<string, unknown>).formatter).toBe('function');
    });

    it('label knobs still apply on string categories (rotate/size/colour)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1] }],
            meta: [{ name: 'A' }],
            p: pTable({ xAxis: { labelRotate: 30, labelFontSize: 14, color: '#123' } }),
        });
        const xa = option.xAxis as Record<string, unknown>;
        expect((xa.axisLabel as Record<string, unknown>).rotate).toBe(30);
        expect((xa.axisLabel as Record<string, unknown>).fontSize).toBe(14);
        expect((xa.axisLabel as Record<string, unknown>).color).toBe('#123');
    });

    it('the top-positioned category X stays the SINGLE object — no mirror twin (addendum 6)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1] }],
            meta: [{ name: 'A' }],
            p: pTable({ xAxis: { position: 'top', splitLine: true } }),
        });
        // The bottom edge's closure is the Y-min extent gridline now — no synthesized mirror axis.
        const xa = option.xAxis as unknown as Record<string, unknown>;
        expect(Array.isArray(option.xAxis)).toBe(false);
        expect(xa).toMatchObject({ type: 'category', position: 'top', data: ['Jan', 'Feb', 'Jan'] });
    });

    it('tooltip: the CATEGORY NAME is the header — no moment time on a nameless data shape', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [21.5] }],
            meta: [{ name: 'A' }],
            p: pTable(),
        });
        const t = (option.tooltip as { formatter: (p: unknown) => string }).formatter;
        const html = t([{ name: 'Feb', marker: '<m>', seriesName: 'A', value: 21.5 }]);
        expect(html).toBe('<b>Feb</b><br/><m> A: 21.5');
    });

    it('tooltip: an authored template still wins — {b} resolves to the category name', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [21.5] }],
            meta: [{ name: 'A' }],
            p: pTable({ tooltipTemplate: '{b}: {c}' }),
        });
        const t = (option.tooltip as { formatter: (p: unknown) => string }).formatter;
        const html = t({ name: 'Feb', marker: '<m>', seriesName: 'A', value: 21.5 });
        expect(html).toBe('<m> Feb: 21.5');
    });

    it('time-X keeps the moment header and formatter (Verlauf/serien-förmig byte-stable)', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[SAMPLE_TS, 21.5]] }],
            meta: [{ name: 'A' }],
            p: P, // no categories at all
        });
        const xa = option.xAxis as Record<string, unknown>;
        expect(xa.type).toBe('time');
        expect(typeof (xa.axisLabel as Record<string, unknown>).formatter).toBe('function');
    });
});

describe('buildGeneratedOption — category-X edge contracts (ADR-0075 ticket 05)', () => {
    it('dataZoom rides along unchanged on a category X — inside/slider zoom over category indices', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1, 2] }],
            meta: [{ name: 'A' }],
            p: {
                ...P,
                xCategories: ['Jan', 'Feb'],
                dataZoomInside: true,
                dataZoomSlider: true,
            },
        });
        expect(option.dataZoom).toMatchObject([
            { type: 'inside', start: 0, end: 100 },
            { type: 'slider', start: 0, end: 100 },
        ]);
    });

    it('grid OFF under category X: no mirror twin — xAxis stays the single object', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [1] }],
            meta: [{ name: 'A' }],
            p: { ...P, xCategories: ['Jan'], xAxis: { position: 'top' } }, // splitLine default OFF
        });
        expect(Array.isArray(option.xAxis)).toBe(false);
        expect(option.xAxis).toMatchObject({ type: 'category', position: 'top', data: ['Jan'] });
    });
});

// ── the tabellarische PIE: concentric rings (ADR-0075 decision 5, ticket 06) ──

describe('buildPieOption — slice-shaped rings (ADR-0075 ticket 06)', () => {
    const slices = (names: string[], values: (number | null)[]): { name: string; value: number | null }[] =>
        names.map((name, i) => ({ name, value: values[i] ?? null }));

    it('S=1 keeps the full area (inner..70) like the aggregate pie optically', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'a', data: slices(['x', 'y'], [1, 2]) }],
            meta: [{}],
            p: PIE_P,
        });
        const s = (option.series as Record<string, unknown>[])[0];
        expect(s.radius).toEqual(['0%', '70%']);
    });

    it('S=2/S=3 bands are gapless, series 0 OUTERMOST, the donut hole respected', () => {
        const two = buildGeneratedOption({
            family: 'pie',
            series: [
                { name: 'a', data: slices(['x'], [1]) },
                { name: 'b', data: slices(['x'], [2]) },
            ],
            meta: [{}, {}],
            p: { ...PIE_P, pie: { ...PIE_P.pie, innerRadius: 0.3 } },
        });
        const radii = (two.series as Record<string, unknown>[]).map(s => s.radius);
        expect(radii[0]).toEqual(['50%', '70%']); // band 35..70..? band=(70-30)/2=20 → ring0 [50,70]
        expect(radii[1]).toEqual(['30%', '50%']); // ring1 hugs the donut hole

        const three = buildGeneratedOption({
            family: 'pie',
            series: [
                { name: 'a', data: slices(['x'], [1]) },
                { name: 'b', data: slices(['x'], [2]) },
                { name: 'c', data: slices(['x'], [3]) },
            ],
            meta: [{}, {}, {}],
            p: PIE_P, // inner 0 → band 70/3
        });
        const r3 = (three.series as Record<string, unknown>[]).map(s => s.radius as string[]);
        expect(r3[0][0]).not.toBe(r3[1][0]); // distinct bands
        expect(r3[2][0]).toBe('0%'); // the innermost ring starts at the hole
        expect(r3[0][1]).toBe('70%'); // the outermost ring ends at the edge
    });

    it('kategoriestabile Palette: the SAME name wears the SAME colour in every ring; meta.color is inert', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [
                { name: 'a', data: slices(['Jan', 'Feb'], [1, 2]) },
                { name: 'b', data: slices(['Feb', 'Jan'], [3, 4]) }, // swapped order — same names
            ],
            meta: [{ name: 'Ring A', color: '#evil' }, { name: 'Ring B' }],
            p: PIE_P,
        });
        const rings = option.series as unknown as {
            name: string;
            data: { name: string; itemStyle: { color: string } }[];
        }[];
        expect(rings[0].name).toBe('Ring A'); // meta.name is the RING identity
        const colorOf = (ring: number, slice: string): string =>
            rings[ring].data.find(d => d.name === slice)!.itemStyle.color;
        expect(colorOf(0, 'Jan')).toBe(colorOf(1, 'Jan'));
        expect(colorOf(0, 'Feb')).toBe(colorOf(1, 'Feb'));
        expect(colorOf(0, 'Jan')).not.toBe(colorOf(0, 'Feb'));
        expect(rings[0].data.every(d => d.itemStyle.color !== '#evil')).toBe(true); // meta.color NOT read
    });

    it('the legend names are the CATEGORIES (the union across rings), duplicates stay slices', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [{ name: 'a', data: slices(['Jan', 'Feb', 'Jan'], [1, 2, 3]) }],
            meta: [{}],
            p: PIE_P,
        });
        const legend = option.legend as Record<string, unknown>;
        expect(legend.data).toEqual(['Jan', 'Feb']);
        const ring = (option.series as Record<string, unknown>[])[0];
        expect((ring.data as unknown[]).length).toBe(3); // the duplicate keeps its own slice
    });

    it('point-shaped pie (Verlauf/serien-förmig) stays byte-stable — one series, aggregate', () => {
        const option = buildGeneratedOption({
            family: 'pie',
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 5],
                        [2, 7],
                    ],
                },
            ],
            meta: [{ name: 'Slice', color: '#0af' }],
            p: PIE_P,
        });
        const series = option.series as Record<string, unknown>[];
        expect(series).toHaveLength(1);
        expect(series[0].radius).toEqual(['0%', '70%']);
        const data = series[0].data as { value: number; itemStyle: { color: string } }[];
        expect(data[0].value).toBe(7); // latest
        expect(data[0].itemStyle.color).toBe('#0af'); // meta.color DOES paint aggregate slices
    });
});

describe('buildGeneratedOption — Balken-Stapelmodus (ADR-0084: Auflösung, Kopplung, Anker)', () => {
    const WED = SAMPLE_TS;
    /** Bars over the bucket grid (plain arrays + barCategories riding the fragment). */
    const buildBars = (
        metas: EchartsSeriesMeta[],
        data: (number | null)[][],
        over: Partial<PresentationBase & CartesianFragment> = {},
    ): Record<string, unknown> =>
        buildGeneratedOption({
            family: 'cartesian',
            series: metas.map((m, i) => ({ name: m.name ?? `S${i}`, data: data[i] })),
            meta: metas,
            p: {
                ...P,
                cartesianType: 'bar',
                barCategories: [WED, WED + 3_600_000, WED + 7_200_000],
                ...over,
            },
        }) as Record<string, unknown>;

    const stackOf = (option: Record<string, unknown>, i: number): string | undefined =>
        (option.series as Record<string, unknown>[])[i].stack as string | undefined;

    it('mode none: inheriting bars emit NO stack key (sparse); explicit groups still work', () => {
        const option = buildBars(
            [{ name: 'A' }, { name: 'B' }, { name: 'C', stack: 'A' }, { name: 'D', stack: 'A' }],
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [1, 1, 1],
            ],
        );
        expect(stackOf(option, 0)).toBeUndefined();
        expect(stackOf(option, 1)).toBeUndefined();
        // Groups are mode-INDEPENDENT (decision 2) — and axis-coupled (decision 3).
        expect(stackOf(option, 2)).toBe('A#0');
        expect(stackOf(option, 3)).toBe('A#0');
    });

    it('mode stack: inheriting bars join the mode stack; an opted-out series stays out', () => {
        const option = buildBars(
            [{ name: 'A' }, { name: 'B' }, { name: 'C', stack: 'none' }],
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ],
            { stackMode: 'stack' },
        );
        expect(stackOf(option, 0)).toBe('total#0');
        expect(stackOf(option, 1)).toBe('total#0');
        expect(stackOf(option, 2)).toBeUndefined();
    });

    it('axis coupling: two Y-axes → separate mode stacks even with the same group', () => {
        const option = buildBars(
            [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 0 },
                { name: 'C', yAxisIndex: 1, stack: 'A' },
                { name: 'D', yAxisIndex: 0, stack: 'A' },
            ],
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [1, 1, 1],
            ],
            { stackMode: 'stack', yAxes: [{}, { position: 'right' }] },
        );
        expect(stackOf(option, 0)).toBe('total#0');
        expect(stackOf(option, 1)).toBe('total#0');
        expect(stackOf(option, 2)).toBe('A#1'); // never a stack across foreign scales
        expect(stackOf(option, 3)).toBe('A#0');
    });

    it('lines keep hand-set groups VERBATIM (no inherit, no coupling); a groupless line never stacks', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'L1', data: [[WED, 1]] },
                { name: 'L2', data: [[WED, 2]] },
            ],
            meta: [
                { name: 'L1', type: 'line', stack: 'A' },
                { name: 'L2', type: 'line' },
            ],
            p: { ...P, cartesianType: 'bar', stackMode: 'stack' },
        }) as Record<string, unknown>;
        const series = option.series as Record<string, unknown>[];
        expect(series[0].stack).toBe('A'); // plain name — the pre-0084 line semantics
        expect(series[1].stack).toBeUndefined(); // lines never inherit the mode
    });

    it('sum anchor: transparent, silent, atop the stack, out of legend.data and tooltip rows', () => {
        const option = buildBars(
            [
                { name: 'A', unit: 'W' },
                { name: 'B', unit: 'W' },
            ],
            [
                [10, null, 30],
                [20, 5, null],
            ],
            { stackMode: 'stack', stackSum: true },
        );
        const series = option.series as Record<string, unknown>[];
        expect(series).toHaveLength(3); // two bars + the anchor
        const anchor = series[2];
        expect(anchor.id).toBe('stackSum#total#0');
        expect(anchor.silent).toBe(true);
        expect(anchor.animation).toBe(false);
        expect(anchor.stack).toBe('total#0');
        expect(anchor.data).toEqual([
            0, // 10 + 20
            0, // only B contributes (5) — a gap never zeroes the sum
            0, // only A contributes (30)
        ]);
        expect((anchor.itemStyle as Record<string, unknown>).color).toBe('transparent');
        // The label carries the SUM in the axis' format (both series share the unit → 'W').
        const fmt = (anchor.label as { formatter: (p: { dataIndex: number }) => string }).formatter;
        expect(fmt({ dataIndex: 0 })).toBe('30 W');
        expect(fmt({ dataIndex: 1 })).toBe('5 W');
        expect(fmt({ dataIndex: 2 })).toBe('30 W');
        // Legend.data lists only the real series (the adapter's own exclusion mechanism).
        expect(option.legend).toMatchObject({ data: ['A', 'B'] });
        // The tooltip rows drop the anchor even though echarts hands its param to the formatter.
        const tooltip = (option.tooltip as { formatter: (params: unknown) => string }).formatter;
        const html = tooltip([
            { seriesName: 'A', value: 10, marker: '', axisValue: WED },
            { seriesName: 'B', value: 20, marker: '' },
            { seriesName: 'stackSum#total#0', value: 0, marker: '' },
        ]);
        expect(html).toContain('A:');
        expect(html).toContain('B:');
        expect(html).not.toContain('stackSum');
    });

    it('sum anchor decimals: the SHARED decimals of the stack members beat the chart-level clamp; divergent ones do not', () => {
        const sumText = (metas: EchartsSeriesMeta[]): string => {
            const option = buildBars(
                metas,
                [
                    [1.5, 1, 1],
                    [2.25, 1, 1],
                ],
                // The editor's real default: the chart-level tooltip decimals are 0.
                { stackMode: 'stack', stackSum: true, tooltipDecimals: 0 },
            );
            const anchor = (option.series as Record<string, unknown>[])[2];
            return (anchor.label as { formatter: (p: { dataIndex: number }) => string }).formatter({ dataIndex: 0 });
        };
        // Every member carries 2 decimals → the sum wears them too (never „4 kWh" for 3.75).
        expect(
            sumText([
                { name: 'A', unit: 'kWh', decimals: 2 },
                { name: 'B', unit: 'kWh', decimals: 2 },
            ]),
        ).toBe('3.75 kWh');
        // Divergent (or partly unset) decimals → no shared fact, the axis format stays (today's rounding).
        expect(
            sumText([
                { name: 'A', unit: 'kWh', decimals: 2 },
                { name: 'B', unit: 'kWh', decimals: 1 },
            ]),
        ).toBe('4 kWh');
        expect(
            sumText([
                { name: 'A', unit: 'kWh', decimals: 2 },
                { name: 'B', unit: 'kWh' },
            ]),
        ).toBe('4 kWh');
        // A shared 0 is a fact too (ADR-0057).
        expect(
            sumText([
                { name: 'A', decimals: 0 },
                { name: 'B', decimals: 0 },
            ]),
        ).toBe('4');
    });

    it('sum anchor shift: an unset top-member position keeps the one-line lift (documented deviation, ADR-0056)', () => {
        const shiftOf = (top: EchartsSeriesMeta): unknown => {
            const option = buildBars(
                [{ name: 'A' }, { name: 'B', ...top }],
                [
                    [1, 2, 3],
                    [4, 5, 6],
                ],
                { stackMode: 'stack', stackSum: true },
            );
            return ((option.series as Record<string, unknown>[])[2].label as Record<string, unknown>).offset;
        };
        // Pinned as rendered today: the unset position is painted inside, yet the sum still
        // lifts one line (fontSize + 2) — aligning it would move every existing sum label.
        expect(shiftOf({ label: true })).toEqual([0, -14]);
        expect(shiftOf({ label: true, labelPosition: 'top' })).toEqual([0, -14]);
        expect(shiftOf({ label: true, labelPosition: 'inside' })).toBeUndefined();
        expect(shiftOf({})).toBeUndefined();
    });

    it('an ALL-NULL category renders no anchor label (the honest gap)', () => {
        const option = buildBars(
            [{ name: 'A' }, { name: 'B' }],
            [
                [10, null],
                [20, null],
            ],
            { stackMode: 'stack', stackSum: true, barCategories: [WED, WED + 3_600_000] },
        );
        const anchor = (option.series as Record<string, unknown>[])[2];
        expect(anchor.data).toEqual([0, null]); // nothing contributes in category 2
        const fmt = (anchor.label as { formatter: (p: { dataIndex: number }) => string }).formatter;
        expect(fmt({ dataIndex: 1 })).toBe('');
    });

    it('no anchor: switch off, one-series stacks, mode none/percent, deselected members', () => {
        const twoBars = [{ name: 'A' }, { name: 'B' }] as EchartsSeriesMeta[];
        const twoData = [
            [1, 2],
            [3, 4],
        ];
        expect((buildBars(twoBars, twoData, { stackMode: 'stack' }).series as unknown[]).length).toBe(2); // stackSum off
        expect((buildBars(twoBars, twoData, { stackSum: true }).series as unknown[]).length).toBe(2); // mode none
        expect((buildBars(twoBars, twoData, { stackMode: 'percent', stackSum: true }).series as unknown[]).length).toBe(
            2,
        ); // percent verdeckt
        expect(
            (
                buildBars([{ name: 'A' }, { name: 'B', stack: 'none' }], twoData, {
                    stackMode: 'stack',
                    stackSum: true,
                }).series as unknown[]
            ).length,
        ).toBe(2); // no stack with ≥ 2 members
        expect(
            (
                buildBars(twoBars, twoData, { stackMode: 'stack', stackSum: true, legendSelection: { B: false } })
                    .series as unknown[]
            ).length,
        ).toBe(2); // the active stack has one member — the anchor follows the visible truth
    });

    it('two stacks on one axis get one anchor EACH (≥ 2 members is per stack, not per axis)', () => {
        const option = buildBars(
            [
                { name: 'A', stack: 'A' },
                { name: 'B', stack: 'A' },
                { name: 'C', stack: 'B' },
                { name: 'D', stack: 'B' },
            ],
            [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ],
            { stackMode: 'stack', stackSum: true, barCategories: [WED, WED + 3_600_000] },
        );
        const names = (option.series as Record<string, unknown>[]).map(s => s.id ?? s.name);
        expect(names).toEqual(['A', 'B', 'C', 'D', 'stackSum#A#0', 'stackSum#B#0']);
    });

    it('time-axis path: the anchor rides [ts, 0] points aligned by data index', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                {
                    name: 'A',
                    data: [
                        [WED, 10],
                        [WED + 60_000, 20],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [WED, 30],
                        [WED + 60_000, 40],
                    ],
                },
            ],
            meta: [{ name: 'A' }, { name: 'B' }],
            p: { ...P, cartesianType: 'bar', stackMode: 'stack', stackSum: true },
        }) as Record<string, unknown>;
        const anchor = (option.series as Record<string, unknown>[])[2];
        expect(anchor.data).toEqual([
            [WED, 0],
            [WED + 60_000, 0],
        ]);
    });

    it('percent axis: labels render 0–100 %, the share bounds 0..1 apply, unit inheritance rests', () => {
        const option = buildBars(
            [
                { name: 'A', unit: 'W' },
                { name: 'B', unit: 'W' },
            ],
            [
                [1, 2],
                [3, 4],
            ],
            { stackMode: 'percent' },
        );
        const yAxis = (option.yAxis as Record<string, unknown>[])[0];
        expect(yAxis.min).toBe(0);
        expect(yAxis.max).toBe(1);
        const fmt = (yAxis.axisLabel as { formatter: (v: number) => string }).formatter;
        expect(fmt(0.25)).toBe('25 %');
        expect(fmt(1)).toBe('100 %');
        // A unit every bound series shares still NEVER lands on a percent axis (shares are
        // unitless, decision 4) — the formatter is the percent one, not the unit one.
        expect(fmt(0.5)).toBe('50 %');
        // An axis WITHOUT percent stacks keeps the absolute scale (mixed-chart honesty).
        const lineOption = buildGeneratedOption({
            family: 'cartesian',
            series: [{ name: 'A', data: [[WED, 1]] }],
            meta: [{ name: 'A', type: 'line' }],
            p: { ...P, cartesianType: 'bar', stackMode: 'percent' },
        }) as Record<string, unknown>;
        const lineAxis = (lineOption.yAxis as Record<string, unknown>[])[0];
        expect(lineAxis.max).toBeUndefined();
        expect((lineAxis.axisLabel as Record<string, unknown> | undefined)?.formatter).toBeUndefined();
    });

    it('percent axis: authored min/max win over the share bounds', () => {
        const option = buildBars(
            [{ name: 'A' }, { name: 'B' }],
            [
                [1, 2],
                [3, 4],
            ],
            { stackMode: 'percent', yAxes: [{ min: -1, max: 2 }] },
        );
        const yAxis = (option.yAxis as Record<string, unknown>[])[0];
        expect(yAxis.min).toBe(-1);
        expect(yAxis.max).toBe(2);
    });

    it('percent segment labels show the share — the Wert-Formatter value display is replaced', () => {
        const option = buildBars(
            [
                { name: 'A', label: true, unit: 'W' },
                { name: 'B', label: true },
            ],
            [
                [1, 2],
                [3, 4],
            ],
            { stackMode: 'percent' },
        );
        const label = (option.series as Record<string, unknown>[])[0].label as Record<string, unknown> as {
            formatter: (params: { value: unknown }) => string;
        };
        // echarts calls a label formatter with its params object — `value` is the datum.
        expect(label.formatter({ value: 0.25 })).toBe('25 %');
        expect(label.formatter({ value: 0.3334 })).toBe('33.3 %');
    });

    it('percent tooltip rows show share AND absolute; the legend value renders the share', () => {
        const option = buildBars(
            [
                { name: 'A', unit: 'W' },
                { name: 'B', unit: 'W' },
            ],
            [
                [1, 2],
                [3, 4],
            ],
            {
                stackMode: 'percent',
                // The pipeline-kept absolutes (index-aligned value slots) + the resolved share
                // values the legend formatter reads.
                percentAbsolute: { A: [10, 8], B: [30, 8] },
                legendShowValues: true,
                legendValues: { A: 0.25, B: 0.75 },
            },
        );
        const tooltipFmt = (option.tooltip as { formatter: (params: unknown) => string }).formatter;
        const html = tooltipFmt([
            { seriesName: 'A', value: 0.25, dataIndex: 0, marker: '', axisValue: WED },
            { seriesName: 'B', value: 0.75, dataIndex: 0, marker: '' },
        ]);
        expect(html).toContain('A: 25 % (10 W)');
        expect(html).toContain('B: 75 % (30 W)');
        const legendFmt = (option.legend as { formatter?: (name: string) => string }).formatter;
        expect(legendFmt).toBeTypeOf('function');
        expect((legendFmt as (name: string) => string)('A')).toBe('A [25 %]');
    });
});

describe('buildGeneratedOption — Farbskala pro Serie (ADR-0101)', () => {
    type VmEntry = {
        type: string;
        seriesIndex: number;
        dimension: number;
        show: boolean;
        min: number;
        max: number;
        inRange: { color: string[] };
    };
    const vmOf = (option: unknown): VmEntry[] | undefined => (option as { visualMap?: VmEntry[] }).visualMap;

    it('emits one continuous, invisible entry per series with an active scale — none without', () => {
        const series: ChartSeries[] = [
            {
                name: 'A',
                data: [
                    [1, 2],
                    [2, 4],
                ],
            },
            {
                name: 'B',
                data: [
                    [1, 10],
                    [2, 30],
                ],
            },
        ];
        const without = buildGeneratedOption({
            family: 'cartesian',
            series,
            meta: [{ color: '#ff0000' }, { color: '#0000ff' }],
            p: P,
        });
        expect(without).not.toHaveProperty('visualMap');

        const option = buildGeneratedOption({
            family: 'cartesian',
            series,
            meta: [{ color: '#ff0000' }, { color: '#0000ff', colorScale: true }],
            p: P,
        });
        const vm = vmOf(option);
        expect(vm).toHaveLength(1);
        expect(vm![0]).toMatchObject({ type: 'continuous', seriesIndex: 1, dimension: 1, show: false });
    });

    it('derives light → series colour → dark from the explicit colour and from a palette slot', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 0],
                        [2, 10],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [1, 0],
                        [2, 10],
                    ],
                },
            ],
            meta: [{ color: '#ff0000', colorScale: true }, { colorScale: true }],
            p: { ...P, palette: ['#00ff00', '#0000ff'] },
        });
        const vm = vmOf(option)!;
        expect(vm[0].inRange.color).toEqual(['rgba(255, 128, 128, 1)', 'rgba(255, 0, 0, 1)', 'rgba(128, 0, 0, 1)']);
        // B has no own colour — its palette slot (#0000ff) is the series colour the scale derives from.
        expect(vm[1].inRange.color).toEqual(['rgba(128, 128, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 128, 1)']);
    });

    it('resamples a chosen gradient with uneven stop positions — a stop at 80 % sits at 80 % of the range', () => {
        const run = (css: string): string[] =>
            vmOf(
                buildGeneratedOption({
                    family: 'cartesian',
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 0],
                                [2, 10],
                            ],
                        },
                    ],
                    meta: [{ color: '#ff0000', colorScale: true, colorScaleColors: css }],
                    p: P,
                }),
            )![0].inRange.color;
        const colors = run('linear-gradient(90deg, #00ff00 0%, #ffff00 80%, #ff0000 100%)');
        // 21 even samples (5 % grid): 0 %, 40 %, 80 %, 90 %, 100 %.
        expect(colors).toHaveLength(21);
        expect(colors[0]).toBe('rgba(0, 255, 0, 1)');
        expect(colors[8]).toBe('rgba(128, 255, 0, 1)');
        expect(colors[16]).toBe('rgba(255, 255, 0, 1)');
        expect(colors[18]).toBe('rgba(255, 128, 0, 1)');
        expect(colors[20]).toBe('rgba(255, 0, 0, 1)');
        // Stops without a position are spread evenly by the gradient parser → passed through.
        expect(run('linear-gradient(90deg, #00ff00, #ffff00, #ff0000)')).toEqual(['#00ff00', '#ffff00', '#ff0000']);
    });

    it('passes evenly placed chosen gradient colours through unchanged', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 0],
                        [2, 10],
                    ],
                },
            ],
            meta: [
                {
                    color: '#ff0000',
                    colorScale: true,
                    colorScaleColors: 'linear-gradient(90deg, #00ff00 0%, #ffff00 50%, #ff0000 100%)',
                },
            ],
            p: P,
        });
        expect(vmOf(option)![0].inRange.color).toEqual(['#00ff00', '#ffff00', '#ff0000']);
    });

    it('resolves the range per bound: entry before axis before data — mixed origins included', () => {
        const data: ChartSeries['data'] = [
            [1, 5],
            [2, 'x' as unknown as number],
            [3, null],
            [4, Number.NaN],
            [5, 25],
            [6, 15],
        ];
        const run = (m: EchartsSeriesMeta, axis: { min?: number; max?: number }): VmEntry =>
            vmOf(
                buildGeneratedOption({
                    family: 'cartesian',
                    series: [{ name: 'A', data }],
                    meta: [{ color: '#ff0000', colorScale: true, ...m }],
                    p: { ...P, yAxes: [axis] },
                }),
            )![0];
        // Data only: the finite extent — the string, null and NaN are ignored.
        expect(run({}, {})).toMatchObject({ min: 5, max: 25 });
        // Min from the axis, max from the data.
        expect(run({}, { min: 0 })).toMatchObject({ min: 0, max: 25 });
        // Both axis bounds.
        expect(run({}, { min: 0, max: 40 })).toMatchObject({ min: 0, max: 40 });
        // Entries win over the axis, per bound.
        expect(run({ colorScaleMax: 30 }, { min: 0, max: 40 })).toMatchObject({ min: 0, max: 30 });
        expect(run({ colorScaleMin: 10 }, {})).toMatchObject({ min: 10, max: 25 });
    });

    it('gives two series on two axes their own ranges', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                {
                    name: 'Temp',
                    data: [
                        [1, 12],
                        [2, 31],
                    ],
                },
                {
                    name: 'Power',
                    data: [
                        [1, 200],
                        [2, 2800],
                    ],
                },
            ],
            meta: [
                { color: '#ff0000', colorScale: true, yAxisIndex: 0 },
                { color: '#0000ff', colorScale: true, yAxisIndex: 1 },
            ],
            p: {
                ...P,
                yAxes: [
                    { min: 0, max: 40 },
                    { min: 0, max: 3000 },
                ],
            },
        });
        const vm = vmOf(option)!;
        expect(vm).toHaveLength(2);
        expect(vm[0]).toMatchObject({ seriesIndex: 0, min: 0, max: 40 });
        expect(vm[1]).toMatchObject({ seriesIndex: 1, min: 0, max: 3000 });
    });

    it('serves line, bar and scatter alike — the type knob does not touch the scale', () => {
        const series: ChartSeries[] = ['L', 'B', 'S'].map(name => ({
            name,
            data: [
                [1, 1],
                [2, 9],
            ],
        }));
        const option = buildGeneratedOption({
            family: 'cartesian',
            series,
            meta: [
                { color: '#ff0000', colorScale: true, type: 'line' },
                { color: '#ff0000', colorScale: true, type: 'bar' },
                { color: '#ff0000', colorScale: true, type: 'scatter' },
            ],
            p: P,
        });
        expect(vmOf(option)!.map(v => v.seriesIndex)).toEqual([0, 1, 2]);
        expect((option.series as { type: string }[]).map(s => s.type)).toEqual(['line', 'bar', 'scatter']);
    });

    it('reads plain category-bar values and emits nothing for a series without finite values', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [3, null, 7] },
                { name: 'B', data: [null, null] },
            ],
            meta: [
                { color: '#ff0000', colorScale: true, type: 'bar' },
                { color: '#ff0000', colorScale: true, type: 'bar' },
            ],
            p: { ...P, cartesianType: 'bar', barCategories: [1000, 2000, 3000] },
        });
        const vm = vmOf(option)!;
        expect(vm).toHaveLength(1);
        expect(vm[0]).toMatchObject({ seriesIndex: 0, min: 3, max: 7 });
    });

    it('keeps the area gradient at „Verlauf“ and leaves a flat area to the scale', () => {
        const run = (area: 'flat' | 'gradient'): Record<string, unknown> => {
            const option = buildGeneratedOption({
                family: 'cartesian',
                series: [
                    {
                        name: 'A',
                        data: [
                            [1, 0],
                            [2, 10],
                        ],
                    },
                ],
                meta: [{ color: '#ff0000', colorScale: true, type: 'line', area }],
                p: P,
            });
            expect(vmOf(option)).toHaveLength(1);
            return ((option.series as unknown[])[0] as { areaStyle: Record<string, unknown> }).areaStyle;
        };
        // „Verlauf“: the area owns its colour (the derived Flächen-Verlauf) — the line follows the scale.
        expect(run('gradient').color).toMatchObject({ type: 'linear', x: 0, y: 0, x2: 0, y2: 1 });
        // „Flächig“: no own colour — echarts fills the area with the scale's visual colour.
        expect(run('flat')).not.toHaveProperty('color');
    });

    describe('series index and axis binding (spec: hidden series keep their index; US 48, US 49)', () => {
        const two: ChartSeries[] = [
            {
                name: 'A',
                data: [
                    [1, 1],
                    [2, 2],
                ],
            },
            {
                name: 'B',
                data: [
                    [1, 150],
                    [2, 250],
                ],
            },
        ];
        const twoAxes = [
            { min: 0, max: 10 },
            { min: 100, max: 300 },
        ];

        it.each([
            ['„Nur in Legende“', { legendOnly: true }, {}],
            ['a deselected legend entry', {}, { legendSelection: { A: false } }],
        ] as const)('a series hidden via %s keeps the later scale on its own index and axis', (_how, hide, runtime) => {
            const option = buildGeneratedOption({
                family: 'cartesian',
                series: two,
                meta: [
                    { color: '#ff0000', yAxisIndex: 0, ...hide },
                    { color: '#0000ff', colorScale: true, yAxisIndex: 1 },
                ],
                p: { ...P, yAxes: twoAxes, ...runtime },
            });
            // The hidden series stays emitted — the scale's index is its config index, not a shifted one.
            expect((option.series as unknown[]).length).toBe(2);
            expect(vmOf(option)).toEqual([expect.objectContaining({ seriesIndex: 1, min: 100, max: 300 })]);
        });

        it('rebinding the series to another axis moves the inherited bounds with it (US 48)', () => {
            const run = (yAxisIndex: number): VmEntry =>
                vmOf(
                    buildGeneratedOption({
                        family: 'cartesian',
                        series: [two[1]],
                        meta: [{ color: '#0000ff', colorScale: true, yAxisIndex }],
                        p: { ...P, yAxes: [{ min: 0, max: 1000 }, ...twoAxes] },
                    }),
                )![0];
            expect(run(0)).toMatchObject({ min: 0, max: 1000 });
            expect(run(2)).toMatchObject({ min: 100, max: 300 });
            // An entered bound stays put across the rebind — only the inherited one follows.
            const entered = vmOf(
                buildGeneratedOption({
                    family: 'cartesian',
                    series: [two[1]],
                    meta: [{ color: '#0000ff', colorScale: true, colorScaleMax: 500, yAxisIndex: 2 }],
                    p: { ...P, yAxes: [{ min: 0, max: 1000 }, ...twoAxes] },
                }),
            )![0];
            expect(entered).toMatchObject({ min: 100, max: 500 });
        });

        it('a type switch line → bar → scatter leaves the scale entry untouched (US 49)', () => {
            const scale: EchartsSeriesMeta = {
                color: '#0000ff',
                colorScale: true,
                colorScaleMin: 120,
                colorScaleColors: 'linear-gradient(90deg, #00ff00 0%, #ff0000 100%)',
            };
            // The card's type select patches ONLY `type` into the series config (in place).
            const entries = (['line', 'bar', 'scatter'] as const).map(
                type =>
                    vmOf(
                        buildGeneratedOption({
                            family: 'cartesian',
                            series: [two[1]],
                            meta: [{ ...scale, type }],
                            p: P,
                        }),
                    )![0],
            );
            const expected = {
                type: 'continuous',
                seriesIndex: 0,
                dimension: 1,
                show: false,
                min: 120,
                max: 250,
                inRange: { color: ['#00ff00', '#ff0000'] },
            };
            expect(entries).toEqual([expected, expected, expected]);
        });
    });

    describe('edge cases (ticket 05)', () => {
        const ramp: ChartSeries['data'] = [
            [1, 10],
            [2, 20],
        ];
        const build = (
            series: ChartSeries[],
            meta: EchartsSeriesMeta[],
            yAxes: { min?: number; max?: number }[] = [],
        ): VmEntry[] | undefined =>
            vmOf(buildGeneratedOption({ family: 'cartesian', series, meta, p: { ...P, yAxes } }));

        it('an entered Min ≥ Max emits no entry for that series — the others keep theirs', () => {
            const vm = build(
                [
                    { name: 'A', data: ramp },
                    { name: 'B', data: ramp },
                    { name: 'C', data: ramp },
                ],
                [
                    { color: '#ff0000', colorScale: true, colorScaleMin: 30, colorScaleMax: 5 },
                    { color: '#ff0000', colorScale: true, colorScaleMin: 7, colorScaleMax: 7 },
                    { color: '#ff0000', colorScale: true },
                ],
            );
            expect(vm).toHaveLength(1);
            expect(vm![0]).toMatchObject({ seriesIndex: 2, min: 10, max: 20 });
        });

        it('a constant series with an inherited range draws the middle scale colour only', () => {
            const constant: ChartSeries['data'] = [
                [1, 12],
                [2, 12],
            ];
            const vm = build(
                [
                    { name: 'A', data: constant },
                    { name: 'B', data: constant },
                ],
                [
                    // Derived scale light → colour → dark: the middle IS the series colour.
                    { color: '#ff0000', colorScale: true },
                    // An even chosen list: the middle lies halfway between the two inner stops.
                    {
                        color: '#ff0000',
                        colorScale: true,
                        colorScaleColors: 'linear-gradient(90deg, #000000 0%, #fefefe 100%)',
                    },
                ],
            );
            expect(vm).toHaveLength(2);
            expect(vm![0]).toMatchObject({ min: 12, max: 12 });
            expect(vm![0].inRange.color).toEqual(['rgba(255, 0, 0, 1)']);
            expect(vm![1].inRange.color).toEqual(['rgba(127, 127, 127, 1)']);
        });

        it('a mixed Min > Max (entry vs. inherited bound) is no input error — the middle colour, every value inside', () => {
            const vm = build(
                [{ name: 'A', data: ramp }],
                // Max entered at 5, Min inherited from the data (10) → 10 > 5.
                [{ color: '#ff0000', colorScale: true, colorScaleMax: 5 }],
            );
            expect(vm).toHaveLength(1);
            expect(vm![0].inRange.color).toEqual(['rgba(255, 0, 0, 1)']);
            expect(vm![0].min).toBeLessThanOrEqual(vm![0].max);
            // No value may fall out of range into echarts' default out-of-range look.
            expect((vm![0] as unknown as { outOfRange: { color: string[] } }).outOfRange.color).toEqual([
                'rgba(255, 0, 0, 1)',
            ]);
        });

        it('a series without finite values emits nothing — unless its whole range is entered', () => {
            const empty: ChartSeries['data'] = [
                [1, null],
                [2, Number.NaN],
            ];
            // Both axis bounds known, still no values → nothing to colour.
            expect(
                build([{ name: 'A', data: empty }], [{ color: '#ff0000', colorScale: true }], [{ min: 0, max: 40 }]),
            ).toBeUndefined();
            // A completely entered range stands on its own.
            const vm = build(
                [{ name: 'A', data: empty }],
                [{ color: '#ff0000', colorScale: true, colorScaleMin: 0, colorScaleMax: 10 }],
            );
            expect(vm).toHaveLength(1);
            expect(vm![0]).toMatchObject({ min: 0, max: 10 });
        });
    });

    it('reads the entries of a percent-stacked bar as displayed percent (ticket 08)', () => {
        // The pipeline already normalized the bars to shares 0–1 (ADR-0084); the axis shows 0–100 %.
        const shares: ChartSeries[] = [
            {
                name: 'A',
                data: [
                    [1, 0.1],
                    [2, 0.9],
                ],
            },
        ];
        const scaled = { color: '#ff0000', colorScale: true, colorScaleMin: 20, colorScaleMax: 80 };
        const percent = vmOf(
            buildGeneratedOption({
                family: 'cartesian',
                series: shares,
                meta: [scaled],
                p: { ...P, cartesianType: 'bar', stackMode: 'percent' },
            }),
        );
        expect(percent![0]).toMatchObject({ min: 0.2, max: 0.8 });
        // Opted out of the stack, plain stacking, or a line: absolute values — entries as typed.
        for (const [meta, stackMode] of [
            [{ ...scaled, stack: 'none' }, 'percent'],
            [scaled, 'stack'],
            [{ ...scaled, type: 'line' }, 'percent'],
        ] as const) {
            const vm = vmOf(
                buildGeneratedOption({
                    family: 'cartesian',
                    series: shares,
                    meta: [meta],
                    p: { ...P, cartesianType: 'bar', stackMode },
                }),
            );
            expect(vm![0]).toMatchObject({ min: 20, max: 80 });
        }
    });
});
