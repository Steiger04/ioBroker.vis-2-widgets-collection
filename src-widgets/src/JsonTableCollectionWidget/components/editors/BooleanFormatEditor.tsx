/**
 * Boolean format editor component for column formatting configuration.
 *
 * @module JsonTableCollectionWidget/components/editors/BooleanFormatEditor
 * @remarks
 * Provides UI controls for boolean formatting options including custom
 * labels for true/false values with live preview.
 */

import { Paper, Stack, TextField, Typography } from '@mui/material';
import type React from 'react';

import Generic from '../../../Generic';
import type { ColumnFormatConfig } from '../../types';
import { formatBooleanValue } from '../../utils/formatters';

/** Props for the BooleanFormatEditor component. */
export interface BooleanFormatEditorProps {
    /** Current format configuration */
    format: ColumnFormatConfig;
    /** Callback when format changes */
    onChange: (patch: Partial<ColumnFormatConfig>) => void;
}

/**
 * Renders boolean formatting controls with live preview.
 */
function BooleanFormatEditor({ format, onChange }: BooleanFormatEditorProps): React.JSX.Element {
    return (
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
                value={format.booleanTrue || ''}
                onChange={e => onChange({ type: 'boolean', booleanTrue: e.target.value })}
                size="small"
                placeholder="Yes, On, ✓, Active"
            />
            <TextField
                label={Generic.t('json_table_boolean_false')}
                value={format.booleanFalse || ''}
                onChange={e => onChange({ type: 'boolean', booleanFalse: e.target.value })}
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
                        true → {formatBooleanValue(true, format.booleanTrue, format.booleanFalse)}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ fontFamily: 'monospace' }}
                    >
                        false → {formatBooleanValue(false, format.booleanTrue, format.booleanFalse)}
                    </Typography>
                </Stack>
            </Paper>
        </>
    );
}

export default BooleanFormatEditor;
