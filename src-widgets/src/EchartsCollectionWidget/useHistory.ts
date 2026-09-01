/**
 * useHistory — fetches ioBroker history for one or more OIDs and returns echarts-ready
 * series. Composes the pure logic in {@link module:EchartsCollectionWidget/historyLogic}.
 *
 * @module EchartsCollectionWidget/useHistory
 * @remarks
 * Strategy (per map decision 02): full fetch on mount + on range/oid/aggregate change
 * (debounced), optional periodic refresh (`refreshMs`), and an exposed `refresh()` for an
 * early debounced re-fetch driven by the widget body when live values change. No push path
 * exists on the socket, so polling is the only live-refresh mechanism.
 *
 * `getHistory` is passed explicitly (rather than read from CollectionContext) so the hook is
 * portable and its shape is validated independent of the runtime socket; the widget body
 * binds `context.socket.getHistory`.
 */
import { useEffect, useRef, useState } from 'react';

import {
    fetchMultiSeries,
    sanitizeStep,
    windowToOptions,
    type FetchedSeries,
    type IgnoreNull,
    type Point,
} from './historyLogic';
import { resolveTimeWindow, type TimeWindowSpec } from './timeWindow';
import { barBucketCategories, widenBarWindow } from './barBuckets';

export interface UseHistoryEntry {
    oid: string;
    name?: string;
    /** Pinned history instance for this OID (ADR-0039); absent = Auto. */
    instance?: string;
}

export interface UseHistoryOptions {
    /** The authored window SPEC (ADR-0063) — resolved per fetch, so a relative window travels with each poll while the effect key stays stable. */
    window: TimeWindowSpec;
    aggregate?: ioBroker.GetHistoryOptions['aggregate'];
    count?: number;
    step?: number;
    /** Percentile level — flows to windowToOptions (emitted only under aggregate 'percentile', ADR-0064). */
    percentile?: number;
    /** Integral unit in seconds — emitted only under aggregate 'integral' (ADR-0064). */
    integralUnit?: number;
    /** Integral interpolation — emitted only under aggregate 'integral' (ADR-0064). */
    integralInterpolation?: 'none' | 'linear';
    /**
     * Bar bucketing (ADR-0065): the resolved interval in MINUTES. Set ⇒ the window is widened
     * onto the bucket grid per fetch (floor/ceil + the diff's extra left bucket) and the
     * request carries the bucket COUNT (replacing count/step). The hook exposes the category
     * grid it fetched for, so render and request can never drift apart.
     */
    barIntervalMinutes?: number;
    /** Bar diff post-processing (ADR-0065) — widens one extra bucket left. */
    barDiff?: boolean;
    /**
     * Hard point ceiling per series (ADR-0046 addendum, K3) — the pipeline passes its own
     * `maxPoints` (preview 200, body 5000). Bounds EVERY resolution path: a set step is raised
     * to span/maxPoints (sanitizeStep) and the bar bucket count is capped; a ceiling of 0/unset
     * disables the guard (tests drive it explicitly).
     */
    maxPoints?: number;
    /** 0 / undefined = no periodic refresh. */
    refreshMs?: number;
    ignoreNull?: IgnoreNull;
    enabled?: boolean;
}

export interface UseHistoryResult {
    series: FetchedSeries[];
    loading: boolean;
    error: string | null;
    /** Force an immediate (debounced) re-fetch — e.g. when a subscribed value changes. */
    refresh: () => void;
    /** The bar category grid of the LAST fetch (ADR-0065); null when not bucketing. */
    barCategories: number[] | null;
    /** The bucketed fetch window's exclusive end (the last bucket extends to it). */
    barWindowEnd: number | null;
}

/**
 * @param getHistory - ioBroker history fetcher (bound to the socket by the caller).
 * @param entries - OIDs (+ optional names) to fetch.
 * @param opts - Range / aggregate / refresh options.
 */
