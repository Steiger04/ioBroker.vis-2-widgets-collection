/**
 * Conditional style editor component for column styling configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/ConditionalStyleEditor
 * @remarks
 * Provides UI controls for conditional styling rules including the ConditionRuleBuilder,
 * rule management (add/delete/reorder), and evaluation mode selection.
 */

import {
    Add as AddIcon,
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Delete as DeleteIcon,
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
} from '@mui/icons-material';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    Paper,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import type React from 'react';
import { useCallback } from 'react';

import Generic from '../../../Generic';
import ColorPickerField from '../../../components/ColorPickerField';
import { gradientColor } from '../../../lib/helper/gradientColor';
import type { ColumnStyleRule } from '../../types';
import ConditionRuleBuilder from '../ConditionRuleBuilder';
import type { JsonLogicRule } from '../../utils/jsonLogicEngine';

/** Props for the ConditionalStyleEditor component. */
export interface ConditionalStyleEditorProps {
    /** Array of conditional style rules */
    cellStyle: ColumnStyleRule[];
    /** Evaluation mode: 'first-match' stops at first match, 'all-match' applies all */
    cellStyleMode: 'first-match' | 'all-match';
    /** The detected column type for condition value suggestions */
    columnType: string;
    /** Callback when style rules change */
    onStyleChange: (style: ColumnStyleRule[]) => void;
    /** Callback when evaluation mode changes */
    onModeChange: (mode: 'first-match' | 'all-match') => void;
}

/**
 * Renders conditional styling controls with rule builder and live preview.
 */
