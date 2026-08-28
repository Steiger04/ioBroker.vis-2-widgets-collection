/**
 * Cartesian axis-layout + series↔axis coupling helpers: the 1:1 auto-layout assigned to an
 * auto-created axis + the predicate telling whether every series still owns its axis (ADR-0018,
 * bound-aware since ADR-0066); and the axis-as-independent-citizen coupling — rebind target, the
 * sticky JSON reconcile, and the effective axis name (ADR-0025/0026). Since ADR-0066 a series
 * leaving its axis keeps it as an unbound axis in EVERY mode: nothing prunes anymore, only an
 * explicit axis-delete removes an axis. Since ADR-0067 EVERY structural event (series/axis
 * add/delete/rebind, JSON hide/show, a side-flip, the reconcile, a data-path reset) re-arranges
 * the bound axes via {@link balanceAxes} — standard interleaving, dense on the raster.
 *
 * @module EchartsCollectionWidget/editor/axisLayout
 */
import { nextStableId } from './stableId';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

/** Pixel stage between stacked axes on the same side (ADR-0018). */
export const AXIS_STAGGER_STAGE = 80;

/**
 * Position + offset for the i-th auto-created axis: alternate left/right, 80 px stagger per side
 * (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × stage`). Geometry only — safe to re-apply on
 * re-arrange without clobbering the rest of an axis config (id/name/colour/min/max/…).
 */
export const axisPosition = (i: number): Pick<EchartsAxisConfig, 'position' | 'offset'> => ({
    position: i % 2 ? 'right' : 'left',
    offset: Math.floor(i / 2) * AXIS_STAGGER_STAGE,
});

/**
 * Default layout for the i-th auto-created axis: a stable id (`nextStableId('ax-')` from
 * {@link module:EchartsCollectionWidget/editor/stableId} — for React reconciliation only, the
 * cartesian builder never emits it to echarts) + {@link axisPosition} geometry + splitlines on
 * axis 0 only. Used on series creation (history/live + duplicate), the JSON-mode editor sync,
 * manual "add axis", and the auto-balance re-arrange (via {@link axisPosition}, non-destructive).
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
 * materialisation is a history/live binding-sight concern, never a JSON one.
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
 * The axis indices at least one series binds — the **bound set** (ADR-0066). A series with
 * `yAxisIndex === undefined` counts as bound to axis 0 (mirrors the builder's `e.yAxisIndex ?? 0`).
 * Every configured axis OUTSIDE this set is an unbound axis: kept in the editor with its config,
 * never emitted to the chart.
 */
export const boundAxisIndices = (series: readonly { yAxisIndex?: number }[]): Set<number> => {
    const bound = new Set<number>();
    for (const s of series) {
        bound.add(materializedAxisIndex(s));
    }
    return bound;
};

/**
 * True when every series sits on its OWN bound axis — a bijection between series and bound axes,
 * i.e. the dense 1:1 layout MODULO unbound axes (ADR-0066 supersedes the positional
 * `series j → axis j` reading of ADR-0018's dense check). A rebound series that left a hole still
 * owns its axis, so duplicating still yields a fresh axis; only a genuinely shared axis (2+ series
 * on it) is non-dense and makes the copy inherit the source binding.
 */
export const isOneToOneBound = (series: readonly { yAxisIndex?: number }[]): boolean =>
    boundAxisIndices(series).size === series.length;

/**
 * Auto-Balance (ADR-0067): re-arrange every BOUND axis after a structural event. The bound axes —
 * in array order — get the standard interleaving ({@link axisPosition} slot by slot: even → left,
 * odd → right) densely on the 80-px raster. Position AND offset are re-assigned; every other field
 * (id, name, raw, splitLine, …) survives. An UNBOUND axis takes no geometry slot: it passes through
 * with its stored position/offset as the preference a later re-bind's balance re-arranges — the
 * builder never renders it, so a coinciding geometry is harmless. A manual position/offset is
 * fine-justure until the next structural event — ADR-0028's idiom extended to the position; the
 * pack form (both sides repacked independently, position preserved) is pensioned with it.
 *
 * The series view decides what "bound" means, and the two modes read the index DIFFERENTLY:
 * history/live passes `state.series` — a series WITHOUT an index counts as bound to axis 0
 * (mirroring the builder). JSON passes {@link boundJsonView} — STRICT: a cleared entry
 * (`yAxisIndex` undefined) is unbound, never an implicit axis-0 binder.
 */
