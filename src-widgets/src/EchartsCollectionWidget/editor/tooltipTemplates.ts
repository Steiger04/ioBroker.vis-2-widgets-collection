/**
 * Tooltip template catalog — the Tooltip section's own raw-JSON templates (the ADR-0044 move).
 *
 * @module EchartsCollectionWidget/editor/tooltipTemplates
 * @remarks
 * Same anatomy as the axis/X/title/legend catalogs: group scaffolds per echarts option group,
 * deep-merged UNDER `buildTooltip`'s output (GUI wins), audited against the tooltip's GUI-owned
 * set by the guard test. GUI-owned leaves omitted (ADR-0032): trigger, formatter, valueFormatter,
 * show (the GUI emits them: trigger select, template formatter, units/decimals, show:false on
 * 'none').
 *
 * Key set audited against the echarts 6.1.0 source (TooltipModel.defaultOption +
 * CommonTooltipOption + CommonAxisPointerOption via DeepWiki): gaps closed vs the old
 * chart-level scaffold — `fontFamily` (user decision 2026-08-22), textStyle width/height, the
 * axisPointer STYLE trees (lineStyle/shadowStyle/crossStyle — the cross/shadow pointer variants
 * finally have their companion styles), `handle` stays out (exotic), `decoration` stays out
 * (html renderMode only), functions stay out (not JSON-expressible).
 */
/** Tooltip-template grouping (rendered as menu section headers; order = {@link TOOLTIP_CATEGORY_ORDER}). */
export type TooltipTemplateCategory = 'textStyle' | 'frame' | 'behavior' | 'axisPointer' | 'pointerLabel';

export const TOOLTIP_CATEGORY_ORDER: TooltipTemplateCategory[] = [
    'textStyle',
    'frame',
    'behavior',
    'axisPointer',
    'pointerLabel',
];

/** i18n key per category header. */
export const TOOLTIP_CATEGORY_I18N: Record<TooltipTemplateCategory, string> = {
    textStyle: 'echarts_totpl_cat_textstyle',
    frame: 'echarts_totpl_cat_frame',
    behavior: 'echarts_totpl_cat_behavior',
    axisPointer: 'echarts_totpl_cat_axispointer',
    pointerLabel: 'echarts_totpl_cat_pointerlabel',
};

export interface TooltipTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: TooltipTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Tooltip-option JSON object (deep-merged into the section's raw). */
    json: string;
}

export const TOOLTIP_TEMPLATES: TooltipTemplate[] = [
    // ── textStyle — the tooltip body text ─────────────────────────────────
    {
        id: 'textstyle',
        category: 'textStyle',
        label: 'textStyle',
        json: '{ "textStyle": { "color": "#fff", "fontFamily": "sans-serif", "fontStyle": "normal", "fontWeight": "normal", "fontSize": 14, "align": "left", "verticalAlign": "top", "lineHeight": 18, "width": 0, "height": 0, "overflow": "break", "backgroundColor": "transparent", "padding": 0, "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0, "textBorderColor": "transparent", "textBorderWidth": 0, "textBorderType": "solid", "textBorderDashOffset": 0, "textBorderRadius": 0, "textShadowBlur": 0, "textShadowColor": "transparent", "textShadowOffsetX": 0, "textShadowOffsetY": 0 } }',
    },
    // ── frame — the panel (border/shadow/padding; the famous rgba backdrop) ──
    {
        id: 'frame',
        category: 'frame',
        label: 'frame',
        // backgroundColor kept the classic doc-literal rgba(50,50,50,.7) over the v6 token word.
        json: '{ "backgroundColor": "rgba(50, 50, 50, 0.7)", "borderColor": "#333", "borderWidth": 1, "borderRadius": 4, "padding": 5, "shadowBlur": 10, "shadowColor": "rgba(0, 0, 0, 0.2)", "shadowOffsetX": 1, "shadowOffsetY": 2, "extraCssText": "" }',
    },
    // ── behavior — delays, stickiness, render mode ────────────────────────
    {
        id: 'behavior',
        category: 'behavior',
        label: 'behavior',
        json: '{ "showContent": true, "triggerOn": "mousemove|click", "alwaysShowContent": false, "showDelay": 0, "hideDelay": 100, "enterable": false, "confine": false, "renderMode": "auto", "transitionDuration": 0.4, "displayTransition": true, "zlevel": 0, "z": 60 }',
    },
    // ── axisPointer — the crosshair + its style trees ─────────────────────
    {
        id: 'axispointer',
        category: 'axisPointer',
        label: 'axisPointer',
        json: '{ "axisPointer": { "type": "line", "axis": "auto", "snap": false, "triggerOn": "mousemove|click", "triggerTooltip": true, "triggerEmphasis": true, "value": null, "status": "hide", "animation": "auto", "animationDurationUpdate": 200, "animationEasingUpdate": "exponentialOut" } }',
    },
    {
        id: 'pointer-cross',
        category: 'axisPointer',
        label: 'pointer · cross',
        // The crosshair cross — its crossStyle companion rides along (the whole point).
        json: '{ "axisPointer": { "type": "cross", "crossStyle": { "color": "#ccc", "width": 1, "type": "dashed" } } }',
    },
    {
        id: 'pointer-shadow',
        category: 'axisPointer',
        label: 'pointer · shadow',
        // The band pointer — the shadowStyle IS the band's areaStyle.
        json: '{ "axisPointer": { "type": "shadow", "shadowStyle": { "color": "rgba(150,150,150,0.3)" } } }',
    },
    {
        id: 'pointer-linestyle',
        category: 'axisPointer',
        label: 'pointer · lineStyle',
        json: '{ "axisPointer": { "type": "line", "lineStyle": { "color": "#555", "width": 1, "type": "solid" } } }',
    },
    // ── pointerLabel — the axis end labels of the crosshair ────────────────
    {
        id: 'pointerlabel',
        category: 'pointerLabel',
        label: 'axisPointer · label',
        // The ~90% case: the value/time label at the axis end. show:true is the lever (defaults
        // false via the axis-level pointer; here under tooltip it is the end-label switch).
        json: '{ "axisPointer": { "label": { "show": true, "precision": "auto", "formatter": null, "margin": 3, "color": "#fff", "fontFamily": "sans-serif", "fontStyle": "normal", "fontWeight": "normal", "fontSize": 12, "lineHeight": 12, "align": "left", "verticalAlign": "top", "backgroundColor": "auto", "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 3, "padding": 3, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0, "textBorderColor": "transparent", "textBorderWidth": 0, "textBorderType": "solid", "textBorderDashOffset": 0, "textBorderRadius": 0, "textShadowBlur": 0, "textShadowColor": "transparent", "textShadowOffsetX": 0, "textShadowOffsetY": 0, "overflow": "truncate" } } }',
    },
];

/** The Tooltip section's catalog bundle — structural, satisfies the RawJsonSection catalog prop. */
export const TOOLTIP_CATALOG = {
    templates: TOOLTIP_TEMPLATES,
    categoryOrder: TOOLTIP_CATEGORY_ORDER,
    categoryI18n: TOOLTIP_CATEGORY_I18N as Record<string, string>,
};
