/**
 * The value chain's final stage at its own seam ({@link finishValueChain}, ADR-0103 K1): the
 * matrix legend values × path — without theme merge, title or family builder. The rendered
 * option per path is pinned at the pipeline core (`useChartPipeline.valueChain.test.ts`).
 *
 * @module EchartsCollectionWidget/valueChain.test
 */
import { describe, expect, it } from 'vitest';

import { finishValueChain, transformChainSeries, type ValueChainInput } from './valueChain';

const input = (over: Partial<ValueChainInput>): ValueChainInput => ({
    series: [],
    meta: [],
    family: 'cartesian',
    fetch: {},
    legend: { showValues: true },
    ...over,
});

const percentStack = { mode: 'percent', defaultType: 'bar', axisCount: 1 } as const;

/** Each path once, legend values on; the off column is the same input with `showValues: false`. */
const paths: { path: string; input: ValueChainInput; legendValues: Record<string, number | null> }[] = [
    {
        path: 'time axis (points, cumulative)',
        input: input({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 2],
                        [2, 4],
                        [3, null],
                    ],
                },
            ],
            meta: [{ cumulative: true }],
        }),
        legendValues: { A: 6 },
    },
    {
        path: 'buckets without diff',
        input: input({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [12, 4],
                    ],
                },
            ],
            meta: [{}],
            fetch: { barCategories: [0, 10], barWindowEnd: 20, aggregate: 'max' },
        }),
        legendValues: { A: 4 },
    },
    {
        path: 'buckets with diff',
        input: input({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [12, 4],
                    ],
                },
            ],
            meta: [{}],
            fetch: { barCategories: [0, 10], barWindowEnd: 20, aggregate: 'max', barDiff: true },
        }),
        legendValues: { A: 3 },
    },
    {
        path: 'buckets mixing diff and raw',
        input: input({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [12, 4],
                    ],
                },
                {
                    name: 'B',
                    data: [
                        [1, 5],
                        [12, 7],
                    ],
                },
            ],
            meta: [{}, { diffMode: 'raw' }],
            fetch: { barCategories: [0, 10], barWindowEnd: 20, aggregate: 'max', barDiff: true },
        }),
        legendValues: { A: 3, B: 7 },
    },
    {
        path: 'percent on the time axis',
        input: input({
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'B', data: [[1, 3]] },
            ],
            meta: [{}, {}],
            stack: percentStack,
        }),
        legendValues: { A: 0.25, B: 0.75 },
    },
    {
        path: 'percent on buckets',
        input: input({
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'B', data: [[2, 3]] },
            ],
            meta: [{}, {}],
            fetch: { barCategories: [0], barWindowEnd: 10, aggregate: 'max' },
            stack: percentStack,
        }),
        legendValues: { A: 0.25, B: 0.75 },
    },
    {
        path: 'table with category X',
        input: input({
            series: [{ name: 'A', data: [1, 2, null] }],
            meta: [{ cumulative: true }],
            table: { xKind: 'category', categories: ['x', 'y', 'z'] },
        }),
        legendValues: { A: 3 },
    },
    {
        path: 'table with time X',
        input: input({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [2, 2],
                    ],
                },
            ],
            meta: [{}],
            table: { xKind: 'time' },
        }),
        legendValues: { A: 2 },
    },
    {
        path: 'pie rings',
        input: input({
            family: 'pie',
            series: [{ name: 'S', data: [1, 2] }],
            meta: [{ cumulative: true }],
            table: { xKind: 'category', categories: ['r1', 'r2'], sliceNames: ['r1', 'r2'] },
        }),
        legendValues: { S: 3 },
    },
];

describe('finishValueChain — legend values × path', () => {
    it.each(paths)('$path: legend values on read the final values', ({ input: i, legendValues }) => {
        expect(finishValueChain(i).patch.legendValues).toEqual(legendValues);
    });

    it.each(paths)('$path: legend values off leave the patch without them', ({ input: i }) => {
        const off = finishValueChain({ ...i, legend: { showValues: false } });
        expect(off.patch).not.toHaveProperty('legendValues');
        // the toggle changes nothing else
        expect(off.series).toEqual(finishValueChain(i).series);
    });
});

describe('finishValueChain — series and patch per path', () => {
    it('buckets with diff drop the first category; the other patch keys stay absent', () => {
        const { series, patch } = finishValueChain(paths[2].input);
        expect(series).toEqual([{ name: 'A', data: [3] }]);
        expect(patch).toEqual({ barCategories: [10], legendValues: { A: 3 } });
    });

    it('percent keeps the absolutes and deselected or opted-out members out of the denominator', () => {
        const { series, patch } = finishValueChain(
            input({
                series: [
                    { name: 'A', data: [1, null] },
                    { name: 'B', data: [3, 2] },
                    { name: 'C', data: [9, 9] },
                    { name: 'D', data: [4, 4] },
                ],
                meta: [{}, {}, {}, { stack: 'none' }],
                stack: percentStack,
                legend: { showValues: false, selection: { C: false } },
                table: { xKind: 'index', categories: ['1', '2'] },
            }),
        );
        expect(series).toEqual([
            { name: 'A', data: [0.25, null] },
            { name: 'B', data: [0.75, 1] },
            { name: 'C', data: [9, 9] },
            { name: 'D', data: [4, 4] },
        ]);
        expect(patch).toEqual({ xCategories: ['1', '2'], percentAbsolute: { A: [1, null], B: [3, 2] } });
    });

    it('percent applies to the cartesian family only', () => {
        const { series, patch } = finishValueChain(
            input({
                family: 'pie',
                series: [
                    { name: 'A', data: [[1, 1]] },
                    { name: 'B', data: [[1, 3]] },
                ],
                meta: [{}, {}],
                stack: percentStack,
                legend: { showValues: false },
            }),
        );
        expect(series).toEqual([
            { name: 'A', data: [[1, 1]] },
            { name: 'B', data: [[1, 3]] },
        ]);
        expect(patch).toEqual({});
    });

    it('pie rings split the windowed values into row slices', () => {
        expect(finishValueChain(paths[8].input).series).toEqual([
            {
                name: 'S',
                data: [
                    { name: 'r1', value: 1 },
                    { name: 'r2', value: 3 },
                ],
            },
        ]);
    });
});

describe('transformChainSeries', () => {
    it('cuts the future, then offsets — points and plain values', () => {
        expect(
            transformChainSeries(
                [
                    {
                        name: 'A',
                        data: [
                            [1, 1],
                            [5, 2],
                        ],
                    },
                ],
                [{ noFuture: true, yOffset: 10 }],
                { plain: false, now: 3 },
            ),
        ).toEqual([{ name: 'A', data: [[1, 11]] }]);
        expect(
            transformChainSeries([{ name: 'A', data: [1, null] }], [{ yOffset: 1 }], { plain: true, now: 0 }),
        ).toEqual([{ name: 'A', data: [2, null] }]);
    });
});
