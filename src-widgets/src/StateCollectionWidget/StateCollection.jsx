import { Avatar, Button, Typography } from "@mui/material";
import React, {
	useEffect,
	useCallback,
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
	const { setValue, widget, oidObject, getPropertyValue } =
		useContext(CollectionContext);

	const { data, widgetStates } = useData("oid");

	const _oidValue = getPropertyValue("oid");
	const [oidValue, setOidValue] = useState(() => _oidValue);

	const oidValueUnit =
		(oidValue || oidValue === 0 || oidValue === false) &&
		`${oidValue}${widget.data.unit}`;

	const [open, setOpen] = useState(false);

	const { textStyles, fontStyles } = useStyles(widget.style);

	const ref = useRef(null);

	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size } = useSize(ref, isEllipse);

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

	useEffect(() => {
		setOidValue(_oidValue);
	}, [_oidValue]);

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
				color:
					data.iconColorActive ||
					data.iconColor ||
					data.textColorActive ||
					data.textColor,
				"&:hover": {
					bgcolor: "transparent",
					filter: `brightness(${data.iconHover}%)`,
				},
			}}
		>
			<Avatar
				src={data.iconActive || data.icon}
				slotProps={{
					img: { style: { objectFit: "contain" } },
				}}
				sx={{
					width: `calc(${size}px * ${data.iconSizeOnly || 100} / 100)`,
					height: `calc(${size}px * ${data.iconSizeOnly || 100} / 100)`,
					variant: "square",
					bottom: data.iconYOffset,
					left: data.iconXOffset,
					overflow: "visible",
					bgcolor: "transparent",
					color: data.iconColorActive || data.iconColor,
					filter:
						(data.iconActive || data.icon) && "drop-shadow(0px 10000px 0)",
					transform: (data.iconActive || data.icon) && "translateY(-10000px)",
					display: data.icon ? null : "flex",
					flexGrow: data.icon ? null : 1,
				}}
			>
				<Typography
					variant="body2"
					sx={{
						...fontStyles,
						...textStyles,
						fontSize: data.valueSizeActive || data.valueSize,
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
			<CollectionBase ref={ref}>{StateButton}</CollectionBase>
		</>
	);
}

export default StateCollection;
