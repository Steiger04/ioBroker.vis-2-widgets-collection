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
 *  - unconvertible `val` → null (clean gaps); string values interpret first (ADR-0077);
 *    `ignoreNull` toggles keep / forward-fill / zero.
 *  - one `getHistory` per OID with identical start/end/count; `Promise.allSettled` isolates
 *    a failing OID instead of discarding every series.
 *  - `ts` is already Unix-ms — do NOT multiply by 1000.
 */

import type { EchartsOffsetKey } from '../types/field-definitions/echarts-fields';

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
    /** Percentile level 0–100 — emitted ONLY under aggregate 'percentile' (ADR-0064). */
    percentile?: number;
    /** Integral unit in seconds — emitted ONLY under aggregate 'integral' (ADR-0064). */
    integralUnit?: number;
    /** Integral interpolation — emitted ONLY under aggregate 'integral' (ADR-0064). */
    integralInterpolation?: 'none' | 'linear';
}

/**
 * Build {@link ioBroker.GetHistoryOptions} from a relative range ending at `now`.
 *
 * @param win - The RESOLVED window (`resolveTimeWindow` owns the semantics).
 * @param win.start - Window start as ms epoch.
 * @param win.end - Window end as ms epoch.
 * @param opts - Optional aggregate / count / step / instance overrides.
 */
export function windowToOptions(
    win: { start: number; end: number },
    opts: RangeOptionsInput = {},
): ioBroker.GetHistoryOptions {
    return {
        start: win.start,
        end: win.end,
        aggregate: opts.aggregate ?? 'average',
        // ADR-0064: a set step REPLACES count (ioBroker's contract says count is ignored when
        // step is set — we omit the dead key instead of trusting the server to ignore it).
        ...(opts.step !== undefined ? { step: opts.step } : { count: opts.count ?? 500 }),
        ...(opts.instance ? { instance: opts.instance } : {}),
        // Aggregate params ride ONLY under their aggregate — a percentile key on an average
        // request would be a lie (sparse, ADR-0064).
        ...(opts.aggregate === 'percentile' && opts.percentile !== undefined ? { percentile: opts.percentile } : {}),
        ...(opts.aggregate === 'integral' && opts.integralUnit !== undefined
            ? { integralUnit: opts.integralUnit }
            : {}),
        ...(opts.aggregate === 'integral' && opts.integralInterpolation
            ? { integralInterpolation: opts.integralInterpolation }
            : {}),
    };
}

/**
 * Keep the point ceiling (ADR-0046) effective on the step path (K3): a step finer than
 * `span/maxPoints` would request more points than the ceiling allows (1 s over 30 d ≈ 2.6 M).
 * Returns the coarsest step that still fits — `Math.ceil`, so the ceiling is never exceeded.
 */
export const sanitizeStep = (step: number, spanMs: number, maxPoints: number): number =>
    Math.max(step, Math.ceil(spanMs / Math.max(maxPoints, 1)));

/**
 * Coerce a raw state value to a plottable number, else null — the ONE intake rule every value
 * source shares (booleans → 1/0 so bool OIDs plot, ADR-0058; the state texts map them at format
 * time). Strings interpret too (ADR-0077): bool texts FIRST, then a parseFloat PREFIX with
 * comma-decimal repair — anything unconvertible is a GAP, never 0. Takes `unknown`: the callers'
 * value maps are untyped at the edges.
 */
export function toPlottableNumber(val: unknown): number | null {
    if (typeof val === 'boolean') {
        return val ? 1 : 0;
    }
    if (typeof val === 'number') {
        return Number.isFinite(val) ? val : null;
    }
    if (typeof val === 'string') {
        const s = val.trim();
        // Bool texts BEFORE parseFloat — parseFloat would drop them to NaN.
        if (s === 'true') {
            return 1;
        }
        if (s === 'false') {
            return 0;
        }
        // A comma WITHOUT a dot is a comma decimal ('23,5' → 23.5). A dot means the string is
        // already dot-decimal, so '1.234,5' parses as 1.234 — thousands separators stay
        // unsupported (visibly wrong rather than silently healed, ADR-0077).
        const normalized = s.includes(',') && !s.includes('.') ? s.replace(/,/g, '.') : s;
        // Prefix parse: '23.5 °C' → 23.5, '12 Watt' → 12; NaN (and ±Infinity) → null.
        const n = parseFloat(normalized);
        return Number.isFinite(n) ? n : null;
    }
    return null;
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
     * This series' request-window shift as SPEC (ADR-0059 numeric seconds, ADR-0072 calendar
     * keys): numeric values shift start/end by −offset·1000 ms, {@link EchartsOffsetKey} values
     * resolve PER FETCH via setMonth/setFullYear against the resolved window (adapter `addTime`
     * parity — the caller must NOT precompute static ms for the keys, a relative window's
     * resolved bounds move every fetch). Absent/0 = the shared window.
     */
    xOffset?: number | EchartsOffsetKey;
    /**
     * This series' aggregate override (ADR-0072) — reshapes THIS entry's request; absent =
     * inherit the shared options' aggregate.
     */
    aggregate?: Aggregate;
    /** Percentile level — emitted only under this entry's effective 'percentile' aggregate (ADR-0072). */
    percentile?: number;
    /** Integral unit in seconds — emitted only under this entry's effective 'integral' aggregate (ADR-0072). */
    integralUnit?: number;
    /** Integral interpolation — emitted only under this entry's effective 'integral' aggregate (ADR-0072). */
    integralInterpolation?: 'none' | 'linear';
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
 * The adapter's `addTime` calendar arithmetic (src-chart/ChartModel.ts, ADR-0072 parity): 'm'
 * keys subtract months, 'y' keys subtract years — both via `setMonth`/`setFullYear` on the LOCAL
 * clock (JS day-of-month overflow rolls over, Mar 31 − 1m → Mar 3; DST offsets shift the epoch
 * delta off the naive fixed duration — the adapter keeps both, so do we). Numeric values are
 * SECONDS subtracted. A positive offset moves the window INTO THE PAST in both forms.
 */
