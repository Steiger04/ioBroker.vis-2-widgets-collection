import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Box, Divider, IconButton, Switch } from "@mui/material";
import React, { useContext, useRef } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionBaseImage from "../components/CollectionBaseImage";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useRefDimensions from "../hooks/useElementDimensions";
import useValueState from "../hooks/useValueState";
import LightPicker from "./LightPicker";

function LightCollection() {
	const {
		widget,
		colorLightRgbHexOidObject,
		colorLightRedOidObject,
		colorLightGreenOidObject,
		colorLightBlueOidObject,
		colorLightHsvOidObject,
		colorLightHueOidObject,
		colorLightSaturationOidObject,
		colorLightBrightnessOidObject,
	} = useContext(CollectionContext);

	const { data } = useData("");

	// ON/OFF
	const { value: onOffValue, setValueState: setOnOffValueState } =
		useValueState("colorLightSwitchOid");

	// RGB
	const { value: rgbHexValue, setValueState: setRgbHexValueState } =
		useValueState("colorLightRgbHexOid");

	// R/G/B
	const { value: redValue, setValueState: setRedValueState } =
		useValueState("colorLightRedOid");
	const { value: greenValue, setValueState: setGreenValueState } =
		useValueState("colorLightGreenOid");
	const { value: blueValue, setValueState: setBlueValueState } =
		useValueState("colorLightBlueOid");

	// HSV
	const { value: hsvValue, setValueState: setHsvValueState } =
		useValueState("colorLightHsvOid");

	// H/S/V
	const { value: hueValue, setValueState: setHueValueState } =
		useValueState("colorLightHueOid");
	const { value: saturationValue, setValueState: setSaturationValueState } =
		useValueState("colorLightSaturationOid");
	const { value: brightnessValue, setValueState: setBrightnessValueState } =
		useValueState("colorLightBrightnessOid");

	const wheelRef = useRef(null);
	const { width: wheelWidth, height: wheelHeight } = useRefDimensions(
		wheelRef?.current,
	);
	const wheelSize =
		wheelWidth <= wheelHeight
			? Math.max(wheelWidth, wheelHeight)
			: Math.min(wheelWidth, wheelHeight);

	const changeHandler = (color, change) => {
		const type = widget.data.colorLightType;

		switch (type) {
			case "rgb":
				if (colorLightRgbHexOidObject && !colorLightRgbHexOidObject.noObject)
					setRgbHexValueState(color.hexString || "#000000");
				break;

			case "r/g/b":
				if (colorLightRedOidObject && !colorLightRedOidObject.noObject)
					setRedValueState(color.red || 0);
				if (colorLightGreenOidObject && !colorLightGreenOidObject.noObject)
					setGreenValueState(color.green || 0);
				if (colorLightBlueOidObject && !colorLightBlueOidObject.noObject)
					setBlueValueState(color.blue || 0);
				break;

			case "hsv":
				if (colorLightHsvOidObject && !colorLightHsvOidObject.noObject)
					setHsvValueState(
						JSON.stringify(color.hsv) || JSON.stringify({ h: 0, s: 0, v: 0 }),
					);
				break;

			case "h/s/v":
				if (
					change.h &&
					colorLightHueOidObject &&
					!colorLightHueOidObject.noObject
				)
					setHueValueState(color.hsv.h || 0);
				if (
					change.s &&
					colorLightSaturationOidObject &&
					!colorLightSaturationOidObject.noObject
				)
					setSaturationValueState(color.hsv.s || 0);
				if (
					change.v &&
					colorLightBrightnessOidObject &&
					!colorLightBrightnessOidObject.noObject
				)
					setBrightnessValueState(color.hsv.v || 0);
				break;

			default:
				break;
		}
	};

	const payload = (type) => {
		switch (type) {
			case "rgb":
				return { value: rgbHexValue || "#000000", type: "rgb" };

			case "r/g/b":
				return {
					value: {
						r: redValue || 0,
						g: greenValue || 0,
						b: blueValue || 0,
					},
					type: "r/g/b",
				};

			case "hsv":
				return {
					value: hsvValue || JSON.stringify({ h: 0, s: 0, v: 0 }),
					type: "hsv",
				};

			case "h/s/v":
				return {
					value: {
						h: hueValue || 0,
						s: saturationValue || 0,
						v: brightnessValue || 0,
					},
					type: "h/s/v",
				};

			default:
				return { value: "#000000", type: "rgb" };
		}
	};

	const payloadValue = payload(widget.data.colorLightType).value;
	return (
		<CollectionBase
			sx={{
				alignItems: "flex-start",
			}}
			data={data}
			oidValue={
				typeof payloadValue === "object"
					? JSON.stringify(payloadValue)
					: payloadValue
			}
		>
			<CollectionBaseImage data={data} widget={widget} />
			<Box
				sx={{
					pt: 0.5,
				}}
			>
				<IconButton
					onClick={() => {
						if (onOffValue) {
							setOnOffValueState(false);
						} else {
							setOnOffValueState(true);
						}
					}}
				>
					<PowerSettingsNewIcon
						sx={{
							color: onOffValue ? "red" : "green",
							width: "1.3em",
							height: "1.3em",
						}}
					/>
				</IconButton>
			</Box>
			<Divider orientation="vertical" flexItem variant="middle" />
			<Box
				id="PADDING"
				sx={{
					width: "100%",
					height: "100%",

					p: Number(widget.data.colorLightPadding),
				}}
			>
				<Box
					id="REF"
					ref={wheelRef}
					sx={{
						width: "100%",
						height: "100%",
					}}
				>
					<LightPicker
						widget={widget}
						onChange={changeHandler}
						payload={payload(widget.data.colorLightType)}
						wheelSize={wheelSize}
					/>
				</Box>
			</Box>
		</CollectionBase>
	);
}

export default LightCollection;
