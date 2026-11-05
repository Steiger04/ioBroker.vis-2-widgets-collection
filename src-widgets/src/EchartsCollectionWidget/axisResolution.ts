/**
 * The axis and series identity rules at runtime (ADR-0103 K3) — the ONE place the cartesian
 * builder, the pipeline, the colour-scale lookup and the editor read how a series binds an
 * axis, which axes the chart emits, which series names/colours an axis, and what colour and
 * name a series effectively wears.
 *
 * @module EchartsCollectionWidget/axisResolution
 * @remarks
 * Before ADR-0103 the builder re-built these rules inline and the editor's `axisSight`
 * "mirrored" them (only comments said the two agree), and the runtime builder imported its
 * axis geometry from the editor directory against the ADR-0083 import direction. The editor
 * module now RE-EXPORTS the helpers that live here under their old names (ADR-0099 decision 6
 * addendum) and keeps only its pure editor sights (labels, card order, Achsen-Platz, the JSON
 * binding views).
 *
 * The rules:
 *  - **Materialisation** (Q7): an undefined (or non-numeric) binding index reads as axis 0.
 *  - **Clamp** (ADR-0012): an index at/after the configured total falls back to axis 0 — the
 *    stored value stays untouched, the stale-index validation explains the divergence.
 *  - **Bound / actively bound** (ADR-0066, ADR-0074 Legenden-Folge): only axes an ACTIVE series
 *    binds are emitted; deselected series stay emitted and remap with the rest.
 *  - **Remap**: the emitted axes are compacted in configured order; a series ref points into
 *    the EMITTED array (echarts matches `yAxisIndex` against it).
 *  - **All inactive**: series exist, none active → one silent carrier axis (ADR-0074).
 *  - **Display re-stagger**: while the selection dropped an axis, the visible axes re-slot into
 *    the standard interleaving ({@link axisPosition}); otherwise the authored geometry verbatim.
 *  - **Namensgeber** (ADR-0018/0068): the axis' owner series (by meta id, else payload name)
 *    while it still binds the axis, else its first binder.
 *  - **Marker host** (ADR-0023/0074): the first ACTIVE series on a marking's axis; a marking on
 *    an unbound or fully deselected axis rests.
 */
import type { EchartsAxisConfig } from '../types/field-definitions/echarts-fields';
import { legendActiveOf } from './presentation';

export const AXIS_STAGGER_STAGE = 80;

/**
 * Position + offset for the i-th auto-created axis: alternate left/right, 80 px stagger per side
 * (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × stage`). Geometry only — safe to re-apply on
 * re-arrange without clobbering the rest of an axis config (id/name/colour/min/max/…).
 */
export const axisPosition = (i: number): { position: 'left' | 'right'; offset: number } => ({
    position: i % 2 ? 'right' : 'left',
    offset: Math.floor(i / 2) * AXIS_STAGGER_STAGE,
});

/** The materialisation rule on a raw index: anything but a number binds axis 0. */
const materialize = (yi: unknown): number => (typeof yi === 'number' ? yi : 0);

/**
 * The binding index a series EFFECTIVELY binds (Q7): an undefined `yAxisIndex` materialises to
 * axis 0. The editor's display helpers read through here so the editor shows what the chart
 * renders (a legacy series without a stored index inherits axis 0's name/colour slot). The JSON
 * sights stay STRICT (a cleared overlay entry is unbound — see `boundJsonView` in the editor);
 * the materialisation is a history binding-sight concern, never a JSON one.
 */
export const materializedAxisIndex = (s: { yAxisIndex?: number }): number => materialize(s.yAxisIndex);

/**
 * The clamp of a raw binding index against the configured total (ADR-0012): materialised, then
 * an index at/after the total falls back to axis 0 — a removed axis never leaves a series on a
 * non-existent `yAxisIndex` (echarts would drop it). Shared by the builder, the pipeline's
 * percent stage and the colour-scale axis lookup.
 */
export const clampAxisIndex = (yi: unknown, total: number): number => {
    const m = materialize(yi);
    return m >= total ? 0 : m;
};

/**
 * The DISPLAY clamp of a stored axis index (the F7/Q6 idiom): the select shows the chart's truth
 * ({@link clampAxisIndex}), while the STORED value stays untouched — no silent rewrite; the
 * stale-index validation explains the divergence. Shared by the per-series Y-axis select and the
 * marking card's axis select (B4).
 */
export const displayAxisIndex = (yi: number | undefined, total: number): number => clampAxisIndex(yi, total);

/**
 * The axis indices at least one series binds — the **bound set** (materialised: a series with
 * `yAxisIndex === undefined` counts as bound to axis 0). Since ADR-0069 every configured axis is
 * IN the set (an axis outside it dies at the structural event that emptied it) — the builder
 * still filters to the actively bound set as defense for hand-edited JSON.
 */
export const boundAxisIndices = (series: readonly { yAxisIndex?: number }[]): Set<number> => {
    const bound = new Set<number>();
    for (const s of series) {
        bound.add(materializedAxisIndex(s));
    }
    return bound;
};

