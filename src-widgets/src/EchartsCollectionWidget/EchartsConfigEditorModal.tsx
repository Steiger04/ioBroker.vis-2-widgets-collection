/**
 * Rail+preview modal for the v3 echarts configurator (ADR-0010; layout per Q3, preview per Q6;
 * resizable split + chrome per ADR-0019).
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal
 * @remarks
 * Left rail (user-resizable 320–720 px, persisted): pinned selectors + the collapsible section
 * stack ({@link EchartsEditorSections}). Right stage: a persistent **real-data** preview fed by
 * {@link ChartPreview} (the user's actual OIDs, live — not synthetic fixtures); its empty state is
 * clickable and steers the rail to the section that would fill it. The two are divided by the
 * Splitter ({@link useSplitPane}) — drag, arrow keys, double-click reset — whose hover-reveal grip
 * is the configurator's interaction signature.
 *
 * The honesty contract is preserved: a working copy buffers edits, Apply is disabled until it
 * diverges (`hasChanges`, deep-equality), closing while dirty (backdrop click **or** Escape) is
 * intercepted with a warning, Reset reverts — and the title bar says so (dirty dot) before the
 * user even tries. First-open onboarding is the empty-state CTA (ADR-0013 reversed the ADR-0010
 * skeleton). Wraps in a ThemeProvider for detached render.
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
import { ChartTypeGlyph } from './editor/controls';
import { useJsonSeriesNames } from './editor/useJsonSeriesNames';
import { useSplitPane } from './editor/useSplitPane';
import { axisLayout } from './editor/axisLayout';
import { normalizeSeries } from './editor/seriesIdentity';
import { withStableIds } from './editor/identity';
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

    // Self-heal stable ids: every keyed card list (axes/series/mark-lines/indicators) must carry an
    // `id` so React reconciles by identity, not array index (the wrong-card-unmounts bug). loadEditorState
    // normalises on open, BUT dev HMR can preserve stale pre-id state across a code reload without
    // re-running the loader — so backfill here too. Idempotent: once every item has an id this is a
    // pure read (no setState), so it is safe on every state change and cannot loop.
    useEffect(() => {
        if (
            state.yAxes.some(a => !a.id) ||
            state.series.some(s => !s.id) ||
            state.markLines.some(m => !m.id) ||
            state.radar.indicators.some(ind => !ind.id)
        ) {
            setState(s => ({
                ...s,
                yAxes: withStableIds(s.yAxes),
                series: normalizeSeries(s.series),
                markLines: withStableIds(s.markLines),
                radar: { ...s.radar, indicators: withStableIds(s.radar.indicators) },
            }));
        }
    }, [state]);

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
        const prevAxes = state.yAxes;
        const yAxes = names.map((name, i) => {
            const m = jsonSeriesStyle[name] ?? {};
            jsonSeriesStyle[name] = { ...m, yAxisIndex: i };
            // Preserve an existing axis config at this index (user edits — min/max/format/colour/
            // offset + the stable id) instead of discarding it on every re-derive; only spin up a fresh
            // auto-layout axis when a new payload series has no axis yet (i >= previous axis count).
            return prevAxes[i] ?? axisLayout(i);
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

    // Resizable rail/preview split (ADR-0019): pointer-drag + keyboard + double-click reset,
    // width persisted across sessions. Pure layout — the form grid reflows via CSS only.
    const { railWidth, containerRef, dragging, handleProps } = useSplitPane();

    // Preview-header meta: "{count} {countLabel} · {mode} · {renderer}" — a one-glance summary of
    // what the preview currently shows. Gauge/radar have no mode choice (always current value), so
    // the mode segment is omitted there.
    const previewMeta = useMemo(() => {
        const family = familyOf(state.chartType);
        const count =
            state.chartType === 'gauge'
                ? 1
                : state.chartType === 'radar'
                  ? state.radar.indicators.length
                  : state.mode === 'json'
                    ? visibleJsonNames.length
                    : state.series.length;
        const countLabel = Generic.t(
            state.chartType === 'gauge'
                ? 'echarts_sec_value'
                : state.chartType === 'radar'
                  ? 'echarts_sec_indicators'
                  : 'echarts_series',
        );
        const parts = [`${count} ${countLabel}`];
        if (family === 'cartesian' || family === 'pie') {
            parts.push(Generic.t(`echarts_mode_${state.mode}`));
        }
        parts.push(Generic.t(`echarts_renderer_${state.renderer}`));
        return parts.join(' · ');
    }, [
        state.chartType,
        state.mode,
        state.renderer,
        state.series.length,
        state.radar.indicators.length,
        visibleJsonNames.length,
    ]);

    const titleId = 'echarts-config-editor-title';

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                fullWidth
                aria-labelledby={titleId}
                slotProps={{ paper: { sx: { height: { md: '85vh' } } } }}
            >
                <DialogTitle
                    sx={{ py: 1.5, px: 2.5 }}
                    id={titleId}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
                            <ChartTypeGlyph chartType={state.chartType} />
                            <Typography
                                variant="h6"
                                noWrap
                            >
                                {Generic.t('echarts_editor_title')}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                noWrap
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                {Generic.t(`echarts_type_${state.chartType}`)}
                            </Typography>
                            {hasChanges && (
                                <Box
                                    component="span"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 0.75,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            width: 7,
                                            height: 7,
                                            borderRadius: '50%',
                                            bgcolor: 'warning.main',
                                        }}
                                    />
                                    <Typography
                                        variant="caption"
                                        color="warning.main"
                                        noWrap
                                    >
                                        {Generic.t('echarts_editor_unsaved')}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
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
                    sx={{ p: 0, display: 'flex', flexDirection: 'column' }}
                >
                    <Box
                        ref={containerRef}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            minHeight: 420,
                            flex: 1,
                            minWidth: 0,
                            overflow: { md: 'hidden' },
                        }}
                    >
                        {/* Left rail: pinned selectors + section stack */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: railWidth },
                                flexShrink: 0,
                                p: 2,
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
                        {/* Splitter (ADR-0019 signature element): 1 px hairline at rest; the dotted
                            pill grip fades in on hover/focus and turns primary while dragging. */}
                        <Box
                            {...handleProps}
                            aria-label={Generic.t('echarts_splitter_aria')}
                            title={Generic.t('echarts_splitter_hint')}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 15,
                                mx: '-7px',
                                flexShrink: 0,
                                position: 'relative',
                                zIndex: 2,
                                cursor: 'col-resize',
                                touchAction: 'none',
                                outline: 'none',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: '50%',
                                    width: 1,
                                    transform: 'translateX(-0.5px)',
                                    bgcolor: dragging ? 'primary.main' : 'divider',
                                    transition: 'background-color 120ms',
                                },
                                '&:hover::before, &:focus-visible::before': {
                                    bgcolor: 'primary.main',
                                },
                                '& .echarts-splitter-grip': {
                                    opacity: dragging ? 1 : 0,
                                    borderColor: dragging ? 'primary.main' : 'divider',
                                },
                                '&:hover .echarts-splitter-grip, &:focus-visible .echarts-splitter-grip': {
                                    opacity: 1,
                                },
                            }}
                        >
                            <Box
                                className="echarts-splitter-grip"
                                aria-hidden
                                sx={{
                                    width: 14,
                                    height: 34,
                                    borderRadius: 7,
                                    bgcolor: 'background.paper',
                                    border: 1,
                                    borderColor: 'divider',
                                    boxShadow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '3px',
                                    transition: 'opacity 120ms, border-color 120ms',
                                    '& span': {
                                        width: 3,
                                        height: 3,
                                        borderRadius: '50%',
                                        bgcolor: dragging ? 'primary.main' : 'text.secondary',
                                    },
                                }}
                            >
                                <span />
                                <span />
                                <span />
                            </Box>
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline',
                                    gap: 2,
                                    mb: 1,
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    noWrap
                                    sx={{ flexShrink: 0 }}
                                >
                                    {Generic.t('echarts_editor_preview')}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    noWrap
                                    title={previewMeta}
                                    sx={{ minWidth: 0 }}
                                >
                                    {previewMeta}
                                </Typography>
                            </Box>
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
                <DialogActions sx={{ px: 2.5, py: 1.5, justifyContent: 'space-between' }}>
                    <Button
                        onClick={handleReset}
                        color="inherit"
                        sx={{ color: 'text.secondary' }}
                    >
                        {Generic.t('echarts_editor_reset')}
                    </Button>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button onClick={() => handleClose()}>{Generic.t('echarts_editor_cancel')}</Button>
                        <Button
                            variant="contained"
                            onClick={handleApply}
                            disabled={!hasChanges}
                        >
                            {Generic.t('echarts_editor_apply')}
                        </Button>
                    </Box>
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
