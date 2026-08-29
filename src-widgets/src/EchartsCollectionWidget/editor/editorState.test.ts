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
import { composeActiveSnippets } from './snippetComposition';
import { SERIES_TEMPLATES } from './seriesTemplates';
import { AXIS_TEMPLATES } from './axisTemplates';
import { RADAR_TEMPLATES } from './radarTemplates';
import { X_AXIS_TEMPLATES } from './xAxisTemplates';
import { TITLE_TEMPLATES } from './titleTemplates';
import type { EditorState } from './editorState';
import type { EchartsPieConfig } from '../../types/field-definitions/echarts-fields';

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

    it('yAxes survive (per-axis config incl. the stable id) while their binders exist', () => {
        // baseState runs JSON mode — the axes bind through the overlay there (the payload owns
        // the series), so the fixture names the binders in jsonSeriesStyle.
        const state: EditorState = {
            ...baseState(),
            jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } },
            yAxes: [
                { id: 'a1', position: 'left', splitLine: true, min: 0, max: 100, name: 'kW' },
                { id: 'a2', position: 'right', splitLine: false, color: '#abc' },
            ],
        };
        const reloaded = loadEditorState(saveEditorState(state, 2));
        expect(reloaded.yAxes).toHaveLength(2);
        expect(reloaded.yAxes[0]).toMatchObject({ position: 'left', min: 0, max: 100, name: 'kW' });
        expect(reloaded.yAxes[1]).toMatchObject({ position: 'right', color: '#abc' });
    });

    it('markLines survive (a legacy dashed migrates to lineStyle, ADR-0061)', () => {
        const state = {
            ...baseState(),
            markLines: [{ id: 'm1', value: 50, label: 'Grenze', color: '#f00', dashed: true }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.markLines).toHaveLength(1);
        expect(reloaded.markLines[0]).toMatchObject({ upper: 50, label: 'Grenze', lineStyle: 'dashed' });
        expect(reloaded.markLines[0].dashed).toBeUndefined(); // the boolean is gone after the round-trip
    });

    it('legacy timeRange keys migrate on load; the window scalars round-trip (ADR-0063)', () => {
        expect(loadEditorState({ ...baseState(), timeRange: '24h' }).timeRange).toBe('1d');
        expect(loadEditorState({ ...baseState(), timeRange: '30d' }).timeRange).toBe('1m');
        expect(loadEditorState({ ...baseState(), timeRange: '7d' }).timeRange).toBe('7d'); // native
        const state: EditorState = {
            ...baseState(),
            timeType: 'static',
            relativeEnd: 'month',
            staticStart: '2026-01-01T00:00',
            staticEnd: '2026-02-01T00:00',
        };
        const re = loadEditorState(saveEditorState(state, 0));
        expect(re).toMatchObject({
            timeType: 'static',
            relativeEnd: 'month',
            staticStart: '2026-01-01T00:00',
            staticEnd: '2026-02-01T00:00',
        });
    });

    it('percentile 0 survives the round-trip — it is a valid level, not unset (ADR-0064)', () => {
        const state: EditorState = { ...baseState(), aggregate: 'percentile', percentileValue: 0 };
        const re = loadEditorState(saveEditorState(state, 0));
        expect(re.percentileValue).toBe(0);
        // Unset stays unset (no rxData key yet → the server default 50 applies).
        expect(loadEditorState({ ...baseState() }).percentileValue).toBeUndefined();
    });

    it('barInterval/barDiff round-trip sparse (ADR-0065: auto/off persist nothing)', () => {
        const state: EditorState = { ...baseState(), barInterval: '1d', barDiff: true };
        const re = loadEditorState(saveEditorState(state, 0));
        expect(re).toMatchObject({ barInterval: '1d', barDiff: true });
        const auto = loadEditorState(saveEditorState({ ...baseState() }, 0));
        expect(auto.barInterval).toBe('auto');
        expect(auto.barDiff).toBe(false);
        expect(saveEditorState({ ...baseState() } as EditorState, 0)).not.toHaveProperty('barInterval');
    });

    it('per-series history instance survives the seriesConfig blob (ADR-0039)', () => {
        const state = {
            ...baseState(),
            series: [
                { id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0, instance: 'sql.0' },
                { id: 's2', oid: 'b.0', name: 'B', yAxisIndex: 1 },
            ],
        };
        const reloaded = loadEditorState(saveEditorState(state, 2));
        expect(reloaded.series[0]).toMatchObject({ oid: 'a.0', instance: 'sql.0' });
        expect(reloaded.series[1]).toMatchObject({ oid: 'b.0' });
        expect(reloaded.series[1].instance).toBeUndefined();
    });

    it('empty jsonHidden round-trips to empty (not lost, not garbled)', () => {
        const state = { ...baseState(), jsonHidden: [] };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.jsonHidden).toEqual([]);
    });

    it('xAxis survives the blob round-trip (ADR-0035) incl. raw + activations (ADR-0037 addendum)', () => {
        const raw = JSON.stringify(composeActiveSnippets(X_AXIS_TEMPLATES, ['axisline']));
        const state = {
            ...baseState(),
            xAxis: {
                name: 'Zeit',
                format: '{HH}:{mm}',
                color: '#0af',
                axisTick: false,
                splitLine: true,
                offset: 18,
                raw,
                snippets: ['axisline'],
            },
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.xAxis).toEqual(state.xAxis);
    });

    it('xAxis activations heal against the raw text — dropped template content + retired chart-level ids prune silently', () => {
        // A widget saved before the X catalog: the activation references content the raw no
        // longer carries AND a retired chart-level id — both drop on load, never re-add.
        const reloaded = loadEditorState({
            ...baseState(),
            xAxis: encodeBlob(JSON.stringify({ raw: '{ "z": 4 }', snippets: ['axisline', 'xaxis-arrow'] })),
        });
        expect(reloaded.xAxis.snippets).toBeUndefined();
        expect(reloaded.xAxis.raw).toBe('{ "z": 4 }');
    });

    it('legacy xSplit=true loads as splitLine; the blob wins once saved (ADR-0035)', () => {
        expect(loadEditorState({ ...baseState(), xSplit: true }).xAxis).toEqual({ splitLine: true });
        expect(loadEditorState({ ...baseState(), xSplit: false }).xAxis).toEqual({});
        // After an Apply, the blob is authoritative — a stale legacy xSplit no longer applies.
        const saved = saveEditorState({ ...baseState(), xAxis: {} }, 0);
        expect(loadEditorState({ ...saved, xSplit: true }).xAxis).toEqual({});
    });
});

