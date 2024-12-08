import { Avatar, Button, Typography } from "@mui/material";
import React, {
	useCallback,
	useMemo,
	useState,
	useContext,
	useRef,
} from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const { mode, setValue, widget, oidObject, getPropertyValue } =
		useContext(CollectionContext);

	const { data, widgetStates } = useData("oid");

	const [open, setOpen] = useState(false);

	const { textStyles, fontStyles } = useStyles(widget.style);

	const ref = useRef(null);

	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size } = useSize(ref, isEllipse);

	const oid = oidObject?._id;
	const oidValue = getPropertyValue("oid");
	const oidType = oidObject?.common?.type;
	const noIcon = widget.data.noIcon;
	const onlyStates = widget.data.onlyStates;

	const unit = widget.data.unit;
	const oidUnitValue =
		oidValue === 0 || oidValue === false
			? String(oidValue) && `${oidValue} ${unit}`
			: oidValue && `${oidValue} ${unit}`;

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

	const avatarColor = useMemo(() => {
		if (noIcon || !data.icon) {
			return data.textColor || textStyles.color || "background.default";
		}
		if (mode === "dark") {
			return data.iconColor || "background.default";
		}
		return data.iconColor || "text.primary";
	}, [mode, data, textStyles, noIcon]);

	const StateButton = (
		<Button
			disabled={widget.data.noButton}
			onClick={clickHandler}
			sx={{
				borderRadius: widget.data.circle || widget.data.ellipse ? "50%" : 0,
				boxSizing: "border-box",
				overflow: "hidden",
				width: "100%",
				height: "100%",
				color: data.iconColor || "background.default",
				"&:hover": {
					bgcolor: "transparent",
					filter: `brightness(${data.iconHover}%)`,
				},
			}}
		>
			<Avatar
				src={data.icon}
				slotProps={{
					img: { style: { objectFit: "contain" } },
				}}
				sx={{
					width: `calc(${size}px * ${data.iconSize} / 100)`,
					height: `calc(${size}px * ${data.iconSize} / 100)`,
					variant: "square",
					bottom: data.iconYOffset,
					left: data.iconXOffset,
					overflow: "visible",
					color: avatarColor,
					bgcolor: "transparent",
					filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
					transform: data.iconColor ? "translateY(-10000px)" : null,
					display: data.icon ? null : "flex",
					flexGrow: data.icon ? null : 1,
				}}
			>
				<Typography
					sx={{
						fontSize: `${data.valueSize}%`,
						...fontStyles,
						...textStyles,
						color: data.textColor,
					}}
				>
					{(noIcon || !data.icon) && (data.value || oidUnitValue)}
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
			<CollectionBase ref={ref}>{StateButton}</CollectionBase>
		</>
	);
}

export default StateCollection;
