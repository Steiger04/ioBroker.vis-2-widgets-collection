/**
 * EChart — the legend-selection reporting seam (ADR-0074 Legenden-Folge): a legend click must
 * reach the host callback with the FULL resulting name→active map. Mount-level test over the
 * K5 harness (`renderComponent`) — echarts itself runs (SVG renderer, happy-dom); the click is
 * driven through echarts' own `legendToggleSelect` action, the same action a real legend tap
 * dispatches. The state→option→axis side of Legenden-Folge is covered at the pure seams
 * (`optionBuilder.test.ts`, `presentation.test.ts`, `useChartPipeline.test.ts`).
 *
 * @module EchartsCollectionWidget/EChart.legendSelect.test
 */
import { describe, expect, it, vi } from 'vitest';
import { getInstanceByDom } from 'echarts/core';
import type { ECharts } from 'echarts/core';

import { renderComponent } from '../lib/testing/testHarness';
import EChart, { type EChartProps } from './EChart';

const OPTION: EChartProps['option'] = {
    legend: { data: ['A', 'B'] },
    xAxis: { type: 'time' },
    yAxis: { type: 'value' },
    series: [
        { name: 'A', type: 'line', data: [[1, 2]] },
        { name: 'B', type: 'line', data: [[1, 3]] },
    ],
};

/** The mounted chart instance — EChart inits on its inner Box div. */
const chartOf = (container: HTMLDivElement): ECharts => {
    const el = container.querySelector('div');
    const chart = getInstanceByDom(el as HTMLElement);
    expect(chart).toBeDefined();
    return chart as ECharts;
};

describe('EChart — onLegendSelect wiring (ADR-0074)', () => {
    it('reports the FULL selection map on a legend toggle (the replaceMerge repair input)', () => {
        const onLegendSelect = vi.fn();
        const handle = renderComponent(EChart, {
            option: OPTION,
            renderer: 'svg',
            onLegendSelect,
        });
        chartOf(handle.container).dispatchAction({ type: 'legendToggleSelect', name: 'A' });
        expect(onLegendSelect).toHaveBeenCalledTimes(1);
        expect(onLegendSelect).toHaveBeenCalledWith({ A: false, B: true });
        // A second toggle reports the re-enabled map — the host state follows both ways.
        chartOf(handle.container).dispatchAction({ type: 'legendToggleSelect', name: 'A' });
        expect(onLegendSelect).toHaveBeenLastCalledWith({ A: true, B: true });
        handle.unmount();
    });

    it('silent without the callback — a toggle neither crashes nor reports', () => {
        const handle = renderComponent(EChart, { option: OPTION, renderer: 'svg' });
        expect(() => chartOf(handle.container).dispatchAction({ type: 'legendToggleSelect', name: 'B' })).not.toThrow();
        handle.unmount();
    });
});
