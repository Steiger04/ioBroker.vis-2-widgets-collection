/**
 * Cartesian family option builder (line / bar) — the G side, ADR-0007/0008 r4.
 *
 * @module EchartsCollectionWidget/optionBuilders/cartesian
 * @remarks
 * Owns the cartesian coordinate system: a time `xAxis`, a (optionally bounded, optionally
 * dual) `yAxis`, and one series entry per bound OID with the full per-series presentation
 * authored from `seriesConfig` (smooth / width / style / area fill / stack / step / symbol /
 * symbolSize / label / connectNulls / barGap / barCategoryGap / cornerRadius). Chart-wide
 * presentation (legend, tooltip, animation, dataZoom, markLine thresholds, visualMap) is
 * authored here too. Returns the full G fragment; the data-wins seam forces only
 * `series[].data` back afterwards.
 *
 * Area is NOT a cartesian type (ADR-0008 r4): echarts has no `type:'area'` — an area chart is
 * a `type:'line'` series with an `areaStyle`. Area fill is therefore a per-series fill mode
 * (`off` | `flat` | `gradient`), applied here. Legacy `type:'area'` and `area:true` are
 * tolerated at runtime (→ line + flat fill); migration to the concrete model happens in the
 * editor on re-save, never here.
 */
import type { EChartsOption } from 'echarts';

import type {
    EchartsAreaFill,
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsLineStyle,
    EchartsMarkLine,
    EchartsStep,
    EchartsXAxisConfig,
} from '../../types/field-definitions/echarts-fields';
import { toEchartsLinearGradient } from '../../lib/helper/extractColorFromValue';
import { axisPosition } from '../editor/axisLayout';
import {
    buildLegend,
    DEFAULT_MARK_FILL,
    edgeLabelOf,
    legendActiveOf,
    markLabelColorOf,
    markLineStyleOf,
    type EchartsMarkEdge,
} from '../presentation';
import { dataSpanMs, makeAxisLabelFormatter } from '../timeFormat';
import {
    factsOfMeta,
    formatSeriesValue,
    hasSeriesValueFormat,
    textFactsActive,
    type ChartValueFormat,
    type SeriesFactsByName,
    type SeriesValueFacts,
} from '../valueFormat';
import { applyRawOverride } from '../utils/mergeOption';
import type { ChartSeries, EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip, chartValueFormatOf } from './tooltip';

const LINE_STYLE_DASH: Record<EchartsLineStyle, 'solid' | 'dashed' | 'dotted'> = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
};

const STEP_ECHARTS: Record<EchartsStep, false | 'start' | 'middle' | 'end'> = {
    none: false,
    start: 'start',
    middle: 'middle',
    end: 'end',
};

/**
 * The raw-JSON grid width reader (ADR-0070 addendum 6): the X-Karte's raw escape hatch may carry
 * `splitLine.lineStyle.width` (the GUI emits a width key only when its own field is set — GUI
 * wins the collision). The grid INSET needs the effective width even when it comes from raw, so
 * the extent-edge min/max gridline survives the canvas cut; a non-numeric/zero/negative value
 * counts as unset (echarts default 1).
 */
const rawGridWidth = (raw: string | undefined): number | undefined => {
    if (!raw) {
        return undefined;
    }
    try {
        const w = (JSON.parse(raw) as { splitLine?: { lineStyle?: { width?: unknown } } })?.splitLine?.lineStyle?.width;
        return typeof w === 'number' && w > 0 ? w : undefined;
    } catch {
        return undefined; // malformed raw — applyRawOverride reports that seam; the inset just ignores it
    }
};

/**
 * The sparse splitLine.lineStyle cluster (ADR-0070 addendum 6): each authored style leaf (colour,
 * width, type) emits its own key; all-unset emits NOTHING, so the raw override keeps owning the
 * absent leaves wholesale — the parity-Build-D sparseness rule, extended to the new leaves.
 */
const buildGridLineStyle = (
    color?: string,
    width?: number,
    lineType?: EchartsLineStyle,
): { lineStyle?: Record<string, unknown> } => {
    const style: Record<string, unknown> = {};
    if (color) {
        style.color = color;
    }
    if (width !== undefined) {
        style.width = width;
    }
    if (lineType) {
        style.type = LINE_STYLE_DASH[lineType];
    }
    return Object.keys(style).length ? { lineStyle: style } : {};
};

/**
 * The DEFAULT colour of the X axis line (+ its ticks, which follow the line — echarts' rule, the
 * ADR-0055 fact): echarts v6's `tokens.color.axisSplitLine` (neutral15) — deliberately the colour
 * the Y splitLines rendered with BEFORE the ADR-0055 addendum unified the grid on the divider (the
 * user-ordered swap: grid = divider everywhere, while the X axis line + ticks take the old light
 * grid grey and separate visually from the grid). Authored `x.color` still wins.
 */
const X_AXIS_LINE_COLOR = '#dbdee4';

/**
 * Gap between an axis line and its (rotated) name (ADR-0024). Kept tight so each name reads close
 * to its own axis instead of floating off into the offset-axis gutter; `outerBoundsContain:'all'`
 * still reserves the name's full extent, so a tight gap never clips it.
 */
const AXIS_NAME_GAP = 18;

/**
 * Normalize a possibly-legacy area value into the {@link EchartsAreaFill} model (ADR-0008 r4).
 * Legacy forms tolerated at runtime (no migration here — the editor rewrites on re-save):
 *  - `area: true` (boolean) → `flat`
 *  - per-series `type: 'area'` (with no explicit `area`) → `flat`
 *  - `area: false` / undefined / off → `off`
 */
export const normalizeAreaMode = (meta: EchartsSeriesMeta | undefined): EchartsAreaFill => {
    // Read `area` loosely: legacy data may store a boolean `true` (not in the EchartsAreaFill union).
    const raw = (meta as { area?: unknown } | undefined)?.area;
    if (raw === 'flat' || raw === 'gradient') {
        return raw;
    }
    if (raw === true) {
        return 'flat'; // legacy boolean
    }
    // Legacy `type:'area'` (r4 removed it) implied a flat fill when no explicit area mode is set.
    if ((meta as { type?: string } | undefined)?.type === 'area') {
        return 'flat';
    }
    return 'off';
};

/**
 * Parse the authored absolute bar width (parity Build D, ADR-0056) into what echarts `barWidth`
 * accepts: plain digits → a px NUMBER (`'20'` → 20), a trailing `%` → the STRING (`'30%'`).
 * A resolved 0 (adapter parity: `barWidth` 0/NaN → undefined) and anything unparseable (empty,
 * text) → `undefined` = echarts' auto width — a zero would render invisible bars, so it renders
 * the default instead of a broken chart.
 */
export const parseBarWidth = (raw: string | undefined): number | string | undefined => {
    if (typeof raw !== 'string') {
        return undefined;
    }
    const m = raw.trim().match(/^(\d+(?:\.\d+)?)(%)?$/);
    if (!m) {
        return undefined;
    }
    const px = Number(m[1]);
    if (px <= 0) {
        return undefined; // 0 (px or %) = auto — the adapter's zero-is-unset rule
    }
    return m[2] ? raw.trim() : px;
};

