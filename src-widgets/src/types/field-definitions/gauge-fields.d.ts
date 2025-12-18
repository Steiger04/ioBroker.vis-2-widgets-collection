/**
 * Gauge widget field definitions for vis-2 Collection.
 * Comprehensive configuration for linear and radial gauge displays.
 *
 * @example
 * ```typescript
 * const data: GaugeFieldsRxData = {
 *     gaugeType: 'radial',
 *     gaugeMinValue: 0,
 *     gaugeMaxValue: 120,
 *     gaugeColorBar: '#1de9b6',
 *     gaugeNeedle: true,
 *     gaugeAnimationDuration: 750
 * };
 * ```
 * @remarks
 * Most properties are optional and map directly to `canvas-gauges` options. Choose
 * a minimal subset for simple gauges or combine advanced styling for rich dashboards.
 */
export interface GaugeFieldsRxData {
    /**
     * Gauge display type.
     *
     * @default 'linear'
     */
    gaugeType?: 'linear' | 'radial';

    /**
     * Minimum gauge value.
     *
     * @default 0
     */
    gaugeMinValue?: number;

    /**
     * Maximum gauge value.
     *
     * @default 100
     */
    gaugeMaxValue?: number;

    /**
     * Gauge padding in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugePadding?: number;

    /**
     * Icon fit mode.
     *
     * @default 'contain'
     */
    gaugeIconFit?: 'contain' | 'cover' | 'fill';

    /**
     * Border radius in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeBorderRadius?: number;

    /**
     * Bar begin circle size.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeBarBeginCircle?: number;

    /**
     * Bar length percentage.
     *
     * @default 100
     * @remarks Valid range: min 0
     */
    gaugeBarLength?: number;

    /**
     * Bar end color (CSS color).
     */
    gaugeColorBarEnd?: string;

    /**
     * Bar progress end color (CSS color).
     */
    gaugeColorBarProgressEnd?: string;

    /**
     * Tick mark side placement.
     *
     * @default 'both'
     */
    gaugeTickSide?: 'both' | 'left' | 'right';

    /**
     * Needle side placement.
     *
     * @default 'both'
     */
    gaugeNeedleSide?: 'both' | 'left' | 'right';

    /**
     * Number label side placement.
     *
     * @default 'both'
     */
    gaugeNumberSide?: 'both' | 'left' | 'right';

    /**
     * Major tick width in pixels.
     *
     * @default 2
     * @remarks Valid range: min 0
     */
    gaugeTicksWidth?: number;

    /**
     * Minor tick width in pixels.
     *
     * @default 1
     * @remarks Valid range: min 0
     */
    gaugeTicksWidthMinor?: number;

    /**
     * Tick padding in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeTicksPadding?: number;

    /**
     * Tick angle in degrees.
     *
     * @default 0
     * @remarks Valid range: 0-360
     */
    gaugeTicksAngle?: number;

    /**
     * Start angle in degrees.
     *
     * @default 45
     * @remarks Valid range: 0-360
     */
    gaugeStartAngle?: number;

    /**
     * Needle circle outer color (CSS color).
     */
    gaugeColorNeedleCircleOuter?: string;

    /**
     * Needle circle outer end color (CSS color).
     */
    gaugeColorNeedleCircleOuterEnd?: string;

    /**
     * Needle circle inner color (CSS color).
     */
    gaugeColorNeedleCircleInner?: string;

    /**
     * Needle circle inner end color (CSS color).
     */
    gaugeColorNeedleCircleInnerEnd?: string;

    /**
     * Needle circle size in pixels.
     *
     * @default 10
     * @remarks Valid range: min 0
     */
    gaugeNeedleCircleSize?: number;

    /**
     * Show inner needle circle.
     *
     * @default true
     */
    gaugeNeedleCircleInner?: boolean;

    /**
     * Show outer needle circle.
     *
     * @default true
     */
    gaugeNeedleCircleOuter?: boolean;

    /**
     * Animation target element.
     *
     * @default 'needle'
     */
    gaugeAnimationTarget?: 'needle' | 'plate';

    /**
     * Use minimum path for needle animation.
     *
     * @default false
     */
    gaugeUseMinPath?: boolean;

    /**
     * Use exact tick positions.
     *
     * @default true
     */
    gaugeExactTicks?: boolean;

    /**
     * Number of major ticks.
     *
     * @default 10
     */
    gaugeMajorTicks?: number;

    /**
     * Number of minor ticks between major ticks.
     *
     * @default 2
     */
    gaugeMinorTicks?: number;

