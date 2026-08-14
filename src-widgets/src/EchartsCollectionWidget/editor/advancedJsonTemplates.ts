/**
 * The Advanced-JSON one-click template catalog — extracted from AdvancedJsonSection so the
 * ADR-0036 guard test can audit every template without importing MUI (the xAxisScaffold precedent,
 * ADR-0035, applied to the whole catalog).
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates
 * @remarks
 * TEMPLATE RULE (ADR-0036): a template may only set echarts component mainTypes that are listed in
 * `REPLACE_MERGE` (../replaceMerge) — deleting the template must revert the preview AND the widget,
 * which merge-mode setOption silently refuses to do. `advancedJsonTemplates.test.ts` enforces this
 * mechanically; a future template that forgets fails red there.
 */
import { X_AXIS_SCAFFOLD_JSON } from './xAxisScaffold';
import type { EchartsChartFamily } from '../../types/field-definitions/echarts-fields';

/** One one-click template: an i18n label + the JSON text merged into the U textarea. */
export interface Template {
    label: string;
    json: string;
}

// ── Family-agnostic templates (chart-level GUI-uncovered keys → clean ✓) ──
export const TPL_ALL: Template[] = [
    {
        // ADR-0030: complete scaffold of EVERY title subkey the GUI does NOT own (text/placement/
        // textStyle colour-size-weight-style are GUI-owned → omitted), pre-filled with the echarts
        // default (a best-effort literal where the real default is a theme token / 'auto' / undefined).
        label: 'echarts_tpl_title',
        json: '{\n  "title": {\n    "show": true,\n    "link": "",\n    "target": "blank",\n    "subtext": "",\n    "sublink": "",\n    "subtarget": "blank",\n    "triggerEvent": false,\n    "textVerticalAlign": "auto",\n    "zlevel": 0,\n    "z": 2,\n    "itemGap": 10,\n    "padding": 5,\n    "backgroundColor": "transparent",\n    "borderColor": "#ccc",\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "silent": false,\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 18,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "none"\n    },\n    "subtextStyle": {\n      "color": "#aaa",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 12,\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 12,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    }\n  }\n}',
    },
    {
        // ADR-0030: complete scaffold of EVERY legend subkey the GUI does NOT own (show/data/
        // placement/orient/items/frame + textStyle colour-size-weight-style are GUI-owned → omitted).
        label: 'echarts_tpl_legend',
        json: '{\n  "legend": {\n    "type": "plain",\n    "zlevel": 0,\n    "z": 2,\n    "align": "auto",\n    "width": "auto",\n    "height": "auto",\n    "selectedMode": true,\n    "selected": {},\n    "formatter": null,\n    "symbolRotate": 0,\n    "inactiveBorderColor": "#ccc",\n    "inactiveBorderWidth": "auto",\n    "borderType": "solid",\n    "borderDashOffset": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "scrollDataIndex": 0,\n    "pageButtonItemGap": 5,\n    "pageButtonGap": null,\n    "pageButtonPosition": "end",\n    "pageFormatter": "{current}/{total}",\n    "pageIcons": {\n      "horizontal": ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],\n      "vertical": ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]\n    },\n    "pageIconColor": "#2f4554",\n    "pageIconInactiveColor": "#aaa",\n    "pageIconSize": 15,\n    "animation": true,\n    "animationDurationUpdate": 800,\n    "selector": false,\n    "selectorPosition": "auto",\n    "selectorItemGap": 7,\n    "selectorButtonGap": 10,\n    "silent": false,\n    "itemStyle": {\n      "color": "inherit",\n      "opacity": "inherit",\n      "borderColor": "inherit",\n      "borderWidth": "auto",\n      "borderType": "inherit",\n      "borderDashOffset": "inherit",\n      "borderCap": "inherit",\n      "borderJoin": "inherit",\n      "borderMiterLimit": "inherit"\n    },\n    "lineStyle": {\n      "width": "auto",\n      "color": "inherit",\n      "opacity": "inherit",\n      "type": "inherit",\n      "cap": "inherit",\n      "join": "inherit",\n      "dashOffset": "inherit",\n      "miterLimit": "inherit",\n      "inactiveColor": "#ccc",\n      "inactiveWidth": 2\n    },\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 14,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    },\n    "selectorLabel": {\n      "show": true,\n      "color": "#666",\n      "fontSize": 12,\n      "borderColor": "#ccc",\n      "borderWidth": 1,\n      "borderRadius": 10,\n      "padding": [3, 5, 3, 5]\n    },\n    "pageTextStyle": {\n      "color": "#666"\n    },\n    "emphasis": {\n      "selectorLabel": {\n        "show": true,\n        "color": "#666"\n      }\n    },\n    "tooltip": {\n      "show": false\n    }\n  }\n}',
    },
    {
        // ADR-0032: complete scaffold of EVERY tooltip subkey the GUI does NOT own (trigger/formatter/
        // valueFormatter/show are GUI-owned → omitted), pre-filled with the echarts default (best-effort
        // literal where the real default is a theme token / 'auto' / undefined). axisPointer is filled to
        // its direct keys + a full `label` (the crosshair case); the line/cross/shadow/handle style sub-
        // trees and fontFamily are omitted. Verified against TooltipModel / CommonAxisPointerOption.
        label: 'echarts_tpl_tooltip',
        json: '{\n  "tooltip": {\n    "showContent": true,\n    "triggerOn": "mousemove|click",\n    "alwaysShowContent": false,\n    "showDelay": 0,\n    "hideDelay": 100,\n    "enterable": false,\n    "confine": false,\n    "renderMode": "auto",\n    "transitionDuration": 0.4,\n    "displayTransition": true,\n    "backgroundColor": "rgba(50, 50, 50, 0.7)",\n    "borderColor": "#333",\n    "borderWidth": 1,\n    "borderRadius": 4,\n    "padding": 5,\n    "extraCssText": "",\n    "shadowBlur": 10,\n    "shadowColor": "rgba(0, 0, 0, 0.2)",\n    "shadowOffsetX": 1,\n    "shadowOffsetY": 2,\n    "textStyle": {\n      "color": "#fff",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 14,\n      "align": "left",\n      "verticalAlign": "top",\n      "lineHeight": 18,\n      "backgroundColor": "transparent",\n      "borderColor": "#333",\n      "borderWidth": 0,\n      "borderType": "solid",\n      "borderDashOffset": 0,\n      "borderRadius": 0,\n      "padding": 0,\n      "shadowBlur": 0,\n      "shadowColor": "transparent",\n      "shadowOffsetX": 0,\n      "shadowOffsetY": 0,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textBorderDashOffset": 0,\n      "textBorderRadius": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "break"\n    },\n    "axisPointer": {\n      "type": "line",\n      "axis": "auto",\n      "snap": false,\n      "triggerOn": "mousemove|click",\n      "triggerTooltip": true,\n      "triggerEmphasis": true,\n      "value": null,\n      "status": "hide",\n      "animation": "auto",\n      "animationDurationUpdate": 200,\n      "animationEasingUpdate": "cubicOut",\n      "label": {\n        "show": true,\n        "precision": "auto",\n        "formatter": null,\n        "margin": 3,\n        "color": "#fff",\n        "fontStyle": "normal",\n        "fontWeight": "normal",\n        "fontSize": 12,\n        "lineHeight": 12,\n        "align": "left",\n        "verticalAlign": "top",\n        "backgroundColor": "auto",\n        "borderColor": "#333",\n        "borderWidth": 0,\n        "borderType": "solid",\n        "borderDashOffset": 0,\n        "borderRadius": 3,\n        "padding": 3,\n        "shadowBlur": 0,\n        "shadowColor": "transparent",\n        "shadowOffsetX": 0,\n        "shadowOffsetY": 0,\n        "textBorderColor": "transparent",\n        "textBorderWidth": 0,\n        "textBorderType": "solid",\n        "textBorderDashOffset": 0,\n        "textBorderRadius": 0,\n        "textShadowBlur": 0,\n        "textShadowColor": "transparent",\n        "textShadowOffsetX": 0,\n        "textShadowOffsetY": 0,\n        "overflow": "truncate"\n      }\n    }\n  }\n}',
    },
    {
        // ADR-0030: complete scaffold of EVERY toolbox subkey the GUI does NOT own — the GUI owns NONE
        // (toolbox is wholly user-owned, so it classifies ✓ effective). Pre-filled with the echarts default
        // (best-effort literal where the real default is a theme token / 'auto' / undefined). Three
        // deliberate deviations for the ioBroker vis context: (1) theme-token COLOUR keys (iconStyle,
        // emphasis, toolbox.borderColor, dataView colours, dataZoom.brushStyle.color) are OMITTED so the
        // live theme (light/dark) drives them; (2) dataView.readOnly is `true` (echarts default false) —
        // vis state is read-only, an editable data view only misleads; (3) magicType & brush ship
        // `show:false` (echarts default true) so the template does not flood the chart with a 6-icon bar.
        // Also omitted as pathologic: per-feature `icon` SVG paths, locale-auto `title`/`lang` (echarts
        // localises), and the dataView `optionToContent`/`contentToOption` functions. Verified against
        // echarts 6.1.0 ToolboxModel + the six features' defaultOption.
        label: 'echarts_tpl_toolbox',
        json: '{\n  "toolbox": {\n    "show": true,\n    "orient": "horizontal",\n    "itemSize": 15,\n    "itemGap": 10,\n    "showTitle": true,\n    "right": 0,\n    "top": 0,\n    "zlevel": 0,\n    "z": 2,\n    "silent": false,\n    "backgroundColor": "transparent",\n    "padding": 15,\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "tooltip": { "show": false, "position": "bottom" },\n    "feature": {\n      "saveAsImage": { "show": true, "type": "png", "name": "", "pixelRatio": null, "excludeComponents": ["toolbox"] },\n      "restore": { "show": true },\n      "dataView": { "show": true, "readOnly": true },\n      "dataZoom": { "show": true, "filterMode": "filter" },\n      "magicType": { "show": false, "type": ["line", "bar"] },\n      "brush": { "show": false, "type": ["rect", "polygon", "lineX", "lineY"] }\n    }\n  }\n}',
    },
    {
        // ADR-0035: lives in the pure `editor/xAxisScaffold.ts` module (testable without MUI).
        label: 'echarts_tpl_xaxis',
        json: X_AXIS_SCAFFOLD_JSON,
    },
];

// ── Family-specific templates (ADR-0017: chart-wide/component keys only — the series-riding
//    presets moved to the per-card Series raw catalogs in seriesTemplates.ts). ──
export const TEMPLATES_BY_FAMILY: Record<EchartsChartFamily, Template[]> = {
    cartesian: [],
    pie: [],
    gauge: [],
    radar: [
        {
            label: 'echarts_tpl_radar_splitarea',
            json: '{\n  "radar": { "splitArea": { "show": true, "areaStyle": { "color": ["#f5f5f5", "#e8e8e8"] } } }\n}',
        },
        {
            label: 'echarts_tpl_radar_axisname',
            json: '{\n  "radar": { "axisName": { "formatter": "{value}", "color": "#666" } }\n}',
        },
    ],
};
