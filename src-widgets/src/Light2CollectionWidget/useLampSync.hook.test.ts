/**
 * useLampSync — the hook around the lamp sync core, on real iro pickers.
 *
 * @module Light2CollectionWidget/useLampSync.hook.test
 * @remarks
 * What the hook adds around {@link module:Light2CollectionWidget/lampSync.test}: the drag
 * handler writes and couples the Kelvin-Picker without a re-render, the sync applies its picker
 * actions after the render, and its own picker updates never write. Real `iro.ColorPicker`s
 * render under happy-dom; a drag is a mousedown/mousemove/mouseup on the slider.
 *
 * Why the sync guard stays (ADR-0108 Nr. 3 assumed it guards nothing): iro's slider sets
 * `inputActive` on every input including the release (`iro.es.js:1318-1322`), and only a colour
 * change clears it (`:1697-1701`). A release on the last drag position leaves it set, so the next
 * programmatic update would arrive as `input:change` — the guard case below.
 */
import iro from '@jaames/iro';
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { LIGHT2_CHANNEL_FIELDS } from '../lib/light2Channels';
import type { Light2ChannelField } from '../lib/light2Channels';
import { renderHook } from '../lib/testing/testHarness';
import type { SyncChannel } from './backendSyncKey';
import type { Light2WidgetData } from './channelMapping';
import type { LampPicker } from './lampSync';
import { useLampSync } from './useLampSync';
import type { LampSync, LampSyncOptions } from './useLampSync';

const DATA = {
    colorLightTemperatureOid: 'lamp.ct',
    colorLightTemperatureOidObject: { maxValue: 6500 },
    colorLightRgbHexOid: 'lamp.hex',
    colorLightRgbHexOidObject: {},
    colorLightBrightnessOid: 'lamp.v',
    colorLightBrightnessOidObject: { maxValue: 100 },
} as unknown as Light2WidgetData;

const SLIDER_WIDTH = 200;

/** Kanal values the reads see, mutable per test. */
let backend: Partial<Record<Light2ChannelField, ioBroker.StateValue>> = {};

/** One `useValueState` setter spy per Kanal. */
const makeSetters = (): LampSyncOptions['setters'] =>
    Object.fromEntries(LIGHT2_CHANNEL_FIELDS.map(field => [field, vi.fn()])) as unknown as LampSyncOptions['setters'];

/** Options of a render: Lichttyp, view, flagged Kanäle (foreign change with value). */
const options = (
    type: string,
    cctView: boolean,
    setters: LampSyncOptions['setters'],
    flagged: Partial<Record<Light2ChannelField, ioBroker.StateValue>> = {},
): LampSyncOptions => {
    const channels = {} as Record<Light2ChannelField, SyncChannel>;
    for (const field of LIGHT2_CHANNEL_FIELDS) {
        channels[field] = { changed: field in flagged, value: field in flagged ? flagged[field] : backend[field] };
    }
    return {
        type,
        cctView,
        widgetData: DATA,
        getPropertyValue: name => backend[name as Light2ChannelField] as ioBroker.StateValue,
        channels,
        setters,
    };
};

/** A real iro picker with one slider, wired to the hook as `lampPicker`. */
const mountPicker = (
    sliderType: 'kelvin' | 'value',
    sync: { current: LampSync },
    lampPicker: LampPicker,
): { picker: iro.ColorPicker; slider: HTMLElement } => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const picker = iro.ColorPicker(element, {
        width: SLIDER_WIDTH,
        color: '#ffffff',
        layout: [
            {
                component: iro.ui.Slider,
                options: { sliderType, minTemperature: 2000, maxTemperature: 6500 },
            },
        ],
    });
    picker.on('color:init', (color: iro.Color) => sync.current.onColorInit(color, lampPicker));
    picker.on('input:change', (color: iro.Color, changes: { h?: boolean; s?: boolean; v?: boolean }) =>
        sync.current.onInputChange(color, lampPicker, changes),
    );
    const slider = element.querySelector('.IroSlider') as HTMLElement;
    slider.getBoundingClientRect = () =>
        ({ left: 0, top: 0, width: SLIDER_WIDTH, height: 28, right: SLIDER_WIDTH, bottom: 28 }) as DOMRect;
    return { picker, slider };
};

/** The Helligkeits-Picker colour the Kelvin-Kopplung gives: the Kelvin colour at `value`. */
const coupled = (kelvinColor: iro.Color, value: number): string => {
    const color = new iro.Color(kelvinColor.hexString);
    color.value = value;
    return color.hexString;
};

/** Lets the microtask queue drain, as between two browser input events. */
const nextTask = async (): Promise<void> => {
    await act(async () => {
        await Promise.resolve();
    });
};

/** A drag on the slider from `fromX` to `toX`, released where it stopped; each event its own task. */
const drag = async (slider: HTMLElement, fromX: number, toX: number): Promise<void> => {
    slider.dispatchEvent(new MouseEvent('mousedown', { clientX: fromX, clientY: 10, bubbles: true }));
    await nextTask();
    document.dispatchEvent(new MouseEvent('mousemove', { clientX: toX, clientY: 10, bubbles: true }));
    await nextTask();
    document.dispatchEvent(new MouseEvent('mouseup', { clientX: toX, clientY: 10, bubbles: true }));
    await nextTask();
};

