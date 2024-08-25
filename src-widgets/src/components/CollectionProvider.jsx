import { ThemeProvider, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { createContext, useMemo } from "react";

const CollectionContext = createContext({});

function CollectionProvider({ mode, children, ...props }) {
	const color = props.widget.style.color;
	const textAlign = props.widget.style["text-align"];
	const fontFamily = props.widget.style["font-family"];
	const fontStyle = props.widget.style["font-style"];
	const fontSize = props.widget.style["font-size"];
	const lineHeight = props.widget.style["line-height"];
	const fontWeight = props.widget.style["font-weight"];
	const letterSpacing = props.widget.style["letter-spacing"];

	const _theme = useMemo(() => {
		const mergeOptions =
			mode === "dark"
				? {
						palette: {
							type: "dark",
							primary: {
								main: "#bd0707",
							},
							secondary: {
								main: "#ffc510",
							},
							background: {
								default: "#4c69f6",
								paper: "#4c94f6",
							},
						},
						typography: {
							fontFamily: "Bangers",
						},
					}
				: {};

		return createTheme(
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
		);
	}, [
		mode,
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
