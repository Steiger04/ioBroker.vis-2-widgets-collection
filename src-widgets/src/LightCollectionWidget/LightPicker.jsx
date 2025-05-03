import iro from "@jaames/iro";
import { Box } from "@mui/material";
import React, { useRef, useEffect, useMemo, use } from "react";

const LightPicker = ({ widget, onChange, wheelSize, payload }) => {
	const elementRef = useRef(null);
	const lightPicker = useRef(null);

	const layout = useMemo(() => {
		const layout = [];

		const wheel = {
			component: iro.ui.Wheel,
			options: {
				// wheelLightness: true,
			},
		};

		const box = {
			component: iro.ui.Box,
			options: {},
		};

		const hueSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "hue",
			},
		};

		const saturationSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "saturation",
			},
		};

		const valueSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "value",
			},
		};

		const redSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "red",
			},
		};

		const greenSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "green",
			},
		};

		const blueSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "blue",
			},
		};

		const kelvinSlider = {
			component: iro.ui.Slider,
			options: {
				sliderType: "kelvin",
			},
		};

		switch (widget.data.colorLightType) {
			case "rgb":
			case "r/g/b":
				switch (widget.data.colorLightUIComponent) {
					case "wheel":
						layout.push(wheel);
						layout.push(valueSlider);
						break;

					case "box":
						layout.push(box);
						layout.push(hueSlider);
						break;

					case "slider":
						layout.push(redSlider);
						layout.push(greenSlider);
						layout.push(blueSlider);
						break;
				}
				break;

			case "hsv":
			case "h/s/v":
				switch (widget.data.colorLightUIComponent) {
					case "wheel":
						layout.push(wheel);
						layout.push(valueSlider);
						break;

					case "box":
						layout.push(box);
						layout.push(hueSlider);
						break;

					case "slider":
						layout.push(hueSlider);
						layout.push(saturationSlider);
						layout.push(valueSlider);
						break;
				}
				break;

			case "cct":
				layout.push(valueSlider);
				layout.push(kelvinSlider);
				break;

			default:
				break;
		}

		return layout;
	}, [widget.data.colorLightType, widget.data.colorLightUIComponent]);

	useEffect(() => {
		if (lightPicker.current) return;

		lightPicker.current = new iro.ColorPicker(elementRef.current, {
			display: "flex",
			layoutDirection: "horizontal",
			wheelLightness: true,
		});

		// console.log("LightPicker", lightPicker.current);
	}, []);

	useEffect(() => {
		if (!lightPicker.current) return;

		lightPicker.current.state.layout = layout;
		lightPicker.current.forceUpdate();
	}, [layout]);

	useEffect(() => {
		if (!lightPicker.current || !onChange) return;

		lightPicker.current.on("color:change", onChange);

		return () => lightPicker.current.off("color:change", onChange);
	}, [onChange]);

	useEffect(() => {
		if (!wheelSize) return;
		lightPicker.current.state.sliderSize =
			wheelSize * widget.data.colorLightSliderWidth;
		lightPicker.current.resize(wheelSize);
	}, [wheelSize, widget.data.colorLightSliderWidth]);

	useEffect(() => {
		switch (payload.type) {
			case "rgb":
				lightPicker.current.color.hexString = payload.value;
				break;

			case "r/g/b":
				lightPicker.current.color.rgb = payload.value;
				break;

			case "hsv":
				lightPicker.current.color.hsv = JSON.parse(payload.value);
				break;

			case "h/s/v":
				lightPicker.current.color.hsv = payload.value;
				break;

			default:
				break;
		}
	}, [payload]);

	return (
		<Box
			id="LIGHT_PICKER"
			ref={elementRef}
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				"& .IroColorPicker": {
					width: "100%",
					height: "100%",
					justifyContent: "space-between",
					alignItems: "center",
				},

				"& .IroWheelHue": {
					width: `${wheelSize}px!important`,
					height: `${wheelSize}px!important`,
				},
				"& .IroWheelSaturation": {
					width: `${wheelSize}px!important`,
					height: `${wheelSize}px!important`,
				},
				"& .IroWheelLightness": {
					width: `${wheelSize}px!important`,
					height: `${wheelSize}px!important`,
				},
				"& .IroWheelBorder": {
					width: `${wheelSize}px!important`,
					height: `${wheelSize}px!important`,

					borderColor: (theme) =>
						(widget.data.colorLightBorderColor &&
							`${widget.data.colorLightBorderColor}!important`) ||
						`${theme.palette.primary.main}!important`,

					borderWidth: `${widget.data.colorLightBorderWidth}px!important`,
				},
				"& .IroSliderGradient": {
					borderWidth: `${widget.data.colorLightBorderWidth}px!important`,

					borderColor: (theme) =>
						(widget.data.colorLightBorderColor &&
							`${widget.data.colorLightBorderColor}!important`) ||
						`${theme.palette.primary.main}!important`,
				},

				"& .IroBox": {
					borderWidth: `${widget.data.colorLightBorderWidth}px!important`,

					borderColor: (theme) =>
						(widget.data.colorLightBorderColor &&
							`${widget.data.colorLightBorderColor}!important`) ||
						`${theme.palette.primary.main}!important`,
				},
			}}
		/>
	);
};

export default LightPicker;
