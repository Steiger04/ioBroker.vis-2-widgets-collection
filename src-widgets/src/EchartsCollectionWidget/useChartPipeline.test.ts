import { describe, expect, it } from 'vitest';
import type { EChartsOption } from 'echarts';

import { toPresentationConfig } from './presentation';
import type { ThemeTokens } from './echartsTheme';
import {
    BODY_MAX_HISTORY_POINTS,
    DEFAULT_HISTORY_COUNT,
    assemblePipelineResult,
    hasMergedData,
    isUsableOid,
    pipelineError,
    subscribedOids,
    usableSeries,
    type AssemblePipelineInput,
    type ChartPipelineSeries,
} from './useChartPipeline';

const series = (...oids: string[]): ChartPipelineSeries[] => oids.map(oid => ({ oid, name: oid }));

describe('point ceilings (single source, ADR-0046)', () => {
    it('defaults the count to 500 and the hard ceiling to the body cap (the preview passes 200)', () => {
        expect(DEFAULT_HISTORY_COUNT).toBe(500);
        expect(BODY_MAX_HISTORY_POINTS).toBe(5000);
    });
});

describe('usableSeries / isUsableOid', () => {
    it('drops empty and nothing_selected OIDs, keeps the rest in order', () => {
        const list = series('', 'a.0', 'nothing_selected', 'b.0');
        expect(usableSeries(list).map(s => s.oid)).toEqual(['a.0', 'b.0']);
    });

    it('isUsableOid is the one predicate for bound OIDs', () => {
        expect(isUsableOid('a.0')).toBe(true);
        expect(isUsableOid('')).toBe(false);
        expect(isUsableOid(undefined)).toBe(false);
        expect(isUsableOid('nothing_selected')).toBe(false);
    });

    it('returns the input shape untouched when every OID is usable', () => {
        const list = series('a.0', 'b.0');
        expect(usableSeries(list)).toEqual(list);
    });
});

describe('subscribedOids (family/mode knowledge, ADR-0046)', () => {
    it('json subscribes the payload state; nothing_selected subscribes nothing', () => {
        expect(subscribedOids('cartesian', 'json', series('a.0'), 'javascript.0.chart', false)).toEqual([
            'javascript.0.chart',
        ]);
        expect(subscribedOids('pie', 'json', series('a.0'), 'nothing_selected', false)).toEqual([]);
    });

    it('Verlauf subscribes nothing — unless the early refresh listens for values', () => {
        expect(subscribedOids('cartesian', 'history', series('a.0'), '', false)).toEqual([]);
        expect(subscribedOids('cartesian', 'history', series('a.0'), '', true)).toEqual(['a.0']);
    });
});

describe('hasMergedData (unified on the MERGED option, ADR-0046)', () => {
    it('is true when any merged series carries a non-empty data array', () => {
        expect(hasMergedData({ series: [{ data: [] }, { data: [[1, 2]] }] } as never)).toBe(true);
    });

    it('is false for empty data arrays, no series, or non-array data', () => {
        expect(hasMergedData({ series: [{ data: [] }] } as never)).toBe(false);
        expect(hasMergedData({} as never)).toBe(false);
        expect(hasMergedData({ series: [{ data: 'nope' }] } as never)).toBe(false);
    });

    it('NULL-only payloads are NO data (ADR-0082 ticket 04) — a datum counts only with a value', () => {
        // Pie: slices exist (legend entries) but every value is null — renders nothing, so the
        // empty placeholder must own the canvas, not a blank chart.
        expect(
            hasMergedData({ series: [{ data: [{ name: 'A', value: null }, { name: 'B', value: null }] }] } as never),
        ).toBe(false);
        // Cartesian: a series of only null points renders nothing either
        expect(hasMergedData({ series: [{ data: [[1, null], [2, null]] }] } as never)).toBe(false);
        expect(hasMergedData({ series: [{ data: [null, undefined] }] } as never)).toBe(false);
        // One real value flips it true — in either datum shape
        expect(hasMergedData({ series: [{ data: [{ name: 'A', value: null }, { name: 'B', value: 3 }] }] } as never)).toBe(
            true,
        );
        expect(hasMergedData({ series: [{ data: [[1, null], [2, 5]] }] } as never)).toBe(true);
        // 0 is a VALUE (echarts stillShowZeroSum draws equal slices) — only null/undefined are empty
        expect(hasMergedData({ series: [{ data: [0, 0] }] } as never)).toBe(true);
    });
});

