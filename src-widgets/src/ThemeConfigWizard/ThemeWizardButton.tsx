/**
 * Palette entry that opens the theme configuration wizard.
 *
 * @module ThemeConfigWizard/ThemeWizardButton
 * @remarks
 * Rendered by vis-2 in place of a normal palette widget via the
 * `customPalette` field of the {@link module:ThemeConfigWizard} widget info.
 * Shows a button that opens {@link module:ThemeConfigWizard/ThemeWizardDialog},
 * passing through the socket connection received from the palette context.
 */

import { useState } from 'react';
import { Button } from '@mui/material';
import { Palette as PaletteIcon } from '@mui/icons-material';
import type React from 'react';
import type { CustomPaletteProperties } from '@iobroker/types-vis-2';

import Generic from '../Generic';
import ThemeWizardDialog from './ThemeWizardDialog';

/**
 * Palette button component.
 *
 * @param props - Palette context provided by vis-2 (only `socket` is used).
 * @returns A button plus the lazily-mounted theme wizard dialog.
 */
function ThemeWizardButton(props: CustomPaletteProperties): React.JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="outlined"
                fullWidth
                startIcon={<PaletteIcon />}
                onClick={() => setOpen(true)}
                sx={{ m: 0.5 }}
            >
                {Generic.t('theme_wizard_button')}
            </Button>
            <ThemeWizardDialog
                open={open}
                onClose={() => setOpen(false)}
                socket={props.socket}
                themeType={props.themeType}
            />
        </>
    );
}

export default ThemeWizardButton;
