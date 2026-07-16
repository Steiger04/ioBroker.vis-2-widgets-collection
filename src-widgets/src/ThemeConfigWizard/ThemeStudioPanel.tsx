/**
 * Floating, draggable studio panel that edits the user theme with live preview.
 *
 * @module ThemeConfigWizard/ThemeStudioPanel
 * @remarks
 * Replaces the old blind modal dialog with a floating live-preview panel.
 * A non-modal `Paper` floats over the canvas; while open it mirrors its in-memory
 * draft into the {@link module:lib/theme/draftThemeStore} singleton, so every
 * collection widget on the canvas (each running
 * {@link module:hooks/useCollectionTheme.useCollectionTheme}) re-themes live as
 * the user edits. Save persists the draft to the ioBroker state; the hook's
 * seamless handoff then retires the draft. Closing discards the draft (canvas
 * snaps back), with a confirm when there are unsaved changes.
 *
 * The panel chrome is wrapped in its OWN `ThemeProvider` built from `themeType`
 * (like the old dialog) so the panel UI is unaffected by the theme being edited
 * (no RTL/dark-mode self-influence); only the in-panel preview (added in a later
 * phase) will sit under the draft theme.
 */

import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Paper,
    Stack,
    ThemeProvider,
    Typography,
    createTheme,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type React from 'react';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

import Generic from '../Generic';
import useDraggable from '../hooks/useDraggable';
import { THEME_STATE_ID } from '../lib/constants';
import { clearDraftTheme, setDraftTheme } from '../lib/theme/draftThemeStore';
import { THEME_PRESETS } from '../lib/theme/presets';
import type { UserTheme } from '../lib/theme/themeTypes';
import { getNestedValue, setNestedValue } from '../lib/theme/themeUtils';
import { validateThemeOptions } from '../lib/theme/validateTheme';
import ThemePreviewBlock from './components/ThemePreviewBlock';
import ErweitertSection from './sections/ErweitertSection';
import PaletteSection from './sections/PaletteSection';
import TypographySection from './sections/TypographySection';

/** Props for {@link ThemeStudioPanel}. */
interface ThemeStudioPanelProps {
    /** Whether the panel is open. */
    open: boolean;
    /** Callback when the panel should close (after draft handling is done). */
    onClose: () => void;
    /** ioBroker socket connection for reading/writing the theme state. */
    socket: LegacyConnection;
    /** vis-2 host dark/light mode used to theme the panel chrome. */
    themeType: 'dark' | 'light';
}

/** Panel width (px) — also used to compute the default top-right position. */
const PANEL_WIDTH = 380;

/**
 * Floating panel component for editing the theme with live preview.
 */
