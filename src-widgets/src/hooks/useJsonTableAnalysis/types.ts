/**
 * Type definitions for useJsonTableAnalysis hook.
 *
 * Provides interfaces for JSON array analysis: schema inference,
 * row normalization, and column-level statistics.
 */

/** Detected value type for a column */
export type DetectedType = 'string' | 'number' | 'boolean' | 'date' | 'null' | 'array' | 'object' | 'mixed';

/** Recognized date format identifier */
export type DateFormatId =
    | 'ISO-8601'
    | 'YYYY-MM-DD'
    | 'dd.MM.yyyy'
    | 'dd.MM.yyyy HH:mm'
    | 'dd.MM.yyyy HH:mm:ss'
    | 'MM/dd/yyyy'
    | 'MM/dd/yyyy HH:mm'
    | 'MM/dd/yyyy HH:mm:ss'
    | 'epoch-s'
    | 'epoch-ms';

/** Options to configure the analysis behavior */
export interface JsonTableAnalysisOptions {
    /** Maximum nesting depth to traverse (default: 10) */
    maxDepth?: number;
    /** Maximum number of distinct values to track per column (default: 100) */
    maxDistinct?: number;
    /** Minimum confidence threshold for date detection (default: 0.8) */
    dateConfidenceThreshold?: number;
}

/** Column descriptor with schema info and statistics */
export interface JsonTableColumn {
    /** Dot-path with array indices, e.g. "order.items[0].sku" */
    path: string;
    /** Detected primary type */
    type: DetectedType;
    /** Date format identifier (only present when type === "date") */
    dateFormat?: DateFormatId;
    /** Whether any null/undefined/missing values exist for this column */
    nullable: boolean;

    // --- Statistics ---

    /** Count of values per detected type, e.g. { "string": 4, "null": 1 } */
    typeCounts: Record<string, number>;
    /** Number of null/undefined/missing values */
    nullCount: number;
    /** Number of distinct non-null values (capped by maxDistinct option) */
    distinctCount: number;
    /** Confidence score for the primary type detection (0.0 - 1.0) */
    confidence: number;

    // --- Validation hints (optional, type-dependent) ---

    /** Minimum value (for number and date columns) */
    min?: number | string;
    /** Maximum value (for number and date columns) */
    max?: number | string;
    /** Minimum string length (for string columns) */
    stringLengthMin?: number;
    /** Maximum string length (for string columns) */
    stringLengthMax?: number;
}

/** Metadata about the analysis result */
export interface JsonTableMeta {
    /** Total number of input rows */
    rowCount: number;
    /** Total number of derived columns */
    columnCount: number;
    /** Maximum nesting depth encountered */
    maxDepth: number;
    /** Maximum array index encountered across all array paths */
    maxArrayIndex: number;
    /** Array handling strategy used */
    arrayPolicy: 'index-columns';
    /** Object flattening strategy used */
    flattenPolicy: 'dot-paths';
    /** Date detection strategy used */
    dateDetectionPolicy: 'heuristic';
    /** Total number of null cells across all rows and columns */
    totalNullValues: number;
    /** Percentage of null cells (0-100) */
    nullPercentage: number;
    /** Time spent on analysis in milliseconds */
    analysisTimeMs: number;
}

/** Flattened row: keys are dot-paths, values are primitives or null */
export type FlatRow = Record<string, unknown>;

/** Complete result returned by useJsonTableAnalysis */
export interface JsonTableAnalysisResult {
    /** Ordered list of column descriptors with schema and statistics */
    columns: JsonTableColumn[];
    /** Normalized rows with flattened dot-path keys */
    rows: FlatRow[];
    /** Metadata about the analysis */
    meta: JsonTableMeta;
}

/** Internal intermediate structure from first-pass flattening */
export interface FlattenResult {
    /** All unique dot-paths discovered across all rows */
    paths: string[];
    /** Flattened rows (one per input row) */
    rows: FlatRow[];
    /** Maximum depth encountered */
    maxDepth: number;
    /** Maximum array index encountered */
    maxArrayIndex: number;
}
