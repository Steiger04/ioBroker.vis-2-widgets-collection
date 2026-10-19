/**
 * Cartesian axis-layout + series↔axis coupling helpers: the 1:1 auto-layout assigned to an
 * auto-created axis + the predicate telling whether every series still owns its axis (ADR-0018,
 * bound-aware since ADR-0066); and the axis-as-derived-citizen coupling — rebind target, the
 * sticky JSON reconcile, and the effective axis name (ADR-0025/0026). Since ADR-0069 an axis
 * exists exactly while at least one series binds it: the last binder leaving (delete, rebind,
 * JSON hide, payload-vanish) DROPS the axis in the same undo step via
 * {@link axesFollowBinders} — there is no resting state. Every structural event (series/axis
 * add/delete/rebind, JSON hide/show, the reconcile, a data-path reset) still re-arranges the
 * bound axes via {@link balanceAxes} — standard interleaving, dense on the raster (ADR-0067).
 * The manual gestures between those events own the **Achsen-Platz** (ADR-0079): the place
 * stepper and the side-flip reorder through the offset order ({@link axisPlace},
 * {@link moveAxisPlace}, {@link insertAxisAtPlace}) with insert-shift and place-bound offsets
 * (the addendum: a slot keeps its pixel value, only the occupants exchange) — the array-order
 * repack (`packStaggeredAxes`, ADR-0028's flip handler) is pensioned with it.
 *
 * @module EchartsCollectionWidget/editor/axisLayout
 */
import { nextStableId } from './stableId';
import { lastPathSegment } from '../jsonTableParse';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

