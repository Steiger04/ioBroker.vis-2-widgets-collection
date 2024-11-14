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
	const data = useData();
	const [open, setOpen] = useState(false);

	const { textStyles, fontStyles } = useStyles(widget.style);

	const ref = useRef(null);

	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size } = useSize(ref, isEllipse);

	const oid = oidObject?._id;
	const oidValue = getPropertyValue("oid");
	const oidType = oidObject?.common?.type;
	const oidIcon = oidObject?.common?.icon;
	const noIcon = widget.data.noIcon;

	// const unit = widget.data.unit || oidUnit || "";
	const unit = widget.data.unit;
	const oidUnitValue =
		oidValue === 0
			? String(oidValue) && `${oidValue} ${unit}`
			: oidValue && `${oidValue} ${unit}`;

	const clickHandler = useCallback(() => {
		switch (oidType) {
			case "boolean": {
				setValue(oid, !oidValue);
				break;
			}

			case "number":
			case "string":
				setOpen(true);
				break;

			default:
				break;
		}
	}, [oidType, oid, oidValue, setValue]);

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
				borderRadius: 0,
				boxSizing: "border-box",
				// overflow: "hidden",
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
				variant="square"
				src={data.icon}
				sx={{
					overflow: "visible",
					color: avatarColor,
					objectFit: "contain",
					width: `calc(${size}px * ${data.iconSize} / 100)`,
					height: `calc(${size}px * ${data.iconSize} / 100)`,
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
					}}
				>
					{(noIcon || !oidIcon) && (data.value || oidUnitValue)}
				</Typography>
			</Avatar>
		</Button>
	);

	return (
		<>
			{open && (
				<CollectionChangeDialog
					data={data}
					open={open}
					closeHandler={() => setOpen(false)}
				/>
			)}
			<CollectionBase ref={ref}>{StateButton}</CollectionBase>
		</>
	);
}

export default StateCollection;
