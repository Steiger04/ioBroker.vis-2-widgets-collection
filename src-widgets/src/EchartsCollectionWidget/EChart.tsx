/**
 * Thin echarts v6 React wrapper.
 *
 * @module EchartsCollectionWidget/EChart
 * @remarks
 * Lifecycle: `init` (Canvas) → `setOption` (with the {@link REPLACE_MERGE} list — series add/remove,
 * disabling dataZoom/visualMap, X/Y-axis add/remove, title/legend edge-key switches, family switches,
 * AND removal of conditional components (the switched-off toolbox, the radar family switch —
 * ADR-0036/0045) all take effect — without the matching mainType in replaceMerge, echarts MERGES
 * and keeps a stale component after the option stops emitting it, or retains trailing entries when
 * an array shrinks, or a stale `top`/`bottom`/`left`/`right` key after a position switch) → `resize`
 * on dimension change → `dispose` on unmount.
 *
 * The wrapper is presentation-merge-free: callers (the widget body and the editor preview)
 * pass the ALREADY fully-merged option — theme base + generated data are combined upstream
 * via `mergeGeneratedOverTheme`. Keeping the merge in one place avoids the double theme-merge
 * that happened when the wrapper re-applied the theme base here.
 *
 * The wrapper is also layout-merge-free (ADR-0024, supersedes ADR-0022): the cartesian builder
 * emits `grid: { left: 0, right: 0, outerBoundsMode: 'same', outerBoundsContain: 'all' }`, and
 * echarts v6's `layOutGridByOuterBounds` owns the ENTIRE horizontal reservation (tick labels + axis
 * names + offset-shifted multi-axis labels — each axis `offset` is folded into its position bound).
 * `'all'` (not the deprecated `containLabel:true` ≡ `'axisLabel'`, which skips the axis NAME) is
 * what keeps the outermost offset-axis name on canvas at grid 0. So there is nothing for the wrapper
 * to resolve at runtime: the option is passed through untouched, and a bare `chart.resize()` is
 * enough on a container dimension change (resize re-runs the outer-bounds layout for the new width).
 * The earlier `%`-marker + `+ maxOffset` machinery double-booked the offset space echarts already
 * reserves → a dead margin ≈ the side's max axis offset.
 */
import { useEffect, useRef } from 'react';
import type React from 'react';
import { Box } from '@mui/material';
import { init, type ECharts } from 'echarts/core';
import type { EChartsOption } from 'echarts';

import './echartsRegistration';
import { REPLACE_MERGE } from './replaceMerge';

interface EChartProps {
    /** Fully-merged echarts option (theme base + G). */
    option: EChartsOption;
    /** Renderer: `'canvas'` (default, faster) or `'svg'` (crisp for export/print). */
    renderer?: 'canvas' | 'svg';
}

// The replaceMerge list lives in the pure `replaceMerge.ts` module (ADR-0036) — single source for
// the wrapper AND the template guard test.

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
        chart.setOption(optionRef.current, { replaceMerge: [...REPLACE_MERGE] });

        // On resize: sync the canvas dims. echarts re-runs the grid layout (incl. containLabel's
        // label/name/offset reservation) for the new width, so no setOption is needed here.
        // ResizeObserver coalesces to discrete size changes, so this is not a per-frame churn.
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

    // setOption on every change — replaceMerge covers series add/remove, the conditional
    // dataZoom/visualMap components (so disabling them removes them, not just stops updating),
    // X/Y-axis add/remove (so a deleted axis does not linger as a merge-retained ghost — ADR-0012
    // multi-axis made the yAxis array dynamic; ADR-0016 addendum; 'xAxis' joined in ADR-0036),
    // title/legend (so a position switch drops the now-unused edge key — top↔bottom/left↔right —
    // instead of merge-retaining it; ADR-0021), grid/tooltip (always emitted by the builders, so
    // replace is lossless), AND toolbox/radar (GUI-conditional: the ADR-0045 toolbox master
    // switch / the family switch — without their mainType here, switching off leaves a
    // merge-retained ghost) plus graphic/axisPointer (free-text-only, never builder-emitted).
    // The option is the fully-merged, already-layout-correct fragment.
    useEffect(() => {
        if (!containerRef.current) {
            return;
        }
        chartRef.current?.setOption(option, { replaceMerge: [...REPLACE_MERGE] });
    }, [option]);

    return (
        <Box
            ref={containerRef}
            sx={{ width: '100%', height: '100%' }}
        />
    );
}
