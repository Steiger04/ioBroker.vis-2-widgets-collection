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
 * ({@link useEditorHistory} — undo/redo in the header plus Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y),
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
import { packStaggeredAxes, pruneOrphanAxes, reconcileJsonAxes } from './editor/axisLayout';
import { normalizeSeries } from './editor/seriesIdentity';
import { withStableIds } from './editor/identity';
import { familyOf } from './optionBuilder';
import { validateEditor, type SectionKey } from './editor/validation';
import { useEditorHistory, useEditorHistoryKeys } from '../lib/useEditorHistory';
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
    // The working copy lives in an editor history (ADR-0038): every edit is an undoable step
    // (rapid same-key edits coalesce — one slider drag / one typed field = one step).
    const history = useEditorHistory<EditorState>(DEFAULT_EDITOR_STATE);
    const state = history.present;
    // The stable commit callback, destructured so the memoized helpers below can depend on it
    // (the history result object itself has a new identity every render).
    const { set: commit } = history;
    const loadedCountRef = useRef(0);
    // The loaded baseline: the string snapshot drives `hasChanges`, the object drives Reset.
    const loadedSnapshotRef = useRef('');
    const loadedStateRef = useRef<EditorState>(DEFAULT_EDITOR_STATE);
    const [confirmDiscardOpen, setConfirmDiscardOpen] = useState(false);
    // Window-style maximize toggle (fullScreen, edge-to-edge). Session-only by user decision:
    // the component instance survives close/open, so the flag must be reset in the open effect
    // below — every fresh open starts at normal size.
    const [maximized, setMaximized] = useState(false);
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
        loadedStateRef.current = loaded;
        history.rebase(loaded);
        setFocusSection(null);
        setMaximized(false); // maximize is session-only — a fresh open starts at normal size
        // history is NOT a dependency: the hook's result object has a new identity every render
        // (only its callbacks are stable), so listing it would re-run this effect after every
        // edit and rebase the working copy back to the loaded state — wiping each edit.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, data]);

    // Self-heal stable ids: every keyed card list (axes/series/mark-lines/indicators) must carry an
    // `id` so React reconciles by identity, not array index (the wrong-card-unmounts bug). loadEditorState
    // normalises on open, BUT dev HMR can preserve stale pre-id state across a code reload without
    // re-running the loader — so backfill here too. Idempotent: once every item has an id this is a
    // pure read (no history entry), so it is safe on every state change and cannot loop.
    useEffect(() => {
        if (
            state.yAxes.some(a => !a.id) ||
            state.series.some(s => !s.id) ||
            state.markLines.some(m => !m.id) ||
            state.radar.indicators.some(ind => !ind.id)
        ) {
            history.set(
                s => ({
                    ...s,
                    yAxes: withStableIds(s.yAxes),
                    series: normalizeSeries(s.series),
                    markLines: withStableIds(s.markLines),
                    radar: { ...s.radar, indicators: withStableIds(s.radar.indicators) },
                }),
                'self-heal',
            );
        }
        // history.set is a stable callback — see the open effect above for why the object is not.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    const hasChanges = useMemo(() => JSON.stringify(state) !== loadedSnapshotRef.current, [state]);

    // Patches coalesce by their key set: consecutive edits touching the same keys within the
    // window replace the present snapshot (typing a field / dragging a slider = one undo step).
    const set = useCallback(
        (patch: EditorPatch) => {
            commit(s => ({ ...s, ...patch }), Object.keys(patch).sort().join(','));
        },
        [commit],
    );
    const setUserText = useCallback(
        (value: string) => {
            commit(s => ({ ...s, userText: value }), 'userText');
        },
        [commit],
    );

    // JSON-mode axis reconcile (ADR-0026 — JSON 1:n): for the cartesian payload series, keep the
    // name-keyed overlay consistent with the axis array as the (dynamic) payload + the user's bindings
    // change. A fresh payload still lands 1:1 (each name its own axis, alternating side + 80 px
    // stagger) — but a name that already carries a valid yAxisIndex KEEPS it, so a manual rebind now
    // survives payload + hide/show changes (the old force-1:1 effect clobbered it). Colour + name are
    // NOT written — each axis inherits both from its bound series at runtime.
    // Only the visible JSON series drive the reconcile — a hidden series (jsonHidden deny-list) must
    // not keep its axis. jsonNamesKey reflects the visible set so hiding a series re-runs the effect
    // and orphan-cleans the freed axis.
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
        const { yAxes, overlay: jsonSeriesStyle } = reconcileJsonAxes(
            visibleJsonNames,
            state.jsonSeriesStyle,
            state.yAxes,
        );
        // Idempotence guard: an undo that reverts `jsonHidden` flips the names key back, so the
        // effect re-fires over the already-consistent reverted state and would recompute the
        // same axes — pushing a no-op history step that destroys the redo branch. Only a real
        // change records.
        if (
            JSON.stringify(yAxes) !== JSON.stringify(state.yAxes) ||
            JSON.stringify(jsonSeriesStyle) !== JSON.stringify(state.jsonSeriesStyle)
        ) {
            set({ yAxes, jsonSeriesStyle });
        }
        // Keyed on the names content (not the array ref) + mode/type → re-syncs only on real change,
        // so manual axis edits + bindings are preserved while names/mode/type are stable.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jsonNamesKey, state.mode, state.chartType]);

    // Non-JSON cartesian orphan-prune (ADR-0033): a mode-switch INTO live/history is a bulk series-
    // leave — the referencing series set changes from the JSON overlay back to `state.series`, so the
    // same orphan-check that runs on a single series-leave prunes axes no live/history series binds.
    // Closes the in-session JSON→Live ghost-axis gap (loadEditorState handles it on open; a switch
    // needs no reload). The JSON side is the reconcile effect above; series add/delete/rebind are
    // already orphan-cleaned by SeriesSection. Idempotent: once no orphan remains the length check is
    // a no-op, so it cannot loop. A drop is a structural change → survivors re-pack densely (ADR-0028).
    useEffect(() => {
        if (state.mode === 'json' || (state.chartType !== 'line' && state.chartType !== 'bar')) {
            return;
        }
        const { series, yAxes } = pruneOrphanAxes(state.series, state.yAxes);
        if (yAxes.length !== state.yAxes.length) {
            set({ series, yAxes: packStaggeredAxes(yAxes) });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.mode, state.chartType]);

    const handleApply = useCallback(() => {
        onDataChange(saveEditorState(state, loadedCountRef.current) as WidgetData);
        onClose();
    }, [state, onDataChange, onClose]);

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

    // Keyboard: the shared configurator undo/redo binding (Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y,
    // ADR-0038) — native undo wins inside inputs. Escape is the Dialog's own onClose path.
    useEditorHistoryKeys(history, open);

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

    const handleReset = useCallback((): void => {
        // One undoable step back to the loaded baseline — section expansion and scroll
        // position survive (the editor state is swapped, the rail is not reloaded).
        commit(loadedStateRef.current);
    }, [commit]);

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
                                canUndo={history.canUndo}
                                canRedo={history.canRedo}
                                onUndo={history.undo}
                                onRedo={history.redo}
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
                            onClick={handleReset}
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
