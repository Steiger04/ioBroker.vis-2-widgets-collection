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
import { buildLegend } from '../presentation';
import { dataSpanMs, makeAxisLabelFormatter } from '../timeFormat';
import { formatChartValue } from '../valueFormat';
import { applyRawOverride } from '../utils/mergeOption';
import type { ChartSeries, EchartsSeriesMeta, PresentationConfig } from './types';
import { buildTooltip, makeValueFormatter } from './tooltip';

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
    /** Chart-level value formatter for BAR labels (parity Build D); undefined = echarts' own default text. */
    labelFmt?: (v: unknown) => string,
): Record<string, unknown> => {
    // Per-series override wins; otherwise inherit the chart's cartesian type (ADR-0008 r3).
    // Legacy `type:'area'` (ADR-0008 r4 removed it) matches neither 'line' nor 'bar' → falls
    // through to `defaultType`, which a legacy 'area' chart normalises to 'line' upstream.
    const rawType = m?.type;
    const type: EchartsCartesianType = rawType === 'bar' ? 'bar' : rawType === 'line' ? 'line' : defaultType;
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
        // Bar labels carry the parity Build D knob cluster (position/size/colour/chart-level value
        // formatting); a LINE label stays the bare switch — position semantics differ per type, and
        // the line family never reads the bar knobs.
        entry.label =
            type === 'bar'
                ? {
                      show: true,
                      ...(m.labelPosition ? { position: m.labelPosition } : {}),
                      ...(m.labelFontSize !== undefined ? { fontSize: m.labelFontSize } : {}),
                      ...(m.labelColor ? { color: m.labelColor } : {}),
                      ...(labelFmt ? { formatter: labelFmt } : {}),
                  }
                : { show: true };
    }
    if (m?.stack) {
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
    } else {
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
    }
    return entry;
};

/**
 * Threshold markLines attached to the first cartesian series (echarts markLine is series-level).
 *
 * @param markLines - The threshold mark-line configs.
 * @param divider - Theme divider token — the default markLine colour when none is explicit (ADR-0027).
 */
