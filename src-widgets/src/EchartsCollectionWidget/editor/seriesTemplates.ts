/**
 * Per-series template catalog (ADR-0017, reworked as Option-group scaffolds by ADR-0043) — the
 * series raw's design library: the menu TEACHES the echarts option space of the slot.
 *
 * @module EchartsCollectionWidget/editor/seriesTemplates
 * @remarks
 * Each entry is a JSON object meant to go INSIDE one series (deep-merged UNDER the GUI-authored
 * entry, so the GUI wins collisions; data is force-set). ADR-0043 forms:
 *  - **Group scaffold** — ONE echarts option group COMPLETELY (every documented, non-GUI-owned
 *    key pre-filled with its echarts-doc value, ADR-0030 defaults rule: concrete → literal,
 *    colour token → doc literal, auto-inherit → keyword, undefined-only → omitted). The user
 *    deletes what they do not need. GUI-owned leaves are omitted: the merge eats them anyway and
 *    the ✓/◐/✗ analysis would permanently read ◐/✗ — noise instead of insight.
 *  - **Power variant** — a second scaffold inside the same group teaching the big styling
 *    levers (area gradient, decal pattern, rich text, pie edge labels).
 *  - **Solo** — a scalar key without an object group (behaviour levers: sampling, clip,
 *    startAngle, universalTransition, …). The old atomic object part-snippets (`label · value`,
 *    `emphasis · focus`, …) are retired — their group carries the scaffold now.
 * Categories ARE the echarts option groups of the slot (CONTEXT: Option group). Template LABELS
 * are echarts vocabulary shown as-is (English) — only the category headers translate.
 *
 * LEAF AUDIT (pinned by seriesTemplates.test.ts against the FULLEST card state): no template may
 * touch an ALWAYS-builder-emitted leaf; CONDITIONALLY-owned leaves only via the explicit
 * CONDITIONAL_ALLOW list below, each with a justification. Managed sets live in
 * `seriesRawAnalysis.ts` (the sync invariant with the builders).
 */
/** Option-group category (rendered as menu section headers; order = {@link SERIES_CATEGORY_ORDER}). */
export type SeriesTemplateCategory =
    // shared series option groups
    | 'lineStyle'
    | 'areaStyle'
    | 'itemStyle'
    | 'symbol'
    | 'label'
    | 'labelLine'
    | 'labelLayout'
    | 'states'
    | 'markers'
    | 'backgroundStyle'
    // scalar behaviour levers (every slot)
    | 'behaviour';

export const SERIES_CATEGORY_ORDER: SeriesTemplateCategory[] = [
    'lineStyle',
    'areaStyle',
    'itemStyle',
    'symbol',
    'label',
    'labelLine',
    'labelLayout',
    'states',
    'markers',
    'backgroundStyle',
    'behaviour',
];

/** i18n key per category header. */
export const SERIES_CATEGORY_I18N: Record<SeriesTemplateCategory, string> = {
    lineStyle: 'echarts_stpl_cat_linestyle',
    areaStyle: 'echarts_stpl_cat_areastyle',
    itemStyle: 'echarts_stpl_cat_itemstyle',
    symbol: 'echarts_stpl_cat_symbol',
    label: 'echarts_stpl_cat_label',
    labelLine: 'echarts_stpl_cat_labelline',
    labelLayout: 'echarts_stpl_cat_labellayout',
    states: 'echarts_stpl_cat_states',
    markers: 'echarts_stpl_cat_markers',
    backgroundStyle: 'echarts_stpl_cat_backgroundstyle',
    behaviour: 'echarts_stpl_cat_behaviour',
};

/**
 * Which card a catalog belongs to (family, or the cartesian sub-type, or the pie layer). The
 * categories a slot actually uses are the option groups echarts offers that series type — the
 * pie slot surfaces its label-line group, and so on.
 */
export type SeriesTemplateSlot =
    | 'cartesian-line'
    | 'cartesian-bar'
    | 'cartesian-scatter' // point series (ADR-0060) — no line/area/bar groups
    | 'pie' // whole-pie series (series[0])
    | 'pie-slice'; // per slice (data[i])

