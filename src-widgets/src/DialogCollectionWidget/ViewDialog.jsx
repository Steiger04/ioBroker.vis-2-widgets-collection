import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, IconButton, Modal } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React, { useRef, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";

const getCssText = (node) => {
	const styles = window.getComputedStyle(node);

	if (styles.cssText !== "") {
		return styles.cssText;
	}

	const cssText = Object.values(styles).reduce(
		(css, propertyName) =>
			`${css}${propertyName}:${styles.getPropertyValue(propertyName)};`,
	);

	return cssText;
};

export default function ViewDialog({
	open,
	handleClose,
	widget,
	data,
	getWidgetView,
}) {
	const baseRef = useRef(null);
	const headerRef = useRef(null);

	const header = baseRef.current?.header;

	useEffect(() => {
		if (!widget.data.dialogHeaderAsTitle) return;

		if (header) {
			const cssText = getCssText(header);

			headerRef.current.style.cssText = cssText;
			headerRef.current.style.height = "auto";
			headerRef.current.style.width = "auto";

			header.style.width = "0px";
			header.style.height = "0px";

			headerRef.current.innerHTML = widget.data.header;
		}
	}, [header, widget.data.header, widget.data.dialogHeaderAsTitle]);

	const closeButton = (
		<Box
			sx={{
				position: "relative",
				width: "100%",

				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					px: 4,
				}}
			>
				<Box ref={headerRef} />
			</Box>

			<Box
				sx={{
					position: widget.data.dialogHeaderAsTitle ? "absolute" : "initial",
					right: 0,
				}}
			>
				<IconButton
					sx={{
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
			</Box>
		</Box>
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
					ref={baseRef}
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
