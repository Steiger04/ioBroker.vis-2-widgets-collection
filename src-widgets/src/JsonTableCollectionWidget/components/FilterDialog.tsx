/**
 * Filter dialog for a Spaltenfilter.
 *
 * @module JsonTableCollectionWidget/components/FilterDialog
 * @remarks
 * Provides a modal dialog for setting a column's filter: the operators and the default the
 * Column's Effektiver Typ offers, the input control of that type (text, number, date picker,
 * boolean select), and the coercion of the input — all from `../columnFilter`.
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
import type { EffectiveType } from '../capabilities';
import {
    coerceFilterValue,
    filterFits,
    filterOperators,
    getDefaultOperator,
    needsValue as operatorNeedsValue,
    type FilterConfig,
    type FilterOperator,
} from '../columnFilter';
import { headerNameOf } from '../columns';

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
    /** The Column's Effektiver Typ: decides operators, input control and coercion */
    columnType?: EffectiveType;
}

/** Boolean value options for the select dropdown (stored as strings for MUI compatibility) */
const BOOLEAN_VALUES: { value: string; label: string }[] = [
    { value: 'true', label: 'json_table_filter_boolean_true' },
    { value: 'false', label: 'json_table_filter_boolean_false' },
];

/** The input control of a type: its own for numbers, dates and booleans, text for the rest. */
type InputKind = 'string' | 'number' | 'date' | 'boolean';

const inputKindOf = (type: EffectiveType): InputKind =>
    type === 'number' || type === 'date' || type === 'boolean' ? type : 'string';

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

    // The Column's Effektiver Typ decides the operators, the input control and the coercion
    const type = columnType ?? 'string';
    const inputKind = inputKindOf(type);
    const operators = filterOperators(type);

    // The current filter when its type offers it, else a fresh one with the type's default
    const parsedCurrentValue = useMemo(
        (): FilterConfig =>
            filterFits(type, currentValue) ? currentValue : { operator: getDefaultOperator(type), value: '' },
        [currentValue, type],
    );

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
    const needsValue = operatorNeedsValue(operator);

    // Handle apply - convert values only here
    const handleApply = useCallback((): void => {
        if (!needsValue) {
            // isEmpty/isNotEmpty operators don't need a value
            onApply({ operator, value: '' });
            return;
        }
        // An input the type cannot hold (empty included) means no filter
        const coerced = coerceFilterValue(type, value);
        onApply(coerced === undefined ? undefined : ({ operator, value: coerced } satisfies FilterConfig));
    }, [needsValue, type, operator, value, onApply]);

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
            if (!operatorNeedsValue(newOperator)) {
                setValue('');
            } else if (inputKind !== 'boolean' && (value === 'true' || value === 'false')) {
                // Reset boolean string value when switching away from boolean type
                setValue('');
            }
        },
        [value, inputKind],
    );

    // Format column ID for display
    const displayColumnId = headerNameOf(columnId);

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
                    color="textSecondary"
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
                                    key={op.operator}
                                    value={op.operator}
                                >
                                    {Generic.t(op.label)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {needsValue && inputKind === 'boolean' && (
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

                    {needsValue && inputKind === 'date' && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={coerceFilterValue('date', value) ?? ''}
                            onChange={e => setValue(e.target.value)}
                            type="date"
                            fullWidth
                            autoFocus
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}

                    {needsValue && inputKind === 'number' && (
                        <TextField
                            label={Generic.t('json_table_filter_value')}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type="number"
                            fullWidth
                            autoFocus
                        />
                    )}

                    {needsValue && inputKind === 'string' && (
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
                            color="textSecondary"
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
                    disabled={needsValue && inputKind === 'boolean' && value !== 'true' && value !== 'false'}
                >
                    {Generic.t('json_table_filter_apply')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default FilterDialog;
