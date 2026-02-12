/**
 * Gauge collection renderer.
 *
 * @module widgets/GaugeCollection
 */

import { Box } from '@mui/material';
import React, { useContext, useRef, useMemo, useEffect, useState } from 'react';
import CollectionBase, { type CollectionBaseHandle } from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { GaugeCollectionContextProps } from '../types';
import useData, { type StyleData } from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import useElementDimensions from '../hooks/useElementDimensions';
import Gauge from './Gauge';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

/**
 * Highlight segment for the gauge (range + styling overrides).
 */
export interface Highlight {
    from: number;
    to: number;
    color: string;
    state: Pick<
        StyleData,
        | 'textColor'
        | 'icon'
        | 'iconColor'
        | 'forceColorMask'
        | 'iconSize'
        | 'iconSizeOnly'
        | 'iconXOffset'
        | 'iconYOffset'
        | 'frameBackgroundColor'
        | 'frameBackgroundColorActive'
        | 'backgroundColor'
        | 'backgroundColorActive'
        | 'background'
        | 'backgroundActive'
        | 'frameBackground'
        | 'frameBackgroundActive'
    >;
}

/**
 * Returns the highlight segment for a given value.
 */
const findSegment = (highlights: Highlight[], value: number, maxValue: number): Highlight | null => {
    const segment = highlights.find(highlight => {
        return value >= highlight.from && (value < highlight.to || (value === highlight.to && value === maxValue));
    });
    return segment || null;
};

/**
 * Renders a canvas-gauges based gauge and updates frame/background based on the active segment.
 */
