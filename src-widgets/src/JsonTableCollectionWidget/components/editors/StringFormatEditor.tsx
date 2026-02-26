/**
 * String format editor component for column formatting configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/StringFormatEditor
 * @remarks
 * Provides UI controls for string formatting options including case transformation,
 * prefix/suffix, trim, max length, regex extraction, and font styling with live preview.
 */

import {
    Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import type React from 'react';

import Generic from '../../../Generic';
import ColorPickerField from '../../../components/ColorPickerField';
import type { ColumnFormatConfig } from '../../types';
import { formatStringValue } from '../../utils/formatters';

/** Props for the StringFormatEditor component. */
export interface StringFormatEditorProps {
    /** Current format configuration */
    format: ColumnFormatConfig;
    /** Callback when format changes */
    onChange: (patch: Partial<ColumnFormatConfig>) => void;
}

/**
 * Renders string formatting controls with live preview.
 */
function StringFormatEditor({ format, onChange }: StringFormatEditorProps): React.JSX.Element {
    return (
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
                    value={format.stringCase ?? 'none'}
                    onChange={e =>
                        onChange({
                            type: 'string',
                            stringCase: e.target.value as 'none' | 'upper' | 'lower' | 'title',
                        })
                    }
                >
                    <MenuItem value="none">{Generic.t('json_table_string_case_none')}</MenuItem>
                    <MenuItem value="upper">{Generic.t('json_table_string_case_upper')}</MenuItem>
                    <MenuItem value="lower">{Generic.t('json_table_string_case_lower')}</MenuItem>
                    <MenuItem value="title">{Generic.t('json_table_string_case_title')}</MenuItem>
                </Select>
            </FormControl>

            {/* Prefix / Suffix */}
            <Stack
                direction="row"
                spacing={1}
            >
                <TextField
                    label={Generic.t('json_table_string_prefix')}
                    value={format.stringPrefix ?? ''}
                    onChange={e =>
                        onChange({
                            type: 'string',
                            stringPrefix: e.target.value || undefined,
                        })
                    }
                    size="small"
                    fullWidth
                />
                <TextField
                    label={Generic.t('json_table_string_suffix')}
                    value={format.stringSuffix ?? ''}
                    onChange={e =>
                        onChange({
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
                        checked={!!format.stringTrim}
                        onChange={e => onChange({ type: 'string', stringTrim: e.target.checked })}
                    />
                }
                label={Generic.t('json_table_string_trim')}
            />
            <TextField
                label={Generic.t('json_table_string_max_length')}
                type="number"
                value={format.stringMaxLength ?? ''}
                onChange={e =>
                    onChange({
                        type: 'string',
                        stringMaxLength: e.target.value ? parseInt(e.target.value, 10) : undefined,
                    })
                }
                size="small"
                fullWidth
                slotProps={{ htmlInput: { min: 1 } }}
            />

            {/* Regex */}
            <TextField
                label={Generic.t('json_table_string_regex')}
                value={format.stringRegex ?? ''}
                onChange={e => onChange({ type: 'string', stringRegex: e.target.value || undefined })}
                size="small"
                fullWidth
                placeholder="e.g. (\d+)"
            />
            {format.stringRegex && (
                <Stack
                    direction="row"
                    spacing={1}
                >
                    <TextField
                        label={Generic.t('json_table_string_regex_group')}
                        type="number"
                        value={format.stringRegexGroup ?? 0}
                        onChange={e =>
                            onChange({
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
                        value={format.stringRegexFlags ?? ''}
                        onChange={e =>
                            onChange({
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
                            checked={format.stringFontWeight === 'bold'}
                            onChange={e =>
                                onChange({
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
                            checked={format.stringFontStyle === 'italic'}
                            onChange={e =>
                                onChange({
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
                    value={format.stringFontSize ?? ''}
                    onChange={e =>
                        onChange({
                            type: 'string',
                            stringFontSize: e.target.value ? parseInt(e.target.value, 10) : undefined,
                        })
                    }
                    size="small"
                    sx={{ flex: 1 }}
                    slotProps={{ htmlInput: { min: 8, max: 72 } }}
                    placeholder="px"
                />
                <ColorPickerField
                    label={Generic.t('json_table_string_text_color')}
                    value={format.stringTextColor ?? ''}
                    onChange={v => onChange({ type: 'string', stringTextColor: v || undefined })}
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
                        fontWeight: format.stringFontWeight,
                        fontStyle: format.stringFontStyle,
                        ...(format.stringFontSize && {
                            fontSize: `${format.stringFontSize}px`,
                        }),
                        ...(format.stringTextColor && {
                            color: format.stringTextColor,
                        }),
                    }}
                >
                    {formatStringValue('Hello World', format ?? { type: 'string' })}
                </Typography>
            </Paper>
        </>
    );
}

export default StringFormatEditor;
