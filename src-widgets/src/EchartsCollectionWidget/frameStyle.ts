/**
 * The chart-frame resolver (parity Build D, ADR-0056) — pure CSS decision for the container
 * styling around the chart area.
 *
 * @module EchartsCollectionWidget/frameStyle
 * @remarks
 * The adapter's "Border" cluster (border_width / border_color / border_style / border_padding /
 * noBorder) renders as plain CSS on the chart's container div — adopted as container styling
 * (MUI sx), deliberately NOT as an echarts option: a frame around the widget surface is layout,
 * not chart presentation, and CSS keeps the 8 styles (incl. groove/ridge/inset/outset) that
 * echarts' line types do not have. The switch point („ohne Rahmen") is `enabled` OR width 0 —
 * the adapter's `noBorder`/`border_width: 0` collapse into the same no-frame outcome.
 *
 * Pure + view-adjacent: the body AND the editor preview apply the same resolver so an authored
 * frame previews live (the view itself stays untested, project rule — only this decision
 * function is).
 */
import type { EchartsFrameStyle } from '../types/field-definitions/echarts-fields';

/** The eight CSS `border-style` values the adapter offers (and the select shows). */
export const FRAME_STYLES: readonly EchartsFrameStyle[] = [
    'solid',
    'dashed',
    'dotted',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
];

/**
 * The frame config as stored (flat rxData scalars) — everything optional; the resolver
 * normalises (numbers arriving as rxData strings coerce, unknown styles fall back).
 */
export interface FrameConfig {
    enabled?: boolean;
    width?: number | string;
    color?: string;
    style?: string;
    padding?: number | string;
}

/** The resolved container CSS — spread into the chart wrapper's sx (or style). */
export interface FrameCss {
    borderWidth: number;
    borderStyle: EchartsFrameStyle;
    borderColor: string;
    padding: number;
    /** The frame + padding must shrink the chart INSIDE the widget bounds, not grow it. */
    boxSizing: 'border-box';
}

/**
 * Resolve the frame config into container CSS.
 *
 * @param frame - The stored frame config (flat rxData scalars or the editor state's copy).
 * @param divider - The host theme's divider colour — the inherit default when no colour is set
 * (the adapter leaves CSS `currentColor`; the divider token is our equivalent subtle line).
 * @returns `null` when no frame renders (disabled, width unset/0 — the „ohne" switch point).
 */
export const resolveFrameCss = (frame: FrameConfig, divider: string): FrameCss | null => {
    if (!frame.enabled) {
        return null;
    }
    const borderWidth = Number(frame.width);
    if (!Number.isFinite(borderWidth) || borderWidth <= 0) {
        return null;
    }
    const style = FRAME_STYLES.includes(frame.style as EchartsFrameStyle)
        ? (frame.style as EchartsFrameStyle)
        : 'solid';
    const padding = Number(frame.padding);
    return {
        borderWidth,
        borderStyle: style,
        borderColor: frame.color || divider,
        padding: Number.isFinite(padding) && padding > 0 ? padding : 0,
        boxSizing: 'border-box',
    };
};
