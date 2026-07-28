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
 *
 * Honesty contract (mirrors `JsonTableColumnEditorModal`): Apply is disabled until the working
 * copy diverges from the loaded snapshot (`hasChanges`, deep-equality); a backdrop click while
 * dirty is intercepted with a warning Snackbar instead of silently discarding; Reset reverts to
 * the loaded state and flips `hasChanges` back to false.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Snackbar,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

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
    /** Serialized snapshot of the loaded state — the deep-equality baseline for `hasChanges`. */
    const loadedSnapshotRef = useRef('');
    /** Whether the unsaved-changes warning Snackbar is shown (backdrop click while dirty). */
    const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);

    // (Re)load the editor state from widget data each time the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        const loaded = loadEditorState(data as Record<string, unknown>);
        loadedCountRef.current = loaded.series.length;
        loadedSnapshotRef.current = JSON.stringify(loaded);
        setState(loaded);
    }, [open, data]);

    // Deep-equality vs the loaded snapshot; a full revert flips this back to false.
    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

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

    // Intercept backdrop click when dirty — surface the warning, don't silently discard.
    // Explicit close (X / Cancel / Escape) follows user intent and closes, mirroring JsonTable.
    const handleClose = useCallback(
        (_event?: object, reason?: string) => {
            if (reason === 'backdropClick' && hasChanges) {
                setShowUnsavedWarning(true);
                return;
            }
            onClose();
        },
        [hasChanges, onClose],
    );

    const titleId = 'echarts-config-editor-title';

    const userText = state.userText;

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                aria-labelledby={titleId}
            >
                <DialogTitle
                    sx={{ py: 1.5, px: 2.5 }}
                    id={titleId}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6">{Generic.t('echarts_editor_title')}</Typography>
                        <IconButton
                            onClick={() => handleClose()}
                            size="small"
                            sx={{ color: 'text.secondary' }}
                            aria-label={Generic.t('echarts_editor_close')}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
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
                <DialogActions sx={{ px: 2.5, py: 1.5 }}>
                    <Button onClick={handleReset}>{Generic.t('echarts_editor_reset')}</Button>
                    <Button onClick={() => handleClose()}>{Generic.t('echarts_editor_cancel')}</Button>
                    <Button
                        variant="contained"
                        onClick={handleApply}
                        disabled={!hasChanges}
                    >
                        {Generic.t('echarts_editor_apply')}
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={showUnsavedWarning}
                autoHideDuration={3000}
                onClose={() => setShowUnsavedWarning(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="warning"
                    onClose={() => setShowUnsavedWarning(false)}
                >
                    {Generic.t('echarts_editor_unsaved_changes')}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}

export default EchartsConfigEditorModal;
