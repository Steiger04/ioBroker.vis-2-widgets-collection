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
    Chip,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Switch,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, RestartAlt as RestartAltIcon } from '@mui/icons-material';
import { useCallback, useMemo, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { TYPE_COLORS, type ColumnConfigEntry, type ColumnStyleRule, type ColumnFormatConfig } from '../types';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';

// Sub-editor imports
import NumberFormatEditor from './editors/NumberFormatEditor';
import DateFormatEditor from './editors/DateFormatEditor';
import BooleanFormatEditor from './editors/BooleanFormatEditor';
import StringFormatEditor from './editors/StringFormatEditor';
import ConditionalStyleEditor from './editors/ConditionalStyleEditor';

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

    // ── Format update helper ──────────────────────────────────────

    /**
     * Update format config helper.
     * When the format `type` changes, clears the previous type's properties to avoid
     * stale config (e.g. switching date→number should not retain dateFormat).
     */
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

    // ── Style change handlers ─────────────────────────────────────

    const handleStyleChange = useCallback(
        (cellStyle: ColumnStyleRule[]) => {
            onChange({ ...column, cellStyle });
        },
        [column, onChange],
    );

    const handleStyleModeChange = useCallback(
        (cellStyleMode: 'first-match' | 'all-match') => {
            onChange({ ...column, cellStyleMode });
        },
        [column, onChange],
    );

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
                            {/* Format Type Selector */}
                            <FormControl
                                fullWidth
                                size="small"
                            >
                                <InputLabel>{Generic.t('json_table_format_type')}</InputLabel>
                                <Select
                                    value={column.format?.type || 'auto'}
                                    label={Generic.t('json_table_format_type')}
                                    onChange={e => {
                                        const selectedType = e.target.value;
                                        if (selectedType === 'auto') {
                                            // Clear format completely to use auto-detection
                                            onChange({
                                                ...column,
                                                format: undefined,
                                            });
                                        } else {
                                            updateFormat({ type: selectedType as ColumnFormatConfig['type'] });
                                        }
                                    }}
                                >
                                    <MenuItem value="auto">
                                        {Generic.t('json_table_format_type_auto')}
                                        {detectedType && ` (${detectedType})`}
                                    </MenuItem>
                                    <MenuItem value="string">{Generic.t('json_table_format_type_string')}</MenuItem>
                                    <MenuItem value="number">{Generic.t('json_table_format_type_number')}</MenuItem>
                                    <MenuItem value="date">{Generic.t('json_table_format_type_date')}</MenuItem>
                                    <MenuItem value="boolean">{Generic.t('json_table_format_type_boolean')}</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Number formatting */}
                            {(detectedType === 'number' || column.format?.type === 'number') && (
                                <NumberFormatEditor
                                    format={column.format ?? { type: 'number' }}
                                    onChange={updateFormat}
                                    discoveredColumn={discoveredColumn}
                                />
                            )}

                            {/* Date formatting */}
                            {(detectedType === 'date' || column.format?.type === 'date') && (
                                <DateFormatEditor
                                    format={column.format ?? { type: 'date' }}
                                    detectedFormat={discoveredColumn?.dateFormat}
                                    onChange={updateFormat}
                                />
                            )}

                            {/* Boolean formatting */}
                            {(detectedType === 'boolean' || column.format?.type === 'boolean') && (
                                <BooleanFormatEditor
                                    format={column.format ?? { type: 'boolean' }}
                                    onChange={updateFormat}
                                />
                            )}

                            {/* String formatting */}
                            {(detectedType === 'string' || column.format?.type === 'string') && (
                                <StringFormatEditor
                                    format={column.format ?? { type: 'string' }}
                                    onChange={updateFormat}
                                />
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
                        <ConditionalStyleEditor
                            cellStyle={column.cellStyle || []}
                            cellStyleMode={column.cellStyleMode ?? 'first-match'}
                            columnType={detectedType}
                            onStyleChange={handleStyleChange}
                            onModeChange={handleStyleModeChange}
                        />
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
