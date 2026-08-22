/**
 * Title template catalog — the Title section's own raw-JSON templates (the ADR-0044 move: the
 * title scaffolds leave the chart-level U and live where the title is configured).
 *
 * @module EchartsCollectionWidget/editor/titleTemplates
 * @remarks
 * Same anatomy as the axis/X catalogs: one group scaffold per echarts option group of the
 * component, every payload deep-merged UNDER `buildTitleOption`'s output (the GUI wins every
 * collision), every leaf audited against the title's GUI-owned set — pinned by the guard test
 * (a future entry touching a managed leaf fails red). GUI-owned leaves omitted: text, placement
 * (left/top/right/bottom + dx/dy) and textStyle colour/size/weight/style (ADR-0021/0029).
 *
 * Key set audited against the echarts 6.1.0 source (TitleModel.defaultOption via DeepWiki):
 * gaps found and closed vs the old chart-level scaffold — `fontFamily` (user decision 2026-08-22,
 * reversing the ADR-0032 omission), the inner frame keys of textStyle/subtextStyle
 * (backgroundColor, padding, border and shadow keys), width/height, and the behaviour keys
 * (link/target/triggerEvent/silent/z/show). Deliberately still out (pathologic for a vis
 * dashboard): `rich` (needs a formatter to pair), `decoration` (html renderMode only).
 */
import { defineCatalog } from './catalog';

/** Title-template grouping (rendered as menu section headers; order = {@link TITLE_CATEGORY_ORDER}). */
export type TitleTemplateCategory = 'textStyle' | 'subtextStyle' | 'frame' | 'behavior';

export const TITLE_CATEGORY_ORDER: TitleTemplateCategory[] = ['textStyle', 'subtextStyle', 'frame', 'behavior'];

/** i18n key per category header. */
export const TITLE_CATEGORY_I18N: Record<TitleTemplateCategory, string> = {
    textStyle: 'echarts_ttpl_cat_textstyle',
    subtextStyle: 'echarts_ttpl_cat_subtextstyle',
    frame: 'echarts_ttpl_cat_frame',
    behavior: 'echarts_ttpl_cat_behavior',
};

export interface TitleTemplate {
    /** Stable catalog id (the persisted activation references it). */
    id: string;
    category: TitleTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Title-option JSON object (deep-merged into the section's raw). */
    json: string;
}

export const TITLE_TEMPLATES: TitleTemplate[] = [
    // ── textStyle — the main title's font/block group (colour/size/weight/style are GUI) ──
    {
        id: 'textstyle',
        category: 'textStyle',
        label: 'textStyle',
        json: '{ "textStyle": { "fontFamily": "sans-serif", "align": "left", "verticalAlign": "auto", "lineHeight": 18, "width": 0, "height": 0, "overflow": "none", "backgroundColor": "transparent", "padding": 0, "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0, "textBorderColor": "transparent", "textBorderWidth": 0, "textBorderType": "solid", "textBorderDashOffset": 0, "textBorderRadius": 0, "textShadowBlur": 0, "textShadowColor": "transparent", "textShadowOffsetX": 0, "textShadowOffsetY": 0 } }',
    },
    // ── subtextStyle — the subtitle group incl. its free text keys ───────
    {
        id: 'subtext',
        category: 'subtextStyle',
        label: 'subtext + style',
        // subtext/sublink/subtarget are wholly free (the GUI has no subtitle field); the
        // subtextStyle colour (#aaa doc-literal, ADR-0030 rule) is free too.
        json: '{ "subtext": "", "sublink": "", "subtarget": "blank", "subtextStyle": { "color": "#aaa", "fontFamily": "sans-serif", "fontStyle": "normal", "fontWeight": "normal", "fontSize": 12, "align": "left", "verticalAlign": "auto", "lineHeight": 12, "width": 0, "height": 0, "overflow": "none", "backgroundColor": "transparent", "padding": 0, "borderColor": "#333", "borderWidth": 0, "borderType": "solid", "borderDashOffset": 0, "borderRadius": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0, "textBorderColor": "transparent", "textBorderWidth": 0, "textBorderType": "solid", "textBorderDashOffset": 0, "textBorderRadius": 0, "textShadowBlur": 0, "textShadowColor": "transparent", "textShadowOffsetX": 0, "textShadowOffsetY": 0 } }',
    },
    // ── frame — the title block's panel (padding/border/shadow; colour keys are doc-literals) ──
    {
        id: 'frame',
        category: 'frame',
        label: 'frame',
        json: '{ "itemGap": 10, "padding": 5, "backgroundColor": "transparent", "borderColor": "#ccc", "borderWidth": 0, "borderType": "solid", "borderRadius": 0, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 }',
    },
    // ── behavior ─────────────────────────────────────────────────────────
    {
        id: 'behavior',
        category: 'behavior',
        label: 'behavior',
        // Hyperlink + event wiring + z-order; `show` is free (the GUI never emits it).
        json: '{ "show": true, "link": "", "target": "blank", "triggerEvent": false, "silent": false, "zlevel": 0, "z": 6 }',
    },
];

/** The Title section's catalog bundle — structural, satisfies the RawJsonSection catalog prop. */
export const TITLE_CATALOG = defineCatalog({
    templates: TITLE_TEMPLATES,
    categoryOrder: TITLE_CATEGORY_ORDER,
    categoryI18n: TITLE_CATEGORY_I18N,
});
