import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../components/CollectionProvider";

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
	// "color",
	// "text-align",
	"text-shadow",
	// "font-family",
	// "font-size",
	// "font-weight",
	// "font-style",
	"font-variant",
	// "line-height",
	// "letter-spacing",
	"word-spacing",
];

function StateCollection2() {
	const [styles, setStyles] = useState({});
	const { widget } = useContext(CollectionContext);

	console.log("inside StateCollection2 -> widget", widget.style);

	useEffect(() => {
		const newStyles = {};

		POSSIBLE_MUI_STYLES.forEach((style) => {
			if (widget.style[style]) {
				newStyles[style.replace(/(-\w)/g, (text) => text[1].toUpperCase())] =
					widget.style[style];
			}
		});

		setStyles(newStyles);

		console.log("inside StateCollection2 -> newStyles", newStyles);
	}, [widget.style]);

	return (
		<Paper
			elevation={0}
			square={widget.data.square}
			variant={widget.data.outlined ? "outlined" : "elevation"}
			sx={{
				height: "100%",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflow: "hidden",
				boxSizing: "border-box",
				...styles,
			}}
		>
			<Typography>State Collection2</Typography>
		</Paper>
	);
}

export default StateCollection2;
