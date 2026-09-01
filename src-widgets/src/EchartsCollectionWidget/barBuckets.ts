/**
 * The pure bar-bucket machinery (parity Build A, ADR-0065) — the adapter's bar pipeline as
 * CALENDAR category buckets: interval resolution (the span-based auto rules), grid-aligned
 * window widening (with the diff's extra left bucket), calendar-stepped category timestamps
 * (day = local midnight via `setDate(+1)`, month = 1st-to-1st via `setMonth(+1)` — the adapter's
 * fixed-minute stepping misaligns on DST days and month ends, their own code TODO admits it),
 * client-side point bucketing with the aggregate reduction, and the diff post-processing.
 *
 * @module EchartsCollectionWidget/barBuckets
 * @remarks
 * All date math is LOCAL (the adapter's convention; ioBroker installations live in their
 * timezone). The functions are pure — the pipeline composes them, the builder consumes their
 * output, tests drive them directly (the ticket's named module).
 */
import type { EchartsAggregate, EchartsBarInterval } from '../types/field-definitions/echarts-fields';
import { windowToOptions, type RangeOptionsInput, type SeriesPoint } from './historyLogic';
import type { TimeWindow } from './timeWindow';

// The interval union lives in echarts-fields.d.ts (EchartsBarInterval); `'30d'` grids
// CALENDAR MONTHS (1st-to-1st).
/** Fixed interval keys → minutes ('auto' resolves via {@link resolveBarIntervalMinutes}). */
const INTERVAL_MINUTES: Record<Exclude<EchartsBarInterval, 'auto'>, number> = {
    '15m': 15,
    '1h': 60,
    '1d': 1440,
    '30d': 43200,
};

/**
 * Resolve the effective interval in MINUTES. `auto` follows the adapter's span rules: ≤12 h →
 * 15 minutes, ≥60 days → month, >3 days → day, else hour. An unknown key degrades to hour
 * (never NaN — the request must stay sane).
 */
/**
 * NOTE: the PIPELINE never feeds 'auto' here (auto = the time-axis path, ADR-0065) — the
 * span rules document the adapter's own auto behaviour and serve direct callers/tests.
 */
export const resolveBarIntervalMinutes = (interval: string, spanMs: number): number => {
    if (interval !== 'auto' && interval in INTERVAL_MINUTES) {
        return INTERVAL_MINUTES[interval as Exclude<EchartsBarInterval, 'auto'>];
    }
    if (spanMs <= 12 * 3_600_000) {
        return 15;
    }
    if (spanMs >= 60 * 86_400_000) {
        return 43200;
    }
    if (spanMs > 3 * 86_400_000) {
        return 1440;
    }
    return 60;
};

const zeroTime = (d: Date): void => {
    d.setHours(0, 0, 0, 0);
};

/**
 * Floor a timestamp onto the interval grid: quarter/hour grids from the hour, days to local
 *  midnight, months to the 1st.
 */
const floorToGrid = (ms: number, minutes: number): number => {
    const d = new Date(ms);
    if (minutes === 1440) {
        zeroTime(d);
    } else if (minutes === 43200) {
        d.setDate(1);
        zeroTime(d);
    } else if (minutes === 60) {
        d.setMinutes(0, 0, 0);
    } else {
        d.setMinutes(Math.floor(d.getMinutes() / minutes) * minutes, 0, 0);
    }
    return d.getTime();
};

/** One CALENDAR grid step from a grid-aligned timestamp. */
const stepGrid = (ms: number, minutes: number): number => {
    const d = new Date(ms);
    if (minutes === 1440) {
        d.setDate(d.getDate() + 1);
    } else if (minutes === 43200) {
        d.setMonth(d.getMonth() + 1);
    } else {
        d.setTime(d.getTime() + minutes * 60_000);
    }
    return d.getTime();
};

/** Ceil a timestamp onto the interval grid (the EXCLUSIVE end of the last bucket). */
const ceilToGrid = (ms: number, minutes: number): number => {
    const floored = floorToGrid(ms, minutes);
    return floored === ms ? ms : stepGrid(floored, minutes);
};

/** One calendar step BACK (the diff's extra left bucket). */
const stepGridBack = (ms: number, minutes: number): number => {
    const d = new Date(ms);
    if (minutes === 1440) {
        d.setDate(d.getDate() - 1);
    } else if (minutes === 43200) {
        d.setMonth(d.getMonth() - 1);
    } else {
        d.setTime(d.getTime() - minutes * 60_000);
    }
    return d.getTime();
};

/**
 * Widen the resolved window onto the bar grid (adapter `increaseRegionForBar`): floor the
 * start, ceil the end, add ONE extra bucket left when diff is on (the first category is
 * dropped by the diff — it has no predecessor), and return the bucket COUNT that replaces
 * count/step in the getHistory request.
 */
export const widenBarWindow = (
    start: number,
    end: number,
    minutes: number,
    diff: boolean,
): { start: number; end: number; count: number } => {
    let s = floorToGrid(start, minutes);
    const e = ceilToGrid(end, minutes);
    if (diff) {
        s = stepGridBack(s, minutes);
    }
    // Bucket count over the calendar grid — count steps, not a fixed-minute division (months
    // have 28–31 days; the adapter's span/30d TODO is exactly this bug).
    let count = 0;
    for (let t = s; t < e; t = stepGrid(t, minutes)) {
        count++;
    }
    return { start: s, end: e, count };
};

