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
 * intercepted with a warning, Reset reverts. First-open onboarding is the empty-state CTA
 * (ADR-0013 reversed the ADR-0010 skeleton): an empty config lands on the CTA, Apply stays
 * honestly disabled until the user adds a real series. Wraps in a ThemeProvider for detached render.
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
import { axisLayout } from './editor/axisLayout';
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
        // First-open onboarding is the empty-state CTA, not an injected skeleton (ADR-0013 reversed
        // the ADR-0010 skeleton): an empty config lands on the CTA, Apply stays disabled until the
        // user adds a real series/indicator.
        const loaded = loadEditorState(data as Record<string, unknown>);
        // The number of indexed `oidN` fields to clear on save. For radar the indicators (not the
        // single polygon) are the indexed OIDs, so use their count — otherwise it is the series count.
        loadedCountRef.current = loaded.chartType === 'radar' ? loaded.radar.indicators.length : loaded.series.length;
        loadedSnapshotRef.current = JSON.stringify(loaded);
        setState(loaded);
        setFocusSection(null);
    }, [open, data]);

    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

    const set = useCallback((patch: EditorPatch) => {
        setState(s => ({ ...s, ...patch }));
    }, []);
    const setUserText = useCallback((value: string) => {
        setState(s => ({ ...s, userText: value }));
    }, []);

    // JSON-mode 1:1 auto-axis (ADR-0018): for each cartesian payload series, ensure an axis exists and
    // bind the series to it (one axis per series, alternating side + 80 px stagger). Colour + name are
    // NOT written — each axis inherits both from its bound series at runtime. Bestehende Achsen-Konfigs
    // werden dabei nicht berücksichtigt (nur neue Widgets).
    // Only the visible JSON series drive the 1:1 auto-axis effect — a hidden series (jsonHidden
    // deny-list, Problem-2) must not keep its axis. jsonNamesKey reflects the visible set so hiding
    // a series re-runs the effect and drops the axis.
    const visibleJsonNames = jsonPreview.names.filter(n => !state.jsonHidden.includes(n));
    const jsonNamesKey = visibleJsonNames.join('\n');
    useEffect(() => {
        if (
            state.mode !== 'json' ||
            (state.chartType !== 'line' && state.chartType !== 'bar') ||
            visibleJsonNames.length === 0
        ) {
            return;
        }
        const names = visibleJsonNames;
        const jsonSeriesStyle = { ...state.jsonSeriesStyle };
        const yAxes = names.map((name, i) => {
            const m = jsonSeriesStyle[name] ?? {};
            jsonSeriesStyle[name] = { ...m, yAxisIndex: i };
            return axisLayout(i);
        });
        // Clear yAxisIndex on hidden payload series so axis colour/name inheritance (which looks up
        // the overlay by yAxisIndex) never matches a stale hidden entry after a hide (Problem-2).
        for (const key of Object.keys(jsonSeriesStyle)) {
            if (!names.includes(key) && jsonSeriesStyle[key].yAxisIndex !== undefined) {
                jsonSeriesStyle[key] = { ...jsonSeriesStyle[key], yAxisIndex: undefined };
            }
        }
        set({ yAxes, jsonSeriesStyle });
        // Keyed on the names content (not the array ref) + mode/type → re-syncs only on real change,
        // so manual axis edits (state.yAxes) are preserved while names/mode/type are stable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jsonNamesKey, state.mode, state.chartType]);

    const handleReset = useCallback(() => {
        // Reset restores the loaded baseline (no skeleton injection, ADR-0013).
        setState(loadEditorState(data as Record<string, unknown>));
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