function ConditionalStyleEditor({
    cellStyle,
    cellStyleMode,
    columnType,
    onStyleChange,
    onModeChange,
}: ConditionalStyleEditorProps): React.JSX.Element {
    // Update a single style rule at a given index
    const updateStyleRule = useCallback(
        (index: number, patch: Partial<ColumnStyleRule>) => {
            const updated = [...(cellStyle || [])];
            updated[index] = { ...updated[index], ...patch };
            onStyleChange(updated);
        },
        [cellStyle, onStyleChange],
    );

    // Delete a style rule
    const deleteStyleRule = useCallback(
        (index: number) => {
            const updated = [...(cellStyle || [])];
            updated.splice(index, 1);
            onStyleChange(updated);
        },
        [cellStyle, onStyleChange],
    );

    // Add a new empty style rule with a stable id for React keying
    const addStyleRule = useCallback(() => {
        const newRule: ColumnStyleRule = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            backgroundColor: '',
            textColor: '',
            fontWeight: 'normal',
            fontStyle: 'normal',
        };
        onStyleChange([...(cellStyle || []), newRule]);
    }, [cellStyle, onStyleChange]);

    // Move a rule up in the priority order
    const moveRuleUp = useCallback(
        (idx: number) => {
            if (idx === 0) {
                return;
            }
            const updated = [...(cellStyle || [])];
            [updated[idx - 1], updated[idx]] = [updated[idx], updated[idx - 1]];
            onStyleChange(updated);
        },
        [cellStyle, onStyleChange],
    );

    // Move a rule down in the priority order
    const moveRuleDown = useCallback(
        (idx: number) => {
            const rules = cellStyle || [];
            if (idx >= rules.length - 1) {
                return;
            }
            const updated = [...rules];
            [updated[idx], updated[idx + 1]] = [updated[idx + 1], updated[idx]];
            onStyleChange(updated);
        },
        [cellStyle, onStyleChange],
    );

    return (
        <Stack spacing={1.5}>
            {/* Evaluation mode toggle — shown when ≥1 rule */}
            {(cellStyle?.length ?? 0) >= 1 && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ToggleButtonGroup
                        value={cellStyleMode ?? 'first-match'}
                        exclusive
                        size="small"
                        onChange={(_e, val: 'first-match' | 'all-match' | null) => {
                            if (val) {
                                onModeChange(val);
                            }
                        }}
                        aria-label={Generic.t('json_table_cell_style_mode_label')}
                    >
                        <ToggleButton
                            value="first-match"
                            aria-label={Generic.t('json_table_cell_style_mode_first')}
                        >
                            {Generic.t('json_table_cell_style_mode_first')}
                        </ToggleButton>
                        <ToggleButton
                            value="all-match"
                            aria-label={Generic.t('json_table_cell_style_mode_all')}
                        >
                            {Generic.t('json_table_cell_style_mode_all')}
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {(cellStyleMode ?? 'first-match') === 'first-match'
                            ? Generic.t('json_table_cell_style_mode_hint_first')
                            : Generic.t('json_table_cell_style_mode_hint_all')}
                    </Typography>
                </Box>
            )}

            {/* Empty state */}
            {(cellStyle || []).length === 0 && (
                <Box
                    sx={{
                        textAlign: 'center',
                        py: 2,
                        px: 1,
                        color: 'text.secondary',
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, mb: 0.5 }}
                    >
                        {Generic.t('json_table_no_style_rules')}
                    </Typography>
                    <Typography variant="caption">{Generic.t('json_table_no_style_rules_hint')}</Typography>
                </Box>
            )}

            {/* Rule cards */}
            {(cellStyle || []).map((rule, idx) => {
                const ruleCount = (cellStyle || []).length;
                // Pre-compute gradient results to avoid repeated calls in JSX
                const bgGradient = rule.backgroundColor ? gradientColor(rule.backgroundColor) : undefined;
                const textGradient = rule.textColor ? gradientColor(rule.textColor) : undefined;

                return (
                    <Paper
                        key={rule.id ?? idx}
                        variant="outlined"
                        sx={{ p: 1.5 }}
                    >
                        <Stack spacing={1.5}>
                            {/* Rule header: label + reorder + delete */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{ fontWeight: 600, color: 'text.secondary' }}
                                    >
                                        {Generic.t('json_table_rule')} {idx + 1}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 0.5 }}>
                                    <Tooltip title={Generic.t('json_table_rule_move_up')}>
                                        <span>
                                            <IconButton
                                                size="small"
                                                onClick={() => moveRuleUp(idx)}
                                                disabled={idx === 0}
                                                aria-label={Generic.t('json_table_rule_move_up')}
                                            >
                                                <ArrowUpwardIcon fontSize="small" />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                    <Tooltip title={Generic.t('json_table_rule_move_down')}>
                                        <span>
                                            <IconButton
                                                size="small"
                                                onClick={() => moveRuleDown(idx)}
                                                disabled={idx >= ruleCount - 1}
                                                aria-label={Generic.t('json_table_rule_move_down')}
                                            >
                                                <ArrowDownwardIcon fontSize="small" />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                    <Tooltip title={Generic.t('json_table_delete_rule')}>
                                        <IconButton
                                            size="small"
                                            onClick={() => deleteStyleRule(idx)}
                                            color="error"
                                            aria-label={Generic.t('json_table_delete_rule')}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>

                            {/* Visual condition builder */}
                            <ConditionRuleBuilder
                                key={rule.id ?? idx}
                                logic={rule.logic}
                                columnType={columnType}
                                onChange={(newLogic: JsonLogicRule | undefined) =>
                                    updateStyleRule(idx, { logic: newLogic })
                                }
                            />

                            {/* Color inputs in a row */}
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="flex-start"
                            >
                                <ColorPickerField
                                    label={Generic.t('json_table_bg_color')}
                                    value={rule.backgroundColor || ''}
                                    overridden={!!rule.backgroundColor}
                                    onChange={c => updateStyleRule(idx, { backgroundColor: c || undefined })}
                                />
                                <ColorPickerField
                                    label={Generic.t('json_table_text_color')}
                                    value={rule.textColor || ''}
                                    overridden={!!rule.textColor}
                                    onChange={c => updateStyleRule(idx, { textColor: c || undefined })}
                                />
                            </Stack>

                            {/* Font style toggles */}
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rule.fontWeight === 'bold'}
                                            onChange={e =>
                                                updateStyleRule(idx, {
                                                    fontWeight: e.target.checked ? 'bold' : 'normal',
                                                })
                                            }
                                            icon={<FormatBoldIcon sx={{ opacity: 0.3 }} />}
                                            checkedIcon={<FormatBoldIcon color="primary" />}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="caption">{Generic.t('json_table_bold')}</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rule.fontStyle === 'italic'}
                                            onChange={e =>
                                                updateStyleRule(idx, {
                                                    fontStyle: e.target.checked ? 'italic' : 'normal',
                                                })
                                            }
                                            icon={<FormatItalicIcon sx={{ opacity: 0.3 }} />}
                                            checkedIcon={<FormatItalicIcon color="primary" />}
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="caption">{Generic.t('json_table_italic')}</Typography>}
                                />
                            </Stack>

                            {/* Live preview swatch */}
                            {(rule.backgroundColor ||
                                rule.textColor ||
                                rule.fontWeight === 'bold' ||
                                rule.fontStyle === 'italic') && (
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 1,
                                        ...(rule.backgroundColor
                                            ? bgGradient
                                                ? { background: bgGradient }
                                                : { backgroundColor: rule.backgroundColor }
                                            : {}),
                                        fontWeight: rule.fontWeight || 'normal',
                                        fontStyle: rule.fontStyle || 'normal',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            ...(rule.textColor
                                                ? textGradient
                                                    ? {
                                                          background: textGradient,
                                                          backgroundClip: 'text',
                                                          WebkitBackgroundClip: 'text',
                                                          color: 'transparent',
                                                      }
                                                    : { color: rule.textColor }
                                                : { color: 'inherit' }),
                                        }}
                                    >
                                        {Generic.t('json_table_sample_value')}
                                    </Typography>
                                </Paper>
                            )}
                        </Stack>
                    </Paper>
                );
            })}

            {(cellStyle?.length ?? 0) >= 2 && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ px: 0.5 }}
                >
                    {(cellStyleMode ?? 'first-match') === 'first-match'
                        ? Generic.t('json_table_rules_priority_hint')
                        : Generic.t('json_table_rules_all_match_hint')}
                </Typography>
            )}

            <Button
                startIcon={<AddIcon />}
                onClick={addStyleRule}
                variant="outlined"
                size="small"
                fullWidth
            >
                {Generic.t('json_table_add_style_rule')}
            </Button>
        </Stack>
    );
}

export default ConditionalStyleEditor;
