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
import { dateReader, localDay, type DateReader } from '../dateReader';

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
 * Reads filter values (the date input's `YYYY-MM-DD`) and, until the Spaltenfilter binds the
 * evaluation to the Effektiver Typ, the cells of non-date columns: the Datums-Leser for a
 * value without a detected Column — no browser heuristic.
 */
const readUndetectedDate = dateReader();

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
        const cellTimestamp = readUndetectedDate(cellValue);
        const filterTimestamp = readUndetectedDate(filterValue);

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
 * Date-aware filter comparison at LOCAL-DAY granularity.
 *
 * The cell value is read by the Column's Datums-Leser, the filter value (the date input's
 * `YYYY-MM-DD`) by the reader for values without a Column; both compare at their local day.
 * This makes `equals` match every value on the same local day (regardless of its time
 * component) and keeps range operators consistent with the local display.
 *
 * @param cellValue - Raw cell value
 * @param operator - Filter operator
 * @param filterValue - Filter value (string from the date picker, number, etc.)
 * @param read - The Column's Datums-Leser
 * @returns Whether the cell matches the filter criteria
 */
function evaluateDateFilter(
    cellValue: unknown,
    operator: FilterOperator,
    filterValue: string | number | boolean,
    read: DateReader,
): boolean {
    // isEmpty / isNotEmpty operate on raw presence, not on date parsing
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

    const cellMs = read(cellValue);
    const filterMs = readUndetectedDate(filterValue);

    // Unreadable cell or filter value cannot satisfy any comparison operator
    if (cellMs === null || filterMs === null) {
        return false;
    }

    const cellDay = localDay(cellMs).start;
    const filterDay = localDay(filterMs).start;

    switch (operator) {
        case 'equals':
            return cellDay === filterDay;
        case 'notEquals':
            return cellDay !== filterDay;
        case 'greaterThan': // "after"
            return cellDay > filterDay;
        case 'greaterThanOrEqual': // "on or after"
            return cellDay >= filterDay;
        case 'lessThan': // "before"
            return cellDay < filterDay;
        case 'lessThanOrEqual': // "on or before"
            return cellDay <= filterDay;
        default:
            return true;
    }
}

/**
 * Creates a custom, date-aware filter function for date columns.
 *
 * Compares at LOCAL-DAY granularity so that `equals` matches every value on the same
 * calendar day the user sees. Attached only to date columns in `buildColumnDefs`.
 *
 * @param read - The Column's Datums-Leser
 * @returns A TanStack Table compatible filter function expecting a FilterConfig
 */
export function createDateFilterFn(read: DateReader): FilterFn<FlatRow> {
    return (row: Row<FlatRow>, columnId: string, filterValue: unknown): boolean => {
        if (filterValue === undefined || filterValue === null) {
            return true;
        }
        if (typeof filterValue === 'object' && filterValue !== null && 'operator' in filterValue) {
            const config = filterValue as FilterConfig;
            return evaluateDateFilter(row.getValue(columnId), config.operator, config.value, read);
        }
        // Legacy: a plain string/number value means "equals this day"
        if (typeof filterValue === 'string' || typeof filterValue === 'number') {
            return evaluateDateFilter(row.getValue(columnId), 'equals', filterValue, read);
        }
        return true;
    };
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
