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
import { isUsableValue, type StoredValue } from '../../lib/usableWidgetData';

// ── Helper: parse persisted config ──────────────────────────────

/**
 * What `columnConfig` stores: a JSON list of Column entries, as `b64:` blob (the column
 * editor's form, which vis-2's `extractBinding` cannot mistake for a binding) or as plain JSON.
 * Declared on the field (`storedValue`) and read here: the one rule of the KI-Integration
 * (`lib/usableWidgetData`, ADR-0114) decides the top level.
 */
export const COLUMN_CONFIG_VALUE: StoredValue = { json: 'array' };

/**
 * Parse the stored column configuration.
 *
 * The runtime reads it from the widget data the Rückfall-Regel has checked, the column editor
 * from the raw data vis-2 hands it, so the top level is judged here by the same rule: a value
 * that is no JSON list (plain or `b64:` blob) reads as no configuration — the Spalten-Merge over
 * an empty configuration, i.e. the automatically found Columns.
 *
 * @param raw - The stored `columnConfig`.
 * @returns The Column entries; empty for an unset or unusable configuration.
 */
export function parseColumnConfig(raw: unknown): ColumnConfigEntry[] {
    if (typeof raw !== 'string' || raw === '' || !isUsableValue(COLUMN_CONFIG_VALUE, raw)) {
        return [];
    }
    return JSON.parse(decodeBlob(raw)) as ColumnConfigEntry[];
}
