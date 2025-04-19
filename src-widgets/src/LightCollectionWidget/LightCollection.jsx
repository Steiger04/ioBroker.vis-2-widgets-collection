import iro from "@jaames/iro";
import { Box, Stack } from "@mui/material";
import React, { useContext, useRef } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useRefDimensions from "../hooks/useElementDimensions";
import useValueState from "../hooks/useValueState";
import LightPicker from "./LightPicker";

function LightCollection() {
	const { widget } = useContext(CollectionContext);
	const { data } = useData("oid");

	const { value: rgbHexValue, setValueState: setrgbHexValueState } =
		useValueState("colorLightRgbHexOid");

	// console.log("setrgbHexValueState", setrgbHexValueState);

	const baseRef = useRef(null);
	const { width, height } = useRefDimensions(baseRef?.current);

	const size = width <= height ? width : height;

	return (
		<CollectionBase data={data} oidValue={rgbHexValue}>
			<Box
				sx={{
					width: "100%",
					height: "100%",

					p: Number(widget.data.colorLightPadding),
				}}
			>
				<Stack
					direction="row"
					spacing={2}
					ref={baseRef}
					sx={{
						width: "100%",
						height: "100%",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<LightPicker
						sx={{
							"& .iroColorPicker": {},

							"& .IroWheelBorder": {
								borderColor: `${rgbHexValue}!important` || "#000000!important",
							},
						}}
						onChange={(color) =>
							setrgbHexValueState(color.hexString || "#000000")
						}
						value={rgbHexValue || "#000000"}
						options={{
							width: size,

							borderColor: "#fff",
							display: "flex",
							layoutDirection: "horizontal",
							layout: [
								{
									component: iro.ui.Slider,
									options: {
										sliderSize: 30,
										// borderWidth: 8,
										sliderType: "kelvin",
										minTemperature: 2000,
										maxTemperature: 6500,
									},
								},
							],
						}}
					/>
					<LightPicker
						sx={{
							"& .iroColorPicker": {},

							"& .IroWheelBorder": {
								borderColor: `${rgbHexValue}!important` || "#000000!important",
							},
						}}
						onChange={(color) =>
							setrgbHexValueState(color.hexString || "#000000")
						}
						value={rgbHexValue || "#000000"}
						options={{
							width: size - 92,

							borderColor: "#fff",
							display: "flex",
							layoutDirection: "horizontal",
							layout: [
								{
									component: iro.ui.Wheel,
									options: {
										// borderWidth: 8,
										wheelLightness: true,
									},
								},
							],
						}}
					/>
					<LightPicker
						sx={{
							"& .iroColorPicker": {},

							"& .IroWheelBorder": {
								borderColor: `${rgbHexValue}!important` || "#000000!important",
							},
						}}
						onChange={(color) =>
							setrgbHexValueState(color.hexString || "#000000")
						}
						value={rgbHexValue || "#000000"}
						options={{
							width: size,

							borderColor: "#fff",
							display: "flex",
							layoutDirection: "horizontal",
							layout: [
								{
									component: iro.ui.Slider,
									options: {
										sliderSize: 30,
										// borderWidth: 8,
										sliderType: "value",
									},
								},
							],
						}}
					/>
				</Stack>
			</Box>
		</CollectionBase>
	);
}

export default LightCollection;
