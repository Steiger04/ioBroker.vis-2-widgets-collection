import { Box } from "@mui/material";
import React, { useContext, useMemo, useRef, useEffect } from "react";
import CollectionBase from "../components/CollectionBase";
import { CollectionContext } from "../components/CollectionProvider";
import useData from "../hooks/useData";
import useOidValue from "../hooks/useOidValue";
import Gauge from "./Gauge";

const findSegment = (highlights, value, maxValue) => {
	const segment = highlights.find((highlight) => {
		if (highlight.from === undefined || highlight.to === undefined) {
			return null;
		}
		return (
			/* value >= highlight.from &&
			(value < highlight.to ||
				(value === highlight.to && value === maxValue)) &&
			highlight.icon */
			value >= highlight.from &&
			(value < highlight.to || (value === highlight.to && value === maxValue))
		);
	});
	return segment || null;
};

function GaugeCollection() {
	const baseRef = useRef(null);
	const gaugeRef = useRef(null);
	const { wrappedContent, oidObject, widget } = useContext(CollectionContext);

	const { data, states } = useData("oid");
	const oidValue = useOidValue("oid");

	const oidType = oidObject?.common?.type;

	const isValidType = oidType === "number";

	const majorTicks = useMemo(() => {
		const minValue = Number(widget.data.gaugeMinValue) || 0;
		const maxValue = Number(widget.data.gaugeMaxValue) || 100;

		const _majorTicks = [];

		if (
			widget.data.gaugeMajorTicks &&
			Number(widget.data.gaugeMajorTicks > 0)
		) {
			for (let i = 0; i <= Number(widget.data.gaugeMajorTicks); i++) {
				const value =
					minValue +
					((maxValue - minValue) / Number(widget.data.gaugeMajorTicks) || 1) *
						i;
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

		states.forEach((state, index) => {
			const nextValue = states[index + 1]?.value || maxValue;

			_highlights.push({
				from: state.value,
				to: nextValue,
				color: state.textColor || "transparent",
				state,
			});
		});

		// Set the last highlight to maxValue if the last state value is less than maxValue
		if (states.length > 0 && states[states.length - 1].value < maxValue) {
			_highlights[_highlights.length - 1].to = maxValue;
		}

		return _highlights;
	}, [states, widget.data.gaugeMaxValue]);

	const segment = findSegment(
		highlights,
		oidValue,
		Number(widget.data.gaugeMaxValue) ? Number(widget.data.gaugeMaxValue) : 100,
	);

	const paper0 = baseRef.current?.paper0;
	const paper1 = baseRef.current?.paper1;

	useEffect(() => {
		if (paper0 && paper1) {
			if (segment) {
				paper0.style.borderColor =
					!wrappedContent &&
					(segment?.state.frameBackgroundColorActive ||
						segment?.state.frameBackgroundColor ||
						null);

				paper0.style.background = wrappedContent
					? segment?.state.frameBackgroundColorActive ||
						segment?.state.frameBackgroundColor ||
						segment?.state.frameBackgroundActive ||
						segment?.state.frameBackground ||
						null
					: "transparent";
				// ----------------------------------------------------------
				paper1.style.borderColor =
					!wrappedContent &&
					(segment?.state.backgroundColorActive ||
						segment?.state.backgroundColor ||
						null);

				paper1.style.background = wrappedContent
					? segment?.state.backgroundColorActive ||
						segment?.state.backgroundColor ||
						segment?.state.backgroundActive ||
						segment?.state.background ||
						null
					: "transparent";
			} else {
				paper0.style.borderColor =
					!wrappedContent &&
					((segment?.state.frameBackgroundColor &&
						`${segment?.state.frameBackgroundColor}!important`) ||
						null);

				paper0.style.background =
					wrappedContent &&
					(widget.data.frameBackgroundColor ||
						widget.data.frameBackground ||
						null);
				// ----------------------------------------------------------
				paper1.style.borderColor =
					!wrappedContent &&
					((segment?.state.backgroundColor &&
						`${segment?.state.backgroundColor}!important`) ||
						null);

				paper1.style.background =
					wrappedContent &&
					(widget.data.backgroundColor || widget.data.background || null);
			}
		}
	}, [paper0, paper1, wrappedContent, segment, widget.data]);

	return (
		<CollectionBase
			ref={baseRef}
			isValidType={isValidType}
			data={data}
			oidValue={oidValue}
		>
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
					gaugeSegment={segment}
					gaugeType={widget.data.gaugeType}
					// Basic Options
					width={
						gaugeRef.current?.clientWidth - Number(widget.data.gaugePadding)
					}
					height={
						gaugeRef.current?.clientHeight - Number(widget.data.gaugePadding)
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
					exactTicks={widget.data.gaugeExactTicks} // boolean
					majorTicks={majorTicks}
					minorTicks={
						typeof widget.data.gaugeMinorTicks === "number"
							? widget.data.gaugeMinorTicks
							: Number(widget.data.gaugeMinorTicks)
					}
					strokeTicks={widget.data.gaugeStrokeTicks} // boolean
					// majorTicksInt={widget.data.gaugeMajorTicksInt || 1}
					majorTicksInt={
						typeof widget.data.gaugeMajorTicksInt === "number"
							? widget.data.gaugeMajorTicksInt
							: Number(widget.data.gaugeMajorTicksInt)
					}
					// majorTicksDec={widget.data.gaugeMajorTicksDec || 0}
					majorTicksDec={
						typeof widget.data.gaugeMajorTicksDec === "number"
							? widget.data.gaugeMajorTicksDec
							: Number(widget.data.gaugeMajorTicksDec)
					}
					highlights={highlights}
					// highlightsWidth={widget.data.gaugeHighlightsWidth || 15}
					highlightsWidth={
						typeof widget.data.gaugeHighlightsWidth === "number"
							? widget.data.gaugeHighlightsWidth
							: Number(widget.data.gaugeHighlightsWidth)
					}
					// numbersMargin={widget.data.gaugeNumbersMargin || 1}
					numbersMargin={
						typeof widget.data.gaugeNumbersMargin === "number"
							? widget.data.gaugeNumbersMargin
							: Number(widget.data.gaugeNumbersMargin)
					}
					// Progress Bar Options
					barWidth={
						typeof widget.data.gaugeBarWidth === "number" &&
						widget.data.gaugeBarWidth <= 50
							? widget.data.gaugeBarWidth
							: Number(widget.data.gaugeBarWidth) <= 50
								? Number(widget.data.gaugeBarWidth)
								: 50
					}
					// barStrokeWidth={widget.data.gaugeBarStrokeWidth || 0}
					barStrokeWidth={
						typeof widget.data.gaugeBarStrokeWidth === "number"
							? widget.data.gaugeBarStrokeWidth
							: Number(widget.data.gaugeBarStrokeWidth)
					}
					barProgress={widget.data.gaugeBarProgress} // boolean
					// barShadow={widget.data.gaugeBarShadow || 0}
					barShadow={
						typeof widget.data.gaugeBarShadow === "number"
							? widget.data.gaugeBarShadow
							: Number(widget.data.gaugeBarShadow)
					}
					// Animation Options
					animation={widget.data.gaugeAnimation} // boolean
					// animationDuration={widget.data.gaugeAnimationDuration || 500}
					animationDuration={
						typeof widget.data.gaugeAnimationDuration === "number"
							? widget.data.gaugeAnimationDuration
							: Number(widget.data.gaugeAnimationDuration)
					}
					animationRule={widget.data.gaugeAnimationRule || "cycle"}
					animatedValue={widget.data.gaugeAnimatedValue} // boolean
					animateOnInit={widget.data.gaugeAnimateOnInit} // boolean
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
					needle={widget.data.gaugeNeedle} // boolean
					needleShadow={widget.data.gaugeNeedleShadow} // boolean
					needleType={widget.data.gaugeNeedleType || "arrow"}
					// needleStart={widget.data.gaugeNeedleStart || 5}
					needleStart={
						typeof widget.data.gaugeNeedleStart === "number"
							? widget.data.gaugeNeedleStart
							: Number(widget.data.gaugeNeedleStart)
					}
					// needleEnd={widget.data.gaugeNeedleEnd || 85}
					needleEnd={
						typeof widget.data.gaugeNeedleEnd === "number"
							? widget.data.gaugeNeedleEnd
							: Number(widget.data.gaugeNeedleEnd)
					}
					// needleWidth={widget.data.gaugeNeedleWidth || 4}
					needleWidth={
						typeof widget.data.gaugeNeedleWidth === "number"
							? widget.data.gaugeNeedleWidth
							: Number(widget.data.gaugeNeedleWidth)
					}
					// Borders Options
					borders={widget.data.gaugeBorders} // boolean
					// borderOuterWidth={widget.data.gaugeBorderOuterWidth || 3}
					borderOuterWidth={
						typeof widget.data.gaugeBorderOuterWidth === "number"
							? widget.data.gaugeBorderOuterWidth
							: Number(widget.data.gaugeBorderOuterWidth)
					}
					// borderMiddleWidth={widget.data.gaugeBorderMiddleWidth || 3}
					borderMiddleWidth={
						typeof widget.data.gaugeBorderMiddleWidth === "number"
							? widget.data.gaugeBorderMiddleWidth
							: Number(widget.data.gaugeBorderMiddleWidth)
					}
					// borderInnerWidth={widget.data.gaugeBorderInnerWidth || 3}
					borderInnerWidth={
						typeof widget.data.gaugeBorderInnerWidth === "number"
							? widget.data.gaugeBorderInnerWidth
							: Number(widget.data.gaugeBorderInnerWidth)
					}
					// borderShadowWidth={widget.data.gaugeBorderShadowWidth || 3}
					borderShadowWidth={
						typeof widget.data.gaugeBorderShadowWidth === "number"
							? widget.data.gaugeBorderShadowWidth
							: Number(widget.data.gaugeBorderShadowWidth)
					}
					// Value Box Options
					valueBox={widget.data.gaugeValueBox} // boolean
					// valueBoxStroke={widget.data.gaugeValueBoxStroke || 5}
					valueBoxStroke={
						typeof widget.data.gaugeValueBoxStroke === "number"
							? widget.data.gaugeValueBoxStroke
							: Number(widget.data.gaugeValueBoxStroke)
					}
					// valueBoxWidth={widget.data.gaugeValueBoxWidth || 0}
					valueBoxWidth={
						typeof widget.data.gaugeValueBoxWidth === "number"
							? widget.data.gaugeValueBoxWidth
							: Number(widget.data.gaugeValueBoxWidth)
					}
					valueText={widget.data.gaugeValueText || ""}
					valueTextShadow={widget.data.gaugeValueTextShadow} // boolean
					// valueBoxBorderRadius={widget.data.gaugeValueBoxBorderRadius || 2.5}
					valueBoxBorderRadius={
						typeof widget.data.gaugeValueBoxBorderRadius === "number"
							? widget.data.gaugeValueBoxBorderRadius
							: Number(widget.data.gaugeValueBoxBorderRadius)
					}
					valueInt={
						typeof widget.data.gaugeValueInt === "number"
							? widget.data.gaugeValueInt
							: Number(widget.data.gaugeValueInt)
					}
					valueDec={
						typeof widget.data.gaugeValueDec === "number"
							? widget.data.gaugeValueDec
							: Number(widget.data.gaugeValueDec)
					}
					// Fonts Customization Options
					fontNumbers={widget.data.gaugeFontNumbers || "Arial"}
					fontTitle={widget.data.gaugeFontTitle || "Arial"}
					fontUnits={widget.data.gaugeFontUnits || "Arial"}
					fontValue={widget.data.gaugeFontValue || "Arial"}
					// fontNumbersSize={widget.data.gaugeFontNumbersSize || 20}
					fontNumbersSize={
						typeof widget.data.gaugeFontNumbersSize === "number"
							? widget.data.gaugeFontNumbersSize
							: Number(widget.data.gaugeFontNumbersSize)
					}
					// fontTitleSize={widget.data.gaugeFontTitleSize || 24}
					fontTitleSize={
						typeof widget.data.gaugeFontTitleSize === "number"
							? widget.data.gaugeFontTitleSize
							: Number(widget.data.gaugeFontTitleSize)
					}
					// fontUnitsSize={widget.data.gaugeFontUnitsSize || 22}
					fontUnitsSize={
						typeof widget.data.gaugeFontUnitsSize === "number"
							? widget.data.gaugeFontUnitsSize
							: Number(widget.data.gaugeFontUnitsSize)
					}
					// fontValueSize={widget.data.gaugeFontValueSize || 26}
					fontValueSize={
						typeof widget.data.gaugeFontValueSize === "number"
							? widget.data.gaugeFontValueSize
							: Number(widget.data.gaugeFontValueSize)
					}
					fontNumbersStyle={widget.data.gaugeFontNumbersStyle || "normal"}
					fontTitleStyle={widget.data.gaugeFontTitleStyle || "normal"}
					fontUnitsStyle={widget.data.gaugeFontUnitsStyle || "normal"}
					fontValueStyle={widget.data.gaugeFontValueStyle || "normal"}
					fontNumbersWeight={widget.data.gaugeFontNumbersWeight || "normal"}
					fontTitleWeight={widget.data.gaugeFontTitleWeight || "normal"}
					fontUnitsWeight={widget.data.gaugeFontUnitsWeight || "normal"}
					fontValueWeight={widget.data.gaugeFontValueWeight || "normal"}
					// Linear Borders Options
					// borderRadius={widget.data.gaugeBorderRadius || 0}
					borderRadius={
						typeof widget.data.gaugeBorderRadius === "number"
							? widget.data.gaugeBorderRadius
							: Number(widget.data.gaugeBorderRadius)
					}
					// Linear Progress Bar Options
					barBeginCircle={
						typeof widget.data.gaugeBarBeginCircle === "number" &&
						widget.data.gaugeBarBeginCircle < 12
							? 30
							: Number(widget.data.gaugeBarBeginCircle)
					}
					// barLength={widget.data.gaugeBarLength || 85}
					barLength={
						typeof widget.data.gaugeBarLength === "number"
							? widget.data.gaugeBarLength
							: Number(widget.data.gaugeBarLength)
					}
					// Linear Coloring Options
					colorBarEnd={widget.data.gaugeColorBarEnd || ""}
					colorBarProgressEnd={widget.data.gaugeColorBarProgressEnd || ""}
					// Linear Element Positioning Options
					tickSide={widget.data.gaugeTickSide || "both"}
					needleSide={widget.data.gaugeNeedleSide || "both"}
					numberSide={widget.data.gaugeNumberSide || "both"}
					// Linear Ticks Bar Options
					// ticksWidth={widget.data.gaugeTicksWidth || 10}
					ticksWidth={
						typeof widget.data.gaugeTicksWidth === "number"
							? widget.data.gaugeTicksWidth
							: Number(widget.data.gaugeTicksWidth)
					}
					// ticksWidthMinor={widget.data.gaugeTicksWidthMinor || 5}
					ticksWidthMinor={
						typeof widget.data.gaugeTicksWidthMinor === "number"
							? widget.data.gaugeTicksWidthMinor
							: Number(widget.data.gaugeTicksWidthMinor)
					}
					// ticksPadding={widget.data.gaugeTicksPadding || 5}
					ticksPadding={
						typeof widget.data.gaugeTicksPadding === "number"
							? widget.data.gaugeTicksPadding
							: Number(widget.data.gaugeTicksPadding)
					}
					// Radial Ticks Bar Options
					// ticksAngle={widget.data.gaugeTicksAngle || 270}
					ticksAngle={
						typeof widget.data.gaugeTicksAngle === "number"
							? widget.data.gaugeTicksAngle
							: Number(widget.data.gaugeTicksAngle)
					}
					// startAngle={widget.data.gaugeStartAngle || 45}
					startAngle={
						typeof widget.data.gaugeStartAngle === "number"
							? widget.data.gaugeStartAngle
							: Number(widget.data.gaugeStartAngle)
					}
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
					// needleCircleSize={widget.data.gaugeNeedleCircleSize || 10}
					needleCircleSize={
						typeof widget.data.gaugeNeedleCircleSize === "number"
							? widget.data.gaugeNeedleCircleSize
							: Number(widget.data.gaugeNeedleCircleSize)
					}
					needleCircleInner={widget.data.gaugeNeedleCircleInner} // boolean
					needleCircleOuter={widget.data.gaugeNeedleCircleOuter} // boolean
					// Radial Animation Options
					animationTarget={widget.data.gaugeAnimationTarget || "needle"}
					useMinPath={widget.data.gaugeUseMinPath} // boolean
				/>
			</Box>
		</CollectionBase>
	);
}

export default GaugeCollection;
