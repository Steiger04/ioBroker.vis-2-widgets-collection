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

/**
 * Builds the echarts presentation base from the MUI theme.
 *
 * @param theme - Current MUI theme (resolved by CollectionProvider).
 * @returns An echarts option fragment merged under the generated data option.
 */
export const buildEchartsTheme = (theme: Theme): EChartsOption => {
    const p = theme.palette;
    return {
        color: echartsPalette(theme),
        backgroundColor: 'transparent',
        textStyle: { color: p.text.primary, fontFamily: theme.typography.fontFamily },
        title: { textStyle: { color: p.text.primary } },
        legend: { textStyle: { color: p.text.secondary } },
        xAxis: {
            axisLine: { lineStyle: { color: p.divider } },
            axisLabel: { color: p.text.secondary },
            splitLine: { lineStyle: { color: p.divider } },
        },
        yAxis: {
            axisLine: { lineStyle: { color: p.divider } },
            axisLabel: { color: p.text.secondary },
            splitLine: { lineStyle: { color: p.divider } },
        },
    };
};
