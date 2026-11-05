/**
 * Characterization net for the value chain's FINAL stage (ECharts-Laufzeit-Review ticket 01):
 * pins, per data path, what the pipeline hands the chart — final series data, the category
 * lists (`barCategories`/`xCategories`), the percent absolutes and the legend values — at the
 * ADR-0046 test surface {@link assemblePipelineResult}, observed through the rendered option
 * only (series data, x axis categories, tooltip percent rows, legend formatter).
 *
 * Written GREEN against the pre-refactor code; the extraction of the final stage into its own
 * module must keep every assertion here untouched (goldmaster).
 *
 * @module EchartsCollectionWidget/useChartPipeline.valueChain.test
 */
import { describe, expect, it } from 'vitest';
import type { EChartsOption } from 'echarts';

import { toPresentationBase } from './presentation';
import { coreOf } from './families/cores';
import type { ThemeTokens } from './echartsTheme';
import { assemblePipelineResult, type AssemblePipelineInput, type ChartPipelineSeries } from './useChartPipeline';

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

type Family = 'cartesian' | 'pie';

interface Case {
    family: Family;
    mode: 'history' | 'json';
    src?: Record<string, unknown>;
    chartConfig?: Record<string, unknown>;
    over?: Partial<AssemblePipelineInput>;
}

/** Build the assemble input the way the hook does (base + family fragment), legend toggle injected. */
const inputOf = (c: Case, legendShowValues: boolean): AssemblePipelineInput => {
    const src = { ...c.src, legendShowValues };
    const chartConfig = c.chartConfig ?? {};
    return {
        family: c.family,
        mode: c.mode,
        usable: [],
        history: { series: [], loading: false, error: null },
        jsonParsed: { series: [] },
        presentation: {
            ...toPresentationBase({ src, palette: ['#111'], family: c.family, themeTokens: tokens, themeDark: false }),
            ...coreOf(c.family).presentationFragment({ src, chartConfig, markLines: [] }),
        },
        themeBase: {} as EChartsOption,
        companions: { chartConfig, yAxes: [], markLines: [], jsonSeriesStyle: {}, jsonHidden: [], series: [] },
        now: 1_000_000,
        ...c.over,
        src,
    };
};

type EmittedSeries = { name: string; data: unknown[] };

const emitted = (option: EChartsOption): EmittedSeries[] => (option.series as EmittedSeries[] | undefined) ?? [];

/** Final series data per name — pie slices reduced to `{ name, value }` (the builder adds styling). */
const finalData = (option: EChartsOption): Record<string, unknown[]> =>
    Object.fromEntries(
        emitted(option).map(s => [
            s.name,
            s.data.map(d =>
                d !== null && typeof d === 'object' && !Array.isArray(d)
                    ? { name: (d as { name: unknown }).name, value: (d as { value: unknown }).value }
                    : d,
            ),
        ]),
    );

/** The x axis category list — absent on a time axis (and on pie, which has no axes). */
const xCategories = (option: EChartsOption): unknown[] | undefined =>
    (option.xAxis as { data?: unknown[] } | undefined)?.data;

/** Legend text per name through the emitted formatter — `null` when the legend shows no values. */
const legendTexts = (option: EChartsOption, names: string[]): Record<string, string> | null => {
    const formatter = (option.legend as { formatter?: (n: string) => string } | undefined)?.formatter;
    return formatter ? Object.fromEntries(names.map(n => [n, formatter(n)])) : null;
};

/**
 * The tooltip's percent rows (share AND the pipeline-kept absolute) per data index — the
 * observable face of `percentAbsolute`. Params carry the scalar share, so no time header renders.
 */
const percentRows = (option: EChartsOption, names: string[], length: number): string[] => {
    const formatter = (option.tooltip as { formatter: (params: unknown) => string }).formatter;
    const byName = finalData(option);
    const rows: string[] = [];
    for (let c = 0; c < length; c++) {
        rows.push(
            formatter(
                names.map(n => {
                    const d = byName[n][c];
                    return { seriesName: n, value: Array.isArray(d) ? d[1] : d, dataIndex: c };
                }),
            ),
        );
    }
    return rows;
};

const history = (...list: { name: string; data: [number, number | null][] }[]): AssemblePipelineInput['history'] => ({
    series: list,
    loading: false,
    error: null,
});

const usable = (...names: string[]): ChartPipelineSeries[] => names.map(name => ({ oid: `${name}.0`, name }));

