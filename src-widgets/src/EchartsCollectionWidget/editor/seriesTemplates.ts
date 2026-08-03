/**
 * Per-series template catalog (ADR-0017) — collision-safe single-series JSON presets that inject
 * GUI-uncovered echarts keys into a card's Series raw.
 *
 * @module EchartsCollectionWidget/editor/seriesTemplates
 * @remarks
 * Each entry is a JSON object meant to go INSIDE one series (deep-merged UNDER the GUI-authored
 * entry, so the GUI wins collisions; data is force-set). Every entry was audited against the
 * family builder's actual output so no key duplicates a GUI-emitted one:
 *  - cartesian: `showSymbol` is GUI-owned (excluded); `label`/`itemStyle`/`lineStyle` are only
 *    partially owned → sub-key templates (`formatter`, `opacity`, `border`, `shadow`) survive a
 *    deep-merge. `sampling:'lttb'` is the #1 perf key for ioBroker history data.
 *  - gauge: `detail.formatter` is emitted only when a unit is set (WS3), so the template is free
 *    when unit is empty; `radius`/`axisTick`/`min`/`max` stay GUI-owned (no template).
 *  - radar: per-polygon style was lifted to the series level (WS3), so these reach it.
 *  - pie: `radius`/`label.formatter` are GUI-owned (excluded); per-slice templates target `data[i]`.
 *
 * Template LABELS are shown as-is (echarts option vocabulary, universally English) — only the
 * CATEGORY headers are translated. The chart-level Advanced-JSON keeps its own chart-wide snippets
 * (graphic/aria/…); this catalog is per-series only.
 */

/** Template grouping (rendered as menu section headers; order = {@link TEMPLATE_CATEGORY_ORDER}). */
export type TemplateCategory = 'annotations' | 'labels' | 'emphasis' | 'style' | 'behavior';

export const TEMPLATE_CATEGORY_ORDER: TemplateCategory[] = ['annotations', 'labels', 'emphasis', 'style', 'behavior'];

/** i18n key per category header. */
export const TEMPLATE_CATEGORY_I18N: Record<TemplateCategory, string> = {
    annotations: 'echarts_stpl_cat_annotations',
    labels: 'echarts_stpl_cat_labels',
    emphasis: 'echarts_stpl_cat_emphasis',
    style: 'echarts_stpl_cat_style',
    behavior: 'echarts_stpl_cat_behavior',
};

/** Which card a catalog belongs to (family, or the cartesian sub-type, or the pie layer). */
export type SeriesTemplateSlot =
    | 'cartesian-line'
    | 'cartesian-bar'
    | 'pie' // whole-pie series (series[0])
    | 'pie-slice' // per slice (data[i])
    | 'gauge'
    | 'radar';

export interface SeriesTemplate {
    /** Stable id for React keys. */
    id: string;
    category: TemplateCategory;
    /** Display label (echarts vocabulary; shown as-is). */
    label: string;
    /** Single-series JSON object (deep-merged into the card's raw). */
    json: string;
}

