/**
 * Thin echarts v6 React wrapper.
 *
 * @module EchartsCollectionWidget/EChart
 * @remarks
 * Lifecycle: `init` (Canvas) → `setOption` (with `replaceMerge: ['series']` so series
 * add/remove is handled) → `resize` on container dimension change → `dispose` on unmount.
 *
 * The wrapper is presentation-merge-free: callers (the widget body and the editor preview)
 * pass the ALREADY fully-merged option — theme base + template defaults + generated data + user
 * overrides are combined upstream via `mergeOptionForEcharts`. Keeping the merge in one place
 * (the data-wins seam) avoids the double theme-merge that happened when the wrapper re-applied
 * the theme base here.
 */
import { useEffect, useRef } from 'react';
import type React from 'react';
import { Box } from '@mui/material';
import { init, type ECharts } from 'echarts/core';
import type { EChartsOption } from 'echarts';

import './echartsRegistration';

interface EChartProps {
    /** Fully-merged echarts option (theme + template defaults + G + U). */
    option: EChartsOption;
}

export default function EChart({ option }: EChartProps): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<ECharts | null>(null);

    // init (Canvas) + ResizeObserver → resize() + dispose on unmount.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) {
            return;
        }
        const chart = init(el, undefined, { renderer: 'canvas' });
        chartRef.current = chart;

        const ro = new ResizeObserver(() => chart.resize());
        ro.observe(el);

        return (): void => {
            ro.disconnect();
            chart.dispose();
            chartRef.current = null;
        };
    }, []);

    // setOption on every change — replaceMerge:['series'] handles series add/remove.
    useEffect(() => {
        chartRef.current?.setOption(option, { replaceMerge: ['series'] });
    }, [option]);

    return <Box sx={{ width: '100%', height: '100%' }} />;
}
