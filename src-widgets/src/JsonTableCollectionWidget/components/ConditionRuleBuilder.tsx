/**
 * Visual condition rule builder for json-logic-engine based rules.
 *
 * @module JsonTableCollectionWidget/components/ConditionRuleBuilder
 * @remarks
 * Renders a structured condition editor that builds json-logic rule objects.
 * No JavaScript expressions, no eval — pure structured data.
 *
 * Supports single conditions and compound AND/OR conditions.
 */

import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import {
    OPERATORS_BY_TYPE,
    DEFAULT_OPERATORS,
    NO_OPERAND_OPERATORS,
    buildFromState,
    parseBuilderState,
    type ConditionOperator,
    type SimpleCondition,
    type BuilderState,
    type JsonLogicRule,
} from '../utils/jsonLogicEngine';

// ── i18n key helpers ────────────────────────────────────────────

const OP_LABEL_KEYS: Record<ConditionOperator, string> = {
    eq: 'json_table_op_eq',
    neq: 'json_table_op_neq',
    gt: 'json_table_op_gt',
    gte: 'json_table_op_gte',
    lt: 'json_table_op_lt',
    lte: 'json_table_op_lte',
    contains: 'json_table_op_contains',
    not_contains: 'json_table_op_not_contains',
    starts_with: 'json_table_op_starts_with',
    ends_with: 'json_table_op_ends_with',
    empty: 'json_table_op_empty',
    not_empty: 'json_table_op_not_empty',
    is_true: 'json_table_op_is_true',
    is_false: 'json_table_op_is_false',
};

// ── DateInputField Component ─────────────────────────────────────

/**
 * Wrapper for TextField with date/number type that uses local state
 * to avoid browser auto-completion issues during input.
 *
 * HTML5 date inputs auto-complete partial years (e.g., "1" → "0001"),
 * which prevents entering full years like "1990". This component
 * only updates the parent on blur, allowing complete input.
 */
interface DateInputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    inputType: 'date' | 'number' | 'text';
}

function DateInputField({ label, value, onChange, inputType }: DateInputFieldProps): React.JSX.Element {
    // Local state for date input to avoid auto-completion issues
    const [localValue, setLocalValue] = useState(value);

    // Sync local state when prop value changes (e.g., switching rules)
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleBlur = useCallback(() => {
        // Only propagate to parent on blur
        if (localValue !== value) {
            onChange(localValue);
        }
    }, [localValue, value, onChange]);

    return (
        <TextField
            label={label}
            value={localValue}
            onChange={e => setLocalValue(e.target.value)}
            onBlur={handleBlur}
            size="small"
            type={inputType}
            sx={{
                flex: 1,
                // FIX: Make calendar icon more visible for date inputs
                ...(inputType === 'date' && {
                    '& input[type="date"]::-webkit-calendar-picker-indicator': {
                        filter: 'invert(0.5)',
                        cursor: 'pointer',
                        opacity: 0.7,
                        '&:hover': { opacity: 1 },
                    },
                }),
            }}
            // FIX: Force label shrink for date/number inputs (MUI limitation)
            InputLabelProps={inputType === 'date' || inputType === 'number' ? { shrink: true } : undefined}
            slotProps={
                inputType === 'number'
                    ? { htmlInput: { step: 'any' } }
                    : inputType === 'date'
                      ? { htmlInput: { placeholder: 'YYYY-MM-DD' } }
                      : undefined
            }
        />
    );
}

// ── Props ───────────────────────────────────────────────────────

interface ConditionRuleBuilderProps {
    /** Current json-logic rule (undefined = no condition) */
    logic: JsonLogicRule | undefined;
    /** Detected column type for operator filtering */
    columnType: string;
    /** Called whenever the rule changes */
    onChange: (logic: JsonLogicRule | undefined) => void;
}

// ── Component ───────────────────────────────────────────────────

