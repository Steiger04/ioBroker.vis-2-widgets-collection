/**
 * Tabellarische payload parsing (ADR-0075) — the JSON-mode table family's pure engine.
 *
 * @module EchartsCollectionWidget/jsonTableParse
 * @remarks
 * The series-shaped reader (`parseJsonState`, ADR-0011) stays untouched beside this: the
 * SECOND payload family reads a rows array + authored column paths into chart series.
 * Column identity is AUTHORED (`ySeries` order = `seriesConfig` order — the user owns the
 * structure, the payload the values), so unlike the series-shaped family there is no
 * reconcile: a drifted path yields null points/values, never a vanished series.
 *
 * X is three-valued (ADR-0075 decision 4), derived from the x column's dominant type:
 *  - date (incl. epoch-s/ms — the shared engine detection) → `time`: `[ms, y]` points,
 *    sorted ascending STABLE (equal timestamps keep payload order; rows whose X fails to
 *    parse are dropped — a row without a position has none);
 *  - any other non-null type → `category`: per-row labels in payload order (first-occurrence
 *    order is inherent; duplicates are KEPT — no dedup, two rows may share a label and both
 *    keep their value);
 *  - no xPath, or a column without non-null values → `index`: labels `"1".."n"`.
 *
 * Y values run through `toPlottableNumber` (booleans → 1/0, non-numeric → a null gap).
 * Never throws — malformed input surfaces as `error` (the pipeline's error surface); a
 * missing yPath column is NOT an error, it renders an empty series (editor validation owns
 * that signal, decision 9).
 */
import { toPlottableNumber, type SeriesPoint } from './historyLogic';
import { parseDateToMs } from '../hooks/useJsonTableAnalysis/dateValue';
import { detectType, resolvePrimaryType } from '../hooks/useJsonTableAnalysis/typeDetector';

/** One table-series binding — the authored y column (dot-path, array indices supported) + name. */
export interface JsonTableYSeries {
    yPath: string;
    name?: string;
}

/** How the X dimension was derived from the payload (ADR-0075 decision 4). */
export type JsonTableXKind = 'time' | 'category' | 'index';

/** One parsed table series — points on a time X, plain values aligned to `categories` otherwise. */
export interface JsonTableSeries {
    name: string;
    data: SeriesPoint[] | (number | null)[];
}

/** What {@link parseJsonTableState} hands the pipeline. */
export interface JsonTableParseResult {
    series: JsonTableSeries[];
    xKind: JsonTableXKind;
    /** Per-row X labels — present for `category`/`index` (payload order, duplicates kept). */
    categories?: string[];
    /** Rows-array resolution / JSON error — rides the pipeline's error surface. */
    error?: string;
}

/** The authored table binding: where the rows live and which columns feed X and the Y series. */
export interface JsonTableSpec {
    /** Dot-path to the rows array (empty = the document itself must be the array). */
    rowPath?: string;
    /** X column; empty/absent → row-index X. */
    xPath?: string;
    ySeries: readonly JsonTableYSeries[];
}

/** A rows-array resolution: either the rows or the one hard error. */
export type ResolveRowsResult = { rows: unknown[] } | { error: string };

/** Fallback label for a row without a usable X value (the pie slice names ride it too, ADR-0075). */
const rowLabel = (i: number): string => `Zeile ${i + 1}`;

/** Tokenizer for dot-paths with optional array indices: `a.b[0].c` → `['a', 'b', 0, 'c']`. */
const PATH_TOKEN_RE = /([^.[\]]+)|\[(\d+)\]/g;

/**
 * Tolerant dot-path read (the JsonTable runtime's `row?.[cfg.path]` discipline): objects by
 * key, arrays by numeric token; any mismatch along the way reads as `undefined` — callers
 * turn that into null values / fallback labels, never an error.
 */
const resolvePathValue = (root: unknown, path: string): unknown => {
    if (!path) {
        return undefined;
    }
    let cur: unknown = root;
    for (const token of path.matchAll(PATH_TOKEN_RE)) {
        if (cur === null || typeof cur !== 'object') {
            return undefined;
        }
        if (token[2] !== undefined) {
            const arr = cur as unknown[];
            if (!Array.isArray(arr)) {
                return undefined;
            }
            cur = arr[+token[2]];
        } else {
            cur = (cur as Record<string, unknown>)[token[1]];
        }
    }
    return cur;
};

/**
 * Resolve the rows array of a parsed document. `rowPath` empty + a top-level array → the
 * document itself; otherwise the dot-path must land ON an array. Everything else is the
 * table family's ONE hard error (decision 9: a drifted rowPath is an error surface).
 */
