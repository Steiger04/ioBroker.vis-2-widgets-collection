/**
 * Custom filter functions for TanStack Table.
 *
 * @module JsonTableCollectionWidget/utils/filterFunctions
 * @remarks
 * Provides advanced filter functions that can handle FilterConfig objects
 * with various operators (contains, equals, greaterThan, etc.).
 * These functions are used by TanStack Table's column filtering system.
 */

import type { FilterFn, Row } from '@tanstack/react-table';

import type { FilterConfig, FilterOperator } from '../components/FilterDialog';

/** Type for flat row data used in the table */
type FlatRow = Record<string, unknown>;

/**
 * Safely converts a value to a string for comparison.
 * Handles objects by using JSON.stringify.
 *
 * @param value - The value to convert
 * @returns The string representation of the value
 */
function safeToString(value: unknown): string {
    if (value === null || value === undefined) {
        return '';
    }
    if (typeof value === 'object') {
        try {
            return JSON.stringify(value).toLowerCase();
        } catch {
            return '[object Object]';
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return String(value).toLowerCase();
}

/**
 * Normalizes a date value to a timestamp for comparison.
 * Supports multiple input formats:
 * - ISO-8601 strings (e.g., "2024-12-31", "2024-12-31T23:59:59Z")
 * - European format dd.MM.yyyy (e.g., "31.12.2024")
 * - US format MM/dd/yyyy (e.g., "12/31/2024")
 * - Epoch timestamps in seconds or milliseconds
 * - Date objects
 *
 * @param value - The value to normalize (string, number, or Date)
 * @returns Timestamp in milliseconds, or null if parsing fails
 */
function normalizeToTimestamp(value: unknown): number | null {
    if (value === null || value === undefined) {
        return null;
    }

    // Handle Date objects directly
    if (value instanceof Date) {
        const time = value.getTime();
        return isNaN(time) ? null : time;
    }

    // Handle numbers (epoch timestamps)
    if (typeof value === 'number') {
        // Threshold 1e11 distinguishes seconds (< ~1973) from milliseconds (>= ~1973)
        // Epoch seconds are typically < 1e11 until year 5138
        // Epoch milliseconds are typically >= 1e11 for modern dates
        const timestamp = value >= 1e11 ? value : value * 1000;
        const date = new Date(timestamp);
        return isNaN(date.getTime()) ? null : timestamp;
    }

    // Handle strings
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed) {
            return null;
        }

        // Try European format dd.MM.yyyy first (must check before US format to avoid ambiguity)
        const europeanMatch = trimmed.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (europeanMatch) {
            const [, day, month, year, hour = '0', minute = '0', second = '0'] = europeanMatch;
            const date = new Date(
                parseInt(year, 10),
                parseInt(month, 10) - 1,
                parseInt(day, 10),
                parseInt(hour, 10),
                parseInt(minute, 10),
                parseInt(second, 10),
            );
            return isNaN(date.getTime()) ? null : date.getTime();
        }

        // Try US format MM/dd/yyyy
        const usMatch = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (usMatch) {
            const [, month, day, year, hour = '0', minute = '0', second = '0'] = usMatch;
            const date = new Date(
                parseInt(year, 10),
                parseInt(month, 10) - 1,
                parseInt(day, 10),
                parseInt(hour, 10),
                parseInt(minute, 10),
                parseInt(second, 10),
            );
            return isNaN(date.getTime()) ? null : date.getTime();
        }

        // Try pure numeric string as epoch
        if (/^-?\d+$/.test(trimmed)) {
            const numValue = parseInt(trimmed, 10);
            const timestamp = numValue >= 1e11 ? numValue : numValue * 1000;
            const date = new Date(timestamp);
            return isNaN(date.getTime()) ? null : timestamp;
        }

        // Fallback: use Date constructor for ISO-8601 and other standard formats
        const date = new Date(trimmed);
        return isNaN(date.getTime()) ? null : date.getTime();
    }

    return null;
}

/**
 * Checks if a value looks like a date (can be parsed as a valid date).
 *
 * @param value - The value to check
 * @returns Whether the value can be interpreted as a date
 */
function looksLikeDate(value: unknown): boolean {
    return normalizeToTimestamp(value) !== null;
}

/**
 * Performs the actual filter comparison based on operator and values.
 *
 * @param cellValue - The value from the table cell
 * @param operator - The filter operator to apply
 * @param filterValue - The value to compare against
 * @returns Whether the cell value matches the filter criteria
 */
