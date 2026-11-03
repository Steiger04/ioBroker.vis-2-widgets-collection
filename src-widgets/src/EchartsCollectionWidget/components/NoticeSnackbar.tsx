/**
 * One non-blocking editor notice — snackbar + filled alert with an optional action (ADR-0069).
 *
 * @module EchartsCollectionWidget/components/NoticeSnackbar
 * @remarks
 * The shell of the configurator's ONE notice host (ADR-0067 addendum 2026-11-03): the modal
 * renders every structure-event advisory through it — axis death, unit mismatch, data-path loss
 * (resolved by `editor/editorNotice`). The triggering `set` is one history step, so the undo
 * action restores everything the step changed; the payload-vanish death stays info-only (the
 * next reconcile would re-kill the restored axis). The chrome (6 s auto-hide, bottom-center,
 * centred alert rows) is ONE shape.
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
