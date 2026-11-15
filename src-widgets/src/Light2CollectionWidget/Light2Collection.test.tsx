/**
 * Light2Collection — the Button-Modus and the Lampen-Bedienelement, rendered.
 *
 * @module Light2CollectionWidget/Light2Collection.test
 * @remarks
 * DOM contract of the body on the preview context (real useData/useValueState): in the
 * Button-Modus a click on the face toggles the Schalter-OID and a long press (after
 * `colorLightDelayLongPress`) opens the Lampen-Bedienelement in a modal; without it the
 * Lampen-Bedienelement renders directly — power button and picker box. A Schalter-OID that is no
 * boolean shows the OID hint. A Lichttyp without a view (none) asks for a Lichttyp instead, and in
 * the Button-Modus every press toggles. The Lichttyp dimmer draws a single value slider. The iro picker is replaced by a stub through its module: the
 * picker transitions are pinned with real iro in the channel-mapping tests.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { act } from 'react';

import { collectionScene, installInertResizeObserver, testScopedMount } from '../lib/testing/collectionScene';
import light2Fields from '../lib/light2Fields';
import { fieldDefaultOf, readWidgetData } from '../lib/testing/widgetReading';
import Light2Collection from './Light2Collection';
import type { PickerGeometry } from './pickerGeometry';
import type { PreviewScene } from '../preview/types';

/** The props each render of the stubbed picker received, latest last. */
const pickerRenders = vi.hoisted(() => [] as Array<Record<string, unknown>>);

vi.mock('./Light2Picker', async () => {
    const { createElement, forwardRef } = await import('react');
    return {
        default: forwardRef((props: Record<string, unknown>, _ref) => {
            pickerRenders.push(props);
            return createElement('div', { 'data-testid': 'light2-picker' });
        }),
    };
});

installInertResizeObserver();

const SWITCH = 'demo.0.lamp.on';

const mountBody = testScopedMount();

/**
 * A Light2 scene on a boolean Schalter-OID (rgb lamp), the switch holding `status`; the data as the
 * widget reads it (`readWidgetData`).
 */
const scene = (data: Record<string, unknown> = {}, status: unknown = false): PreviewScene =>
    collectionScene(
        'light2-collection-test',
        readWidgetData(light2Fields(), {
            colorLightSwitchOid: SWITCH,
            colorLightSwitchOidObject: { _id: SWITCH, type: 'boolean' },
            colorLightType: 'rgb',
            delay: 0,
            noHeader: true,
            noFooter: true,
            noHeaderIcon: true,
            ...data,
        }),
        status,
        SWITCH,
    );

/** Feeds every observed element a measured content rect, so the picker box gets its size. */
const measureContentRect = (contentRect: { width: number; height: number }): void => {
    vi.stubGlobal(
        'ResizeObserver',
        class {
            private readonly callback: ResizeObserverCallback;

            constructor(callback: ResizeObserverCallback) {
                this.callback = callback;
            }

            observe(target: Element): void {
                this.callback([{ target, contentRect } as unknown as ResizeObserverEntry], this);
            }

            /* eslint-disable class-methods-use-this -- nothing to release */
            unobserve(): void {}
            disconnect(): void {}
            /* eslint-enable class-methods-use-this */
        },
    );
};

/** Dispatches one pointer event (pointer 1, primary button) on the element. */
const pointer = (element: Element, type: 'pointerdown' | 'pointerup'): void => {
    act(() => {
        element.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, button: 0 }));
    });
};

/** The power button of a Lampen-Bedienelement inside `root`. */
const powerIcon = (root: ParentNode): Element | null => root.querySelector('[data-testid="PowerSettingsNewIcon"]');

/** The modal hosting the Lampen-Bedienelement (portalled into the document body). */
const modal = (): Element | null => document.body.querySelector('.MuiModal-root');

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
});

