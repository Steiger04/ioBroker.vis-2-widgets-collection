import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useMemo, useState, useContext, useRef, useEffect } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const { values, setValue, widget, oidObject, getPropertyValue } =
		useContext(CollectionContext);

	console.log("StateCollection -> widget", widget);

	const [state, setState] = useState(() => !!getPropertyValue("oid"));

	const styles = useStyles(widget.style);
	const refService = useRef(null);
	const size = useSize(refService);

	const clickHandler = () => {
		setState((prev) => {
			if (oidObject._id) {
				setValue(oidObject._id, !prev, true);
			}
			return !prev;
		});
	};

	const data = useMemo(() => {
		console.log("useMemo");

		let data;

		if (state) {
			data = {
				textColor: widget.data.textColorOn,
				header: widget.data.headerOn,
				headerSize: widget.data.headerSizeOn,
				value: widget.data.valueOn,
				valueSize: widget.data.valueSizeOn,
				icon:
					!widget.data.noIcon &&
					(widget.data.iconOn || oidObject?.common?.icon),
				iconSize: widget.data.iconSizeOn,
				iconColor: widget.data.iconColorOn,
				iconHover: widget.data.iconHoverOn,
				backgroundColor: widget.data.backgroundColorOn,
			};
		} else {
			data = {
				textColor: widget.data.textColorOff,
				header: widget.data.headerOff,
				headerSize: widget.data.headerSizeOff,
				value: widget.data.valueOff,
				valueSize: widget.data.valueSizeOff,
				icon:
					!widget.data.noIcon &&
					(widget.data.iconOff || oidObject?.common?.icon),
				iconSize: widget.data.iconSizeOff,
				iconColor: widget.data.iconColorOff,
				iconHover: widget.data.iconHoverOff,
				backgroundColor: widget.data.backgroundColorOff,
			};
		}

		return data;
	}, [state, widget.data, oidObject]);

	useEffect(() => {
		console.log("StateCollection -> state", state);
	}, [state]);

	useEffect(() => {
		console.log("StateCollection -> values", values);
	}, [values]);

	useEffect(() => {
		console.log("StateCollection -> data", data);
	}, [data]);

	return (
		oidObject && (
			<Box
				sx={{
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
			>
				<Paper
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
						backgroundColor: data.backgroundColor,
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
									color: widget.style.color || data.textColor,
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
								elevation={4}
								square={widget.data.square}
								sx={{
									height: "100%",
									width: "100%",
									overflow: "hidden",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",

									/* bgcolor: widget.style["background-color"]
										? widget.style["background-color"]
										: "background.paper", */

									bgcolor:
										widget.style["background-color"] ||
										data.backgroundColor ||
										"background.paper",

									borderRadius: widget.data.circle ? "50%" : null,
								}}
							>
								<Button
									onClick={clickHandler}
									ref={refService}
									sx={{
										boxSizing: "border-box",
										overflow: "hidden",
										width: "100%",
										height: "100%",
										color: data.iconColor ? data.iconColor : "background.paper",
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
											color: data.iconColor
												? data.iconColor
												: "background.paper",
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
												color: data.textColor,
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
									color: widget.style.color || data.textColor,
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
		)
	);
}

export default StateCollection;
