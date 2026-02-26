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
import type { DateFormatId } from '../../hooks/useJsonTableAnalysis/types';

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

/** Options for formatting a numeric value. */
export interface NumberFormatOptions {
    /** Number of decimal places (0-10). @default 2 */
    decimals?: number;
    /** Prefix prepended to formatted value, e.g. "$" */
    prefix?: string;
    /** Suffix appended to formatted value, e.g. "%" */
    suffix?: string;
    /** Insert thousands separator (comma). @default false */
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
    const { decimals = 2, prefix = '', suffix = '', thousands = false } = options;

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
 * Normalize any supported date value to a YYYY-MM-DD ISO date string.
 * Uses inputFormat for deterministic parsing of European/US formats.
 * Falls back to the Date constructor for ISO-8601 and unknown formats.
 *
 * @param value - Raw date value (string, number, or Date).
 * @param inputFormat - Detected input format from column analysis (optional).
 * @returns YYYY-MM-DD string, or '' for unparseable values.
 */
export function normalizeToIsoDate(value: unknown, inputFormat?: DateFormatId): string {
    if (value === null || value === undefined) {
        return '';
    }

    // Numbers: epoch-ms (≥1e11) or epoch-s
    // Using 1e11 threshold to correctly handle pre-2001 millisecond timestamps
    if (typeof value === 'number') {
        const d = new Date(value >= 1e11 ? value : value * 1000);
        return isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
    }

    if (value instanceof Date) {
        return isNaN(value.getTime()) ? '' : value.toISOString().slice(0, 10);
    }

    if (typeof value !== 'string') {
        return '';
    }
    const trimmed = value.trim();
    if (!trimmed) {
        return '';
    }

    // European: dd.MM.yyyy[...] — only when explicitly detected to avoid day/month ambiguity
    if (inputFormat?.startsWith('dd.MM.yyyy')) {
        const m = trimmed.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
        return m ? `${m[3]}-${m[2]}-${m[1]}` : '';
    }

    // US: MM/dd/yyyy[...] — only when explicitly detected
    if (inputFormat?.startsWith('MM/dd/yyyy')) {
        const m = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
        return m ? `${m[3]}-${m[1]}-${m[2]}` : '';
    }

    // ISO-8601 / YYYY-MM-DD / unknown — Date constructor handles these reliably
    const d = new Date(trimmed);
    return isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
}

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
 * @param value - Raw value (string, number, or Date).
 * @param formatString - Format string with tokens. @default "yyyy-MM-dd"
 * @param _inputFormat - Detected input format for correct string parsing (optional).
 * @returns Formatted date string or original value as string on error.
 */
export function formatDateValue(value: unknown, formatString?: string, _inputFormat?: DateFormatId): string {
    if (value === null || value === undefined || value === '') {
        return '';
    }

    try {
        let date: Date;

        if (typeof value === 'string') {
            const trimmed = value.trim();

            // For pure YYYY-MM-DD format (without time/timezone): parse directly to avoid UTC timezone trap.
            // new Date("2024-12-01") interprets as UTC midnight, but getDate()/getMonth()
            // use local timezone. In UTC-5, "2024-12-01" UTC midnight becomes Nov 30 locally!
            // Solution: Use local time constructor new Date(year, month-1, day) instead.
            if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
                const [year, month, day] = trimmed.split('-').map(Number);
                date = new Date(year, month - 1, day); // Local time, not UTC
            } else {
                // Strings with time/timezone component: parse directly with Date constructor
                // which preserves time and timezone information (e.g., ISO-8601 with time)
                date = new Date(trimmed);
            }
        } else if (typeof value === 'number') {
            // Epoch timestamp: detect seconds vs milliseconds
            // Using 1e11 threshold to correctly handle pre-2001 millisecond timestamps
            date = new Date(value >= 1e11 ? value : value * 1000);
        } else if (value instanceof Date) {
            date = value;
        } else {
            return toDisplayString(value);
        }

        // Validate parsed date
        if (isNaN(date.getTime())) {
            return toDisplayString(value);
        }

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
 * @param trueLabel - Label for true values. @default "true"
 * @param falseLabel - Label for false values. @default "false"
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
