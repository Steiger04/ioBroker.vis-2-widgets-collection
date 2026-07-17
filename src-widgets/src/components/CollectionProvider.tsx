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
import { GlobalStyles, ThemeProvider } from '@mui/material';

import useStyles from '../hooks/useStyles';
import useCollectionTheme from '../hooks/useCollectionTheme';

// Side-effect: bundle the curated @font-face rules so bundled font families
// selected in the theme wizard are available to runtime widgets.
import '../lib/theme/fontCatalogue';

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
    // theme (see useCollectionTheme): widget-level font/text styles. Memoized so
    // the merged theme only recomputes when these change — the user theme
    // (highest priority) is read inside the hook. No hardcoded fontSize here:
    // widget text sizes come from the theme's typography variants, regenerated
    // from the user's `typography.fontSize` in useCollectionTheme.
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

    // No <CssBaseline />: MUI's CssBaseline also spreads theme.typography.body1
    // — whose fontFamily the user's choice is forced onto (see
    // useCollectionTheme) — onto the global <body>, leaking the configured font
    // into vis-2's palette and attributes panels. But vis-2 itself sets NO global
    // `box-sizing`, so dropping CssBaseline entirely reverted MUI components
    // inside widgets to `content-box` and broke horizontal padding (the BASE-BOX-1
    // container has width:100% + overflow:hidden + p; under content-box the
    // horizontal padding overflows and gets clipped). Restore only the border-box
    // reset, scoped to nothing extra — without the body-font leak.
    return (
        <ThemeProvider theme={_theme}>
            <GlobalStyles
                styles={{
                    html: { boxSizing: 'border-box' },
                    '*, *::before, *::after': { boxSizing: 'inherit' },
                }}
            />
            <CollectionContext.Provider value={{ ...context, theme: _theme }}>{children}</CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
