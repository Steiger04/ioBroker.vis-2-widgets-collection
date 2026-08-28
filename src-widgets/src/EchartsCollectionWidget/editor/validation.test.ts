/**
 * Unit tests for the advisory validation engine (ADR-0010): {@link validateEditor} +
 * {@link familyBoundaryLoss}/{@link jsonBoundaryLoss} (ADR-0067) +
 * {@link familySwitchSnippetLoss} (ADR-0042).
 *
 * @module EchartsCollectionWidget/editor/validation.test
 */
import { describe, expect, it } from 'vitest';

import { DEFAULT_EDITOR_STATE, type EditorState } from './editorState';
import { familyBoundaryLoss, familySwitchSnippetLoss, jsonBoundaryLoss, validateEditor } from './validation';

/** Shorthand: a working state with the given overrides. */
const st = (patch: Partial<EditorState>): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...patch });

describe('validateEditor', () => {
    it('clean cartesian state → no issues', () => {
        const issues = validateEditor(st({ series: [{ oid: 'modbus.0.x', name: 'A' }] }));
        expect(issues).toEqual({});
    });

    it('cartesian series without OID → series roll-up with the series name', () => {
        const issues = validateEditor(
            st({
                series: [
                    { oid: '', name: 'Temp' },
                    { oid: 'x.y.z', name: 'B' },
                ],
            }),
        );
        expect(issues.series).toEqual([{ key: 'echarts_val_oid_missing', args: ['Temp'] }]);
    });

    it('series name falls back to the 1-based index when unnamed', () => {
        const issues = validateEditor(
            st({
                series: [
                    { oid: 'a.b.c', name: 'A' },
                    { oid: '', name: '' },
                ],
            }),
        );
        expect(issues.series?.[0].args).toEqual(['2']);
    });

    it('stale series→axis index (beyond the axis array) → series issue naming the render fallback (Q6)', () => {
        const issues = validateEditor(
            st({
                yAxes: [{ position: 'left' }, { position: 'right' }, { position: 'left' }],
                series: [{ oid: 'a.b.c', name: 'PV', yAxisIndex: 5 }],
            }),
        );
        expect(issues.series).toEqual([{ key: 'echarts_val_stale_yaxis', args: ['PV'] }]);
    });

    it('the >= boundary itself: yAxisIndex === yAxes.length is already stale', () => {
        const issues = validateEditor(
            st({
                yAxes: [{ position: 'left' }, { position: 'right' }],
                series: [{ oid: 'a.b.c', name: 'B', yAxisIndex: 2 }],
            }),
        );
        expect(issues.series).toEqual([{ key: 'echarts_val_stale_yaxis', args: ['B'] }]);
    });

    it('valid series→axis indices → no issue', () => {
        const issues = validateEditor(
            st({
                yAxes: [{ position: 'left' }, { position: 'right' }],
                series: [
                    { oid: 'a.b.c', name: 'A', yAxisIndex: 0 },
                    { oid: 'd.e.f', name: 'B', yAxisIndex: 1 },
                ],
            }),
        );
        expect(issues).toEqual({});
    });

    it('an index-less series (implicit axis 0) → no issue', () => {
        const issues = validateEditor(st({ yAxes: [{ position: 'left' }], series: [{ oid: 'a.b.c' }] }));
        expect(issues).toEqual({});
    });

    it('0 axes + series → no stale-index chorus (the deliberate 0-axes state, builder-caught)', () => {
        const issues = validateEditor(st({ yAxes: [], series: [{ oid: 'a.b.c', name: 'A', yAxisIndex: 2 }] }));
        expect(issues).toEqual({});
    });

    it('pie slices without OID → series roll-up', () => {
        const issues = validateEditor(st({ chartType: 'pie', series: [{ oid: '', name: 'Slice' }] }));
        expect(issues.series).toHaveLength(1);
        expect(issues.series?.[0].key).toBe('echarts_val_oid_missing');
    });

    it('gauge: missing OID → series issue; min ≥ max → family issue', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: '', name: '' }],
                gauge: { min: 100, max: 0, progressWidth: 14, unit: '' },
            }),
        );
        expect(issues.series?.[0]).toEqual({ key: 'echarts_val_oid_missing', args: ['1'] });
        expect(issues.family).toEqual([{ key: 'echarts_val_gauge_range', args: undefined }]);
    });

    it('gauge with sane range → no family issue', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: 'a.b.c', name: '' }],
                gauge: { min: 0, max: 100, progressWidth: 14, unit: '' },
            }),
        );
        expect(issues.family).toBeUndefined();
    });

    it('radar: indicator without OID and max ≤ 0 → two series issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'radar',
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [{ name: 'Speed', max: 0, oid: '' }],
                },
            }),
        );
        expect(issues.series?.map(i => i.key)).toEqual(['echarts_val_oid_missing', 'echarts_val_radar_max']);
    });

    it('axis min ≥ max (both set) → axesZoom issue; one side auto → clean (ADR-0012)', () => {
        expect(validateEditor(st({ yAxes: [{ min: 10, max: 5 }] })).axesZoom).toHaveLength(1);
        expect(validateEditor(st({ yAxes: [{ max: 5 }] })).axesZoom).toBeUndefined();
        expect(validateEditor(st({ yAxes: [{ min: 5, max: 10 }] })).axesZoom).toBeUndefined();
    });

    it('visualMap enabled + min ≥ max → colors issue; disabled → clean', () => {
        const on = validateEditor(st({ visualMap: { enabled: true, min: 50, max: 50, colors: '' } }));
        expect(on.colors?.[0].key).toBe('echarts_val_vmap_range');
        const off = validateEditor(st({ visualMap: { enabled: false, min: 50, max: 50, colors: '' } }));
        expect(off.colors).toBeUndefined();
    });

    it('gauge/radar states never produce cartesian-only issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: 'a.b.c', name: '' }],
                yAxes: [{ min: 10, max: 5 }], // bad range, but gauge skips cartesian checks
                visualMap: { enabled: true, min: 9, max: 1, colors: '' },
            }),
        );
        expect(issues.axesZoom).toBeUndefined();
        expect(issues.colors).toBeUndefined();
    });
});

