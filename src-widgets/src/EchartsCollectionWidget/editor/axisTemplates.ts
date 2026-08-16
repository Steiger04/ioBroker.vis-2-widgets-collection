/**
 * Per-axis template catalog (ADR-0037) — collision-safe yAxis JSON snippets that inject
 * GUI-uncovered echarts keys into an Axis card's raw.
 *
 * @module EchartsCollectionWidget/editor/axisTemplates
 * @remarks
 * Each entry is a JSON object meant to go INSIDE one yAxis (deep-merged UNDER the GUI-authored
 * entry via `applyRawOverride`, so the card wins collisions). Every entry is AUDITED against
 * `buildYAxisEntry` (optionBuilders/cartesian.ts) so no leaf duplicates a builder-emitted one —
 * pinned by the guard test in `axisTemplates.test.ts` (a future catalog entry that touches a
 * managed leaf fails red).
 *
 * Design rules (ADR-0037, locked 2026-08-16):
 *  - **Thematic snippets**: one capability per entry (fonts, minor ticks, splitArea bands, label
 *    overflow, logBase, …) — no complete ~40-key scaffold, which would flood the state-aware
 *    analysis red before the user did anything.
 *  - **Theme-neutral payloads**: no light-mode colour hardcodes. `splitArea:{show:true}` inherits
 *    the theme's band colours (echarts dark theme overrides them); the label chip uses a neutral
 *    grey tint. Precedent: the legend.inactiveColor dark-mode fix (ADR-0027).
 *  - **Prefill = capability keys + non-obvious companions**: `minorTick` carries `splitNumber:5`
 *    because tick density is `splitNumber × minorTick.splitNumber` (echarts Axis.getMinorTicksCoords);
 *    keys whose default already delivers the capability are omitted.
 *  - Defaults verified against the locally installed echarts 6.1.0 SOURCE (`lib/coord/axisDefault.js`,
 *    `AxisBuilder.js`, `axisNiceTicks.js`, `Log.js`), not the v5-lagging public docs.
 *
 * Template LABELS are shown as-is (echarts option vocabulary, universally English) — only the
 * CATEGORY headers are translated. Distinct from the chart-wide Template snippets
 * (advancedJsonTemplates.ts) and the per-series Series templates (seriesTemplates.ts).
 */
import { deepMerge } from '../utils/mergeOption';

/** Axis-template grouping (rendered as menu section headers; order = {@link AXIS_CATEGORY_ORDER}). */
export type AxisTemplateCategory = 'fonts' | 'grid' | 'labels' | 'scale' | 'style' | 'interaction';

export const AXIS_CATEGORY_ORDER: AxisTemplateCategory[] = ['fonts', 'grid', 'labels', 'scale', 'style', 'interaction'];

/** i18n key per category header. */
export const AXIS_CATEGORY_I18N: Record<AxisTemplateCategory, string> = {
    fonts: 'echarts_atpl_cat_fonts',
    grid: 'echarts_atpl_cat_grid',
    labels: 'echarts_atpl_cat_labels',
    scale: 'echarts_atpl_cat_scale',
    style: 'echarts_atpl_cat_style',
    interaction: 'echarts_atpl_cat_interaction',
};