/** Build a single cartesian series entry from its data + per-series meta. */
const buildCartesianSeriesEntry = (
    s: ChartSeries,
    m: EchartsSeriesMeta | undefined,
    fallbackColor: string,
    index: number,
    defaultType: EchartsCartesianType,
    /** The chart-level value-format context (comma + tooltip-cluster fallbacks, ADR-0057). */
    chartFmt: ChartValueFormat,
): Record<string, unknown> => {
    // Per-series override wins; otherwise inherit the chart's cartesian type (ADR-0008 r3).
    // Legacy `type:'area'` (ADR-0008 r4 removed it) matches no concrete type → falls through to
    // `defaultType`, which a legacy 'area' chart normalises to 'line' upstream.
    const rawType = m?.type;
    const type: EchartsCartesianType =
        rawType === 'bar' || rawType === 'scatter' ? rawType : rawType === 'line' ? 'line' : defaultType;
    const color = m?.color ?? fallbackColor;
    const areaMode = normalizeAreaMode(m);
    const name = m?.name || s.name || `Series ${index + 1}`;

    const entry: Record<string, unknown> = {
        name,
        type,
        yAxisIndex: m?.yAxisIndex ?? 0,
        data: s.data,
        color,
        itemStyle: { color, ...(m?.cornerRadius ? { borderRadius: m.cornerRadius } : {}) },
        // No per-series `animation`: a hardcoded `animation: true` here would override the
        // root `animation: p.animation` (echarts resolves it via `getShallow('animation')` on the
        // SeriesModel — series-level wins) and make the toggle a no-op for line/bar. Left unset,
        // each series inherits the root toggle.
    };
    if (m?.label) {
        // The label VALUES ride the per-series Wert-Formatter (ADR-0057): this series' facts beat
        // the chart-level cluster per fact; gated exactly like the tooltip — no knob on either
        // side → no formatter, echarts' own label text. Bar labels carry the parity Build D knob
        // cluster (position/size/colour) beside it; a LINE label keeps the switch + formatter +
        // EXPLICIT colour (position semantics differ per type, the line family never reads the
        // bar position/size knobs — but an authored colour wins, and „Erbt" resolves to the
        // series colour so echarts' bg-contrast halo never runs, ADR 0080).
        const seriesFacts = factsOfMeta(m);
        const labelFmt = hasSeriesValueFormat(seriesFacts, chartFmt)
            ? (v: unknown): string => formatSeriesValue(v, seriesFacts, chartFmt)
            : undefined;
        entry.label =
            type === 'bar'
                ? {
                      show: true,
                      ...(m.labelPosition ? { position: m.labelPosition } : {}),
                      ...(m.labelFontSize !== undefined ? { fontSize: m.labelFontSize } : {}),
                      ...(m.labelColor ? { color: m.labelColor } : {}),
                      ...(labelFmt ? { formatter: labelFmt } : {}),
                  }
                : {
                      show: true,
                      // NEVER colourless (ADR 0080): a colourless attached label falls to
                      // echarts' auto contrast, which strokes a halo derived from the
                      // (transparent!) canvas background — a white border on dark hosts.
                      color: m.labelColor ?? color,
                      ...(labelFmt ? { formatter: labelFmt } : {}),
                  };
    }
    if (m?.stack && type !== 'scatter') {
        entry.stack = m.stack;
    }

    if (type === 'line') {
        // D2: smooth defaults to false (matches ECharts 'Basic Line', not the smoothed example).
        entry.smooth = m?.smooth ?? false;
        entry.showSymbol = m?.symbol ?? false;
        if (m?.symbolSize !== undefined) {
            entry.symbolSize = m.symbolSize;
        }
        entry.connectNulls = m?.connectNulls ?? false;
        const step = m?.step ?? 'none';
        if (step !== 'none') {
            entry.step = STEP_ECHARTS[step];
        }
        entry.lineStyle = {
            width: m?.lineWidth ?? 2,
            type: LINE_STYLE_DASH[m?.lineStyle ?? 'solid'],
            // Line shadow (ADR-0060): the adapter's Linienschatten — blur in the series' own
            // colour, sparse (unset/0 = no shadow keys at all).
            ...(m?.shadowBlur ? { shadowBlur: m.shadowBlur, shadowColor: color } : {}),
        };
        if (areaMode !== 'off') {
            const opacity = m?.areaOpacity ?? (areaMode === 'gradient' ? 0.8 : 0.15);
            if (areaMode === 'gradient') {
                // D5: honour the CSS gradient angle/direction → echarts LinearGradient.
                const grad = toEchartsLinearGradient(m?.areaGradient);
                entry.areaStyle = grad ? { opacity, color: grad } : { opacity };
            } else {
                entry.areaStyle = { opacity };
            }
        }
    } else if (type === 'bar') {
        // bar — D7: expose both echarts bar gaps (between-bar + between-category).
        if (m?.barGap !== undefined) {
            entry.barGap = `${Math.round(m.barGap * 100)}%`;
        }
        if (m?.barCategoryGap !== undefined) {
            entry.barCategoryGap = `${Math.round(m.barCategoryGap * 100)}%`;
        }
        // Absolute bar width (parity Build D): px number or %-string; unparseable = auto (sparse).
        const barWidth = parseBarWidth(m?.barWidth);
        if (barWidth !== undefined) {
            entry.barWidth = barWidth;
        }
    } else {
        // scatter (ADR-0060, parity Build B): a point series — no line/area/bar knobs; the
        // points ARE the series (symbols always shown, echarts' scatter default), symbolSize
        // applies like on a line.
        if (m?.symbolSize !== undefined) {
            entry.symbolSize = m.symbolSize;
        }
    }
    return entry;
};

/**
 * One marking's RESOLVED bounds (ADR-0062): numbers only — OID strings read as unset (the
 * pipeline resolves bounds against the subscribed values BEFORE the presentation call; the
 * builder itself never subscribes).
 */
const numericBound = (bound: number | string | undefined): number | undefined =>
    typeof bound === 'number' && Number.isFinite(bound) ? bound : undefined;

