/**
 * One non-blocking editor notice — snackbar + filled alert with an optional action (ADR-0069).
 *
 * @module EchartsCollectionWidget/components/NoticeSnackbar
 * @remarks
 * The shared shell of the axis-death notices: the Series section's undo snackbar (rebind,
 * series-delete, JSON hide — the triggering `set` is one history step, so undo restores series +
 * axis + anchors together) and the modal's info-only vanish notice (no undo — the next reconcile
 * over the same payload re-kills the restored axis). Severity and message differ per site; the
 * chrome (6 s auto-hide, bottom-center, centred alert rows) is ONE shape. The AxesZoomSection
 * unit-mismatch toast predates this and stays as-is.
 */
import type { FC, ReactNode } from 'react';
import { Alert, Snackbar } from '@mui/material';

interface NoticeSnackbarProps {
    /** Resolved message text (the caller owns the i18n + its parameters). */
    message: string;
    onClose: () => void;
    severity?: 'info' | 'warning' | 'error' | 'success';
    /** The action area — typically the undo button; absent on info-only notices. */
    action?: ReactNode;
}

const NoticeSnackbar: FC<NoticeSnackbarProps> = ({ message, onClose, severity = 'info', action }) => (
    <Snackbar
        open
        autoHideDuration={6000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
        <Alert
            severity={severity}
            variant="filled"
            onClose={onClose}
            action={action}
            sx={{ alignItems: 'center' }}
        >
            {message}
        </Alert>
    </Snackbar>
);

export default NoticeSnackbar;
