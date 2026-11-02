/**
 * Floating, draggable studio panel that edits the user theme with live preview (ADR-0020).
 *
 * @module ThemeConfigWizard/ThemeStudioPanel
 * @remarks
 * A non-modal `Paper` floats over the canvas. The panel is CHROME only: the draft lifecycle —
 * seed and load, the live canvas preview through the draft store, dirty, save, discard and the
 * end invariant (session ends ⇒ the draft leaves the canvas) — is the
 * {@link module:ThemeConfigWizard/useStudioSession.useStudioSession} Studio session. The
 * panel runs in its own React root outside the widget palette
 * ({@link module:ThemeConfigWizard/studioHost}), mounted on open and unmounted on close, so
 * every open starts fresh (all sections collapsed). Closing discards the draft (canvas snaps back), with a confirm when
 * there are unsaved changes; Save persists it and the per-widget save handoff retires it.
 *
 * ADR-0020 chrome:
 * - **Undo/redo** — header buttons over the session's editor history (ADR-0038; the session
 *   also binds Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, skipped while typing in inputs).
 * - **Honest dirty state** — the session's dirty flag (undo all the way back reads clean
 *   again), shown as a dot next to the title.
 * - **Resizable like an OS window** — 8 Resize grips (4 edges + 4 corners) plus header
 *   drag via {@link module:hooks/useFloatingPanel}; the geometry `{x, y, w, h|null}`
 *   persists as ONE localStorage entry (`h: null` = Auto height). Clamped live and on
 *   browser-window resize; the stored intent survives clamping.
 * - **Field-level validation** — colour errors render at their field; the footer
 *   counter scrolls to the first problem (expanding its section). Only errors without
 *   a field home (non-colour paths) and warnings keep a compact alert at the bottom.
 *
 * The panel chrome renders in the vis-2 editor's theme family (ADR-0038): it is editor chrome
 * like every configurator. The palette extension point exposes only the host MODE
 * (`themeType`), not the theme object, and the palette React tree does not reliably provide the
 * editor theme by context — so the chrome theme is REBUILT in the editor's family
 * (modernDark/modernLight since the React-19 host update; the palette constants are mirrored
 * locally in `lib/theme/chromeTheme` because gui-components peers MUI 9, not bundled here). It stays unaffected by the theme being EDITED — the draft only flows to the
 * canvas widgets via the draft store, never back into the panel; the canvas is the preview
 * (ADR-0020 decision 2).
 */

import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Stack,
    ThemeProvider,
    Tooltip,
    Typography,
    createTheme,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';
import type { Theme as MuiTheme } from '@mui/material/styles';

import Generic from '../Generic';
import ConfirmDiscardDialog from '../components/ConfirmDiscardDialog';
import EditorHistoryButtons from '../components/EditorHistoryButtons';
import FloatingPanelGrips from '../components/FloatingPanelGrips';
import { SubGroup } from '../components/controls';
import useFloatingPanel, { PANEL_DEFAULT_W } from '../hooks/useFloatingPanel';
import { withDerivedSecondary, withPrimaryAsText } from '../lib/theme/derivePalette';
import { ensureBundledFontFaces } from '../lib/theme/fontCatalogue';
import { createChromeTheme } from '../lib/theme/chromeTheme';
import { applyPreset, type ThemePreset } from '../lib/theme/presets';
import type { ThemeValidationIssue } from '../lib/theme/themeTypes';
import { getNestedValue } from '../lib/theme/themeUtils';
import PresetCards from './PresetCards';
import useStudioSession from './useStudioSession';
import ErweitertSection from './sections/ErweitertSection';
import PaletteSection from './sections/PaletteSection';
import StatusTextSection from './sections/StatusTextSection';
import TypographySection from './sections/TypographySection';

/** localStorage key for the panel geometry (codebase namespacing idiom, cf. RAIL_STORAGE_KEY). */
export const STUDIO_GEOMETRY_KEY = 'vis-2-widgets-collection:theme-studio:geometry';

/** Props for {@link ThemeStudioPanel}. */
interface ThemeStudioPanelProps {
    /** Callback when the panel should close (after draft handling is done). */
    onClose: () => void;
    /** ioBroker socket connection for reading/writing the theme state. */
    socket: Connection;
    /** vis-2 host dark/light mode used to theme the panel chrome. */
    themeType: 'dark' | 'light';
}

/** Section ids for controlled expansion (scroll-to-error). */
type SectionKey = 'palette' | 'typography' | 'statusText' | 'erweitert';

/** Maps a theme path to the section that renders a field for it. */
function sectionForPath(path: string): SectionKey {
    if (/^palette\.(error|warning|info|success|text)(\.|$)/.test(path)) {
        return 'statusText';
    }
    if (path.startsWith('palette.')) {
        return 'palette';
    }
    if (path.startsWith('typography.') || path.startsWith('corners')) {
        return 'typography';
    }
    return 'erweitert';
}

