/**
 * Unit tests for the advisory validation engine (ADR-0010): {@link validateEditor} +
 * {@link familyBoundaryLoss}/{@link jsonBoundaryLoss} (ADR-0067) +
 * {@link familySwitchSnippetLoss} (ADR-0042).
 *
 * @module EchartsCollectionWidget/editor/validation.test
 */
import { describe, expect, it } from 'vitest';

import { DEFAULT_EDITOR_STATE, type EditorState } from './editorState';
import {
    familyBoundaryLoss,
    familySwitchSnippetLoss,
    firstIssueTabOf,
    jsonBoundaryLoss,
    jsonKindBoundaryLoss,
    issueCountsByTab,
    tabOfIssue,
    validateEditor,
} from './validation';

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

    it('pie states never produce cartesian-only issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'pie',
                series: [{ oid: 'a.b.c', name: '' }],
                yAxes: [{ min: 10, max: 5 }], // bad range, but pie skips cartesian checks
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

    it('F10: markings are cartesian-only — pie reports none even with markLines set', () => {
        expect(familyBoundaryLoss(st({ chartType: 'pie', markLines: [{ id: 'm0', upper: 1 }] })).marks).toBe(0);
    });

    it('an empty data path loses nothing — zero/zero renders no chip', () => {
        expect(familyBoundaryLoss(st({ chartType: 'line' }))).toEqual({
            series: 0,
            axes: 0,
            marks: 0,
            dataPoint: false,
        });
        expect(familyBoundaryLoss(st({ chartType: 'pie' }))).toEqual({
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
        expect(familySwitchSnippetLoss(st({ chartType: 'pie' }))).toBe(0);
        expect(familySwitchSnippetLoss(st({ chartType: 'line' }))).toBe(0);
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

describe('tab addressing (ADR-0073) — issue → section tab, purely from field placement', () => {
    it('tabOfIssue maps the placed issues; everything else addresses no tab', () => {
        expect(tabOfIssue({ key: 'echarts_val_yminmax' })).toBe('axes');
        expect(tabOfIssue({ key: 'echarts_val_vmap_range' })).toBe('scale');
        expect(tabOfIssue({ key: 'echarts_val_oid_missing' })).toBeUndefined();
        expect(tabOfIssue({ key: 'echarts_val_stale_yaxis' })).toBeUndefined();
    });

    it('issueCountsByTab aggregates the ⚠ dot feed per tab key', () => {
        expect(issueCountsByTab(undefined)).toEqual({});
        expect(
            issueCountsByTab([{ key: 'echarts_val_yminmax' }, { key: 'echarts_val_oid_missing', args: ['A'] }]),
        ).toEqual({ axes: 1 });
    });
});

describe('firstIssueTabOf — the Problems-button glue (ADR-0073)', () => {
    it('derives the section first issue tab; clean or unplaceable sections address none', () => {
        expect(firstIssueTabOf({ colors: [{ key: 'echarts_val_vmap_range' }] }, 'colors')).toBe('scale');
        expect(firstIssueTabOf({ series: [{ key: 'echarts_val_oid_missing' }] }, 'series')).toBeUndefined();
        expect(firstIssueTabOf({}, 'colors')).toBeUndefined();
        expect(firstIssueTabOf(undefined, 'colors')).toBeUndefined();
    });
});

describe('jsonKindBoundaryLoss — what the next payload-family crossing deletes (ADR-0075)', () => {
    it('tabellarisch counts the AUTHORED series (state.series)', () => {
        const loss = jsonKindBoundaryLoss(
            st({
                mode: 'json',
                jsonKind: 'table',
                series: [
                    { oid: '', yPath: 'a' },
                    { oid: '', yPath: 'b' },
                ],
                yAxes: [{ position: 'left' }, { position: 'right' }],
                markLines: [{ id: 'm0', upper: 5 }],
            }),
        );
        expect(loss).toEqual({ series: 2, axes: 2, marks: 1, dataPoint: false });
    });

    it('serien-förmig counts the visible payload names like jsonBoundaryLoss', () => {
        const loss = jsonKindBoundaryLoss(st({ mode: 'json', jsonKind: 'series', jsonHidden: ['B'] }), ['A', 'B', 'C']);
        expect(loss.series).toBe(2);
        expect(jsonKindBoundaryLoss(st({ mode: 'json' }), ['A'])).toEqual({
            series: 1,
            axes: 0,
            marks: 0,
            dataPoint: false,
        });
    });

    it('the crossing KEEPS jsonOid — the dataPoint segment never shows (F10 scope minus the data point)', () => {
        const loss = jsonKindBoundaryLoss(
            st({ mode: 'json', jsonKind: 'table', jsonOid: 'js.0.table', series: [{ oid: '', yPath: 'a' }] }),
        );
        expect(loss.dataPoint).toBe(false); // the chip's "plus the JSON data point" stays off
        expect(loss.series).toBe(1);
    });
});

describe('validateEditor — tabellarisch (ADR-0075 ticket 04: yPath drift, no OID chorus)', () => {
    const cols = [
        { path: 'temp', type: 'number' },
        { path: 'name', type: 'string' },
    ] as const;

    it('oid-leere table series raise NO oid-missing chorus (the yPath is the binding)', () => {
        const issues = validateEditor(st({ mode: 'json', jsonKind: 'table', series: [{ oid: '', yPath: 'temp' }] }), {
            tableColumns: cols,
        });
        expect(issues.series).toBeUndefined();
    });

    it('a yPath gone from the schema keeps the card and raises the drift issue', () => {
        const issues = validateEditor(
            st({ mode: 'json', jsonKind: 'table', series: [{ oid: '', yPath: 'gone', name: 'PV' }] }),
            { tableColumns: cols },
        );
        expect(issues.series).toEqual([{ key: 'echarts_val_ypath_missing', args: ['PV'] }]);
    });

    it('a string-typed Y column raises the advisory (it plots null points only)', () => {
        const issues = validateEditor(st({ mode: 'json', jsonKind: 'table', series: [{ oid: '', yPath: 'name' }] }), {
            tableColumns: cols,
        });
        expect(issues.series).toEqual([{ key: 'echarts_val_ypath_string', args: ['name'] }]);
    });

    it('no schema yet → the drift checks stay silent (the Zuordnung tab owns that state)', () => {
        const issues = validateEditor(st({ mode: 'json', jsonKind: 'table', series: [{ oid: '', yPath: 'x' }] }));
        expect(issues.series).toBeUndefined();
    });

    it('serien-förmig keeps the OID chorus — the table columns input is inert there', () => {
        const issues = validateEditor(st({ mode: 'json', jsonKind: 'series', series: [{ oid: '', name: 'A' }] }), {
            tableColumns: cols,
        });
        expect(issues.series).toEqual([{ key: 'echarts_val_oid_missing', args: ['A'] }]);
    });
});
