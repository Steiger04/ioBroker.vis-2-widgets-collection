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
import {
    crossesFamilyBoundary,
    crossesJsonBoundary,
    dataPathReset,
    healStableIds,
    loadedOidCount,
    reconcileJsonAxesStep,
} from './lifecycleGuards';

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

    it('frees the axis of a name that is no longer visible (payload-gone → the axis rests unbound)', () => {
        // kw is gone from the payload (a HIDDEN name never reaches the step — the caller filters
        // `jsonHidden` out of the visible names; its overlay index clears here as bookkeeping).
        const withGone = jsonState({
            chartType: 'line',
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: {
                temp: { yAxisIndex: 0 },
                kw: { yAxisIndex: 1 },
            },
        });
        const patch = asPatch(reconcileJsonAxesStep(withGone, ['temp'])); // kw payload-gone
        expect(patch.yAxes).toHaveLength(2); // kw's axis stays — unbound, not dropped (ADR-0066)
        expect(patch.jsonSeriesStyle.temp?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBeUndefined();
    });

    it('a payload-vanish snapshots the resting name — and records nothing on the re-fire (redo survives)', () => {
        // ADR-0066 addendum: the vanish leave snapshots the displayed name INSIDE the reconcile
        // (overlay name, else payload name) — and the stringify idempotence guard covers the
        // resting share too: it diffs the WHOLE yAxes, so the re-fire over the applied state
        // is a null (no empty history entry destroys the redo branch).
        const before = jsonState({
            chartType: 'line',
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: {
                temp: { yAxisIndex: 0 },
                kw: { yAxisIndex: 1, name: 'kW' },
            },
        });
        const patch = asPatch(reconcileJsonAxesStep(before, ['temp'])); // kw gone from the payload
        expect(patch.yAxes[1]).toMatchObject({ restingName: 'kW' }); // the vanish snapshot
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBeUndefined();
        const applied = state({ ...before, ...patch });
        expect(reconcileJsonAxesStep(applied, ['temp'])).toBeNull(); // stable — no re-record
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

describe('JSON-boundary data-path reset (ADR-0067)', () => {
    it('crossesJsonBoundary fires on into-JSON and out-of-JSON — never on Verlauf↔Live', () => {
        expect(crossesJsonBoundary('history', 'json')).toBe(true);
        expect(crossesJsonBoundary('live', 'json')).toBe(true);
        expect(crossesJsonBoundary('json', 'history')).toBe(true);
        expect(crossesJsonBoundary('json', 'live')).toBe(true);
        expect(crossesJsonBoundary('history', 'live')).toBe(false);
        expect(crossesJsonBoundary('live', 'history')).toBe(false);
    });

    it('crossesFamilyBoundary fires across chart families — never within cartesian or on identity', () => {
        expect(crossesFamilyBoundary('line', 'pie')).toBe(true);
        expect(crossesFamilyBoundary('bar', 'gauge')).toBe(true);
        expect(crossesFamilyBoundary('scatter', 'radar')).toBe(true);
        expect(crossesFamilyBoundary('pie', 'line')).toBe(true);
        expect(crossesFamilyBoundary('radar', 'pie')).toBe(true);
        expect(crossesFamilyBoundary('gauge', 'radar')).toBe(true);
        // line↔bar↔scatter share the series structure — no boundary, no reset
        expect(crossesFamilyBoundary('line', 'bar')).toBe(false);
        expect(crossesFamilyBoundary('bar', 'scatter')).toBe(false);
        expect(crossesFamilyBoundary('scatter', 'line')).toBe(false);
        // identity (a re-select of the same type) is no crossing either
        expect(crossesFamilyBoundary('line', 'line')).toBe(false);
    });

    it('dataPathReset empties the ENTIRE data path — series, axes, markings, JSON state, indicators', () => {
        const patch = dataPathReset(
            state({
                series: [{ oid: 'a', id: 's0' }],
                yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
                markLines: [{ id: 'm0', upper: 50 }],
                jsonSeriesStyle: { Temp: { yAxisIndex: 0 } },
                jsonHidden: ['Temp'],
                jsonOid: 'dev.payload',
                radar: { indicators: [{ name: 'T', oid: 'o', id: 'i0' }], shape: 'circle', splitNumber: 4 },
            }),
        );
        expect(patch.series).toEqual([]);
        expect(patch.yAxes).toEqual([]); // 0-axes start — the reconcile rebuilds 1:1 on JSON entry
        expect(patch.markLines).toEqual([]);
        expect(patch.jsonSeriesStyle).toEqual({});
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonOid).toBe('');
        expect(patch.radar).toEqual({ indicators: [], shape: 'circle', splitNumber: 4 });
    });

    it('dataPathReset never touches the presentation — the patch keys are the data path alone', () => {
        const presentational = state({
            titleText: 'PV',
            legendShow: false,
            tooltipUnits: 'kW',
            paletteSource: 'preset',
            xAxis: { name: 'Zeit' },
            dataZoomSlider: true,
            timeRange: '7d',
            aggregate: 'max',
        });
        const patch = dataPathReset(presentational);
        // The presentation fields above are all UNTOUCHED — the patch carries data-path keys only.
        expect(Object.keys(patch).sort()).toEqual([
            'jsonHidden',
            'jsonOid',
            'jsonSeriesStyle',
            'markLines',
            'radar',
            'series',
            'yAxes',
        ]);
    });
});
