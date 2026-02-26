/**
 * Number format editor component for column formatting configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/NumberFormatEditor
 * @remarks
 * Provides UI controls for number formatting options including decimals,
 * prefix, suffix, and thousands separator with live preview.
 */

import { Box, FormControlLabel, Paper, Slider, Switch, TextField, Typography } from '@mui/material';
import type React from 'react';
import { useMemo } from 'react';

import Generic from '../../../Generic';
import type { ColumnFormatConfig } from '../../types';
import { formatNumberValue } from '../../utils/formatters';
import type { JsonTableColumn } from '../../../hooks/useJsonTableAnalysis/types';

/** Props for the NumberFormatEditor component. */
export interface NumberFormatEditorProps {
    /** Current format configuration */
    format: ColumnFormatConfig;
    /** Callback when format changes */
    onChange: (patch: Partial<ColumnFormatConfig>) => void;
    /** Optional column metadata for sample value generation */
    discoveredColumn?: JsonTableColumn;
}

/**
 * Renders number formatting controls with live preview.
 */
function NumberFormatEditor({ format, onChange, discoveredColumn }: NumberFormatEditorProps): React.JSX.Element {
    // Sample number value for preview (use discovered min/max if available)
    const sampleNumber = useMemo(() => {
        if (discoveredColumn?.min !== undefined && typeof discoveredColumn.min === 'number') {
            const maxVal = typeof discoveredColumn.max === 'number' ? discoveredColumn.max : 0;
            return discoveredColumn.min + (maxVal - discoveredColumn.min) * 0.75;
        }
        return 1234.567;
    }, [discoveredColumn]);

    return (
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
                    {Generic.t('json_table_number_decimals')}: {format.numberDecimals ?? 2}
                </Typography>
                <Slider
                    value={format.numberDecimals ?? 2}
                    onChange={(_e, val) => onChange({ type: 'number', numberDecimals: val as number })}
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
                value={format.numberPrefix || ''}
                onChange={e => onChange({ type: 'number', numberPrefix: e.target.value })}
                size="small"
                placeholder="$, €, £"
            />
            <TextField
                label={Generic.t('json_table_number_suffix')}
                value={format.numberSuffix || ''}
                onChange={e => onChange({ type: 'number', numberSuffix: e.target.value })}
                size="small"
                placeholder="%, kg, °C"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={format.numberThousandsSeparator || false}
                        onChange={e =>
                            onChange({
                                type: 'number',
                                numberThousandsSeparator: e.target.checked,
                            })
                        }
                        size="small"
                    />
                }
                label={<Typography variant="body2">{Generic.t('json_table_number_thousands')}</Typography>}
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
                        decimals: format.numberDecimals,
                        prefix: format.numberPrefix,
                        suffix: format.numberSuffix,
                        thousands: format.numberThousandsSeparator,
                    })}
                </Typography>
            </Paper>
        </>
    );
}

export default NumberFormatEditor;
