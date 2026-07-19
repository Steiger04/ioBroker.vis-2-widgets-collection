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

/** Prefix for Base64-encoded column config to avoid extractBinding warnings in vis-2 */
const B64_PREFIX = 'b64:';

/**
 * Encode a UTF-8 string to Base64 safely.
 * Handles non-ASCII characters (e.g., German umlauts, Chinese characters).
 *
 * @param str - The UTF-8 string to encode
 * @returns Base64 encoded string
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
 *
 * @param base64 - The Base64 string to decode
 * @returns Decoded UTF-8 string
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
        // Check for Base64-encoded value (avoids extractBinding warnings)
        const jsonString = raw.startsWith(B64_PREFIX) ? base64ToUtf8(raw.slice(B64_PREFIX.length)) : raw;
        const parsed = JSON.parse(jsonString);
        return Array.isArray(parsed) ? (parsed as ColumnConfigEntry[]) : [];
    } catch {
        return [];
    }
}