describe('Light2Collection Button-Modus', () => {
    it('toggles the Schalter-OID on a click on the face (optimistic patch, then the backend write)', async () => {
        const { container, setState, setValue } = mountBody(Light2Collection, scene({ colorLightButton: true }));
        vi.useFakeTimers();

        const face = container.querySelector('button');
        expect(face).not.toBeNull();
        pointer(face!, 'pointerdown');
        pointer(face!, 'pointerup');

        expect(setState).toHaveBeenCalledTimes(1);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue.mock.calls).toEqual([[SWITCH, true]]);
        expect(modal()).toBeNull();
    });

    it('opens the Lampen-Bedienelement in a modal after the long-press delay, without writing', async () => {
        const { container, setValue } = mountBody(
            Light2Collection,
            scene({ colorLightButton: true, colorLightDelayLongPress: 800 }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(799);
        });
        expect(modal()).toBeNull();

        act(() => {
            vi.advanceTimersByTime(1);
        });
        pointer(face, 'pointerup');

        expect(modal()).not.toBeNull();
        expect(powerIcon(modal()!)).not.toBeNull();
        // The face itself is no Lampen-Bedienelement.
        expect(powerIcon(container)).toBeNull();

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue).not.toHaveBeenCalled();
    });
});

describe('Light2Collection Button-Modus long-press delay', () => {
    // A delay stored as null reads like the unset one (the field default, lib/fieldDefaults).
    it('toggles on a short press for a delay stored as null, like the unset delay', async () => {
        const { container, setValue } = mountBody(
            Light2Collection,
            scene({ colorLightButton: true, colorLightDelayLongPress: null }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(100);
        });
        pointer(face, 'pointerup');
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });

        expect(modal()).toBeNull();
        expect(setValue.mock.calls).toEqual([[SWITCH, true]]);
    });

    // vis-2's number field keeps '' once the user empties it: stored lamps read it as a 0 ms delay,
    // like a stored 0, so every press opens the modal (no emptiedReadsUnset).
    it('opens the modal on every press for an emptied delay, like a delay of 0', async () => {
        const { container, setValue } = mountBody(
            Light2Collection,
            scene({ colorLightButton: true, colorLightDelayLongPress: '' }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(1);
        });
        pointer(face, 'pointerup');
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });

        expect(modal()).not.toBeNull();
        expect(setValue).not.toHaveBeenCalled();
    });

    it('opens the modal after a delay stored as a numeric string, at its number', () => {
        const { container } = mountBody(
            Light2Collection,
            scene({ colorLightButton: true, colorLightDelayLongPress: '800' }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(799);
        });
        expect(modal()).toBeNull();
        act(() => {
            vi.advanceTimersByTime(1);
        });
        pointer(face, 'pointerup');

        expect(modal()).not.toBeNull();
    });
});

