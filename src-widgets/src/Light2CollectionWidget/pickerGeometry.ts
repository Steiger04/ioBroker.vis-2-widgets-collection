/**
 * Light2 picker geometry — every size of the Lampen-Bedienelement from one place.
 *
 * @module Light2CollectionWidget/pickerGeometry
 * @remarks
 * ADR-0108 Nr. 5: from the configuration (UI component, CCT-Ansicht, slider width, CT range)
 * and the measured picker box one result — slider size, main picker bound, resize width, gap,
 * offset of the second picker and iro layout per picker. Beside it {@link modalSizeOf} gives the
 * size of the Button-Modus modal. The 28px slider unit, the 12px gap and the 300px default modal
 * height live only here.
 *
 * Pure: the body measures its picker box itself (callback ref + useElementDimensions, no
 * Content-Box — ADR-0098 Nr. 3/4) and hands the box in; `Light2Picker` draws the result.
 */
import iro from '@jaames/iro';
import optionalNumber from '../lib/helper/optionalNumber';
import type { ElementDimensions } from '../hooks/useElementDimensions';
import type { Light2FieldsRxData } from '../types';
import type { LampPicker } from './lampSync';

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
}

/** The widget configuration the Button-Modus modal size depends on. */
export interface ModalSizeConfig {
    modalWidth?: Light2FieldsRxData['colorLightModalWidth'];
    modalHeight?: Light2FieldsRxData['colorLightModalHeight'];
    sliderWidth?: Light2FieldsRxData['colorLightSliderWidth'];
}

