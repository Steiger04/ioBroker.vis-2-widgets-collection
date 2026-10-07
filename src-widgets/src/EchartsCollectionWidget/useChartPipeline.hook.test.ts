/**
 * useChartPipeline — the HOOK composition over the adapter seam (K5): the Verlauf early
 * refresh. The pure branching has its own suite (`useChartPipeline.test.ts`); this file pins
 * the effect fabric the ADR-0046 addendum left to "the two call sites' behaviour": the mount
 * consumption of the first-values skip, the 1.5 s debounce over value changes, and the static
 * window's suppression of both refresh paths (ADR-0063 decision 4).
 *
 * @module EchartsCollectionWidget/useChartPipeline.hook.test
 * @remarks
 * The fake adapter mirrors the body adapter's contract: `useValues` is CONTENT-stabilised
 * (same reference until the values or the OID list change — otherwise every rerender would
 * fire the early-refresh effect and the test would pin nothing).
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { renderHook } from '../lib/testing/testHarness';
import { useChartPipeline, type ChartPipelineAdapter } from './useChartPipeline';
import type { ThemeTokens } from './echartsTheme';
import type { Point } from './historyLogic';

/** A content-stabilised values source (the body adapter's contract in miniature). */
const makeValuesSource = (): {
    box: { values: Record<string, unknown> };
    useValues: (oids: string[]) => Record<string, unknown>;
} => {
    const box: { values: Record<string, unknown> } = { values: {} };
    let cached: Record<string, unknown> = {};
    let key = '';
    const useValues = (oids: string[]): Record<string, unknown> => {
        const next = JSON.stringify([oids, box.values]);
        if (next !== key) {
            key = next;
            cached = Object.fromEntries(oids.map(o => [o, box.values[o]]));
        }
        return cached;
    };
    return { box, useValues };
};

const theme = {
    palette: ['#111'],
    themeTokens: {} as ThemeTokens,
    themeBase: {},
    themeDark: false,
};

const SRC: Record<string, unknown> = {
    chartType: 'line',
    mode: 'history',
    timeType: 'relative',
    timeRange: '1d',
    relativeEnd: 'now',
    count: 100,
    refreshMs: 60_000,
};

const COMPANIONS = {
    chartConfig: {},
    yAxes: [],
    markLines: [],
    jsonSeriesStyle: {},
    jsonHidden: [],
    series: [{ oid: 'a.0', name: 'A' }],
};

/** Advance the fake clock inside `act` and flush the microtask queue. */
async function actAdvance(ms: number): Promise<void> {
    await act(async () => {
        vi.advanceTimersByTime(ms);
        await Promise.resolve();
    });
}

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('useChartPipeline — Verlauf early refresh (ADR-0046 body behaviour, K5)', () => {
    it('the mount consumes the first-values skip; the FIRST change refetches after 1.5 s', async () => {
        const getHistory = vi.fn().mockResolvedValue([] as Point[]);
        const { box, useValues } = makeValuesSource();
        const adapter: ChartPipelineAdapter = { useValues, getHistory, theme };
        const usePipeline = (): ReturnType<typeof useChartPipeline> =>
            useChartPipeline(adapter, SRC, COMPANIONS, { earlyRefresh: true });
        const h = renderHook(usePipeline);
        await actAdvance(200); // the mount fetch
        expect(getHistory).toHaveBeenCalledTimes(1);
        box.values['a.0'] = 42;
        h.rerender(usePipeline);
        await actAdvance(1500);
        expect(getHistory).toHaveBeenCalledTimes(1); // tick fired, the fetch debounce pends
        await actAdvance(201);
        expect(getHistory).toHaveBeenCalledTimes(2);
        // No value change after that → no refetch loop (the ADR-0063 stability contract).
        await actAdvance(5000);
        expect(getHistory).toHaveBeenCalledTimes(2);
        h.unmount();
    });

    it('a second change within the window coalesces — one refetch, not two', async () => {
        const getHistory = vi.fn().mockResolvedValue([] as Point[]);
        const { box, useValues } = makeValuesSource();
        const adapter: ChartPipelineAdapter = { useValues, getHistory, theme };
        const usePipeline = (): ReturnType<typeof useChartPipeline> =>
            useChartPipeline(adapter, SRC, COMPANIONS, { earlyRefresh: true });
        const h = renderHook(usePipeline);
        await actAdvance(200);
        box.values['a.0'] = 42;
        h.rerender(usePipeline);
        await actAdvance(1000); // inside the first debounce window
        box.values['a.0'] = 43;
        h.rerender(usePipeline); // cleanup clears the first timer, a new one starts
        await actAdvance(500);
        expect(getHistory).toHaveBeenCalledTimes(1); // still waiting
        await actAdvance(1001); // the early-refresh timer fires → tick
        await actAdvance(201); // the fetch debounce
        expect(getHistory).toHaveBeenCalledTimes(2); // exactly one coalesced refetch
        h.unmount();
    });

    it('a STATIC window suppresses the early refresh AND the polling (ADR-0063 decision 4)', async () => {
        const getHistory = vi.fn().mockResolvedValue([] as Point[]);
        const { box, useValues } = makeValuesSource();
        const adapter: ChartPipelineAdapter = { useValues, getHistory, theme };
        const staticSrc: Record<string, unknown> = {
            ...SRC,
            timeType: 'static',
            staticStart: '2026-01-01T00:00',
            staticEnd: '2026-01-02T00:00',
        };
        const usePipeline = (): ReturnType<typeof useChartPipeline> =>
            useChartPipeline(adapter, staticSrc, COMPANIONS, { earlyRefresh: true });
        const h = renderHook(usePipeline);
        await actAdvance(200); // the one initial fetch a fixed span still deserves
        expect(getHistory).toHaveBeenCalledTimes(1);
        box.values['a.0'] = 42;
        h.rerender(usePipeline);
        // No early refresh, no refreshMs polling — a fixed window has nothing to follow.
        await actAdvance(60_000 + 201 + 1500);
        expect(getHistory).toHaveBeenCalledTimes(1);
        h.unmount();
    });
});

