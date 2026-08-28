/**
 * lifecycleGuards — characterization of the editor lifecycle's invariant steps (ADR-0048).
 *
 * @module EchartsCollectionWidget/editor/lifecycleGuards.test
 * @remarks
 * These pin the POLICIES the modal's four effects implemented inline before the extraction:
 * firing gates (mode/family/empty guards folded into the steps), the stringify idempotence
 * guards (a no-op must return null so no empty history entry destroys the redo branch), and
 * the re-stagger behaviour on a drop (ADR-0028). The effects' dependency arrays themselves
 * stay with the owning hook — deliberately untested (useSplitPane / useEditorHistory
 * precedent: the pure exports are the test surface).
 */
import { describe, expect, it } from 'vitest';

import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import { DEFAULT_EDITOR_STATE, type EditorPatch, type EditorState } from './editorState';
import { healStableIds, loadedOidCount, reconcileJsonAxesStep } from './lifecycleGuards';

const state = (overrides: Partial<EditorState>): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...overrides });

/** Assert the step produced a patch and narrow it for field assertions (fields present by construction). */
const asPatch = (patch: EditorPatch | null): Required<EditorPatch> => {
    expect(patch).not.toBeNull();
    return patch as Required<EditorPatch>;
};

/** Left/right axis fixture with explicit id + stagger geometry (axisLayout defaults). */
const axis = (id: string, position: 'left' | 'right', offset: number): EchartsAxisConfig => ({
    id,
    position,
    offset,
    splitLine: offset === 0 && position === 'left',
});

describe('healStableIds', () => {
    it('returns null when every keyed list carries an id (pure read, no history entry)', () => {
        const clean = state({
            yAxes: [axis('a0', 'left', 0)],
            series: [{ oid: 'oid1', id: 's0' }],
            markLines: [{ value: 20, id: 'm0' }],
            radar: { indicators: [{ name: 'T', oid: 'oid2', id: 'i0' }] },
        });
        expect(healStableIds(clean)).toBeNull();
    });

    it('backfills ids on all four lists in one patch', () => {
        const dirty = state({
            yAxes: [{ position: 'left', splitLine: true }],
            series: [{ oid: 'oid1' }],
            markLines: [{ value: 20 }],
            radar: { indicators: [{ name: 'T', oid: 'oid2' }] },
        });
        const patch = asPatch(healStableIds(dirty));
        expect(patch.yAxes[0]?.id).toBeTruthy();
        expect(patch.series[0]?.id).toBeTruthy();
        expect(patch.markLines[0]?.id).toBeTruthy();
        expect(patch.radar.indicators[0]?.id).toBeTruthy();
    });

    it('keeps already-id’d items by reference and their fields untouched', () => {
        const cleanSeries = { oid: 'oid1', id: 's0', name: 'PV', yAxisIndex: 1 };
        const dirty = state({
            yAxes: [{ position: 'left', splitLine: true }], // only this list is dirty
            series: [cleanSeries],
            markLines: [{ value: 20, id: 'm0' }],
            radar: { indicators: [{ name: 'T', oid: 'oid2', id: 'i0' }] },
        });
        const patch = asPatch(healStableIds(dirty));
        expect(patch.series[0]).toBe(cleanSeries);
        expect(patch.markLines[0]?.id).toBe('m0');
        expect(patch.radar.indicators[0]?.id).toBe('i0');
    });
});

