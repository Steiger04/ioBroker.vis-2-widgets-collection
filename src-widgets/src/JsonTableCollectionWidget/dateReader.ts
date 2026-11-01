/**
 * The ONE Datums-Leser of the JSON table (CONTEXT.md, ADR-0093).
 *
 * @module JsonTableCollectionWidget/dateReader
 * @remarks
 * Pure. Reads a Raw value as an instant (Unix ms) in two stages and derives its local
 * calendar day in exactly one place ({@link localDay}).
 *
 *  1. Detected date columns read strictly through the analysis engine (`parseDateToMs`) — the
 *     patterns that made them dates.
 *  2. Columns the user formatted as `date` without detection additionally read `Date`
 *     instances and a FIXED list of tolerant patterns, all as local time.
 *
 * Nothing else is a date — there is no browser-heuristic parsing (`new Date(string)` reads
 * `"1.12.2024"` as 12 January). Which Columns are date columns is the caller's decision (their
 * Effektiver Typ); the reader only says how their values are read. The engine stays unchanged
 * (shared with the ECharts table family, ADR-0075).
 */

import { parseDateToMs } from '../hooks/useJsonTableAnalysis/dateValue';
import type { DateFormatId, JsonTableColumn } from '../hooks/useJsonTableAnalysis/types';

/** Reads one Raw value as an instant in Unix ms — `null` when the value is no date. */
export type DateReader = (value: unknown) => number | null;

/** What the analysis engine detected for a Column: its Detected type and date format. */
export type DateDetection = Readonly<Pick<JsonTableColumn, 'type' | 'dateFormat'>>;

/** The local calendar day of an instant. */
export type LocalDay = Readonly<{
    /** Local midnight that starts the day, in Unix ms — compares chronologically. */
    start: number;
    /** The day as `YYYY-MM-DD`, local — the shape of a date input's value. */
    key: string;
}>;

// ── Stage 2: the fixed tolerant patterns ────────────────────────────

/** One tolerant pattern: a regex plus the reading of its match. */
interface TolerantPattern {
    regex: RegExp;
    read: (match: RegExpMatchArray) => number | null;
}

/** Whether `value` lies in `[min, max]`. */
const within = (value: number, min: number, max: number): boolean => value >= min && value <= max;

/** Milliseconds from an ISO fraction (`5` → 500, `25` → 250, `123456` → 123). */
const fractionMs = (fraction: string | undefined): number =>
    fraction ? Number(fraction.slice(0, 3).padEnd(3, '0')) : 0;

/**
 * Local time from the groups `y, M, d, H, m, (s), (fraction)` — `null` when a part is out of
 * range (the ranges the engine validates its own patterns with).
 */
const localFromGroups = (m: RegExpMatchArray): number | null => {
    const [month, day, hour, minute, second] = [+m[2], +m[3], +m[4], +m[5], m[6] ? +m[6] : 0];
    if (
        !within(month, 1, 12) ||
        !within(day, 1, 31) ||
        !within(hour, 0, 23) ||
        !within(minute, 0, 59) ||
        !within(second, 0, 59)
    ) {
        return null;
    }
    return new Date(+m[1], month - 1, day, hour, minute, second, fractionMs(m[7])).getTime();
};

/**
 * The fixed tolerant patterns of stage 2 (ADR-0093), all read as local time. A new tolerant
 * format is one more entry here — never another parser.
 */
const TOLERANT_PATTERNS: readonly TolerantPattern[] = [
    // ISO without zone: YYYY-MM-DDTHH:mm(:ss(.SSS))
    { regex: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/, read: localFromGroups },
    // YYYY-MM-DD HH:mm(:ss)
    { regex: /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})(?::(\d{2}))?$/, read: localFromGroups },
    // Epoch string (digits only): the engine's number thresholds decide — ≥ 1e11 ms,
    // ≥ 1e9 s, below no date
    { regex: /^\d+$/, read: m => parseDateToMs(Number(m[0])) },
];

/** The first tolerant pattern that matches the trimmed string. */
function readTolerantString(value: string): number | null {
    const trimmed = value.trim();
    for (const pattern of TOLERANT_PATTERNS) {
        const match = trimmed.match(pattern.regex);
        if (match) {
            return pattern.read(match);
        }
    }
    return null;
}

// ── The two stages ──────────────────────────────────────────────────

/**
 * Stage 1 — a detected date column: the engine only. Detected format first, then the engine's
 * other patterns: they are disjoint, so this only adds the minority formats of a mixed column
 * (the detector names a column by its majority format), never a second reading.
 */
const readStrict =
    (format: DateFormatId | undefined): DateReader =>
    value =>
        parseDateToMs(value, format) ?? parseDateToMs(value);

/** Stage 2 — a date column without detection: `Date` instances, the engine, then the tolerant patterns. */
const readTolerant: DateReader = value => {
    if (value instanceof Date) {
        return value.getTime();
    }
    return parseDateToMs(value) ?? (typeof value === 'string' ? readTolerantString(value) : null);
};

/** The instant only when a `Date` can hold it (the engine passes any epoch ≥ 1e11 through). */
const representable = (ms: number | null): number | null =>
    ms !== null && Number.isFinite(new Date(ms).getTime()) ? ms : null;

// ── Public interface ────────────────────────────────────────────────

/**
 * The Datums-Leser of one Column.
 *
 * @param detected The Column's detection by the analysis engine; none for values that have no
 *   Column (a filter value, the format preview).
 * @returns The reader: stage 1 for a detected date column, stage 2 otherwise.
 */
export function dateReader(detected?: DateDetection): DateReader {
    const read = detected?.type === 'date' ? readStrict(detected.dateFormat) : readTolerant;
    return value => representable(read(value));
}

/**
 * The local calendar day of an instant — the one place that decides it, for the date filter,
 * conditional styles and the filter dialog's date input alike.
 *
 * @param ms An instant in Unix ms, as a {@link DateReader} returns it.
 * @returns Its local day as local midnight and as `YYYY-MM-DD`.
 */
export function localDay(ms: number): LocalDay {
    const day = new Date(ms);
    day.setHours(0, 0, 0, 0);
    const pad = (n: number, width = 2): string => String(n).padStart(width, '0');
    return {
        start: day.getTime(),
        key: `${pad(day.getFullYear(), 4)}-${pad(day.getMonth() + 1)}-${pad(day.getDate())}`,
    };
}