    /**
     * Use stroke for ticks.
     *
     * @default false
     */
    gaugeStrokeTicks?: boolean;

    /**
     * Major tick integer digits.
     *
     * @default 1
     */
    gaugeMajorTicksInt?: number;

    /**
     * Major tick decimal digits.
     *
     * @default 0
     */
    gaugeMajorTicksDec?: number;

    /**
     * Highlight zone width in pixels.
     *
     * @default 0
     */
    gaugeHighlightsWidth?: number;

    /**
     * Number label margin in pixels.
     *
     * @default 0
     */
    gaugeNumbersMargin?: number;

    /**
     * Bar width in pixels.
     *
     * @default 0
     * @remarks Valid range: 0-50
     */
    gaugeBarWidth?: number;

    /**
     * Bar stroke width in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeBarStrokeWidth?: number;

    /**
     * Show progress bar.
     *
     * @default false
     */
    gaugeBarProgress?: boolean;

    /**
     * Bar shadow blur in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeBarShadow?: number;

    /**
     * Enable animation.
     *
     * @default true
     */
    gaugeAnimation?: boolean;

    /**
     * Animation duration in milliseconds.
     *
     * @default 1000
     * @remarks Valid range: min 0
     */
    gaugeAnimationDuration?: number;

    /**
     * Animation easing rule.
     *
     * @default 'linear'
     */
    gaugeAnimationRule?:
        | 'linear'
        | 'quad'
        | 'quint'
        | 'cycle'
        | 'bounce'
        | 'elastic'
        | 'dequad'
        | 'dequint'
        | 'decycle'
        | 'debounce'
        | 'delastic';

    /**
     * Animate value text changes.
     *
     * @default false
     */
    gaugeAnimatedValue?: boolean;

    /**
     * Animate on initial render.
     *
     * @default false
     */
    gaugeAnimateOnInit?: boolean;

    /**
     * Plate background color (CSS color).
     */
    gaugeColorPlate?: string;

    /**
     * Plate end color for gradient (CSS color).
     */
    gaugeColorPlateEnd?: string;

    /**
     * Major tick color (CSS color).
     */
    gaugeColorMajorTicks?: string;

    /**
     * Minor tick color (CSS color).
     */
    gaugeColorMinorTicks?: string;

    /**
     * Stroke tick color (CSS color).
     */
    gaugeColorStrokeTicks?: string;

    /**
     * Title text color (CSS color).
     */
    gaugeColorTitle?: string;

    /**
     * Units text color (CSS color).
     */
    gaugeColorUnits?: string;

    /**
     * Number labels color (CSS color).
     */
    gaugeColorNumbers?: string;

    /**
     * Needle color (CSS color).
     */
    gaugeColorNeedle?: string;

    /**
     * Needle end color for gradient (CSS color).
     */
    gaugeColorNeedleEnd?: string;

    /**
     * Value text color (CSS color).
     */
    gaugeColorValueText?: string;

    /**
     * Value text shadow color (CSS color).
     */
    gaugeColorValueTextShadow?: string;

    /**
     * Border shadow color (CSS color).
     */
    gaugeColorBorderShadow?: string;

    /**
     * Outer border color (CSS color).
     */
    gaugeColorBorderOuter?: string;

    /**
     * Outer border end color for gradient (CSS color).
     */
    gaugeColorBorderOuterEnd?: string;

    /**
     * Middle border color (CSS color).
     */
    gaugeColorBorderMiddle?: string;

    /**
     * Middle border end color for gradient (CSS color).
     */
    gaugeColorBorderMiddleEnd?: string;

    /**
     * Inner border color (CSS color).
     */
    gaugeColorBorderInner?: string;

    /**
     * Inner border end color for gradient (CSS color).
     */
    gaugeColorBorderInnerEnd?: string;

    /**
     * Value box rectangle color (CSS color).
     */
    gaugeColorValueBoxRect?: string;

    /**
     * Value box rectangle end color for gradient (CSS color).
     */
    gaugeColorValueBoxRectEnd?: string;

    /**
     * Value box background color (CSS color).
     */
    gaugeColorValueBoxBackground?: string;

    /**
     * Value box shadow color (CSS color).
     */
    gaugeColorValueBoxShadow?: string;

    /**
     * Needle shadow up color (CSS color).
     */
    gaugeColorNeedleShadowUp?: string;

    /**
     * Needle shadow down color (CSS color).
     */
    gaugeColorNeedleShadowDown?: string;

    /**
     * Bar stroke color (CSS color).
     */
    gaugeColorBarStroke?: string;

