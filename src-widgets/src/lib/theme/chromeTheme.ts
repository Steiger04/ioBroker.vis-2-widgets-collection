/**
 * Chrome theme for editor chrome surfaces (studio panel, ADR-0038).
 *
 * @module lib/theme/chromeTheme
 * @remarks
 * The vis-2 editor renders in the modern admin family (`modernDark` /
 * `modernLight` from @iobroker/gui-components, MUI 9) since the React-19 host
 * update. That package cannot be bundled here (it peers MUI 9 while the set
 * ships MUI 6), so this factory mirrors its palette constants locally: the
 * panel chrome stays in the editor's family without importing it. Palette and
 * the family-typical border radius only — deliberately NO component overrides,
 * those would re-introduce exactly the admin-skin leak the collection theme
 * strips at the host boundary (see useCollectionTheme / ADR-0078).
 */

import { createTheme } from '@mui/material';

import type { Theme } from '@mui/material/styles';

/** Palette constants of the modern admin family (verbatim from ThemeModern). */
const MODERN_DARK = {
    background: '#0A121D',
    paper: '#121A26',
    textPrimary: '#E8EDF5',
    textSecondary: '#8B97A8',
    primary: '#137BF8',
    secondary: '#436A93',
    border: '#1E2837',
    success: '#2EA043',
    warning: '#E8A33D',
    error: '#E5534B',
    info: '#3FA9F5',
} as const;

/** Palette constants of the modern admin family (verbatim from ThemeModern). */
const MODERN_LIGHT = {
    background: '#F4F7FB',
    paper: '#FFFFFF',
    textPrimary: '#101827',
    textSecondary: '#5B6878',
    primary: '#137BF8',
    secondary: '#164477',
    border: '#E2E8F0',
    success: '#1E8E3E',
    warning: '#C77700',
    error: '#D93025',
    info: '#0B72D9',
} as const;

/** Border radius of the modern admin family (its signature rounding). */
const MODERN_RADIUS = 10;

/**
 * Builds the panel chrome theme for the given host mode.
 *
 * @param themeType - vis-2 host dark/light mode.
 * @returns A self-contained MUI theme in the modern admin family.
 */
export function createChromeTheme(themeType: 'dark' | 'light'): Theme {
    const t = themeType === 'dark' ? MODERN_DARK : MODERN_LIGHT;
    return createTheme({
        palette: {
            mode: themeType,
            primary: { main: t.primary },
            secondary: { main: t.secondary },
            background: { default: t.background, paper: t.paper },
            text: { primary: t.textPrimary, secondary: t.textSecondary },
            divider: t.border,
            success: { main: t.success },
            warning: { main: t.warning },
            error: { main: t.error },
            info: { main: t.info },
        },
        shape: { borderRadius: MODERN_RADIUS },
    });
}
