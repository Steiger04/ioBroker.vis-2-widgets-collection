/**
 * PIN — Light2 read behaviour: Kanal values → picker colour.
 *
 * @module Light2CollectionWidget/channelMapping.test
 * @remarks
 * The cases of the former `initHandlers.test.ts`, moved unchanged with the read helper into
 * the channel mapping (spec licht2-architektur-2026-11 ticket 02); only the call form follows
 * the new interface (Lichttyp, view, picker). They define how the picker mirrors the device on
 * init and on backend changes: per-type channel reads, safe fallbacks (2000 K, #ffffff, 0),
 * and the Hue-254 → percent normalization. Pure functions of widget data and a
 * getPropertyValue accessor — the picker view itself is untested (project rule).
 *
 * Former entry points: `initializeKelvin` = the Kelvin-Picker of the CCT-Ansicht,
 * `initializeBrightness` = its Helligkeits-Picker, `initializeColorFromStates(type, n)` = the
 * effective Lichttyp's view with picker n (1 Kelvin, 2 Helligkeit) in the CCT-Ansicht.
 */
import { describe, expect, it } from 'vitest';
import type iro from '@jaames/iro';

import { readChannelsIntoColor } from './channelMapping';
import type { Light2WidgetData, PickerTarget } from './channelMapping';

/** Fake iro.Color: the handlers only assign scalar properties. */
const makeColor = (): { color: iro.Color; state: Record<string, unknown> } => {
    const state: Record<string, unknown> = {};
    return { color: state as unknown as iro.Color, state };
};

/**
 * getPropertyValue fake keyed by widget property name — Generic.getPropertyValue
 * resolves the field name to its OID internally, so the handlers pass field names.
 */
const makeGetProperty =
    (values: Record<string, ioBroker.StateValue>) =>
    (name: string): ioBroker.StateValue =>
        values[name];

const makeData = (overrides: Record<string, unknown>): Light2WidgetData => overrides as unknown as Light2WidgetData;

type Read = (
    color: iro.Color,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
) => void;

/** The Kelvin-Picker of the CCT-Ansicht (former `initializeKelvin`). */
const initializeKelvin: Read = (color, data, get) =>
    readChannelsIntoColor(color, { type: 'cct', view: 'cct', picker: 'kelvin' }, data, get);

/** The Helligkeits-Picker of the CCT-Ansicht (former `initializeBrightness`). */
const initializeBrightness: Read = (color, data, get) =>
    readChannelsIntoColor(color, { type: 'cct', view: 'cct', picker: 'brightness' }, data, get);

/**
 * The former `initializeColorFromStates(color, effectiveType, get, data, n)`: the effective
 * Lichttyp 'cct' is the CCT-Ansicht, picker n 1 = Kelvin, 2 = Helligkeit.
 */
const initializeColorFromStates = (
    color: iro.Color,
    effectiveType: string,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
    data: Light2WidgetData,
    pickerNumber?: 1 | 2,
): void => {
    const target: PickerTarget =
        effectiveType === 'cct'
            ? {
                  type: 'cct',
                  view: 'cct',
                  picker: pickerNumber === 1 ? 'kelvin' : pickerNumber === 2 ? 'brightness' : undefined,
              }
            : { type: effectiveType, view: 'color' };
    readChannelsIntoColor(color, target, data, getPropertyValue);
};

describe('initializeKelvin', () => {
    it('reads the temperature state', () => {
        const { color, state } = makeColor();

        initializeKelvin(
            color,
            makeData({ colorLightTemperatureOid: 'channel.temperature' }),
            makeGetProperty({ colorLightTemperatureOid: 3400 }),
        );

        expect(state.kelvin).toBe(3400);
    });

    it('falls back to 2000 K for missing, empty, or non-numeric states', () => {
        const cases: Array<Record<string, unknown>> = [
            {}, // OID never configured
            { colorLightTemperatureOid: '' }, // OID cleared
            { colorLightTemperatureOid: 'channel.temperature' }, // state absent
        ];

        for (const data of cases) {
            const { color, state } = makeColor();
            initializeKelvin(color, makeData(data), makeGetProperty({}));
            expect(state.kelvin).toBe(2000);
        }

        const { color, state } = makeColor();
        initializeKelvin(
            color,
            makeData({ colorLightTemperatureOid: 'channel.temperature' }),
            makeGetProperty({ colorLightTemperatureOid: 'warm' }),
        );
        expect(state.kelvin).toBe(2000);
    });
});

describe('initializeBrightness', () => {
    it('passes through plain percent channels', () => {
        const { color, state } = makeColor();

        initializeBrightness(
            color,
            makeData({
                colorLightBrightnessOid: 'channel.brightness',
                colorLightBrightnessOidObject: { maxValue: 100 },
            }),
            makeGetProperty({ colorLightBrightnessOid: 55 }),
        );

        expect(state.value).toBe(55);
    });

    it('converts Hue 0-254 channels to percent', () => {
        const { color, state } = makeColor();

        initializeBrightness(
            color,
            makeData({
                colorLightBrightnessOid: 'channel.brightness',
                colorLightBrightnessOidObject: { maxValue: 254 },
            }),
            makeGetProperty({ colorLightBrightnessOid: 127 }),
        );

        expect(state.value).toBe(50);
    });

    it('leaves the color untouched when no usable state exists', () => {
        const { color, state } = makeColor();

        initializeBrightness(color, makeData({ colorLightBrightnessOid: 'channel.brightness' }), makeGetProperty({}));

        expect(state.value).toBeUndefined();
    });
});

