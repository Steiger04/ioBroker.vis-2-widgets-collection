/**
 * Thin echarts v6 React wrapper.
 *
 * @module EchartsCollectionWidget/EChart
 * @remarks
 * Lifecycle: `init` (Canvas) → `setOption` (with the {@link REPLACE_MERGE} list — series add/remove,
 * disabling dataZoom/visualMap, X/Y-axis add/remove, title/legend edge-key switches, family switches,
 * AND removal of conditional components (the switched-off toolbox master switch —
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
import { zoomIdleAction } from './zoomIdleReset';

export interface EChartProps {
    /** Fully-merged echarts option (theme base + G). */
    option: EChartsOption;
    /** Renderer: `'canvas'` (default, faster) or `'svg'` (crisp for export/print). */
    renderer?: 'canvas' | 'svg';
    /**
     * Zoom idle-reset seconds (ADR-0054, adapter `resetZoom`); `undefined` = off. The DECISION
     * comes from `zoomIdleAction`; the timer + the reset `dispatchAction` live here (View).
     */
    zoomIdleResetSec?: number;
    /**
     * Reports the legend selection map on every legend click (ADR-0074 Legenden-Folge). The
     * wrapper only REPORTS (`legendselectchanged` → this callback, the full name→active map);
     * the host owns the state and feeds it back through the option — never the other way round,
     * keeping the wrapper presentation-merge-free.
     */
    onLegendSelect?: (selected: Record<string, boolean>) => void;
}

/** Whether the live zoom window deviates from the full 0–100 % window (across all components). */
const zoomDeviates = (chart: ECharts): boolean => {
    const dz = (chart.getOption() as { dataZoom?: { start?: number; end?: number }[] }).dataZoom ?? [];
    if (!dz.length) {
        return false;
    }
    const start = Math.min(...dz.map(z => z.start ?? 0));
    const end = Math.max(...dz.map(z => z.end ?? 100));
    return start > 0.001 || end < 99.999;
};

// The replaceMerge list lives in the pure `replaceMerge.ts` module (ADR-0036) — single source for
// the wrapper AND the template guard test.

export default function EChart({
    option,
    renderer = 'canvas',
    zoomIdleResetSec,
    onLegendSelect,
}: EChartProps): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<ECharts | null>(null);
    // Keep the latest option so a renderer-triggered re-init can seed the fresh instance without
    // adding `option` to the init effect's deps (which would dispose/recreate on every data tick).
    const optionRef = useRef(option);
    optionRef.current = option;
    // Same idiom for the idle-reset config: read at event time, no re-init on a config change.
    const zoomSecRef = useRef(zoomIdleResetSec);
    zoomSecRef.current = zoomIdleResetSec;
    // And for the legend-selection callback (ADR-0074): read at event time, identity churn on
    // the host (an inline setState binder) never re-inits the chart.
    const onSelectRef = useRef(onLegendSelect);
    onSelectRef.current = onLegendSelect;

    // init + ResizeObserver → resize() + dispose on unmount OR renderer change.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) {
            return;
        }
        const chart = init(el, undefined, { renderer });
        chartRef.current = chart;
        chart.setOption(optionRef.current, { replaceMerge: [...REPLACE_MERGE] });

        // Zoom idle-reset (ADR-0054): every datazoom event (user drag OR our own reset — echarts
        // emits for both) re-runs the pure decision: zoomed → (re)arm the timer, back at the
        // full window → clear it. The armed timer resets to 0–100 %; its own event then lands on
        // the clear branch, so the loop terminates.
        let idleTimer: ReturnType<typeof setTimeout> | null = null;
        const clearIdleTimer = (): void => {
            if (idleTimer) {
                clearTimeout(idleTimer);
                idleTimer = null;
            }
        };
        const onZoomChange = (): void => {
            const action = zoomIdleAction(zoomSecRef.current, zoomDeviates(chart));
            clearIdleTimer();
            if (action.type === 'arm') {
                const ms = action.ms;
                idleTimer = setTimeout(() => {
                    idleTimer = null;
                    chart.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
                }, ms);
            }
        };
        chart.on('datazoom', onZoomChange);

        // Legenden-Folge (ADR-0074): report every legend click's resulting name→active map to
        // the host — the host owns the selection state and rides it back through the option
        // (the replaceMerge reset repair). Report-only: the wrapper never patches the option.
        const onLegendSelectEvt = (params: unknown): void => {
            const selected = (params as { selected?: Record<string, boolean> } | undefined)?.selected;
            if (selected) {
                onSelectRef.current?.(selected);
            }
        };
        chart.on('legendselectchanged', onLegendSelectEvt);

        // On resize: sync the canvas dims. echarts re-runs the grid layout (incl. containLabel's
        // label/name/offset reservation) for the new width, so no setOption is needed here.
        // ResizeObserver coalesces to discrete size changes, so this is not a per-frame churn.
        const ro = new ResizeObserver(() => {
            chart.resize();
        });
        ro.observe(el);

        return (): void => {
            clearIdleTimer();
            chart.off('datazoom', onZoomChange);
            chart.off('legendselectchanged', onLegendSelectEvt);
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
    // replace is lossless), AND toolbox (GUI-conditional: the ADR-0045 master switch — without
    // its mainType here, switching off leaves a merge-retained ghost) plus graphic/axisPointer
    // (free-text-only, never builder-emitted).
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