export const balanceAxes = (
    yAxes: readonly EchartsAxisConfig[],
    series: readonly { yAxisIndex?: number }[],
): EchartsAxisConfig[] => {
    const bound = boundAxisIndices(series);
    let slot = 0;
    return yAxes.map((a, i) => (bound.has(i) ? { ...a, ...axisPosition(slot++) } : a));
};

/**
 * The side an axis card DISPLAYS when no position is stored (a hand-edit blob): the index-aware
 * default `i === 0 ? 'left' : 'right'`. The card's position select, the card's position subtitle,
 * and the flip detector ({@link isRealSideFlip}) all read through here — ONE default, so the
 * detector can never drift from what the select shows again (Q4's bug class).
 */
export const displayPosition = (axis: EchartsAxisConfig | undefined, i: number): 'left' | 'right' =>
    axis?.position ?? (i === 0 ? 'left' : 'right');

/**
 * Whether a position patch on axis `i` is a REAL side-flip — the structural event that triggers
 * the {@link balanceAxes} re-arrange (Q4): the comparison runs through {@link displayPosition},
 * so re-selecting the value the card SHOWS on an axis without a stored position (a hand-edit
 * blob) is a no-op, not a structural event. The index-blind `?? 'left'` default mis-read such a
 * re-select as a flip and re-rastered every bound axis' hand-tuned offset. The detector is
 * boundness-blind by design: a flip of an UNBOUND axis keeps firing (its stored geometry sticks —
 * the balance never touches it, ADR-0067).
 */
export const isRealSideFlip = (
    axes: readonly EchartsAxisConfig[],
    i: number,
    patch: Partial<EchartsAxisConfig>,
): boolean => 'position' in patch && patch.position !== displayPosition(axes[i], i);

/**
 * The emitted (effective) axis positions (Q5): the cartesian builder emits the BOUND axes only,
 * compacted in array order — `ranks.get(i)` is axis i's EMITTED index (its rank among the bound
 * indices, ascending), `undefined` when unbound (no rank — the axis rests). UI gates that must
 * follow the emitted truth (the alignTicks switch/warning: the reference axis is the first BOUND
 * axis, an unbound configured axis 0 is NOT it) read here instead of the configured index.
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
 * follows the rebind target — history/live passes the series rebind's `sameFormatSurvivor`
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
 * The effective display name of axis `i` for the per-series binding dropdown (ADR-0025): the explicit
 * axis name, else the name inherited from the axis' owner series (first binder before ADR-0068),
 * else — while UNBOUND — the **resting name** (the name the axis carried when its series left,
 * ADR-0066), else the `Series N` label. While BOUND, N is the binder's SERIES position — the exact
 * label the builder renders for an unnamed series and the Axis-card title shows (`boundAxisName`),
 * so all three agree even in a misaligned binding; an unbound axis has no series, so its N is the
 * axis index (the card's own bare fallback there is the `Achse N` identity label — dropdown shows
 * inherited labels, card shows identity; F11). Bound axes ignore the resting name (live series
 * inheritance wins, ADR-0018); the builder's axis-name resolution (`a.name ?? seriesName`) never
 * sees it either — it renders bound axes only.
 */
export const effectiveAxisName = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number; name?: string }[],
): string => {
    if (axis.name) {
        return axis.name;
    }
    const boundPos = binderIndexOf(axis, i, series);
    if (boundPos >= 0 && series[boundPos].name) {
        return series[boundPos].name;
    }
    if (boundPos < 0 && axis.restingName) {
        return axis.restingName;
    }
    return `Series ${(boundPos >= 0 ? boundPos : i) + 1}`;
};

/**
 * The per-series binding dropdown's item label (B1): the 1-based axis number + the effective
 * name. The number is what keeps the item identifiable after a rebind — the name alone can
 * COLLIDE: the rebind's own series becomes the target axis' first binder (the label jumps to
 * the user's own series name) while the vacated axis keeps the very same name as its resting
 * name — two identical labels, the selection unreadable. The number prefix matches the
 * marking card's axis options and the legacy fallback of {@link CartesianBasisFields}; the
 * „(unbenutzt)" suffix for unbound axes is appended by the caller (an i18n concern).
 */
export const axisOptionLabel = (
    ai: number,
    axis: EchartsAxisConfig,
    series: readonly { yAxisIndex?: number; name?: string }[],
): string => `${ai + 1} · ${effectiveAxisName(axis, ai, series)}`;