describe('pipelineError (unified error surface, ADR-0046)', () => {
    it('json mode surfaces the parse error', () => {
        expect(pipelineError('json', 'Unexpected token', null)).toBe('Unexpected token');
        expect(pipelineError('json', undefined, 'ignored')).toBeNull();
    });

    it('Verlauf prefers the fetch error, then the first per-series error', () => {
        expect(pipelineError('history', undefined, 'fetch failed', [{ error: 'series failed' }])).toBe('fetch failed');
        expect(pipelineError('history', undefined, null, [{}, { error: 'series failed' }])).toBe('series failed');
        expect(pipelineError('history', undefined, null, [])).toBeNull();
    });
});

// ── assemblePipelineResult — the pure build core (dispatch, merge, title fold, hasData) ──

const tokens = {
    primary: '#1',
    secondary: '#2',
    success: '#3',
    warning: '#4',
    error: '#5',
    info: '#6',
    divider: '#7',
    textPrimary: '#8',
    textSecondary: '#9',
} as unknown as ThemeTokens;

const makeInput = (
    family: 'cartesian' | 'pie',
    mode: string,
    over: Partial<AssemblePipelineInput> = {},
): AssemblePipelineInput => {
    const src = over.src ?? {};
    return {
        family,
        mode,
        usable: [],
        history: { series: [], loading: false, error: null },
        jsonParsed: { series: [] },
        presentation: toPresentationConfig({ src, palette: ['#111'], family, themeTokens: tokens, themeDark: false }),
        themeBase: {} as EChartsOption,
        companions: { chartConfig: {}, yAxes: [], markLines: [], jsonSeriesStyle: {}, jsonHidden: [], series: [] },
        ...over,
        src,
    };
};

const seriesOf = (option: EChartsOption): { name: string; data: unknown[] }[] =>
    (option.series as { name: string; data: unknown[] }[]) ?? [];

describe('assemblePipelineResult — Legenden-Folge (ADR-0074: the runtime selection rides the option)', () => {
    it('injects legendSelection into the presentation — legend.selected follows the state', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A' },
                    { oid: 'b.0', name: 'B' },
                ],
                history: {
                    series: [
                        { name: 'A', data: [[1, 2]] },
                        { name: 'B', data: [[1, 3]] },
                    ],
                    loading: false,
                    error: null,
                },
                legendSelection: { B: false },
            }),
        );
        expect((option.legend as Record<string, unknown>).selected).toEqual({ A: true, B: false });
    });

    it('without a selection the option carries no selected key (the pre-0074 shape)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        expect(option.legend as Record<string, unknown>).not.toHaveProperty('selected');
    });
});

describe('assemblePipelineResult (pure build core, ADR-0046)', () => {
    it('Verlauf maps fetched history series 1:1 and reports hasData from the merged option', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [3, 4],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option).map(s => s.name)).toEqual(['A']);
        expect(seriesOf(option)[0]?.data).toHaveLength(2);
    });

    it('JSON filters the jsonHidden deny-list and applies the name-keyed overlay meta', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('pie', 'json', {
                jsonParsed: {
                    series: [
                        { name: 'A', data: [[0, 1]] },
                        { name: 'B', data: [[0, 2]] },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: { A: { color: '#f00' } },
                    jsonHidden: ['B'],
                    series: [],
                },
            }),
        );
        expect(hasData).toBe(true);
        // Pie collapses series to slices — the (filtered) payload names live in the slice data.
        const slices = (seriesOf(option)[0]?.data as { name?: string }[]) ?? [];
        expect(slices.map(d => d.name)).toEqual(['A']);
    });

    it('folds a raw title even without title text (ADR-0044)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                src: { titleText: '' },
                companions: {
                    chartConfig: { titleRaw: '{"padding": 8}' },
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [],
                },
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        expect((option.title as Record<string, unknown> | undefined)?.padding).toBe(8);
    });

    it('injects a non-transparent background colour from the presentation', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                src: { bgColor: '#123456' },
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        expect(option.backgroundColor).toBe('#123456');
    });
});

