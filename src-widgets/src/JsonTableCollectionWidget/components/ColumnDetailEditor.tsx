/**
 * Column detail editor panel for the JsonTable column editor modal.
 *
 * @module JsonTableCollectionWidget/components/ColumnDetailEditor
 * @remarks
 * Renders the right panel of the column editor modal with accordion sections
 * for basic settings, formatting, conditional styling, and advanced options.
 * Formatting sections are context-sensitive based on detected column type.
 */

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    Chip,
    Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Slider,
    Stack,
    Switch,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    Add as AddIcon,
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Delete as DeleteIcon,
    ExpandMore as ExpandMoreIcon,
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
    RestartAlt as RestartAltIcon,
} from '@mui/icons-material';
import { useCallback, useMemo, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import ColorPickerField from '../../components/ColorPickerField';
import { gradientColor } from '../../lib/helper/gradientColor';
import { TYPE_COLORS, type ColumnConfigEntry, type ColumnStyleRule, type ColumnFormatConfig } from '../types';
import {
    formatNumberValue,
    formatDateValue,
    formatBooleanValue,
    formatStringValue,
    DATE_FORMAT_OPTIONS,
} from '../utils/formatters';
import ConditionRuleBuilder from './ConditionRuleBuilder';
import type { JsonLogicRule } from '../utils/jsonLogicEngine';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';

/** Props for the ColumnDetailEditor component. */
interface ColumnDetailEditorProps {
    /** Current column configuration being edited */
    column: ColumnConfigEntry;
    /** Column metadata from analysis (type, stats, detected format, etc.) */
    discoveredColumn?: JsonTableColumn;
    /** Callback when column configuration changes */
    onChange: (updated: ColumnConfigEntry) => void;
}

/**
 * Renders the detail editor for a single column with accordion-based sections.
 */
function ColumnDetailEditor({ column, discoveredColumn, onChange }: ColumnDetailEditorProps): React.JSX.Element {
    // Track which accordion sections are expanded
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        basic: true,
        formatting: false,
        styling: false,
        advanced: false,
    });

    const handleAccordionChange = useCallback((section: string) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    }, []);

    // Detected type from analysis
    const detectedType = discoveredColumn?.type || 'string';

    // Update format config helper.
    // When the format `type` changes, clears the previous type's properties to avoid
    // stale config (e.g. switching date→number should not retain dateFormat).
    const updateFormat = useCallback(
        (patch: Partial<ColumnFormatConfig>) => {
            const base: Partial<ColumnFormatConfig> = { ...column.format };

            if (patch.type && patch.type !== column.format?.type) {
                const oldType = column.format?.type;
                if (oldType === 'number') {
                    delete base.numberDecimals;
                    delete base.numberPrefix;
                    delete base.numberSuffix;
                    delete base.numberThousandsSeparator;
                } else if (oldType === 'date') {
                    delete base.dateFormat;
                    delete base.dateInputFormat;
                } else if (oldType === 'boolean') {
                    delete base.booleanTrue;
                    delete base.booleanFalse;
                } else if (oldType === 'string') {
                    const stringKeys: (keyof ColumnFormatConfig)[] = [
                        'stringCase',
                        'stringPrefix',
                        'stringSuffix',
                        'stringTrim',
                        'stringMaxLength',
                        'stringRegex',
                        'stringRegexGroup',
                        'stringRegexFlags',
                        'stringFontWeight',
                        'stringFontStyle',
                        'stringFontSize',
                        'stringTextColor',
                    ];
                    stringKeys.forEach(k => {
                        delete base[k];
                    });
                }
            }

            onChange({
                ...column,
                format: { ...base, ...patch } as ColumnFormatConfig,
            });
        },
        [column, onChange],
    );

    // Update a single style rule at a given index
    const updateStyleRule = useCallback(
        (index: number, patch: Partial<ColumnStyleRule>) => {
            const updated = [...(column.cellStyle || [])];
            updated[index] = { ...updated[index], ...patch };
            onChange({ ...column, cellStyle: updated });
        },
        [column, onChange],
    );

    // Delete a style rule
    const deleteStyleRule = useCallback(
        (index: number) => {
            const updated = [...(column.cellStyle || [])];
            updated.splice(index, 1);
            onChange({ ...column, cellStyle: updated });
        },
        [column, onChange],
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
        onChange({ ...column, cellStyle: [...(column.cellStyle || []), newRule] });
    }, [column, onChange]);

    // Move a rule up in the priority order
    const moveRuleUp = useCallback(
        (idx: number) => {
            if (idx === 0) {
                return;
            }
            const updated = [...(column.cellStyle || [])];
            [updated[idx - 1], updated[idx]] = [updated[idx], updated[idx - 1]];
            onChange({ ...column, cellStyle: updated });
        },
        [column, onChange],
    );

    // Move a rule down in the priority order
    const moveRuleDown = useCallback(
        (idx: number) => {
            const rules = column.cellStyle || [];
            if (idx >= rules.length - 1) {
                return;
            }
            const updated = [...rules];
            [updated[idx], updated[idx + 1]] = [updated[idx + 1], updated[idx]];
            onChange({ ...column, cellStyle: updated });
        },
        [column, onChange],
    );

    // Sample number value for preview (use discovered min/max if available)
    const sampleNumber = useMemo(() => {
        if (discoveredColumn?.min !== undefined && typeof discoveredColumn.min === 'number') {
            const maxVal = typeof discoveredColumn.max === 'number' ? discoveredColumn.max : 0;
            return discoveredColumn.min + (maxVal - discoveredColumn.min) * 0.75;
        }
        return 1234.567;
    }, [discoveredColumn]);

    // Total value count for percentage calculations
    const totalValues = useMemo(() => {
        if (!discoveredColumn) {
            return 0;
        }
        return Object.values(discoveredColumn.typeCounts).reduce((sum, count) => sum + count, 0);
    }, [discoveredColumn]);

    // ── Reset helpers ────────────────────────────────────────────

    const defaultHeaderName = useMemo(() => column.path.split('.').pop() || column.path, [column.path]);

    const isBasicDirty =
        column.headerName !== defaultHeaderName ||
        column.width !== undefined ||
        (column.align !== undefined && column.align !== 'left') ||
        column.visible !== true;

    const resetBasic = useCallback(() => {
        onChange({ ...column, headerName: defaultHeaderName, width: undefined, align: undefined, visible: true });
    }, [column, onChange, defaultHeaderName]);

    const isFormattingDirty = column.format !== undefined;

    const resetFormatting = useCallback(() => {
        const { format: _, ...rest } = column;
        onChange(rest as ColumnConfigEntry);
    }, [column, onChange]);

    const isStylingDirty = (column.cellStyle?.length ?? 0) > 0 || column.cellStyleMode !== undefined;

    const resetStyling = useCallback(() => {
        const { cellStyle: _cs, cellStyleMode: _csm, ...rest } = column;
        onChange(rest as ColumnConfigEntry);
    }, [column, onChange]);

    const isAdvancedDirty = column.sortable !== undefined || column.filterable !== undefined;

    const resetAdvanced = useCallback(() => {
        const { sortable: _s, filterable: _f, ...rest } = column;
        onChange(rest as ColumnConfigEntry);
    }, [column, onChange]);

    return (
        <Box
            sx={{
                height: '100%',
                overflow: 'auto',
                p: 2,
            }}
        >
            {/* Column path header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Chip
                    label={detectedType}
                    size="small"
                    sx={{
                        backgroundColor: TYPE_COLORS[detectedType] || TYPE_COLORS.string,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                    }}
                />
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontFamily: 'monospace',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                    title={column.path}
                >
                    {column.path}
                </Typography>
            </Box>

            <Stack spacing={1}>
                {/* ── Section: Basic ─────────────────────────────────────── */}
                <Accordion
                    expanded={expanded.basic}
                    onChange={() => handleAccordionChange('basic')}
                    disableGutters
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                mr: 1,
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 500 }}
                            >
                                {Generic.t('json_table_section_basic')}
                            </Typography>
                            <Tooltip title={Generic.t('json_table_section_reset')}>
                                <span>
                                    <IconButton
                                        size="small"
                                        disabled={!isBasicDirty}
                                        onClick={e => {
                                            e.stopPropagation();
                                            resetBasic();
                                        }}
                                        aria-label={Generic.t('json_table_section_reset')}
                                    >
                                        <RestartAltIcon fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <TextField
                                label={Generic.t('json_table_header_label')}
                                value={column.headerName}
                                onChange={e => onChange({ ...column, headerName: e.target.value })}
                                fullWidth
                                size="small"
                            />
                            <TextField
                                label={Generic.t('json_table_width')}
                                type="number"
                                value={column.width ?? ''}
                                onChange={e =>
                                    onChange({
                                        ...column,
                                        width: e.target.value ? parseInt(e.target.value, 10) : undefined,
                                    })
                                }
                                fullWidth
                                size="small"
                                placeholder={Generic.t('json_table_width_auto')}
                                slotProps={{ htmlInput: { min: 30 } }}
                            />
                            <FormControl
                                fullWidth
                                size="small"
                            >
                                <InputLabel>{Generic.t('json_table_align')}</InputLabel>
                                <Select
                                    label={Generic.t('json_table_align')}
                                    value={column.align || 'left'}
                                    onChange={e =>
                                        onChange({
                                            ...column,
                                            align: e.target.value as 'left' | 'center' | 'right',
                                        })
                                    }
                                >
                                    <MenuItem value="left">{Generic.t('json_table_align_left')}</MenuItem>
                                    <MenuItem value="center">{Generic.t('json_table_align_center')}</MenuItem>
                                    <MenuItem value="right">{Generic.t('json_table_align_right')}</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={column.visible}
                                        onChange={e => onChange({ ...column, visible: e.target.checked })}
                                    />
                                }
                                label={<Typography variant="body2">{Generic.t('json_table_visible')}</Typography>}
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                {/* ── Section: Formatting ────────────────────────────────── */}
                <Accordion
                    expanded={expanded.formatting}
                    onChange={() => handleAccordionChange('formatting')}
                    disableGutters
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                mr: 1,
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 500 }}
                            >
                                {Generic.t('json_table_section_formatting')}
                            </Typography>
                            <Tooltip title={Generic.t('json_table_section_reset')}>
                                <span>
                                    <IconButton
                                        size="small"
                                        disabled={!isFormattingDirty}
                                        onClick={e => {
                                            e.stopPropagation();
                                            resetFormatting();
                                        }}
                                        aria-label={Generic.t('json_table_section_reset')}
                                    >
                                        <RestartAltIcon fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            {/* Number formatting */}
                            {(detectedType === 'number' || column.format?.type === 'number') && (
                                <>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {Generic.t('json_table_number_format')}
                                    </Typography>
                                    <Box>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {Generic.t('json_table_number_decimals')}:{' '}
                                            {column.format?.numberDecimals ?? 2}
                                        </Typography>
                                        <Slider
                                            value={column.format?.numberDecimals ?? 2}
                                            onChange={(_e, val) =>
                                                updateFormat({ type: 'number', numberDecimals: val as number })
                                            }
                                            min={0}
                                            max={10}
                                            marks
                                            step={1}
                                            valueLabelDisplay="auto"
                                            size="small"
                                        />
                                    </Box>
                                    <TextField
                                        label={Generic.t('json_table_number_prefix')}
                                        value={column.format?.numberPrefix || ''}
                                        onChange={e => updateFormat({ type: 'number', numberPrefix: e.target.value })}
                                        size="small"
                                        placeholder="$, €, £"
                                    />
                                    <TextField
                                        label={Generic.t('json_table_number_suffix')}
                                        value={column.format?.numberSuffix || ''}
                                        onChange={e => updateFormat({ type: 'number', numberSuffix: e.target.value })}
                                        size="small"
                                        placeholder="%, kg, °C"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={column.format?.numberThousandsSeparator || false}
                                                onChange={e =>
                                                    updateFormat({
                                                        type: 'number',
                                                        numberThousandsSeparator: e.target.checked,
                                                    })
                                                }
                                                size="small"
                                            />
                                        }
                                        label={
                                            <Typography variant="body2">
                                                {Generic.t('json_table_number_thousands')}
                                            </Typography>
                                        }
                                    />
                                    {/* Number preview */}
                                    <Paper
                                        variant="outlined"
                                        sx={{ p: 1.5, bgcolor: 'action.hover' }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {Generic.t('json_table_preview')}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ mt: 0.5, fontFamily: 'monospace' }}
                                        >
                                            {sampleNumber} →{' '}
                                            {formatNumberValue(sampleNumber, {
                                                decimals: column.format?.numberDecimals,
                                                prefix: column.format?.numberPrefix,
                                                suffix: column.format?.numberSuffix,
                                                thousands: column.format?.numberThousandsSeparator,
                                            })}
                                        </Typography>
                                    </Paper>
                                </>
                            )}

                            {/* Date formatting */}
                            {(detectedType === 'date' || column.format?.type === 'date') && (
                                <>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {Generic.t('json_table_date_format')}
                                    </Typography>
                                    {discoveredColumn?.dateFormat && (
                                        <TextField
                                            label={Generic.t('json_table_date_input_format')}
                                            value={discoveredColumn.dateFormat}
                                            disabled
                                            size="small"
                                            helperText={Generic.t('json_table_date_detected_hint')}
                                        />
                                    )}
                                    <FormControl
                                        fullWidth
                                        size="small"
                                    >
                                        <InputLabel>{Generic.t('json_table_date_output_format')}</InputLabel>
                                        <Select
                                            label={Generic.t('json_table_date_output_format')}
                                            value={column.format?.dateFormat || 'yyyy-MM-dd'}
                                            onChange={e =>
                                                updateFormat({
                                                    type: 'date',
                                                    dateFormat: e.target.value,
                                                    dateInputFormat: discoveredColumn?.dateFormat,
                                                })
                                            }
                                        >
                                            {DATE_FORMAT_OPTIONS.map(opt => (
                                                <MenuItem
                                                    key={opt.value}
                                                    value={opt.value}
                                                >
                                                    {opt.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {/* Date preview */}
                                    <Paper
                                        variant="outlined"
                                        sx={{ p: 1.5, bgcolor: 'action.hover' }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {Generic.t('json_table_preview')}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ mt: 0.5, fontFamily: 'monospace' }}
                                        >
                                            {formatDateValue(new Date(), column.format?.dateFormat || 'yyyy-MM-dd')}
                                        </Typography>
                                    </Paper>
                                </>
                            )}

                            {/* Boolean formatting */}
                            {(detectedType === 'boolean' || column.format?.type === 'boolean') && (
                                <>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {Generic.t('json_table_boolean_format')}
                                    </Typography>
                                    <TextField
                                        label={Generic.t('json_table_boolean_true')}
                                        value={column.format?.booleanTrue || ''}
                                        onChange={e => updateFormat({ type: 'boolean', booleanTrue: e.target.value })}
                                        size="small"
                                        placeholder="Yes, On, ✓, Active"
                                    />
                                    <TextField
                                        label={Generic.t('json_table_boolean_false')}
                                        value={column.format?.booleanFalse || ''}
                                        onChange={e => updateFormat({ type: 'boolean', booleanFalse: e.target.value })}
                                        size="small"
                                        placeholder="No, Off, ✗, Inactive"
                                    />
                                    {/* Boolean preview */}
                                    <Paper
                                        variant="outlined"
                                        sx={{ p: 1.5, bgcolor: 'action.hover' }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {Generic.t('json_table_preview')}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            sx={{ mt: 0.5 }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{ fontFamily: 'monospace' }}
                                            >
                                                true →{' '}
                                                {formatBooleanValue(
                                                    true,
                                                    column.format?.booleanTrue,
                                                    column.format?.booleanFalse,
                                                )}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontFamily: 'monospace' }}
                                            >
                                                false →{' '}
                                                {formatBooleanValue(
                                                    false,
                                                    column.format?.booleanTrue,
                                                    column.format?.booleanFalse,
                                                )}
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </>
                            )}

                            {/* String formatting */}
                            {(detectedType === 'string' || column.format?.type === 'string') && (
                                <>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {Generic.t('json_table_string_format')}
                                    </Typography>

                                    {/* Case */}
                                    <FormControl
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel>{Generic.t('json_table_string_case')}</InputLabel>
                                        <Select
                                            label={Generic.t('json_table_string_case')}
                                            value={column.format?.stringCase ?? 'none'}
                                            onChange={e =>
                                                updateFormat({
                                                    type: 'string',
                                                    stringCase: e.target.value as 'none' | 'upper' | 'lower' | 'title',
                                                })
                                            }
                                        >
                                            <MenuItem value="none">{Generic.t('json_table_string_case_none')}</MenuItem>
                                            <MenuItem value="upper">
                                                {Generic.t('json_table_string_case_upper')}
                                            </MenuItem>
                                            <MenuItem value="lower">
                                                {Generic.t('json_table_string_case_lower')}
                                            </MenuItem>
                                            <MenuItem value="title">
                                                {Generic.t('json_table_string_case_title')}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>

                                    {/* Prefix / Suffix */}
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                    >
                                        <TextField
                                            label={Generic.t('json_table_string_prefix')}
                                            value={column.format?.stringPrefix ?? ''}
                                            onChange={e =>
                                                updateFormat({
                                                    type: 'string',
                                                    stringPrefix: e.target.value || undefined,
                                                })
                                            }
                                            size="small"
                                            fullWidth
                                        />
                                        <TextField
                                            label={Generic.t('json_table_string_suffix')}
                                            value={column.format?.stringSuffix ?? ''}
                                            onChange={e =>
                                                updateFormat({
                                                    type: 'string',
                                                    stringSuffix: e.target.value || undefined,
                                                })
                                            }
                                            size="small"
                                            fullWidth
                                        />
                                    </Stack>

                                    {/* Trim + Max length */}
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                size="small"
                                                checked={!!column.format?.stringTrim}
                                                onChange={e =>
                                                    updateFormat({ type: 'string', stringTrim: e.target.checked })
                                                }
                                            />
                                        }
                                        label={Generic.t('json_table_string_trim')}
                                    />
                                    <TextField
                                        label={Generic.t('json_table_string_max_length')}
                                        type="number"
                                        value={column.format?.stringMaxLength ?? ''}
                                        onChange={e =>
                                            updateFormat({
                                                type: 'string',
                                                stringMaxLength: e.target.value
                                                    ? parseInt(e.target.value, 10)
                                                    : undefined,
                                            })
                                        }
                                        size="small"
                                        fullWidth
                                        slotProps={{ htmlInput: { min: 1 } }}
                                    />

                                    {/* Regex */}
                                    <TextField
                                        label={Generic.t('json_table_string_regex')}
                                        value={column.format?.stringRegex ?? ''}
                                        onChange={e =>
                                            updateFormat({ type: 'string', stringRegex: e.target.value || undefined })
                                        }
                                        size="small"
                                        fullWidth
                                        placeholder="e.g. (\d+)"
                                    />
                                    {column.format?.stringRegex && (
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                        >
                                            <TextField
                                                label={Generic.t('json_table_string_regex_group')}
                                                type="number"
                                                value={column.format?.stringRegexGroup ?? 0}
                                                onChange={e =>
                                                    updateFormat({
                                                        type: 'string',
                                                        stringRegexGroup: parseInt(e.target.value, 10) || 0,
                                                    })
                                                }
                                                size="small"
                                                fullWidth
                                                slotProps={{ htmlInput: { min: 0 } }}
                                            />
                                            <TextField
                                                label={Generic.t('json_table_string_regex_flags')}
                                                value={column.format?.stringRegexFlags ?? ''}
                                                onChange={e =>
                                                    updateFormat({
                                                        type: 'string',
                                                        stringRegexFlags: e.target.value || undefined,
                                                    })
                                                }
                                                size="small"
                                                fullWidth
                                                placeholder="i, g, m …"
                                            />
                                        </Stack>
                                    )}

                                    {/* Static visual styling */}
                                    <Divider />
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                    >
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    size="small"
                                                    checked={column.format?.stringFontWeight === 'bold'}
                                                    onChange={e =>
                                                        updateFormat({
                                                            type: 'string',
                                                            stringFontWeight: e.target.checked ? 'bold' : 'normal',
                                                        })
                                                    }
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    fontWeight="bold"
                                                >
                                                    {Generic.t('json_table_string_font_weight')}
                                                </Typography>
                                            }
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    size="small"
                                                    checked={column.format?.stringFontStyle === 'italic'}
                                                    onChange={e =>
                                                        updateFormat({
                                                            type: 'string',
                                                            stringFontStyle: e.target.checked ? 'italic' : 'normal',
                                                        })
                                                    }
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="body2"
                                                    fontStyle="italic"
                                                >
                                                    {Generic.t('json_table_string_font_style')}
                                                </Typography>
                                            }
                                        />
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                    >
                                        <TextField
                                            label={Generic.t('json_table_string_font_size')}
                                            type="number"
                                            value={column.format?.stringFontSize ?? ''}
                                            onChange={e =>
                                                updateFormat({
                                                    type: 'string',
                                                    stringFontSize: e.target.value
                                                        ? parseInt(e.target.value, 10)
                                                        : undefined,
                                                })
                                            }
                                            size="small"
                                            sx={{ flex: 1 }}
                                            slotProps={{ htmlInput: { min: 8, max: 72 } }}
                                            placeholder="px"
                                        />
                                        <ColorPickerField
                                            label={Generic.t('json_table_string_text_color')}
                                            value={column.format?.stringTextColor ?? ''}
                                            onChange={v =>
                                                updateFormat({ type: 'string', stringTextColor: v || undefined })
                                            }
                                        />
                                    </Stack>

                                    {/* Preview */}
                                    <Paper
                                        variant="outlined"
                                        sx={{ p: 1.5, bgcolor: 'action.hover' }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            {Generic.t('json_table_preview')}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mt: 0.5,
                                                fontFamily: 'monospace',
                                                fontWeight: column.format?.stringFontWeight,
                                                fontStyle: column.format?.stringFontStyle,
                                                ...(column.format?.stringFontSize && {
                                                    fontSize: `${column.format.stringFontSize}px`,
                                                }),
                                                ...(column.format?.stringTextColor && {
                                                    color: column.format.stringTextColor,
                                                }),
                                            }}
                                        >
                                            {formatStringValue('Hello World', column.format ?? { type: 'string' })}
                                        </Typography>
                                    </Paper>
                                </>
                            )}

                            {/* No applicable format type */}
                            {detectedType !== 'number' &&
                                detectedType !== 'date' &&
                                detectedType !== 'boolean' &&
                                detectedType !== 'string' &&
                                !column.format && (
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {Generic.t('json_table_no_format_options')}
                                    </Typography>
                                )}
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                {/* ── Section: Conditional Styling ───────────────────────── */}
                <Accordion
                    expanded={expanded.styling}
                    onChange={() => handleAccordionChange('styling')}
                    disableGutters
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                mr: 1,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ fontWeight: 500 }}
                                >
                                    {Generic.t('json_table_section_styling')}
                                </Typography>
                                {(column.cellStyle?.length ?? 0) > 0 && (
                                    <Chip
                                        label={column.cellStyle!.length}
                                        size="small"
                                        color="primary"
                                        sx={{ height: 20, fontSize: '0.7rem' }}
                                    />
                                )}
                            </Box>
                            <Tooltip title={Generic.t('json_table_section_reset')}>
                                <span>
                                    <IconButton
                                        size="small"
                                        disabled={!isStylingDirty}
                                        onClick={e => {
                                            e.stopPropagation();
                                            resetStyling();
                                        }}
                                        aria-label={Generic.t('json_table_section_reset')}
                                    >
                                        <RestartAltIcon fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={1.5}>
                            {/* Evaluation mode toggle — shown when ≥1 rule */}
                            {(column.cellStyle?.length ?? 0) >= 1 && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ToggleButtonGroup
                                        value={column.cellStyleMode ?? 'first-match'}
                                        exclusive
                                        size="small"
                                        onChange={(_e, val: 'first-match' | 'all-match' | null) => {
                                            if (val) {
                                                onChange({ ...column, cellStyleMode: val });
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
                                        {(column.cellStyleMode ?? 'first-match') === 'first-match'
                                            ? Generic.t('json_table_cell_style_mode_hint_first')
                                            : Generic.t('json_table_cell_style_mode_hint_all')}
                                    </Typography>
                                </Box>
                            )}

                            {/* Empty state */}
                            {(column.cellStyle || []).length === 0 && (
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
                                    <Typography variant="caption">
                                        {Generic.t('json_table_no_style_rules_hint')}
                                    </Typography>
                                </Box>
                            )}

                            {/* Rule cards */}
                            {(column.cellStyle || []).map((rule, idx) => {
                                const ruleCount = (column.cellStyle || []).length;
                                // Pre-compute gradient results to avoid repeated calls in JSX
                                const bgGradient = rule.backgroundColor
                                    ? gradientColor(rule.backgroundColor)
                                    : undefined;
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
                                                columnType={detectedType}
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
                                                    onChange={c => updateStyleRule(idx, { backgroundColor: c })}
                                                />
                                                <ColorPickerField
                                                    label={Generic.t('json_table_text_color')}
                                                    value={rule.textColor || ''}
                                                    onChange={c => updateStyleRule(idx, { textColor: c })}
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
                                                    label={
                                                        <Typography variant="caption">
                                                            {Generic.t('json_table_bold')}
                                                        </Typography>
                                                    }
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
                                                    label={
                                                        <Typography variant="caption">
                                                            {Generic.t('json_table_italic')}
                                                        </Typography>
                                                    }
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

                            {(column.cellStyle?.length ?? 0) >= 2 && (
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ px: 0.5 }}
                                >
                                    {(column.cellStyleMode ?? 'first-match') === 'first-match'
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
                    </AccordionDetails>
                </Accordion>

                {/* ── Section: Advanced ──────────────────────────────────── */}
                <Accordion
                    expanded={expanded.advanced}
                    onChange={() => handleAccordionChange('advanced')}
                    disableGutters
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                mr: 1,
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 500 }}
                            >
                                {Generic.t('json_table_section_advanced')}
                            </Typography>
                            <Tooltip title={Generic.t('json_table_section_reset')}>
                                <span>
                                    <IconButton
                                        size="small"
                                        disabled={!isAdvancedDirty}
                                        onClick={e => {
                                            e.stopPropagation();
                                            resetAdvanced();
                                        }}
                                        aria-label={Generic.t('json_table_section_reset')}
                                    >
                                        <RestartAltIcon fontSize="small" />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            {/* Per-column feature overrides */}
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={column.sortable ?? true}
                                        onChange={e => onChange({ ...column, sortable: e.target.checked })}
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">{Generic.t('json_table_sortable')}</Typography>}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={column.filterable ?? false}
                                        onChange={e => onChange({ ...column, filterable: e.target.checked })}
                                        size="small"
                                    />
                                }
                                label={<Typography variant="body2">{Generic.t('json_table_filterable')}</Typography>}
                            />

                            {/* Column analysis metadata */}
                            {discoveredColumn && (
                                <Paper
                                    variant="outlined"
                                    sx={{ p: 1.5, bgcolor: 'action.hover' }}
                                >
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ fontWeight: 500, display: 'block', mb: 1 }}
                                    >
                                        {Generic.t('json_table_analysis_info')}
                                    </Typography>
                                    <Stack spacing={0.5}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {Generic.t('json_table_type_label')}
                                            </Typography>
                                            <Chip
                                                label={discoveredColumn.type}
                                                size="small"
                                                sx={{
                                                    backgroundColor: TYPE_COLORS[discoveredColumn.type],
                                                    color: '#fff',
                                                    height: 18,
                                                    fontSize: '0.65rem',
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {Generic.t('json_table_confidence')}
                                            </Typography>
                                            <Typography variant="caption">
                                                {Math.round(discoveredColumn.confidence * 100)}%
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {Generic.t('json_table_nulls')}
                                            </Typography>
                                            <Typography variant="caption">
                                                {discoveredColumn.nullCount}
                                                {totalValues > 0 &&
                                                    ` (${Math.round((discoveredColumn.nullCount / totalValues) * 100)}%)`}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {Generic.t('json_table_distinct')}
                                            </Typography>
                                            <Typography variant="caption">{discoveredColumn.distinctCount}</Typography>
                                        </Box>
                                        {discoveredColumn.min !== undefined && discoveredColumn.max !== undefined && (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {Generic.t('json_table_range')}
                                                </Typography>
                                                <Typography variant="caption">
                                                    {String(discoveredColumn.min)} – {String(discoveredColumn.max)}
                                                </Typography>
                                            </Box>
                                        )}
                                        {discoveredColumn.dateFormat && (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {Generic.t('json_table_date_input_format')}
                                                </Typography>
                                                <Typography variant="caption">{discoveredColumn.dateFormat}</Typography>
                                            </Box>
                                        )}
                                    </Stack>
                                </Paper>
                            )}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    );
}

export default ColumnDetailEditor;