/**
 * The display name to persist as {@link EchartsAxisConfig.restingName} when axis `i` transitions to
 * unbound (ADR-0066): the name the axis is showing right now — its owner series' inherited name,
 * since an axis with an explicit `name` needs no snapshot. `undefined` when there is nothing worth
 * freezing (explicit name set, or the display binder is unnamed) — the caller keeps any existing
 * restingName then. Callers snapshot on series-leave (rebind / series-delete / JSON rebind / hide)
 * BEFORE applying the change, against the pre-change series list; a rebind onto the axis CLEARS the
 * restingName (bound axes inherit live again).
 */
export const restingAxisName = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { id?: string; yAxisIndex?: number; name?: string }[],
): string | undefined => {
    if (axis.name) {
        return undefined;
    }
    return series[binderIndexOf(axis, i, series)]?.name || undefined;
};

/**
 * Resting-name transitions (ADR-0066): diff the BEFORE/AFTER binding views (history/live series
 * lists, or the JSON visible-overlay view) against the axes and return the patched `yAxes` — every
 * axis whose last binder LEFT gets its displayed name snapshotted into
 * {@link EchartsAxisConfig.restingName}; every axis that GAINED a binder has its resting name
 * cleared (live series inheritance resumes). `undefined` when no axis transitions — the caller
 * keeps the array referentially stable.
 */
