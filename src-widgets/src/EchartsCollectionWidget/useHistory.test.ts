/**
 * useHistory — the fetch-control behaviour (K5, resolving the ADR-0046 addendum's "no
 * renderHook infrastructure" gap): the 200 ms fetch debounce, refreshMs polling, the
 * active-guard race protection, and the bar category/request grid sync.
 *
 * @module EchartsCollectionWidget/useHistory.test
 * @remarks
 * Driven through the minimal {@link module:EchartsCollectionWidget/testHarness} with vitest
 * fake timers — the hook's timing IS the behaviour under test, so every assertion advances
 * the clock inside `act` and the fake `getHistory` resolves controlled points.
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { renderHook } from './testHarness';
import { makeBarPlan } from './barBuckets';
import { useHistory } from './useHistory';
import type { Point } from './historyLogic';

// A fixed static window keeps the tests clock-independent (the resolver parses the ISO pair).
const STATIC_WIN = {
    timeType: 'static' as const,
    staticStart: '2026-01-01T00:00',
    staticEnd: '2026-01-03T00:00',
};

const entry = (oid: string): { oid: string; name: string } => ({ oid, name: oid });

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('useHistory — fetch debounce (200 ms)', () => {
    it('does not fetch before the debounce elapses, then fetches once', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN }));
        await actAdvance(199);
        expect(getHistory).not.toHaveBeenCalled();
        await actAdvance(1);
        expect(getHistory).toHaveBeenCalledTimes(1);
        h.unmount();
    });

    it('an option change within the window coalesces — the NEW options fetch', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, count: 100 }));
        h.rerender(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, count: 200 }));
        await actAdvance(200);
        expect(getHistory).toHaveBeenCalledTimes(1);
        expect(getHistory.mock.calls[0]?.[1]?.count).toBe(200);
        h.unmount();
    });

    it('enabled: false never fetches', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, enabled: false }));
        await actAdvance(1000);
        expect(getHistory).not.toHaveBeenCalled();
        expect(h.result.current.loading).toBe(false);
        h.unmount();
    });
});

describe('useHistory — refreshMs polling', () => {
    it('re-fetches on every interval tick (each tick re-runs the 200 ms debounce)', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, refreshMs: 60_000 }));
        await actAdvance(200);
        expect(getHistory).toHaveBeenCalledTimes(1);
        // A tick schedules its fetch 200 ms LATER — advance the cycle in two steps (the fake
        // clock does not cascade timers scheduled mid-window).
        await actAdvance(60_000);
        expect(getHistory).toHaveBeenCalledTimes(1); // tick fired, debounce still pending
        await actAdvance(201);
        expect(getHistory).toHaveBeenCalledTimes(2);
        await actAdvance(60_000);
        await actAdvance(201);
        expect(getHistory).toHaveBeenCalledTimes(3);
        h.unmount();
    });

    it('the exposed refresh() forces the same debounced re-fetch', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN }));
        await actAdvance(200);
        act(() => {
            h.result.current.refresh();
        });
        expect(getHistory).toHaveBeenCalledTimes(1); // debounced — not immediate
        await actAdvance(200);
        expect(getHistory).toHaveBeenCalledTimes(2);
        h.unmount();
    });
});

describe('useHistory — the active-guard race', () => {
    it('a key change mid-flight discards the stale result', async () => {
        let resolveFirst!: (points: Point[]) => void;
        const getHistory = vi.fn().mockImplementation(
            () =>
                new Promise<Point[]>(res => {
                    resolveFirst = res;
                }),
        );
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN }));
        await actAdvance(200); // the first fetch is in flight
        // Key change (different entry) → the effect cleanup flips `active`…
        h.rerender(() => useHistory(getHistory, [entry('b.0')], { window: STATIC_WIN }));
        // …then the stale fetch resolves — its result must NOT land.
        await act(async () => {
            resolveFirst([{ ts: 1, val: 5 }]);
            await Promise.resolve();
        });
        expect(h.result.current.series).toEqual([]);
        h.unmount();
    });
});

describe('useHistory — per-OID error isolation (Promise.allSettled)', () => {
    it('a failing OID becomes an error entry; the others keep their data', async () => {
        const getHistory = vi
            .fn()
            .mockRejectedValueOnce(new Error('boom'))
            .mockResolvedValueOnce([{ ts: 1, val: 7 }]);
        const h = renderHook(() => useHistory(getHistory, [entry('a.0'), entry('b.0')], { window: STATIC_WIN }));
        await actAdvance(200);
        expect(h.result.current.series).toHaveLength(2);
        expect(h.result.current.series[0]?.error).toContain('boom');
        expect(h.result.current.series[0]?.data).toEqual([]);
        expect(h.result.current.series[1]?.data).toEqual([[1, 7]]);
        h.unmount();
    });
});

describe('useHistory — the bar plan rides the SAME fetch (ADR-0065, K4 seam)', () => {
    it('request window == render grid; the count is the (capped) bucket count', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const plan = makeBarPlan('1d', false, 10, {});
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, planFetch: plan }));
        await actAdvance(200);
        const extras = h.result.current.extras;
        // 2026-01-01..03 on a day grid → 2 buckets starting at the 1st (LOCAL midnight math).
        const cats = extras?.cats ?? [];
        expect(cats).toHaveLength(2);
        expect(new Date(cats[0]).getDate()).toBe(1);
        const req = getHistory.mock.calls[0]?.[1];
        expect(req?.start).toBe(extras?.cats[0]);
        expect(req?.end).toBe(extras?.end);
        expect(req?.count).toBe(2);
        expect(req).not.toHaveProperty('step');
        h.unmount();
    });

    it('the plan caps the bucket count at maxPoints (K3) — 15 m over 2 d, ceiling 3', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        // 2 days on a 15 m grid = 192 buckets; the ceiling caps the REQUEST at 3.
        const plan = makeBarPlan('15m', false, 3, {});
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, planFetch: plan }));
        await actAdvance(200);
        expect(getHistory.mock.calls[0]?.[1]?.count).toBe(3);
        h.unmount();
    });

    it('leaving the bucketed path clears the extras', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const plan = makeBarPlan('1d', false, undefined, {});
        const h = renderHook(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN, planFetch: plan }));
        await actAdvance(200);
        expect(h.result.current.extras).toBeDefined();
        h.rerender(() => useHistory(getHistory, [entry('a.0')], { window: STATIC_WIN }));
        await actAdvance(200);
        expect(h.result.current.extras).toBeUndefined();
        h.unmount();
    });
});

describe('useHistory — the DEFAULT plan applies the K3 step ceiling', () => {
    it('a too-fine step is raised to span/maxPoints against the resolved window', async () => {
        const getHistory = vi.fn().mockResolvedValue([]);
        const h = renderHook(() =>
            useHistory(getHistory, [entry('a.0')], {
                window: STATIC_WIN,
                step: 1000, // 1 s — absurdly fine for 2 days
                maxPoints: 100,
            }),
        );
        await actAdvance(200);
        const req = getHistory.mock.calls[0]?.[1];
        // 2 days / 100 points → ceil(172_800_000 ms / 100) = 1_728_000 ms per point.
        expect(req?.step).toBe(1_728_000);
        expect(req).not.toHaveProperty('count');
        h.unmount();
    });
});

/** Advance the fake clock inside `act` and flush the microtask queue (promise settles). */
async function actAdvance(ms: number): Promise<void> {
    await act(async () => {
        vi.advanceTimersByTime(ms);
        await Promise.resolve();
    });
}