/**
 * The emitted (effective) axis positions (Q5): the chart emits the axes compacted in ascending
 * index order — `ranks.get(i)` is axis i's EMITTED index (its rank). The builder's remap and the
 * editor's emitted-truth gates (the alignTicks switch/warning) read the same table.
 */
export const emittedAxisRanks = (bound: ReadonlySet<number>): Map<number, number> => {
    const ranks = new Map<number, number>();
    [...bound].sort((a, b) => a - b).forEach((axisIdx, rank) => ranks.set(axisIdx, rank));
    return ranks;
};

/**
 * The palette slot of display position `i` (ADR-0027: the palette resolves against the
 * collection theme) — the inherit fallback of every series colour.
 */
export const paletteSlot = (i: number, palette: readonly string[]): string => palette[i % palette.length];

/**
 * The EFFECTIVE colour of a series (ADR-0018 1:1 invariant): the explicit colour, else the
 * palette slot of its DISPLAY position. The builder's series entries, the pie slices and the
 * editor's axis swatch all read here — the one place the rule lives.
 */
export const effectiveSeriesColor = (
    meta: { color?: string } | undefined,
    i: number,
    palette: readonly string[],
): string => meta?.color ?? paletteSlot(i, palette);

/**
 * The EFFECTIVE (display) name of a series: the meta name, else the series' own (payload) name,
 * else `Series N` (N = 1-based display position) — the name the legend lists, the tooltip rows
 * carry and the legend selection is keyed by.
 */
export const effectiveSeriesName = (
    meta: { name?: string } | undefined,
    series: { name?: string } | undefined,
    i: number,
): string => meta?.name || series?.name || `Series ${i + 1}`;

/** The series index an owner key names (ADR-0068): meta id first, else payload name; -1 = none. */
const ownerIndexOf = (
    owner: string | undefined,
    ids: readonly (string | undefined)[],
    payloadNames?: readonly (string | undefined)[],
): number => {
    if (owner === undefined) {
        return -1;
    }
    const byId = ids.findIndex(id => id === owner);
    if (byId >= 0 || !payloadNames) {
        return byId;
    }
    return payloadNames.findIndex(n => n === owner);
};

/**
 * The editor sight of an axis' **Namensgeber** (ADR-0068): the owner series (by id) when it
 * exists, else the first binder in series order (materialised). This is what stops a REBIND
 * newcomer from stealing the axis identity: without it the first binder in ARRAY order won.
 * The editor needs no re-check of the owner's binding — the structure events keep the owner on
 * its axis (ADR-0099); the chart's {@link resolveAxisPlan} re-checks it as defense for
 * hand-edited JSON. JSON sights pass the payload name as `id`.
 */
export const binderIndexOf = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number }[],
): number => {
    const ownerIdx = ownerIndexOf(
        axis.owner,
        series.map(s => s.id),
    );
    if (ownerIdx >= 0) {
        return ownerIdx;
    }
    return series.findIndex(s => materializedAxisIndex(s) === i);
};

/**
 * Effective colour of axis `i` for the Axis-card swatch (ADR-0018): the Namensgeber series'
 * effective colour ({@link binderIndexOf} + {@link effectiveSeriesColor}). `series` MUST be in
 * DISPLAY order (history: `state.series`; JSON: the VISIBLE payload names mapped through the
 * overlay) — the palette slot is the series' visible position, NOT the axis index. The explicit
 * axis colour is resolved by the caller (`a.color ?? effectiveAxisColor(...)`), like the
 * builder's `a.color ?? seriesColor`.
 */
export const effectiveAxisColor = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number; color?: string }[],
    palette: readonly string[],
): string | undefined => {
    const idx = binderIndexOf(axis, i, series);
    if (idx < 0) {
        return undefined;
    }
    return effectiveSeriesColor(series[idx], idx, palette);
};

/**
 * The configured axes as the chart reads them — ≥ 1: an empty configuration (the editor allows
 * deleting the last axis) falls back to one default-config axis (left, splitLine on). The axis
 * plan and the pipeline's percent stage (its axis count) read the same rule.
 */
export const configuredAxes = (axes: readonly EchartsAxisConfig[]): readonly EchartsAxisConfig[] =>
    axes.length ? axes : [{}];

/** One emitted series as the axis plan reads it (the cartesian entry AFTER its raw fold). */
export interface AxisPlanEntry {
    /** The series' binding index as emitted (a raw override may have replaced it). */
    yAxisIndex?: unknown;
    /** The series' emitted name — the legend selection key. */
    name?: unknown;
}

/** The input of {@link resolveAxisPlan}. */
export interface AxisPlanInput {
    /** The configured Y axes (`p.yAxes`); empty → one default axis. */
    axes: readonly EchartsAxisConfig[];
    /** The emitted series entries, one per series, in series order. */
    entries: readonly AxisPlanEntry[];
    /** Per-series meta: the owner key (`id`) and the „Nur in Legende" fallback (`legendOnly`). */
    meta: readonly ({ id?: string; legendOnly?: boolean } | undefined)[];
    /** The payload series — their names are the owner key in serien-förmiges JSON. */
    series: readonly { name?: string }[];
    /** The runtime legend selection (name → active), the config fallback where absent. */
    selection: Record<string, boolean> | undefined;
}

