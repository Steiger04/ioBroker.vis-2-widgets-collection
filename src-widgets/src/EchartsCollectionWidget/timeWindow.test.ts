/**
 * Unit tests for the pure time-window resolver (parity Build A, ADR-0063) — the adapter's
 * relativeEnd rounding + range subtraction semantics, with leap-year-suitable month/year
 * clamping (the acceptance's „Schaltjahr-taugliche Rundung").
 *
 * @module EchartsCollectionWidget/timeWindow.test
 */
import { describe, expect, it } from 'vitest';

import { resolveTimeWindow, type TimeWindowSpec } from './timeWindow';

/** Local-time epoch for Y-M-D h:m:s (the resolver works in LOCAL dates, like the adapter). */
const ts = (y: number, mo: number, d: number, h = 0, mi = 0, s = 0): number =>
    new Date(y, mo - 1, d, h, mi, s, 0).getTime();

const rel = (timeRange: string, relativeEnd = 'now', extra: Partial<TimeWindowSpec> = {}): TimeWindowSpec => ({
    timeType: 'relative',
    timeRange: timeRange as TimeWindowSpec['timeRange'],
    relativeEnd: relativeEnd as TimeWindowSpec['relativeEnd'],
    ...extra,
});

describe('resolveTimeWindow — relativeEnd rounding (adapter semantics)', () => {
    it('now: end is the passed clock, start subtracts plain minutes', () => {
        const now = ts(2026, 8, 24, 15, 30, 45);
        const w = resolveTimeWindow(rel('1h'), now);
        expect(w.end).toBe(now);
        expect(w.start).toBe(now - 60 * 60_000);
    });

    it('minute grid: floor to the N-grid + N, seconds/ms zeroed', () => {
        const w = resolveTimeWindow(rel('10m', '5minutes'), ts(2026, 8, 24, 12, 3, 45));
        expect(w.end).toBe(ts(2026, 8, 24, 12, 5));
        const one = resolveTimeWindow(rel('10m', '1minute'), ts(2026, 8, 24, 12, 3, 30));
        expect(one.end).toBe(ts(2026, 8, 24, 12, 4));
    });

    it('hour grid: floor hours to the N-grid + N, minutes zeroed', () => {
        const w = resolveTimeWindow(rel('1h', '2hours'), ts(2026, 8, 24, 13, 5));
        expect(w.end).toBe(ts(2026, 8, 24, 14));
        const half = resolveTimeWindow(rel('1h', '12hours'), ts(2026, 8, 24, 13));
        expect(half.end).toBe(ts(2026, 8, 25)); // 13h + 11h → next midnight
    });

    it('today: next midnight', () => {
        const w = resolveTimeWindow(rel('1d', 'today'), ts(2026, 8, 24, 15, 30));
        expect(w.end).toBe(ts(2026, 8, 25));
    });

    it('weekUsa (end of saturday): date − getDay() + 7 at midnight', () => {
        // Wed Aug 19 2026 → Sat Aug 22 end = Sun Aug 23 00:00
        const w = resolveTimeWindow(rel('1d', 'weekUsa'), ts(2026, 8, 19, 10));
        expect(w.end).toBe(ts(2026, 8, 23));
        // ON a Sunday: date − 0 + 7 = next Sunday
        const onSunday = resolveTimeWindow(rel('1d', 'weekUsa'), ts(2026, 8, 23, 10));
        expect(onSunday.end).toBe(ts(2026, 8, 30));
    });

    it('weekEurope (end of sunday): Monday midnight; a Sunday rolls to the NEXT Monday', () => {
        // Wed Aug 19 → 19 − 3 + 8 = 27? No: − getDay() + 8 → Aug 24 (Monday) 00:00
        const w = resolveTimeWindow(rel('1d', 'weekEurope'), ts(2026, 8, 19, 10));
        expect(w.end).toBe(ts(2026, 8, 24));
        // Sunday Aug 23 → +1 day = Monday Aug 24 00:00 (same instant)
        const onSunday = resolveTimeWindow(rel('1d', 'weekEurope'), ts(2026, 8, 23, 10));
        expect(onSunday.end).toBe(ts(2026, 8, 24));
    });

    it('month: 1st of the next month; year: Jan 1 of the next year', () => {
        const m = resolveTimeWindow(rel('1d', 'month'), ts(2026, 8, 24, 15));
        expect(m.end).toBe(ts(2026, 9, 1));
        const y = resolveTimeWindow(rel('1d', 'year'), ts(2026, 8, 24, 15));
        expect(y.end).toBe(ts(2027, 1, 1));
    });
});

