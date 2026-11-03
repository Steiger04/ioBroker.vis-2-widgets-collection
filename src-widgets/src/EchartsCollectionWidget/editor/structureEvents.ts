/**
 * Struktur-Ereignisse — one module owns the axis–series coupling and the boundary crossings
 * (ADR-0099).
 *
 * @module EchartsCollectionWidget/editor/structureEvents
 * @remarks
 * One interface: {@link applyStructureEvent}`(view, event) → { patch, died, advisory }`. An event
 * is data; the result is the COMPLETE follow-up of the event as ONE editor patch (one `set()` =
 * one undo step) — the axis–series coupling (ADR-0018/0025/0066/0067/0068/0069/0079) and the
 * data-path consequences — plus the axes that died and an optional notice for the modal to
 * render. The module is pure: notices are returned data, never callbacks.
 *
 * The binder adapter is internal: the module reads the positional sight (Verlauf, Tabellarisch
 * — `view.series`) or the name-keyed sight (serien-förmig JSON — payload names, overlay,
 * `jsonHidden`) from `mode`/`jsonKind`; callers never branch on the data path. The axis-less
 * pie runs through the same entry point (its series carry no axis consequences).
 *
 * Out of scope (ADR-0099 decision 5): the load heal and `syncSlotMemory` stay in the lifecycle;
 * plain field edits stay plain patches.
 */