/**
 * One marking edge/line data entry (ADR-0061 style + ADR-0081 per-edge label clusters; ONE
 * emit shared by single lines and band edges so the two cannot drift apart).
 *
 * Width defaults to 2 — the card slider's fallback, NOT echarts' own default of 1 (`||` keeps
 * the documented "0 = unset" semantics: an invisible line is never a choice). A legacy boolean
 * `dashed` is tolerated at runtime (decode migrates, the builder never rejects); an authored
 * 3-way lineStyle wins over any stale boolean.
 *
 * Label cluster (this edge's OWN — ADR-0081): ALWAYS emitted. A textless edge shows its
 * resolved bound VALUE (the Wert-Fallback: raw number like the adapter) instead of falling to
 * echarts' raw value default. X offset negates on the END places (adapter l/r: positive pulls
 * the label inward) — including the UNSET position, whose effective default is 'end' too, so
 * "Standard" and an explicit "Rechts" offset the same way. The label COLOUR is always explicit
 * (ADR 0080): a colourless label falls to echarts' bg-contrast auto path, which strokes a 2px
 * halo derived from the (transparent) canvas background — a white border on dark hosts.
 * „Erbt" resolves to the marking's own colour, else the dark-mode-aware axis-text token.
 *
 * @param ml - The marking config (bounds resolved to numbers by the pipeline).
 * @param color - The marking's effective colour (explicit or the divider token, ADR-0027) —
 *   paints the LINE only; the label deliberately bypasses it (the divider default would render
 *   near-invisible text) in favour of {@link markLabelColorOf}.
 * @param bound - The numeric Y value this edge sits at.
 * @param edge - Which bound's cluster rides this entry (bands emit BOTH edges, each with its
 * own cluster — ADR-0081 supersedes ADR-0076 decision 3's upper-only label).
 * @param textSecondary - Theme axis-text token — the label colour's inherit fallback (ADR 0080;
 *   the divider default of the LINE would render near-invisible text).
 */
const markEdge = (
    ml: EchartsMarkLine,
    color: string,
    bound: number,
    edge: EchartsMarkEdge,
    textSecondary: string,
): Record<string, unknown> => {
    // The adapter's `os` shadow formula, replicated: a set shadow emits blur/offsetY as v+1 in
    // the line's own colour (0/unset = off — no shadow keys at all).
    const shadowOn = typeof ml.shadow === 'number' && ml.shadow > 0;
    // The ONE per-edge selector (shared with the card): both read the same fields per edge.
    const cluster = edgeLabelOf(ml, edge);
    const atEnd = cluster.position === undefined || cluster.position === 'start' || cluster.position === 'end';
    return {
        yAxis: bound,
        lineStyle: {
            type: markLineStyleOf(ml),
            color,
            width: ml.width || 2,
            ...(shadowOn ? { shadowBlur: ml.shadow! + 1, shadowOffsetY: ml.shadow! + 1, shadowColor: color } : {}),
        },
        // ALWAYS a label block (ADR-0081): a textless edge falls to its resolved bound value —
        // the Wert-Fallback — styled like an authored text (explicit colour included), never
        // echarts' raw value default with its bg-contrast halo (ADR-0080).
        label: {
            formatter: cluster.text || String(bound),
            ...(cluster.position ? { position: cluster.position } : {}),
            ...(cluster.offset ? { distance: atEnd ? [-cluster.offset, 0] : [cluster.offset, 0] } : {}),
            ...(cluster.size ? { fontSize: cluster.size } : {}),
            color: markLabelColorOf(ml, edge, textSecondary),
        },
    };
};

/**
 * Marking markers attached to the first cartesian series of the target axis (echarts markLine/
 * markArea are series-level; the anchor is our Y-axis model, ADR-0061/0062).
 *
 * Per marking: both bounds resolved ⇒ a markArea BAND (fill 0–1, borderless, label-less) PLUS
 * two edge markLines carrying the full style cluster and their OWN label clusters — adapter
 * parity (ADR-0076 supersedes ADR-0062's „band replaces the edges" deviation; ADR-0081 gives
 * each edge its own cluster, superseding 0076's upper-only label). Exactly one bound ⇒ a single
 * markLine at that bound carrying its bound's cluster; neither ⇒ skipped. Style/label emit
 * sparse — every unset field leaves no key (three exceptions emit explicit defaults: the
 * width's 2, the always-present label block, and the label colour's inherit resolution —
 * ADR-0076/0080/0081, see {@link markEdge}).
 *
 * @param markLines - The marking configs (bounds resolved to numbers by the pipeline).
 * @param divider - Theme divider token — the default marking colour when none is explicit (ADR-0027).
 * @param textSecondary - Theme axis-text token — the label colour's inherit fallback (ADR 0080).
 */
const markMarkers = (
    markLines: EchartsMarkLine[],
    divider: string,
    textSecondary: string,
): { lineData: Record<string, unknown>[]; areaData: [Record<string, unknown>, Record<string, unknown>][] } => {
    const lineData: Record<string, unknown>[] = [];
    const areaData: [Record<string, unknown>, Record<string, unknown>][] = [];
    for (const ml of markLines) {
        const upper = numericBound(ml.upper);
        const lower = numericBound(ml.lower);
        const color = ml.color ?? divider;
        if (upper !== undefined && lower !== undefined) {
            // Band (ADR-0062/0076): the area carries ONLY the fill — borderless like the
            // adapter, and label-less (the adapter's area label is commented out upstream; the
            // labels ride the edges, one cluster each — ADR-0081). Fill defaults 0.2 (the
            // adapter's 0 renders invisible — documented deviation).
            areaData.push([
                {
                    yAxis: lower,
                    itemStyle: { color, borderWidth: 0, opacity: ml.fill ?? DEFAULT_MARK_FILL },
                },
                { yAxis: upper },
            ]);
            lineData.push(
                markEdge(ml, color, upper, 'upper', textSecondary),
                markEdge(ml, color, lower, 'lower', textSecondary),
            );
            continue;
        }
        const bound = upper ?? lower;
        if (bound === undefined) {
            continue; // nothing resolved — no marker, no crash
        }
        lineData.push(markEdge(ml, color, bound, upper !== undefined ? 'upper' : 'lower', textSecondary));
    }
    return { lineData, areaData };
};

/**
 * Attach a marker block (`markLine`/`markArea`) to a host series, merging DATA when the host
 * already carries one (the axis-fallback collapse — two axis-groups landing on one host).
 */
const attachMarker = (host: Record<string, unknown>, key: 'markLine' | 'markArea', data: unknown[]): void => {
    const existing = host[key] as { data?: unknown[] } | undefined;
    if (existing) {
        existing.data = [...(existing.data ?? []), ...data];
    } else {
        host[key] = { silent: true, ...(key === 'markLine' ? { symbol: 'none' } : {}), data };
    }
};

/**
 * Build one echarts `yAxis` entry from an {@link EchartsAxisConfig} + its index, applying the
 * smart defaults (ADR-0012): position axis-0 left / others right; splitlines axis-0-only; one colour
 * paints line + label + name.
 *
 * `alignTicks` is an EXPLICIT per-axis opt-in (ADR-0034, supersedes the ADR-0023 format-heuristic
 * smart-default): OFF unless the user sets it. echarts' `alignTicks:true` makes an axis re-tick to
 * match the FIRST value axis (axis 0 = the reference) — a cross-axis effect that, as a hidden default,
 * surprised users (an edit on axis 0 rippled to every follower). Making it opt-in removes the hidden
 * coupling; the configurator marks axis 0 as the reference and warns when a tick override
 * (min/max/splitNumber/minInterval) silently disables alignment (echarts ignores it then).
 *
 * The card's raw JSON escape hatch (ADR-0037) is folded at the END via `applyRawOverride`: parsed
 * and deep-merged UNDER this entry, so every key this builder emits wins its collisions while
 * everything it does not emit (label/name fonts, minorTick/minorSplitLine, splitArea, label
 * overflow/layout, logBase, boundaryGap, maxInterval, inverse, per-axis axisPointer, …) merges
 * through unchanged.
 */