export const resolveRows = (doc: unknown, rowPath?: string): ResolveRowsResult => {
    if (rowPath === undefined || rowPath === '') {
        if (Array.isArray(doc)) {
            return { rows: doc };
        }
        return { error: 'payload is not a rows array' };
    }
    const target = resolvePathValue(doc, rowPath);
    if (!Array.isArray(target)) {
        return { error: `rows path "${rowPath}" is not an array` };
    }
    return { rows: target };
};

/** The path's last dot-segment (`order.items[0].price` → `price`) — the display-name default. */
export const lastPathSegment = (path: string): string => {
    const idx = path.lastIndexOf('.');
    return idx >= 0 ? path.slice(idx + 1) : path;
};

/** Display name: the authored name wins; the default is the path's last segment. */
const displayName = (ys: JsonTableYSeries, k: number): string => {
    const name = ys.name?.trim();
    if (name) {
        return name;
    }
    if (ys.yPath) {
        const segment = lastPathSegment(ys.yPath);
        if (segment) {
            return segment;
        }
    }
    return `Series ${k + 1}`; // parseJsonState parity for the nameless case
};

/** One aligned cell per row: the row's y values, in `ySeries` order. */
const yCells = (row: unknown, ySeries: readonly JsonTableYSeries[]): (number | null)[] =>
    ySeries.map(ys => (ys.yPath ? toPlottableNumber(resolvePathValue(row, ys.yPath)) : null));

/**
 * Parse a tabellarische JSON payload into chart series (pure — the pipeline's table branch,
 * ADR-0075). Empty input is NOT an error (no payload yet ⇒ empty placeholder); a bad JSON
 * string or an unresolvable rows array is (the error surface).
 */
export const parseJsonTableState = (raw: string | undefined | null, spec: JsonTableSpec): JsonTableParseResult => {
    if (!raw) {
        return { series: [], xKind: 'index' };
    }
    let doc: unknown;
    try {
        doc = JSON.parse(raw);
    } catch (e) {
        return { series: [], xKind: 'index', error: (e as Error).message };
    }
    const resolved = resolveRows(doc, spec.rowPath);
    if ('error' in resolved) {
        return { series: [], xKind: 'index', error: resolved.error };
    }
    const rows = resolved.rows;
    // Y cells once per row (in `ySeries` order) — every X kind reads the same aligned cells.
    const cellsByRow = rows.map(row => yCells(row, spec.ySeries));

    // X kind: the DOMINANT non-null type of the x column — date → time, anything else with a
    // value → category, no column / no values → index (resolvePrimaryType folds a date+string
    // mix into 'date', the detector's own confidence rule). `xPath` is captured because
    // property narrowing does not survive into the map closure below.
    const xPath = spec.xPath;
    const xVals = xPath ? rows.map(r => resolvePathValue(r, xPath)) : undefined;
    const typeCounts: Record<string, number> = {};
    let nonNull = 0;
    for (const v of xVals ?? []) {
        if (v === null || v === undefined) {
            continue;
        }
        nonNull++;
        const t = detectType(v).type;
        typeCounts[t] = (typeCounts[t] ?? 0) + 1;
    }
    const primary = nonNull > 0 ? resolvePrimaryType(typeCounts) : null;

    if (primary === 'date') {
        // Time X: keep the rows whose X parses, then sort ascending STABLE — equal timestamps
        // keep payload order (Array#sort is stable), unparseable X drops the row (no position).
        const aligned = cellsByRow
            .map((ys, i) => ({ xMs: parseDateToMs(xVals![i]), ys }))
            .filter((r): r is { xMs: number; ys: (number | null)[] } => r.xMs !== null);
        aligned.sort((a, b) => a.xMs - b.xMs);
        return {
            series: spec.ySeries.map((ys, k) => ({
                name: displayName(ys, k),
                data: aligned.map(r => [r.xMs, r.ys[k] ?? null] as SeriesPoint),
            })),
            xKind: 'time',
        };
    }

    // Both label-based kinds emit the SAME series shape — one per binding, the per-row cell
    // values aligned to the labels below (only the labels themselves differ).
    const plainSeries = spec.ySeries.map((ys, k) => ({
        name: displayName(ys, k),
        data: cellsByRow.map(cells => cells[k] ?? null),
    }));

    if (primary !== null) {
        // Category X: per-row labels in payload order, duplicates kept (decision 4: no dedup).
        // Only primitives stringify — objects/arrays/missing values fall back to the row label
        // ('[object Object]' would read worse than nothing).
        const categories = xVals!.map((v, i) =>
            typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'bigint'
                ? String(v)
                : rowLabel(i),
        );
        return { series: plainSeries, xKind: 'category', categories };
    }

    // Index X (no xPath, or a column without any non-null value): labels 1..n.
    return { series: plainSeries, xKind: 'index', categories: rows.map((_, i) => String(i + 1)) };
};