// ── legend-values injection (ADR-0054, adapter legActual; ticket 04 moved the read to the FINAL series) ──

describe('assemblePipelineResult — legend values injection (ADR-0054)', () => {
    it('injects the resolved values into the emitted legend formatter only when the toggle is on', () => {
        const on = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [2, 12.5],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                src: { legendShowValues: true },
            }),
        );
        const legendOn = (on.option.legend as { formatter?: (n: string) => string }) ?? {};
        expect(legendOn.formatter?.('A')).toBe('A [12.5]');

        const off = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [2, 12.5],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(off.option.legend as object).not.toHaveProperty('formatter');
    });

    it('points read the last NON-NULL value — a trailing gap renders the bare name (one rule for every branch)', () => {
        const out = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A' },
                    { oid: 'b.0', name: 'B' },
                ],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [2, 12.5],
                                [3, null],
                            ],
                        }, // trailing gap
                        {
                            name: 'B',
                            data: [
                                [1, null],
                                [2, null],
                            ],
                        }, // all gaps
                    ],
                    loading: false,
                    error: null,
                },
                src: { legendShowValues: true },
            }),
        );
        const legend = out.option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [12.5]');
        expect(legend.formatter?.('B')).toBe('B');
    });
});

// ── per-series value transforms (ADR-0059, parity Build B issue 07) ──

describe('assemblePipelineResult — per-series value transforms (ADR-0059)', () => {
    it('Verlauf: the Y-offset feeds the formula per series (f(val + yOffset)); nulls stay gaps', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A', yOffset: 2, formula: 'val * 10' },
                    { oid: 'b.0', name: 'B' },
                ],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 10],
                                [2, null],
                            ],
                        },
                        { name: 'B', data: [[1, 7]] },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([
            [1, 120],
            [2, null],
        ]); // (10+2)*10
        expect(seriesOf(option)[1]?.data).toEqual([[1, 7]]); // untouched without transforms
    });

    it('JSON: the overlay entry carries the transform', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonParsed: { series: [{ name: 'A', data: [[0, 30]] }] },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonHidden: [],
                    series: [],
                    jsonSeriesStyle: { A: { yOffset: -30 } },
                },
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([[0, 0]]);
    });

    it('an invalid formula keeps the RAW values (offset still applies) — no crash', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A', yOffset: 1, formula: 'val +' }],
                history: {
                    series: [{ name: 'A', data: [[1, 10]] }],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option)[0]?.data).toEqual([[1, 11]]);
    });
});

// ── series rest knobs: noFuture (ADR-0060, parity Build B issue 08; validTime died with Live, ADR-0071) ──

describe('assemblePipelineResult — noFuture cuts (ADR-0060)', () => {
    it('noFuture drops points after now (history mode); a clean series keeps its reference', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A', noFuture: true },
                    { oid: 'b.0', name: 'B' },
                ],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 1],
                                [99_999_999_999_999, 2],
                            ],
                        },
                        { name: 'B', data: [[1, 3]] },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([[1, 1]]); // the future point is cut
        expect(seriesOf(option)[1]?.data).toEqual([[1, 3]]);
    });
});

