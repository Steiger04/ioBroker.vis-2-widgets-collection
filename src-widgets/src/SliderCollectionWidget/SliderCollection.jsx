import { Box, Slider } from "@mui/material";
import React, { useState, useMemo, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useOidValue from "../hooks/useOidValue";
import CollectionMark from "./CollectionMark";

function SliderCollection() {
	const { values, setState, setValue, oidObject, widget } =
		useContext(CollectionContext);
	const { data, states, minValue, maxValue } = useData("oid");
	const oidValue = useOidValue("oid");
	const [sliderMarksIndex, setSliderMarksIndex] = useState(null);

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(oidValue, delay);

	const startIconColor =
		widget.data.startIconColor || widget.data.sliderColor || data.iconColor;
	const endIconColor =
		widget.data.endIconColor || widget.data.sliderColor || data.iconColor;

	useEffect(() => {
		if (!widget.data.sampleInterval && debouncedSliderValue !== undefined) {
			setValue(oid, debouncedSliderValue);
		}
	}, [debouncedSliderValue, oid, setValue, widget.data.sampleInterval]);

	useEffect(() => {
		if (widget.data.sampleInterval && sampledSliderValue !== undefined) {
			setValue(oid, sampledSliderValue);
		}
	}, [sampledSliderValue, oid, setValue, widget.data.sampleInterval]);

	const sliderMinValue = useMemo(
		() =>
			!widget.data.onlyStates && widget.data.minValue !== undefined
				? Number(widget.data.minValue)
				: minValue,
		[widget.data.onlyStates, widget.data.minValue, minValue],
	);

	const sliderMaxValue = useMemo(
		() =>
			!widget.data.onlyStates && widget.data.maxValue !== undefined
				? Number(widget.data.maxValue)
				: maxValue,
		[widget.data.onlyStates, widget.data.maxValue, maxValue],
	);

	const sliderMarks = useMemo(() => {
		const _sliderMarks = JSON.parse(JSON.stringify(states));

		if (widget.data.onlyStates) {
			return _sliderMarks.sort((a, b) => a.value - b.value);
		}
		// Ensure minimum and maximum values are included
		const minValue = sliderMinValue;
		const maxValue = sliderMaxValue;

		if (
			_sliderMarks &&
			!_sliderMarks.some((state) => state.value === minValue)
		) {
			_sliderMarks.push({
				value: minValue,
				label: `${minValue}${widget.data.unit}`,
			});
		}

		if (
			_sliderMarks &&
			!_sliderMarks.some((state) => state.value === maxValue)
		) {
			_sliderMarks.push({
				value: maxValue,
				label: `${maxValue}${widget.data.unit}`,
			});
		}

		// Add step divisions
		const step = Number(widget.data.markStep) || 1;
		for (let i = minValue + step; i < maxValue; i += step) {
			if (!_sliderMarks.some((state) => state.value === i)) {
				_sliderMarks.push({
					value: i,
					label: `${i}${widget.data.unit}`,
				});
			}
		}

		// Sort the states by value
		_sliderMarks.sort((a, b) => a.value - b.value);

		return _sliderMarks;
	}, [
		states,
		sliderMinValue,
		sliderMaxValue,
		widget.data.markStep,
		widget.data.unit,
		widget.data.onlyStates,
	]);

	useEffect(() => {
		if (data.value === undefined) return;

		const index = sliderMarks.findIndex(
			(mark) => String(mark.value) === data.value,
		);

		if (index !== -1) {
			setSliderMarksIndex(index);
		}
	}, [data.value, sliderMarks]);

	return (
		<CollectionBase data={data} oidValue={oidValue}>
			<Box
				sx={{
					width: "100%",
					height: "100%",

					p: 1,

					display: "flex",
					flexDirection:
						widget.data.sliderOrientation === "horizontal" ? "row" : "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				{(data.iconActive || data.icon) && (
					<img
						alt=""
						src={data.iconActive || data.icon}
						style={{
							position: "absolute",
							top: `calc(0px + ${data.iconYOffset})`,
							right: `calc(0px + ${data.iconXOffset})`,

							// width: data.iconSizeActive || data.iconSize,
							// height: data.iconSizeActive || data.iconSize,
							width: data.iconSize,
							height: data.iconSize,

							color: data.iconColorActive || data.iconColor,
							filter:
								data.iconColorActive || data.iconColor
									? "drop-shadow(0px 10000px 0)"
									: null,
							transform:
								data.iconColorActive || data.iconColor
									? "translateY(-10000px)"
									: null,
						}}
					/>
				)}

				<Box
					sx={{
						position: "relative",
						bottom:
							widget.data.sliderOrientation === "horizontal" &&
							(widget.data.onlyStates || widget.data.marks)
								? "10px"
								: "0px",

						right:
							widget.data.sliderOrientation === "vertical" &&
							(widget.data.onlyStates || widget.data.marks)
								? "22px"
								: "0px",

						p: 1,

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{((widget.data.sliderOrientation === "horizontal" &&
						(widget.data.iconMin || widget.data.iconSmallMin)) ||
						(widget.data.sliderOrientation === "vertical" &&
							(widget.data.iconMax || widget.data.iconSmallMax))) && (
						<img
							alt=""
							src={
								widget.data.sliderOrientation === "horizontal"
									? widget.data.iconMin || widget.data.iconSmallMin
									: widget.data.iconMax || widget.data.iconSmallMax
							}
							style={{
								width:
									widget.data.sliderOrientation === "horizontal"
										? widget.data.iconSizeStart || "24px"
										: widget.data.iconSizeEnd || "24px",
								height:
									widget.data.sliderOrientation === "horizontal"
										? widget.data.iconSizeStart || "24px"
										: widget.data.iconSizeEnd || "24px",
								color:
									widget.data.sliderOrientation === "horizontal"
										? startIconColor
										: endIconColor,
								filter: "drop-shadow(0px 10000px 0)",
								transform: "translateY(-10000px)",
							}}
						/>
					)}
				</Box>
				<Box
					sx={{
						p: 1,

						display: "flex",
						flexGrow: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{typeof oidValue === "number" && (
						<Slider
							slots={{
								markLabel: CollectionMark,
							}}
							disabled={oidType !== "number"}
							valueLabelDisplay={widget.data.valueLabelDisplay}
							orientation={widget.data.sliderOrientation}
							sx={{
								/* "&.MuiSlider-root": {
								color: data.textColor,
							}, */
								"& .MuiSlider-thumb": {
									color:
										/* data.textColorActive ||
									widget.data.markerTextColor || */
										widget.data.sliderColor,
								},
								"& .MuiSlider-rail": {
									color: widget.data.sliderColor || "primary.main",
								},
								"& .MuiSlider-track": {
									color: widget.data.sliderColor || "primary.main",
								},
								"& .MuiSlider-mark": {
									color: widget.data.sliderColor || "primary.main",
								},
								"& .MuiSlider-markActive": {
									bgcolor: widget.data.sliderColor || "primary.main",
									filter: "brightness(2.5)",
								},
								"& .MuiSlider-valueLabel": {
									fontSize:
										data.valueSizeActive ||
										(widget.data.markerTextSize &&
											`${widget.data.markerTextSize}%`) ||
										data.valueSize ||
										"1em",
									color:
										data.textColorActive ||
										widget.data.markerTextColor ||
										data.textColor,
									bgcolor: "transparent",
									top:
										widget.data.sliderOrientation === "horizontal"
											? widget.data.labelPosition
											: null,
									right:
										widget.data.sliderOrientation === "vertical"
											? widget.data.labelPosition
											: null,
								},
								"& .MuiSlider-markLabel": {
									fontSize:
										((widget.data.markerTextSize ||
											widget.data.markerTextSize === 0) &&
											`${widget.data.markerTextSize}%`) ||
										data.valueSize ||
										"1em",
									color: widget.data.markerTextColor || data.textColor,
									top:
										widget.data.sliderOrientation === "horizontal"
											? widget.data.markPosition
											: null,
									left:
										widget.data.sliderOrientation === "vertical"
											? widget.data.markPosition
											: null,
								},
								"& .MuiSlider-markLabelActive": {
									[`&[data-index='${sliderMarksIndex}']`]: {
										fontSize: data.valueSizeActive,
										color:
											data.textColorActive ||
											widget.data.markerTextColor ||
											data.textColor,
									},
								},
							}}
							min={sliderMinValue}
							max={sliderMaxValue}
							marks={
								widget.data.onlyStates ||
								(widget.data.marks && sliderMarks && sliderMarks.length)
									? sliderMarks
									: widget.data.marks
							}
							step={
								!widget.data.onlyStates && widget.data.step
									? Number(widget.data.step)
									: widget.data.onlyStates && sliderMarks && sliderMarks.length
										? null
										: widget.data.step
											? Number(widget.data.step)
											: 1
							}
							size={widget.data.sliderSize}
							value={oidValue}
							onChange={(_, value) =>
								setState({ values: { ...values, [`${oid}.val`]: value } })
							}
						/>
					)}
				</Box>
				<Box
					sx={{
						position: "relative",
						bottom:
							widget.data.sliderOrientation === "horizontal" &&
							(widget.data.onlyStates || widget.data.marks)
								? "10px"
								: "0px",

						right:
							widget.data.sliderOrientation === "vertical" &&
							(widget.data.onlyStates || widget.data.marks)
								? "22px"
								: "0px",

						p: 1,

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{((widget.data.sliderOrientation === "horizontal" &&
						(widget.data.iconMax || widget.data.iconSmallMax)) ||
						(widget.data.sliderOrientation === "vertical" &&
							(widget.data.iconMin || widget.data.iconSmallMin))) && (
						<img
							alt=""
							src={
								widget.data.sliderOrientation === "horizontal"
									? widget.data.iconMax || widget.data.iconSmallMax
									: widget.data.iconMin || widget.data.iconSmallMin
							}
							style={{
								width:
									widget.data.sliderOrientation === "horizontal"
										? widget.data.iconSizeEnd || "24px"
										: widget.data.iconSizeStart || "24px",
								height:
									widget.data.sliderOrientation === "horizontal"
										? widget.data.iconSizeEnd || "24px"
										: widget.data.iconSizeStart || "24px",
								color:
									widget.data.sliderOrientation === "horizontal"
										? endIconColor
										: startIconColor,
								filter: "drop-shadow(0px 10000px 0)",
								transform: "translateY(-10000px)",
							}}
						/>
					)}
				</Box>
			</Box>
		</CollectionBase>
	);
}

export default SliderCollection;
