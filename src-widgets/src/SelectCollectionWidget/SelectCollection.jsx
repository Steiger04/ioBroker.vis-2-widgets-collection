import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext, useRef } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionBaseImage from "../components/CollectionBaseImage";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";
import useValueState from "../hooks/useValueState";

const emptyIcon =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function SelectCollection() {
	const contentRef = useRef(null);
	const { cidObject, oidObject, widget } = useContext(CollectionContext);
	const { textStyles, fontStyles } = useStyles(widget.style);
	const { data, states } = useData("oid");
	const oidValue = useOidValue("oid");

	const setOidValueState = useValueState("oid");
	const setCidValueState = useValueState("cid");

	const oidType = oidObject?.common?.type;

	const isValidType =
		oidType === "boolean" ||
		oidType === "number" ||
		oidType === "string" ||
		oidType === "mixed";

	const valueIndex = states.findIndex(
		(state) => String(state.value) === String(oidValue),
	);

	const changeHandler = (event) => {
		const value = event.target.value.value;

		if (!cidObject.noObject) {
			setCidValueState(value);
		}

		setOidValueState(value);
	};

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			<CollectionBaseImage data={data} widget={widget} />

			<Box
				ref={contentRef}
				sx={{
					overflow: "auto",
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Select
					variant="standard"
					disableUnderline
					value={valueIndex !== -1 ? states[valueIndex] : ""}
					onChange={changeHandler}
					MenuProps={{
						sx: {
							maxWidth: contentRef.current?.offsetWidth,
						},
						MenuListProps: {
							sx: {
								background: data.backgroundColor
									? alpha(data.backgroundColor, 0.7)
									: null || data.background,
							},
						},
					}}
					sx={{
						width: "100%",
						height: "100%",
						maxWidth: `calc(${contentRef.current?.offsetWidth}px - 10%)`,

						"& .MuiSelect-icon": {
							color: widget.data.arrowColor,
						},

						"&.Mui-focused": {
							ariaHidden: "false",
							background:
								data.backgroundColorActive ||
								data.backgroundColor ||
								data.backgroundActive ||
								data.background,
						},
					}}
				>
					{states.map((state, idx) => {
						const imgSrc =
							widget.data[`iconSmall${idx + 1}`] ||
							widget.data[`icon${idx + 1}`] ||
							widget.data.iconSmall ||
							widget.data.icon;

						return (
							<MenuItem
								key={state.value}
								value={state}
								sx={{
									"& .MuiTouchRipple-root": {
										color:
											widget.data[`iconColor${idx + 1}`] ||
											widget.data.iconColor ||
											widget.data.textColorActive ||
											data.textColor,
									},

									"&.Mui-selected": {
										backgroundColor:
											(widget.data[`iconColor${idx + 1}`] &&
												alpha(widget.data[`iconColor${idx + 1}`], 0.16)) ||
											(widget.data.iconColor &&
												alpha(widget.data.iconColor, 0.16)) ||
											(data.textColor && alpha(data.textColor, 0.16)),
									},

									"&.Mui-selected:hover": {
										backgroundColor:
											(widget.data[`iconColor${idx + 1}`] &&
												alpha(widget.data[`iconColor${idx + 1}`], 0.16)) ||
											(widget.data.iconColor &&
												alpha(widget.data.iconColor, 0.16)) ||
											(data.textColor && alpha(data.textColor, 0.16)),
									},
									"&:hover": {
										backgroundColor:
											(widget.data[`iconColor${idx + 1}`] &&
												alpha(widget.data[`iconColor${idx + 1}`], 0.16)) ||
											(widget.data.iconColor &&
												alpha(widget.data.iconColor, 0.16)) ||
											(data.textColor && alpha(data.textColor, 0.16)),
									},

									background:
										(widget.data[`backgroundColor${idx + 1}`] &&
											`${widget.data[`backgroundColor${idx + 1}`]}!important`) ||
										`${widget.data[`background${idx + 1}`]}!important`,
								}}
							>
								<Stack
									direction="row"
									spacing={imgSrc ? 1 : 0}
									sx={{
										alignItems: "center",
									}}
								>
									<img
										alt=""
										src={imgSrc || emptyIcon}
										style={{
											position: "relative",

											top: `calc(0px - ${widget.data[`iconYOffset${idx + 1}`]})`,
											right: `calc(0px - ${widget.data[`iconXOffset${idx + 1}`]})`,

											width:
												(!imgSrc && "0px") ||
												(typeof widget.data[`iconSize${idx + 1}`] === "number"
													? `calc(24px * ${widget.data[`iconSize${idx + 1}`]} / 100)`
													: typeof widget.data.iconSize === "number"
														? `calc(24px * ${widget.data.iconSize} / 100)`
														: "24px"),
											height:
												(!imgSrc && "0px") ||
												(typeof widget.data[`iconSize${idx + 1}`] === "number"
													? `calc(24px * ${widget.data[`iconSize${idx + 1}`]} / 100)`
													: typeof widget.data.iconSize === "number"
														? `calc(24px * ${widget.data.iconSize} / 100)`
														: "24px"),
											color:
												(String(oidValue) ===
													String(widget.data[`value${idx + 1}`]) &&
													widget.data.iconColorActive) ||
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.buttonGroupColor ||
												data.iconColor,
											filter:
												(String(oidValue) ===
													String(widget.data[`value${idx + 1}`]) &&
													widget.data.iconColorActive) ||
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.buttonGroupColor ||
												data.iconColor
													? "drop-shadow(0px 10000px 0)"
													: null,
											transform:
												(String(oidValue) ===
													String(widget.data[`value${idx + 1}`]) &&
													widget.data.iconColorActive) ||
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.buttonGroupColor ||
												data.iconColor
													? "translateY(-10000px)"
													: null,
										}}
									/>
									<Typography
										component={Box}
										variant="subtitle2"
										sx={{
											whiteSpace: "pre-wrap",
											...fontStyles,
											...textStyles,
											fontSize:
												widget.data[`valueSize${idx + 1}`] || data.valueSize,
											textAlign: "left",
											bgcolor: "transparent",
											color:
												widget.data[`textColor${idx + 1}`] || data.textColor,
											textTransform: "none",

											width: "100%",
											height: "100%",

											// px: 1,

											flexGrow: 1,
											alignContent: "center",
										}}
										contentEditable="false"
										dangerouslySetInnerHTML={{
											__html:
												(widget.data[`alias${idx + 1}`] &&
													widget.data[`alias${idx + 1}`].replace(
														/(\r\n|\n|\r)/gm,
														"",
													)) ||
												(widget.data[`value${idx + 1}`] &&
													`${widget.data[`value${idx + 1}`]}${widget.data.unit}`) ||
												"",
										}}
									/>
								</Stack>
							</MenuItem>
						);
					})}
				</Select>
			</Box>
		</CollectionBase>
	);
}

export default SelectCollection;
