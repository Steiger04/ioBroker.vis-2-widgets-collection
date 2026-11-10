/**
 * Value formatting and condition evaluation utilities for JsonTableCollectionWidget.
 *
 * @module JsonTableCollectionWidget/utils/formatters
 * @remarks
 * Pure functions for formatting cell values (number, date, boolean)
 * and evaluating conditional styling expressions. All functions are
 * designed to be safe: they never throw and return sensible fallbacks.
 */

import type { ColumnFormatConfig } from '../types';
import type { DateReader } from '../dateReader';

// Re-export DateFormatId for convenience
export type { DateFormatId } from '../../hooks/useJsonTableAnalysis/types';

/**
 * Safely convert an unknown value to a display string.
 * Handles objects (JSON.stringify), null/undefined (empty), and primitives.
 */
function toDisplayString(value: unknown): string {
    if (value === null || value === undefined) {
        return '';
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    if (typeof value === 'string') {
        return value;
    }
    return `${value as number | boolean}`;
}

// ── Number Formatting ───────────────────────────────────────────

/** Minimum allowed decimal precision */
const MIN_DECIMALS = 0;

/** Maximum allowed decimal precision (JavaScript toFixed limit is 100, but 20 is practical) */
const MAX_DECIMALS = 20;

/** Default decimal precision when input is invalid */
const DEFAULT_DECIMALS = 2;

/**
 * Sanitize decimal precision to a safe range.
 *
 * @param decimals - Input decimal precision (may be invalid/null/undefined)
 * @returns Sanitized precision clamped to [0, 20] range with fallback to default
 */
function sanitizeDecimals(decimals: unknown): number {
    // Handle null, undefined, NaN, or non-finite numbers
    if (decimals === null || decimals === undefined) {
        return DEFAULT_DECIMALS;
    }

    const num = Number(decimals);

    // NaN or non-finite values fall back to default
    if (!Number.isFinite(num)) {
        return DEFAULT_DECIMALS;
    }

    // Clamp to valid range
    return Math.max(MIN_DECIMALS, Math.min(MAX_DECIMALS, Math.floor(num)));
}

/** Options for formatting a numeric value. */
export interface NumberFormatOptions {
    /**
     * Number of decimal places (0-20, will be clamped if out of range).
     *
     * @default 2
     */
    decimals?: number;
    /** Prefix prepended to formatted value, e.g. "$" */
    prefix?: string;
    /** Suffix appended to formatted value, e.g. "%" */
    suffix?: string;
    /**
     * Insert thousands separator (comma).
     *
     * @default false
     */
    thousands?: boolean;
}

/**
 * Format a numeric value with decimals, prefix, suffix, and optional thousands separator.
 *
 * @param value - Raw numeric value to format.
 * @param options - Formatting options.
 * @returns Formatted string, e.g. "$1,234.56 USD".
 * @example
 * ```ts
 * formatNumberValue(1234.567, { decimals: 2, prefix: '$', suffix: ' USD', thousands: true });
 * // → "$1,234.57 USD"
 * ```
 */
export function formatNumberValue(value: number, options: NumberFormatOptions = {}): string {
    const { prefix = '', suffix = '', thousands = false } = options;

    // Sanitize decimals to prevent toFixed() throwing RangeError
    const decimals = sanitizeDecimals(options.decimals);

    let formatted = value.toFixed(decimals);

    if (thousands) {
        const [intPart, decPart] = formatted.split('.');
        const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = decPart !== undefined ? `${withSeparator}.${decPart}` : withSeparator;
    }

    return `${prefix}${formatted}${suffix}`;
}

// ── Date Formatting ─────────────────────────────────────────────

/**
 * Predefined date format options offered in the column editor.
 * Each entry maps a display label to a date-fns compatible format string.
 */
export const DATE_FORMAT_OPTIONS: { label: string; value: string }[] = [
    { label: 'YYYY-MM-DD', value: 'yyyy-MM-dd' },
    { label: 'DD.MM.YYYY', value: 'dd.MM.yyyy' },
    { label: 'DD.MM.YYYY HH:mm', value: 'dd.MM.yyyy HH:mm' },
    { label: 'DD.MM.YYYY HH:mm:ss', value: 'dd.MM.yyyy HH:mm:ss' },
    { label: 'MM/DD/YYYY', value: 'MM/dd/yyyy' },
    { label: 'MM/DD/YYYY HH:mm', value: 'MM/dd/yyyy HH:mm' },
    { label: 'HH:mm:ss', value: 'HH:mm:ss' },
    { label: 'HH:mm', value: 'HH:mm' },
    { label: 'ISO-8601 (UTC)', value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" },
];

/**
 * Simple date formatting without external dependencies.
 *
 * Supports common format tokens:
 * - yyyy: 4-digit year
 * - MM: 2-digit month
 * - dd: 2-digit day
 * - HH: 2-digit hour (24h)
 * - mm: 2-digit minutes
 * - ss: 2-digit seconds
 * - SSS: 3-digit milliseconds
 *
 * The value is read through the Column's Datums-Leser (`../dateReader`, ADR-0093); a value it
 * cannot read shows its Raw value as text. Tokens format in the browser's LOCAL timezone —
 * the same local day that sorting, the date filter and conditional styles compare. The
 * `ISO-8601 (UTC)` option (`toISOString()`) is the user's explicit choice of UTC, so near
 * midnight its displayed day may differ from the local day those compare.
 *
 * @param value - Raw value.
 * @param formatString - Format string with tokens. Defaults to "yyyy-MM-dd".
 * @param read - The Column's Datums-Leser.
 * @returns Formatted date string, or the Raw value as text when it is no date.
 */
export function formatDateValue(value: unknown, formatString: string | undefined, read: DateReader): string {
    if (value === null || value === undefined || value === '') {
        return '';
    }

    const ms = read(value);
    if (ms === null) {
        return toDisplayString(value);
    }

    try {
        const date = new Date(ms);
        const fmt = formatString || 'yyyy-MM-dd';

        // Manual token replacement (avoids date-fns dependency).
        // NOTE: All tokens use the browser's local timezone (getFullYear/getMonth/etc.).
        // For UTC output use the 'ISO-8601 (UTC)' format option which calls toISOString().
        const pad = (n: number, len = 2): string => String(n).padStart(len, '0');
        const tokens: Record<string, string> = {
            yyyy: String(date.getFullYear()),
            MM: pad(date.getMonth() + 1),
            dd: pad(date.getDate()),
            HH: pad(date.getHours()),
            mm: pad(date.getMinutes()),
            ss: pad(date.getSeconds()),
            SSS: pad(date.getMilliseconds(), 3),
        };

        // Check for ISO format request (exact match for date-fns ISO-8601 UTC format)
        if (fmt === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(fmt)) {
            return date.toISOString();
        }

        let result = fmt;
        // Replace longest tokens first to avoid partial matches
        for (const [token, replacement] of Object.entries(tokens).sort((a, b) => b[0].length - a[0].length)) {
            result = result.replaceAll(token, replacement);
        }

        return result;
    } catch {
        return toDisplayString(value);
    }
}

// ── Boolean Formatting ──────────────────────────────────────────

/**
 * Format a boolean value using custom labels.
 *
 * @param value - Raw cell value.
 * @param trueLabel - Label for true values. Defaults to "true".
 * @param falseLabel - Label for false values. Defaults to "false".
 * @returns Formatted string.
 */
export function formatBooleanValue(value: unknown, trueLabel = 'true', falseLabel = 'false'): string {
    if (typeof value === 'boolean') {
        return value ? trueLabel : falseLabel;
    }
    return toDisplayString(value);
}

/**
 * Apply string-type formatting transformations to a string value.
 *
 * Order of operations:
 * 1. Trim whitespace (if enabled)
 * 2. Regex extraction (capture group or full match)
 * 3. Case transformation
 * 4. Max-length truncation (appends "…")
 * 5. Prefix / suffix
 *
 * @param raw - The raw string value to format.
 * @param format - String format configuration from ColumnFormatConfig.
 * @returns Formatted string (never throws; returns raw on regex error).
 */
export function formatStringValue(raw: string, format: ColumnFormatConfig): string {
    let result = format.stringTrim ? raw.trim() : raw;

    if (format.stringRegex) {
        // Limit regex pattern length to prevent ReDoS attacks
        const MAX_REGEX_LENGTH = 200;
        if (format.stringRegex.length <= MAX_REGEX_LENGTH) {
            try {
                const re = new RegExp(format.stringRegex, format.stringRegexFlags ?? '');
                const match = result.match(re);
                if (match) {
                    result = match[format.stringRegexGroup ?? 0] ?? result;
                }
            } catch {
                // invalid regex pattern — keep value unchanged
            }
        }
    }

    if (format.stringCase === 'upper') {
        result = result.toUpperCase();
    } else if (format.stringCase === 'lower') {
        result = result.toLowerCase();
    } else if (format.stringCase === 'title') {
        result = result.replace(/\b\w/g, c => c.toUpperCase());
    }

    if (format.stringMaxLength && result.length > format.stringMaxLength) {
        result = `${result.slice(0, format.stringMaxLength)}…`;
    }

    const pre = format.stringPrefix ?? '';
    const suf = format.stringSuffix ?? '';
    return pre || suf ? `${pre}${result}${suf}` : result;
}
