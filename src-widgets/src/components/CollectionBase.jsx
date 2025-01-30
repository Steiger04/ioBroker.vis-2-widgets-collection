import { Box, Paper, Typography } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useSignals from "../hooks/useSignals";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

const CollectionBase = ({ children, data, oidValue, bgActive = true }) => {
	const [ref, setRef] = useState(null);
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const { wrappedContent, widget } = useContext(CollectionContext);
	const { backgroundStyles, borderStyles, textStyles, fontStyles } = useStyles(
		widget.style,
	);
	const { width, height } = useSize(ref);

	const oidValueUnit =
		(oidValue || oidValue === 0 || oidValue === false) &&
		`${oidValue}${widget.data.unit}`;

	useSignals();

	const footerValue = data.footer || data.alias || data.value || oidValueUnit;

	useEffect(() => {
		if (widget.data.noFooter || !footerValue) return;
		footerRef.current.innerHTML = footerValue;
	}, [footerValue, widget.data.noFooter]);

	useEffect(() => {
		if (widget.data.noHeader || !data.header) return;
		headerRef.current.innerHTML = data.header;
	}, [data.header, widget.data.noHeader]);

	return (
		<Paper
			className="BASE-PAPER-0"
			square={widget.data.squaredCorner}
			variant={widget.data.outlinedFrame ? "outlined" : "elevation"}
			sx={{
				overflow: "hidden",

				width: "100%",
				height: "100%",

				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",

				...backgroundStyles,
				// ...borderStyles,
				border: !wrappedContent ? null : borderStyles.border,
				borderWidth: !wrappedContent ? null : borderStyles.borderWidth,
				borderStyle: !wrappedContent ? null : borderStyles.borderStyle,
				borderRadius: !wrappedContent ? null : borderStyles.borderRadius,
				borderColor: !wrappedContent
					? data.frameBackgroundColorActive || data.frameBackgroundColor
					: borderStyles.borderColor,
				background: wrappedContent
					? widget.data.frameBackgroundColorActive ||
						data.frameBackgroundColorActive ||
						data.frameBackgroundColor ||
						widget.data.frameBackgroundActive ||
						data.frameBackgroundActive ||
						data.frameBackground
					: "transparent",
			}}
		>
			{!widget.data.noHeader && (
				<Box
					sx={{
						width: "100%",
						mt: widget.data.basePadding / 2,
						mb: -widget.data.basePadding / 2,
					}}
				>
					<Typography
						ref={headerRef}
						noWrap
						variant="body2"
						sx={{
							...fontStyles,
							...textStyles,
							fontSize: data.headerSize,
							color:
								widget.data.textColor || data.textColorActive || data.textColor,
						}}
					/>
				</Box>
			)}

			<Box
				className="BASE-BOX-1"
				ref={setRef}
				sx={{
					overflow: "hidden",

					p: widget.data.basePadding,

					width: "100%",
					height: "100%",

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Paper
					className="BASE-PAPER-1"
					elevation={widget.data.baseElevation}
					square={!widget.data.basePadding || widget.data.squaredCorner}
					variant={widget.data.outlined ? "outlined" : "elevation"}
					sx={{
						overflow: "hidden",

						width: width,
						height: height,
						// width: "100%",
						// height: "100%",

						display: "flex",
						justifyContent: "center",
						alignItems: "center",

						borderColor: !wrappedContent
							? data.backgroundColorActive || data.backgroundColor
							: null,
						background: wrappedContent
							? widget.data.backgroundColorActive ||
								(bgActive && data.backgroundColorActive) ||
								data.backgroundColor ||
								widget.data.backgroundActive ||
								(bgActive && data.backgroundActive) ||
								data.background
							: "transparent",
						borderRadius:
							widget.data.circle || widget.data.ellipse ? "50%" : null,
					}}
				>
					{children}
				</Paper>
			</Box>

			{!widget.data.noFooter && (
				<Box
					sx={{
						width: "100%",
						mt: -widget.data.basePadding / 2,
						mb: widget.data.basePadding / 2,
					}}
				>
					<Typography
						ref={footerRef}
						noWrap
						variant="body2"
						sx={{
							...fontStyles,
							...textStyles,
							fontSize: data.footerSize,
							color:
								widget.data.textColor || data.textColorActive || data.textColor,
						}}
					/>
				</Box>
			)}
		</Paper>
	);
};

export default CollectionBase;
