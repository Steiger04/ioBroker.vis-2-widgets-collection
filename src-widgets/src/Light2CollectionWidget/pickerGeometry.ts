/**
 * Light2 picker geometry — every size of the Lampen-Bedienelement from one place.
 *
 * @module Light2CollectionWidget/pickerGeometry
 * @remarks
 * ADR-0108 Nr. 5: from the configuration (UI component, CCT-Ansicht, slider width, CT range,
 * modal size) and the measured picker box one result — slider size, main picker bound, resize
 * width, gap, offset of the second picker, iro layout per picker and the Button-Modus modal
 * auto width. The 28px slider unit and the 12px gap live only here.
 *
 * Pure: the body measures its picker box itself (callback ref + useElementDimensions, no
 * Content-Box — ADR-0098 Nr. 3/4) and hands the box in; `Light2Picker` draws the result.
 */
import iro from '@jaames/iro';
import type { ElementDimensions } from '../hooks/useElementDimensions';
import type { Light2FieldsRxData } from '../types';

/** One iro slider unit (`colorLightSliderWidth` 1), in px. */
const SLIDER_UNIT_PX = 28;

/** Gap kept between the main picker and the value slider, in px. */
const PICKER_GAP_PX = 12;

/** Modal height while `colorLightModalHeight` is unset, in px. */
const DEFAULT_MODAL_HEIGHT_PX = 300;

/** Fixed extra width of the modal auto width beside picker, gap and slider, in px. */
const MODAL_EXTRA_WIDTH_PX = 40;

/**
 * The geometry iro is created with, before the first measured layout replaces it
 * (`Light2Picker` sets the measured gap and slider size right after creation).
 */
export const INITIAL_IRO_GEOMETRY = {
    width: 0,
    margin: PICKER_GAP_PX,
    sliderSize: SLIDER_UNIT_PX,
} as const;

/** The iro layout of one picker: its components in drawing order. */
export type IroLayout = Array<{
    component: typeof iro.ui.Wheel | typeof iro.ui.Box | typeof iro.ui.Slider;
    options?: Record<string, any>;
}>;

/** The widget configuration the geometry depends on. */
export interface PickerGeometryConfig {
    uiComponent: Light2FieldsRxData['colorLightUIComponent'];
    /** CCT-Ansicht active: always for the Lichttyp cct, switchable for an „& cct“ one. */
    cctView: boolean;
    sliderWidth: Light2FieldsRxData['colorLightSliderWidth'];
    ctMin: Light2FieldsRxData['colorLightCtMin'];
    ctMax: Light2FieldsRxData['colorLightCtMax'];
    modalWidth: Light2FieldsRxData['colorLightModalWidth'];
    modalHeight: Light2FieldsRxData['colorLightModalHeight'];
}

/** Everything the body and the picker draw with. */
export interface PickerGeometry {
    /** Width of one slider (`colorLightSliderWidth` × 28), in px. */
    sliderSize: number;
    /** Width bound of the main picker (wheel, box, kelvin slider), in px; `undefined` until measured. */
    mainPickerBound: number | undefined;
    /** Target of `picker.resize()`, in px. */
    resizeWidth: number | undefined;
    /** Gap between the components of a picker (iro `margin`), in px. */
    gap: number;
    /** Left offset of the second picker of the CCT-Ansicht, in px — the gap. */
    secondPickerOffset: number;
    /** iro layout of the first and the second picker (index = picker number − 1). */
    layouts: readonly [IroLayout, IroLayout];
    /** Width of the Button-Modus modal, in px ({@link modalWidthOf}). */
    modalWidth: number;
}

const sliderSizeOf = (sliderWidth: PickerGeometryConfig['sliderWidth']): number => (sliderWidth || 1) * SLIDER_UNIT_PX;

/**
 * The main picker's width bound: while the width cannot hold a height-sized picker plus the
 * value slider and its gap, the picker takes the width minus slider and gap; otherwise the
 * height bounds it.
 */
