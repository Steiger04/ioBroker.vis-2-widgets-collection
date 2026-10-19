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
 * axisLabel.formatter/axisLabel.rotate — and since the ADR-0055 addendum also axisLine.show +
 * axisLine.lineStyle.color, and since its addendum 3 axisLabel.color, whose primary default the
 * builder now always emits) and conditionally-owned with an axis colour or position:'top'
 * (nameTextStyle.color, axisLine.onZero).
 * The seven former chart-level `xAxis` category entries (arrow/onZero/
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
import { AXIS_CATEGORY_I18N, AXIS_CATEGORY_ORDER, type AxisTemplate } from './axisTemplates';
import { defineCatalog } from './catalog';

export const X_AXIS_TEMPLATES: AxisTemplate[] = [
    // ── name — the axis-title font group ────────────────────────────────
    {
        id: 'nametextstyle',
        category: 'name',
        label: 'nameTextStyle',
        // `color` omitted: conditionally card-owned when an axis colour is set.
        json: '{ "nameTextStyle": { "fontStyle": "normal", "fontWeight": "normal", "fontFamily": "sans-serif", "fontSize": 12, "align": "left", "padding": 0, "backgroundColor": "transparent", "borderColor": "transparent", "borderWidth": 0, "borderType": "solid", "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 } }',
    },
    {
        id: 'nametruncate',
        category: 'name',
        label: 'nameTruncate',
        // v6: maxWidth is the lever (null default = inactive); ellipsis/placeholder are doc literals.
        json: '{ "nameTruncate": { "maxWidth": 100, "ellipsis": "...", "placeholder": "." } }',
    },
    // ── axisLine ────────────────────────────────────────────────────────
    {
        id: 'axisline',
        category: 'axisLine',
        label: 'axisLine',
        // `show` + `lineStyle.color` omitted (conditionally card-owned with an axis colour);
        // `onZero` is emitted by the builder whenever an offset is set or the position is 'top'
        // (both detach the line from the Y-zero so it moves with ticks+labels). Arrow symbols are
        // free — absorbs the former chart-level `xAxis · arrow` entry.
        // cap/join/miterLimit + the shadow quartet complete the zrender stroke set
        // (zrender/lib/canvas/graphic.js — the 47a090b completion, re-established).
        json: '{ "axisLine": { "lineStyle": { "width": 1, "type": "solid", "opacity": 1, "dashOffset": 0, "cap": "butt", "join": "miter", "miterLimit": 10, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 }, "symbol": ["none", "arrow"], "symbolSize": [10, 15] } }',
    },
    // ── axisTick ────────────────────────────────────────────────────────
    {
        id: 'axistick',
        category: 'axisTick',
        label: 'axisTick',
        // `show` omitted (always card-owned); absorbs the former `xAxis · tick length` entry.
        // axisTick.splitNumber subdivides per interval — distinct from the card-owned TOP-LEVEL
        // splitNumber (tick density).
        json: '{ "axisTick": { "length": 5, "inside": false, "splitNumber": 5, "lineStyle": { "width": 1, "type": "solid", "opacity": 1, "dashOffset": 0, "cap": "butt", "join": "miter", "miterLimit": 10, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 } } }',
    },
    // ── minorTick ───────────────────────────────────────────────────────
    {
        id: 'minortick',
        category: 'minorTick',
        label: 'minorTick',
        // show:false default → `true` is the lever; splitNumber:5 because tick density is
        // splitNumber × minorTick.splitNumber (the ADR-0037 prefill rule). Works on time axes
        // like on value axes (TimeScale.getMinorTicks). Absorbs `xAxis · minorTicks`.
        json: '{ "minorTick": { "show": true, "splitNumber": 5, "length": 3, "lineStyle": { "width": 1, "type": "solid" } } }',
    },
    // ── axisLabel ───────────────────────────────────────────────────────
    {
        id: 'axislabel',
        category: 'axisLabel',
        label: 'axisLabel',
        // `color`/`formatter`/`rotate`/`fontSize` omitted — all four are card-owned (colour
        // inherits, the time format combo, the label-rotation slider, the Build D label size,
        // ADR-0055). Absorbs `xAxis · hideOverlap`.
        // textMargin is a v6 key (default [0, 3]); fontFamily completes the font set.
        json: '{ "axisLabel": { "show": true, "inside": false, "margin": 8, "textMargin": [0, 3], "hideOverlap": true, "fontStyle": "normal", "fontWeight": "normal", "fontFamily": "sans-serif" } }',
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
        // Parity with Y — works on the time axis too (values are ms epochs there).
        json: '{ "axisLabel": { "customValues": [0, 20, 40, 60, 80, 100] } }',
    },
    // ── splitLine ───────────────────────────────────────────────────────
    {
        id: 'splitline',
        category: 'splitLine',
        label: 'splitLine',
        // `show` omitted (always card-owned); dashed as the visible classic value. Absorbs the
        // former `xAxis · dashed split` entry.
        // cap/join/miterLimit + the shadow quartet complete the zrender stroke set — the
        // 47a090b completion the ADR-0043 rework lost, re-established (Y+X).
        json: '{ "splitLine": { "lineStyle": { "type": "dashed", "width": 1, "opacity": 1, "dashOffset": 0, "cap": "butt", "join": "miter", "miterLimit": 10, "shadowBlur": 0, "shadowColor": "transparent", "shadowOffsetX": 0, "shadowOffsetY": 0 } } }',
    },
    // ── minorSplitLine ──────────────────────────────────────────────────
    {
        id: 'minorsplitline',
        category: 'minorSplitLine',
        label: 'minorSplitLine',
        // lineStyle.width 1 = the doc default; the colour stays with the theme (ADR-0037 neutrality).
        json: '{ "minorSplitLine": { "show": true, "lineStyle": { "width": 1 } } }',
    },
    // ── splitArea ───────────────────────────────────────────────────────
    {
        id: 'splitarea',
        category: 'splitArea',
        label: 'splitArea',
        // show alone inherits the theme's band colours (dark-mode safe, ADR-0037); renders on a
        // time axis. `interval` is deliberately absent: category-axis-only — dead on the time
        // axis (solely effective in the table family's category mode). Absorbs `xAxis · splitArea`.
        json: '{ "splitArea": { "show": true } }',
    },
    // ── axisPointer ─────────────────────────────────────────────────────
    {
        id: 'axispointer',
        category: 'axisPointer',
        label: 'axisPointer',
        // Per-axis pointers have no 'cross' (downgraded 'line') and label.show defaults FALSE —
        // the label is the whole point (ADR-0037 source findings). On a time axis "{value}"
        // expands to the SCALE's formatted label, not the raw ms epoch. lineStyle styles the
        // pointer stroke itself (colour stays with the theme).
        json: '{ "axisPointer": { "show": true, "snap": false, "triggerTooltip": true, "type": "line", "lineStyle": { "width": 1, "type": "solid" }, "label": { "show": true, "precision": 0, "formatter": "{value}", "margin": 3, "color": "#fff", "fontSize": 12 } } }',
    },
    {
        id: 'axispointer-shadow',
        category: 'axisPointer',
        label: 'axisPointer · shadow',
        // The band pointer: shadowStyle carries the tint (theme-neutral grey, the chip
        // precedent); the label stays with the line variant above.
        json: '{ "axisPointer": { "show": true, "type": "shadow", "triggerTooltip": true, "shadowStyle": { "color": "rgba(127,127,127,0.15)" } } }',
    },
    // ── break — the v6 torn-paper axis break (breaks + breakArea + breakLabelLayout) ──
    {
        id: 'breaks',
        category: 'break',
        label: 'breaks',
        // The v6 axis break — here on the TIME axis the start/end values are MILLISECOND
        // epochs (two consecutive days as the seed; axisDefault breakArea literals for the
        // style, teaching colours see the Y entry). Not verified on log axes.
        json: '{ "breaks": [{ "start": 1760438400000, "end": 1760524800000, "gap": 30 }], "breakArea": { "show": true, "zigzagAmplitude": 4, "expandOnClick": true }, "breakLabelLayout": { "moveOverlap": "auto" } }',
    },
    // ── scale (scalar solos — no object group) ──────────────────────────
    {
        id: 'splitarea-areastyle',
        category: 'splitArea',
        label: 'splitArea · areaStyle',
        // Band colours as an explicit array (echarts alternates); neutral greys stay dark-mode safe.
        json: '{ "splitArea": { "show": true, "areaStyle": { "color": ["rgba(127,127,127,0.08)", "transparent"], "opacity": 1 } } }',
    },
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
export const X_AXIS_CATALOG = defineCatalog({
    templates: X_AXIS_TEMPLATES,
    categoryOrder: AXIS_CATEGORY_ORDER,
    categoryI18n: AXIS_CATEGORY_I18N,
});
