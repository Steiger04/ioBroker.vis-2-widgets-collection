/**
 * Heuristic type detection for column values.
 *
 * Detects: string, number, boolean, date, null, array, object, mixed.
 * Date detection supports:
 *   - ISO-8601 / RFC-3339 (e.g. "2024-12-01T10:15:30Z")
 *   - YYYY-MM-DD (e.g. "2024-12-01")
 *   - dd.MM.yyyy, dd.MM.yyyy HH:mm, dd.MM.yyyy HH:mm:ss
 *   - MM/dd/yyyy, MM/dd/yyyy HH:mm, MM/dd/yyyy HH:mm:ss
 *   - Epoch seconds (number >= 1e9 and < 1e12)
 *   - Epoch milliseconds (number >= 1e12)
 */

import type { DateFormatId, DetectedType } from './types';

/** Result of detecting a single value's type */
export interface TypeDetectionResult {
    /** Primitive JS type or refined type */
    type: DetectedType;
    /** Date format if type is "date" */
    dateFormat?: DateFormatId;
}

// --- Date format patterns ---

/** ISO-8601 full datetime with timezone: 2024-12-01T10:15:30Z or 2024-12-01T10:15:30+02:00 */
const ISO_FULL_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;

/** Plain date: 2024-12-01 */
const YYYY_MM_DD_RE = /^\d{4}-\d{2}-\d{2}$/;

/** European date: dd.MM.yyyy */
const DD_MM_YYYY_RE = /^(\d{2})\.(\d{2})\.(\d{4})$/;

/** European date with time: dd.MM.yyyy HH:mm */
const DD_MM_YYYY_HM_RE = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/;

/** European date with time+seconds: dd.MM.yyyy HH:mm:ss */
const DD_MM_YYYY_HMS_RE = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;

/** US date: MM/dd/yyyy */
const MM_DD_YYYY_RE = /^(\d{2})\/(\d{2})\/(\d{4})$/;

/** US date with time: MM/dd/yyyy HH:mm */
const MM_DD_YYYY_HM_RE = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/;

/** US date with time+seconds: MM/dd/yyyy HH:mm:ss */
const MM_DD_YYYY_HMS_RE = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;

interface DatePattern {
    regex: RegExp;
    format: DateFormatId;
    /** Validate parsed groups to confirm a plausible date */
    validate?: (match: RegExpMatchArray) => boolean;
}

