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
    resolveLegendValues,
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
    it('gauge needs only the first usable series value (Aktuellwert)', () => {
        expect(subscribedOids('gauge', 'history', series('a.0', 'b.0'), [], '', false)).toEqual(['a.0']);
    });

    it('radar subscribes the indicator OIDs, skipping empty ones', () => {
        expect(
            subscribedOids(
                'radar',
                'history',
                series('poly'),
                [{ oid: 'a.0' }, { oid: '' }, { oid: 'b.0' }],
                '',
                false,
            ),
        ).toEqual(['a.0', 'b.0']);
    });

    it('json subscribes the payload state; nothing_selected subscribes nothing', () => {
        expect(subscribedOids('cartesian', 'json', series('a.0'), [], 'javascript.0.chart', false)).toEqual([
            'javascript.0.chart',
        ]);
        expect(subscribedOids('pie', 'json', series('a.0'), [], 'nothing_selected', false)).toEqual([]);
    });

    it('live subscribes every usable series OID', () => {
        expect(subscribedOids('cartesian', 'live', series('a.0', 'b.0'), [], '', false)).toEqual(['a.0', 'b.0']);
    });

    it('Verlauf subscribes nothing — unless the early refresh listens for values', () => {
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', false)).toEqual([]);
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', true)).toEqual(['a.0']);
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
});

