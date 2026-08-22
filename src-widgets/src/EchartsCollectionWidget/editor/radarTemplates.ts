/**
 * Radar template catalog — the Radar section's own raw-JSON templates (ADR-0045, the two former
 * chart-level radar presets migrated unwrapped from their `{ "radar": … }` envelope).
 *
 * @module EchartsCollectionWidget/editor/radarTemplates
 * @remarks
 * Same anatomy as the axis/X/title/legend/tooltip catalogs: group scaffolds per echarts option
 * group, deep-merged UNDER the radar builder's output (GUI wins), audited against the radar
 * GUI-owned set by the guard test (`radarTemplates.test.ts`). GUI-owned leaves (shape /
 * splitNumber / area / indicator — the RadarOptionsSection + RadarIndicators GUI) never appear.
 *
 * Key sets audited against the echarts 6.1.0 source (RadarModel.defaultOption +
 * valueAxisDefault.splitArea via DeepWiki, spec F "Radar-Scaffolds"): `splitArea.areaStyle.color`
 * is the `[backgroundTint, backgroundTransparent]` token pair, `axisName.color` the axisLabel
 * token (neutral70) — shipped as LIGHT doc-literals (ADR-0030 rule: the token values are theme
 * words; our chart applies no echarts builtin dark theme, so the light values are what renders).
 * The `axisName` label-frame keys follow the LabelOption/TextCommon family, completed after the
 * X-splitLine precedent (47a090b).
 */
import { defineCatalog } from './catalog';

/** Radar-template grouping (rendered as menu section headers; order = {@link RADAR_CATEGORY_ORDER}). */
export type RadarTemplateCategory = 'splitArea' | 'axisName';

export const RADAR_CATEGORY_ORDER: RadarTemplateCategory[] = ['splitArea', 'axisName'];

/** i18n key per category header. */
export const RADAR_CATEGORY_I18N: Record<RadarTemplateCategory, string> = {
    splitArea: 'echarts_rtpl_cat_splitarea',
    axisName: 'echarts_rtpl_cat_axisname',
};

export interface RadarTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: RadarTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Radar-component option JSON object (deep-merged into the section's raw). */
    json: string;
}

export const RADAR_TEMPLATES: RadarTemplate[] = [
    // ── splitArea — the alternating ring bands ────────────────────────────
    {
        id: 'radar-splitarea',
        category: 'splitArea',
        label: 'splitArea',
        // Full scaffold (show default true + the token band pair + the areaStyle shadow* keys):
        // the colour values are the echarts LIGHT tokens (see module remarks) — editing them to
        // hand-picked bands is the point of the scaffold.
        json: '{ "splitArea": { "show": true, "areaStyle": { "color": ["rgba(234,237,245,0.5)", "rgba(255,255,255,0)"], "opacity": 1, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 } } }',
    },
    // ── axisName — the indicator labels ───────────────────────────────────
    {
        id: 'radar-axisname',
        category: 'axisName',
        label: 'axisName',
        // show (true) + the axisLabel token colour + formatter (default null — "{value}" shown as
        // the classic example) + the LabelOption/TextCommon frame family.
        json: '{ "axisName": { "show": true, "formatter": "{value}", "color": "#54555a", "fontFamily": "sans-serif", "fontSize": 12, "fontStyle": "normal", "fontWeight": "normal", "lineHeight": 14, "backgroundColor": "transparent", "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 0, "padding": 0, "width": 0, "height": 0, "overflow": "none", "ellipsis": "…", "silent": false } }',
    },
];

/** The Radar section's catalog bundle — structural, satisfies the RawJsonSection catalog prop. */
export const RADAR_CATALOG = defineCatalog({
    templates: RADAR_TEMPLATES,
    categoryOrder: RADAR_CATEGORY_ORDER,
    categoryI18n: RADAR_CATEGORY_I18N,
});
