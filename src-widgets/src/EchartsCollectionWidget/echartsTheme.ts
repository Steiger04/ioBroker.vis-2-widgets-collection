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
 * (the collection theme in both the live body and the editor); the text/divider/paper tokens are
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
    /** Legend-text-colour inherit default and the tooltip text floor — dark-mode-aware. */
    textSecondary: string;
    /**
     * The widget card surface — the tooltip-background floor and its inherit swatch
     * (ADR-0027 addendum 2026-11-04). Dark-mode-aware: the theme's `palette.background.paper`,
     * under a forced mode that differs from the host the fixed canvas colour the chart paints.
     */
    paper: string;
}

/** The dark-mode-aware token subset of {@link ThemeTokens} (text, divider, surface). */
type ModeTokens = Pick<ThemeTokens, 'textPrimary' | 'textSecondary' | 'divider' | 'paper'>;

/**
 * Fixed light/dark tokens used when a `forceMode` override flips the mode. The `paper` surface is
 * the same canvas constant the forced-mode chart paints ({@link chartCanvasColor}).
 */
const FIXED_TEXT_DARK: ModeTokens = {
    textPrimary: '#e0e0e0',
    textSecondary: 'rgba(255,255,255,0.7)',
    divider: 'rgba(255,255,255,0.18)',
    paper: DARK_BG,
};
const FIXED_TEXT_LIGHT: ModeTokens = {
    textPrimary: 'rgba(0,0,0,0.87)',
    textSecondary: 'rgba(0,0,0,0.6)',
    divider: 'rgba(0,0,0,0.12)',
    paper: LIGHT_BG,
};

/**
 * Whether a `forceMode` policy flips the chart away from the host palette mode: only a concrete
 * `'light'`/`'dark'` that differs from `paletteMode` does; `'auto'`/undefined and an agreeing mode
 * follow the host. The single override rule behind {@link effectiveTextTokens},
 * {@link effectiveDarkMode} and {@link chartCanvasColor} (ADR-0007 dark-mode).
 *
 * @param forceMode - The chart's dark-mode policy.
 * @param paletteMode - The host palette mode (`theme.palette.mode`).
 * @returns `true` (narrowing `forceMode` to the concrete mode) when the override applies.
 */
const overridesHostMode = (
    forceMode: 'light' | 'dark' | 'auto' | undefined,
    paletteMode: string,
): forceMode is 'light' | 'dark' => !!forceMode && forceMode !== 'auto' && forceMode !== paletteMode;

/**
 * The effective text, divider and surface (`paper`) tokens, honouring a `forceMode` override.
 * Shared by {@link buildEchartsTheme} and {@link resolveThemeTokens} so the chart base, the builder
 * defaults and the editor inherit swatches all agree on the same dark-mode-aware values (ADR-0027).
 */
export const effectiveTextTokens = (theme: Theme, forceMode?: 'light' | 'dark' | 'auto'): ModeTokens => {
    const p = theme.palette;
    if (!overridesHostMode(forceMode, p.mode)) {
        return {
            textPrimary: p.text.primary,
            textSecondary: p.text.secondary,
            divider: p.divider,
            paper: p.background.paper,
        };
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
    return (overridesHostMode(forceMode, paletteMode) ? forceMode : paletteMode) === 'dark' ? 'dark' : 'light';
};

/**
 * The chart canvas colour (ADR-0007 dark-mode): `transparent` while the chart follows the host
 * mode (the host background shows through), the fixed light/dark canvas colour when a concrete
 * `forceMode` override flips the mode away from the host — light text needs a dark canvas and
 * vice versa. The single resolution shared by {@link buildEchartsTheme} (the `backgroundColor` of
 * the theme base) and the configurator's inherit swatch of the chart background.
 *
 * @param theme - The theme the chart renders under (the collection theme).
 * @param forceMode - The chart's dark-mode policy.
 * @returns `transparent`, `#ffffff` or `#1e1e1e`.
 */
export const chartCanvasColor = (theme: Theme, forceMode?: 'light' | 'dark' | 'auto'): string => {
    if (!overridesHostMode(forceMode, theme.palette.mode)) {
        return 'transparent';
    }
    return forceMode === 'dark' ? DARK_BG : LIGHT_BG;
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
 * Content signature of every theme field the chart reads — the memo key of the live body's
 * palette, tokens and theme base. vis-2 rebuilds the MUI theme on a mere editor move (a new ref
 * with identical content), so keying on the `theme` REFERENCE would redraw the chart on every
 * move; keying on this string recomputes only on a real theme change. Must list every field
 * {@link echartsPalette}, {@link resolveThemeTokens} and {@link buildEchartsTheme} read — a
 * missing one (e.g. `background.paper`, the tooltip floor) leaves the chart stale when only it
 * changes. All fields are strings, safe to serialize.
 */
export const chartThemeSignature = (theme: Theme): string => {
    const p = theme.palette;
    return JSON.stringify({
        mode: p.mode,
        primary: p.primary.main,
        secondary: p.secondary.main,
        warning: p.warning.main,
        success: p.success.main,
        info: p.info.main,
        error: p.error.main,
        textPrimary: p.text.primary,
        textSecondary: p.text.secondary,
        divider: p.divider,
        paper: p.background.paper,
        fontFamily: theme.typography.fontFamily,
    });
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
 *   The tooltip floor (surface `paper`, text `textSecondary`) follows the same override.
 * @returns An echarts option fragment merged under the generated data option.
 */
export const buildEchartsTheme = (theme: Theme, forceMode?: 'light' | 'dark' | 'auto'): EChartsOption => {
    // Text, divider + paper tokens via the shared dark-mode-aware helper (ADR-0027): the chart base, the
    // builder defaults and the editor inherit swatches all read the same values.
    const { textPrimary: tp, textSecondary: ts, divider: dv, paper } = effectiveTextTokens(theme, forceMode);
    // When the override flips the mode, paint a matching canvas so the chart reads as a coherent
    // dark/light chart (light text needs a dark canvas and vice versa) — not just recoloured text on
    // a transparent background. When following the host, stay transparent and inherit the host bg.
    // A user-set bgColor (≠ 'transparent') still wins: the body/preview overrides this after merge.
    // The shared resolver (see chartCanvasColor) is also the configurator's inherit swatch.
    const backgroundColor = chartCanvasColor(theme, forceMode);
    return {
        color: echartsPalette(theme),
        backgroundColor,
        textStyle: { color: tp, fontFamily: theme.typography.fontFamily },
        title: { textStyle: { color: tp } },
        legend: { textStyle: { color: ts } },
        // Tooltip floor (ADR-0027 addendum 2026-11-04): the card surface + the legend-text colour,
        // so a dark chart gets a dark tooltip. In the FLOOR, not the built entry — the section raw
        // folds under the built entry, so only here do the GUI colour and a raw `backgroundColor`
        // both keep winning. No border/shadow: echarts keeps its own (incl. the series-coloured
        // border of `trigger: 'item'`). Floored only when the family builds a tooltip (mergeOption).
        tooltip: { backgroundColor: paper, textStyle: { color: ts } },
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