describe('subscribedOids — marking bound OIDs (ADR-0062)', () => {
    const marks = [
        { upper: '0_userdata.0.soll', lower: 'hm-rpc.0.TEMP' },
        { upper: 10 }, // numeric bound — no OID to subscribe
    ];

    it('cartesian unions mark bound OIDs in EVERY mode — even Verlauf without the early refresh', () => {
        // History without earlyRefresh subscribes NO series OIDs — the marks still subscribe
        // (their bounds follow the datapoint live, ADR-0062).
        expect(subscribedOids('cartesian', 'history', series('a.0'), '', false, marks)).toEqual([
            '0_userdata.0.soll',
            'hm-rpc.0.TEMP',
        ]);
        expect(subscribedOids('cartesian', 'history', series('a.0'), '', true, marks)).toEqual([
            'a.0',
            '0_userdata.0.soll',
            'hm-rpc.0.TEMP',
        ]);
    });

    it('pie never subscribes marks (markings are cartesian-only)', () => {
        expect(subscribedOids('pie', 'history', series('a.0'), '', false, marks)).toEqual([]);
    });

    it('without marks the list is unchanged (backward-compatible arity)', () => {
        expect(subscribedOids('cartesian', 'history', series('a.0'), '', true)).toEqual(['a.0']);
    });
});

describe('assemblePipelineResult — resolved marking bands ride the presentation (ADR-0062)', () => {
    it('an OID-bounded band resolves from the injected values and emits markArea', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
                presentation: toPresentationConfig({
                    src: {},
                    palette: ['#111'],
                    family: 'cartesian',
                    themeTokens: tokens,
                    themeDark: false,
                    // The pipeline resolves bounds BEFORE the presentation call — this is what
                    // resolveMarkLines hands over (injected values, subscription outside).
                    markLines: [{ upper: 24, lower: 18 }] as never,
                }),
            }),
        );
        const first = (option.series as { markArea?: { data: unknown[] }; markLine?: { data: unknown[] } }[])[0];
        expect(first?.markArea?.data).toHaveLength(1);
        expect(first?.markLine?.data).toHaveLength(2); // ADR-0076: the band's two edge lines ride along
    });
});

