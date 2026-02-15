/**
 * Array resolver: analyzes flattened paths to identify array-derived columns
 * and provides utilities for working with array index paths.
 *
 * Since flattening already expands arrays into index-based paths (e.g. items[0].name),
 * this module focuses on:
 * - Identifying which paths originate from arrays
 * - Grouping related array columns (items[0].*, items[1].*, ...)
 * - Providing the base path without index (items[].name) for grouping
 */

/** Information about an array-derived column group */
export interface ArrayColumnGroup {
    /** Base path pattern without indices, e.g. "order.items[].sku" */
    basePath: string;
    /** All concrete index paths, e.g. ["order.items[0].sku", "order.items[1].sku"] */
    indexPaths: string[];
    /** Maximum index encountered for this array */
    maxIndex: number;
}

/**
 * Remove numeric indices from a path to get the base pattern.
 * e.g. "order.items[0].sku" → "order.items[].sku"
 *      "flags[1]" → "flags[]"
 */
export function getBasePath(path: string): string {
    return path.replace(/\[\d+\]/g, '[]');
}

/**
 * Check if a path contains an array index.
 */
export function isArrayPath(path: string): boolean {
    return /\[\d+\]/.test(path);
}

/**
 * Extract all array index values from a path.
 * e.g. "a[0].b[2].c" → [0, 2]
 */
export function extractIndices(path: string): number[] {
    const matches = path.match(/\[(\d+)\]/g);
    if (!matches) {
        return [];
    }
    return matches.map(m => parseInt(m.slice(1, -1), 10));
}

/**
 * Analyze a set of flattened paths and group array-derived columns.
 *
 * @param paths - All discovered paths from flattening
 * @returns Map of base path pattern → ArrayColumnGroup
 */
export function resolveArrayGroups(paths: string[]): Map<string, ArrayColumnGroup> {
    const groups = new Map<string, ArrayColumnGroup>();

    for (const path of paths) {
        if (!isArrayPath(path)) {
            continue;
        }

        const basePath = getBasePath(path);
        const existing = groups.get(basePath);
        const indices = extractIndices(path);
        const maxIndex = Math.max(...indices);

        if (existing) {
            existing.indexPaths.push(path);
            if (maxIndex > existing.maxIndex) {
                existing.maxIndex = maxIndex;
            }
        } else {
            groups.set(basePath, {
                basePath,
                indexPaths: [path],
                maxIndex,
            });
        }
    }

    return groups;
}
