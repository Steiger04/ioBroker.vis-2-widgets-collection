import { useEffect, useState } from "react";

const POSSIBLE_MUI_STYLES = [
	"background",
	"background-color",
	"background-image",
	"background-position",
	"background-repeat",
	"background-size",
	"background-clip",
	"background-origin",
	"border",
	"border-width",
	"border-style",
	"border-color",
	"border-radius",
	"color",
	"text-align",
	"text-shadow",
	"font-family",
	"font-size",
	"font-weight",
	"font-style",
	"font-variant",
	"line-height",
	"letter-spacing",
	"word-spacing",
	"box-sizing",
	"box-shadow",
];

const useStyles = (_styles) => {
	const [backgroundStyles, setBackgroundStyles] = useState({});
	const [borderStyles, setBorderStyles] = useState({});
	const [textStyles, setTextStyles] = useState({});
	const [fontStyles, setFontStyles] = useState({});
	const [boxStyles, setBoxStyles] = useState({});

	useEffect(() => {
		const backgroundStyles = {};
		const borderStyles = {};
		const textStyles = {};
		const fontStyles = {};
		const boxStyles = {};

		POSSIBLE_MUI_STYLES.forEach((style) => {
			if (_styles[style]) {
				const camelCaseStyle = style.replace(/(-\w)/g, (text) =>
					text[1].toUpperCase(),
				);

				if (style.includes("background")) {
					backgroundStyles[camelCaseStyle] = _styles[style];
				} else if (style.includes("border")) {
					borderStyles[camelCaseStyle] = _styles[style];
				} else if (
					style.includes("font") ||
					style.includes("line-height") ||
					style.includes("letter-spacing") ||
					style.includes("word-spacing")
				) {
					fontStyles[camelCaseStyle] = _styles[style];
				} else if (style.includes("text") || style.includes("color")) {
					textStyles[camelCaseStyle] = _styles[style];
				} else {
					boxStyles[camelCaseStyle] = _styles[style];
				}
			}
		});

		setBackgroundStyles(backgroundStyles);
		setBorderStyles(borderStyles);
		setTextStyles(textStyles);
		setFontStyles(fontStyles);
		setBoxStyles(boxStyles);
	}, [_styles]);

	return { boxStyles, backgroundStyles, borderStyles, textStyles, fontStyles };
};

export default useStyles;
