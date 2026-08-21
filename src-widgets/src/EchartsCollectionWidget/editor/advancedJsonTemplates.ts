/**
 * The chart-level Advanced-JSON template catalog (ADR-0040, reworked to Option-group scaffolds by
 * ADR-0043) — the chart-wide U textarea's design library, grouped by component.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates
 * @remarks
 * ADR-0040 had restructured the complete ADR-0030/0032/0035 scaffolds into small one-capability
 * snippets. ADR-0043 deliberately PARTIALLY REVERSES that: the object components (title / legend /
 * tooltip / toolbox) carry a complete BASIS SCAFFOLD again — every GUI-uncovered subkey
 * default-pre-filled (ADR-0030 defaults rule: concrete → literal, colour token → doc literal,
 * auto-inherit → keyword, undefined-only → omitted); the user deletes what they do not need.
 * What made this viable AFTER ADR-0040: the persistent activation composes scaffolds with the
 * Eigenanteil (ADR-0042) instead of a one-shot text flood, and the menu search (ADR-0043)
 * scales the entry count. The ADR-0040 snippet inventory under these four components is retired
 * (every snippet's keys ⊂ its scaffold); tooltip keeps two VALUE VARIANTS (cross/shadow
 * axisPointer) and the audited radar entries are kept unchanged. The ADR-0040 `xAxis` category
 * is RETIRED since the ADR-0037 addendum: the X-Karte carries its own raw escape hatch + catalog
 * (`xAxisTemplates.ts`) — one place per component; the former ids drop silently at load.
 *
 * NOT added (deliberate, against the ADR-0043 spec draft): `grid` and `dataZoom` categories.
 * The cartesian builder ALWAYS emits the full grid block (left/right/top/bottom + v6
 * outerBounds containment, ADR-0024) and `dataZoom` whenever a GUI zoom toggle is on — arrays
 * merge atomically, so a U dataZoom is wholly swallowed there. Both would be 100% ✗ templates,
 * violating the catalog's collision-freedom rule.
 *
 * TEMPLATE RULE (ADR-0036): a template may only set echarts component mainTypes listed in
 * `REPLACE_MERGE` (../replaceMerge) — deleting the template must revert the preview AND the
 * widget, which merge-mode setOption silently refuses to do. `advancedJsonTemplates.test.ts`
 * enforces this mechanically AND audits that no leaf duplicates a builder-emitted (GUI-owned)
 * key; a future template that forgets fails red there.
 *
 * GUI-owned leaves avoided per component (audited in the test):
 *  - title: text, placement (left/top + dx/dy), textStyle colour/size/weight/style (ADR-0021/0029).
 *  - legend: show, placement, orient, icon, item sizes/gaps, textStyle colour/size/weight/style,
 *    inactiveColor, panel frame (backgroundColor/borderColor/borderWidth/borderRadius/padding).
 *  - tooltip: show, trigger, formatter, valueFormatter (ADR-0032).
 *  - toolbox: wholly user-owned (nothing avoided).
 *  - radar: wholly user-owned (the radar presets classifying effective is the point).
 *
 * Defaults verified against the locally installed echarts 6.1.0 (`types/dist/echarts.d.ts` and
 * ToolboxModel/TooltipModel defaultOption), cross-checked with the official docs. Template LABELS
 * are echarts vocabulary shown as-is — only the CATEGORY headers translate.
 */
import type { EchartsChartFamily } from '../../types/field-definitions/echarts-fields';

/** Chart-template grouping (rendered as menu section headers; order = {@link CHART_CATEGORY_ORDER}). */
export type ChartTemplateCategory = 'title' | 'legend' | 'tooltip' | 'toolbox' | 'radar';

export const CHART_CATEGORY_ORDER: ChartTemplateCategory[] = ['title', 'legend', 'tooltip', 'toolbox', 'radar'];

/** i18n key per category header. */
export const CHART_CATEGORY_I18N: Record<ChartTemplateCategory, string> = {
    title: 'echarts_tpl_cat_title',
    legend: 'echarts_tpl_cat_legend',
    tooltip: 'echarts_tpl_cat_tooltip',
    toolbox: 'echarts_tpl_cat_toolbox',
    radar: 'echarts_tpl_cat_radar',
};

export interface ChartTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: ChartTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Chart-level option JSON (composed into the U text while active). */
    json: string;
    /** Chart families the entry applies to; absent = every family. */
    families?: EchartsChartFamily[];
}

