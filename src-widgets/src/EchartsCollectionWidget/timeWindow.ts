/**
 * The pure time-window resolver (parity Build A, ADR-0063) — the adapter's ChartModel window
 * semantics: a relativeEnd ROUNDS the clock up to a calendar/grid boundary, the range subtracts
 * from that boundary (minutes as ms; months/years CALENDAR-wise, clamped to the month end).
 *
 * @module EchartsCollectionWidget/timeWindow
 * @remarks
 * All date math is LOCAL (the adapter uses `new Date(now)` + local setters; ioBroker hosts and
 * viewers live in the installation's timezone). Month/year subtraction CLAMPS to the target
 * month's last day — the acceptance's „Schaltjahr-taugliche Rundung": the adapter's raw
 * `setMonth` lets a Feb 31 roll into March, visible when a week boundary lands on Mar 31.
 */
import type { EchartsTimeType } from '../types/field-definitions/echarts-fields';

/**
 * The authored window — exactly what rides the rxData scalars (ADR-0063). The range/end keys
 * are plain STRINGS here on purpose: legacy keys ('24h') and unknown values flow through the
 * same tolerance path instead of a typed union the loader cannot guarantee.
 */
export interface TimeWindowSpec {
    timeType?: EchartsTimeType;
    timeRange?: string;
    relativeEnd?: string;
    /** ISO strings (DateTimePicker); static-only. */
    staticStart?: string;
    staticEnd?: string;
}

/** A resolved window: ms epochs for the getHistory request. */
export interface TimeWindow {
    start: number;
    end: number;
}

/** The 18 adapter range keys → minutes (calendar keys are handled separately). */
const RANGE_MINUTES: Record<string, number> = {
    '10m': 10,
    '30m': 30,
    '1h': 60,
    '2h': 120,
    '3h': 180,
    '6h': 360,
    '12h': 720,
    '1d': 1440,
    '2d': 2880,
    '3d': 4320,
    '7d': 10080,
    '14d': 20160,
};

/**
 * Legacy pre-0063 range keys → their migrated successors. ONE migration for BOTH consumers
 * (the editor's load pass and the resolver's runtime tolerance) — '7d' is native to the new
 * list and needs no mapping. NOTE: '30d'→'1m' changes the SPAN from a fixed 30×24h to a
 * calendar month (±1 day) — the 18-key adapter list has no fixed-30-days key; the only honest
 * migration target. Known behaviour change for unedited '30d' widgets (ADR-0063).
 */
export const migrateLegacyRange = (range: string): string => (range === '24h' ? '1d' : range === '30d' ? '1m' : range);

const DEFAULT_RANGE_MINUTES = 1440;

/** Last day (1-based) of a month — the clamp target for calendar subtraction. */
const lastDayOf = (year: number, monthIndex: number): number => new Date(year, monthIndex + 1, 0).getDate();

/**
 * Round the clock UP to the relativeEnd boundary (adapter ChartModel): minute/hour grids floor
 * to the N-grid and step one grid forward; `today`/week/month/year roll to the next midnight /
 * Monday(=end of Sunday, Europe) / Sunday-overnight(USA) / month 1st / year 1st.
 */
