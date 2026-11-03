/**
 * structureEvents — interface tests of the Struktur-Ereignisse (ADR-0099).
 *
 * @module EchartsCollectionWidget/editor/structureEvents.test
 * @remarks
 * Tests through the ONE interface `applyStructureEvent(view, event)`. The equivalence with the
 * pre-module handlers is pinned by `structureEvents.characterization.test.ts`; this file holds
 * the event-specific policies (moved here from the former `lifecycleGuards.reconcileJsonAxesStep`
 * suite — replace, don't layer).
 */
import { describe, expect, it } from 'vitest';

import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import type { EditorPatch } from './editorState';
import { applyStructureEvent, type StructureView } from './structureEvents';

/** A minimal serien-förmig JSON line view; overrides win. */
const view = (overrides: Partial<StructureView>): StructureView => ({
    chartType: 'line',
    mode: 'json',
    jsonKind: 'series',
    series: [],
    yAxes: [],
    markLines: [],
    axisSlotMemory: {},
    jsonSeriesStyle: {},
    jsonHidden: [],
    jsonOid: '',
    payloadNames: [],
    ...overrides,
});

/** Left/right axis fixture with explicit id + stagger geometry (axisLayout defaults). */
const axis = (id: string, position: 'left' | 'right', offset: number): EchartsAxisConfig => ({
    id,
    position,
    offset,
    splitLine: offset === 0 && position === 'left',
});

/** The payloadChanged event over `names` (the payload's names, unfiltered). */
const payload = (v: StructureView, names: string[]): ReturnType<typeof applyStructureEvent> =>
    applyStructureEvent({ ...v, payloadNames: names }, { type: 'payloadChanged' });

/** Assert a patch was produced and narrow it for field assertions. */
const asPatch = (r: { patch: EditorPatch | null }): Required<EditorPatch> => {
    expect(r.patch).not.toBeNull();
    return r.patch as Required<EditorPatch>;
};

describe('payloadChanged — the JSON axis reconcile (ADR-0026, ADR-0069)', () => {
    it('is a no-op outside json mode', () => {
        expect(payload(view({ mode: 'history' }), ['a']).patch).toBeNull();
    });

    it('is a no-op for non-cartesian families', () => {
        expect(payload(view({ chartType: 'pie' }), ['a']).patch).toBeNull();
    });

    it('is a no-op with no visible names (hidden names do not count)', () => {
        expect(payload(view({}), []).patch).toBeNull();
        expect(payload(view({ jsonHidden: ['a'] }), ['a']).patch).toBeNull();
    });

    it('is INERT in the table family (ADR-0075 decision 2)', () => {
        const table = view({ jsonKind: 'table', yAxes: [axis('a0', 'left', 0)] });
        expect(payload(table, ['temp', 'kw']).patch).toBeNull();
    });

    it('lands a fresh payload 1:1 — each name its own axis, alternating side + stagger', () => {
        const patch = asPatch(payload(view({}), ['temp', 'kw']));
        expect(patch.yAxes).toHaveLength(2);
        expect(patch.yAxes[0]).toMatchObject({ position: 'left', offset: 0 });
        expect(patch.yAxes[1]).toMatchObject({ position: 'right', offset: 0 });
        expect(patch.jsonSeriesStyle.temp?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBe(1);
    });

    it('keeps a valid manual rebind (sticky — a swapped binding survives)', () => {
        // The FIRST reconcile after a load bootstraps the axis owners (ADR-0068 — the swapped
        // binding's incumbents: axis 0 ← kw, axis 1 ← temp); the re-fire over its own output
        // is the sticky no-op.
        const rebound = view({
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: { temp: { yAxisIndex: 1 }, kw: { yAxisIndex: 0 } },
        });
        const bootstrapped = asPatch(payload(rebound, ['temp', 'kw']));
        expect(bootstrapped.jsonSeriesStyle).toEqual(rebound.jsonSeriesStyle); // sticky
        expect(bootstrapped.yAxes[0]).toMatchObject({ owner: 'kw' });
        expect(bootstrapped.yAxes[1]).toMatchObject({ owner: 'temp' });
        expect(payload({ ...rebound, yAxes: bootstrapped.yAxes }, ['temp', 'kw']).patch).toBeNull();
    });

    it('a vanished payload name kills its axis — reported as a NOT undoable death', () => {
        const withGone = view({
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            jsonSeriesStyle: { temp: { yAxisIndex: 0 }, kw: { yAxisIndex: 1, name: 'kW' } },
        });
        const r = payload(withGone, ['temp']); // kw payload-gone
        const patch = asPatch(r);
        expect(patch.yAxes).toHaveLength(1); // kw's axis DIED — dropped, not resting
        expect(r.died).toEqual([1]);
        expect(r.advisory).toEqual({ kind: 'axisDeath', undoable: false, names: ['kW'] });
        expect(patch.jsonSeriesStyle.temp?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBeUndefined();
        // The re-fire over the applied state records nothing (the redo branch survives).
        expect(payload({ ...withGone, ...patch }, ['temp']).patch).toBeNull();
    });

    it('is idempotent over its own output (an undo re-fire records nothing — redo survives)', () => {
        const fresh = view({});
        const patch = asPatch(payload(fresh, ['temp', 'kw']));
        expect(payload({ ...fresh, ...patch }, ['temp', 'kw']).patch).toBeNull();
    });

    it('re-balances a manual offset when it fires — the offset survives only BETWEEN firings', () => {
        // The ADR-0048 rationale: the reconcile ends in the unconditional auto-balance
        // (ADR-0067), so a hand-tuned 42 px offset dies the moment the payload changes. It
        // survives unrelated edits ONLY because the owning effect's deps stay narrow.
        const handTuned = view({
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 42)],
            jsonSeriesStyle: { temp: { yAxisIndex: 0 }, kw: { yAxisIndex: 1 } },
        });
        expect(asPatch(payload(handTuned, ['temp', 'kw'])).yAxes[1]?.offset).toBe(0);
    });
});

