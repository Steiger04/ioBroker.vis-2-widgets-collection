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

import { deepmerge } from '@mui/utils';

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

/** The palette leaf paths a preset sets — the full apply + active-detection surface. */
const PRESET_PALETTE_PATHS = [
    'palette.mode',
    'palette.primary.main',
    'palette.secondary.main',
    'palette.background.default',
    'palette.background.paper',
] as const;

/** Reads `main` off a palette colour slot (MUI's PaletteColorOptions union hides it from TS). */
const slotMain = (slot: unknown): string | undefined =>
    typeof slot === 'object' && slot !== null ? (slot as { main?: string }).main : undefined;

/**
 * The four colours a preset card shows: surfaces + accents. Kept as the single leaf-access
 * point so card rendering and active detection never drift apart.
 */
export function presetColors(preset: ThemePreset): {
    mode: string | undefined;
    primary: string | undefined;
    secondary: string | undefined;
    background: string | undefined;
    paper: string | undefined;
} {
    const palette = preset.theme.palette;
    const background = palette?.background;
    return {
        mode: palette?.mode,
        primary: slotMain(palette?.primary),
        secondary: slotMain(palette?.secondary),
        background: typeof background === 'object' ? background.default : undefined,
        paper: typeof background === 'object' ? background.paper : undefined,
    };
}

/**
 * Reads a preset palette leaf by dot path. Kept local (not themeUtils.getNestedValue)
 * because the paths are fixed and the preset shape is known — plain property hops.
 */
function presetLeaf(preset: ThemePreset, path: (typeof PRESET_PALETTE_PATHS)[number]): string | undefined {
    const colors = presetColors(preset);
    switch (path) {
        case 'palette.mode':
            return colors.mode;
        case 'palette.primary.main':
            return colors.primary;
        case 'palette.secondary.main':
            return colors.secondary;
        case 'palette.background.default':
            return colors.background;
        case 'palette.background.paper':
            return colors.paper;
    }
}

/** Case-insensitive colour equality (`#38BDF8` from a hex input matches `#38bdf8`). */
function sameColor(a: string | undefined, b: string | undefined): boolean {
    return (a ?? '').toLowerCase() === (b ?? '').toLowerCase();
}

/**
 * Applies a preset palette-only (ADR-0020): the preset's palette leaves merge INTO the
 * current palette — the user's other palette overrides (divider, text, status) and the
 * whole rest of the theme (typography, corners, spacing) survive. Discrete action: the
 * caller records it as ONE undo step.
 */
export function applyPreset(current: UserTheme, preset: ThemePreset): UserTheme {
    const presetPalette = preset.theme.palette;
    if (!presetPalette) {
        return current;
    }
    const currentPalette = (current.palette ?? {}) as Record<string, unknown>;
    return {
        ...current,
        palette: deepmerge(currentPalette, presetPalette as Record<string, unknown>),
    };
}

/**
 * True when every palette leaf the preset sets already matches the stored theme —
 * i.e. applying the preset would be a no-op. Used to mark the active preset card.
 * Compares colours case-insensitively; a stored-but-equal theme counts as active.
 */
export function isPresetActive(theme: UserTheme, preset: ThemePreset): boolean {
    const palette = theme.palette as Record<string, unknown> | undefined;
    if (!palette) {
        return false;
    }
    return PRESET_PALETTE_PATHS.every(path => {
        const want = presetLeaf(preset, path);
        const segments = path.split('.').slice(1); // strip the leading "palette"
        let node: unknown = palette;
        for (const segment of segments) {
            if (typeof node !== 'object' || node === null) {
                return false;
            }
            node = (node as Record<string, unknown>)[segment];
        }
        return sameColor(typeof node === 'string' ? node : undefined, want);
    });
}