import {
    AXIS_STAGGER_STAGE,
    axisPlace,
    axisPosition,
    type AxisSlotMemory,
    boundAxisIndices,
    boundJsonView,
    displayPosition,
    effectiveAxisName,
    jsonAxisDeathName,
    materializedAxisIndex,
    positionalBinderName,
    sideOrder,
    sideSlotValues,
} from './axisSight';
import { nextStableId } from './stableId';
import {
    crossesFamilyBoundary,
    crossesJsonBoundary,
    crossesJsonKindBoundary,
    dataPathReset,
    jsonKindReset,
} from './lifecycleGuards';
import { coreOf } from '../families/cores';
import type { EchartsAxisConfig, EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
import type { EditorPatch, EditorSeries, EditorState } from './editorState';

/**
 * What an event reads: the structural fields of the editor state plus the live payload names
 * (serien-förmig JSON — the payload owns count and names; empty in every other data path).
 */
export type StructureView = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'jsonKind'
    | 'series'
    | 'yAxes'
    | 'markLines'
    | 'axisSlotMemory'
    | 'jsonSeriesStyle'
    | 'jsonHidden'
    | 'jsonOid'
> & {
    /** The payload's series names in payload order (unfiltered — `jsonHidden` applies inside). */
    payloadNames: readonly string[];
};

/** The structure events (ADR-0099 decision 1). */
export type StructureEvent =
    /** A new series — Verlauf/Kreis by OID, Tabellarisch by Y column. `id` is the caller's fresh stable id. */
    | { type: 'addSeries'; id: string; oid?: string; yPath?: string }
    /** Copy series `index` right behind it; `copySuffix` is the translated „Kopie" marker. */
    /** `fallbackName`: the translated position title („Serie 2") for a source without a display name. */
    | { type: 'duplicateSeries'; id: string; index: number; copySuffix: string; fallbackName: string }
    | { type: 'removeSeries'; index: number }
    /**
     * Bind a series to `axis` — a value ≥ the axis count is „Neue Achse" (append + bind). The
     * positional paths address the series by `index`, serien-förmig JSON by payload `name`.
     */
    | { type: 'rebindSeries'; index?: number; name?: string; axis: number }
    /** Serien-förmig JSON: suppress a payload series by name (`jsonHidden`) — restorable. */
    | { type: 'hideSeries'; name: string }
    /** Serien-förmig JSON: un-hide a payload series — a valid axis immediately (re-birth, ADR-0069). */
    | { type: 'showSeries'; name: string }
    /** Delete axis `index` explicitly — its series rebind (positional) or hide (name-keyed). */
    | { type: 'deleteAxis'; index: number }
    /** An axis edit carrying `position` — a real side flip re-places the axis (ADR-0079). */
    | { type: 'flipAxisSide'; index: number; patch: Partial<EchartsAxisConfig> }
    /** Move axis `index` one place within its side (ADR-0079). */
    | { type: 'moveAxis'; index: number; dir: -1 | 1 }
    /** The payload's series names changed (serien-förmig JSON) — the axis reconcile (ADR-0026). */
    | { type: 'payloadChanged' }
    /** Pick a chart type — crossing the family boundary (cartesian↔pie) resets the data path (ADR-0067). */
    | { type: 'changeFamily'; to: EditorState['chartType'] }
    /** Pick a data mode — crossing the JSON boundary resets the data path (ADR-0067). */
    | { type: 'changeMode'; to: EditorState['mode'] }
    /** Pick a payload family — the crossing resets the derived structure, the data point stays (ADR-0075). */
    | { type: 'changeJsonKind'; to: EditorState['jsonKind'] };

/**
 * What a data-path reset deleted (ADR-0067 F10, ADR-0042) — derived from the reset patch
 * (before minus after) over the VISIBLE sight, so count and deletion cannot disagree.
 */
export interface StructureLoss {
    /** Visible series (serien-förmig JSON: the unhidden payload series). */
    series: number;
    axes: number;
    /** Markings the family shows (cartesian-only). */
    marks: number;
    /** The JSON data point (`jsonOid`) fell. */
    dataPoint: boolean;
    /** Active template activations (ADR-0042) on the fallen series. */
    templates: number;
}

/** A notice for the modal (ADR-0099 decision 3) — rendered by the one notice host. */
export type StructureAdvisory =
    /** Axes died as a side effect (ADR-0069); `undoable: false` where undo is futile (payload vanish). */
    | { kind: 'axisDeath'; names: string[]; undoable: boolean }
    /** An axis delete rebound its series onto axis 0 — no survivor shares the format (ADR-0025). */
    | { kind: 'unitMismatch' }
    /** A boundary crossing reset the data path — what fell with it. */
    | { kind: 'dataPathReset'; loss: StructureLoss };

/** The complete follow-up of one event. */
export interface StructureResult {
    /** The ONE patch to `set()` — `null` when the event changes nothing (no history entry). */
    patch: EditorPatch | null;
    /** Indices (in the BEFORE axis array) of the axes the event dropped. */
    died: number[];
    advisory?: StructureAdvisory;
}

const isCartesian = (v: StructureView): boolean =>
    v.chartType === 'line' || v.chartType === 'bar' || v.chartType === 'scatter';

/** The name-keyed binder sight is serien-förmig JSON's; every other path is positional. */
const isNamed = (v: StructureView): boolean => v.mode === 'json' && v.jsonKind === 'series';

/** The strict name-keyed binder sight (defined indices of visible names only). */
const namedBinders = (
    v: StructureView,
    overlay: Readonly<Record<string, EchartsSeriesMeta>>,
    hidden: readonly string[],
): { yAxisIndex?: number }[] => boundJsonView(v.payloadNames, overlay, hidden);

/** The death notice — names resolved from the BEFORE view, per binder sight. */
const deathAdvisory = (v: StructureView, died: readonly number[], undoable = true): StructureAdvisory | undefined =>
    died.length
        ? {
              kind: 'axisDeath',
              undoable,
              names: died.map(idx =>
                  isNamed(v)
                      ? jsonAxisDeathName(v.yAxes[idx], idx, v.payloadNames, v.jsonSeriesStyle, v.jsonHidden)
                      : effectiveAxisName(v.yAxes[idx], idx, v.series),
              ),
          }
        : undefined;

const result = (patch: EditorPatch | null, died: number[] = [], advisory?: StructureAdvisory): StructureResult =>
    advisory ? { patch, died, advisory } : { patch, died };

// ── axis write helpers (internal — ADR-0099 decision 1) ─────────────
//
// The coupling algorithms the events compose. Exported are only the lifecycle invariants (the
// load heal `dropUnboundAxes` + `reindexJsonOverlay`, `syncSlotMemory` — ADR-0099 decision 5),
// the axis factory and the balance/place algorithms (the internal seam their algorithm tests
// pin, decision 7).

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
 * True when every series sits on its OWN bound axis — a bijection between series and axes,
 * i.e. the dense 1:1 layout (ADR-0018's dense check, bound-aware). A rebound series that left a
 * hole took its axis with it (ADR-0069), so duplicating still yields a fresh axis; only a
 * genuinely shared axis (2+ series on it) is non-dense and makes the copy inherit the source
 * binding.
 */
const isOneToOneBound = (series: readonly { yAxisIndex?: number }[]): boolean =>
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
 * Pick the axis a deleted axis' series should rebind onto (ADR-0025): the first surviving axis
 * (by index) whose `format` matches the deleted axis' — the proxy for "same unit" (empty matches
 * empty). Returns `null` when no survivor shares the format; the caller then falls back to axis 0 +
 * an advisory unit-mismatch toast. `survivors` is the post-delete axis array, so the returned index
 * is already the new `yAxisIndex`.
 */
const sameFormatSurvivor = (
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
const remapMarkAxisIndices = <M extends { yAxisIndex?: number }>(
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
 * Owner maintenance over a before/after binding transition (ADR-0068 — the surviving half of the
 * retired resting-name patch): every axis an AFTER binder still holds gets its `owner` kept
 * current — an owner still bound to THIS axis keeps the identity (a rebind newcomer never
 * steals it); an unset owner bootstraps from the axis' BEFORE binder (the incumbent at the
 * moment of the first event); an owner that left hands over to the first remaining after-binder.
 * `undefined` when no owner changes — the caller keeps the array referentially stable. The
 * axis-DYING half of the old patch is gone: an axis that loses its last binder is dropped (see
 * {@link dropUnboundAxes}) — there is no resting state to snapshot anymore (ADR-0069).
 */
const ownerPatch = (
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
const axesFollowBinders = <S extends { yAxisIndex?: number }, M extends { yAxisIndex?: number }>(
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
const reconcileJsonAxes = <M extends { yAxisIndex?: number; name?: string }, K extends { yAxisIndex?: number }>(
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
const jsonBoundAxisDeletePatch = <M extends { yAxisIndex?: number; name?: string }, K extends { yAxisIndex?: number }>(
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
const jsonShowPatch = <M extends { yAxisIndex?: number; name?: string }, K extends { yAxisIndex?: number }>(
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

// ── series events ───────────────────────────────────────────────────

/** Strict 1:1 auto-axis (ADR-0018): a new cartesian series gets a fresh appended axis, then the balance. */
const addSeries = (v: StructureView, e: Extract<StructureEvent, { type: 'addSeries' }>): StructureResult => {
    const axIdx = v.yAxes.length;
    const yAxisIndex = isCartesian(v) ? axIdx : 0;
    const fresh: EditorSeries = e.yPath
        ? { id: e.id, oid: '', yPath: e.yPath, name: '', yAxisIndex }
        : { id: e.id, oid: e.oid ?? '', name: '', yAxisIndex };
    const series = [...v.series, fresh];
    if (!isCartesian(v)) {
        return result({ series });
    }
    return result({ series, yAxes: balanceAxes([...v.yAxes, axisLayout(axIdx)], series, v.axisSlotMemory) });
};

/**
 * 1:1 auto-axis while every series owns its axis (dense); a genuinely shared setup keeps the
 * copy on the source axis — duplicating never silently breaks a deliberate shared axis.
 */
const duplicateSeries = (
    v: StructureView,
    e: Extract<StructureEvent, { type: 'duplicateSeries' }>,
): StructureResult => {
    const i = e.index;
    const source = v.series[i];
    // The copy's name follows the card title chain (authored name → yPath column → translated
    // position fallback) — a table copy reads „hum (Kopie)", never an English `Series N`.
    const copy: EditorSeries = {
        ...source,
        id: e.id,
        name: `${positionalBinderName(source) || e.fallbackName} (${e.copySuffix})`,
    };
    const series = [...v.series.slice(0, i + 1), copy, ...v.series.slice(i + 1)];
    if (!isCartesian(v)) {
        return result({ series });
    }
    if (isOneToOneBound(v.series)) {
        const axIdx = v.yAxes.length;
        copy.yAxisIndex = axIdx;
        return result({ series, yAxes: balanceAxes([...v.yAxes, axisLayout(axIdx)], series, v.axisSlotMemory) });
    }
    copy.yAxisIndex = source.yAxisIndex;
    return result({ series, yAxes: balanceAxes(v.yAxes, series, v.axisSlotMemory) });
};

/** Series-leave kills the axis (ADR-0069) when no binder remains — dropped, anchors re-indexed, balanced. */
const removeSeries = (v: StructureView, e: Extract<StructureEvent, { type: 'removeSeries' }>): StructureResult => {
    const next = v.series.filter((_s, idx) => idx !== e.index);
    if (!isCartesian(v)) {
        return result({ series: next });
    }
    const r = axesFollowBinders(v.series, next, v.yAxes, v.markLines, undefined, v.axisSlotMemory);
    return result(
        { series: r.binders, yAxes: r.yAxes, markLines: r.markLines },
        r.diedIndices,
        deathAdvisory(v, r.diedIndices),
    );
};

/**
 * Rebind (ADR-0025/0026): the vacated axis dies without a binder, its marking anchors follow the
 * series onto the target; „Neue Achse" appends and binds in the same step (ADR-0069).
 */
const rebindSeries = (v: StructureView, e: Extract<StructureEvent, { type: 'rebindSeries' }>): StructureResult => {
    const to = e.axis;
    const yAxes = to >= v.yAxes.length ? [...v.yAxes, axisLayout(to)] : v.yAxes;
    if (isNamed(v)) {
        // Name-keyed adapter: the overlay entry carries the binding.
        const name = e.name ?? '';
        const overlay = { ...v.jsonSeriesStyle, [name]: { ...v.jsonSeriesStyle[name], yAxisIndex: to } };
        const from = v.jsonSeriesStyle[name]?.yAxisIndex;
        const r = axesFollowBinders(
            namedBinders(v, v.jsonSeriesStyle, v.jsonHidden),
            namedBinders(v, overlay, v.jsonHidden),
            yAxes,
            v.markLines,
            typeof from === 'number' ? { from, to } : undefined,
            v.axisSlotMemory,
        );
        return result(
            {
                jsonSeriesStyle: r.diedIndices.length ? reindexJsonOverlay(overlay, r.reindex) : overlay,
                yAxes: r.yAxes,
                markLines: r.markLines,
            },
            r.diedIndices,
            deathAdvisory(v, r.diedIndices),
        );
    }
    // Positional adapter (Verlauf, Tabellarisch): the series list carries the binding.
    const i = e.index ?? 0;
    const from = materializedAxisIndex(v.series[i]);
    const next = v.series.map((s, idx) => (idx === i ? { ...s, yAxisIndex: to } : s));
    const r = axesFollowBinders(v.series, next, yAxes, v.markLines, { from, to }, v.axisSlotMemory);
    return result(
        { series: r.binders, yAxes: r.yAxes, markLines: r.markLines },
        r.diedIndices,
        deathAdvisory(v, r.diedIndices),
    );
};

// ── hide / show (serien-förmig JSON) ────────────────────────────────

/**
 * Hide a payload series (`jsonHidden` deny-list): hiding the LAST binder of an axis kills it
 * (ADR-0069) — overlay entries + marking anchors re-index around the hole, survivors re-arrange.
 */
const hideSeries = (v: StructureView, e: Extract<StructureEvent, { type: 'hideSeries' }>): StructureResult => {
    const hidden = [...v.jsonHidden, e.name];
    const r = axesFollowBinders(
        namedBinders(v, v.jsonSeriesStyle, v.jsonHidden),
        namedBinders(v, v.jsonSeriesStyle, hidden),
        v.yAxes,
        v.markLines,
        undefined,
        v.axisSlotMemory,
    );
    return result(
        {
            jsonHidden: hidden,
            yAxes: r.yAxes,
            jsonSeriesStyle: r.diedIndices.length
                ? reindexJsonOverlay(v.jsonSeriesStyle, r.reindex)
                : v.jsonSeriesStyle,
            markLines: r.markLines,
        },
        r.diedIndices,
        deathAdvisory(v, r.diedIndices),
    );
};

/** Un-hide + reconcile in ONE step: sticky axis when it survived the hide, else a fresh one (re-birth). */
const showSeries = (v: StructureView, e: Extract<StructureEvent, { type: 'showSeries' }>): StructureResult =>
    result(
        jsonShowPatch(v.payloadNames, v.jsonSeriesStyle, v.yAxes, v.jsonHidden, e.name, v.markLines, v.axisSlotMemory),
    );

// ── axis events ─────────────────────────────────────────────────────

/**
 * Explicit axis delete. Name-keyed: hide EVERY visible binder, the axis dies with them (one
 * patch, no notice — an explicit delete says what it does); without a binder the config drops
 * and the overlay re-indexes around the hole. Positional (ADR-0025): the series never die —
 * they rebind to a same-format survivor, else axis 0 + the unit-mismatch notice; deleting the
 * last axis while series remain rebinds them onto a fresh default axis.
 */
const deleteAxis = (v: StructureView, e: Extract<StructureEvent, { type: 'deleteAxis' }>): StructureResult => {
    const i = e.index;
    const axes = v.yAxes;
    if (isNamed(v)) {
        const hideAll = jsonBoundAxisDeletePatch(
            v.payloadNames,
            v.jsonSeriesStyle,
            v.jsonHidden,
            axes,
            i,
            v.markLines,
            v.axisSlotMemory,
        );
        if (hideAll) {
            return result(hideAll, [i]);
        }
        // No bound payload series: a stale-but-in-range index would silently rebind a payload
        // series to the WRONG axis — re-index the overlay; the anchors keep their stack place.
        const reindexed = Object.fromEntries(
            Object.entries(v.jsonSeriesStyle).map(([n, m]) => [
                n,
                typeof m.yAxisIndex === 'number' && m.yAxisIndex > i ? { ...m, yAxisIndex: m.yAxisIndex - 1 } : m,
            ]),
        );
        return result(
            {
                yAxes: balanceAxes(
                    axes.filter((_a, idx) => idx !== i),
                    namedBinders(v, reindexed, v.jsonHidden),
                    v.axisSlotMemory,
                ),
                jsonSeriesStyle: reindexed,
                markLines: remapMarkAxisIndices(v.markLines, i, Math.max(0, i - 1)),
            },
            [i],
        );
    }
    let survivors = axes.filter((_a, idx) => idx !== i);
    const match = sameFormatSurvivor(axes[i]?.format, survivors);
    const freshFallback = !survivors.length;
    if (freshFallback) {
        survivors = [axisLayout(0)];
    }
    const target = match ?? 0; // index in survivors = the new yAxisIndex
    const rebound = v.series.map(s => {
        const yi = s.yAxisIndex;
        if (typeof yi !== 'number') {
            return s;
        }
        if (yi === i) {
            return { ...s, yAxisIndex: target };
        }
        return { ...s, yAxisIndex: yi > i ? yi - 1 : yi };
    });
    // The owner rule keeps/assigns each survivor's display series (ADR-0068).
    const patched = ownerPatch(v.series, rebound, survivors) ?? survivors;
    return result(
        {
            yAxes: balanceAxes(patched, rebound, v.axisSlotMemory),
            series: rebound,
            markLines: remapMarkAxisIndices(v.markLines, i, target),
        },
        [i],
        // The mismatch warns about a CHOSEN fallback — a fresh axis had nothing to mismatch.
        match === null && !freshFallback ? { kind: 'unitMismatch' } : undefined,
    );
};

/**
 * A REAL side flip inserts the axis at its PLACE on the target side (ADR-0079): the rank
 * travels, the displaced shift outward. Re-selecting the side the card SHOWS is no flip; the
 * patch's other keys ride along either way.
 */
const flipAxisSide = (v: StructureView, e: Extract<StructureEvent, { type: 'flipAxisSide' }>): StructureResult => {
    const i = e.index;
    const target = e.patch.position;
    const placed =
        target !== undefined && target !== displayPosition(v.yAxes[i], i)
            ? insertAxisAtPlace(v.yAxes, i, target, v.axisSlotMemory)
            : undefined;
    return result({ yAxes: (placed ?? v.yAxes).map((a, idx) => (idx === i ? { ...a, ...e.patch } : a)) });
};

/** One place up/down within the side — `null` at the boundary (no undo step). */
const moveAxis = (v: StructureView, e: Extract<StructureEvent, { type: 'moveAxis' }>): StructureResult => {
    const moved = moveAxisPlace(v.yAxes, e.index, e.dir);
    return result(moved ? { yAxes: moved } : null);
};

// ── payload ─────────────────────────────────────────────────────────

/**
 * The payload reconcile (ADR-0026 — JSON 1:n): a fresh payload lands 1:1, a valid binding
 * stays sticky, a name VANISHING from the payload kills its axis (ADR-0069). Only the VISIBLE
 * names drive it. `null` patch outside json-cartesian serien-förmig, without visible names or
 * over an already-consistent state — the idempotence guard that keeps an undo re-fire from
 * recording an empty step (the redo branch survives). The death notice is not undoable: the
 * next reconcile over the same payload would re-kill the axis.
 */
const payloadChanged = (v: StructureView): StructureResult => {
    const visible = v.payloadNames.filter(n => !v.jsonHidden.includes(n));
    if (!isNamed(v) || !isCartesian(v) || visible.length === 0) {
        return result(null);
    }
    const r = reconcileJsonAxes(visible, v.jsonSeriesStyle, v.yAxes, v.jsonHidden, v.markLines, v.axisSlotMemory);
    if (
        JSON.stringify(r.yAxes) === JSON.stringify(v.yAxes) &&
        JSON.stringify(r.overlay) === JSON.stringify(v.jsonSeriesStyle) &&
        !r.markLines
    ) {
        return result(null);
    }
    const patch: EditorPatch = r.markLines
        ? { yAxes: r.yAxes, jsonSeriesStyle: r.overlay, markLines: r.markLines }
        : { yAxes: r.yAxes, jsonSeriesStyle: r.overlay };
    // The pre-death label: the vanished binder is gone from the visible list — the resolver
    // extends the sight by the vanished overlay keys.
    const advisory: StructureAdvisory | undefined = r.diedIndices.length
        ? {
              kind: 'axisDeath',
              undoable: false,
              names: r.diedIndices.map(idx =>
                  jsonAxisDeathName(v.yAxes[idx], idx, visible, v.jsonSeriesStyle, v.jsonHidden),
              ),
          }
        : undefined;
    return result(patch, r.diedIndices, advisory);
};

// ── boundary crossings ──────────────────────────────────────────────

/**
 * The visible series of a view as identity keys plus their template activations: serien-förmig
 * JSON reads the unhidden payload names (the stored overlay keys while no payload preview
 * exists), every other path the authored series.
 */
const visibleSeries = (v: StructureView): { key: string; templates: number }[] => {
    if (isNamed(v)) {
        const names = v.payloadNames.length ? v.payloadNames : Object.keys(v.jsonSeriesStyle);
        return names
            .filter(n => !v.jsonHidden.includes(n))
            .map(n => ({ key: `name:${n}`, templates: v.jsonSeriesStyle[n]?.snippets?.length ?? 0 }));
    }
    return v.series.map((s, i) => ({ key: `series:${s.id ?? i}`, templates: s.snippets?.length ?? 0 }));
};

/**
 * The loss of a reset patch (ADR-0099 decision 4): what is visible before and gone after. The
 * after view carries no payload names — every crossing invalidates the payload sight (the data
 * point falls, or the mode/family that reads it changes).
 */
const lossOf = (before: StructureView, patch: EditorPatch): StructureLoss => {
    const after: StructureView = { ...before, ...patch, payloadNames: [] };
    const kept = new Set(visibleSeries(after).map(s => s.key));
    const fallen = visibleSeries(before).filter(s => !kept.has(s.key));
    return {
        series: fallen.length,
        axes: before.yAxes.filter(a => !after.yAxes.includes(a)).length,
        // The family's marks share (ADR-0083: cartesian shows its markings, pie none).
        marks: Math.max(
            0,
            coreOf(before.chartType).dataPath.marksOf(before) - coreOf(after.chartType).dataPath.marksOf(after),
        ),
        dataPoint: !!before.jsonOid && after.jsonOid !== before.jsonOid,
        templates: fallen.reduce((sum, s) => sum + s.templates, 0),
    };
};

/** A boundary crossing: flip + reset in ONE patch (one undo step), the loss derived from it. */
const crossing = (v: StructureView, patch: EditorPatch): StructureResult =>
    result(
        patch,
        v.yAxes.map((_a, i) => i).filter(i => !(patch.yAxes ?? v.yAxes).includes(v.yAxes[i])),
        { kind: 'dataPathReset', loss: lossOf(v, patch) },
    );

/**
 * Apply one structure event to the view.
 *
 * @param view - The structural state plus the live payload names.
 * @param event - The event (data).
 * @returns The complete follow-up: one patch (or `null`), the died axis indices, the notice.
 */
export const applyStructureEvent = (view: StructureView, event: StructureEvent): StructureResult => {
    switch (event.type) {
        case 'addSeries':
            return addSeries(view, event);
        case 'duplicateSeries':
            return duplicateSeries(view, event);
        case 'removeSeries':
            return removeSeries(view, event);
        case 'rebindSeries':
            return rebindSeries(view, event);
        case 'hideSeries':
            return hideSeries(view, event);
        case 'showSeries':
            return showSeries(view, event);
        case 'deleteAxis':
            return deleteAxis(view, event);
        case 'flipAxisSide':
            return flipAxisSide(view, event);
        case 'moveAxis':
            return moveAxis(view, event);
        case 'payloadChanged':
            return payloadChanged(view);
        case 'changeFamily':
            return crossesFamilyBoundary(view.chartType, event.to)
                ? crossing(view, { chartType: event.to, ...dataPathReset() })
                : result({ chartType: event.to });
        case 'changeMode':
            return event.to !== view.mode && crossesJsonBoundary(view.mode, event.to)
                ? crossing(view, { mode: event.to, ...dataPathReset() })
                : result({ mode: event.to });
        case 'changeJsonKind':
            return crossesJsonKindBoundary(view.jsonKind, event.to)
                ? crossing(view, jsonKindReset(event.to))
                : result({ jsonKind: event.to });
    }
};
