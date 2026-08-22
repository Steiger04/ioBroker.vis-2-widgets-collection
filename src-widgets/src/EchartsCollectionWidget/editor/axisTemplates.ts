/**
 * Per-axis template catalog (ADR-0037; re-categorised to echarts Option groups by ADR-0043) —
 * collision-safe yAxis JSON templates that inject GUI-uncovered echarts keys into an Axis card's
 * raw. The menu teaches the yAxis option space: one category per option group.
 *
 * @module EchartsCollectionWidget/editor/axisTemplates
 * @remarks
 * Each entry is a JSON object meant to go INSIDE one yAxis (deep-merged UNDER the GUI-authored
 * entry via `applyRawOverride`, so the card wins collisions). Every entry is AUDITED against
 * `buildYAxisEntry` (optionBuilders/cartesian.ts) so no leaf duplicates a builder-emitted one —
 * pinned by the guard test in `axisTemplates.test.ts` against the FULLEST card state (a future
 * catalog entry that touches a managed leaf fails red). Unlike the series catalog (ADR-0043
 * conditional-leaf allow-list) the axis audit has NO allow-list: ADR-0037's stricter rule —
 * every template must be wholly effective under ANY card state — is kept.
 *
 * Forms (ADR-0043): a **group scaffold** per option group (complete, GUI-owned leaves omitted —
 * always-owned: type/position/offset/alignTicks/splitLine.show/axisTick.show/nameLocation/
 * nameGap; conditionally-owned: name, min/max/scale/splitNumber/minInterval/nameRotate,
 * axisLabel.formatter, axisLabel.color/axisLine.show/axisLine.lineStyle.color/
 * nameTextStyle.color when an axis colour is set) plus **value variants** (chip label, custom
 * tick values, truncated labels) and scalar **solos** (scale group). Theme-neutral payloads
 * (ADR-0037): no light-mode colour hardcodes — `splitArea:{show:true}` inherits the theme's
 * band colours; the label chip uses a neutral grey tint.
 *
 * Defaults verified against the locally installed echarts 6.1.0 SOURCE (`lib/coord/axisDefault.js`,
 * `AxisBuilder.js`, `axisNiceTicks.js`, `Log.js`), not the v5-lagging public docs. Template LABELS
 * are shown as-is (echarts option vocabulary, universally English) — only the CATEGORY headers
 * are translated. Distinct from the per-series Series templates (seriesTemplates.ts) and the
 * component-section catalogs (title/legend/tooltip/radar templates).
 */
/** Axis-template grouping (rendered as menu section headers; order = {@link AXIS_CATEGORY_ORDER}). */
export type AxisTemplateCategory =
    | 'name'
    | 'axisLine'
    | 'axisTick'
    | 'minorTick'
    | 'axisLabel'
    | 'splitLine'
    | 'minorSplitLine'
    | 'splitArea'
    | 'axisPointer'
    | 'scale';

export const AXIS_CATEGORY_ORDER: AxisTemplateCategory[] = [
    'name',
    'axisLine',
    'axisTick',
    'minorTick',
    'axisLabel',
    'splitLine',
    'minorSplitLine',
    'splitArea',
    'axisPointer',
    'scale',
];

/** i18n key per category header. */
export const AXIS_CATEGORY_I18N: Record<AxisTemplateCategory, string> = {
    name: 'echarts_atpl_cat_name',
    axisLine: 'echarts_atpl_cat_axisline',
    axisTick: 'echarts_atpl_cat_axistick',
    minorTick: 'echarts_atpl_cat_minortick',
    axisLabel: 'echarts_atpl_cat_axislabel',
    splitLine: 'echarts_atpl_cat_splitline',
    minorSplitLine: 'echarts_atpl_cat_minorsplitline',
    splitArea: 'echarts_atpl_cat_splitarea',
    axisPointer: 'echarts_atpl_cat_axispointer',
    scale: 'echarts_atpl_cat_scale',
};

export interface AxisTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: AxisTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Single-yAxis JSON object (deep-merged into the card's raw). */
    json: string;
}

/**
 * The bundled catalog triple a raw-override host hands its section (ADR-0037 addendum): one
 * object instead of three travelling props — the Y cards pass {@link AXIS_CATALOG}, the X-Karte
 * its own bundle over the shared category chrome.
 */
export interface AxisTemplateCatalog {
    templates: readonly AxisTemplate[];
    categoryOrder: readonly AxisTemplateCategory[];
    categoryI18n: Record<AxisTemplateCategory, string>;
}

