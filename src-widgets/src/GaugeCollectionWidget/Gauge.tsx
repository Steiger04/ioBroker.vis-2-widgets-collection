import { Box } from '@mui/material';
import React, { useRef, useEffect } from 'react';

import { LinearGauge, RadialGauge } from 'canvas-gauges';

import type { GaugeFieldsRxData } from '../lib/gaugeFields';

const TransparentImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

interface GaugeData {
    icon?: string;
    iconColor?: string;
    header?: string;
}

interface GaugeSegment {
    state: {
        icon?: string;
        iconColor?: string;
        iconSize?: number;
        iconXOffset?: string;
        iconYOffset?: string;
    };
}

interface GaugeProps extends Partial<GaugeFieldsRxData> {
    gaugeData: GaugeData;
    gaugeWidgetData: {
        iconSize?: number | string;
        iconYOffset?: string;
        iconXOffset?: string;
        gaugeIconFit?: 'contain' | 'cover' | 'fill';
    } & Partial<GaugeFieldsRxData>;
    gaugeSegment?: GaugeSegment | null;
    gaugeType: 'linear' | 'radial';

    // Canvas Gauge API properties
    width?: number;
    height?: number;
    minValue?: number;
    maxValue?: number;
    value?: number;
    units?: string;
    title?: string;

    // Tick options
    exactTicks?: boolean;
    majorTicks?: number[];
    minorTicks?: number;
    strokeTicks?: boolean;
    majorTicksInt?: number;
    majorTicksDec?: number;
    highlights?: Array<{
        from: number;
        to: number;
        color: string;
    }>;
    highlightsWidth?: number;
    numbersMargin?: number;

    // Progress bar options
    barWidth?: number;
    barStrokeWidth?: number;
    barProgress?: boolean;
    barShadow?: number;

    // Animation options
    animation?: boolean;
    animationDuration?: number;
    animationRule?: string;
    animatedValue?: boolean;
    animateOnInit?: boolean;

    // Color options
    colorPlate?: string;
    colorPlateEnd?: string;
    colorMajorTicks?: string;
    colorMinorTicks?: string;
    colorStrokeTicks?: string;
    colorTitle?: string;
    colorUnits?: string;
    colorNumbers?: string;
    colorNeedle?: string;
    colorNeedleEnd?: string;
    colorValueText?: string;
    colorValueTextShadow?: string;
    colorBorderShadow?: string;
    colorBorderOuter?: string;
    colorBorderOuterEnd?: string;
    colorBorderMiddle?: string;
    colorBorderMiddleEnd?: string;
    colorBorderInner?: string;
    colorBorderInnerEnd?: string;
    colorValueBoxRect?: string;
    colorValueBoxRectEnd?: string;
    colorValueBoxBackground?: string;
    colorValueBoxShadow?: string;
    colorNeedleShadowUp?: string;
    colorNeedleShadowDown?: string;
    colorBarStroke?: string;
    colorBar?: string;
    colorBarProgress?: string;
    highlightsLineCap?: 'butt' | 'round' | 'square';

    // Needle options
    needle?: boolean;
    needleShadow?: boolean;
    needleType?: 'arrow' | 'line';
    needleStart?: number;
    needleEnd?: number;
    needleWidth?: number;

    // Border options
    borders?: boolean;
    borderOuterWidth?: number;
    borderMiddleWidth?: number;
    borderInnerWidth?: number;
    borderShadowWidth?: number;

    // Value box options
    valueBox?: boolean;
    valueBoxStroke?: number;
    valueBoxWidth?: number;
    valueText?: string;
    valueTextShadow?: boolean;
    valueBoxBorderRadius?: number;
    valueInt?: number;
    valueDec?: number;

