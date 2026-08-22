/**
 * Rail+preview modal for the v3 echarts configurator (ADR-0010; layout per Q3, preview per Q6;
 * resizable split + chrome per ADR-0019; footer contract + editor history per ADR-0038).
 *
 * @module EchartsCollectionWidget/EchartsConfigEditorModal
 * @remarks
 * Left rail (user-resizable 320–720 px, persisted): pinned selectors + the collapsible section
 * stack ({@link EchartsEditorSections}) on the shared SectionCard shell. Right stage: a persistent
 * **real-data** preview fed by {@link ChartPreview} (the user's actual OIDs, live — not synthetic
 * fixtures); its empty state is clickable and steers the rail to the section that would fill it.
 * The two are divided by the Splitter ({@link useSplitPane}) — drag, arrow keys, double-click
 * reset — a bare hairline that colours primary on hover/focus/drag (the hover-reveal grip pill was
 * removed on user feedback, ADR-0019 addendum).
 *
 * The honesty contract (ADR-0038): a working copy buffers edits in an editor history
 * ({@link useEditorHistory} behind {@link useEchartsEditorLifecycle}, which owns the whole
 * state machine per ADR-0048 — undo/redo in the header plus Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y),
 * Apply is disabled until it diverges (`hasChanges`, deep-equality), and closing while dirty
 * (backdrop click, Escape, Cancel or the X — every path) is intercepted by a blocking
 * confirm dialog. The footer is the shared configurator contract: Zurücksetzen (revert the
 * working copy to the loaded state, one undoable step) + problems counter on the left,
 * Cancel / Apply on the right (ADR-0038 partially reverses the ADR-0031 Reset removal — with
 * an editor history the reset is a one-step revert-to-baseline that keeps section expansion,
 * no longer a near-duplicate of Cancel). First-open onboarding is the empty-state CTA
 * (ADR-0013 reversed the ADR-0010 skeleton). Wraps in a ThemeProvider for detached render.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ThemeProvider,
    Tooltip,
    Typography,
} from '@mui/material';
import { Close as CloseIcon, CloseFullscreen as RestoreIcon, OpenInFull as MaximizeIcon } from '@mui/icons-material';

import Generic from '../Generic';
import ConfirmDiscardDialog from '../components/ConfirmDiscardDialog';
import EditorHistoryButtons from '../components/EditorHistoryButtons';
import ChartPreview from './editor/ChartPreview';
import EchartsEditorSections, { sectionInventory, type FocusSectionRequest } from './editor/EchartsEditorSections';
import { ChartTypeGlyph } from './editor/controls';
import { useJsonSeriesNames } from './editor/useJsonSeriesNames';
import { useSplitPane } from './editor/useSplitPane';
import { useEchartsEditorLifecycle, useJsonAxisReconcile } from './editor/useEchartsEditorLifecycle';
import { familyOf } from './optionBuilder';
import { validateEditor, type SectionKey } from './editor/validation';
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
    const [confirmDiscardOpen, setConfirmDiscardOpen] = useState(false);
    // Window-style maximize toggle (fullScreen, edge-to-edge). Session-only by user decision:
    // the component instance survives close/open, so the flag resets on every fresh load (the
    // loadToken effect below) — every fresh open starts at normal size.
    const [maximized, setMaximized] = useState(false);
    // Preview placeholder → rail steering (expand the section + scroll it into view).
    const focusTokenRef = useRef(0);
    const [focusSection, setFocusSection] = useState<FocusSectionRequest | null>(null);

    // The state machine (ADR-0048): working copy + history, load/rebase, the guard effects,
    // apply/reset, hasChanges and the undo/redo keyboard binding — all owned by the lifecycle
    // hook. This modal is composition + chrome only.
    const { state, set, apply, reset, hasChanges, loadToken, undo, redo, canUndo, canRedo } = useEchartsEditorLifecycle(
        open,
        data,
    );

    // JSON mode (ADR-0011): resolve the payload series names so the Series section can render one
    // editable card per series (live — tracks the jsonOid value as it changes while the modal open).
    // The names are the lifecycle's INJECTED input (the reconcile seam) — resolved here so the
    // lifecycle hook itself stays IO-free.
    const jsonFamily = familyOf(state.chartType);
    const jsonEnabled = state.mode === 'json' && (jsonFamily === 'cartesian' || jsonFamily === 'pie');
    const jsonPreview = useJsonSeriesNames(state.jsonOid, jsonEnabled, socket);
    // JSON-mode axis reconcile (ADR-0026/0048): the lifecycle sibling consumes the names; the
    // policy + firing condition live in the lifecycle module.
    useJsonAxisReconcile(state, jsonPreview.names, set);

    // A fresh load resets the session chrome (ADR-0048): the lifecycle signals via `loadToken`,
    // the chrome (focus steering + maximize) belongs to this modal.
    useEffect(() => {
        setFocusSection(null);
        setMaximized(false);
    }, [loadToken]);

    const visibleJsonNames = jsonPreview.names.filter(n => !state.jsonHidden.includes(n));

    const handleApply = useCallback(() => {
        onDataChange(apply());
        onClose();
    }, [apply, onDataChange, onClose]);

    // Every close path (backdrop, Escape, Cancel, X) goes through the same honest guard: dirty
    // state gets a BLOCKING confirm dialog (ADR-0038, studio parity) — never a silently
    // discarded working copy and never an auto-hiding toast that can scroll away unseen.
    const requestClose = useCallback((): void => {
        if (hasChanges) {
            setConfirmDiscardOpen(true);
            return;
        }
        onClose();
    }, [hasChanges, onClose]);

    const confirmDiscard = useCallback((): void => {
        setConfirmDiscardOpen(false);
        onClose();
    }, [onClose]);

    // Footer problems counter (ADR-0038): the advisory issues rolled up into the section
    // headers, totalled in screen order. The button steers the rail to the first section
    // carrying issues — the same mechanism the preview placeholder uses.
    const issues = useMemo(() => validateEditor(state), [state]);
    const issueSections = useMemo(
        () => sectionInventory(state.chartType).filter(key => (issues[key]?.length ?? 0) > 0),
        [issues, state.chartType],
    );
    const issueCount = issueSections.reduce((total, key) => total + (issues[key]?.length ?? 0), 0);
    const firstIssueSection = issueSections[0];

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
                onClose={(_event, reason) => {
                    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                        requestClose();
                    }
                }}
                maxWidth="xl"
                fullWidth
                fullScreen={maximized}
                aria-labelledby={titleId}
                slotProps={{
                    paper: {
                        sx: {
                            height: maximized ? '100%' : { md: '85vh' },
                            // Smooth the maximize/restore resize (the dialog stays mounted, so no
                            // enter-transition fires on toggle — animate the geometry instead).
                            transition:
                                'width 200ms, height 200ms, max-width 200ms, max-height 200ms, margin 200ms, border-radius 200ms',
                        },
                    },
                }}
            >
                <DialogTitle
                    sx={{ py: 1.5, px: 2.5 }}
                    id={titleId}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
                            <ChartTypeGlyph chartType={state.chartType} />
                            <Typography
                                variant="subtitle2"
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
                                <Tooltip title={Generic.t('theme_studio_dirty')}>
                                    <Box
                                        component="span"
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            bgcolor: 'warning.main',
                                            flexShrink: 0,
                                        }}
                                    />
                                </Tooltip>
                            )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
                            <EditorHistoryButtons
                                canUndo={canUndo}
                                canRedo={canRedo}
                                onUndo={undo}
                                onRedo={redo}
                                size="small"
                                sx={{ color: 'text.secondary' }}
                            />
                            <IconButton
                                onClick={() => setMaximized(m => !m)}
                                size="small"
                                sx={{ color: 'text.secondary' }}
                                aria-label={Generic.t(maximized ? 'echarts_editor_restore' : 'echarts_editor_maximize')}
                                title={Generic.t(maximized ? 'echarts_editor_restore' : 'echarts_editor_maximize')}
                            >
                                {maximized ? <RestoreIcon /> : <MaximizeIcon />}
                            </IconButton>
                            <IconButton
                                onClick={requestClose}
                                size="small"
                                sx={{ color: 'text.secondary' }}
                                aria-label={Generic.t('echarts_editor_close')}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
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
                                issues={issues}
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
                        {/* Splitter (ADR-0019 signature element): the bare 1 px hairline — divider
                            grey at rest, primary on hover/focus/drag. No grip pill (removed on user
                            feedback 2026-08-05): the colouring line itself is the affordance. */}
                        <Box
                            {...handleProps}
                            aria-label={Generic.t('echarts_splitter_aria')}
                            title={Generic.t('echarts_splitter_hint')}
                            sx={{
                                display: { xs: 'none', md: 'block' },
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
                            }}
                        />
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
                {/* Footer contract (ADR-0038, studio parity): Reset + problems counter left,
                    Cancel / Apply right. The counter is warning-coloured — the section roll-up
                    chips are advisory warnings, and the colour tells that truth. */}
                <DialogActions sx={{ px: 2.5, py: 1.5, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 'auto' }}>
                        <Button
                            onClick={reset}
                            color="inherit"
                            disabled={!hasChanges}
                        >
                            {Generic.t('theme_wizard_reset')}
                        </Button>
                        {issueCount > 0 ? (
                            <Button
                                size="small"
                                color="warning"
                                onClick={() => firstIssueSection && handlePlaceholderClick(firstIssueSection)}
                                sx={{ textTransform: 'none' }}
                            >
                                {Generic.t('theme_studio_problems', String(issueCount))}
                            </Button>
                        ) : null}
                    </Box>
                    <Button onClick={requestClose}>{Generic.t('echarts_editor_cancel')}</Button>
                    <Button
                        variant="contained"
                        onClick={handleApply}
                        disabled={!hasChanges}
                    >
                        {Generic.t('echarts_editor_apply')}
                    </Button>
                </DialogActions>
            </Dialog>
            <ConfirmDiscardDialog
                open={confirmDiscardOpen}
                text={Generic.t('echarts_editor_discard_text')}
                onCancel={() => setConfirmDiscardOpen(false)}
                onConfirm={confirmDiscard}
            />
        </ThemeProvider>
    );
}

export default EchartsConfigEditorModal;
