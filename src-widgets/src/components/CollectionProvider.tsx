import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

import type { AllCollectionContextProps } from '../newTypes';

const CollectionContext = createContext<AllCollectionContextProps>({} as AllCollectionContextProps);

function CollectionProvider({
    children,
    context,
}: {
    children: JSX.Element | JSX.Element[] | null;
    context: AllCollectionContextProps;
}): JSX.Element | JSX.Element[] | null {
    /* const _context = useMemo(() => {
		return context;
	}, [context]); */
    /* const color = context.widget.style.color;
	const textAlign = context.widget.style["text-align"];
	const fontFamily = context.widget.style["font-family"];
	const fontStyle = context.widget.style["font-style"];
	const fontSize = context.widget.style["font-size"];
	const lineHeight = context.widget.style["line-height"];
	const fontWeight = context.widget.style["font-weight"];
	const letterSpacing = context.widget.style["letter-spacing"]; */
    const mode = context.mode;
    const theme = context.theme;

    // console.log("CONTEXT", context);

    const _theme = useMemo(() => {
        // console.log("inside useMemo");
        const mergeOptions =
            mode === 'dark'
                ? {
                      palette: {
                          mode: 'dark',
                          /* primary: {
								main: "#0f0",
							}, */
                          /* background: {
								default: "#111111",
								paper: "#212121",
							}, */
                      },
                      /* typography: {
							fontFamily: "Open Sans",
							h1: {
								fontFamily: "Ubuntu Mono",
							},
							h2: {
								fontFamily: "Ubuntu Mono",
							},
							h3: {
								fontFamily: "Ubuntu Mono",
							},
							h4: {
								fontFamily: "Ubuntu Mono",
							},
							h6: {
								fontFamily: "Ubuntu Mono",
							},
							h5: {
								fontFamily: "Ubuntu Mono",
							},
							subtitle1: {
								fontFamily: "Ubuntu Mono",
							},
							subtitle2: {
								fontFamily: "Ubuntu Mono",
							},
							button: {
								fontFamily: "Ubuntu Mono",
								fontWeight: 900,
							},
							overline: {
								fontFamily: "Ubuntu Mono",
							},
						}, */
                  }
                : {};

        return createTheme(
            deepmerge(
                theme,
                deepmerge(mergeOptions, {
                    components: {
                        MuiTypography: {
                            /* defaultProps: {
								color,
								textAlign,
								fontFamily,
								fontStyle,
								fontSize,
								lineHeight,
								fontWeight,
								letterSpacing,
							}, */
                            /* styleOverrides: {
								root: {
									wordBreak: "break-word",
								},
							}, */
                        },
                    },
                }),
            ),
        );
    }, [
        mode,
        theme,
        /* color,
		textAlign,
		fontFamily,
		fontStyle,
		fontSize,
		lineHeight,
		fontWeight,
		letterSpacing, */
    ]);

    return (
        <ThemeProvider theme={_theme}>
            <CollectionContext.Provider value={context}>{children}</CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
