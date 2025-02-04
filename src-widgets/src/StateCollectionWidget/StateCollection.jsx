import { Avatar, Box, Button, Typography } from "@mui/material";
import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
	useContext,
} from "react";
import CollectionBase from "../components/CollectionBase";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
// import useOidValue from "../hooks/useOidValue";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const contentRef = useRef(null);
	const { setValue, widget, oidObject, getPropertyValue } =
		useContext(CollectionContext);
	const { data, widgetStates } = useData("oid");
	// const oidValue = useOidValue("oid");
	const oidValue = getPropertyValue("oid");

	/* const oidValueUnit =
		(oidValue || oidValue === 0 || oidValue === false) &&
		`${oidValue}${widget.data.unit}`; */

	const oidValueUnit =
		(typeof oidValue === "string" ||
			typeof oidValue === "number" ||
			typeof oidValue === "boolean") &&
		`${oidValue}${widget.data.unit}`;

	const [open, setOpen] = useState(false);

	const { textStyles, fontStyles } = useStyles(widget.style);

	const oid = oidObject?._id;
	const oidType = oidObject?.common?.type;
	const onlyStates = widget.data.onlyStates;

	const contentValue = data.alias || data.value || oidValueUnit;
	const current = contentRef.current;

	useEffect(() => {
		if (!contentValue || !current) return;
		current.innerHTML = contentValue;
	}, [contentValue, current]);

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
							ref={contentRef}
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
