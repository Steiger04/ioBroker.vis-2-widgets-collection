/**
 * Light2 widget field definitions for vis-2 Collection.
 * Advanced color picker with RGB/HSV/CCT support.
 */
export interface Light2FieldsRxData {
    /**
     * Enable button mode (long-press opens picker).
     *
     * @default false
     */
    colorLightButton?: boolean;

    /**
     * Long-press delay in milliseconds.
     *
     * @default 500
     */
    colorLightDelayLongPress?: number;

    /**
     * Modal width in pixels (0 = auto).
     */
    colorLightModalWidth?: number;

    /**
     * Modal height in pixels.
     *
     * @default 300
     */
    colorLightModalHeight?: number;

    /**
     * Slider width multiplier.
     *
     * @default 1
     */
    colorLightSliderWidth?: number;

    /**
     * Border width in pixels.
     *
     * @default 3
     */
    colorLightBorderWidth?: number;

    /**
     * Border color (CSS color).
     */
    colorLightBorderColor?: string;

    /**
     * Padding multiplier.
     *
     * @default 1
     */
    colorLightPadding?: number;

    /**
     * Switch object ID for on/off control.
     */
    colorLightSwitchOid?: string;

    /**
     * UI component type for color selection.
     *
     * @default 'wheel'
     */
    colorLightUIComponent?: 'wheel' | 'box' | 'slider';

    /**
     * Show lightness control in color wheel.
     *
     * @default false
     */
    colorWheelLightness?: boolean;

    /**
     * Color control type.
     *
     * @default 'none'
     */
    colorLightType?: 'none' | 'cct' | 'rgb' | 'rgbcct' | 'r/g/b' | 'r/g/b/cct' | 'h/s/v' | 'h/s/v/cct';

    /**
     * Color temperature object ID.
     */
    colorLightTemperatureOid?: string;

    /**
     * Minimum color temperature in Kelvin.
     *
     * @default 2000
     */
    colorLightCtMin?: number;

    /**
     * Maximum color temperature in Kelvin.
     *
     * @default 6500
     */
    colorLightCtMax?: number;

    /**
     * RGB hex color object ID.
     */
    colorLightRgbHexOid?: string;

    /**
     * Red channel object ID (0-255).
     */
    colorLightRedOid?: string;

    /**
     * Green channel object ID (0-255).
     */
    colorLightGreenOid?: string;

    /**
     * Blue channel object ID (0-255).
     */
    colorLightBlueOid?: string;

    /**
     * Hue object ID (0-360).
     */
    colorLightHueOid?: string;

    /**
     * Saturation object ID (0-100).
     */
    colorLightSaturationOid?: string;

    /**
     * Object ID (OID) for brightness/dimmer state (expects 0-100 values).
     */
    colorLightBrightnessOid?: string;

    /**
     * Philips Hue gamut type (currently commented out in UI form).
     *
     * @default 'default' (not exposed).
     */
    colorLightGamut?: 'default' | 'A' | 'B' | 'C';
}
