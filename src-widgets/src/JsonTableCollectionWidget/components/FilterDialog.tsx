/**
 * Filter dialog for advanced column filter configuration.
 *
 * @module JsonTableCollectionWidget/components/FilterDialog
 * @remarks
 * Provides a modal dialog for setting column filters with type-specific
 * filter operators (contains, equals, greater than, etc.) and appropriate
 * input controls for each data type (text, number, date picker, boolean select).
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
    useMediaQuery,
    useTheme,
    Chip,
} from '@mui/material';
import type React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';

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
    value: string | number | boolean;
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
    { value: 'isEmpty', label: 'json_table_filter_is_empty' },
    { value: 'isNotEmpty', label: 'json_table_filter_is_not_empty' },
];

/** Boolean value options for the select dropdown (stored as strings for MUI compatibility) */
const BOOLEAN_VALUES: { value: string; label: string }[] = [
    { value: 'true', label: 'json_table_filter_boolean_true' },
    { value: 'false', label: 'json_table_filter_boolean_false' },
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
 * Formats a date value for the date input field (YYYY-MM-DD format).
 *
 * @param value - The value to format
 * @returns The formatted date string or empty string
 */
function formatDateForInput(value: unknown): string {
    if (value === null || value === undefined || value === '') {
        return '';
    }

    // If already in YYYY-MM-DD format, return as-is
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
    }

    // Try to parse and format. Use LOCAL getters (not toISOString) so the picker shows the
    // same calendar day the user sees in the default LOCAL display, avoiding an off-by-one
    // around UTC midnight for non-UTC timezones.
    try {
        const date = new Date(value as string | number);
        if (!isNaN(date.getTime())) {
            const y = date.getFullYear();
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const d = String(date.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        }
    } catch {
        // Ignore parsing errors
    }

    // Fallback: convert to string safely
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number') {
        return String(value);
    }
    return '';
}

/**
 * Renders a dialog for configuring column filters.
 *
 * Features:
 * - Type-specific filter operators
 * - Support for string, number, date, and boolean columns
 * - Appropriate input controls for each type (text, number, date picker, boolean select)
 * - Translated labels for all operators
 * - Full-screen mode on mobile devices
 * - Keyboard support (Enter to apply)
 * - Accessibility features (ARIA attributes)
 */
