import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Modal } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import CollectionBase from "../components/CollectionBase";

export default function ViewDialog({
	open,
	handleClose,
	widget,
	data,
	getWidgetView,
}) {
	const closeButton = (
		<IconButton
			sx={{
				filter: "brightness(1.5)",
				color: (theme) =>
					data.frameBackgroundColor || theme.palette.background.primary,
				alignSelf: "flex-end",
			}}
			aria-label="delete"
			onClick={handleClose}
		>
			<CloseIcon />
		</IconButton>
	);

	return (
		<Modal
			onClose={handleClose}
			open={open}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				backgroundColor: widget.data.dialogBackgroundColor || "inherit",
			}}
		>
			<Box
				sx={{
					width: `${widget.data.dialogWidth}%`,
					height: `${widget.data.dialogHeight}%`,
				}}
			>
				<CollectionBase
					data={data}
					sx={{
						flexDirection: "column",
						background: data.backgroundColor || data.background,
					}}
				>
					{widget.data.dialogCloseButtonTop && closeButton}
					{widget.data.dialogCloseButtonTop && (
						<Divider
							sx={{
								width: "100%",
								opacity: "0.5",
								background: (theme) =>
									data.frameBackgroundColor || theme.palette.background.primary,
							}}
						/>
					)}
					<Box
						sx={{
							"::-webkit-scrollbar-track": {
								background: (theme) =>
									data.frameBackgroundColor &&
									alpha(data.frameBackgroundColor, 0.5),
							},
							"::-webkit-scrollbar-thumb": {
								opacity: "0.5",
								background: (theme) =>
									data.frameBackgroundColor &&
									alpha(data.frameBackgroundColor, 0.7),
							},
							position: "relative",
							overflow: "auto",

							width: "100%",
							height: "100%",
						}}
					>
						{getWidgetView(widget.data.view, {
							style: {
								// "background-color": "inherit",
							},
						})}
					</Box>

					{widget.data.dialogCloseButtonBottom && (
						<Divider
							sx={{
								width: "100%",
								opacity: "0.5",
								background: (theme) =>
									data.frameBackgroundColor || theme.palette.background.default,
							}}
						/>
					)}

					{widget.data.dialogCloseButtonBottom && closeButton}
				</CollectionBase>
			</Box>
		</Modal>
	);
}
