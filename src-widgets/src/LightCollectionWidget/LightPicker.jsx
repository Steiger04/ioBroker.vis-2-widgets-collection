import iro from "@jaames/iro";
import { Box } from "@mui/material";
import React, { useRef, useEffect, useMemo, forwardRef, use } from "react";

const LightPicker = forwardRef(
	(
		{ widget, initColor, cctLight, onMount, onChange, wheelSize, cctBri = false },
		ref,
	) => {
		const elementRef = useRef(null);
		const lightPicker = useRef(null);

		const layout = useMemo(() => {
			const layout = [];

			const wheel = {
				component: iro.ui.Wheel,
				options: {},
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
					sliderShape: "circle",
					minTemperature: widget.data.colorLightCtMin,
					maxTemperature: widget.data.colorLightCtMax,
				},
			};

			let type;
			if (cctLight) {
				type = "cct";
			} else {
				type = widget.data.colorLightType;
			}

			console.log("LightPicker: type", type);

			switch (type) {
				case "rgb":
				case "rgbcct":
				case "r/g/b":
				case "r/g/b/cct":
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

				case "h/s/v":
				case "h/s/v/cct":
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
					if (!cctBri) layout.push(kelvinSlider);
					else layout.push(valueSlider);
					break;

				default:
					break;
			}

			return layout;
		}, [
			widget.data.colorLightType,
			widget.data.colorLightUIComponent,
			widget.data.colorLightCtMin,
			widget.data.colorLightCtMax,
			cctBri,
			cctLight,
		]);

		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
			console.log("LightPicker: M O U N T");

			ref.current = lightPicker.current = new iro.ColorPicker(
				elementRef.current,
				{
					display: "flex",
					layoutDirection: "horizontal",
					wheelLightness: widget.data.colorWheelLightness,
					layout: layout,
				},
			);

			lightPicker.current.state.sliderSize =
				wheelSize * widget.data.colorLightSliderWidth;
			lightPicker.current.resize(wheelSize);
			lightPicker.current.forceUpdate();

			lightPicker.current.on("mount", onMount);
			lightPicker.current.on("input:change", onChange);

			return () => {
				console.log("LightPicker: C L E A N U P");
				lightPicker.current.off("mount", onMount);
				lightPicker.current.off("input:change", onChange);
				lightPicker.current.base.remove();
				lightPicker.current = null;
			};
		}, [layout]);

		useEffect(() => {
			if (!initColor || !lightPicker.current) return;

			console.log("LightPicker: Update color", initColor);

			// const colorType = widget.data.colorLightType;

			let type;
			if (cctLight) {
				type = "cct";
			} else {
				type = widget.data.colorLightType;
			}

			switch (type) {
				case "cct":
					if (cctBri) {
						lightPicker.current.color.kelvin = initColor.kelvin;
						lightPicker.current.color.value = initColor.value;
					} else lightPicker.current.color.kelvin = initColor.kelvin;
					break;

				case "rgb":
				case "rgbcct":
					lightPicker.current.color.hexString = initColor.hexString;
					break;

				case "r/g/b":
				case "r/g/b/cct":
					lightPicker.current.color.rgb = {
						r: initColor.red,
						g: initColor.green,
						b: initColor.blue,
					};
					break;

				case "h/s/v":
				case "h/s/v/cct":
					lightPicker.current.color.hue = initColor.hue;
					lightPicker.current.color.saturation = initColor.saturation;
					lightPicker.current.color.value = initColor.value;
					break;

				default:
					break;
			}
		}, [cctBri, initColor, cctLight, widget.data.colorLightType]);

		useEffect(() => {
			// if (!wheelSize) return;
			setTimeout(() => {
				lightPicker.current.state.sliderSize =
					wheelSize * widget.data.colorLightSliderWidth;
				lightPicker.current.resize(wheelSize);
			}, 0);
		}, [wheelSize, widget.data.colorLightSliderWidth]);

		useEffect(() => {
			if (!lightPicker.current) return;

			lightPicker.current.state.wheelLightness =
				widget.data.colorWheelLightness;

			lightPicker.current.forceUpdate();
		}, [widget.data.colorWheelLightness]);

		return (
			<Box
				id="LIGHT_PICKER"
				ref={elementRef}
				sx={{
					overflow: "visible",
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
	},
);

export default LightPicker;