describe('familyBoundaryLoss — what a chart-family crossing deletes (ADR-0067)', () => {
    // ADR-0067 pensions the familySwitchLoss survival model (cartesian→pie kept the series as
    // slices): a family crossing now RESETS the whole data path, so the loss is the entire
    // series/axis set of the current family — counted up front by the picker warning chip.

    it('cartesian counts the authored series + axes that fall on any family exit', () => {
        const loss = familyBoundaryLoss(
            st({
                chartType: 'line',
                series: [{ oid: 'a' }, { oid: 'b' }],
                yAxes: [{ position: 'left' }, { position: 'right' }],
            }),
        );
        expect(loss).toEqual({ series: 2, axes: 2, marks: 0, dataPoint: false });
    });

    it('radar counts the INDICATORS (its oidN data path), not the polygon series', () => {
        const loss = familyBoundaryLoss(
            st({
                chartType: 'radar',
                series: [{ oid: '', name: 'Polygon' }],
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [
                        { name: 'I', max: 1, oid: 'c' },
                        { name: 'J', max: 1, oid: 'd' },
                    ],
                },
            }),
        );
        expect(loss).toEqual({ series: 2, axes: 0, marks: 0, dataPoint: false });
    });

    it('gauge counts its single series', () => {
        const loss = familyBoundaryLoss(st({ chartType: 'gauge', series: [{ oid: 'a' }] }));
        expect(loss).toEqual({ series: 1, axes: 0, marks: 0, dataPoint: false });
    });

    it('F10: cartesian markings count and a set jsonOid falls with the crossing', () => {
        const loss = familyBoundaryLoss(
            st({
                chartType: 'line',
                series: [{ oid: 'a' }],
                yAxes: [{ position: 'left' }],
                markLines: [
                    { id: 'm0', upper: 50 },
                    { id: 'm1', upper: 80 },
                ],
                jsonOid: 'dev.payload',
            }),
        );
        expect(loss).toEqual({ series: 1, axes: 1, marks: 2, dataPoint: true });
    });

    it('F10: markings are cartesian-only — radar/pie/gauge report none even with markLines set', () => {
        expect(familyBoundaryLoss(st({ chartType: 'radar', markLines: [{ id: 'm0', upper: 1 }] })).marks).toBe(0);
        expect(familyBoundaryLoss(st({ chartType: 'pie', markLines: [{ id: 'm0', upper: 1 }] })).marks).toBe(0);
    });

    it('an empty data path loses nothing — zero/zero renders no chip', () => {
        expect(familyBoundaryLoss(st({ chartType: 'line' }))).toEqual({
            series: 0,
            axes: 0,
            marks: 0,
            dataPoint: false,
        });
        expect(familyBoundaryLoss(st({ chartType: 'radar' }))).toEqual({
            series: 0,
            axes: 0,
            marks: 0,
            dataPoint: false,
        });
    });
});

