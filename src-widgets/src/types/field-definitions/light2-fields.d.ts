/**
 * Light2 widget field definitions for vis-2 Collection.
 * Advanced color picker with RGB/HSV/CCT support and modal-based editing.
 */
export interface Light2FieldsRxData {
    /**
     * Enable button-triggered mode; a long-press opens the full color picker modal.
     *
     * @default false
     * @example
     * ```typescript
     * const data: Light2FieldsRxData = {
     *     colorLightButton: true,
     *     colorLightDelayLongPress: 600
     * };
     * ```
     */
    colorLightButton?: boolean;

    /**
     * Long-press duration in milliseconds before opening the picker when button mode is enabled.
     *
     * @default 500
     */
    colorLightDelayLongPress?: number;

    /**
     * Modal width in pixels. Use 0 to allow automatic sizing.
     *
     * @example
     * ```typescript
     * const data: Light2FieldsRxData = {
     *     colorLightModalWidth: 480
     * };
     * ```
     */
    colorLightModalWidth?: number;

    /**
     * Modal height in pixels.
     *
     * @default 300
     */
    colorLightModalHeight?: number;

    /**
     * Relative width multiplier for sliders inside the modal.
     *
     * @default 1
     * @remarks
     * Increase for wider sliders on large screens; decrease for dense layouts.
     */
    colorLightSliderWidth?: number;

    /**
     * Border thickness around the modal in pixels.
     *
     * @default 3
     */
    colorLightBorderWidth?: number;

    /**
     * Border color for the modal container.
     */
    colorLightBorderColor?: string;

    /**
     * Padding multiplier applied to modal content spacing.
     *
     * @default 1
     */
    colorLightPadding?: number;

    /**
     * Switch object ID for on/off control of the light.
     *
     * @example
     * ```typescript
     * const data: Light2FieldsRxData = {
     *     colorLightSwitchOid: 'zigbee.0.light.switch'
     * };
     * ```
     */
    colorLightSwitchOid?: string;

    /**
     * UI component used for color selection.
     *
     * @default 'wheel'
     */
    colorLightUIComponent?: 'wheel' | 'box' | 'slider';

    /**
     * Show lightness control on the color wheel when supported by the selected component.
     *
     * @default false
     */
    colorWheelLightness?: boolean;

    /**
     * Color control type describing the available channels or mode.
     *
     * @default 'none'
     * @remarks
     * Choose a mode that matches the target device capabilities (e.g., `rgbcct` for RGB+CCT drivers).
     */
    colorLightType?: 'none' | 'cct' | 'rgb' | 'rgbcct' | 'r/g/b' | 'r/g/b/cct' | 'h/s/v' | 'h/s/v/cct';

    /**
     * Object ID for color temperature (Kelvin) control.
     */
    colorLightTemperatureOid?: string;

    /**
     * Minimum allowed color temperature in Kelvin.
     *
     * @default 2000
     */
    colorLightCtMin?: number;

    /**
     * Maximum allowed color temperature in Kelvin.
     *
     * @default 6500
     */
    colorLightCtMax?: number;

    /**
     * Object ID for RGB hex color (e.g., `#ff8800`).
     */
    colorLightRgbHexOid?: string;

    /**
     * Object ID for the red channel (0-255).
     */
    colorLightRedOid?: string;

    /**
     * Object ID for the green channel (0-255).
     */
    colorLightGreenOid?: string;

    /**
     * Object ID for the blue channel (0-255).
     */
    colorLightBlueOid?: string;

    /**
     * Object ID for hue (0-360).
     */
    colorLightHueOid?: string;

    /**
     * Object ID for saturation (0-100).
     */
    colorLightSaturationOid?: string;

    /**
     * Object ID for brightness or dimmer state (expects 0-100 values).
     */
    colorLightBrightnessOid?: string;

    /**
     * Philips Hue gamut type. Reserved for compatibility with Hue devices.
     *
     * @default 'default'
     */
    colorLightGamut?: 'default' | 'A' | 'B' | 'C';
}
