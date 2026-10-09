/**
 * Live schema analysis for the tabellarische payload family (ADR-0075 ticket 03) — the editor's
 * twin of the pipeline's parse.
 *
 * @module EchartsCollectionWidget/editor/useJsonTableSchema
 * @remarks
 * `useJsonSeriesNames` is the serien-förmig precedent: a LIVE subscription over the single
 * `jsonOid` (no one-shot `getState` discovery — the payload changes while the modal is open).
 * This hook adds the tabellarisch sight: WHICH arrays could be the rows (the Zuordnung's
 * Zeilenpfad options, with sample lengths) and WHICH columns the chosen rows array carries
 * (the shared engine's statistical analysis — `analyzeJsonTable`, here and ONLY here; the body
 * parses values, never statistics). The pure core {@link analyzeJsonTableSchema} is the test
 * surface; the hook is a thin memo over the raw string + rowPath. Both discovery walks are
 * depth-capped (`MAX_DISCOVERY_DEPTH`) and say so via `depthCapped` — the honest hint beside
 * the quiet truncation (the chart itself resolves authored paths at ANY depth).
 */
import { useMemo } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

import { analyzeJsonTable, type JsonTableColumn } from '../../hooks/useJsonTableAnalysis';
import { resolveRows } from '../jsonTableParse';
import { useSubscribedValues } from './useSubscribedValues';

/** One candidate rows array in the document — the Zeilenpfad select's options (ADR-0075). */
export interface JsonTableArrayPath {
    /** Dot-path to the array; '' = the document itself. */
    path: string;
    /** The array's sample length — the select's length badge. */
    length: number;
}

/** The schema sight the Zuordnung tab renders from. */
export interface JsonTableSchema {
    /** Every candidate rows array (object-key dot-paths + the top-level array). */
    arrayPaths: JsonTableArrayPath[];
    /** The columns of the CHOSEN rows array (empty until one resolves). */
    columns: JsonTableColumn[];
    /** Rows-resolution/JSON error — the honest hint, never a silent blank. */
    error?: string;
    /**
     * True when a discovery walk hit the depth cap (both walks share `MAX_DISCOVERY_DEPTH`):
     * payload paths beyond it exist but never reach the pickers. A sight hint, never an error —
     * the runtime resolves authored paths at ANY depth (no flattening outside the editor).
     */
    depthCapped?: boolean;
}

/** The discovery depth cap — the engine's own `maxDepth` default (flattener parity). */
const MAX_DISCOVERY_DEPTH = 10;

/**
 * Discover every array reachable through OBJECT keys (depth-capped): the top-level array plus
 * nested dot-paths (`data.rows`, `groups.members`). Array ELEMENTS are not descended into — a
 * path through an element would need an index (`rows[0].tags`), which is a column sight (the
 * flattener's `items[0].x`), not a rows-candidate sight. `capped` reports whether the walk
 * stopped early — deeper arrays exist in the payload but never become chips.
 */
const discoverArrayPaths = (doc: unknown): { paths: JsonTableArrayPath[]; capped: boolean } => {
    const out: JsonTableArrayPath[] = [];
    let capped = false;
    const visit = (node: unknown, path: string, depth: number): void => {
        if (depth > MAX_DISCOVERY_DEPTH) {
            capped = true;
            return;
        }
        if (Array.isArray(node)) {
            out.push({ path, length: node.length });
            return;
        }
        if (node !== null && typeof node === 'object') {
            for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
                visit(value, path ? `${path}.${key}` : key, depth + 1);
            }
        }
    };
    visit(doc, '', 0);
    return { paths: out, capped };
};

/**
 * The suggested default rows path (ADR-0075 decision 8): top level when the payload IS an
 *  array, else the LONGEST discovered path — a suggestion the tab shows, never silently sets.
 *  Structural (`path` is all it reads), so callers can pass any array-path view.
 */
