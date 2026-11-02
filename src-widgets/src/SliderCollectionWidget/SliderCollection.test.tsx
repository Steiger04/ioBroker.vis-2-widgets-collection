/**
 * SliderCollection — the value label, rendered.
 *
 * @module widgets/SliderCollection.test
 * @remarks
 * DOM contract of the renderer on the preview context (the Checkbox/Radio pattern). The
 * Marker-Ebene applies to marks only (CONTEXT "Marker-Ebene"): the value label follows
 * `textColorActive` → active state → base → theme text, never the marker text colour — even
 * while a state is active, where the retired local marker stage used to cut in. The Sperre
 * cases pin the slider's `disabled` against the OID binding's `locked`. The mark label text paints
 * its own resolved colour, since the mark label container sets none; the container carries the
 * configured value size only, which positions the mark icon.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // The chrome contracts derive from sliderFields, which pulls Generic (extends
    // window.visRxWidget, undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import SliderCollection from './SliderCollection';

installInertResizeObserver();

const mount = testScopedMount();

const OID = 'demo.0.dimmer';
const MARKER_TEXT_COLOR = '#aa0000';

/** A horizontal slider at 50 with its label always shown and one state row matching 50. */
const valueLabelColor = (data: Record<string, unknown>): string => {
    const { container } = mount(
        SliderCollection,
        collectionScene(
            'slider-test',
            {
                oid: OID,
                oidObject: { _id: OID, type: 'number' },
                sliderOrientation: 'horizontal',
                valueLabelDisplay: 'on',
                marks: true,
                minValue: 0,
                maxValue: 100,
                values_count: 1,
                value1: '50',
                noHeader: true,
                noFooter: true,
                noHeaderIcon: true,
                ...data,
            },
            50,
        ),
    );

    const valueLabel = container.querySelector('.MuiSlider-valueLabel');
    if (!valueLabel) {
        throw new Error('the slider rendered no value label');
    }
    return getComputedStyle(valueLabel).color;
};

describe('SliderCollection value label ignores the marker text colour', () => {
    it.each([
        ['the base text colour', { textColor: '#0000aa' }, '#0000aa'],
        ["the active state's text colour", { textColor: '#0000aa', textColor1: '#00aa00' }, '#00aa00'],
        ['textColorActive', { textColor: '#0000aa', textColorActive: '#aa00aa' }, '#aa00aa'],
    ])('follows %s while a state is active', (_case, data, expected) => {
        expect(valueLabelColor({ ...data, markerTextColor: MARKER_TEXT_COLOR })).toBe(expected);
    });

    it('falls back to the theme text exactly as without a marker text colour', () => {
        const withoutMarker = valueLabelColor({});

        // Guards against a vacuous match should happy-dom stop resolving the Emotion rules.
        expect(withoutMarker).not.toBe('');
        expect(valueLabelColor({ markerTextColor: MARKER_TEXT_COLOR })).toBe(withoutMarker);
    });
});

describe('SliderCollection mark label text', () => {
    /** The colours of the value label and of every mark label text, mounted with the given data. */
    const labelColors = (data: Record<string, unknown>): { valueLabel: string; marks: string[] } => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-mark-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    valueLabelDisplay: 'on',
                    marks: true,
                    markStep: 50,
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                50,
            ),
        );
        const valueLabel = container.querySelector('.MuiSlider-valueLabel');
        const marks = Array.from(container.querySelectorAll(".MuiSlider-markLabel [data-font='active']"));
        if (!valueLabel || marks.length === 0) {
            throw new Error('the slider rendered no value label or no mark label');
        }
        return { valueLabel: getComputedStyle(valueLabel).color, marks: marks.map(m => getComputedStyle(m).color) };
    };

    // The mark label container carries no colour of its own: the text must resolve one even with
    // nothing configured, or it would fall back to MUI's mark-label colours (text.secondary, text.primary when active).
    it('paints the colour the value label falls back to with no colour configured', () => {
        const { valueLabel, marks } = labelColors({});

        expect(valueLabel).not.toBe('');
        expect(marks).toEqual([valueLabel, valueLabel, valueLabel]);
    });

    it('paints the marker text colour on every mark', () => {
        expect(labelColors({ markerTextColor: MARKER_TEXT_COLOR }).marks).toEqual([
            MARKER_TEXT_COLOR,
            MARKER_TEXT_COLOR,
            MARKER_TEXT_COLOR,
        ]);
    });

    // The value 50 selects the middle mark (0, 50, 100): textColorActive paints that mark only.
    it('paints textColorActive on the selected mark only', () => {
        expect(labelColors({ markerTextColor: MARKER_TEXT_COLOR, textColorActive: '#aa00aa' }).marks).toEqual([
            MARKER_TEXT_COLOR,
            '#aa00aa',
            MARKER_TEXT_COLOR,
        ]);
    });
});

describe('SliderCollection mark label font size', () => {
    /** The font size of every mark label container, mounted with the given data. */
    const markLabelSizes = (data: Record<string, unknown>): string[] => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-mark-size-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    marks: true,
                    markStep: 50,
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                50,
            ),
        );
        const marks = Array.from(container.querySelectorAll('.MuiSlider-markLabel'));
        if (marks.length === 0) {
            throw new Error('the slider rendered no mark label');
        }
        return marks.map(m => getComputedStyle(m).fontSize);
    };

    // The container's font size sets the line box of the icon row, so it positions the mark
    // icon: a configured value size must reach the container, an unset one must leave MUI's own.
    it('carries the configured value size and leaves the MUI size without one', () => {
        const unset = markLabelSizes({});
        const small = markLabelSizes({ valueSize: 150 });
        const large = markLabelSizes({ valueSize: 200 });

        // Guards against a vacuous match should happy-dom stop resolving the Emotion rules.
        expect(unset[0]).not.toBe('');
        expect(unset).toEqual([unset[0], unset[0], unset[0]]);
        expect(small).toEqual([small[0], small[0], small[0]]);
        expect(large).toEqual([large[0], large[0], large[0]]);
        expect(new Set([unset[0], small[0], large[0]]).size).toBe(3);
    });

    // The value 50 selects the middle mark (0, 50, 100): valueSizeActive sizes that mark's text only.
    it('sizes the selected mark text with valueSizeActive', () => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-mark-active-size-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    marks: true,
                    markStep: 50,
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    valueSize: 100,
                    valueSizeActive: 250,
                },
                50,
            ),
        );
        const sizes = Array.from(container.querySelectorAll(".MuiSlider-markLabel [data-font='active']")).map(
            m => getComputedStyle(m).fontSize,
        );

        expect(sizes).toHaveLength(3);
        expect(sizes[0]).not.toBe('');
        expect(sizes[2]).toBe(sizes[0]);
        expect(sizes[1]).not.toBe(sizes[0]);
    });
});

describe('SliderCollection Sperre', () => {
    /** The slider's native range input, mounted with the given widget data. */
    const rangeInput = (data: Record<string, unknown>): HTMLInputElement | null => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-lock-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                50,
            ),
        );
        return container.querySelector<HTMLInputElement>('input[type="range"]');
    };

    it('leaves the slider enabled for a writable bound object', () => {
        expect(rangeInput({})?.disabled).toBe(false);
    });

    it.each([
        ['onlyDisplay', { onlyDisplay: true }],
        // The lock follows the bound object — no root `write` copy here.
        ['a non-writable bound object (write === false)', { oidObject: { _id: OID, type: 'number', write: false } }],
    ])('disables the slider for %s', (_case, data) => {
        expect(rangeInput(data)?.disabled).toBe(true);
    });
});
