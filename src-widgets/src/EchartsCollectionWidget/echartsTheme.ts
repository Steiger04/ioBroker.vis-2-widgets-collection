/**
 * Bridges the MUI theme into an echarts option base.
 *
 * @module EchartsCollectionWidget/echartsTheme
 * @remarks
 * Produces the presentation base (series palette, text/axis colours, font) from the MUI
 * theme. This base is merged UNDER the generated data option (data-wins, map decision 03):
 * the generated `series`/`xAxis`/`yAxis`/`legend.data` always win.
 *
 * This is the SINGLE palette source for the widget: {@link echartsPalette} is reused by the
 * editor for per-series colour defaults, so the chart and the editor always agree on colours.
 *
 * Dark-mode note (map fog item 2): the bridge relies on `theme.palette.mode === 'dark'`
 * flowing through `useCollectionTheme`/`createTheme` in the real vis-2 runtime. If that does
 * not hold, feed an explicit dark base here.
 */
import type { Theme } from '@mui/material/styles';
import type { EChartsOption } from 'echarts';

/**
 * Ordered series palette derived from the MUI theme (primary first, accents follow).
 *
 * @remarks
 * Used both by {@link buildEchartsTheme} and by the editor for per-series colour defaults,
 * keeping both in sync with the host theme.
 */
export const echartsPalette = (theme: Theme): string[] => [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.warning.main,
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.error.main,
];

/** Canvas colour used when a dark-mode override flips the mode away from the host (ADR-0007 dark-mode). */
const DARK_BG = '#1e1e1e';
/** Canvas colour used when a light-mode override flips the mode away from the host. */
const LIGHT_BG = '#ffffff';

/**
 * Builds the echarts presentation base from the MUI theme.
 *
 * @param theme - Current MUI theme (resolved by CollectionProvider).
 * @param forceMode - Optional dark-mode override (`'light' | 'dark'`). When set and different
 *   from `theme.palette.mode`, the text/axis/divider colours are swapped to a fixed light/dark
 *   token set so the chart honours the user's dark-mode policy even if the host theme disagrees,
 *   AND the canvas `backgroundColor` is set to a matching dark/light token so a forced-dark chart
 *   is actually drawn dark (light text needs a dark canvas). A user-set `bgColor` still overrides
 *   it — the body/preview forces it back after the merge.
 *   `'auto'`/`undefined` follows `theme.palette.mode` (the default, ADR-0007 dark-mode policy).
 * @returns An echarts option fragment merged under the generated data option.
 */
export const buildEchartsTheme = (theme: Theme, forceMode?: 'light' | 'dark' | 'auto'): EChartsOption => {
    const p = theme.palette;
    // Effective mode: the override wins when it is a concrete light/dark and differs from the host.
    const effectiveMode = forceMode && forceMode !== 'auto' && forceMode !== p.mode ? forceMode : p.mode;
    const dark = effectiveMode === 'dark';
    // When the override flips the mode, the host palette no longer matches — use fixed tokens.
    const textPrimary = dark ? '#e0e0e0' : 'rgba(0,0,0,0.87)';
    const textSecondary = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';
    const divider = dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)';
    const overridden = forceMode && forceMode !== 'auto' && forceMode !== p.mode;
    const tp = overridden ? textPrimary : p.text.primary;
    const ts = overridden ? textSecondary : p.text.secondary;
    const dv = overridden ? divider : p.divider;
    // When the override flips the mode, paint a matching canvas so the chart reads as a coherent
    // dark/light chart (light text needs a dark canvas and vice versa) — not just recoloured text on
    // a transparent background. When following the host, stay transparent and inherit the host bg.
    // A user-set bgColor (≠ 'transparent') still wins: the body/preview overrides this after merge.
    const backgroundColor = overridden ? (dark ? DARK_BG : LIGHT_BG) : 'transparent';
    return {
        color: echartsPalette(theme),
        backgroundColor,
        textStyle: { color: tp, fontFamily: theme.typography.fontFamily },
        title: { textStyle: { color: tp } },
        legend: { textStyle: { color: ts } },
        xAxis: {
            axisLine: { lineStyle: { color: dv } },
            axisLabel: { color: ts },
            splitLine: { lineStyle: { color: dv } },
        },
        yAxis: {
            axisLine: { lineStyle: { color: dv } },
            axisLabel: { color: ts },
            splitLine: { lineStyle: { color: dv } },
        },
    };
};
