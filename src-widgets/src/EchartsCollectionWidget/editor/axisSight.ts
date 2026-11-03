/**
 * Axis sight — the READ side of the axis–series coupling (ADR-0099 decision 6): display names
 * and colours (owner-first, ADR-0068), binding views (positional and the strict serien-förmig
 * JSON sight), the Achsen-Platz sight and card order (ADR-0079), emitted ranks, option labels
 * and the 1:1 geometry (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisSight
 * @remarks
 * Pure reads over the axis array and its binders — nothing here writes. Every structural write
 * (add/delete/rebind/hide/show, side flip, place move, the payload reconcile, the boundary
 * resets) is a structure event in `editor/structureEvents`; the former `axisLayout` module is
 * dissolved into these two.
 */
import { lastPathSegment } from '../jsonTableParse';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

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

/**
 * The binding index a series EFFECTIVELY binds (Q7): an undefined `yAxisIndex` materialises to
 * axis 0 — exactly the builder's `?? 0` and the old {@link boundAxisIndices} rule, now the ONE
 * place it lives. The display helpers read through here so the editor shows what the chart
 * renders (a legacy series without a stored index inherits axis 0's name/colour slot). The JSON
 * sights stay STRICT (a cleared overlay entry is unbound — see {@link boundJsonView}); the
 * materialisation is a history binding-sight concern, never a JSON one.
 */
export const materializedAxisIndex = (s: { yAxisIndex?: number }): number =>
    typeof s.yAxisIndex === 'number' ? s.yAxisIndex : 0;

/**
 * The DISPLAY clamp of a stored axis index against the configured total (the F7/Q6 idiom): the
 * select shows the builder truth (`yi >= total ? 0 : yi`, cartesian.ts), while the STORED value
 * stays untouched — no silent rewrite; the stale-index validation explains the divergence.
 * Shared by the per-series Y-axis select and the marking card's axis select (B4: the marking
 * card still clamped to `total-1`, showing an axis the chart never draws on).
 */
export const displayAxisIndex = (yi: number | undefined, total: number): number =>
    yi !== undefined && yi >= total ? 0 : (yi ?? 0);

/**
 * The axis indices at least one series binds — the **bound set**. A series with
 * `yAxisIndex === undefined` counts as bound to axis 0 (mirrors the builder's `e.yAxisIndex ?? 0`).
 * Since ADR-0069 every configured axis is IN the set (an axis outside it dies at the structural
 * event that emptied it) — the builder still filters to the set as defense for hand-edited JSON.
 */
export const boundAxisIndices = (series: readonly { yAxisIndex?: number }[]): Set<number> => {
    const bound = new Set<number>();
    for (const s of series) {
        bound.add(materializedAxisIndex(s));
    }
    return bound;
};

/**
 * The side an axis card DISPLAYS when no position is stored (a hand-edit blob): the index-aware
 * default `i === 0 ? 'left' : 'right'`. The card's position select and the card's position
 * subtitle read through here — the SAME default the builder emits (ADR-0012), so the shown
 * value can never drift from what renders.
 */
export const displayPosition = (axis: EchartsAxisConfig | undefined, i: number): 'left' | 'right' =>
    axis?.position ?? (i === 0 ? 'left' : 'right');

/**
 * The side's members in DEPTH order (ADR-0079): ascending `offset ?? 0`, ties broken by the
 * array index (stable). This order IS the side's place ranking — the drawn truth echarts
 * follows, never a stored field.
 */
export const sideOrder = (axes: readonly EchartsAxisConfig[], side: 'left' | 'right'): number[] =>
    axes
        .map((a, i) => ({ a, i }))
        .filter(({ a, i }) => displayPosition(a, i) === side)
        .sort((x, y) => (x.a.offset ?? 0) - (y.a.offset ?? 0) || x.i - y.i)
        .map(({ i }) => i);

/** The sight of one axis on its side (ADR-0079): its 1-based place + the side's total. */

export interface AxisPlaceSight {
    /** 1 = drawn closest to the plot (smallest offset); n = farthest. */
    place: number;
    /** The number of axes on this axis' side (the place stepper greys out below 2). */
    sideTotal: number;
}