describe('Light2Collection Button-Modus of a Lichttyp without a view (none)', () => {
    // No view means no Lampen-Bedienelement to open: every press toggles the Schalter-OID, whatever
    // the delay (a delay of 0 used to turn every press into a long press, the lamp could not be
    // switched) and however long it is held; the (almost empty) modal never opens.
    it.each([
        ['the default delay', {}],
        ['a delay of 0', { colorLightDelayLongPress: 0 }],
        ['an emptied delay', { colorLightDelayLongPress: '' }],
        ['a delay stored as null', { colorLightDelayLongPress: null }],
        ['a delay stored as a numeric string', { colorLightDelayLongPress: '800' }],
    ])('toggles on every press and opens no modal for %s', async (_case, delay) => {
        const { container, setValue } = mountBody(
            Light2Collection,
            scene({ colorLightType: 'none', colorLightButton: true, ...delay }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        // A short press, then one held far beyond any delay.
        for (const holdMs of [1, 2000]) {
            pointer(face, 'pointerdown');
            act(() => {
                vi.advanceTimersByTime(holdMs);
            });
            pointer(face, 'pointerup');
            await act(async () => {
                await vi.advanceTimersByTimeAsync(1);
            });
        }

        expect(modal()).toBeNull();
        // Each press toggles once; the scene's switch stays off (no backend echo), so both write true.
        expect(setValue.mock.calls).toEqual([
            [SWITCH, true],
            [SWITCH, true],
        ]);
    });
});

describe('Light2Collection Button-Modus face (Wert-Anzeige without value text)', () => {
    /** The two fixed Zustandszeilen of the Schalter-OID, each with its own icon at the given size. */
    const switchRows = (iconSize: number): Record<string, unknown> => ({
        colorLightButton: true,
        values_count: 2,
        value1: true,
        icon1: 'on.svg',
        iconSize1: iconSize,
        value2: false,
        icon2: 'off.svg',
        iconSize2: iconSize,
    });

    /** The face's icon element. */
    const faceIcon = (container: HTMLElement): HTMLImageElement => {
        const img = container.querySelector<HTMLImageElement>('button img');
        expect(img).not.toBeNull();
        return img!;
    };

    /** The rendered width of the face's icon (the element that carries its size). */
    const faceIconWidth = (container: HTMLElement): string => {
        const img = faceIcon(container);
        const sized = img.closest<HTMLElement>('.MuiAvatar-root') ?? img;
        return getComputedStyle(sized).width;
    };

    it("sizes the icon from the active row's iconSize", () => {
        const { container } = mountBody(Light2Collection, scene(switchRows(50)));

        expect(faceIconWidth(container)).toBe('50%');
    });

    it("shows the icon of the switch's active row and follows the switch value", () => {
        const off = scene(switchRows(100), false);
        const { container, rerender } = mountBody(Light2Collection, off);
        expect(faceIcon(container).getAttribute('src')).toBe('off.svg');

        rerender(scene(switchRows(100), true));
        expect(faceIcon(container).getAttribute('src')).toBe('on.svg');
    });

    it('renders no value text on the face', () => {
        const { container } = mountBody(Light2Collection, scene(switchRows(100), true));

        expect(container.querySelector('button')?.textContent).toBe('');
    });
});

describe('Light2Collection Lampen-Bedienelement', () => {
    it('renders the power button and the picker box directly without the Button-Modus', () => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(Light2Collection, scene());

        expect(powerIcon(container)).not.toBeNull();
        expect(container.querySelector('[data-testid="light2-picker"]')).not.toBeNull();
        expect(modal()).toBeNull();
    });

    it('writes the inverse of the switch from the power button', async () => {
        const { container, setValue } = mountBody(Light2Collection, scene({}, true));
        vi.useFakeTimers();

        act(() => {
            powerIcon(container)!.closest('button')!.click();
        });
        await act(async () => {
            await vi.advanceTimersByTimeAsync(1);
        });
        expect(setValue.mock.calls).toEqual([[SWITCH, false]]);
    });

    it.each([
        ['without the Button-Modus', {}],
        ['in the Button-Modus', { colorLightButton: true }],
    ])('shows the OID hint for a Schalter-OID that is no boolean (%s)', (_case, data) => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(
            Light2Collection,
            scene({ colorLightSwitchOidObject: { _id: SWITCH, type: 'number' }, ...data }, 1),
        );

        expect(container.textContent).toContain('collection_base_select_oid');
        expect(powerIcon(container)).toBeNull();
        expect(container.querySelector('[data-testid="light2-picker"]')).toBeNull();
    });
});

describe('Light2Collection without a Lichttyp (none)', () => {
    const LIGHT_TYPE_HINT = 'light2_collection_widget_select_light_type';

    // A Lichttyp without a view draws no Lampen-Bedienelement: instead of an empty frame the widget
    // asks for a Lichttyp (in the editor and at runtime alike — the body has no edit-mode branch).
    it('asks for a Lichttyp instead of an empty frame, without power button and pickers', () => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(Light2Collection, scene({ colorLightType: 'none' }));

        expect(container.textContent).toContain(LIGHT_TYPE_HINT);
        expect(powerIcon(container)).toBeNull();
        expect(container.querySelector('[data-testid="light2-picker"]')).toBeNull();
    });

    // The more basic problem first: a Schalter-OID without a usable object shows the OID hint.
    it.each([
        ['a Schalter-OID that is no boolean', { colorLightSwitchOidObject: { _id: SWITCH, type: 'number' } }],
        ['a missing Schalter-OID', { colorLightSwitchOid: '', colorLightSwitchOidObject: undefined }],
    ])('shows the OID hint for %s', (_case, data) => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(Light2Collection, scene({ colorLightType: 'none', ...data }, 1));

        expect(container.textContent).toContain('collection_base_select_oid');
        expect(container.textContent).not.toContain(LIGHT_TYPE_HINT);
        expect(powerIcon(container)).toBeNull();
    });

    it('keeps the Button-Modus face, without the hint', () => {
        const { container } = mountBody(Light2Collection, scene({ colorLightType: 'none', colorLightButton: true }));

        expect(container.querySelector('button')).not.toBeNull();
        expect(container.textContent).not.toContain(LIGHT_TYPE_HINT);
    });

    // The Rückfall-Regel (ADR-0114) reads a stored value the select does not offer as unset, so the
    // body reads the default none — before as an empty frame, now with the hint. The table's colour
    // view of an unknown Lichttyp serves the editor rules, which see the raw data.
    it('reads a stored Lichttyp the select does not offer as none, with the hint', () => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(Light2Collection, scene({ colorLightType: 'white' }));

        expect(container.textContent).toContain(LIGHT_TYPE_HINT);
        expect(powerIcon(container)).toBeNull();
    });
});

