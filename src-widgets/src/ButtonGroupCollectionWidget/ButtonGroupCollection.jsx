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
	const {
		theme,
		values,
		setState,
		setValue,
		oidObject,
		widget,
		getPropertyValue,
	} = useContext(CollectionContext);

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
	// console.log("widget.data", widget.data);
	// console.log("widget.style", widget.style);
	// console.log("oidStates", oidStates);
	// console.log("states", states);
	// console.log("widgetStates", widgetStates);

	return (
		<CollectionBase ref={ref}>
			{(data.iconActive || data.icon) && (
				<img
					alt=""
					src={data.iconActive || data.icon}
					style={{
						position: "absolute",
						top: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} / 2 + 4px + ${widget.data.iconYOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} / 2 + 8px + ${widget.data.iconYOffset})`,
						right: widget.data.noCard
							? `calc(${theme.spacing(widget.data.basePadding)} + 4px + ${widget.data.iconXOffset})`
							: `calc(${theme.spacing(widget.data.basePadding)} + 8px + ${widget.data.iconXOffset})`,
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
					{states.map(({ value, label: alias }, index) => {
						/* const iconSize =
							widget.data[`iconSize${index + 1}`] || widget.data.iconSize; */

						return (
							<ToggleButton
								disableRipple
								value={value}
								key={index}
								sx={{
									flexGrow: 1,
									bgcolor: widget.data[`backgroundColor${index + 1}`],

									"&.MuiToggleButton-root.Mui-selected": {
										bgcolor:
											widget.data.backgroundColorActive ||
											widget.data[`backgroundColor${index + 1}`],
										opacity: 0.6,
									},
									"&:hover": {
										bgcolor:
											widget.data.backgroundColorActive ||
											widget.data[`backgroundColor${index + 1}`],
										opacity: 0.6,
									},
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
									{((activeIndex === index + 1 && widget.data.iconActive) ||
										widget.data[`icon${index + 1}`] ||
										data.icon) && (
										<img
											src={
												(activeIndex === index + 1 && widget.data.iconActive) ||
												widget.data[`icon${index + 1}`] ||
												data.icon
											}
											alt=""
											style={{
												position: "relative",
												bottom: widget.data[`iconYOffset${index + 1}`],
												left: widget.data[`iconXOffset${index + 1}`],
												width:
													(activeIndex === index + 1 &&
														widget.data.iconSizeActive &&
														`calc(24px * ${widget.data.iconSizeActive} / 100)`) ||
													(widget.data[`iconSize${index + 1}`] &&
														`calc(24px * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
													data.iconSize,
												height:
													(activeIndex === index + 1 &&
														widget.data.iconSizeActive &&
														`calc(24px * ${widget.data.iconSizeActive} / 100)`) ||
													(widget.data[`iconSize${index + 1}`] &&
														`calc(24px * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
													data.iconSize,
												color:
													(activeIndex === index + 1 &&
														widget.data.iconColorActive) ||
													widget.data[`iconColor${index + 1}`] ||
													widget.data.buttonGroupColor ||
													data.iconColor,
												filter:
													(activeIndex === index + 1 &&
														widget.data.iconColorActive) ||
													widget.data[`iconColor${index + 1}`] ||
													widget.data.buttonGroupColor ||
													data.iconColor
														? "drop-shadow(0px 10000px 0)"
														: null,
												transform:
													(activeIndex === index + 1 &&
														widget.data.iconColorActive) ||
													widget.data[`iconColor${index + 1}`] ||
													widget.data.buttonGroupColor ||
													data.iconColor
														? "translateY(-10000px)"
														: null,
											}}
										/>
									)}
									{!widget.data.onlyIcon && (
										<Typography
											variant="body2"
											sx={{
												...fontStyles,
												...textStyles,
												textTransform: "none",
												fontSize:
													(activeIndex === index + 1 &&
														widget.data.valueSizeActive &&
														`${widget.data.valueSizeActive}%`) ||
													(widget.data[`valueSize${index + 1}`] &&
														`${widget.data[`valueSize${index + 1}`]}%`) ||
													data.valueSize,
												color:
													(activeIndex === index + 1 &&
														widget.data.textColorActive) ||
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
