import {
	Avatar,
	Box,
	Button,
	Card,
	Paper,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useContext, useCallback, useRef } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import usePaperHeight from "./usePaperHeight";
import usePaperWidth from "./usePaperWidth";

function StateCollection() {
	const { getPropertyValue, widget, oidObject } = useContext(CollectionContext);

	console.log("inside StateCollection -> widget", widget);

	const refService = useRef(null);
	const paperWidth = usePaperWidth(refService);
	const paperHeight = usePaperHeight(refService);

	const theme = useTheme();

	console.log("inside StateCollection -> refService", refService);

	return (
		<Stack
			spacing={1}
			// component={widget.data.noCard ? Card : Box}
			component={Paper}
			sx={{
				padding: 4,
				height: "100%",
				width: "100%",
				"&.MuiCard-root": () =>
					widget.style["background-color"] && {
						borderRadius: 0,
						boxShadow: "none",
						backgroundColor: "transparent",
					},
				display: "flex",
				flexDirection: "column",
				// justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Box>
				<Typography>{oidObject?.common?.name}</Typography>
			</Box>

			<Box
				ref={refService}
				sx={{
					height: "100%",
					width: "100%",
					display: "inline-flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					// disabled
					sx={{
						width: paperWidth,
						height: paperHeight,
						p: 0,
						borderRadius: widget.data.circle ? "50%" : "0%",
					}}
				>
					<Avatar
						component={Paper}
						variant={widget.data.circle ? "round" : "rounded"}
						sx={{
							zIndex: 10000,
							width: paperWidth,
							height: paperHeight,
							// width: "auto",
							// height: "auto",
							opacity: 1,
							transition: "opacity 0s ease 0s",
							"&:hover": {
								opacity: 0.4,
								filter: "brightness(2)",
							},
							bgcolor: widget.style["background-color"]
								? widget.style["background-color"]
								: "inherit",
							"&.MuiPaper-elevation1": {
								boxShadow: "none",
							},
							filter: `drop-shadow(0px 1000px 0 ${widget.data.iconColor})`,
							transform: "translateY(-1000px)",
						}}
						src={oidObject?.common?.icon}
					>
						{/* <Typography variant="subtitle2">
							{String(getPropertyValue("oid"))}
						</Typography> */}
					</Avatar>
				</Button>
			</Box>

			<Box>
				<Typography variant="subtitle2">
					{String(getPropertyValue("oid"))}
				</Typography>
			</Box>
		</Stack>
	);
}

export default React.memo(StateCollection);
