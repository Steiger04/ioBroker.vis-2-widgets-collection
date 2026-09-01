/**
 * Unit tests for the pure bar-bucket machinery (parity Build A, ADR-0065): interval resolution,
 * grid widening, CALENDAR category stepping (DST + month ends), point bucketing with the
 * aggregate reduction, and the diff post-processing.
 *
 * @module EchartsCollectionWidget/barBuckets.test
 */
import { describe, expect, it } from 'vitest';

import {
    applyBarDiff,
    barBucketCategories,
    bucketizeSeries,
    makeBarPlan,
    resolveBarIntervalMinutes,
    widenBarWindow,
} from './barBuckets';
import { entryRequestOptions } from './historyLogic';
import type { SeriesPoint } from './historyLogic';

const ts = (y: number, mo: number, d: number, h = 0, mi = 0): number => new Date(y, mo - 1, d, h, mi, 0, 0).getTime();
const MIN = 60_000;
const HOUR = 3_600_000;
const DAY = 86_400_000;

describe('resolveBarIntervalMinutes (auto span rules, adapter ChartModel)', () => {
    it('auto: ≤12h→15 min, >3d→1 day, ≥60d→month, else 1 hour', () => {
        expect(resolveBarIntervalMinutes('auto', 12 * HOUR)).toBe(15);
        expect(resolveBarIntervalMinutes('auto', 12 * HOUR + 1)).toBe(60);
        expect(resolveBarIntervalMinutes('auto', 3 * DAY)).toBe(60); // exactly 3 days is NOT > 3 days
        expect(resolveBarIntervalMinutes('auto', 3 * DAY + 1)).toBe(1440);
        expect(resolveBarIntervalMinutes('auto', 60 * DAY)).toBe(43200);
    });

    it('explicit intervals pass through regardless of span', () => {
        expect(resolveBarIntervalMinutes('15m', 60 * DAY)).toBe(15);
        expect(resolveBarIntervalMinutes('1h', 10 * MIN)).toBe(60);
        expect(resolveBarIntervalMinutes('1d', HOUR)).toBe(1440);
        expect(resolveBarIntervalMinutes('30d', HOUR)).toBe(43200);
    });
});

describe('widenBarWindow (grid alignment + bucket count + diff extra bucket)', () => {
    it('hour grid: floors the start, ceils the end, count = buckets', () => {
        const w = widenBarWindow(ts(2026, 8, 24, 10, 13), ts(2026, 8, 24, 14, 47), 60, false);
        expect(w.start).toBe(ts(2026, 8, 24, 10));
        expect(w.end).toBe(ts(2026, 8, 24, 15));
        expect(w.count).toBe(5);
    });

    it('15-minute grid floors/ceils to the quarter grid', () => {
        const w = widenBarWindow(ts(2026, 8, 24, 10, 7), ts(2026, 8, 24, 11, 22), 15, false);
        expect(w.start).toBe(ts(2026, 8, 24, 10, 0));
        expect(w.end).toBe(ts(2026, 8, 24, 11, 30));
        expect(w.count).toBe(6);
    });

    it('day grid: midnight to midnight, whole days', () => {
        const w = widenBarWindow(ts(2026, 8, 24, 10), ts(2026, 8, 27, 9), 1440, false);
        expect(w.start).toBe(ts(2026, 8, 24));
        expect(w.end).toBe(ts(2026, 8, 28));
        expect(w.count).toBe(4);
    });

    it('month grid: 1st-to-1st (a mid-month window rounds to whole months)', () => {
        const w = widenBarWindow(ts(2026, 8, 15), ts(2026, 10, 20), 43200, false);
        expect(w.start).toBe(ts(2026, 8, 1));
        expect(w.end).toBe(ts(2026, 11, 1));
        expect(w.count).toBe(3);
    });

    it('diff adds ONE extra bucket on the left (the first category is dropped by the diff)', () => {
        const w = widenBarWindow(ts(2026, 8, 24, 10), ts(2026, 8, 25, 10), 1440, true);
        expect(w.start).toBe(ts(2026, 8, 23)); // one day earlier than without diff
        expect(w.count).toBe(3);
    });
});

