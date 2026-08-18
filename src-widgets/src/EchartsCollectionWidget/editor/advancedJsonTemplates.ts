/**
 * The chart-level Advanced-JSON template catalog (ADR-0040) — thematic echarts JSON snippets
 * grouped by component, injected into the chart-wide U textarea.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates
 * @remarks
 * Restructured from the complete ADR-0030/0032/0035 scaffolds (one ~40-key block per component)
 * to the Axis-template idiom (ADR-0037): the COMPONENT names the group (Titel / Legende /
 * Tooltip / Toolbox / X-Achse — the user-named groups), and under each sit small one-capability
 * snippets. A complete scaffold flooded the sub-key analysis before the user did anything;
 * a snippet sets exactly the keys of its capability.
 *
 * TEMPLATE RULE (ADR-0036): a template may only set echarts component mainTypes listed in
 * `REPLACE_MERGE` (../replaceMerge) — deleting the template must revert the preview AND the
 * widget, which merge-mode setOption silently refuses to do. `advancedJsonTemplates.test.ts`
 * enforces this mechanically AND audits that no leaf duplicates a builder-emitted (GUI-owned)
 * key; a future template that forgets fails red there.
 *
 * Design rules (inherited from ADR-0037): thematic one-capability snippets, theme-neutral
 * payloads (no light-mode colour hardcodes; neutral grey tints / echarts' own defaults),
 * prefill = capability keys + non-obvious companions. Defaults verified against the locally
 * installed echarts 6.1.0 (`types/dist/echarts.d.ts`), cross-checked with the official docs.
 * Template LABELS are echarts vocabulary shown as-is — only the CATEGORY headers translate.
 */
import type { EchartsChartFamily } from '../../types/field-definitions/echarts-fields';

/** Chart-template grouping (rendered as menu section headers; order = {@link CHART_CATEGORY_ORDER}). */
export type ChartTemplateCategory = 'title' | 'legend' | 'tooltip' | 'toolbox' | 'xAxis' | 'radar';

export const CHART_CATEGORY_ORDER: ChartTemplateCategory[] = [
    'title',
    'legend',
    'tooltip',
    'toolbox',
    'xAxis',
    'radar',
];

/** i18n key per category header. */
export const CHART_CATEGORY_I18N: Record<ChartTemplateCategory, string> = {
    title: 'echarts_tpl_cat_title',
    legend: 'echarts_tpl_cat_legend',
    tooltip: 'echarts_tpl_cat_tooltip',
    toolbox: 'echarts_tpl_cat_toolbox',
    xAxis: 'echarts_tpl_cat_xaxis',
    radar: 'echarts_tpl_cat_radar',
};

export interface ChartTemplate {
    /** Stable id for React keys + the audit test. */
    id: string;
    category: ChartTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Chart-level option JSON (deep-merged into the U text on inject). */
    json: string;
    /** Chart families the entry applies to; absent = every family. */
    families?: EchartsChartFamily[];
}

/**
 * The catalog. GUI-owned leaves avoided per component (audited in the test):
 *  - title: text, placement (left/top + dx/dy), textStyle colour/size/weight/style (ADR-0021/0029).
 *  - legend: show, placement, orient, icon, item sizes/gaps, textStyle colour/size/weight/style,
 *    inactiveColor, panel frame (backgroundColor/borderColor/borderWidth/borderRadius/padding).
 *  - tooltip: show, trigger, formatter, valueFormatter (ADR-0032).
 *  - toolbox: wholly user-owned (nothing avoided).
 *  - xAxis: type ('time' fixed), name + nameLocation/nameGap/nameRotate/nameTextStyle,
 *    axisLabel formatter/rotate/colour, axisLine.lineStyle.colour, axisTick.show,
 *    splitLine.show, splitNumber, minInterval (ADR-0035 + addenda).
 */