describe('initializeColorFromStates (per light type)', () => {
    it('cct: component 1 reads kelvin, component 2 reads brightness, others stay untouched', () => {
        const data = makeData({
            colorLightTemperatureOid: 'channel.temperature',
            colorLightBrightnessOid: 'channel.brightness',
            colorLightBrightnessOidObject: { maxValue: 100 },
        });
        const getProperty = makeGetProperty({ colorLightTemperatureOid: 5000, colorLightBrightnessOid: 80 });

        const kelvin = makeColor();
        initializeColorFromStates(kelvin.color, 'cct', getProperty, data, 1);
        expect(kelvin.state.kelvin).toBe(5000);
        expect(kelvin.state.value).toBeUndefined();

        const brightness = makeColor();
        initializeColorFromStates(brightness.color, 'cct', getProperty, data, 2);
        expect(brightness.state.value).toBe(80);
        expect(brightness.state.kelvin).toBeUndefined();

        const untouched = makeColor();
        initializeColorFromStates(untouched.color, 'cct', getProperty, data);
        expect(untouched.state).toEqual({});
    });

    it('rgb and rgbcct: apply the hex string, with #ffffff as fallback for empty values', () => {
        for (const type of ['rgb', 'rgbcct'] as const) {
            const data = makeData({ colorLightRgbHexOid: 'channel.rgb' });

            const applied = makeColor();
            initializeColorFromStates(applied.color, type, makeGetProperty({ colorLightRgbHexOid: '#ff0000' }), data);
            expect(applied.state.hexString).toBe('#ff0000');

            const empty = makeColor();
            initializeColorFromStates(empty.color, type, makeGetProperty({ colorLightRgbHexOid: '' }), data);
            expect(empty.state.hexString).toBe('#ffffff');
        }

        // Without a configured hex OID nothing is written.
        const untouched = makeColor();
        initializeColorFromStates(untouched.color, 'rgb', makeGetProperty({}), makeData({}));
        expect(untouched.state).toEqual({});
    });

    it('r/g/b and r/g/b/cct: apply all channels, default missing values to 0', () => {
        for (const type of ['r/g/b', 'r/g/b/cct'] as const) {
            const data = makeData({
                colorLightRedOid: 'channel.red',
                colorLightGreenOid: 'channel.green',
                colorLightBlueOid: 'channel.blue',
            });

            const { color, state } = makeColor();
            initializeColorFromStates(
                color,
                type,
                makeGetProperty({ colorLightRedOid: 10, colorLightGreenOid: 20, colorLightBlueOid: 30 }),
                data,
            );
            expect(state).toEqual({ red: 10, green: 20, blue: 30 });

            const partial = makeColor();
            initializeColorFromStates(
                partial.color,
                type,
                makeGetProperty({ colorLightRedOid: 10, colorLightGreenOid: 20 }),
                data,
            );
            expect(partial.state).toEqual({ red: 10, green: 20, blue: 0 });
        }
    });

    it('r/g/b: requires all three OIDs before touching the color', () => {
        const { color, state } = makeColor();

        initializeColorFromStates(
            color,
            'r/g/b',
            makeGetProperty({ colorLightRedOid: 10, colorLightGreenOid: 20, colorLightBlueOid: 30 }),
            makeData({ colorLightRedOid: 'channel.red', colorLightGreenOid: 'channel.green' }), // blue missing
        );

        expect(state).toEqual({});
    });

    it('h/s/v and h/s/v/cct: apply each channel only when a state exists, with 254 normalization', () => {
        const data = makeData({
            colorLightHueOid: 'channel.hue',
            colorLightSaturationOid: 'channel.saturation',
            colorLightBrightnessOid: 'channel.brightness',
            colorLightSaturationOidObject: { maxValue: 254 },
            colorLightBrightnessOidObject: { maxValue: 100 },
        });

        const { color, state } = makeColor();
        initializeColorFromStates(
            color,
            'h/s/v',
            makeGetProperty({ colorLightHueOid: 120, colorLightSaturationOid: 127, colorLightBrightnessOid: 42 }),
            data,
        );
        // saturation 127 on a 0-254 scale → 50 %.
        expect(state).toEqual({ hue: 120, saturation: 50, value: 42 });

        // Saturation state absent → the other channels still apply.
        const partial = makeColor();
        initializeColorFromStates(
            partial.color,
            'h/s/v/cct',
            makeGetProperty({ colorLightHueOid: 300, colorLightBrightnessOid: 42 }),
            data,
        );
        expect(partial.state).toEqual({ hue: 300, value: 42 });
    });

    it('h/s/v: requires all three OIDs before touching the color', () => {
        const { color, state } = makeColor();

        initializeColorFromStates(
            color,
            'h/s/v',
            makeGetProperty({ colorLightHueOid: 120 }),
            makeData({ colorLightHueOid: 'channel.hue' }), // saturation + brightness missing
        );

        expect(state).toEqual({});
    });

    it('none: leaves the color untouched', () => {
        const { color, state } = makeColor();

        initializeColorFromStates(color, 'none', makeGetProperty({}), makeData({}));

        expect(state).toEqual({});
    });
});
