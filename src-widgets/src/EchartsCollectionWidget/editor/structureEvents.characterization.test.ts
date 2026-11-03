/**
 * Characterisation of the Struktur-Ereignisse (ADR-0099 decision 7; spec
 * echarts-configurator-review ticket 04): input state + event → the ONE `set()` patch and the
 * notice, pinned per data path (Verlauf · serien-förmig JSON · Tabellarisch · Kreis) BEFORE any
 * handler moved. Recorded against the legacy handler fixture (ticket 04), the table now runs
 * against the structure-event module alone; the pinned values did not move — the one marked
 * exception is the family-crossing loss in JSON (ticket 07, ADR-0099 decision 4).
 *
 * @module EchartsCollectionWidget/editor/structureEvents.characterization.test
 */
import { beforeEach, describe, expect, it, vi } from 'vitest';

// DOM pool: the editor-state fixture reaches the family editorial → the section modules,
// which extend Generic (window.visRxWidget) — the summaries/lifecycleGuards precedent.
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));
// Deterministic ids for freshly born axes (axisLayout draws a random UUID) — pinned per test.
const ids = vi.hoisted(() => ({ n: 0 }));
vi.mock('./stableId', async orig => ({
    ...(await orig<typeof StableIdModule>()),
    nextStableId: (prefix = 'id-') => `${prefix}fresh${++ids.n}`,
}));
beforeEach(() => {
    ids.n = 0;
});

import { boundAxisIndices, boundJsonAxisIndices } from './axisSight';
import { axisLayout } from './structureEvents';
import { DEFAULT_EDITOR_STATE, type EditorPatch, type EditorState } from './editorState';
import { applyStructureEvent, type StructureEvent } from './structureEvents';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import type * as StableIdModule from './stableId';

/** The state the events read — the editor state plus the live payload names (serien-förmig JSON). */
type CharView = EditorState & { payloadNames: readonly string[] };
type CharEvent = StructureEvent;
/** What the table pins: the one `set()` patch (null = no set) and its notice. */
interface CharResult {
    patch: EditorPatch | null;
    advisory?: ReturnType<typeof applyStructureEvent>['advisory'];
}

/** The implementation under characterisation (the module's `died` is pinned in structureEvents.test). */
const apply = (v: CharView, e: CharEvent): CharResult => {
    const { patch, advisory } = applyStructureEvent(v, e);
    return advisory ? { patch, advisory } : { patch };
};

const ax = (i: number, extra: Partial<EchartsAxisConfig> = {}): EchartsAxisConfig => ({
    ...axisLayout(i),
    id: `ax-${i}`,
    ...extra,
});

const view = (over: Partial<EditorState>, payloadNames: readonly string[] = []): CharView => ({
    ...DEFAULT_EDITOR_STATE,
    ...over,
    payloadNames,
});

// ── fixtures ────────────────────────────────────────────────────────

/** Verlauf, 1:1 — A on axis 0 (left), B on axis 1 (right), a marking on axis 1. */
const HIST = view({
    chartType: 'line',
    mode: 'history',
    series: [
        { id: 'sr-a', oid: 'a.0', name: 'A', yAxisIndex: 0 },
        { id: 'sr-b', oid: 'b.0', name: 'B', yAxisIndex: 1 },
    ],
    yAxes: [ax(0, { owner: 'sr-a' }), ax(1, { owner: 'sr-b' })],
    markLines: [{ id: 'mk-1', upper: 10, yAxisIndex: 1 }],
});

/** Verlauf, shared — A and B on axis 0, C on axis 1 (format °C on both axes). */
const HIST_SHARED = view({
    chartType: 'bar',
    mode: 'history',
    series: [
        { id: 'sr-a', oid: 'a.0', name: 'A', yAxisIndex: 0 },
        { id: 'sr-b', oid: 'b.0', name: 'B', yAxisIndex: 0 },
        { id: 'sr-c', oid: 'c.0', name: 'C', yAxisIndex: 1 },
    ],
    yAxes: [ax(0, { owner: 'sr-a', format: '{value} °C' }), ax(1, { owner: 'sr-c', format: '{value} °C' })],
});