const buildYAxisEntry = (
    a: EchartsAxisConfig,
    i: number,
    /** Theme divider token — the DEFAULT grid colour (ADR-0055 addendum: the grid is ONE colour). */
    divider: string,
    /**
     * Whether the EMITTED X axis sits at the top edge (ADR-0070 addendum 6): the X axis line
     * always sits at a rect edge (onZero is dead against a time/category axis, `Grid.js`), so
     * Achsen-Vorrang suppresses the horizontal extent-edge gridline it covers — the Y-MIN line
     * at 'bottom' (the default), the Y-MAX line at 'top'.
     */
    xAtTop: boolean,
    /** Default axis colour = first bound series' colour, when none is explicit (ADR-0018). */
    seriesColor?: string,
    /** Default axis name = first bound series' effective name, when none is explicit (ADR-0018). */
    seriesName?: string,
    /** Comma as the decimal separator for the DEFAULT numeric labels (ADR-0054). */
    comma?: boolean,
    /** The value-format facts every bound series shares (ADR-0057 unit + ADR-0058 texts). */
    seriesFacts?: SeriesValueFacts,
): Record<string, unknown> => {
    const entry: Record<string, unknown> = {
        type: a.log ? 'log' : 'value',
        position: a.position ?? (i === 0 ? 'left' : 'right'),
        offset: a.offset ?? 0,
        alignTicks: a.alignTicks ?? false,
        // ADR-0055 addendum: the grid colour is ALWAYS emitted — the divider default unifies the
        // horizontal Y splitLines with the vertical X splitLines (the X entry is an OBJECT whose
        // theme-floor merge supplies the divider, but this yAxis ARRAY wholesale replaces the
        // floor object, so a passive default would fall to echarts' light builtin — the two-grey
        // inconsistency, live-measured 2026-08-30). Authored grid colour/width/type win.
        // Achsen-Vorrang (ADR-0070 addendum 6): echarts' own extent-edge min/max gridlines are
        // ON again (full splitLine styling at the plot edges — the twins are gone) EXCEPT where
        // the X axis line covers the same edge: there the AXIS draws and the gridline yields
        // (suppressed, never overpainted). GUI-owned keys — raw cannot flip them back.
        splitLine: {
            show: a.splitLine ?? i === 0,
            showMinLine: xAtTop,
            showMaxLine: !xAtTop,
            lineStyle: {
                color: a.gridColor ?? divider,
                ...(a.gridWidth !== undefined ? { width: a.gridWidth } : {}),
                ...(a.gridType ? { type: LINE_STYLE_DASH[a.gridType] } : {}),
            },
        },
        // Card fields since ADR-0037 (were hard-emits with no GUI control, i.e. un-overridable
        // under the GUI-wins raw seam). Defaults = the former hard-emit values, so existing
        // widgets render identically.
        nameLocation: a.nameLocation ?? 'middle',
        nameGap: a.nameGap ?? AXIS_NAME_GAP,
    };
    // Empty string counts as "not set": an axis whose name was cleared, or one migrated from legacy
    // `yName:''`, must still inherit its bound series' name. `??` would let '' through and the truthy
    // guard below would then drop the name entirely — the "axis name never renders" bug.
    const axisName = a.name || seriesName;
    if (axisName) {
        entry.name = axisName;
    }
    if (a.min !== undefined) {
        entry.min = a.min;
    }
    if (a.max !== undefined) {
        entry.max = a.max;
    }
    if (a.scale) {
        entry.scale = true;
    }
    if (a.splitNumber !== undefined) {
        entry.splitNumber = a.splitNumber;
    }
    if (a.minInterval !== undefined) {
        entry.minInterval = a.minInterval;
    }
    // Always emit: echarts' value-axis `axisTick` default is 'auto', which resolves to FALSE when
    // the paired axis is time/category (ours is `type:'time'`). Without this the "Ticks zeigen"
    // switch (default on) and the chart disagree — ticks are absent on first render until the user
    // touches the switch. Explicit false still wins. The tick COLOUR (parity Build D, ADR-0055) is
    // sparse inside the same object — separate from the labels, unset = no lineStyle at all.
    entry.axisTick = { show: a.axisTick ?? true, ...(a.tickColor ? { lineStyle: { color: a.tickColor } } : {}) };
    if (a.nameRotate !== undefined) {
        entry.nameRotate = a.nameRotate;
    }
    const axisLabel: Record<string, unknown> = {};
    // Parity Build D (ADR-0055): label font size — additive fine-tuning under the one-colour idiom
    // (a set axis colour keeps painting the label COLOUR; this only sizes the text). Sparse: the
    // bare axis emits no axisLabel at all, exactly as before.
    if (a.labelFontSize !== undefined) {
        axisLabel.fontSize = a.labelFontSize;
    }
    if (a.format) {
        axisLabel.formatter = a.format;
    } else if (textFactsActive(seriesFacts) || seriesFacts?.unit || comma) {
        // ADR-0054 (adapter useComma): comma-separated DEFAULT numeric labels. ADR-0057: the axis
        // inherits the unit every bound series shares — appended to the default numeric labels,
        // the same explicit-beats-implicit rule as the colour/name inheritance above (an authored
        // format wins verbatim, mixing units inherits nothing). ADR-0058: shared bool/enum TEXTS
        // take over the ticks in `'axis'` mode (nearest state — a hit suppresses the unit).
        const axisMode = textFactsActive(seriesFacts) ? 'axis' : 'exact';
        axisLabel.formatter = (v: number): string => formatSeriesValue(v, seriesFacts, { comma }, axisMode);
    }
    const color = a.color ?? seriesColor;
    if (color) {
        // One colour codes axis line + label + name together (multi-axis legibility); defaults to the
        // first bound series' colour when no explicit axis colour is set (ADR-0018).
        axisLabel.color = color;
        entry.axisLine = { show: true, lineStyle: { color } };
        entry.nameTextStyle = { color };
    }
    if (Object.keys(axisLabel).length) {
        entry.axisLabel = axisLabel;
    }
    // ADR-0037: the per-axis raw override is folded UNDER the built entry (GUI wins collisions;
    // free keys merge through) — the same seam as the per-series raw (ADR-0015).
    return applyRawOverride(entry, a.raw);
};

/**
 * The all-deselected grid carrier (ADR-0074 Legenden-Folge): when every legend entry is
 * inactive the chart renders no real axis — this ONE silent axis keeps echarts' grid renderable
 * whatever the X gridlines switch says (addendum 6: the twins are gone; with the grid ON the X
 * min/max gridlines close the vertical edges in full style — the carrier is `show:false`, it
 * staffs no side for Achsen-Vorrang). min/max pinned so echarts' alignTicks cannot see it
 * (the ADR-0034 fixed-extent exclusion).
 */
