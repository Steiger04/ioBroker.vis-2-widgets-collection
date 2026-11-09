/**
 * Unit tests for the section summary lines (ADR-0010) — pinned for the Data source's
 * Voreinstellungs role (ADR-0072): the digest keeps naming the chart DEFAULT, series with
 * their own aggregate-cluster overrides append a counter.
 *
 * @module EchartsCollectionWidget/editor/summaries.test
 */
import { describe, expect, it, vi } from 'vitest';

// DOM pool since ADR-0083: this suite transitively loads the family profiles' section
// modules — they pull the adapter-react barrel (FileBrowser → icons — the focusTabs stub).
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import { issueCountLabel, previewHeaderMeta, sectionSummaries, type TFunc } from './summaries';
import { DEFAULT_EDITOR_STATE } from './editorState';

/** The identity t with argument appending — a counter key surfaces its count visibly. */
const t: TFunc = (key, ...args) => (args.length ? `${key}:${args.join(',')}` : key);

const state = (over: Partial<typeof DEFAULT_EDITOR_STATE> = {}): typeof DEFAULT_EDITOR_STATE => ({
    ...DEFAULT_EDITOR_STATE,
    ...over,
});

describe('sectionSummaries — Data source Voreinstellung digest (ADR-0072)', () => {
    it('history names the chart default: range · aggregate · count', () => {
        const out = sectionSummaries(state({ mode: 'history', timeRange: '1d', aggregate: 'max', count: 500 }), t);
        expect(out.dataSource).toBe('1d · echarts_agg_max · 500');
    });

    it('series with aggregate-cluster overrides append the own counter; inheriting series do not', () => {
        const out = sectionSummaries(
            state({
                mode: 'history',
                timeRange: '1d',
                aggregate: 'average',
                count: 500,
                series: [
                    { oid: 'a.0', name: 'A' }, // pure inherit — not counted
                    { oid: 'b.0', name: 'B', aggregate: 'max' },
                    { oid: 'c.0', name: 'C', percentileValue: 90 }, // param-only override counts
                ] as never,
            }),
            t,
        );
        expect(out.dataSource).toBe('1d · echarts_agg_average · 500 · echarts_datasource_own_count:2');
    });

    it('JSON stays the bare digest (no acquisition, no counter)', () => {
        const out = sectionSummaries(state({ mode: 'json' }), t);
        expect(out.dataSource).toBe('JSON');
    });
});

describe('sectionSummaries — tabellarisch data source (ADR-0075 ticket 07)', () => {
    it('json-table digests family · bound series count · the X column', () => {
        const sum = sectionSummaries(
            state({
                mode: 'json',
                jsonKind: 'table',
                jsonXPath: 'ts',
                series: [
                    { oid: '', yPath: 'a', id: 's0' },
                    { oid: '', yPath: 'b', id: 's1' },
                    { oid: '', yPath: 'c', id: 's2' },
                ],
            }),
            k => k,
        );
        expect(sum.dataSource).toBe('echarts_json_kind_table · 3 echarts_series · X: ts');
    });

    it('an unset X column omits the X segment; only yPath-bound series count', () => {
        const sum = sectionSummaries(
            state({
                mode: 'json',
                jsonKind: 'table',
                series: [{ oid: '', id: 's0' }], // no yPath yet — the Leerfall
            }),
            k => k,
        );
        expect(sum.dataSource).toBe('echarts_json_kind_table · 0 echarts_series');
    });

    it('serien-förmig keeps the bare JSON digest', () => {
        const sum = sectionSummaries(state({ mode: 'json' }), k => k);
        expect(sum.dataSource).toBe('JSON');
    });
});

describe('sectionSummaries — readable digests (B8, review 2026-11-03)', () => {
    it('Series counts the visible series of the data path', () => {
        const hist = sectionSummaries(
            state({ mode: 'history', series: [{ oid: 'a.0' }, { oid: 'b.0' }, { oid: 'c.0' }] as never }),
            t,
        );
        expect(hist.series).toBe('echarts_sum_series:3');
        const one = sectionSummaries(state({ mode: 'history', series: [{ oid: 'a.0' }] as never }), t);
        expect(one.series).toBe('echarts_sum_series_one');
        // serien-förmig JSON: the payload owns the series — names minus the hidden ones
        const json = sectionSummaries(state({ mode: 'json', jsonHidden: ['B'] }), t, ['A', 'B', 'C']);
        expect(json.series).toBe('echarts_sum_series:2');
    });

    it('Title shows the shortened text, or „off" without one', () => {
        expect(sectionSummaries(state({ titleText: 'Leistung Wechselrichter Süd-Dach' }), t).title).toBe(
            'Leistung Wechselrichter…',
        );
        expect(sectionSummaries(state({ titleText: '  ' }), t).title).toBe('echarts_sum_off');
    });

    it('Behaviour names the animation switch and the renderer by its label', () => {
        expect(sectionSummaries(state({ animation: false, renderer: 'canvas' }), t).behavior).toBe(
            'echarts_sum_animation_off · echarts_renderer_canvas',
        );
        expect(sectionSummaries(state({ animation: true, animationDuration: 800, renderer: 'svg' }), t).behavior).toBe(
            'echarts_sum_animation:800 · echarts_renderer_svg',
        );
    });
});

describe('previewHeaderMeta — the preview header digest', () => {
    it('counts the configured series of the table family — the payload names are no series there', () => {
        // Regression: a table with one mapped series read „0 Serien" (the JSON-name count).
        const table = state({
            mode: 'json',
            jsonKind: 'table',
            renderer: 'canvas',
            series: [{ id: 's1', oid: '', yPath: 'temp' }],
        });
        expect(previewHeaderMeta(table, [], t)).toBe(
            'echarts_sum_series_one · echarts_mode_json · echarts_renderer_canvas',
        );
    });

    it('counts the visible payload names of serien-förmig JSON and the series of the history mode', () => {
        const json = state({ mode: 'json', renderer: 'svg' });
        expect(previewHeaderMeta(json, ['A', 'B'], t)).toBe(
            'echarts_sum_series:2 · echarts_mode_json · echarts_renderer_svg',
        );
        const history = state({ mode: 'history', renderer: 'canvas', series: [] });
        expect(previewHeaderMeta(history, ['ignored'], t)).toBe(
            'echarts_sum_series:0 · echarts_mode_history · echarts_renderer_canvas',
        );
    });
});

describe('issueCountLabel — the problems counter of the modal footer', () => {
    it('uses the singular form for exactly one problem', () => {
        expect(issueCountLabel(1, t)).toBe('theme_studio_problems_one');
        expect(issueCountLabel(3, t)).toBe('theme_studio_problems:3');
    });
});