/**
 * The axis' **Achsen-Platz** (ADR-0079): its depth rank within its side — 1-based, 1 = closest
 * to the plot, n = farthest. NOT a stored value: the place is the rank in the side's offset
 * order (the same drawn truth the builder emits; `displayPosition` decides the side, an
 * undefined offset counts as 0). `null` for an out-of-range index.
 */
export const axisPlace = (axes: readonly EchartsAxisConfig[], i: number): AxisPlaceSight | null => {
    const axis = axes[i];
    if (!axis) {
        return null;
    }
    const order = sideOrder(axes, displayPosition(axis, i));
    const place = order.indexOf(i);
    return place === -1 ? null : { place: place + 1, sideTotal: order.length };
};

/**
 * The axis cards' **draw order** (ADR-0079 addendum 3): the card list mirrors what the chart
 * draws — the COMPLETE left side first (place 1 = closest to the plot on top, then outward),
 * then the complete right side the same way. A DISPLAY sort only: the `yAxes` array, the
 * `yAxisIndex` bindings, marking anchors and emitted ranks keep their identity — reordering a
 * card is a render concern, never a state change (the addendum revises E2's "the cards never
 * move"; the REJECTED option back then was the physical array reorder, which stays rejected).
 */
export const axisCardOrder = (axes: readonly EchartsAxisConfig[]): number[] => [
    ...sideOrder(axes, 'left'),
    ...sideOrder(axes, 'right'),
];

/**
 * One side's PLACE VALUES (ADR-0079 addendum): the pixel offsets of its slots, in place order,
 * captured BEFORE the gesture. The place — never the axis — owns the offset: a reorder
 * exchanges the occupants while every slot keeps its value, so the side's geometry never
 * moves. An undefined offset counts as 0 (the same truth the place view sorts by).
 */
export const sideSlotValues = (axes: readonly EchartsAxisConfig[], side: 'left' | 'right'): number[] =>
    sideOrder(axes, side).map(idx => axes[idx].offset ?? 0);

/**
 * The per-side **Platz-Gedächtnis** (ADR-0079 place-memory addendum): the remembered value of
 * each side's places, OUTLIVING their occupants — a place that once held an axis answers with
 * its last value even while vacant ("Plätze vergessen nichts"). Consulted wherever an axis
 * TAKES a place: the flip's target values (supplementing the live occupancy), and the
 * structural balance's slot offsets (interleaving unchanged — only the VALUES come from the
 * memory, else the raster default). Never consulted by the within-side stepper (its places
 * are all live).
 */
export interface AxisSlotMemory {
    left?: number[];
    right?: number[];
}

/**
 * The emitted (effective) axis positions (Q5): the cartesian builder emits the axes compacted in
 * array order — `ranks.get(i)` is axis i's EMITTED index (its rank, ascending). UI gates that
 * must follow the emitted truth (the alignTicks switch/warning: the reference axis is the first
 * axis, an unbound configured axis 0 is never it — retired with ADR-0069) read here instead of
 * the configured index.
 */
export const emittedAxisRanks = (bound: ReadonlySet<number>): Map<number, number> => {
    const ranks = new Map<number, number>();
    [...bound].sort((a, b) => a - b).forEach((axisIdx, rank) => ranks.set(axisIdx, rank));
    return ranks;
};

/**
 * Whether an axis carries a tick override that makes echarts IGNORE `alignTicks` on it (ADR-0034).
 * echarts only honours `alignTicks` on an axis whose tick interval is auto-computed; setting `min`,
 * `max`, `splitNumber`, or `minInterval` fixes the interval, so alignment silently no-ops. The
 * configurator shows a non-blocking warning when an axis opts into alignment AND sets one of these.
 * Pure — a UI display predicate over an {@link EchartsAxisConfig}.
 */
export const alignTicksDisabledByOverride = (a: EchartsAxisConfig): boolean =>
    a.min !== undefined || a.max !== undefined || a.splitNumber !== undefined || a.minInterval !== undefined;

/**
 * The index of the series an axis DISPLAY-name/colour inherits from — its **owner** (the
 * „Namensgeber", ADR-0068): the owner series when still bound, else the first binder in series
 * order (the pre-owner rule, kept as the fallback for id-less legacy sights and owner-less
 * axes). This is what stops a REBIND newcomer from stealing the axis identity: without it the
 * first binder in ARRAY order won, so a series moving onto an occupied axis renamed it the
 * moment it stood earlier in the list — the incumbent series lost every visible trace.
 */
