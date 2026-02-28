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
 * Performs the actual filter comparison based on operator and values.
 *
 * @param cellValue - The value from the table cell
 * @param operator - The filter operator to apply
 * @param filterValue - The value to compare against
 * @returns Whether the cell value matches the filter criteria
 */
function evaluateFilter(cellValue: unknown, operator: FilterOperator, filterValue: string | number): boolean {
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

    // Convert cell value to comparable format
    const cellStr = safeToString(cellValue);
    const filterStr = safeToString(filterValue);

    // Numeric comparison for number types
    const cellNum = Number(cellValue);
    const filterNum = Number(filterValue);
    const isNumericComparison = !isNaN(cellNum) && !isNaN(filterNum);

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