describe('familySwitchSnippetLoss (ADR-0042 — activations the family switch prunes on Apply)', () => {
    // The chart-level term retired with the chart-U (ADR-0045); the radar section raw rides the
    // chartConfig blob inert across families (never a loss) — what remains are the series-level terms.
    it('gauge drops the series beyond the first with their activations; the survivor goes slot-stale', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'gauge',
                series: [
                    { oid: 'a', name: '', snippets: ['line-sampling'] },
                    { oid: 'b', name: '', snippets: ['line-clip', 'line-markpoint'] },
                ],
            }),
        );
        expect(n).toBe(3);
    });

    it('radar drops every cartesian series (survivor stale + dropped counted)', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'radar',
                series: [
                    { oid: 'a', name: '', snippets: ['line-sampling'] },
                    { oid: 'b', name: '', snippets: ['line-clip'] },
                ],
            }),
        );
        expect(n).toBe(2);
    });

    it('pie target: slice-slot-stale cartesian activations count', () => {
        const n = familySwitchSnippetLoss(
            st({ chartType: 'pie', series: [{ oid: 'a', name: '', snippets: ['line-sampling', 'slice-itemstyle'] }] }),
        );
        expect(n).toBe(1);
    });

    it('valid activations cost nothing — cartesian line activations on a cartesian line target', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'line',
                series: [{ oid: 'a', name: '', snippets: ['line-sampling'] }],
            }),
        );
        expect(n).toBe(0);
    });

    it('no activations → zero for every family', () => {
        expect(familySwitchSnippetLoss(st({ chartType: 'gauge', series: [{ oid: '', name: '' }] }))).toBe(0);
        expect(familySwitchSnippetLoss(st({ chartType: 'radar' }))).toBe(0);
        expect(familySwitchSnippetLoss(st({ chartType: 'pie' }))).toBe(0);
    });
});

describe('jsonBoundaryLoss — what the next JSON-boundary crossing deletes (ADR-0067)', () => {
    it('history/live counts the authored series + axes that fall on JSON entry', () => {
        const loss = jsonBoundaryLoss(
            st({
                mode: 'history',
                series: [{ oid: 'a' }, { oid: 'b' }],
                yAxes: [{ position: 'left' }, { position: 'right' }, { position: 'left', offset: 80 }],
            }),
        );
        expect(loss).toEqual({ series: 2, axes: 3, marks: 0, dataPoint: false });
    });

    it('json counts the VISIBLE payload series — hidden names never count', () => {
        const loss = jsonBoundaryLoss(
            st({
                mode: 'json',
                yAxes: [{ position: 'left' }, { position: 'right' }],
                jsonHidden: ['B'],
            }),
            ['A', 'B', 'C'],
        );
        expect(loss).toEqual({ series: 2, axes: 2, marks: 0, dataPoint: false });
    });

    it('F10: leaving JSON with a set jsonOid loses the data point; markings count (json-cartesian)', () => {
        const loss = jsonBoundaryLoss(
            st({ mode: 'json', chartType: 'line', jsonOid: 'dev.payload', markLines: [{ id: 'm0', upper: 5 }] }),
            ['A'],
        );
        expect(loss).toEqual({ series: 1, axes: 0, marks: 1, dataPoint: true });
    });

    it('json without live names falls back to the stored unhidden overlay entries', () => {
        const loss = jsonBoundaryLoss(
            st({
                mode: 'json',
                jsonSeriesStyle: { Temp: { yAxisIndex: 0 }, Power: { yAxisIndex: 1 } },
                jsonHidden: ['Power'],
            }),
        );
        expect(loss.series).toBe(1);
    });

    it('a live preview is AUTHORITATIVE — all names hidden means zero, stale overlay entries do not resurrect', () => {
        const loss = jsonBoundaryLoss(
            st({
                mode: 'json',
                jsonSeriesStyle: { Stale: { yAxisIndex: 0 } }, // not in the payload anymore
                jsonHidden: ['A'],
            }),
            ['A'],
        );
        expect(loss.series).toBe(0);
    });

    it('an empty data path loses nothing — zero/zero renders no chip', () => {
        expect(jsonBoundaryLoss(st({ mode: 'history' }))).toEqual({ series: 0, axes: 0, marks: 0, dataPoint: false });
        expect(jsonBoundaryLoss(st({ mode: 'json', yAxes: [] }), [])).toEqual({
            series: 0,
            axes: 0,
            marks: 0,
            dataPoint: false,
        });
    });
});
