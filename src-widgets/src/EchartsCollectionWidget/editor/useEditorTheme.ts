/**
 * Resolve the configurator's COLLECTION theme + the palette and semantic tokens derived from it
 * (ADR-0027) — the theme the live canvas renders under, not the vis-2 host theme.
 *
 * @module EchartsCollectionWidget/editor/useEditorTheme
 * @remarks
 * The configurator runs under the vis-2 host theme (its chrome must follow vis-2), but the chart —
 * and therefore every colour the configurator previews or offers as an inherit fallback — renders
 * under the collection theme. This hook bridges that: it reads the collection theme via
 * {@link useCollectionTheme} (the same hook the picker uses for its swatch effective colour, and the
 * one source of truth for the studio draft), and derives the palette, the semantic tokens, and the
 * theme itself from it.
 *
 * One hook for every colour-aware editor surface (Colors / Series / Axes sections + the preview),
 * so the resolved theme, palette and tokens never drift between them, and they match the canvas.
 * The reused primitives are {@link resolvePalette}, {@link echartsPalette} and
 * {@link resolveThemeTokens}; nothing colour-related is recomputed ad-hoc in a section.
 */
import { useMemo } from 'react';
import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { Theme } from '@mui/material/styles';

import useCollectionTheme from '../../hooks/useCollectionTheme';
import { echartsPalette, resolveThemeTokens, type ThemeTokens } from '../echartsTheme';
import { resolvePalette } from '../presentation';
import type { EditorState } from './editorState';

export interface EditorTheme {
    /** The collection theme the chart renders under (host theme merged with the user/studio theme). */
    theme: Theme;
    /** Resolved series palette (theme / preset / custom), from the collection theme. */
    palette: string[];
    /** Semantic theme colours for defaults + inherit swatches, dark-mode-aware. */
    themeTokens: ThemeTokens;
}

/** The EditorState fields the theme resolution reads (ADR-0049 slice). */
export type EditorThemeSource = Pick<EditorState, 'paletteSource' | 'palettePreset' | 'paletteCustom' | 'darkMode'>;

/**
 * @param state - The theme-resolution source fields (`paletteSource/Preset/Custom` + `darkMode`).
 * @param socket - ioBroker socket — drilled to `useCollectionTheme` for the theme state.
 * @param hostTheme - The vis-2 host theme the editor chrome runs under (merged onto by the collection theme).
 */
export function useEditorTheme(state: EditorThemeSource, socket: LegacyConnection, hostTheme: Theme): EditorTheme {
    // The collection theme — draft-aware, so studio edits reflect in the configurator live.
    const theme = useCollectionTheme(socket, hostTheme);
    const palette = useMemo(
        () => resolvePalette(state.paletteSource, state.palettePreset, state.paletteCustom, echartsPalette(theme)),
        [state.paletteSource, state.palettePreset, state.paletteCustom, theme],
    );
    const themeTokens = useMemo(() => resolveThemeTokens(theme, state.darkMode), [theme, state.darkMode]);
    return { theme, palette, themeTokens };
}

export default useEditorTheme;
