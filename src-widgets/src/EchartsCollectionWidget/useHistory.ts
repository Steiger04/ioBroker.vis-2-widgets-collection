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

import { fetchMultiSeries, rangeToOptions, type FetchedSeries, type IgnoreNull, type Point } from './historyLogic';

export interface UseHistoryEntry {
    oid: string;
    name?: string;
    /** Pinned history instance for this OID (ADR-0039); absent = Auto. */
    instance?: string;
}

export interface UseHistoryOptions {
    rangeMs: number;
    aggregate?: ioBroker.GetHistoryOptions['aggregate'];
    count?: number;
    step?: number;
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
    const [tick, setTick] = useState(0); // bump to force refresh
    const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const entriesKey = JSON.stringify(entries);
    const optsKey = JSON.stringify([opts.rangeMs, opts.aggregate, opts.count, opts.step, opts.ignoreNull]);

    // Fetch (debounced) on mount + whenever inputs change or refresh is forced.
    useEffect(() => {
        if (opts.enabled === false) {
            return;
        }
        let active = true;
        setLoading(true);

        const run = (): void => {
            const options = rangeToOptions(Date.now(), opts.rangeMs, opts);
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

    return { series, loading, error, refresh: () => setTick(t => t + 1) };
}
