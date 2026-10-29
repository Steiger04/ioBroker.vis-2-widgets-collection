/**
 * Ambient type declarations for the `canvas-gauges` library used by Gauge widgets.
 *
 * @remarks
 * `GaugeOptions` declares the FULL option surface the Options-Builder
 * (`GaugeCollectionWidget/gaugeOptions.ts`) produces — it is the single type home
 * for everything we pass into a gauge instance (the retired hand-written
 * `GaugeProps` duplicated this list at the wrong seam). Adding a canvas-gauges
 * option means: field in `lib/gaugeFields.tsx` + key here if the library types
 * are stricter than `unknown`.
 */
declare module 'canvas-gauges' {
    /** Complete option set consumed by the Gauge widget (see buildGaugeOptions). */
    export interface GaugeOptions {
        renderTo?: HTMLCanvasElement | null;
        /** Gauge class selector — part of the options so update() keeps it stable. */
        gaugeType?: 'linear' | 'radial';
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
        fontNumbersWeight?: FontWeight;
        fontTitleWeight?: FontWeight;
        fontUnitsWeight?: FontWeight;
        fontValueWeight?: FontWeight;

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

    /** CSS font-weight value as accepted by the canvas font shorthand. */
    export type FontWeight =
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

    export interface Gauge {
        value: number;
        options: GaugeOptions;
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }

    export class LinearGauge implements Gauge {
        value: number;
        options: GaugeOptions;
        constructor(options: GaugeOptions);
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }

    export class RadialGauge implements Gauge {
        value: number;
        options: GaugeOptions;
        constructor(options: GaugeOptions);
        destroy(): void;
        update(options: Partial<GaugeOptions>): void;
        draw(): this;
    }
}
