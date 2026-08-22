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
 * Semantic theme colours the family builders consume for theme-derived defaults (ADR-0027).
 *
 * The palette colours (`primary`/`secondary`/`success`/…) come straight from the resolved theme
 * (the collection theme in both the live body and the editor); the text/divider tokens are
 * dark-mode-aware — they swap to the fixed light/dark token set when a `forceMode` override flips
 * the mode away from the host, so a forced-dark chart's defaults read dark too.
 */
export interface ThemeTokens {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    /** Axis/threshold/legend-border default — dark-mode-aware. */
    divider: string;
    /** Title-colour inherit default — dark-mode-aware. */
    textPrimary: string;
    /** Legend-text-colour inherit default — dark-mode-aware. */
    textSecondary: string;
}

/** Fixed light/dark text+divider tokens used when a `forceMode` override flips the mode. */
const FIXED_TEXT_DARK = {
    textPrimary: '#e0e0e0',
    textSecondary: 'rgba(255,255,255,0.7)',
    divider: 'rgba(255,255,255,0.18)',
};
const FIXED_TEXT_LIGHT = {
    textPrimary: 'rgba(0,0,0,0.87)',
    textSecondary: 'rgba(0,0,0,0.6)',
    divider: 'rgba(0,0,0,0.12)',
};

/**
 * The effective text+divider tokens, honouring a `forceMode` override. Shared by
 * {@link buildEchartsTheme} and {@link resolveThemeTokens} so the chart base, the builder defaults
 * and the editor inherit swatches all agree on the same dark-mode-aware values (ADR-0027).
 */
export const effectiveTextTokens = (
    theme: Theme,
    forceMode?: 'light' | 'dark' | 'auto',
): { textPrimary: string; textSecondary: string; divider: string } => {
    const p = theme.palette;
    const overridden = forceMode && forceMode !== 'auto' && forceMode !== p.mode;
    if (!overridden) {
        return { textPrimary: p.text.primary, textSecondary: p.text.secondary, divider: p.divider };
    }
    return forceMode === 'dark' ? FIXED_TEXT_DARK : FIXED_TEXT_LIGHT;
};

/**
 * The effective chart dark mode: a concrete `forceMode` override (`'light'`/`'dark'`) wins when it
 * differs from the host palette, `'auto'`/undefined follows the palette. The single resolution
 * shared by {@link buildEchartsTheme} and the presentation assembly (toolbox token literals,
 * ADR-0045) so every theme-aware default agrees on the same mode.
 */
export const effectiveDarkMode = (
    forceMode: 'light' | 'dark' | 'auto' | undefined,
    paletteMode: string,
): 'light' | 'dark' => {
    const overridden = forceMode && forceMode !== 'auto' && forceMode !== paletteMode;
    return (overridden ? forceMode : paletteMode) === 'dark' ? 'dark' : 'light';
};

/**
 * Resolve the full semantic token set from a theme (ADR-0027). Pure — the caller passes the theme
 * the chart renders under (the collection theme), so editor + live resolve identically.
 */
export const resolveThemeTokens = (theme: Theme, forceMode?: 'light' | 'dark' | 'auto'): ThemeTokens => {
    const p = theme.palette;
    return {
        primary: p.primary.main,
        secondary: p.secondary.main,
        success: p.success.main,
        warning: p.warning.main,
        error: p.error.main,
        info: p.info.main,
        ...effectiveTextTokens(theme, forceMode),
    };
};

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
    // Effective mode via the shared resolver (see effectiveDarkMode): the override wins when it
    // is a concrete light/dark and differs from the host.
    const overridden = forceMode && forceMode !== 'auto' && forceMode !== p.mode;
    const dark = effectiveDarkMode(forceMode, p.mode) === 'dark';
    // Text + divider tokens via the shared dark-mode-aware helper (ADR-0027): the chart base, the
    // builder defaults and the editor inherit swatches all read the same values.
    const { textPrimary: tp, textSecondary: ts, divider: dv } = effectiveTextTokens(theme, forceMode);
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
