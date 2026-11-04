/**
 * Unit tests for the advisory validation engine (ADR-0010): {@link validateEditor}. The boundary
 * loss — incl. the ADR-0042 template count — moved into the structure events (ADR-0099 —
 * `structureEvents.test.ts`).
 *
 * @module EchartsCollectionWidget/editor/validation.test
 */
import { describe, expect, it, vi } from 'vitest';

// DOM pool since ADR-0083: this suite transitively loads the family profiles' section
// modules — they extend Generic (→ window.visRxWidget, undefined outside the vis-2 host;
// the axesZoomSection.test precedent) and pull the adapter-react barrel (FileBrowser →
// icons — the focusTabs stub).
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import { DEFAULT_EDITOR_STATE, loadEditorState, type EditorState } from './editorState';
import { firstIssueTabOf, issueCountsByTab, tabOfIssue, validateEditor } from './validation';

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

    it('stored chart-level colour scale keys (visualMap*, ADR-0101) raise no issue — they are ignored', () => {
        // An inverted legacy range used to warn on the Colours section; the keys are dead now.
        const legacy = loadEditorState({
            visualMapEnabled: true,
            visualMapMin: 50,
            visualMapMax: 50,
        });
        expect(validateEditor({ ...legacy, series: [{ oid: 'a.b.c', name: 'A' }] })).toEqual({});
    });

    it('pie states never produce cartesian-only issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'pie',
                series: [{ oid: 'a.b.c', name: '' }],
                yAxes: [{ min: 10, max: 5 }], // bad range, but pie skips cartesian checks
            }),
        );
        expect(issues.axesZoom).toBeUndefined();
    });
});

describe('tab addressing (ADR-0073) — issue → section tab, purely from field placement', () => {
    it('tabOfIssue maps the placed issues; everything else addresses no tab', () => {
        expect(tabOfIssue({ key: 'echarts_val_yminmax' })).toBe('axes');
        // The retired chart-level colour scale warning (ADR-0101) addresses no tab any more.
        expect(tabOfIssue({ key: 'echarts_val_vmap_range' })).toBeUndefined();
        expect(tabOfIssue({ key: 'echarts_val_stack_timeaxis' })).toBe('fetch');
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
        expect(firstIssueTabOf({ dataSource: [{ key: 'echarts_val_stack_timeaxis' }] }, 'dataSource')).toBe('fetch');
        expect(firstIssueTabOf({ axesZoom: [{ key: 'echarts_val_yminmax' }] }, 'axesZoom')).toBe('axes');
        expect(firstIssueTabOf({ series: [{ key: 'echarts_val_oid_missing' }] }, 'series')).toBeUndefined();
        expect(firstIssueTabOf({}, 'colors')).toBeUndefined();
        expect(firstIssueTabOf(undefined, 'colors')).toBeUndefined();
    });
});

