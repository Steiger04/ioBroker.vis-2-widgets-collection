/**
 * Utility functions for column configuration encoding/decoding.
 *
 * @module JsonTableCollectionWidget/utils/columnConfig
 * @remarks
 * Provides UTF-8 safe Base64 encoding/decoding for column configs
 * to avoid vis-2's extractBinding regex matching curly braces in JSON arrays.
 */

import type { ColumnConfigEntry, ImageObjectFit } from '../types';

// ── Type badge colors ───────────────────────────────────────────

/** Color mapping for detected type badge chips in the editor UI. */
export const TYPE_COLORS: Record<string, string> = {
    string: '#2196f3',
    number: '#4caf50',
    boolean: '#ff9800',
    date: '#9c27b0',
    image: '#3f51b5',
    null: '#9e9e9e',
    object: '#795548',
    array: '#00bcd4',
    mixed: '#f44336',
};

// ── Image format defaults ───────────────────────────────────────

/**
 * Default render settings for image columns. Single source of truth shared by the
 * cell renderer and the editor preview so both agree on unset values.
 */
export const IMAGE_FORMAT_DEFAULTS: { size: number; objectFit: ImageObjectFit } = {
    size: 64,
    objectFit: 'contain',
};

// ── Helper: UTF-8 safe Base64 encoding/decoding ──────────────────

// The encoding helpers live in the shared `lib/encoding` module (single source, also used by
// the Echarts widget). Re-exported here so existing JsonTable import sites keep working.
export { utf8ToBase64, base64ToUtf8 } from '../../lib/encoding';
import { decodeBlob } from '../../lib/encoding';

// ── Helper: parse persisted config ──────────────────────────────

/**
 * Parse stored column config JSON string from widget data.
 * Returns empty array for invalid/missing input (backward compatible).
 *
 * Supports Base64-encoded values (prefixed with 'b64:') to avoid vis-2's extractBinding
 * regex matching curly braces in JSON arrays. Plain JSON strings are still supported
 * for backward compatibility with existing configs.
 *
 * @param raw - Raw column config string (JSON or Base64-encoded JSON)
 * @returns Array of column configurations, or empty array if parsing fails
 */
export function parseColumnConfig(raw: string | undefined | null): ColumnConfigEntry[] {
    if (!raw) {
        return [];
    }
    try {
        // decodeBlob strips the `b64:` prefix and decodes when present (avoids extractBinding).
        const parsed = JSON.parse(decodeBlob(raw));
        return Array.isArray(parsed) ? (parsed as ColumnConfigEntry[]) : [];
    } catch {
        return [];
    }
}
