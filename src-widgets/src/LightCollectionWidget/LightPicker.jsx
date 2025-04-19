import iro from "@jaames/iro";
import { Box } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import React, { useRef, useEffect } from "react";

const LightPicker = ({ sx = {}, onChange, value, options }) => {
	const elementRef = useRef(null);
	const lightPicker = useRef(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		lightPicker.current = new iro.ColorPicker(elementRef.current, {
			...options,
		});
	}, []);

	useEffect(() => {
		if (!options.width) return;
		lightPicker.current.resize(options.width);
	}, [options.width]);

	useEffect(() => {
		if (!lightPicker.current || !onChange) return;

		lightPicker.current.on("color:change", (color) => onChange(color));

		return () => {
			lightPicker.current.off("color:change", onChange);
		};
	}, [onChange]);

	useEffect(() => {
		if (lightPicker.current.color.hexString !== value)
			lightPicker.current.color.hexString = value;
	}, [value]);

	return <Box ref={elementRef} sx={sx} />;
};

export default LightPicker;
