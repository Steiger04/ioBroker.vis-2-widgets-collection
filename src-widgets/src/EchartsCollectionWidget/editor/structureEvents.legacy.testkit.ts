/**
 * Characterisation fixture for the Struktur-Ereignisse (ADR-0099 decision 7, spec
 * echarts-configurator-review ticket 04) — TEST-ONLY.
 *
 * @module EchartsCollectionWidget/editor/structureEvents.legacy.testkit
 * @remarks
 * Re-states, without rendering, what the React handlers did before the structure-event module
 * existed: SeriesSection (add, add-by-column, duplicate, remove, rebind, JSON rebind, JSON
 * hide/show), AxesZoomSection (side flip, delete in its three branches, move), the modal's
 * payload reconcile and the three boundary pickers incl. their loss chips. Each function body
 * is the handler body with `set(x)` turned into `return x` and the snackbar/toast state turned
 * into the returned advisory. The characterisation table pins these outputs; the module must
 * reproduce them (the one marked exception is the family-crossing loss in JSON, ADR-0099).
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
    reconcileJsonAxesStep,
} from './lifecycleGuards';
import { familyBoundaryLoss, familySwitchSnippetLoss, jsonBoundaryLoss, jsonKindBoundaryLoss } from './validation';
import type { EchartsAxisConfig, EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
import type { EditorPatch, EditorSeries, EditorState } from './editorState';

/** The state the events read — the editor state plus the live payload names (serien-förmig JSON). */
export type CharView = EditorState & { payloadNames: readonly string[] };

/** The events as data (the planned ADR-0099 union). */
export type CharEvent =
    | { type: 'addSeries'; id: string; oid?: string; yPath?: string }
    | { type: 'duplicateSeries'; id: string; index: number; copySuffix: string }
    | { type: 'removeSeries'; index: number }
    | { type: 'rebindSeries'; index?: number; name?: string; axis: number }
    | { type: 'hideSeries'; name: string }
    | { type: 'showSeries'; name: string }
    | { type: 'deleteAxis'; index: number }
    | { type: 'flipAxisSide'; index: number; patch: Partial<EchartsAxisConfig> }
    | { type: 'moveAxis'; index: number; dir: -1 | 1 }
    | { type: 'payloadChanged' }
    | { type: 'changeFamily'; to: EditorState['chartType'] }
    | { type: 'changeMode'; to: EditorState['mode'] }
    | { type: 'changeJsonKind'; to: EditorState['jsonKind'] };

/** What a handler produced: the one `set()` patch (null = no set) and its notice. */
export interface CharResult {
    patch: EditorPatch | null;
    advisory?:
        | { kind: 'axisDeath'; names: string[]; undoable: boolean }
        | { kind: 'unitMismatch' }
        | {
              kind: 'dataPathReset';
              loss: { series: number; axes: number; marks: number; dataPoint: boolean; templates: number };
          };
}

const isCartesianType = (t: EditorState['chartType']): boolean => t === 'line' || t === 'bar' || t === 'scatter';

/** SeriesSection.reportDeathsFor — the names are read from the BEFORE state. */
const deathNames = (v: CharView, died: readonly number[]): CharResult['advisory'] =>
    died.length
        ? {
              kind: 'axisDeath',
              undoable: true,
              names: died.map(idx =>
                  v.mode === 'json' && v.jsonKind === 'series'
                      ? jsonAxisDeathName(v.yAxes[idx], idx, v.payloadNames, v.jsonSeriesStyle, v.jsonHidden)
                      : effectiveAxisName(v.yAxes[idx], idx, v.series),
              ),
          }
        : undefined;

const withAdvisory = (patch: EditorPatch, advisory: CharResult['advisory']): CharResult =>
    advisory ? { patch, advisory } : { patch };