/** Mounts the hook in the CCT-Ansicht of `type` with a Kelvin- and a Helligkeits-Picker. */
const mountCct = (
    type: string,
): {
    setters: LampSyncOptions['setters'];
    hook: ReturnType<typeof renderHook<LampSync>>;
    kelvin: ReturnType<typeof mountPicker>;
    brightness: ReturnType<typeof mountPicker>;
} => {
    const setters = makeSetters();
    const hook = renderHook(() => useLampSync(options(type, true, setters)));
    const kelvin = mountPicker('kelvin', hook.result, 'main');
    const brightness = mountPicker('value', hook.result, 'brightness');
    hook.result.current.mainPickerRef.current = kelvin.picker;
    hook.result.current.brightnessPickerRef.current = brightness.picker;
    return { setters, hook, kelvin, brightness };
};

afterEach(() => {
    backend = {};
    document.body.innerHTML = '';
});

describe('useLampSync', () => {
    it('inits the pickers from the Kanäle', () => {
        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 40 };
        const { kelvin, brightness } = mountCct('cct');

        expect(kelvin.picker.color.kelvin).toBeCloseTo(2700, -1);
        expect(brightness.picker.color.value).toBe(40);
    });

    it('a Kelvin drag writes the rounded temperature and couples the Helligkeits-Picker in the handler', async () => {
        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 40 };
        const { setters, kelvin, brightness } = mountCct('rgbcct');

        await drag(kelvin.slider, 20, 150);

        const written = vi.mocked(setters.colorLightTemperatureOid).mock.calls.map(([value]) => value);
        expect(written.length).toBeGreaterThan(0);
        expect(written.every(value => Number.isInteger(value))).toBe(true);
        expect(setters.colorLightBrightnessOid).not.toHaveBeenCalled();
        expect(brightness.picker.color.value).toBe(40);
        expect(brightness.picker.color.hexString).toBe(coupled(kelvin.picker.color, 40));
    });

    it('a foreign temperature change after a Kelvin drag moves both pickers without writing (sync guard)', async () => {
        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 40 };
        const { setters, hook, kelvin, brightness } = mountCct('rgbcct');
        await drag(kelvin.slider, 20, 150);
        vi.mocked(setters.colorLightTemperatureOid).mockClear();

        backend = { colorLightTemperatureOid: 6000, colorLightBrightnessOid: 40 };
        hook.rerender(() => useLampSync(options('rgbcct', true, setters, { colorLightTemperatureOid: 6000 })));

        expect(kelvin.picker.color.kelvin).toBeCloseTo(6000, -2);
        expect(brightness.picker.color.hexString).toBe(coupled(kelvin.picker.color, 40));
        expect(setters.colorLightTemperatureOid).not.toHaveBeenCalled();
    });

    it('leaving the CCT-Ansicht after a Kelvin drag writes the stored colour once, not the Kelvin white', async () => {
        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 40, colorLightRgbHexOid: '#ff0000' };
        const { setters, hook, kelvin } = mountCct('rgbcct');
        await drag(kelvin.slider, 20, 150);

        hook.rerender(() => useLampSync(options('rgbcct', false, setters)));

        expect(vi.mocked(setters.colorLightRgbHexOid).mock.calls).toEqual([['#ff0000']]);
        expect(kelvin.picker.color.hexString).toBe('#ff0000');
    });

    it('entering the CCT-Ansicht writes the stored temperature, whole, on every switch (the lamp turns white)', () => {
        backend = { colorLightTemperatureOid: 4000, colorLightBrightnessOid: 40, colorLightRgbHexOid: '#ff0000' };
        const { setters, hook } = mountCct('rgbcct');
        hook.rerender(() => useLampSync(options('rgbcct', false, setters)));
        vi.mocked(setters.colorLightTemperatureOid).mockClear();

        hook.rerender(() => useLampSync(options('rgbcct', true, setters)));
        hook.rerender(() => useLampSync(options('rgbcct', false, setters)));
        hook.rerender(() => useLampSync(options('rgbcct', true, setters)));

        expect(vi.mocked(setters.colorLightTemperatureOid).mock.calls).toEqual([[4000], [4000]]);
        expect(setters.colorLightBrightnessOid).not.toHaveBeenCalled();
    });

    it('a foreign brightness change moves the Helligkeits-Picker of an „& cct" Lichttyp', () => {
        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 40 };
        const { setters, hook, brightness } = mountCct('rgbcct');

        backend = { colorLightTemperatureOid: 2700, colorLightBrightnessOid: 70 };
        hook.rerender(() => useLampSync(options('rgbcct', true, setters, { colorLightBrightnessOid: 70 })));

        expect(brightness.picker.color.value).toBe(70);
        expect(setters.colorLightBrightnessOid).not.toHaveBeenCalled();
    });
});