/** The size of the Button-Modus modal, in px. */
export interface ModalSize {
    width: number;
    height: number;
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
    /** iro layout of the main and of the Helligkeits-Picker (the latter drawn only in the CCT-Ansicht). */
    layouts: Readonly<Record<LampPicker, IroLayout>>;
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

/**
 * What a picker kind draws: the iro layout of each picker, the `picker.resize()` target and the
 * gap. A kind is a UI component of the colour view, or the CCT-Ansicht, which overrides it.
 */
interface PickerKindRule {
    /** The iro layout of one picker (which one matters only in the CCT-Ansicht). */
    layout: (picker: LampPicker, config: PickerGeometryConfig) => IroLayout;
    /** The width for `picker.resize()`. */
    resizeWidth: (height: number | undefined, mainPickerBound: number | undefined) => number | undefined;
    /** The gap of a measured box (width and height non-zero). */
    gap: (width: number, sliderSize: number, mainPickerBound: number | undefined) => number;
}

/** CCT, wheel, box: the main picker element is bounded, its value slider beside it. */
const resizeToMainPickerBound: PickerKindRule['resizeWidth'] = (_height, mainPickerBound) => mainPickerBound;

/** CCT, wheel, box: maximize the spacing between the main element and the value slider. */
const gapBesideMainPicker: PickerKindRule['gap'] = (width, sliderSize, mainPickerBound) =>
    Math.max(PICKER_GAP_PX, width - mainPickerBound! - sliderSize);

/** The CCT-Ansicht: the Kelvin-Picker (main) and the Helligkeits-Picker, one slider each. */
const CCT_VIEW_RULE: PickerKindRule = {
    layout: (picker, config) =>
        picker === 'main'
            ? [
                  {
                      component: iro.ui.Slider,
                      options: {
                          sliderType: 'kelvin',
                          sliderShape: 'circle',
                          minTemperature: config.ctMin,
                          maxTemperature: config.ctMax,
                      },
                  },
              ]
            : [
                  {
                      component: iro.ui.Slider,
                      options: { sliderType: 'value' },
                  },
              ],
    resizeWidth: resizeToMainPickerBound,
    gap: gapBesideMainPicker,
};

/** The colour view per UI component (`colorLightUIComponent`). */
const UI_COMPONENT_RULES: Record<NonNullable<PickerGeometryConfig['uiComponent']>, PickerKindRule> = {
    wheel: {
        layout: () => [
            {
                component: iro.ui.Wheel,
                options: {},
            },
            {
                component: iro.ui.Slider,
                options: { sliderType: 'value' },
            },
        ],
        resizeWidth: resizeToMainPickerBound,
        gap: gapBesideMainPicker,
    },
    box: {
        layout: () => [
            {
                component: iro.ui.Box,
                options: { boxLightness: false },
            },
            {
                component: iro.ui.Slider,
                options: { sliderType: 'hue' },
            },
        ],
        resizeWidth: resizeToMainPickerBound,
        gap: gapBesideMainPicker,
    },
    slider: {
        layout: () => [
            { component: iro.ui.Slider, options: { sliderType: 'red' } },
            { component: iro.ui.Slider, options: { sliderType: 'green' } },
            { component: iro.ui.Slider, options: { sliderType: 'blue' } },
        ],
        // RGB sliders are drawn vertically: their length is the height.
        resizeWidth: height => height,
        // Spacing between the 3 sliders.
        gap: (width, sliderSize) => (width - 3 * sliderSize) / 2,
    },
};

/** An unset or unknown UI component: nothing drawn, no resize. */
const UNKNOWN_UI_COMPONENT_RULE: PickerKindRule = {
    layout: () => [],
    resizeWidth: () => 0,
    gap: gapBesideMainPicker,
};

/** The rule of the configured picker kind: the CCT-Ansicht, else the UI component. */
const ruleOf = ({ cctView, uiComponent }: PickerGeometryConfig): PickerKindRule => {
    if (cctView) {
        return CCT_VIEW_RULE;
    }
    return uiComponent !== undefined && Object.hasOwn(UI_COMPONENT_RULES, uiComponent)
        ? UI_COMPONENT_RULES[uiComponent]
        : UNKNOWN_UI_COMPONENT_RULE;
};

/**
 * The Button-Modus modal size. Height: `colorLightModalHeight`, 300px while unset. Width: an
 * explicit positive `colorLightModalWidth` as is (a numeric string as its number), otherwise the auto width — the picker draws its
 * main element from the modal HEIGHT (square-ish), so the optimum width derives from height +
 * slider + gap (see color_light_modal_width_tooltip).
 *
 * @param config - Modal width/height and slider width of the widget.
 * @returns The modal width and height in px.
 */
export function modalSizeOf(config: ModalSizeConfig): ModalSize {
    // A numeric string (vis-2's number field while typing, the assistant) sizes like its number.
    const height = optionalNumber(config.modalHeight) || DEFAULT_MODAL_HEIGHT_PX;
    const width = optionalNumber(config.modalWidth);
    if (width !== undefined && width > 0) {
        return { width, height };
    }
    return { width: height + MODAL_EXTRA_WIDTH_PX + PICKER_GAP_PX + sliderSizeOf(config.sliderWidth), height };
}

/**
 * Computes the picker geometry from the configuration and the measured picker box.
 *
 * @param config - The geometry-relevant widget configuration.
 * @param measured - The measured picker box (useElementDimensions); unmeasured while `undefined`.
 * @returns All sizes and layouts the body and `Light2Picker` draw with.
 */
export function pickerGeometry(config: PickerGeometryConfig, measured: ElementDimensions): PickerGeometry {
    const rule = ruleOf(config);
    const { width, height } = measured;
    const sliderSize = sliderSizeOf(config.sliderWidth);
    const mainPickerBound = mainPickerBoundOf(measured, sliderSize);
    // Nothing measurable yet: the 12px gap.
    const gap = width && height ? rule.gap(width, sliderSize, mainPickerBound) : PICKER_GAP_PX;
    return {
        sliderSize,
        mainPickerBound,
        resizeWidth: rule.resizeWidth(height, mainPickerBound),
        gap,
        secondPickerOffset: gap,
        layouts: { main: rule.layout('main', config), brightness: rule.layout('brightness', config) },
    };
}