describe('assemblePipelineResult — category bars (ADR-0065)', () => {
    const dayTs = (y: number, mo: number, d: number, h = 0): number => new Date(y, mo - 1, d, h).getTime();
    const cats = [dayTs(2026, 8, 20), dayTs(2026, 8, 21), dayTs(2026, 8, 22), dayTs(2026, 8, 23)];
    const end = dayTs(2026, 8, 24);
    const pts: [number, number][] = [
        [dayTs(2026, 8, 20, 6), 2],
        [dayTs(2026, 8, 20, 18), 4],
        [dayTs(2026, 8, 22, 6), 10],
    ];

    it('buckets series onto the fetch grid and emits a CATEGORY x axis', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: pts }], loading: false, error: null },
                src: { aggregate: 'average' },
                barCategories: cats,
                barWindowEnd: end,
                presentation: toPresentationConfig({
                    src: { chartType: 'bar' },
                    palette: ['#111'],
                    family: 'cartesian',
                    themeTokens: tokens,
                    themeDark: false,
                }),
            }),
        );
        const xAxis = (option as { xAxis: { type: string; data?: number[] } }).xAxis;
        expect(xAxis.type).toBe('category');
        expect(xAxis.data).toEqual(cats);
        const series = option.series as { data: unknown[] }[];
        expect(series[0].data).toEqual([3, null, 10, null]); // avg per day bucket
    });

    it('diff drops the FIRST category and diffs consecutive buckets', () => {
        // Consecutive-day data: totals [6, 3, 10, null] → diffs [-3, 7, 0], first bucket dropped.
        const consecutive: [number, number][] = [
            [dayTs(2026, 8, 20, 6), 2],
            [dayTs(2026, 8, 20, 18), 4],
            [dayTs(2026, 8, 21, 6), 3],
            [dayTs(2026, 8, 22, 6), 10],
        ];
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: consecutive }], loading: false, error: null },
                src: { aggregate: 'total' },
                barCategories: cats,
                barWindowEnd: end,
                barDiff: true,
                presentation: toPresentationConfig({
                    src: { chartType: 'bar' },
                    palette: ['#111'],
                    family: 'cartesian',
                    themeTokens: tokens,
                    themeDark: false,
                }),
            }),
        );
        const xAxis = (option as { xAxis: { data?: number[] } }).xAxis;
        expect(xAxis.data).toEqual(cats.slice(1)); // the diff's first bucket has no predecessor
        const series = option.series as { data: unknown[] }[];
        expect(series[0].data).toEqual([-3, 7, 0]);
    });

    it('legend values on category bars read the FINAL (diffed) buckets — not the raw last point (K2)', () => {
        const consecutive: [number, number][] = [
            [dayTs(2026, 8, 20, 6), 2],
            [dayTs(2026, 8, 20, 18), 4],
            [dayTs(2026, 8, 21, 6), 3],
            [dayTs(2026, 8, 22, 6), 10],
            [dayTs(2026, 8, 23, 6), 12],
        ];
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: consecutive }], loading: false, error: null },
                src: { chartType: 'bar', aggregate: 'total', legendShowValues: true },
                barCategories: cats,
                barWindowEnd: end,
                barDiff: true,
            }),
        );
        // Buckets total → [6, 3, 10, 12], diff → [-3, 7, 2]: the legend shows the LAST DIFF
        // bucket (2) — the raw last point (12) would contradict every bar and tooltip on screen.
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [2]');
    });

    it('WITHOUT categories the x axis stays TIME and the data stays [ts, val] (auto unchanged)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: pts }], loading: false, error: null },
                presentation: toPresentationConfig({
                    src: { chartType: 'bar' },
                    palette: ['#111'],
                    family: 'cartesian',
                    themeTokens: tokens,
                    themeDark: false,
                }),
            }),
        );
        const xAxis = (option as { xAxis: { type: string; data?: unknown } }).xAxis;
        expect(xAxis.type).toBe('time');
        expect(xAxis.data).toBeUndefined();
        const series = option.series as { data: unknown[] }[];
        expect(series[0].data).toEqual(pts);
    });
});