describe('boundary crossings — the loss derives from the reset patch (ADR-0099 decision 4)', () => {
    // Replaces the validation.ts boundary-loss matrix: one source for reset and count, read over
    // the VISIBLE sight (serien-förmig JSON: the unhidden payload series).
    const yAxes = [axis('a0', 'left', 0), axis('a1', 'right', 0)];
    const markLines = [
        { id: 'm0', upper: 50 },
        { id: 'm1', upper: 80 },
    ];
    const hist = view({
        mode: 'history',
        series: [
            { id: 's0', oid: 'a' },
            { id: 's1', oid: 'b', snippets: ['t1', 't2'] },
            { id: 's2', oid: 'c' },
        ],
        yAxes,
        markLines,
    });
    const json = view({
        yAxes,
        markLines,
        jsonOid: 'p.x',
        jsonHidden: ['s2'],
        jsonSeriesStyle: { s1: { snippets: ['t1'] }, s2: { snippets: ['t2'] }, s3: {} },
        payloadNames: ['s1', 's2', 's3'],
    });
    const lossOf = (v: StructureView, e: Parameters<typeof applyStructureEvent>[1]): unknown => {
        const a = applyStructureEvent(v, e).advisory;
        return a?.kind === 'dataPathReset' ? a.loss : a;
    };

    it.each<[string, StructureView, Parameters<typeof applyStructureEvent>[1], unknown]>([
        [
            'Verlauf line → pie: every series, axis and marking; the templates of the series',
            hist,
            { type: 'changeFamily', to: 'pie' },
            { series: 3, axes: 2, marks: 2, dataPoint: false, templates: 2 },
        ],
        [
            'Verlauf pie → JSON: pie shows no markings',
            { ...hist, chartType: 'pie' },
            { type: 'changeMode', to: 'json' },
            { series: 3, axes: 2, marks: 0, dataPoint: false, templates: 2 },
        ],
        [
            'JSON line → pie: the VISIBLE payload series (the „0 Serien" fix), the data point falls',
            json,
            { type: 'changeFamily', to: 'pie' },
            { series: 2, axes: 2, marks: 2, dataPoint: true, templates: 1 },
        ],
        [
            'JSON without a payload preview counts the stored unhidden overlay entries',
            { ...json, payloadNames: [] },
            { type: 'changeMode', to: 'history' },
            { series: 2, axes: 2, marks: 2, dataPoint: true, templates: 1 },
        ],
        [
            'serien-förmig → tabellarisch keeps the data point',
            json,
            { type: 'changeJsonKind', to: 'table' },
            { series: 2, axes: 2, marks: 2, dataPoint: false, templates: 1 },
        ],
        [
            'tabellarisch → serien-förmig counts the authored series',
            { ...hist, mode: 'json', jsonKind: 'table', jsonOid: 'p.x' },
            { type: 'changeJsonKind', to: 'series' },
            { series: 3, axes: 2, marks: 2, dataPoint: false, templates: 2 },
        ],
    ])('%s', (_label, v, e, expected) => {
        expect(lossOf(v, e)).toEqual(expected);
    });

    it('a crossing drops every axis; a plain flip carries no notice', () => {
        expect(applyStructureEvent(hist, { type: 'changeFamily', to: 'pie' }).died).toEqual([0, 1]);
        expect(applyStructureEvent(hist, { type: 'changeFamily', to: 'bar' })).toEqual({
            patch: { chartType: 'bar' },
            died: [],
        });
    });
});

describe('died — the dropped axes of an event', () => {
    it('an explicit axis delete reports the deleted index, without a death notice', () => {
        const v = view({
            mode: 'history',
            series: [
                { id: 's0', oid: 'a', yAxisIndex: 0 },
                { id: 's1', oid: 'b', yAxisIndex: 1 },
            ],
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
        });
        const r = applyStructureEvent(v, { type: 'deleteAxis', index: 1 });
        expect(r.died).toEqual([1]);
        expect(r.advisory?.kind).not.toBe('axisDeath');
    });

    it('a place move at the side boundary is no step at all', () => {
        const v = view({ mode: 'history', yAxes: [axis('a0', 'left', 0)] });
        expect(applyStructureEvent(v, { type: 'moveAxis', index: 0, dir: -1 })).toEqual({ patch: null, died: [] });
    });
});
