import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Modal } from "@mui/material";
import React from "react";
import CollectionBase from "../components/CollectionBase";
export default function ViewDialog({
	open,
	handleClose,
	widget,
	data,
	getWidgetView,
}) {
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
					}}
				>
					<Box
						sx={{
							position: "relative",
							overflow: "auto",

							width: "100%",
							height: "100%",
						}}
					>
						{getWidgetView(widget.data.view, {
							style: {
								"background-color": "transparent",
							},
						})}
					</Box>

					{widget.data.dialogCloseButton && (
						<>
							<Divider
								sx={{
									width: "100%",
								}}
							/>

							<IconButton
								sx={{ alignSelf: "flex-end" }}
								aria-label="delete"
								onClick={handleClose}
							>
								<CloseIcon />
							</IconButton>
						</>
					)}
				</CollectionBase>
			</Box>
		</Modal>
	);
}