/**
 * The slot a series' activations resolve against, derived from the chart family + the series'
 * own type override (ADR-0042) — the ONE slot rule shared by the Apply prune (`saveEditorState`),
 * the load prune (ADR-0043) and the family-switch loss count, so the three can never drift apart.
 */
export const seriesSlotOf = (family: string, chartType: string, meta: { type?: string }): SeriesTemplateSlot =>
    family === 'pie' ? 'pie-slice' : (`cartesian-${meta.type ?? chartType}` as SeriesTemplateSlot);

export interface SeriesTemplate {
    /** Stable id for React keys and persisted activations (ADR-0042). */
    id: string;
    category: SeriesTemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Single-series JSON object (deep-merged into the card's raw). */
    json: string;
}

// Shared scaffold payloads (identical groups across slots — written once, reused by reference).
/** Label container + font keys; `show`/`formatter` ownership differs per slot, callers spread extras. */
const LABEL_FONT_KEYS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    ellipsis: '...',
    backgroundColor: 'transparent',
    borderColor: '#ccc',
    borderWidth: 0,
    borderType: 'solid',
    borderRadius: 0,
    padding: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textBorderType: 'solid',
    textShadowBlur: 0,
    textShadowColor: 'transparent',
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    overflow: 'none',
};
const NO_SHADOW = { shadowBlur: 0, shadowColor: 'transparent', shadowOffsetX: 0, shadowOffsetY: 0 };
const ITEM_BORDER = {
    borderColor: '#fff',
    borderWidth: 0,
    borderType: 'solid',
    // zrender stroke defaults (zrender/lib/canvas/graphic.js) — the border IS a stroke.
    borderCap: 'butt',
    borderJoin: 'miter',
    borderMiterLimit: 10,
    ...NO_SHADOW,
};
/** markPoint basis — symbol/symbolSize/label defaults verified against MarkPointModel (DeepWiki). */
const MARKPOINT = {
    symbol: 'pin',
    symbolSize: 50,
    symbolRotate: 0,
    symbolOffset: [0, 0],
    precision: 2,
    itemStyle: { borderWidth: 2, ...NO_SHADOW },
    label: { show: true, position: 'inside', formatter: '{b}: {c}', fontSize: 12 },
    data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' },
    ],
};
/** markLine basis — symbol ends/precision/dashed default verified against MarkLineModel. */
const MARKLINE = {
    silent: false,
    symbol: ['circle', 'arrow'],
    symbolSize: [8, 16],
    precision: 2,
    lineStyle: { type: 'dashed', width: 1, opacity: 1, ...NO_SHADOW },
    label: { show: true, position: 'end', distance: 5, formatter: '{b}: {c}', fontSize: 12 },
    data: [{ type: 'average', name: 'Avg' }],
};
const MARKAREA = {
    silent: true,
    itemStyle: { color: 'rgba(200,0,0,0.08)', ...NO_SHADOW },
    label: { show: true, position: 'inside', fontSize: 12 },
    data: [[{ name: 'Band' }, {}]],
};
/** decal pattern (power variant payload) — DecalObject keys, example values. */
const DECAL = {
    symbol: 'circle',
    symbolSize: 0.4,
    color: 'rgba(0,0,0,0.2)',
    backgroundColor: 'none',
    rotation: 0,
    symbolKeepAspect: false,
};

