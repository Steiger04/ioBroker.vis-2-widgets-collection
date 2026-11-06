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
 * configured value size only, which positions the mark icon. The backend sync cases pin the thumb
 * against Fremdänderungen of any size, the own write's echo and an OID rebind (ADR-0087 addendum).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // CollectionBase pulls Generic (extends window.visRxWidget, undefined outside the
    // vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

import { act } from 'react';

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

const rangeOf = (container: HTMLElement): HTMLInputElement => {
    const input = container.querySelector<HTMLInputElement>('input[type="range"]');
    if (!input) {
        throw new Error('the slider rendered no range input');
    }
    return input;
};

/** Moves the thumb like a user would: the native range input fires `change`. */
const drag = (container: HTMLElement, value: number): void => {
    const input = rangeOf(container);
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, String(value));
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });
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

    // The selected mark follows the backend value, not the thumb: while a drag below it waits for
    // its debounced write, the mark keeps its selected text like it keeps its active icon.
    it('keeps textColorActive on the selected mark while the thumb is dragged below it', () => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-mark-drag-test',
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
                    markerTextColor: MARKER_TEXT_COLOR,
                    textColorActive: '#aa00aa',
                },
                50,
            ),
        );

        drag(container, 20);

        const marks = Array.from(container.querySelectorAll(".MuiSlider-markLabel [data-font='active']"));
        expect(marks.map(m => getComputedStyle(m).color)).toEqual([MARKER_TEXT_COLOR, '#aa00aa', MARKER_TEXT_COLOR]);
    });
});

// A gradient textColorActive is no valid `color`: the selected mark paints it through its own
// resolved text colour (gradientTextSx), a Zwischenmarke like a Zustandsmarke (ADR-0106).
describe('SliderCollection selected mark gradient', () => {
    const GRADIENT = 'linear-gradient(90deg, #ff0000, #0000ff)';

    it.each([
        ['a Zwischenmarke', {}],
        ['a Zustandsmarke', { values_count: 1, value1: '50' }],
    ])('paints a gradient textColorActive on the selected mark when it is %s', (_case, data) => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-mark-gradient-test',
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
                    textColorActive: GRADIENT,
                    ...data,
                },
                50,
            ),
        );
        const marks = Array.from(container.querySelectorAll(".MuiSlider-markLabel [data-font='active']")).map(m =>
            getComputedStyle(m),
        );

        expect(marks).toHaveLength(3);
        expect(marks.map(m => [m.backgroundImage.includes('linear-gradient'), m.color])).toEqual([
            [false, marks[0].color],
            [true, 'transparent'],
            [false, marks[0].color],
        ]);
        expect(marks[0].color).not.toBe('transparent');
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

