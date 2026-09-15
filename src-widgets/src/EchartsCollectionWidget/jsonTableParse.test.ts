/**
 * Tests for the tabellarische parse engine (ADR-0075) — the rows/columns matrix: rows-array
 * resolution, the three X kinds (time sort/drop, category duplicates, index fallback), the
 * Y intake (toPlottableNumber, drift → null) and the error surface.
 *
 * @module EchartsCollectionWidget/jsonTableParse.test
 */
import { describe, expect, it } from 'vitest';

import { parseJsonTableState, resolveRows, type JsonTableYSeries } from './jsonTableParse';

const ys = (...paths: string[]): JsonTableYSeries[] => paths.map(yPath => ({ yPath }));

describe('resolveRows', () => {
    it('empty rowPath: a top-level array IS the rows', () => {
        expect(resolveRows([1, 2], undefined)).toEqual({ rows: [1, 2] });
        expect(resolveRows([1, 2], '')).toEqual({ rows: [1, 2] });
    });

    it('empty rowPath: a non-array document is the one hard error', () => {
        expect(resolveRows({ data: [1] })).toEqual({ error: 'payload is not a rows array' });
        expect(resolveRows('nope')).toEqual({ error: 'payload is not a rows array' });
    });

    it('a dot-path resolves to the nested array', () => {
        expect(resolveRows({ data: { rows: [1, 2] } }, 'data.rows')).toEqual({ rows: [1, 2] });
    });

    it('array-index segments resolve inside the path', () => {
        expect(resolveRows({ groups: [{ members: [1] }, { members: [2, 3] }] }, 'groups[1].members')).toEqual({
            rows: [2, 3],
        });
    });

    it('a missing path or a non-array target is an error', () => {
        expect(resolveRows({ data: {} }, 'data.rows')).toEqual({ error: 'rows path "data.rows" is not an array' });
        expect(resolveRows({ data: [1] }, 'gone.missing')).toEqual({
            error: 'rows path "gone.missing" is not an array',
        });
    });
});

describe('parseJsonTableState — intake', () => {
    it('empty raw is not an error (no payload yet ⇒ empty placeholder)', () => {
        expect(parseJsonTableState('', { ySeries: ys('temp') })).toEqual({ series: [], xKind: 'index' });
        expect(parseJsonTableState(undefined, { ySeries: ys('temp') })).toEqual({ series: [], xKind: 'index' });
    });

    it('invalid JSON surfaces the parse error', () => {
        const out = parseJsonTableState('{nope', { ySeries: ys('temp') });
        expect(out.error).toBeTruthy();
        expect(out.series).toEqual([]);
    });

    it('a drifted rowPath surfaces the rows error', () => {
        const out = parseJsonTableState('{"data":{"rows":[]}}', { rowPath: 'data.list', ySeries: ys('temp') });
        expect(out.error).toBe('rows path "data.list" is not an array');
    });

    it('missing yPaths are no error — empty/null series (editor validation owns that)', () => {
        const out = parseJsonTableState('[{"temp":1}]', { ySeries: [] });
        expect(out.error).toBeUndefined();
        expect(out.series).toEqual([]);
    });
});