/** The pre-module behaviour of one structure event. */
export const legacyApply = (v: CharView, e: CharEvent): CharResult => {
    const series = v.series;
    const isCartesian = isCartesianType(v.chartType);
    const isJsonSeries = v.mode === 'json' && v.jsonKind === 'series';
    const names = v.payloadNames;
    const boundBindings = (
        overlay: Readonly<Record<string, EchartsSeriesMeta>>,
        hidden: readonly string[],
    ): { yAxisIndex?: number }[] => boundJsonView(names, overlay, hidden);

    switch (e.type) {
        case 'addSeries': {
            // SeriesSection.addWithOid / addWithColumn
            const axIdx = v.yAxes.length;
            const fresh: EditorSeries = e.yPath
                ? { id: e.id, oid: '', yPath: e.yPath, name: '', yAxisIndex: isCartesian ? axIdx : 0 }
                : { id: e.id, oid: e.oid ?? '', name: '', yAxisIndex: isCartesian ? axIdx : 0 };
            const next = [...series, fresh];
            const patch: EditorPatch = { series: next };
            if (isCartesian) {
                patch.yAxes = balanceAxes([...v.yAxes, axisLayout(axIdx)], next, v.axisSlotMemory);
            }
            return { patch };
        }
        case 'duplicateSeries': {
            const i = e.index;
            const copy: EditorSeries = {
                ...series[i],
                id: e.id,
                name: `${series[i].name || `Series ${i + 1}`} (${e.copySuffix})`,
            };
            const next = [...series.slice(0, i + 1), copy, ...series.slice(i + 1)];
            if (!isCartesian) {
                return { patch: { series: next } };
            }
            if (isOneToOneBound(series)) {
                const axIdx = v.yAxes.length;
                copy.yAxisIndex = axIdx;
                return {
                    patch: {
                        series: next,
                        yAxes: balanceAxes([...v.yAxes, axisLayout(axIdx)], next, v.axisSlotMemory),
                    },
                };
            }
            copy.yAxisIndex = series[i].yAxisIndex;
            return { patch: { series: next, yAxes: balanceAxes(v.yAxes, next, v.axisSlotMemory) } };
        }
        case 'removeSeries': {
            const next = series.filter((_s, idx) => idx !== e.index);
            if (!isCartesian) {
                return { patch: { series: next } };
            }
            const r = axesFollowBinders(series, next, v.yAxes, v.markLines, undefined, v.axisSlotMemory);
            return withAdvisory(
                { series: r.binders, yAxes: r.yAxes, markLines: r.markLines },
                deathNames(v, r.diedIndices),
            );
        }
        case 'rebindSeries': {
            const newYi = e.axis;
            const append = newYi >= v.yAxes.length;
            const yAxesNow = append ? [...v.yAxes, axisLayout(newYi)] : v.yAxes;
            if (e.name !== undefined) {
                // SeriesSection.rebindJsonAxis
                const name = e.name;
                const overlay = { ...v.jsonSeriesStyle, [name]: { ...v.jsonSeriesStyle[name], yAxisIndex: newYi } };
                const cur = v.jsonSeriesStyle[name]?.yAxisIndex;
                const r = axesFollowBinders(
                    boundBindings(v.jsonSeriesStyle, v.jsonHidden),
                    boundBindings(overlay, v.jsonHidden),
                    yAxesNow,
                    v.markLines,
                    typeof cur === 'number' ? { from: cur, to: newYi } : undefined,
                    v.axisSlotMemory,
                );
                return withAdvisory(
                    {
                        jsonSeriesStyle: r.diedIndices.length ? reindexJsonOverlay(overlay, r.reindex) : overlay,
                        yAxes: r.yAxes,
                        markLines: r.markLines,
                    },
                    deathNames(v, r.diedIndices),
                );
            }
            // SeriesSection.rebindAxis
            const i = e.index ?? 0;
            const from = materializedAxisIndex(series[i]);
            const next = series.map((s, idx) => (idx === i ? { ...s, yAxisIndex: newYi } : s));
            const r = axesFollowBinders(series, next, yAxesNow, v.markLines, { from, to: newYi }, v.axisSlotMemory);
            return withAdvisory(
                { series: r.binders, yAxes: r.yAxes, markLines: r.markLines },
                deathNames(v, r.diedIndices),
            );
        }
        case 'hideSeries': {
            const hidden = [...v.jsonHidden, e.name];
            const r = axesFollowBinders(
                boundBindings(v.jsonSeriesStyle, v.jsonHidden),
                boundBindings(v.jsonSeriesStyle, hidden),
                v.yAxes,
                v.markLines,
                undefined,
                v.axisSlotMemory,
            );
            return withAdvisory(
                {
                    jsonHidden: hidden,
                    yAxes: r.yAxes,
                    jsonSeriesStyle: r.diedIndices.length
                        ? reindexJsonOverlay(v.jsonSeriesStyle, r.reindex)
                        : v.jsonSeriesStyle,
                    markLines: r.markLines,
                },
                deathNames(v, r.diedIndices),
            );
        }
        case 'showSeries':
            return {
                patch: jsonShowPatch(
                    names,
                    v.jsonSeriesStyle,
                    v.yAxes,
                    v.jsonHidden,
                    e.name,
                    v.markLines,
                    v.axisSlotMemory,
                ),
            };
        case 'deleteAxis': {
            // AxesZoomSection.removeAxis
            const i = e.index;
            const axes = v.yAxes;
            if (isJsonSeries) {
                const deletePatch = jsonBoundAxisDeletePatch(
                    names,
                    v.jsonSeriesStyle,
                    v.jsonHidden,
                    v.yAxes,
                    i,
                    v.markLines,
                    v.axisSlotMemory,
                );
                if (deletePatch) {
                    return { patch: deletePatch };
                }
                const reindexed = Object.fromEntries(
                    Object.entries(v.jsonSeriesStyle).map(([n, m]) => [
                        n,
                        typeof m.yAxisIndex === 'number' && m.yAxisIndex > i
                            ? { ...m, yAxisIndex: m.yAxisIndex - 1 }
                            : m,
                    ]),
                );
                return {
                    patch: {
                        yAxes: balanceAxes(
                            axes.filter((_a, idx) => idx !== i),
                            boundJsonView(names, reindexed, v.jsonHidden),
                            v.axisSlotMemory,
                        ),
                        jsonSeriesStyle: reindexed,
                        markLines: remapMarkAxisIndices(v.markLines, i, Math.max(0, i - 1)),
                    },
                };
            }
            const deletedAxis = axes[i];
            let survivors = axes.filter((_a, idx) => idx !== i);
            const match = sameFormatSurvivor(deletedAxis?.format, survivors);
            const freshFallback = !survivors.length;
            if (freshFallback) {
                survivors = [axisLayout(0)];
            }
            const target = match ?? 0;
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
            const patched = ownerPatch(v.series, rebound, survivors) ?? survivors;
            const patch: EditorPatch = {
                yAxes: balanceAxes(patched, rebound, v.axisSlotMemory),
                series: rebound,
                markLines: remapMarkAxisIndices(v.markLines, i, target),
            };
            return match === null && !freshFallback ? { patch, advisory: { kind: 'unitMismatch' } } : { patch };
        }
        case 'flipAxisSide': {
            // AxesZoomSection.setAxis
            const i = e.index;
            const axes = v.yAxes;
            const target = e.patch.position;
            if (target !== undefined && target !== displayPosition(axes[i], i)) {
                const placed = insertAxisAtPlace(axes, i, target, v.axisSlotMemory);
                if (placed) {
                    return { patch: { yAxes: placed.map((a, idx) => (idx === i ? { ...a, ...e.patch } : a)) } };
                }
            }
            return { patch: { yAxes: axes.map((a, idx) => (idx === i ? { ...a, ...e.patch } : a)) } };
        }
        case 'moveAxis': {
            const moved = moveAxisPlace(v.yAxes, e.index, e.dir);
            return { patch: moved ? { yAxes: moved } : null };
        }
        case 'payloadChanged': {
            // useJsonAxisReconcile — the vanish death is info-only (undo is futile)
            const visible = names.filter(n => !v.jsonHidden.includes(n));
            const step = reconcileJsonAxesStep(v, visible);
            if (!step) {
                return { patch: null };
            }
            return step.diedIndices.length
                ? {
                      patch: step.patch,
                      advisory: {
                          kind: 'axisDeath',
                          undoable: false,
                          names: step.diedIndices.map(i =>
                              jsonAxisDeathName(v.yAxes[i], i, visible, v.jsonSeriesStyle, v.jsonHidden),
                          ),
                      },
                  }
                : { patch: step.patch };
        }
        case 'changeFamily': {
            // ChartTypePicker + the type-picker chip (familyBoundaryLoss) + the snippet alert
            if (!crossesFamilyBoundary(v.chartType, e.to)) {
                return { patch: { chartType: e.to } };
            }
            const chip = familyBoundaryLoss(v);
            return {
                patch: { chartType: e.to, ...dataPathReset() },
                advisory: { kind: 'dataPathReset', loss: { ...chip, templates: familySwitchSnippetLoss(v) } },
            };
        }
        case 'changeMode': {
            if (e.to === v.mode || !crossesJsonBoundary(v.mode, e.to)) {
                return { patch: { mode: e.to } };
            }
            const chip = jsonBoundaryLoss(v, names);
            return {
                patch: { mode: e.to, ...dataPathReset() },
                advisory: { kind: 'dataPathReset', loss: { ...chip, templates: familySwitchSnippetLoss(v) } },
            };
        }
        case 'changeJsonKind': {
            if (!crossesJsonKindBoundary(v.jsonKind, e.to)) {
                return { patch: { jsonKind: e.to } };
            }
            const chip = jsonKindBoundaryLoss(v, names);
            return {
                patch: jsonKindReset(e.to),
                advisory: { kind: 'dataPathReset', loss: { ...chip, templates: familySwitchSnippetLoss(v) } },
            };
        }
    }
};
