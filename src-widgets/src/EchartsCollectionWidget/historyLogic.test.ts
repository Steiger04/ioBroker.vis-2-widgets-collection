/**
 * Unit tests for the pure history logic (null/gap handling, range→options math,
 * multi-series fetch with per-series error isolation).
 *
 * @module EchartsCollectionWidget/historyLogic.test
 */
import { describe, expect, it } from 'vitest';
import { fetchMultiSeries, rangeToOptions, toSeriesData, type Point } from './historyLogic';

describe('toSeriesData', () => {
    it('maps {ts,val} to [ts, number]', () => {
        const pts: Point[] = [
            { ts: 1000, val: 5 },
            { ts: 2000, val: 6.5 },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1000, 5],
            [2000, 6.5],
        ]);
    });

    it('coerces non-numeric val (string / boolean / null) to null', () => {
        const pts: Point[] = [
            { ts: 1, val: 'x' },
            { ts: 2, val: true },
            { ts: 3, val: null },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1, null],
            [2, null],
            [3, null],
        ]);
    });

    it('keeps gaps as null by default (ignoreNull = keep)', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
            { ts: 3, val: 30 },
        ];
        expect(toSeriesData(pts)).toEqual([
            [1, 10],
            [2, null],
            [3, 30],
        ]);
    });

    it('forward-fills gaps from the last known value', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
            { ts: 3, val: null },
            { ts: 4, val: 40 },
        ];
        expect(toSeriesData(pts, 'forward')).toEqual([
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 40],
        ]);
    });

    it('forward-fill leaves leading nulls as null (no prior value)', () => {
        const pts: Point[] = [
            { ts: 1, val: null },
            { ts: 2, val: 20 },
        ];
        expect(toSeriesData(pts, 'forward')).toEqual([
            [1, null],
            [2, 20],
        ]);
    });

    it('zero-fills gaps', () => {
        const pts: Point[] = [
            { ts: 1, val: 10 },
            { ts: 2, val: null },
        ];
        expect(toSeriesData(pts, 'zero')).toEqual([
            [1, 10],
            [2, 0],
        ]);
    });

    it('passes ts through unchanged (already ms epoch — no ×1000)', () => {
        expect(toSeriesData([{ ts: 1700000000000, val: 1 }])).toEqual([[1700000000000, 1]]);
    });
});

describe('rangeToOptions', () => {
    it('computes start = now - rangeMs, end = now, with defaults', () => {
        const o = rangeToOptions(100000, 60000);
        expect(o.start).toBe(40000);
        expect(o.end).toBe(100000);
        expect(o.aggregate).toBe('average');
        expect(o.count).toBe(500);
        expect(o).not.toHaveProperty('step');
        expect(o).not.toHaveProperty('instance');
    });

    it('passes aggregate/count and omits step unless provided', () => {
        const o = rangeToOptions(0, 1000, { aggregate: 'minmax', count: 250 });
        expect(o.aggregate).toBe('minmax');
        expect(o.count).toBe(250);
        expect(o).not.toHaveProperty('step');
    });

    it('includes step and instance when provided', () => {
        const o = rangeToOptions(0, 1000, { step: 60000, instance: 'sql.0' });
        expect(o.step).toBe(60000);
        expect(o.instance).toBe('sql.0');
    });
});

describe('fetchMultiSeries', () => {
    it('fetches each OID in parallel and transforms to series', async () => {
        const gh = (id: string): Promise<Point[]> =>
            Promise.resolve(id === 'a' ? [{ ts: 1, val: 1 }] : [{ ts: 2, val: 2 }]);
        const out = await fetchMultiSeries(
            gh,
            [
                { oid: 'a', name: 'A' },
                { oid: 'b', name: 'B' },
            ],
            {
                start: 0,
                end: 10,
            },
        );
        expect(out).toEqual([
            { name: 'A', data: [[1, 1]] },
            { name: 'B', data: [[2, 2]] },
        ]);
    });

    it('isolates a failing OID (Promise.allSettled) — the other series survives', async () => {
        const gh = async (id: string): Promise<Point[]> =>
            id === 'a' ? [{ ts: 1, val: 1 }] : Promise.reject(new Error('boom'));
        const out = await fetchMultiSeries(gh, [{ oid: 'a' }, { oid: 'b' }], { start: 0, end: 10 });
        expect(out[0].data).toEqual([[1, 1]]);
        expect(out[1].data).toEqual([]);
        expect(out[1].error).toBeTruthy();
    });

    it('defaults a series name to its OID', async () => {
        const gh = (): Promise<Point[]> => Promise.resolve([]);
        const out = await fetchMultiSeries(gh, [{ oid: 'demo.0.x' }], { start: 0, end: 10 });
        expect(out[0].name).toBe('demo.0.x');
    });

    it("overrides the instance per entry (ADR-0039) — a pinned series routes, an Auto series doesn't", async () => {
        const seen: Record<string, ioBroker.GetHistoryOptions> = {};
        const gh = (id: string, options: ioBroker.GetHistoryOptions): Promise<Point[]> => {
            seen[id] = options;
            return Promise.resolve([]);
        };
        await fetchMultiSeries(gh, [{ oid: 'a', instance: 'sql.0' }, { oid: 'b' }], { start: 0, end: 10 });
        expect(seen.a.instance).toBe('sql.0');
        expect(seen.b).not.toHaveProperty('instance');
    });
});