// ── cartesian-line ────────────────────────────────────────────────────────────
// GUI-owned leaves (always): name/type/yAxisIndex/data/color/itemStyle.color/
// lineStyle.width/lineStyle.type/smooth/showSymbol/connectNulls. Conditional: itemStyle.
// borderRadius, label.show, label.color (label on — the ADR-0080 non-bar emission), stack,
// symbolSize, step, areaStyle.opacity, areaStyle.color (gradient), label.formatter (value
// format active, ADR-0057).
const CARTESIAN_LINE: SeriesTemplate[] = [
    {
        id: 'line-linestyle',
        category: 'lineStyle',
        label: 'lineStyle',
        // curveness is the LINE-only lever (curved without smooth — MCP-verified); join/miterLimit
        // complete the zrender stroke set (zrender/lib/canvas/graphic.js).
        json: JSON.stringify({
            lineStyle: {
                color: 'inherit',
                opacity: 1,
                cap: 'butt',
                join: 'miter',
                miterLimit: 10,
                curveness: 0,
                dashOffset: 0,
                ...NO_SHADOW,
            },
        }),
    },
    {
        id: 'line-areastyle',
        category: 'areaStyle',
        label: 'areaStyle',
        json: JSON.stringify({ areaStyle: { origin: 'auto', ...NO_SHADOW } }),
    },
    {
        id: 'line-area-gradient',
        category: 'areaStyle',
        label: 'areaStyle · gradient',
        // areaStyle.color is card-owned ONLY in gradient area mode (◐ there, ✓ otherwise) — the
        // gradient lever IS colour, so this conditional leaf is allow-listed.
        json: JSON.stringify({
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(127,127,127,0.35)' },
                        { offset: 1, color: 'rgba(127,127,127,0.02)' },
                    ],
                },
            },
        }),
    },
    {
        id: 'line-itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        json: JSON.stringify({ itemStyle: { opacity: 1, ...ITEM_BORDER } }),
    },
    {
        id: 'line-decal',
        category: 'itemStyle',
        label: 'itemStyle · decal',
        json: JSON.stringify({ itemStyle: { decal: DECAL } }),
    },
    {
        id: 'line-symbol',
        category: 'symbol',
        label: 'symbol',
        // symbolSize/showSymbol are GUI-owned; symbol itself may be any built-in name or an
        // SVG path string ('path://M0,0 L8,0 L4,8 Z') — swap the value to explore.
        // showAllSymbol is the line-only label-interval escape ('auto' default).
        json: JSON.stringify({
            symbol: 'circle',
            symbolRotate: 0,
            symbolOffset: [0, 0],
            symbolKeepAspect: false,
            showAllSymbol: 'auto',
        }),
    },
    {
        id: 'line-label',
        category: 'label',
        label: 'label',
        json: JSON.stringify({
            label: { position: 'top', distance: 5, rotate: 0, offset: [0, 0], formatter: '{c}', ...LABEL_FONT_KEYS },
        }),
    },
    {
        id: 'line-label-rich',
        category: 'label',
        label: 'label · rich',
        json: JSON.stringify({
            label: {
                formatter: '{name|{a}}\n{val|{c}}',
                rich: {
                    name: { color: '#666', fontSize: 11, fontStyle: 'normal', fontWeight: 'normal' },
                    val: { color: '#333', fontSize: 13, fontStyle: 'normal', fontWeight: 'bold' },
                },
                ...LABEL_FONT_KEYS,
            },
        }),
    },
    {
        id: 'line-endlabel',
        category: 'label',
        label: 'endLabel',
        json: JSON.stringify({
            endLabel: {
                show: true,
                distance: 5,
                formatter: '{a}',
                valueAnimation: true,
                color: 'inherit',
                fontSize: 12,
                fontFamily: 'sans-serif',
            },
        }),
    },
    {
        id: 'line-labellayout',
        category: 'labelLayout',
        label: 'labelLayout',
        // 'shiftX' as the visible classic value — 'none' is the no-op default and not even a
        // member of the documented union ('shiftX'|'shiftY'|'shuffleX'|'shuffleY').
        json: JSON.stringify({
            labelLayout: { hideOverlap: true, moveOverlap: 'shiftX', draggable: false, dx: 0, dy: 0, rotate: 0 },
        }),
    },
    {
        id: 'line-emphasis',
        category: 'states',
        label: 'emphasis',
        json: JSON.stringify({
            emphasis: {
                disabled: false,
                focus: 'series',
                scale: true,
                lineStyle: { width: 3 },
                itemStyle: {},
                label: { show: true },
            },
        }),
    },
    {
        id: 'line-blur',
        category: 'states',
        label: 'blur',
        json: JSON.stringify({
            blur: { lineStyle: { opacity: 0.3 }, itemStyle: { opacity: 0.3 }, label: { show: false } },
        }),
    },
    {
        id: 'line-select',
        category: 'states',
        label: 'select',
        json: JSON.stringify({
            select: { disabled: true, itemStyle: { borderWidth: 2 }, lineStyle: { width: 2 }, label: { show: true } },
        }),
    },
    {
        id: 'line-markpoint',
        category: 'markers',
        label: 'markPoint',
        json: JSON.stringify({ markPoint: MARKPOINT }),
    },
    {
        id: 'line-markline',
        category: 'markers',
        label: 'markLine',
        // silent/symbol/data are card-owned ONLY on the threshold-host card (◐ there) — the
        // marker itself consists of exactly those keys, so they are allow-listed.
        json: JSON.stringify({ markLine: MARKLINE }),
    },
    {
        id: 'line-markarea',
        category: 'markers',
        label: 'markArea',
        json: JSON.stringify({ markArea: MARKAREA }),
    },
    {
        id: 'line-sampling',
        category: 'behaviour',
        label: 'sampling · lttb',
        json: '{ "sampling": "lttb" }',
    },
    {
        id: 'line-clip',
        category: 'behaviour',
        label: 'clip',
        json: '{ "clip": true }',
    },
    {
        id: 'line-smoothmonotone',
        category: 'behaviour',
        label: 'smoothMonotone',
        json: '{ "smoothMonotone": "none" }',
    },
    {
        id: 'line-universal',
        category: 'behaviour',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
    {
        id: 'line-animdelay',
        category: 'behaviour',
        label: 'animationDelay',
        json: '{ "animationDelay": 200 }',
    },
    {
        id: 'line-silent',
        category: 'behaviour',
        label: 'silent',
        json: '{ "silent": true }',
    },
];