/** Colour-field paths — errors on these render at the field, not in the bottom alert. */
const COLOR_FIELD_PATHS: ReadonlySet<string> = new Set([
    'palette.primary.main',
    'palette.secondary.main',
    'palette.background.default',
    'palette.background.paper',
    'palette.divider',
    'palette.error.main',
    'palette.warning.main',
    'palette.info.main',
    'palette.success.main',
    'palette.text.primary',
    'palette.text.secondary',
]);

/** Maps validator issue codes to localized message keys. */
const VALIDATION_CODE_KEYS: Record<string, string> = {
    'invalid-color': 'theme_studio_valid_color',
    'invalid-number': 'theme_studio_valid_number',
    'number-out-of-range': 'theme_studio_valid_range',
    'invalid-type': 'theme_studio_valid_type',
    'unknown-key': 'theme_studio_valid_unknown',
    'invalid-shape': 'theme_studio_valid_shape',
};

/** Formats a validation issue as a friendly localized message (falls back to the raw message). */
const formatIssue = (issue: ThemeValidationIssue): string =>
    issue.code && VALIDATION_CODE_KEYS[issue.code] ? Generic.t(VALIDATION_CODE_KEYS[issue.code]) : issue.message;

/**
 * The panel chrome around one Studio session: mounting starts the session, unmounting ends it
 * (the studio host mounts the panel on open and unmounts it on close).
 */