function evaluateFilter(cellValue: unknown, operator: FilterOperator, filterValue: string | number | boolean): boolean {
    // Handle null/undefined cell values
    if (cellValue === null || cellValue === undefined) {
        return operator === 'isEmpty';
    }

    // Handle isEmpty and isNotEmpty operators (no value needed)
    if (operator === 'isEmpty') {
        if (typeof cellValue === 'string') {
            return cellValue === '';
        }
        return cellValue === null || cellValue === undefined;
    }
    if (operator === 'isNotEmpty') {
        if (typeof cellValue === 'string') {
            return cellValue !== '';
        }
        return cellValue !== null && cellValue !== undefined;
    }

    // Handle boolean filter values
    if (typeof filterValue === 'boolean') {
        const cellBool =
            typeof cellValue === 'boolean'
                ? cellValue
                : cellValue === 'true' || cellValue === 1
                  ? true
                  : cellValue === 'false' || cellValue === 0
                    ? false
                    : null;

        if (cellBool !== null) {
            switch (operator) {
                case 'equals':
                    return cellBool === filterValue;
                case 'notEquals':
                    return cellBool !== filterValue;
                default:
                    return true;
            }
        }
        return false;
    }

    // Convert cell value to comparable format
    const cellStr = safeToString(cellValue);
    const filterStr = safeToString(filterValue);

    // Numeric comparison for number types
    const cellNum = Number(cellValue);
    const filterNum = Number(filterValue);
    const isNumericComparison = !isNaN(cellNum) && !isNaN(filterNum);

    // Date-aware comparison: check if both values can be parsed as dates
    // This enables proper chronological comparisons for date operators
    const comparisonOperators: FilterOperator[] = [
        'greaterThan',
        'greaterThanOrEqual',
        'lessThan',
        'lessThanOrEqual',
        'equals',
        'notEquals',
    ];

    if (comparisonOperators.includes(operator)) {
        const cellTimestamp = normalizeToTimestamp(cellValue);
        const filterTimestamp = normalizeToTimestamp(filterValue);

        // If both values are valid dates, use timestamp comparison
        if (cellTimestamp !== null && filterTimestamp !== null) {
            switch (operator) {
                case 'equals':
                    return cellTimestamp === filterTimestamp;
                case 'notEquals':
                    return cellTimestamp !== filterTimestamp;
                case 'greaterThan':
                    return cellTimestamp > filterTimestamp;
                case 'greaterThanOrEqual':
                    return cellTimestamp >= filterTimestamp;
                case 'lessThan':
                    return cellTimestamp < filterTimestamp;
                case 'lessThanOrEqual':
                    return cellTimestamp <= filterTimestamp;
                default:
                    break;
            }
        }
    }

    switch (operator) {
        case 'contains':
            return cellStr.includes(filterStr);

        case 'startsWith':
            return cellStr.startsWith(filterStr);

        case 'endsWith':
            return cellStr.endsWith(filterStr);

        case 'equals':
            if (isNumericComparison) {
                return cellNum === filterNum;
            }
            return cellStr === filterStr;

        case 'notEquals':
            if (isNumericComparison) {
                return cellNum !== filterNum;
            }
            return cellStr !== filterStr;

        case 'greaterThan':
            if (isNumericComparison) {
                return cellNum > filterNum;
            }
            // For strings, use locale comparison
            return cellStr > filterStr;

        case 'greaterThanOrEqual':
            if (isNumericComparison) {
                return cellNum >= filterNum;
            }
            return cellStr >= filterStr;

        case 'lessThan':
            if (isNumericComparison) {
                return cellNum < filterNum;
            }
            return cellStr < filterStr;

        case 'lessThanOrEqual':
            if (isNumericComparison) {
                return cellNum <= filterNum;
            }
            return cellStr <= filterStr;

        default:
            return true;
    }
}

/**
 * Advanced filter function for TanStack Table.
 *
 * This function handles both simple values (for legacy compatibility)
 * and FilterConfig objects with operators.
 *
 * @param row - The table row being filtered
 * @param columnId - The ID of the column being filtered
 * @param filterValue - The filter value (can be FilterConfig or primitive)
 * @returns Whether the row passes the filter
 * @example table.setFilter('name', 'john'); // Contains 'john' (legacy)
 * @example table.setFilter('age', { operator: 'greaterThan', value: 18 });
 */
export const advancedFilterFn: FilterFn<FlatRow> = (
    row: Row<FlatRow>,
    columnId: string,
    filterValue: unknown,
): boolean => {
    // Handle undefined/null filter value (no filter)
    if (filterValue === undefined || filterValue === null) {
        return true;
    }

    // Handle simple values (legacy compatibility - treated as "contains")
    if (typeof filterValue === 'string') {
        const cellValue = row.getValue(columnId);
        if (cellValue === null || cellValue === undefined) {
            return false;
        }
        return safeToString(cellValue).includes(filterValue.toLowerCase());
    }

    if (typeof filterValue === 'number') {
        const cellValue = row.getValue(columnId);
        if (cellValue === null || cellValue === undefined) {
            return false;
        }
        const cellNum = Number(cellValue);
        if (isNaN(cellNum)) {
            return safeToString(cellValue).includes(safeToString(filterValue));
        }
        return cellNum === filterValue;
    }

    // Handle FilterConfig objects
    if (typeof filterValue === 'object' && filterValue !== null && 'operator' in filterValue) {
        const config = filterValue as FilterConfig;
        const cellValue = row.getValue(columnId);
        return evaluateFilter(cellValue, config.operator, config.value);
    }

    // Fallback: try to stringify and do a contains search
    const cellValue = row.getValue(columnId);
    if (cellValue === null || cellValue === undefined) {
        return false;
    }
    return safeToString(cellValue).includes(safeToString(filterValue));
};

/**
 * Map of all custom filter functions for TanStack Table.
 *
 * Use this when configuring the table's `filterFns` option:
 *
 * @example
 * const table = useReactTable({
 *   // ... other options
 *   filterFns: customFilterFns,
 * });
 */
export const customFilterFns = {
    advanced: advancedFilterFn,
};

/**
 * Type guard to check if a value is a FilterConfig.
 *
 * @param value - The value to check
 * @returns Whether the value is a valid FilterConfig object
 */
export function isFilterConfig(value: unknown): value is FilterConfig {
    return (
        typeof value === 'object' &&
        value !== null &&
        'operator' in value &&
        'value' in value &&
        typeof (value as FilterConfig).operator === 'string'
    );
}

// Re-export normalizeToTimestamp for testing purposes
export { normalizeToTimestamp, looksLikeDate };