function FilterDialog({
    open,
    onClose,
    onApply,
    currentValue,
    columnId,
    columnType,
}: FilterDialogProps): React.JSX.Element {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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

        // Legacy: simple string/number/boolean value means default operator for type
        if (typeof currentValue === 'string' || typeof currentValue === 'number' || typeof currentValue === 'boolean') {
            return { operator: defaultOperator, value: currentValue };
        }

        // Fallback for other types (arrays, objects): stringify
        return { operator: defaultOperator, value: JSON.stringify(currentValue) };
    }, [currentValue, effectiveType, operators]);

    // Store value as raw string during editing to preserve empty input state
    const [operator, setOperator] = useState<FilterOperator>(parsedCurrentValue.operator);
    const [value, setValue] = useState<string | number>(
        typeof parsedCurrentValue.value === 'boolean' ? String(parsedCurrentValue.value) : parsedCurrentValue.value,
    );

    // Track if we have an active filter for display
    const hasActiveFilter = useMemo(() => {
        return currentValue !== undefined && currentValue !== null;
    }, [currentValue]);

    // Reset state when dialog opens with new values
    useEffect(() => {
        if (open) {
            setOperator(parsedCurrentValue.operator);
            setValue(
                typeof parsedCurrentValue.value === 'boolean'
                    ? String(parsedCurrentValue.value)
                    : parsedCurrentValue.value,
            );
        }
    }, [parsedCurrentValue, open]);

    // Check if operator needs a value input
    const needsValue = !['isEmpty', 'isNotEmpty'].includes(operator);

    // Handle apply - convert values only here
    const handleApply = useCallback((): void => {
        if (!needsValue) {
            // isEmpty/isNotEmpty operators don't need a value
            onApply({ operator, value: '' });
            return;
        }

        // Handle boolean type - convert string "true"/"false" back to boolean
        if (effectiveType === 'boolean') {
            const booleanValue = value === 'true';
            onApply({ operator, value: booleanValue });
            return;
        }

        const stringValue = typeof value === 'string' ? value.trim() : String(value).trim();

        if (stringValue === '') {
            // Empty or whitespace-only value means no filter
            onApply(undefined);
        } else {
            // Convert to number only for number type, keep as string otherwise
            const finalValue = effectiveType === 'number' ? Number(stringValue) : stringValue;
            onApply({ operator, value: finalValue });
        }
    }, [needsValue, effectiveType, operator, value, onApply]);

    // Handle clear
    const handleClear = useCallback((): void => {
        onApply(undefined);
    }, [onApply]);

    // Handle keyboard events
    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent): void => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                handleApply();
            }
        },
        [handleApply],
    );

    // Handle operator change - reset value when switching to/from no-value operators
    const handleOperatorChange = useCallback(
        (newOperator: FilterOperator): void => {
            setOperator(newOperator);
            // Reset value when switching to a no-value operator
            if (['isEmpty', 'isNotEmpty'].includes(newOperator)) {
                setValue('');
            } else if (effectiveType !== 'boolean' && (value === 'true' || value === 'false')) {
                // Reset boolean string value when switching away from boolean type
                setValue('');
            }
        },
        [value, effectiveType],
    );

    // Format column ID for display
    const displayColumnId = columnId.split('.').pop() || columnId;

    // Generate unique IDs for accessibility
    const dialogTitleId = `filter-dialog-title-${columnId}`;
    const dialogDescriptionId = `filter-dialog-description-${columnId}`;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            fullScreen={fullScreen}
            aria-labelledby={dialogTitleId}
            aria-describedby={dialogDescriptionId}
        >
            <DialogTitle id={dialogTitleId}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {Generic.t('json_table_filter_for_column').replace('{column}', displayColumnId)}
                    {hasActiveFilter && (
                        <Chip
                            label={Generic.t('json_table_filter_active')}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    )}
                </Box>
            </DialogTitle>
            <DialogContent>
                <Typography
                    id={dialogDescriptionId}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, mt: 1 }}
                >
                    {Generic.t('json_table_filter_dialog_description')}
                </Typography>
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    onKeyDown={handleKeyDown}
                >
                    <FormControl fullWidth>
                        <InputLabel id={`filter-operator-label-${columnId}`}>
                            {Generic.t('json_table_filter_operator')}
                        </InputLabel>
                        <Select<FilterOperator>
                            value={operator}
                            label={Generic.t('json_table_filter_operator')}
                            labelId={`filter-operator-label-${columnId}`}
                            onChange={e => handleOperatorChange(e.target.value as FilterOperator)}
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

                    {needsValue && effectiveType === 'boolean' && (
                        <FormControl fullWidth>
                            <InputLabel id={`filter-value-label-${columnId}`}>
                                {Generic.t('json_table_filter_value')}
                            </InputLabel>
                            <Select<string>
                                value={value === 'true' || value === 'false' ? value : ''}
                                label={Generic.t('json_table_filter_value')}
                                labelId={`filter-value-label-${columnId}`}
                                onChange={e => setValue(e.target.value)}
                            >
                                {BOOLEAN_VALUES.map(op => (
                                    <MenuItem
                                        key={op.value}
                                        value={op.value}
                                    >
                                        {Generic.t(op.label)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {needsValue && effectiveType === 'date' && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={formatDateForInput(value)}
                            onChange={e => setValue(e.target.value)}
                            type="date"
                            fullWidth
                            autoFocus
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    )}

                    {needsValue && effectiveType === 'number' && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type="number"
                            fullWidth
                            autoFocus
                        />
                    )}

                    {needsValue && effectiveType === 'string' && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type="text"
                            fullWidth
                            autoFocus
                        />
                    )}

                    {!needsValue && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontStyle: 'italic' }}
                        >
                            {Generic.t('json_table_filter_no_value_needed')}
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                {hasActiveFilter && (
                    <Button
                        onClick={handleClear}
                        color="error"
                        sx={{ mr: 'auto' }}
                    >
                        {Generic.t('json_table_filter_clear')}
                    </Button>
                )}
                <Button onClick={onClose}>{Generic.t('cancel')}</Button>
                <Button
                    variant="contained"
                    onClick={handleApply}
                    disabled={needsValue && effectiveType === 'boolean' && value !== 'true' && value !== 'false'}
                >
                    {Generic.t('json_table_filter_apply')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FilterDialog;