describe('reconcileJsonAxesStep', () => {
    const jsonState = (overrides: Partial<EditorState>): EditorState => state({ mode: 'json', ...overrides });

    it('returns null outside json mode', () => {
        const live = state({ chartType: 'line', yAxes: [], jsonSeriesStyle: {} });
        expect(reconcileJsonAxesStep(live, ['a'])).toBeNull();
    });

    it('returns null for non-cartesian families', () => {
        expect(reconcileJsonAxesStep(jsonState({ chartType: 'pie' }), ['a'])).toBeNull();
        expect(reconcileJsonAxesStep(jsonState({ chartType: 'gauge' }), ['a'])).toBeNull();
    });

    it('returns null with no visible names', () => {
        expect(reconcileJsonAxesStep(jsonState({ chartType: 'line' }), [])).toBeNull();
    });

    it('lands a fresh payload 1:1 — each name its own axis, alternating side + stagger', () => {
        const fresh = jsonState({ chartType: 'line', yAxes: [], jsonSeriesStyle: {} });
        const patch = asPatch(reconcileJsonAxesStep(fresh, ['temp', 'kw']));
        expect(patch.yAxes).toHaveLength(2);
        expect(patch.yAxes[0]).toMatchObject({ position: 'left', offset: 0 });
        expect(patch.yAxes[1]).toMatchObject({ position: 'right', offset: 0 });
        expect(patch.jsonSeriesStyle.temp?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBe(1);
    });

    it('keeps a valid manual rebind (sticky — a swapped binding survives)', () => {
        const rebound = jsonState({
            chartType: 'line',
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: {
                temp: { yAxisIndex: 1 }, // manually rebound away from the default 1:1
                kw: { yAxisIndex: 0 },
            },
        });
        expect(reconcileJsonAxesStep(rebound, ['temp', 'kw'])).toBeNull();
    });

    it('frees the axis of a name that is no longer visible (hide → the axis rests unbound)', () => {
        const withHidden = jsonState({
            chartType: 'line',
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: {
                temp: { yAxisIndex: 0 },
                kw: { yAxisIndex: 1 },
            },
        });
        const patch = asPatch(reconcileJsonAxesStep(withHidden, ['temp'])); // kw hidden
        expect(patch.yAxes).toHaveLength(2); // kw's axis stays — unbound, not dropped (ADR-0066)
        expect(patch.jsonSeriesStyle.temp?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBeUndefined();
    });

    it('is idempotent over its own output (an undo re-fire records nothing — redo survives)', () => {
        const fresh = jsonState({ chartType: 'line', yAxes: [], jsonSeriesStyle: {} });
        const patch = asPatch(reconcileJsonAxesStep(fresh, ['temp', 'kw']));
        const applied = state({ ...fresh, ...patch });
        expect(reconcileJsonAxesStep(applied, ['temp', 'kw'])).toBeNull();
    });

    it('re-balances a manual offset when it fires — the offset survives only BETWEEN firings', () => {
        // The ADR-0048 rationale in test form: reconcileJsonAxes ends in the unconditional
        // auto-balance (ADR-0067, pensioning ADR-0028's pack), so a hand-tuned 42 px offset dies
        // the moment the reconcile runs (a payload change). It survives unrelated edits ONLY
        // because the owning effect's deps stay narrow — which is why the guards must not
        // collapse into one heal pass over every state change.
        const handTuned = jsonState({
            chartType: 'line',
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 42)],
            jsonSeriesStyle: {
                temp: { yAxisIndex: 0 },
                kw: { yAxisIndex: 1 },
            },
        });
        const patch = asPatch(reconcileJsonAxesStep(handTuned, ['temp', 'kw']));
        expect(patch.yAxes[1]?.offset).toBe(0);
    });
});

describe('loadedOidCount', () => {
    it('counts the radar indicators (not the single polygon series)', () => {
        const radar = state({
            chartType: 'radar',
            series: [{ oid: 'polygon', id: 's0' }],
            radar: {
                indicators: [
                    { name: 'T', oid: 'oid1', id: 'i0' },
                    { name: 'H', oid: 'oid2', id: 'i1' },
                    { name: 'W', oid: 'oid3', id: 'i2' },
                ],
            },
        });
        expect(loadedOidCount(radar)).toBe(3);
    });

    it('counts the series outside radar', () => {
        const line = state({
            chartType: 'line',
            series: [
                { oid: 'oid1', id: 's0' },
                { oid: 'oid2', id: 's1' },
                { oid: 'oid3', id: 's2' },
                { oid: 'oid4', id: 's3' },
            ],
        });
        expect(loadedOidCount(line)).toBe(4);
    });
});
