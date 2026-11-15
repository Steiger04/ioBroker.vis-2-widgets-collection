/**
 * Unit tests for the Light2 picker geometry.
 *
 * @module Light2CollectionWidget/pickerGeometry.test
 * @remarks
 * The geometry decides which iro components render per picker and view, how wide the main
 * picker may get next to its value slider, how the twin CCT pickers share the width and how
 * large the Button-Modus modal opens — pure functions of widget config and the measured box
 * (the view itself is untested, project rule). Every pixel value below is a pin of the layout
 * before the geometry moved behind one interface (ADR-0108 Nr. 5).
 */
import { describe, expect, it } from 'vitest';
import iro from '@jaames/iro';

import { modalSizeOf, pickerGeometry, type ModalSizeConfig, type PickerGeometryConfig } from './pickerGeometry';
import type { ElementDimensions } from '../hooks/useElementDimensions';

const config = (overrides: Partial<PickerGeometryConfig> = {}): PickerGeometryConfig => ({
    uiComponent: 'wheel',
    colorModel: 'rgb-hex',
    cctView: false,
    sliderWidth: 1,
    ctMin: 2000,
    ctMax: 6500,
    ...overrides,
});

const box = (width?: number, height?: number): ElementDimensions => ({ width, height });

describe('pickerGeometry: iro layout per picker', () => {
    it('builds the kelvin slider for the Kelvin-Picker of the CCT-Ansicht with the configured range', () => {
        const layout = pickerGeometry(config({ cctView: true }), box(400, 300)).layouts.main;

        expect(layout).toHaveLength(1);
        expect(layout[0].component).toBe(iro.ui.Slider);
        expect(layout[0].options).toEqual({
            sliderType: 'kelvin',
            sliderShape: 'circle',
            minTemperature: 2000,
            maxTemperature: 6500,
        });
    });

    it('builds the value slider for the Helligkeits-Picker of the CCT-Ansicht', () => {
        const layout = pickerGeometry(config({ cctView: true }), box(400, 300)).layouts.brightness;

        expect(layout).toHaveLength(1);
        expect(layout[0].component).toBe(iro.ui.Slider);
        expect(layout[0].options).toEqual({ sliderType: 'value' });
    });

    it('pairs the wheel with a value slider in wheel mode', () => {
        const layout = pickerGeometry(config({ uiComponent: 'wheel' }), box(400, 300)).layouts.main;

        expect(layout).toHaveLength(2);
        expect(layout[0].component).toBe(iro.ui.Wheel);
        expect(layout[1].component).toBe(iro.ui.Slider);
        expect(layout[1].options).toEqual({ sliderType: 'value' });
    });

    it('pairs the box with a hue slider and disables box lightness in box mode', () => {
        const layout = pickerGeometry(config({ uiComponent: 'box' }), box(400, 300)).layouts.main;

        expect(layout).toHaveLength(2);
        expect(layout[0].component).toBe(iro.ui.Box);
        expect(layout[0].options).toEqual({ boxLightness: false });
        expect(layout[1].options).toEqual({ sliderType: 'hue' });
    });

    it('stacks the three channel sliders in slider mode', () => {
        const layout = pickerGeometry(config({ uiComponent: 'slider' }), box(400, 300)).layouts.main;

        expect(layout).toHaveLength(3);
        expect(layout.map(entry => entry.options?.sliderType)).toEqual(['red', 'green', 'blue']);
        expect(layout.every(entry => entry.component === iro.ui.Slider)).toBe(true);
    });

    it('returns an empty layout for an unknown UI component', () => {
        // colorLightUIComponent undefined (never configured) must not throw.
        expect(pickerGeometry(config({ uiComponent: undefined }), box(400, 300)).layouts.main).toEqual([]);
    });
});

describe('pickerGeometry: the single brightness slider of dimmer (ADR-0116 Nr. 2)', () => {
    const UI_COMPONENTS: PickerGeometryConfig['uiComponent'][] = ['wheel', 'box', 'slider', undefined];

    it.each(UI_COMPONENTS)('draws one value slider whatever the UI component (%s)', uiComponent => {
        const layout = pickerGeometry(config({ colorModel: 'brightness', uiComponent }), box(400, 300)).layouts.main;

        expect(layout).toHaveLength(1);
        expect(layout[0].component).toBe(iro.ui.Slider);
        expect(layout[0].options).toEqual({ sliderType: 'value' });
    });

    it('draws the slider vertically over the full height, its width the slider width', () => {
        const wide = pickerGeometry(config({ colorModel: 'brightness', sliderWidth: 2 }), box(400, 300));
        expect(wide.resizeWidth).toBe(300);
        expect(wide.sliderSize).toBe(56);
        // A narrow box does not shorten it: nothing sits beside the slider.
        expect(pickerGeometry(config({ colorModel: 'brightness' }), box(60, 300)).resizeWidth).toBe(300);
    });

    it('keeps the 12px gap (a single component has no neighbour to space from)', () => {
        expect(pickerGeometry(config({ colorModel: 'brightness' }), box(400, 300)).gap).toBe(12);
        expect(pickerGeometry(config({ colorModel: 'brightness' }), box()).gap).toBe(12);
    });

    it.each<PickerGeometryConfig['colorModel']>(['rgb-hex', 'r/g/b', 'h/s/v', undefined])(
        'leaves the colour models of the colour picker to the UI component (%s)',
        colorModel => {
            expect(
                pickerGeometry(config({ colorModel, uiComponent: 'box' }), box(400, 300)).layouts.main.map(
                    entry => entry.component,
                ),
            ).toEqual([iro.ui.Box, iro.ui.Slider]);
            expect(pickerGeometry(config({ colorModel, uiComponent: 'slider' }), box(400, 300)).gap).toBe(158);
        },
    );
});