    // Font options
    fontNumbers?: string;
    fontTitle?: string;
    fontUnits?: string;
    fontValue?: string;
    fontNumbersSize?: number;
    fontTitleSize?: number;
    fontUnitsSize?: number;
    fontValueSize?: number;
    fontNumbersStyle?: 'normal' | 'italic' | 'oblique';
    fontTitleStyle?: 'normal' | 'italic' | 'oblique';
    fontUnitsStyle?: 'normal' | 'italic' | 'oblique';
    fontValueStyle?: 'normal' | 'italic' | 'oblique';
    fontNumbersWeight?:
        | 'normal'
        | 'bold'
        | 'bolder'
        | 'lighter'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    fontTitleWeight?:
        | 'normal'
        | 'bold'
        | 'bolder'
        | 'lighter'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    fontUnitsWeight?:
        | 'normal'
        | 'bold'
        | 'bolder'
        | 'lighter'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
    fontValueWeight?:
        | 'normal'
        | 'bold'
        | 'bolder'
        | 'lighter'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';

    // Linear specific options
    borderRadius?: number;
    barBeginCircle?: number;
    barLength?: number;
    colorBarEnd?: string;
    colorBarProgressEnd?: string;
    tickSide?: 'both' | 'left' | 'right';
    needleSide?: 'both' | 'left' | 'right';
    numberSide?: 'both' | 'left' | 'right';
    ticksWidth?: number;
    ticksWidthMinor?: number;
    ticksPadding?: number;

    // Radial specific options
    ticksAngle?: number;
    startAngle?: number;
    colorNeedleCircleOuter?: string;
    colorNeedleCircleOuterEnd?: string;
    colorNeedleCircleInner?: string;
    colorNeedleCircleInnerEnd?: string;
    colorNeedleCircleShadowUp?: string;
    needleCircleSize?: number;
    needleCircleInner?: boolean;
    needleCircleOuter?: boolean;
    animationTarget?: 'needle' | 'plate';
    useMinPath?: boolean;
}

const Gauge = (props: GaugeProps): React.JSX.Element => {
    const gaugeRef = useRef<RadialGauge | LinearGauge | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (gaugeRef.current === null || gaugeRef.current.options.gaugeType !== props.gaugeType) {
            const options = Object.assign({}, props, {
                renderTo: canvasRef.current,
            });

            switch (props.gaugeType) {
                case 'radial':
                    if (gaugeRef.current !== null) {
                        gaugeRef.current.destroy();
                    }
                    gaugeRef.current = new RadialGauge(options).draw();
                    break;

                case 'linear':
                    if (gaugeRef.current !== null) {
                        gaugeRef.current.destroy();
                    }
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
                gaugeRef.current.value = props.value ?? 0;
                gaugeRef.current.update(props);
            }
        }
    }, [props]);

    const iconSize =
        Boolean(props.gaugeWidgetData.iconSize) || props.gaugeWidgetData.iconSize === 0
            ? `${props.gaugeWidgetData.iconSize}%`
            : null;

    const segment = props.gaugeSegment;
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                alt=""
                src={segment?.state.icon || props.gaugeData.icon || TransparentImg}
                style={{
                    position: 'relative',

                    width: Number(segment?.state.iconSize) ? `${segment?.state.iconSize}%` : iconSize || '50%',
                    height: Number(segment?.state.iconSize) ? `${segment?.state.iconSize}%` : iconSize || '50%',

                    boxSizing: 'border-box',
                    objectFit: props.gaugeWidgetData.gaugeIconFit,
                    top:
                        (!!segment && `calc(0px - ${segment.state.iconYOffset})`) ||
                        (props.gaugeWidgetData.iconYOffset !== '0px' &&
                            `calc(0px - ${props.gaugeWidgetData.iconYOffset})`) ||
                        '0px',
                    left:
                        (!!segment && `calc(0px + ${segment.state.iconXOffset})`) ||
                        (props.gaugeWidgetData.iconXOffset !== '0px' &&
                            `calc(0px + ${props.gaugeWidgetData.iconXOffset})`) ||
                        '0px',

                    color: segment?.state.iconColor || props.gaugeData.iconColor,
                    filter: (segment?.state.iconColor || props.gaugeData.iconColor) && 'drop-shadow(0px 10000px 0)',
                    transform: (segment?.state.iconColor || props.gaugeData.iconColor) && 'translateY(-10000px)',
                }}
            />
            <canvas
                id="my-canvas"
                ref={canvasRef}
                style={{
                    position: 'absolute',
                }}
            />
        </Box>
    );
};

export default Gauge;