// Characterisation of the end icon colours (ADR-0004, CONTEXT "Slider Collection Widget"): the
// mask is forced, but the primary fallback only applies to a Base64 icon — an image icon (URL,
// path) keeps its own colours until the user sets a value. The swatch shows the Base64 colour.
describe('SliderCollection end icon colours', () => {
    const BASE64_ICON =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIvPg==';
    const URL_ICON = '/vis-2.0/main/img/slider-end.png';
    // The preview host theme: Theme('light') → palette.primary.main.
    const PRIMARY = '#3399CC';

    /** The inline style of the end icon showing `src`, mounted with the given data. */
    const iconStyle = (src: string, data: Record<string, unknown>): CSSStyleDeclaration => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-icon-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    minValue: 0,
                    maxValue: 100,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    iconMin: BASE64_ICON,
                    iconMax: URL_ICON,
                    ...data,
                },
                50,
            ),
        );
        const icon = Array.from(container.querySelectorAll('img')).find(img => img.getAttribute('src') === src);
        if (!icon) {
            throw new Error(`the slider rendered no end icon for ${src}`);
        }
        return icon.style;
    };

    it('paints a Base64 icon without a value in the primary colour', () => {
        const style = iconStyle(BASE64_ICON, {});

        expect(style.color.toLowerCase()).toBe(PRIMARY.toLowerCase());
        expect(style.filter).toContain('drop-shadow');
    });

    it('leaves an image icon (URL) without a value uncoloured', () => {
        const style = iconStyle(URL_ICON, {});

        expect(style.color).toBe('');
        expect(style.filter).toBe('');
        expect(style.transform).toBe('');
    });

    it('paints an image icon (URL) with its own value through the forced mask', () => {
        const style = iconStyle(URL_ICON, { endIconColor: '#aa0000' });

        expect(style.color.toLowerCase()).toBe('#aa0000');
        expect(style.filter).toContain('drop-shadow');
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

describe('SliderCollection backend sync (Fremdänderung, ADR-0087 addendum)', () => {
    const OID_B = 'demo.0.dimmer2';

    /** A 0–1 dimmer slider bound to `oid`, with the given state values. */
    const dimmerScene = (
        oid: string,
        values: Record<string, unknown>,
        data: Record<string, unknown> = {},
    ): ReturnType<typeof collectionScene> => {
        const scene = collectionScene(
            'slider-sync-test',
            {
                oid,
                oidObject: { _id: oid, type: 'number' },
                sliderOrientation: 'horizontal',
                minValue: 0,
                maxValue: 1,
                step: 0.01,
                noHeader: true,
                noFooter: true,
                noHeaderIcon: true,
                ...data,
            },
            undefined,
        );
        scene.context.values = values;
        return scene;
    };

    const thumbOf = (container: HTMLElement): number => Number(rangeOf(container).getAttribute('aria-valuenow'));

    it.each([
        ['0.2 → 0.7 on a 0–1 slider', {}, 0.2, 0.7],
        ['21 → 21.5 on a step-0.5 slider', { minValue: 0, maxValue: 100, step: 0.5 }, 21, 21.5],
    ])('moves the thumb on a sub-unit Fremdänderung (%s)', (_case, data, from, to) => {
        const { container, rerender } = mount(
            SliderCollection,
            dimmerScene(OID, { [`${OID}.val`]: from, [`${OID}.lc`]: 1000 }, data),
        );
        expect(thumbOf(container)).toBe(from);

        rerender(dimmerScene(OID, { [`${OID}.val`]: to, [`${OID}.lc`]: 2000 }, data));

        expect(thumbOf(container)).toBe(to);
    });

    it('keeps the dragged thumb when the own write echoes back inside the ignore window', () => {
        const { container, rerender, setState } = mount(
            SliderCollection,
            dimmerScene(OID, { [`${OID}.val`]: 0.2, [`${OID}.lc`]: 1000 }),
        );

        drag(container, 0.5);
        expect(setState).toHaveBeenCalled();
        expect(thumbOf(container)).toBe(0.5);

        // A stale intermediate echo (0.3) lands within the window: absorbed, the thumb stays.
        rerender(dimmerScene(OID, { [`${OID}.val`]: 0.3, [`${OID}.lc`]: 2000 }));

        expect(thumbOf(container)).toBe(0.5);
    });

    it('puts the thumb on the new OID value at once on a rebind A → B, even right after a write on A', () => {
        const { container, rerender } = mount(
            SliderCollection,
            dimmerScene(OID, { [`${OID}.val`]: 0.2, [`${OID}.lc`]: 1000 }),
        );

        // The write on A opens its ignore window.
        drag(container, 0.5);

        rerender(
            dimmerScene(OID_B, {
                [`${OID}.val`]: 0.5,
                [`${OID}.lc`]: 1000,
                [`${OID_B}.val`]: 0.45,
                [`${OID_B}.lc`]: 3000,
            }),
        );

        expect(thumbOf(container)).toBe(0.45);
    });

    // The editor sets `data.oid` first and fills `oidObject` later: the rebind keys on the binding
    // (`widget.data.oid`, the source of the value), not on `oidObject._id`.
    it('rebinds on the data.oid change alone, before oidObject follows', () => {
        const { container, rerender } = mount(
            SliderCollection,
            dimmerScene(OID, { [`${OID}.val`]: 0.2, [`${OID}.lc`]: 1000 }),
        );

        drag(container, 0.5);

        rerender(
            dimmerScene(
                OID_B,
                { [`${OID}.val`]: 0.5, [`${OID}.lc`]: 1000, [`${OID_B}.val`]: 0.45, [`${OID_B}.lc`]: 3000 },
                { oidObject: { _id: OID, type: 'number' } },
            ),
        );

        expect(thumbOf(container)).toBe(0.45);
    });
});
