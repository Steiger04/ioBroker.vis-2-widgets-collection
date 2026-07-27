/**
 * Thin echarts v6 React wrapper.
 *
 * @module EchartsCollectionWidget/EChart
 * @remarks
 * Lifecycle: `init` (Canvas) → `setOption` (the passed option merged over the theme base,
 * with `replaceMerge: ['series']` so series add/remove is handled) → `resize` on container
 * dimension change → `dispose` on unmount.
 *
 * Resize uses a private `ResizeObserver`, matching the established canvas-like resize pattern
 * in this collection (JsonTableCollection, SliderCollection). The shared `useSize`/
 * `useElementDimensions` hooks are square/circle-aware and return CSS strings, which is the
 * wrong shape for driving echarts `resize()` directly.
 *
 * The theme base is rebuilt whenever the MUI theme identity changes; dark-mode propagation
 * is verified in P4 (map fog item 2).
 */
import { useEffect, useMemo, useRef } from 'react';
import type React from 'react';
import { Box, useTheme } from '@mui/material';
import { init, type ECharts } from 'echarts/core';
import type { EChartsOption } from 'echarts';

import './echartsRegistration';
import { buildEchartsTheme } from './echartsTheme';
import { deepMerge } from './utils/mergeOption';

interface EChartProps {
    /** echarts option (G + U already merged upstream); merged over the theme base here. */
    option: EChartsOption;
}

export default function EChart({ option }: EChartProps): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<ECharts | null>(null);
    const theme = useTheme();
    const themeBase = useMemo(() => buildEchartsTheme(theme), [theme]);

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

    // setOption on every change — data-wins: the passed option wins over the theme base;
    // replaceMerge:['series'] handles series add/remove (map decision 03).
    useEffect(() => {
        const merged = deepMerge(themeBase as Record<string, unknown>, option as unknown as Record<string, unknown>);
        chartRef.current?.setOption(merged as EChartsOption, { replaceMerge: ['series'] });
    }, [themeBase, option]);

    return (
        <Box
            ref={containerRef}
            sx={{ width: '100%', height: '100%' }}
        />
    );
}
