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
import { describe, expect, it, vi } from 'vitest';

import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import type { EditorPatch } from './editorState';
import { axisOptionLabel } from './axisSight';
import { applyStructureEvent, dispatchStructureEvent, type StructureView } from './structureEvents';

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

describe('payloadChanged — the reconcile cases beyond the characterisation table', () => {
    // Ported from the dissolved axisLayout suite (reconcileJsonAxes) to the event interface.
    const run = (v: StructureView): ReturnType<typeof applyStructureEvent> =>
        applyStructureEvent(v, { type: 'payloadChanged' });

    it('a merged 1:n binding stays sticky — the freed axis DIES', () => {
        const r = run(
            view({
                payloadNames: ['A', 'B'],
                jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 } },
                yAxes: [{ position: 'left' }, { position: 'right' }],
            }),
        );
        const patch = asPatch(r);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(0); // sticky — NOT reset to 1
        expect(patch.yAxes).toHaveLength(1);
        expect(r.died).toEqual([1]);
    });

    it('heals a stale yAxisIndex (beyond the axis array) with a FRESH axis — never a claim', () => {
        const r = run(
            view({ payloadNames: ['A'], jsonSeriesStyle: { A: { yAxisIndex: 5 } }, yAxes: [{ position: 'left' }] }),
        );
        const patch = asPatch(r);
        expect(patch.jsonSeriesStyle.A?.yAxisIndex).toBe(0); // the fresh axis, post-compaction
        expect(patch.yAxes).toHaveLength(1);
        expect(r.died).toEqual([0]);
    });

    it('a new payload name gets its own fresh axis, not axis 0; a deliberate 1:n binding survives', () => {
        const fresh = asPatch(
            run(
                view({
                    payloadNames: ['A', 'B'],
                    jsonSeriesStyle: { A: { yAxisIndex: 0 } },
                    yAxes: [{ position: 'left' }],
                }),
            ),
        );
        expect(fresh.jsonSeriesStyle.B?.yAxisIndex).toBe(1);
        expect(fresh.yAxes).toHaveLength(2);
        const oneToN = run(
            view({
                payloadNames: ['A', 'B', 'C'],
                jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 }, C: { yAxisIndex: 1 } },
                yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
            }),
        );
        expect(oneToN.died).toEqual([]);
        expect((oneToN.patch?.yAxes ?? [axis('a0', 'left', 0), axis('a1', 'right', 0)]).length).toBe(2);
    });

    it('a payload tick snaps a hand-flipped layout back to the standard interleaving (ADR-0067)', () => {
        const r0 = asPatch(run(view({ payloadNames: ['A', 'B', 'C'] })));
        const handFlipped = r0.yAxes.map((a, i) => (i === 1 || i === 2 ? { ...a, position: 'left' as const } : a));
        const r1 = asPatch(
            run(view({ payloadNames: ['A', 'B', 'C'], jsonSeriesStyle: r0.jsonSeriesStyle, yAxes: handFlipped })),
        );
        expect(r1.yAxes.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
        ]);
    });

    it('a vanished name re-indexes the overlay and the marking anchors around the dead axis', () => {
        const r = run(
            view({
                payloadNames: ['A', 'C'],
                jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Power' }, C: { yAxisIndex: 2 } },
                yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0), axis('a2', 'left', 80)],
                markLines: [{ yAxisIndex: 1 }, { yAxisIndex: 2 }],
            }),
        );
        const patch = asPatch(r);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBeUndefined();
        expect(patch.jsonSeriesStyle.C?.yAxisIndex).toBe(1);
        expect(patch.yAxes.map(a => a.id)).toEqual(['a0', 'a2']);
        expect(patch.markLines).toEqual([{ yAxisIndex: 0 }, { yAxisIndex: 1 }]); // predecessor + shift
        expect(r.advisory).toEqual({ kind: 'axisDeath', undoable: false, names: ['Power'] });
    });

    it('a HIDDEN name is outside the sight — the reconcile heals a resting-era blob', () => {
        const r = run(
            view({
                payloadNames: ['temp', 'kw'],
                jsonHidden: ['kw'],
                jsonSeriesStyle: {
                    temp: { yAxisIndex: 0 },
                    kw: { yAxisIndex: 1, name: 'Kilowatt' },
                    Hum: { yAxisIndex: 2 },
                },
                yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0), axis('a2', 'left', 80)],
            }),
        );
        const patch = asPatch(r);
        expect(patch.jsonSeriesStyle.kw?.yAxisIndex).toBeUndefined();
        expect(patch.jsonSeriesStyle.Hum?.yAxisIndex).toBeUndefined();
        expect(patch.yAxes.map(a => a.id)).toEqual(['a0']);
        expect(r.died).toEqual([1, 2]);
    });

    it('a fresh name + the vanish of the axis-0 binder: the fresh axis compacts onto rank 0 (strict sight)', () => {
        const patch = asPatch(
            run(
                view({
                    payloadNames: ['Neu'],
                    jsonSeriesStyle: { Gone: { yAxisIndex: 0, name: 'Alte' } },
                    yAxes: [axis('a0', 'left', 0)],
                }),
            ),
        );
        expect(patch.jsonSeriesStyle.Neu?.yAxisIndex).toBe(0);
        expect(patch.jsonSeriesStyle.Gone?.yAxisIndex).toBeUndefined();
        expect(patch.yAxes).toHaveLength(1);
        expect(patch.yAxes[0].id).not.toBe('a0');
    });

    it('raw survives on sticky axes; a fresh axis starts WITHOUT raw (ADR-0037)', () => {
        const RAW = '{ "minorTick": { "show": true } }';
        const patch = asPatch(
            run(
                view({
                    payloadNames: ['PV', 'TEMP', 'NEW'],
                    jsonSeriesStyle: { PV: { yAxisIndex: 0 }, TEMP: { yAxisIndex: 1 }, NEW: { yAxisIndex: 2 } },
                    yAxes: [
                        { id: 'a0', name: 'kW', raw: RAW },
                        { id: 'a1', name: '°C', position: 'right', raw: RAW },
                    ],
                }),
            ),
        );
        expect(patch.yAxes[0].raw).toBe(RAW);
        expect(patch.yAxes[1].raw).toBe(RAW);
        expect(patch.yAxes[2].raw).toBeUndefined();
    });
});

