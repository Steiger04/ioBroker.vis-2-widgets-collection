import {
	Box,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useState, useRef, useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useStyles from "../hooks/useStyles";

function ButtonGroupCollection() {
	const { values, setState, setValue, oidObject, widget, getPropertyValue } =
		useContext(CollectionContext);

	const { data, states, activeIndex } = useData("oid");

	const [alignment, setAlignment] = useState();

	/* const handleAlignment = (event, newAlignment) => {
		if (newAlignment !== undefined) {
			console.log("newAlignment", newAlignment);
			setAlignment(newAlignment);
		}
	}; */

	const { fontStyles, textStyles } = useStyles(widget.style);

	const ref = useRef(null);

	const buttonGroupVariant = widget.data.buttonGroupVariant;
	const buttonGroupOrientation = widget.data.buttonGroupOrientation;

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;
	const oidValue = getPropertyValue("oid");

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(() => getPropertyValue("oid"), delay);

	useEffect(() => {
		if (oidValue !== undefined) {
			// console.log("oidValue", oidValue);
			setAlignment(oidValue);
		}
	}, [oidValue]);

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

	/* const buttonGroupMinValue = useMemo(
		() =>
			!widget.data.onlyStates && widget.data.minValue !== undefined
				? Number(widget.data.minValue)
				: minValue,
		[widget.data.onlyStates, widget.data.minValue, minValue],
	);

	const buttonGroupMaxValue = useMemo(
		() =>
			!widget.data.onlyStates && widget.data.maxValue !== undefined
				? Number(widget.data.maxValue)
				: maxValue,
		[widget.data.onlyStates, widget.data.maxValue, maxValue],
	); */

	console.log("data", data);
	console.log("widget.data", widget.data);
	console.log("widget.style", widget.style);
	// console.log("oidStates", oidStates);
	// console.log("states", states);
	// console.log("widgetStates", widgetStates);
	return (
		<CollectionBase ref={ref}>
			{/* {data.icon && (
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
			)} */}

			<Box
				sx={{
					bgcolor: "transparent",
					boxSizing: "border-box",
					width: "100%",
					height: "100%",
					// overflow: "visible",
					p: 0,
					display: "flex",
				}}
			>
				<ToggleButtonGroup
					exclusive
					// onChange={handleAlignment}
					value={alignment}
					disabled={
						oidType !== "number" &&
						oidType !== "string" &&
						oidType !== "boolean"
					}
					fullWidth
					variant={buttonGroupVariant}
					orientation={buttonGroupOrientation}
					sx={{
						"&.MuiToggleButtonGroup-root": {
							// color: widget.data.buttonGroupColor || "background.default",
						},
						"& .MuiToggleButtonGroup-firstButton": {
							borderTopWidth:
								widget.data.buttonGroupVariant === "outlined" ? null : 0,
							borderLeftWidth:
								widget.data.buttonGroupVariant === "outlined" ? null : 0,
							borderRightWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? null
										: 0,
							borderBottomWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? 0
										: null,
							borderColor:
								widget.data.buttonGroupColor &&
								alpha(widget.data.buttonGroupColor, 0.2),
							borderRadius: !widget.data.basePadding && 0,
						},
						"& .MuiToggleButtonGroup-middleButton": {
							borderTopWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? 0
										: null,
							borderLeftWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? null
										: 0,
							borderRightWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? null
										: 0,
							borderBottomWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? 0
										: null,
							borderColor:
								widget.data.buttonGroupColor &&
								alpha(widget.data.buttonGroupColor, 0.2),
						},
						"& .MuiToggleButtonGroup-lastButton": {
							borderTopWidth:
								widget.data.buttonGroupVariant === "outlined"
									? null
									: widget.data.buttonGroupOrientation === "horizontal"
										? 0
										: null,
							borderLeftWidth:
								widget.data.buttonGroupVariant === "outlined" ? null : 0,
							borderRightWidth:
								widget.data.buttonGroupVariant === "outlined" ? null : 0,
							borderBottomWidth:
								widget.data.buttonGroupVariant === "outlined" ? null : 0,
							borderColor:
								widget.data.buttonGroupColor &&
								alpha(widget.data.buttonGroupColor, 0.2),
							borderRadius: !widget.data.basePadding && 0,
						},
					}}
				>
					{/* {Object.entries(widgetStates).map(([value, alias], index) => { */}
					{states.map(({ value, label: alias }, index) => {
						const icon = widget.data[`icon${index + 1}`] || widget.data.icon;
						const iconSize =
							widget.data[`iconSize${index + 1}`] || widget.data.iconSize;

						return (
							<ToggleButton
								disableRipple
								value={value}
								key={index}
								sx={{
									/* "&.Mui-selected": {
										bgcolor: "yellow",
									}, */
									flexGrow: 1,
								}}
								onClick={() => {
									setState({ values: { ...values, [`${oid}.val`]: value } });
								}}
							>
								<Stack
									spacing={0.8}
									sx={{
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{icon && (
										<img
											alt=""
											style={{
												/* position: "absolute",
												top: widget.data.noCard
													? `calc(${theme.spacing(widget.data.basePadding)} / 2 + 4px + ${data.iconYOffset})`
													: `calc(${theme.spacing(widget.data.basePadding)} / 2 + 8px + ${data.iconYOffset})`,
												right: widget.data.noCard
													? `calc(${theme.spacing(widget.data.basePadding)} + 4px + ${data.iconXOffset})`
													: `calc(${theme.spacing(widget.data.basePadding)} + 8px + ${data.iconXOffset})`, */
												position: "relative",
												top: widget.data[`iconYOffset${index + 1}`],
												left: widget.data[`iconXOffset${index + 1}`],
												width:
													(activeIndex === index &&
														widget.data.iconSizeOn &&
														`calc(24px * ${widget.data.iconSizeOn} / 100)`) ||
													`calc(24px * ${iconSize} / 100)` ||
													"24px",
												height:
													(activeIndex === index &&
														widget.data.iconSizeOn &&
														`calc(24px * ${widget.data.iconSizeOn} / 100)`) ||
													`calc(24px * ${iconSize} / 100)` ||
													"24px",
												color:
													(activeIndex === index && widget.data.iconColorOn) ||
													widget.data[`iconColor${index + 1}`] ||
													(!widget.data[`icon${index + 1}`] &&
														widget.data.iconColor),
												filter:
													(activeIndex === index && widget.data.iconColorOn) ||
													widget.data[`iconColor${index + 1}`] ||
													(!widget.data[`icon${index + 1}`] &&
														widget.data.iconColor)
														? "drop-shadow(0px 10000px 0)"
														: null,
												transform:
													(activeIndex === index && widget.data.iconColorOn) ||
													widget.data[`iconColor${index + 1}`] ||
													(!widget.data[`icon${index + 1}`] &&
														widget.data.iconColor)
														? "translateY(-10000px)"
														: null,
											}}
											src={
												(activeIndex === index && widget.data.iconOn) || icon
											}
										/>
									)}
									{!widget.data.onlyIcon && (
										<Typography
											sx={{
												...fontStyles,
												...textStyles,
												fontSize:
													(activeIndex === index &&
														widget.data.valueSizeOn &&
														`${widget.data.valueSizeOn}%`) ||
													(widget.data[`valueSize${index + 1}`] &&
														`${widget.data[`valueSize${index + 1}`]}%`) ||
													data.textSize,
												color:
													(activeIndex === index && widget.data.textColorOn) ||
													widget.data[`textColor${index + 1}`] ||
													widget.data.buttonGroupColor ||
													data.textColor,
											}}
										>
											{alias || value}
										</Typography>
									)}
								</Stack>
							</ToggleButton>
						);
					})}
				</ToggleButtonGroup>
			</Box>
		</CollectionBase>
	);
}

export default ButtonGroupCollection;
