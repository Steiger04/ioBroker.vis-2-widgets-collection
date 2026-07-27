/**
 * Custom attribute trigger for the echarts chart configuration modal.
 *
 * @module EchartsCollectionWidget/EchartsConfigEditor
 * @remarks
 * Registered as a `type: 'custom'` field in the vis-2 property editor. Renders a button that
 * opens the chart configuration modal dialog (Tabs body: Data | Series | Advanced).
 *
 * Signature matches the vis-2 custom component contract:
 * `(field, data, onDataChange, props) => JSX.Element`
 */
import { useState } from 'react';
import type React from 'react';
import { Box, Button } from '@mui/material';
import { Tune as TuneIcon } from '@mui/icons-material';

import Generic from '../Generic';
import EchartsConfigEditorModal from './EchartsConfigEditorModal';
import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    VisTheme,
    WidgetData,
} from '@iobroker/types-vis-2';

function EchartsConfigEditor(
    _field: RxWidgetInfoAttributesField,
    data: WidgetData,
    onDataChange: (newData: WidgetData) => void,
    props: RxWidgetInfoCustomComponentProperties,
): React.JSX.Element {
    const [open, setOpen] = useState(false);
    const theme: VisTheme = props.context.theme;

    return (
        <Box sx={{ mt: 1, width: '100%' }}>
            <Button
                variant="outlined"
                startIcon={<TuneIcon />}
                onClick={() => setOpen(true)}
                fullWidth
                sx={{ textTransform: 'none' }}
                aria-label={Generic.t('echarts_editor_edit_config')}
                aria-haspopup="dialog"
            >
                {Generic.t('echarts_editor_edit_config')}
            </Button>

            <EchartsConfigEditorModal
                open={open}
                onClose={() => setOpen(false)}
                data={data}
                onDataChange={onDataChange}
                theme={theme}
                socket={props.context.socket}
            />
        </Box>
    );
}

export default EchartsConfigEditor;