describe('assemblePipelineResult — per-series aggregate + diff tristate on category bars (ADR-0072)', () => {
    const dayTs = (d: number, h = 0): number => new Date(2026, 7, d, h).getTime(); // August 2026
    const cats = [dayTs(20), dayTs(21), dayTs(22)];
    const end = dayTs(23);
    /** Daily-total points: one value per category bucket (the bar-plan would have fetched these). */
    const totals = (name: string, vals: number[]): { name: string; data: [number, number][] } => ({
        name,
        data: vals.map((v, i) => [dayTs(20 + i, 6), v] as [number, number]),
    });

    it('each series reduces with its EFFECTIVE aggregate — avg inherits, max overrides, minmax takes the LAST value', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A' }, // inherits chart average
                    { oid: 'b.0', name: 'B', aggregate: 'max' },
                    { oid: 'c.0', name: 'C', aggregate: 'minmax' }, // non-reducible → last value
                ],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [dayTs(20, 6), 2],
                                [dayTs(20, 18), 4],
                                [dayTs(22, 6), 10],
                            ] as [number, number][],
                        },
                        {
                            name: 'B',
                            data: [
                                [dayTs(20, 6), 1],
                                [dayTs(20, 18), 5],
                            ] as [number, number][],
                        },
                        {
                            name: 'C',
                            data: [
                                [dayTs(20, 14), 7],
                                [dayTs(20, 20), 9],
                            ] as [number, number][],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar', aggregate: 'average' },
                barCategories: cats,
                barWindowEnd: end,
            }),
        );
        const series = option.series as { name: string; data: unknown[] }[];
        expect(series[0].data).toEqual([3, null, 10]); // avg(2,4) — the chart default
        expect(series[1].data).toEqual([5, null, null]); // max(1,5)
        expect(series[2].data).toEqual([9, null, null]); // minmax → LAST value (adapter parity)
    });

    it("diffMode 'raw' in a chart-diff chart: the axis keeps every category — the raw series' first value stands, the diff series pads a leading null", () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A' },
                    { oid: 'b.0', name: 'B', diffMode: 'raw' },
                ],
                history: {
                    series: [totals('A', [6, 3, 10]), totals('B', [2, 4, 6])],
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar', aggregate: 'total' },
                barCategories: cats,
                barWindowEnd: end,
                barDiff: true,
            }),
        );
        const xAxis = (option as { xAxis: { data?: number[] } }).xAxis;
        expect(xAxis.data).toEqual(cats); // mixed chart — the sacrificial bucket stays
        const series = option.series as { name: string; data: unknown[] }[];
        // A inherits the diff: totals [6,3,10] → diffs [-3,7], no predecessor in bucket 0
        expect(series[0].data).toEqual([null, -3, 7]);
        // B is raw: every bucket value stands where it fell
        expect(series[1].data).toEqual([2, 4, 6]);
    });

    it("diffMode 'diff' in a NON-diff chart: only that series drops its first category (leading null), the axis stays complete", () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A', diffMode: 'diff' },
                    { oid: 'b.0', name: 'B' },
                ],
                history: {
                    series: [totals('A', [6, 3, 10]), totals('B', [2, 4, 6])],
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar', aggregate: 'total' },
                barCategories: cats,
                barWindowEnd: end,
                barDiff: false,
            }),
        );
        const xAxis = (option as { xAxis: { data?: number[] } }).xAxis;
        expect(xAxis.data).toEqual(cats);
        const series = option.series as { name: string; data: unknown[] }[];
        expect(series[0].data).toEqual([null, -3, 7]); // its OWN diff, against the chart default
        expect(series[1].data).toEqual([2, 4, 6]); // inherits raw (chart barDiff off)
    });

    it('legend values on MIXED diff bars read each series from its final buckets — diff value for the diff series, raw for the raw (K2 extension)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A' },
                    { oid: 'b.0', name: 'B', diffMode: 'raw' },
                ],
                history: {
                    series: [totals('A', [6, 3, 10, 12]), totals('B', [2, 4, 6, 8])],
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar', aggregate: 'total', legendShowValues: true },
                barCategories: [...cats, dayTs(23)],
                barWindowEnd: dayTs(24),
                barDiff: true,
            }),
        );
        // A: totals [6,3,10,12] → padded [null,-3,7,2] → last non-null 2 (the last DIFF);
        // B raw → last bucket 8. Both match exactly what the bars show.
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [2]');
        expect(legend.formatter?.('B')).toBe('B [8]');
    });

    it("EVERY series 'diff' with chart barDiff OFF still slices the axis — the window never widened, so the first AUTHORED bucket vanishes (under-shoot, adapter parity: the diff's first bucket is meaningless without a predecessor)", () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'a.0', name: 'A', diffMode: 'diff' },
                    { oid: 'b.0', name: 'B', diffMode: 'diff' },
                ],
                history: {
                    series: [totals('A', [6, 3, 10]), totals('B', [2, 4, 6])],
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar', aggregate: 'total' },
                barCategories: cats,
                barWindowEnd: end,
                barDiff: false,
            }),
        );
        // allDiff → the axis drops bucket 0 exactly like a chart-level diff would; no widening
        // happened (chart barDiff off), so the first authored bucket is the sacrificial one.
        const xAxis = (option as { xAxis: { data?: number[] } }).xAxis;
        expect(xAxis.data).toEqual(cats.slice(1));
        const series = option.series as { name: string; data: unknown[] }[];
        expect(series[0].data).toEqual([-3, 7]);
        expect(series[1].data).toEqual([2, 2]); // diffs of its own buckets: 4−2, 6−4
    });
});

// ── assemblePipelineResult — table family (ADR-0075: authored columns, positional meta) ──

