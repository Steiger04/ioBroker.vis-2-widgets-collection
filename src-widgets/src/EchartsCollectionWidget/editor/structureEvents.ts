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
    axesFollowBinders,
    axisLayout,
    balanceAxes,
    boundJsonView,
    displayPosition,
    effectiveAxisName,
    insertAxisAtPlace,
    isOneToOneBound,
    jsonAxisDeathName,
    jsonBoundAxisDeletePatch,
    jsonShowPatch,
    materializedAxisIndex,
    moveAxisPlace,
    ownerPatch,
    reconcileJsonAxes,
    reindexJsonOverlay,
    remapMarkAxisIndices,
    sameFormatSurvivor,
} from './axisLayout';
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
    | { type: 'duplicateSeries'; id: string; index: number; copySuffix: string }
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
    const copy: EditorSeries = { ...source, id: e.id, name: `${source.name || `Series ${i + 1}`} (${e.copySuffix})` };
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