const roundEnd = (relativeEnd: string, now: number): number => {
    const d = new Date(now);
    const zero = (): void => {
        d.setSeconds(0);
        d.setMilliseconds(0);
    };
    if (relativeEnd === 'now') {
        return now;
    }
    if (relativeEnd.includes('minute')) {
        const n = parseInt(relativeEnd, 10) || 1;
        d.setMinutes(Math.floor(d.getMinutes() / n) * n + n);
        zero();
        return d.getTime();
    }
    if (relativeEnd.includes('hour')) {
        const n = parseInt(relativeEnd, 10) || 1;
        d.setHours(Math.floor(d.getHours() / n) * n + n, 0, 0, 0);
        return d.getTime();
    }
    if (relativeEnd === 'today') {
        d.setDate(d.getDate() + 1);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }
    if (relativeEnd === 'weekUsa') {
        // End of Saturday = the Sunday midnight after the current week's Saturday.
        d.setDate(d.getDate() - d.getDay() + 7);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }
    if (relativeEnd === 'weekEurope') {
        // End of Sunday = the Monday midnight after the current week's Sunday (a Sunday itself
        // rolls to the NEXT Monday, matching the adapter's +1 special case).
        if (d.getDay() === 0) {
            d.setDate(d.getDate() + 1);
        } else {
            d.setDate(d.getDate() - d.getDay() + 8);
        }
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }
    if (relativeEnd === 'month') {
        // Day-first order (the acceptance's leap-year-suitable rounding): the adapter's
        // setMonth-then-setDate lets Mar 31 → "Apr 31" → May 1 overshoot a whole month.
        d.setDate(1);
        d.setMonth(d.getMonth() + 1);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }
    if (relativeEnd === 'year') {
        // Same day-first order for Feb 29 (setFullYear(+1) alone would roll to Mar 1).
        d.setMonth(0);
        d.setDate(1);
        d.setFullYear(d.getFullYear() + 1);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }
    return now; // unknown key — behave like 'now'
};

/**
 * Subtract the range from the (already rounded) end (adapter `addTime`): minute-based keys as
 * ms; `Nm`/`Ny` CALENDAR-wise with the month-end clamp (Feb 31 → Feb 28/29, never March).
 * The minute table wins over the `Nm` pattern — `10m`/`30m` are MINUTES while `1m`…`6m` are
 * calendar months (the adapter types minutes as numbers and months as strings; our string keys
 * disambiguate by table membership).
 */
const subtractRange = (range: string, end: number): number => {
    if (range in RANGE_MINUTES) {
        return end - RANGE_MINUTES[range] * 60_000;
    }
    const n = parseInt(range, 10);
    const d = new Date(end);
    const timeOfDay = (): number =>
        d.getHours() * 3_600_000 + d.getMinutes() * 60_000 + d.getSeconds() * 1000 + d.getMilliseconds();
    if (/^\d+m$/.test(range)) {
        const targetMonth = d.getMonth() - n;
        const clampedDay = Math.min(d.getDate(), lastDayOf(d.getFullYear(), targetMonth));
        return new Date(d.getFullYear(), targetMonth, clampedDay).getTime() + timeOfDay();
    }
    if (/^\d+y$/.test(range)) {
        const targetYear = d.getFullYear() - n;
        const clampedDay = Math.min(d.getDate(), lastDayOf(targetYear, d.getMonth()));
        return new Date(targetYear, d.getMonth(), clampedDay).getTime() + timeOfDay();
    }
    return end - DEFAULT_RANGE_MINUTES * 60_000;
};

/** The static fallback: a plain now − 24h window (honest degradation, never a crash). */
const relativeDefault = (now: number): TimeWindow => ({ start: now - 86_400_000, end: now });

/**
 * Resolve the authored window against a clock (ADR-0063). Static: the ISO pair, ALL-OR-NOTHING
 * (one invalid side degrades the whole window to the relative default — a mixed window would
 * silently fetch the wrong span). Relative: the rounded end minus the range; legacy range keys
 * map to their migrated successors first.
 */
export const resolveTimeWindow = (spec: TimeWindowSpec, now: number): TimeWindow => {
    if (spec.timeType === 'static') {
        const start = spec.staticStart ? new Date(spec.staticStart).getTime() : NaN;
        const end = spec.staticEnd ? new Date(spec.staticEnd).getTime() : NaN;
        if (Number.isFinite(start) && Number.isFinite(end)) {
            return { start, end };
        }
        return relativeDefault(now);
    }
    const rawRange = typeof spec.timeRange === 'string' ? spec.timeRange : '';
    const range = migrateLegacyRange(rawRange);
    const end = roundEnd(typeof spec.relativeEnd === 'string' ? spec.relativeEnd : 'now', now);
    return { start: subtractRange(range, end), end };
};
