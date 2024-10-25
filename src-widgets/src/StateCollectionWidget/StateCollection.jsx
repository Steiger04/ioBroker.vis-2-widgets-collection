import React, { useMemo, useContext, useRef, useEffect } from "react";
import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import CollectionChangeDialog from "../components/CollectionChangeDialog";
import { CollectionContext } from "../components/CollectionProvider";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const { mode, values, setValue, widget, oidObject, getPropertyValue } =
		useContext(CollectionContext);

	const [open, setOpen] = React.useState(false);

	console.log("StateCollection -> widget", widget);
	console.log("StateCollection -> mode", mode);

	const styles = useStyles(widget.style);
	const refService = useRef(null);
	const size = useSize(refService);

	const clickHandler = () => {
		switch (oidObject?.common?.type) {
			case "boolean": {
				const value = getPropertyValue("oid");
				setValue(oidObject._id, !value, true);
				break;
			}

			case "number":
			case "string":
				setOpen(true);
				break;

			default:
				break;
		}
	};

	const data = useMemo(() => {
		function _data(ext) {
			return {
				textColor: widget.data[`textColor${ext}`],
				header: widget.data[`header${ext}`],
				headerSize: widget.data[`headerSize${ext}`],
				value: widget.data[`value${ext}`],
				valueSize: widget.data[`valueSize${ext}`],
				icon:
					!widget.data.noIcon &&
					(widget.data[`icon${ext}`] || oidObject?.common?.icon),
				iconSize: widget.data[`iconSize${ext}`],
				iconColor: widget.data[`iconColor${ext}`],
				iconHover: widget.data[`iconHover${ext}`],
				backgroundColor: widget.data[`backgroundColor${ext}`],
			};
		}

		const idValue = getPropertyValue("oid");
		switch (oidObject?.common?.type) {
			case "boolean":
				if (idValue) {
					return _data("On");
				}
				return _data("Off");

			case "number":
			case "string":
				if (widget.data.withStates) {
					const states = oidObject.common.states;
					const value = states[String(idValue)];

					for (let i = 1; i <= widget.data.values_count; i++) {
						if (widget.data[`value${i}`] === value) {
							return _data(i);
						}
					}
				}

				if (idValue) {
					return _data("On");
				}
				return _data("Off");

			default:
				return {};
		}
	}, [widget.data, oidObject, getPropertyValue]);

	const avatarColor = useMemo(() => {
		console.log("StateCollection -> avatarColor -> data", data);

		if (widget.data.noIcon) {
			return data.textColor;
		}
		if (mode === "dark") {
			return data.iconColor || "background.default";
		}
		return data.iconColor || "text.primary";
	}, [mode, data, widget.data.noIcon]);

	useEffect(() => {
		console.log("StateCollection -> values", values);
	}, [values]);

	useEffect(() => {
		console.log("StateCollection -> data", data);
	}, [data]);

	return (
		oidObject && (
			<>
				<CollectionChangeDialog
					data={data}
					open={open}
					closeHandler={() => setOpen(false)}
				/>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						overflow: "hidden",
					}}
				>
					<Paper
						elevation={widget.data.onlyIcon ? 0 : 1}
						square={widget.data.square}
						variant={widget.data.outlined ? "outlined" : "elevation"}
						sx={{
							boxShadow: widget.data.outlined ? 0 : 4,
							height: "100%",
							width: "100%",
							boxSizing: "border-box",
							overflow: "hidden",

							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: widget.data.onlyIcon
								? "transparent"
								: data.backgroundColor,
							...styles,
						}}
					>
						<Stack
							spacing={0}
							sx={{
								height: "100%",
								width: "100%",
								alignItems: "center",
							}}
						>
							<Box>
								<Typography
									sx={{
										color:
											widget.style.color ||
											data.textColor ||
											"background.default",
										fontSize: `${data.headerSize}%`,
									}}
								>
									{data.header || oidObject.common?.name}
								</Typography>
							</Box>
							<Box
								sx={{
									p: widget.data.buttonPadding,
									boxSizing: "border-box",
									overflow: "hidden",
									width: "100%",
									height: "100%",
								}}
							>
								<Paper
									elevation={widget.data.onlyIcon ? 0 : 4}
									square={!widget.data.buttonPadding || widget.data.square}
									sx={{
										height: "100%",
										width: "100%",
										overflow: "hidden",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										bgcolor: widget.data.onlyIcon
											? "transparent"
											: widget.style["background-color"] ||
												data.backgroundColor ||
												"background.default",
										borderRadius: widget.data.circle ? "50%" : null,
									}}
								>
									<Button
										disabled={widget.data.noButton}
										onClick={clickHandler}
										ref={refService}
										sx={{
											borderRadius: 0,
											boxSizing: "border-box",
											overflow: "hidden",
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
												color: avatarColor,
												objectFit: "contain",
												width: `calc(${size}px * ${data.iconSize} / 100)`,
												height: `calc(${size}px * ${data.iconSize} / 100)`,
												bgcolor: "transparent",
												filter: "drop-shadow(0px 10000px 0)",
												transform: "translateY(-10000px)",
											}}
										>
											<Typography
												sx={{
													color:
														widget.style.color ||
														data.textColor ||
														"background.default",
													fontSize: `${data.valueSize}%`,
												}}
											>
												{(widget.data.noIcon || !oidObject.common?.icon) &&
													(data.value || getPropertyValue("oid"))}
											</Typography>
										</Avatar>
									</Button>
								</Paper>
							</Box>

							<Box>
								<Typography
									sx={{
										color:
											widget.style.color ||
											data.textColor ||
											"background.default",
										fontSize: `${data.valueSize}%`,
									}}
								>
									{!widget.data.noIcon &&
										(data.icon || oidObject.common?.icon) &&
										(data.value || getPropertyValue("oid"))}
								</Typography>
							</Box>
						</Stack>
					</Paper>
				</Box>
			</>
		)
	);
}

export default StateCollection;
