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
 *
 * The button also reads the stored theme, so the theme the studio opens with (the last known one
 * of the Leinwand-Theme, {@link module:lib/theme/canvasTheme}) stays the stored one: a studio
 * session follows the theme state only while it is open, and the theme changes without it — by a
 * Theme-Auftrag, an MCP client, another browser.
 */

import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Palette as PaletteIcon } from '@mui/icons-material';
import type React from 'react';
import type { CustomPaletteProperties } from '@iobroker/types-vis-2';

import Generic from '../Generic';
import { followStoredTheme } from '../lib/theme/canvasTheme';
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

    // Where the studio can be opened, its seed is the stored theme — never one from before a
    // change made while it was closed.
    useEffect(() => followStoredTheme(socket), [socket]);

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
