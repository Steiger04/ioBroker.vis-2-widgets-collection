/**
 * The shared blocking "discard unsaved changes?" guard dialog (ADR-0038).
 *
 * @module components/ConfirmDiscardDialog
 * @remarks
 * Every dirty-close path of a configurator (backdrop, Escape, Cancel, X) funnels into this
 * dialog — the honest guard that replaces auto-hiding snackbars. Title, buttons and semantics
 * are the shared configurator vocabulary; only the explanatory text differs per editor.
 */

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import type React from 'react';

import Generic from '../Generic';

/** Props for {@link ConfirmDiscardDialog}. */
export interface ConfirmDiscardDialogProps {
    /** Whether the dialog is open. */
    open: boolean;
    /** Editor-specific explanatory text (what closing would discard). */
    text: string;
    /** Callback when the user stays (dialog closes, editor stays open). */
    onCancel: () => void;
    /** Callback when the user confirms discarding (editor closes). */
    onConfirm: () => void;
}

/**
 * Blocking discard guard — "Änderungen verwerfen?" with Stay / Discard.
 *
 * @param props - Component props.
 * @param props.open - Whether the dialog is open.
 * @param props.text - Editor-specific explanatory text.
 * @param props.onCancel - The user stays.
 * @param props.onConfirm - The user discards.
 * @returns The guard dialog.
 */
function ConfirmDiscardDialog({ open, text, onCancel, onConfirm }: ConfirmDiscardDialogProps): React.JSX.Element {
    return (
        <Dialog
            open={open}
            onClose={onCancel}
        >
            <DialogTitle>{Generic.t('theme_studio_discard_title')}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onCancel}
                    color="inherit"
                >
                    {Generic.t('cancel')}
                </Button>
                <Button
                    onClick={onConfirm}
                    color="error"
                    variant="contained"
                >
                    {Generic.t('theme_studio_discard')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDiscardDialog;
