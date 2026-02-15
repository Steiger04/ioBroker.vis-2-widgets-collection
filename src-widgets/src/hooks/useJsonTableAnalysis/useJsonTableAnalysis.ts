/**
 * useJsonTableAnalysis hook.
 *
 * Analyzes an array of unknown JSON objects and returns:
 * - columns: schema with types, stats, and validation hints
 * - rows: normalized flat rows (dot-path keys, arrays as index-columns)
 * - meta: analysis metadata
 *
 * Uses useMemo for memoization — only re-analyzes when data or options change.
 */

import { useMemo } from 'react';

import { aggregateColumns } from './aggregator';
import { flattenAll } from './flattener';
import type { JsonTableAnalysisOptions, JsonTableAnalysisResult } from './types';

/** Default options */
const DEFAULT_OPTIONS: Required<JsonTableAnalysisOptions> = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8,
};

/**
 * Core analysis function (pure, no React dependency).
 * Can be used outside of React context if needed.
 *
 * @param data - Array of JSON objects to analyze
 * @param options - Analysis configuration
 * @returns Complete analysis result
 */
export function analyzeJsonTable(data: unknown[], options?: JsonTableAnalysisOptions): JsonTableAnalysisResult {
    const startTime = performance.now();

    const opts = { ...DEFAULT_OPTIONS, ...options };

    // Handle empty input
    if (!data || data.length === 0) {
        return {
            columns: [],
            rows: [],
            meta: {
                rowCount: 0,
                columnCount: 0,
                maxDepth: 0,
                maxArrayIndex: 0,
                arrayPolicy: 'index-columns',
                flattenPolicy: 'dot-paths',
                dateDetectionPolicy: 'heuristic',
                totalNullValues: 0,
                nullPercentage: 0,
                analysisTimeMs: 0,
            },
        };
    }

    // Step 1: Flatten all rows (objects → dot-paths, arrays → index-paths)
    const flatResult = flattenAll(data, opts.maxDepth);

    // Step 2: Aggregate column statistics
    const columns = aggregateColumns(flatResult.paths, flatResult.rows, opts.maxDistinct);

    // Step 3: Compute meta
    const totalCells = flatResult.paths.length * flatResult.rows.length;
    const totalNullValues = columns.reduce((sum, col) => sum + col.nullCount, 0);
    const nullPercentage = totalCells > 0 ? Math.round((totalNullValues / totalCells) * 1000) / 10 : 0;

    const analysisTimeMs = Math.round((performance.now() - startTime) * 100) / 100;

    return {
        columns,
        rows: flatResult.rows,
        meta: {
            rowCount: flatResult.rows.length,
            columnCount: columns.length,
            maxDepth: flatResult.maxDepth,
            maxArrayIndex: flatResult.maxArrayIndex,
            arrayPolicy: 'index-columns',
            flattenPolicy: 'dot-paths',
            dateDetectionPolicy: 'heuristic',
            totalNullValues,
            nullPercentage,
            analysisTimeMs,
        },
    };
}

/**
 * React hook that analyzes an array of unknown JSON objects.
 *
 * @param data - Array of JSON objects to analyze
 * @param options - Optional analysis configuration
 * @returns Memoized analysis result (columns, rows, meta)
 * @example
 * ```tsx
 * const { columns, rows, meta } = useJsonTableAnalysis(jsonArray);
 * ```
 */
export function useJsonTableAnalysis(data: unknown[], options?: JsonTableAnalysisOptions): JsonTableAnalysisResult {
    return useMemo(
        () => analyzeJsonTable(data, options),
        // Re-analyze when data reference or options change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data, options?.maxDepth, options?.maxDistinct, options?.dateConfidenceThreshold],
    );
}
