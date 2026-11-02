/**
 * Palette entry that opens the Theme Studio.
 *
 * @module ThemeConfigWizard/ThemeWizardButton
 * @remarks
 * Rendered by vis-2 in place of a normal palette widget via the
 * `customPalette` field of the {@link module:ThemeConfigWizard} widget info.
 * The button is a mere trigger: the studio ({@link module:ThemeConfigWizard/ThemeStudioPanel})
 * runs in its own React root outside the palette ({@link module:ThemeConfigWizard/studioHost}),
 * so collapsing, filtering or hiding the palette leaves it open. While mounted, the button
 * forwards the palette's `socket` and `themeType` to the host; once it is gone, the open
 * studio keeps the last values.
 */

import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Palette as PaletteIcon } from '@mui/icons-material';
import type React from 'react';
import type { CustomPaletteProperties } from '@iobroker/types-vis-2';

import Generic from '../Generic';
import { openStudio, updateStudio } from './studioHost';

/**
 * Palette button component.
 *
 * @param props - Palette context provided by vis-2 (only these two are used).
 * @param props.socket - ioBroker socket connection, forwarded to the studio.
 * @param props.themeType - vis-2 host dark/light mode, forwarded to the studio.
 * @returns The button that opens (or brings to the front) the Theme Studio.
 */
function ThemeWizardButton({ socket, themeType }: CustomPaletteProperties): React.JSX.Element {
    // Keep an open studio on the current host props (e.g. a dark/light switch in the editor).
    useEffect(() => {
        updateStudio({ socket, themeType });
    }, [socket, themeType]);

    return (
        <Button
            variant="outlined"
            fullWidth
            startIcon={<PaletteIcon />}
            onClick={() => openStudio({ socket, themeType })}
            sx={{ m: 0.5 }}
        >
            {Generic.t('theme_wizard_button')}
        </Button>
    );
}

export default ThemeWizardButton;
