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
        expect(out.dataSource).toBe('1d · max · 500');
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
        expect(out.dataSource).toBe('1d · average · 500 · echarts_datasource_own_count:2');
    });

    it('JSON stays the bare digest (no acquisition, no counter)', () => {
        const out = sectionSummaries(state({ mode: 'json' }), t);
        expect(out.dataSource).toBe('JSON');
    });
});