const silentYAxis = (): Record<string, unknown> => ({
    type: 'value',
    position: 'left',
    offset: 0,
    alignTicks: false,
    min: 0,
    max: 1,
    show: false,
});

/** echarts valueFormatter lives in {@link buildTooltip} (shared across families). */

/**
 * Build the single time `xAxis` entry from the flat {@link EchartsXAxisConfig} (ADR-0035).
 *
 * The type stays hardcoded `time` — every data mode normalises its points to `[ts, val]`, so a
 * type switch would configure against a data model the pipeline does not deliver (D9). The X
 * axis is presentation only: no min/max (the time window belongs to the data mode), no
 * `inverse` (Advanced JSON territory). Both booleans are ALWAYS emitted so the switch state
 * and the rendered chart cannot diverge (default-audit rule): echarts' `splitLine` default for a
 * time axis is `false`, and `axisTick.show:'auto'` resolves TRUE for a time-x paired with a
 * value-y (`cartesianAxisHelper` checks the OTHER axis for an interval/log scale) — so `false` /
 * `true` are the honest defaults, matching what an unconfigured chart renders today.
 *
 * The axis colour (when explicit) paints line + labels + name together — same one-colour
 * legibility idiom as `buildYAxisEntry`. Unset = the theme's axis colours (`echartsTheme` floor).
 *
 * @param x - The flat X-Karte config (ADR-0035).
 * @param spanMs - The data span (all series, ms) — the Auto labelling's clock (ADR-0052): on the
 * time axis and the NUMBER bucket grid the moment formatter is ALWAYS emitted as a function
 * (authored pattern or adaptive Auto), so the raw JSON keeps its function-free contract while
 * `axisLabel.formatter` stays GUI-owned. STRING categories (ADR-0075) emit NO formatter — their
 * labels are the payload's own text.
 */
const buildXAxisEntry = (
    x: EchartsXAxisConfig,
    spanMs: number,
    categories?: number[] | string[],
): Record<string, unknown> => {
    // Two category flavours stay SEPARATE (ADR-0075): the ADR-0065 bucket grid is NUMBER
    // timestamps (the moment formatter below labels them — „Zeitformat der X-Karte gilt
    // weiter"); the table family's xCategories are STRING labels that ARE their own text —
    // no moment formatter, echarts' native category labelling renders them.
    const stringCategories = !!categories && typeof categories[0] === 'string';
    const entry: Record<string, unknown> = {
        // Category bars (ADR-0065) / table categories (ADR-0075): the category list IS the
        // axis. Everything else about the entry is shared; the time-axis-only tick-density
        // knobs are skipped on both flavours.
        ...(categories ? { type: 'category', data: categories } : { type: 'time' }),
        // Parity Build D (ADR-0055) + addendum 6: grid + tick styles ride their show-switch
        // objects, sparse — an unset style key stays absent so the raw override owns it wholesale
        // (colour/width/type each their own leaf). The min/max keys are NOT set here: they encode
        // Achsen-Vorrang and need the EMITTED y-axes' staffing, so buildCartesianOption stamps
        // them after the raw fold (ADR-0070 addendum 6).
        splitLine: {
            show: x.splitLine ?? false,
            ...buildGridLineStyle(x.gridColor, x.gridWidth, x.gridType),
        },
        axisTick: { show: x.axisTick ?? true, ...(x.tickColor ? { lineStyle: { color: x.tickColor } } : {}) },
    };
    // X position top/bottom (parity Build D): unset = no key, echarts keeps its 'bottom' default —
    // an authored 'bottom' emits verbatim (no visual change, but the choice round-trips). 'top'
    // additionally detaches the line from the Y-zero below (the onZero block).
    if (x.position) {
        entry.position = x.position;
    }
    if (x.name) {
        // 'middle' centres the name under the axis; the gap clears the tick labels below the line.
        entry.name = x.name;
        entry.nameLocation = 'middle';
        entry.nameGap = 30;
    }
    // Tick density knobs, conditional-emit like the Y-axis: unset = the echarts default (time-axis
    // splitNumber 6, no interval floor). `minInterval` counts MILLISECONDS on a time axis — the ms
    // semantics are the data mode's clock, not a window edge (min/max stay data-mode-owned, ADR-0035).
    // Meaningless on a category axis (the buckets ARE the ticks) — skipped there.
    if (!categories && x.splitNumber !== undefined) {
        entry.splitNumber = x.splitNumber;
    }
    if (!categories && x.minInterval !== undefined) {
        entry.minInterval = x.minInterval;
    }
    if (x.nameRotate !== undefined) {
        entry.nameRotate = x.nameRotate;
    }
    const axisLabel: Record<string, unknown> = {};
    if (!stringCategories) {
        // ADR-0052: the moment Time format — authored pattern, or the adaptive Auto derived from
        // the data span. Always a FUNCTION (the raw JSON stays function-free; the analysis pins
        // the key as GUI-owned). The locale follows the host language at format time. STRING
        // categories skip it — their labels are the payload's own text, moment has nothing to
        // format (ADR-0075 ticket 05).
        axisLabel.formatter = makeAxisLabelFormatter(x.format, spanMs);
    }
    if (x.labelRotate !== undefined) {
        // Angled time labels for narrow widgets; unset = 0° (the echarts default, no emit).
        axisLabel.rotate = x.labelRotate;
    }
    // Parity Build D (ADR-0055): label font size — sparse; unset keeps the block
    // formatter(+rotate)-only. On STRING categories with no label knobs at all the whole
    // axisLabel block is absent (the Object.keys gate below — nothing to author there).
    if (x.labelFontSize !== undefined) {
        axisLabel.fontSize = x.labelFontSize;
    }
    // ADR-0055 addendum: the axis line is ALWAYS emitted — the default X_AXIS_LINE_COLOR is the
    // pre-unification grid grey (the user-ordered swap: the grid goes divider, the axis line goes
    // light). The TICKS need no emission of their own: their stroke follows the axis line colour
    // (echarts rule, the ADR-0055 verified fact), so they ride along. An authored x.color still
    // paints line + labels + name together (the one-colour idiom).
    entry.axisLine = { show: true, lineStyle: { color: x.color ?? X_AXIS_LINE_COLOR } };
    if (x.color) {
        axisLabel.color = x.color;
        entry.nameTextStyle = { color: x.color };
    }
    if (x.offset || x.position === 'top') {
        // Pixel offset away from the grid — the X sibling of the Y-axis Versatz; echarts applies
        // it in the POSITION's direction (bottom → down, top → up). 0 counts as unset (it IS the
        // echarts default — a cleared field must also restore the onZero default, or
        // negative-data charts would visibly jump at "zero"). The axis line must ALSO be
        // detached from the Y-zero: the default `axisLine.onZero:true` pins the LINE to the
        // first Y-axis' zero (= the grid floor for positive data; any value-Y extent containing
        // 0 activates it) while the labels escape via their labelOffset — with an offset the
        // line stays put while ticks/labels move, with position:'top' only the labels reach
        // the top (cartesianAxisHelper.layout(), labelRotate even flips its sign). Both tear
        // the axis visually (the offset case SSR-verified). onZero:false moves line+ticks+
        // labels together; merged with a colour-set lineStyle when present.
        // `outerBoundsContain:'all'` (ADR-0024) reserves the space, dimension-general.
        if (x.offset) {
            entry.offset = x.offset;
        }
        const line = (entry.axisLine as Record<string, unknown> | undefined) ?? { show: true };
        entry.axisLine = { ...line, onZero: false };
    }
    if (Object.keys(axisLabel).length) {
        entry.axisLabel = axisLabel;
    }
    return entry;
};

