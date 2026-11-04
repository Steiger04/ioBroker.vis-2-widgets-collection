/**
 * Preset colours of the Farbwähler read from the Collection theme (ADR-0102, Ticket 05).
 *
 * @module components/colorPicker/ThemePresets
 * @remarks
 * Mounted only inside the open Farbwähler — the popover content is unmounted while closed — so
 * the theme state is read (2 socket requests) only for a picker the user actually opens, never
 * for every colour field on mount.
 */

import type { Connection } from '@iobroker/adapter-react-v5';
import type { Theme } from '@mui/material/styles';
import { useMemo } from 'react';
import type React from 'react';
import { useCollectionTheme } from '../../hooks/useCollectionTheme';

/**
 * Theme palette entries offered as presets, in row order (the library lays out 9 per row): brand
 * colours and the surfaces first, then the status colours and the muted neutrals.
 */
const PRESET_PATHS: ReadonlyArray<readonly [keyof Theme['palette'], string]> = [
    ['primary', 'main'],
    ['primary', 'light'],
    ['primary', 'dark'],
    ['secondary', 'main'],
    ['secondary', 'light'],
    ['secondary', 'dark'],
    ['text', 'primary'],
    ['background', 'default'],
    ['background', 'paper'],
    ['error', 'main'],
    ['warning', 'main'],
    ['info', 'main'],
    ['success', 'main'],
    ['text', 'secondary'],
    ['text', 'disabled'],
];

/**
 * The preset colours of a theme: the palette entries of {@link PRESET_PATHS} that are set.
 *
 * @param theme - Resolved Collection theme.
 * @returns Colour strings in row order (duplicates are dropped by the Farbwähler).
 */
function themePresetColors(theme: Theme): string[] {
    const palette = theme.palette as unknown as Record<string, Record<string, unknown> | undefined>;
    return PRESET_PATHS.map(([group, key]) => palette[group]?.[key]).filter(
        (color): color is string => typeof color === 'string' && color.trim() !== '',
    );
}

/** Props for {@link ThemePresets}. */
export interface ThemePresetsProps {
    /** Connection the Collection theme state is read from. */
    socket: Connection;
    /** Ambient theme of the surface — the base the Collection theme is resolved onto. */
    hostTheme: Theme;
    /** Renders the library with the theme presets. */
    children: (presets: string[]) => React.ReactNode;
}

/**
 * Reads the Collection theme and hands its colours to `children` as presets.
 *
 * @param props - Component props.
 * @param props.socket - Connection for the theme state.
 * @param props.hostTheme - Ambient theme to resolve onto.
 * @param props.children - Render function receiving the presets.
 * @returns What `children` renders.
 */
function ThemePresets({ socket, hostTheme, children }: ThemePresetsProps): React.JSX.Element {
    const theme = useCollectionTheme(socket, hostTheme);
    const presets = useMemo(() => themePresetColors(theme), [theme]);
    return <>{children(presets)}</>;
}

export default ThemePresets;