describe('editorState — load heal enforces the derived-citizen invariant (ADR-0069)', () => {
    // Resting-era pollution (ADR-0066 blobs, pre-ADR-0033 ghosts): an axis no visible binder
    // binds cannot exist — the load drops it SILENTLY, re-indexing series + marking anchors
    // around the holes. Never re-arranges (stored geometry survives verbatim). No shipped
    // Bestand exists — only dev blobs carry these shapes.
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

    it('heals a polluted live blob down to the bound axis — unbound axes are gone, not resting', () => {
        const reloaded = loadEditorState(polluted());
        expect(reloaded.mode).toBe('live');
        expect(reloaded.series).toHaveLength(1);
        expect(reloaded.yAxes.map(a => a.id)).toEqual(['a0']); // Temp binds axis 0 implicitly
    });

    it('heals a JSON blob over the overlay-key sight (the reconcile refines on payload arrival)', () => {
        // No overlay entries ⇒ nothing binds ⇒ every resting-era axis drops; the modal reconcile
        // rebuilds 1:1 from the payload on open.
        const reloaded = loadEditorState(polluted({ mode: 'json', jsonOid: 'dev.payload' }));
        expect(reloaded.yAxes).toHaveLength(0);
    });

    it('heals the whole set away when no live series exists (no binder, no axis)', () => {
        const reloaded = loadEditorState(polluted({ series_count: 0 }));
        expect(reloaded.yAxes).toHaveLength(0);
        expect(reloaded.series).toHaveLength(0);
    });

    it('does not touch a clean live widget (every axis bound)', () => {
        // Real cartesian series carry an explicit yAxisIndex (addWithOid writes `idx` on creation,
        // ADR-0018), so a 2-series / 2-axis widget has both axes bound and loads untouched.
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
        expect(reloaded.yAxes).toHaveLength(2);
        expect(reloaded.yAxes[0]).toMatchObject({ name: '°C' });
        expect(reloaded.yAxes[1]).toMatchObject({ name: 'kW' });
    });

    it('an unbound axis in the blob is healed away on load (ADR-0069 — save writes, load enforces)', () => {
        const state = {
            ...baseState(),
            chartType: 'line' as const,
            mode: 'live' as const,
            series: [{ oid: 'dev.temp', name: 'Temp', yAxisIndex: 0 }],
            yAxes: [
                { id: 'ax-1', position: 'left' as const, splitLine: true, min: 0, max: 40, name: '°C' },
                { id: 'ax-2', position: 'right' as const, splitLine: false, min: 0, max: 5000, name: 'W' },
            ],
        };
        const reloaded = loadEditorState(saveEditorState(state, 1));
        expect(reloaded.yAxes).toHaveLength(1); // axis 1 is unbound — the load heal drops it
        expect(reloaded.yAxes[0]).toMatchObject({ min: 0, max: 40, name: '°C' });
        expect(reloaded.series[0]?.yAxisIndex).toBe(0); // the binder stays put
    });

    it('the load heal re-indexes a binder above the dropped axis (marks follow)', () => {
        const state = {
            ...baseState(),
            chartType: 'line' as const,
            mode: 'live' as const,
            series: [
                { oid: 'dev.temp', name: 'Temp', yAxisIndex: 0 },
                { oid: 'dev.hum', name: 'Hum', yAxisIndex: 2 },
            ],
            yAxes: [
                { id: 'ax-1', position: 'left' as const, splitLine: true },
                { id: 'ax-2', position: 'right' as const, splitLine: false }, // unbound hole
                { id: 'ax-3', position: 'right' as const, offset: 80, splitLine: false },
            ],
            markLines: [{ id: 'm1', upper: 50, yAxisIndex: 2 }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 2));
        expect(reloaded.yAxes.map(a => a.id)).toEqual(['ax-1', 'ax-3']);
        expect(reloaded.series[1]?.yAxisIndex).toBe(1); // compacted around the hole
        expect(reloaded.markLines[0]?.yAxisIndex).toBe(1);
    });

    it('the axis OWNER („Namensgeber", ADR-0068) survives the round-trip', () => {
        const state = {
            ...baseState(),
            chartType: 'line' as const,
            mode: 'live' as const,
            series: [
                { id: 'sr-1', oid: 'dev.temp', name: 'Temp', yAxisIndex: 0 },
                { id: 'sr-2', oid: 'dev.hum', name: 'Hum', yAxisIndex: 0 },
            ],
            yAxes: [{ id: 'ax-1', position: 'left' as const, owner: 'sr-1' }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 2));
        expect(reloaded.yAxes[0]?.owner).toBe('sr-1'); // rides the yAxes blob (no whitelist)
    });
});

