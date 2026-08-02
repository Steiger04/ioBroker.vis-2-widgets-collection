/**
 * Rail+preview modal for the v3 echarts configurator (ADR-0010; layout per Q3, preview per Q6).
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal
 * @remarks
 * Left rail (~420px): pinned selectors + the collapsible section stack
 * ({@link EchartsEditorSections}). Right stage: a persistent **real-data** preview fed by
 * {@link ChartPreview} (the user's actual OIDs, live — not synthetic fixtures); its empty state is
 * clickable and steers the rail to the section that would fill it.
 *
 * The honesty contract is preserved: a working copy buffers edits, Apply is disabled until it
 * diverges (`hasChanges`, deep-equality), closing while dirty (backdrop click **or** Escape) is
 * intercepted with a warning, Reset reverts. First-open onboarding injects the skeleton series
 * card ahead of the snapshot, so Apply stays honestly disabled until the user really edits.
 * Wraps in a ThemeProvider for correct detached rendering.
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
import EchartsEditorSections, { type FocusSectionRequest } from './editor/EchartsEditorSections';
import { useJsonSeriesNames } from './editor/useJsonSeriesNames';
import { familyOf } from './optionBuilder';
import type { SectionKey } from './editor/validation';
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

/**
 * First-open onboarding (ADR-0010): an empty config gets one skeleton entry — a cartesian/pie
 * series card, or a radar indicator — so the user lands on a ready-to-fill form instead of a
 * blank stack. Returns `[state, injected]`. Gauge always has its single scalar series already.
 */
const withSkeleton = (loaded: EditorState): [EditorState, boolean] => {
    const family = familyOf(loaded.chartType);
    if (family === 'radar') {
        if (loaded.radar.indicators.length > 0) {
            return [loaded, false];
        }
        return [
            {
                ...loaded,
                radar: { ...loaded.radar, indicators: [{ name: 'Ind 1', max: 100, oid: '' }] },
            },
            true,
        ];
    }
    if (family === 'cartesian' || family === 'pie') {
        if (loaded.series.length > 0) {
            return [loaded, false];
        }
        return [{ ...loaded, series: [{ oid: '', name: 'Series 1', yAxisIndex: 0 }] }, true];
    }
    return [loaded, false];
};

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
    // Skeleton onboarding: autofocus the injected card's OID (first open only, not on Reset).
    const [autoFocusOid, setAutoFocusOid] = useState(false);
    // Preview placeholder → rail steering (expand the section + scroll it into view).
    const focusTokenRef = useRef(0);
    const [focusSection, setFocusSection] = useState<FocusSectionRequest | null>(null);

    // JSON mode (ADR-0011): resolve the payload series names so the Series section can render one
    // editable card per series (live — tracks the jsonOid value as it changes while the modal open).
    const jsonFamily = familyOf(state.chartType);
    const jsonEnabled = state.mode === 'json' && (jsonFamily === 'cartesian' || jsonFamily === 'pie');
    const jsonPreview = useJsonSeriesNames(state.jsonOid, jsonEnabled, socket);

    // (Re)load the editor state from widget data each time the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        // The skeleton goes in BEFORE the snapshot: it is part of the "loaded" baseline, so Apply
        // stays disabled until the user edits for real (ADR-0010 onboarding honesty).
        const [loaded, injected] = withSkeleton(loadEditorState(data as Record<string, unknown>));
        // The number of indexed `oidN` fields to clear on save. For radar the indicators (not the
        // single polygon) are the indexed OIDs, so use their count — otherwise it is the series count.
        // Includes the skeleton so a deleted skeleton also clears its (possibly stale) oid slot.
        loadedCountRef.current = loaded.chartType === 'radar' ? loaded.radar.indicators.length : loaded.series.length;
        loadedSnapshotRef.current = JSON.stringify(loaded);
        setState(loaded);
        setAutoFocusOid(injected);
        setFocusSection(null);
    }, [open, data]);

    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

    const set = useCallback((patch: EditorPatch) => {
        setState(s => ({ ...s, ...patch }));
    }, []);
    const setUserText = useCallback((value: string) => {
        setState(s => ({ ...s, userText: value }));
    }, []);

    const handleReset = useCallback(() => {
        // Reset restores the same baseline the snapshot captured — skeleton included.
        const [loaded] = withSkeleton(loadEditorState(data as Record<string, unknown>));
        setState(loaded);
    }, [data]);

    const handleApply = useCallback(() => {
        onDataChange(saveEditorState(state, loadedCountRef.current) as WidgetData);
        onClose();
    }, [state, onDataChange, onClose]);

    // Intercept close when dirty — backdrop click AND Escape both surface the warning, never
    // silently discard the working copy (the v2 Escape gap, fixed per ADR-0010).
    const handleClose = useCallback(
        (_event?: object, reason?: string) => {
            if ((reason === 'backdropClick' || reason === 'escapeKeyDown') && hasChanges) {
                setShowUnsavedWarning(true);
                return;
            }
            onClose();
        },
        [hasChanges, onClose],
    );

    const handlePlaceholderClick = useCallback((key: SectionKey) => {
        focusTokenRef.current += 1;
        setFocusSection({ key, token: focusTokenRef.current });
    }, []);

    const titleId = 'echarts-config-editor-title';

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            minHeight: 420,
                            height: { md: '72vh' },
                        }}
                    >
                        {/* Left rail: pinned selectors + section stack */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: 420 },
                                flexShrink: 0,
                                p: 2,
                                borderRight: { md: 1 },
                                borderColor: { md: 'divider' },
                                overflowY: 'auto',
                            }}
                        >
                            <EchartsEditorSections
                                state={state}
                                set={set}
                                userText={state.userText}
                                setUserText={setUserText}
                                pickerCtx={{
                                    socket,
                                    theme,
                                    themeType: theme.palette.mode === 'dark' ? 'dark' : 'light',
                                }}
                                focusSection={focusSection}
                                autoFocusFirstOid={autoFocusOid}
                                jsonSeriesNames={jsonPreview.names}
                                jsonError={jsonPreview.error}
                            />
                        </Box>
                        {/* Right stage: persistent real-data preview */}
                        <Box
                            sx={{
                                flex: 1,
                                minWidth: 0,
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
                                    onPlaceholderClick={handlePlaceholderClick}
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