export const shiftByOffset = (ts: number, offset: number | EchartsOffsetKey): number => {
    if (typeof offset === 'number') {
        return ts - offset * 1000;
    }
    const n = parseInt(offset, 10);
    const d = new Date(ts);
    if (offset.endsWith('m')) {
        d.setMonth(d.getMonth() - n);
    } else {
        d.setFullYear(d.getFullYear() - n);
    }
    return d.getTime();
};

/**
 * The per-entry request overrides as ONE seam (ADR-0072): the entry's pinned `instance`
 * (ADR-0039), its aggregate override + sparsely re-gated params (the ADR-0064 gating mirrored
 * per entry — a percentile key on an average request is a lie, so a base param rides ONLY while
 * its aggregate survives the override), and its window shift resolved HERE, per fetch, against
 * the resolved window. Everything the entry does not author stays the shared options verbatim.
 */
export function entryRequestOptions(
    options: ioBroker.GetHistoryOptions,
    entry: HistoryEntry,
): ioBroker.GetHistoryOptions {
    const out: ioBroker.GetHistoryOptions = { ...options };
    if (entry.instance) {
        out.instance = entry.instance;
    }
    if (entry.aggregate) {
        out.aggregate = entry.aggregate;
    }
    // The entry's EFFECTIVE aggregate governs the params — what the request will ask for, not
    // what the chart default was.
    const aggregate = out.aggregate ?? 'average';
    // Params gate under the ENTRY's effective aggregate: an entry override drops the base
    // params of a different aggregate, its own ride only under their matching one; an
    // inheriting entry keeps the base params untouched (they already match).
    if (aggregate === 'percentile') {
        if (entry.percentile !== undefined) {
            out.percentile = entry.percentile;
        }
    } else {
        delete out.percentile;
    }
    if (aggregate === 'integral') {
        if (entry.integralUnit !== undefined) {
            out.integralUnit = entry.integralUnit;
        }
        if (entry.integralInterpolation) {
            out.integralInterpolation = entry.integralInterpolation;
        }
    } else {
        delete out.integralUnit;
        delete out.integralInterpolation;
    }
    if (entry.xOffset) {
        out.start = shiftByOffset(options.start ?? 0, entry.xOffset);
        out.end = shiftByOffset(options.end ?? 0, entry.xOffset);
    }
    return out;
}

/**
 * Fetch + transform multiple OIDs in parallel. `Promise.allSettled` so one failing OID
 * doesn't discard the others — a failed series becomes `{ data: [], error }`. Each entry's
 * request diverges only where it authors an override — instance, aggregate + params, window
 * shift ({@link entryRequestOptions}) — and its `ignoreNull` overrides the chart-level gap
 * handling.
 */
export async function fetchMultiSeries(
    getHistory: (id: string, options: ioBroker.GetHistoryOptions) => Promise<Point[]>,
    entries: HistoryEntry[],
    options: ioBroker.GetHistoryOptions,
    ignoreNull: IgnoreNull = 'keep',
): Promise<FetchedSeries[]> {
    const results = await Promise.allSettled(
        entries.map(e =>
            getHistory(e.oid, entryRequestOptions(options, e)).then(pts => ({
                name: e.name ?? e.oid,
                pts,
            })),
        ),
    );
    return results.map((r, i) => {
        const name = entries[i].name ?? entries[i].oid;
        if (r.status === 'fulfilled') {
            return { name, data: toSeriesData(r.value.pts, entries[i].ignoreNull ?? ignoreNull) };
        }
        return { name, data: [], error: String(r.reason ?? 'history fetch failed') };
    });
}
