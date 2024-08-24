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
							mode,
							primary: {
								main: "#90caf9",
							},
							secondary: {
								main: "#ce93d8",
							},
							background: {
								default: "#252525",
								paper: "rgba(57,57,57,1)",
							},
							text: {
								primary: "#4dc3ff",
								secondary: "#c0d2ff",
							},
						},
						typography: {
							fontFamily: "Oswald",
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