describe('Light2Collection Lichttyp dimmer (a lamp that only dims)', () => {
    /** The iro layouts the stubbed pickers were last drawn with, per picker. */
    const drawnPickers = (): Array<{ picker: unknown; sliders: unknown[] }> => {
        const last = new Map<unknown, Record<string, unknown>>();
        for (const props of pickerRenders) {
            last.set(props.picker, props);
        }
        return [...last.values()].map(props => ({
            picker: props.picker,
            sliders: (props.geometry as PickerGeometry).layouts[props.picker as 'main' | 'brightness'].map(
                entry => entry.options?.sliderType,
            ),
        }));
    };

    // ADR-0116 Nr. 1/2: the power button and one value slider — no view switch, and the UI component
    // does not change it.
    it.each(['wheel', 'box', 'slider'])(
        'draws the power button and a single value slider, no view switch (UI component %s)',
        uiComponent => {
            measureContentRect({ width: 300, height: 200 });
            pickerRenders.length = 0;
            const { container } = mountBody(
                Light2Collection,
                scene({ colorLightType: 'dimmer', colorLightUIComponent: uiComponent }),
            );

            expect(powerIcon(container)).not.toBeNull();
            // The power button is the only button: no view switch.
            expect(container.querySelectorAll('button')).toHaveLength(1);
            expect(container.querySelectorAll('[data-testid="light2-picker"]')).toHaveLength(1);
            expect(drawnPickers()).toEqual([{ picker: 'main', sliders: ['value'] }]);
        },
    );

    it('opens the single slider in the modal of the Button-Modus after the long-press delay', () => {
        measureContentRect({ width: 300, height: 200 });
        const { container } = mountBody(
            Light2Collection,
            scene({ colorLightType: 'dimmer', colorLightButton: true, colorLightDelayLongPress: 800 }),
        );
        vi.useFakeTimers();

        const face = container.querySelector('button')!;
        pointer(face, 'pointerdown');
        act(() => {
            vi.advanceTimersByTime(800);
        });
        pointer(face, 'pointerup');

        expect(modal()).not.toBeNull();
        expect(powerIcon(modal()!)).not.toBeNull();
        expect(modal()!.querySelectorAll('[data-testid="light2-picker"]')).toHaveLength(1);
    });
});

describe('Light2Collection Kelvin range of the CCT-Ansicht', () => {
    /** The default of a Light2 field, from its definition. */
    const defaultOf = (name: string): unknown => fieldDefaultOf(light2Fields(), name);

    /** The Kelvin range the Kelvin-Picker was last drawn with. */
    const drawnRange = (): { minTemperature: unknown; maxTemperature: unknown } => {
        const main = pickerRenders.filter(props => props.picker === 'main').at(-1);
        const options = (main?.geometry as PickerGeometry | undefined)?.layouts.main[0]?.options ?? {};
        return { minTemperature: options.minTemperature, maxTemperature: options.maxTemperature };
    };

    const drawWith = (range: Record<string, unknown>): ReturnType<typeof drawnRange> => {
        measureContentRect({ width: 300, height: 200 });
        pickerRenders.length = 0;
        mountBody(Light2Collection, scene({ colorLightType: 'cct', ...range }));
        return drawnRange();
    };

    // The OID pick stores the schema defaults, so an unset range comes only from raw data: iro took
    // the missing bound as NaN and drew no Kelvin gradient. Unset, null or emptied, the widget reads
    // the default (lib/light2Fields: emptiedReadsUnset).
    it.each([
        ['unset', {}],
        ['stored as null', { colorLightCtMin: null, colorLightCtMax: null }],
        ['emptied', { colorLightCtMin: '', colorLightCtMax: '' }],
    ])('draws a range %s over the defaults the panel shows', (_case, range) => {
        expect(drawWith(range)).toEqual({
            minTemperature: defaultOf('colorLightCtMin'),
            maxTemperature: defaultOf('colorLightCtMax'),
        });
    });

    // A string bound made iro concatenate: the Kelvin stops ran '2500' + 500 = '2500500'.
    it('draws a range stored as numeric strings over their numbers', () => {
        expect(drawWith({ colorLightCtMin: '2500', colorLightCtMax: '5000' })).toEqual({
            minTemperature: 2500,
            maxTemperature: 5000,
        });
    });
});
