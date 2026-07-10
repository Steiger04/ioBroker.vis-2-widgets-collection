/**
 * Dialog for editing the user-supplied MUI theme as a structured object.
 *
 * @module ThemeConfigWizard/ThemeWizardDialog
 * @remarks
 * Opened from the palette button ({@link module:ThemeConfigWizard/ThemeWizardButton}).
 * Edits an in-memory `UserTheme` object via four accordion sections (palette,
 * typography, layout, CSS variables). On save the object is serialized to JSON
 * and written to {@link THEME_STATE_ID}; JSON is only ever touched at this
 * ioBroker state boundary. The same state is read back and parsed on open.
 *
 * `CollectionProvider` subscribes to the state and re-merges the validated
 * object into `createTheme` for every collection widget, so changes apply live.
 */

import { Close as CloseIcon } from '@mui/icons-material';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ThemeProvider,
    Typography,
    createTheme,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type React from 'react';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';

import Generic from '../Generic';
import { THEME_STATE_ID } from '../lib/constants';
import type { UserTheme } from '../lib/theme/themeTypes';
import { setNestedValue } from '../lib/theme/themeUtils';
import { validateThemeOptions } from '../lib/theme/validateTheme';
import CssVariablesSection from './sections/CssVariablesSection';
import LayoutSection from './sections/LayoutSection';
import PaletteSection from './sections/PaletteSection';
import TypographySection from './sections/TypographySection';

/** Props for the {@link ThemeWizardDialog} component. */
interface ThemeWizardDialogProps {
    /** Whether the dialog is open. */
    open: boolean;
    /** Callback when the dialog should close. */
    onClose: () => void;
    /** ioBroker socket connection for reading/writing the theme state. */
    socket: LegacyConnection;
    /** vis-2 host dark/light mode used to theme the dialog chrome. */
    themeType: 'dark' | 'light';
}

/**
 * Dialog component for editing the MUI theme via a structured form.
 */
function ThemeWizardDialog({ open, onClose, socket, themeType }: ThemeWizardDialogProps): React.JSX.Element {
    // In-memory theme object edited by the form sections.
    const [themeObj, setThemeObj] = useState<UserTheme>({});
    // True while the initial value is being loaded from the state.
    const [loading, setLoading] = useState(false);

    // Dialog chrome folgt dem vis-2 dark/light-Modus (wie die JsonTable-Spaltenkonfiguration).
    // Der Wizard erbt den Host-Theme zur Laufzeit nicht zuverlässig über den Context, deshalb
    // wird hier ein explizites Theme aus `themeType` gebaut.
    const wizardTheme = useMemo(
        () => createTheme({ palette: { mode: themeType === 'dark' ? 'dark' : 'light' } }),
        [themeType],
    );

    // Load the persisted theme object whenever the dialog opens.
    useEffect(() => {
        if (!open) {
            return;
        }
        let active = true;
        setLoading(true);
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
                }
            });
        return () => {
            active = false;
        };
    }, [open, socket]);

    // Re-validate the whole object on every change.
    const validation = useMemo(() => validateThemeOptions(themeObj), [themeObj]);

    // Update a nested path; clearing (undefined) prunes empty parents.
    const handleChange = useCallback((path: string, value: unknown) => {
        setThemeObj(prev => setNestedValue(prev, path, value));
    }, []);

    const handleSave = useCallback(() => {
        socket
            .setState(THEME_STATE_ID, JSON.stringify(themeObj))
            .catch((e: unknown) => console.error(`Cannot write theme state ${THEME_STATE_ID}: ${e}`));
        onClose();
    }, [socket, themeObj, onClose]);

    const handleReset = useCallback(() => {
        setThemeObj({});
    }, []);

    const errorIssues = validation.issues.filter(issue => issue.severity === 'error');
    const warningIssues = validation.issues.filter(issue => issue.severity === 'warning');

    return (
        <ThemeProvider theme={wizardTheme}>
            <Dialog
                open={open}
                onClose={onClose}
                fullWidth
                maxWidth="md"
            >
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 1 }}>
                    {Generic.t('theme_wizard_title')}
                    <IconButton
                        size="small"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            <PaletteSection
                                theme={themeObj}
                                onChange={handleChange}
                            />
                            <TypographySection
                                theme={themeObj}
                                onChange={handleChange}
                            />
                            <LayoutSection
                                theme={themeObj}
                                onChange={handleChange}
                            />
                            <CssVariablesSection
                                theme={themeObj}
                                onChange={handleChange}
                            />

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
                </DialogContent>
                <DialogActions>
                    <Box sx={{ flex: 1 }}>
                        <Button
                            onClick={handleReset}
                            color="inherit"
                            disabled={loading || Object.keys(themeObj).length === 0}
                        >
                            {Generic.t('theme_wizard_reset')}
                        </Button>
                    </Box>
                    <Button
                        onClick={onClose}
                        color="inherit"
                    >
                        {Generic.t('cancel')}
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        disabled={!validation.isValid || loading}
                    >
                        {Generic.t('save')}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default ThemeWizardDialog;
