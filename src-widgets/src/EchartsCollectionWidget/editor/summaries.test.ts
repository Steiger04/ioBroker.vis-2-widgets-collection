/**
 * Unit tests for the section summary lines (ADR-0010) — pinned for the Data source's
 * Voreinstellungs role (ADR-0072): the digest keeps naming the chart DEFAULT, series with
 * their own aggregate-cluster overrides append a counter.
 *
 * @module EchartsCollectionWidget/editor/summaries.test
 */
import { describe, expect, it } from 'vitest';

import { sectionSummaries, type TFunc } from './summaries';
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
