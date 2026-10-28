/**
 * Unit tests for the pure picker layout/geometry helpers.
 *
 * @module Light2CollectionWidget/colorPickerUtils/colorPickerMemos.test
 * @remarks
 * These helpers decide which iro components render per light type and how the
 * twin CCT pickers share the available width — pure functions of widget config
 * and measured dimensions (the view itself is untested, project rule).
 */
import { describe, expect, it } from 'vitest';
import iro from '@jaames/iro';

import { getColorLightLayout, getColorLightWidth, getMarginBetweenPickers } from './colorPickerMemos';
import type { ElementDimensions } from '../../hooks/useElementDimensions';

const dims = (width?: number, height?: number, maxWidth?: number): ElementDimensions => ({
    width,
    height,
    maxWidth,
});

describe('getColorLightLayout', () => {
    it('builds the kelvin slider for CCT component 1 with the configured temperature range', () => {
        const layout = getColorLightLayout(1, 'wheel', 'cct', 2000, 6500);

        expect(layout).toHaveLength(1);
        expect(layout[0].component).toBe(iro.ui.Slider);
        expect(layout[0].options).toEqual({
            sliderType: 'kelvin',
            sliderShape: 'circle',
            minTemperature: 2000,
            maxTemperature: 6500,
        });
    });

    it('builds the value slider for CCT component 2', () => {
        const layout = getColorLightLayout(2, 'wheel', 'cct', 2000, 6500);

        expect(layout).toHaveLength(1);
        expect(layout[0].component).toBe(iro.ui.Slider);
        expect(layout[0].options).toEqual({ sliderType: 'value' });
    });

    it('pairs the wheel with a value slider in wheel mode', () => {
        const layout = getColorLightLayout(1, 'wheel', 'rgb', 2000, 6500);

        expect(layout).toHaveLength(2);
        expect(layout[0].component).toBe(iro.ui.Wheel);
        expect(layout[1].component).toBe(iro.ui.Slider);
        expect(layout[1].options).toEqual({ sliderType: 'value' });
    });

    it('pairs the box with a hue slider and disables box lightness in box mode', () => {
        const layout = getColorLightLayout(1, 'box', 'rgb', 2000, 6500);

        expect(layout).toHaveLength(2);
        expect(layout[0].component).toBe(iro.ui.Box);
        expect(layout[0].options).toEqual({ boxLightness: false });
        expect(layout[1].options).toEqual({ sliderType: 'hue' });
    });

    it('stacks the three channel sliders in slider mode', () => {
        const layout = getColorLightLayout(1, 'slider', 'r/g/b', 2000, 6500);

        expect(layout).toHaveLength(3);
        expect(layout.map(entry => entry.options?.sliderType)).toEqual(['red', 'green', 'blue']);
        expect(layout.every(entry => entry.component === iro.ui.Slider)).toBe(true);
    });

    it('returns an empty layout for an unknown UI component', () => {
        // colorLightUIComponent undefined (never configured) must not throw.
        expect(getColorLightLayout(1, undefined, 'rgb', 2000, 6500)).toEqual([]);
    });
});

describe('getColorLightWidth (picker.resize target)', () => {
    it('sizes CCT, wheel, and box from maxWidth but sliders from height', () => {
        const d = dims(400, 300, 260);

        expect(getColorLightWidth(d, 'wheel', 'rgb')).toBe(260);
        expect(getColorLightWidth(d, 'box', 'rgb')).toBe(260);
        expect(getColorLightWidth(d, 'wheel', 'cct')).toBe(260);
        // RGB sliders are drawn vertically — their length is the height.
        expect(getColorLightWidth(d, 'slider', 'r/g/b')).toBe(300);
    });

    it('returns 0 for an unknown UI component', () => {
        expect(getColorLightWidth(dims(400, 300, 260), undefined, 'rgb')).toBe(0);
    });
});

describe('getMarginBetweenPickers', () => {
    it('falls back to 12px when nothing is measurable yet', () => {
        expect(getMarginBetweenPickers(dims(undefined, undefined, undefined), 'wheel', 1, 'rgb')).toBe(12);
        expect(getMarginBetweenPickers(dims(0, 0, 0), 'wheel', 1, 'rgb')).toBe(12);
    });

    it('splits the leftover width evenly between the three RGB sliders', () => {
        // (300 - 3 * 28) / 2 = 108.
        expect(getMarginBetweenPickers(dims(300, 300, 260), 'slider', 1, 'r/g/b')).toBe(108);
        // sliderWidth 0 falls back to factor 1 (28px).
        expect(getMarginBetweenPickers(dims(300, 300, 260), 'slider', 0, 'r/g/b')).toBe(108);
    });

    it('spends the leftover width on the gap between main picker and value slider', () => {
        // 300 - 200 - 28 = 72.
        expect(getMarginBetweenPickers(dims(300, 300, 200), 'wheel', 1, 'rgb')).toBe(72);
    });

    it('floors the computed gap at 12px instead of going negative', () => {
        // 220 - 200 - 28 = -8 → 12.
        expect(getMarginBetweenPickers(dims(220, 300, 200), 'wheel', 1, 'rgb')).toBe(12);
    });

    it('treats slider+CCT as a wheel-style layout (the slider branch excludes cct)', () => {
        expect(getMarginBetweenPickers(dims(300, 300, 200), 'slider', 1, 'cct')).toBe(72);
    });
});
