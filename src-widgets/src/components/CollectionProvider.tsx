/**
 * React context provider for Collection widgets.
 *
 * @module components/CollectionProvider
 * @remarks
 * This module provides:
 * - `CollectionContext`: the shared runtime context for all collection widgets
 * - a ThemeProvider wrapper that merges the vis theme with a dark-mode override
 */

import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import type { AllCollectionContextProps } from '../types';

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
    const mode = context.mode;
    const theme = context.theme;

    const _theme = useMemo(() => {
        const mergeOptions =
            mode === 'dark'
                ? {
                      palette: {
                          mode: 'dark',
                      },
                  }
                : {};

        return createTheme(
            deepmerge(
                theme,
                deepmerge(mergeOptions, {
                    components: {
                        MuiTypography: {},
                    },
                }),
            ),
        );
    }, [mode, theme]);

    return (
        <ThemeProvider theme={_theme}>
            <CollectionContext.Provider value={context}>{children}</CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