// ── cartesian-line ────────────────────────────────────────────────────────────
const CARTESIAN_LINE: SeriesTemplate[] = [
    {
        id: 'line-sampling',
        category: 'behavior',
        label: 'sampling · lttb',
        json: '{ "sampling": "lttb" }',
    },
    {
        id: 'line-clip',
        category: 'behavior',
        label: 'clip',
        json: '{ "clip": true }',
    },
    {
        id: 'line-markpoint',
        category: 'annotations',
        label: 'markPoint · max/min',
        json: '{ "markPoint": { "data": [{ "type": "max", "name": "Max" }, { "type": "min", "name": "Min" }] } }',
    },
    {
        id: 'line-markline',
        category: 'annotations',
        label: 'markLine · average',
        json: '{ "markLine": { "data": [{ "type": "average", "name": "Avg" }] } }',
    },
    {
        id: 'line-markarea',
        category: 'annotations',
        label: 'markArea · band',
        json: '{ "markArea": { "silent": true, "itemStyle": { "color": "rgba(200,0,0,0.08)" }, "data": [[{ "name": "band" }, {}]] } }',
    },
    {
        id: 'line-label',
        category: 'labels',
        label: 'label · value',
        json: '{ "label": { "formatter": "{c}", "position": "top" } }',
    },
    {
        id: 'line-endlabel',
        category: 'labels',
        label: 'endLabel',
        json: '{ "endLabel": { "show": true, "formatter": "{a}" } }',
    },
    {
        id: 'line-emphasis',
        category: 'emphasis',
        label: 'emphasis · focus series',
        json: '{ "emphasis": { "focus": "series" } }',
    },
    {
        id: 'line-lineopacity',
        category: 'style',
        label: 'lineStyle · opacity',
        json: '{ "lineStyle": { "opacity": 0.85 } }',
    },
    {
        id: 'line-lineshadow',
        category: 'style',
        label: 'lineStyle · glow',
        json: '{ "lineStyle": { "shadowBlur": 8, "shadowColor": "rgba(0,0,0,0.4)" } }',
    },
    {
        id: 'line-itemborder',
        category: 'style',
        label: 'itemStyle · border',
        json: '{ "itemStyle": { "borderColor": "#fff", "borderWidth": 1 } }',
    },
    {
        id: 'line-areaorigin',
        category: 'style',
        label: 'areaStyle · origin',
        json: '{ "areaStyle": { "origin": "start" } }',
    },
    {
        id: 'line-universal',
        category: 'behavior',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
    {
        id: 'line-animdelay',
        category: 'behavior',
        label: 'animationDelay',
        json: '{ "animationDelay": 200 }',
    },
];

// ── cartesian-bar ─────────────────────────────────────────────────────────────
const CARTESIAN_BAR: SeriesTemplate[] = [
    {
        id: 'bar-showbg',
        category: 'style',
        label: 'showBackground',
        json: '{ "showBackground": true, "backgroundStyle": { "color": "rgba(180,180,180,0.2)" } }',
    },
    {
        id: 'bar-barwidth',
        category: 'style',
        label: 'barWidth',
        json: '{ "barWidth": "40%" }',
    },
    {
        id: 'bar-barminheight',
        category: 'style',
        label: 'barMinHeight',
        json: '{ "barMinHeight": 2 }',
    },
    {
        id: 'bar-markpoint',
        category: 'annotations',
        label: 'markPoint · max/min',
        json: '{ "markPoint": { "data": [{ "type": "max", "name": "Max" }, { "type": "min", "name": "Min" }] } }',
    },
    {
        id: 'bar-markline',
        category: 'annotations',
        label: 'markLine · average',
        json: '{ "markLine": { "data": [{ "type": "average", "name": "Avg" }] } }',
    },
    {
        id: 'bar-label',
        category: 'labels',
        label: 'label · value',
        json: '{ "label": { "formatter": "{c}", "position": "top" } }',
    },
    {
        id: 'bar-emphasis',
        category: 'emphasis',
        label: 'emphasis · focus self',
        json: '{ "emphasis": { "focus": "self" } }',
    },
    {
        id: 'bar-itemborder',
        category: 'style',
        label: 'itemStyle · border',
        json: '{ "itemStyle": { "borderColor": "#fff", "borderWidth": 1 } }',
    },
    {
        id: 'bar-realtimesort',
        category: 'behavior',
        label: 'realtimeSort',
        json: '{ "realtimeSort": true }',
    },
    {
        id: 'bar-clip',
        category: 'behavior',
        label: 'clip',
        json: '{ "clip": true }',
    },
    {
        id: 'bar-universal',
        category: 'behavior',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
    {
        id: 'bar-animdelay',
        category: 'behavior',
        label: 'animationDelay',
        json: '{ "animationDelay": 100 }',
    },
];

// ── pie (whole-pie series) ────────────────────────────────────────────────────
const PIE: SeriesTemplate[] = [
    {
        id: 'pie-labelpos',
        category: 'labels',
        label: 'label · outer',
        json: '{ "label": { "position": "outer" } }',
    },
    {
        id: 'pie-labelstyle',
        category: 'labels',
        label: 'label · colour/size',
        json: '{ "label": { "color": "#333", "fontSize": 12 } }',
    },
    {
        id: 'pie-labeline',
        category: 'labels',
        label: 'labelLine',
        json: '{ "labelLine": { "show": true, "length": 10, "length2": 10, "smooth": true } }',
    },
    {
        id: 'pie-emphasis',
        category: 'emphasis',
        label: 'emphasis · pull-out',
        json: '{ "emphasis": { "focus": "self", "scale": true, "itemStyle": { "shadowBlur": 10, "shadowColor": "rgba(0,0,0,0.3)" } } }',
    },
    {
        id: 'pie-radius',
        category: 'style',
        label: 'itemStyle · rounded',
        json: '{ "itemStyle": { "borderRadius": 6 } }',
    },
    {
        id: 'pie-border',
        category: 'style',
        label: 'itemStyle · gap',
        json: '{ "itemStyle": { "borderColor": "#fff", "borderWidth": 2 } }',
    },
    {
        id: 'pie-shadow',
        category: 'style',
        label: 'itemStyle · shadow',
        json: '{ "itemStyle": { "shadowBlur": 10, "shadowColor": "rgba(0,0,0,0.3)" } }',
    },
    {
        id: 'pie-startangle',
        category: 'behavior',
        label: 'startAngle',
        json: '{ "startAngle": 0 }',
    },
    {
        id: 'pie-selected',
        category: 'behavior',
        label: 'selectedMode',
        json: '{ "selectedMode": "single", "selectedOffset": 12 }',
    },
    {
        id: 'pie-minangle',
        category: 'behavior',
        label: 'minAngle',
        json: '{ "minAngle": 5 }',
    },
    {
        id: 'pie-center',
        category: 'behavior',
        label: 'center',
        json: '{ "center": ["40%", "50%"] }',
    },
    {
        id: 'pie-percentprecision',
        category: 'behavior',
        label: 'percentPrecision',
        json: '{ "percentPrecision": 1 }',
    },
    {
        id: 'pie-anim',
        category: 'behavior',
        label: 'animationType · scale',
        json: '{ "animationType": "scale", "animationEasing": "cubicOut" }',
    },
    {
        id: 'pie-universal',
        category: 'behavior',
        label: 'universalTransition',
        json: '{ "universalTransition": true }',
    },
];

// ── pie-slice (per slice, data[i]) ────────────────────────────────────────────
const PIE_SLICE: SeriesTemplate[] = [
    {
        id: 'slice-radius',
        category: 'style',
        label: 'itemStyle · rounded',
        json: '{ "itemStyle": { "borderRadius": 6 } }',
    },
    {
        id: 'slice-border',
        category: 'style',
        label: 'itemStyle · border',
        json: '{ "itemStyle": { "borderColor": "#fff", "borderWidth": 2 } }',
    },
    {
        id: 'slice-shadow',
        category: 'style',
        label: 'itemStyle · shadow',
        json: '{ "itemStyle": { "shadowBlur": 8, "shadowColor": "rgba(0,0,0,0.3)" } }',
    },
    {
        id: 'slice-selected',
        category: 'behavior',
        label: 'selected',
        json: '{ "selected": true }',
    },
    {
        id: 'slice-label',
        category: 'labels',
        label: 'label · show',
        json: '{ "label": { "show": true } }',
    },
];

// ── gauge (single series) ─────────────────────────────────────────────────────
const GAUGE: SeriesTemplate[] = [
    {
        id: 'gauge-zones',
        category: 'annotations',
        label: 'axisLine · colour zones',
        json: '{ "axisLine": { "lineStyle": { "color": [[0.3, "#67e0e3"], [0.7, "#37a2da"], [1, "#fd666d"]] } } }',
    },
    {
        id: 'gauge-anchor',
        category: 'annotations',
        label: 'anchor',
        json: '{ "anchor": { "show": true, "size": 12, "showAbove": true } }',
    },
    {
        id: 'gauge-roundcap',
        category: 'style',
        label: 'progress · roundCap',
        json: '{ "progress": { "roundCap": true } }',
    },
    {
        id: 'gauge-pointer',
        category: 'style',
        label: 'pointer',
        json: '{ "pointer": { "length": "70%", "width": 5 } }',
    },
    {
        id: 'gauge-title',
        category: 'style',
        label: 'title · position/colour',
        json: '{ "title": { "offsetCenter": [0, "-30%"], "color": "#666" } }',
    },
    {
        id: 'gauge-detail',
        category: 'labels',
        label: 'detail · formatter',
        json: '{ "detail": { "formatter": "{value} °C" } }',
    },
    {
        id: 'gauge-detailstyle',
        category: 'labels',
        label: 'detail · colour/size',
        json: '{ "detail": { "color": "#333", "fontSize": 24 } }',
    },
    {
        id: 'gauge-arc',
        category: 'behavior',
        label: 'startAngle/endAngle',
        json: '{ "startAngle": 220, "endAngle": -40 }',
    },
    {
        id: 'gauge-center',
        category: 'behavior',
        label: 'center',
        json: '{ "center": ["50%", "55%"] }',
    },
    {
        id: 'gauge-splitnumber',
        category: 'behavior',
        label: 'splitNumber',
        json: '{ "splitNumber": 10 }',
    },
    {
        id: 'gauge-emphasis',
        category: 'emphasis',
        label: 'emphasis · shadow',
        json: '{ "emphasis": { "itemStyle": { "shadowBlur": 8 } } }',
    },
];

// ── radar (single series, style lifted to series level by WS3) ────────────────
const RADAR: SeriesTemplate[] = [
    {
        id: 'radar-linestyle',
        category: 'style',
        label: 'lineStyle · width/opacity',
        json: '{ "lineStyle": { "width": 2, "opacity": 0.9 } }',
    },
    {
        id: 'radar-areaopacity',
        category: 'style',
        label: 'areaStyle · opacity',
        json: '{ "areaStyle": { "opacity": 0.3 } }',
    },
    {
        id: 'radar-itemborder',
        category: 'style',
        label: 'itemStyle · border',
        json: '{ "itemStyle": { "opacity": 0.9, "borderColor": "#fff", "borderWidth": 1 } }',
    },
    {
        id: 'radar-label',
        category: 'labels',
        label: 'label · value',
        json: '{ "label": { "show": true, "formatter": "{c}" } }',
    },
    {
        id: 'radar-emphasis',
        category: 'emphasis',
        label: 'emphasis · focus self',
        json: '{ "emphasis": { "focus": "self", "lineStyle": { "width": 3 } } }',
    },
    {
        id: 'radar-symbol',
        category: 'behavior',
        label: 'symbol · vertex',
        json: '{ "symbol": "circle", "symbolSize": 6 }',
    },
    {
        id: 'radar-anim',
        category: 'behavior',
        label: 'animationType · scale',
        json: '{ "animationType": "scale", "animationEasing": "cubicOut" }',
    },
];

export const SERIES_TEMPLATES: Record<SeriesTemplateSlot, SeriesTemplate[]> = {
    'cartesian-line': CARTESIAN_LINE,
    'cartesian-bar': CARTESIAN_BAR,
    pie: PIE,
    'pie-slice': PIE_SLICE,
    gauge: GAUGE,
    radar: RADAR,
};

/**
 * Inject a template's JSON into a card's current raw text (accumulate; matches the chart-level
 * `insertSnippet` semantics). Invalid current text is replaced by the template; a bad template is a
 * no-op. The merge is shallow per top-level key (consistent with the Advanced-JSON snippets).
 */
export const injectTemplate = (currentRaw: string | undefined, templateJson: string): string => {
    let base: Record<string, unknown> = {};
    const cur = (currentRaw ?? '').trim();
    if (cur) {
        try {
            const v = JSON.parse(cur);
            if (v && typeof v === 'object' && !Array.isArray(v)) {
                base = v as Record<string, unknown>;
            }
        } catch {
            /* invalid current text → the template replaces it */
        }
    }
    let add: Record<string, unknown> = {};
    try {
        const v = JSON.parse(templateJson);
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            add = v as Record<string, unknown>;
        }
    } catch {
        return currentRaw ?? ''; // bad template → no-op
    }
    return JSON.stringify({ ...base, ...add }, null, 2);
};
