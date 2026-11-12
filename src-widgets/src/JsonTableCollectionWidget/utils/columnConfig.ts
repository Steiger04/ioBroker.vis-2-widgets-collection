/**
 * Utility functions for column configuration encoding/decoding.
 *
 * @module JsonTableCollectionWidget/utils/columnConfig
 * @remarks
 * Provides UTF-8 safe Base64 encoding/decoding for column configs
 * to avoid vis-2's extractBinding regex matching curly braces in JSON arrays.
 */

import type { ColumnConfigEntry, ColumnFormatType, ColumnStyleRule, ImageObjectFit } from '../types';

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
import { isRecord, isText, oneOf, readEntries, readListBlob, type KeyKinds } from '../../lib/usableJson';

// ── Helper: parse persisted config ──────────────────────────────

/** An entry that names a Column: an object with a text `path`. */
const isColumnEntry = (entry: unknown): entry is ColumnConfigEntry => isRecord(entry) && typeof entry.path === 'string';

/** The Format types, all of them (the record makes a new one a type error here). */
const FORMAT_TYPES: Readonly<Record<ColumnFormatType, true>> = {
    number: true,
    date: true,
    boolean: true,
    string: true,
    image: true,
};

/** A per-column capability override: on, off or the type default. */
const isOverride = oneOf(true, false, 'auto');

/**
 * The kind of each key of a Column entry the table reads ({@link ColumnConfigEntry}). The inner
 * keys of `format` stay with the formatters, which read every value defensively.
 */
const ENTRY_KEYS: KeyKinds<ColumnConfigEntry> = {
    // Already demanded of every entry ({@link isColumnEntry}).
    path: isText,
    visible: value => typeof value === 'boolean',
    headerName: isText,
    // A width as the view state reads one: a positive finite number of pixels.
    width: value => typeof value === 'number' && Number.isFinite(value) && value > 0,
    align: oneOf('left', 'center', 'right'),
    format: value => isRecord(value) && typeof value.type === 'string' && Object.hasOwn(FORMAT_TYPES, value.type),
    cellStyle: Array.isArray,
    cellStyleMode: oneOf('first-match', 'all-match'),
    sortable: isOverride,
    filterable: isOverride,
    enableHiding: isOverride,
};

/** The kind of each key of a conditional style rule ({@link ColumnStyleRule}). */
const RULE_KEYS: KeyKinds<ColumnStyleRule> = {
    id: isText,
    // A json-logic rule object; what it says is the engine's to judge (it never throws).
    logic: isRecord,
    backgroundColor: isText,
    textColor: isText,
    fontWeight: oneOf('normal', 'bold'),
    fontStyle: oneOf('normal', 'italic'),
};

/** The entry with its rules that are objects, each without its broken keys. */
function withUsableRules(entry: ColumnConfigEntry): ColumnConfigEntry {
    const rules = entry.cellStyle as unknown[];
    const usable = readEntries(rules, RULE_KEYS, false);
    return usable.length === rules.length && usable.every((rule, index) => rule === rules[index])
        ? entry
        : { ...entry, cellStyle: usable };
}

/**
 * Parse the stored column configuration: a JSON list of Column entries, as `b64:` blob (the column
 * editor's form, which vis-2's `extractBinding` cannot mistake for a binding) or as plain JSON
 * (the field declares `storedValue: LIST_BLOB`, the one rule of the KI-Integration decides the top
 * level, `lib/usableWidgetData`, ADR-0114).
 *
 * The runtime reads it from the widget data the Rückfall-Regel has checked, the column editor
 * from the raw data vis-2 hands it, so the top level is judged here by the same rule: a value
 * that is no JSON list (plain or `b64:` blob) reads as no configuration — the Spalten-Merge over
 * an empty configuration, i.e. the automatically found Columns.
 *
 * Inside the list, what the table cannot use reads as not written: an entry that is no Column
 * (no object, or without a text `path`) is left out, a key of an entry whose value is not of the
 * key's kind ({@link ENTRY_KEYS}) is left out of the entry — the table then reads the key as it
 * reads it unset. The same holds one level down for the conditional styles: a rule that is no
 * object is left out, a key of a rule not of its kind ({@link RULE_KEYS}) is left out of the rule.
 * Keys it does not know stay as written.
 *
 * @param raw - The stored `columnConfig`.
 * @returns The Column entries; empty for an unset or unusable configuration.
 */
export function parseColumnConfig(raw: unknown): ColumnConfigEntry[] {
    return readListBlob(raw, ENTRY_KEYS, false, isColumnEntry).map(entry =>
        Array.isArray(entry.cellStyle) ? withUsableRules(entry) : entry,
    );
}
