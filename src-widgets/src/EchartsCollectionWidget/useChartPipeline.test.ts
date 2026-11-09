import { describe, expect, it } from 'vitest';
import type { EChartsOption } from 'echarts';
import type { Theme } from '@mui/material/styles';

import { toPresentationBase } from './presentation';
import { coreOf } from './families/cores';
import { buildEchartsTheme, type ThemeTokens } from './echartsTheme';
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

/** A minimal MUI theme stub — everything buildEchartsTheme/effectiveTextTokens read. */
const THEME = {
    palette: {
        mode: 'light',
        primary: { main: '#p' },
        secondary: { main: '#s' },
        warning: { main: '#w' },
        success: { main: '#su' },
        info: { main: '#i' },
        error: { main: '#e' },
        text: { primary: '#tp', secondary: '#ts' },
        divider: '#div',
        background: { paper: '#pa' },
    },
    typography: { fontFamily: 'sans' },
} as unknown as Theme;

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
        expect(hasMergedData({ series: [{ data: [] }, { data: [[1, 2]] }] })).toBe(true);
    });

    it('is false for empty data arrays, no series, or non-array data', () => {
        expect(hasMergedData({ series: [{ data: [] }] })).toBe(false);
        expect(hasMergedData({})).toBe(false);
        expect(hasMergedData({ series: [{ data: 'nope' }] })).toBe(false);
    });

    it('NULL-only payloads are NO data (ADR-0082 ticket 04) — a datum counts only with a value', () => {
        // Pie: slices exist (legend entries) but every value is null — renders nothing, so the
        // empty placeholder must own the canvas, not a blank chart.
        expect(
            hasMergedData({
                series: [
                    {
                        data: [
                            { name: 'A', value: null },
                            { name: 'B', value: null },
                        ],
                    },
                ],
            }),
        ).toBe(false);
        // Cartesian: a series of only null points renders nothing either
        expect(
            hasMergedData({
                series: [
                    {
                        data: [
                            [1, null],
                            [2, null],
                        ],
                    },
                ],
            }),
        ).toBe(false);
        expect(hasMergedData({ series: [{ data: [null, undefined] }] })).toBe(false);
        // One real value flips it true — in either datum shape
        expect(
            hasMergedData({
                series: [
                    {
                        data: [
                            { name: 'A', value: null },
                            { name: 'B', value: 3 },
                        ],
                    },
                ],
            }),
        ).toBe(true);
        expect(
            hasMergedData({
                series: [
                    {
                        data: [
                            [1, null],
                            [2, 5],
                        ],
                    },
                ],
            }),
        ).toBe(true);
        // 0 is a VALUE (echarts stillShowZeroSum draws equal slices) — only null/undefined are empty
        expect(hasMergedData({ series: [{ data: [0, 0] }] })).toBe(true);
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

/** Compose the presentation the way the hook does: base + the family profile's fragment (ADR-0083). */
const presentationFor = (
    family: 'cartesian' | 'pie',
    src: Record<string, unknown> = {},
    markLines: Parameters<ReturnType<typeof coreOf>['presentationFragment']>[0]['markLines'] = [],
    chartConfig: Record<string, unknown> = {},
): AssemblePipelineInput['presentation'] => ({
    ...toPresentationBase({ src, palette: ['#111'], family, themeTokens: tokens, themeDark: false }),
    ...coreOf(family).presentationFragment({ src, chartConfig, markLines }),
});

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
        presentation: presentationFor(family, src),
        themeBase: {},
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

describe('assemblePipelineResult — title and legend on the same edge never overlap (ADR-0103 Abnahme-Funde)', () => {
    /** Builds a one-series Verlauf chart from the given src and returns its legend + grid. */
    const layoutOf = (
        src: Record<string, unknown>,
    ): { legend: Record<string, unknown>; grid: Record<string, unknown> } => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                src,
                usable: [{ oid: 'a.0', name: 'A' }],
                history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
            }),
        );
        return {
            legend: option.legend as Record<string, unknown>,
            grid: option.grid as Record<string, unknown>,
        };
    };

    it('without a title the legend keeps its 4 px edge and the plot its 30 px top', () => {
        const { legend, grid } = layoutOf({});
        expect(legend.top).toBe(4);
        expect(grid.top).toBe(30);
    });

    it('title and legend both on top (the defaults): the legend sits below the title block, the plot moves down by it', () => {
        // Title block = echarts' default title font (18) + its padding (5 above, 5 below) = 28.
        const { legend, grid } = layoutOf({ titleText: 'W2 100 %' });
        expect(legend.top).toBe(4 + 28);
        expect(grid.top).toBe(30 + 28);
    });

    it('the title block follows the title font size and a downward title shift', () => {
        expect(layoutOf({ titleText: 'T', titleFontSize: 24 }).legend.top).toBe(4 + 34);
        const shifted = layoutOf({ titleText: 'T', titleDy: 10 });
        expect(shifted.legend.top).toBe(4 + 10 + 28);
        expect(shifted.grid.top).toBe(30 + 10 + 28);
    });

    it('both at the bottom: the legend rises above the title, the plot bottom follows', () => {
        const { legend, grid } = layoutOf({ titleText: 'T', titlePos: 'bottomCenter', legendPos: 'bottomCenter' });
        expect(legend.bottom).toBe(4 + 28);
        expect(grid.bottom).toBe(28 + 28);
    });

    it('different edges, a middle legend or a hidden legend leave the layout untouched', () => {
        const apart = layoutOf({ titleText: 'T', titlePos: 'bottomCenter' });
        expect(apart.legend.top).toBe(4);
        expect(apart.grid.top).toBe(30);
        expect(apart.grid.bottom).toBe(28);
        const middle = layoutOf({ titleText: 'T', legendPos: 'middleRight' });
        expect(middle.legend.top).toBe('center');
        expect(middle.grid.top).toBe(30);
        expect(layoutOf({ titleText: 'T', legendShow: false }).grid.top).toBe(30);
    });

    describe('a raw subtitle counts towards the title block', () => {
        /** Like layoutOf, with the Title section's raw JSON set. */
        const rawLayoutOf = (
            src: Record<string, unknown>,
            titleRaw: string,
        ): { legend: Record<string, unknown>; grid: Record<string, unknown> } => {
            const { option } = assemblePipelineResult(
                makeInput('cartesian', 'history', {
                    src,
                    usable: [{ oid: 'a.0', name: 'A' }],
                    history: { series: [{ name: 'A', data: [[1, 2]] }], loading: false, error: null },
                    companions: {
                        chartConfig: { titleRaw },
                        yAxes: [],
                        markLines: [],
                        jsonSeriesStyle: {},
                        jsonHidden: [],
                        series: [],
                    },
                }),
            );
            return {
                legend: option.legend as Record<string, unknown>,
                grid: option.grid as Record<string, unknown>,
            };
        };

        it('echarts defaults: the subtitle adds its gap (10) and its font size (12) below the title', () => {
            // Title block = 18 (title font) + 10 (itemGap) + 12 (subtext font) + 2 × 5 (padding) = 50.
            const { legend, grid } = rawLayoutOf({ titleText: 'T' }, '{"subtext": "Quelle: Sensor"}');
            expect(legend.top).toBe(4 + 50);
            expect(grid.top).toBe(30 + 50);
        });

        it('honours a raw subtitle font size, item gap and line breaks', () => {
            // 18 + 4 (itemGap) + 2 lines × 16 (subtext font) + 2 × 5 = 64.
            const { legend } = rawLayoutOf(
                { titleText: 'T' },
                '{"subtext": "Zeile 1\\nZeile 2", "itemGap": 4, "subtextStyle": {"fontSize": 16}}',
            );
            expect(legend.top).toBe(4 + 64);
        });

        it('a subtitle without title text still pushes the legend (empty text has no height in echarts)', () => {
            // 0 (no title line) + 10 (itemGap) + 12 (subtext font) + 2 × 5 = 32.
            const { legend, grid } = rawLayoutOf({}, '{"subtext": "Nur Untertitel"}');
            expect(legend.top).toBe(4 + 32);
            expect(grid.top).toBe(30 + 32);
        });
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
                // The pipeline resolves bounds BEFORE the presentation call — this is what
                // resolveMarkLines hands over (injected values, subscription outside).
                presentation: presentationFor('cartesian', {}, [{ upper: 24, lower: 18 }] as never),
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
                presentation: presentationFor('cartesian', { chartType: 'bar' }),
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
                presentation: presentationFor('cartesian', { chartType: 'bar' }),
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
                presentation: presentationFor('cartesian', { chartType: 'bar' }),
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

// ── family × mode × jsonKind option-path parity (ADR-0083 ticket 03) ──

describe('assemblePipelineResult — family × mode × jsonKind option-path parity (ADR-0083 ticket 03)', () => {
    // The full option path over the NEW composition seam (base + profile fragment + registry
    // dispatch), one cell per crossing; the exact builder leaves are pinned by the
    // optionBuilder/presentation suites — these cells pin the PATH (right family shape, right
    // axis flavour, right data reading) for every combination.
    const jsonCompanions = {
        chartConfig: {},
        yAxes: [],
        markLines: [],
        jsonSeriesStyle: {},
        jsonHidden: [],
        series: [],
    };
    const tableCompanions2 = {
        ...jsonCompanions,
        series: [
            { oid: '', name: 'A', yPath: 'a' },
            { oid: '', name: 'B', yPath: 'b' },
        ],
    };

    it('cartesian · history: line series on the time axis', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 2],
                                [2, 4],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        const s = option.series as { name: string; type?: string }[];
        expect(s).toHaveLength(1);
        expect(s[0]).toMatchObject({ name: 'A', type: 'line' });
        expect((option as { xAxis?: { type?: string } }).xAxis?.type).toBe('time');
    });

    it('cartesian · json-series: payload series on the time axis', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonParsed: { series: [{ name: 'P1', data: [[1, 3]] }] },
                companions: jsonCompanions,
            }),
        );
        const s = option.series as { name: string; type?: string }[];
        expect(s).toHaveLength(1);
        expect(s[0]).toMatchObject({ name: 'P1', type: 'line' });
        expect((option as { xAxis?: { type?: string } }).xAxis?.type).toBe('time');
    });

    it('cartesian · json-table: yPath series on the string category axis', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonTable: {
                    xKind: 'category',
                    categories: ['x', 'y'],
                    series: [
                        { name: 'A', data: [1, 2] },
                        { name: 'B', data: [3, 4] },
                    ],
                },
                companions: tableCompanions2,
            }),
        );
        const s = option.series as { name: string; data: unknown[] }[];
        expect(s.map(x => x.name)).toEqual(['A', 'B']);
        expect(s[0].data).toEqual([1, 2]);
        expect((option as { xAxis?: { type?: string } }).xAxis?.type).toBe('category');
    });

    it('pie · history: one pie series, latest-aggregated slice, no axes', () => {
        const { option } = assemblePipelineResult(
            makeInput('pie', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 5],
                                [2, 7],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
            }),
        );
        const s = option.series as {
            type?: string;
            radius?: string[];
            data: { name: string; value: number | null }[];
        }[];
        expect(s).toHaveLength(1);
        // The point-shaped pie series carries no series-level name (the slices name it).
        expect(s[0]).toMatchObject({ type: 'pie' });
        expect(s[0].radius).toEqual(['0%', '70%']);
        expect(s[0].data).toMatchObject([{ name: 'A', value: 7 }]);
        expect((option as { xAxis?: unknown }).xAxis).toBeUndefined();
    });

    // The REAL theme base carries xAxis/yAxis style objects (the cartesian floor); the tests
    // above inject `themeBase: {}`, so only this regression pins the production seam: a pie's
    // merged option must carry NO axes — an option xAxis object is a real axis component
    // (ADR-0007 addendum: component keys floor only when G emits them).
    it('pie over the REAL theme base: the axis floor never materializes phantom axes (ADR-0007 addendum)', () => {
        const themeBase = buildEchartsTheme(THEME);
        expect((themeBase as unknown as Record<string, unknown>).xAxis).toBeDefined(); // the floor exists
        const { option } = assemblePipelineResult(
            makeInput('pie', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 5],
                                [2, 7],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                themeBase,
            }),
        );
        expect((option as { xAxis?: unknown }).xAxis).toBeUndefined();
        expect((option as { yAxis?: unknown }).yAxis).toBeUndefined();
        // the style floors G relies on keep flowing
        expect((option as unknown as Record<string, unknown>).textStyle).toEqual({ color: '#tp', fontFamily: 'sans' });
    });

    it('cartesian over the REAL theme base: the axes G emits survive the addendum unchanged', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [{ oid: 'a.0', name: 'A' }],
                history: {
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 5],
                                [2, 7],
                            ],
                        },
                    ],
                    loading: false,
                    error: null,
                },
                themeBase: buildEchartsTheme(THEME),
            }),
        );
        // Cartesian G is axis-complete on its own (the X line carries the primary stamp,
        // ADR-0055 addendum 3; the Y array always emits its splitLine divider) — the addendum's
        // component rule must not touch either: presence + G styling stay exactly as before.
        const x = (option as { xAxis?: { axisLine?: { lineStyle?: { color?: string } } } }).xAxis;
        expect(x?.axisLine?.lineStyle?.color).toBe('#1'); // G's primary stamp (tokens.primary)
        const y = (option as { yAxis?: { splitLine?: { lineStyle?: { color?: string } } }[] }).yAxis;
        expect(y?.[0]?.splitLine?.lineStyle?.color).toBe('#7'); // G's divider (tokens.divider)
    });

    // Tooltip floor (ADR-0027 addendum 2026-11-04): the REAL theme base paints the card surface
    // and the legend-text colour; the GUI colour and a raw `backgroundColor` keep winning, and
    // the GUI still beats the raw (ADR-0054 — emitted before the raw fold).
    describe('tooltip over the REAL theme base (ADR-0027 addendum 2026-11-04)', () => {
        const tooltipOf = (
            presentation: Partial<AssemblePipelineInput['presentation']> = {},
        ): Record<string, unknown> => {
            const { option } = assemblePipelineResult(
                makeInput('cartesian', 'history', {
                    usable: [{ oid: 'a.0', name: 'A' }],
                    history: { series: [{ name: 'A', data: [[1, 5]] }], loading: false, error: null },
                    presentation: { ...presentationFor('cartesian'), ...presentation },
                    themeBase: buildEchartsTheme(THEME),
                }),
            );
            return option.tooltip as Record<string, unknown>;
        };

        it('unset: the paper surface with the textSecondary text, no border colour', () => {
            const t = tooltipOf();
            expect(t.backgroundColor).toBe('#pa');
            expect(t.textStyle).toEqual({ color: '#ts' });
            expect(t).not.toHaveProperty('borderColor');
        });

        it('a raw tooltip backgroundColor wins against the floor', () => {
            expect(tooltipOf({ tooltipRaw: '{"backgroundColor":"#raw"}' }).backgroundColor).toBe('#raw');
        });

        it('the GUI colour wins against the floor and against the raw', () => {
            expect(tooltipOf({ tooltipBgColor: '#gui' }).backgroundColor).toBe('#gui');
            expect(
                tooltipOf({ tooltipBgColor: '#gui', tooltipRaw: '{"backgroundColor":"#raw"}' }).backgroundColor,
            ).toBe('#gui');
        });
    });

    it('pie · json-series: the payload series become slices', () => {
        const { option } = assemblePipelineResult(
            makeInput('pie', 'json', {
                jsonParsed: { series: [{ name: 'P1', data: [[1, 3]] }] },
                companions: jsonCompanions,
            }),
        );
        const s = option.series as { type?: string; data: { name: string; value: number | null }[] }[];
        expect(s).toHaveLength(1);
        expect(s[0].type).toBe('pie');
        // The slice carries its palette itemStyle beside the value.
        expect(s[0].data).toMatchObject([{ name: 'P1', value: 3 }]);
    });

    it('pie · json-table: yPath series become rings (the rich seam has the deep pins)', () => {
        const { option } = assemblePipelineResult(
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
                companions: tableCompanions2,
            }),
        );
        const rings = option.series as { type?: string; data: unknown[] }[];
        expect(rings).toHaveLength(2);
        expect(rings.every(r => r.type === 'pie')).toBe(true);
    });
});