describe('pickerGeometry: slider size', () => {
    // An unset or emptied width reads its default before the geometry (lib/light2Fields).
    it('is the slider width in 28px units, a width of 0 counting as one unit', () => {
        expect(pickerGeometry(config({ sliderWidth: 1 }), box()).sliderSize).toBe(28);
        expect(pickerGeometry(config({ sliderWidth: 2 }), box()).sliderSize).toBe(56);
        expect(pickerGeometry(config({ sliderWidth: 0 }), box()).sliderSize).toBe(28);
    });
});

describe('pickerGeometry: main picker bound (the main picker leaves room for the value slider)', () => {
    it('bounds the picker by the height when the width has room to spare', () => {
        // 400 > 300 + 28 + 12 → the height bounds it.
        expect(pickerGeometry(config(), box(400, 300)).mainPickerBound).toBe(300);
    });

    it('takes the slider and its 12px gap off a narrow width', () => {
        // 300 <= 300 + 28 + 12 → 300 - 28 - 12 = 260.
        expect(pickerGeometry(config(), box(300, 300)).mainPickerBound).toBe(260);
        // A doubled slider width (2 × 28) widens the cut: 300 - 56 - 12 = 232.
        expect(pickerGeometry(config({ sliderWidth: 2 }), box(300, 300)).mainPickerBound).toBe(232);
    });

    it('meets both rules at the edge (width = height + slider + gap)', () => {
        expect(pickerGeometry(config(), box(340, 300)).mainPickerBound).toBe(300);
    });

    it('stays unbounded until the box is measured', () => {
        expect(pickerGeometry(config(), box()).mainPickerBound).toBeUndefined();
    });
});

describe('pickerGeometry: resize width (picker.resize target)', () => {
    it('sizes CCT, wheel, and box from the main picker bound but sliders from the height', () => {
        // 300 × 300 → bound 260.
        expect(pickerGeometry(config({ uiComponent: 'wheel' }), box(300, 300)).resizeWidth).toBe(260);
        expect(pickerGeometry(config({ uiComponent: 'box' }), box(300, 300)).resizeWidth).toBe(260);
        expect(pickerGeometry(config({ uiComponent: 'wheel', cctView: true }), box(300, 300)).resizeWidth).toBe(260);
        // RGB sliders are drawn vertically — their length is the height.
        expect(pickerGeometry(config({ uiComponent: 'slider' }), box(400, 300)).resizeWidth).toBe(300);
    });

    it('returns 0 for an unknown UI component', () => {
        expect(pickerGeometry(config({ uiComponent: undefined }), box(300, 300)).resizeWidth).toBe(0);
    });
});

describe('pickerGeometry: gap between the pickers', () => {
    it('falls back to 12px when nothing is measurable yet', () => {
        expect(pickerGeometry(config(), box()).gap).toBe(12);
        expect(pickerGeometry(config(), box(0, 0)).gap).toBe(12);
    });

    it('splits the leftover width evenly between the three RGB sliders', () => {
        // (300 - 3 * 28) / 2 = 108.
        expect(pickerGeometry(config({ uiComponent: 'slider' }), box(300, 300)).gap).toBe(108);
        // sliderWidth 0 falls back to factor 1 (28px).
        expect(pickerGeometry(config({ uiComponent: 'slider', sliderWidth: 0 }), box(300, 300)).gap).toBe(108);
    });

    it('spends the leftover width on the gap between main picker and value slider', () => {
        // Bound 200 (the height): 300 - 200 - 28 = 72.
        expect(pickerGeometry(config(), box(300, 200)).gap).toBe(72);
    });

    it('keeps the 12px gap on a narrow width', () => {
        // 220 <= 300 + 28 + 12 → bound 220 - 28 - 12 = 180 → 220 - 180 - 28 = 12.
        expect(pickerGeometry(config(), box(220, 300)).gap).toBe(12);
    });

    it('treats slider + CCT-Ansicht as a wheel-style layout (the slider rule excludes the CCT-Ansicht)', () => {
        expect(pickerGeometry(config({ uiComponent: 'slider', cctView: true }), box(300, 200)).gap).toBe(72);
    });

    it('offsets the second picker of the CCT-Ansicht by the gap', () => {
        for (const measured of [box(), box(300, 200), box(220, 300), box(500, 240)]) {
            const geometry = pickerGeometry(config({ cctView: true }), measured);
            expect(geometry.secondPickerOffset).toBe(geometry.gap);
        }
        // Worked example: bound 200 → 300 - 200 - 28 = 72.
        expect(pickerGeometry(config({ cctView: true }), box(300, 200)).secondPickerOffset).toBe(72);
    });
});

