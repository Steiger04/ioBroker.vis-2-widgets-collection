import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useContext, useRef } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";

const emptyIcon =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function SelectCollection() {
	const contentRef = useRef(null);
	const { setState, values, oidObject, widget, setValue } =
		useContext(CollectionContext);
	const { textStyles, fontStyles } = useStyles(widget.style);
	const { data, states } = useData("oid");

	const oidValue = useOidValue("oid");

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const isValidType =
		oidType === "boolean" ||
		oidType === "number" ||
		oidType === "string" ||
		oidType === "mixed";

	const valueIndex = states.findIndex((state) => state.value === oidValue);

	const changeHandler = (event) => {
		const value =
			typeof event.target.value.value !== "number"
				? event.target.value.value
				: Number(event.target.value.value);

		setState({ values: { ...values, [`${oid}.val`]: value } });

		if (
			widget.data.cid !== undefined &&
			widget.data.cid !== null &&
			widget.data.cid !== "" &&
			widget.data.cid !== "nothing_selected"
		)
			setValue(widget.data.cid, value);
		else setValue(oid, value);
	};

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			{/* {data.icon && (
				<img
					alt=""
					src={data.icon}
					style={{
						position: "absolute",
						top: `calc(0px + ${widget.data.iconYOffset})`,
						right: `calc(0px + ${widget.data.iconXOffset})`,
						width: data.iconSize,
						height: data.iconSize,
						color: data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)} */}

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

						"&.Mui-focused": {
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
											top: `calc(0px - ${widget.data[`iconYOffset${idx + 1}`] || widget.data.iconYOffset})`,
											right: `calc(0px - ${widget.data[`iconXOffset${idx + 1}`] || widget.data.iconXOffset})`,

											width:
												(!imgSrc && "0px") ||
												(widget.data[`iconSize${idx + 1}`] &&
													`calc(24px * ${widget.data[`iconSize${idx + 1}`] || 0} / 100)`) ||
												(widget.data.iconSize &&
													`calc(24px * ${widget.data.iconSize || 0} / 100)`) ||
												"24px",
											height:
												(!imgSrc && "0px") ||
												(widget.data[`iconSize${idx + 1}`] &&
													`calc(24px * ${widget.data[`iconSize${idx + 1}`] || 0} / 100)`) ||
												(widget.data.iconSize &&
													`calc(24px * ${widget.data.iconSize || 0} / 100)`) ||
												"24px",

											color:
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.iconColor,
											filter:
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.iconColor
													? "drop-shadow(0px 10000px 0)"
													: null,
											transform:
												widget.data[`iconColor${idx + 1}`] ||
												widget.data.iconColor
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
												widget.data[`alias${idx + 1}`].replace(
													/(\r\n|\n|\r)/gm,
													"",
												) ||
												`${widget.data[`value${idx + 1}`]}${widget.data.unit}`,
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