describe('resolveTimeWindow — range subtraction', () => {
    it('minute-based ranges subtract as milliseconds from the rounded end', () => {
        const w = resolveTimeWindow(rel('7d', 'today'), ts(2026, 8, 24, 15, 30));
        expect(w.start).toBe(ts(2026, 8, 25) - 7 * 86_400_000);
    });

    it('calendar months subtract setMonth-wise, clamped to the month end (leap-year-tauglich)', () => {
        // Apr 1 − 1m → Mar 1 (the common relativeEnd=month case)
        const w = resolveTimeWindow(rel('1m', 'month'), ts(2026, 3, 31, 15));
        expect(w.start).toBe(ts(2026, 3, 1));
        // Feb 29 leap end − 1y → Feb 28 (raw setFullYear would roll to Mar 1)
        const leap = resolveTimeWindow(rel('1y', 'today'), ts(2016, 2, 28, 15));
        // today on Feb 28 2016 → end Feb 29 2016 00:00 (leap), − 1y → Feb 28 2015
        expect(leap.end).toBe(ts(2016, 2, 29));
        expect(leap.start).toBe(ts(2015, 2, 28));
        // A subtraction that would overflow month-end: weekEurope lands on Monday Mar 31 2025
        // 00:00 (Sunday Mar 30 + 1 day); − 1m clamps to Feb 28 instead of rolling to Mar 3.
        const clamp = resolveTimeWindow(rel('1m', 'weekEurope'), ts(2025, 3, 30, 15));
        expect(clamp.end).toBe(ts(2025, 3, 31));
        expect(clamp.start).toBe(ts(2025, 2, 28));
    });

    it('legacy range keys resolve like their migrated successors (runtime tolerance)', () => {
        const now = ts(2026, 8, 24, 15, 30, 45);
        expect(resolveTimeWindow(rel('24h'), now)).toEqual(resolveTimeWindow(rel('1d'), now));
        expect(resolveTimeWindow(rel('30d'), now)).toEqual(resolveTimeWindow(rel('1m'), now));
        // '7d' is a native key in the new list too
    });

    it('an unknown range falls back to 1 day (never NaN)', () => {
        const now = ts(2026, 8, 24, 15, 30, 45);
        const w = resolveTimeWindow(rel('banana'), now);
        expect(w.end).toBe(now);
        expect(w.start).toBe(now - 86_400_000);
    });
});

describe('resolveTimeWindow — static', () => {
    it('parses the ISO pair verbatim', () => {
        const w = resolveTimeWindow(
            { timeType: 'static', staticStart: '2026-01-01T00:00', staticEnd: '2026-02-01T12:30' },
            ts(2026, 8, 24),
        );
        expect(w.start).toBe(new Date(2026, 0, 1, 0, 0).getTime());
        expect(w.end).toBe(new Date(2026, 1, 1, 12, 30).getTime());
    });

    it('missing/invalid static fields degrade to the relative default (now − 24h .. now)', () => {
        const now = ts(2026, 8, 24, 15);
        const missing = resolveTimeWindow({ timeType: 'static' }, now);
        expect(missing.start).toBe(now - 86_400_000);
        expect(missing.end).toBe(now);
        const invalid = resolveTimeWindow(
            { timeType: 'static', staticStart: 'not-a-date', staticEnd: 'also-not' },
            now,
        );
        expect(invalid.end).toBe(now);
    });

    it('only ONE invalid side falls back wholly (all-or-nothing, no mixed windows)', () => {
        const now = ts(2026, 8, 24, 15);
        const w = resolveTimeWindow({ timeType: 'static', staticStart: '2026-01-01T00:00', staticEnd: 'nope' }, now);
        expect(w.start).toBe(now - 86_400_000);
        expect(w.end).toBe(now);
    });
});

describe('resolveTimeWindow — the full 18×17 sweep (acceptance [4])', () => {
    it('every range × relativeEnd combination yields a finite, ordered window', () => {
        const RANGES = ['10m','30m','1h','2h','3h','6h','12h','1d','2d','3d','7d','14d','1m','2m','3m','6m','1y','2y'];
        const ENDS = ['now','1minute','5minutes','10minutes','30minutes','1hour','2hours','3hours','4hours','6hours','8hours','12hours','today','weekEurope','weekUsa','month','year'];
        const now = ts(2026, 8, 24, 15, 30, 45);
        for (const range of RANGES) {
            for (const end of ENDS) {
                const w = resolveTimeWindow(rel(range, end), now);
                expect(Number.isFinite(w.start), `${range}/${end} start finite`).toBe(true);
                expect(Number.isFinite(w.end), `${range}/${end} end finite`).toBe(true);
                expect(w.start < w.end, `${range}/${end} ordered`).toBe(true);
            }
        }
    });
});
