/**
 * Flattens nested JSON objects into dot-path keyed records.
 *
 * - Objects are traversed recursively, keys joined with "."
 * - Arrays are expanded to index-based paths, e.g. items[0].name
 * - Circular references are detected and skipped
 * - Depth is capped by maxDepth option
 */

import type { FlatRow, FlattenResult } from './types';

/**
 * Flatten a single value at a given prefix path.
 * Writes all discovered leaf values into `target`.
 * Collects all discovered paths into `pathSet`.
 * Tracks maximum depth and array index encountered.
 */
function flattenValue(
    value: unknown,
    prefix: string,
    target: FlatRow,
    pathSet: Set<string>,
    seen: WeakSet<object>,
    depth: number,
    maxDepth: number,
    stats: { maxDepth: number; maxArrayIndex: number },
): void {
    // Track max depth
    if (depth > stats.maxDepth) {
        stats.maxDepth = depth;
    }

    // Depth limit reached: store remaining value as-is
    if (depth > maxDepth) {
        target[prefix] = value;
        pathSet.add(prefix);
        return;
    }

    // null / undefined → leaf
    if (value === null || value === undefined) {
        target[prefix] = null;
        pathSet.add(prefix);
        return;
    }

    // Array → expand to index paths
    if (Array.isArray(value)) {
        if (value.length === 0) {
            // Empty array: register path as null so column exists
            target[prefix] = null;
            pathSet.add(prefix);
            return;
        }

        for (let i = 0; i < value.length; i++) {
            if (i > stats.maxArrayIndex) {
                stats.maxArrayIndex = i;
            }
            const indexPath = `${prefix}[${i}]`;
            flattenValue(value[i], indexPath, target, pathSet, seen, depth + 1, maxDepth, stats);
        }
        return;
    }

    // Object → recurse with dot-path
    if (typeof value === 'object') {
        // Circular reference guard
        if (seen.has(value)) {
            target[prefix] = '[Circular]';
            pathSet.add(prefix);
            return;
        }
        seen.add(value);

        const keys = Object.keys(value as Record<string, unknown>);
        if (keys.length === 0) {
            // Empty object: register path as null
            target[prefix] = null;
            pathSet.add(prefix);
            return;
        }

        for (const key of keys) {
            const childPath = prefix ? `${prefix}.${key}` : key;
            flattenValue(
                (value as Record<string, unknown>)[key],
                childPath,
                target,
                pathSet,
                seen,
                depth + 1,
                maxDepth,
                stats,
            );
        }
        return;
    }

    // Primitive (string, number, boolean)
    target[prefix] = value;
    pathSet.add(prefix);
}

/**
 * Flatten an entire array of JSON objects.
 *
 * @param data - Array of objects to analyze
 * @param maxDepth - Maximum nesting depth (default: 10)
 * @returns FlattenResult with all discovered paths, flattened rows, and depth stats
 */
export function flattenAll(data: unknown[], maxDepth: number = 10): FlattenResult {
    const globalPathSet = new Set<string>();
    const stats = { maxDepth: 0, maxArrayIndex: 0 };
    const flatRows: FlatRow[] = [];

    for (const item of data) {
        const row: FlatRow = {};
        const seen = new WeakSet<object>();

        if (item !== null && item !== undefined && typeof item === 'object' && !Array.isArray(item)) {
            // Top-level object: flatten its keys directly
            for (const key of Object.keys(item as Record<string, unknown>)) {
                flattenValue((item as Record<string, unknown>)[key], key, row, globalPathSet, seen, 1, maxDepth, stats);
            }
        } else {
            // Top-level primitive or array: treat as single column "_value"
            flattenValue(item, '_value', row, globalPathSet, seen, 0, maxDepth, stats);
        }

        flatRows.push(row);
    }

    // Stable sort: insertion order, but consistent across rows
    const sortedPaths = sortPaths([...globalPathSet]);

    // Normalize rows: ensure every row has every path (null for missing)
    for (const row of flatRows) {
        for (const path of sortedPaths) {
            if (!(path in row)) {
                row[path] = null;
            }
        }
    }

    return {
        paths: sortedPaths,
        rows: flatRows,
        maxDepth: stats.maxDepth,
        maxArrayIndex: stats.maxArrayIndex,
    };
}

/**
 * Sort paths in a stable, human-readable order:
 * - Group by top-level key
 * - Within a group, sort by path depth, then alphabetically
 * - Array indices are sorted numerically
 */
function sortPaths(paths: string[]): string[] {
    return paths.sort((a, b) => {
        const segA = splitPath(a);
        const segB = splitPath(b);

        // Compare segment by segment
        const minLen = Math.min(segA.length, segB.length);
        for (let i = 0; i < minLen; i++) {
            const sA = segA[i];
            const sB = segB[i];

            // Both numeric (array indices)
            const numA = parseArrayIndex(sA);
            const numB = parseArrayIndex(sB);
            if (numA !== null && numB !== null) {
                if (numA !== numB) {
                    return numA - numB;
                }
                continue;
            }

            // String comparison
            if (sA !== sB) {
                return sA.localeCompare(sB);
            }
        }

        // Shorter path first
        return segA.length - segB.length;
    });
}

/** Split a dot-path with array indices into segments */
function splitPath(path: string): string[] {
    // "order.items[0].sku" → ["order", "items", "[0]", "sku"]
    return path.split(/\./).flatMap(part => {
        const result: string[] = [];
        const regex = /^([^[]*)((?:\[\d+\])*)$/;
        const match = regex.exec(part);
        if (match) {
            if (match[1]) {
                result.push(match[1]);
            }
            // Extract each [N]
            const indices = match[2].match(/\[\d+\]/g);
            if (indices) {
                result.push(...indices);
            }
        } else {
            result.push(part);
        }
        return result;
    });
}

/** Extract numeric index from "[N]" segment, or null */
function parseArrayIndex(segment: string): number | null {
    const match = /^\[(\d+)\]$/.exec(segment);
    return match ? parseInt(match[1], 10) : null;
}
