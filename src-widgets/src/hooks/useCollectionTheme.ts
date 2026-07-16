/**
 * React hook that builds the collection's effective MUI theme.
 *
 * @module hooks/useCollectionTheme
 * @remarks
 * Subscribes to the shared user-theme ioBroker state
 * (`vis-2-widgets-collection.0.theme`), parses/validates it, and merges it onto
 * the host theme (plus optional caller overrides) via `createTheme`.
 *
 * Centralizes the state-reading + `LegacyConnection.unsubscribeState` handling so
 * the runtime {@link module:components/CollectionProvider.CollectionProvider} and
 * editor surfaces (which live outside the provider subtree) share one source of
 * truth for the user-configured theme.
 */

import { useEffect, useMemo, useState } from 'react';
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { THEME_STATE_ID } from '../lib/constants';
import { injectGoogleFontFaces } from '../lib/theme/googleFonts';
import { validateThemeOptions } from '../lib/theme/validateTheme';

import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { Theme, ThemeOptions } from '@mui/material/styles';

/** Standard MUI typography variant keys that `createTypography` regenerates. */
const TYPOGRAPHY_VARIANT_KEYS = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
    'inherit',
] as const;

/**
 * Returns the host theme without its pre-generated typography variant objects.
 *
 * @remarks
 * `createTypography` runs `deepmerge({ fontFamily, fontSize, …, ...variants },
 * other)` where `other` holds the host's pre-generated variant objects (each
 * carrying the host's fontFamily/fontSize/fontWeight). Composing the host theme
 * with a user theme lets `other` override the freshly generated variants, so the
 * user's `typography.fontFamily`/`fontSize`/`fontWeight*` never reach the
 * Typography variants (mui/material-ui#35939, #37043). Stripping the host's
 * variant objects forces `createTypography` to regenerate them from the merged
 * base values; per-variant overrides the user supplied (merged in via
 * `parsedTheme` after the host) still survive.
 */
function stripHostTypographyVariants(host: Theme): Theme {
    const { typography } = host;
    if (!typography) {
        return host;
    }
    const stripped: Record<string, unknown> = { ...typography };
    for (const key of TYPOGRAPHY_VARIANT_KEYS) {
        delete stripped[key];
    }
    // Also drop `pxToRem`: createTypography reuses a pre-existing pxToRem
    // verbatim, and the host's is baked with `coef = hostFontSize/14`, which
    // would pin every regenerated variant to the host base size and ignore the
    // user's typography.fontSize. Without this, body2 stays 0.875rem regardless
    // of the configured fontSize.
    delete stripped.pxToRem;
    return { ...host, typography: stripped as unknown as Theme['typography'] };
}

/**
 * Builds the effective collection theme from the host theme, optional caller
 * overrides, and the user-supplied theme state.
 *
 * Merge precedence (later wins): `hostTheme` → `overrides` → user `parsedTheme`.
 * The user theme therefore takes priority, matching the previous inline logic in
 * `CollectionProvider`.
 *
 * @param socket - ioBroker socket (`LegacyConnection`) for reading/subscribing the theme state.
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
export function useCollectionTheme(socket: LegacyConnection, hostTheme: Theme, overrides?: ThemeOptions): Theme {
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
            // LegacyConnection.unsubscribeState returns void, not a Promise, so it
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

    // Inject @font-face rules for Google Fonts stored in the theme state.
    // Idempotent — replaces the <style> content whenever the parsed theme changes.
    useEffect(() => {
        injectGoogleFontFaces(parsedTheme.googleFonts);
    }, [parsedTheme.googleFonts]);

    return useMemo(() => {
        // Strip the host's pre-generated typography variant objects so that
        // createTypography regenerates the variants from the merged base
        // values (fontFamily, fontSize, htmlFontSize, fontWeight*,
        // allVariants) plus any per-variant overrides the user supplied.
        // Without this, `deepmerge(generated, other)` in createTypography
        // lets the host's variant objects override the user's base settings
        // (mui/material-ui#35939, #37043) — so family, size and weights never
        // reach the Typography variants. Chain: hostStripped → overrides →
        // parsedTheme (user wins); @mui/utils `deepmerge` takes two sources.
        const hostStripped = stripHostTypographyVariants(hostTheme);
        return createTheme(deepmerge(deepmerge(hostStripped, overrides ?? {}), parsedTheme));
    }, [hostTheme, overrides, parsedTheme]);
}

export default useCollectionTheme;
