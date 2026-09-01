/**
 * The editor lifecycle's guard steps (ADR-0048) — the POLICY half of the configurator modal's
 * four invariant effects, extracted as pure functions with their own test surface.
 *
 * @module EchartsCollectionWidget/editor/lifecycleGuards
 * @remarks
 * Each step inspects the editor state (plus its external input where one exists) and returns
 * the patch that restores the invariant, or `null` when the invariant already holds — the
 * no-op answer that keeps the caller from pushing an empty history entry (an undo that
 * reverts `jsonHidden` flips the names key back, so the reconcile re-fires over the
 * already-consistent reverted state; recording there would destroy the redo branch).
 *
 * The FIRING conditions (which dependency change re-runs which guard) stay with the owner
 * (`useEchartsEditorLifecycle`) and are part of the invariant, deliberately narrow: the
 * reconcile must NOT run after an unrelated edit (renaming the title), or it would re-impose
 * its canonical axis layout over a manual axis edit. The idempotence guards here only
 * prevent no-ops — the narrow effect deps are the actual clobber protection (ADR-0048
 * "move, don't merge").
 */

import { reconcileJsonAxes } from './axisLayout';
import { withStableIds } from './stableId';
import { familyOf } from '../optionBuilder';
import type { EditorPatch, EditorState } from './editorState';

/**
 * Stable-id self-heal (the HMR guard): every keyed card list (axes / series / mark lines)
 * must carry an `id` so React reconciles by identity, not array index (the
 * wrong-card-unmounts bug). `loadEditorState` normalises on open, BUT a dev-HMR code reload
 * can preserve stale pre-id state without re-running the loader — so the owner re-fires this
 * on every state change. Idempotent: once every item has an id this is a pure read (`null`),
 * so it is safe on every state change and cannot loop.
 */
export const healStableIds = (state: EditorState): EditorPatch | null => {
    if (!state.yAxes.some(a => !a.id) && !state.series.some(s => !s.id) && !state.markLines.some(m => !m.id)) {
        return null;
    }
    // Heal all three lists in one patch (mirror of the pre-extraction effect): withStableIds keeps
    // already-id'd items by reference, so the patch never churns clean lists.
    return {
        yAxes: withStableIds(state.yAxes, 'ax-'),
        series: withStableIds(state.series, 'sr-'),
        markLines: withStableIds(state.markLines),
    };
};

/**
 * JSON-mode axis reconcile (ADR-0026 — JSON 1:n): keep the name-keyed overlay consistent with
 * the axis array as the (dynamic) payload + the user's bindings change. A fresh payload still
 * lands 1:1 (each name its own axis, alternating side + 80 px stagger) — but a name that
 * already carries a valid `yAxisIndex` KEEPS it, so a manual rebind survives payload +
 * hide/show changes. Since ADR-0069 a name VANISHING from the payload kills its axis inside
 * this pass (dropped + re-indexed). Only the VISIBLE payload series drive the reconcile — the
 * caller filters `jsonHidden` before passing the names (a hidden series must not keep its
 * axis).
 *
 * `null` outside json-cartesian, with no visible names, or over an already-consistent state
 * (the idempotence guard that protects the redo branch — see module remarks). Otherwise the
 * patch plus `diedIndices` — the axes this pass dropped, for the caller's info-only snackbar
 * (undo is futile: the next reconcile over the same payload re-kills them).
 */
export const reconcileJsonAxesStep = (
    state: EditorState,
    visibleNames: readonly string[],
): { patch: EditorPatch; diedIndices: number[] } | null => {
    if (
        state.mode !== 'json' ||
        (state.chartType !== 'line' && state.chartType !== 'bar' && state.chartType !== 'scatter') ||
        visibleNames.length === 0
    ) {
        return null;
    }
    const {
        yAxes,
        overlay: jsonSeriesStyle,
        markLines,
        diedIndices,
    } = reconcileJsonAxes(visibleNames, state.jsonSeriesStyle, state.yAxes, state.jsonHidden, state.markLines);
    if (
        JSON.stringify(yAxes) === JSON.stringify(state.yAxes) &&
        JSON.stringify(jsonSeriesStyle) === JSON.stringify(state.jsonSeriesStyle) &&
        !markLines
    ) {
        return null;
    }
    return {
        patch: markLines ? { yAxes, jsonSeriesStyle, markLines } : { yAxes, jsonSeriesStyle },
        diedIndices,
    };
};

/** The number of indexed `oidN` fields to clear on save — the series count. */
export const loadedOidCount = (state: EditorState): number => state.series.length;

/**
 * True when a mode switch crosses the **JSON boundary** — into JSON or out of it (ADR-0067).
 * With the two-value mode set (ADR-0071) every non-JSON switch is history→history: `false`.
 */
export const crossesJsonBoundary = (from: EditorState['mode'], to: EditorState['mode']): boolean =>
    (from === 'json') !== (to === 'json');

/**
 * True when a chart-type switch crosses a **family boundary** — cartesian↔pie, including
 * json-cartesian→json-pie (ADR-0067). line↔bar↔scatter share the identical series/axis
 * structure and cross nothing: `false`. So does re-selecting the same type.
 */
export const crossesFamilyBoundary = (from: EditorState['chartType'], to: EditorState['chartType']): boolean =>
    from !== to && familyOf(from) !== familyOf(to);

/**
 * The data-path patch a structural boundary reset applies (ADR-0067): series/OIDs, Y-axes (the
 * 0-axes start — the JSON reconcile rebuilds 1:1 from the payload on entry), markings, the JSON
 * overlay + deny-list + jsonOid (the leaving mode's data input). Everything
 * presentationary — title, legend,
 * tooltip, colours, toolbox, raws, X-Karte, zoom, and the time window — is untouched.
 *
 * The caller merges this with the boundary flip (mode/chartType) into ONE `set()` patch, so undo
 * restores the crossing AND the deletion together in a single step.
 */
export const dataPathReset = (): EditorPatch => ({
    series: [],
    yAxes: [],
    markLines: [],
    jsonSeriesStyle: {},
    jsonHidden: [],
    jsonOid: '',
});
