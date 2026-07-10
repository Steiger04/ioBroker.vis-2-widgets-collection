/**
 * React context provider for Collection widgets.
 *
 * @module components/CollectionProvider
 * @remarks
 * This module provides:
 * - `CollectionContext`: the shared runtime context for all collection widgets
 * - a `ThemeProvider` wrapper exposing the effective theme (host + collection
 *   overrides + user theme). The shared theme-building/subscribe logic lives in
 *   {@link module:hooks/useCollectionTheme.useCollectionTheme}.
 */

import { createContext, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import useStyles from '../hooks/useStyles';
import useCollectionTheme from '../hooks/useCollectionTheme';

import type { AllCollectionContextProps } from '../types';
import type { ThemeOptions } from '@mui/material/styles';
import { cleanSx } from '../lib/helper/sxUtils';

/**
 * Runtime context used by all Collection widgets.
 */
const CollectionContext = createContext<AllCollectionContextProps>({} as AllCollectionContextProps);

/**
 * Props for {@link module:components/CollectionProvider.default}.
 */
interface CollectionProviderProps {
    /** Child element(s) to render inside the provider. */
    children: JSX.Element | JSX.Element[] | null;
    /** The fully-typed collection context provided by vis-2. */
    context: AllCollectionContextProps;
}

/**
 * Provides `CollectionContext` and an MUI theme for collection widgets.
 *
 * @param props - Provider props.
 * @param props.children - Child element(s) to render inside the provider.
 * @param props.context - The fully-typed collection context provided by vis-2.
 * @returns Provider subtree.
 */
function CollectionProvider({ children, context }: CollectionProviderProps): JSX.Element | JSX.Element[] | null {
    const theme = context.theme;
    const widget = context.widget;
    const socket = context.socket;

    const { fontStyles, textStyles } = useStyles(widget.style || {});

    // Collection-specific overrides layered between the host theme and the user
    // theme (see useCollectionTheme): default typography sizing plus widget
    // font/text styles. Memoized so the merged theme only recomputes when these
    // change — the user theme (highest priority) is read inside the hook.
    const overrides = useMemo<ThemeOptions>(
        () => ({
            palette: {
                text: {
                    primary: textStyles?.color || theme.palette.primary.main,
                },
            },
            components: {
                MuiTypography: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.875rem', // Default to 14px
                            // Merge fontStyles and textStyles into the root style overrides
                            // so CSS properties like textShadow are applied as styles, not props
                            ...cleanSx(fontStyles),
                            ...cleanSx(textStyles),
                        },
                    },
                },
            },
        }),
        [fontStyles, textStyles, theme.palette.primary.main],
    );

    // Effective theme: host → collection overrides → user theme (user wins).
    const _theme = useCollectionTheme(socket, theme, overrides);

    return (
        <ThemeProvider theme={_theme}>
            <CssBaseline />
            <CollectionContext.Provider value={{ ...context, theme: _theme }}>{children}</CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
