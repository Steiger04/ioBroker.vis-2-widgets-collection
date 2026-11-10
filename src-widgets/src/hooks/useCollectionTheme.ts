/**
 * React hook that builds the collection's effective MUI theme.
 *
 * @module hooks/useCollectionTheme
 * @remarks
 * Subscribes to the shared user-theme ioBroker state
 * (`vis-2-widgets-collection.0.theme`), parses/validates it, and resolves it onto
 * the host theme (plus optional caller overrides) via
 * {@link module:lib/theme/resolveCollectionTheme.resolveCollectionTheme}.
 *
 * Centralizes the state-reading + `Connection.unsubscribeState` handling so
 * the runtime {@link module:components/CollectionProvider.CollectionProvider} and
 * editor surfaces (which live outside the provider subtree) share one source of
 * truth for the user-configured theme.
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { THEME_STATE_ID } from '../lib/constants';
import { clearDraftTheme, getDraftThemeString } from '../lib/theme/draftThemeStore';
import { bundledFamiliesOf, ensureBundledFontFaces } from '../lib/theme/fontCatalogue';
import { injectGoogleFontFaces } from '../lib/theme/googleFonts';
import { resolveCollectionTheme } from '../lib/theme/resolveCollectionTheme';
import { validateThemeOptions } from '../lib/theme/validateTheme';
import { getNestedValue } from '../lib/theme/themeUtils';
import useDraftTheme from './useDraftTheme';

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
    // User-supplied MUI theme JSON, read from the shared ioBroker state.
    const [themeJson, setThemeJson] = useState('');

    useEffect(() => {
        let active = true;
        const handler = (_id: string, state: ioBroker.State | null | undefined): void => {
            if (active) {
                setThemeJson(typeof state?.val === 'string' ? state.val : '');
            }
        };
        socket
            .getState(THEME_STATE_ID)
            .then((state: ioBroker.State | null | undefined) => {
                if (active) {
                    setThemeJson(typeof state?.val === 'string' ? state.val : '');
                }
            })
            .catch((e: unknown) => console.error(`Cannot read theme state ${THEME_STATE_ID}: ${e}`));
        socket
            .subscribeState(THEME_STATE_ID, handler)
            .catch((e: unknown) => console.error(`Cannot subscribe theme state ${THEME_STATE_ID}: ${e}`));
        return () => {
            active = false;
            // Connection.unsubscribeState returns void, not a Promise, so it
            // cannot be chained with .catch(). Wrap it to avoid an uncaught error
            // during effect cleanup (e.g. React StrictMode double-invoke / unmount).
            try {
                socket.unsubscribeState(THEME_STATE_ID, handler);
            } catch (e) {
                console.error(`Cannot unsubscribe theme state ${THEME_STATE_ID}: ${e}`);
            }
        };
    }, [socket]);

    // Parsed, validated user theme; empty object when unset or invalid.
    // JSON is only touched here at the ioBroker state boundary — the validator
    // itself works on the plain object. A corrupt/invalid state must never crash
    // rendering, hence the try/catch and `{}` fallback.
    const parsedTheme = useMemo(() => {
        if (!themeJson) {
            return {};
        }
        try {
            const result = validateThemeOptions(JSON.parse(themeJson));
            return result.isValid ? (result.theme ?? {}) : {};
        } catch {
            return {};
        }
    }, [themeJson]);

    // In-progress draft from the studio panel (null when the panel is closed).
    // The draft wins over the persisted theme so canvas widgets preview edits
    // live; when null, widgets fall back to the persisted theme.
    const draft = useDraftTheme();
    const userTheme = draft ?? parsedTheme;

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
