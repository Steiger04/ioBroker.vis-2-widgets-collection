/**
 * The chart-level Advanced-JSON template catalog (ADR-0040/0043, slimmed by ADR-0044) — the
 * chart-wide U textarea's design library for the components WITHOUT an own section.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates
 * @remarks
 * Since ADR-0044 the components with their own configurator section carry their raw THERE:
 * title/legend/tooltip scaffolds moved to `titleTemplates.ts` / `legendTemplates.ts` /
 * `tooltipTemplates.ts` (option-group catalogs, DeepWiki-audited, fontFamily included), and the
 * U hard-ignores those three components (`mergeOptionForEcharts` strips them). What remains
 * here: the complete `toolbox` basis scaffold (ADR-0030/0043, wholly user-owned) and the radar
 * presets. The ADR-0040 `xAxis` category retired earlier (ADR-0037 addendum — the X-Karte has
 * its own raw + catalog); former ids drop silently at load (ADR-0043 pattern).
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
 * Defaults verified against the locally installed echarts 6.1.0 (`types/dist/echarts.d.ts` and
 * ToolboxModel defaultOption), cross-checked with the official docs. Template LABELS
 * are echarts vocabulary shown as-is — only the CATEGORY headers translate.
 */
import type { EchartsChartFamily } from '../../types/field-definitions/echarts-fields';

/** Chart-template grouping (rendered as menu section headers; order = {@link CHART_CATEGORY_ORDER}). */
export type ChartTemplateCategory = 'toolbox' | 'radar';

export const CHART_CATEGORY_ORDER: ChartTemplateCategory[] = ['toolbox', 'radar'];

/** i18n key per category header. */
export const CHART_CATEGORY_I18N: Record<ChartTemplateCategory, string> = {
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
