/**
 * Public API for useJsonTableAnalysis hook.
 *
 * Exports:
 * - useJsonTableAnalysis (hook)
 * - analyzeJsonTable (pure function, usable outside React)
 * - All TypeScript types
 */

// Hook + pure function
export { analyzeJsonTable, useJsonTableAnalysis } from './useJsonTableAnalysis';

// Types
export type {
    DateFormatId,
    DetectedType,
    FlatRow,
    FlattenResult,
    JsonTableAnalysisOptions,
    JsonTableAnalysisResult,
    JsonTableColumn,
    JsonTableMeta,
} from './types';
