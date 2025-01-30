import {
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useDebounce from "../hooks/useDebounce";
import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";

function ButtonGroupCollection() {
	const { values, setState, setValue, oidObject, widget } =
		useContext(CollectionContext);
	const { data, states, activeIndex } = useData("oid");
	const { fontStyles, textStyles } = useStyles(widget.style);
	const oidValue = useOidValue("oid");

	const buttonGroupVariant = widget.data.buttonGroupVariant;
	const buttonGroupOrientation = widget.data.buttonGroupOrientation;

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const delay = widget.data.sampleInterval
		? widget.data.sampleIntervalValue
		: widget.data.delay;

	const {
		debouncedValue: debouncedSliderValue,
		sampledValue: sampledSliderValue,
	} = useDebounce(oidValue, delay);

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

	return (
		<CollectionBase data={data} oidValue={oidValue} bgActive={false}>
			{(data.iconActive || data.icon) && (
				<img
					alt=""
					src={data.iconActive || data.icon}
					style={{
						position: "absolute",
						top: `calc(0px + ${widget.data.iconYOffset})`,
						right: `calc(0px + ${widget.data.iconXOffset})`,
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
					width: "100%",
					height: "100%",

					display: "flex",
				}}
			>
				<ToggleButtonGroup
					exclusive
					value={oidValue}
					disabled={
						oidType !== "number" &&
						oidType !== "string" &&
						oidType !== "boolean"
					}
					fullWidth
					variant={buttonGroupVariant}
					orientation={buttonGroupOrientation}
					sx={{
						display: "flex",
						flexDirection:
							buttonGroupOrientation === "vertical" ? "column" : "row",
						justifyContent: "space-between",
						alignItems: "center",

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
						return (
							<ToggleButton
								disableRipple
								value={value}
								key={index}
								sx={{
									width: "100%",
									height: "100%",

									p: 0,

									display: "flex",
									justifyContent: "center",
									alignItems: "center",

									background:
										(activeIndex === index + 1 &&
											widget.data.backgroundColorActive) ||
										widget.data[`backgroundColor${index + 1}`] ||
										data.backgroundColor ||
										(activeIndex === index + 1 &&
											widget.data.backgroundActive) ||
										widget.data[`background${index + 1}`] ||
										data.background,

									"&.MuiToggleButton-root.Mui-selected": {
										background:
											(activeIndex === index + 1 &&
												widget.data.backgroundColorActive) ||
											widget.data[`backgroundColor${index + 1}`] ||
											data.backgroundColor ||
											(activeIndex === index + 1 &&
												widget.data.backgroundActive) ||
											widget.data[`background${index + 1}`] ||
											data.background,
									},

									"&:hover": {
										filter:
											(activeIndex === index + 1 &&
												widget.data.iconHoverActive &&
												`brightness(${widget.data.iconHoverActive}%)`) ||
											(widget.data[`iconHover${index + 1}`] &&
												`brightness(${widget.data[`iconHover${index + 1}`]}%)`) ||
											(data.iconHover &&
												`brightness(${data.iconHover || "100%"})`),

										background:
											(activeIndex === index + 1 &&
												widget.data.backgroundColorActive) ||
											widget.data[`backgroundColor${index + 1}`] ||
											data.backgroundColor ||
											(activeIndex === index + 1 &&
												widget.data.backgroundActive) ||
											widget.data[`background${index + 1}`] ||
											data.background,
									},
								}}
								onClick={() => {
									setState({ values: { ...values, [`${oid}.val`]: value } });
								}}
							>
								<Box
									sx={{
										width: "100%",
										height: "100%",

										p: 0.5,

										display: "flex",
										flexDirection: "column",
										justifyContent: "space-around",
										alignItems: "center",
									}}
								>
									{!widget.data.onlyText &&
										((activeIndex === index + 1 &&
											(widget.data.iconActive ||
												widget.data.iconSmallActive)) ||
											widget.data[`icon${index + 1}`] ||
											widget.data[`iconSmall${index + 1}`] ||
											data.icon) && (
											<Box
												sx={{
													overflow: "hidden",

													width: "100%",
													height: "100%",

													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<img
													src={
														(activeIndex === index + 1 &&
															(widget.data.iconActive ||
																widget.data.iconSmallActive)) ||
														widget.data[`icon${index + 1}`] ||
														widget.data[`iconSmall${index + 1}`] ||
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
																`calc(100% * ${widget.data.iconSizeActive || 100} / 100)`) ||
															(widget.data[`iconSize${index + 1}`] &&
																`calc(100% * ${widget.data[`iconSize${index + 1}`] || 100} / 100)`) ||
															"100%",
														height:
															(activeIndex === index + 1 &&
																widget.data.iconSizeActive &&
																`calc(100% * ${widget.data.iconSizeActive || 100} / 100)`) ||
															(widget.data[`iconSize${index + 1}`] &&
																`calc(100% * ${widget.data[`iconSize${index + 1}`] || 100} / 100)`) ||
															"100%",
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
											</Box>
										)}
									{!widget.data.onlyIcon && (
										<Box
											sx={{
												width: "100%",

												pt: 0.5,

												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Typography
												ref={(ref) => {
													if (ref) {
														ref.innerHTML =
															(activeIndex === index + 1 &&
																widget.data.aliasActive) ||
															alias ||
															value;
													}
												}}
												noWrap
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
											/>
										</Box>
									)}
								</Box>
							</ToggleButton>
						);
					})}
				</ToggleButtonGroup>
			</Box>
		</CollectionBase>
	);
}

export default ButtonGroupCollection;