describe('editorState — 0-axes start (ADR-0067)', () => {
    it('the DEFAULT_EDITOR_STATE carries zero axes', () => {
        expect(DEFAULT_EDITOR_STATE.yAxes).toEqual([]);
    });

    it('a fresh widget (no yAxes blob, no series) loads with ZERO axes — no ghost "Achse 1"', () => {
        const reloaded = loadEditorState({ chartType: 'line' });
        expect(reloaded.yAxes).toEqual([]);
    });

    it('a legacy CARTESIAN widget with series still synthesises axis 0 from the legacy scalars (ADR-0012)', () => {
        const reloaded = loadEditorState({
            chartType: 'line',
            series_count: 1,
            oid1: 'dev.temp',
            yName: '°C',
            yMin: 0,
            yMax: 40,
        });
        expect(reloaded.yAxes).toHaveLength(1);
        expect(reloaded.yAxes[0]).toMatchObject({ name: '°C', min: 0, max: 40, position: 'left' });
    });

    it('a legacy widget WITHOUT series starts at zero axes too — there is nothing bound to axis 0', () => {
        const reloaded = loadEditorState({ chartType: 'line', series_count: 0, yName: '°C' });
        expect(reloaded.yAxes).toEqual([]);
    });

    it('gauge/radar/pie never synthesise an axis (yAxes is cartesian-only state)', () => {
        expect(loadEditorState({ chartType: 'gauge', series_count: 1, oid1: 'dev.p' }).yAxes).toEqual([]);
        expect(loadEditorState({ chartType: 'radar', series_count: 1, oid1: 'dev.p' }).yAxes).toEqual([]);
        expect(loadEditorState({ chartType: 'pie', series_count: 1, oid1: 'dev.p' }).yAxes).toEqual([]);
    });

    it('an empty-yAxes round-trip stays empty (Apply writes [], load keeps [])', () => {
        const state = { ...baseState(), chartType: 'line' as const, series: [], yAxes: [] };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.yAxes).toEqual([]);
    });
});