function ThemeStudioPanel({ onClose, socket, themeType }: ThemeStudioPanelProps): React.JSX.Element {
    const session = useStudioSession(socket);
    const { draft: themeObj, validation, dirty, loading, saving } = session;
    const { edit, apply, discard, save } = session;
    const [confirmDiscardOpen, setConfirmDiscardOpen] = useState(false);
    // Panel-owned section expansion (only set once the user toggles or scroll-to-error forces one).
    const [expandedMap, setExpandedMap] = useState<Partial<Record<SectionKey, boolean>>>({});
    const bodyRef = useRef<HTMLDivElement>(null);

    // Window-style chrome: header drag + 8 Resize grips, geometry persisted as one entry
    // (ADR-0020 addendum). Default dock: top-right with a small margin.
    const { panelRef, geometry, activeDrag, dragHandleProps, edgeProps, cornerProps } = useFloatingPanel({
        storageKey: STUDIO_GEOMETRY_KEY,
        active: true,
        defaultGeometry: () =>
            typeof window === 'undefined'
                ? { x: 24, y: 24, w: PANEL_DEFAULT_W, h: null }
                : { x: Math.max(0, window.innerWidth - PANEL_DEFAULT_W - 24), y: 24, w: PANEL_DEFAULT_W, h: null },
        labels: {
            width: Generic.t('theme_studio_resize_width'),
            height: Generic.t('theme_studio_resize_height'),
        },
    });

    // Panel chrome follows the vis-2 host mode in the modern admin family (ADR-0038):
    // the editor itself renders modernDark/modernLight since the React-19 host update;
    // gui-components cannot be bundled (MUI 9 peer), so the palette is mirrored locally
    // (see lib/theme/chromeTheme). Independent of the theme being edited.
    const chromeTheme = useMemo(() => createChromeTheme(themeType), [themeType]);

    // Resolved theme for display: same shape the runtime builds, but with the
    // color mode resolved against the vis-2 host when set to "Auto", so every
    // color field shows the effective value (MUI's mode-aware defaults for
    // anything not explicitly overridden).
    const resolvedTheme = useMemo<MuiTheme>(() => {
        const storedMode = getNestedValue<string>(themeObj, 'palette.mode');
        const mode: 'light' | 'dark' =
            storedMode === 'light' || storedMode === 'dark' ? storedMode : themeType === 'dark' ? 'dark' : 'light';
        const draftWithMode = withDerivedSecondary({ ...themeObj, palette: { ...themeObj.palette, mode } });
        // Text follows the effective primary (resolved here so the field shows it),
        // unless the user explicitly set a text color.
        const resolvedPrimary = createTheme(draftWithMode).palette.primary.main;
        return createTheme(withPrimaryAsText(draftWithMode, resolvedPrimary));
    }, [themeObj, themeType]);

    // The pickers' preset swatch row: the current theme colours (decision 5).
    const colorPresets = useMemo<string[]>(() => {
        const palette = resolvedTheme.palette;
        return [
            palette.primary.main,
            palette.secondary.main,
            palette.error.main,
            palette.warning.main,
            palette.info.main,
            palette.success.main,
            palette.text.primary,
            palette.text.secondary,
            palette.background.default,
            palette.background.paper,
            palette.divider,
        ];
    }, [resolvedTheme]);

    // Field-level error lookup (first error per path wins).
    const issuesByPath = useMemo(() => {
        const map = new Map<string, string>();
        for (const issue of validation.issues) {
            if (issue.severity === 'error' && issue.path && !map.has(issue.path)) {
                map.set(issue.path, formatIssue(issue));
            }
        }
        return map;
    }, [validation.issues]);
    const errorFor = useCallback((path: string): string | undefined => issuesByPath.get(path), [issuesByPath]);

    const errorIssues = useMemo(
        () => validation.issues.filter(issue => issue.severity === 'error'),
        [validation.issues],
    );
    const warningIssues = useMemo(
        () => validation.issues.filter(issue => issue.severity === 'warning'),
        [validation.issues],
    );
    // Errors without a colour-field home keep a compact alert at the bottom.
    const nonFieldErrors = useMemo(
        () => errorIssues.filter(issue => !COLOR_FIELD_PATHS.has(issue.path)),
        [errorIssues],
    );

    // Escape closes (with the same discard handling as the close button).
    const requestClose = useCallback((): void => {
        if (dirty) {
            setConfirmDiscardOpen(true);
            return;
        }
        discard();
        onClose();
    }, [dirty, discard, onClose]);

    // Keyboard: Escape closes (with the same discard handling as the close button); the
    // undo/redo keys are bound by the session (ADR-0038).
    useEffect(() => {
        const onKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                requestClose();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [requestClose]);

    // Scroll-to-error: expand the owning section, then scroll the first marked
    // field (or the section itself) into view — after a tick so the lazily
    // mounted section body exists.
    const scrollToFirstError = useCallback((): void => {
        const first = errorIssues[0];
        if (!first) {
            return;
        }
        const section = sectionForPath(first.path);
        setExpandedMap(map => ({ ...map, [section]: true }));
        window.setTimeout(() => {
            const body = bodyRef.current;
            if (!body) {
                return;
            }
            const target =
                body.querySelector('[data-theme-error]') ?? body.querySelector(`[data-studio-section="${section}"]`);
            target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
    }, [errorIssues]);

    const sectionProps = useCallback(
        (key: SectionKey): { expanded?: boolean; onExpandedChange: (expanded: boolean) => void } => ({
            expanded: expandedMap[key],
            onExpandedChange: expanded => {
                setExpandedMap(map => ({ ...map, [key]: expanded }));
                // Opening typography loads the bundled faces so the family select
                // previews render in their real fonts (lazy — ADR-0020).
                if (expanded && key === 'typography') {
                    void ensureBundledFontFaces();
                }
            },
        }),
        [expandedMap],
    );

    // Continuous edits coalesce per path in the session (one slider drag = one undo step).
    const handleChange = edit;

    const handleReset = useCallback((): void => {
        apply(() => ({}));
    }, [apply]);

    // Presets merge palette-only and count as ONE discrete undo step.
    const handleApplyPreset = useCallback(
        (preset: ThemePreset): void => {
            apply(prev => applyPreset(prev, preset));
        },
        [apply],
    );

    // A successful save ends the session; the save handoff retires the draft on the canvas.
    const handleSave = useCallback(async (): Promise<void> => {
        if (await save()) {
            onClose();
        }
    }, [save, onClose]);

    const confirmDiscard = useCallback((): void => {
        setConfirmDiscardOpen(false);
        discard();
        onClose();
    }, [discard, onClose]);

    return (
        <ThemeProvider theme={chromeTheme}>
            <Paper
                ref={panelRef}
                elevation={8}
                sx={{
                    position: 'fixed',
                    left: geometry.x,
                    top: geometry.y,
                    width: geometry.w,
                    // Auto height follows the content up to 80vh; a fixed height renders as-is
                    // (already viewport-clamped by the hook).
                    ...(geometry.h == null ? { maxHeight: '80vh' } : { height: geometry.h }),
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1300,
                    // No hover-transition fight while a grip streams sizes.
                    transition: activeDrag ? 'none' : undefined,
                }}
            >
                {/* 8 window-style Resize grips (ADR-0020 addendum, bare-hairline idiom). */}
                <FloatingPanelGrips
                    edgeProps={edgeProps}
                    cornerProps={cornerProps}
                    activeDrag={activeDrag}
                />

                <Box
                    {...dragHandleProps}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 1,
                        py: 0.5,
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                        sx={{ minWidth: 0 }}
                    >
                        <DragIndicatorIcon
                            fontSize="small"
                            color="action"
                        />
                        <Typography
                            variant="subtitle2"
                            noWrap
                        >
                            {Generic.t('theme_wizard_title')}
                        </Typography>
                        {dirty ? (
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
                        ) : null}
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0}
                        sx={{ flexShrink: 0 }}
                    >
                        <EditorHistoryButtons
                            canUndo={session.canUndo}
                            canRedo={session.canRedo}
                            onUndo={session.undo}
                            onRedo={session.redo}
                            size="small"
                        />
                        <IconButton
                            size="small"
                            onClick={requestClose}
                            aria-label={Generic.t('theme_studio_close')}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                </Box>

                <Box
                    ref={bodyRef}
                    sx={{ overflowY: 'auto', p: 2, flex: 1, minHeight: 0 }}
                >
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <SubGroup title={Generic.t('theme_studio_presets')}>
                                <PresetCards
                                    theme={themeObj}
                                    onApply={handleApplyPreset}
                                />
                            </SubGroup>
                            <Box data-studio-section="palette">
                                <PaletteSection
                                    theme={themeObj}
                                    onChange={handleChange}
                                    resolved={resolvedTheme}
                                    errorFor={errorFor}
                                    colorPresets={colorPresets}
                                    {...sectionProps('palette')}
                                />
                            </Box>
                            <Box data-studio-section="typography">
                                <TypographySection
                                    theme={themeObj}
                                    onChange={handleChange}
                                    {...sectionProps('typography')}
                                />
                            </Box>
                            <Box data-studio-section="statusText">
                                <StatusTextSection
                                    theme={themeObj}
                                    onChange={handleChange}
                                    resolved={resolvedTheme}
                                    errorFor={errorFor}
                                    colorPresets={colorPresets}
                                    {...sectionProps('statusText')}
                                />
                            </Box>
                            <Box data-studio-section="erweitert">
                                <ErweitertSection
                                    theme={themeObj}
                                    onChange={handleChange}
                                    {...sectionProps('erweitert')}
                                />
                            </Box>

                            {session.saveFailed ? (
                                <Alert
                                    severity="error"
                                    sx={{ mt: 2 }}
                                >
                                    {Generic.t('theme_studio_save_error')}
                                </Alert>
                            ) : null}

                            {nonFieldErrors.length > 0 ? (
                                <Alert
                                    severity="error"
                                    sx={{ mt: 2 }}
                                >
                                    <Box
                                        component="ul"
                                        sx={{ margin: 0, paddingLeft: 3, mb: 0 }}
                                    >
                                        {nonFieldErrors.map((issue, index) => (
                                            <li key={`${issue.path}-${index}`}>
                                                <Typography variant="body2">
                                                    {issue.path ? `${issue.path}: ` : ''}
                                                    {formatIssue(issue)}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>
                                </Alert>
                            ) : null}

                            {warningIssues.length > 0 ? (
                                <Alert
                                    severity="warning"
                                    sx={{ mt: 2 }}
                                    icon={false}
                                >
                                    <Box
                                        component="ul"
                                        sx={{ margin: 0, paddingLeft: 3, mb: 0 }}
                                    >
                                        {warningIssues.map((issue, index) => (
                                            <li key={`${issue.path}-${index}`}>
                                                <Typography variant="body2">
                                                    {issue.path ? `${issue.path}: ` : ''}
                                                    {formatIssue(issue)}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>
                                </Alert>
                            ) : null}
                        </>
                    )}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 1.5,
                        borderTop: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Button
                        onClick={handleReset}
                        color="inherit"
                        disabled={loading || saving || Object.keys(themeObj).length === 0}
                    >
                        {Generic.t('theme_wizard_reset')}
                    </Button>
                    {errorIssues.length > 0 ? (
                        <Button
                            size="small"
                            color="error"
                            onClick={scrollToFirstError}
                            sx={{ textTransform: 'none' }}
                        >
                            {errorIssues.length === 1
                                ? Generic.t('theme_studio_problems_one')
                                : Generic.t('theme_studio_problems', String(errorIssues.length))}
                        </Button>
                    ) : null}
                    <Box sx={{ flex: 1 }} />
                    <Button
                        onClick={requestClose}
                        color="inherit"
                    >
                        {Generic.t('cancel')}
                    </Button>
                    <Tooltip title={validation.isValid ? '' : Generic.t('theme_studio_save_invalid')}>
                        <span>
                            <Button
                                onClick={handleSave}
                                variant="contained"
                                // Disabled-when-clean (configurator-design contract): Save needs
                                // something to commit — dirty flips back to false on a full
                                // revert / undo-to-start, exactly like the echarts Apply.
                                disabled={!session.canSave || loading}
                            >
                                {saving ? <CircularProgress size={20} /> : Generic.t('save')}
                            </Button>
                        </span>
                    </Tooltip>
                </Box>
            </Paper>

            <ConfirmDiscardDialog
                open={confirmDiscardOpen}
                text={Generic.t('theme_studio_discard_text')}
                onCancel={() => setConfirmDiscardOpen(false)}
                onConfirm={confirmDiscard}
            />
        </ThemeProvider>
    );
}

export default ThemeStudioPanel;
