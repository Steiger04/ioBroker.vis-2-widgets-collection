/**
 * Shared type definitions for JsonTableCollectionWidget column configuration.
 *
 * @module JsonTableCollectionWidget/types
 * @remarks
 * These types define the enhanced column configuration that supports
 * formatting (number, date, boolean), conditional cell styling,
 * and per-column sorting/filtering overrides.
 *
 * Backward compatible: legacy configs without format/cellStyle
 * properties are automatically supported (all new fields are optional).
 */

import type { DateFormatId } from '../hooks/useJsonTableAnalysis/types';
import type { JsonLogicRule } from './utils/jsonLogicEngine';

// ── Column Format Configuration ─────────────────────────────────

/** Supported format types for cell value rendering. */
export type ColumnFormatType = 'number' | 'date' | 'boolean' | 'string';

/**
 * Formatting configuration for a single column.
 *
 * Only one format type is active per column. Sub-properties
 * are conditionally relevant based on `type`.
 */
export interface ColumnFormatConfig {
    /** Active format type */
    type: ColumnFormatType;

    // ── Number formatting ───────────────────────────────────────
    /** Decimal places (0-10). @default 2 */
    numberDecimals?: number;
    /** Prefix prepended to the value, e.g. "$", "€" */
    numberPrefix?: string;
    /** Suffix appended to the value, e.g. "%", " kg" */
    numberSuffix?: string;
    /** Insert thousands separator (comma). @default false */
    numberThousandsSeparator?: boolean;

    // ── Date formatting ─────────────────────────────────────────
    /** Output format string (date-fns compatible), e.g. "yyyy-MM-dd" */
    dateFormat?: string;
    /** Detected input format from analysis (informational, read-only) */
    dateInputFormat?: DateFormatId;

    // ── Boolean formatting ──────────────────────────────────────
    /** Display label for true values. @default "true" */
    booleanTrue?: string;
    /** Display label for false values. @default "false" */
    booleanFalse?: string;

    // ── String formatting ───────────────────────────────────────
    /** Case transformation applied to the string value. */
    stringCase?: 'none' | 'upper' | 'lower' | 'title';
    /** Prefix prepended to the displayed value. */
    stringPrefix?: string;
    /** Suffix appended to the displayed value. */
    stringSuffix?: string;
    /** Trim leading/trailing whitespace before other transformations. */
    stringTrim?: boolean;
    /** Truncate display value to this many characters (appends "…"). */
    stringMaxLength?: number;
    /** Regex pattern applied to extract a substring for display. */
    stringRegex?: string;
    /** Capture group index to use from regex match (0 = full match). @default 0 */
    stringRegexGroup?: number;
    /** Regex flags, e.g. "i" for case-insensitive. */
    stringRegexFlags?: string;
    /** Static font weight for the column. Overrideable by conditional cell rules. */
    stringFontWeight?: 'normal' | 'bold';
    /** Static font style for the column. Overrideable by conditional cell rules. */
    stringFontStyle?: 'normal' | 'italic';
    /** Static font size in px for the column. Overrideable by conditional cell rules. */
    stringFontSize?: number;
    /** Static text color (CSS color string) for the column. Overrideable by conditional cell rules. */
    stringTextColor?: string;
}

// ── Conditional Cell Styling ────────────────────────────────────

/**
 * A single conditional styling rule applied to cell values.
 *
 * The `logic` field is a json-logic-engine rule object evaluated against
 * the cell's raw value via `{ value: rawValue }` context. First matching rule wins.
 *
 * @example
 * ```ts
 * { logic: { ">": [{"var":"value"}, 100] }, backgroundColor: '#ffebee', textColor: '#c62828', fontWeight: 'bold' }
 * ```
 */
export interface ColumnStyleRule {
    /** Stable identifier for React keying; generated on rule creation */
    id?: string;
    /** json-logic-engine rule evaluated with `{ value: rawValue }` context */
    logic?: JsonLogicRule;
    /** Cell background color (CSS color string) */
    backgroundColor?: string;
    /** Cell text color (CSS color string) */
    textColor?: string;
    /** Font weight override */
    fontWeight?: 'normal' | 'bold';
    /** Font style override */
    fontStyle?: 'normal' | 'italic';
}

// ── Enhanced Column Configuration ───────────────────────────────

/**
 * Per-column configuration persisted in widget data as JSON string.
 *
 * Extends the original ColumnConfigEntry with formatting, conditional
 * styling, and per-column feature overrides. Fully backward compatible:
 * legacy configs without new properties work unchanged.
 */
export interface ColumnConfigEntry {
    /** Dot-path column identifier, e.g. "order.items[0].sku" */
    path: string;
    /** Whether the column is visible in the DataGrid */
    visible: boolean;
    /** Display label for the column header */
    headerName: string;
    /** Fixed column width in pixels (flex layout if undefined) */
    width?: number;
    /** Text alignment within the column */
    align?: 'left' | 'center' | 'right';

    // ── New: Formatting ─────────────────────────────────────────
    /** Cell value formatting configuration */
    format?: ColumnFormatConfig;

    // ── New: Conditional Styling ────────────────────────────────
    /** Ordered list of conditional styling rules */
    cellStyle?: ColumnStyleRule[];
    /**
     * Evaluation mode for conditional styling rules.
     * 'first-match' (default): stops at first matching rule.
     * 'all-match': applies all matching rules; for conflicting properties
     *              the higher-priority rule (lower index) wins.
     */
    cellStyleMode?: 'first-match' | 'all-match';

    // ── New: Per-column overrides ───────────────────────────────
    /** Override global sorting setting for this column */
    sortable?: boolean;
    /** Override global filtering setting for this column */
    filterable?: boolean;
}

// ── Type badge colors ───────────────────────────────────────────

/** Color mapping for detected type badge chips in the editor UI. */
export const TYPE_COLORS: Record<string, string> = {
    string: '#2196f3',
    number: '#4caf50',
    boolean: '#ff9800',
    date: '#9c27b0',
    null: '#9e9e9e',
    object: '#795548',
    array: '#00bcd4',
    mixed: '#f44336',
};

// ── Helper: UTF-8 safe Base64 encoding/decoding ──────────────────

/**
 * Encode a UTF-8 string to Base64 safely.
 * Handles non-ASCII characters (e.g., German umlauts, Chinese characters).
 */
export function utf8ToBase64(str: string): string {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

/**
 * Decode a Base64 string to UTF-8 safely.
 * Handles non-ASCII characters encoded with utf8ToBase64.
 */
export function base64ToUtf8(base64: string): string {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
}

// ── Helper: parse persisted config ──────────────────────────────

/** Prefix for Base64-encoded column config to avoid extractBinding warnings in vis-2 */
const B64_PREFIX = 'b64:';

/**
 * Parse stored column config JSON string from widget data.
 * Returns empty array for invalid/missing input (backward compatible).
 *
 * Supports Base64-encoded values (prefixed with 'b64:') to avoid vis-2's extractBinding
 * regex matching curly braces in JSON arrays. Plain JSON strings are still supported
 * for backward compatibility with existing configs.
 */
export function parseColumnConfig(raw: string | undefined | null): ColumnConfigEntry[] {
    if (!raw) {
        return [];
    }
    try {
        // Check for Base64-encoded value (avoids extractBinding warnings)
        const jsonString = raw.startsWith(B64_PREFIX) ? base64ToUtf8(raw.slice(B64_PREFIX.length)) : raw;
        const parsed = JSON.parse(jsonString);
        return Array.isArray(parsed) ? (parsed as ColumnConfigEntry[]) : [];
    } catch {
        return [];
    }
}