describe('parseJsonTableState — time X', () => {
    const rows = (list: [string, number][]): string => JSON.stringify(list.map(([ts, temp]) => ({ ts, temp })));

    it('ISO date column: [ms, y] points, sorted ascending; names default to the last segment', () => {
        const out = parseJsonTableState(
            rows([
                ['2024-12-01T10:15:30Z', 20],
                ['2024-12-01T09:15:30Z', 19],
            ]),
            {
                xPath: 'ts',
                ySeries: ys('temp'),
            },
        );
        expect(out.xKind).toBe('time');
        const data = out.series[0]?.data as [number, number | null][];
        expect(data.map(p => p[1])).toEqual([19, 20]);
        expect(data[0]?.[0]).toBe(Date.parse('2024-12-01T09:15:30Z'));
        expect(out.series[0]?.name).toBe('temp');
    });

    it('stable sort: equal timestamps keep payload order', () => {
        const out = parseJsonTableState(
            rows([
                ['2024-12-01T10:00:00Z', 1],
                ['2024-12-01T09:00:00Z', 2],
                ['2024-12-01T10:00:00Z', 3],
            ]),
            {
                xPath: 'ts',
                ySeries: ys('temp'),
            },
        );
        expect((out.series[0]?.data as [number, number | null][]).map(p => p[1])).toEqual([2, 1, 3]);
    });

    it('epoch columns resolve: epoch-s ×1000, epoch-ms as-is', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { ts: 1_700_000_000, a: 1 },
                { ts: 1_700_000_000_000, a: 2 },
            ]),
            {
                xPath: 'ts',
                ySeries: ys('a'),
            },
        );
        expect(out.xKind).toBe('time');
        expect((out.series[0]?.data as [number, number | null][]).map(p => p[0])).toEqual([
            1_700_000_000_000, 1_700_000_000_000,
        ]);
    });

    it('rows whose X fails to parse are dropped entirely (no position)', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { ts: 'garbage', temp: 1 },
                { ts: '2024-12-01', temp: 2 },
            ]),
            { xPath: 'ts', ySeries: ys('temp') },
        );
        expect(out.series[0]?.data).toEqual([[new Date(2024, 11, 1).getTime(), 2]]);
    });

    it('nested column paths (array indices) resolve on both axes', () => {
        const out = parseJsonTableState(JSON.stringify([{ meta: { items: [{ price: 5 }] }, temp: 1 }]), {
            xPath: 'meta.items[0].price',
            ySeries: ys('temp'),
        });
        expect(out.xKind).toBe('category'); // small numbers are quantities, not timestamps
        expect(out.categories).toEqual(['5']);
        expect(out.series[0]?.data).toEqual([1]);
    });
});

describe('parseJsonTableState — category X', () => {
    it('string labels in payload order, duplicates kept (no dedup)', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { month: 'Jan', a: 1 },
                { month: 'Feb', a: 2 },
                { month: 'Jan', a: 3 },
            ]),
            { xPath: 'month', ySeries: ys('a') },
        );
        expect(out.xKind).toBe('category');
        expect(out.categories).toEqual(['Jan', 'Feb', 'Jan']);
        expect(out.series[0]?.data).toEqual([1, 2, 3]);
    });

    it('a number (non-epoch) column is a category — String-coerced labels', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { n: 1, a: 10 },
                { n: 2, a: 20 },
            ]),
            {
                xPath: 'n',
                ySeries: ys('a'),
            },
        );
        expect(out.xKind).toBe('category');
        expect(out.categories).toEqual(['1', '2']);
    });

    it('scattered null X values fall back to the row label; an all-null column degrades to index', () => {
        const scattered = parseJsonTableState(JSON.stringify([{ m: 'Jan', a: 1 }, { a: 2 }, { m: 'Feb', a: 3 }]), {
            xPath: 'm',
            ySeries: ys('a'),
        });
        expect(scattered.xKind).toBe('category');
        expect(scattered.categories).toEqual(['Jan', 'Zeile 2', 'Feb']);

        const empty = parseJsonTableState(JSON.stringify([{ a: 1 }, { a: 2 }]), { xPath: 'x', ySeries: ys('a') });
        expect(empty.xKind).toBe('index'); // a column without any non-null value
        expect(empty.categories).toEqual(['1', '2']);
    });

    it('a mixed date+string column is a time column (the detector confidence rule)', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { ts: '2024-12-02', a: 2 },
                { ts: 'later', a: 3 },
                { ts: '2024-12-01', a: 1 },
            ]),
            { xPath: 'ts', ySeries: ys('a') },
        );
        expect(out.xKind).toBe('time');
        expect((out.series[0]?.data as [number, number | null][]).map(p => p[1])).toEqual([1, 2]); // 'later' dropped
    });
});

describe('parseJsonTableState — index X', () => {
    it('no xPath: labels 1..n, data aligned per row', () => {
        const out = parseJsonTableState(JSON.stringify([{ a: 5 }, { a: 6 }, { a: 7 }]), { ySeries: ys('a') });
        expect(out.xKind).toBe('index');
        expect(out.categories).toEqual(['1', '2', '3']);
        expect(out.series[0]?.data).toEqual([5, 6, 7]);
    });
});

