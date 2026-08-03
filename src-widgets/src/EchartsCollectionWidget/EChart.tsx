/**
 * Thin echarts v6 React wrapper.
 *
 * @module EchartsCollectionWidget/EChart
 * @remarks
 * Lifecycle: `init` (Canvas) → `setOption` (with `replaceMerge: ['series', 'dataZoom',
 * 'visualMap']` so series add/remove AND disabling dataZoom/visualMap take effect — without
 * `dataZoom`/`visualMap` in replaceMerge, echarts MERGES and keeps a stale component after the
 * builder stops emitting it) → `resize` on container dimension change → `dispose` on unmount.
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
    /** Renderer: `'canvas'` (default, faster) or `'svg'` (crisp for export/print). */
    renderer?: 'canvas' | 'svg';
}

export default function EChart({ option, renderer = 'canvas' }: EChartProps): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<ECharts | null>(null);
    // Keep the latest option so a renderer-triggered re-init can seed the fresh instance without
    // adding `option` to the init effect's deps (which would dispose/recreate on every data tick).
    const optionRef = useRef(option);
    optionRef.current = option;

    // init + ResizeObserver → resize() + dispose on unmount OR renderer change.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) {
            return;
        }
        const chart = init(el, undefined, { renderer });
        chartRef.current = chart;
        chart.setOption(optionRef.current, { replaceMerge: ['series', 'dataZoom', 'visualMap'] });

        const ro = new ResizeObserver(() => {
            chart.resize();
        });
        ro.observe(el);

        return (): void => {
            ro.disconnect();
            chart.dispose();
            chartRef.current = null;
        };
    }, [renderer]);

    // setOption on every change — replaceMerge covers series add/remove and the conditional
    // dataZoom/visualMap components (so disabling them removes them, not just stops updating).
    useEffect(() => {
        chartRef.current?.setOption(option, { replaceMerge: ['series', 'dataZoom', 'visualMap'] });
    }, [option]);

    return (
        <Box
            ref={containerRef}
            sx={{ width: '100%', height: '100%' }}
        />
    );
}
