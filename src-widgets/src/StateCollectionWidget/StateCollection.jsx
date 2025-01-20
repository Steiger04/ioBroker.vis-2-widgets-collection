import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useCallback, useState, useContext } from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const { setValue, widget, oidObject } = useContext(CollectionContext);
	const { data, widgetStates } = useData("oid");
	const oidValue = useOidValue("oid");

	const oidValueUnit =
		(oidValue || oidValue === 0 || oidValue === false) &&
		`${oidValue}${widget.data.unit}`;

	const [open, setOpen] = useState(false);

	const { textStyles, fontStyles } = useStyles(widget.style);

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;
	const onlyStates = widget.data.onlyStates;

	const clickHandler = useCallback(() => {
		switch (oidType) {
			case "boolean": {
				if (onlyStates) {
					setOpen(true);
				} else {
					setValue(oid, !oidValue);
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
	}, [oidType, oid, oidValue, setValue, onlyStates]);

	const StateButton = (
		<Button
			disabled={widget.data.noButton}
			onClick={clickHandler}
			sx={{
				overflow: "hidden",
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
			<Avatar
				variant="square"
				src={data.iconActive || data.icon}
				slotProps={{
					img: { style: { objectFit: "contain" } },
				}}
				sx={{
					overflow: "hidden",

					width: `calc(100% * ${data.iconSizeOnly || 100} / 100)`,
					height: `calc(100% * ${data.iconSizeOnly || 100} / 100)`,

					bottom: data.iconYOffset,
					left: data.iconXOffset,

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
					display: data.icon ? null : "flex",
				}}
			>
				<Typography
					variant="body2"
					sx={{
						...fontStyles,
						...textStyles,
						fontSize: data.valueSizeActive || data.valueSize,
						bgcolor: "transparent",
						color: data.textColorActive || data.textColor,
						textTransform: "none",
					}}
				>
					{(!data.iconActive || !data.icon) &&
						(data.alias || data.value || oidValueUnit)}
				</Typography>
			</Avatar>
		</Button>
	);

	return (
		<>
			{open && (
				<CollectionChangeDialog
					data={data}
					widgetStates={widgetStates}
					open={open}
					closeHandler={() => setOpen(false)}
				/>
			)}
			<CollectionBase data={data} oidValue={oidValue}>
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
					{StateButton}
				</Box>
			</CollectionBase>
		</>
	);
}

export default StateCollection;
