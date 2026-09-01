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
import { resolveTimeWindow, type TimeWindow, type TimeWindowSpec } from './timeWindow';

export interface UseHistoryEntry {
    oid: string;
    name?: string;
    /** Pinned history instance for this OID (ADR-0039); absent = Auto. */
    instance?: string;
}

/** One fetch's plan: the request options plus opaque companions the caller needs (K4). */
export interface FetchPlan<T = unknown> {
    options: ioBroker.GetHistoryOptions;
    /** Widget-specific companions of THIS fetch (the bar category grid) — opaque to the hook. */
    extras?: T;
}

/** Turns the RESOLVED window into the fetch plan — executed per fetch (ADR-0063 seam). */
export type PlanFetch<T = unknown> = (win: TimeWindow) => FetchPlan<T>;

export interface UseHistoryOptions<T = unknown> {
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
     * The fetch plan (K4, ADR-0065 addendum): turns the resolved window into the request
     * options + opaque extras from the SAME fetch (render and request can never drift).
     * Default: `windowToOptions` with the K3 step ceiling; bar bucketing injects
     * `makeBarPlan` (barBuckets.ts) — this hook stays free of bar knowledge. Callers hand a
     * STABLE reference (the effect re-fetches when the plan identity changes).
     */
    planFetch?: PlanFetch<T>;
    /**
     * Hard point ceiling per series (ADR-0046 addendum, K3) — the pipeline passes its own
     * `maxPoints` (preview 200, body 5000). Bounds the default plan's step (raised to
     * span/maxPoints, sanitizeStep); the bar plan caps its bucket count with it. 0/unset
     * disables the guard (tests drive it explicitly).
     */
    maxPoints?: number;
    /** 0 / undefined = no periodic refresh. */
    refreshMs?: number;
    ignoreNull?: IgnoreNull;
    enabled?: boolean;
}

export interface UseHistoryResult<T = unknown> {
    series: FetchedSeries[];
    loading: boolean;
    error: string | null;
    /** Force an immediate (debounced) re-fetch — e.g. when a subscribed value changes. */
    refresh: () => void;
    /** The LAST fetch's plan extras (K4) — e.g. the bar category grid; undefined when the plan carries none. */
    extras: T | undefined;
}

/**
 * The default fetch plan (K4): the plain window options with the K3 point ceiling applied to
 * a set step — the span is only known here, per resolved fetch (ADR-0063 seam).
 */
const defaultPlan =
    (opts: UseHistoryOptions): PlanFetch =>
    win => ({
        options: windowToOptions(win, {
            ...opts,
            step:
                opts.step !== undefined && opts.maxPoints
                    ? sanitizeStep(opts.step, win.end - win.start, opts.maxPoints)
                    : opts.step,
        }),
    });

/**
 * @param getHistory - ioBroker history fetcher (bound to the socket by the caller).
 * @param entries - OIDs (+ optional names) to fetch.
 * @param opts - Range / aggregate / refresh options.
 */
export function useHistory<T = unknown>(
    getHistory: (id: string, options: ioBroker.GetHistoryOptions) => Promise<Point[]>,
    entries: UseHistoryEntry[],
    opts: UseHistoryOptions<T>,
): UseHistoryResult<T> {
    const [series, setSeries] = useState<FetchedSeries[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [extras, setExtras] = useState<T | undefined>(undefined);
    const [tick, setTick] = useState(0); // bump to force refresh
    const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const entriesKey = JSON.stringify(entries);
    // The fetch-effect key: every request-shaping option must appear here or a change would not
    // refetch (ADR-0064 added the aggregate params; K3 added maxPoints — it shapes the default
    // plan's sanitized step). `planFetch` itself is NOT serializable — it rides the effect deps
    // by IDENTITY (callers memoize; a new plan is a new request by construction).
    const optsKey = JSON.stringify([
        opts.window,
        opts.aggregate,
        opts.count,
        opts.step,
        opts.ignoreNull,
        opts.percentile,
        opts.integralUnit,
        opts.integralInterpolation,
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
            // The PLAN owns the request shape (K4): the window resolves HERE (ADR-0063 — a
            // relative window travels with every fetch), the plan — the caller's or the
            // default — turns it into options + extras from the SAME fetch (no render/request
            // drift, ADR-0065).
            // The default plan carries no extras (unknown narrows to undefined) — cast is safe.
            const plan: PlanFetch<T> = opts.planFetch ?? (defaultPlan(opts) as PlanFetch<T>);
            const planned = plan(resolveTimeWindow(opts.window, Date.now()));
            setExtras(planned.extras);
            runFetch(planned.options);
        };

        clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(run, 200);

        return () => {
            active = false;
            clearTimeout(debounceRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getHistory, entriesKey, optsKey, opts.enabled, tick, opts.planFetch]);

    // Periodic refresh (polling) — the only live-refresh path (no push, per 02).
    useEffect(() => {
        if (!opts.refreshMs || opts.enabled === false) {
            return;
        }
        const h = setInterval(() => setTick(t => t + 1), opts.refreshMs);
        return () => clearInterval(h);
    }, [opts.refreshMs, opts.enabled]);

    return { series, loading, error, refresh: () => setTick(t => t + 1), extras };
}