/**
 * The category grid timestamps (inclusive start, up to the exclusive end): each a grid
 * boundary, CALENDAR-stepped so day buckets stay at local midnight across DST and month
 * buckets at the 1st across short/leap months.
 */
export const barBucketCategories = (start: number, end: number, minutes: number): number[] => {
    // STRICT end: exactly the bucket boundaries the widened window counts — `7 days + '1d' =
    // 7 bars`, not 8 (the adapter's inclusive loop leaves a trailing always-null category —
    // adapter-quirk not copied, review catch).
    const out: number[] = [];
    for (let t = floorToGrid(start, minutes); t < end; t = stepGrid(t, minutes)) {
        out.push(t);
    }
    return out;
};

/** Find the bucket index of a timestamp: the last category boundary ≤ ts (binary search). */
const bucketIndex = (cats: readonly number[], ts: number, end: number): number => {
    let lo = 0;
    let hi = cats.length - 1;
    let found = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (cats[mid] <= ts) {
            found = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    // The last bucket extends to the exclusive window end.
    return found >= 0 && (found < cats.length - 1 || ts < end) ? found : -1;
};

/**
 * Bucket raw points into one value per category, reduced CLIENT-side like the adapter's
 * postProcessing: average→mean, min, max, total→sum, everything else→the LAST value; an empty
 * bucket (or one of only nulls) is `null`. Points before the first category are ignored.
 */
export const bucketizeSeries = (
    points: readonly SeriesPoint[],
    categories: readonly number[],
    aggregate: EchartsAggregate | undefined,
    end: number,
): (number | null)[] => {
    const buckets: number[][] = categories.map(() => []);
    for (const p of points) {
        const idx = bucketIndex(categories, p[0], end);
        if (idx >= 0 && p[1] !== null) {
            buckets[idx].push(p[1]);
        }
    }
    return buckets.map(vals => {
        if (!vals.length) {
            return null;
        }
        if (vals.length === 1) {
            return vals[0];
        }
        switch (aggregate) {
            case 'average':
                return vals.reduce((a, b) => a + b, 0) / vals.length;
            case 'min':
                return Math.min(...vals);
            case 'max':
                return Math.max(...vals);
            case 'total':
                return vals.reduce((a, b) => a + b, 0);
            default:
                // onchange/minmax/count/none/percentile/integral → the last value (adapter)
                return vals[vals.length - 1];
        }
    });
};

/**
 * The adapter's diff post-processing over bucket values: `v[i] -= v[i-1]`, a null NEIGHBOUR
 * yields 0, and the FIRST bucket is dropped (it has no predecessor — the widened window put a
 * sacrificial bucket there). The caller drops the first category accordingly.
 */
export const applyBarDiff = (values: readonly (number | null)[]): (number | null)[] => {
    const out: (number | null)[] = [];
    for (let i = 1; i < values.length; i++) {
        const prev = values[i - 1]!;
        const cur = values[i]!;
        out.push(prev !== null && cur !== null ? cur - prev : 0);
    }
    // The caller drops the first category accordingly (the diff's first bucket has no
    // predecessor).
    return out;
};

/** The bar plan's fetch companions — what a bucketed fetch hands back beside the points. */
export interface BarFetchExtras {
    /** The category grid of THIS fetch — the builder's category axis data. */
    cats: number[];
    /** The bucketed window's exclusive end (the last bucket extends to it). */
    end: number;
}

/**
 * Build the bar fetch plan (K4, ADR-0065 addendum): ONE place owns what a bucketed fetch IS —
 * the window widening (incl. the diff's extra left bucket), the category grid the render will
 * use, and the K3 point-ceiling cap on the bucket count. The fetch hook executes the plan per
 * fetch (ADR-0063: the window resolves there); this module never touches fetching itself, the
 * hook never touches bars.
 *
 * @param interval - The authored interval KEY ('15m'/'1h'/'1d'/'30d'; never 'auto' — the
 * pipeline keeps auto on the time-axis path).
 * @param diff - Bar diff post-processing — widens one extra bucket left.
 * @param maxPoints - Point ceiling capping the request count (K3); undefined = uncapped.
 * @param base - The shared request options (aggregate/count/step…) the plan overrides.
 */
export const makeBarPlan = (
    interval: string,
    diff: boolean,
    maxPoints: number | undefined,
    base: RangeOptionsInput,
): ((win: TimeWindow) => { options: ioBroker.GetHistoryOptions; extras: BarFetchExtras }) => {
    // Direct-key resolution (spanMs 0 — the span rules document the adapter's 'auto' behaviour
    // and serve direct callers; the plan always arrives with a concrete key).
    const minutes = resolveBarIntervalMinutes(interval, 0);
    return win => {
        const widened = widenBarWindow(win.start, win.end, minutes, diff);
        return {
            options: windowToOptions(
                { start: widened.start, end: widened.end },
                {
                    ...base,
                    // The bucket count IS the resolution (count/step are replaced, ADR-0065);
                    // capped at maxPoints so a stored interval over a grown range cannot
                    // request unbounded volume (K3).
                    count: maxPoints ? Math.min(widened.count, maxPoints) : widened.count,
                    step: undefined,
                },
            ),
            extras: {
                cats: barBucketCategories(widened.start, widened.end, minutes),
                end: widened.end,
            },
        };
    };
};