describe('parseJsonTableState — Y extraction', () => {
    it('drifted yPath yields null values (no error, series stays)', () => {
        const out = parseJsonTableState(JSON.stringify([{ temp: 1 }, { temp: 2 }]), {
            xPath: 'temp',
            ySeries: ys('gone'),
        });
        expect(out.error).toBeUndefined();
        expect(out.series[0]?.data).toEqual([null, null]);
    });

    it('boolean Y coerces to 1/0; unconvertible strings and objects are null gaps', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { on: true, s: 'x', o: { v: 1 } },
                { on: false, s: 'y', o: { v: 2 } },
            ]),
            { ySeries: ys('on', 's', 'o') },
        );
        expect(out.series[0]?.data).toEqual([1, 0]);
        expect(out.series[1]?.data).toEqual([null, null]);
        expect(out.series[2]?.data).toEqual([null, null]);
    });

    it('numeric-string Y parses through the shared intake — "23,5" → 23.5, "true" → 1, "12 Watt" → 12 (ADR-0077)', () => {
        const out = parseJsonTableState(JSON.stringify([{ t: '23,5', b: 'true', u: '12 Watt' }]), {
            ySeries: ys('t', 'b', 'u'),
        });
        expect(out.series[0]?.data).toEqual([23.5]);
        expect(out.series[1]?.data).toEqual([1]);
        expect(out.series[2]?.data).toEqual([12]);
    });

    it('a binding valueMap maps raw cells at the intake — a hit adopts, an empty target gaps (ticket 02)', () => {
        const out = parseJsonTableState(JSON.stringify([{ w: 'Sonne', s: 9999 }]), {
            ySeries: [
                { yPath: 'w', valueMap: { Sonne: 3 } },
                { yPath: 's', valueMap: { 9999: null } },
            ],
        });
        expect(out.series[0]?.data).toEqual([3]);
        expect(out.series[1]?.data).toEqual([null]);
    });

    it('nested yPath with array index resolves per row', () => {
        const out = parseJsonTableState(JSON.stringify([{ items: [{ price: 5 }] }, { items: [{ price: 6 }] }]), {
            ySeries: ys('items[0].price'),
        });
        expect(out.series[0]?.data).toEqual([5, 6]);
        expect(out.series[0]?.name).toBe('price'); // last path segment
    });

    it('an empty yPath renders an empty (all-null) series', () => {
        const out = parseJsonTableState(JSON.stringify([{ a: 1 }]), { ySeries: [{ yPath: '' }] });
        expect(out.series[0]?.data).toEqual([null]);
        expect(out.series[0]?.name).toBe('Series 1');
    });

    it('the authored name wins over the path default', () => {
        const out = parseJsonTableState(JSON.stringify([{ a: 1 }]), {
            ySeries: [{ yPath: 'a', name: 'Außen' }],
        });
        expect(out.series[0]?.name).toBe('Außen');
    });

    it('series order follows ySeries order (positional meta contract)', () => {
        const out = parseJsonTableState(JSON.stringify([{ a: 1, b: 2 }]), { ySeries: ys('b', 'a') });
        expect(out.series.map(s => s.name)).toEqual(['b', 'a']);
    });
});

describe('parseJsonTableState — sliceNames (ADR-0075 decision 5, the pie family)', () => {
    it('category X: the slice names ARE the per-row labels (duplicates kept)', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { month: 'Jan', a: 1 },
                { month: 'Feb', a: 2 },
                { month: 'Jan', a: 3 },
            ]),
            { xPath: 'month', ySeries: ys('a') },
        );
        expect(out.sliceNames).toEqual(['Jan', 'Feb', 'Jan']);
    });

    it('no usable X column: every row reads „Zeile n" (NOT the cartesian 1..n labels)', () => {
        const out = parseJsonTableState(JSON.stringify([{ a: 1 }, { a: 2 }]), { ySeries: ys('a') });
        expect(out.xKind).toBe('index');
        expect(out.categories).toEqual(['1', '2']); // the AXIS labels
        expect(out.sliceNames).toEqual(['Zeile 1', 'Zeile 2']); // the PIE names
    });

    it('time X: the payload OWN X text per KEPT row, in the sorted order', () => {
        const out = parseJsonTableState(
            JSON.stringify([
                { ts: '2024-12-02', a: 2 },
                { ts: '2024-12-01', a: 1 },
                { ts: 'later', a: 9 }, // dropped — no position
            ]),
            { xPath: 'ts', ySeries: ys('a') },
        );
        expect(out.sliceNames).toEqual(['2024-12-01', '2024-12-02']);
    });
});