function mainPickerBoundOf({ width, height }: ElementDimensions, sliderSize: number): number | undefined {
    if (width === undefined || height === undefined) {
        return undefined;
    }
    return width <= height + sliderSize + PICKER_GAP_PX ? width - sliderSize - PICKER_GAP_PX : height;
}

/** The iro layout of one picker (1 or 2; the number matters only in the CCT-Ansicht). */
function layoutOf(pickerNumber: 1 | 2, config: PickerGeometryConfig): IroLayout {
    if (config.cctView) {
        const cctLayout = [
            {
                component: iro.ui.Slider,
                options: {
                    sliderType: 'kelvin',
                    sliderShape: 'circle',
                    minTemperature: config.ctMin,
                    maxTemperature: config.ctMax,
                },
            },
            {
                component: iro.ui.Slider,
                options: { sliderType: 'value' },
            },
        ];
        // CCT-Ansicht: the Kelvin-Picker first, the Helligkeits-Picker second.
        return [cctLayout[pickerNumber - 1]];
    }
    switch (config.uiComponent) {
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

/** The width for `picker.resize()`: the main picker bound, the height for the vertical RGB sliders. */
function resizeWidthOf(
    config: PickerGeometryConfig,
    height: number | undefined,
    mainPickerBound: number | undefined,
): number | undefined {
    if (config.cctView) {
        return mainPickerBound;
    }
    switch (config.uiComponent) {
        case 'wheel':
        case 'box':
            return mainPickerBound;
        case 'slider':
            return height;
        default:
            return 0;
    }
}

/** The spacing between the main picker element and the value slider (or between the RGB sliders). */
function gapOf(
    config: PickerGeometryConfig,
    { width, height }: ElementDimensions,
    sliderSize: number,
    mainPickerBound: number | undefined,
): number {
    if (!width || !height) {
        return PICKER_GAP_PX;
    }

    // Slider layout (RGB): spacing between the 3 sliders.
    if (config.uiComponent === 'slider' && !config.cctView) {
        return (width - 3 * sliderSize) / 2;
    }

    // CCT/Wheel/Box: maximize spacing between the main element and the value slider.
    const availableSpace = width - mainPickerBound! - sliderSize;

    return Math.max(PICKER_GAP_PX, availableSpace);
}

/**
 * The Button-Modus modal width: an explicit positive `colorLightModalWidth` as is, otherwise the
 * auto width. The picker draws its main element from the modal HEIGHT (square-ish), so the optimum
 * width derives from height + slider + gap (see color_light_modal_width_tooltip).
 *
 * @param config - Modal width/height and slider width of the widget.
 * @returns The modal width in px.
 */
export function modalWidthOf(
    config: Partial<Pick<PickerGeometryConfig, 'modalWidth' | 'modalHeight' | 'sliderWidth'>>,
): number {
    if (typeof config.modalWidth === 'number' && config.modalWidth > 0) {
        return config.modalWidth;
    }
    return (
        (config.modalHeight || DEFAULT_MODAL_HEIGHT_PX) +
        MODAL_EXTRA_WIDTH_PX +
        PICKER_GAP_PX +
        sliderSizeOf(config.sliderWidth)
    );
}

/**
 * Computes the picker geometry from the configuration and the measured picker box.
 *
 * @param config - The geometry-relevant widget configuration.
 * @param measured - The measured picker box (useElementDimensions); unmeasured while `undefined`.
 * @returns All sizes and layouts the body and `Light2Picker` draw with.
 */
export function pickerGeometry(config: PickerGeometryConfig, measured: ElementDimensions): PickerGeometry {
    const sliderSize = sliderSizeOf(config.sliderWidth);
    const mainPickerBound = mainPickerBoundOf(measured, sliderSize);
    const gap = gapOf(config, measured, sliderSize, mainPickerBound);
    return {
        sliderSize,
        mainPickerBound,
        resizeWidth: resizeWidthOf(config, measured.height, mainPickerBound),
        gap,
        secondPickerOffset: gap,
        layouts: [layoutOf(1, config), layoutOf(2, config)],
        modalWidth: modalWidthOf(config),
    };
}