/** Serien-förmig JSON — payload P/Q/R, 1:1 on axes 0/1/2, a marking on axis 2. */
const JSON_SERIES = view(
    {
        chartType: 'line',
        mode: 'json',
        jsonKind: 'series',
        jsonOid: 'javascript.0.chart',
        yAxes: [ax(0, { owner: 'P' }), ax(1, { owner: 'Q' }), ax(2, { owner: 'R' })],
        jsonSeriesStyle: { P: { yAxisIndex: 0 }, Q: { yAxisIndex: 1, name: 'Quelle' }, R: { yAxisIndex: 2 } },
        jsonHidden: [],
        markLines: [{ id: 'mk-1', upper: 5, yAxisIndex: 2 }],
    },
    ['P', 'Q', 'R'],
);

/** Serien-förmig JSON, shared — P and Q on axis 0, R on axis 1. */
const JSON_SHARED = view(
    {
        chartType: 'line',
        mode: 'json',
        jsonKind: 'series',
        jsonOid: 'javascript.0.chart',
        yAxes: [ax(0, { owner: 'P' }), ax(1, { owner: 'R' })],
        jsonSeriesStyle: { P: { yAxisIndex: 0 }, Q: { yAxisIndex: 0 }, R: { yAxisIndex: 1 } },
        jsonHidden: [],
    },
    ['P', 'Q', 'R'],
);

/** Tabellarisch — two yPath series, 1:1. */
const TABLE = view({
    chartType: 'line',
    mode: 'json',
    jsonKind: 'table',
    jsonOid: 'javascript.0.rows',
    jsonRowPath: 'rows',
    jsonXPath: 'ts',
    series: [
        { id: 'sr-t', oid: '', yPath: 'temp', name: '', yAxisIndex: 0 },
        { id: 'sr-h', oid: '', yPath: 'hum', name: '', yAxisIndex: 1 },
    ],
    yAxes: [ax(0, { owner: 'sr-t' }), ax(1, { owner: 'sr-h' })],
});

/** Kreis (Verlauf) — two slices, no axes. */
const PIE = view({
    chartType: 'pie',
    mode: 'history',
    series: [
        { id: 'sr-x', oid: 'x.0', name: 'X', yAxisIndex: 0 },
        { id: 'sr-y', oid: 'y.0', name: 'Y', yAxisIndex: 0 },
    ],
    yAxes: [],
});

/** Kreis (Tabellarisch) — one ring column. */
const PIE_TABLE = view({
    chartType: 'pie',
    mode: 'json',
    jsonKind: 'table',
    jsonOid: 'javascript.0.rows',
    series: [{ id: 'sr-r', oid: '', yPath: 'share', yAxisIndex: 0 }],
    yAxes: [],
});

/** Compose the patch onto the view — what the editor holds after the ONE set(). */
const after = (v: CharView, r: CharResult): CharView => (r.patch ? { ...v, ...r.patch } : v);

/** ADR-0069 invariant: after a structure event every axis is bound by a (visible) binder. */
const everyAxisBound = (v: CharView): boolean => {
    const bound =
        v.mode === 'json' && v.jsonKind === 'series'
            ? boundJsonAxisIndices(v.payloadNames, v.jsonSeriesStyle, v.jsonHidden)
            : boundAxisIndices(v.series);
    return v.yAxes.every((_a, i) => bound.has(i));
};

// ── series events ───────────────────────────────────────────────────

