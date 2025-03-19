import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";

import { LinearGauge, RadialGauge } from "canvas-gauges";

const TransparentImg =
	"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const findSegment = (highlights, value, maxValue) => {
	const segment = highlights.find((highlight) => {
		if (highlight.from === undefined || highlight.to === undefined) {
			return false;
		}
		return (
			value >= highlight.from &&
			(value < highlight.to ||
				(value === highlight.to && value === maxValue)) &&
			highlight.icon
		);
	});
	return segment || null;
};

const Gauge = (props) => {
	const gaugeRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		if (
			gaugeRef.current === null ||
			gaugeRef.current.options.gaugeType !== props.gaugeType
		) {
			const options = Object.assign({}, props, {
				renderTo: canvasRef.current,
			});

			switch (props.gaugeType) {
				case "radial":
					if (gaugeRef.current !== null) gaugeRef.current.destroy();
					gaugeRef.current = new RadialGauge(options).draw();
					break;

				case "linear":
					if (gaugeRef.current !== null) gaugeRef.current.destroy();
					gaugeRef.current = new LinearGauge(options).draw();
					break;

				default:
					break;
			}
		}
	}, [props]);

	useEffect(() => {
		if (gaugeRef.current !== null && props.width && props.height) {
			if (props.width > 30 && props.height > 30) {
				gaugeRef.current.value = props.value;
				gaugeRef.current.update(props);
			}
		}
	}, [props]);

	const iconSize =
		Boolean(props.gaugeWidgetData.iconSize) ||
		props.gaugeWidgetData.iconSize === 0
			? `${props.gaugeWidgetData.iconSize}%`
			: null;

	const segment = findSegment(
		props.highlights,
		props.value,
		Number(props.gaugeWidgetData.gaugeMaxValue) || 100,
	);

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",

				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				alt=""
				src={segment?.icon || props.gaugeData.icon || TransparentImg}
				style={{
					position: "relative",

					width:
						props.highlights[props.gaugeActiveIndex - 1]?.iconSize ??
						(iconSize || "50%"),
					height:
						props.highlights[props.gaugeActiveIndex - 1]?.iconSize ??
						(iconSize || "50%"),

					boxSizing: "border-box",
					objectFit: props.gaugeWidgetData.gaugeIconFit,
					top:
						(segment?.iconYOffset !== "0px" &&
							`calc(0px - ${segment?.iconYOffset})`) ||
						(props.gaugeWidgetData.iconYOffset !== "0px" &&
							`calc(0px - ${props.gaugeWidgetData.iconYOffset})`),
					left:
						(segment?.iconXOffset !== "0px" &&
							`calc(0px + ${segment?.iconXOffset})`) ||
						(props.gaugeWidgetData.iconXOffset !== "0px" &&
							`calc(0px + ${props.gaugeWidgetData.iconXOffset})`),

					color: props.gaugeData.iconColorActive || props.gaugeData.iconColor,
					filter:
						(props.gaugeData.iconColorActive || props.gaugeData.iconColor) &&
						"drop-shadow(0px 10000px 0)",
					transform:
						(props.gaugeData.iconColorActive || props.gaugeData.iconColor) &&
						"translateY(-10000px)",
				}}
			/>
			<canvas
				id="my-canvas"
				ref={canvasRef}
				style={{
					position: "absolute",
				}}
			/>
		</Box>
	);
};

export default Gauge;
