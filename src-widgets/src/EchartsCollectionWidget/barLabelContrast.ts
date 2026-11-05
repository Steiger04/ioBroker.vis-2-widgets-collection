/**
 * The bar label's auto contrast (ADR-0080 decision 4: bar labels stay on echarts' auto colour) —
 * the colour echarts/zrender paints an uncoloured bar label, so the configurator's inherit swatch
 * shows what renders (ADR-0027 honesty rule, ADR-0004 inherit swatches).
 *
 * @module EchartsCollectionWidget/barLabelContrast
 * @remarks
 * No own colour literals and no own luminance formula: the label colours, the dark-mode threshold
 * and `lum` are zrender's own exports, and the guard test compares the result against a headless
 * render of the installed echarts. The rule mirrors zrender 6.1.0:
 *  - inside (`inside`/`insideTop`/`insideBottom`, and an unset position — echarts' bar label
 *    default is `inside`, `echarts/lib/label/labelStyle.js` `createTextConfig`):
 *    `Path.getInsideTextFill` — the luminance of the bar fill picks dark/lighter/light;
 *  - outside (`top`): `Element.getOutsideFill` — dark label unless zrender is in dark mode, which
 *    `ZRender.setBackgroundColor` derives from the canvas colour (`lum(bg, 1) < threshold`; a
 *    transparent canvas is never dark — the host background behind it is invisible to zrender).
 */
import type { Theme } from '@mui/material/styles';
import { DARK_LABEL_COLOR, DARK_MODE_THRESHOLD, LIGHT_LABEL_COLOR, LIGHTER_LABEL_COLOR } from 'zrender/lib/config.js';
import { lum } from 'zrender/lib/tool/color.js';

import { chartCanvasColor } from './echartsTheme';
import type { EchartsBarLabelPos } from '../types/field-definitions/echarts-fields';

/**
 * The canvas colour the chart hands zrender: a user-set chart background (≠ `transparent`) wins,
 * else the theme base's canvas (`chartCanvasColor`) — the same order the pipeline applies.
 *
 * @param bgColor - The stored chart background (`''`/`transparent`/unset = inherit).
 * @param theme - The collection theme the chart renders under.
 * @param forceMode - The chart's dark-mode policy.
 */
export const effectiveChartCanvas = (
    bgColor: string | undefined,
    theme: Theme,
    forceMode?: 'light' | 'dark' | 'auto',
): string => (bgColor && bgColor !== 'transparent' ? bgColor : chartCanvasColor(theme, forceMode));

/** zrender's dark mode for a canvas colour (`ZRender.setBackgroundColor`). */
const isZrenderDarkCanvas = (canvas: string): boolean => !!canvas && lum(canvas, 1) < DARK_MODE_THRESHOLD;

/** zrender's inside label fill for a bar fill (`Path.getInsideTextFill`). */
const insideLabelFill = (barFill: string): string => {
    if (barFill === 'none') {
        return DARK_LABEL_COLOR;
    }
    const fillLum = lum(barFill, 0);
    if (fillLum > 0.5) {
        return DARK_LABEL_COLOR;
    }
    return fillLum > 0.2 ? LIGHTER_LABEL_COLOR : LIGHT_LABEL_COLOR;
};

/**
 * The colour echarts paints a bar label without `label.color`.
 *
 * @param position - The stored label position (unset = echarts' `inside` default).
 * @param barFill - The bar's effective fill (the series colour).
 * @param canvas - The effective chart canvas ({@link effectiveChartCanvas}).
 */
export const barLabelAutoColor = (position: EchartsBarLabelPos | undefined, barFill: string, canvas: string): string =>
    position === 'top'
        ? isZrenderDarkCanvas(canvas)
            ? LIGHT_LABEL_COLOR
            : DARK_LABEL_COLOR
        : insideLabelFill(barFill);