export const suggestedRowPath = (arrayPaths: readonly { path: string }[]): string => {
    if (arrayPaths.some(p => p.path === '')) {
        return '';
    }
    let best = '';
    for (const p of arrayPaths) {
        if (p.path.length > best.length) {
            best = p.path;
        }
    }
    return best;
};

const EMPTY_SCHEMA: JsonTableSchema = { arrayPaths: [], columns: [] };

/** The depth-cap flag spread — `depthCapped: true` only when a walk actually hit the cap. */
const flagged = (capped: boolean): Pick<JsonTableSchema, 'depthCapped'> => (capped ? { depthCapped: true } : {});

/**
 * The flattener's own cap verdict: it records `meta.maxDepth` BEFORE the cap check, and the
 * only path past the cap stores the subtree RAW — so `meta.maxDepth > cap` is exactly
 * "truncation happened" (the same predicate the JSON-Table widget warns by).
 */
const columnsCapped = (analysis: ReturnType<typeof analyzeJsonTable>): boolean =>
    analysis.meta.maxDepth > MAX_DISCOVERY_DEPTH;

/**
 * The pure schema core: parse + array discovery + the chosen rows' column analysis. Neither the
 * no-payload state nor the UNSET rows path is an error (decision 6: unconfigured = the quiet
 * placeholder + the suggestion, not a red box); a bad JSON string or an AUTHORED rowPath that
 * no longer resolves is (decision 9 — `parseJsonTableState`'s error surface). A discovery walk
 * hitting the depth cap is NEVER an error — `depthCapped` says what the pickers are missing.
 */
export const analyzeJsonTableSchema = (raw: string, rowPath: string): JsonTableSchema => {
    if (!raw) {
        return EMPTY_SCHEMA;
    }
    let doc: unknown;
    try {
        doc = JSON.parse(raw);
    } catch (e) {
        return { arrayPaths: [], columns: [], error: (e as Error).message };
    }
    const discovery = discoverArrayPaths(doc);
    // The shared column-analysis leg (both rows branches below run it): flatten under the SAME
    // cap the predicate reads, then fold either walk's verdict into the one flag.
    const withColumns = (rows: unknown[]): JsonTableSchema => {
        const analysis = analyzeJsonTable(rows, { maxDepth: MAX_DISCOVERY_DEPTH });
        return {
            arrayPaths: discovery.paths,
            columns: analysis.columns,
            ...flagged(discovery.capped || columnsCapped(analysis)),
        };
    };
    if (!rowPath) {
        // Unset ('' doubles as the top-level path): the top level resolves only when the
        // payload IS an array — otherwise the suggestion below carries the choice, quietly.
        return Array.isArray(doc)
            ? withColumns(doc)
            : { arrayPaths: discovery.paths, columns: [], ...flagged(discovery.capped) };
    }
    const resolved = resolveRows(doc, rowPath);
    if ('error' in resolved) {
        return { arrayPaths: discovery.paths, columns: [], error: resolved.error, ...flagged(discovery.capped) };
    }
    return withColumns(resolved.rows);
};

/**
 * Live subscription + memoized schema over the payload's CURRENT value.
 *
 * @param jsonOid - The bound JSON-state OID (`state.jsonOid`).
 * @param rowPath - The CHOSEN rows path (`state.jsonRowPath`; '' = top level).
 * @param enabled - True only for json mode + the table family.
 * @param socket - The Connection drilled into the editor.
 */
export function useJsonTableSchema(
    jsonOid: string,
    rowPath: string,
    enabled: boolean,
    socket: Connection,
): JsonTableSchema {
    const oids = useMemo(() => (enabled && jsonOid ? [jsonOid] : []), [enabled, jsonOid]);
    const values = useSubscribedValues(oids, socket);
    return useMemo(() => {
        if (!enabled || !jsonOid) {
            return EMPTY_SCHEMA;
        }
        const raw = values[jsonOid];
        return analyzeJsonTableSchema(raw === null || raw === undefined ? '' : String(raw), rowPath);
    }, [enabled, jsonOid, values, rowPath]);
}
