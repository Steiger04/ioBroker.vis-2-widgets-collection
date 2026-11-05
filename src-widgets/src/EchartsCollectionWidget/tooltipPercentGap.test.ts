/**
 * Regression net (ADR-0103 K4 fix): a gap in a 100 % stack stays a gap in the data and its
 * absolute reads `-` in the tooltip — the share text of that row must read `-` too, never `0 %`.
 */
import { describe, expect, it } from 'vitest';

import { buildGeneratedOption } from './optionBuilder';
import type { CartesianFragment, PresentationBase } from './optionBuilders/types';

const P: PresentationBase & CartesianFragment = {
    legendShow: true,
    legendPos: 'topCenter',
    legendShowValues: false,
    tooltipTrigger: 'axis',
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
    palette: ['#1', '#2'],
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
    cartesianType: 'bar',
    stackMode: 'percent',
    yAxes: [{}],
    xAxis: {},
    dataZoomSlider: false,
    dataZoomInside: false,
    markLines: [],
};

const TS = 1_700_000_000_000;

describe('tooltip percent row of a gap', () => {
    it('reads `-` for the share of a gap, the other rows keep share and absolute', () => {
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'A', data: [[TS, null]] },
                { name: 'B', data: [[TS, 1]] },
            ],
            meta: [{ name: 'A' }, { name: 'B' }],
            p: { ...P, percentAbsolute: { A: [null], B: [2] } },
        });
        const formatter = (option.tooltip as { formatter: (params: unknown) => string }).formatter;
        const html = formatter([
            { seriesName: 'A', value: [TS, null], dataIndex: 0, axisValue: TS },
            { seriesName: 'B', value: [TS, 1], dataIndex: 0, axisValue: TS },
        ]);
        expect(html).toContain('A: - (-)');
        expect(html).toContain('B: 100 % (2)');
    });
});
