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

import { packStaggeredAxes, pruneOrphanAxes, reconcileJsonAxes } from './axisLayout';
import { withStableIds } from './identity';
import type { EditorPatch, EditorState } from './editorState';
import { normalizeSeries } from './seriesIdentity';

/**
 * Stable-id self-heal (the HMR guard): every keyed card list (axes / series / mark lines /
 * radar indicators) must carry an `id` so React reconciles by identity, not array index (the
 * wrong-card-unmounts bug). `loadEditorState` normalises on open, BUT a dev-HMR code reload
 * can preserve stale pre-id state without re-running the loader — so the owner re-fires this
 * on every state change. Idempotent: once every item has an id this is a pure read (`null`),
 * so it is safe on every state change and cannot loop.
 */
export const healStableIds = (state: EditorState): EditorPatch | null => {
    if (
        !state.yAxes.some(a => !a.id) &&
        !state.series.some(s => !s.id) &&
        !state.markLines.some(m => !m.id) &&
        !state.radar.indicators.some(ind => !ind.id)
    ) {
        return null;
    }
    // Heal all four lists in one patch (mirror of the pre-extraction effect): withStableIds /
    // normalizeSeries keep already-id'd items by reference, so the patch never churns clean lists.
    return {
        yAxes: withStableIds(state.yAxes),
        series: normalizeSeries(state.series),
        markLines: withStableIds(state.markLines),
        radar: { ...state.radar, indicators: withStableIds(state.radar.indicators) },
    };
};

/**
 * JSON-mode axis reconcile (ADR-0026 — JSON 1:n): keep the name-keyed overlay consistent with
 * the axis array as the (dynamic) payload + the user's bindings change. A fresh payload still
 * lands 1:1 (each name its own axis, alternating side + 80 px stagger) — but a name that
 * already carries a valid `yAxisIndex` KEEPS it, so a manual rebind survives payload +
 * hide/show changes. Only the VISIBLE payload series drive the reconcile — the caller filters
 * `jsonHidden` before passing the names (a hidden series must not keep its axis).
 *
 * `null` outside json-cartesian, with no visible names, or over an already-consistent state
 * (the idempotence guard that protects the redo branch — see module remarks).
 */
export const reconcileJsonAxesStep = (state: EditorState, visibleNames: readonly string[]): EditorPatch | null => {
    if (
        state.mode !== 'json' ||
        (state.chartType !== 'line' && state.chartType !== 'bar') ||
        visibleNames.length === 0
    ) {
        return null;
    }
    const { yAxes, overlay: jsonSeriesStyle } = reconcileJsonAxes(visibleNames, state.jsonSeriesStyle, state.yAxes);
    if (
        JSON.stringify(yAxes) === JSON.stringify(state.yAxes) &&
        JSON.stringify(jsonSeriesStyle) === JSON.stringify(state.jsonSeriesStyle)
    ) {
        return null;
    }
    return { yAxes, jsonSeriesStyle };
};

/**
 * Non-JSON cartesian orphan-prune (ADR-0033): a mode-switch INTO live/history is a bulk
 * series-leave — the referencing series set changes from the JSON overlay back to
 * `state.series`, so the same orphan-check that runs on a single series-leave prunes axes no
 * live/history series binds. Axis 0 always survives (the builder's `[{}]` fallback); a series
 * with `yAxisIndex === undefined` counts as bound to axis 0. A drop is a structural change →
 * the survivors re-pack densely (ADR-0028). Idempotent (`null` while no orphan remains).
 */
export const pruneOrphanAxesStep = (state: EditorState): EditorPatch | null => {
    if (state.mode === 'json' || (state.chartType !== 'line' && state.chartType !== 'bar')) {
        return null;
    }
    const { series, yAxes } = pruneOrphanAxes(state.series, state.yAxes);
    if (yAxes.length === state.yAxes.length) {
        return null;
    }
    return { series, yAxes: packStaggeredAxes(yAxes) };
};

/**
 * The number of indexed `oidN` fields to clear on save. For radar the indicators (not the
 * single polygon) are the indexed OIDs, so use their count — otherwise it is the series count.
 */
export const loadedOidCount = (state: EditorState): number =>
    state.chartType === 'radar' ? state.radar.indicators.length : state.series.length;