describe.each([false, true])('value chain final stage — legend values %s', legendOn => {
    const run = (c: Case): EChartsOption => assemblePipelineResult(inputOf(c, legendOn)).option;
    const legend = <T>(on: T): T | null => (legendOn ? on : null);

    it('time axis: noFuture cut, offset and cumulative reach the series and the legend', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            over: {
                usable: [
                    { oid: 'a.0', name: 'A', cumulative: true },
                    { oid: 'b.0', name: 'B', yOffset: 10, noFuture: true },
                ],
                history: history(
                    {
                        name: 'A',
                        data: [
                            [1, 2],
                            [2, 4],
                            [3, null],
                        ],
                    },
                    {
                        name: 'B',
                        data: [
                            [1, 1],
                            [2, 2],
                            [2_000_000, 3],
                        ],
                    },
                ),
            },
        });
        expect(finalData(option)).toEqual({
            A: [
                [1, 2],
                [2, 6],
                [3, null],
            ],
            B: [
                [1, 11],
                [2, 12],
            ],
        });
        expect(xCategories(option)).toBeUndefined();
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [6]', B: 'B [12]' }));
    });

    const bucketSrc = { chartType: 'bar', aggregate: 'max' };
    const bucketSeries = history(
        {
            name: 'A',
            data: [
                [1, 1],
                [5, 3],
                [12, 4],
                [25, 6],
            ],
        },
        {
            name: 'B',
            data: [
                [2, 10],
                [3, 8],
                [15, 20],
                [22, 25],
            ],
        },
    );

    it('buckets without diff: per-series aggregate, window transform on the buckets', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            src: bucketSrc,
            over: {
                usable: [
                    { ...usable('A')[0], cumulative: true },
                    { ...usable('B')[0], aggregate: 'min' },
                ],
                history: bucketSeries,
                barCategories: [0, 10, 20],
                barWindowEnd: 30,
            },
        });
        expect(finalData(option)).toEqual({ A: [3, 7, 13], B: [8, 20, 25] });
        expect(xCategories(option)).toEqual([0, 10, 20]);
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [13]', B: 'B [25]' }));
    });

    it('buckets with chart diff: every series diffs, the axis drops the first category', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            src: { ...bucketSrc, barDiff: true },
            over: {
                usable: [
                    { ...usable('A')[0], cumulative: true },
                    { ...usable('B')[0], aggregate: 'min' },
                ],
                history: bucketSeries,
                barCategories: [0, 10, 20],
                barWindowEnd: 30,
                barDiff: true,
            },
        });
        expect(finalData(option)).toEqual({ A: [1, 3], B: [12, 5] });
        expect(xCategories(option)).toEqual([10, 20]);
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [3]', B: 'B [5]' }));
    });

    it('buckets mixing diff and raw series: the axis keeps the first category, diff pads a gap', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            src: { ...bucketSrc, barDiff: true },
            over: {
                usable: [
                    { ...usable('A')[0], cumulative: true },
                    { ...usable('B')[0], aggregate: 'min', diffMode: 'raw' },
                ],
                history: bucketSeries,
                barCategories: [0, 10, 20],
                barWindowEnd: 30,
                barDiff: true,
            },
        });
        expect(finalData(option)).toEqual({ A: [null, 1, 3], B: [8, 20, 25] });
        expect(xCategories(option)).toEqual([0, 10, 20]);
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [3]', B: 'B [25]' }));
    });

    it('percent on the time axis: visible stack members normalize, opt-out and deselected keep absolutes', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            src: { chartType: 'bar' },
            chartConfig: { stackMode: 'percent' },
            over: {
                usable: [...usable('A', 'B'), { ...usable('C')[0], stack: 'none' }, ...usable('D')],
                history: history(
                    {
                        name: 'A',
                        data: [
                            [1, 1],
                            [2, 3],
                            [3, null],
                        ],
                    },
                    {
                        name: 'B',
                        data: [
                            [1, 3],
                            [2, 1],
                            [3, 2],
                        ],
                    },
                    {
                        name: 'C',
                        data: [
                            [1, 4],
                            [2, 4],
                            [3, 4],
                        ],
                    },
                    {
                        name: 'D',
                        data: [
                            [1, 5],
                            [2, 5],
                            [3, 5],
                        ],
                    },
                ),
                legendSelection: { D: false },
            },
        });
        expect(finalData(option)).toEqual({
            A: [
                [1, 0.25],
                [2, 0.75],
                [3, null],
            ],
            B: [
                [1, 0.75],
                [2, 0.25],
                [3, 1],
            ],
            C: [
                [1, 4],
                [2, 4],
                [3, 4],
            ],
            D: [
                [1, 5],
                [2, 5],
                [3, 5],
            ],
        });
        expect(xCategories(option)).toBeUndefined();
        expect(percentRows(option, ['A', 'B'], 3)).toEqual([
            'A: 25 % (1)<br/>B: 75 % (3)',
            'A: 75 % (3)<br/>B: 25 % (1)',
            // the gap stays a gap in the data (finalData above) and in the tooltip: share and
            // absolute read '-' (ADR-0103 K4 fix; pinned as `0 % (-)` before it)
            'A: - (-)<br/>B: 100 % (2)',
        ]);
        // D (deselected) keeps its absolute data and left the stack — the legend formats it with
        // its own series format (ADR-0103 K2 fix; pinned as `D [500 %]` before it).
        expect(legendTexts(option, ['A', 'B', 'C', 'D'])).toEqual(
            legend({ A: 'A [75 %]', B: 'B [100 %]', C: 'C [4]', D: 'D [5]' }),
        );
    });

    it('percent on buckets: shares over the windowed buckets, absolutes ride the tooltip', () => {
        const option = run({
            family: 'cartesian',
            mode: 'history',
            src: bucketSrc,
            chartConfig: { stackMode: 'percent' },
            over: {
                usable: [{ ...usable('A')[0], cumulative: true }, ...usable('B')],
                history: history(
                    {
                        name: 'A',
                        data: [
                            [1, 1],
                            [11, 3],
                        ],
                    },
                    {
                        name: 'B',
                        data: [
                            [2, 3],
                            [12, 1],
                        ],
                    },
                ),
                barCategories: [0, 10],
                barWindowEnd: 20,
            },
        });
        expect(finalData(option)).toEqual({ A: [0.25, 0.8], B: [0.75, 0.2] });
        expect(xCategories(option)).toEqual([0, 10]);
        expect(percentRows(option, ['A', 'B'], 2)).toEqual([
            'A: 25 % (1)<br/>B: 75 % (3)',
            'A: 80 % (4)<br/>B: 20 % (1)',
        ]);
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [80 %]', B: 'B [20 %]' }));
    });

    it('table with category X: plain values transformed and windowed, row labels on the axis', () => {
        const option = run({
            family: 'cartesian',
            mode: 'json',
            src: { jsonKind: 'table' },
            over: {
                jsonTable: {
                    xKind: 'category',
                    categories: ['x', 'y', 'z'],
                    series: [
                        { name: 'A', data: [1, null, 3] },
                        { name: 'B', data: [2, 2, 2] },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [
                        { oid: '', name: 'A', yOffset: 1 },
                        { oid: '', name: 'B', cumulative: true },
                    ],
                },
            },
        });
        expect(finalData(option)).toEqual({ A: [2, null, 4], B: [2, 4, 6] });
        expect(xCategories(option)).toEqual(['x', 'y', 'z']);
        expect(legendTexts(option, ['A', 'B'])).toEqual(legend({ A: 'A [4]', B: 'B [6]' }));
    });

    it('table with index X: the index labels ride the axis', () => {
        const option = run({
            family: 'cartesian',
            mode: 'json',
            src: { jsonKind: 'table' },
            over: {
                jsonTable: { xKind: 'index', categories: ['1', '2'], series: [{ name: 'A', data: [5, 7] }] },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [{ oid: '', name: 'A', yOffset: -1 }],
                },
            },
        });
        expect(finalData(option)).toEqual({ A: [4, 6] });
        expect(xCategories(option)).toEqual(['1', '2']);
        expect(legendTexts(option, ['A'])).toEqual(legend({ A: 'A [6]' }));
    });

    it('table with time X: points on the time axis, no row labels', () => {
        const option = run({
            family: 'cartesian',
            mode: 'json',
            src: { jsonKind: 'table' },
            over: {
                jsonTable: {
                    xKind: 'time',
                    series: [
                        {
                            name: 'A',
                            data: [
                                [1, 1],
                                [2, 2],
                            ],
                        },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [{ oid: '', name: 'A', cumulative: true }],
                },
            },
        });
        expect(finalData(option)).toEqual({
            A: [
                [1, 1],
                [2, 3],
            ],
        });
        expect(xCategories(option)).toBeUndefined();
        expect(legendTexts(option, ['A'])).toEqual(legend({ A: 'A [3]' }));
    });

    it('pie rings from a table: windowed values become row slices, legend values per ring', () => {
        const option = run({
            family: 'pie',
            mode: 'json',
            src: { jsonKind: 'table' },
            over: {
                jsonTable: {
                    xKind: 'category',
                    categories: ['r1', 'r2'],
                    sliceNames: ['r1', 'r2'],
                    series: [
                        { name: 'S1', data: [1, 2] },
                        { name: 'S2', data: [3, null] },
                    ],
                },
                companions: {
                    chartConfig: {},
                    yAxes: [],
                    markLines: [],
                    jsonSeriesStyle: {},
                    jsonHidden: [],
                    series: [
                        { oid: '', name: 'S1', cumulative: true },
                        { oid: '', name: 'S2', yOffset: 1 },
                    ],
                },
            },
        });
        expect(finalData(option)).toEqual({
            S1: [
                { name: 'r1', value: 1 },
                { name: 'r2', value: 3 },
            ],
            S2: [
                { name: 'r1', value: 4 },
                { name: 'r2', value: null },
            ],
        });
        expect(xCategories(option)).toBeUndefined();
        expect(legendTexts(option, ['S1', 'S2'])).toEqual(legend({ S1: 'S1 [3]', S2: 'S2 [4]' }));
    });
});