describe('useChartPipeline — per-series overrides ride the ONE seam (ADR-0072 preview/body parity)', () => {
    it('the hook fetches each series with ITS override — whatever caller mounted it', async () => {
        const calls: { id: string; options: ioBroker.GetHistoryOptions }[] = [];
        const getHistory = vi.fn((id: string, options: ioBroker.GetHistoryOptions) => {
            calls.push({ id, options });
            return Promise.resolve([] as Point[]);
        });
        const adapter: ChartPipelineAdapter = { useValues: makeValuesSource().useValues, getHistory, theme };
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { ...SRC, aggregate: 'average' },
                {
                    ...COMPANIONS,
                    series: [
                        { oid: 'a.0', name: 'A' }, // inherits average
                        { oid: 'b.0', name: 'B', aggregate: 'max' }, // own override
                        { oid: 'c.0', name: 'C', xOffset: '1m' }, // calendar window shift
                    ],
                },
            ),
        );
        await actAdvance(1000); // past the 200 ms fetch debounce
        const a = calls.find(c => c.id === 'a.0');
        const b = calls.find(c => c.id === 'b.0');
        const c = calls.find(c => c.id === 'c.0');
        expect(a?.options.aggregate).toBe('average');
        expect(b?.options.aggregate).toBe('max');
        // '1m' shifts the request window one calendar month back — resolved per fetch.
        expect(c?.options.start).toBeLessThan(a?.options.start ?? 0);
        expect(result.current.error).toBeNull();
    });
});

describe('useChartPipeline — JSON table family dispatch (ADR-0075)', () => {
    const makeJsonAdapter = (
        payload: unknown,
    ): { adapter: ChartPipelineAdapter; box: { values: Record<string, unknown> } } => {
        const { box, useValues } = makeValuesSource();
        box.values['js.0.payload'] = payload;
        return { adapter: { useValues, getHistory: vi.fn().mockResolvedValue([] as Point[]), theme }, box };
    };

    it("jsonKind 'table' reads the tabellarisch branch: yPath bindings, plain category data", async () => {
        const { adapter } = makeJsonAdapter(
            JSON.stringify([
                { m: 'Jan', a: 1 },
                { m: 'Feb', a: 2 },
            ]),
        );
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { chartType: 'bar', mode: 'json', jsonKind: 'table', jsonOid: 'js.0.payload', jsonXPath: 'm' },
                { ...COMPANIONS, series: [{ oid: '', name: 'A', yPath: 'a' }] },
            ),
        );
        await actAdvance(100);
        expect(result.current.error).toBeNull();
        expect(result.current.hasData).toBe(true);
        const s = (result.current.option.series as { name: string; data: unknown[] }[])[0];
        expect(s.name).toBe('A');
        expect(s.data).toEqual([1, 2]); // aligned to the category rows
    });

    it('a drifted rowPath is the error surface; the payload stays subscribed', async () => {
        const { adapter } = makeJsonAdapter('{"data":{"rows":[{"a":1}]}}');
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { chartType: 'line', mode: 'json', jsonKind: 'table', jsonOid: 'js.0.payload', jsonRowPath: 'gone' },
                { ...COMPANIONS, series: [{ oid: '', name: 'A', yPath: 'a' }] },
            ),
        );
        await actAdvance(100);
        expect(result.current.error).toBe('rows path "gone" is not an array');
        expect(result.current.hasData).toBe(false);
    });

    it('an UNSET yPath column renders an empty series — no error (decision 9)', async () => {
        const { adapter } = makeJsonAdapter(JSON.stringify([{ a: 1 }, { a: 2 }]));
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { chartType: 'line', mode: 'json', jsonKind: 'table', jsonOid: 'js.0.payload' },
                { ...COMPANIONS, series: [{ oid: '', name: 'A' }] }, // no yPath authored yet
            ),
        );
        await actAdvance(100);
        expect(result.current.error).toBeNull();
        expect((result.current.option.series as { data: unknown[] }[])[0]?.data).toEqual([null, null]);
    });

    it('jsonKind UNDEFINED stays the series-shaped family byte-stable (existing widgets)', async () => {
        const { adapter } = makeJsonAdapter('{"series":[{"name":"S","data":[[1,2]]}]}');
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { chartType: 'line', mode: 'json', jsonOid: 'js.0.payload' }, // no jsonKind stored
                COMPANIONS,
            ),
        );
        await actAdvance(100);
        expect(result.current.error).toBeNull();
        expect(result.current.hasData).toBe(true);
        expect((result.current.option.series as { name: string; data: unknown[] }[])[0]?.data).toEqual([[1, 2]]);
    });
});

