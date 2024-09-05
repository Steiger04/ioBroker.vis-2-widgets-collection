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

function StateCollection() {
	const refService = useRef(null);
	const { getPropertyValue, widget, oidObject } = useContext(CollectionContext);

	console.log("OID OBJECT", oidObject);

	const paperWidth = useCallback(() => {
		if (refService?.current?.clientWidth && refService?.current?.clientHeight) {
			if (refService.current.clientWidth < refService.current.clientHeight) {
				if (widget.data.noCard) {
					return refService.current.clientWidth;
				}
				return refService.current.clientWidth;
			}
			if (widget.data.noCard) {
				return refService.current.clientHeight;
			}
			return refService.current.clientHeight;
		}
		return "100%";
	}, [widget.data.noCard]);

	const paperHeight = useCallback(() => {
		if (refService?.current?.clientHeight && refService?.current?.clientWidth) {
			if (refService.current.clientHeight < refService.current.clientWidth) {
				if (widget.data.noCard) {
					return refService.current.clientHeight;
				}
				return refService.current.clientHeight;
			}
			if (widget.data.noCard) {
				return refService.current.clientWidth;
			}
			return refService.current.clientWidth;
		}
		return "100%";
	}, [widget.data.noCard]);

	const theme = useTheme();

	return (
		<Stack
			component={widget.data.noCard ? Card : Box}
			spacing={1}
			sx={{
				height: "100%",
				width: "100%",
				"&.MuiCard-root": () =>
					widget.style["background-color"] && {
						borderRadius: 0,
						boxShadow: "none",
						backgroundColor: "transparent",
					},
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
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					// disabled
					sx={{
						p: 0,
						borderRadius: widget.data.circle ? "50%" : "0%",
						width: paperWidth,
						height: paperHeight,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Avatar
						component={Paper}
						variant={widget.data.circle ? "round" : "rounded"}
						sx={{
							opacity: 1,
							transition: "opacity 0s ease 0s",
							"&:hover": {
								opacity: 0.4,
								filter: "brightness(2)",
							},
							width: "100%",
							height: "100%",
							bgcolor: widget.style["background-color"]
								? widget.style["background-color"]
								: "inherit",
							"&.MuiPaper-elevation1": {
								boxShadow: "none",
							},
						}}
						src={oidObject?.common?.icon}
					>
						<Typography variant="subtitle2">
							{String(getPropertyValue("oid"))}
						</Typography>
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
