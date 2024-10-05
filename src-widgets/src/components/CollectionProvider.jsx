import { ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { createContext, useMemo } from "react";

const CollectionContext = createContext({});

function CollectionProvider({ theme, children, ...props }) {
	const color = props.widget.style.color;
	const textAlign = props.widget.style["text-align"];
	const fontFamily = props.widget.style["font-family"];
	const fontStyle = props.widget.style["font-style"];
	const fontSize = props.widget.style["font-size"];
	const lineHeight = props.widget.style["line-height"];
	const fontWeight = props.widget.style["font-weight"];
	const letterSpacing = props.widget.style["letter-spacing"];
	const mode = props.mode;

	// console.log("PROPS", props);

	const _theme = useMemo(() => {
		const mergeOptions =
			mode === "dark"
				? {
						palette: {
							mode: "dark",
							/* primary: {
								main: "#0f0",
							},
							background: {
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
							defaultProps: {
								color,
								textAlign,
								fontFamily,
								fontStyle,
								fontSize,
								lineHeight,
								fontWeight,
								letterSpacing,
							},
							styleOverrides: {
								root: {
									wordBreak: "break-word",
								},
							},
						},
					},
				}),
			),
		);
	}, [
		mode,
		theme,
		color,
		textAlign,
		fontFamily,
		fontStyle,
		fontSize,
		lineHeight,
		fontWeight,
		letterSpacing,
	]);

	return (
		<ThemeProvider theme={_theme}>
			<CollectionContext.Provider value={props}>
				{children}
			</CollectionContext.Provider>
		</ThemeProvider>
	);
}

export { CollectionContext };
export default CollectionProvider;
