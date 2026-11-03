/**
 * Unit tests for the advisory validation engine (ADR-0010): {@link validateEditor} +
 * {@link familySwitchSnippetLoss} (ADR-0042). The boundary loss moved into the structure
 * events (ADR-0099 — `structureEvents.test.ts`).
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

import { DEFAULT_EDITOR_STATE, type EditorState } from './editorState';
import { familySwitchSnippetLoss, firstIssueTabOf, issueCountsByTab, tabOfIssue, validateEditor } from './validation';

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

describe('tab addressing (ADR-0073) — issue → section tab, purely from field placement', () => {
    it('tabOfIssue maps the placed issues; everything else addresses no tab', () => {
        expect(tabOfIssue({ key: 'echarts_val_yminmax' })).toBe('axes');
        expect(tabOfIssue({ key: 'echarts_val_vmap_range' })).toBe('scale');
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
        expect(firstIssueTabOf({ colors: [{ key: 'echarts_val_vmap_range' }] }, 'colors')).toBe('scale');
        expect(firstIssueTabOf({ series: [{ key: 'echarts_val_oid_missing' }] }, 'series')).toBeUndefined();
        expect(firstIssueTabOf({}, 'colors')).toBeUndefined();
        expect(firstIssueTabOf(undefined, 'colors')).toBeUndefined();
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
