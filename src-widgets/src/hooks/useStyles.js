import { useEffect, useMemo, useState } from "react";

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

	const possibleMuiStyles = useMemo(() => {
		// console.log("possibleMuiStyles");
		const _backgroundStyles = {};
		const _borderStyles = {};
		const _textStyles = {};
		const _fontStyles = {};
		const _boxStyles = {};

		POSSIBLE_MUI_STYLES.forEach((style) => {
			if (_styles[style]) {
				const _camelCaseStyle = style.replace(/(-\w)/g, (text) =>
					text[1].toUpperCase(),
				);

				// console.log("_camelCaseStyle", _camelCaseStyle);

				if (style.includes("background")) {
					_backgroundStyles[_camelCaseStyle] = _styles[style];
				} else if (style.includes("border")) {
					_borderStyles[_camelCaseStyle] = _styles[style];
				} else if (
					style.includes("font") ||
					style.includes("line-height") ||
					style.includes("letter-spacing") ||
					style.includes("word-spacing")
				) {
					_fontStyles[_camelCaseStyle] = _styles[style];
				} else if (style.includes("text") || style.includes("color")) {
					_textStyles[_camelCaseStyle] = _styles[style];
				} else {
					_boxStyles[_camelCaseStyle] = _styles[style];
				}
			}
		});

		return {
			_backgroundStyles,
			_borderStyles,
			_textStyles,
			_fontStyles,
			_boxStyles,
		};
	}, [_styles]);

	useEffect(() => {
		setBackgroundStyles(possibleMuiStyles._backgroundStyles);
		setBorderStyles(possibleMuiStyles._borderStyles);
		setTextStyles(possibleMuiStyles._textStyles);
		setFontStyles(possibleMuiStyles._fontStyles);
		setBoxStyles(possibleMuiStyles._boxStyles);
	}, [possibleMuiStyles]);

	return { boxStyles, backgroundStyles, borderStyles, textStyles, fontStyles };
};

export default useStyles;