export function useHistory(
    getHistory: (id: string, options: ioBroker.GetHistoryOptions) => Promise<Point[]>,
    entries: UseHistoryEntry[],
    opts: UseHistoryOptions,
): UseHistoryResult {
    const [series, setSeries] = useState<FetchedSeries[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [barCategories, setBarCategories] = useState<number[] | null>(null);
    const [barWindowEnd, setBarWindowEnd] = useState<number | null>(null);
    const [tick, setTick] = useState(0); // bump to force refresh
    const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const entriesKey = JSON.stringify(entries);
    // The fetch-effect key: every request-shaping option must appear here or a change would not
    // refetch (ADR-0064 added the aggregate params to the set; K3 added maxPoints — it shapes
    // the sanitized step and the capped bucket count).
    const optsKey = JSON.stringify([
        opts.window,
        opts.aggregate,
        opts.count,
        opts.step,
        opts.ignoreNull,
        opts.percentile,
        opts.integralUnit,
        opts.integralInterpolation,
        opts.barIntervalMinutes,
        opts.barDiff,
        opts.maxPoints,
    ]);

    // Fetch (debounced) on mount + whenever inputs change or refresh is forced.
    useEffect(() => {
        if (opts.enabled === false) {
            return;
        }
        let active = true;
        setLoading(true);

        const run = (): void => {
            /** One fetch with the given request options (shared by both paths below). */
            const runFetch = (options: ioBroker.GetHistoryOptions): void => {
                fetchMultiSeries(getHistory, entries, options, opts.ignoreNull ?? 'keep')
                    .then(s => {
                        if (active) {
                            setSeries(s);
                            setError(null);
                        }
                    })
                    .catch(e => {
                        if (active) {
                            setError(String(e ?? 'history fetch failed'));
                        }
                    })
                    .finally(() => {
                        if (active) {
                            setLoading(false);
                        }
                    });
            };
            // Bar buckets (ADR-0065): widen the per-fetch window onto the grid; the bucket
            // count IS the request resolution (count/step are replaced). The categories are
            // captured from THIS fetch so render and request cannot drift. The request count
            // is capped at maxPoints (K3): a stored interval the range filter no longer shows
            // stays active (ADR-0065 decision 5), so 15 m over 2 y ≈ 70 080 — the category
            // GRID is untouched, only the request volume is bounded.
            if (opts.barIntervalMinutes) {
                const resolved = resolveTimeWindow(opts.window, Date.now());
                const widened = widenBarWindow(resolved.start, resolved.end, opts.barIntervalMinutes, !!opts.barDiff);
                setBarCategories(barBucketCategories(widened.start, widened.end, opts.barIntervalMinutes));
                setBarWindowEnd(widened.end);
                runFetch(
                    windowToOptions(
                        { start: widened.start, end: widened.end },
                        {
                            ...opts,
                            count: opts.maxPoints ? Math.min(widened.count, opts.maxPoints) : widened.count,
                            step: undefined,
                        },
                    ),
                );
                return;
            }
            setBarCategories(null);
            setBarWindowEnd(null);
            // Point ceiling on the step path (K3): raise a too-fine step to span/maxPoints —
            // resolved HERE because the span is only known per fetch (ADR-0063 seam).
            const plain = resolveTimeWindow(opts.window, Date.now());
            runFetch(
                windowToOptions(plain, {
                    ...opts,
                    step:
                        opts.step !== undefined && opts.maxPoints
                            ? sanitizeStep(opts.step, plain.end - plain.start, opts.maxPoints)
                            : opts.step,
                }),
            );
        };

        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(run, 200);

        return () => {
            active = false;
            clearTimeout(debounceRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getHistory, entriesKey, optsKey, opts.enabled, tick]);

    // Periodic refresh (polling) — the only live-refresh path (no push, per 02).
    useEffect(() => {
        if (!opts.refreshMs || opts.enabled === false) {
            return;
        }
        const h = setInterval(() => setTick(t => t + 1), opts.refreshMs);
        return () => clearInterval(h);
    }, [opts.refreshMs, opts.enabled]);

    return { series, loading, error, refresh: () => setTick(t => t + 1), barCategories, barWindowEnd };
}
