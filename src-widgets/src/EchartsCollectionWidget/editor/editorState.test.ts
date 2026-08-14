/**
 * editorState — the Apply (save → load) round-trip for every persisted blob.
 *
 * @module EchartsCollectionWidget/editor/editorState.test
 * @remarks
 * Pinned after a `jsonHidden` double-stringify bug silently lost every hidden JSON series on
 * Apply+reopen (`encodeBlob(JSON.stringify(JSON.stringify(...)))` → load parsed a string, not an
 * array → `[]`). This test round-trips the full editor state so any future break in the encode/decode
 * symmetry surfaces immediately.
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../../lib/encoding';
import { DEFAULT_EDITOR_STATE, loadEditorState, saveEditorState } from './editorState';
import type { EditorState } from './editorState';

const baseState = (): EditorState => ({
    ...DEFAULT_EDITOR_STATE,
    chartType: 'line',
    mode: 'json',
});

describe('editorState — Apply round-trip (save → load)', () => {
    it('jsonHidden survives (was double-stringified → lost on reload)', () => {
        const state = { ...baseState(), jsonHidden: ['Schlafzimmer', 'Küche'] };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.jsonHidden).toEqual(['Schlafzimmer', 'Küche']);
    });

    it('jsonSeriesStyle survives', () => {
        const state = {
            ...baseState(),
            jsonSeriesStyle: { Temp: { color: '#f00', yAxisIndex: 1 }, Power: { name: 'Leistung' } },
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.jsonSeriesStyle.Temp).toMatchObject({ color: '#f00', yAxisIndex: 1 });
        expect(reloaded.jsonSeriesStyle.Power).toMatchObject({ name: 'Leistung' });
    });

    it('yAxes survive (per-axis config incl. the stable id)', () => {
        const state: EditorState = {
            ...baseState(),
            yAxes: [
                { id: 'a1', position: 'left', splitLine: true, min: 0, max: 100, name: 'kW' },
                { id: 'a2', position: 'right', splitLine: false, color: '#abc' },
            ],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.yAxes).toHaveLength(2);
        expect(reloaded.yAxes[0]).toMatchObject({ position: 'left', min: 0, max: 100, name: 'kW' });
        expect(reloaded.yAxes[1]).toMatchObject({ position: 'right', color: '#abc' });
    });

    it('markLines survive', () => {
        const state = {
            ...baseState(),
            markLines: [{ id: 'm1', value: 50, label: 'Grenze', color: '#f00', dashed: true }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.markLines).toHaveLength(1);
        expect(reloaded.markLines[0]).toMatchObject({ value: 50, label: 'Grenze', dashed: true });
    });

    it('empty jsonHidden round-trips to empty (not lost, not garbled)', () => {
        const state = { ...baseState(), jsonHidden: [] };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.jsonHidden).toEqual([]);
    });

    it('xAxis survives the blob round-trip (ADR-0035)', () => {
        const state = {
            ...baseState(),
            xAxis: { name: 'Zeit', format: '{HH}:{mm}', color: '#0af', axisTick: false, splitLine: true },
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.xAxis).toEqual(state.xAxis);
    });

    it('legacy xSplit=true loads as splitLine; the blob wins once saved (ADR-0035)', () => {
        expect(loadEditorState({ ...baseState(), xSplit: true }).xAxis).toEqual({ splitLine: true });
        expect(loadEditorState({ ...baseState(), xSplit: false }).xAxis).toEqual({});
        // After an Apply, the blob is authoritative — a stale legacy xSplit no longer applies.
        const saved = saveEditorState({ ...baseState(), xAxis: {} }, 0);
        expect(loadEditorState({ ...saved, xSplit: true }).xAxis).toEqual({});
    });
});

describe('editorState — mode-switch orphan-prune on load (ADR-0033)', () => {
    // A widget saved in JSON accumulated one derived axis per payload series in the persisted `yAxes`
    // blob. When that blob is loaded under a non-JSON mode (live/history), the JSON-derived axes are
    // ghosts: only the axes a live/history series binds should survive.
    const polluted = (overrides: Record<string, unknown> = {}): Record<string, unknown> => ({
        chartType: 'line',
        mode: 'live',
        series_count: 1,
        oid1: 'dev.temp',
        seriesConfig: encodeBlob(JSON.stringify([{ name: 'Temp' }])),
        yAxes: encodeBlob(
            JSON.stringify([
                { id: 'a0', position: 'left' },
                { id: 'a1', position: 'right' },
                { id: 'a2', position: 'left', offset: 80 },
                { id: 'a3', position: 'right', offset: 80 },
                { id: 'a4', position: 'left', offset: 160 },
                { id: 'a5', position: 'right', offset: 160 },
            ]),
        ),
        ...overrides,
    });

    it('collapses 6 JSON-derived ghost axes to the 1 bound axis when loaded as live', () => {
        const reloaded = loadEditorState(polluted());
        expect(reloaded.mode).toBe('live');
        expect(reloaded.yAxes).toHaveLength(1); // only axis 0 (the live series' axis) survives
        expect(reloaded.series).toHaveLength(1);
    });

    it("leaves JSON-mode axes untouched on load (re-derive is the modal reconcile effect's job)", () => {
        const reloaded = loadEditorState(polluted({ mode: 'json', jsonOid: 'dev.payload' }));
        expect(reloaded.yAxes).toHaveLength(6); // JSON: prune skipped; reconcile runs on open
    });

    it('keeps axis 0 when a non-JSON widget has no live series (the canonical default)', () => {
        const reloaded = loadEditorState(polluted({ series_count: 0 }));
        expect(reloaded.yAxes).toHaveLength(1); // 0 series → axis 0 survives, not 0 and not 6
        expect(reloaded.series).toHaveLength(0);
    });

    it('does not prune a clean live widget (every axis bound → no-op)', () => {
        // Real cartesian series carry an explicit yAxisIndex (addWithOid writes `idx` on creation,
        // ADR-0018), so a 2-series / 2-axis widget has both axes bound and survives the prune untouched.
        const data = polluted({
            series_count: 2,
            oid2: 'dev.power',
            seriesConfig: encodeBlob(
                JSON.stringify([
                    { name: 'Temp', yAxisIndex: 0 },
                    { name: 'Power', yAxisIndex: 1 },
                ]),
            ),
            yAxes: encodeBlob(
                JSON.stringify([
                    { id: 'a0', position: 'left', name: '°C' },
                    { id: 'a1', position: 'right', name: 'kW' },
                ]),
            ),
        });
        const reloaded = loadEditorState(data);
        expect(reloaded.yAxes).toHaveLength(2); // both bound → untouched
        expect(reloaded.yAxes[0]).toMatchObject({ name: '°C' });
        expect(reloaded.yAxes[1]).toMatchObject({ name: 'kW' });
    });

    it('re-packs surviving axes to the dense raster after a drop (ADR-0028, ADR-0033)', () => {
        // 6-axis 1:1 layout (L0/R0/L80/R80/L160/R160); the single live series sits on axis 3 (right@80).
        // Axis 0 survives as the floor, axis 3 as the bound series; the rest are ghosts. The survivor
        // pulled from index 3 must re-pack to the dense right-side slot (offset 0), not keep its stale 80.
        const reloaded = loadEditorState(
            polluted({
                series_count: 1,
                seriesConfig: encodeBlob(JSON.stringify([{ name: 'S', yAxisIndex: 3 }])),
                yAxes: encodeBlob(
                    JSON.stringify([
                        { id: 'a0', position: 'left', offset: 0 },
                        { id: 'a1', position: 'right', offset: 0 },
                        { id: 'a2', position: 'left', offset: 80 },
                        { id: 'a3', position: 'right', offset: 80 },
                        { id: 'a4', position: 'left', offset: 160 },
                        { id: 'a5', position: 'right', offset: 160 },
                    ]),
                ),
            }),
        );
        expect(reloaded.yAxes).toHaveLength(2); // axis 0 (floor) + axis 3 (bound)
        expect(reloaded.yAxes[1]).toMatchObject({ position: 'right', offset: 0 }); // re-packed, not stale 80
    });
});
