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
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import useStyles from '../hooks/useStyles';

import type { AllCollectionContextProps } from '../types';
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

    const { fontStyles, textStyles } = useStyles(widget.style || {});

    const _theme = useMemo(() => {
        return createTheme(
            deepmerge(theme, {
                components: {
                    MuiTypography: {
                        styleOverrides: {
                            root: {
                                fontSize: '0.875rem', // Default to 14px
                                // Merge fontStyles and textStyles into the root style overrides
                                // This ensures CSS properties like textShadow are applied as styles, not props
                                ...cleanSx(fontStyles),
                                ...cleanSx(textStyles),
                                color: textStyles?.color || theme.palette.primary.main,
                            },
                        },
                    },
                },
            }),
        );
    }, [theme, fontStyles, textStyles]);

    return (
        <ThemeProvider theme={_theme}>
            <CssBaseline />
            <CollectionContext.Provider value={context}>{children}</CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
