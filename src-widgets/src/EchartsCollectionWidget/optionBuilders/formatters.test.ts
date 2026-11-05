/**
 * Narrow suite for the formatter adapters (ADR-0103 K4): each surface is called with the shape
 * echarts really hands its `formatter` — label params with a point or scalar `value`, the tick
 * value, the legend name. The option-level wiring stays pinned in `optionBuilder.test.ts` and
 * `presentation.test.ts`.
 *
 * @module EchartsCollectionWidget/optionBuilders/formatters.test
 */
import { describe, expect, it } from 'vitest';

import {
    axisTickFormatter,
    legendValueFormatter,
    percentLabelFormatter,
    percentTickFormatter,
    seriesLabelFormatter,
    sumAnchorLabelFormatter,
} from './formatters';

describe('seriesLabelFormatter — label params', () => {
    const fmt = seriesLabelFormatter({ unit: '°C', decimals: 1 }, { comma: true });

    it('formats the value slot of a point-shaped datum', () => {
        expect(fmt({ value: [1_700_000_000_000, 21.54], dataIndex: 0 })).toBe('21,5 °C');
    });

    it('formats a scalar datum', () => {
        expect(fmt({ value: 21.54, dataIndex: 3 })).toBe('21,5 °C');
    });

    it('maps bool and enum texts', () => {
        expect(seriesLabelFormatter({ trueText: 'an', falseText: 'aus' }, {})({ value: [1, 1] })).toBe('an');
        expect(seriesLabelFormatter({ states: { 2: 'Auto' } }, {})({ value: 2 })).toBe('Auto');
    });

    it('a gap renders no text', () => {
        expect(fmt({ value: [1, null] })).toBe('');
        expect(fmt({ value: null })).toBe('');
    });
});

describe('percentLabelFormatter — label params', () => {
    const fmt = percentLabelFormatter(true);

    it('formats the share of a point-shaped and a scalar datum', () => {
        expect(fmt({ value: [1, 0.255] })).toBe('25,5 %');
        expect(fmt({ value: 0.25 })).toBe('25 %');
    });

    it('a gap renders no text, never 0 %', () => {
        expect(fmt({ value: [1, null] })).toBe('');
    });
});

describe('sumAnchorLabelFormatter — label params', () => {
    it('formats the plan sum of the hovered category, a gap renders no text', () => {
        const fmt = sumAnchorLabelFormatter([3, null], { unit: 'kWh' }, { comma: true });
        expect(fmt({ dataIndex: 0 })).toBe('3 kWh');
        expect(fmt({ dataIndex: 1 })).toBe('');
    });
});

describe('axis tick formatters — tick value', () => {
    it('formats the tick through the shared facts; axis mode picks the nearest state', () => {
        expect(axisTickFormatter({ unit: 'W' }, { comma: true }, 'exact')(1.5)).toBe('1,5 W');
        expect(axisTickFormatter({ states: { 0: 'aus', 1: 'an' } }, {}, 'axis')(0.4)).toBe('an');
    });

    it('a share scale tick renders as percent', () => {
        expect(percentTickFormatter(false)(0.5)).toBe('50 %');
    });
});

describe('legendValueFormatter — legend name', () => {
    const fmt = legendValueFormatter({ Temp: 21.5, Gap: null }, { Temp: { unit: '°C' } }, { comma: true });

    it('appends the formatted value of the named series', () => {
        expect(fmt('Temp')).toBe('Temp [21,5 °C]');
    });

    it('a name without a numeric value renders bare', () => {
        expect(fmt('Gap')).toBe('Gap');
        expect(fmt('Unknown')).toBe('Unknown');
    });
});
