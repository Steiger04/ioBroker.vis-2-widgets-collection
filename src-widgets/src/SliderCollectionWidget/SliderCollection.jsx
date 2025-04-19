import { Box, Slider } from "@mui/material";
import React, { useState, useMemo, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionBaseImage from "../components/CollectionBaseImage";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useValueState from "../hooks/useValueState";
import CollectionMark from "./CollectionMark";

function SliderCollection() {
	const { oidObject, widget } = useContext(CollectionContext);
	const { data, states, minValue, maxValue } = useData("oid");
	const [sliderMarksIndex, setSliderMarksIndex] = useState(null);
	const { value: oidValue, setValueState: setOidValueState } =
		useValueState("oid");

	const startIconColor =
		widget.data.startIconColor ||
		widget.data.sliderColor ||
		data.iconColor ||
		data.textColor;
	const endIconColor =
		widget.data.endIconColor ||
		widget.data.sliderColor ||
		data.iconColor ||
		data.textColor;

	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "number";

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
		if (oidValue === undefined) return;

		const index = sliderMarks.findIndex(
			(mark) => String(mark.value) === String(oidValue),
		);

		if (index !== -1) {
			setSliderMarksIndex(index);
		}
	}, [oidValue, sliderMarks]);

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			<CollectionBaseImage data={data} widget={widget} />
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
							slotProps={{
								markLabel: {
									marks: widget.data.marks,
									sliderOrientation: widget.data.sliderOrientation,
								},
							}}
							disabled={oidType !== "number"}
							valueLabelDisplay={widget.data.valueLabelDisplay}
							orientation={widget.data.sliderOrientation}
							min={sliderMinValue}
							max={sliderMaxValue}
							marks={sliderMarks}
							step={!widget.data.onlyStates ? widget.data.step : null}
							size={widget.data.sliderSize}
							value={oidValue}
							onChange={(_, value) => setOidValueState(value)}
							sx={{
								mb:
									widget.data.marks &&
									widget.data.sliderOrientation === "horizontal"
										? "20px"
										: "0px",

								mr:
									widget.data.marks &&
									widget.data.sliderOrientation === "vertical"
										? "44px"
										: "0px",
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
										(typeof widget.data.markerTextSize === "number" &&
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
										"& div[data-font='active']": {
											color: `${widget.data.textColorActive} !important`,

											fontSize:
												typeof widget.data.valueSizeActive === "number" &&
												`${widget.data.valueSizeActive}% !important`,
										},
										"& div[data-position='active']": {
											left:
												(!!widget.data.iconXOffsetActive &&
													widget.data.iconXOffsetActive !== "0px" &&
													`${widget.data.iconXOffsetActive} !important`) ||
												"0px",

											bottom:
												(!!widget.data.iconYOffsetActive &&
													widget.data.iconYOffsetActive !== "0px" &&
													`${widget.data.iconYOffsetActive} !important`) ||
												"0px !important",
										},

										"& img[data-img='active']": {
											width: `${
												typeof widget.data.iconSizeActive === "number"
													? `${(24 * widget.data.iconSizeActive) / 100}px !important`
													: "24px !important"
											}`,
											height: `${
												typeof widget.data.iconSizeActive === "number"
													? `${(24 * widget.data.iconSizeActive) / 100}px !important`
													: "24px !important"
											}`,

											color:
												widget.data.iconColorActive &&
												`${widget.data.iconColorActive}!important`,
											filter:
												widget.data.iconColorActive &&
												"drop-shadow(0px 10000px 0)",
											transform:
												widget.data.iconColorActive && "translateY(-10000px)",

											// -----------------------------
											pl:
												(!!widget.data.iconActive ||
													!!widget.data.iconSmallActive) &&
												`${
													typeof widget.data.iconSizeActive === "number"
														? `${(24 * widget.data.iconSizeActive) / 100}px !important`
														: "24px"
												}`,
											display:
												(!!widget.data.iconActive ||
													!!widget.data.iconSmallActive) &&
												"block",
											boxSizing:
												(!!widget.data.iconActive ||
													!!widget.data.iconSmallActive) &&
												"border-box",
											background:
												(!!widget.data.iconActive ||
													!!widget.data.iconSmallActive) &&
												`url('${widget.data.iconSmallActive || widget.data.iconActive}') no-repeat center center`,
											backgroundSize:
												(!!widget.data.iconActive ||
													!!widget.data.iconSmallActive) &&
												`${
													typeof widget.data.iconSizeActive === "number"
														? `${(24 * widget.data.iconSizeActive) / 100}px`
														: "24px"
												} ${
													typeof widget.data.iconSizeActive === "number"
														? `${(24 * widget.data.iconSizeActive) / 100}px`
														: "24px"
												}`,
											// -----------------------------
										},
									},
								},
							}}
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