export const CHART_TEMPLATES: ChartTemplate[] = [
    // ── title ─────────────────────────────────────────────────────────────
    {
        id: 'title-scaffold',
        category: 'title',
        label: 'title',
        // ADR-0030: complete scaffold of EVERY title subkey the GUI does NOT own (text/placement/
        // textStyle colour-size-weight-style are GUI-owned → omitted), pre-filled with the echarts
        // default (a best-effort literal where the real default is a theme token / 'auto' / undefined).
        json: '{\n  "title": {\n    "show": true,\n    "link": "",\n    "target": "blank",\n    "subtext": "",\n    "sublink": "",\n    "subtarget": "blank",\n    "triggerEvent": false,\n    "textVerticalAlign": "auto",\n    "zlevel": 0,\n    "z": 2,\n    "itemGap": 10,\n    "padding": 5,\n    "backgroundColor": "transparent",\n    "borderColor": "#ccc",\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "silent": false,\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 18,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "none"\n    },\n    "subtextStyle": {\n      "color": "#aaa",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 12,\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 12,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    }\n  }\n}',
    },
    // ── legend ────────────────────────────────────────────────────────────
    {
        id: 'legend-scaffold',
        category: 'legend',
        label: 'legend',
        // ADR-0030: complete scaffold of EVERY legend subkey the GUI does NOT own (show/data/
        // placement/orient/items/frame + textStyle colour-size-weight-style are GUI-owned → omitted).
        json: '{\n  "legend": {\n    "type": "plain",\n    "zlevel": 0,\n    "z": 2,\n    "align": "auto",\n    "width": "auto",\n    "height": "auto",\n    "selectedMode": true,\n    "selected": {},\n    "formatter": null,\n    "symbolRotate": 0,\n    "inactiveBorderColor": "#ccc",\n    "inactiveBorderWidth": "auto",\n    "borderType": "solid",\n    "borderDashOffset": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "scrollDataIndex": 0,\n    "pageButtonItemGap": 5,\n    "pageButtonGap": null,\n    "pageButtonPosition": "end",\n    "pageFormatter": "{current}/{total}",\n    "pageIcons": {\n      "horizontal": ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],\n      "vertical": ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]\n    },\n    "pageIconColor": "#2f4554",\n    "pageIconInactiveColor": "#aaa",\n    "pageIconSize": 15,\n    "animation": true,\n    "animationDurationUpdate": 800,\n    "selector": false,\n    "selectorPosition": "auto",\n    "selectorItemGap": 7,\n    "selectorButtonGap": 10,\n    "silent": false,\n    "itemStyle": {\n      "color": "inherit",\n      "opacity": "inherit",\n      "borderColor": "inherit",\n      "borderWidth": "auto",\n      "borderType": "inherit",\n      "borderDashOffset": "inherit",\n      "borderCap": "inherit",\n      "borderJoin": "inherit",\n      "borderMiterLimit": "inherit"\n    },\n    "lineStyle": {\n      "width": "auto",\n      "color": "inherit",\n      "opacity": "inherit",\n      "type": "inherit",\n      "cap": "inherit",\n      "join": "inherit",\n      "dashOffset": "inherit",\n      "miterLimit": "inherit",\n      "inactiveColor": "#ccc",\n      "inactiveWidth": 2\n    },\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 14,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    },\n    "selectorLabel": {\n      "show": true,\n      "color": "#666",\n      "fontSize": 12,\n      "borderColor": "#ccc",\n      "borderWidth": 1,\n      "borderRadius": 10,\n      "padding": [3, 5, 3, 5]\n    },\n    "pageTextStyle": {\n      "color": "#666"\n    },\n    "emphasis": {\n      "selectorLabel": {\n        "show": true,\n        "color": "#666"\n      }\n    },\n    "tooltip": {\n      "show": false\n    }\n  }\n}',
    },
    // ── tooltip ───────────────────────────────────────────────────────────
    {
        id: 'tooltip-scaffold',
        category: 'tooltip',
        label: 'tooltip',
        // ADR-0032: complete scaffold of EVERY tooltip subkey the GUI does NOT own (trigger/formatter/
        // valueFormatter/show are GUI-owned → omitted), pre-filled with the echarts default (best-effort
        // literal where the real default is a theme token / 'auto' / undefined). axisPointer is filled to
        // its direct keys + a full `label` (the crosshair case); the line/cross/shadow/handle style sub-
        // trees and fontFamily are omitted. Verified against TooltipModel / CommonAxisPointerOption.
        json: '{\n  "tooltip": {\n    "showContent": true,\n    "triggerOn": "mousemove|click",\n    "alwaysShowContent": false,\n    "showDelay": 0,\n    "hideDelay": 100,\n    "enterable": false,\n    "confine": false,\n    "renderMode": "auto",\n    "transitionDuration": 0.4,\n    "displayTransition": true,\n    "backgroundColor": "rgba(50, 50, 50, 0.7)",\n    "borderColor": "#333",\n    "borderWidth": 1,\n    "borderRadius": 4,\n    "padding": 5,\n    "extraCssText": "",\n    "shadowBlur": 10,\n    "shadowColor": "rgba(0, 0, 0, 0.2)",\n    "shadowOffsetX": 1,\n    "shadowOffsetY": 2,\n    "textStyle": {\n      "color": "#fff",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 14,\n      "align": "left",\n      "verticalAlign": "top",\n      "lineHeight": 18,\n      "backgroundColor": "transparent",\n      "borderColor": "#333",\n      "borderWidth": 0,\n      "borderType": "solid",\n      "borderDashOffset": 0,\n      "borderRadius": 0,\n      "padding": 0,\n      "shadowBlur": 0,\n      "shadowColor": "transparent",\n      "shadowOffsetX": 0,\n      "shadowOffsetY": 0,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textBorderDashOffset": 0,\n      "textBorderRadius": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "break"\n    },\n    "axisPointer": {\n      "type": "line",\n      "axis": "auto",\n      "snap": false,\n      "triggerOn": "mousemove|click",\n      "triggerTooltip": true,\n      "triggerEmphasis": true,\n      "value": null,\n      "status": "hide",\n      "animation": "auto",\n      "animationDurationUpdate": 200,\n      "animationEasingUpdate": "cubicOut",\n      "label": {\n        "show": true,\n        "precision": "auto",\n        "formatter": null,\n        "margin": 3,\n        "color": "#fff",\n        "fontStyle": "normal",\n        "fontWeight": "normal",\n        "fontSize": 12,\n        "lineHeight": 12,\n        "align": "left",\n        "verticalAlign": "top",\n        "backgroundColor": "auto",\n        "borderColor": "#333",\n        "borderWidth": 0,\n        "borderType": "solid",\n        "borderDashOffset": 0,\n        "borderRadius": 3,\n        "padding": 3,\n        "shadowBlur": 0,\n        "shadowColor": "transparent",\n        "shadowOffsetX": 0,\n        "shadowOffsetY": 0,\n        "textBorderColor": "transparent",\n        "textBorderWidth": 0,\n        "textBorderType": "solid",\n        "textBorderDashOffset": 0,\n        "textBorderRadius": 0,\n        "textShadowBlur": 0,\n        "textShadowColor": "transparent",\n        "textShadowOffsetX": 0,\n        "textShadowOffsetY": 0,\n        "overflow": "truncate"\n      }\n    }\n  }\n}',
    },
    {
        id: 'tooltip-cross',
        category: 'tooltip',
        label: 'tooltip · cross pointer',
        json: '{ "tooltip": { "axisPointer": { "type": "cross" } } }',
    },
    {
        id: 'tooltip-shadowpointer',
        category: 'tooltip',
        label: 'tooltip · shadow pointer',
        json: '{ "tooltip": { "axisPointer": { "type": "shadow" } } }',
    },
    // ── toolbox ───────────────────────────────────────────────────────────
    {
        id: 'toolbox-scaffold',
        category: 'toolbox',
        label: 'toolbox',
        // ADR-0030: complete scaffold of EVERY toolbox subkey — the GUI owns NONE (toolbox is
        // wholly user-owned, so it classifies ✓ effective). Three deliberate deviations for the
        // ioBroker vis context: (1) theme-token COLOUR keys (iconStyle, emphasis, toolbox.borderColor,
        // dataView colours, dataZoom.brushStyle.color) are OMITTED so the live theme (light/dark)
        // drives them; (2) dataView.readOnly is `true` (echarts default false) — vis state is
        // read-only, an editable data view only misleads; (3) magicType & brush ship `show:false`
        // (echarts default true) so the template does not flood the chart with a 6-icon bar.
        // Also omitted as pathologic: per-feature `icon` SVG paths, locale-auto `title`/`lang`
        // (echarts localises), and the dataView `optionToContent`/`contentToOption` functions.
        // Verified against echarts 6.1.0 ToolboxModel + the six features' defaultOption.
        json: '{\n  "toolbox": {\n    "show": true,\n    "orient": "horizontal",\n    "itemSize": 15,\n    "itemGap": 10,\n    "showTitle": true,\n    "right": 0,\n    "top": 0,\n    "zlevel": 0,\n    "z": 2,\n    "silent": false,\n    "backgroundColor": "transparent",\n    "padding": 15,\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "tooltip": { "show": false, "position": "bottom" },\n    "feature": {\n      "saveAsImage": { "show": true, "type": "png", "name": "", "pixelRatio": null, "excludeComponents": ["toolbox"] },\n      "restore": { "show": true },\n      "dataView": { "show": true, "readOnly": true },\n      "dataZoom": { "show": true, "filterMode": "filter" },\n      "magicType": { "show": false, "type": ["line", "bar"] },\n      "brush": { "show": false, "type": ["rect", "polygon", "lineX", "lineY"] }\n    }\n  }\n}',
    },
    // ── radar (radar family only — the classic ADR-0014 presets, regrouped) ──
    {
        id: 'radar-splitarea',
        category: 'radar',
        label: 'radar · splitArea',
        families: ['radar'],
        json: '{ "radar": { "splitArea": { "show": true, "areaStyle": { "color": ["#f5f5f5", "#e8e8e8"] } } } }',
    },
    {
        id: 'radar-axisname',
        category: 'radar',
        label: 'radar · axisName',
        families: ['radar'],
        json: '{ "radar": { "axisName": { "formatter": "{value}", "color": "#666" } } }',
    },
];

/** The catalog entries applicable to a chart family (absent `families` = every family). */
export const chartTemplatesForFamily = (family: EchartsChartFamily): ChartTemplate[] =>
    CHART_TEMPLATES.filter(t => !t.families || t.families.includes(family));