export const restingNamePatch = (
    before: readonly { id?: string; yAxisIndex?: number; name?: string }[],
    after: readonly { id?: string; yAxisIndex?: number; name?: string }[],
    yAxes: readonly EchartsAxisConfig[],
): EchartsAxisConfig[] | undefined => {
    let next: EchartsAxisConfig[] | undefined;
    for (let yi = 0; yi < yAxes.length; yi++) {
        // Materialised sight (Q7): an implicit axis-0 binder transitions like any other — a
        // history/live fix. JSON callers pass DEFINED-only sights (boundJsonView everywhere,
        // incl. the reconcile's before-sight), so the materialisation is a no-op on JSON.
        const wasBound = before.some(s => materializedAxisIndex(s) === yi);
        const isBound = after.some(s => materializedAxisIndex(s) === yi);
        // Owner rule (ADR-0068, ticket 05) — runs on EVERY bound axis, not only transitions:
        // a bound owner keeps the identity; an unset owner BOOTSTRAPS from the before-binder
        // (the incumbent — without this the first rebind would still hand the name to the
        // newcomer); an owner that left hands over to the first remaining after-binder.
        // id-less sights (legacy lists) stay owner-less — the display falls back to the first
        // binder, exactly the pre-0068 behaviour.
        const afterBinder = after.find(s => materializedAxisIndex(s) === yi);
        if (afterBinder) {
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
                        incumbent !== undefined &&
                        after.some(s => s.id === incumbent && materializedAxisIndex(s) === yi)
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
        if (wasBound === isBound) {
            continue; // no transition on this axis
        }
        if (isBound) {
            if (yAxes[yi].restingName !== undefined) {
                (next ??= yAxes.slice())[yi] = { ...(next?.[yi] ?? yAxes[yi]), restingName: undefined };
            }
            continue;
        }
        const snapshot = restingAxisName(next?.[yi] ?? yAxes[yi], yi, before);
        if (snapshot) {
            (next ??= yAxes.slice())[yi] = { ...(next?.[yi] ?? yAxes[yi]), restingName: snapshot };
        }
    }
    return next;
};

/**
 * Resting-name snapshot + auto-balance in one — the shared series-leave→re-arrange seam (ADR-0066 +
 * ADR-0067): {@link restingNamePatch} snapshots against the BEFORE series view, then the balance
 * re-arranges the AFTER bound set over the patched axes. `before`/`after` follow each mode's sight
 * (history/live: the raw series lists — the diff MATERIALIZES an undefined index to axis 0, Q7;
 * JSON: the STRICT visible views — {@link boundJsonView}, defined indices only — an unfiltered
 * JSON sight would mis-read a fresh name as an axis-0 binder, so JSON callers MUST filter).
 */
export const restingBalance = (
    before: readonly { yAxisIndex?: number; name?: string }[],
    after: readonly { yAxisIndex?: number }[],
    yAxes: readonly EchartsAxisConfig[],
): EchartsAxisConfig[] => balanceAxes(restingNamePatch(before, after, yAxes) ?? yAxes, after);

/**
 * The JSON binding view for {@link restingNamePatch}: one {id, index, display name} entry per
 * VISIBLE payload name — the overlay-authored name, else the payload name (the label the dropdown
 * and the Axis-card show). The `id` is the payload NAME itself: in JSON the name IS the series
 * identity (the overlay is name-keyed), so it doubles as the axis **owner** key (ADR-0068).
 * Visibility matters: a hidden name keeps its overlay `yAxisIndex` until the reconcile clears it,
 * so a diff over raw overlay entries would miss the transition; the view sees only what renders.
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
 * `yAxisIndex` undefined (cleared by the reconcile when its name hid) is UNBOUND — unlike a
 * history/live series without an index, which implicitly binds axis 0 (the builder's `?? 0`).
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
 * Axis manager's badge/position-lock sight. A hidden entry whose `yAxisIndex` awaits the
 * reconcile's clear must not count as a binder: reading all `Object.values` (the old inline
 * form) marked such an axis bound — badge off, position locked, title from the hidden name —
 * while the Series dropdown suffixed the same axis „(unbenutzt)" until the next payload change.
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
 * index is pending reconcile bookkeeping, not a binding). The JSON sibling of the history/live
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
 * Effective colour of axis `i` for the Axis-card swatch (ADR-0018): the OWNER series' colour
 * (first bound series before ADR-0068), else its palette slot by the series' DISPLAY position.
 * Mirrors both the cartesian builder (`a.color ?? seriesColor`) and the Series-card swatch
 * (`s.color ?? palette[seriesIndex]`), so the Axis card matches the Series card of its display
 * series — the 1:1 colour invariant.
 *
 * `series` MUST be in DISPLAY order: history/live passes `state.series`; JSON passes the VISIBLE
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
 * - **Unbound axes persist (ADR-0066):** a name no longer visible (hidden or gone) is cleared; the
 *   freed axis STAYS as an unbound axis — selectable in the dropdown, deletable on its card, never
 *   rendered. Same rule as a manual rebind in history/live: only an explicit axis-delete removes an
 *   axis, so the reconcile never drops or re-indexes anything.
 * - **Vanish snapshots too (ADR-0066 addendum):** a name VANISHING from the payload is a leave
 *   transition like every other — the reconcile snapshots its axis' displayed name into
 *   `restingName` (overlay name, else payload name) over the visibility sight, so the resting card
 *   keeps its label instead of collapsing to „Achse N". A HIDDEN name is outside that sight: its
 *   leave was snapshotted at hide time; the clear here is bookkeeping only.
 * - **Auto-balanced (ADR-0067):** the reconcile IS a structural event — it ends in
 *   {@link balanceAxes} over the visible names' bindings (the strict sight: a cleared entry never
 *   counts as bound). A hand-tuned position/offset survives only between reconcile firings; a
 *   fresh appended axis lands in the next free balance slot, dense behind the bound set.
 *
 * Pure — the caller (the modal effect on payload/mode change) writes the result back. Not a hook.
 */
export const reconcileJsonAxes = <M extends { yAxisIndex?: number; name?: string }>(
    visibleNames: readonly string[],
    overlay: Readonly<Record<string, M>>,
    yAxes: readonly EchartsAxisConfig[],
    hidden: readonly string[] = [],
): { yAxes: EchartsAxisConfig[]; overlay: Record<string, M> } => {
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
    // 2. Clear yAxisIndex on entries no longer visible (hidden or gone) so they don't anchor an axis
    //    (its axis rests unbound instead — the builder never renders it).
    for (const key of Object.keys(next)) {
        if (!visibleNames.includes(key) && next[key].yAxisIndex !== undefined) {
            next[key] = { ...next[key], yAxisIndex: undefined };
        }
    }
    // 3. Resting snapshot + auto-balance. The vanish is a LEAVE transition like every other
    //    (ADR-0066 addendum: snapshot on every leave, clear on every gain): BEFORE = the STRICT
    //    visibility sight of every name that was rendering-bound — still visible or vanished from
    //    the payload (defined indices only: a fresh name without an overlay entry never bound
    //    anything in JSON, and a HIDDEN name rests outside the sight; its leave was snapshotted
    //    at hide time, the clear in step 2 is bookkeeping only). AFTER = the POST-reconcile sight
    //    — same strictness, step 1 guarantees defined indices. {@link restingBalance} is exactly
    //    patch-then-balance: the snapshot reads the FIRST binder's name (the display-inherit
    //    rule, consistent for a 1:n axis pre-vanish), then the balance re-arranges the bound set
    //    (ADR-0067). NOTE the seam: the resting diff materialises undefined→0 INSIDE, for the
    //    history/live sights — feeding it unfiltered JSON entries would mis-read a fresh name as
    //    an axis-0 binder and snapshot the never-rendered name; the strict filter here prevents
    //    exactly that (Q7).
    const vanished = Object.keys(overlay).filter(n => !visibleNames.includes(n) && !hidden.includes(n));
    const before = boundJsonView([...visibleNames, ...vanished], overlay, hidden);
    return {
        yAxes: restingBalance(before, boundJsonView(visibleNames, next, []), axes),
        overlay: next,
    };
};

/**
 * The JSON-mode axis-delete patch for a BOUND axis (Q3, ADR-0066 addendum — the JSON sibling of
 * {@link sameFormatSurvivor} on the history/live delete path): "delete this axis" hides EVERY
 * visible payload name bound to the axis — ALL binders, not the first. With 1:n first-class
 * (ADR-0026), hiding just one binder would leave the axis bound and rendered: the button would
 * not do what it says (an undo step catches misclicks; deliberately NOT first-name + toast).
 * The resting snapshot runs over the visibility sight like every leave: the axis' displayed name
 * (the FIRST binder's, payload order) survives as `restingName`, and the remaining bound set
 * re-arranges (ADR-0067). `jsonHidden` and `yAxes` travel in ONE patch → one undo step.
 *
 * `null` when no VISIBLE name binds the axis (an unbound axis, or only already-hidden binders) —
 * the caller then takes the unbound config-delete path (drop the axis + re-index the overlay).
 */
export const jsonBoundAxisDeletePatch = (
    visibleNames: readonly string[],
    overlay: Readonly<Record<string, { yAxisIndex?: number; name?: string }>>,
    hidden: readonly string[],
    yAxes: readonly EchartsAxisConfig[],
    i: number,
): { jsonHidden: string[]; yAxes: EchartsAxisConfig[] } | null => {
    const boundVisible = visibleNames.filter(n => overlay[n]?.yAxisIndex === i && !hidden.includes(n));
    if (!boundVisible.length) {
        return null;
    }
    const jsonHidden = [...hidden, ...boundVisible];
    return {
        jsonHidden,
        yAxes: restingBalance(
            boundJsonView(visibleNames, overlay, hidden),
            boundJsonView(visibleNames, overlay, jsonHidden),
            yAxes,
        ),
    };
};

/**
 * The show patch for a hidden JSON payload series (B3): un-hide + reconcile in ONE undoable
 * step. Two halves, each with its own sight transition:
 *
 * 1. The hidden→shown resting diff (the previous showJson behaviour): an axis GAINING its
 *    binder back drops the stale restingName (ADR-0066: clear on every gain).
 * 2. The full reconcile over the shown state: every VISIBLE name is guaranteed a valid
 *    `yAxisIndex` IMMEDIATELY. An entry the reconcile had cleared while hidden (a payload
 *    change happened in between) would otherwise linger index-less until the NEXT payload
 *    change — dropdown showing axis 1, editor seeing it unbound, builder rendering axis 0 —
 *    and then land on a fresh axis anyway. A sticky index never triggers an append, so the
 *    common hide→show round-trip changes nothing but the deny-list and the gain-clear.
 */
export const jsonShowPatch = <M extends { yAxisIndex?: number; name?: string }>(
    names: readonly string[],
    overlay: Readonly<Record<string, M>>,
    yAxes: readonly EchartsAxisConfig[],
    hidden: readonly string[],
    name: string,
): { jsonHidden: string[]; yAxes: EchartsAxisConfig[]; jsonSeriesStyle: Record<string, M> } => {
    // `nextHidden` — the deny-list WITHOUT the shown name (NOT the set of shown names; the old
    // `shown` name invited exactly that misreading of the reconcile args below).
    const nextHidden = hidden.filter(n => n !== name);
    const rested = restingBalance(
        boundJsonView(names, overlay, hidden),
        boundJsonView(names, overlay, nextHidden),
        yAxes,
    );
    const { yAxes: reconciled, overlay: next } = reconcileJsonAxes(
        names.filter(n => !nextHidden.includes(n)),
        overlay,
        rested,
        nextHidden,
    );
    return { jsonHidden: nextHidden, yAxes: reconciled, jsonSeriesStyle: next };
};