/**
 * Build the cartesian G option.
 *
 * @param series - Resolved chart series (history / live / json → `[ts, val]`).
 * @param meta - Per-series rendering metadata from the `seriesConfig` blob.
 * @param p - Chart-wide + family presentation.
 */
export const buildCartesianOption = (
    series: readonly ChartSeries[],
    meta: readonly EchartsSeriesMeta[],
    p: PresentationConfig,
): EChartsOption => {
    // Guarantee ≥1 Y-axis: the editor allows deleting every axis (the last one too), but a cartesian
    // chart must always render at least one value axis. An empty `p.yAxes` — or one where every
    // axis is unbound (only reachable through hand-edited JSON since ADR-0069) — falls back to a
    // single default-config axis (left, splitLine on) — `buildYAxisEntry({}, 0, 1)` resolves
    // exactly that.
    const allAxes: readonly EchartsAxisConfig[] = p.yAxes.length ? p.yAxes : [{}];
    const total = allAxes.length;
    // The chart-level value-format context (ADR-0057): the comma switch + the tooltip cluster as
    // the per-fact fallback for series without their own facts — the shared projection.
    const chartFmt = chartValueFormatOf(p);
    const entries = series.map((s, i) => {
        const e = applyRawOverride(
            buildCartesianSeriesEntry(s, meta[i], p.palette[i % p.palette.length], i, p.cartesianType, chartFmt),
            meta[i]?.raw,
        );
        // Clamp the per-series axis index to the configured axes (ADR-0012): a removed axis must
        // not leave a series bound to a non-existent yAxisIndex (echarts would drop it).
        const yi = typeof e.yAxisIndex === 'number' ? e.yAxisIndex : 0;
        e.yAxisIndex = yi >= total ? 0 : yi;
        return e;
    });
    // Unbound axes are never emitted (ADR-0066): an axis no series binds rests — kept in the
    // editor with its config, absent from the chart (no phantom, no reserved grid space).
    // Legenden-Folge (ADR-0074) widens the criterion to ACTIVELY bound: a series whose legend
    // entry is deselected — runtime selection (name→active) with „Nur in Legende" (ADR-0060) as
    // the per-name config fallback — does not keep its axis alive either. Deselected series
    // STAY emitted (echarts needs them for the legend); their refs fall to the clamp/remap
    // below. Keep only the actively-bound axes and remap the series refs onto the compacted
    // array — echarts matches `yAxisIndex` against the EMITTED array, so a hole in the middle
    // would dangle every higher ref. The remap runs AFTER the marking host lookup below, which
    // matches against the configured indices.
    const active = (i: number): boolean => {
        const name = entries[i]?.name;
        // Entry names are always strings (the series builder falls back to `Series N`); the
        // guard is for the reader — an unnameable entry counts as active.
        return typeof name === 'string' ? legendActiveOf(p.legendSelection, name, meta[i]?.legendOnly === true) : true;
    };
    const boundAxes = new Set(entries.map(e => e.yAxisIndex as number));
    const activeBoundAxes = new Set(entries.filter((_e, i) => active(i)).map(e => e.yAxisIndex as number));
    const emittedIdx = allAxes.map((_a, i) => i).filter(i => activeBoundAxes.has(i));
    // The all-deselected chart (series exist, none active) renders NO real axis — the empty
    // plot (ADR-0074): ONE silent carrier (see silentYAxis) keeps echarts' grid renderable
    // whatever the grid switch says (addendum 6 — the X min/max gridlines close the vertical
    // edges; the invisible carrier staffs no side).
    const allInactive = entries.length > 0 && emittedIdx.length === 0;
    const axes: readonly EchartsAxisConfig[] = emittedIdx.length ? emittedIdx.map(i => allAxes[i]) : [{}];
    const axisRemap = new Map<number, number>(emittedIdx.map((old, pos) => [old, pos]));
    // Marking markers attach to a SERIES, and echarts draws them on that series' axis. With
    // multi-axis (ADR-0023) a marking must hang on a series bound to its own axis, not stuck on
    // entries[0] (which would draw a 2000 W marking on a 0–40 °C axis). Group markings by their
    // yAxisIndex and attach each group's lines AND bands to the FIRST ACTIVE series on that
    // axis (ADR-0074 re-anchor): a deselected host does not draw its markers, so the marking
    // follows the first binder the legend still shows — it dies with the AXIS (every binder
    // inactive), not with its config host. A marking anchored to an unbound or fully
    // deselected axis rests with it (ADR-0066/0074): no fallback onto another axis' scale — it
    // returns when an active series (re-)binds the axis.
    if (p.markLines.length > 0 && entries.length > 0) {
        const byAxis = new Map<number, EchartsMarkLine[]>();
        for (const ml of p.markLines) {
            const ax = typeof ml.yAxisIndex === 'number' ? ml.yAxisIndex : 0;
            const list = byAxis.get(ax);
            if (list) {
                list.push(ml);
            } else {
                byAxis.set(ax, [ml]);
            }
        }
        for (const [ax, marks] of byAxis) {
            if (!activeBoundAxes.has(ax)) {
                continue; // target axis unbound or fully deselected (hand-edited JSON / stale index) — the marking rests
            }
            const host = entries.find((e, idx) => e.yAxisIndex === ax && active(idx));
            if (!host) {
                continue; // unreachable while activeBoundAxes is derived from entries — defensive
            }
            const { lineData, areaData } = markMarkers(marks, p.themeTokens.divider, p.themeTokens.textSecondary);
            if (lineData.length) {
                attachMarker(host, 'markLine', lineData);
            }
            if (areaData.length) {
                attachMarker(host, 'markArea', areaData);
            }
        }
    }
    // Remap the series refs onto the compacted (bound-only) emission array. `axisRemap.get` is
    // defined for every entry (the bound set was derived from exactly these refs).
    for (const e of entries) {
        e.yAxisIndex = axisRemap.get(e.yAxisIndex as number) ?? 0;
    }

    const names = entries.map(e => e.name as string);
    // The per-series Wert-Formatter facts, keyed by EFFECTIVE series name (ADR-0057) — the same
    // names the legend lists and the tooltip rows carry, so every surface resolves its row's
    // facts by the name it already knows.
    const facts: SeriesFactsByName = {};
    for (let i = 0; i < entries.length; i++) {
        facts[names[i]] = factsOfMeta(meta[i]);
    }
    /** The value-format facts of every series BOUND to an axis (the shared axis-inheritance base). */
    const boundFacts = (axisIndex: number): SeriesValueFacts[] => {
        const bound: SeriesValueFacts[] = [];
        for (let i = 0; i < entries.length; i++) {
            if ((entries[i].yAxisIndex as number) === axisIndex) {
                bound.push(factsOfMeta(meta[i]));
            }
        }
        return bound;
    };
    // The unit an axis inherits (ADR-0057): the one unit EVERY bound series shares — a unitless
    // or divergent bound series inherits nothing (the axis stays unit-free rather than lying
    // with one series' unit).
    const axisUnit = (bound: SeriesValueFacts[]): string | undefined => {
        let unit: string | undefined;
        for (const f of bound) {
            if (!f.unit) {
                return undefined; // a unitless bound series → no common unit
            }
            if (unit === undefined) {
                unit = f.unit;
            } else if (unit !== f.unit) {
                return undefined; // mixed units → none
            }
        }
        return unit;
    };
    /** Order-insensitive states equality (an authored row order is not a divergent mapping). */
    const sameStates = (a?: Record<string, string>, b?: Record<string, string>): boolean => {
        if (!a || !b) {
            return !a && !b;
        }
        return Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(k => a[k] === b[k]);
    };
    // The TEXT facts an axis inherits (ADR-0058): every bound series must carry IDENTICAL
    // bool/enum texts — a textless (or divergent) bound series inherits nothing, so a numeric
    // companion series never gets state labels it does not own pinned under its ticks. Returns
    // the TEXT fields ONLY (unit/decimals stay owned by the rules above — the ADR-0057
    // "decimals never inherit" contract must not leak through a spread).
    const axisTextFacts = (bound: SeriesValueFacts[]): SeriesValueFacts | undefined => {
        if (!bound.length || !bound.every(textFactsActive)) {
            return undefined;
        }
        const [first] = bound;
        const identical = bound.every(
            f => f.trueText === first.trueText && f.falseText === first.falseText && sameStates(f.states, first.states),
        );
        return identical
            ? {
                  trueText: first.trueText,
                  falseText: first.falseText,
                  ...(first.states ? { states: first.states } : {}),
              }
            : undefined;
    };
    // The Auto labelling's clock (ADR-0052): the data span across ALL series, recomputed on every
    // build — a data update re-derives the adaptive resolution. Category bars (ADR-0065) carry
    // plain bucket arrays; their span is the category grid's extent.
    const spanMs = p.barCategories?.length
        ? Math.max(...p.barCategories) - Math.min(...p.barCategories)
        : dataSpanMs(series as ChartSeries[] as Parameters<typeof dataSpanMs>[0]);
    const divider = p.themeTokens.divider;
    const xGridOn = p.xAxis.splitLine ?? false;
    // The X entry builds FIRST (ADR-0070 addendum 6): the Y entries' Achsen-Vorrang min/max keys
    // need the EMITTED X position (post-raw-fold — a raw `{ position: 'top' }` counts), and the X
    // entry's own min/max keys need the emitted Y staffing. The X category source (ADR-0075): the
    // bucket grid (ADR-0065, number timestamps) or the table family's string labels — whichever
    // rides the presentation. Mutually exclusive by construction (barCategories is
    // history-fetch-only, xCategories table-only).
    const xCategories = p.barCategories ?? (p.xCategories?.length ? p.xCategories : undefined);
    const xAxisEntry = applyRawOverride(buildXAxisEntry(p.xAxis, spanMs, xCategories), p.xAxis.raw);
    const xAtTop = xAxisEntry.position === 'top';
    // Display re-stagger (ADR-0074): while the selection dropped ≥1 real axis, the VISIBLE axes
    // re-slot into the standard interleaving (`axisPosition` parity over the visible sequence —
    // balanceAxes semantics, display-only: sides may flip on a legend click). With everything
    // visible the authored geometry renders verbatim — no re-slot, byte-identical to the
    // pre-0074 chart (there is no display-time balance without a hidden axis; authored
    // position/Versatz-Feinjustur never re-arranges at runtime).
    const selectionDropped = [...boundAxes].some(i => !activeBoundAxes.has(i));
    const displayAxes =
        selectionDropped && emittedIdx.length ? axes.map((a, i) => ({ ...a, ...axisPosition(i) })) : axes;
    // Y-axes: one entry per ACTIVELY BOUND axis (ADR-0012; ADR-0066's bound-only filter widened
    // by ADR-0074's Legenden-Folge; the filter is hand-edited-JSON defense since ADR-0069 —
    // in-state every axis is bound). The all-deselected chart emits no real axis at all — the
    // ONE silent carrier (ADR-0074) keeps the grid renderable whatever the grid switch says;
    // with the grid ON the X min/max gridlines close the vertical edges in full splitLine style
    // (addendum 6 — the carrier is invisible, it staffs no side).
    // position/offset place the axes side-by-side (re-slotted above while selection dropped one);
    // alignTicks is an explicit per-axis opt-in (ADR-0034, off by default — no format heuristic);
    // the axis colour AND name default to the axis' OWNER series' effective values when neither
    // is explicit (ADR-0018; owner-first since ADR-0068 — the incumbent series keeps the
    // identity, a rebinding newcomer standing earlier in the array never steals it; the owner
    // matches by meta id in history/live, by payload name in JSON); the axis LABELS inherit the
    // bound series' shared unit (ADR-0057) and the shared text facts (ADR-0058) — decimals
    // deliberately NOT inherited (whose would a shared axis clamp to?).
    const yAxisEntries: Record<string, unknown>[] = allInactive
        ? [silentYAxis()]
        : displayAxes.map((a, i) => {
              const firstBinder = entries.find(e => e.yAxisIndex === i);
              const ownerIdx =
                  a.owner === undefined
                      ? -1
                      : meta.findIndex(m => m?.id === a.owner) >= 0
                        ? meta.findIndex(m => m?.id === a.owner)
                        : series.findIndex(s => s.name === a.owner);
              const ownerEntry = ownerIdx >= 0 ? entries[ownerIdx] : undefined;
              const bound = ownerEntry !== undefined && ownerEntry.yAxisIndex === i ? ownerEntry : firstBinder;
              const sc = bound?.color;
              const seriesColor = typeof sc === 'string' ? sc : undefined;
              const sn = bound?.name;
              const seriesName = typeof sn === 'string' ? sn : undefined;
              const boundFactsList = boundFacts(i);
              const unit = axisUnit(boundFactsList);
              const texts = axisTextFacts(boundFactsList);
              const seriesFacts: SeriesValueFacts | undefined =
                  unit || texts ? { ...(unit ? { unit } : {}), ...texts } : undefined;
              return buildYAxisEntry(a, i, divider, xAtTop, seriesColor, seriesName, p.decimalComma, seriesFacts);
          });
    // Grid flush to the canvas edges with FULL label+name containment (ADR-0024, supersedes
    // ADR-0022). echarts v6's `outerBoundsContain: 'all'` — the modern replacement for the deprecated
    // `containLabel:true` (which maps to `'axisLabel'` and reserves tick labels + offset-axis labels
    // but NOT the axis NAME) — owns the ENTIRE horizontal reservation: tick labels, axis names, AND
    // the offset-shifted multi-axis labels. `layOutGridByOuterBounds` folds each axis `offset` into
    // its position bound and expands the grid rect for every label + name. So `grid.left/right = 0`
    // with `outerBoundsMode: 'same'` (the grid rect IS the fixed outer boundary) puts the outermost
    // axis + its label + its NAME flush against the widget border — nothing clips, no dead margin.
    // (`containLabel:true` let the outermost offset-axis name slip to x<0 at grid 0 → it vanished;
    // the earlier `'1%' + maxOffset` had masked that by over-reserving. `nameGap` was also 50 →
    // names floated far from their axes; tightened via AXIS_NAME_GAP.)
    //
    // Plot edges (ADR-0070 addendum 6 — the twins are GONE): echarts' own extent-edge gridlines
    // (`showMinLine`/`showMaxLine`) close the open edges in the FULL effective splitLine style —
    // GUI colour/width/type AND whatever the raw JSON layers on top (the very thing a synthesized
    // border axis could never inherit, the addendum-6 trigger). Two rules govern them:
    //
    // • **Achsen-Vorrang** (axis precedence): where an axis LINE sits exactly on an edge, the
    //   AXIS draws (its own style) and the gridline there is suppressed — never overpainted.
    //   Vertical: an emitted VISIBLE offset-0 axis owns its side (stamping below; the silent
    //   carrier staffs nothing). Horizontal: the X axis line always sits at a rect edge (onZero
    //   is dead against time/category axes, `Grid.js`) — 'bottom' (default) owns the bottom,
    //   'top' owns the top (handled inside buildYAxisEntry via xAtTop).
    // • **Grid inset**: `grid.left/right = ceil(effectiveWidth / 2)` while the grid is ON, so a
    //   stroke centered on the canvas-flush edge keeps its full width (the addendum-3 half-cut;
    //   width from the GUI field, the raw JSON, or 1). Left is usually interior anyway (labels
    //   reserve the space) — the inset only bites the flush side, and saves the all-right-axis
    //   case. Capped at 10px so an absurd raw width cannot shred the layout.
    // With the grid OFF the edges stay open (addendum 4, unchanged): gridlines are grid elements,
    // real axis lines are not.
    const staffedSide = (side: 'left' | 'right'): boolean =>
        // VISIBLE staffing only: a hidden axis (the silent carrier's show:false, or a raw
        // `{ "axisLine": { "show": false } }` that hides the line) owns no edge — nothing draws
        // there, so the extent gridline must not yield to it.
        yAxisEntries.some(
            e =>
                e.position === side &&
                (e.offset ?? 0) === 0 &&
                e.show !== false &&
                (e.axisLine as { show?: boolean } | undefined)?.show !== false,
        );
    const xSplit = xAxisEntry.splitLine as Record<string, unknown>; // always emitted by the builder
    if (xGridOn) {
        // Stamped post-raw-fold (GUI-owned) and ONLY while the grid is on: with the grid off no
        // gridline exists, so the keys stay absent — the emitted truth is honest on every switch
        // state and pinning "grid off → no extent gridlines" stays testable at the option level.
        xSplit.showMinLine = !staffedSide('left');
        xSplit.showMaxLine = !staffedSide('right');
    }
    const gridInset = xGridOn ? Math.min(10, Math.ceil((p.xAxis.gridWidth ?? rawGridWidth(p.xAxis.raw) ?? 1) / 2)) : 0;
    const option: Record<string, unknown> = {
        // "Nur in Legende" (ADR-0060): the adapter's `hide` — the series stays emitted, its
        // legend entry lands PRE-DESELECTED (`legend.selected`, the ADR-0054 seam laid for this),
        // so the chart renders without it and a legend click brings it back.
        legend: buildLegend(
            p,
            names,
            entries.filter((e, i) => meta[i]?.legendOnly).map(e => e.name as string),
            facts,
        ),
        // The tooltip's time header follows the same Time format (ADR-0052) — one format, two
        // surfaces; an authored tooltipTemplate still wins inside buildTooltip. The per-series
        // facts (ADR-0057) ride along for the row formatting. STRING categories (ADR-0075) take
        // the category-name header instead — a moment header would render nothing (no ts).
        tooltip: buildTooltip(p, { format: p.xAxis.format, category: !!p.xCategories?.length }, facts),
        grid: {
            left: gridInset,
            right: gridInset,
            top: 30,
            bottom: p.dataZoomSlider ? 48 : 28,
            outerBoundsMode: 'same',
            outerBoundsContain: 'all',
        },
        // The X raw (ADR-0037 addendum) folds UNDER the built entry like the Y cards' — the card
        // wins collisions; `xAxis` rides REPLACE_MERGE (ADR-0036) so deleting a raw key reverts.
        // Always the SINGLE object (addendum 6: no top-mirror twin array any more — the theme
        // floor's object merge survives naturally, no stamping needed).
        xAxis: xAxisEntry,
        yAxis: yAxisEntries,
        series: entries,
        animation: p.animation,
        // Slider + easing drive BOTH the enter animation (animationDuration/Easing) AND the
        // data-update animation (animationDurationUpdate/EasingUpdate) — one honest knob, so a live
        // tick honours the chosen value instead of falling back to echarts' update defaults
        // (500 ms / cubicInOut). Duration is always emitted (finite, default 600); the old truthy
        // guard dropped it at 0, so "0 = instant" became the ~1 s default.
        animationDuration: p.animationDuration,
        animationDurationUpdate: p.animationDuration,
        ...(p.animationEasing ? { animationEasing: p.animationEasing } : {}),
        ...(p.animationEasing ? { animationEasingUpdate: p.animationEasing } : {}),
    };

    if (p.dataZoomSlider || p.dataZoomInside) {
        const zoom: Record<string, unknown>[] = [];
        if (p.dataZoomInside) {
            zoom.push({ type: 'inside', start: 0, end: 100 });
        }
        if (p.dataZoomSlider) {
            zoom.push({ type: 'slider', start: 0, end: 100, height: 18, bottom: 8 });
        }
        option.dataZoom = zoom;
    }

    if (p.visualMap?.enabled) {
        // Value→colour ramp: the user's parsed scale, or the theme-derived default ramp when empty
        // (ADR-0027). `colors` is always an array (parseColorScale never returns null), so the empty
        // case is `.length === 0`, not nullish — a plain `??` would never fall through.
        const ramp =
            p.visualMap.colors && p.visualMap.colors.length
                ? p.visualMap.colors
                : [p.themeTokens.primary, p.themeTokens.success, p.themeTokens.warning, p.themeTokens.error];
        option.visualMap = {
            show: false,
            min: p.visualMap.min ?? 0,
            max: p.visualMap.max ?? 100,
            inRange: { color: ramp },
            dimension: 1,
        };
    }

    return option as unknown as EChartsOption;
};