// ── cartesian-bar ─────────────────────────────────────────────────────────────
// GUI-owned (always): name/type/yAxisIndex/data/color/itemStyle.color. Conditional:
// itemStyle.borderRadius, label.show, stack, barGap, barCategoryGap.
const CARTESIAN_BAR: SeriesTemplate[] = [
    {
        id: 'bar-itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        json: JSON.stringify({ itemStyle: { opacity: 1, ...ITEM_BORDER } }),
    },
    {
        id: 'bar-decal',
        category: 'itemStyle',
        label: 'itemStyle · decal',
        json: JSON.stringify({ itemStyle: { decal: DECAL } }),
    },
    {
        id: 'bar-label',
        category: 'label',
        label: 'label',
        json: JSON.stringify({
            label: { position: 'top', distance: 5, rotate: 0, offset: [0, 0], formatter: '{c}', ...LABEL_FONT_KEYS },
        }),
    },
    {
        id: 'bar-label-rich',
        category: 'label',
        label: 'label · rich',
        json: JSON.stringify({
            label: {
                formatter: '{name|{a}}\n{val|{c}}',
                rich: {
                    name: { color: '#666', fontSize: 11, fontStyle: 'normal', fontWeight: 'normal' },
                    val: { color: '#333', fontSize: 13, fontStyle: 'normal', fontWeight: 'bold' },
                },
                ...LABEL_FONT_KEYS,
            },
        }),
    },
    {
        id: 'bar-labellayout',
        category: 'labelLayout',
        label: 'labelLayout',
        json: JSON.stringify({
            labelLayout: { hideOverlap: true, moveOverlap: 'shiftX', draggable: false, dx: 0, dy: 0, rotate: 0 },
        }),
    },
    {
        id: 'bar-emphasis',
        category: 'states',
        label: 'emphasis',
        json: JSON.stringify({
            emphasis: {
                disabled: false,
                focus: 'self',
                itemStyle: { shadowBlur: 8, shadowColor: 'rgba(0,0,0,0.3)' },
                label: { show: true },
            },
        }),
    },
    {
        id: 'bar-blur',
        category: 'states',
        label: 'blur',
        json: JSON.stringify({ blur: { itemStyle: { opacity: 0.3 }, label: { show: false } } }),
    },
    {
        id: 'bar-select',
        category: 'states',
        label: 'select',
        json: JSON.stringify({ select: { disabled: true, itemStyle: { borderWidth: 2 }, label: { show: true } } }),
    },
    {
        id: 'bar-markpoint',
        category: 'markers',
        label: 'markPoint',
        json: JSON.stringify({ markPoint: MARKPOINT }),
    },
    {
        id: 'bar-markline',
        category: 'markers',
        label: 'markLine',
        json: JSON.stringify({ markLine: MARKLINE }),
    },
    {
        id: 'bar-markarea',
        category: 'markers',
        label: 'markArea',
        json: JSON.stringify({ markArea: MARKAREA }),
    },
    {
        id: 'bar-background',
        category: 'backgroundStyle',
        label: 'backgroundStyle',
        json: JSON.stringify({
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180,180,180,0.2)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderType: 'solid',
                borderRadius: 0,
                opacity: 1,
                ...NO_SHADOW,
            },
        }),
    },
    // bar-width ('barWidth': '40%') was RETIRED with parity Build D (ADR-0056): the Bar
    // Sub-group's absolute bar-width field owns the key 1:1 (px + %), leaving the template
    // wholly card-owned. Stored activations heal away silently (ADR-0047 load pass); the raw
    // text stays the user's own.
    {
        id: 'bar-minheight',
        category: 'behaviour',
        label: 'barMinHeight',
        json: '{ "barMinHeight": 2 }',
    },
    {
        id: 'bar-stackstrategy',
        category: 'behaviour',
        label: 'stackStrategy',
        json: '{ "stackStrategy": "samesign" }',
    },
    {
        id: 'bar-realtimesort',
        category: 'behaviour',
        label: 'realtimeSort',
        json: '{ "realtimeSort": true }',
    },
    {
        id: 'bar-clip',
        category: 'behaviour',
        label: 'clip',
        json: '{ "clip": true }',
    },
    {
        id: 'bar-large',
        category: 'behaviour',
        label: 'large',
        json: '{ "large": true, "largeThreshold": 2000 }',
    },
    {
        id: 'bar-universal',
        category: 'behaviour',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
    {
        id: 'bar-animdelay',
        category: 'behaviour',
        label: 'animationDelay',
        json: '{ "animationDelay": 100 }',
    },
    {
        id: 'bar-silent',
        category: 'behaviour',
        label: 'silent',
        json: '{ "silent": true }',
    },
];