describe('barBucketCategories (CALENDAR stepping)', () => {
    it('sub-day intervals step by fixed minutes; the STRICT end yields exactly the buckets', () => {
        // end 12:00 is the EXCLUSIVE bound of the last bucket — 2 categories, not 3 (the
        // adapter's inclusive loop leaves a trailing always-null category; review catch).
        const cats = barBucketCategories(ts(2026, 8, 24, 10), ts(2026, 8, 24, 12), 60);
        expect(cats).toEqual([ts(2026, 8, 24, 10), ts(2026, 8, 24, 11)]);
    });

    it('day buckets stay at LOCAL MIDNIGHT across DST transitions (spring-forward AND fall-back)', () => {
        // EU spring-forward: Sun Mar 29 2026, 02:00→03:00 (23h day). A fixed +1440min step
        // from Mar 28 midnight would land at Mar 29 01:00; the calendar step stays at midnight.
        const spring = barBucketCategories(ts(2026, 3, 28), ts(2026, 4, 1), 1440);
        expect(spring).toEqual([ts(2026, 3, 28), ts(2026, 3, 29), ts(2026, 3, 30), ts(2026, 3, 31)]);
        for (const c of spring) {
            expect(new Date(c).getHours(), 'category at local midnight').toBe(0);
        }
        // EU fall-back: Sun Oct 25 2026, 03:00→02:00 (25h day) — same invariant.
        const autumn = barBucketCategories(ts(2026, 10, 24), ts(2026, 10, 28), 1440);
        expect(autumn).toEqual([ts(2026, 10, 24), ts(2026, 10, 25), ts(2026, 10, 26), ts(2026, 10, 27)]);
        for (const c of autumn) {
            expect(new Date(c).getHours(), 'category at local midnight').toBe(0);
        }
    });

    it('month buckets step 1st-to-1st across a short month and a leap February', () => {
        const cats = barBucketCategories(ts(2026, 1, 1), ts(2026, 4, 1), 43200);
        expect(cats).toEqual([ts(2026, 1, 1), ts(2026, 2, 1), ts(2026, 3, 1)]);
        // Leap correctness rides setMonth (a fixed +30d step could never land Mar 1 from
        // Feb 1 2024 — leap — nor avoid overshooting Mar 2): the grid always hits the 1st.
        expect(barBucketCategories(ts(2024, 1, 1), ts(2024, 3, 1), 43200)).toEqual([ts(2024, 1, 1), ts(2024, 2, 1)]);
        // A window STARTING on Feb 29 grids from Feb 1 (the month floor) — leap-safe start.
        expect(barBucketCategories(ts(2024, 2, 29), ts(2024, 3, 2), 43200)).toEqual([ts(2024, 2, 1), ts(2024, 3, 1)]);
    });
});

describe('bucketizeSeries (adapter postProcessing reduction)', () => {
    const cats = [ts(2026, 8, 24, 10), ts(2026, 8, 24, 11), ts(2026, 8, 24, 12)];
    // The exclusive window end — the LAST bucket extends to it.
    const end = ts(2026, 8, 24, 13);
    const pts: SeriesPoint[] = [
        [ts(2026, 8, 24, 10, 1), 2],
        [ts(2026, 8, 24, 10, 30), 4],
        [ts(2026, 8, 24, 11, 5), 10],
    ];

    it('assigns points to [cat[i], cat[i+1]) and reduces per the aggregate', () => {
        expect(bucketizeSeries(pts, cats, 'average', end)).toEqual([3, 10, null]);
        expect(bucketizeSeries(pts, cats, 'min', end)).toEqual([2, 10, null]);
        expect(bucketizeSeries(pts, cats, 'max', end)).toEqual([4, 10, null]);
        expect(bucketizeSeries(pts, cats, 'total', end)).toEqual([6, 10, null]);
        // onchange/minmax/count/none → the LAST value in the bucket (adapter default)
        expect(bucketizeSeries(pts, cats, 'onchange', end)).toEqual([4, 10, null]);
    });

    it('null points do not poison a bucket; an empty bucket is null', () => {
        const withNull: SeriesPoint[] = [
            [ts(2026, 8, 24, 10, 1), 2],
            [ts(2026, 8, 24, 10, 30), null],
            [ts(2026, 8, 24, 12, 1), 7], // the LAST bucket [12, end) — inside via the end bound
        ];
        expect(bucketizeSeries(withNull, cats, 'total', end)).toEqual([2, null, 7]);
    });

    it('points before the first category are ignored', () => {
        expect(bucketizeSeries([[ts(2026, 8, 24, 9), 99] as SeriesPoint], cats, 'total', end)).toEqual([
            null,
            null,
            null,
        ]);
    });
});

describe('applyBarDiff (adapter diff + first-bucket drop)', () => {
    it('diffs consecutive buckets; a null neighbour yields 0; the first bucket is dropped', () => {
        // diffs: 8-5=3, 11-8=3, null-neighbor→0, 3-neighbor(null)→0; first dropped
        expect(applyBarDiff([5, 8, 11, null, 3])).toEqual([3, 3, 0, 0]);
    });

    it('an all-empty series stays empty (no crash)', () => {
        expect(applyBarDiff([null, null])).toEqual([0]);
    });

    it('a single bucket diffs to nothing visible', () => {
        expect(applyBarDiff([7])).toEqual([]);
    });
});

describe('makeBarPlan — per-entry aggregate composition (ADR-0072 bar mode)', () => {
    it("the plan's bucket-count request + the entry override compose: the resolution rides SHARED, the aggregate diverges per series", () => {
        const plan = makeBarPlan('1h', true, undefined, { aggregate: 'average' });
        // 10:07→13:01 widens (diff) to 09:00→14:00 on the hour grid = 5 buckets.
        const { options, extras } = plan({ start: ts(2026, 1, 10, 10, 7), end: ts(2026, 1, 10, 13, 1) });
        expect(extras.cats).toHaveLength(5);
        const inherit = entryRequestOptions(options, { oid: 'a.0' });
        const override = entryRequestOptions(options, { oid: 'b.0', aggregate: 'max' });
        expect(inherit.count).toBe(5); // the bucket count IS the resolution (ADR-0065)
        expect(inherit.aggregate).toBe('average');
        expect(override.count).toBe(5); // the plan's resolution survives the per-entry spread
        expect(override.start).toBe(inherit.start); // same widened window
        expect(override.aggregate).toBe('max'); // only the series' OWN keys diverge
    });
});
