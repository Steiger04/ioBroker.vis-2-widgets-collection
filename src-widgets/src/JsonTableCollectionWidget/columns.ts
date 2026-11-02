/**
 * The ONE Spalten-Merge of the JSON table (CONTEXT.md, ADR-0094).
 *
 * @module JsonTableCollectionWidget/columns
 * @remarks
 * Pure. Turns a state value plus the saved column configuration into the table's Columns —
 * for the runtime and the column editor alike: one intake, the analysis engine (unchanged,
 * shared with the ECharts table family, ADR-0075), one merge rule. The table without a saved
 * configuration is the same merge over an empty configuration — there is no auto mode.
 */

import { analyzeJsonTable, type FlatRow, type JsonTableColumn } from '../hooks/useJsonTableAnalysis';
import { effectiveType, type EffectiveType } from './capabilities';
import { dateReader, type DateReader } from './dateReader';
import type { ColumnConfigEntry } from './types';

/** The flattening depth when `tableMaxDepth` is unset. */
const DEFAULT_MAX_DEPTH = 10;

/** One Column of the table, after the Spalten-Merge. */
export type EffectiveColumn = Readonly<{
    /** The Column's dot-path — also its id. */
    path: string;
    /** The header label: the configured header name, the path when that is empty. */
    header: string;
    /**
     * Its configuration: the saved entry, or the defaults of a newly found path — what the
     * column editor edits and saves.
     */
    config: ColumnConfigEntry;
    /** What the analysis engine found for the path (Detected type, date format, statistics). */
    detected: JsonTableColumn;
    /** The Effektiver Typ: the Format type when one is set, otherwise the Detected type. */
    type: EffectiveType;
    /** The Column's Datums-Leser, following the live detection (ADR-0093). */
    readDate: DateReader;
    /**
     * The configuration its cells render with: `config`, except that a detected image Column
     * without a Format type renders as image, centered unless aligned otherwise.
     */
    cellConfig: ColumnConfigEntry;
}>;

/** The JSON nests deeper than the flattening depth: some nested data stays unexpanded. */
export type DepthWarning = Readonly<{
    /** The deepest nesting found. */
    actual: number;
    /** The flattening depth in effect. */
    configured: number;
}>;

/** One table read from a state value — what runtime and editor show. */
export type JsonTable = Readonly<{
    /** The flattened rows (dot-path keys); empty when the value holds no data. Mutable for TanStack's `data`. */
    rows: FlatRow[];
    /** The Columns in table order, visible and hidden; empty when the value holds no data. */
    columns: readonly EffectiveColumn[];
    /** Set when the JSON nests deeper than the flattening depth. */
    depthWarning: DepthWarning | null;
}>;

/**
 * The intake: a JSON string is parsed first; an array is the rows, an object is one row,
 * anything else (a JSON primitive, invalid JSON, `null`, a number…) is no data.
 */
function intake(value: unknown): unknown[] {
    let parsed = value;
    if (typeof value === 'string') {
        try {
            parsed = JSON.parse(value);
        } catch {
            return [];
        }
    }
    if (Array.isArray(parsed)) {
        return parsed;
    }
    return typeof parsed === 'object' && parsed !== null ? [parsed] : [];
}

/**
 * The header name a path gets by default: its last segment.
 *
 * @param path A Column's dot-path, e.g. `order.items[0].sku`.
 * @returns The last segment (`sku`); the path itself when that is empty.
 */
export function headerNameOf(path: string): string {
    return path.split('.').pop() || path;
}

/**
 * The configuration of a newly found path: visible, default header name, every capability
 * left to the type default of its Effektiver Typ.
 *
 * @param path The Column's dot-path.
 * @returns The default configuration entry.
 */
export function defaultColumnConfig(path: string): ColumnConfigEntry {
    return {
        path,
        visible: true,
        headerName: headerNameOf(path),
        sortable: 'auto',
        filterable: 'auto',
        enableHiding: 'auto',
    };
}

/** A Column from its configuration and its detection. */
function effectiveColumn(config: ColumnConfigEntry, detected: JsonTableColumn): EffectiveColumn {
    const imageDefault = !config.format && detected.type === 'image';
    return {
        path: config.path,
        header: config.headerName || config.path,
        config,
        detected,
        type: effectiveType(config.format?.type, detected.type),
        readDate: dateReader(detected),
        cellConfig: imageDefault ? { ...config, format: { type: 'image' }, align: config.align ?? 'center' } : config,
    };
}

/**
 * The merge rule: saved Columns still present keep their saved order and settings, newly
 * found paths are appended (analysis order) with the default configuration, saved Columns
 * absent from the data are left out. A path counts once (the first saved entry wins).
 */
function merge(saved: readonly ColumnConfigEntry[], found: readonly JsonTableColumn[]): EffectiveColumn[] {
    const foundByPath = new Map(found.map(col => [col.path, col]));
    const merged = new Map<string, EffectiveColumn>();
    for (const config of saved) {
        const detected = foundByPath.get(config.path);
        if (detected && !merged.has(config.path)) {
            merged.set(config.path, effectiveColumn(config, detected));
        }
    }
    for (const detected of found) {
        if (!merged.has(detected.path)) {
            merged.set(detected.path, effectiveColumn(defaultColumnConfig(detected.path), detected));
        }
    }
    return [...merged.values()];
}

/**
 * Read the table of a state value.
 *
 * @param value The state value (a JSON string or an already parsed value).
 * @param saved The saved column configuration (empty when none is saved).
 * @param maxDepth The flattening depth (`tableMaxDepth`; unset ⇒ 10).
 * @returns The rows, the merged Columns and the depth warning.
 */
export function readJsonTable(value: unknown, saved: readonly ColumnConfigEntry[], maxDepth?: unknown): JsonTable {
    const configured = Number(maxDepth) || DEFAULT_MAX_DEPTH;
    const analysis = analyzeJsonTable(intake(value), { maxDepth: configured });
    const actual = analysis.meta.maxDepth;
    return {
        rows: analysis.rows,
        columns: merge(saved, analysis.columns),
        depthWarning: actual > configured ? { actual, configured } : null,
    };
}

/** The text key of an empty state — why no table is shown. */
export type EmptyStateText = 'json_table_no_data' | 'json_table_all_columns_hidden';

/**
 * Why no table is shown, in this order: no data (an empty payload included, saved
 * configuration or not), every Column hidden. A missing OID or an OID type that holds no JSON
 * never reaches the body: `CollectionBase` renders its own notice and no children then.
 *
 * @param columns The table's Columns.
 * @returns The empty state's text key; `null` when the table is shown.
 */
export function emptyState(columns: readonly EffectiveColumn[]): EmptyStateText | null {
    if (columns.length === 0) {
        return 'json_table_no_data';
    }
    return columns.some(column => column.config.visible) ? null : 'json_table_all_columns_hidden';
}

/**
 * The depth warning as the one localized text.
 *
 * @param warning The table's depth warning.
 * @param t The translation function (`translate` from `./translate` — never a bare `Generic.t`, which loses `this`).
 * @returns The text, placeholders filled.
 */
export function depthWarningText(warning: DepthWarning, t: (key: string) => string): string {
    return t('json_table_depth_warning')
        .replace('{{actual}}', String(warning.actual))
        .replace('{{configured}}', String(warning.configured));
}
