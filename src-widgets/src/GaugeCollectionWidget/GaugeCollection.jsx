import { Box } from "@mui/material";
import React, { useContext, useMemo, useRef } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";
import Gauge from "./Gauge";

function GaugeCollection() {
	const gaugeRef = useRef(null);
	const { oidObject, widget } = useContext(CollectionContext);

	const { data, states } = useData("oid");
	const oidValue = useOidValue("oid");

	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "number";

	const majorTicks = useMemo(() => {
		const minValue = Number(widget.data.gaugeMinValue) || 0;
		const maxValue = Number(widget.data.gaugeMaxValue) || 100;

		const _majorTicks = [];

		if (widget.data.gaugeMajorTicks && widget.data.gaugeMajorTicks > 0) {
			for (let i = 0; i <= widget.data.gaugeMajorTicks; i++) {
				const value =
					minValue +
					((maxValue - minValue) / widget.data.gaugeMajorTicks || 1) * i;
				// zwei Nachkommastellen
				_majorTicks.push(Math.round(value * 100) / 100);
			}
		}

		return _majorTicks;
	}, [
		widget.data.gaugeMinValue,
		widget.data.gaugeMaxValue,
		widget.data.gaugeMajorTicks,
	]);

	const highlights = useMemo(() => {
		const _highlights = [];
		const maxValue = Number(widget.data.gaugeMaxValue) || 100;

		states.forEach(({ value, textColor }, index) => {
			const nextValue = states[index + 1]?.value || maxValue;
			const nextIcon = states[index]?.icon || null;
			const nextIconSize = states[index]?.iconSize || null;
			const nextIconXOffset = states[index]?.iconXOffset || null;
			const nextIconYOffset = states[index]?.iconYOffset || null;

			_highlights.push({
				from: value,
				to: nextValue,
				color: textColor || "transparent",
				icon: nextIcon,
				iconSize: nextIconSize,
				iconXOffset: nextIconXOffset,
				iconYOffset: nextIconYOffset,
			});
		});

		// Set the last highlight to maxValue if the last state value is less than maxValue
		if (states.length > 0 && states[states.length - 1].value < maxValue) {
			_highlights[_highlights.length - 1].to = maxValue;
		}

		return _highlights;
	}, [states, widget.data.gaugeMaxValue]);

	return (
		<CollectionBase isValidType={isValidType} data={data} oidValue={oidValue}>
			{/* {data.icon && (
				<img
					alt=""
					src={data.icon}
					style={{
						position: "absolute",
						top: `calc(0px + ${widget.data.iconYOffset})`,
						right: `calc(0px + ${widget.data.iconXOffset})`,
						width: data.iconSize,
						height: data.iconSize,
						color: data.iconColor,
						filter: data.iconColor ? "drop-shadow(0px 10000px 0)" : null,
						transform: data.iconColor ? "translateY(-10000px)" : null,
					}}
				/>
			)} */}

			<Box
				ref={gaugeRef}
				sx={{
					width: "100%",
					height: "100%",

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Gauge
					gaugeData={data}
					gaugeWidgetData={widget.data}
					gaugeType={widget.data.gaugeType}
					// Basic Options
					width={
						gaugeRef.current?.clientWidth - widget.data.gaugePadding > 0
							? gaugeRef.current?.clientWidth - widget.data.gaugePadding
							: gaugeRef.current?.clientWidth
					}
					height={
						gaugeRef.current?.clientHeight - widget.data.gaugePadding > 0
							? gaugeRef.current?.clientHeight - widget.data.gaugePadding
							: gaugeRef.current?.clientHeight
					}
					minValue={
						Number(widget.data.gaugeMinValue)
							? Number(widget.data.gaugeMinValue)
							: 0
					}
					maxValue={
						Number(widget.data.gaugeMaxValue)
							? Number(widget.data.gaugeMaxValue)
							: 100
					}
					value={oidValue}
					units={widget.data.unit}
					title={data.header}
					// Ticks Bar Options
					exactTicks={widget.data.gaugeExactTicks}
					majorTicks={majorTicks}
					minorTicks={widget.data.gaugeMinorTicks || 0}
					strokeTicks={widget.data.gaugeStrokeTicks}
					majorTicksInt={widget.data.gaugeMajorTicksInt || 1}
					majorTicksDec={widget.data.gaugeMajorTicksDec || 0}
					highlights={highlights}
					highlightsWidth={widget.data.gaugeHighlightsWidth || 15}
					numbersMargin={widget.data.gaugeNumbersMargin || 1}
					// Progress Bar Options
					barWidth={
						widget.data.gaugeBarWidth && widget.data.gaugeBarWidth <= 50
							? widget.data.gaugeBarWidth
							: 20
					}
					barStrokeWidth={widget.data.gaugeBarStrokeWidth || 0}
					barProgress={widget.data.gaugeBarProgress}
					barShadow={widget.data.gaugeBarShadow || 0}
					// Animation Options
					animation={widget.data.gaugeAnimation}
					animationDuration={widget.data.gaugeAnimationDuration || 500}
					animationRule={widget.data.gaugeAnimationRule || "cycle"}
					animatedValue={widget.data.gaugeAnimatedValue}
					animateOnInit={widget.data.gaugeAnimateOnInit}
					// Color Options
					colorPlate={widget.data.gaugeColorPlate || "rgba(0,0,0,0)"}
					colorPlateEnd={widget.data.gaugeColorPlateEnd || "rgba(0,0,0,0)"}
					colorMajorTicks={widget.data.gaugeColorMajorTicks || "#444"}
					colorMinorTicks={widget.data.gaugeColorMinorTicks || "#666"}
					colorStrokeTicks={widget.data.gaugeColorStrokeTicks || "#444"}
					colorTitle={widget.data.gaugeColorTitle || "#888"}
					colorUnits={widget.data.gaugeColorUnits || "#888"}
					colorNumbers={widget.data.gaugeColorNumbers || "#444"}
					colorNeedle={widget.data.gaugeColorNeedle || "rgba(240,128,128,1)"}
					colorNeedleEnd={
						widget.data.gaugeColorNeedleEnd || "rgba(255,160,122,.9)"
					}
					colorValueText={widget.data.gaugeColorValueText || "#444"}
					colorValueTextShadow={
						widget.data.gaugeColorValueTextShadow || "rgba(0,0,0,0.3)"
					}
					colorBorderShadow={
						widget.data.gaugeColorBorderShadow || "rgba(0,0,0,0.5)"
					}
					colorBorderOuter={widget.data.gaugeColorBorderOuter || "#ddd"}
					colorBorderOuterEnd={widget.data.gaugeColorBorderOuterEnd || "#aaa"}
					colorBorderMiddle={widget.data.gaugeColorBorderMiddle || "#eee"}
					colorBorderMiddleEnd={
						widget.data.gaugeColorBorderMiddleEnd || "#f0f0f0"
					}
					colorBorderInner={widget.data.gaugeColorBorderInner || "#fafafa"}
					colorBorderInnerEnd={widget.data.gaugeColorBorderInnerEnd || "#ccc"}
					colorValueBoxRect={widget.data.gaugeColorValueBoxRect || "#888"}
					colorValueBoxRectEnd={widget.data.gaugeColorValueBoxRectEnd || "#666"}
					colorValueBoxBackground={
						widget.data.gaugeColorValueBoxBackground || "#babab2"
					}
					colorValueBoxShadow={
						widget.data.gaugeColorValueBoxShadow || "rgba(0,0,0,1)"
					}
					colorNeedleShadowUp={
						widget.data.gaugeColorNeedleShadowUp || "rgba(2,255,255,0.2)"
					}
					colorNeedleShadowDown={
						widget.data.gaugeColorNeedleShadowDown || "rgba(188,143,143,0.45)"
					}
					colorBarStroke={widget.data.gaugeColorBarStroke || "#222"}
					colorBarProgress={widget.data.gaugeColorBarProgress || "#ccc"}
					colorBarShadow={widget.data.gaugeColorBarShadow || "#000"}
					highlightsLineCap={widget.data.gaugeHighlightsLineCap || "butt"}
					// Needle Configuration Options
					needle={widget.data.gaugeNeedle === true}
					needleShadow={widget.data.gaugeNeedleShadow === true}
					needleType={widget.data.gaugeNeedleType || "arrow"}
					needleStart={widget.data.gaugeNeedleStart || 5}
					needleEnd={widget.data.gaugeNeedleEnd || 85}
					needleWidth={widget.data.gaugeNeedleWidth || 4}
					// Borders Options
					borders={widget.data.gaugeBorders}
					borderOuterWidth={widget.data.gaugeBorderOuterWidth || 3}
					borderMiddleWidth={widget.data.gaugeBorderMiddleWidth || 3}
					borderInnerWidth={widget.data.gaugeBorderInnerWidth || 3}
					borderShadowWidth={widget.data.gaugeBorderShadowWidth || 3}
					// Value Box Options
					valueBox={widget.data.gaugeValueBox}
					valueBoxStroke={widget.data.gaugeValueBoxStroke || 5}
					valueBoxWidth={widget.data.gaugeValueBoxWidth || 0}
					valueText={widget.data.gaugeValueText || ""}
					valueTextShadow={widget.data.gaugeValueTextShadow}
					valueBoxBorderRadius={widget.data.gaugeValueBoxBorderRadius || 2.5}
					// Fonts Customization Options
					fontNumbers={widget.data.gaugeFontNumbers || "Arial"}
					fontTitle={widget.data.gaugeFontTitle || "Arial"}
					fontUnits={widget.data.gaugeFontUnits || "Arial"}
					fontValue={widget.data.gaugeFontValue || "Arial"}
					fontNumbersSize={widget.data.gaugeFontNumbersSize || 20}
					fontTitleSize={widget.data.gaugeFontTitleSize || 24}
					fontUnitsSize={widget.data.gaugeFontUnitsSize || 22}
					fontValueSize={widget.data.gaugeFontValueSize || 26}
					fontNumbersStyle={widget.data.gaugeFontNumbersStyle || "normal"}
					fontTitleStyle={widget.data.gaugeFontTitleStyle || "normal"}
					fontUnitsStyle={widget.data.gaugeFontUnitsStyle || "normal"}
					fontValueStyle={widget.data.gaugeFontValueStyle || "normal"}
					fontNumbersWeight={widget.data.gaugeFontNumbersWeight || "normal"}
					fontTitleWeight={widget.data.gaugeFontTitleWeight || "normal"}
					fontUnitsWeight={widget.data.gaugeFontUnitsWeight || "normal"}
					fontValueWeight={widget.data.gaugeFontValueWeight || "normal"}
					// Linear Borders Options
					borderRadius={widget.data.gaugeBorderRadius || 0}
					// Linear Progress Bar Options
					barBeginCircle={
						widget.data.gaugeBarBeginCircle < 12
							? 30
							: widget.data.gaugeBarBeginCircle
					}
					barLength={widget.data.gaugeBarLength || 85}
					// Linear Coloring Options
					colorBarEnd={widget.data.gaugeColorBarEnd || ""}
					colorBarProgressEnd={widget.data.gaugeColorBarProgressEnd || ""}
					// Linear Element Positioning Options
					tickSide={widget.data.gaugeTickSide || "both"}
					needleSide={widget.data.gaugeNeedleSide || "both"}
					numberSide={widget.data.gaugeNumberSide || "both"}
					// Linear Ticks Bar Options
					ticksWidth={widget.data.gaugeTicksWidth || 10}
					ticksWidthMinor={widget.data.gaugeTicksWidthMinor || 5}
					ticksPadding={widget.data.gaugeTicksPadding || 5}
					// Radial Ticks Bar Options
					ticksAngle={widget.data.gaugeTicksAngle || 270}
					startAngle={widget.data.gaugeStartAngle || 45}
					// Radial Coloring Options
					colorNeedleCircleOuter={
						widget.data.gaugeColorNeedleCircleOuter || "#f0f0f0"
					}
					colorNeedleCircleOuterEnd={
						widget.data.gaugeColorNeedleCircleOuterEnd || "#ccc"
					}
					colorNeedleCircleInner={
						widget.data.gaugeColorNeedleCircleInner || "#e8e8e8"
					}
					colorNeedleCircleInnerEnd={
						widget.data.gaugeColorNeedleCircleInnerEnd || "#f5f5f5"
					}
					colorNeedleCircleShadowUp={
						widget.data.gaugeColorNeedleCircleShadowUp || "rgba(2,255,255,0.2)"
					}
					// Radial Needle Options
					needleCircleSize={widget.data.gaugeNeedleCircleSize || 10}
					needleCircleInner={widget.data.gaugeNeedleCircleInner}
					needleCircleOuter={widget.data.gaugeNeedleCircleOuter}
					// Radial Animation Options
					animationTarget={widget.data.gaugeAnimationTarget || "needle"}
					useMinPath={widget.data.gaugeUseMinPath}
				/>
			</Box>
		</CollectionBase>
	);
}

export default GaugeCollection;
