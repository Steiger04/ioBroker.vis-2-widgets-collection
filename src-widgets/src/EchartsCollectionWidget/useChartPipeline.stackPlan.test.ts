/**
 * Regression tests for the stack plan at the ADR-0046 test surface {@link assemblePipelineResult}
 * (ADR-0103 K2): the 100 % shares and the percent surfaces of the rendered option follow the
 * legend selection under the EFFECTIVE series name — the name echarts keys the selection by.
 *
 * @module EchartsCollectionWidget/useChartPipeline.stackPlan.test
 */
import { describe, expect, it } from 'vitest';
import type { EChartsOption } from 'echarts';

import { toPresentationBase } from './presentation';
import { coreOf } from './families/cores';
import type { ThemeTokens } from './echartsTheme';
import type { EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';
import { assemblePipelineResult, type AssemblePipelineInput } from './useChartPipeline';

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

type Point = [number, number | null];

/** A series-shaped JSON bar chart in 100 % mode (name-keyed overlay, runtime selection). */
const percentJson = (opts: {
    series: { name: string; data: Point[] }[];
    overlay?: Record<string, EchartsSeriesMeta>;
    selection?: Record<string, boolean>;
    legendShowValues?: boolean;
}): AssemblePipelineInput => {
    const src = { chartType: 'bar', legendShowValues: opts.legendShowValues ?? false };
    const chartConfig = { stackMode: 'percent' as const };
    return {
        family: 'cartesian',
        mode: 'json',
        usable: [],
        history: { series: [], loading: false, error: null },
        jsonParsed: { series: opts.series },
        presentation: {
            ...toPresentationBase({
                src,
                palette: ['#111'],
                family: 'cartesian',
                themeTokens: tokens,
                themeDark: false,
            }),
            ...coreOf('cartesian').presentationFragment({ src, chartConfig, markLines: [] }),
        },
        themeBase: {} as EChartsOption,
        companions: {
            chartConfig,
            yAxes: [],
            markLines: [],
            jsonSeriesStyle: opts.overlay ?? {},
            jsonHidden: [],
            series: [],
        },
        now: 1_000_000,
        src,
        legendSelection: opts.selection,
    };
};

type EmittedSeries = { name: string; data: Point[] };

const dataOf = (option: EChartsOption): Record<string, Point[]> =>
    Object.fromEntries(((option.series as EmittedSeries[] | undefined) ?? []).map(s => [s.name, s.data]));

const ABC: { name: string; data: Point[] }[] = [
    {
        name: 'A',
        data: [
            [1, 5],
            [2, 5],
        ],
    },
    {
        name: 'B',
        data: [
            [1, 1],
            [2, 1],
        ],
    },
    {
        name: 'C',
        data: [
            [1, 3],
            [2, 4],
        ],
    },
];

describe('stack plan at the pipeline core — effective series names', () => {
    it('a renamed series deselected under its display name leaves the percent denominator', () => {
        const { option } = assemblePipelineResult(
            percentJson({ series: ABC, overlay: { A: { name: 'Alpha' } }, selection: { Alpha: false } }),
        );
        const data = dataOf(option);
        // the visible shares (B, C) add up to 1 in every category
        for (const c of [0, 1]) {
            expect((data.B[c][1] ?? 0) + (data.C[c][1] ?? 0)).toBeCloseTo(1);
        }
        expect(data.B).toEqual([
            [1, 0.25],
            [2, 0.2],
        ]);
        // the deselected series keeps its absolute values
        expect(data.Alpha).toEqual([
            [1, 5],
            [2, 5],
        ]);
    });

    it('the tooltip shows the absolute of a renamed series beside its share', () => {
        const { option } = assemblePipelineResult(
            percentJson({
                series: [
                    { name: 'A', data: [[1, 2]] },
                    { name: 'B', data: [[1, 6]] },
                ],
                overlay: { A: { name: 'Alpha' } },
            }),
        );
        const formatter = (option.tooltip as { formatter: (params: unknown) => string }).formatter;
        const data = dataOf(option);
        const row = formatter(['Alpha', 'B'].map(n => ({ seriesName: n, value: data[n][0][1], dataIndex: 0 })));
        expect(row).toBe('Alpha: 25 % (2)<br/>B: 75 % (6)');
    });
});

describe('stack plan at the pipeline core — percent membership follows the selection', () => {
    it('a deselected bar of a 100 % stack formats its absolute value with the series format', () => {
        const { option } = assemblePipelineResult(
            percentJson({ series: ABC, selection: { A: false }, legendShowValues: true }),
        );
        const formatter = (option.legend as { formatter: (n: string) => string }).formatter;
        expect(['A', 'B', 'C'].map(formatter)).toEqual(['A [5]', 'B [20 %]', 'C [80 %]']);
    });

    it('a deselected percent bar does not turn the axis of a visible line into a share scale', () => {
        const { option } = assemblePipelineResult(
            percentJson({
                series: [
                    { name: 'A', data: [[1, 2]] },
                    { name: 'L', data: [[1, 7]] },
                ],
                // same unit on both: the deselected bar still binds the emitted axis (its facts count)
                overlay: { A: { unit: 'W' }, L: { type: 'line', unit: 'W' } },
                selection: { A: false },
            }),
        );
        const [axis] = option.yAxis as { axisLabel?: { formatter?: (v: number) => string } }[];
        expect(axis.axisLabel?.formatter?.(7)).toBe('7 W');
    });
});