/** Validate day (1-31) and month (1-12) ranges for European format */
function validateDayMonth(day: number, month: number): boolean {
    return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

/** Validate month (1-12) and day (1-31) ranges for US format */
function validateMonthDay(month: number, day: number): boolean {
    return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}

/** Validate hour (0-23), minute (0-59), second (0-59) */
function validateTime(hour: number, minute: number, second?: number): boolean {
    return (
        hour >= 0 &&
        hour <= 23 &&
        minute >= 0 &&
        minute <= 59 &&
        (second === undefined || (second >= 0 && second <= 59))
    );
}

const DATE_PATTERNS: DatePattern[] = [
    {
        regex: ISO_FULL_RE,
        format: 'ISO-8601',
    },
    {
        regex: YYYY_MM_DD_RE,
        format: 'YYYY-MM-DD',
        validate: match => {
            const month = parseInt(match[0].slice(5, 7), 10);
            const day = parseInt(match[0].slice(8, 10), 10);
            return validateDayMonth(day, month);
        },
    },
    {
        regex: DD_MM_YYYY_HMS_RE,
        format: 'dd.MM.yyyy HH:mm:ss',
        validate: match => {
            const day = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            const hour = parseInt(match[4], 10);
            const minute = parseInt(match[5], 10);
            const second = parseInt(match[6], 10);
            return validateDayMonth(day, month) && validateTime(hour, minute, second);
        },
    },
    {
        regex: DD_MM_YYYY_HM_RE,
        format: 'dd.MM.yyyy HH:mm',
        validate: match => {
            const day = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            const hour = parseInt(match[4], 10);
            const minute = parseInt(match[5], 10);
            return validateDayMonth(day, month) && validateTime(hour, minute);
        },
    },
    {
        regex: DD_MM_YYYY_RE,
        format: 'dd.MM.yyyy',
        validate: match => {
            const day = parseInt(match[1], 10);
            const month = parseInt(match[2], 10);
            return validateDayMonth(day, month);
        },
    },
    {
        regex: MM_DD_YYYY_HMS_RE,
        format: 'MM/dd/yyyy HH:mm:ss',
        validate: match => {
            const month = parseInt(match[1], 10);
            const day = parseInt(match[2], 10);
            const hour = parseInt(match[4], 10);
            const minute = parseInt(match[5], 10);
            const second = parseInt(match[6], 10);
            return validateMonthDay(month, day) && validateTime(hour, minute, second);
        },
    },
    {
        regex: MM_DD_YYYY_HM_RE,
        format: 'MM/dd/yyyy HH:mm',
        validate: match => {
            const month = parseInt(match[1], 10);
            const day = parseInt(match[2], 10);
            const hour = parseInt(match[4], 10);
            const minute = parseInt(match[5], 10);
            return validateMonthDay(month, day) && validateTime(hour, minute);
        },
    },
    {
        regex: MM_DD_YYYY_RE,
        format: 'MM/dd/yyyy',
        validate: match => {
            const month = parseInt(match[1], 10);
            const day = parseInt(match[2], 10);
            return validateMonthDay(month, day);
        },
    },
];

/**
 * Try to detect a date format from a string value.
 * Returns the format identifier if matched, or null.
 */
export function detectDateFromString(value: string): DateFormatId | null {
    const trimmed = value.trim();
    if (!trimmed) {
        return null;
    }

    for (const pattern of DATE_PATTERNS) {
        const match = trimmed.match(pattern.regex);
        if (match) {
            if (pattern.validate && !pattern.validate(match)) {
                continue;
            }
            return pattern.format;
        }
    }

    return null;
}

/**
 * Check if a numeric value could be an epoch timestamp.
 * - Epoch seconds: >= 1e9 (Sep 2001) and < 1e12
 * - Epoch milliseconds: >= 1e12
 *
 * Returns format identifier or null.
 */
export function detectDateFromNumber(value: number): DateFormatId | null {
    if (!Number.isFinite(value) || value < 0) {
        return null;
    }

    if (value >= 1e12) {
        return 'epoch-ms';
    }

    if (value >= 1e9) {
        return 'epoch-s';
    }

    return null;
}

/**
 * Detect the type of a single value.
 *
 * @param value - Any JSON value (primitive, object, array, null/undefined)
 * @returns Detection result with type and optional date format
 */
export function detectType(value: unknown): TypeDetectionResult {
    if (value === null || value === undefined) {
        return { type: 'null' };
    }

    if (typeof value === 'boolean') {
        return { type: 'boolean' };
    }

    if (typeof value === 'number') {
        const dateFormat = detectDateFromNumber(value);
        if (dateFormat) {
            return { type: 'date', dateFormat };
        }
        return { type: 'number' };
    }

    if (typeof value === 'string') {
        const dateFormat = detectDateFromString(value);
        if (dateFormat) {
            return { type: 'date', dateFormat };
        }
        return { type: 'string' };
    }

    if (Array.isArray(value)) {
        return { type: 'array' };
    }

    if (typeof value === 'object') {
        return { type: 'object' };
    }

    return { type: 'string' };
}

/**
 * Determine the primary type from a set of type counts.
 *
 * Rules:
 * - Ignore "null" when picking the primary type
 * - If only one non-null type exists → that type
 * - If "date" exists alongside "string" (and no other types) → "date" wins
 * - Otherwise → "mixed"
 *
 * @param typeCounts - Map of type → count
 * @returns The resolved primary type
 */
export function resolvePrimaryType(typeCounts: Record<string, number>): DetectedType {
    const nonNullTypes = Object.keys(typeCounts).filter(t => t !== 'null');

    if (nonNullTypes.length === 0) {
        return 'null';
    }

    if (nonNullTypes.length === 1) {
        return nonNullTypes[0] as DetectedType;
    }

    // Date + string is common (date is detected from string values)
    if (nonNullTypes.length === 2 && nonNullTypes.includes('date') && nonNullTypes.includes('string')) {
        return 'date';
    }

    return 'mixed';
}

/**
 * Determine the dominant date format from a set of format counts.
 * Returns the most frequent format, or undefined if none.
 */
export function resolveDateFormat(formatCounts: Record<string, number>): DateFormatId | undefined {
    let best: string | undefined;
    let bestCount = 0;

    for (const [format, count] of Object.entries(formatCounts)) {
        if (count > bestCount) {
            best = format;
            bestCount = count;
        }
    }

    return best as DateFormatId | undefined;
}
