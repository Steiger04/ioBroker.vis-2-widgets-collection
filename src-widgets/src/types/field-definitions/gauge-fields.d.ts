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
 *
 * Defaults live in ONE place: the field definitions in `lib/gaugeFields.tsx` (the
 * Options-Builder reads them from there). This file deliberately carries no
 * `@default` docs — duplicated default lists have historically drifted out of sync.
 */
export interface GaugeFieldsRxData {
    /**
     * Gauge display type.
     *
     */
    gaugeType?: 'linear' | 'radial';

    /**
     * Minimum gauge value.
     *
     */
    gaugeMinValue?: number;

    /**
     * Maximum gauge value.
     *
     */
    gaugeMaxValue?: number;

    /**
     * Gauge padding in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugePadding?: number;

    /**
     * Icon fit mode.
     *
     */
    gaugeIconFit?: 'contain' | 'cover' | 'fill';

    /**
     * Border radius in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBorderRadius?: number;

    /**
     * Bar begin circle size.
     *
     * @remarks Valid range: min 0
     */
    gaugeBarBeginCircle?: number;

    /**
     * Bar length percentage.
     *
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
     */
    gaugeTickSide?: 'both' | 'left' | 'right';

    /**
     * Needle side placement.
     *
     */
    gaugeNeedleSide?: 'both' | 'left' | 'right';

    /**
     * Number label side placement.
     *
     */
    gaugeNumberSide?: 'both' | 'left' | 'right';

    /**
     * Major tick width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeTicksWidth?: number;

    /**
     * Minor tick width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeTicksWidthMinor?: number;

    /**
     * Tick padding in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeTicksPadding?: number;

    /**
     * Tick angle in degrees.
     *
     * @remarks Valid range: 0-360
     */
    gaugeTicksAngle?: number;

    /**
     * Start angle in degrees.
     *
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
     * @remarks Valid range: min 0
     */
    gaugeNeedleCircleSize?: number;

    /**
     * Show inner needle circle.
     *
     */
    gaugeNeedleCircleInner?: boolean;

    /**
     * Show outer needle circle.
     *
     */
    gaugeNeedleCircleOuter?: boolean;

    /**
     * Animation target element.
     *
     */
    gaugeAnimationTarget?: 'needle' | 'plate';

    /**
     * Use minimum path for needle animation.
     *
     */
    gaugeUseMinPath?: boolean;

    /**
     * Use exact tick positions.
     *
     */
    gaugeExactTicks?: boolean;

    /**
     * Number of major ticks.
     *
     */
    gaugeMajorTicks?: number;

    /**
     * Number of minor ticks between major ticks.
     *
     */
    gaugeMinorTicks?: number;

    /**
     * Use stroke for ticks.
     *
     */
    gaugeStrokeTicks?: boolean;

    /**
     * Major tick integer digits.
     *
     */
    gaugeMajorTicksInt?: number;

    /**
     * Major tick decimal digits.
     *
     */
    gaugeMajorTicksDec?: number;

    /**
     * Highlight zone width in pixels.
     *
     */
    gaugeHighlightsWidth?: number;

    /**
     * Number label margin in pixels.
     *
     */
    gaugeNumbersMargin?: number;

    /**
     * Bar width in pixels.
     *
     * @remarks Valid range: 0-50
     */
    gaugeBarWidth?: number;

    /**
     * Bar stroke width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBarStrokeWidth?: number;

    /**
     * Show progress bar.
     *
     */
    gaugeBarProgress?: boolean;

    /**
     * Bar shadow blur in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBarShadow?: number;

    /**
     * Enable animation.
     *
     */
    gaugeAnimation?: boolean;

    /**
     * Animation duration in milliseconds.
     *
     * @remarks Valid range: min 0
     */
    gaugeAnimationDuration?: number;

    /**
     * Animation easing rule.
     *
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
     */
    gaugeAnimatedValue?: boolean;

    /**
     * Animate on initial render.
     *
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
     */
    gaugeHighlightsLineCap?: 'butt' | 'round' | 'square';

    /**
     * Show needle.
     *
     */
    gaugeNeedle?: boolean;

    /**
     * Show needle shadow.
     *
     */
    gaugeNeedleShadow?: boolean;

    /**
     * Needle type.
     *
     */
    gaugeNeedleType?: 'arrow' | 'line';

    /**
     * Needle start position (percentage).
     *
     * @remarks Valid range: 0-100
     */
    gaugeNeedleStart?: number;

    /**
     * Needle end position (percentage).
     *
     * @remarks Valid range: 0-100
     */
    gaugeNeedleEnd?: number;

    /**
     * Needle width in pixels.
     *
     */
    gaugeNeedleWidth?: number;

    /**
     * Show borders.
     *
     */
    gaugeBorders?: boolean;

    /**
     * Outer border width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBorderOuterWidth?: number;

    /**
     * Middle border width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBorderMiddleWidth?: number;

    /**
     * Inner border width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBorderInnerWidth?: number;

    /**
     * Border shadow width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeBorderShadowWidth?: number;

    /**
     * Show value box.
     *
     */
    gaugeValueBox?: boolean;

    /**
     * Value box stroke width in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeValueBoxStroke?: number;

    /**
     * Value box width in pixels.
     *
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
     */
    gaugeValueTextShadow?: boolean;

    /**
     * Value box border radius in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeValueBoxBorderRadius?: number;

    /**
     * Value integer digits.
     *
     * @remarks Valid range: min 0
     */
    gaugeValueInt?: number;

    /**
     * Value decimal digits.
     *
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
     * @remarks Valid range: min 0
     */
    gaugeFontNumbersSize?: number;

    /**
     * Title font size in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeFontTitleSize?: number;

    /**
     * Units font size in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeFontUnitsSize?: number;

    /**
     * Value font size in pixels.
     *
     * @remarks Valid range: min 0
     */
    gaugeFontValueSize?: number;

    /**
     * Number labels font style.
     *
     */
    gaugeFontNumbersStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Title font style.
     *
     */
    gaugeFontTitleStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Units font style.
     *
     */
    gaugeFontUnitsStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Value font style.
     *
     */
    gaugeFontValueStyle?: 'normal' | 'italic' | 'oblique';

    /**
     * Number labels font weight.
     *
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
