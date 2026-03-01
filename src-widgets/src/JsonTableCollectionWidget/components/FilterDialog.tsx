/**
 * Filter dialog for advanced column filter configuration.
 *
 * @module JsonTableCollectionWidget/components/FilterDialog
 * @remarks
 * Provides a modal dialog for setting column filters with type-specific
 * filter operators (contains, equals, greater than, etc.).
 */

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Typography,
} from '@mui/material';
import type React from 'react';
import { useState, useEffect, useMemo } from 'react';

import Generic from '../../Generic';

/** Available filter operators */
export type FilterOperator =
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'equals'
    | 'notEquals'
    | 'greaterThan'
    | 'greaterThanOrEqual'
    | 'lessThan'
    | 'lessThanOrEqual'
    | 'isEmpty'
    | 'isNotEmpty';

/** Filter configuration structure */
export interface FilterConfig {
    operator: FilterOperator;
    value: string | number;
}

/** Props for the FilterDialog component */
export interface FilterDialogProps {
    /** Whether the dialog is open */
    open: boolean;
    /** Callback when dialog should close */
    onClose: () => void;
    /** Callback when filter should be applied */
    onApply: (value: unknown) => void;
    /** Current filter value (can be FilterConfig or primitive) */
    currentValue: unknown;
    /** Column identifier for display */
    columnId: string;
    /** Column data type for operator selection */
    columnType?: string;
}

/** Operators available for string columns */
const STRING_OPERATORS: { value: FilterOperator; label: string }[] = [
    { value: 'contains', label: 'json_table_filter_contains' },
    { value: 'startsWith', label: 'json_table_filter_starts_with' },
    { value: 'endsWith', label: 'json_table_filter_ends_with' },
    { value: 'equals', label: 'json_table_filter_equals' },
    { value: 'notEquals', label: 'json_table_filter_not_equals' },
    { value: 'isEmpty', label: 'json_table_filter_is_empty' },
    { value: 'isNotEmpty', label: 'json_table_filter_is_not_empty' },
];

/** Operators available for number columns */
const NUMBER_OPERATORS: { value: FilterOperator; label: string }[] = [
    { value: 'equals', label: 'json_table_filter_equals' },
    { value: 'notEquals', label: 'json_table_filter_not_equals' },
    { value: 'greaterThan', label: 'json_table_filter_greater_than' },
    { value: 'greaterThanOrEqual', label: 'json_table_filter_greater_than_or_equal' },
    { value: 'lessThan', label: 'json_table_filter_less_than' },
    { value: 'lessThanOrEqual', label: 'json_table_filter_less_than_or_equal' },
    { value: 'isEmpty', label: 'json_table_filter_is_empty' },
    { value: 'isNotEmpty', label: 'json_table_filter_is_not_empty' },
];

/** Operators available for date columns */
const DATE_OPERATORS: { value: FilterOperator; label: string }[] = [
    { value: 'equals', label: 'json_table_filter_equals' },
    { value: 'greaterThan', label: 'json_table_filter_after' },
    { value: 'greaterThanOrEqual', label: 'json_table_filter_on_or_after' },
    { value: 'lessThan', label: 'json_table_filter_before' },
    { value: 'lessThanOrEqual', label: 'json_table_filter_on_or_before' },
    { value: 'isEmpty', label: 'json_table_filter_is_empty' },
    { value: 'isNotEmpty', label: 'json_table_filter_is_not_empty' },
];

/** Operators available for boolean columns */
const BOOLEAN_OPERATORS: { value: FilterOperator; label: string }[] = [
    { value: 'equals', label: 'json_table_filter_equals' },
    { value: 'notEquals', label: 'json_table_filter_not_equals' },
];

/**
 * Gets the default operator for a column type.
 *
 * @param columnType - The column data type
 * @returns The default filter operator for the type
 */
function getDefaultOperator(columnType: 'string' | 'number' | 'date' | 'boolean'): FilterOperator {
    switch (columnType) {
        case 'number':
        case 'date':
        case 'boolean':
            return 'equals';
        default:
            return 'contains';
    }
}

/**
 * Renders a dialog for configuring column filters.
 *
 * Features:
 * - Type-specific filter operators
 * - Support for string, number, date, and boolean columns
 * - Translated labels for all operators
 */
