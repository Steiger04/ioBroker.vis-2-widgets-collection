/**
 * Modal dialog for the echarts chart configuration.
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal
 * @remarks
 * Opens as a MUI Dialog from the custom attribute button. Owns a working copy of the
 * {@link EditorState} (loaded from widget rxData on open), shows a live preview banner fed by
 * the data-wins merge, the Tabs body (Data | Series | Advanced), and a Reset / Cancel / Apply
 * footer. Wraps its content in a ThemeProvider so it renders correctly detached from the
 * widget tree (JsonTable modal precedent). Apply writes a single merged `onDataChange` patch.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider } from '@mui/material';

import Generic from '../Generic';
import EchartsEditorTabs from './editor/EchartsEditorTabs';
import { PreviewBanner } from './editor/fields';
import {
    DEFAULT_EDITOR_STATE,
    loadEditorState,
    saveEditorState,
    type EditorPatch,
    type EditorState,
} from './editor/editorState';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { VisTheme, WidgetData } from '@iobroker/types-vis-2';

interface EchartsConfigEditorModalProps {
    /** Whether the dialog is open. */
    open: boolean;
    /** Callback when the dialog should close. */
    onClose: () => void;
    /** Current widget data (read on open). */
    data: WidgetData;
    /** Callback invoked with the partial data patch on Apply. */
    onDataChange: (newData: WidgetData) => void;
    /** vis-2 theme for the modal's own ThemeProvider. */
    theme: VisTheme;
    /** Socket, drilled to the OID picker (SelectID dialog). */
    socket: LegacyConnection;
}

function EchartsConfigEditorModal({
    open,
    onClose,
    data,
    onDataChange,
    theme,
    socket,
}: EchartsConfigEditorModalProps): React.JSX.Element {
    const [state, setState] = useState<EditorState>(DEFAULT_EDITOR_STATE);
    /** Series count at load time, so stale `oidN` are cleared on save. */
    const loadedCountRef = useRef(0);

    // (Re)load the editor state from widget data each time the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        const loaded = loadEditorState(data as Record<string, unknown>);
        loadedCountRef.current = loaded.series.length;
        setState(loaded);
    }, [open, data]);

    const set = useCallback((patch: EditorPatch) => {
        setState(s => ({ ...s, ...patch }));
    }, []);
    const setUserText = useCallback((value: string) => {
        setState(s => ({ ...s, userText: value }));
    }, []);

    const handleReset = useCallback(() => {
        const loaded = loadEditorState(data as Record<string, unknown>);
        setState(loaded);
    }, [data]);

    const handleApply = useCallback(() => {
        onDataChange(saveEditorState(state, loadedCountRef.current) as WidgetData);
        onClose();
    }, [state, onDataChange, onClose]);

    const userText = state.userText;

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle>{Generic.t('echarts_editor_title')}</DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ mb: 2 }}>
                        <PreviewBanner
                            state={state}
                            userText={userText}
                        />
                    </Box>
                    <EchartsEditorTabs
                        state={state}
                        set={set}
                        userText={userText}
                        setUserText={setUserText}
                        pickerCtx={{ socket, theme, themeType: theme.palette.mode === 'dark' ? 'dark' : 'light' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset}>{Generic.t('echarts_editor_reset')}</Button>
                    <Button onClick={onClose}>{Generic.t('echarts_editor_cancel')}</Button>
                    <Button
                        variant="contained"
                        onClick={handleApply}
                    >
                        {Generic.t('echarts_editor_apply')}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default EchartsConfigEditorModal;
