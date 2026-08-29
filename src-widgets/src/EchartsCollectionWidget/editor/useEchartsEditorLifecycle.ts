/**
 * The echarts configurator's editor lifecycle (ADR-0048) — the state machine over the working
 * copy, lifted out of the modal's chrome.
 *
 * @module EchartsCollectionWidget/editor/useEchartsEditorLifecycle
 * @remarks
 * Owns the load/rebase pass (with the dirty-snapshot baseline and the load-derived oid count),
 * three of the four guard effects, the patch-write path with coalescing, apply/reset, the
 * hasChanges comparison and the keyboard undo/redo binding. IO-free by design: the
 * socket-resolved JSON payload names are INJECTED via {@link useJsonAxisReconcile} (a sibling
 * here — the names depend on this hook's own state, so they cannot be a call-time argument;
 * see the ADR's implementation correction), and `useJsonSeriesNames` stays with the modal.
 *
 * The FIRING conditions are the invariant (ADR-0048 "move, don't merge"): the guards must not
 * run after an unrelated edit, or the reconcile would re-impose its canonical axis layout over
 * a manual axis edit — the stringify guards in `lifecycleGuards` only prevent no-ops, the
 * narrow dependency arrays below are the actual clobber protection.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useEditorHistory, useEditorHistoryKeys } from '../../lib/useEditorHistory';
import { jsonAxisDeathName } from './axisLayout';
import {
    DEFAULT_EDITOR_STATE,
    loadEditorState,
    saveEditorState,
    type EditorPatch,
    type EditorState,
} from './editorState';
import { healStableIds, loadedOidCount, reconcileJsonAxesStep } from './lifecycleGuards';
import type { WidgetData } from '@iobroker/types-vis-2';

/** The editor lifecycle's public surface — the modal's state machine minus its chrome. */
export interface EchartsEditorLifecycle {
    /** The current working copy. */
    state: EditorState;
    /** Commits a patch (consecutive same-key-set edits coalesce — one slider drag = one step). */
    set: (patch: EditorPatch) => void;
    /** Maps the working copy to the persisted widget data (incl. the load-derived oid count). */
    apply: () => WidgetData;
    /** Reverts to the loaded baseline as ONE undoable step (rail expansion + scroll survive). */
    reset: () => void;
    /** Deep-divergence from the loaded baseline (drives the dirty dot, Apply, discard guard). */
    hasChanges: boolean;
    /** Increments on every load pass — the modal resets its session chrome (focus, maximize) on it. */
    loadToken: number;
    canUndo: boolean;
    canRedo: boolean;
    undo: () => void;
    redo: () => void;
}

/**
 * Manages the echarts configurator's working copy: load/rebase, the guard effects, the write
 * path, apply/reset and the undo/redo keyboard binding.
 *
 * ⚠ The RESULT OBJECT has a new identity every render (only its callbacks are stable) — never
 * put it into a dependency array (same contract as `useEditorHistory`).
 *
 * @param open - Whether the owning modal is open (loads on open; keyboard binds while open).
 * @param data - The widget data to load the working copy from.
 */
