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
    effectiveAxisName,
    isOneToOneBound,
    jsonAxisDeathName,
    materializedAxisIndex,
    reindexJsonOverlay,
} from './axisLayout';
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
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
    | { type: 'rebindSeries'; index?: number; name?: string; axis: number };

/** A notice for the modal (ADR-0099 decision 3) — rendered by the one notice host. */
export type StructureAdvisory =
    /** Axes died as a side effect (ADR-0069); `undoable: false` where undo is futile (payload vanish). */
    { kind: 'axisDeath'; names: string[]; undoable: boolean };

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
    }
};
