/**
 * Custom attribute trigger for the JsonTable column configuration modal.
 *
 * @module JsonTableCollectionWidget/JsonTableColumnEditor
 * @remarks
 * Registered as a `type: 'custom'` field in the vis-2 property editor.
 * Renders a button that opens the full column configuration modal dialog.
 * The modal provides a split-panel editor with column list, formatting,
 * conditional styling, and analysis metadata.
 *
 * Signature matches the vis-2 custom component contract:
 * `(field, data, onDataChange, props) => JSX.Element`
 */

import { Box, Button, Typography } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { useCallback, useMemo, useState } from 'react';
import type React from 'react';

import Generic from '../Generic';
import JsonTableColumnEditorModal from './components/JsonTableColumnEditorModal';
import { parseColumnConfig, type ColumnConfigEntry } from './types';

import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    VisTheme,
    WidgetData,
} from '@iobroker/types-vis-2';

/**
 * Custom editor component for configuring JSON table columns.
 *
 * Renders a compact button that opens the column configuration modal.
 * Displays a summary of visible/total columns underneath the button.
 *
 * @param field - vis-2 field definition (expects `name` property).
 * @param data - Current widget data map.
 * @param onDataChange - Callback invoked with partial data updates.
 * @param props - vis-2 custom component properties (socket, theme, etc.).
 * @returns Trigger button with summary and modal dialog.
 */
function JsonTableColumnEditor(
    field: RxWidgetInfoAttributesField,
    data: WidgetData,
    onDataChange: (newData: WidgetData) => void,
    props: RxWidgetInfoCustomComponentProperties,
): React.JSX.Element {
    const fieldName = field.name || 'columnConfig';
    const theme: VisTheme = props.context.theme;

    const [modalOpen, setModalOpen] = useState(false);

    // Parse current column config from widget data
    const columns = useMemo(() => parseColumnConfig(data[fieldName] as string), [data, fieldName]);

    // Summary counts
    const visibleCount = columns.filter(c => c.visible).length;
    const totalCount = columns.length;
    const hasFormatting = columns.some(c => c.format);
    const hasStyling = columns.some(c => c.cellStyle && c.cellStyle.length > 0);

    // Persist updated columns to widget data
    const handleSave = useCallback(
        (updatedColumns: ColumnConfigEntry[]) => {
            onDataChange({ [fieldName]: JSON.stringify(updatedColumns) });
        },
        [fieldName, onDataChange],
    );

    return (
        <Box sx={{ mt: 1, width: '100%' }}>
            {/* Open modal button */}
            <Button
                variant="outlined"
                startIcon={<SettingsIcon />}
                onClick={() => setModalOpen(true)}
                fullWidth
                sx={{ textTransform: 'none' }}
            >
                {Generic.t('json_table_configure_columns')}
            </Button>

            {/* Summary below button */}
            {totalCount > 0 && (
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 0.5, display: 'block' }}
                >
                    {visibleCount} / {totalCount} {Generic.t('json_table_columns_visible')}
                    {hasFormatting && ` · ${Generic.t('json_table_has_formatting')}`}
                    {hasStyling && ` · ${Generic.t('json_table_has_styling')}`}
                </Typography>
            )}

            {/* Column editor modal — provides its own ThemeProvider */}
            <JsonTableColumnEditorModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                columns={columns}
                onSave={handleSave}
                theme={theme}
                data={data}
                socket={props.context.socket}
            />
        </Box>
    );
}

export default JsonTableColumnEditor;