export function useEchartsEditorLifecycle(open: boolean, data: WidgetData): EchartsEditorLifecycle {
    // The working copy lives in an editor history (ADR-0038): every edit is an undoable step
    // (rapid same-key edits coalesce — one slider drag / one typed field = one step).
    const history = useEditorHistory<EditorState>(DEFAULT_EDITOR_STATE);
    const state = history.present;
    // The stable commit callback, destructured so the memoized helpers below can depend on it
    // (the history result object itself has a new identity every render).
    const { set: commit } = history;
    const loadedCountRef = useRef(0);
    // The loaded baseline: the string snapshot drives `hasChanges`, the object drives Reset.
    const loadedSnapshotRef = useRef('');
    const loadedStateRef = useRef<EditorState>(DEFAULT_EDITOR_STATE);
    const [loadToken, setLoadToken] = useState(0);

    // Patches coalesce by their key set: consecutive edits touching the same keys within the
    // window replace the present snapshot (typing a field / dragging a slider = one undo step).
    const set = useCallback(
        (patch: EditorPatch) => {
            commit(s => ({ ...s, ...patch }), Object.keys(patch).sort().join(','));
        },
        [commit],
    );

    // (Re)load the editor state from widget data each time the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        // First-open onboarding is the empty-state CTA, not an injected skeleton (ADR-0013 reversed
        // the ADR-0010 skeleton): an empty config lands on the CTA, Apply stays disabled until the
        // user adds a real series/indicator.
        const loaded = loadEditorState(data as Record<string, unknown>);
        // The number of indexed `oidN` fields to clear on save (radar counts indicators, not series).
        loadedCountRef.current = loadedOidCount(loaded);
        loadedSnapshotRef.current = JSON.stringify(loaded);
        loadedStateRef.current = loaded;
        history.rebase(loaded);
        setLoadToken(token => token + 1);
        // history is NOT a dependency: the hook's result object has a new identity every render
        // (only its callbacks are stable), so listing it would re-run this effect after every
        // edit and rebase the working copy back to the loaded state — wiping each edit.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, data]);

    // Self-heal stable ids (the HMR guard) — the policy lives in the pure step; this effect owns
    // only the firing condition: after every state change, guarded by the step's own no-op
    // answer so it cannot loop or push an empty history entry.
    useEffect(() => {
        const patch = healStableIds(state);
        if (patch) {
            // history.set (not set(patch)): the fixed 'self-heal' coalesce key keeps repeated
            // back-to-back heals ONE undo step — a patch key would re-key on the healed fields.
            history.set(s => ({ ...s, ...patch }), 'self-heal');
        }
        // history.set is a stable callback — see the load effect above for why the object is not.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    // No mode-switch orphan-prune: an axis no binder holds cannot enter the working copy in the
    // first place — the structural-event handlers drop it with its last binder (ADR-0069), and the
    // load path enforces the invariant in `loadEditorState`. The only deliberate bulk wipes are
    // the user's boundary crossings (ADR-0067 — the JSON-mode toggle and the chart-family toggle):
    // each deletes the whole data path in its toggle handler — one explicit, undoable patch, never
    // an effect-side prune.

    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

    const apply = useCallback(() => saveEditorState(state, loadedCountRef.current) as WidgetData, [state]);

    const reset = useCallback((): void => {
        // One undoable step back to the loaded baseline — section expansion and scroll
        // position survive (the editor state is swapped, the rail is not reloaded).
        commit(loadedStateRef.current);
    }, [commit]);

    // The shared configurator undo/redo binding (Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, ADR-0038) —
    // native undo wins inside inputs. One holder of the stack: the keyboard lives here too.
    useEditorHistoryKeys(history, open);

    return {
        state,
        set,
        apply,
        reset,
        hasChanges,
        loadToken,
        undo: history.undo,
        redo: history.redo,
        canUndo: history.canUndo,
        canRedo: history.canRedo,
    };
}

/**
 * The JSON-mode axis reconcile effect (ADR-0026 — JSON 1:n), split from the main lifecycle as
 * the SEAM for the socket-resolved names: they depend on the lifecycle's own state
 * (`jsonOid`, mode/family), so the modal composes them between `useJsonSeriesNames` and this
 * hook instead of passing them at lifecycle call time. The policy lives in the pure step; the
 * firing condition here: keyed on the VISIBLE names content (not the array ref) + mode/type →
 * re-syncs only on real change, so manual axis edits + bindings are preserved while
 * names/mode/type are stable (the narrow deps ARE the clobber protection — ADR-0048).
 *
 * @param state - The lifecycle's current working copy.
 * @param jsonNames - The live payload series names (unfiltered — `jsonHidden` applies here).
 * @param set - The lifecycle's patch write path.
 * @param onAxisDeath - ADR-0069 safety net: called with the DISPLAY NAMES of the axes a pass
 * dropped (a payload name vanished). Info-only by design — undoing a vanish death is futile,
 * the next reconcile tick over the same payload re-kills the restored axis.
 * @returns The visible names (jsonHidden applied) — the SINGLE derivation site; the modal's
 * preview meta reuses them instead of re-filtering.
 */
export function useJsonAxisReconcile(
    state: EditorState,
    jsonNames: readonly string[],
    set: (patch: EditorPatch) => void,
    onAxisDeath?: (names: string[]) => void,
): readonly string[] {
    const visibleJsonNames = jsonNames.filter(n => !state.jsonHidden.includes(n));
    const jsonNamesKey = visibleJsonNames.join('\n');
    useEffect(() => {
        const step = reconcileJsonAxesStep(state, visibleJsonNames);
        if (step) {
            set(step.patch);
            if (step.diedIndices.length && onAxisDeath) {
                // The pre-death label: the vanish death's binder is gone from the visible list,
                // so the shared resolver extends the sight by the vanished overlay keys.
                onAxisDeath(
                    step.diedIndices.map(i =>
                        jsonAxisDeathName(state.yAxes[i], i, visibleJsonNames, state.jsonSeriesStyle, state.jsonHidden),
                    ),
                );
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jsonNamesKey, state.mode, state.chartType]);
    return visibleJsonNames;
}