describe('assemblePipelineResult — table family (ADR-0075)', () => {
    const tableCompanions = (series: ChartPipelineSeries[]): AssemblePipelineInput['companions'] => ({
        chartConfig: {},
        yAxes: [],
        markLines: [],
        // The series-shaped ONLY surfaces — both must be inert in the table branch.
        jsonSeriesStyle: { temp: { color: '#evil' } },
        jsonHidden: ['temp'],
        series,
    });

    it('time X: POSITIONAL companions meta (not the overlay), jsonHidden ignored, transforms on the points', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonTable: {
                    xKind: 'time',
                    series: [
                        {
                            name: 'temp',
                            data: [
                                [1, 20],
                                [2, 10],
                            ],
                        },
                    ],
                },
                companions: tableCompanions([{ oid: '', name: 'Temp', yPath: 'temp', color: '#0af', yOffset: -5 }]),
            }),
        );
        expect(hasData).toBe(true);
        const s = seriesOf(option)[0] as { name: string; data: unknown[]; color?: string };
        expect(s.name).toBe('Temp'); // the meta name wins in the builder (Verlauf parity)
        expect(s.color).toBe('#0af'); // positional meta, never the '#evil' overlay entry
        expect(s.data).toEqual([
            [1, 15],
            [2, 5],
        ]); // offset over the parse-sorted points
    });

    it('category X: plain per-row value arrays flow through; legend values read the last NON-NULL', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                src: { legendShowValues: true },
                jsonTable: {
                    xKind: 'category',
                    categories: ['Jan', 'Feb', 'Jan'],
                    series: [
                        { name: 'a', data: [1, null, 3] },
                        { name: 'b', data: [null, null, null] },
                    ],
                },
                companions: tableCompanions([
                    { oid: '', name: 'a', yPath: 'a' },
                    { oid: '', name: 'b', yPath: 'b' },
                ]),
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option)[0]?.data).toEqual([1, null, 3]);
        expect(seriesOf(option)[1]?.data).toEqual([null, null, null]);
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('a')).toBe('a [3]'); // last non-null — what the bars show
        expect(legend.formatter?.('b')).toBe('b'); // all-null → the bare name
    });

    it('category/index X: the plain values run through the SAME transform chain (offset feeds the formula)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonTable: { xKind: 'index', categories: ['1', '2'], series: [{ name: 'a', data: [10, null] }] },
                companions: tableCompanions([{ oid: '', name: 'a', yPath: 'a', yOffset: 2, formula: 'val * 10' }]),
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([120, null]); // (10+2)*10; gaps survive
    });

    it('an empty table (no payload yet) renders no series and no error surface', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonTable: { series: [], xKind: 'index' },
                companions: tableCompanions([{ oid: '', name: 'A', yPath: 'a' }]),
            }),
        );
        expect(hasData).toBe(false);
        expect((option.series as unknown[]) ?? []).toHaveLength(0);
    });
});

describe('assemblePipelineResult — pie tabellarisch dispatch (ADR-0075 decision 5)', () => {
    it('each yPath series becomes ONE ring with N row slices, named from the X column', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('pie', 'json', {
                jsonTable: {
                    xKind: 'category',
                    categories: ['Jan', 'Feb'],
                    sliceNames: ['Jan', 'Feb'],
                    series: [
                        { name: 'a', data: [1, 2] },
                        { name: 'b', data: [3, 4] },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [
                        { oid: '', name: 'A', yPath: 'a' },
                        { oid: '', name: 'B', yPath: 'b' },
                    ],
                },
            }),
        );
        expect(hasData).toBe(true);
        const rings = option.series as { name: string; data: { name: string; value: number }[] }[];
        expect(rings).toHaveLength(2);
        // itemStyle (the kategoriestabile palette) rides along — asserted in the builder suite.
        expect(rings[0].data.map(d => [d.name, d.value])).toEqual([
            ['Jan', 1],
            ['Feb', 2],
        ]);
        expect(rings[1].data.map(d => [d.name, d.value])).toEqual([
            ['Jan', 3],
            ['Feb', 4],
        ]);
    });

    it('the transform seam holds for slice values (offset feeds the formula)', () => {
        const { option } = assemblePipelineResult(
            makeInput('pie', 'json', {
                jsonTable: {
                    xKind: 'index',
                    categories: ['1'],
                    sliceNames: ['Zeile 1'],
                    series: [{ name: 'a', data: [10] }],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [{ oid: '', name: 'A', yPath: 'a', yOffset: 2, formula: 'val * 10' }],
                },
            }),
        );
        const ring = (option.series as { data: { value: number }[] }[])[0];
        expect(ring.data[0].value).toBe(120); // (10+2)*10
    });
});