describe('pipelineError (unified three-source error, ADR-0046)', () => {
    it('stays null off cartesian/pie even with errors present', () => {
        expect(pipelineError('gauge', 'json', 'parse failed', 'fetch failed')).toBeNull();
        expect(pipelineError('radar', 'history', undefined, 'fetch failed')).toBeNull();
    });

    it('json mode surfaces the parse error', () => {
        expect(pipelineError('cartesian', 'json', 'Unexpected token', null)).toBe('Unexpected token');
        expect(pipelineError('pie', 'json', undefined, 'ignored')).toBeNull();
    });

    it('Verlauf prefers the fetch error, then the first per-series error', () => {
        expect(pipelineError('cartesian', 'history', undefined, 'fetch failed', [{ error: 'series failed' }])).toBe(
            'fetch failed',
        );
        expect(pipelineError('cartesian', 'history', undefined, null, [{}, { error: 'series failed' }])).toBe(
            'series failed',
        );
        expect(pipelineError('cartesian', 'history', undefined, null, [])).toBeNull();
    });

    it('live mode has no error source', () => {
        expect(pipelineError('cartesian', 'live', 'parse', 'fetch', [{ error: 'x' }])).toBeNull();
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
    family: 'cartesian' | 'pie' | 'gauge' | 'radar',
    mode: string,
    over: Partial<AssemblePipelineInput> = {},
): AssemblePipelineInput => {
    const src = over.src ?? {};
    return {
        family,
        mode,
        usable: [],
        indicators: [],
        values: {},
        history: { series: [], loading: false, error: null },
        liveBuffers: {},
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

    it('Live falls back to the OID as the series name and reads the rolling buffer', () => {
        const { option, hasData } = assemblePipelineResult(
            makeInput('cartesian', 'live', {
                usable: [{ oid: 'a.0' }],
                liveBuffers: { 'a.0': [[1, 5]] },
            }),
        );
        expect(hasData).toBe(true);
        expect(seriesOf(option)[0]?.name).toBe('a.0');
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

    it('gauge reads its scalar from the values map (hasData by value)', () => {
        const withValue = assemblePipelineResult(
            makeInput('gauge', 'history', {
                usable: [{ oid: 'g.0' }],
                values: { 'g.0': 42 },
            }),
        );
        expect(withValue.hasData).toBe(true);
        const without = assemblePipelineResult(makeInput('gauge', 'history', { usable: [{ oid: 'g.0' }] }));
        expect(without.hasData).toBe(false);
    });

    it('radar reads its indicator values (hasData by value)', () => {
        const { hasData } = assemblePipelineResult(
            makeInput('radar', 'history', { indicators: [{ oid: 'r.0' }, { oid: '' }], values: { 'r.0': 5 } }),
        );
        expect(hasData).toBe(true);
    });
});

// ── resolveLegendValues + legend-values injection (ADR-0054, adapter legActual) ──

describe('resolveLegendValues (ADR-0054)', () => {
    it('Verlauf: the LAST point of each history series', () => {
        const out = resolveLegendValues(
            'history',
            series('a.0', 'b.0'),
            {},
            [
                {
                    name: 'A',
                    data: [
                        [1, 2],
                        [2, 12.5],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [1, null],
                        [2, 40],
                    ],
                },
            ],
            {},
            [],
        );
        expect(out).toEqual({ A: 12.5, B: 40 });
    });

    it('Live: the subscribed value wins; the live buffer is the fallback (name falls back to the OID)', () => {
        const out = resolveLegendValues(
            'live',
            [{ oid: 'a.0', name: 'A' }, { oid: 'b.0' }],
            { 'a.0': 21.5 },
            [],
            { 'b.0': [[1, 7]] },
            [],
        );
        expect(out).toEqual({ A: 21.5, 'b.0': 7 });
    });

    it('Live: boolean subscribed values coerce to 1/0 — a bool OID resolves its legend value (ADR-0058)', () => {
        const out = resolveLegendValues('live', [{ oid: 'pump.0', name: 'Pump' }], { 'pump.0': true }, [], {}, []);
        expect(out).toEqual({ Pump: 1 });
    });

    it('JSON: the last point of each payload series', () => {
        const out = resolveLegendValues('json', [], {}, [], {}, [
            {
                name: 'P1',
                data: [
                    [1, 3],
                    [2, 4],
                ],
            },
            { name: 'P2', data: [[1, 9]] },
        ]);
        expect(out).toEqual({ P1: 4, P2: 9 });
    });

    it('a series with no usable point maps to null (the formatter falls back to the bare name)', () => {
        const out = resolveLegendValues('history', series('a.0'), {}, [{ name: 'A', data: [] }], {}, []);
        expect(out).toEqual({ A: null });
    });
});

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

    it('Live buffers transform through the same seam', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'live', {
                usable: [{ oid: 'a.0', name: 'A', formula: 'val / 1000' }],
                liveBuffers: { 'a.0': [[5, 4000]] },
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([[5, 4]]);
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

// ── series rest knobs: noFuture + validTime (ADR-0060, parity Build B issue 08) ──

describe('assemblePipelineResult — noFuture / validTime cuts (ADR-0060)', () => {
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

    it('validTime (Live): a FRESH last point is held to now; a stale one expires to a gap', () => {
        const fresh = assemblePipelineResult(
            makeInput('cartesian', 'live', {
                usable: [{ oid: 'a.0', name: 'A', validTime: 30 }],
                liveBuffers: { 'a.0': [[Date.now() - 5000, 7]] }, // 5 s old — inside the 30 s window
            }),
        );
        // The held point lands at the build's now with the last value (2 points, value 7).
        const freshData = seriesOf(fresh.option)[0]?.data as [number, number | null][];
        expect(freshData).toHaveLength(2);
        expect(freshData[1]?.[1]).toBe(7);

        const stale = assemblePipelineResult(
            makeInput('cartesian', 'live', {
                usable: [{ oid: 'a.0', name: 'A', validTime: 1 }],
                liveBuffers: { 'a.0': [[Date.now() - 120_000, 7]] }, // 2 min old — outside 1 s
            }),
        );
        const staleData = seriesOf(stale.option)[0]?.data as [number, number | null][];
        expect(staleData[1]?.[1]).toBeNull(); // expired → gap
    });

    it('validTime never applies outside Live (history stays untouched)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A', validTime: 30 }],
                history: { series: [{ name: 'A', data: [[1, 5]] }], loading: false, error: null },
            }),
        );
        expect(seriesOf(option)[0]?.data).toEqual([[1, 5]]);
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
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', false, marks)).toEqual([
            '0_userdata.0.soll',
            'hm-rpc.0.TEMP',
        ]);
        expect(subscribedOids('cartesian', 'history', series('a.0'), [], '', true, marks)).toEqual([
            'a.0',
            '0_userdata.0.soll',
            'hm-rpc.0.TEMP',
        ]);
    });

    it('non-cartesian families never subscribe marks (markings are cartesian-only)', () => {
        expect(subscribedOids('radar', 'history', series('p'), [{ oid: 'i.0' }], '', false, marks)).toEqual(['i.0']);
    });

    it('without marks the list is unchanged (backward-compatible arity)', () => {
        expect(subscribedOids('cartesian', 'live', series('a.0'), [], '', false)).toEqual(['a.0']);
    });
});

describe('assemblePipelineResult — resolved marking bands ride the presentation (ADR-0062)', () => {
    it('an OID-bounded band resolves from the injected values and emits markArea', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
                values: { '0_userdata.0.soll': 24 },
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
        const first = (option.series as { markArea?: { data: unknown[] } }[])[0];
        expect(first?.markArea?.data).toHaveLength(1);
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