function ThemeStudioPanel({ open, onClose, socket, themeType }: ThemeStudioPanelProps): React.JSX.Element | null {
    // In-memory theme object edited by the form sections; mirrored to the draft
    // store so canvas widgets preview edits live.
    const [themeObj, setThemeObj] = useState<UserTheme>({});
    const [loading, setLoading] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [confirmDiscardOpen, setConfirmDiscardOpen] = useState(false);

    // Default position: top-right with a small margin.
    const [initialPosition] = useState<{ x: number; y: number }>(() => {
        if (typeof window === 'undefined') {
            return { x: 24, y: 24 };
        }
        return { x: Math.max(0, window.innerWidth - PANEL_WIDTH - 24), y: 24 };
    });
    const { position, panelRef, dragHandlers } = useDraggable({ initial: initialPosition });

    // Panel chrome follows the vis-2 dark/light mode (independent of the edited theme).
    const chromeTheme = useMemo(
        () => createTheme({ palette: { mode: themeType === 'dark' ? 'dark' : 'light' } }),
        [themeType],
    );

    // Load the persisted theme object whenever the panel opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        let active = true;
        setLoading(true);
        setSaveError(null);
        socket
            .getState(THEME_STATE_ID)
            .then((state: ioBroker.State | null | undefined) => {
                if (!active) {
                    return;
                }
                const raw = typeof state?.val === 'string' ? state.val : '';
                if (!raw) {
                    setThemeObj({});
                    return;
                }
                try {
                    const parsed: unknown = JSON.parse(raw);
                    const result = validateThemeOptions(parsed);
                    setThemeObj(result.isValid ? (result.theme ?? {}) : {});
                } catch {
                    setThemeObj({});
                }
            })
            .catch((e: unknown) => console.error(`Cannot read theme state ${THEME_STATE_ID}: ${e}`))
            .finally(() => {
                if (active) {
                    setLoading(false);
                    setDirty(false);
                }
            });
        return () => {
            active = false;
        };
    }, [open, socket]);

    // Mirror the in-memory theme into the draft store so canvas widgets preview
    // live while the panel is open.
    useEffect(() => {
        if (open) {
            setDraftTheme(themeObj);
        }
    }, [open, themeObj]);

    // Re-validate on every change.
    const validation = useMemo(() => validateThemeOptions(themeObj), [themeObj]);

    // Escape closes (with the same discard handling as the close button).
    const requestClose = useCallback((): void => {
        if (dirty) {
            setConfirmDiscardOpen(true);
            return;
        }
        clearDraftTheme();
        onClose();
    }, [dirty, onClose]);

    useEffect(() => {
        if (!open) {
            return;
        }
        const onKey = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                requestClose();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, requestClose]);

    const handleChange = useCallback((path: string, value: unknown): void => {
        setThemeObj(prev => setNestedValue(prev, path, value));
        setDirty(true);
    }, []);

    const handleReset = useCallback((): void => {
        setThemeObj({});
        setDirty(true);
    }, []);

    const handleApplyPreset = useCallback((presetTheme: UserTheme): void => {
        setThemeObj(presetTheme);
        setDirty(true);
    }, []);

    const handleSave = useCallback(async (): Promise<void> => {
        if (!validation.isValid || saving) {
            return;
        }
        setSaving(true);
        setSaveError(null);
        try {
            await socket.setState(THEME_STATE_ID, JSON.stringify(themeObj));
            setDirty(false);
            // Do NOT clear the draft here: the hook's seamless handoff retires it
            // once the persisted state echoes the saved value (no flicker).
            onClose();
        } catch (e: unknown) {
            setSaveError(Generic.t('theme_studio_save_error'));
            console.error(`Cannot write theme state ${THEME_STATE_ID}: ${e}`);
        } finally {
            setSaving(false);
        }
    }, [socket, themeObj, validation.isValid, saving, onClose]);

    const confirmDiscard = useCallback((): void => {
        setConfirmDiscardOpen(false);
        clearDraftTheme();
        onClose();
    }, [onClose]);

    if (!open) {
        return null;
    }

    const errorIssues = validation.issues.filter(issue => issue.severity === 'error');
    const warningIssues = validation.issues.filter(issue => issue.severity === 'warning');

    return (
        <ThemeProvider theme={chromeTheme}>
            <Paper
                ref={panelRef}
                elevation={8}
                sx={{
                    position: 'fixed',
                    left: position.x,
                    top: position.y,
                    width: PANEL_WIDTH,
                    maxHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1300,
                }}
            >
                <Box
                    {...dragHandlers}
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
                    >
                        <DragIndicatorIcon
                            fontSize="small"
                            color="action"
                        />
                        <Typography variant="subtitle2">{Generic.t('theme_wizard_title')}</Typography>
                    </Stack>
                    <IconButton
                        size="small"
                        onClick={requestClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box sx={{ overflowY: 'auto', p: 2 }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: 'block', mb: 0.75 }}
                                >
                                    {Generic.t('theme_studio_presets')}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                    useFlexGap
                                >
                                    {THEME_PRESETS.map(preset => {
                                        const main =
                                            getNestedValue<string>(preset.theme, 'palette.primary.main') ?? '#888888';
                                        return (
                                            <Box
                                                key={preset.id}
                                                onClick={() => handleApplyPreset(preset.theme)}
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    px: 1,
                                                    py: 0.25,
                                                    borderRadius: 16,
                                                    border: 1,
                                                    borderColor: 'divider',
                                                    cursor: 'pointer',
                                                    '&:hover': { bgcolor: 'action.hover' },
                                                }}
                                            >
                                                <Box
                                                    sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: main }}
                                                />
                                                <Typography variant="caption">{Generic.t(preset.labelKey)}</Typography>
                                            </Box>
                                        );
                                    })}
                                </Stack>
                            </Box>
                            <ThemePreviewBlock theme={themeObj} />
                            <PaletteSection
                                theme={themeObj}
                                onChange={handleChange}
                            />
                            <TypographySection
                                theme={themeObj}
                                onChange={handleChange}
                            />
                            <ErweitertSection
                                theme={themeObj}
                                onChange={handleChange}
                            />

                            {saveError ? (
                                <Alert
                                    severity="error"
                                    sx={{ mt: 2 }}
                                >
                                    {saveError}
                                </Alert>
                            ) : null}

                            {errorIssues.length > 0 ? (
                                <Alert
                                    severity="error"
                                    sx={{ mt: 2 }}
                                >
                                    <Typography variant="body2">
                                        {Generic.t('theme_wizard_validation_issues')}
                                    </Typography>
                                    <Box
                                        component="ul"
                                        sx={{ margin: '4px 0 0', paddingLeft: 3, mb: 0 }}
                                    >
                                        {errorIssues.map((issue, index) => (
                                            <li key={`${issue.path}-${index}`}>
                                                <Typography variant="body2">
                                                    {issue.path ? `${issue.path}: ` : ''}
                                                    {issue.message}
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
                                                    {issue.message}
                                                </Typography>
                                            </li>
                                        ))}
                                    </Box>
                                </Alert>
                            ) : null}
                        </>
                    )}
                </Box>

                <Box sx={{ display: 'flex', gap: 1, p: 1.5, borderTop: 1, borderColor: 'divider' }}>
                    <Button
                        onClick={handleReset}
                        color="inherit"
                        disabled={loading || saving || Object.keys(themeObj).length === 0}
                    >
                        {Generic.t('theme_wizard_reset')}
                    </Button>
                    <Box sx={{ flex: 1 }} />
                    <Button
                        onClick={requestClose}
                        color="inherit"
                    >
                        {Generic.t('cancel')}
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        disabled={!validation.isValid || loading || saving}
                    >
                        {saving ? <CircularProgress size={20} /> : Generic.t('save')}
                    </Button>
                </Box>
            </Paper>

            <Dialog
                open={confirmDiscardOpen}
                onClose={() => setConfirmDiscardOpen(false)}
            >
                <DialogTitle>{Generic.t('theme_studio_discard_title')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{Generic.t('theme_studio_discard_text')}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setConfirmDiscardOpen(false)}
                        color="inherit"
                    >
                        {Generic.t('cancel')}
                    </Button>
                    <Button
                        onClick={confirmDiscard}
                        color="error"
                        variant="contained"
                    >
                        {Generic.t('theme_studio_discard')}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default ThemeStudioPanel;