// ── cartesian-scatter ─────────────────────────────────────────────────────────
// A point series (ADR-0060): the points ARE the series, so no lineStyle/areaStyle/bar groups —
// the catalog carries the option groups a scatter actually reads (item look, symbol, label,
// emphasis, behaviour). GUI-owned like the line card: label.color rides the non-bar ADR-0080
// emission (label on → card-owned).
const CARTESIAN_SCATTER: SeriesTemplate[] = [
    {
        id: 'scatter-itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        json: JSON.stringify({ itemStyle: { opacity: 1, ...ITEM_BORDER } }),
    },
    {
        id: 'scatter-decal',
        category: 'itemStyle',
        label: 'itemStyle · decal',
        json: JSON.stringify({ itemStyle: { decal: DECAL } }),
    },
    {
        id: 'scatter-symbol',
        category: 'symbol',
        label: 'symbol',
        json: JSON.stringify({ symbol: 'circle', symbolRotate: 0, symbolOffset: [0, 0], symbolKeepAspect: false }),
    },
    {
        id: 'scatter-label',
        category: 'label',
        label: 'label',
        json: JSON.stringify({
            label: { position: 'top', distance: 5, rotate: 0, offset: [0, 0], formatter: '{c}', ...LABEL_FONT_KEYS },
        }),
    },
    {
        id: 'scatter-label-rich',
        category: 'label',
        label: 'label · rich',
        json: JSON.stringify({
            label: {
                formatter: '{name|{a}}\n{val|{c}}',
                rich: {
                    name: { color: '#666', fontSize: 11, fontStyle: 'normal', fontWeight: 'normal' },
                    val: { color: '#333', fontSize: 13, fontStyle: 'normal', fontWeight: 'bold' },
                },
                ...LABEL_FONT_KEYS,
            },
        }),
    },
    {
        id: 'scatter-emphasis',
        category: 'states',
        label: 'emphasis',
        json: JSON.stringify({
            emphasis: {
                focus: 'self',
                itemStyle: { shadowBlur: 8, shadowColor: 'rgba(0,0,0,0.3)' },
                label: { show: true },
            },
        }),
    },
    {
        id: 'scatter-labellayout',
        category: 'labelLayout',
        label: 'labelLayout',
        json: JSON.stringify({
            labelLayout: { hideOverlap: true, moveOverlap: 'shiftX', draggable: false, dx: 0, dy: 0, rotate: 0 },
        }),
    },
    {
        id: 'scatter-blur',
        category: 'states',
        label: 'blur',
        json: JSON.stringify({ blur: { itemStyle: { opacity: 0.3 }, label: { show: false } } }),
    },
    {
        id: 'scatter-select',
        category: 'states',
        label: 'select',
        json: JSON.stringify({ select: { disabled: true, itemStyle: { borderWidth: 2 }, label: { show: true } } }),
    },
    {
        id: 'scatter-markpoint',
        category: 'markers',
        label: 'markPoint',
        json: JSON.stringify({ markPoint: MARKPOINT }),
    },
    {
        id: 'scatter-markarea',
        category: 'markers',
        label: 'markArea',
        json: JSON.stringify({ markArea: MARKAREA }),
    },
    {
        id: 'scatter-large',
        category: 'behaviour',
        label: 'large',
        json: '{ "large": true, "largeThreshold": 2000 }',
    },
    {
        id: 'scatter-animdelay',
        category: 'behaviour',
        label: 'animationDelay',
        json: '{ "animationDelay": 200 }',
    },
    {
        id: 'scatter-markline',
        category: 'markers',
        label: 'markLine',
        json: JSON.stringify({ markLine: MARKLINE }),
    },
    {
        id: 'scatter-clip',
        category: 'behaviour',
        label: 'clip',
        json: '{ "clip": true }',
    },
    {
        id: 'scatter-silent',
        category: 'behaviour',
        label: 'silent',
        json: '{ "silent": true }',
    },
];

