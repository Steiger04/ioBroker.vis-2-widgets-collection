/**
 * Memo-style helpers for computing iro.js color picker layout and sizing.
 *
 * @module Light2CollectionWidget/colorPickerUtils/colorPickerMemos
 * @remarks
 * These helpers are intentionally pure: they compute picker layout/geometry from widget configuration and
 * measured element dimensions.
 */
import iro from '@jaames/iro';
import { type ElementDimensions } from '../../hooks/useElementDimensions';
import type { Light2FieldsRxData } from '../../types';

/** The measured picker box plus Light2's own main-picker bound ({@link withMainPickerBound}). */
export interface PickerDimensions extends ElementDimensions {
    /** Width bound of the main picker (wheel, box, kelvin slider) in px; `undefined` until measured. */
    maxWidth: number | undefined;
}

/** Gap kept between the main picker and the value slider, in px. */
const SLIDER_GAP_PX = 12;

/**
 * Adds the main picker's width bound to the measured box: while the width cannot hold a
 * height-sized picker plus the value slider and its gap, the picker takes the width minus
 * slider and gap; otherwise the height bounds it.
 *
 * @param measured - The measured picker box (useElementDimensions).
 * @param sliderSize - The value slider's width in px (`colorLightSliderWidth` × 28).
 * @returns The box with `maxWidth`; `undefined` while unmeasured.
 */
export function withMainPickerBound(measured: ElementDimensions, sliderSize: number): PickerDimensions {
    const { width, height } = measured;
    if (width === undefined || height === undefined) {
        return { width, height, maxWidth: undefined };
    }
    const maxWidth = width <= height + sliderSize + SLIDER_GAP_PX ? width - sliderSize - SLIDER_GAP_PX : height;
    return { width, height, maxWidth };
}

type IroLayout = Array<{
    component: typeof iro.ui.Wheel | typeof iro.ui.Box | typeof iro.ui.Slider;
    options?: Record<string, any>;
}>;

/**
 * Returns the iro.js layout for the given Light2 configuration.
 */
export function getColorLightLayout(
    cctComponentNumber: number,
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'],
    colorLightType: Light2FieldsRxData['colorLightType'],
    colorLightCtMin: Light2FieldsRxData['colorLightCtMin'],
    colorLightCtMax: Light2FieldsRxData['colorLightCtMax'],
): IroLayout {
    if (colorLightType === 'cct') {
        const cctLayout = [
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'kelvin',
                    sliderShape: 'circle',
                    minTemperature: colorLightCtMin,
                    maxTemperature: colorLightCtMax,
                },
            },
            {
                component: iro.ui.Slider,
                options: { sliderType: 'value' },
            },
        ];
        // CCT-specific: choose the component based on the CCT picker number.
        return [cctLayout[cctComponentNumber - 1]];
    }
    switch (colorLightUIComponent) {
        case 'wheel':
            return [
                {
                    component: iro.ui.Wheel,
                    options: {},
                },
                {
                    component: iro.ui.Slider,
                    options: { sliderType: 'value' },
                },
            ];
        case 'box':
            return [
                {
                    component: iro.ui.Box,
                    options: { boxLightness: false },
                },
                {
                    component: iro.ui.Slider,
                    options: { sliderType: 'hue' },
                },
            ];
        case 'slider':
            return [
                { component: iro.ui.Slider, options: { sliderType: 'red' } },
                { component: iro.ui.Slider, options: { sliderType: 'green' } },
                { component: iro.ui.Slider, options: { sliderType: 'blue' } },
            ];
        default:
            return [];
    }
}

/**
 * Returns the width used for `picker.resize()`.
 */
export function getColorLightWidth(
    dimensions: PickerDimensions,
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'],
    colorLightType: Light2FieldsRxData['colorLightType'],
): number | undefined {
    if (colorLightType === 'cct') {
        return dimensions.maxWidth;
    }

    switch (colorLightUIComponent) {
        case 'wheel':
        case 'box':
            return dimensions.maxWidth;
        case 'slider':
            return dimensions.height;
        default:
            return 0;
    }
}

/**
 * Computes the spacing between the main picker UI element and the value slider.
 */
export function getMarginBetweenPickers(
    dimensions: PickerDimensions,
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'],
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'],
    colorLightType: Light2FieldsRxData['colorLightType'],
): number {
    if (!dimensions.width || !dimensions.height) {
        return 12;
    }

    // Slider layout (RGB): spacing between the 3 sliders.
    if (colorLightUIComponent === 'slider' && colorLightType !== 'cct') {
        return (dimensions.width - 3 * (colorLightSliderWidth || 1) * 28) / 2;
    }

    // CCT/Wheel/Box: maximize spacing between the main element and the value slider.
    const mainPickerSize = dimensions.maxWidth;
    const sliderWidth = (colorLightSliderWidth || 1) * 28;
    const availableSpace = dimensions.width - mainPickerSize! - sliderWidth;

    return Math.max(12, availableSpace);
}