// ── window transforms + the legend one-truth decision (ticket 04) ──

describe('assemblePipelineResult — window transforms (ticket 04)', () => {
    it('time-axis path: smoothing + cumulative act on the final points; the legend reads them', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A', smoothWindow: 3, cumulative: true }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 1],
                                [2, 2],
                                [3, 3],
                            ] as [number, number][],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                src: { legendShowValues: true },
            }),
        );
        // [1,2,3] N=3 → [1.5, 2, 2.5] → cumulative [1.5, 3.5, 6] — the ts never moves
        expect(seriesOf(option)[0].data).toEqual([
            [1, 1.5],
            [2, 3.5],
            [3, 6],
        ]);
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [6]');
    });

    it('category bars: the window acts on the BUCKETS, not on the raw points', () => {
        const dayTs = (y: number, mo: number, d: number, h = 0): number => new Date(y, mo - 1, d, h).getTime();
        const cats = [dayTs(2026, 8, 20), dayTs(2026, 8, 21), dayTs(2026, 8, 22), dayTs(2026, 8, 23)];
        const end = dayTs(2026, 8, 24);
        const pts: [number, number][] = [
            [dayTs(2026, 8, 20, 6), 2],
            [dayTs(2026, 8, 20, 18), 4],
            [dayTs(2026, 8, 21, 6), 3],
            [dayTs(2026, 8, 22, 6), 10],
            [dayTs(2026, 8, 23, 6), 12],
        ];
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A', smoothWindow: 3 }],
                history: { series: [{ name: 'A', data: pts }], loading: false, error: null },
                src: { chartType: 'bar', aggregate: 'total' },
                barCategories: cats,
                barWindowEnd: end,
            }),
        );
        // Buckets total → [6, 3, 10, 12], THEN the centered N=3 window over the buckets →
        // [4.5, 19/3, 25/3, 11] — smoothing the RAW points would produce a different series.
        expect(seriesOf(option)[0].data).toEqual([4.5, 19 / 3, 25 / 3, 11]);
    });

    it('ONE value, ONE truth (the ticket-04 decision): a formula series legend shows f(val + yOffset), not the raw value', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A', yOffset: 2, formula: 'val * 10' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 10],
                                [2, 20],
                            ] as [number, number][],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                src: { legendShowValues: true },
            }),
        );
        // The axis shows (10+2)*10=120 / (20+2)*10=220 — the legend reads the SAME final value
        // (formerly it showed the raw 20: the retired pre-transform divergence).
        expect(seriesOf(option)[0].data).toEqual([
            [1, 120],
            [2, 220],
        ]);
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [220]');
    });

    it('table plain values get the same final stone — cumulative columns total, legend reads the last non-null', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonTable: {
                    series: [{ name: 'A', data: [1, 2, null, 4] }],
                    xKind: 'category',
                    categories: ['a', 'b', 'c', 'd'],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [{ oid: '', name: 'A', yPath: 'v', cumulative: true }],
                },
                src: { legendShowValues: true },
            }),
        );
        expect(seriesOf(option)[0].data).toEqual([1, 3, null, 7]);
        const legend = option.legend as { formatter?: (n: string) => string };
        expect(legend.formatter?.('A')).toBe('A [7]');
    });
});
