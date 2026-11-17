/**
 * React hook that builds the collection's effective MUI theme.
 *
 * @module hooks/useCollectionTheme
 * @remarks
 * Reads the user theme the canvas shows — the Leinwand-Theme
 * ({@link module:lib/theme/canvasTheme.useCanvasTheme}: the Studio draft, else the stored theme of
 * the shared ioBroker state `vis-2-widgets-collection.0.theme`, subscribed per instance) — and
 * resolves it onto the host theme (plus optional caller overrides) via
 * {@link module:lib/theme/resolveCollectionTheme.resolveCollectionTheme}.
 *
 * Centralizes the theme building so
 * the runtime {@link module:components/CollectionProvider.CollectionProvider} and
 * editor surfaces (which live outside the provider subtree) share one source of
 * truth for the user-configured theme. A caller that also reads the Rahmenvorgaben (the provider,
 * the Vertrags-Adapter) reads the Leinwand-Theme itself and hands it to
 * {@link useCollectionThemeOf}, so it subscribes once.
 */

import { useEffect, useMemo, useRef } from 'react';
import { useCanvasTheme, type CanvasTheme } from '../lib/theme/canvasTheme';
import { clearDraftTheme, getDraftThemeString } from '../lib/theme/draftThemeStore';
import { bundledFamiliesOf, ensureBundledFontFaces } from '../lib/theme/fontCatalogue';
import { injectGoogleFontFaces } from '../lib/theme/googleFonts';
import { resolveCollectionTheme } from '../lib/theme/resolveCollectionTheme';
import { getNestedValue } from '../lib/theme/themeUtils';

import type { Connection } from '@iobroker/gui-components';
import type { Theme, ThemeOptions } from '@mui/material/styles';

/**
 * Builds the effective collection theme from the host theme, optional caller
 * overrides, and the user-supplied theme state.
 *
 * Merge precedence (later wins): `hostTheme` → `overrides` → user `parsedTheme`.
 * The user theme therefore takes priority, matching the previous inline logic in
 * `CollectionProvider`.
 *
 * @param socket - ioBroker socket (`Connection`) for reading/subscribing the theme state.
 * @param hostTheme - The vis-2 host theme to merge onto.
 * @param overrides - Optional collection-specific overrides (e.g. typography). Editors omit this.
 * @returns The merged MUI theme.
 * @example
 * ```tsx
 * // Runtime provider (with widget-style overrides):
 * const theme = useCollectionTheme(socket, context.theme, overrides);
 * // Editor surface (host + user theme only):
 * const theme = useCollectionTheme(props.context.socket, props.context.theme) as VisTheme;
 * ```
 */
export function useCollectionTheme(socket: Connection, hostTheme: Theme, overrides?: ThemeOptions): Theme {
    return useCollectionThemeOf(useCanvasTheme(socket), hostTheme, overrides);
}

/**
 * Builds the effective collection theme from a Leinwand-Theme reading the caller holds already
 * (see {@link useCollectionTheme}): fonts, the per-widget save handoff and the resolution.
 *
 * @param canvas - The caller's reading of the Leinwand-Theme ({@link useCanvasTheme}).
 * @param hostTheme - The vis-2 host theme to merge onto.
 * @param overrides - Optional collection-specific overrides (e.g. typography). Editors omit this.
 * @returns The merged MUI theme.
 */
export function useCollectionThemeOf(canvas: CanvasTheme, hostTheme: Theme, overrides?: ThemeOptions): Theme {
    // The stored theme as this widget read it, the Studio draft, and the theme the canvas shows
    // (the draft while the Studio has one, so canvas widgets preview edits live).
    const { stored: parsedTheme, draft, theme: userTheme } = canvas;

    // Inject @font-face rules for Google Fonts stored in the effective theme
    // (the draft while editing, the persisted theme otherwise). Idempotent.
    useEffect(() => {
        injectGoogleFontFaces(userTheme.googleFonts);
    }, [userTheme.googleFonts]);

    // Ensure the bundled @fontsource faces the effective theme references are
    // injected (ADR-0020: lazy — only the configured family loads, as async
    // chunks; the other nine families never ship over the wire). font-display:
    // swap covers the brief async window.
    const fontFamily = getNestedValue<string>(userTheme, 'typography.fontFamily');
    useEffect(() => {
        void ensureBundledFontFaces(bundledFamiliesOf(fontFamily));
    }, [fontFamily]);

    // Seamless save-handoff: once the persisted state echoes the draft the panel
    // just saved, retire the draft so widgets read the persisted value. They are
    // equal at that instant, so there is no visible change (no flicker). The
    // `changed` guard avoids clearing the draft the moment the panel opens and
    // first pushes a draft that happens to equal the persisted theme.
    // ADR-0020: the draft string comes from the store (stringified ONCE per flush,
    // shared by all widgets); the persisted side is memoized per widget and only
    // recomputed when the state actually echoes a new value.
    const parsedThemeString = useMemo(() => JSON.stringify(parsedTheme), [parsedTheme]);
    const prevParsedTheme = useRef(parsedTheme);
    useEffect(() => {
        const changed = prevParsedTheme.current !== parsedTheme;
        prevParsedTheme.current = parsedTheme;
        if (draft && changed && getDraftThemeString() === parsedThemeString) {
            clearDraftTheme();
        }
    }, [draft, parsedTheme, parsedThemeString]);

    // The shared resolution (sanitized host → overrides → user theme; see
    // lib/theme/resolveCollectionTheme) — the studio resolves its swatches the same way.
    return useMemo(() => resolveCollectionTheme(hostTheme, overrides, userTheme), [hostTheme, overrides, userTheme]);
}

export default useCollectionTheme;
