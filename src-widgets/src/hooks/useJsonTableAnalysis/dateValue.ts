/**
 * Pure date VALUE parsing — the parse side of the engine's type detection.
 *
 * @module hooks/useJsonTableAnalysis/dateValue
 * @remarks
 * `typeDetector` says WHAT a value is (a format id); this module turns the value into a
 * Unix-ms number — the piece the analysis engine never had. Pattern parity with
 * `typeDetector` is the contract: a column it detects as `date` always parses here.
 *
 *  - numbers: epoch-ms (>= 1e11) pass through, epoch-s (>= 1e9) ×1000 — smaller/negative/
 *    non-finite numbers are quantities, not timestamps → null;
 *  - ISO-8601 strings (Z or offset REQUIRED, like the detector) via `Date.parse`
 *    (TZ-aware — the offset is honoured, not the local clock);
 *  - `YYYY-MM-DD`, `dd.MM.yyyy( HH:mm(:ss))?`, `MM/dd/yyyy( HH:mm(:ss))?` parsed LOCALLY
 *    from the regex groups — these formats are local by intent; `Date.parse` would misread
 *    them (and its date-only arm is UTC, which would shift every value by the zone offset).
 *
 * Everything else → null. Pure, dependency-free (beyond the pattern front door); shared
 * with the JsonTable widget and the echarts table family (ADR-0075).
 */
import type { DateFormatId } from './types';
import { matchDatePattern } from './typeDetector';

/** Local date from numeric parts — null when the parts form an invalid date. */
const localMs = (y: number, month1: number, day: number, h = 0, min = 0, s = 0): number | null => {
    const ms = new Date(y, month1 - 1, day, h, min, s).getTime();
    return Number.isFinite(ms) ? ms : null;
};

/**
 * Parse a date value to Unix ms — `null` when the value is no date (or an implausible one).
 * `format` (the column's detected format) restricts string parsing to THAT pattern; without
 * it the pattern is detected from the value itself. Epoch formats apply to numbers only —
 * a numeric string is never an epoch (the detector agrees).
 */
export const parseDateToMs = (value: unknown, format?: DateFormatId): number | null => {
    if (typeof value === 'number') {
        if (!Number.isFinite(value) || value < 0) {
            return null;
        }
        // Same thresholds as detectDateFromNumber (1e9/1e11).
        if (value >= 1e11) {
            return value;
        }
        if (value >= 1e9) {
            return value * 1000;
        }
        return null;
    }
    if (typeof value !== 'string') {
        return null;
    }
    const hit = matchDatePattern(value, format);
    if (!hit) {
        return null;
    }
    const m = hit.match;
    switch (hit.format) {
        case 'ISO-8601': {
            const ms = Date.parse(m[0]);
            return Number.isNaN(ms) ? null : ms;
        }
        case 'YYYY-MM-DD':
            return localMs(+m[0].slice(0, 4), +m[0].slice(5, 7), +m[0].slice(8, 10));
        case 'dd.MM.yyyy':
            return localMs(+m[3], +m[2], +m[1]);
        case 'dd.MM.yyyy HH:mm':
            return localMs(+m[3], +m[2], +m[1], +m[4], +m[5]);
        case 'dd.MM.yyyy HH:mm:ss':
            return localMs(+m[3], +m[2], +m[1], +m[4], +m[5], +m[6]);
        case 'MM/dd/yyyy':
            return localMs(+m[3], +m[1], +m[2]);
        case 'MM/dd/yyyy HH:mm':
            return localMs(+m[3], +m[1], +m[2], +m[4], +m[5]);
        case 'MM/dd/yyyy HH:mm:ss':
            return localMs(+m[3], +m[1], +m[2], +m[4], +m[5], +m[6]);
        case 'epoch-s':
        case 'epoch-ms':
            return null; // epochs arrive as numbers — never as strings
        default:
            return null;
    }
};