// ── pie (whole-pie series) ────────────────────────────────────────────────────
// GUI-owned (always): type/radius/label.show/label.formatter/data. Conditional: roseType.
// NOTE: label.formatter is ALWAYS card-owned here → NO rich-text variant for pie (rich lives in
// the formatter); the per-slice level has it free (slice-label).
const PIE: SeriesTemplate[] = [
    {
        id: 'pie-label',
        category: 'label',
        label: 'label',
        json: JSON.stringify({
            label: {
                position: 'outer',
                alignTo: 'labelLine',
                edgeDistance: '25%',
                distanceToLabelLine: 5,
                minMargin: 5,
                rotate: 0,
                ...LABEL_FONT_KEYS,
            },
        }),
    },
    {
        id: 'pie-labeline',
        category: 'labelLine',
        label: 'labelLine',
        json: JSON.stringify({
            labelLine: {
                show: true,
                length: 15,
                length2: 15,
                smooth: false,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: { color: 'inherit', width: 1, opacity: 1, type: 'solid' },
            },
        }),
    },
    {
        id: 'pie-labellayout',
        category: 'labelLayout',
        label: 'labelLayout',
        json: JSON.stringify({ labelLayout: { hideOverlap: true, moveOverlap: 'shiftX', draggable: false } }),
    },
    {
        id: 'pie-labellayout-edge',
        category: 'labelLayout',
        label: 'labelLayout · edge',
        json: JSON.stringify({
            labelLayout: { alignTo: 'edge', edgeDistance: 10, bleedMargin: 10, hideOverlap: true },
        }),
    },
    {
        id: 'pie-itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        // borderJoin 'round' is the PIE-family doc default (PieSeries.defaultOption).
        json: JSON.stringify({
            itemStyle: {
                opacity: 1,
                borderColor: '#fff',
                borderWidth: 2,
                borderType: 'solid',
                borderJoin: 'round',
                borderRadius: 6,
                ...NO_SHADOW,
            },
        }),
    },
    {
        id: 'pie-decal',
        category: 'itemStyle',
        label: 'itemStyle · decal',
        json: JSON.stringify({ itemStyle: { decal: DECAL } }),
    },
    {
        id: 'pie-emphasis',
        category: 'states',
        label: 'emphasis',
        json: JSON.stringify({
            emphasis: {
                focus: 'self',
                scale: true,
                scaleSize: 10,
                itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.3)' },
                label: { show: true },
            },
        }),
    },
    {
        id: 'pie-blur',
        category: 'states',
        label: 'blur',
        json: JSON.stringify({ blur: { itemStyle: { opacity: 0.3 }, label: { show: false } } }),
    },
    {
        id: 'pie-select',
        category: 'states',
        label: 'select',
        json: JSON.stringify({ select: { disabled: true, itemStyle: { borderWidth: 2 }, label: { show: true } } }),
    },
    {
        id: 'pie-startangle',
        category: 'behaviour',
        label: 'startAngle',
        json: '{ "startAngle": 90 }',
    },
    {
        id: 'pie-minangle',
        category: 'behaviour',
        label: 'minAngle',
        json: '{ "minAngle": 5 }',
    },
    {
        id: 'pie-padangle',
        category: 'behaviour',
        label: 'padAngle',
        json: '{ "padAngle": 0 }',
    },
    {
        id: 'pie-percentprecision',
        category: 'behaviour',
        label: 'percentPrecision',
        json: '{ "percentPrecision": 2 }',
    },
    {
        id: 'pie-avoidoverlap',
        category: 'behaviour',
        label: 'avoidLabelOverlap',
        json: '{ "avoidLabelOverlap": true }',
    },
    {
        id: 'pie-stillzero',
        category: 'behaviour',
        label: 'stillShowZeroSum',
        json: '{ "stillShowZeroSum": true }',
    },
    {
        id: 'pie-selectedmode',
        category: 'behaviour',
        label: 'selectedMode',
        json: '{ "selectedMode": "single" }',
    },
    {
        id: 'pie-selectedoffset',
        category: 'behaviour',
        label: 'selectedOffset',
        json: '{ "selectedOffset": 10 }',
    },
    {
        id: 'pie-center',
        category: 'behaviour',
        label: 'center',
        json: '{ "center": ["50%", "50%"] }',
    },
    {
        id: 'pie-universal',
        category: 'behaviour',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
    {
        id: 'pie-animtype',
        category: 'behaviour',
        label: 'animationType',
        json: '{ "animationType": "expansion" }',
    },
];