export const binderIndexOf = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number }[],
): number => {
    if (axis.owner !== undefined) {
        const ownerIdx = series.findIndex(s => s.id === axis.owner);
        if (ownerIdx >= 0) {
            return ownerIdx;
        }
    }
    // Materialised sight (Q7): a series without a stored index binds axis 0 — the lookup mirrors
    // the builder, so a legacy series inherits its name onto the axis card/dropdown.
    return series.findIndex(s => materializedAxisIndex(s) === i);
};

/**
 * A POSITIONAL series' display name — the shared default chain for every family that binds
 * axes through `state.series` (Verlauf AND tabellarisch, ADR-0075): the authored name (trimmed),
 * else the yPath column's LAST segment (the tabellarisch default — history series carry no
 * yPath and fall straight through). Empty when neither resolves — the caller adds its own
 * index default (`Series N`), exactly like {@link tableSeriesName} in the series cards.
 */
export const positionalBinderName = (s: { name?: string; yPath?: string }): string =>
    s.name?.trim() || (s.yPath ? lastPathSegment(s.yPath) : '');

/**
 * The effective display name of axis `i` for the per-series binding dropdown (ADR-0025): the explicit
 * axis name, else the name inherited from the axis' owner series (first binder before ADR-0068),
 * else the `Series N` label. The inherited name reads {@link positionalBinderName} — so a
 * tabellarisch series without an authored name titles its axis with the bound COLUMN name,
 * never `Series N` on a fully mapped series. N is the binder's SERIES position — the exact
 * label the builder renders for an unnamed series and the Axis-card title shows
 * (`boundAxisName`), so all three agree even in a misaligned binding. An unbound axis no
 * longer exists (ADR-0069) — the index fallback below is defensive only.
 */
export const effectiveAxisName = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number; name?: string; yPath?: string }[],
): string => {
    if (axis.name) {
        return axis.name;
    }
    const boundPos = binderIndexOf(axis, i, series);
    if (boundPos >= 0) {
        const inherited = positionalBinderName(series[boundPos]);
        if (inherited) {
            return inherited;
        }
    }
    return `Series ${(boundPos >= 0 ? boundPos : i) + 1}`;
};

/**
 * The per-series binding dropdown's item label (B1): the 1-based axis number + the effective
 * name. The number is what keeps the item identifiable — unnamed series can share effective
 * labels across axes, and the rebind death re-numbers every follower (ADR-0069). The number
 * prefix matches the marking card's axis options and the legacy fallback of
 * {@link CartesianBasisFields}.
 */
export const axisOptionLabel = (
    ai: number,
    axis: EchartsAxisConfig,
    series: readonly { yAxisIndex?: number; name?: string; yPath?: string }[],
): string => `${ai + 1} · ${effectiveAxisName(axis, ai, series)}`;

/**
 * The JSON binding view for {@link ownerPatch}: one {id, index, display name} entry per
 * VISIBLE payload name — the overlay-authored name, else the payload name (the label the dropdown
 * and the Axis-card show). The `id` is the payload NAME itself: in JSON the name IS the series
 * identity (the overlay is name-keyed), so it doubles as the axis **owner** key (ADR-0068).
 * Visibility matters: a hidden name keeps its overlay `yAxisIndex` until it is re-indexed, so a
 * diff over raw overlay entries would miss the transition; the view sees only what renders.
 * Shared by the SeriesSection hide/rebind handlers and the AxesZoomSection JSON axis-delete
 * (which hides the bound payload series).
 */
export const jsonBindingView = (
    names: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number; name?: string }>>,
    hidden: readonly string[],
): { id?: string; yAxisIndex?: number; name?: string }[] =>
    names
        .filter(n => !hidden.includes(n))
        .map(n => ({ id: n, yAxisIndex: overlay[n]?.yAxisIndex, name: overlay[n]?.name || n }));

/**
 * The JSON binding view reduced to DEFINED indices — the sight {@link balanceAxes} (and any
 * bound-set computation) needs in JSON mode. JSON binding is STRICT: an overlay entry with
 * `yAxisIndex` undefined (cleared when its name hid or its axis died) is UNBOUND — unlike a
 * history series without an index, which implicitly binds axis 0 (the builder's `?? 0`).
 * Filtering here keeps the two binding semantics from bleeding into each other at the seam.
 * The {id, name} entries pass through — the id is the owner key (ADR-0068).
 */
