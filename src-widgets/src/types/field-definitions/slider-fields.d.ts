/**
 * Slider field definitions for vis-2 Collection widgets.
 * Controls slider appearance, range, marks, and icons.
 */
export interface SliderFieldsRxData {
    /**
     * Slider size variant.
     *
     * @default 'medium'
     */
    sliderSize?: 'small' | 'medium';

    /**
     * Slider orientation.
     *
     * @default 'horizontal'
     */
    sliderOrientation?: 'horizontal' | 'vertical';

    /**
     * Gap between slider and min/max icons.
     *
     * @default 0
     */
    sliderGap?: number;

    /**
     * Value label display mode.
     *
     * @default 'off'
     */
    valueLabelDisplay?: 'on' | 'off' | 'auto';

    /**
     * Label position offset (CSS value).
     *
     * @default '-5px'
     */
    labelPosition?: string;

    /**
     * Slider track color (CSS color).
     */
    sliderColor?: string;

    /**
     * Thumb width in pixels.
     *
     * @default 1
     */
    sliderPadding?: number;

    /**
     * Thumb width in pixels.
     *
     * @default 20
     */
    thumbWidth?: number;

    /**
     * Thumb height in pixels.
     *
     * @default 20
     */
    thumbHeight?: number;

    /**
     * Thumb border width in pixels.
     *
     * @default 0
     */
    thumbBorderWidth?: number;

    /**
     * Thumb color (CSS color).
     */
    thumbColor?: string;

    /**
     * Thumb border color (CSS color).
     * Follows fallback chain: thumbBorderColor → thumbColor → sliderColor → theme.palette.primary.main
     */
    thumbBorderColor?: string;

    /**
     * Track length in pixels (height for horizontal, width for vertical).
     *
     * @default 4
     */
    trackLength?: number;

    /**
     * Track border color (CSS color).
     */
    trackBorderColor?: string;

    /**
     * Track border width in pixels.
     *
     * @default 0
     */
    trackBorderWidth?: number;

    /**
     * Track background color (CSS color).
     */
    trackBackgroundColor?: string;

    /**
     * Rail length in pixels (height for horizontal, width for vertical).
     *
     * @default 4
     */
    railLength?: number;

    /**
     * Rail background color (CSS color).
     */
    railBackgroundColor?: string;

    /**
     * Rail border width in pixels.
     *
     * @default 0
     */
    railBorderWidth?: number;

    /**
     * Rail border color (CSS color).
     * Follows fallback chain: railBorderColor → sliderColor → theme.palette.primary.main
     */
    railBorderColor?: string;

    /**
     * Mark width in pixels.
     *
     * @default 2
     */
    markWidth?: number;

    /**
     * Mark height in pixels.
     *
     * @default 2
     */
    markHeight?: number;

    /**
     * Mark background color (CSS color).
     */
    markBackgroundColor?: string;

    /**
     * Minimum slider value.
     *
     * @default 0
     */
    minValue?: number;

    /**
     * Maximum slider value.
     *
     * @default 100
     */
    maxValue?: number;

    /**
     * Step increment value.
     *
     * @default 10
     */
    step?: number;

    /**
     * Only allow predefined state values.
     *
     * @default false
     */
    onlyStates?: boolean;

    /**
     * Show tick marks on slider.
     *
     * @default false
     */
    marks?: boolean;

    /**
     * Mark position offset (CSS value).
     *
     * @default '30px'
     */
    markPosition?: string;

    /**
     * Step between marks.
     *
     * @default 10
     */
    markStep?: number;

    /**
     * Mark text color (CSS color).
     */
    markerTextColor?: string;

    /**
     * Mark text size in percentage.
     *
     * @remarks Valid range: 0-500
     */
    markerTextSize?: number;

    /**
     * Mark icon color (CSS color).
     */
    markerIconColor?: string;

    /**
     * Mark icon size in percentage.
     *
     * @remarks Valid range: 0-500
     */
    markerIconSize?: number;

    /**
     * Small icon for minimum value.
     */
    iconSmallMin?: string;

    /**
     * Image icon for minimum value.
     */
    iconMin?: string;

    /**
     * Start icon size (CSS value).
     *
     * @default '24px'
     */
    iconSizeStart?: string;

    /**
     * Start icon color (CSS color).
     */
    startIconColor?: string;

    /**
     * Small icon for maximum value.
     */
    iconSmallMax?: string;

    /**
     * Image icon for maximum value.
     */
    iconMax?: string;

    /**
     * End icon size (CSS value).
     *
     * @default '24px'
     */
    iconSizeEnd?: string;

    /**
     * End icon color (CSS color).
     */
    endIconColor?: string;
}