// ── pie-slice (per slice, data[i]) ────────────────────────────────────────────
// GUI-owned (always): name/value/itemStyle.color. Everything else — including label.show AND
// label.formatter — is free at the slice level (rich text lives here).
const PIE_SLICE: SeriesTemplate[] = [
    {
        id: 'slice-label',
        category: 'label',
        label: 'label',
        json: JSON.stringify({
            label: { show: true, position: 'outer', formatter: '{b}: {c}', ...LABEL_FONT_KEYS },
        }),
    },
    {
        id: 'slice-label-rich',
        category: 'label',
        label: 'label · rich',
        json: JSON.stringify({
            label: {
                show: true,
                formatter: '{name|{b}}\n{per|{d}%}',
                rich: {
                    name: { color: '#666', fontSize: 11, fontStyle: 'normal', fontWeight: 'normal' },
                    per: { color: '#333', fontSize: 13, fontStyle: 'normal', fontWeight: 'bold' },
                },
                ...LABEL_FONT_KEYS,
            },
        }),
    },
    {
        id: 'slice-labelline',
        category: 'labelLine',
        label: 'labelLine',
        json: JSON.stringify({
            labelLine: {
                show: true,
                length: 15,
                length2: 15,
                lineStyle: { color: 'inherit', width: 1, opacity: 1, type: 'solid' },
            },
        }),
    },
    {
        id: 'slice-itemstyle',
        category: 'itemStyle',
        label: 'itemStyle',
        json: JSON.stringify({
            itemStyle: {
                opacity: 1,
                borderColor: '#fff',
                borderWidth: 2,
                borderType: 'solid',
                borderRadius: 6,
                ...NO_SHADOW,
            },
        }),
    },
    {
        id: 'slice-decal',
        category: 'itemStyle',
        label: 'itemStyle · decal',
        json: JSON.stringify({ itemStyle: { decal: DECAL } }),
    },
    {
        id: 'slice-emphasis',
        category: 'states',
        label: 'emphasis',
        json: JSON.stringify({
            emphasis: {
                scale: true,
                itemStyle: { shadowBlur: 8, shadowColor: 'rgba(0,0,0,0.3)' },
                label: { show: true },
            },
        }),
    },
    {
        id: 'slice-select',
        category: 'states',
        label: 'select',
        json: JSON.stringify({ select: { itemStyle: { borderWidth: 2 }, label: { show: true } } }),
    },
    {
        id: 'slice-selected',
        category: 'behaviour',
        label: 'selected',
        json: '{ "selected": true }',
    },
];