export const CHART_TEMPLATES: ChartTemplate[] = [
    // ── title ─────────────────────────────────────────────────────────────
    {
        id: 'title-subtext',
        category: 'title',
        label: 'title · subtext',
        // itemGap separates main title and subtitle (verified: TitleOption.itemGap).
        json: '{ "title": { "subtext": "", "itemGap": 6 } }',
    },
    {
        id: 'title-link',
        category: 'title',
        label: 'title · link',
        // The title text becomes a hyperlink (TitleOption.link/target, verified).
        json: '{ "title": { "link": "https://www.example.com", "target": "blank" } }',
    },
    {
        id: 'title-shadow',
        category: 'title',
        label: 'title · shadow',
        json: '{ "title": { "shadowBlur": 8, "shadowColor": "rgba(0, 0, 0, 0.3)", "shadowOffsetY": 2 } }',
    },
    {
        id: 'title-chip',
        category: 'title',
        label: 'title · chip',
        // Neutral grey tint — the axis-label-chip idiom (ADR-0037), dark-mode safe.
        json: '{ "title": { "backgroundColor": "rgba(127, 127, 127, 0.15)", "borderRadius": 4, "padding": [4, 8] } }',
    },
    {
        id: 'title-border',
        category: 'title',
        label: 'title · border',
        json: '{ "title": { "borderColor": "rgba(127, 127, 127, 0.6)", "borderWidth": 1 } }',
    },
    {
        id: 'title-truncate',
        category: 'title',
        label: 'title · truncate',
        // overflow acts only with an explicit width (TextStyleProps.overflow, verified).
        json: '{ "title": { "textStyle": { "overflow": "truncate", "width": 120 } } }',
    },
    // ── legend ────────────────────────────────────────────────────────────
    {
        id: 'legend-scroll',
        category: 'legend',
        label: 'legend · scroll',
        // Paging legend for many series (type 'scroll', page buttons appear automatically).
        json: '{ "legend": { "type": "scroll" } }',
    },
    {
        id: 'legend-selector',
        category: 'legend',
        label: 'legend · selector',
        // All/inverse buttons (verified: SelectorType 'all' | 'inverse').
        json: '{ "legend": { "selector": ["all", "inverse"] } }',
    },
    {
        id: 'legend-single',
        category: 'legend',
        label: 'legend · single select',
        // Radio behaviour: exactly one series visible.
        json: '{ "legend": { "selectedMode": "single" } }',
    },
    {
        id: 'legend-notoggle',
        category: 'legend',
        label: 'legend · no toggle',
        // Purely decorative legend — clicking cannot hide series.
        json: '{ "legend": { "selectedMode": false } }',
    },
    {
        id: 'legend-alignright',
        category: 'legend',
        label: 'legend · label right',
        // align places the text RIGHT of the symbol (default auto/left).
        json: '{ "legend": { "align": "right" } }',
    },
    {
        id: 'legend-linewidth',
        category: 'legend',
        label: 'legend · line width',
        // Thicker line markers for line-series entries (item sizes stay GUI-owned).
        json: '{ "legend": { "lineStyle": { "width": 3 } } }',
    },
    // ── tooltip ───────────────────────────────────────────────────────────
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
    {
        id: 'tooltip-confine',
        category: 'tooltip',
        label: 'tooltip · confine',
        // Keeps the tooltip inside the (often small) vis widget box (verified: TooltipOption.confine).
        json: '{ "tooltip": { "confine": true } }',
    },
    {
        id: 'tooltip-click',
        category: 'tooltip',
        label: 'tooltip · on click',
        // triggerOn 'click' — no tooltip chasing the pointer (verified value).
        json: '{ "tooltip": { "triggerOn": "click" } }',
    },
    {
        id: 'tooltip-valuesort',
        category: 'tooltip',
        label: 'tooltip · sort by value',
        // TooltipOrderMode 'valueDesc' (verified) — rows sorted, biggest first.
        json: '{ "tooltip": { "order": "valueDesc" } }',
    },
    {
        id: 'tooltip-chip',
        category: 'tooltip',
        label: 'tooltip · panel',
        // echarts' own dark panel, slightly boxed (works in light AND dark charts).
        json: '{ "tooltip": { "backgroundColor": "rgba(50, 50, 50, 0.85)", "borderColor": "rgba(127, 127, 127, 0.4)", "borderRadius": 6, "padding": 8 } }',
    },
    {
        id: 'tooltip-enterable',
        category: 'tooltip',
        label: 'tooltip · enterable',
        // Pointer may move INTO the tooltip (e.g. to copy values).
        json: '{ "tooltip": { "enterable": true, "hideDelay": 300 } }',
    },
    // ── toolbox ───────────────────────────────────────────────────────────
    {
        id: 'toolbox-save',
        category: 'toolbox',
        label: 'toolbox · saveAsImage',
        // pixelRatio 2 → a crisp PNG export.
        json: '{ "toolbox": { "show": true, "feature": { "saveAsImage": { "pixelRatio": 2 } } } }',
    },
    {
        id: 'toolbox-zoom',
        category: 'toolbox',
        label: 'toolbox · dataZoom',
        // Drag-select zoom + zoom-out icon.
        json: '{ "toolbox": { "show": true, "feature": { "dataZoom": {} } } }',
    },
    {
        id: 'toolbox-restore',
        category: 'toolbox',
        label: 'toolbox · restore',
        json: '{ "toolbox": { "show": true, "feature": { "restore": {} } } }',
    },
    {
        id: 'toolbox-dataview',
        category: 'toolbox',
        label: 'toolbox · dataView',
        // readOnly — vis state is read-only, an editable view only misleads (ADR-0030 precedent).
        json: '{ "toolbox": { "show": true, "feature": { "dataView": { "readOnly": true } } } }',
    },
    {
        id: 'toolbox-magictype',
        category: 'toolbox',
        label: 'toolbox · magicType',
        families: ['cartesian'],
        // Live line↔bar switch — cartesian only (a pie/gauge/radar has no line/bar form).
        json: '{ "toolbox": { "show": true, "feature": { "magicType": { "type": ["line", "bar"] } } } }',
    },
    {
        id: 'toolbox-vertical',
        category: 'toolbox',
        label: 'toolbox · vertical',
        json: '{ "toolbox": { "show": true, "orient": "vertical", "left": 0, "top": "middle" } }',
    },
    // ── xAxis (cartesian — the X-Karte owns its presentation keys, ADR-0035) ──
    {
        id: 'xaxis-dashedsplit',
        category: 'xAxis',
        label: 'xAxis · dashed split',
        families: ['cartesian'],
        // splitLine.show is GUI-owned; the line STYLE under it is free.
        json: '{ "xAxis": { "splitLine": { "lineStyle": { "type": "dashed", "width": 1 } } } }',
    },
    {
        id: 'xaxis-minorticks',
        category: 'xAxis',
        label: 'xAxis · minor ticks',
        families: ['cartesian'],
        // Time axis renders minor ticks/split lines (verified: valueAxis minor* applies to time).
        json: '{ "xAxis": { "minorTick": { "show": true, "splitNumber": 3, "length": 3 }, "minorSplitLine": { "show": true } } }',
    },
    {
        id: 'xaxis-splitarea',
        category: 'xAxis',
        label: 'xAxis · splitArea',
        families: ['cartesian'],
        // show alone inherits the theme's band colours (dark-mode safe, ADR-0037 precedent).
        json: '{ "xAxis": { "splitArea": { "show": true } } }',
    },
    {
        id: 'xaxis-hideoverlap',
        category: 'xAxis',
        label: 'xAxis · hideOverlap',
        families: ['cartesian'],
        // Auto-drops overlapping time labels (verified in the label layout pipeline).
        json: '{ "xAxis": { "axisLabel": { "hideOverlap": true } } }',
    },
    {
        id: 'xaxis-arrow',
        category: 'xAxis',
        label: 'xAxis · arrow',
        families: ['cartesian'],
        json: '{ "xAxis": { "axisLine": { "symbol": ["none", "arrow"], "symbolSize": [10, 15] } } }',
    },
    {
        id: 'xaxis-onzero',
        category: 'xAxis',
        label: 'xAxis · free from zero',
        families: ['cartesian'],
        // axisLine.onZero false — the X axis stays at the bottom even for negative values.
        json: '{ "xAxis": { "axisLine": { "onZero": false } } }',
    },
    {
        id: 'xaxis-ticklength',
        category: 'xAxis',
        label: 'xAxis · tick length',
        families: ['cartesian'],
        // axisTick.show is GUI-owned; length/inside are free.
        json: '{ "xAxis": { "axisTick": { "length": 8, "inside": false } } }',
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

/** The catalog filtered to one chart family (absent `families` = applies everywhere). */
export const chartTemplatesForFamily = (family: EchartsChartFamily): ChartTemplate[] =>
    CHART_TEMPLATES.filter(t => !t.families || t.families.includes(family));
