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
import { describe, expect, it } from 'vitest';

import { act } from 'react';

import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import sliderFields from '../lib/sliderFields';
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

// Characterisation of the value label's colour and size (ADR-0106): the label paints the
// resolved active style — `textColorActive` → active state → base → vis-2 text style → theme
// text, and `valueSizeActive` → active state → base → vis-2 font size → MUI's own size.
describe('SliderCollection value label colour and size', () => {
    /** A slider at 50 with its label always shown; `value1: '50'` makes state 1 active. */
    const valueLabelStyle = (
        data: Record<string, unknown>,
        style: Record<string, string> = {},
    ): { color: string; fontSize: string } => {
        const scene = collectionScene(
            'slider-value-label-test',
            {
                oid: OID,
                oidObject: { _id: OID, type: 'number' },
                sliderOrientation: 'horizontal',
                valueLabelDisplay: 'on',
                minValue: 0,
                maxValue: 100,
                noHeader: true,
                noFooter: true,
                noHeaderIcon: true,
                ...data,
            },
            50,
        );
        (scene.context.widget as { style: Record<string, string> }).style = style;
        const { container } = mount(SliderCollection, scene);
        const valueLabel = container.querySelector('.MuiSlider-valueLabel');
        if (!valueLabel) {
            throw new Error('the slider rendered no value label');
        }
        const { color, fontSize } = getComputedStyle(valueLabel);
        return { color, fontSize };
    };

    const ACTIVE_STATE = { values_count: 1, value1: '50' };
    const INACTIVE_STATE = { values_count: 1, value1: '30' };
    // The collection theme lets the text follow the effective primary (resolveCollectionTheme):
    // on the preview host, Theme('light'), palette.text.primary is the host primary.
    const THEME_TEXT = '#3399CC';

    it.each<[string, Record<string, unknown>, Record<string, string>, string]>([
        ['nothing set', {}, {}, THEME_TEXT],
        ['nothing set on an active state', ACTIVE_STATE, {}, THEME_TEXT],
        [
            'textColorActive over the active state and the base',
            { ...ACTIVE_STATE, textColor: '#0000aa', textColor1: '#00aa00', textColorActive: '#aa00aa' },
            {},
            '#aa00aa',
        ],
        ['textColorActive without a state', { textColorActive: '#aa00aa' }, {}, '#aa00aa'],
        ['an empty textColorActive as unset', { textColor: '#0000aa', textColorActive: '' }, {}, '#0000aa'],
        [
            'an empty textColorActive on an active state',
            { ...ACTIVE_STATE, textColor: '#0000aa', textColor1: '#00aa00', textColorActive: '' },
            {},
            '#00aa00',
        ],
        [
            "the active state's text colour over the base",
            { ...ACTIVE_STATE, textColor: '#0000aa', textColor1: '#00aa00' },
            {},
            '#00aa00',
        ],
        [
            "the base over an inactive state's text colour",
            { ...INACTIVE_STATE, textColor: '#0000aa', textColor1: '#00aa00' },
            {},
            '#0000aa',
        ],
        ['the base text colour', { textColor: '#0000aa' }, {}, '#0000aa'],
        ['the vis-2 text style without a text colour', {}, { color: '#123456' }, '#123456'],
        ['the base text colour over the vis-2 text style', { textColor: '#0000aa' }, { color: '#123456' }, '#0000aa'],
        [
            "the active state's text colour over the vis-2 text style",
            { ...ACTIVE_STATE, textColor1: '#00aa00' },
            { color: '#123456' },
            '#00aa00',
        ],
        ['the theme text, not the marker text colour', { markerTextColor: MARKER_TEXT_COLOR }, {}, THEME_TEXT],
    ])('paints %s', (_case, data, style, expected) => {
        expect(valueLabelStyle(data, style).color).toBe(expected);
    });

    // A blank textColorActive (legacy data, an import) is unset like an empty one — the state
    // resolvers skip whitespace-only values — instead of painting as invalid CSS.
    it.each<[string, Record<string, unknown>, string]>([
        ['the base text colour', { textColor: '#0000aa', textColorActive: '   ' }, '#0000aa'],
        [
            "the active state's text colour",
            { ...ACTIVE_STATE, textColor: '#0000aa', textColor1: '#00aa00', textColorActive: '   ' },
            '#00aa00',
        ],
        ['the theme text', { textColorActive: '   ' }, THEME_TEXT],
    ])('paints %s under a blank textColorActive', (_case, data, expected) => {
        expect(valueLabelStyle(data).color).toBe(expected);
    });

    // formatSizeRem: a size of N % is `calc(N/100 rem * 0.875)`; happy-dom computes the rem at 16px.
    const SIZE_250 = 'calc(40px * 0.875)';
    const SIZE_200 = 'calc(32px * 0.875)';
    const SIZE_150 = 'calc(24px * 0.875)';

    it('keeps MUI’s own size with nothing set', () => {
        const unset = valueLabelStyle({}).fontSize;

        // Guards against a vacuous match should happy-dom stop resolving the Emotion rules.
        expect(unset).not.toBe('');
        expect([SIZE_250, SIZE_200, SIZE_150]).not.toContain(unset);
        expect(valueLabelStyle(ACTIVE_STATE).fontSize).toBe(unset);
        expect(valueLabelStyle({ markerTextSize: 250 }).fontSize).toBe(unset);
    });

    it.each<[string, Record<string, unknown>, Record<string, string>, string]>([
        ['valueSizeActive', { valueSizeActive: 250 }, {}, SIZE_250],
        ['valueSizeActive over the base', { valueSize: 150, valueSizeActive: 250 }, {}, SIZE_250],
        [
            'valueSizeActive over the active state',
            { ...ACTIVE_STATE, valueSize: 150, valueSize1: 200, valueSizeActive: 250 },
            {},
            SIZE_250,
        ],
        ['a zero valueSizeActive as set', { valueSize: 150, valueSizeActive: 0 }, {}, 'calc(0px * 0.875)'],
        ['the base value size without valueSizeActive', { valueSize: 150 }, {}, SIZE_150],
        [
            "the active state's value size over the base",
            { ...ACTIVE_STATE, valueSize: 150, valueSize1: 200 },
            {},
            SIZE_200,
        ],
        [
            "the base over an inactive state's value size",
            { ...INACTIVE_STATE, valueSize: 150, valueSize1: 200 },
            {},
            SIZE_150,
        ],
        ['the vis-2 font size without a value size', {}, { 'font-size': '20px' }, '20px'],
        ['the base value size over the vis-2 font size', { valueSize: 150 }, { 'font-size': '20px' }, SIZE_150],
        ['the base value size, not the marker text size', { valueSize: 150, markerTextSize: 250 }, {}, SIZE_150],
    ])('sizes the label with %s', (_case, data, style, expected) => {
        expect(valueLabelStyle(data, style).fontSize).toBe(expected);
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

// Characterisation of the Slider-Chrome (ADR-0106 decision 6): the geometry and colours of thumb,
// track, rail and marks per orientation with their fallbacks, the frozen active-mark layer, the
// mark-label space with the end symbols' rail offset, and the value/mark label positions. MUI's
// own layers stay as they are (rail opacity 0.38, active-mark opacity 0.8).
describe('SliderCollection chrome geometry and colours', () => {
    const END_ICON =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIvPg==';
    // The preview host theme: Theme('light') → palette.primary.main.
    const PRIMARY = '#3399CC';

    /** A slider at 50 with marks at 0, 50, 100 (the first two active), its value label shown and a start icon. */
    const mountChrome = (data: Record<string, unknown> = {}): HTMLElement =>
        mount(
            SliderCollection,
            collectionScene(
                'slider-chrome-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    valueLabelDisplay: 'on',
                    marks: true,
                    markStep: 50,
                    minValue: 0,
                    maxValue: 100,
                    iconMin: END_ICON,
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                50,
            ),
        ).container;

    /** The computed style of the first element matching `selector`. */
    const styleOf = (container: HTMLElement, selector: string): CSSStyleDeclaration => {
        const element = container.querySelector(selector);
        if (!element) {
            throw new Error(`the slider rendered no ${selector}`);
        }
        return getComputedStyle(element);
    };

    /**
     * The declarations of the rule `<root class> <selector>`: for the pseudo-classes happy-dom
     * does not compute (`:hover`, `:active`) and for the declaration order.
     */
    const rootRule = (container: HTMLElement, selector: string): string => {
        const root = container.querySelector('.MuiSlider-root');
        if (!root) {
            throw new Error('the slider rendered no root');
        }
        const css = Array.from(document.head.querySelectorAll('style'))
            .map(style => style.textContent ?? '')
            .join('\n');
        for (const cls of Array.from(root.classList).filter(name => name.startsWith('css-'))) {
            const start = css.indexOf(`.${cls} ${selector}{`);
            if (start >= 0) {
                const open = css.indexOf('{', start);
                return css.slice(open + 1, css.indexOf('}', open));
            }
        }
        return '';
    };

    /** The transform of the wrapper that carries the start icon onto the rail axis. */
    const endSymbolTransform = (container: HTMLElement): string => {
        const icon = Array.from(container.querySelectorAll('img')).find(img => img.getAttribute('src') === END_ICON);
        if (!icon?.parentElement) {
            throw new Error('the slider rendered no start icon');
        }
        return getComputedStyle(icon.parentElement).transform;
    };

    describe('thumb', () => {
        it('measures 20 × 20 px and paints the primary without a border by default', () => {
            const thumb = styleOf(mountChrome(), '.MuiSlider-thumb');

            expect([thumb.width, thumb.height]).toEqual(['20px', '20px']);
            expect(thumb.background).toBe(PRIMARY);
            expect(thumb.border).toBe('');
        });

        it('takes thumbWidth and thumbHeight and paints thumbColor, gradients too', () => {
            const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
            const thumb = styleOf(
                mountChrome({ thumbWidth: 30, thumbHeight: 12, thumbColor: gradient }),
                '.MuiSlider-thumb',
            );

            expect([thumb.width, thumb.height]).toEqual(['30px', '12px']);
            expect(thumb.background).toBe(gradient);
        });

        it.each<[string, Record<string, unknown>, string]>([
            [
                'a positive width in thumbBorderColor',
                { thumbBorderWidth: 2, thumbBorderColor: '#00aa00' },
                '2px solid #00aa00',
            ],
            [
                'a positive width in the thumb colour',
                { thumbBorderWidth: 3, thumbColor: '#aa0000' },
                '3px solid #aa0000',
            ],
            ['a zero width as none', { thumbBorderWidth: 0, thumbBorderColor: '#00aa00' }, ''],
            ['a negative width as none', { thumbBorderWidth: -1, thumbBorderColor: '#00aa00' }, ''],
        ])('draws the border for %s', (_case, data, expected) => {
            expect(styleOf(mountChrome(data), '.MuiSlider-thumb').border).toBe(expected);
        });

        it('draws the hover and active halo from the solid thumb colour', () => {
            const container = mountChrome({ thumbColor: '#ff0000' });

            expect(rootRule(container, '.MuiSlider-thumb:hover')).toBe(
                'box-shadow:0px 0px 0px 8px rgba(255, 0, 0, 0.32);',
            );
            expect(rootRule(container, '.MuiSlider-thumb:active')).toBe(
                'box-shadow:0px 0px 0px 14px rgba(255, 0, 0, 0.32);',
            );
        });
    });

    describe('track and rail', () => {
        it.each<[string, Record<string, unknown>, Record<string, string>]>([
            [
                'horizontal, unset',
                { sliderOrientation: 'horizontal' },
                { trackHeight: '4px', railWidth: '100%', railHeight: '4px' },
            ],
            [
                'horizontal, set',
                { sliderOrientation: 'horizontal', trackLength: 6, railLength: 8 },
                { trackHeight: '6px', railWidth: '100%', railHeight: '8px' },
            ],
            [
                'vertical, unset',
                { sliderOrientation: 'vertical' },
                { trackWidth: '4px', railWidth: '4px', railHeight: '100%' },
            ],
            [
                'vertical, set',
                { sliderOrientation: 'vertical', trackLength: 6, railLength: 8 },
                { trackWidth: '6px', railWidth: '8px', railHeight: '100%' },
            ],
        ])('takes the cross-axis lengths (%s)', (_case, data, expected) => {
            const container = mountChrome(data);
            const track = styleOf(container, '.MuiSlider-track');
            const rail = styleOf(container, '.MuiSlider-rail');

            // MUI writes the track's main-axis length inline (the value's share).
            const actual: Record<string, string> = { railWidth: rail.width, railHeight: rail.height };
            if (expected.trackHeight) {
                actual.trackHeight = track.height;
            } else {
                actual.trackWidth = track.width;
            }
            expect(actual).toEqual(expected);
        });

        it('paints their own colours and the solid borders, rail opacity left to MUI', () => {
            const container = mountChrome({
                trackBackgroundColor: '#112233',
                trackBorderColor: '#445566',
                trackBorderWidth: 3,
                railBackgroundColor: '#778899',
                railBorderColor: '#aabbcc',
                railBorderWidth: 2,
            });
            const track = styleOf(container, '.MuiSlider-track');
            const rail = styleOf(container, '.MuiSlider-rail');

            expect([track.background, track.borderWidth, track.borderStyle, track.borderColor]).toEqual([
                '#112233',
                '3px',
                'solid',
                '#445566',
            ]);
            expect([rail.background, rail.borderWidth, rail.borderStyle, rail.borderColor, rail.opacity]).toEqual([
                '#778899',
                '2px',
                'solid',
                '#aabbcc',
                '0.38',
            ]);
        });

        it.each([0, undefined])('keeps a 0px solid border for a border width of %s', width => {
            const container = mountChrome({ trackBorderWidth: width, railBorderWidth: width });

            for (const part of ['.MuiSlider-track', '.MuiSlider-rail']) {
                const style = styleOf(container, part);
                expect([style.borderWidth, style.borderStyle]).toEqual(['0px', 'solid']);
            }
        });
    });

    describe('marks', () => {
        const INACTIVE = '.MuiSlider-mark:not(.MuiSlider-markActive)';
        const ACTIVE = '.MuiSlider-markActive';

        it.each<[string, Record<string, unknown>, [string, string]]>([
            ['horizontal, unset', { sliderOrientation: 'horizontal' }, ['2px', '2px']],
            ['horizontal, set', { sliderOrientation: 'horizontal', markWidth: 5, markHeight: 7 }, ['5px', '7px']],
            ['vertical, unset', { sliderOrientation: 'vertical' }, ['16px', '3px']],
            ['vertical, set', { sliderOrientation: 'vertical', markWidth: 5, markHeight: 7 }, ['7px', '5px']],
        ])('sizes the inactive and the active mark alike (%s)', (_case, data, expected) => {
            const container = mountChrome(data);

            for (const selector of [INACTIVE, ACTIVE]) {
                const mark = styleOf(container, selector);
                expect([mark.width, mark.height]).toEqual(expected);
            }
        });

        it('paints markBackgroundColor on both and brightens only the active mark', () => {
            const container = mountChrome({ markBackgroundColor: '#204060' });
            const inactive = styleOf(container, INACTIVE);
            const active = styleOf(container, ACTIVE);

            expect([inactive.background, inactive.filter, inactive.opacity]).toEqual(['#204060', '', '']);
            expect([active.background, active.backgroundColor, active.filter, active.opacity]).toEqual([
                '#204060',
                '#204060',
                'brightness(2.5)',
                '0.8',
            ]);
        });

        it('keeps a named colour that is a palette key as the plain CSS colour', () => {
            const container = mountChrome({ markBackgroundColor: 'grey' });

            expect(styleOf(container, INACTIVE).background).toBe('grey');
            expect(styleOf(container, ACTIVE).backgroundColor).toBe('grey');
        });

        it('declares backgroundColor before background and the frozen brightness on the active mark', () => {
            const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
            const container = mountChrome({ markBackgroundColor: gradient });

            const rule = rootRule(container, '.MuiSlider-markActive');

            expect(rule).toContain(`;background-color:${gradient};background:${gradient};`);
            expect(rule).toMatch(/;filter:brightness\(2\.5\);/);
        });
    });

    describe('mark-label space and end symbol offset', () => {
        it.each<[string, Record<string, unknown>, [string, string], string]>([
            ['horizontal with marks', { sliderOrientation: 'horizontal' }, ['20px', '0px'], 'translateY(-10px)'],
            ['vertical with marks', { sliderOrientation: 'vertical' }, ['0px', '44px'], 'translateX(-22px)'],
            [
                'horizontal without marks',
                { sliderOrientation: 'horizontal', marks: false },
                ['0px', '0px'],
                'translateY(0px)',
            ],
            [
                'vertical without marks',
                { sliderOrientation: 'vertical', marks: false },
                ['0px', '0px'],
                'translateX(0px)',
            ],
        ])('reserves the label margin and moves the end icon onto the rail (%s)', (_case, data, margins, transform) => {
            const container = mountChrome(data);
            const root = styleOf(container, '.MuiSlider-root');

            expect([root.marginBottom, root.marginRight]).toEqual(margins);
            expect(endSymbolTransform(container)).toBe(transform);
        });
    });

    // Legacy data, an import or a script may leave the orientation out: the slider then renders
    // horizontal (MUI's default), and every rule around it must agree.
    describe('unset orientation', () => {
        it('lays out, sizes and labels the slider as a horizontal one', () => {
            const container = mountChrome({ sliderOrientation: undefined, trackLength: 6, railLength: 8 });
            const root = container.querySelector('.MuiSlider-root');
            const icon = Array.from(container.querySelectorAll('img')).find(
                img => img.getAttribute('src') === END_ICON,
            );
            if (!root || !icon) {
                throw new Error('the slider rendered no root or no start icon');
            }

            expect(rangeOf(container).getAttribute('aria-orientation')).toBe('horizontal');
            expect(styleOf(container, '.MuiSlider-track').height).toBe('6px');
            expect(styleOf(container, '.MuiSlider-rail').height).toBe('8px');
            const mark = styleOf(container, '.MuiSlider-mark');
            expect([mark.width, mark.height]).toEqual(['2px', '2px']);
            expect([getComputedStyle(root).marginBottom, getComputedStyle(root).marginRight]).toEqual(['20px', '0px']);
            expect(endSymbolTransform(container)).toBe('translateY(-10px)');
            // The min icon is the start symbol: before the slider, as in a horizontal row.
            expect(icon.compareDocumentPosition(root) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
            const row = icon.parentElement?.parentElement;
            expect(row && getComputedStyle(row).flexDirection).toBe('row');
        });
    });

    describe('label positions', () => {
        it('puts the value label at labelPosition and the mark labels at markPosition (horizontal)', () => {
            const container = mountChrome({ labelPosition: '-7px', markPosition: '25px' });
            const valueLabel = styleOf(container, '.MuiSlider-valueLabel');
            const markLabel = styleOf(container, '.MuiSlider-markLabel');

            expect([valueLabel.top, valueLabel.backgroundColor]).toEqual(['-7px', 'transparent']);
            expect(markLabel.top).toBe('25px');
        });

        it('puts them beside a vertical slider', () => {
            const container = mountChrome({
                sliderOrientation: 'vertical',
                labelPosition: '-7px',
                markPosition: '25px',
            });
            const valueLabel = styleOf(container, '.MuiSlider-valueLabel');
            const markLabel = styleOf(container, '.MuiSlider-markLabel');

            expect([valueLabel.right, valueLabel.backgroundColor]).toEqual(['-7px', 'transparent']);
            expect(markLabel.left).toBe('25px');
        });
    });
});

// The host keeps '' for an emptied field. It falls back like an unset one: the Skala hands over the
// State-Spanne, and `null` without numeric states leaves MUI's defaults 0, 100 and 1.
describe('SliderCollection with emptied range fields', () => {
    const attributesOf = (data: Record<string, unknown>): (string | null)[] => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-emptied-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
                    sliderOrientation: 'horizontal',
                    minValue: '',
                    maxValue: '',
                    step: '',
                    noHeader: true,
                    noFooter: true,
                    noHeaderIcon: true,
                    ...data,
                },
                20,
            ),
        );
        const input = rangeOf(container);

        return ['min', 'max', 'step'].map(name => input.getAttribute(name));
    };

    it("takes MUI's defaults without state rows", () => {
        expect(attributesOf({})).toEqual(['0', '100', '1']);
    });

    it('takes the State-Spanne with state rows', () => {
        expect(attributesOf({ values_count: 2, value1: '10', value2: '30' })).toEqual(['10', '30', '1']);
    });
});

// The vis-2 select offers only the option values and stores one; null (an assistant's flat
// update) and '' come only from raw data and mean nothing here, so they read like the unset
// field — MUI applies its own default to undefined only.
describe('SliderCollection option fields stored as null or empty', () => {
    const sliderOf = (data: Record<string, unknown>): { className: string; valueLabel: boolean } => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-option-test',
                {
                    oid: OID,
                    oidObject: { _id: OID, type: 'number' },
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
        const slider = container.querySelector('.MuiSlider-root');
        if (!slider) {
            throw new Error('the slider rendered no MUI slider');
        }
        return { className: slider.className, valueLabel: !!container.querySelector('.MuiSlider-valueLabel') };
    };

    it.each([null, ''])('sizes a slider whose size is stored as %j like the unset one', sliderSize => {
        const unset = sliderOf({}).className;

        expect(unset).toContain('MuiSlider-sizeMedium');
        expect(sliderOf({ sliderSize }).className).toBe(unset);
    });

    it.each([null, ''])('shows no value label for a value label display stored as %j, like unset', valueLabelDisplay => {
        expect(sliderOf({}).valueLabel).toBe(false);
        expect(sliderOf({ valueLabelDisplay }).valueLabel).toBe(false);
    });
});

// vis-2's panel shows the field default for a padding that is not stored (WidgetField: a value
// `== null` shows `field.default`); only raw data leaves it out (the vis-2 assistant, ADR-0114).
describe('SliderCollection padding', () => {
    const paperOf = (data: Record<string, unknown>): string => {
        const { container } = mount(
            SliderCollection,
            collectionScene(
                'slider-padding-test',
                { oid: OID, oidObject: { _id: OID, type: 'number' }, minValue: 0, maxValue: 100, ...data },
                50,
            ),
        );
        const paper = container.querySelector('.BASE-PAPER-1');
        if (!paper) {
            throw new Error('the slider rendered no content paper');
        }
        return paper.className;
    };

    it.each([
        ['unset', undefined],
        ['null', null],
    ])('pads the slider of a %s padding with the default the panel shows', (_case, sliderPadding) => {
        const shown = (sliderFields() as { name?: string; default?: unknown }[]).find(
            field => field.name === 'sliderPadding',
        )?.default;

        expect(shown).toBeTypeOf('number');
        expect(paperOf({ sliderPadding })).toBe(paperOf({ sliderPadding: shown }));
    });

    it('keeps no padding for an emptied padding', () => {
        expect(paperOf({ sliderPadding: '' })).toBe(paperOf({ sliderPadding: 0 }));
    });
});