describe('editorState — ADR-0042 snippet activations', () => {
    // Since the ADR-0042 addendum an activation canonically rides WITH its composed raw text
    // (the load path heals ids whose template has no leaf path left in the text), so every
    // fixture below carries the composition the UI toggle would have written.
    it('series activations survive per-slot and stale slot ids are pruned on Apply (line → pie slice)', () => {
        const state = {
            ...baseState(),
            chartType: 'pie' as const,
            series: [
                {
                    oid: 'a',
                    name: 'A',
                    raw: JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES['pie-slice'], ['slice-itemstyle'])),
                    snippets: ['line-sampling', 'slice-itemstyle'],
                },
            ],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.series[0]?.snippets).toEqual(['slice-itemstyle']);
    });

    it('empty activations stay lean: series meta carries no snippets key', () => {
        const patch = saveEditorState(
            { ...baseState(), chartType: 'line' as const, series: [{ oid: 'a', name: 'A' }] },
            0,
        );
        const reloaded = loadEditorState(patch);
        expect(reloaded.series[0]?.snippets).toBeUndefined();
        expect(reloaded.pie.snippets).toBeUndefined();
    });

    it('gauge series raw + activations round-trip (the pre-ADR-0042 persistence gap)', () => {
        const raw = JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES.gauge, ['gauge-axisline']));
        const state = {
            ...baseState(),
            chartType: 'gauge' as const,
            series: [{ oid: 'a', name: 'G', raw, snippets: ['gauge-axisline'] }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.series[0]?.raw).toBe(raw);
        expect(reloaded.series[0]?.snippets).toEqual(['gauge-axisline']);
    });

    it('radar polygon raw + activations round-trip (the pre-ADR-0042 persistence gap)', () => {
        const raw = JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES.radar, ['radar-emphasis']));
        const state = {
            ...baseState(),
            chartType: 'radar' as const,
            series: [{ oid: '', name: 'R', raw, snippets: ['radar-emphasis'] }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.series[0]?.raw).toBe(raw);
        expect(reloaded.series[0]?.snippets).toEqual(['radar-emphasis']);
    });

    it('json-mode overlay activations prune to their slot catalog on Apply', () => {
        const state = {
            ...baseState(),
            chartType: 'line' as const,
            jsonSeriesStyle: {
                Temp: {
                    color: '#f00',
                    raw: JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES['cartesian-line'], ['line-sampling'])),
                    snippets: ['line-sampling', 'slice-radius'],
                },
                Power: { name: 'Leistung' },
            },
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.jsonSeriesStyle.Temp?.snippets).toEqual(['line-sampling']);
        expect(reloaded.jsonSeriesStyle.Power?.snippets).toBeUndefined();
    });

    it('pie whole-series activations round-trip', () => {
        const raw = JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES.pie, ['pie-label']));
        const state = {
            ...baseState(),
            chartType: 'pie' as const,
            pie: {
                aggregate: 'latest',
                innerRadius: 0,
                rose: 'none',
                label: 'namePercent',
                raw,
                snippets: ['pie-label'],
            } as EchartsPieConfig,
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.pie.snippets).toEqual(['pie-label']);
        expect(reloaded.pie.raw).toBe(raw);
    });

    it('the load heal drops activations whose template has no leaf path left in the text (ADR-0042 addendum)', () => {
        // A widget saved before the addendum: the user deleted the template content inside the
        // editor, the ids stayed — the badge lied. Loading heals keep-only.
        const state = {
            ...baseState(),
            series: [{ oid: 'a', name: 'A', raw: '', snippets: ['line-sampling'] }],
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.series[0]?.snippets).toBeUndefined();
    });

    it('component-section raws + activations ride the chartConfig blob and heal (ADR-0044)', () => {
        const raw = JSON.stringify(composeActiveSnippets(TITLE_TEMPLATES, ['frame']));
        const state = {
            ...baseState(),
            titleRaw: raw,
            titleSnippets: ['frame'],
            legendRaw: '',
            legendSnippets: [],
            tooltipRaw: '{ "confine": true }',
            tooltipSnippets: ['nope'], // unknown/retired id — prunes at load, never re-adds
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.titleRaw).toBe(raw);
        expect(reloaded.titleSnippets).toEqual(['frame']);
        expect(reloaded.tooltipRaw).toBe('{ "confine": true }');
        expect(reloaded.tooltipSnippets).toEqual([]);
    });

    it('the radar section raw + activations ride the chartConfig blob and heal (ADR-0045)', () => {
        const raw = JSON.stringify(composeActiveSnippets(RADAR_TEMPLATES, ['radar-splitarea']));
        const state = {
            ...baseState(),
            chartType: 'radar' as const,
            radarRaw: raw,
            radarSnippets: ['radar-splitarea', 'nope'], // unknown id — prunes at load, never re-adds
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.radarRaw).toBe(raw);
        expect(reloaded.radarSnippets).toEqual(['radar-splitarea']);
        // The heal is keep-only: an activation whose template has no leaf left in the text drops.
        const hollow = loadEditorState(
            saveEditorState({ ...baseState(), radarRaw: '', radarSnippets: ['radar-splitarea'] }, 0),
        );
        expect(hollow.radarSnippets).toEqual([]);
    });

    it('the radar raw survives a family switch away and back (rides the blob inert, no prune)', () => {
        const raw = JSON.stringify(composeActiveSnippets(RADAR_TEMPLATES, ['radar-axisname']));
        const state = {
            ...baseState(),
            chartType: 'radar' as const,
            radarRaw: raw,
            radarSnippets: ['radar-axisname'],
        };
        const cartesian = loadEditorState({ ...saveEditorState(state, 0), chartType: 'line' });
        expect(cartesian.radarRaw).toBe(raw);
        expect(cartesian.radarSnippets).toEqual(['radar-axisname']);
        const back = loadEditorState(saveEditorState(cartesian, 0));
        expect(back.radarRaw).toBe(raw);
        expect(back.radarSnippets).toEqual(['radar-axisname']);
    });
});