export const AXIS_TEMPLATES: AxisTemplate[] = [
    // ── name — the axis-title group ─────────────────────────────────────
    {
        id: 'nametextstyle',
        category: 'name',
        label: 'nameTextStyle',
        // `color` omitted: conditionally card-owned when an axis colour is set.
        json: '{ "nameTextStyle": { "fontStyle": "normal", "fontWeight": "normal", "fontSize": 12, "align": "left", "padding": 0, "backgroundColor": "transparent" } }',
    },
    // ── axisLine ────────────────────────────────────────────────────────
    {
        id: 'axisline',
        category: 'axisLine',
        label: 'axisLine',
        // `show` + `lineStyle.color` omitted (conditionally card-owned with an axis colour);
        // `lineStyle.width` is always card-owned. Arrow end symbols are free.
        json: '{ "axisLine": { "lineStyle": { "width": 1, "type": "solid", "opacity": 1, "dashOffset": 0 }, "symbol": ["none", "arrow"], "symbolSize": [10, 15] } }',
    },
    // ── axisTick ────────────────────────────────────────────────────────
    {
        id: 'axistick',
        category: 'axisTick',
        label: 'axisTick',
        // `show` omitted (always card-owned).
        json: '{ "axisTick": { "length": 5, "inside": false, "splitNumber": 5, "lineStyle": { "width": 1, "type": "solid", "opacity": 1 } } }',
    },
    // ── minorTick ───────────────────────────────────────────────────────
    {
        id: 'minortick',
        category: 'minorTick',
        label: 'minorTick',
        // show:false default → `true` is the lever; splitNumber:5 because tick density is
        // splitNumber × minorTick.splitNumber (the non-obvious companion, ADR-0037 prefill rule).
        json: '{ "minorTick": { "show": true, "splitNumber": 5, "length": 3 } }',
    },
    // ── axisLabel ───────────────────────────────────────────────────────
    {
        id: 'axislabel',
        category: 'axisLabel',
        label: 'axisLabel',
        // `color`/`formatter` omitted (conditionally card-owned with colour/format); rotate is
        // the GUI label-rotation slider on the X-Karte but free on Y (only listed managed for xAxis).
        json: '{ "axisLabel": { "show": true, "inside": false, "rotate": 0, "margin": 8, "hideOverlap": true, "fontStyle": "normal", "fontWeight": "normal", "fontSize": 12 } }',
    },
    {
        id: 'axislabel-chip',
        category: 'axisLabel',
        label: 'axisLabel · chip',
        // Neutral grey tint — dark-mode safe (ADR-0037 theme-neutrality rule).
        json: '{ "axisLabel": { "backgroundColor": "rgba(127,127,127,0.15)", "padding": [2, 4], "borderRadius": 2 } }',
    },
    {
        id: 'axislabel-overflow',
        category: 'axisLabel',
        label: 'axisLabel · overflow',
        // overflow acts only with an explicit width (TextStyleProps.overflow, verified).
        json: '{ "axisLabel": { "width": 56, "overflow": "truncate" } }',
    },
    {
        id: 'axislabel-customvalues',
        category: 'axisLabel',
        label: 'axisLabel · customValues',
        json: '{ "axisLabel": { "customValues": [0, 20, 40, 60, 80, 100] } }',
    },
    // ── splitLine ───────────────────────────────────────────────────────
    {
        id: 'splitline',
        category: 'splitLine',
        label: 'splitLine',
        // `show` omitted (always card-owned); dashed as the visible classic value.
        json: '{ "splitLine": { "lineStyle": { "type": "dashed", "width": 1, "opacity": 1, "dashOffset": 0 } } }',
    },
    // ── minorSplitLine ──────────────────────────────────────────────────
    {
        id: 'minorsplitline',
        category: 'minorSplitLine',
        label: 'minorSplitLine',
        json: '{ "minorSplitLine": { "show": true } }',
    },
    // ── splitArea ───────────────────────────────────────────────────────
    {
        id: 'splitarea',
        category: 'splitArea',
        label: 'splitArea',
        // show alone inherits the theme's band colours (dark-mode safe, ADR-0037).
        json: '{ "splitArea": { "show": true, "interval": "auto" } }',
    },
    // ── axisPointer ─────────────────────────────────────────────────────
    {
        id: 'axispointer',
        category: 'axisPointer',
        label: 'axisPointer',
        // Per-axis pointers have no 'cross' (downgraded 'line') and label.show defaults FALSE —
        // the label is the whole point (ADR-0037 source findings).
        json: '{ "axisPointer": { "show": true, "snap": false, "triggerTooltip": true, "type": "line", "label": { "show": true, "precision": 0, "formatter": "{value}", "margin": 3, "color": "#fff", "fontSize": 12 } } }',
    },
    // ── scale (scalar solos — no object group) ──────────────────────────
    {
        id: 'logbase',
        category: 'scale',
        label: 'logBase',
        json: '{ "logBase": 2 }',
    },
    {
        id: 'boundarygap',
        category: 'scale',
        label: 'boundaryGap · %',
        json: '{ "boundaryGap": ["5%", "5%"] }',
    },
    {
        id: 'maxinterval',
        category: 'scale',
        label: 'maxInterval',
        json: '{ "maxInterval": 25 }',
    },
    {
        id: 'inverse',
        category: 'scale',
        label: 'inverse',
        json: '{ "inverse": true }',
    },
];

/** The Y cards' catalog bundle (declared after its parts — const initialisers are not hoisted). */
export const AXIS_CATALOG: AxisTemplateCatalog = {
    templates: AXIS_TEMPLATES,
    categoryOrder: AXIS_CATEGORY_ORDER,
    categoryI18n: AXIS_CATEGORY_I18N,
};