describe('useChartPipeline — JSON NULL-Behandlung (the toter-Regler fix: Erben-Override effective resolution)', () => {
    it('series-shaped: the overlay override beats the chart-level setting; unlisted names inherit it', async () => {
        const { box, useValues } = makeValuesSource();
        box.values['js.0.payload'] = JSON.stringify({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [2, 'x'],
                        [3, 3],
                    ],
                }, // override forward
                {
                    name: 'B',
                    data: [
                        [1, 5],
                        [2, 'x'],
                        [3, 7],
                    ],
                }, // inherits chart zero
            ],
        });
        const adapter: ChartPipelineAdapter = {
            useValues,
            getHistory: vi.fn().mockResolvedValue([] as Point[]),
            theme,
        };
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                { chartType: 'line', mode: 'json', jsonOid: 'js.0.payload', ignoreNull: 'zero' },
                { ...COMPANIONS, jsonSeriesStyle: { A: { nullMode: 'forward' } } },
            ),
        );
        await actAdvance(100);
        const series = result.current.option.series as { name: string; data: unknown[] }[];
        expect(series[0]?.data).toEqual([
            [1, 1],
            [2, 1],
            [3, 3],
        ]); // forward carries 1
        expect(series[1]?.data).toEqual([
            [1, 5],
            [2, 0],
            [3, 7],
        ]); // chart zero inherits
    });

    it('table: a binding inherits the chart-level setting through the positional meta', async () => {
        const { box, useValues } = makeValuesSource();
        box.values['js.0.payload'] = JSON.stringify([
            { m: 'Jan', a: 1 },
            { m: 'Feb', a: 'x' },
            { m: 'Mar', a: 3 },
        ]);
        const adapter: ChartPipelineAdapter = {
            useValues,
            getHistory: vi.fn().mockResolvedValue([] as Point[]),
            theme,
        };
        const { result } = renderHook(() =>
            useChartPipeline(
                adapter,
                {
                    chartType: 'bar',
                    mode: 'json',
                    jsonKind: 'table',
                    jsonOid: 'js.0.payload',
                    jsonXPath: 'm',
                    ignoreNull: 'forward',
                },
                { ...COMPANIONS, series: [{ oid: '', name: 'A', yPath: 'a' }] },
            ),
        );
        await actAdvance(100);
        const series = result.current.option.series as { name: string; data: unknown[] }[];
        expect(series[0]?.data).toEqual([1, 1, 3]); // forward carries 1 over the gap
    });

    it('absent chart setting stays keep — byte-stable for every existing JSON widget', async () => {
        const { box, useValues } = makeValuesSource();
        box.values['js.0.payload'] = JSON.stringify({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 1],
                        [2, 'x'],
                        [3, 3],
                    ],
                },
            ],
        });
        const adapter: ChartPipelineAdapter = {
            useValues,
            getHistory: vi.fn().mockResolvedValue([] as Point[]),
            theme,
        };
        const { result } = renderHook(() =>
            useChartPipeline(adapter, { chartType: 'line', mode: 'json', jsonOid: 'js.0.payload' }, COMPANIONS),
        );
        await actAdvance(100);
        const series = result.current.option.series as { name: string; data: unknown[] }[];
        expect(series[0]?.data).toEqual([
            [1, 1],
            [2, null],
            [3, 3],
        ]);
    });
});
