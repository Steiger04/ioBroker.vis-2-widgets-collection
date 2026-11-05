/**
 * Regression net (ADR-0103 K3 fix): a series whose axis the legend selection dropped still
 * rides the emitted array (its ref falls back to emitted axis 0) — it must never lend its
 * identity (name, colour) or its value-format facts (unit) to the axis that now sits on
 * emitted index 0.
 */
import { describe, expect, it } from 'vitest';

import { buildGeneratedOption } from './optionBuilder';
import type { CartesianFragment, ChartSeries, PresentationBase } from './optionBuilders/types';
import type { EchartsSeriesMeta } from '../types/field-definitions/echarts-fields';

const P: PresentationBase & CartesianFragment = {
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
    cartesianType: 'line',
    yAxes: [{}, {}],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    markLines: [],
};

const SERIES: ChartSeries[] = [
    { name: 'A', data: [[1, 1]] },
    { name: 'B', data: [[1, 2]] },
];

type YAxisEntry = { name?: string; axisLabel?: { color?: string; formatter?: (v: number) => string } };

const yAxesOf = (meta: EchartsSeriesMeta[], legendSelection: Record<string, boolean>): YAxisEntry[] =>
    buildGeneratedOption({ family: 'cartesian', series: SERIES, meta, p: { ...P, legendSelection } })
        .yAxis as YAxisEntry[];

describe('cartesian axis identity under the Legenden-Folge', () => {
    it('a deselected series on a dropped axis does not name or colour the remaining axis', () => {
        const [axis] = yAxesOf(
            [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 1 },
            ],
            { A: false },
        );
        expect(axis.name).toBe('B');
        expect(axis.axisLabel?.color).toBe('#2');
    });

    it('a deselected series on a dropped axis does not break the remaining axis’ unit', () => {
        const [axis] = yAxesOf(
            [
                { name: 'A', yAxisIndex: 0, unit: 'W' },
                { name: 'B', yAxisIndex: 1, unit: '°C' },
            ],
            { A: false },
        );
        expect(axis.axisLabel?.formatter?.(5)).toBe('5 °C');
    });

    it('a deselected percent-stacked bar on a dropped axis does not turn the remaining axis into a share scale', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: SERIES,
            meta: [
                { name: 'A', yAxisIndex: 0, type: 'bar' },
                { name: 'B', yAxisIndex: 1 },
            ],
            p: { ...P, stackMode: 'percent', legendSelection: { A: false } },
        });
        const [axis] = option.yAxis as (YAxisEntry & { min?: number; max?: number })[];
        expect(axis.min).toBeUndefined();
        expect(axis.max).toBeUndefined();
    });

    it('a deselected series on the SAME emitted axis keeps naming it (owner identity survives a legend click)', () => {
        const [axis] = yAxesOf(
            [
                { name: 'A', yAxisIndex: 0 },
                { name: 'B', yAxisIndex: 0 },
            ],
            { A: false },
        );
        expect(axis.name).toBe('A');
    });
});