function FilterDialog({
    open,
    onClose,
    onApply,
    currentValue,
    columnId,
    columnType,
}: FilterDialogProps): React.JSX.Element {
    // Determine effective column type
    const effectiveType = useMemo((): 'string' | 'number' | 'date' | 'boolean' => {
        if (columnType === 'number' || columnType === 'date' || columnType === 'boolean' || columnType === 'string') {
            return columnType;
        }
        return 'string';
    }, [columnType]);

    // Get available operators based on column type
    const operators = useMemo(() => {
        switch (effectiveType) {
            case 'number':
                return NUMBER_OPERATORS;
            case 'date':
                return DATE_OPERATORS;
            case 'boolean':
                return BOOLEAN_OPERATORS;
            default:
                return STRING_OPERATORS;
        }
    }, [effectiveType]);

    // Parse current filter value with type-safe operator validation
    const parsedCurrentValue = useMemo((): FilterConfig => {
        const defaultOperator = getDefaultOperator(effectiveType);

        if (currentValue === undefined || currentValue === null) {
            return { operator: defaultOperator, value: '' };
        }

        if (typeof currentValue === 'object' && currentValue !== null && 'operator' in currentValue) {
            const config = currentValue as FilterConfig;
            // Validate operator against allowed operators for this type
            const isValidOperator = operators.some(op => op.value === config.operator);
            if (isValidOperator) {
                return config;
            }
            // Fallback to default operator if invalid, but keep the value
            return { operator: defaultOperator, value: config.value };
        }

        // Legacy: simple string/number value means default operator for type
        if (typeof currentValue === 'string' || typeof currentValue === 'number') {
            return { operator: defaultOperator, value: currentValue };
        }

        // Fallback for other types (arrays, objects): stringify
        return { operator: defaultOperator, value: JSON.stringify(currentValue) };
    }, [currentValue, effectiveType, operators]);

    // Store value as raw string during editing to preserve empty input state
    const [operator, setOperator] = useState<FilterOperator>(parsedCurrentValue.operator);
    const [value, setValue] = useState<string>(String(parsedCurrentValue.value));

    // Reset state when dialog opens with new values
    useEffect(() => {
        setOperator(parsedCurrentValue.operator);
        setValue(String(parsedCurrentValue.value));
    }, [parsedCurrentValue, open]);

    // Check if operator needs a value input
    const needsValue = !['isEmpty', 'isNotEmpty'].includes(operator);

    // Handle apply - convert numeric values only here
    const handleApply = (): void => {
        const trimmedValue = value.trim();

        if (needsValue && trimmedValue === '') {
            // Empty or whitespace-only value means no filter
            onApply(undefined);
        } else {
            // Convert to number only for number type, keep as string otherwise
            const finalValue = effectiveType === 'number' ? Number(trimmedValue) : trimmedValue;
            onApply({ operator, value: finalValue });
        }
    };

    // Handle clear
    const handleClear = (): void => {
        onApply(undefined);
    };

    // Format column ID for display
    const displayColumnId = columnId.split('.').pop() || columnId;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>{Generic.t('json_table_filter_for_column').replace('{column}', displayColumnId)}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel>{Generic.t('json_table_filter_operator')}</InputLabel>
                        <Select<FilterOperator>
                            value={operator}
                            label={Generic.t('json_table_filter_operator')}
                            onChange={e => setOperator(e.target.value as FilterOperator)}
                        >
                            {operators.map(op => (
                                <MenuItem
                                    key={op.value}
                                    value={op.value}
                                >
                                    {Generic.t(op.label)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {needsValue && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type={effectiveType === 'number' ? 'number' : 'text'}
                            fullWidth
                            autoFocus
                        />
                    )}

                    {!needsValue && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {Generic.t('json_table_filter_no_value_needed')}
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClear}>{Generic.t('json_table_filter_clear')}</Button>
                <Button onClick={onClose}>{Generic.t('cancel')}</Button>
                <Button
                    variant="contained"
                    onClick={handleApply}
                >
                    {Generic.t('json_table_filter_apply')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FilterDialog;
