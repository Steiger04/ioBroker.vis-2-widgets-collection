import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { forwardRef, useContext, useEffect } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useSize from "../hooks/useSize";
import useStyles from "../hooks/useStyles";

const CollectionBase = forwardRef(function CollectionBase({ children }, ref) {
	const { isSignalVisible, refService, widget, getPropertyValue } =
		useContext(CollectionContext);
	const { backgroundStyles, borderStyles, textStyles, fontStyles } = useStyles(
		widget.style,
	);
	const { data } = useData("oid");

	const isEllipse = !widget.data.square && !widget.data.circle;

	const { width, height } = useSize(ref, isEllipse);

	const oidValue = getPropertyValue("oid");
	// const oidName = oidObject?.common?.name;

	const noHeader = widget.data.noHeader;
	const noFooter = widget.data.noFooter;

	const unit = widget.data.unit;

	const oidUnitValue =
		oidValue === 0 || oidValue === false
			? String(oidValue) && `${oidValue}${unit}`
			: oidValue && `${oidValue}${unit}`;

	useEffect(() => {
		if (!refService?.current) return;

		const _current = refService.current?.children;

		const visible = [];
		for (let i = 0; i < widget.data["signals-count"]; i++) {
			if (isSignalVisible(i)) visible.push(i);
		}

		const children = [];
		Object.values(_current).forEach((child) => {
			if (child.children[0]?.className === "vis-signal-icon iconOwn")
				children.push(child.children[0]);
		});

		children.forEach((child, idx) => {
			const signalColor = widget.data[`signals-color-${visible[idx]}`];

			child.style.color = signalColor;
			child.style.filter = signalColor ? "drop-shadow(0px 10000px 0)" : null;
			child.style.transform = signalColor ? "translateY(-10000px)" : null;
		});

		// console.log("widget.data", widget.data);
	}, [widget, refService, isSignalVisible]);

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				overflow: "hidden",
				boxSizing: "border-box",
			}}
		>
			<Paper
				elevation={widget.data.onlyTransparent ? 0 : 1}
				square={widget.data.squaredCorner}
				variant={widget.data.outlined ? "outlined" : "elevation"}
				sx={{
					...backgroundStyles,
					...borderStyles,
					boxShadow: widget.data.outlined ? 0 : 4,
					height: "100%",
					width: "100%",
					boxSizing: "border-box",
					// overflow: "hidden",

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					bgcolor: widget.data.onlyTransparent
						? "transparent"
						: data.backgroundColor || backgroundStyles.backgroundColor,
					background: data.background || backgroundStyles.background,
				}}
			>
				<Stack
					sx={{
						height: "100%",
						width: "100%",
					}}
				>
					<Box
						sx={{
							px: widget.data.basePadding,
							pt: !widget.data.basePadding ? 0.5 : widget.data.basePadding / 2,
							pb: !widget.data.basePadding ? 0.5 : -widget.data.basePadding / 2,
						}}
					>
						<Typography
							sx={{
								...fontStyles,
								...textStyles,
								fontSize: `${data.headerSize}%` || fontStyles.fontSize,
								color:
									data.textColor || textStyles.color || "background.default",
							}}
						>
							{!noHeader && data.header}
						</Typography>
					</Box>
					<Box
						sx={{
							p: widget.data.basePadding,
							width: "100%",
							height: "100%",
							boxSizing: "border-box",
							overflow: "hidden",
						}}
					>
						<Box
							ref={ref}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								boxSizing: "border-box",
								overflow: "visible",
								width: "100%",
								height: "100%",
							}}
						>
							<Paper
								style={{ backgroundColor: "transparent" }}
								elevation={
									widget.data.onlyTransparent
										? 0
										: Number(widget.data.baseElevation)
								}
								square={!widget.data.basePadding || widget.data.squaredCorner}
								sx={{
									height: height || "100%",
									width: width || "100%",
									// overflow: "visible",
									overflow: "hidden",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									bgcolor: widget.data.onlyTransparent
										? "transparent"
										: data.backgroundColor || backgroundStyles.backgroundColor,
									borderRadius:
										widget.data.circle || widget.data.ellipse ? "50%" : null,
								}}
							>
								{children}
							</Paper>
						</Box>
					</Box>

					<Box
						sx={{
							px: widget.data.basePadding,
							pt: !widget.data.basePadding ? 0.5 : widget.data.basePadding / 2,
							pb: !widget.data.basePadding ? 0.5 : widget.data.basePadding / 2,
						}}
					>
						<Typography
							sx={{
								...fontStyles,
								...textStyles,
								fontSize: `${data.footerSize}%` || fontStyles.fontSize,
								color:
									data.textColor || textStyles.color || "background.default",
							}}
						>
							{/* {(data.icon && !noFooter && (data.value || oidUnitValue)) ||
								(!noFooter && (data.value || oidUnitValue))} */}
							{!noFooter &&
								(data.footer || data.alias || data.value || oidUnitValue)}
						</Typography>
					</Box>
				</Stack>
			</Paper>
		</Box>
	);
});

export default CollectionBase;