function ConditionRuleBuilder({ logic, columnType, onChange }: ConditionRuleBuilderProps): React.JSX.Element {
    const [state, setState] = useState<BuilderState>(() => parseBuilderState(logic));

    // Sync state when logic prop changes (e.g., switching between style rules)
    useEffect(() => {
        setState(parseBuilderState(logic));
    }, [logic]);

    const availableOperators = OPERATORS_BY_TYPE[columnType] ?? DEFAULT_OPERATORS;

    // Emit the current state as a JsonLogicRule (or undefined if incomplete)
    const emit = useCallback(
        (newState: BuilderState) => {
            setState(newState);
            onChange(buildFromState(newState, columnType));
        },
        [onChange, columnType],
    );

    // Update a single condition row
    const updateCondition = useCallback(
        (idx: number, patch: Partial<SimpleCondition>) => {
            const updated = state.conditions.map((c, i) => (i === idx ? { ...c, ...patch } : c));
            emit({ ...state, conditions: updated });
        },
        [state, emit],
    );

    // Remove a condition row (only allowed when ≥2 rows)
    const removeCondition = useCallback(
        (idx: number) => {
            const updated = state.conditions.filter((_, i) => i !== idx);
            // If back to 1, mode stays but is hidden
            emit({ ...state, conditions: updated });
        },
        [state, emit],
    );

    // Add a second condition (activates compound mode)
    const addCondition = useCallback(() => {
        const defaultOp = availableOperators[0] ?? 'eq';
        emit({
            ...state,
            conditions: [
                ...state.conditions,
                { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, operator: defaultOp, operand: '' },
            ],
        });
    }, [state, emit, availableOperators]);

    // Switch AND/OR mode
    const setMode = useCallback(
        (_: React.MouseEvent, value: 'and' | 'or' | null) => {
            if (value !== null) {
                emit({ ...state, mode: value });
            }
        },
        [state, emit],
    );

    const isCompound = state.conditions.length > 1;

    return (
        <Stack spacing={1}>
            {/* AND/OR toggle — only shown when compound */}
            {isCompound && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ToggleButtonGroup
                        value={state.mode}
                        exclusive
                        onChange={setMode}
                        size="small"
                        aria-label={Generic.t('json_table_condition_mode_label')}
                    >
                        <ToggleButton
                            value="and"
                            aria-label={Generic.t('json_table_condition_mode_all')}
                        >
                            {Generic.t('json_table_condition_mode_all')}
                        </ToggleButton>
                        <ToggleButton
                            value="or"
                            aria-label={Generic.t('json_table_condition_mode_any')}
                        >
                            {Generic.t('json_table_condition_mode_any')}
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {state.mode === 'and'
                            ? Generic.t('json_table_condition_mode_hint_and')
                            : Generic.t('json_table_condition_mode_hint_or')}
                    </Typography>
                </Box>
            )}

            {/* Condition rows */}
            {state.conditions.map((cond, idx) => {
                const needsOperand = !NO_OPERAND_OPERATORS.has(cond.operator);
                // Derive input type from column type: number→number, date→date, else text
                const inputType = columnType === 'date' ? 'date' : columnType === 'number' ? 'number' : 'text';

                return (
                    <Box
                        key={cond.id ?? idx}
                        sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}
                    >
                        {/* Operator select */}
                        <FormControl
                            size="small"
                            sx={{ flex: needsOperand ? '0 0 auto' : 1, minWidth: 160 }}
                        >
                            <InputLabel>{Generic.t('json_table_condition_operator')}</InputLabel>
                            <Select
                                label={Generic.t('json_table_condition_operator')}
                                value={cond.operator}
                                onChange={e => {
                                    const newOp = e.target.value as ConditionOperator;
                                    // Clear operand when switching to/from no-operand ops
                                    const operand = NO_OPERAND_OPERATORS.has(newOp) ? '' : cond.operand;
                                    updateCondition(idx, { operator: newOp, operand });
                                }}
                            >
                                {availableOperators.map(op => (
                                    <MenuItem
                                        key={op}
                                        value={op}
                                    >
                                        {Generic.t(OP_LABEL_KEYS[op])}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Operand input — hidden for operators that don't need a value */}
                        {needsOperand && (
                            <DateInputField
                                label={Generic.t('json_table_condition_value')}
                                value={cond.operand ?? ''}
                                onChange={val => updateCondition(idx, { operand: val })}
                                inputType={inputType}
                            />
                        )}

                        {/* Remove button — only shown in compound mode */}
                        {isCompound && (
                            <Tooltip title={Generic.t('json_table_condition_remove')}>
                                <IconButton
                                    size="small"
                                    onClick={() => removeCondition(idx)}
                                    aria-label={Generic.t('json_table_condition_remove')}
                                    sx={{ mt: 0.5 }}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                );
            })}

            {/* Add condition button */}
            <Button
                startIcon={<AddIcon />}
                onClick={addCondition}
                size="small"
                variant="text"
                sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
                aria-label={Generic.t('json_table_condition_add')}
            >
                {isCompound ? Generic.t('json_table_condition_add') : Generic.t('json_table_condition_add_first')}
            </Button>
        </Stack>
    );
}

export default ConditionRuleBuilder;
