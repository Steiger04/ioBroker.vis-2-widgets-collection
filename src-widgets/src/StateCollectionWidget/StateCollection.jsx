import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, {
	useCallback,
	useMemo,
	useState,
	useContext,
	useRef,
	useEffect,
} from "react";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const {
		isSignalVisible,
		refService,
		mode,
		setValue,
		widget,
		oidObject,
		getPropertyValue,
	} = useContext(CollectionContext);

	const [open, setOpen] = useState(false);

	const styles = useStyles(widget.style);

	const ref = useRef(null);

	const isEllipse = !widget.data.square && !widget.data.circle;
	const { size, width, height } = useSize(ref, isEllipse);

	const oid = oidObject?._id;
	const oidValue = getPropertyValue("oid");
	const oidType = oidObject?.common?.type;
	const oidStates = oidObject?.common?.states;
	const oidIcon = oidObject?.common?.icon;
	const oidUnit = oidObject?.common?.unit;
	const oidName = oidObject?.common?.name;

	const noIcon = widget.data.noIcon;

	const unit = widget.data.unit || oidUnit || "";
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

	const data = useMemo(() => {
		function _data(ext) {
			return {
				textColor: widget.data[`textColor${ext}`],
				header: widget.data[`header${ext}`],
				headerSize: widget.data[`headerSize${ext}`],
				value: widget.data[`value${ext}`],
				valueSize: widget.data[`valueSize${ext}`],
				icon: !noIcon && (widget.data[`icon${ext}`] || oidIcon),
				iconSize: widget.data[`iconSize${ext}`],
				iconColor: widget.data[`iconColor${ext}`],
				iconHover: widget.data[`iconHover${ext}`],
				backgroundColor: widget.data[`backgroundColor${ext}`],
				background: widget.data[`background${ext}`],
			};
		}

		switch (oidType) {
			case "boolean":
				if (oidValue) {
					return _data("On");
				}
				return _data("Off");

			case "number":
			case "string":
				if (widget.data.withStates) {
					const value = oidStates[String(oidValue)];

					for (let i = 1; i <= widget.data.values_count; i++) {
						if (
							widget.data[`value${i}`] === value ||
							widget.data[`value${i}`] === String(oidValue)
						) {
							return _data(i);
						}
					}
				}

				if (oidValue) {
					return _data("On");
				}
				return _data("Off");

			default:
				return {};
		}
	}, [widget, oidType, oidValue, oidStates, oidIcon, noIcon]);

	const avatarColor = useMemo(() => {
		// console.log("StateCollection -> avatarColor -> data", data);

		if (noIcon || !data.icon) {
			return data.textColor || styles.color || "background.default";
		}
		if (mode === "dark") {
			return data.iconColor || "background.default";
		}
		return data.iconColor || "text.primary";
	}, [mode, data, styles, noIcon]);

	const current = refService.current
		? { ...refService.current?.children }
		: null;

	useEffect(() => {
		if (!current) return;

		const _current = refService.current?.children;

		const visible = [];
		for (let i = 0; i < widget.data["signals-count"]; i++) {
			if (isSignalVisible(i)) visible.push(i);
		}

		const children = [];
		Object.values(_current).forEach((child) => {
			if (child.children[0]?.className === "vis-signal-icon iconOwn")
				children.push(child);
		});

		children.forEach((child, idx) => {
			child.children[0].style.color =
				widget.data[`signals-color-${visible[idx]}`];
			child.children[0].style.filter = "drop-shadow(0px 10000px 0)";
			child.children[0].style.transform = "translateY(-10000px)";
		});
	}, [current, widget, refService, isSignalVisible]);

	return (
		<>
			{open && (
				<CollectionChangeDialog
					data={data}
					open={open}
					closeHandler={() => setOpen(false)}
				/>
			)}

			<Box
				sx={{
					width: "100%",
					height: "100%",
					overflow: "hidden",
					boxSizing: "border-box",
				}}
			>
				<Paper
					elevation={widget.data.onlyIcon ? 0 : 1}
					square={widget.data.squaredCorner}
					variant={widget.data.outlined ? "outlined" : "elevation"}
					sx={{
						boxShadow: widget.data.outlined ? 0 : 4,
						height: "100%",
						width: "100%",
						boxSizing: "border-box",
						// overflow: "hidden",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						...styles,
						backgroundColor: widget.data.onlyIcon
							? "transparent"
							: data.backgroundColor || styles.backgroundColor,
						background: data.background || styles.background,
					}}
				>
					<Stack
						spacing={0}
						sx={{
							height: "100%",
							width: "100%",
						}}
					>
						<Box
							sx={{
								px: widget.data.buttonPadding,
								pt: widget.data.buttonPadding / 2,
								mb: -widget.data.buttonPadding / 2,
							}}
						>
							<Typography
								sx={{
									color: data.textColor || styles.color || "background.default",
									fontSize: `${data.headerSize}%`,
								}}
							>
								{data.header || oidName}
							</Typography>
						</Box>
						<Box
							sx={{
								p: widget.data.buttonPadding,
								width: "100%",
								height: "100%",
								boxSizing: "border-box",
								overflow: "hidden",
							}}
						>
							<Box
								ref={ref}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									boxSizing: "border-box",
									// overflow: "visible",
									width: "100%",
									height: "100%",
								}}
							>
								<Paper
									elevation={
										widget.data.onlyIcon
											? 0
											: Number(widget.data.buttonElevation)
									}
									square={
										!widget.data.buttonPadding || widget.data.squaredCorner
									}
									sx={{
										height: height || "100%",
										width: width || "100%",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										bgcolor: widget.data.onlyIcon
											? "transparent"
											: data.backgroundColor || styles.backgroundColor,
										borderRadius:
											widget.data.circle || widget.data.ellipse ? "50%" : null,
									}}
								>
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
												// filter: "brightness(200%)",
												// transition: "filter 0.8s",
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
												filter: data.iconColor
													? "drop-shadow(0px 10000px 0)"
													: null,
												transform: data.iconColor
													? "translateY(-10000px)"
													: null,
												display: data.icon ? null : "flex",
												flexGrow: data.icon ? null : 1,
											}}
										>
											<Typography
												sx={{
													fontSize: `${data.valueSize}%`,
												}}
											>
												{(noIcon || !oidIcon) && (data.value || oidUnitValue)}
											</Typography>
										</Avatar>
									</Button>
								</Paper>
							</Box>
						</Box>

						<Box
							sx={{
								px: widget.data.buttonPadding,
								pb: widget.data.buttonPadding / 2,
								mt: -widget.data.buttonPadding / 2,
							}}
						>
							<Typography
								sx={{
									color: data.textColor || styles.color || "background.default",
									fontSize: `${data.valueSize}%`,
								}}
							>
								{!noIcon &&
									(data.icon || oidIcon) &&
									(data.value || oidUnitValue)}
							</Typography>
						</Box>
					</Stack>
				</Paper>
			</Box>
		</>
	);
}

export default StateCollection;
