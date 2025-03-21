import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useCallback, useState, useContext } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useHtmlValue from "../hooks/useHtmlValue";
import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const [contentRef, setContentRef] = useState(null);
	const { setValue, widget, oidObject } = useContext(CollectionContext);
	const { textStyles, fontStyles } = useStyles(widget.style);
	const { data, widgetStates } = useData("oid");
	const oidValue = useOidValue("oid");
	const [open, setOpen] = useState(false);

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;

	const onlyStates = widget.data.onlyStates;
	const clickHandler = useCallback(() => {
		switch (oidType) {
			case "boolean": {
				if (onlyStates) {
					setOpen(true);
				} else {
					if (widget.data.values_count === 1) {
						setValue(oid, oidValue);
					} else {
						setValue(oid, !oidValue);
					}
				}
				break;
			}

			case "number":
			case "string":
				setOpen(true);
				break;

			default:
				break;
		}
	}, [oidType, oid, oidValue, setValue, onlyStates, widget.data.values_count]);

	const StateButton = (
		<Button
			disabled={widget.data.onlyDisplay}
			onClick={clickHandler}
			sx={{
				width: "100%",
				height: "100%",

				color:
					data.iconColorActive ||
					data.iconColor ||
					data.textColorActive ||
					data.textColor,
				"&:hover": {
					bgcolor: "transparent",
					filter:
						(data.iconHoverActive && `brightness(${data.iconHoverActive})`) ||
						(data.iconHover && `brightness(${data.iconHover})`),
				},
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{!widget.data.noIcon && (data.iconActive || data.icon) && (
					<Box
						sx={{
							// overflow: "hidden",

							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexGrow: 1,

							width: "100%",
							height: "100%",
						}}
					>
						<Avatar
							variant="square"
							src={data.iconActive || data.icon}
							imgProps={{
								style: {
									objectFit: "contain",
								},
							}}
							sx={{
								overflow: "hidden",

								width:
									(typeof data.iconSizeOnly === "number" &&
										`calc(100% * ${data.iconSizeOnly} / 100)`) ||
									"100%",
								height:
									(typeof data.iconSizeOnly === "number" &&
										`calc(100% * ${data.iconSizeOnly} / 100)`) ||
									"100%",

								left: `calc(0px + ${data.iconXOffset})`,
								top: `calc(0px - ${data.iconYOffset})`,

								bgcolor: "transparent",
								color: data.iconColorActive || data.iconColor,
								filter:
									(data.iconActive || data.icon) &&
									(data.iconColorActive || data.iconColor) &&
									"drop-shadow(0px 10000px 0)",
								transform:
									(data.iconActive || data.icon) &&
									(data.iconColorActive || data.iconColor) &&
									"translateY(-10000px)",
								// display: data.icon ? null : "flex",
							}}
						/>
					</Box>
				)}

				{!widget.data.noValue && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexGrow: 1,

							width: "100%",
							height: "100%",
						}}
					>
						<Typography
							ref={setContentRef}
							variant="body2"
							sx={{
								...fontStyles,
								...textStyles,
								fontSize: data.valueSizeActive || data.valueSize,
								bgcolor: "transparent",
								color: data.textColorActive || data.textColor,
								textTransform: "none",
							}}
						/>
					</Box>
				)}
			</Box>
		</Button>
	);

	useHtmlValue(contentRef, oidValue, widget, data);

	const isValidType =
		oidType === "boolean" || oidType === "number" || oidType === "string";

	return (
		<>
			{open && (
				<CollectionChangeDialog
					data={{ sampleInterval: null, sampleIntervalValue: null, delay: 100 }}
					widgetStates={widgetStates}
					open={open}
					closeHandler={() => setOpen(false)}
				/>
			)}
			<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{StateButton}
				</Box>
			</CollectionBase>
		</>
	);
}

export default StateCollection;
