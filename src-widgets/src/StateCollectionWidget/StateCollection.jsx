import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useRef } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection() {
	const { widget, oidObject, getPropertyValue } = useContext(CollectionContext);
	const styles = useStyles(widget.style);

	const refService = useRef(null);
	const size = useSize(refService);

	return (
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
								fontSize: `${widget.data.headerSize}%`,
							}}
						>
							{widget.data.header || oidObject?.common?.name}
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

								bgcolor: widget.style["background-color"]
									? widget.style["background-color"]
									: "background.paper",

								borderRadius: widget.data.circle ? "50%" : null,
							}}
						>
							<Button
								ref={refService}
								sx={{
									boxSizing: "border-box",
									overflow: "hidden",
									width: "100%",
									height: "100%",
									color: widget.data.iconColor
										? widget.data.iconColor
										: "background.paper",
									"&:hover": {
										bgcolor: "transparent",
										filter: "brightness(200%)",
										transition: "filter 0.8s",
									},
								}}
							>
								<Avatar
									variant="square"
									src={widget.data.icon}
									sx={{
										color: widget.data.iconColor
											? widget.data.iconColor
											: "background.paper",
										objectFit: "contain",
										width: `calc(${size}px * ${widget.data.iconSize} / 100)`,
										height: `calc(${size}px * ${widget.data.iconSize} / 100)`,
										bgcolor: "transparent",
										filter: "drop-shadow(0px 10000px 0)",
										transform: "translateY(-10000px)",
									}}
								/>
							</Button>
						</Paper>
					</Box>

					<Box>
						<Typography
							sx={{
								fontSize: `${widget.data.footerSize}%`,
							}}
						>
							{getPropertyValue("oid")}
						</Typography>
					</Box>
				</Stack>
			</Paper>
		</Box>
	);
}

export default StateCollection;