/** Pixel stage between stacked axes on the same side (ADR-0018). */
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
 * Default layout for the i-th auto-created axis: a stable id (`nextStableId('ax-')` from
 * {@link module:EchartsCollectionWidget/editor/stableId} — for React reconciliation only, the
 * cartesian builder never emits it to echarts) + {@link axisPosition} geometry + splitlines on
 * axis 0 only. Used on series creation (history + duplicate), the JSON-mode editor sync,
 * the „Neue Achse" dropdown append (ADR-0069), and the auto-balance re-arrange (via
 * {@link axisPosition}, non-destructive).
 *
 * Colour and name are NOT written here (ADR-0018): an axis inherits both from its bound series at
 * runtime (the cartesian builder's `a.color ?? seriesColor` / `a.name ?? seriesName`), so they track
 * the series across theme changes and renames. An explicit axis colour/name wins as an override. Writing
 * them as creation-time snapshots would freeze values that go stale the moment the series is recoloured
 * or renamed.
 */
export const axisLayout = (i: number): EchartsAxisConfig => ({
    id: nextStableId('ax-'),
    ...axisPosition(i),
    splitLine: i === 0,
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
 * True when every series sits on its OWN bound axis — a bijection between series and axes,
 * i.e. the dense 1:1 layout (ADR-0018's dense check, bound-aware). A rebound series that left a
 * hole took its axis with it (ADR-0069), so duplicating still yields a fresh axis; only a
 * genuinely shared axis (2+ series on it) is non-dense and makes the copy inherit the source
 * binding.
 */
export const isOneToOneBound = (series: readonly { yAxisIndex?: number }[]): boolean =>
    boundAxisIndices(series).size === series.length;

/**
 * Auto-Balance (ADR-0067): re-arrange every axis after a structural event. The axes — in array
 * order — get the standard interleaving ({@link axisPosition} slot by slot: even → left,
 * odd → right); the POSITION is always re-assigned, the OFFSET from the Platz-Gedächtnis when
 * one is passed (ADR-0079 addendum 2: `memory[side][level]`), else — and for every legacy
 * caller — densely on the 80-px raster. Every other field (id, name, raw, splitLine, …)
 * survives. A manual position/offset is fine-justure until
 * the next structural event — ADR-0028's idiom extended to the position; the pack form (both
 * sides repacked independently, position preserved) is pensioned with it.
 *
 * The series view decides what "bound" means, and the two modes read the index DIFFERENTLY:
 * history passes `state.series` — a series WITHOUT an index counts as bound to axis 0
 * (mirroring the builder). JSON passes {@link boundJsonView} — STRICT: a cleared entry
 * (`yAxisIndex` undefined) is unbound, never an implicit axis-0 binder. The load path never
 * re-arranges.
 */
export const balanceAxes = (
    yAxes: readonly EchartsAxisConfig[],
    series: readonly { yAxisIndex?: number }[],
    /**
     * The Platz-Gedächtnis (ADR-0079 place-memory addendum): a slot's OFFSET comes from the
     * remembered value of its side+level, falling to the raster default. Optional — absent is
     * the plain raster (the pre-addendum behaviour, kept for every legacy caller/test).
     */
    memory?: AxisSlotMemory,
): EchartsAxisConfig[] => {
    const bound = boundAxisIndices(series);
    let slot = 0;
    return yAxes.map((a, i) => {
        if (!bound.has(i)) {
            return a;
        }
        const pos = axisPosition(slot++);
        const level = Math.floor((slot - 1) / 2);
        const offset = memory?.[pos.position]?.[level] ?? pos.offset;
        return { ...a, ...pos, offset };
    });
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
const sideOrder = (axes: readonly EchartsAxisConfig[], side: 'left' | 'right'): number[] =>
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
const sideSlotValues = (axes: readonly EchartsAxisConfig[], side: 'left' | 'right'): number[] =>
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

const sameNumbers = (a: readonly number[], b: readonly number[]): boolean =>
    a.length === b.length && a.every((v, i) => v === b[i]);

/**
 * The place-memory merge rule (ADR-0079 addendum 2, ONE body): the live values lead, the
 * remembered ones supplement the places BEYOND the live occupancy — "Plätze vergessen nichts"
 * holds for every consumer (the sync's overlay and the flip's target values alike).
 */
const supplementTail = (live: readonly number[], remembered: readonly number[]): number[] => [
    ...live,
    ...remembered.slice(live.length),
];

/**
 * The Platz-Gedächtnis sync (ADR-0079 place-memory addendum): after every axes change, each
 * side's LIVE place values overlay the remembered ones — an occupied place updates its value,
 * a vacated one KEEPS its last. The sync runs in the editor's central `set` (one snapshot, one
 * undo step together with the triggering patch); pure and reference-stable when nothing moved.
 */
export const syncSlotMemory = (
    axes: readonly EchartsAxisConfig[],
    prev: AxisSlotMemory | undefined,
): AxisSlotMemory | undefined => {
    let changed = false;
    const next: AxisSlotMemory = {};
    for (const side of ['left', 'right'] as const) {
        const live = sideSlotValues(axes, side);
        const remembered = prev?.[side] ?? [];
        const merged = supplementTail(live, remembered);
        next[side] = merged;
        changed ||= !sameNumbers(merged, remembered);
    }
    if (!changed && prev) {
        return prev; // reference-stable — an unrelated/no-op patch never churns the state
    }
    // Both sides empty AND nothing remembered → undefined (a no-op yAxes patch on a fresh
    // state must not materialize an empty object — it would flip `hasChanges`).
    return next.left?.length || next.right?.length ? next : undefined;
};

/**
 * Write a side's NEW depth order as offsets: every slot keeps its captured VALUE whichever
 * axis occupies it now; a slot that did not exist before (the side grew) gets the raster
 * default `slot × 80` (ADR-0079 addendum — the offset hangs on the place, never on the axis;
 * replaces decision 5's travelling deviation). Only members whose offset actually changes
 * get a new object; every other axis keeps its identity. Always a fresh array (the caller's
 * no-op contract is `undefined`, the ownerPatch idiom — not reference equality).
 */
const applySideOrder = (
    axes: readonly EchartsAxisConfig[],
    slotValues: readonly number[],
    newOrder: readonly number[],
): EchartsAxisConfig[] => {
    let next: EchartsAxisConfig[] | undefined;
    newOrder.forEach((idx, slot) => {
        const offset = slotValues[slot] ?? slot * AXIS_STAGGER_STAGE;
        if ((axes[idx].offset ?? 0) !== offset) {
            (next ??= axes.slice())[idx] = { ...axes[idx], offset };
        }
    });
    return next ?? axes.slice();
};

/**
 * Move an axis one place within its side (ADR-0079 + addendum): **insert with shift** — the
 * axis falls out of its place and is re-inserted one nearer (dir −1) or farther (dir +1),
 * everything beyond shifts outward, the vacated place closes up. The OFFSETS STAY WITH THE
 * PLACES (addendum): the moved axis takes its target place's value, the shifted adopt the
 * values they move onto — the side's pixel geometry never changes, only the occupants
 * exchange. The array order and every non-offset field are untouched. A boundary move
 * (place 1 + ▲, place n + ▼) or a lone axis on the side returns `undefined` — the caller
 * keeps the array (no empty undo step), the {@link ownerPatch} idiom.
 */
export const moveAxisPlace = (
    axes: readonly EchartsAxisConfig[],
    i: number,
    dir: -1 | 1,
): EchartsAxisConfig[] | undefined => {
    const sight = axisPlace(axes, i);
    if (!sight || sight.sideTotal < 2) {
        return undefined;
    }
    const target = sight.place + dir;
    if (target < 1 || target > sight.sideTotal) {
        return undefined;
    }
    const side = displayPosition(axes[i], i);
    const order = sideOrder(axes, side);
    const [moved] = order.splice(sight.place - 1, 1);
    order.splice(target - 1, 0, moved);
    return applySideOrder(axes, sideSlotValues(axes, side), order);
};

/**
 * The rank-preserving side-flip (ADR-0079 + addendum, replacing ADR-0028's array-order repack
 * as the flip handler): the axis keeps its place and is INSERTED at it on the target side
 * (clamped to the end when the target side is shorter), the displaced axes shift one outward,
 * the source side closes up. The OFFSETS STAY WITH THE PLACES (addendum): the flipping axis
 * takes the target side's place value (a new slot gets the raster default), the displaced
 * adopt the values they shift onto, the source side's remainders take the vacated earlier
 * values — nothing travels with the axis. The flipped `position` is written explicitly;
 * array order and every other field stay. A no-flip call (target side === current side)
 * returns `undefined` — the caller's real-flip gate is the authority.
 */
export const insertAxisAtPlace = (
    axes: readonly EchartsAxisConfig[],
    i: number,
    position: 'left' | 'right',
    /**
     * The Platz-Gedächtnis (ADR-0079 place-memory addendum): the TARGET side's values continue
     * past its live occupancy with the remembered ones — an arrival on a vacant-or-tail place
     * takes its last value instead of the raster (the user report: a flip onto a side that
     * once held a 5px axis renders at 5px). Optional — absent is the plain live+raster rule.
     */
    memory?: AxisSlotMemory,
): EchartsAxisConfig[] | undefined => {
    const sight = axisPlace(axes, i);
    if (!sight || displayPosition(axes[i], i) === position) {
        return undefined;
    }
    const from = displayPosition(axes[i], i);
    // Both sides' place values freeze BEFORE the gesture (the source closes onto its earlier
    // values, the target inserts onto its own — the remembered tail supplements places beyond
    // the target's live occupancy, a never-seen place falls to the raster).
    const sourceValues = sideSlotValues(axes, from);
    const liveTarget = sideSlotValues(axes, position);
    const remembered = memory?.[position] ?? [];
    const targetValues = supplementTail(liveTarget, remembered);
    const sourceOrder = sideOrder(axes, from).filter(idx => idx !== i);
    const targetOrder = sideOrder(axes, position);
    targetOrder.splice(Math.min(sight.place - 1, targetOrder.length), 0, i);
    const next = applySideOrder(applySideOrder(axes, sourceValues, sourceOrder), targetValues, targetOrder);
    // A real flip always writes the position (an unstored one materialises here).
    next[i] = { ...next[i], position };
    return next;
};

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
 * Pick the axis a deleted axis' series should rebind onto (ADR-0025): the first surviving axis
 * (by index) whose `format` matches the deleted axis' — the proxy for "same unit" (empty matches
 * empty). Returns `null` when no survivor shares the format; the caller then falls back to axis 0 +
 * an advisory unit-mismatch toast. `survivors` is the post-delete axis array, so the returned index
 * is already the new `yAxisIndex`.
 */
export const sameFormatSurvivor = (
    deletedFormat: string | undefined,
    survivors: readonly EchartsAxisConfig[],
): number | null => {
    const want = deletedFormat ?? '';
    const idx = survivors.findIndex(a => (a.format ?? '') === want);
    return idx === -1 ? null : idx;
};

/**
 * Re-index marking anchors around a deleted axis (B4): a marking anchored to the DELETED axis
 * follows the rebind target — history passes the series rebind's `sameFormatSurvivor`
 * target (the marking stays with the axis its series land on); the JSON config-delete passes
 * `Math.max(0, i - 1)` (the stack position the deleted axis occupied — no format concept there,
 * the axis was unbound). Higher anchors shift down around the hole; an undefined anchor passes
 * through untouched. Without the remap every marking above the deleted index silently pointed
 * at the axis that SHIFTED into the slot — the select saying one axis, the chart another.
 */
export const remapMarkAxisIndices = <M extends { yAxisIndex?: number }>(
    marks: readonly M[],
    deletedIndex: number,
    target: number,
): M[] =>
    marks.map(m => {
        const yi = m.yAxisIndex;
        if (typeof yi !== 'number') {
            return m;
        }
        if (yi === deletedIndex) {
            return { ...m, yAxisIndex: target };
        }
        return yi > deletedIndex ? { ...m, yAxisIndex: yi - 1 } : m;
    });

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
 * Owner maintenance over a before/after binding transition (ADR-0068 — the surviving half of the
 * retired resting-name patch): every axis an AFTER binder still holds gets its `owner` kept
 * current — an owner still bound to THIS axis keeps the identity (a rebind newcomer never
 * steals it); an unset owner bootstraps from the axis' BEFORE binder (the incumbent at the
 * moment of the first event); an owner that left hands over to the first remaining after-binder.
 * `undefined` when no owner changes — the caller keeps the array referentially stable. The
 * axis-DYING half of the old patch is gone: an axis that loses its last binder is dropped (see
 * {@link dropUnboundAxes}) — there is no resting state to snapshot anymore (ADR-0069).
 */
export const ownerPatch = (
    before: readonly { id?: string; yAxisIndex?: number }[],
    after: readonly { id?: string; yAxisIndex?: number }[],
    yAxes: readonly EchartsAxisConfig[],
): EchartsAxisConfig[] | undefined => {
    let next: EchartsAxisConfig[] | undefined;
    for (let yi = 0; yi < yAxes.length; yi++) {
        // Materialised sight (Q7): an implicit axis-0 binder transitions like any other — a
        // history fix. JSON callers pass DEFINED-only sights (boundJsonView everywhere,
        // incl. the reconcile's before-sight), so the materialisation is a no-op on JSON.
        // id-less sights (legacy lists) stay owner-less — the display falls back to the first
        // binder, exactly the pre-0068 behaviour.
        const afterBinder = after.find(s => materializedAxisIndex(s) === yi);
        if (!afterBinder) {
            continue; // dying (ADR-0069 drops it) or already gone — no owner to maintain
        }
        const owner = yAxes[yi].owner;
        // The owner must bind THIS axis — an owner that merely still EXISTS (rebound
        // elsewhere) has left and hands over.
        const ownerStillBound =
            owner !== undefined && after.some(s => s.id === owner && materializedAxisIndex(s) === yi);
        let nextOwner = owner;
        if (!ownerStillBound) {
            if (owner === undefined) {
                const incumbent = before.find(s => materializedAxisIndex(s) === yi)?.id;
                nextOwner =
                    incumbent !== undefined && after.some(s => s.id === incumbent && materializedAxisIndex(s) === yi)
                        ? incumbent
                        : afterBinder.id;
            } else {
                nextOwner = afterBinder.id;
            }
        }
        if (nextOwner !== owner) {
            (next ??= yAxes.slice())[yi] = { ...(next?.[yi] ?? yAxes[yi]), owner: nextOwner };
        }
    }
    return next;
};

/**
 * The axis-death core (ADR-0069): drop every axis the AFTER sight leaves unbound, re-indexing the
 * binders and the marking anchors around the holes. An axis exists exactly while ≥1 series binds
 * it — the last binder leaving (series-delete, rebind, JSON hide, payload-vanish) deletes the
 * axis HERE, inside the caller's one undo step. Markings follow their axis' fate (the B4 remap
 * rule): the REBIND's vacated axis passes its anchors onto the rebind target (the marking stays
 * with the series' new axis), every other death anchors them on the stack predecessor — the
 * first kept axis below, else index 0 (an emptied chart anchors the next axis to be born).
 * `reindex` maps an OLD index to its new rank — `undefined` for a dropped axis (the JSON overlay
 * clears such an entry's binding via {@link reindexJsonOverlay}; a visible binder can never hold
 * one). WITHOUT the balance — the load-path heal composes this directly and never re-arranges.
 */
export const dropUnboundAxes = <S extends { yAxisIndex?: number }, M extends { yAxisIndex?: number }>(
    after: readonly S[],
    yAxes: readonly EchartsAxisConfig[],
    marks: readonly M[],
    rebind?: { from: number; to: number },
): {
    yAxes: EchartsAxisConfig[];
    binders: S[];
    markLines: M[];
    reindex: (yi: number) => number | undefined;
    diedIndices: number[];
} => {
    const bound = boundAxisIndices(after);
    const kept: number[] = [];
    for (let i = 0; i < yAxes.length; i++) {
        if (bound.has(i)) {
            kept.push(i);
        }
    }
    const diedIndices = yAxes.map((_a, i) => i).filter(i => !bound.has(i));
    const rank = (oldIdx: number): number => kept.filter(k => k < oldIdx).length;
    const markLines: M[] = diedIndices.length
        ? marks.map(m => {
              const yi = m.yAxisIndex;
              if (typeof yi !== 'number') {
                  return m;
              }
              if (bound.has(yi)) {
                  const r = rank(yi);
                  return r === yi ? m : { ...m, yAxisIndex: r };
              }
              if (rebind && yi === rebind.from) {
                  return { ...m, yAxisIndex: rank(rebind.to) };
              }
              let t = yi - 1;
              while (t >= 0 && !bound.has(t)) {
                  t--;
              }
              return { ...m, yAxisIndex: t >= 0 ? rank(t) : 0 };
          })
        : marks.slice();
    const binders: S[] = diedIndices.length
        ? after.map(s => {
              const yi = s.yAxisIndex;
              if (typeof yi !== 'number' || !bound.has(yi)) {
                  return s; // undefined stays — it still binds axis 0 implicitly (history)
              }
              const r = rank(yi);
              return r === yi ? s : { ...s, yAxisIndex: r };
          })
        : after.slice();
    return {
        yAxes: kept.map(i => yAxes[i]),
        binders,
        markLines,
        reindex: yi => (bound.has(yi) ? rank(yi) : undefined),
        diedIndices,
    };
};

/**
 * The structural-event seam (ADR-0069 + ADR-0067): owner maintenance, axis death, re-index and
 * the auto-balance in ONE call — the replacement of the retired restingBalance. `before`/
 * `after` follow each mode's sight (history: the raw series lists, an undefined index
 * materialises to axis 0, Q7; JSON: the STRICT visible views — {@link boundJsonView}, defined
 * indices only — an unfiltered JSON sight would mis-read a fresh name as an axis-0 binder, so
 * JSON callers MUST filter). Returns the patched `yAxes`/`binders`/`markLines` plus `diedIndices`
 * for the caller's snackbar (the ADR-0069 safety net) and `reindex` (the JSON overlay's pass).
 */
export const axesFollowBinders = <S extends { yAxisIndex?: number }, M extends { yAxisIndex?: number }>(
    before: readonly { id?: string; yAxisIndex?: number }[],
    after: readonly S[],
    yAxes: readonly EchartsAxisConfig[],
    marks: readonly M[],
    rebind?: { from: number; to: number },
    /** The Platz-Gedächtnis feeding the internal balance (ADR-0079 place-memory addendum). */
    memory?: AxisSlotMemory,
): {
    yAxes: EchartsAxisConfig[];
    binders: S[];
    markLines: M[];
    reindex: (yi: number) => number | undefined;
    diedIndices: number[];
} => {
    const owned = ownerPatch(before, after, yAxes) ?? yAxes;
    const death = dropUnboundAxes(after, owned, marks, rebind);
    return { ...death, yAxes: balanceAxes(death.yAxes, death.binders, memory) };
};

/**
 * Re-index a name-keyed JSON overlay around dropped axes (ADR-0069): a defined entry on a KEPT
 * axis takes its new rank; an entry pointing at a DROPPED axis (a hidden or vanished name whose
 * binding outlived its axis) is CLEARED — undefined is the unbound marker the reconcile expects,
 * and a re-show appends a fresh axis rather than mis-binding to a stranger.
 */
export const reindexJsonOverlay = <M extends { yAxisIndex?: number }>(
    overlay: Readonly<Record<string, M>>,
    reindex: (yi: number) => number | undefined,
): Record<string, M> => {
    const next: Record<string, M> = {};
    for (const [name, m] of Object.entries(overlay)) {
        const yi = m.yAxisIndex;
        if (typeof yi !== 'number') {
            next[name] = m;
            continue;
        }
        const r = reindex(yi);
        next[name] = r === yi ? m : { ...m, yAxisIndex: r };
    }
    return next;
};

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

/**
 * Reconcile the JSON-mode axes with the visible payload series (ADR-0026 — JSON 1:n). The name-keyed
 * overlay is the single source of truth for which axis a payload series binds to; this keeps it
 * consistent with the axis array as the (dynamic) payload + the user's bindings change:
 *
 * - **Sticky:** a visible name that already carries a VALID `yAxisIndex` (< axes.length) KEEPS it — a
 *   manual rebind survives payload changes (the whole point of JSON 1:n). The old force-`yAxisIndex
 *   = position` effect clobbered manual choice on every payload change.
 * - **1:1 default:** a new name (or one whose stored `yAxisIndex` went stale after axes were lost)
 *   gets a fresh appended axis — so a fresh payload still lands 1:1 (no regression for the common
 *   multi-unit case).
 * - **Vanish = death (ADR-0069):** a name no longer visible (hidden or gone) is cleared; the freed
 *   axis is DROPPED right here — overlay entries and marking anchors re-index around the hole, the
 *   survivors re-arrange. Only the explicit axis-delete and this reconcile remove axes in JSON.
 * - **Auto-balanced (ADR-0067):** the reconcile IS a structural event — it ends in the balance over
 *   the visible names' bindings (the strict sight: a cleared entry never counts as bound). A
 *   hand-tuned position/offset survives only between reconcile firings; a fresh appended axis lands
 *   in the next free balance slot, dense behind the bound set.
 *
 * Pure — the caller (the modal effect on payload/mode change) writes the result back. Not a hook.
 * `diedIndices` reports the axes this pass dropped (the caller's info snackbar — undo is futile,
 * the next reconcile over the same payload re-kills them).
 */
export const reconcileJsonAxes = <M extends { yAxisIndex?: number; name?: string }, K extends { yAxisIndex?: number }>(
    visibleNames: readonly string[],
    overlay: Readonly<Record<string, M>>,
    yAxes: readonly EchartsAxisConfig[],
    hidden: readonly string[] = [],
    marks: readonly K[] = [],
    /** The Platz-Gedächtnis feeding the internal balance (ADR-0079 place-memory addendum). */
    memory?: AxisSlotMemory,
): { yAxes: EchartsAxisConfig[]; overlay: Record<string, M>; markLines?: K[]; diedIndices: number[] } => {
    const next: Record<string, M> = { ...overlay };
    let axes = yAxes.slice();
    // 1. Ensure every visible name has a VALID yAxisIndex — keep an existing valid one (sticky),
    //    else append a fresh axis (the 1:1 default for new / stale names).
    for (const name of visibleNames) {
        const yi = next[name]?.yAxisIndex;
        if (typeof yi !== 'number' || yi < 0 || yi >= axes.length) {
            const fresh = axes.length;
            axes = [...axes, axisLayout(fresh)];
            next[name] = { ...next[name], yAxisIndex: fresh };
        }
    }
    // 2. Clear yAxisIndex on entries no longer visible (hidden or gone) so they don't anchor an axis.
    for (const key of Object.keys(next)) {
        if (!visibleNames.includes(key) && next[key].yAxisIndex !== undefined) {
            next[key] = { ...next[key], yAxisIndex: undefined };
        }
    }
    // 3. Death + balance over the visible sight (ADR-0069): an axis whose binder vanished from
    //    the payload dies NOW — dropped, overlay + marking anchors re-indexed around the hole —
    //    then the balance re-arranges the surviving bound set. BEFORE (the owner sight) = the
    //    STRICT visibility view of every name that was rendering-bound — still visible or
    //    vanished (defined indices only: a fresh name without an overlay entry never bound
    //    anything in JSON, and a HIDDEN name is outside the sight — its hide-time handler
    //    already settled its axis; the clear in step 2 is bookkeeping only).
    const vanished = Object.keys(overlay).filter(n => !visibleNames.includes(n) && !hidden.includes(n));
    const before = boundJsonView([...visibleNames, ...vanished], overlay, hidden);
    const r = axesFollowBinders(before, boundJsonView(visibleNames, next, []), axes, marks, undefined, memory);
    const reindexed = r.diedIndices.length ? reindexJsonOverlay(next, r.reindex) : next;
    return {
        yAxes: r.yAxes,
        overlay: reindexed,
        ...(r.diedIndices.length ? { markLines: r.markLines } : {}),
        diedIndices: r.diedIndices,
    };
};

/**
 * The JSON-mode axis-delete patch for a BOUND axis (Q3 line → ADR-0069): "delete this axis" hides
 * EVERY visible payload name bound to the axis — ALL binders, not the first (1:n first-class;
 * one leftover binder would keep the axis rendered) — and the axis DIES with its last binder in
 * the same patch: dropped, overlay entries + marking anchors re-indexed around the hole, the
 * surviving bound set re-arranged (ADR-0067). `jsonHidden`, `yAxes`, `jsonSeriesStyle` and
 * `markLines` travel in ONE patch → one undo step.
 *
 * `null` when no VISIBLE name binds the axis — the caller then takes the config-delete path
 * (drop the axis + re-index the overlay), the defensive branch for states the invariant already
 * excludes.
 */
export const jsonBoundAxisDeletePatch = <
    M extends { yAxisIndex?: number; name?: string },
    K extends { yAxisIndex?: number },
>(
    visibleNames: readonly string[],
    overlay: Readonly<Record<string, M>>,
    hidden: readonly string[],
    yAxes: readonly EchartsAxisConfig[],
    i: number,
    marks: readonly K[] = [],
    /** The Platz-Gedächtnis feeding the internal balance (ADR-0079 place-memory addendum). */
    memory?: AxisSlotMemory,
): { jsonHidden: string[]; yAxes: EchartsAxisConfig[]; jsonSeriesStyle: Record<string, M>; markLines?: K[] } | null => {
    const boundVisible = visibleNames.filter(n => overlay[n]?.yAxisIndex === i && !hidden.includes(n));
    if (!boundVisible.length) {
        return null;
    }
    const jsonHidden = [...hidden, ...boundVisible];
    const r = axesFollowBinders(
        boundJsonView(visibleNames, overlay, hidden),
        boundJsonView(visibleNames, overlay, jsonHidden),
        yAxes,
        marks,
        undefined,
        memory,
    );
    return {
        jsonHidden,
        yAxes: r.yAxes,
        jsonSeriesStyle: reindexJsonOverlay(overlay, r.reindex),
        ...(r.diedIndices.length ? { markLines: r.markLines } : {}),
    };
};

/**
 * The show patch for a hidden JSON payload series (B3): un-hide + reconcile in ONE undoable step.
 * The reconcile guarantees the shown name a VALID `yAxisIndex` IMMEDIATELY — sticky when its axis
 * survived the hide (the round-trip changes nothing but the deny-list), else a FRESH appended
 * axis (ADR-0069: the axis died with its last binder — the hide-time patch cleared the entry; a
 * re-show is a re-birth with default config, not a resurrection). An entry left index-less would
 * otherwise linger until the NEXT payload change — dropdown clamped to axis 1, editor seeing it
 * unbound, builder rendering axis 0.
 */
export const jsonShowPatch = <M extends { yAxisIndex?: number; name?: string }, K extends { yAxisIndex?: number }>(
    names: readonly string[],
    overlay: Readonly<Record<string, M>>,
    yAxes: readonly EchartsAxisConfig[],
    hidden: readonly string[],
    name: string,
    marks: readonly K[] = [],
    /** The Platz-Gedächtnis feeding the internal reconcile (ADR-0079 place-memory addendum). */
    memory?: AxisSlotMemory,
): { jsonHidden: string[]; yAxes: EchartsAxisConfig[]; jsonSeriesStyle: Record<string, M>; markLines?: K[] } => {
    // `nextHidden` — the deny-list WITHOUT the shown name (NOT the set of shown names; the old
    // `shown` name invited exactly that misreading of the reconcile args below).
    const nextHidden = hidden.filter(n => n !== name);
    const {
        yAxes: reconciled,
        overlay: next,
        markLines,
    } = reconcileJsonAxes(
        names.filter(n => !nextHidden.includes(n)),
        overlay,
        yAxes,
        nextHidden,
        marks,
        memory,
    );
    return { jsonHidden: nextHidden, yAxes: reconciled, jsonSeriesStyle: next, ...(markLines ? { markLines } : {}) };
};