const markLineOption = (markLines: EchartsMarkLine[], divider: string): Record<string, unknown> | undefined => {
    if (!markLines.length) {
        return undefined;
    }
    return {
        silent: true,
        symbol: 'none',
        data: markLines.map(ml => ({
            yAxis: ml.value,
            lineStyle: { type: ml.dashed ? 'dashed' : 'solid', color: ml.color ?? divider },
            ...(ml.label ? { label: { formatter: ml.label } } : {}),
        })),
    };
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
    /** Default axis colour = first bound series' colour, when none is explicit (ADR-0018). */
    seriesColor?: string,
    /** Default axis name = first bound series' effective name, when none is explicit (ADR-0018). */
    seriesName?: string,
    /** Comma as the decimal separator for the DEFAULT numeric labels (ADR-0054). */
    comma?: boolean,
): Record<string, unknown> => {
    const entry: Record<string, unknown> = {
        type: a.log ? 'log' : 'value',
        position: a.position ?? (i === 0 ? 'left' : 'right'),
        offset: a.offset ?? 0,
        alignTicks: a.alignTicks ?? false,
        // Parity Build D (ADR-0055): grid colour rides the show switch object, sparse — unset
        // leaves splitLine a bare {show} so the raw override keeps owning lineStyle wholesale.
        splitLine: { show: a.splitLine ?? i === 0, ...(a.gridColor ? { lineStyle: { color: a.gridColor } } : {}) },
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
    } else if (comma) {
        // ADR-0054 (adapter useComma): comma-separated DEFAULT numeric labels. An authored format
        // wins verbatim (explicit beats implicit — the same rule ticket 05 fixes for the
        // Wert-Formatter's axis inheritance).
        axisLabel.formatter = (v: number): string => formatChartValue(v, undefined, true);
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

/** echarts valueFormatter lives in {@link buildTooltip} (shared across families). */

/**
 * Build the single time `xAxis` entry from the flat {@link EchartsXAxisConfig} (ADR-0035).
 *
 * The type stays hardcoded `time` — every data mode normalises its points to `[ts, val]`, so a
 * type switch would configure against a data model the pipeline does not deliver (D9). The X
 * axis is presentation only: no min/max (the time window belongs to the data mode), no position,
 * no `inverse` (Advanced JSON territory). Both booleans are ALWAYS emitted so the switch state
 * and the rendered chart cannot diverge (default-audit rule): echarts' `splitLine` default for a
 * time axis is `false`, and `axisTick.show:'auto'` resolves TRUE for a time-x paired with a
 * value-y (`cartesianAxisHelper` checks the OTHER axis for an interval/log scale) — so `false` /
 * `true` are the honest defaults, matching what an unconfigured chart renders today.
 *
 * The axis colour (when explicit) paints line + labels + name together — same one-colour
 * legibility idiom as `buildYAxisEntry`. Unset = the theme's axis colours (`echartsTheme` floor).
 *
 * @param x - The flat X-Karte config (ADR-0035).
 * @param spanMs - The data span (all series, ms) — the Auto labelling's clock (ADR-0052): the
 * moment formatter is ALWAYS emitted as a function (authored pattern or adaptive Auto), so the
 * raw JSON keeps its function-free contract while `axisLabel.formatter` stays GUI-owned.
 */
const buildXAxisEntry = (x: EchartsXAxisConfig, spanMs: number): Record<string, unknown> => {
    const entry: Record<string, unknown> = {
        type: 'time',
        // Parity Build D (ADR-0055): grid + tick colours ride their show-switch objects, sparse —
        // unset leaves both a bare {show} so the raw override keeps owning lineStyle wholesale.
        splitLine: { show: x.splitLine ?? false, ...(x.gridColor ? { lineStyle: { color: x.gridColor } } : {}) },
        axisTick: { show: x.axisTick ?? true, ...(x.tickColor ? { lineStyle: { color: x.tickColor } } : {}) },
    };
    // X position top/bottom (parity Build D): unset = no key, echarts keeps its 'bottom' default —
    // an authored 'bottom' emits verbatim (no visual change, but the choice round-trips).
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
    if (x.splitNumber !== undefined) {
        entry.splitNumber = x.splitNumber;
    }
    if (x.minInterval !== undefined) {
        entry.minInterval = x.minInterval;
    }
    if (x.nameRotate !== undefined) {
        entry.nameRotate = x.nameRotate;
    }
    const axisLabel: Record<string, unknown> = {
        // ADR-0052: the moment Time format — authored pattern, or the adaptive Auto derived from
        // the data span. Always a FUNCTION (the raw JSON stays function-free; the analysis pins
        // the key as GUI-owned). The locale follows the host language at format time.
        formatter: makeAxisLabelFormatter(x.format, spanMs),
    };
    if (x.labelRotate !== undefined) {
        // Angled time labels for narrow widgets; unset = 0° (the echarts default, no emit).
        axisLabel.rotate = x.labelRotate;
    }
    // Parity Build D (ADR-0055): label font size — sparse inside the always-present axisLabel
    // block; unset keeps it formatter(+rotate)-only.
    if (x.labelFontSize !== undefined) {
        axisLabel.fontSize = x.labelFontSize;
    }
    if (x.color) {
        entry.axisLine = { show: true, lineStyle: { color: x.color } };
        axisLabel.color = x.color;
        entry.nameTextStyle = { color: x.color };
    }
    if (x.offset) {
        // Pixel offset away from the grid (bottom → down) — the X sibling of the Y-axis Versatz.
        // 0 counts as unset (it IS the echarts default — a cleared field must also restore the
        // onZero default, or negative-data charts would visibly jump at "zero"). The axis line
        // must ALSO be detached from the Y-zero: the default `axisLine.onZero:true` pins the LINE
        // to the first Y-axis' zero (= the grid floor for positive data) while ticks and labels
        // follow the offset — the axis visually splits (SSR-verified). onZero:false moves
        // line+ticks+labels together; merged with a colour-set lineStyle when both are present.
        // `outerBoundsContain:'all'` (ADR-0024) reserves the space, dimension-general.
        entry.offset = x.offset;
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
    // chart must always render at least one value axis. An empty `p.yAxes` falls back to a single
    // default-config axis (left, splitLine on) — `buildYAxisEntry({}, 0, 1)` resolves exactly that.
    const axes: readonly EchartsAxisConfig[] = p.yAxes.length ? p.yAxes : [{}];
    const total = axes.length;
    // Bar label values ride the CHART-level formatting (parity Build D; per-series units arrive
    // with the Wert-Formatter, issue 05) — gated exactly like the tooltip's valueFormatter: only
    // when one of the knobs (units / decimals / comma) is authored, else echarts' own label text.
    const labelFmt =
        p.tooltipUnits || p.tooltipDecimals !== undefined || p.decimalComma
            ? makeValueFormatter(p.tooltipUnits, p.tooltipDecimals, p.decimalComma)
            : undefined;
    const entries = series.map((s, i) => {
        const e = applyRawOverride(
            buildCartesianSeriesEntry(s, meta[i], p.palette[i % p.palette.length], i, p.cartesianType, labelFmt),
            meta[i]?.raw,
        );
        // Clamp the per-series axis index to the configured axes (ADR-0012): a removed axis must
        // not leave a series bound to a non-existent yAxisIndex (echarts would drop it).
        const yi = typeof e.yAxisIndex === 'number' ? e.yAxisIndex : 0;
        e.yAxisIndex = yi >= total ? 0 : yi;
        return e;
    });
    // Threshold mark-lines attach to a SERIES, and echarts draws them on that series' axis. With
    // multi-axis (ADR-XXXX) a threshold must hang on a series bound to its own axis, not stur on
    // entries[0] (which would draw a 2000 W threshold on a 0–40 °C axis). Group thresholds by their
    // yAxisIndex and attach each group to the first series on that axis (fall back to entries[0]
    // when an axis has no series — rare; groups then merge onto the one host).
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
        for (const [ax, lines] of byAxis) {
            const host = entries.find(e => e.yAxisIndex === ax) ?? entries[0];
            const opt = markLineOption(lines, p.themeTokens.divider);
            if (!opt) {
                continue;
            }
            if (host.markLine) {
                // Fallback collapse: two axis-groups landed on the same host (no series on either
                // axis) — merge their data so neither threshold is lost.
                const prev = (host.markLine as { data?: unknown[] }).data ?? [];
                (host.markLine as { data: unknown[] }).data = [...prev, ...((opt as { data: unknown[] }).data ?? [])];
            } else {
                host.markLine = opt;
            }
        }
    }

    const names = entries.map(e => e.name as string);
    // The Auto labelling's clock (ADR-0052): the data span across ALL series, recomputed on every
    // build — a data update re-derives the adaptive resolution.
    const spanMs = dataSpanMs(series);
    // Y-axes: one entry per configured axis (ADR-0012). position/offset place them side-by-side;
    // alignTicks is an explicit per-axis opt-in (ADR-0034, off by default — no format heuristic);
    // the axis colour AND name default to the first bound series' effective values when neither is
    // explicit (ADR-0018).
    const yAxisEntries = axes.map((a, i) => {
        const bound = entries.find(e => e.yAxisIndex === i);
        const sc = bound?.color;
        const seriesColor = typeof sc === 'string' ? sc : undefined;
        const sn = bound?.name;
        const seriesName = typeof sn === 'string' ? sn : undefined;
        return buildYAxisEntry(a, i, seriesColor, seriesName, p.decimalComma);
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
    const option: Record<string, unknown> = {
        legend: buildLegend(p, names),
        // The tooltip's time header follows the same Time format (ADR-0052) — one format, two
        // surfaces; an authored tooltipTemplate still wins inside buildTooltip.
        tooltip: buildTooltip(p, { format: p.xAxis.format }),
        grid: {
            left: 0,
            right: 0,
            top: 30,
            bottom: p.dataZoomSlider ? 48 : 28,
            outerBoundsMode: 'same',
            outerBoundsContain: 'all',
        },
        // The X raw (ADR-0037 addendum) folds UNDER the built entry like the Y cards' — the card
        // wins collisions; `xAxis` rides REPLACE_MERGE (ADR-0036) so deleting a raw key reverts.
        xAxis: applyRawOverride(buildXAxisEntry(p.xAxis, spanMs), p.xAxis.raw),
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
