/**
 * Date format editor component for column formatting configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/DateFormatEditor
 * @remarks
 * Provides UI controls for date formatting options including output format
 * selection with live preview and detected input format display.
 */

import { FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import type React from 'react';

import Generic from '../../../Generic';
import type { ColumnFormatConfig } from '../../types';
import { formatDateValue, DATE_FORMAT_OPTIONS } from '../../utils/formatters';
import type { DateFormatId } from '../../utils/formatters';

/** Props for the DateFormatEditor component. */
export interface DateFormatEditorProps {
    /** Current format configuration */
    format: ColumnFormatConfig;
    /** Detected input format from analysis */
    detectedFormat?: DateFormatId;
    /** Callback when format changes */
    onChange: (patch: Partial<ColumnFormatConfig>) => void;
}

/**
 * Renders date formatting controls with live preview.
 */
function DateFormatEditor({ format, detectedFormat, onChange }: DateFormatEditorProps): React.JSX.Element {
    return (
        <>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
            >
                {Generic.t('json_table_date_format')}
            </Typography>
            {detectedFormat && (
                <TextField
                    label={Generic.t('json_table_date_input_format')}
                    value={detectedFormat}
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
                    value={format.dateFormat || 'yyyy-MM-dd'}
                    onChange={e =>
                        onChange({
                            type: 'date',
                            dateFormat: e.target.value,
                            dateInputFormat: detectedFormat,
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
                    {formatDateValue(new Date(), format.dateFormat || 'yyyy-MM-dd')}
                </Typography>
            </Paper>
        </>
    );
}

export default DateFormatEditor;
