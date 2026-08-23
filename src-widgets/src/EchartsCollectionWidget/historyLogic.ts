/**
 * Pure, backend-free history logic for the echarts widget.
 *
 * @module EchartsCollectionWidget/historyLogic
 * @remarks
 * Isolated so it can be unit-driven through the tricky cases (null/gap handling,
 * range→options math, multi-series fetch + per-series error isolation) without a live
 * ioBroker.
 *
 * Per map decision 02:
 *  - result entries are `{ ts (ms epoch), val }`; mapped to echarts `[ts, val]` for a time axis.
 *  - non-numeric `val` → null (clean gaps); `ignoreNull` toggles keep / forward-fill / zero.
 *  - one `getHistory` per OID with identical start/end/count; `Promise.allSettled` isolates
 *    a failing OID instead of discarding every series.
 *  - `ts` is already Unix-ms — do NOT multiply by 1000.
 */

export type IgnoreNull = 'keep' | 'forward' | 'zero';

export interface Point {
    ts: number;
    val: ioBroker.StateValue | null;
}

/** echarts time-series point: `[ms epoch, value | null]`. */
export type SeriesPoint = [number, number | null];

type Aggregate = ioBroker.GetHistoryOptions['aggregate'];

export interface RangeOptionsInput {
    aggregate?: Aggregate;
    count?: number;
    step?: number;
    instance?: string;
}

/**
 * Build {@link ioBroker.GetHistoryOptions} from a relative range ending at `now`.
 *
 * @param now - Range end as ms epoch.
 * @param rangeMs - Range length in ms.
 * @param opts - Optional aggregate / count / step / instance overrides.
 */
export function rangeToOptions(now: number, rangeMs: number, opts: RangeOptionsInput = {}): ioBroker.GetHistoryOptions {
    return {
        start: now - rangeMs,
        end: now,
        aggregate: opts.aggregate ?? 'average',
        count: opts.count ?? 500,
        ...(opts.step !== undefined ? { step: opts.step } : {}),
        ...(opts.instance ? { instance: opts.instance } : {}),
    };
}

/**
 * Coerce a raw state value to a plottable number, else null — the ONE intake rule every value
 * source shares (booleans → 1/0 so bool OIDs plot, ADR-0058; the state texts map them at format
 * time). Takes `unknown`: the callers' value maps are untyped at the edges.
 */
export function toPlottableNumber(val: unknown): number | null {
    if (typeof val === 'boolean') {
        return val ? 1 : 0;
    }
    return typeof val === 'number' && Number.isFinite(val) ? val : null;
}

/**
 * Transform a history result into echarts series data, applying gap handling.
 *
 * @param points - Raw history entries.
 * @param ignoreNull - How to handle null/non-numeric gaps.
 */
export function toSeriesData(points: Point[], ignoreNull: IgnoreNull = 'keep'): SeriesPoint[] {
    const out: SeriesPoint[] = [];
    let last: number | null = null;
    for (const p of points) {
        let v = toPlottableNumber(p.val);
        if (v === null) {
            if (ignoreNull === 'forward') {
                v = last; // carry last known value forward
            } else if (ignoreNull === 'zero') {
                v = 0;
            }
        } else {
            last = v;
        }
        out.push([p.ts, v]);
    }
    return out;
}

export interface HistoryEntry {
    oid: string;
    name?: string;
    /** Pinned history instance for THIS OID (ADR-0039); absent = Auto (datapoint config, else server). */
    instance?: string;
    /**
     * This series' request-window shift in ms (adapter `offset` in seconds, ADR-0059) — shifts
     * the getHistory start/end so time-shifted recordings overlap; absent/0 = the shared window.
     */
    offsetMs?: number;
    /**
     * This series' NULL handling (ADR-0059) — overrides the chart-level `ignoreNull` argument
     * for this entry's data; absent = inherit the chart-level setting.
     */
    ignoreNull?: IgnoreNull;
}

export interface FetchedSeries {
    name: string;
    data: SeriesPoint[];
    error?: string;
}

/**
 * Fetch + transform multiple OIDs in parallel. `Promise.allSettled` so one failing OID
 * doesn't discard the others — a failed series becomes `{ data: [], error }`. An entry's
 * pinned `instance` (ADR-0039) overrides the base options' for that OID only; its
 * `offsetMs` shifts that OID's start/end (ADR-0059) and its `ignoreNull` overrides the
 * chart-level gap handling.
 */
export async function fetchMultiSeries(
    getHistory: (id: string, options: ioBroker.GetHistoryOptions) => Promise<Point[]>,
    entries: HistoryEntry[],
    options: ioBroker.GetHistoryOptions,
    ignoreNull: IgnoreNull = 'keep',
): Promise<FetchedSeries[]> {
    const results = await Promise.allSettled(
        entries.map(e => {
            // Per-entry request overrides (ADR-0039 instance; ADR-0059 window shift): only the
            // keys this entry authors diverge from the shared options. The shift SUBTRACTS —
            // the adapter's `addTime` moves the window by −offset·1000, so a positive X-offset
            // shifts the series' window into the PAST (adapter parity, spec story 46).
            const perEntry: ioBroker.GetHistoryOptions = {
                ...options,
                ...(e.instance ? { instance: e.instance } : {}),
                ...(e.offsetMs
                    ? { start: (options.start ?? 0) - e.offsetMs, end: (options.end ?? 0) - e.offsetMs }
                    : {}),
            };
            return getHistory(e.oid, perEntry).then(pts => ({
                name: e.name ?? e.oid,
                pts,
            }));
        }),
    );
    return results.map((r, i) => {
        const name = entries[i].name ?? entries[i].oid;
        if (r.status === 'fulfilled') {
            return { name, data: toSeriesData(r.value.pts, entries[i].ignoreNull ?? ignoreNull) };
        }
        return { name, data: [], error: String(r.reason ?? 'history fetch failed') };
    });
}
