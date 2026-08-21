/**
 * X-axis template catalog — the X-Karte's own raw-JSON templates (ADR-0037 addendum: X joins the
 * axis anatomy, reversing the original "X-Karte deliberately out" scope).
 *
 * @module EchartsCollectionWidget/editor/xAxisTemplates
 * @remarks
 * Same shape and same rules as the Y catalog (`axisTemplates.ts` — the entries even share its
 * `AxisTemplate` type and category chrome): one group scaffold per echarts option group plus
 * value variants and scalar solos, every payload deep-merged UNDER `buildXAxisEntry` (the card
 * wins collisions), every leaf audited against the X managed set — pinned by the guard test in
 * `xAxisTemplates.test.ts` via `classifyUserKeys` (stays in sync with `MANAGED_PATHS.xAxis` by
 * construction). GUI-owned leaves are omitted exactly like on Y: always-owned (type/name/
 * nameLocation/nameGap/nameRotate/offset/splitLine.show/axisTick.show/splitNumber/minInterval/
 * axisLabel.formatter/axisLabel.rotate) and conditionally-owned with an axis colour or offset
 * (axisLabel.color, axisLine.show, axisLine.lineStyle.color, nameTextStyle.color,
 * axisLine.onZero). The seven former chart-level `xAxis` category entries (arrow/onZero/
 * tickLength/dashedSplit/hideOverlap/minorTicks/splitArea, ADR-0040) merged INTO these group
 * scaffolds — one place per component; the ids broke deliberately (silent load-prune,
 * ADR-0043 pattern).
 *
 * Time-axis facts (verified against the echarts 6.1.0 source via DeepWiki): minorTick/
 * minorSplitLine subdivide exactly as on value axes (`TimeScale.getMinorTicks`); splitArea
 * renders; the per-axis axisPointer label auto-formats time — a `"{value}"` string formatter
 * expands to the SCALE's formatted label, not the raw ms epoch (`makeLabelFormatter`); logBase
 * is value-axis-only and stays out; boundaryGap `%` works because the X-Karte owns no min/max.
 * Theme-neutral payloads (ADR-0037): no light-mode colour hardcodes — splitArea bands inherit
 * the theme; the axisPointer label keeps the Y precedent's #fff chip contrast.
 */
import { AXIS_CATEGORY_I18N, AXIS_CATEGORY_ORDER, type AxisTemplate, type AxisTemplateCatalog } from './axisTemplates';

export const X_AXIS_TEMPLATES: AxisTemplate[] = [
    // ── name — the axis-title font group ────────────────────────────────
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
        // `onZero` is emitted by the builder whenever an offset is set. Arrow symbols are free
        // — absorbs the former chart-level `xAxis · arrow` entry.
        json: '{ "axisLine": { "lineStyle": { "width": 1, "type": "solid", "opacity": 1, "dashOffset": 0 }, "symbol": ["none", "arrow"], "symbolSize": [10, 15] } }',
    },
    // ── axisTick ────────────────────────────────────────────────────────
    {
        id: 'axistick',
        category: 'axisTick',
        label: 'axisTick',
        // `show` omitted (always card-owned); absorbs the former `xAxis · tick length` entry.
        // axisTick.splitNumber subdivides per interval — distinct from the card-owned TOP-LEVEL
        // splitNumber (tick density).
        json: '{ "axisTick": { "length": 5, "inside": false, "splitNumber": 5, "lineStyle": { "width": 1, "type": "solid", "opacity": 1 } } }',
    },
    // ── minorTick ───────────────────────────────────────────────────────
    {
        id: 'minortick',
        category: 'minorTick',
        label: 'minorTick',
        // show:false default → `true` is the lever; splitNumber:5 because tick density is
        // splitNumber × minorTick.splitNumber (the ADR-0037 prefill rule). Works on time axes
        // like on value axes (TimeScale.getMinorTicks). Absorbs `xAxis · minorTicks`.
        json: '{ "minorTick": { "show": true, "splitNumber": 5, "length": 3 } }',
    },
    // ── axisLabel ───────────────────────────────────────────────────────
    {
        id: 'axislabel',
        category: 'axisLabel',
        label: 'axisLabel',
        // `color`/`formatter`/`rotate` omitted — all three are card-owned (colour inherits, the
        // time format combo, the label-rotation slider). Absorbs `xAxis · hideOverlap`.
        json: '{ "axisLabel": { "show": true, "inside": false, "margin": 8, "hideOverlap": true, "fontStyle": "normal", "fontWeight": "normal", "fontSize": 12 } }',
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
    // ── splitLine ───────────────────────────────────────────────────────
    {
        id: 'splitline',
        category: 'splitLine',
        label: 'splitLine',
        // `show` omitted (always card-owned); dashed as the visible classic value. Absorbs the
        // former `xAxis · dashed split` entry.
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
        // show alone inherits the theme's band colours (dark-mode safe, ADR-0037); renders on a
        // time axis. Absorbs `xAxis · splitArea`.
        json: '{ "splitArea": { "show": true, "interval": "auto" } }',
    },
    // ── axisPointer ─────────────────────────────────────────────────────
    {
        id: 'axispointer',
        category: 'axisPointer',
        label: 'axisPointer',
        // Per-axis pointers have no 'cross' (downgraded 'line') and label.show defaults FALSE —
        // the label is the whole point (ADR-0037 source findings). On a time axis "{value}"
        // expands to the SCALE's formatted label, not the raw ms epoch.
        json: '{ "axisPointer": { "show": true, "snap": false, "triggerTooltip": true, "type": "line", "label": { "show": true, "precision": 0, "formatter": "{value}", "margin": 3, "color": "#fff", "fontSize": 12 } } }',
    },
    // ── scale (scalar solos — no object group) ──────────────────────────
    {
        id: 'inverse',
        category: 'scale',
        label: 'inverse',
        // Time runs right-to-left — the mirror chart look.
        json: '{ "inverse": true }',
    },
    {
        id: 'boundarygap',
        category: 'scale',
        label: 'boundaryGap · %',
        // Both sides padded by percent of the data window; effective because the X-Karte owns
        // no min/max (a fixed side would kill it, scaleRawExtentInfo).
        json: '{ "boundaryGap": ["5%", "5%"] }',
    },
    {
        id: 'maxinterval',
        category: 'scale',
        label: 'maxInterval',
        // MILLISECONDS on a time axis (like the card-owned minInterval) — seeded with 1 h.
        json: '{ "maxInterval": 3600000 }',
    },
];

/** The X-Karte's catalog bundle — the X entries over the shared category chrome. */
export const X_AXIS_CATALOG: AxisTemplateCatalog = {
    templates: X_AXIS_TEMPLATES,
    categoryOrder: AXIS_CATEGORY_ORDER,
    categoryI18n: AXIS_CATEGORY_I18N,
};
