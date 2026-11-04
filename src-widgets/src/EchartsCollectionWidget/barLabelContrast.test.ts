/**
 * Guard tests for the bar label's auto contrast: the colour the configurator previews for an
 * uncoloured bar label must be the colour the installed echarts/zrender actually paints. The
 * expected values come from a headless echarts render (SVG SSR), not from the rule itself — an
 * echarts/zrender upgrade that shifts the contrast rule or its colours fails red here.
 *
 * @module EchartsCollectionWidget/barLabelContrast.test
 */
import { describe, expect, it } from 'vitest';
import { init, use } from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { createTheme } from '@mui/material/styles';

import { barLabelAutoColor, effectiveChartCanvas } from './barLabelContrast';
import type { EchartsBarLabelPos } from '../types/field-definitions/echarts-fields';

use([BarChart, GridComponent, SVGRenderer]);

/**
 * Render one bar exactly like the builder emits an uncoloured bar label (no `label.color`,
 * `position` only when set) on the given canvas, and read the label's painted fill.
 */
const paintedLabelFill = (barFill: string, position: EchartsBarLabelPos | undefined, canvas: string): string => {
    const chart = init(null as unknown as HTMLElement, undefined, {
        renderer: 'svg',
        ssr: true,
        width: 300,
        height: 200,
    });
    chart.setOption({
        animation: false,
        backgroundColor: canvas,
        xAxis: { type: 'category', data: ['a'] },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'bar',
                data: [50],
                color: barFill,
                itemStyle: { color: barFill },
                label: { show: true, ...(position ? { position } : {}) },
            },
        ],
    });
    const svg = chart.renderToSVGString();
    chart.dispose();
    const text = /<text[^>]*>50<\/text>/.exec(svg)?.[0] ?? '';
    return /fill="([^"]+)"/.exec(text)?.[1] ?? '';
};

describe('barLabelAutoColor — matches the installed echarts/zrender paint', () => {
    const insideCases: [string, EchartsBarLabelPos | undefined][] = [
        ['#ffeb3b', undefined],
        ['#1976d2', undefined],
        ['#222222', undefined],
        ['#ffeb3b', 'inside'],
        ['#1976d2', 'insideTop'],
        ['#222222', 'insideBottom'],
        ['rgba(25,118,210,0.3)', 'inside'],
    ];
    it.each(insideCases)('inside: bar %s at position %s', (fill, position) => {
        const canvas = 'transparent';
        expect(barLabelAutoColor(position, fill, canvas)).toBe(paintedLabelFill(fill, position, canvas));
    });

    const outsideCanvases = ['transparent', '#1e1e1e', '#ffffff', 'rgba(0,0,0,0.5)', '#303030'];
    it.each(outsideCanvases)('outside (top) on canvas %s', canvas => {
        expect(barLabelAutoColor('top', '#1976d2', canvas)).toBe(paintedLabelFill('#1976d2', 'top', canvas));
    });

    it('known values of the installed zrender (light / mid / dark bar, light / dark canvas)', () => {
        expect(barLabelAutoColor(undefined, '#ffeb3b', 'transparent')).toBe('#333');
        expect(barLabelAutoColor(undefined, '#1976d2', 'transparent')).toBe('#eee');
        expect(barLabelAutoColor(undefined, '#222222', 'transparent')).toBe('#ccc');
        expect(barLabelAutoColor('top', '#222222', 'transparent')).toBe('#333');
        expect(barLabelAutoColor('top', '#ffeb3b', '#1e1e1e')).toBe('#ccc');
    });
});

describe('effectiveChartCanvas — the canvas zrender decides its dark mode on', () => {
    const light = createTheme({ palette: { mode: 'light' } });
    const dark = createTheme({ palette: { mode: 'dark' } });

    it('host-follow: transparent canvas, so even a dark host is NOT zrender dark mode', () => {
        expect(effectiveChartCanvas(undefined, dark, 'auto')).toBe('transparent');
        expect(barLabelAutoColor('top', '#1976d2', effectiveChartCanvas('transparent', dark, 'auto'))).toBe('#333');
    });

    it('forced dark on a light host paints the dark canvas → light outside label', () => {
        const canvas = effectiveChartCanvas('transparent', light, 'dark');
        expect(canvas).toBe('#1e1e1e');
        expect(barLabelAutoColor('top', '#1976d2', canvas)).toBe('#ccc');
    });

    it('a user-set chart background wins over the theme canvas', () => {
        expect(effectiveChartCanvas('#000000', light, 'auto')).toBe('#000000');
        expect(effectiveChartCanvas('', dark, 'light')).toBe('#ffffff');
    });
});