describe('assemblePipelineResult — Balken-Stapelmodus 100 % (ADR-0084 decision 4)', () => {
    /** A percent-mode bar chart: chartType bar, blob stackMode percent, history series. */
    const percentCase = (
        hist: { name: string; data: (number | null)[] }[],
        metas: Record<string, unknown>[],
        extra: Partial<AssemblePipelineInput> = {},
    ): ReturnType<typeof assemblePipelineResult> => {
        // The src the presentation is built from must see the extra's src keys too
        // (legendShowValues & co. ride the base, not the fragment).
        const srcFull = { chartType: 'bar', ...((extra.src as Record<string, unknown>) ?? {}) };
        const { src: _drop, ...rest } = extra;
        return assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: metas.map((m, i) => ({ oid: `o${i}`, name: hist[i]?.name, ...m })),
                history: { series: hist as never, loading: false, error: null },
                src: srcFull,
                companions: {
                    chartConfig: { stackMode: 'percent' },
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: metas.map((m, i) => ({ oid: `o${i}`, name: hist[i]?.name, ...m })),
                },
                presentation: presentationFor('cartesian', srcFull, [], { stackMode: 'percent' }),
                ...rest,
            }),
        );
    };

    it('10/20/10 on one category normalize to 25 %/50 %/25 % (the acceptance case)', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10] },
                { name: 'B', data: [20] },
                { name: 'C', data: [10] },
            ],
            [{}, {}, {}],
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series.map(s => s.data[0])).toEqual([0.25, 0.5, 0.25]);
    });

    it('normalization is per GROUP × category — mixed groups never share a sum', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10, 8] },
                { name: 'B', data: [20, 8] },
                { name: 'C', data: [30, 4] }, // group B — own sums
            ],
            [{ stack: 'A' }, { stack: 'A' }, { stack: 'B' }],
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series[0].data[0]).toBeCloseTo(10 / 30);
        expect(series[2].data[0]).toBe(1); // alone in its group → always 100 %
        expect(series[0].data[1]).toBe(0.5); // category 2: 8/(8+8)
        expect(series[2].data[1]).toBe(1);
    });

    it('sum ≤ 0 → 0 share (the example formula is defensive); a null gap stays null', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [-5, 10, null] },
                { name: 'B', data: [-5, 30, 40] },
            ],
            [{}, {}],
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series[0].data[0]).toBe(0); // sum -10 ≤ 0 — both shares 0, no negative lie
        expect(series[1].data[0]).toBe(0);
        expect(series[0].data[2]).toBeNull(); // a gap is a gap — never 0 %
        expect(series[1].data[2]).toBe(1); // B alone contributes in category 3
    });

    it('opted-out bars and lines keep their ABSOLUTE values; mode stack never normalizes', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10] },
                { name: 'Out', data: [99] },
            ],
            [{}, { stack: 'none' }],
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series[0].data[0]).toBe(1); // alone in the mode stack → 100 %
        expect(series[1].data[0]).toBe(99); // opted out — absolute stays

        const stacked = assemblePipelineResult(
            makeInput('cartesian', 'history', {
                usable: [
                    { oid: 'o0', name: 'A' },
                    { oid: 'o1', name: 'B' },
                ] as never[],
                history: {
                    series: [
                        { name: 'A', data: [10] },
                        { name: 'B', data: [20] },
                    ] as never,
                    loading: false,
                    error: null,
                },
                src: { chartType: 'bar' },
                companions: {
                    chartConfig: { stackMode: 'stack' },
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [
                        { oid: 'o0', name: 'A' },
                        { oid: 'o1', name: 'B' },
                    ] as never[],
                },
                presentation: presentationFor('cartesian', { chartType: 'bar' }, [], { stackMode: 'stack' }),
            }),
        );
        expect((stacked.option.series as { data: (number | null)[] }[]).map(s => s.data[0])).toEqual([10, 20]);
    });

    it('a Farbskala on a percent-stacked bar inherits the range of the displayed SHARES (ADR-0101, ticket 05)', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10, 30] },
                { name: 'B', data: [30, 10] },
            ],
            [{ colorScale: true, color: '#ff0000' }, {}],
        );
        const vm = option.visualMap as { seriesIndex: number; min: number; max: number }[];
        expect(vm).toHaveLength(1);
        // A's shares are 25 % and 75 % — never the absolute 10…30.
        expect(vm[0]).toMatchObject({ seriesIndex: 0 });
        expect(vm[0].min).toBeCloseTo(0.25);
        expect(vm[0].max).toBeCloseTo(0.75);
    });

    it('the absolute values ride percentAbsolute for the tooltip; legend values read the SHARES', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10] },
                { name: 'B', data: [30] },
            ],
            [{ unit: 'W' }, { unit: 'W' }],
            { src: { chartType: 'bar', legendShowValues: true } },
        );
        // The emitted data are shares…
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series[0].data[0]).toBeCloseTo(0.25);
        // …the tooltip is the custom formatter (the percent ctx rides it — its TEXT is pinned in
        // the optionBuilder suite, which runs under jsdom where the moment header can resolve)…
        expect((option.tooltip as { formatter?: unknown }).formatter).toBeTypeOf('function');
        // …and the legend's value is the share (one value, one truth — the final series).
        const legendFmt = (option.legend as { formatter?: (name: string) => string }).formatter;
        expect(legendFmt).toBeTypeOf('function');
        expect((legendFmt as (name: string) => string)('A')).toContain('25 %');
    });

    it('BUCKET path too: the legend value shows the share, never the absolute-as-percent (review catch)', () => {
        // The bucket-path legend resolver runs PRE-normalization and the generic post-block is
        // !barCategories-guarded — without the percent-block recompute the legend lied
        // `A [1000 %]` (the absolute 10 read as a fraction through the percent facts).
        const { option } = percentCase(
            [
                {
                    name: 'A',
                    data: [
                        [1, 10],
                        [2, 8],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [1, 30],
                        [2, 8],
                    ],
                },
            ] as never,
            [{}, {}],
            {
                src: { chartType: 'bar', legendShowValues: true },
                barCategories: [1, 2],
                barWindowEnd: 3,
            },
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        expect(series[0].data[0]).toBeCloseTo(0.25); // normalized on the bucket path too
        const legendFmt = (option.legend as { formatter: (name: string) => string }).formatter;
        // The legend reads the LAST bucket's share (8/(8+8) = 50 %) — the pre-fix lie was the
        // ABSOLUTE 8 rendered as a fraction ('800 %').
        expect(legendFmt('A')).toContain('50 %');
        expect(legendFmt('A')).not.toContain('800');
        expect(legendFmt('A')).not.toContain('1000');
    });

    it('deselected members leave the PERCENT DENOMINATOR too (Legenden-Folge, like the anchor)', () => {
        const { option } = percentCase(
            [
                { name: 'A', data: [10] },
                { name: 'B', data: [20] },
                { name: 'C', data: [30] },
            ],
            [{}, {}, {}],
            { legendSelection: { C: false } },
        );
        const series = option.series as { name: string; data: (number | null)[] }[];
        // The VISIBLE stack (A+B) sums to 100 %…
        expect(series[0].data[0]).toBeCloseTo(10 / 30);
        expect(series[1].data[0]).toBeCloseTo(20 / 30);
        // …the deselected member keeps its absolute data (invisible; renormalizes on re-select).
        expect(series[2].data[0]).toBe(30);
    });

    it('JSON families normalize too — the builder stacks there, so the shares follow (addendum 3)', () => {
        const { option } = assemblePipelineResult(
            makeInput('cartesian', 'json', {
                jsonParsed: {
                    series: [
                        { name: 'A', data: [[1, 10]] },
                        { name: 'B', data: [[1, 30]] },
                    ],
                },
                src: { chartType: 'bar' },
                companions: {
                    chartConfig: { stackMode: 'percent' },
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [],
                },
                presentation: presentationFor('cartesian', { chartType: 'bar' }, [], { stackMode: 'percent' }),
            }),
        );
        const series = option.series as { name: string; data: [number, number][] }[];
        expect(series[0].data[0][1]).toBeCloseTo(0.25);
        expect(series[1].data[0][1]).toBeCloseTo(0.75);
    });
});