export const boundJsonView = (
    names: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number; name?: string }>>,
    hidden: readonly string[],
): { id?: string; name?: string; yAxisIndex?: number }[] =>
    jsonBindingView(names, overlay, hidden).filter(b => typeof b.yAxisIndex === 'number');

/**
 * The JSON bound set over the STRICT sight (B2): the defined indices of VISIBLE names — the
 * Axis manager's badge/position-lock sight (kept for the emitted-rank computation; an unbound
 * axis can no longer exist since ADR-0069, the set is every axis).
 */
export const boundJsonAxisIndices = (
    names: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number }>>,
    hidden: readonly string[],
): Set<number> => new Set(boundJsonView(names, overlay, hidden).map(b => b.yAxisIndex as number));

/**
 * The JSON Axis-card title source (B2 + ADR-0068): the axis' OWNER payload name when it still
 * binds visibly, else the first VISIBLE name bound to the axis — the authored overlay name wins,
 * else the payload name, else the Series-N fallback. Hidden entries never title an axis (their
 * index is pending bookkeeping, not a binding). The JSON sibling of the history
 * `boundAxisName` in the Axis manager.
 */
export const boundJsonAxisName = (
    axis: EchartsAxisConfig,
    i: number,
    names: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number; name?: string }>>,
    hidden: readonly string[],
): string | undefined => {
    const visible = names.filter(n => !hidden.includes(n));
    const binds = (n: string): boolean => overlay[n]?.yAxisIndex === i;
    // Owner-first (ADR-0068): the axis' incumbent payload name keeps the title; a newcomer
    // standing earlier in the payload never steals it. Fallback: the first visible binder.
    const binder =
        (axis.owner !== undefined ? visible.find(n => n === axis.owner && binds(n)) : undefined) ??
        visible.find(n => binds(n));
    if (binder === undefined) {
        return undefined;
    }
    return overlay[binder]?.name || binder || `Series ${i + 1}`;
};

/**
 * The display name a DYING JSON axis carried — for the ADR-0069 snackbar. {@link boundJsonAxisName}
 * reads only VISIBLE names, but a death's last binder is often invisible by the time the notice
 * fires (a vanish death's name is GONE from the payload; a hide death's name just entered the
 * deny-list): the sight here EXTENDS the visible names by the vanished overlay keys, so the
 * pre-death label (overlay name, else payload name) survives into the toast. The one shared
 * resolution for both death sites — the Series section's undo snackbar and the modal's
 * vanish notice (it MUST NOT be re-implemented at the call sites).
 */
export const jsonAxisDeathName = (
    axis: EchartsAxisConfig,
    i: number,
    names: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number; name?: string }>>,
    hidden: readonly string[],
): string => {
    const extended = [...names, ...Object.keys(overlay).filter(n => !names.includes(n) && !hidden.includes(n))];
    return boundJsonAxisName(axis, i, extended, overlay, hidden) ?? `Achse ${i + 1}`;
};

/**
 * Effective colour of axis `i` for the Axis-card swatch (ADR-0018): the OWNER series' colour
 * (first bound series before ADR-0068), else its palette slot by the series' DISPLAY position.
 * Mirrors both the cartesian builder (`a.color ?? seriesColor`) and the Series-card swatch
 * (`s.color ?? palette[seriesIndex]`), so the Axis card matches the Series card of its display
 * series — the 1:1 colour invariant.
 *
 * `series` MUST be in DISPLAY order: history passes `state.series`; JSON passes the VISIBLE
 * payload names mapped through the overlay (in payload order, hidden ones filtered). The palette slot
 * is therefore the series' visible position, NOT the axis index. That distinction matters in JSON:
 * after a rebind OR a payload-name reorder the sticky reconcile keeps `yAxisIndex`, so the axis index
 * drifts off the visible position — indexing the palette by axis would then paint the swatch with the
 * wrong series' colour. The explicit axis colour is resolved by the caller (the swatch does
 * `a.color ?? effectiveAxisColor(...)`), not here.
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
    return series[idx].color ?? palette[idx % palette.length];
};