describe('editorState — toolbox blob round-trip (ADR-0045)', () => {
    it('the full toolbox config survives the toolboxConfig blob', () => {
        const state: EditorState = {
            ...baseState(),
            toolbox: {
                show: true,
                pos: 'bottomLeft',
                orient: 'vertical',
                itemSize: 18,
                itemGap: 8,
                showTitle: false,
                iconColor: '#123',
                iconHoverColor: '#456',
                borderWidth: 2,
                borderColor: '#789',
                borderRadius: 4,
                padding: 10,
                backgroundColor: '#abc',
                features: {
                    saveAsImage: { show: true, type: 'svg', name: 'chart', pixelRatio: 2 },
                    restore: { show: false },
                    dataView: { show: true, readOnly: false },
                    dataZoom: { show: true, filterMode: 'weakFilter' },
                },
            },
        };
        const reloaded = loadEditorState(saveEditorState(state, 0));
        expect(reloaded.toolbox).toEqual(state.toolbox);
    });

    it('an absent/empty blob loads as {} (master off — no toolbox block)', () => {
        expect(loadEditorState({}).toolbox).toEqual({});
        expect(loadEditorState({ toolboxConfig: '' }).toolbox).toEqual({});
        expect(loadEditorState({ toolboxConfig: 'not-base64!' }).toolbox).toEqual({});
    });
});

