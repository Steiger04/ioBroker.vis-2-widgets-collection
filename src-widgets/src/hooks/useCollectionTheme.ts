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
import { validateThemeOptions } from '../lib/theme/validateTheme';

import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { Theme, ThemeOptions } from '@mui/material/styles';

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

    return useMemo(
        () =>
            createTheme(
                // Chain merges: hostTheme → overrides → parsedTheme (user wins).
                // @mui/utils `deepmerge` takes only two sources, so it must be chained.
                deepmerge(deepmerge(hostTheme, overrides ?? {}), parsedTheme),
            ),
        [hostTheme, overrides, parsedTheme],
    );
}

export default useCollectionTheme;