function GaugeCollection(): React.JSX.Element {
    const baseRef = useRef<CollectionBaseHandle>(null);
    const [gaugeElement, setGaugeElement] = useState<HTMLDivElement | null>(null);
    const { width: gaugeWidth, height: gaugeHeight } = useElementDimensions(gaugeElement);

    const context = useContext(CollectionContext) as GaugeCollectionContextProps;
    const {
        wrappedContent,
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;

    const { data, states } = useData('oid');
    const oidValue = useOidValue('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'number';

    const majorTicks = useMemo(() => {
        const minValue = Number(widget.data.gaugeMinValue) || 0;
        const maxValue = Number(widget.data.gaugeMaxValue) || 100;

        const _majorTicks: number[] = [];

        if (widget.data.gaugeMajorTicks && Number(widget.data.gaugeMajorTicks > 0)) {
            for (let i = 0; i <= Number(widget.data.gaugeMajorTicks); i++) {
                const value = minValue + ((maxValue - minValue) / Number(widget.data.gaugeMajorTicks) || 1) * i;
                // Two decimal places.
                _majorTicks.push(Math.round(value * 100) / 100);
            }
        }

        return _majorTicks;
    }, [widget.data.gaugeMinValue, widget.data.gaugeMaxValue, widget.data.gaugeMajorTicks]);

    const highlights = useMemo(() => {
        const maxValue = Number(widget.data.gaugeMaxValue) || 100;

        const _highlights = states.map((state, index) => {
            const nextValue = states[index + 1]?.value || maxValue;

            return {
                from: Number(state.value),
                to: Number(nextValue),
                color: extractColorFromValue(state.textColor) || 'transparent',
                state: { ...state },
            };
        });

        // Set the last highlight to maxValue if the last state value is less than maxValue
        if (states.length > 0 && Number(states[states.length - 1].value) < maxValue) {
            _highlights[_highlights.length - 1].to = maxValue;
        }

        return _highlights;
    }, [states, widget.data.gaugeMaxValue]);

    const segment = useMemo(
        () =>
            findSegment(
                highlights,
                Number(oidValue) || 0,
                Number(widget.data.gaugeMaxValue) ? Number(widget.data.gaugeMaxValue) : 100,
            ),
        [highlights, oidValue, widget.data.gaugeMaxValue],
    );

    const paper0 = baseRef.current?.paper0;
    const paper1 = baseRef.current?.paper1;

    useEffect(() => {
        if (paper0 && paper1) {
            if (segment) {
                paper0.style.borderColor =
                    (!wrappedContent &&
                        (segment?.state.frameBackgroundColorActive || segment?.state.frameBackgroundColor || null)) ||
                    '';

                paper0.style.background =
                    segment?.state.frameBackgroundColorActive ||
                    segment?.state.frameBackgroundColor ||
                    segment?.state.frameBackgroundActive ||
                    segment?.state.frameBackground ||
                    null ||
                    '';
                // ----------------------------------------------------------
                paper1.style.borderColor =
                    (!wrappedContent &&
                        (segment?.state.backgroundColorActive || segment?.state.backgroundColor || null)) ||
                    '';

                paper1.style.background =
                    segment?.state.backgroundColorActive ||
                    segment?.state.backgroundColor ||
                    segment?.state.backgroundActive ||
                    segment?.state.background ||
                    null ||
                    '';
            } else {
                paper0.style.borderColor = '';

                paper0.style.background = data.frameBackgroundColor || data.frameBackground || null || '';
                // ----------------------------------------------------------
                paper1.style.borderColor = '';

                paper1.style.background = data.backgroundColor || data.background || null || '';
            }
        }
    }, [
        paper0,
        paper1,
        wrappedContent,
        segment,
        widget.data,
        data.frameBackgroundColor,
        data.frameBackground,
        data.backgroundColor,
        data.background,
    ]);

    return (
        <CollectionBase
            ref={baseRef}
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={{
                    ...data,
                    icon: segment?.state.icon,
                    iconColor: segment?.state.iconColor,
                    forceColorMask: segment?.state.forceColorMask,
                }}
                widget={widget}
            />
            <Box
                ref={setGaugeElement}
                sx={{
                    width: '100%',
                    height: '100%',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Gauge
                    gaugeWidgetData={widget.data}
                    gaugeSegment={segment}
                    gaugeType={widget.data.gaugeType!}
                    // Basic Options
                    width={(gaugeWidth || 0) - Number(widget.data.gaugePadding || 0)}
                    height={(gaugeHeight || 0) - Number(widget.data.gaugePadding || 0)}
                    minValue={Number(widget.data.gaugeMinValue) ? Number(widget.data.gaugeMinValue) : 0}
                    maxValue={Number(widget.data.gaugeMaxValue) ? Number(widget.data.gaugeMaxValue) : 100}
                    value={Number(oidValue) || 0}
                    units={oidObject?.unit}
                    title={data.header}
                    // Ticks Bar Options
                    exactTicks={widget.data.gaugeExactTicks} // boolean
                    majorTicks={majorTicks}
                    minorTicks={
                        typeof widget.data.gaugeMinorTicks === 'number'
                            ? widget.data.gaugeMinorTicks
                            : Number(widget.data.gaugeMinorTicks)
                    }
                    strokeTicks={widget.data.gaugeStrokeTicks} // boolean
                    majorTicksInt={
                        typeof widget.data.gaugeMajorTicksInt === 'number'
                            ? widget.data.gaugeMajorTicksInt
                            : Number(widget.data.gaugeMajorTicksInt)
                    }
                    majorTicksDec={
                        typeof widget.data.gaugeMajorTicksDec === 'number'
                            ? widget.data.gaugeMajorTicksDec
                            : Number(widget.data.gaugeMajorTicksDec)
                    }
                    highlights={highlights}
                    highlightsWidth={
                        typeof widget.data.gaugeHighlightsWidth === 'number'
                            ? widget.data.gaugeHighlightsWidth
                            : Number(widget.data.gaugeHighlightsWidth)
                    }
                    numbersMargin={
                        typeof widget.data.gaugeNumbersMargin === 'number'
                            ? widget.data.gaugeNumbersMargin
                            : Number(widget.data.gaugeNumbersMargin)
                    }
                    // Progress Bar Options
                    barWidth={
                        typeof widget.data.gaugeBarWidth === 'number' && widget.data.gaugeBarWidth <= 50
                            ? widget.data.gaugeBarWidth
                            : Number(widget.data.gaugeBarWidth) <= 50
                              ? Number(widget.data.gaugeBarWidth)
                              : 50
                    }
                    barStrokeWidth={
                        typeof widget.data.gaugeBarStrokeWidth === 'number'
                            ? widget.data.gaugeBarStrokeWidth
                            : Number(widget.data.gaugeBarStrokeWidth)
                    }
                    barProgress={widget.data.gaugeBarProgress} // boolean
                    barShadow={
                        typeof widget.data.gaugeBarShadow === 'number'
                            ? widget.data.gaugeBarShadow
                            : Number(widget.data.gaugeBarShadow)
                    }
                    // Animation Options
                    animation={widget.data.gaugeAnimation} // boolean
                    animationDuration={
                        typeof widget.data.gaugeAnimationDuration === 'number'
                            ? widget.data.gaugeAnimationDuration
                            : Number(widget.data.gaugeAnimationDuration)
                    }
                    animationRule={widget.data.gaugeAnimationRule || 'cycle'}
                    animatedValue={widget.data.gaugeAnimatedValue} // boolean
                    animateOnInit={widget.data.gaugeAnimateOnInit} // boolean
                    // Color Options
                    colorPlate={widget.data.gaugeColorPlate || 'rgba(0,0,0,0)'}
                    colorPlateEnd={widget.data.gaugeColorPlateEnd || 'rgba(0,0,0,0)'}
                    colorMajorTicks={widget.data.gaugeColorMajorTicks || '#444'}
                    colorMinorTicks={widget.data.gaugeColorMinorTicks || '#666'}
                    colorStrokeTicks={widget.data.gaugeColorStrokeTicks || '#444'}
                    colorTitle={widget.data.gaugeColorTitle || '#888'}
                    colorUnits={widget.data.gaugeColorUnits || '#888'}
                    colorNumbers={widget.data.gaugeColorNumbers || '#444'}
                    colorNeedle={widget.data.gaugeColorNeedle || 'rgba(240,128,128,1)'}
                    colorNeedleEnd={widget.data.gaugeColorNeedleEnd || 'rgba(255,160,122,.9)'}
                    colorValueText={widget.data.gaugeColorValueText || '#444'}
                    colorValueTextShadow={widget.data.gaugeColorValueTextShadow || 'rgba(0,0,0,0.3)'}
                    colorBorderShadow={widget.data.gaugeColorBorderShadow || 'rgba(0,0,0,0.5)'}
                    colorBorderOuter={widget.data.gaugeColorBorderOuter || '#ddd'}
                    colorBorderOuterEnd={widget.data.gaugeColorBorderOuterEnd || '#aaa'}
                    colorBorderMiddle={widget.data.gaugeColorBorderMiddle || '#eee'}
                    colorBorderMiddleEnd={widget.data.gaugeColorBorderMiddleEnd || '#f0f0f0'}
                    colorBorderInner={widget.data.gaugeColorBorderInner || '#fafafa'}
                    colorBorderInnerEnd={widget.data.gaugeColorBorderInnerEnd || '#ccc'}
                    colorValueBoxRect={widget.data.gaugeColorValueBoxRect || '#888'}
                    colorValueBoxRectEnd={widget.data.gaugeColorValueBoxRectEnd || '#666'}
                    colorValueBoxBackground={widget.data.gaugeColorValueBoxBackground || '#babab2'}
                    colorValueBoxShadow={widget.data.gaugeColorValueBoxShadow || 'rgba(0,0,0,1)'}
                    colorNeedleShadowUp={widget.data.gaugeColorNeedleShadowUp || 'rgba(2,255,255,0.2)'}
                    colorNeedleShadowDown={widget.data.gaugeColorNeedleShadowDown || 'rgba(188,143,143,0.45)'}
                    colorBarStroke={widget.data.gaugeColorBarStroke || '#222'}
                    colorBar={widget.data.gaugeColorBar || '#ccc'}
                    colorBarProgress={widget.data.gaugeColorBarProgress || '#888'}
                    highlightsLineCap={widget.data.gaugeHighlightsLineCap || 'butt'}
                    // Needle Configuration Options
                    needle={widget.data.gaugeNeedle} // boolean
                    needleShadow={widget.data.gaugeNeedleShadow} // boolean
                    needleType={widget.data.gaugeNeedleType || 'arrow'}
                    needleStart={
                        typeof widget.data.gaugeNeedleStart === 'number'
                            ? widget.data.gaugeNeedleStart
                            : Number(widget.data.gaugeNeedleStart)
                    }
                    needleEnd={
                        typeof widget.data.gaugeNeedleEnd === 'number'
                            ? widget.data.gaugeNeedleEnd
                            : Number(widget.data.gaugeNeedleEnd)
                    }
                    needleWidth={
                        typeof widget.data.gaugeNeedleWidth === 'number'
                            ? widget.data.gaugeNeedleWidth
                            : Number(widget.data.gaugeNeedleWidth)
                    }
                    // Borders Options
                    borders={widget.data.gaugeBorders} // boolean
                    borderOuterWidth={
                        typeof widget.data.gaugeBorderOuterWidth === 'number'
                            ? widget.data.gaugeBorderOuterWidth
                            : Number(widget.data.gaugeBorderOuterWidth)
                    }
                    borderMiddleWidth={
                        typeof widget.data.gaugeBorderMiddleWidth === 'number'
                            ? widget.data.gaugeBorderMiddleWidth
                            : Number(widget.data.gaugeBorderMiddleWidth)
                    }
                    borderInnerWidth={
                        typeof widget.data.gaugeBorderInnerWidth === 'number'
                            ? widget.data.gaugeBorderInnerWidth
                            : Number(widget.data.gaugeBorderInnerWidth)
                    }
                    borderShadowWidth={
                        typeof widget.data.gaugeBorderShadowWidth === 'number'
                            ? widget.data.gaugeBorderShadowWidth
                            : Number(widget.data.gaugeBorderShadowWidth)
                    }
                    // Value Box Options
                    valueBox={widget.data.gaugeValueBox} // boolean
                    valueBoxStroke={
                        typeof widget.data.gaugeValueBoxStroke === 'number'
                            ? widget.data.gaugeValueBoxStroke
                            : Number(widget.data.gaugeValueBoxStroke)
                    }
                    valueBoxWidth={
                        typeof widget.data.gaugeValueBoxWidth === 'number'
                            ? widget.data.gaugeValueBoxWidth
                            : Number(widget.data.gaugeValueBoxWidth)
                    }
                    valueText={widget.data.gaugeValueText || ''}
                    valueTextShadow={widget.data.gaugeValueTextShadow} // boolean
                    valueBoxBorderRadius={
                        typeof widget.data.gaugeValueBoxBorderRadius === 'number'
                            ? widget.data.gaugeValueBoxBorderRadius
                            : Number(widget.data.gaugeValueBoxBorderRadius)
                    }
                    valueInt={
                        typeof widget.data.gaugeValueInt === 'number'
                            ? widget.data.gaugeValueInt
                            : Number(widget.data.gaugeValueInt)
                    }
                    valueDec={
                        typeof widget.data.gaugeValueDec === 'number'
                            ? widget.data.gaugeValueDec
                            : Number(widget.data.gaugeValueDec)
                    }
                    // Fonts Customization Options
                    fontNumbers={widget.data.gaugeFontNumbers || 'Arial, Helvetica, sans-serif'}
                    fontTitle={widget.data.gaugeFontTitle || 'Arial, Helvetica, sans-serif'}
                    fontUnits={widget.data.gaugeFontUnits || 'Arial, Helvetica, sans-serif'}
                    fontValue={widget.data.gaugeFontValue || 'Arial, Helvetica, sans-serif'}
                    fontNumbersSize={
                        typeof widget.data.gaugeFontNumbersSize === 'number'
                            ? widget.data.gaugeFontNumbersSize
                            : Number(widget.data.gaugeFontNumbersSize)
                    }
                    fontTitleSize={
                        typeof widget.data.gaugeFontTitleSize === 'number'
                            ? widget.data.gaugeFontTitleSize
                            : Number(widget.data.gaugeFontTitleSize)
                    }
                    fontUnitsSize={
                        typeof widget.data.gaugeFontUnitsSize === 'number'
                            ? widget.data.gaugeFontUnitsSize
                            : Number(widget.data.gaugeFontUnitsSize)
                    }
                    fontValueSize={
                        typeof widget.data.gaugeFontValueSize === 'number'
                            ? widget.data.gaugeFontValueSize
                            : Number(widget.data.gaugeFontValueSize)
                    }
                    fontNumbersStyle={widget.data.gaugeFontNumbersStyle || 'normal'}
                    fontTitleStyle={widget.data.gaugeFontTitleStyle || 'normal'}
                    fontUnitsStyle={widget.data.gaugeFontUnitsStyle || 'normal'}
                    fontValueStyle={widget.data.gaugeFontValueStyle || 'normal'}
                    fontNumbersWeight={widget.data.gaugeFontNumbersWeight || 'normal'}
                    fontTitleWeight={widget.data.gaugeFontTitleWeight || 'normal'}
                    fontUnitsWeight={widget.data.gaugeFontUnitsWeight || 'normal'}
                    fontValueWeight={widget.data.gaugeFontValueWeight || 'normal'}
                    // Linear Borders Options
                    borderRadius={
                        typeof widget.data.gaugeBorderRadius === 'number'
                            ? widget.data.gaugeBorderRadius
                            : Number(widget.data.gaugeBorderRadius)
                    }
                    // Linear Progress Bar Options
                    barBeginCircle={
                        typeof widget.data.gaugeBarBeginCircle === 'number' && widget.data.gaugeBarBeginCircle < 12
                            ? 30
                            : Number(widget.data.gaugeBarBeginCircle)
                    }
                    barLength={
                        typeof widget.data.gaugeBarLength === 'number'
                            ? widget.data.gaugeBarLength
                            : Number(widget.data.gaugeBarLength)
                    }
                    // Linear Coloring Options
                    colorBarEnd={widget.data.gaugeColorBarEnd || ''}
                    colorBarProgressEnd={widget.data.gaugeColorBarProgressEnd || ''}
                    // Linear Element Positioning Options
                    tickSide={widget.data.gaugeTickSide || 'both'}
                    needleSide={widget.data.gaugeNeedleSide || 'both'}
                    numberSide={widget.data.gaugeNumberSide || 'both'}
                    // Linear Ticks Bar Options
                    ticksWidth={
                        typeof widget.data.gaugeTicksWidth === 'number'
                            ? widget.data.gaugeTicksWidth
                            : Number(widget.data.gaugeTicksWidth)
                    }
                    ticksWidthMinor={
                        typeof widget.data.gaugeTicksWidthMinor === 'number'
                            ? widget.data.gaugeTicksWidthMinor
                            : Number(widget.data.gaugeTicksWidthMinor)
                    }
                    ticksPadding={
                        typeof widget.data.gaugeTicksPadding === 'number'
                            ? widget.data.gaugeTicksPadding
                            : Number(widget.data.gaugeTicksPadding)
                    }
                    // Radial Ticks Bar Options
                    ticksAngle={
                        typeof widget.data.gaugeTicksAngle === 'number'
                            ? widget.data.gaugeTicksAngle
                            : Number(widget.data.gaugeTicksAngle)
                    }
                    startAngle={
                        typeof widget.data.gaugeStartAngle === 'number'
                            ? widget.data.gaugeStartAngle
                            : Number(widget.data.gaugeStartAngle)
                    }
                    // Radial Coloring Options
                    colorNeedleCircleOuter={widget.data.gaugeColorNeedleCircleOuter || '#f0f0f0'}
                    colorNeedleCircleOuterEnd={widget.data.gaugeColorNeedleCircleOuterEnd || '#ccc'}
                    colorNeedleCircleInner={widget.data.gaugeColorNeedleCircleInner || '#e8e8e8'}
                    colorNeedleCircleInnerEnd={widget.data.gaugeColorNeedleCircleInnerEnd || '#f5f5f5'}
                    colorNeedleCircleShadowUp={widget.data.gaugeColorNeedleCircleShadowUp || 'rgba(2,255,255,0.2)'}
                    // Radial Needle Options
                    needleCircleSize={
                        typeof widget.data.gaugeNeedleCircleSize === 'number'
                            ? widget.data.gaugeNeedleCircleSize
                            : Number(widget.data.gaugeNeedleCircleSize)
                    }
                    needleCircleInner={widget.data.gaugeNeedleCircleInner} // boolean
                    needleCircleOuter={widget.data.gaugeNeedleCircleOuter} // boolean
                    // Radial Animation Options
                    animationTarget={widget.data.gaugeAnimationTarget || 'needle'}
                    useMinPath={widget.data.gaugeUseMinPath} // boolean
                />
            </Box>
        </CollectionBase>
    );
}

export default GaugeCollection;