describe('editorState — ADR-0043 silent load-prune of retired template ids', () => {
    it('persisted activations referencing retired catalog ids drop silently on load', () => {
        const state = { ...baseState(), chartType: 'line' as const, series: [{ oid: 'a', name: 'A' }] };
        const patch = saveEditorState(state, 0);
        // Simulate a widget saved before the ADR-0043 catalog rework: the persisted blobs carry
        // retired ids (saveEditorState would prune them — the LOAD path must too, silently) —
        // riding with the composed raw text of the ids that are supposed to SURVIVE.
        patch.seriesConfig = encodeBlob(
            JSON.stringify([
                {
                    name: 'A',
                    raw: JSON.stringify(composeActiveSnippets(SERIES_TEMPLATES['cartesian-line'], ['line-sampling'])),
                    snippets: ['line-sampling', 'line-lineopacity'],
                },
            ]),
        );
        const reloaded = loadEditorState(patch);
        expect(reloaded.series[0]?.snippets).toEqual(['line-sampling']);
    });

    it('axis activations prune against the axis catalog on load too', () => {
        const state = { ...baseState(), chartType: 'line' as const };
        const patch = saveEditorState(state, 0);
        // JSON mode (baseState): the axis needs an overlay binder to survive the ADR-0069 load heal.
        patch.jsonSeriesStyle = encodeBlob(JSON.stringify({ Temp: { yAxisIndex: 0 } }));
        patch.yAxes = encodeBlob(
            JSON.stringify([
                {
                    raw: JSON.stringify(composeActiveSnippets(AXIS_TEMPLATES, ['logbase'])),
                    snippets: ['axislabel-hideoverlap', 'logbase'],
                },
            ]),
        );
        const reloaded = loadEditorState(patch);
        expect(reloaded.yAxes[0]?.snippets).toEqual(['logbase']);
    });
});

describe('editorState — parity Build E scalars (ADR-0054)', () => {
    it('the six option scalars round-trip and default to off/empty', () => {
        const authored = {
            ...baseState(),
            legendShowValues: true,
            tooltipBgColor: '#202124',
            tooltipNoInterpolate: true,
            tooltipHideNulls: true,
            decimalComma: true,
            zoomResetAfterIdle: '120',
        } as EditorState;
        const reloaded = loadEditorState(saveEditorState(authored, 0));
        expect(reloaded.legendShowValues).toBe(true);
        expect(reloaded.tooltipBgColor).toBe('#202124');
        expect(reloaded.tooltipNoInterpolate).toBe(true);
        expect(reloaded.tooltipHideNulls).toBe(true);
        expect(reloaded.decimalComma).toBe(true);
        expect(reloaded.zoomResetAfterIdle).toBe('120');

        const fresh = loadEditorState(saveEditorState(baseState(), 0));
        expect(fresh.legendShowValues).toBe(false);
        expect(fresh.tooltipBgColor).toBe('');
        expect(fresh.tooltipNoInterpolate).toBe(false);
        expect(fresh.tooltipHideNulls).toBe(false);
        expect(fresh.decimalComma).toBe(false);
        expect(fresh.zoomResetAfterIdle).toBe('');
    });
});

describe('editorState — parity Build D chart frame (ADR-0056)', () => {
    it('the five frame scalars round-trip through the flat rxData fields', () => {
        const authored = {
            ...baseState(),
            frame: { enabled: true, width: 2, color: '#f00', style: 'groove', padding: 8 },
        } as EditorState;
        const reloaded = loadEditorState(saveEditorState(authored, 0));
        expect(reloaded.frame).toEqual({ enabled: true, width: 2, color: '#f00', style: 'groove', padding: 8 });
    });

    it('a fresh widget defaults to no frame; an unknown stored style heals to solid', () => {
        const fresh = loadEditorState(saveEditorState(baseState(), 0));
        expect(fresh.frame).toEqual(DEFAULT_EDITOR_STATE.frame);

        const healed = loadEditorState({ frameEnabled: true, frameWidth: 1, frameStyle: 'wavy' });
        expect(healed.frame.style).toBe('solid');
        expect(healed.frame.enabled).toBe(true);
    });
});
