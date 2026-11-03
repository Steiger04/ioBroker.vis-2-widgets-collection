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

import { withStableIds } from './stableId';
import { familyOf } from '../families/kernel';
import { fullDataPathReset } from '../families/dataPath';
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
 * True when a switch crosses the **payload-family boundary** (serien-förmig↔tabellarisch,
 * ADR-0075) — re-selecting the current kind crosses nothing.
 */
export const crossesJsonKindBoundary = (from: EditorState['jsonKind'], to: EditorState['jsonKind']): boolean =>
    from !== to;

/**
 * The data-path patch a structural boundary reset applies (ADR-0067): series/OIDs, Y-axes (the
 * 0-axes start — the JSON reconcile rebuilds 1:1 from the payload on entry), markings, the JSON
 * overlay + deny-list + jsonOid (the leaving mode's data input), and since ADR-0075 the
 * Zuordnung scalars (family + rows/X paths — both ADR-0067 crossings leave the json family
 * entirely, so the kind returns to its 'series' default). Everything presentationary — title,
 * legend, tooltip, colours, toolbox, raws, X-Karte, zoom, and the time window — is untouched.
 * The patch itself lives with the family profiles since ADR-0083 (the shared data-path default,
 * identical for both families).
 *
 * The caller merges this with the boundary flip (mode/chartType) into ONE `set()` patch, so undo
 * restores the crossing AND the deletion together in a single step.
 */
export const dataPathReset = (): EditorPatch => fullDataPathReset();

/**
 * The data-path patch the PAYLOAD-FAMILY boundary reset applies (ADR-0075): the same scope as
 * {@link dataPathReset} with ONE exception — `jsonOid` SURVIVES (the family flip re-reads the
 * SAME state, only the derived structure falls) and the reset itself writes the TARGET kind, so
 * the switch is flip + reset in ONE patch (a single undo step restores both).
 */
export const jsonKindReset = (target: EditorState['jsonKind']): EditorPatch => ({
    jsonKind: target,
    series: [],
    yAxes: [],
    markLines: [],
    jsonSeriesStyle: {},
    jsonHidden: [],
    jsonRowPath: '',
    jsonXPath: '',
});