/** The resolved axis plan of one cartesian build. */
export interface AxisPlan {
    /** The configured axes, ≥ 1 (an empty configuration falls back to one default axis). */
    configured: readonly EchartsAxisConfig[];
    /** Per series: its CONFIGURED axis index, materialised and clamped. */
    axisOf: readonly number[];
    /** Per series: whether its legend entry is active (Legenden-Folge). */
    active: readonly boolean[];
    /** The configured indices an ACTIVE series binds. */
    activeBound: ReadonlySet<number>;
    /** The emitted axis configs, in emission order (≥ 1: none emitted → one default axis). */
    emitted: readonly EchartsAxisConfig[];
    /** Configured index → emitted index, for every emitted axis. */
    remap: ReadonlyMap<number, number>;
    /** Per series: its EMITTED axis ref (a series on a non-emitted axis falls to 0 — echarts needs a valid ref). */
    emittedOf: readonly number[];
    /**
     * Per series: the emitted axis it truly BINDS — `undefined` while its configured axis rests
     * (dropped by the selection). Unlike {@link AxisPlan.emittedOf} the fallback ref never counts:
     * a series parked on emitted 0 lends that axis no identity and no value-format facts.
     */
    bindsEmitted: readonly (number | undefined)[];
    /** Series exist but none is active → the chart renders ONE silent carrier axis. */
    allInactive: boolean;
    /** The emitted axes as displayed: re-slotted while the selection dropped an axis. */
    display: readonly EchartsAxisConfig[];
    /** Per DISPLAYED axis: the index of its Namensgeber series, -1 = none. */
    nameGivers: readonly number[];
}

/**
 * Resolve the cartesian axis plan: materialise + clamp every binding, decide active binders by
 * the Legenden-Folge, emit only actively bound axes (compacted in configured order, remapped),
 * detect the all-inactive chart, re-slot the display geometry while the selection dropped an
 * axis, and name each emitted axis' Namensgeber (owner while it still binds the axis — matched
 * by meta id, else payload name — else the first series binding it). A series whose axis rests
 * only PARKS on emitted 0; it never names that axis.
 */
export const resolveAxisPlan = ({ axes, entries, meta, series, selection }: AxisPlanInput): AxisPlan => {
    const configured = configuredAxes(axes);
    const total = configured.length;
    const axisOf = entries.map(e => clampAxisIndex(e.yAxisIndex, total));
    // Entry names are always strings (the series builder falls back to `Series N`); the guard is
    // for the reader — an unnameable entry counts as active.
    const active = entries.map((e, i) =>
        typeof e.name === 'string' ? legendActiveOf(selection, e.name, meta[i]?.legendOnly === true) : true,
    );
    const bound = new Set(axisOf);
    const activeBound = new Set(axisOf.filter((_a, i) => active[i]));
    const emittedIdx = configured.map((_a, i) => i).filter(i => activeBound.has(i));
    const allInactive = entries.length > 0 && emittedIdx.length === 0;
    const emitted: readonly EchartsAxisConfig[] = emittedIdx.length ? emittedIdx.map(i => configured[i]) : [{}];
    const remap = emittedAxisRanks(new Set(emittedIdx));
    const bindsEmitted = axisOf.map(a => remap.get(a));
    const emittedOf = bindsEmitted.map(e => e ?? 0);
    const selectionDropped = [...bound].some(i => !activeBound.has(i));
    const display =
        selectionDropped && emittedIdx.length ? emitted.map((a, i) => ({ ...a, ...axisPosition(i) })) : emitted;
    const ids = meta.map(m => m?.id);
    const payloadNames = series.map(s => s.name);
    const nameGivers = display.map((a, i) => {
        const ownerIdx = ownerIndexOf(a.owner, ids, payloadNames);
        return ownerIdx >= 0 && bindsEmitted[ownerIdx] === i ? ownerIdx : bindsEmitted.indexOf(i);
    });
    return {
        configured,
        axisOf,
        active,
        activeBound,
        emitted,
        remap,
        emittedOf,
        bindsEmitted,
        allInactive,
        display,
        nameGivers,
    };
};

/**
 * The series a marking on configured axis `markAxis` hangs on (ADR-0023/0074 re-anchor): the
 * FIRST ACTIVE series on that axis — a deselected host draws no markers, so the marking follows
 * the first binder the legend still shows. -1 = the marking RESTS: its axis is unbound or fully
 * deselected (no fallback onto another axis' scale). A non-numeric marking index reads as axis 0.
 */
export const markerHostIndex = (plan: AxisPlan, markAxis: unknown): number => {
    const ax = materialize(markAxis);
    if (!plan.activeBound.has(ax)) {
        return -1;
    }
    return plan.axisOf.findIndex((a, i) => a === ax && plan.active[i]);
};
