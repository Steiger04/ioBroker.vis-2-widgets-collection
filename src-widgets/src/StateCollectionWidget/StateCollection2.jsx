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
		<Paper
			ref={refService}
			square={widget.data.square}
			variant={widget.data.outlined ? "outlined" : "elevation"}
			sx={{
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
				sx={{
					height: "100%",
					width: "100%",
					alignItems: "center",
				}}
			>
				<Box>{<Typography>Licht</Typography>}</Box>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						overflow: "hidden",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Button
						component={Paper}
						elevation={2}
						sx={{
							p: 0,
							borderRadius: widget.data.circle ? "50%" : "0%",
							bgcolor: widget.style["background-color"]
								? widget.style["background-color"]
								: "background.default",
						}}
					>
						<Avatar
							sx={{
								width: size,
								height: size,
								bgcolor: "transparent",
								filter: `drop-shadow(0px 1000px 0 ${widget.data.iconColor})`,
								transform: "translateY(-1000px)",
							}}
						/>
					</Button>
				</Box>
				<Box>{<Typography>Schlafzimmer</Typography>}</Box>
			</Stack>
		</Paper>
	);
}

export default StateCollection2;