describe('addSeries', () => {
    it('Verlauf: appends the series with a fresh 1:1 axis, balanced', () => {
        const r = apply(HIST, { type: 'addSeries', id: 'sr-new', oid: 'n.0' });
        expect(everyAxisBound(after(HIST, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 1,
                },
                {
                  "id": "sr-new",
                  "name": "",
                  "oid": "n.0",
                  "yAxisIndex": 2,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('Tabellarisch: appends a yPath series with a fresh 1:1 axis', () => {
        const r = apply(TABLE, { type: 'addSeries', id: 'sr-new', yPath: 'wind' });
        expect(everyAxisBound(after(TABLE, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-t",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "temp",
                },
                {
                  "id": "sr-h",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 1,
                  "yPath": "hum",
                },
                {
                  "id": "sr-new",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 2,
                  "yPath": "wind",
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-t",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-h",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('Kreis: appends a slice, no axis', () => {
        expect(apply(PIE, { type: 'addSeries', id: 'sr-new', oid: 'z.0' })).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-x",
                  "name": "X",
                  "oid": "x.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-y",
                  "name": "Y",
                  "oid": "y.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-new",
                  "name": "",
                  "oid": "z.0",
                  "yAxisIndex": 0,
                },
              ],
            },
          }
        `);
        expect(apply(PIE_TABLE, { type: 'addSeries', id: 'sr-new', yPath: 'other' })).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-r",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "share",
                },
                {
                  "id": "sr-new",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "other",
                },
              ],
            },
          }
        `);
    });
});

describe('duplicateSeries', () => {
    it('dense (1:1): the copy gets its own fresh axis', () => {
        const r = apply(HIST, {
            type: 'duplicateSeries',
            id: 'sr-copy',
            index: 0,
            copySuffix: 'Kopie',
            fallbackName: 'Serie 1',
        });
        expect(everyAxisBound(after(HIST, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-copy",
                  "name": "A (Kopie)",
                  "oid": "a.0",
                  "yAxisIndex": 2,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('shared: the copy joins the source axis', () => {
        const r = apply(HIST_SHARED, {
            type: 'duplicateSeries',
            id: 'sr-copy',
            index: 1,
            copySuffix: 'Kopie',
            fallbackName: 'Serie 2',
        });
        expect(everyAxisBound(after(HIST_SHARED, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-copy",
                  "name": "B (Kopie)",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-c",
                  "name": "C",
                  "oid": "c.0",
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "format": "{value} °C",
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "format": "{value} °C",
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-c",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    // Ticket 12 (configurator review, ADR-0100 decision 4) changed this marked value
    // deliberately: the copy name follows the card title chain — the table source's yPath
    // column, else the caller's translated position fallback — never an English `Series N`.
    it('unnamed table source: the copy name is the yPath column (the card title)', () => {
        expect(
            apply(TABLE, {
                type: 'duplicateSeries',
                id: 'sr-copy',
                index: 1,
                copySuffix: 'Kopie',
                fallbackName: 'Serie 2',
            }).patch?.series?.[2].name,
        ).toBe('hum (Kopie)');
    });

    it('unnamed source without a column: the translated position fallback', () => {
        const unnamed = { ...HIST, series: HIST.series.map(s => ({ ...s, name: '' })) };
        expect(
            apply(unnamed, {
                type: 'duplicateSeries',
                id: 'sr-copy',
                index: 0,
                copySuffix: 'Kopie',
                fallbackName: 'Serie 1',
            }).patch?.series?.[1].name,
        ).toBe('Serie 1 (Kopie)');
    });

    it('Kreis: a plain copy, no axis', () => {
        expect(
            apply(PIE, {
                type: 'duplicateSeries',
                id: 'sr-copy',
                index: 0,
                copySuffix: 'Kopie',
                fallbackName: 'Serie 1',
            }),
        ).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-x",
                  "name": "X",
                  "oid": "x.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-copy",
                  "name": "X (Kopie)",
                  "oid": "x.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-y",
                  "name": "Y",
                  "oid": "y.0",
                  "yAxisIndex": 0,
                },
              ],
            },
          }
        `);
    });
});

describe('removeSeries', () => {
    it('Verlauf: the last binder leaving kills its axis — the marking moves down, the death is reported', () => {
        const r = apply(HIST, { type: 'removeSeries', index: 1 });
        expect(everyAxisBound(after(HIST, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "B",
              ],
              "undoable": true,
            },
            "patch": {
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 10,
                  "yAxisIndex": 0,
                },
              ],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
              ],
            },
          }
        `);
    });

    it('Verlauf shared: a co-binder leaving keeps the axis, no notice', () => {
        const r = apply(HIST_SHARED, { type: 'removeSeries', index: 0 });
        expect(r.advisory).toBeUndefined();
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-c",
                  "name": "C",
                  "oid": "c.0",
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "format": "{value} °C",
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "format": "{value} °C",
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-c",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('Tabellarisch: the death names the axis by its column', () => {
        expect(apply(TABLE, { type: 'removeSeries', index: 0 })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "temp",
              ],
              "undoable": true,
            },
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-h",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "hum",
                },
              ],
              "yAxes": [
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-h",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('Kreis: a plain removal', () => {
        expect(apply(PIE, { type: 'removeSeries', index: 0 })).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [
                {
                  "id": "sr-y",
                  "name": "Y",
                  "oid": "y.0",
                  "yAxisIndex": 0,
                },
              ],
            },
          }
        `);
        expect(apply(PIE_TABLE, { type: 'removeSeries', index: 0 })).toMatchInlineSnapshot(`
          {
            "patch": {
              "series": [],
            },
          }
        `);
    });
});

describe('rebindSeries', () => {
    it('Verlauf: rebinding onto an existing axis kills the vacated one — its marking follows the series', () => {
        const r = apply(HIST, { type: 'rebindSeries', index: 1, axis: 0 });
        expect(everyAxisBound(after(HIST, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "B",
              ],
              "undoable": true,
            },
            "patch": {
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 10,
                  "yAxisIndex": 0,
                },
              ],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
              ],
            },
          }
        `);
    });

    it('Verlauf: „Neue Achse" appends and binds in one step (shared source axis survives)', () => {
        const r = apply(HIST_SHARED, { type: 'rebindSeries', index: 1, axis: 2 });
        expect(everyAxisBound(after(HIST_SHARED, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 2,
                },
                {
                  "id": "sr-c",
                  "name": "C",
                  "oid": "c.0",
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "format": "{value} °C",
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "format": "{value} °C",
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-c",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "owner": "sr-b",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('Tabellarisch: positional like Verlauf', () => {
        expect(apply(TABLE, { type: 'rebindSeries', index: 0, axis: 1 })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "temp",
              ],
              "undoable": true,
            },
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-t",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "temp",
                },
                {
                  "id": "sr-h",
                  "name": "",
                  "oid": "",
                  "yAxisIndex": 0,
                  "yPath": "hum",
                },
              ],
              "yAxes": [
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-h",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('JSON: rebinding a payload name re-indexes the overlay around the dead axis', () => {
        const r = apply(JSON_SERIES, { type: 'rebindSeries', name: 'Q', axis: 2 });
        expect(everyAxisBound(after(JSON_SERIES, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "Quelle",
              ],
              "undoable": true,
            },
            "patch": {
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": 1,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 5,
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-2",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('JSON: „Neue Achse" from a shared axis', () => {
        const r = apply(JSON_SHARED, { type: 'rebindSeries', name: 'Q', axis: 2 });
        expect(everyAxisBound(after(JSON_SHARED, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "yAxisIndex": 2,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "markLines": [],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "owner": "Q",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });
});

describe('hideSeries / showSeries (serien-förmig JSON)', () => {
    it('hiding the last binder kills its axis (death named by the overlay name)', () => {
        const r = apply(JSON_SERIES, { type: 'hideSeries', name: 'Q' });
        expect(everyAxisBound(after(JSON_SERIES, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "Quelle",
              ],
              "undoable": true,
            },
            "patch": {
              "jsonHidden": [
                "Q",
              ],
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": undefined,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 5,
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-2",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('hiding a co-binder keeps the axis', () => {
        const r = apply(JSON_SHARED, { type: 'hideSeries', name: 'Q' });
        expect(r.advisory).toBeUndefined();
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonHidden": [
                "Q",
              ],
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "yAxisIndex": 0,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "markLines": [],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('showing a hidden name re-births a fresh axis', () => {
        const hidden = after(JSON_SERIES, apply(JSON_SERIES, { type: 'hideSeries', name: 'Q' }));
        const r = apply(hidden, { type: 'showSeries', name: 'Q' });
        expect(everyAxisBound(after(hidden, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonHidden": [],
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": 2,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-2",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "owner": "Q",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });
});

// ── axis events ─────────────────────────────────────────────────────

describe('deleteAxis', () => {
    it('JSON bound: hides every visible binder and drops the axis', () => {
        const r = apply(JSON_SHARED, { type: 'deleteAxis', index: 0 });
        expect(everyAxisBound(after(JSON_SHARED, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonHidden": [
                "P",
                "Q",
              ],
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": undefined,
                },
                "Q": {
                  "yAxisIndex": undefined,
                },
                "R": {
                  "yAxisIndex": 0,
                },
              },
              "markLines": [],
              "yAxes": [
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "R",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('JSON unbound (defensive): drops the config and re-indexes the overlay inline', () => {
        const orphan = view({ ...JSON_SERIES, yAxes: [...JSON_SERIES.yAxes, ax(3)] }, JSON_SERIES.payloadNames);
        expect(apply(orphan, { type: 'deleteAxis', index: 3 })).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": 1,
                },
                "R": {
                  "yAxisIndex": 2,
                },
              },
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 5,
                  "yAxisIndex": 2,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "Q",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-2",
                  "offset": 80,
                  "owner": "R",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('positional: the series rebind to the same-format survivor, no notice', () => {
        const r = apply(HIST_SHARED, { type: 'deleteAxis', index: 1 });
        expect(r.advisory).toBeUndefined();
        expect(everyAxisBound(after(HIST_SHARED, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-c",
                  "name": "C",
                  "oid": "c.0",
                  "yAxisIndex": 0,
                },
              ],
              "yAxes": [
                {
                  "format": "{value} °C",
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
              ],
            },
          }
        `);
    });

    it('positional: no format match → axis 0 + unit-mismatch notice', () => {
        const kw = view({ ...HIST, yAxes: [HIST.yAxes[0], ax(1, { owner: 'sr-b', format: '{value} kW' })] });
        const r = apply(kw, { type: 'deleteAxis', index: 1 });
        expect(r.advisory).toEqual({ kind: 'unitMismatch' });
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "unitMismatch",
            },
            "patch": {
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 10,
                  "yAxisIndex": 0,
                },
              ],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
                {
                  "id": "sr-b",
                  "name": "B",
                  "oid": "b.0",
                  "yAxisIndex": 0,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
              ],
            },
          }
        `);
    });

    it('positional: deleting the last axis gives the series a fresh default axis, silent', () => {
        const lone = view({ ...HIST, series: [HIST.series[0]], yAxes: [ax(0, { owner: 'sr-a' })], markLines: [] });
        expect(apply(lone, { type: 'deleteAxis', index: 0 })).toMatchInlineSnapshot(`
          {
            "patch": {
              "markLines": [],
              "series": [
                {
                  "id": "sr-a",
                  "name": "A",
                  "oid": "a.0",
                  "yAxisIndex": 0,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-fresh2",
                  "offset": 0,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
              ],
            },
          }
        `);
    });
});

describe('flipAxisSide / moveAxis', () => {
    it('a real flip inserts the axis at its place on the target side', () => {
        const three = view({
            ...HIST,
            series: [...HIST.series, { id: 'sr-c', oid: 'c.0', name: 'C', yAxisIndex: 2 }],
            yAxes: [...HIST.yAxes, ax(2, { owner: 'sr-c' })],
        });
        expect(apply(three, { type: 'flipAxisSide', index: 1, patch: { position: 'left' } })).toMatchInlineSnapshot(`
          {
            "patch": {
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 80,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "left",
                  "splitLine": false,
                },
                {
                  "id": "ax-2",
                  "offset": 160,
                  "owner": "sr-c",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('re-selecting the shown side is a plain patch (offsets survive)', () => {
        const tuned = view({ ...HIST, yAxes: [ax(0, { owner: 'sr-a', offset: 13 }), HIST.yAxes[1]] });
        expect(apply(tuned, { type: 'flipAxisSide', index: 0, patch: { position: 'left' } })).toMatchInlineSnapshot(`
          {
            "patch": {
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 13,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('move swaps the place on one side; a lone axis cannot move (no set)', () => {
        const twoLeft = view({
            ...HIST,
            series: [...HIST.series, { id: 'sr-c', oid: 'c.0', name: 'C', yAxisIndex: 2 }],
            yAxes: [...HIST.yAxes, ax(2, { owner: 'sr-c' })],
        });
        expect(apply(twoLeft, { type: 'moveAxis', index: 0, dir: 1 })).toMatchInlineSnapshot(`
          {
            "patch": {
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 80,
                  "owner": "sr-a",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "sr-b",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-2",
                  "offset": 0,
                  "owner": "sr-c",
                  "position": "left",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
        expect(apply(HIST, { type: 'moveAxis', index: 0, dir: 1 })).toEqual({ patch: null });
    });
});

// ── payload ─────────────────────────────────────────────────────────

describe('payloadChanged (serien-förmig JSON reconcile)', () => {
    it('a new payload name lands 1:1 on a fresh axis', () => {
        const grown = view({ ...JSON_SERIES }, ['P', 'Q', 'R', 'S']);
        const r = apply(grown, { type: 'payloadChanged' });
        expect(everyAxisBound(after(grown, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "patch": {
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": 1,
                },
                "R": {
                  "yAxisIndex": 2,
                },
                "S": {
                  "yAxisIndex": 3,
                },
              },
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-1",
                  "offset": 0,
                  "owner": "Q",
                  "position": "right",
                  "splitLine": false,
                },
                {
                  "id": "ax-2",
                  "offset": 80,
                  "owner": "R",
                  "position": "left",
                  "splitLine": false,
                },
                {
                  "id": "ax-fresh1",
                  "offset": 80,
                  "owner": "S",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('a vanished name kills its axis — info-only notice (undo is futile)', () => {
        const shrunk = view({ ...JSON_SERIES }, ['P', 'R']);
        const r = apply(shrunk, { type: 'payloadChanged' });
        expect(everyAxisBound(after(shrunk, r))).toBe(true);
        expect(r).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "axisDeath",
              "names": [
                "Quelle",
              ],
              "undoable": false,
            },
            "patch": {
              "jsonSeriesStyle": {
                "P": {
                  "yAxisIndex": 0,
                },
                "Q": {
                  "name": "Quelle",
                  "yAxisIndex": undefined,
                },
                "R": {
                  "yAxisIndex": 1,
                },
              },
              "markLines": [
                {
                  "id": "mk-1",
                  "upper": 5,
                  "yAxisIndex": 1,
                },
              ],
              "yAxes": [
                {
                  "id": "ax-0",
                  "offset": 0,
                  "owner": "P",
                  "position": "left",
                  "splitLine": true,
                },
                {
                  "id": "ax-2",
                  "offset": 0,
                  "owner": "R",
                  "position": "right",
                  "splitLine": false,
                },
              ],
            },
          }
        `);
    });

    it('a consistent state is a no-op (no set — protects the redo branch)', () => {
        expect(apply(JSON_SERIES, { type: 'payloadChanged' })).toEqual({ patch: null });
        expect(apply(HIST, { type: 'payloadChanged' })).toEqual({ patch: null });
    });
});

// ── boundary crossings ──────────────────────────────────────────────

describe('changeFamily / changeMode / changeJsonKind', () => {
    it('line → bar crosses nothing: a plain flip', () => {
        expect(apply(HIST, { type: 'changeFamily', to: 'bar' })).toEqual({ patch: { chartType: 'bar' } });
    });

    it('Verlauf line → pie: flip + full reset in one patch, the loss counted', () => {
        expect(apply(HIST, { type: 'changeFamily', to: 'pie' })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "dataPathReset",
              "loss": {
                "axes": 2,
                "dataPoint": false,
                "marks": 1,
                "series": 2,
                "templates": 0,
              },
            },
            "patch": {
              "chartType": "pie",
              "jsonHidden": [],
              "jsonKind": "series",
              "jsonOid": "",
              "jsonRowPath": "",
              "jsonSeriesStyle": {},
              "jsonXPath": "",
              "markLines": [],
              "series": [],
              "yAxes": [],
            },
          }
        `);
    });

    it('JSON line → pie: flip + reset; loss.series counts the visible payload series (ADR-0099 fix)', () => {
        const r = apply(JSON_SERIES, { type: 'changeFamily', to: 'pie' });
        expect(r.patch).toMatchInlineSnapshot(`
          {
            "chartType": "pie",
            "jsonHidden": [],
            "jsonKind": "series",
            "jsonOid": "",
            "jsonRowPath": "",
            "jsonSeriesStyle": {},
            "jsonXPath": "",
            "markLines": [],
            "series": [],
            "yAxes": [],
          }
        `);
        // Switched in ticket 07: the legacy count read state.series (0 in serien-förmig JSON)
        // — the loss now derives from the reset patch over the visible payload series.
        expect(r.advisory).toEqual({
            kind: 'dataPathReset',
            loss: { series: 3, axes: 3, marks: 1, dataPoint: true, templates: 0 },
        });
    });

    it('Verlauf → JSON: mode flip + full reset', () => {
        expect(apply(HIST, { type: 'changeMode', to: 'json' })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "dataPathReset",
              "loss": {
                "axes": 2,
                "dataPoint": false,
                "marks": 1,
                "series": 2,
                "templates": 0,
              },
            },
            "patch": {
              "jsonHidden": [],
              "jsonKind": "series",
              "jsonOid": "",
              "jsonRowPath": "",
              "jsonSeriesStyle": {},
              "jsonXPath": "",
              "markLines": [],
              "mode": "json",
              "series": [],
              "yAxes": [],
            },
          }
        `);
    });

    it('JSON → Verlauf: counts the visible payload series', () => {
        const oneHidden = view({ ...JSON_SERIES, jsonHidden: ['R'] }, JSON_SERIES.payloadNames);
        expect(apply(oneHidden, { type: 'changeMode', to: 'history' }).advisory).toMatchInlineSnapshot(`
          {
            "kind": "dataPathReset",
            "loss": {
              "axes": 3,
              "dataPoint": true,
              "marks": 1,
              "series": 2,
              "templates": 0,
            },
          }
        `);
    });

    it('re-selecting the current mode is a plain patch', () => {
        expect(apply(HIST, { type: 'changeMode', to: 'history' })).toEqual({ patch: { mode: 'history' } });
    });

    it('serien-förmig → tabellarisch keeps the data point', () => {
        expect(apply(JSON_SERIES, { type: 'changeJsonKind', to: 'table' })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "dataPathReset",
              "loss": {
                "axes": 3,
                "dataPoint": false,
                "marks": 1,
                "series": 3,
                "templates": 0,
              },
            },
            "patch": {
              "jsonHidden": [],
              "jsonKind": "table",
              "jsonRowPath": "",
              "jsonSeriesStyle": {},
              "jsonXPath": "",
              "markLines": [],
              "series": [],
              "yAxes": [],
            },
          }
        `);
    });

    it('tabellarisch → serien-förmig counts the authored series', () => {
        expect(apply(TABLE, { type: 'changeJsonKind', to: 'series' })).toMatchInlineSnapshot(`
          {
            "advisory": {
              "kind": "dataPathReset",
              "loss": {
                "axes": 2,
                "dataPoint": false,
                "marks": 0,
                "series": 2,
                "templates": 0,
              },
            },
            "patch": {
              "jsonHidden": [],
              "jsonKind": "series",
              "jsonRowPath": "",
              "jsonSeriesStyle": {},
              "jsonXPath": "",
              "markLines": [],
              "series": [],
              "yAxes": [],
            },
          }
        `);
    });

    it('re-selecting the current family is a plain patch', () => {
        expect(apply(TABLE, { type: 'changeJsonKind', to: 'table' })).toEqual({ patch: { jsonKind: 'table' } });
    });
});

// ── undo guarantee ──────────────────────────────────────────────────

describe('undo guarantee — every event yields exactly one patch (or none)', () => {
    const cases: [string, CharView, CharEvent][] = [
        ['add', HIST, { type: 'addSeries', id: 'n', oid: 'n.0' }],
        ['duplicate', HIST, { type: 'duplicateSeries', id: 'c', index: 0, copySuffix: 'K', fallbackName: 'S' }],
        ['remove', HIST, { type: 'removeSeries', index: 0 }],
        ['rebind', HIST, { type: 'rebindSeries', index: 0, axis: 1 }],
        ['rebind json', JSON_SERIES, { type: 'rebindSeries', name: 'P', axis: 1 }],
        ['hide', JSON_SERIES, { type: 'hideSeries', name: 'P' }],
        ['show', view({ ...JSON_SERIES, jsonHidden: ['P'] }, ['P', 'Q', 'R']), { type: 'showSeries', name: 'P' }],
        ['delete axis', HIST, { type: 'deleteAxis', index: 0 }],
        ['flip', HIST, { type: 'flipAxisSide', index: 0, patch: { position: 'right' } }],
        ['move', HIST, { type: 'moveAxis', index: 0, dir: 1 }],
        ['payload', view({ ...JSON_SERIES }, ['P']), { type: 'payloadChanged' }],
        ['family', HIST, { type: 'changeFamily', to: 'pie' }],
        ['mode', HIST, { type: 'changeMode', to: 'json' }],
        ['kind', JSON_SERIES, { type: 'changeJsonKind', to: 'table' }],
    ];
    it.each(cases)('%s', (_name, v, e) => {
        const r = apply(v, e);
        // One plain patch object (or null = no set) — never a sequence of writes.
        expect(r.patch === null || (typeof r.patch === 'object' && !Array.isArray(r.patch))).toBe(true);
        expect(Object.keys(r).every(k => k === 'patch' || k === 'advisory')).toBe(true);
    });
});