export interface AxisTemplate {
    /** Stable id for React keys + the audit test. */
    id: string;
    category: AxisTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Single-yAxis JSON object (deep-merged into the card's raw). */
    json: string;
}

/**
 * The 20 locked snippets (ADR-0037 spec table). echarts 6.1.0 source facts behind the prefills:
 *  - `axisLabel` font keys are unset by default → global textStyle fallbacks (sans-serif/12/normal).
 *  - `minorTick` default show:false, splitNumber 5 (guarded (0,100)), length 3; `minorSplitLine`
 *    has its OWN show-gate and renders standalone off the minor-tick coords.
 *  - `splitArea` default = 2 theme band colours; `{"splitArea":{"show":true}}` alone is dark-mode-correct.
 *  - `axisLabel.hideOverlap` default OFF (AxisBuilder applies it only when truthy).
 *  - `overflow` acts only with an explicit `width`; `showMinLabel`/`showMaxLabel` default null (auto).
 *  - `logBase` default 10; fractional bases silently INVERT the axis (keep an integer > 1); needs
 *    the card's log switch (the builder derives `type:'log'` from it).
 *  - `boundaryGap` percent pairs DO apply to value axes, but die on any side with a fixed min/max.
 *  - `maxInterval` clamps the auto interval from above (value/time only; dead on log).
 *  - `axisLine.symbol` default ['none','none']; `axisPointer` per axis has NO 'cross' (downgraded
 *    to 'line') and a tooltip-triggered pointer defaults `label.show:false` — the snippet's point.
 */
export const AXIS_TEMPLATES: AxisTemplate[] = [
    // ── fonts ──────────────────────────────────────────────────────────
    {
        id: 'axislabel-font',
        category: 'fonts',
        label: 'axisLabel · font',
        json: '{ "axisLabel": { "fontFamily": "sans-serif", "fontSize": 12, "fontWeight": "normal", "fontStyle": "normal" } }',
    },
    {
        id: 'nametextstyle-font',
        category: 'fonts',
        label: 'nameTextStyle · font',
        json: '{ "nameTextStyle": { "fontFamily": "sans-serif", "fontSize": 12, "fontWeight": "normal", "fontStyle": "normal" } }',
    },
    {
        id: 'axislabel-chip',
        category: 'fonts',
        label: 'axisLabel · chip',
        json: '{ "axisLabel": { "backgroundColor": "rgba(127,127,127,0.15)", "padding": [2, 4], "borderRadius": 2 } }',
    },
    // ── grid ────────────────────────────────────────────────────────────
    {
        id: 'minortick',
        category: 'grid',
        label: 'minorTick',
        json: '{ "minorTick": { "show": true, "splitNumber": 5, "length": 3 } }',
    },
    {
        id: 'minorsplitline',
        category: 'grid',
        label: 'minorSplitLine',
        json: '{ "minorSplitLine": { "show": true } }',
    },
    {
        id: 'splitline-dashed',
        category: 'grid',
        label: 'splitLine · dashed',
        json: '{ "splitLine": { "lineStyle": { "type": "dashed", "width": 1 } } }',
    },
    {
        id: 'splitarea',
        category: 'grid',
        label: 'splitArea',
        json: '{ "splitArea": { "show": true } }',
    },
    // ── labels ───────────────────────────────────────────────────────────────────
    {
        id: 'axislabel-hideoverlap',
        category: 'labels',
        label: 'axisLabel · hideOverlap',
        json: '{ "axisLabel": { "hideOverlap": true } }',
    },
    {
        id: 'axislabel-overflow',
        category: 'labels',
        label: 'axisLabel · overflow',
        json: '{ "axisLabel": { "width": 56, "overflow": "truncate" } }',
    },
    {
        id: 'axislabel-edge',
        category: 'labels',
        label: 'axisLabel · edge labels',
        json: '{ "axisLabel": { "showMinLabel": false, "showMaxLabel": false } }',
    },
    {
        id: 'axislabel-layout',
        category: 'labels',
        label: 'axisLabel · layout',
        json: '{ "axisLabel": { "margin": 8, "rotate": 0 } }',
    },
    {
        id: 'axislabel-customvalues',
        category: 'labels',
        label: 'axisLabel · customValues',
        json: '{ "axisLabel": { "customValues": [0, 20, 40, 60, 80, 100] } }',
    },
    // ── scale ────────────────────────────────────────────────────────────
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
    // ── style ─────────────────────────────────────────────────────────────
    {
        id: 'axisline-arrow',
        category: 'style',
        label: 'axisLine · arrow',
        json: '{ "axisLine": { "symbol": ["none", "arrow"], "symbolSize": [10, 15] } }',
    },
    {
        id: 'axisline-dashed',
        category: 'style',
        label: 'axisLine · dashed',
        json: '{ "axisLine": { "lineStyle": { "type": "dashed" } } }',
    },
    {
        id: 'axistick-length',
        category: 'style',
        label: 'axisTick · length',
        json: '{ "axisTick": { "length": 5, "inside": false } }',
    },
    // ── interaction ────────────────────────────────────────────────
    {
        id: 'axispointer-label',
        category: 'interaction',
        label: 'axisPointer · label',
        json: '{ "axisPointer": { "show": true, "label": { "show": true, "precision": 0, "formatter": "{value}" } } }',
    },
];

/**
 * Parse a raw-override text into a JSON object — `null` for empty, invalid or non-object text.
 * The shared guard behind the injector and the card editor's validity check.
 */
export const parseRawObject = (text: string): Record<string, unknown> | null => {
    const trimmed = (text ?? '').trim();
    if (!trimmed) {
        return null;
    }
    try {
        const v = JSON.parse(trimmed);
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            return v as Record<string, unknown>;
        }
    } catch {
        /* invalid raw override — ignored (the validity is surfaced in the editor) */
    }
    return null;
};

/**
 * Inject a template's JSON into a card's current raw text — DEEP-merged (ADR-0037), unlike the
 * series `injectTemplate`'s top-level replace: axis snippets share top-level keys (`axisLabel`
 * fonts vs. overflow vs. hideOverlap), so a top-level replace would clobber everything an earlier
 * snippet set under the same key. Invalid current text is replaced by the template; a bad template
 * is a no-op (same tolerance semantics as the series injector).
 */
export const injectAxisTemplate = (currentRaw: string | undefined, templateJson: string): string => {
    // Invalid current text → the template replaces it; a bad template → no-op.
    const base = parseRawObject(currentRaw ?? '') ?? {};
    const add = parseRawObject(templateJson);
    if (!add) {
        return currentRaw ?? '';
    }
    return JSON.stringify(deepMerge(base, add), null, 2);
};
