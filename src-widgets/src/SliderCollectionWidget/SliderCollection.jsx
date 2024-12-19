import { Box, Slider, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef, useMemo, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";

function SliderCollection() {
	const { values, setState, setValue, oidObject, widget, getPropertyValue } =
		useContext(CollectionContext);
	const { data, states, minValue, maxValue, activeIndex } = useData("oid");
	const theme = useTheme();
	const ref = useRef(null);

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(getPropertyValue("oid"), delay);

	// console.log("widget.data", widget.data);
	// console.log("data", data);

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
			return _sliderMarks;
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

	// console.log("widget.data", widget.data);

	// console.log(`"&[data-index='${0}']"`);

	return (
		<CollectionBase ref={ref}>
			{(data.iconActive || data.icon) && (
				<img
					alt=""
					src={data.iconActive || data.icon}
					style={{
						position: "absolute",
						top: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} / 2 + 4px + ${data.iconYOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} / 2 + 8px + ${data.iconYOffset})`,
						right: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} + 4px + ${data.iconXOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} + 8px + ${data.iconXOffset})`,
						width: data.iconSizeActive || data.iconSize,
						height: data.iconSizeActive || data.iconSize,
						color: data.iconColorActive || data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)}

			<Box
				sx={{
					bgcolor: "transparent",
					boxSizing: "border-box",
					width: "100%",
					height: "100%",
					overflow: "visible",
					p: widget.data.sliderSize === "small" ? 1.5 : 2,
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
				}}
			>
				<Stack
					spacing={2}
					direction={
						widget.data.sliderOrientation === "horizontal" ? "row" : "column"
					}
					sx={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{((widget.data.sliderOrientation === "horizontal" &&
						widget.data.iconMin) ||
						(widget.data.sliderOrientation === "vertical" &&
							widget.data.iconMax)) && (
						<img
							alt=""
							src={
								widget.data.sliderOrientation === "horizontal"
									? widget.data.iconMin
									: widget.data.iconMax
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
					<Slider
						disabled={oidType !== "number"}
						valueLabelDisplay={widget.data.valueLabelDisplay}
						orientation={widget.data.sliderOrientation}
						sx={{
							/* "&.MuiSlider-root": {
								color: data.textColor,
							}, */
							"& .MuiSlider-thumb": {
								color:
									data.textColorActive ||
									widget.data.markerTextColor ||
									data.textColor,
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
									(widget.data.markerTextSize &&
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
								[`&[data-index='${activeIndex - 1}']`]: {
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
						value={getPropertyValue("oid") || 0}
						onChange={(_, value) =>
							setState({ values: { ...values, [`${oid}.val`]: value } })
						}
					/>

					{((widget.data.sliderOrientation === "horizontal" &&
						widget.data.iconMax) ||
						(widget.data.sliderOrientation === "vertical" &&
							widget.data.iconMin)) && (
						<img
							alt=""
							src={
								widget.data.sliderOrientation === "horizontal"
									? widget.data.iconMax
									: widget.data.iconMin
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
				</Stack>
			</Box>
		</CollectionBase>
	);
}

export default SliderCollection;
