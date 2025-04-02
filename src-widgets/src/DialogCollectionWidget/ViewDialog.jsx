import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Modal, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useRef, useState, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";

export default function ViewDialog({
	open,
	handleClose,
	widget,
	data,
	getWidgetView,
	fontStyles,
	textStyles,
}) {
	const baseRef = useRef(null);
	const [titleRef, setTitleRef] = useState(null);

	const header = baseRef.current?.header;

	useEffect(() => {
		if (!widget.data.dialogHeaderAsTitle) return;

		if (header && titleRef) {
			if (widget.data.dialogHeaderAsTitle) {
				header.style.width = "0px";
				header.style.height = "0px";
			}

			titleRef.innerHTML = data.header;
			titleRef.style.height = "auto";
			titleRef.style.width = "auto";
		}
	}, [header, titleRef, data.header, widget.data.dialogHeaderAsTitle]);

	const iconButton = (
		<IconButton
			sx={{
				alignSelf: "flex-end",

				filter: "brightness(1.5)",
				color: (theme) =>
					widget.data.dialogCloseButtonColor ||
					data.frameBackgroundColor ||
					theme.palette.background.primary,
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
					width: widget.data.dialogInPixel
						? `${widget.data.dialogWidth}px`
						: `${widget.data.dialogWidth}%`,
					height: widget.data.dialogInPixel
						? `${widget.data.dialogHeight}px`
						: `${widget.data.dialogHeight}%`,
				}}
			>
				<CollectionBase
					ref={baseRef}
					data={data}
					sx={{
						flexDirection: "column",
						background: data.backgroundColor || data.background,
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							height: "auto",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							p:
								widget.data.dialogCloseButtonTop ||
								!widget.data.dialogHeaderAsTitle
									? 0
									: 2,
						}}
					>
						<Box
							sx={{
								position: "absolute",
								left: 0,
								width: "100%",
							}}
						>
							<Typography
								ref={setTitleRef}
								noWrap
								variant="body2"
								sx={{
									...fontStyles,
									...textStyles,
									fontSize: data.headerSize,
									color: data.textColor,
									px: widget.data.dialogCloseButtonTop ? 4 : 0,
								}}
							/>
						</Box>

						{widget.data.dialogCloseButtonTop && iconButton}
					</Box>

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

					{widget.data.dialogCloseButtonBottom && iconButton}
				</CollectionBase>
			</Box>
		</Modal>
	);
}
