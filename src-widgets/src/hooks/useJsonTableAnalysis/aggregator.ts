/**
 * Aggregator: collects per-column statistics from flattened rows.
 *
 * Computes: typeCounts, nullCount, distinctCount, confidence,
 * min/max (number/date), stringLengthMin/Max.
 */

import type { DateFormatId, FlatRow, JsonTableColumn } from './types';
import { detectType, resolveDateFormat, resolvePrimaryType } from './typeDetector';

/** Internal accumulator for a single column */
interface ColumnAccumulator {
    path: string;
    typeCounts: Record<string, number>;
    dateFormatCounts: Record<string, number>;
    nullCount: number;
    distinctValues: Set<unknown>;
    /** Track numeric min/max */
    numMin: number | undefined;
    numMax: number | undefined;
    /** Track string length min/max */
    strLenMin: number | undefined;
    strLenMax: number | undefined;
    /** Track date min/max as ISO strings for comparison */
    dateMin: string | undefined;
    dateMax: string | undefined;
    /** Total non-null values analyzed */
    nonNullCount: number;
}

function createAccumulator(path: string): ColumnAccumulator {
    return {
        path,
        typeCounts: {},
        dateFormatCounts: {},
        nullCount: 0,
        distinctValues: new Set(),
        numMin: undefined,
        numMax: undefined,
        strLenMin: undefined,
        strLenMax: undefined,
        dateMin: undefined,
        dateMax: undefined,
        nonNullCount: 0,
    };
}

/** Increment a counter in a record */
function increment(record: Record<string, number>, key: string): void {
    record[key] = (record[key] || 0) + 1;
}

/**
 * Try to parse a date value to an ISO string for comparison.
 * Handles ISO strings directly, and common formats by restructuring.
 */
function toComparableDateString(value: unknown, dateFormat?: DateFormatId): string | null {
    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value === 'number') {
        if (dateFormat === 'epoch-ms') {
            return new Date(value).toISOString();
        }
        if (dateFormat === 'epoch-s') {
            return new Date(value * 1000).toISOString();
        }
        return null;
    }

    if (typeof value !== 'string') {
        return null;
    }

    const trimmed = value.trim();

    // ISO-8601 or YYYY-MM-DD can be directly compared as strings
    if (dateFormat === 'ISO-8601' || dateFormat === 'YYYY-MM-DD') {
        return trimmed;
    }

    // European formats: dd.MM.yyyy...
    if (dateFormat?.startsWith('dd.MM.yyyy')) {
        const parts = trimmed.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
        if (parts) {
            const day = parts[1];
            const month = parts[2];
            const year = parts[3];
            const hour = parts[4] || '00';
            const minute = parts[5] || '00';
            const second = parts[6] || '00';
            return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
        }
    }

    // US formats: MM/dd/yyyy...
    if (dateFormat?.startsWith('MM/dd/yyyy')) {
        const parts = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
        if (parts) {
            const month = parts[1];
            const day = parts[2];
            const year = parts[3];
            const hour = parts[4] || '00';
            const minute = parts[5] || '00';
            const second = parts[6] || '00';
            return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
        }
    }

    return null;
}

/**
 * Aggregate statistics for all columns from flattened rows.
 *
 * @param paths - Ordered column paths
 * @param rows - Flattened rows (each row has every path)
 * @param maxDistinct - Maximum distinct values to track per column (default: 100)
 * @returns Array of JsonTableColumn with full statistics
 */
export function aggregateColumns(paths: string[], rows: FlatRow[], maxDistinct: number = 100): JsonTableColumn[] {
    const totalRows = rows.length;

    // Initialize accumulators
    const accumulators = new Map<string, ColumnAccumulator>();
    for (const path of paths) {
        accumulators.set(path, createAccumulator(path));
    }

    // Single pass over all rows
    for (const row of rows) {
        for (const path of paths) {
            const acc = accumulators.get(path)!;
            const value = row[path];
            const detection = detectType(value);

            increment(acc.typeCounts, detection.type);

            if (detection.type === 'null') {
                acc.nullCount++;
                continue;
            }

            acc.nonNullCount++;

            // Track date format
            if (detection.dateFormat) {
                increment(acc.dateFormatCounts, detection.dateFormat);
            }

            // Track distinct values (capped)
            if (acc.distinctValues.size < maxDistinct) {
                acc.distinctValues.add(value);
            }

            // Track numeric stats
            if (typeof value === 'number' && Number.isFinite(value)) {
                if (acc.numMin === undefined || value < acc.numMin) {
                    acc.numMin = value;
                }
                if (acc.numMax === undefined || value > acc.numMax) {
                    acc.numMax = value;
                }
            }

            // Track string length stats
            if (typeof value === 'string') {
                const len = value.length;
                if (acc.strLenMin === undefined || len < acc.strLenMin) {
                    acc.strLenMin = len;
                }
                if (acc.strLenMax === undefined || len > acc.strLenMax) {
                    acc.strLenMax = len;
                }
            }

            // Track date min/max
            if (detection.dateFormat) {
                const comparable = toComparableDateString(value, detection.dateFormat);
                if (comparable !== null) {
                    if (acc.dateMin === undefined || comparable < acc.dateMin) {
                        acc.dateMin = comparable;
                    }
                    if (acc.dateMax === undefined || comparable > acc.dateMax) {
                        acc.dateMax = comparable;
                    }
                }
            }
        }
    }

    // Build final column descriptors
    return paths.map(path => {
        const acc = accumulators.get(path)!;
        const primaryType = resolvePrimaryType(acc.typeCounts);
        const dateFormat = primaryType === 'date' ? resolveDateFormat(acc.dateFormatCounts) : undefined;

        // Confidence: ratio of primary-type values to total non-null values
        const primaryCount = primaryType === 'date' ? acc.typeCounts.date || 0 : acc.typeCounts[primaryType] || 0;
        const confidence = totalRows > 0 ? Math.round((primaryCount / totalRows) * 100) / 100 : 0;

        const column: JsonTableColumn = {
            path,
            type: primaryType,
            nullable: acc.nullCount > 0,
            typeCounts: { ...acc.typeCounts },
            nullCount: acc.nullCount,
            distinctCount: acc.distinctValues.size,
            confidence,
        };

        if (dateFormat) {
            column.dateFormat = dateFormat;
        }

        // Add validation hints based on type
        if (primaryType === 'number') {
            if (acc.numMin !== undefined) {
                column.min = acc.numMin;
            }
            if (acc.numMax !== undefined) {
                column.max = acc.numMax;
            }
        }

        if (primaryType === 'date') {
            if (acc.dateMin !== undefined) {
                column.min = acc.dateMin;
            }
            if (acc.dateMax !== undefined) {
                column.max = acc.dateMax;
            }
        }

        if (primaryType === 'string' || primaryType === 'mixed') {
            if (acc.strLenMin !== undefined) {
                column.stringLengthMin = acc.strLenMin;
            }
            if (acc.strLenMax !== undefined) {
                column.stringLengthMax = acc.strLenMax;
            }
        }

        return column;
    });
}