describe('modalSizeOf (Button-Modus modal size)', () => {
    it('derives the auto width from modal height + slider + gap (+ 40px)', () => {
        // 300 + 40 + 12 + 28 = 380.
        expect(modalSizeOf({ modalHeight: 300, sliderWidth: 1 }).width).toBe(380);
        // 400 + 40 + 12 + 56 = 508.
        expect(modalSizeOf({ modalHeight: 400, sliderWidth: 2 }).width).toBe(508);
    });

    it('falls back to a 300px modal height and one slider unit', () => {
        expect(modalSizeOf({}).width).toBe(380);
        expect(modalSizeOf({ modalHeight: 0, sliderWidth: 0 }).width).toBe(380);
    });

    it('takes an explicit positive modal width as is', () => {
        expect(modalSizeOf({ modalWidth: 640, modalHeight: 400, sliderWidth: 2 }).width).toBe(640);
        // 0 means "not set" → auto width.
        expect(modalSizeOf({ modalWidth: 0, modalHeight: 300, sliderWidth: 1 }).width).toBe(380);
    });

    // An unset or emptied height reads its default before the geometry (lib/light2Fields).
    it('opens the modal at the configured height, 300px for a height of 0', () => {
        expect(modalSizeOf({ modalHeight: 400 }).height).toBe(400);
        expect(modalSizeOf({ modalWidth: 640, modalHeight: 400 }).height).toBe(400);
        expect(modalSizeOf({ modalHeight: 0 }).height).toBe(300);
    });

    // vis-2's number field stores the typed text until the field is left, and the assistant may
    // write a string: the Rückfall-Regel keeps a numeric string, so it sizes like its number.
    it('reads a modal width and height stored as numeric strings as their numbers', () => {
        const asStored = (value: string): number => value as unknown as number;

        expect(modalSizeOf({ modalHeight: asStored('400'), sliderWidth: 2 })).toEqual({ width: 508, height: 400 });
        expect(modalSizeOf({ modalWidth: asStored('640'), modalHeight: asStored('400') })).toEqual({
            width: 640,
            height: 400,
        });
    });
});

describe('modalSizeOf: the modal of dimmer is as wide as its content (ADR-0116 Nr. 2)', () => {
    // The drawn content side by side: frame padding (basePadding), power button (26px icon + 2 × 8px)
    // and divider (1px), picker padding (colorLightPadding), the slider — spacing unit 8px.
    it('derives the auto width from the slider, the picker padding and the frame', () => {
        // 8 + 42 + 1 + 8 + 28 + 8 + 8 = 103.
        expect(modalSizeOf({ colorModel: 'brightness', sliderWidth: 1, padding: 1, basePadding: 1 }).width).toBe(103);
        // 16 + 42 + 1 + 4 + 56 + 4 + 16 = 139.
        expect(modalSizeOf({ colorModel: 'brightness', sliderWidth: 2, padding: 0.5, basePadding: 2 }).width).toBe(139);
        // No padding, the default slider width for 0: 42 + 1 + 28 = 71.
        expect(modalSizeOf({ colorModel: 'brightness', sliderWidth: 0, padding: 0, basePadding: 0 }).width).toBe(71);
    });

    // vis-2's number field stores the typed text until the field is left; an emptied padding reads 0.
    it('reads paddings stored as numeric strings as their numbers, an emptied one as 0', () => {
        const asStored = (value: string): number => value as unknown as number;

        // 42 + 1 + 8 + 28 + 8 = 87.
        expect(
            modalSizeOf({ colorModel: 'brightness', sliderWidth: 1, padding: asStored('1'), basePadding: asStored('') })
                .width,
        ).toBe(87);
    });

    it('takes an explicit positive modal width as is', () => {
        expect(
            modalSizeOf({ colorModel: 'brightness', modalWidth: 240, sliderWidth: 1, padding: 1, basePadding: 1 })
                .width,
        ).toBe(240);
    });

    it('keeps the modal height', () => {
        expect(modalSizeOf({ colorModel: 'brightness', modalHeight: 400, padding: 1, basePadding: 1 }).height).toBe(
            400,
        );
        expect(modalSizeOf({ colorModel: 'brightness', modalHeight: 0 }).height).toBe(300);
    });

    // The colour picker sits beside its slider: the auto width stays height + slider + gap (+ 40px),
    // whatever the paddings.
    it.each<ModalSizeConfig['colorModel']>(['rgb-hex', 'r/g/b', 'h/s/v', undefined])(
        'keeps the auto width of the colour picker (%s)',
        colorModel => {
            expect(modalSizeOf({ colorModel, modalHeight: 300, sliderWidth: 1, padding: 1, basePadding: 1 })).toEqual({
                width: 380,
                height: 300,
            });
            expect(
                modalSizeOf({ colorModel, modalHeight: 400, sliderWidth: 2, padding: 3, basePadding: 0 }).width,
            ).toBe(508);
        },
    );
});
