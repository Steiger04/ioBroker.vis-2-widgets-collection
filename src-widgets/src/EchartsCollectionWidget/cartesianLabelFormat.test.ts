/**
 * Regression net (ADR-0103 K4, Bug A): the value labels of a cartesian series are called by
 * echarts with a PARAMS object whose `value` is the datum — a point `[ts, v]` (time axis, Verlauf,
 * series-shaped JSON, table with time X) or a scalar (category bars, table with category/index
 * X). A label with any format fact must show the formatted value, never „[object Object]".
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
    yAxes: [{}],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    markLines: [],
};

const TS = 1_700_000_000_000;

type LabelFormatter = (params: { value: unknown; dataIndex: number; seriesName?: string }) => string;

const labelsOf = (
    series: ChartSeries[],
    meta: EchartsSeriesMeta[],
    over: Partial<PresentationBase & CartesianFragment> = {},
): LabelFormatter[] => {
    const option = buildGeneratedOption({ family: 'cartesian', series, meta, p: { ...P, ...over } });
    return (option.series as { label?: { formatter?: LabelFormatter } }[]).map(s => s.label!.formatter!);
};

describe('cartesian value labels with the echarts params shape', () => {
    it('a point-shaped datum (time axis) shows the value with unit, decimals and comma', () => {
        const [line] = labelsOf(
            [{ name: 'T', data: [[TS, 21.54]] }],
            [{ name: 'T', label: true, unit: '°C', decimals: 1 }],
            {
                decimalComma: true,
            },
        );
        expect(line({ value: [TS, 21.54], dataIndex: 0, seriesName: 'T' })).toBe('21,5 °C');
    });

    it('a scalar datum (category bars) shows the value with unit', () => {
        const [bar] = labelsOf([{ name: 'E', data: [3.5] }], [{ name: 'E', label: true, unit: 'kWh' }], {
            cartesianType: 'bar',
            barCategories: [TS],
        });
        expect(bar({ value: 3.5, dataIndex: 0 })).toBe('3.5 kWh');
    });

    it('a scalar datum on a table category axis shows the value with unit', () => {
        const [bar] = labelsOf([{ name: 'E', data: [7] }], [{ name: 'E', label: true, unit: 'W' }], {
            cartesianType: 'bar',
            xCategories: ['Mo'],
        });
        expect(bar({ value: 7, dataIndex: 0 })).toBe('7 W');
    });

    it('the chart-level units ride the label too', () => {
        const [line] = labelsOf([{ name: 'T', data: [[TS, 1.5]] }], [{ name: 'T', label: true }], {
            tooltipUnits: 'W',
        });
        expect(line({ value: [TS, 1.5], dataIndex: 0 })).toBe('1.5 W');
    });

    it('bool and enum texts appear on the labels', () => {
        const [pump, mode] = labelsOf(
            [
                { name: 'Pump', data: [[TS, 1]] },
                { name: 'Mode', data: [[TS, 2]] },
            ],
            [
                { name: 'Pump', label: true, trueText: 'an', falseText: 'aus' },
                { name: 'Mode', label: true, states: { 2: 'Auto' } },
            ],
        );
        expect(pump({ value: [TS, 1], dataIndex: 0 })).toBe('an');
        expect(pump({ value: [TS, 0], dataIndex: 0 })).toBe('aus');
        expect(mode({ value: [TS, 2], dataIndex: 0 })).toBe('Auto');
    });

    it('the segment label of a 100 % stack shows the share — point and scalar datum', () => {
        const metas: EchartsSeriesMeta[] = [
            { name: 'A', label: true, unit: 'W' },
            { name: 'B', label: true },
        ];
        const [onTime] = labelsOf(
            [
                { name: 'A', data: [[TS, 0.25]] },
                { name: 'B', data: [[TS, 0.75]] },
            ],
            metas,
            { cartesianType: 'bar', stackMode: 'percent', decimalComma: true },
        );
        expect(onTime({ value: [TS, 0.255], dataIndex: 0 })).toBe('25,5 %');
        const [onCategories] = labelsOf(
            [
                { name: 'A', data: [0.25] },
                { name: 'B', data: [0.75] },
            ],
            metas,
            { cartesianType: 'bar', stackMode: 'percent', barCategories: [TS] },
        );
        expect(onCategories({ value: 0.25, dataIndex: 0 })).toBe('25 %');
    });
});
