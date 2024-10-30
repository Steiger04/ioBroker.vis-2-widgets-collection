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
	"box-sizing",
	"border",
	"border-width",
	"border-style",
	"border-color",
	"border-radius",
	"box-shadow",
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
];

const useStyles = (_styles) => {
	const [styles, setStyles] = useState({});

	useEffect(() => {
		const newStyles = {};

		POSSIBLE_MUI_STYLES.forEach((style) => {
			if (_styles[style]) {
				newStyles[style.replace(/(-\w)/g, (text) => text[1].toUpperCase())] =
					_styles[style];
			}
		});

		setStyles(newStyles);
	}, [_styles]);

	return styles;
};

export default useStyles;
