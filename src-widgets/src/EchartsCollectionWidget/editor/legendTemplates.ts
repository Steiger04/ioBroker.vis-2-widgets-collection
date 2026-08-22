/**
 * Legend template catalog — the Legend section's own raw-JSON templates (the ADR-0044 move).
 *
 * @module EchartsCollectionWidget/editor/legendTemplates
 * @remarks
 * Same anatomy as the axis/X/title catalogs: group scaffolds per echarts option group,
 * deep-merged UNDER `buildLegend`'s output (GUI wins), audited against the legend's GUI-owned
 * set by the guard test. GUI-owned leaves omitted (ADR-0021/0027/0029 + b30b9ff): show, data,
 * placement (left/top/right/bottom), orient, icon, itemWidth/itemHeight/itemGap, inactiveColor,
 * the panel frame (backgroundColor/borderColor/borderWidth/borderRadius/padding), and textStyle
 * colour/size/weight/style.
 *
 * Key set audited against the echarts 6.1.0 source (LegendModel + ScrollableLegendModel
 * defaultOption via DeepWiki): gaps closed vs the old chart-level scaffold — `fontFamily`
 * (user decision 2026-08-22), `symbolKeepAspect`, `triggerEvent`, `selectorLabel.fontFamily`,
 * the inner textStyle frame keys. Deliberately out (pathologic): `pageIcons` SVG paths,
 * `formatter` as a FUNCTION (string templates are expressible), `rich`.
 */
/** Legend-template grouping (rendered as menu section headers; order = {@link LEGEND_CATEGORY_ORDER}). */
export type LegendTemplateCategory =
    | 'textStyle'
    | 'itemStyle'
    | 'lineStyle'
    | 'selector'
    | 'pageButtons'
    | 'frame'
    | 'behavior';

export const LEGEND_CATEGORY_ORDER: LegendTemplateCategory[] = [
    'textStyle',
    'itemStyle',
    'lineStyle',
    'selector',
    'pageButtons',
    'frame',
    'behavior',
];

/** i18n key per category header. */
export const LEGEND_CATEGORY_I18N: Record<LegendTemplateCategory, string> = {
    textStyle: 'echarts_ltpl_cat_textstyle',
    itemStyle: 'echarts_ltpl_cat_itemstyle',
    lineStyle: 'echarts_ltpl_cat_linestyle',
    selector: 'echarts_ltpl_cat_selector',
    pageButtons: 'echarts_ltpl_cat_pagebuttons',
    frame: 'echarts_ltpl_cat_frame',
    behavior: 'echarts_ltpl_cat_behavior',
};

export interface LegendTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: LegendTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Legend-option JSON object (deep-merged into the section's raw). */
    json: string;
}

export const LEGEND_TEMPLATES: LegendTemplate[] = [
    // ── textStyle — legend text block (colour/size/weight/style are GUI) ──
    {
        id: 'textstyle',
        category: 'textStyle',
        label: 'textStyle',
        json: '{ "textStyle": { "fontFamily": "sans-serif", "align": "left", "verticalAlign": "auto", "lineHeight": 14, "width": 0, "height": 0, "overflow": "none", "backgroundColor": "transparent", "padding": 0, "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0, "textBorderColor": "transparent", "textBorderWidth": 0, "textBorderType": "solid", "textBorderDashOffset": 0, "textBorderRadius": 0, "textShadowBlur": 0, "textShadowColor": "transparent", "textShadowOffsetX": 0, "textShadowOffsetY": 0 } }',
    },
    // ── itemStyle — the swatch (everything inherits the series visual by default) ──
    {
        id: 'itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        json: '{ "itemStyle": { "color": "inherit", "opacity": "inherit", "borderColor": "inherit", "borderWidth": "auto", "borderType": "inherit", "borderDashOffset": "inherit", "borderCap": "inherit", "borderJoin": "inherit", "borderMiterLimit": "inherit" } }',
    },
    // ── lineStyle — the line-series legend marker ─────────────────────────
    {
        id: 'linestyle',
        category: 'lineStyle',
        label: 'lineStyle',
        json: '{ "lineStyle": { "width": "auto", "color": "inherit", "opacity": "inherit", "type": "inherit", "cap": "inherit", "join": "inherit", "dashOffset": "inherit", "miterLimit": "inherit", "inactiveColor": "#ccc", "inactiveWidth": 2 } }',
    },
    // ── selector — the all/inverse buttons (off by default) ────────────────
    {
        id: 'selector',
        category: 'selector',
        label: 'selector',
        // selector:false default → `true` (or ['all','inverse']) is the lever; the labels'
        // colours are doc-literals (#666/#ccc, ADR-0030 rule — the token values are theme words).
        json: '{ "selector": true, "selectorPosition": "auto", "selectorItemGap": 7, "selectorButtonGap": 10, "selectorLabel": { "show": true, "color": "#666", "fontFamily": "sans-serif", "fontSize": 12, "borderColor": "#ccc", "borderWidth": 1, "borderRadius": 10, "padding": [3, 5, 3, 5] }, "emphasis": { "selectorLabel": { "show": true, "color": "#666" } } }',
    },
    // ── pageButtons — the scroll pager (type:'scroll' is the switch) ───────
    {
        id: 'pagebuttons',
        category: 'pageButtons',
        label: 'scroll + page',
        json: '{ "type": "scroll", "scrollDataIndex": 0, "pageButtonItemGap": 5, "pageButtonGap": null, "pageButtonPosition": "end", "pageFormatter": "{current}/{total}", "pageIconColor": "#2f4554", "pageIconInactiveColor": "#aaa", "pageIconSize": 15, "pageTextStyle": { "color": "#666" }, "animation": true, "animationDurationUpdate": 800 }',
    },
    // ── frame — the panel (frame COLOUR keys are GUI; type/dash + shadow are free) ──
    {
        id: 'frame',
        category: 'frame',
        label: 'frame',
        json: '{ "borderType": "solid", "borderDashOffset": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 }',
    },
    // ── behavior ───────────────────────────────────────────────────────────
    {
        id: 'behavior',
        category: 'behavior',
        label: 'behavior',
        json: '{ "align": "auto", "width": "auto", "height": "auto", "selectedMode": true, "selected": {}, "symbolRotate": 0, "symbolKeepAspect": true, "inactiveBorderColor": "#ccc", "inactiveBorderWidth": "auto", "triggerEvent": false, "silent": false, "zlevel": 0, "z": 4 }',
    },
    {
        id: 'legend-tooltip',
        category: 'behavior',
        label: 'legend · tooltip',
        // A tooltip on the legend items themselves — off by default, the entry is the lever.
        json: '{ "tooltip": { "show": true } }',
    },
];

/** The Legend section's catalog bundle — structural, satisfies the RawJsonSection catalog prop. */
export const LEGEND_CATALOG = {
    templates: LEGEND_TEMPLATES,
    categoryOrder: LEGEND_CATEGORY_ORDER,
    categoryI18n: LEGEND_CATEGORY_I18N as Record<string, string>,
};
