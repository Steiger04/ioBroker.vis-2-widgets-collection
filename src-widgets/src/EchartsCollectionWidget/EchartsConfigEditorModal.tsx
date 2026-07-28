/**
 * Split-layout modal dialog for the v2 echarts configurator (Q3 split layout, Q6 real preview).
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal
 * @remarks
 * Left column: the config tabs (Data | Series | Darstellung | Axes&Zoom | Advanced). Right column:
 * a persistent **real-data** preview fed by {@link ChartPreview} (the user's actual OIDs, live —
 * not synthetic fixtures). The honesty contract is preserved: a working copy buffers edits, Apply
 * is disabled until it diverges (`hasChanges`, deep-equality), a backdrop click while dirty is
 * intercepted with a warning, Reset reverts. Wraps in a ThemeProvider for correct detached rendering.
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
import ChartPreview from './editor/ChartPreview';
import EchartsEditorTabs from './editor/EchartsEditorTabs';
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
    open: boolean;
    onClose: () => void;
    data: WidgetData;
    onDataChange: (newData: WidgetData) => void;
    theme: VisTheme;
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
    const loadedCountRef = useRef(0);
    const loadedSnapshotRef = useRef('');
    const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);

    // (Re)load the editor state from widget data each time the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        const loaded = loadEditorState(data as Record<string, unknown>);
        // The number of indexed `oidN` fields to clear on save. For radar the indicators (not the
        // single polygon) are the indexed OIDs, so use their count — otherwise it is the series count.
        loadedCountRef.current = loaded.chartType === 'radar' ? loaded.radar.indicators.length : loaded.series.length;
        loadedSnapshotRef.current = JSON.stringify(loaded);
        setState(loaded);
    }, [open, data]);

    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

    const set = useCallback((patch: EditorPatch) => {
        setState(s => ({ ...s, ...patch }));
    }, []);
    const setUserText = useCallback((value: string) => {
        setState(s => ({ ...s, userText: value }));
    }, []);

    const handleReset = useCallback(() => {
        setState(loadEditorState(data as Record<string, unknown>));
    }, [data]);

    const handleApply = useCallback(() => {
        onDataChange(saveEditorState(state, loadedCountRef.current) as WidgetData);
        onClose();
    }, [state, onDataChange, onClose]);

    // Intercept backdrop click when dirty — surface the warning, don't silently discard.
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
                <DialogContent
                    dividers
                    sx={{ p: 0 }}
                >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: 420 }}>
                        {/* Left: config tabs */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                p: 2,
                                borderRight: { md: 1 },
                                borderColor: { md: 'divider' },
                                overflowY: 'auto',
                            }}
                        >
                            <EchartsEditorTabs
                                state={state}
                                set={set}
                                userText={state.userText}
                                setUserText={setUserText}
                                pickerCtx={{
                                    socket,
                                    theme,
                                    themeType: theme.palette.mode === 'dark' ? 'dark' : 'light',
                                }}
                            />
                        </Box>
                        {/* Right: persistent real-data preview */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: 380 },
                                flexShrink: 0,
                                p: 2,
                                bgcolor: 'action.hover',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ mb: 1 }}
                            >
                                {Generic.t('echarts_editor_preview')}
                            </Typography>
                            <Box sx={{ flex: 1, minHeight: 320 }}>
                                <ChartPreview
                                    state={state}
                                    socket={socket}
                                    theme={theme}
                                />
                            </Box>
                        </Box>
                    </Box>
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
