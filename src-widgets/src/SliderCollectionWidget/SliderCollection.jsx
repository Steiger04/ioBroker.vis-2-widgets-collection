import { Box, Slider, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useRef, useMemo, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function SliderCollection() {
	const { values, setState, setValue, oidObject, widget, getPropertyValue } =
		useContext(CollectionContext);
	const { data, states, minValue, maxValue } = useData("oid");
	const theme = useTheme();
	const { backgroundStyles, textStyles } = useStyles(widget.style);
	const ref = useRef(null);
	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size } = useSize(ref, isEllipse);

	const oidType = oidObject?.common?.type;
	const oid = oidObject?._id;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(getPropertyValue("oid"), delay);

	const sliderColor = useMemo(
		() =>
			widget.data.sliderColor ||
			data.textColor ||
			data.backgroundColor ||
			textStyles.color ||
			backgroundStyles.backgroundColor ||
			theme.palette.background.default,
		[
			widget.data.sliderColor,
			data.textColor,
			data.backgroundColor,
			backgroundStyles.backgroundColor,
			theme.palette.background.default,
			textStyles.color,
		],
	);
	const startIconColor = widget.data.startIconColor || sliderColor;
	const endIconColor = widget.data.endIconColor || sliderColor;

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
		const _sliderMarks =
			states &&
			states.map(({ value, label }) => ({
				value,
				label,
			}));

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

	return (
		<CollectionBase ref={ref}>
			{data.icon && (
				<img
					alt=""
					src={data.icon}
					style={{
						position: "absolute",
						top: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} / 2 + 4px + ${data.iconYOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} / 2 + 8px + ${data.iconYOffset})`,
						right: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} + 4px + ${data.iconXOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} + 8px + ${data.iconXOffset})`,
						width: `calc(24px * ${data.iconSize} / 100)` || "24px",
						height: `calc(24px * ${data.iconSize} / 100)` || "24px",
						color: data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)}

			<Box
				sx={{
					// color: data.iconColor || "background.default",
					bgcolor: "transparent",
					width: `calc(${size}px)`,
					height: `calc(${size}px)`,
					overflow: "visible",
					px: 3,
					justifyContent: "center",
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
				}}
			>
				<Stack
					spacing={2}
					direction="row"
					sx={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{widget.data.iconMin && (
						<img
							alt=""
							src={widget.data.iconMin}
							style={{
								width: widget.data.iconSizeStart || "24px",
								height: widget.data.iconSizeStart || "24px",
								color: startIconColor,
								filter: startIconColor ? "drop-shadow(0px 10000px 0)" : null,
								transform: startIconColor ? "translateY(-10000px)" : null,
							}}
						/>
					)}
					<Slider
						disabled={oidType !== "number"}
						sx={{
							"& .MuiSlider-thumb": {
								color: sliderColor,
							},
							"& .MuiSlider-rail": {
								color: sliderColor,
							},
							"& .MuiSlider-track": {
								color: sliderColor,
							},
							"& .MuiSlider-mark": {
								color: sliderColor,
							},
							"& .MuiSlider-markActive": {
								color: sliderColor,
							},
							"& .MuiSlider-markLabel": {
								color: widget.data.markerTextColor || sliderColor,
								fontSize: `${widget.data.markerTextSize}%` || "1em",
							},
							"& .MuiSlider-markLabelActive": {
								color: widget.data.markerTextColor || sliderColor,
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

					{widget.data.iconMax && (
						<img
							alt=""
							src={widget.data.iconMax}
							style={{
								width: widget.data.iconSizeEnd || "24px",
								height: widget.data.iconSizeEnd || "24px",
								color: endIconColor,
								filter: endIconColor ? "drop-shadow(0px 10000px 0)" : null,
								transform: endIconColor ? "translateY(-10000px)" : null,
							}}
						/>
					)}
				</Stack>
			</Box>
		</CollectionBase>
	);
}

export default SliderCollection;
