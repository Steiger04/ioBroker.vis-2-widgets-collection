/**
 * Curated starter themes for the studio panel.
 *
 * @module lib/theme/presets
 * @remarks
 * A small set of hand-tuned {@link UserTheme} presets the user can apply with one
 * click as a starting point, instead of building from a blank slate. Each preset
 * carries a cohesive, designed palette — `palette.mode` + `primary` + `secondary`
 * + `background` — tuned to its character (Graphit cool, Sunset warm, Daylight
 * clean, Salbei natural, Mono neutral). Status colors (error/warning/info/
 * success) are deliberately NOT set: they stay at MUI's semantic defaults
 * (red/amber/blue/green), which are correct regardless of theme, and the studio
 * shows them via the resolved theme anyway. Every preset must pass
 * {@link module:lib/theme/validateTheme.validateThemeOptions} cleanly.
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
 * Daylight (light, clean blue), Salbei (light, sage), Mono (dark, graphite),
 * Smaragd (dark, emerald), Amethyst (dark, violet), Rubin (dark, red),
 * Bernstein (dark, gold).
 */
export const THEME_PRESETS: readonly ThemePreset[] = [
    {
        id: 'graphit',
        labelKey: 'theme_studio_preset_graphit',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#38bdf8' },
                secondary: { main: '#818cf8' },
                background: { default: '#0f1216', paper: '#181c23' },
            },
        },
    },
    {
        id: 'sunset',
        labelKey: 'theme_studio_preset_sunset',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#f97316' },
                secondary: { main: '#f43f5e' },
                background: { default: '#171210', paper: '#211a16' },
            },
        },
    },
    {
        id: 'daylight',
        labelKey: 'theme_studio_preset_daylight',
        theme: {
            palette: {
                mode: 'light',
                primary: { main: '#2563eb' },
                secondary: { main: '#0ea5e9' },
                background: { default: '#f8fafc', paper: '#ffffff' },
            },
        },
    },
    {
        id: 'salbei',
        labelKey: 'theme_studio_preset_salbei',
        theme: {
            palette: {
                mode: 'light',
                primary: { main: '#5b8c6a' },
                secondary: { main: '#c2724f' },
                background: { default: '#f6f7f3', paper: '#ffffff' },
            },
        },
    },
    {
        id: 'mono',
        labelKey: 'theme_studio_preset_mono',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#a1a1aa' },
                secondary: { main: '#d4d4d8' },
                background: { default: '#18181b', paper: '#27272a' },
            },
        },
    },
    {
        id: 'smaragd',
        labelKey: 'theme_studio_preset_smaragd',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#34d399' },
                secondary: { main: '#2dd4bf' },
                background: { default: '#0d1410', paper: '#161f1a' },
            },
        },
    },
    {
        id: 'amethyst',
        labelKey: 'theme_studio_preset_amethyst',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#a78bfa' },
                secondary: { main: '#f0abfc' },
                background: { default: '#130e1a', paper: '#1d1626' },
            },
        },
    },
    {
        id: 'rubin',
        labelKey: 'theme_studio_preset_rubin',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#f87171' },
                secondary: { main: '#fb7185' },
                background: { default: '#190d0d', paper: '#241414' },
            },
        },
    },
    {
        id: 'bernstein',
        labelKey: 'theme_studio_preset_bernstein',
        theme: {
            palette: {
                mode: 'dark',
                primary: { main: '#fbbf24' },
                secondary: { main: '#facc15' },
                background: { default: '#18140a', paper: '#221c11' },
            },
        },
    },
];