describe('validateEditor — Farbskala range (ADR-0101, ticket 05)', () => {
    const KEY = 'echarts_val_color_scale_range';
    const one = (meta: Partial<EditorState['series'][number]>): EditorState =>
        st({ chartType: 'line', series: [{ oid: 'a.b.c', name: 'Temp', ...meta }] });

    it('an entered Min ≥ Max with the scale on warns at the series — addressed to the Stil tab', () => {
        const issues = validateEditor(one({ colorScale: true, colorScaleMin: 30, colorScaleMax: 5 }));
        expect(issues.series).toEqual([{ key: KEY, args: ['Temp'] }]);
        // Min = Max is the same input error.
        expect(validateEditor(one({ colorScale: true, colorScaleMin: 7, colorScaleMax: 7 })).series).toHaveLength(1);
        // Field placement (ADR-0073): the Min/Max fields live on the series card's Stil tab.
        expect(tabOfIssue({ key: KEY })).toBe('stil');
        expect(firstIssueTabOf(issues, 'series')).toBe('stil');
    });

    it('stays quiet with the scale off, a bound inherited, or a valid range', () => {
        expect(validateEditor(one({ colorScaleMin: 30, colorScaleMax: 5 }))).toEqual({});
        expect(validateEditor(one({ colorScale: true, colorScaleMax: 5 }))).toEqual({});
        expect(validateEditor(one({ colorScale: true, colorScaleMin: 30 }))).toEqual({});
        expect(validateEditor(one({ colorScale: true, colorScaleMin: 0, colorScaleMax: 5 }))).toEqual({});
    });

    it('unnamed series name their position; the pie family carries no Farbskala', () => {
        const unnamed = st({
            chartType: 'bar',
            series: [
                { oid: 'a', name: 'A' },
                { oid: 'b', colorScale: true, colorScaleMin: 2, colorScaleMax: 1 },
            ],
        });
        expect(validateEditor(unnamed).series).toEqual([{ key: KEY, args: ['2'] }]);
        expect(validateEditor({ ...unnamed, chartType: 'pie' }).series).toBeUndefined();
    });

    it('JSON (serien-förmig): the visible payload series of the overlay are checked by name', () => {
        const bad = { colorScale: true, colorScaleMin: 9, colorScaleMax: 1 };
        const state = st({
            chartType: 'line',
            mode: 'json',
            jsonSeriesStyle: { Temp: bad, Hidden: bad, Gone: bad, Power: { ...bad, name: 'Leistung' } },
            jsonHidden: ['Hidden'],
        });
        const issues = validateEditor(state, { jsonSeriesNames: ['Temp', 'Hidden', 'Power'] });
        // Hidden series render nothing; a stale overlay entry („Gone“) has no card.
        expect(issues.series).toEqual([
            { key: KEY, args: ['Temp'] },
            { key: KEY, args: ['Leistung'] },
        ]);
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

describe('validateEditor — Stapelmodus Zeitachsen-issue (ADR-0084 decision 6)', () => {
    // The dangerous combination only: Verlauf · effective bar chart · stackMode ≠ none ·
    // barInterval auto · at least one EFFECTIVELY stacking bar series. Everything else —
    // an interval set, mode none, no stacking series (all opted out / line-typed) — stays quiet.
    const bars = (series: Partial<EditorState['series'][number]>[]): EditorState['series'] =>
        series.map(s => ({ oid: 'a.0', name: 'S', ...s }));

    it('fires exactly in the dangerous combination (both stack and percent)', () => {
        for (const stackMode of ['stack', 'percent'] as const) {
            const issues = validateEditor(
                st({ mode: 'history', chartType: 'bar', stackMode, barInterval: 'auto', series: bars([{}, {}]) }),
            );
            expect(issues.dataSource).toEqual([{ key: 'echarts_val_stack_timeaxis' }]);
        }
    });

    it('mode none · interval set · no stacking series · json mode → NO issue (the matrix)', () => {
        const base = { mode: 'history', chartType: 'bar' } as const;
        expect(validateEditor(st({ ...base, stackMode: 'none', series: bars([{}, {}]) })).dataSource).toBeUndefined();
        expect(
            validateEditor(st({ ...base, stackMode: 'stack', barInterval: '1h', series: bars([{}, {}]) })).dataSource,
        ).toBeUndefined();
        expect(
            validateEditor(st({ ...base, stackMode: 'stack', series: bars([{ stack: 'none' }, { stack: 'none' }]) }))
                .dataSource,
        ).toBeUndefined();
        // A line-typed series in the bar chart does not stack — no effective stacking bar.
        expect(
            validateEditor(st({ ...base, stackMode: 'stack', series: bars([{ type: 'line' }, { type: 'line' }]) }))
                .dataSource,
        ).toBeUndefined();
        // JSON carries the blob field unevaluated — no Verlauf fetch, no issue.
        expect(
            validateEditor(st({ mode: 'json', chartType: 'bar', stackMode: 'stack', series: bars([{}, {}]) }))
                .dataSource,
        ).toBeUndefined();
        // Documented scope limit (the ticket's literal condition): mode none stays quiet even
        // with hand-set groups — they stack mode-independently, but the issue is scoped to the
        // MODE's dangerous constellation; the hand-set path is the pre-0084 status quo.
        expect(
            validateEditor(st({ ...base, stackMode: 'none', series: bars([{ stack: 'A' }, { stack: 'A' }]) }))
                .dataSource,
        ).toBeUndefined();
    });
});