export const SERIES_TEMPLATES: Record<SeriesTemplateSlot, SeriesTemplate[]> = {
    'cartesian-line': CARTESIAN_LINE,
    'cartesian-bar': CARTESIAN_BAR,
    'cartesian-scatter': CARTESIAN_SCATTER,
    pie: PIE,
    'pie-slice': PIE_SLICE,
};

/**
 * CONDITIONALLY card-owned leaves a template MAY carry (ADR-0043 conditional-leaf rule: included
 * only where omitting the leaf destroys the template's purpose). Everything else the builder
 * emits — always or conditionally — is forbidden in every scaffold/solo (guard test). Each entry
 * is justified at the using template.
 */
export const CONDITIONAL_ALLOW: Record<SeriesTemplateSlot, ReadonlySet<string>> = {
    // `label.formatter` (ADR-0057): a line card owns it only while its label is on AND a value
    // format is active (the card's unit/decimals facts or a chart-level knob) — the line-label
    // scaffolds carry the leaf; without facts the template keeps it (GUI-wins seam, conditional).
    'cartesian-line': new Set([
        'areaStyle.color',
        'markLine.silent',
        'markLine.symbol',
        'markLine.data',
        'label.formatter',
        // Line shadow (ADR-0060): card-owned only while the blur field is set — the lineStyle
        // scaffold's NO_SHADOW leaves hand over to the template when unset.
        'lineStyle.shadowBlur',
        'lineStyle.shadowColor',
    ]),
    // label.* (parity Build D, ADR-0056): the bar card owns position/size only while their fields
    // are set (and formatter only while a value format is active + label on — per-series facts
    // since ADR-0057, else a chart-level knob) — the label scaffolds' other leaves
    // (distance/rotate/offset/fontStyle/…) stay wholly free, and an unset field hands the leaf to
    // the template (the ADR-0015 GUI-wins seam, conditional).
    // `label.color` is deliberately NOT here: it is conditionally card-owned too, but no scaffold
    // carries it — a future label-colour scaffold must add the entry (the no-rotted-entries audit
    // forces allow-list and usage to stay in lock-step).
    'cartesian-bar': new Set([
        'markLine.silent',
        'markLine.symbol',
        'markLine.data',
        'label.position',
        'label.fontSize',
        'label.formatter',
    ]),
    // scatter (ADR-0060): `label.formatter` like the line card (label on + a value format
    // active); the markLine trio when the card hosts the thresholds.
    'cartesian-scatter': new Set(['markLine.silent', 'markLine.symbol', 'markLine.data', 'label.formatter']),
    pie: new Set(),
    'pie-slice': new Set(),
};
