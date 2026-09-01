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
