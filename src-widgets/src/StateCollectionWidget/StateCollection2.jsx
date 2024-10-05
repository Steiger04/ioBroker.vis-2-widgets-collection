import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useRef } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

function StateCollection2() {
	const { widget } = useContext(CollectionContext);
	const styles = useStyles(widget.style);

	const refService = useRef(null);
	const size = useSize(refService);

	console.log("inside StateCollection2 -> widget", widget.style);

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
					/* bgcolor: widget.style["background-color"]
						? widget.style["background-color"]
						: "background.paper", */
					boxShadow: widget.data.outlined ? 0 : 4,
					p: widget.data.buttonPadding,
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
					spacing={1}
					sx={{
						height: "100%",
						width: "100%",
						alignItems: "center",
					}}
				>
					<Box>{<Typography>Küchenfenster</Typography>}</Box>
					<Paper
						ref={refService}
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
							sx={{
								width: "100%",
								height: "100%",
								color: widget.style["background-color"]
									? widget.style["background-color"]
									: "background.paper",
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
					<Box>{<Typography>auf</Typography>}</Box>
				</Stack>
			</Paper>
		</Box>
	);
}

export default StateCollection2;