describe('showSeries — the sticky case and idempotence (B3)', () => {
    it('no interim reconcile: the kept index survives, nothing else changes; a re-run is stable', () => {
        const v = view({
            payloadNames: ['A', 'B'],
            jsonHidden: ['B'],
            jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } },
            yAxes: [axis('a0', 'left', 0), axis('a1', 'right', 0)],
        });
        const patch = asPatch(applyStructureEvent(v, { type: 'showSeries', name: 'B' }));
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(1);
        expect(patch.yAxes.map(a => a.id)).toEqual(['a0', 'a1']);
        const again = asPatch(applyStructureEvent({ ...v, ...patch }, { type: 'showSeries', name: 'B' }));
        expect(again.yAxes.map(a => a.id)).toEqual(['a0', 'a1']); // no fresh axis, no churn
    });
});

describe('rebindSeries — the axis owner „Namensgeber" (ADR-0068)', () => {
    const baseAxes: EchartsAxisConfig[] = [axis('a0', 'left', 0), axis('a1', 'right', 0), axis('a2', 'left', 80)];
    const hist = (series: StructureView['series'], yAxes = baseAxes): StructureView =>
        view({ mode: 'history', series, yAxes });

    it("the user regression: rebinding S2 onto S3's axis NEVER renames it — the vacated axis dies", () => {
        const series = [
            { id: 's1', oid: 'a', yAxisIndex: 0, name: 'S1' },
            { id: 's2', oid: 'b', yAxisIndex: 1, name: 'S2' },
            { id: 's3', oid: 'c', yAxisIndex: 2, name: 'S3' },
        ];
        const patch = asPatch(applyStructureEvent(hist(series), { type: 'rebindSeries', index: 1, axis: 2 }));
        expect(patch.yAxes.map(a => a.id)).toEqual(['a0', 'a2']);
        expect(patch.yAxes[1]).toMatchObject({ owner: 's3' });
        expect(axisOptionLabel(1, patch.yAxes[1], patch.series)).toBe('2 · S3');
        expect(patch.series.map(s => s.yAxisIndex)).toEqual([0, 1, 1]);
    });

    it('the owner leaving hands the name to the first remaining binder', () => {
        const series = [
            { id: 's1', oid: 'a', yAxisIndex: 0, name: 'S1' },
            { id: 's2', oid: 'b', yAxisIndex: 1, name: 'S2' },
            { id: 's3', oid: 'c', yAxisIndex: 1, name: 'S3' },
        ];
        const axes = [baseAxes[0], { ...baseAxes[1], owner: 's2' }];
        const patch = asPatch(applyStructureEvent(hist(series, axes), { type: 'rebindSeries', index: 1, axis: 0 }));
        expect(patch.yAxes[1]).toMatchObject({ owner: 's3' });
    });

    it('a GAIN on an owner-less axis names the arriving binder („Neue Achse")', () => {
        const series = [
            { id: 's1', oid: 'a', yAxisIndex: 0, name: 'S1' },
            { id: 's2', oid: 'b', yAxisIndex: 0, name: 'S2' },
        ];
        const patch = asPatch(
            applyStructureEvent(hist(series, [{ ...baseAxes[0], owner: 's1' }]), {
                type: 'rebindSeries',
                index: 1,
                axis: 1,
            }),
        );
        expect(patch.yAxes[1]).toMatchObject({ owner: 's2' });
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

describe('dispatchStructureEvent — the one caller idiom', () => {
    it('a crossing sets its patch once and hands the notice to the host', () => {
        const set = vi.fn();
        const onAdvisory = vi.fn();
        const v = view({ jsonOid: 'js.0.doc' });
        dispatchStructureEvent(v, { type: 'changeMode', to: 'history' }, set, onAdvisory);
        expect(set).toHaveBeenCalledTimes(1);
        expect(set).toHaveBeenCalledWith(applyStructureEvent(v, { type: 'changeMode', to: 'history' }).patch);
        expect(onAdvisory).toHaveBeenCalledTimes(1);
        expect(onAdvisory.mock.calls[0][0]).toMatchObject({ kind: 'dataPathReset' });
    });

    it('an event that changes nothing neither sets nor notifies (no empty undo step)', () => {
        const set = vi.fn();
        const onAdvisory = vi.fn();
        dispatchStructureEvent(view({ mode: 'history' }), { type: 'payloadChanged' }, set, onAdvisory);
        expect(set).not.toHaveBeenCalled();
        expect(onAdvisory).not.toHaveBeenCalled();
    });

    it('without a notice host the patch still lands', () => {
        const set = vi.fn();
        dispatchStructureEvent(view({ jsonOid: 'js.0.doc' }), { type: 'changeMode', to: 'history' }, set);
        expect(set).toHaveBeenCalledTimes(1);
    });
});