    /**
     * Needle circle shadow up color (CSS color).
     */
    gaugeColorNeedleCircleShadowUp?: string;

    /**
     * Bar color (CSS color).
     */
    gaugeColorBar?: string;

    /**
     * Bar progress color (CSS color).
     */
    gaugeColorBarProgress?: string;

    /**
     * Highlight line cap style.
     *
     * @default 'butt'
     */
    gaugeHighlightsLineCap?: 'butt' | 'round' | 'square';

    /**
     * Show needle.
     *
     * @default true
     */
    gaugeNeedle?: boolean;

    /**
     * Show needle shadow.
     *
     * @default false
     */
    gaugeNeedleShadow?: boolean;

    /**
     * Needle type.
     *
     * @default 'arrow'
     */
    gaugeNeedleType?: 'arrow' | 'line';

    /**
     * Needle start position (percentage).
     *
     * @default 0
     * @remarks Valid range: 0-100
     */
    gaugeNeedleStart?: number;

    /**
     * Needle end position (percentage).
     *
     * @default 80
     * @remarks Valid range: 0-100
     */
    gaugeNeedleEnd?: number;

    /**
     * Needle width in pixels.
     *
     * @default 2
     */
    gaugeNeedleWidth?: number;

    /**
     * Show borders.
     *
     * @default true
     */
    gaugeBorders?: boolean;

    /**
     * Outer border width in pixels.
     *
     * @default 10
     * @remarks Valid range: min 0
     */
    gaugeBorderOuterWidth?: number;

    /**
     * Middle border width in pixels.
     *
     * @default 10
     * @remarks Valid range: min 0
     */
    gaugeBorderMiddleWidth?: number;

    /**
     * Inner border width in pixels.
     *
     * @default 10
     * @remarks Valid range: min 0
     */
    gaugeBorderInnerWidth?: number;

    /**
     * Border shadow width in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeBorderShadowWidth?: number;

    /**
     * Show value box.
     *
     * @default false
     */
    gaugeValueBox?: boolean;

    /**
     * Value box stroke width in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeValueBoxStroke?: number;

    /**
     * Value box width in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeValueBoxWidth?: number;

    /**
     * Custom value text.
     */
    gaugeValueText?: string;

    /**
     * Show value text shadow.
     *
     * @default false
     */
    gaugeValueTextShadow?: boolean;

    /**
     * Value box border radius in pixels.
     *
     * @default 0
     * @remarks Valid range: min 0
     */
    gaugeValueBoxBorderRadius?: number;

    /**
     * Value integer digits.
     *
     * @default 3
     * @remarks Valid range: min 0
     */
    gaugeValueInt?: number;

    /**
     * Value decimal digits.
     *
     * @default 2
     * @remarks Valid range: min 0
     */
    gaugeValueDec?: number;

    /**
     * Number labels font family.
     */
    gaugeFontNumbers?: string;

    /**
     * Title font family.
     */
    gaugeFontTitle?: string;

    /**
     * Units font family.
     */
    gaugeFontUnits?: string;

    /**
     * Value font family.
     */
    gaugeFontValue?: string;

    /**
     * Number labels font size in pixels.
     *
     * @default 20
     * @remarks Valid range: min 0
     */
    gaugeFontNumbersSize?: number;

    /**
     * Title font size in pixels.
     *
     * @default 24
     * @remarks Valid range: min 0
     */
    gaugeFontTitleSize?: number;

    /**
     * Units font size in pixels.
     *
     * @default 22
     * @remarks Valid range: min 0
     */
    gaugeFontUnitsSize?: number;

    /**
     * Value font size in pixels.
     *
     * @default 40
     * @remarks Valid range: min 0
     */
    gaugeFontValueSize?: number;

    /**
     * Number labels font style.
     *
     * @default 'normal'
     */
    gaugeFontNumbersStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Title font style.
     *
     * @default 'normal'
     */
    gaugeFontTitleStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Units font style.
     *
     * @default 'normal'
     */
    gaugeFontUnitsStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Value font style.
     *
     * @default 'normal'
     */
    gaugeFontValueStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Number labels font weight.
     *
     * @default 'normal'
     */
    gaugeFontNumbersWeight?:
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

    /**
     * Title font weight.
     *
     * @default 'normal'
     */
    gaugeFontTitleWeight?:
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

    /**
     * Units font weight.
     *
     * @default 'normal'
     */
    gaugeFontUnitsWeight?:
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

    /**
     * Value font weight.
     *
     * @default 'normal'
     */
    gaugeFontValueWeight?:
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
}
