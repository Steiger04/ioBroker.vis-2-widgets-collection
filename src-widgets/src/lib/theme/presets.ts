/**
 * Curated starter themes for the studio panel.
 *
 * @module lib/theme/presets
 * @remarks
 * A small set of hand-tuned {@link UserTheme} presets the user can apply with one
 * click as a starting point, instead of building from a blank slate. Each is
 * accent-driven (a `palette.mode` + a `palette.primary.main` MUI derives the rest
 * from) so the derived-secondary logic applies consistently. Every preset must
 * pass {@link module:lib/theme/validateTheme.validateThemeOptions} cleanly.
 */

import type { UserTheme } from './themeTypes';

/** One selectable preset. */
export interface ThemePreset {
    /** Stable id. */
    id: string;
    /** i18n key for the display name. */
    labelKey: string;
    /** The partial theme to load when the preset is clicked. */
    theme: UserTheme;
}

/**
 * Curated preset themes, in display order.
 *
 * Deliberately not the generic AI-default looks (cream+terracotta / near-black+
 * acid-green / broadsheet): Graphit (dark, cool cyan), Sunset (dark, warm orange),
 * Daylight (light, clean blue), Salbei (light, sage), Mono (dark, graphite).
 */
export const THEME_PRESETS: readonly ThemePreset[] = [
    {
        id: 'graphit',
        labelKey: 'theme_studio_preset_graphit',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#38bdf8' },
                background: { default: '#0f1216', paper: '#181c23' },
            },
        },
    },
    {
        id: 'sunset',
        labelKey: 'theme_studio_preset_sunset',
        theme: { palette: { mode: 'dark', primary: { main: '#f97316' } } },
    },
    {
        id: 'daylight',
        labelKey: 'theme_studio_preset_daylight',
        theme: { palette: { mode: 'light', primary: { main: '#2563eb' } } },
    },
    {
        id: 'salbei',
        labelKey: 'theme_studio_preset_salbei',
        theme: { palette: { mode: 'light', primary: { main: '#5b8c6a' } } },
    },
    {
        id: 'mono',
        labelKey: 'theme_studio_preset_mono',
        theme: { palette: { mode: 'dark', primary: { main: '#a1a1aa' } } },
    },
];
