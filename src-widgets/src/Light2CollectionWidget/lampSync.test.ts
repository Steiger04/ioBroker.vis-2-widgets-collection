/**
 * Light2 lamp sync core — one case per transition.
 *
 * @module Light2CollectionWidget/lampSync.test
 * @remarks
 * The pure transitions behind `useLampSync` (ADR-0108 Nr. 3), with real `iro.Color` (it runs
 * under node). Each transition stands for one former
 * effect of the body (dev @ b2fb111d, `Light2Collection.tsx:432-611`).
 */
import iro from '@jaames/iro';
import { describe, expect, it } from 'vitest';

import { LIGHT2_CHANNEL_FIELDS } from '../lib/light2Channels';
import type { Light2ChannelField } from '../lib/light2Channels';
import type { SyncChannel } from './backendSyncKey';
import type { Light2WidgetData } from './channelMapping';
import {
    applyPickerAction,
    coupleKelvinToBrightness,
    inputStep,
    isCctViewActive,
    pickerTargetOf,
    syncStep,
} from './lampSync';
import type { LampReadContext, LampSyncState, LampSyncStep } from './lampSync';

/** Every Kanal bound to an OID, each with its object (plain percent channels). */
const DATA = {
    colorLightTemperatureOid: 'lamp.ct',
    colorLightTemperatureOidObject: { maxValue: 6500 },
    colorLightRgbHexOid: 'lamp.hex',
    colorLightRgbHexOidObject: {},
    colorLightRedOid: 'lamp.r',
    colorLightRedOidObject: { maxValue: 255 },
    colorLightGreenOid: 'lamp.g',
    colorLightGreenOidObject: { maxValue: 255 },
    colorLightBlueOid: 'lamp.b',
    colorLightBlueOidObject: { maxValue: 255 },
    colorLightHueOid: 'lamp.h',
    colorLightHueOidObject: { maxValue: 360 },
    colorLightSaturationOid: 'lamp.s',
    colorLightSaturationOidObject: { maxValue: 100 },
    colorLightBrightnessOid: 'lamp.v',
    colorLightBrightnessOidObject: { maxValue: 100 },
} as unknown as Light2WidgetData;

/** The Kanal values the reads see (by field name, as `getPropertyValue` resolves them). */
const readContext = (values: Partial<Record<Light2ChannelField, ioBroker.StateValue>> = {}): LampReadContext => ({
    widgetData: DATA,
    getPropertyValue: name => values[name as Light2ChannelField] as ioBroker.StateValue,
});

const BOTH = { main: true, brightness: true };

/**
 * A sync state: the Lichttyp, the view and the Kanäle — `flagged` carry a Signifikante
 * Backend-Änderung with their value, `values` are plain (own or old) values.
 */
const state = (
    type: string,
    cctView: boolean,
    flagged: Partial<Record<Light2ChannelField, unknown>> = {},
    values: Partial<Record<Light2ChannelField, unknown>> = {},
): LampSyncState => {
    const channels = {} as Record<Light2ChannelField, SyncChannel>;
    for (const field of LIGHT2_CHANNEL_FIELDS) {
        channels[field] =
            field in flagged ? { changed: true, value: flagged[field] } : { changed: false, value: values[field] };
    }
    return { type, cctView, channels };
};

describe('isCctViewActive', () => {
    it.each([
        ['cct', false, true],
        ['cct', true, true],
        ['rgbcct', false, false],
        ['rgbcct', true, true],
        ['r/g/b/cct', true, true],
        ['h/s/v/cct', true, true],
        ['rgb', true, false],
        ['h/s/v', true, false],
        ['none', true, false],
        [undefined, true, false],
    ])('%s with the switch on the CCT-Ansicht = %s → %s', (type, selected, expected) => {
        expect(isCctViewActive(type, selected)).toBe(expected);
    });
});

describe('pickerTargetOf (init of a picker)', () => {
    it('reads the Kelvin- and the Helligkeits-Picker in the CCT-Ansicht', () => {
        expect(pickerTargetOf({ type: 'rgbcct', cctView: true }, 'main')).toEqual({
            type: 'rgbcct',
            view: 'cct',
            picker: 'kelvin',
        });
        expect(pickerTargetOf({ type: 'cct', cctView: true }, 'brightness')).toEqual({
            type: 'cct',
            view: 'cct',
            picker: 'brightness',
        });
    });

    it('reads the colour view of the Lichttyp otherwise', () => {
        expect(pickerTargetOf({ type: 'rgbcct', cctView: false }, 'main')).toEqual({ type: 'rgbcct', view: 'color' });
    });
});

describe('syncStep: Fremdänderung Temperatur', () => {
    const idle = state('rgbcct', true, {}, { colorLightTemperatureOid: 3000 });

    it('sets the Kelvin-Picker to the temperature and couples the Helligkeits-Picker', () => {
        const next = state('rgbcct', true, { colorLightTemperatureOid: 4000 });

        expect(syncStep(idle, next, BOTH, readContext())).toEqual({
            actions: [{ kind: 'kelvin', value: 4000 }, { kind: 'couple' }],
            writes: [],
        });
    });

    it('follows a second foreign change while the flag stays true', () => {
        const first = state('cct', true, { colorLightTemperatureOid: 4000 });
        const second = state('cct', true, { colorLightTemperatureOid: 5000 });

        expect(syncStep(first, second, BOTH, readContext()).actions).toEqual([
            { kind: 'kelvin', value: 5000 },
            { kind: 'couple' },
        ]);
    });

    it('does nothing for an own write (no flag), outside the CCT-Ansicht, or without both pickers', () => {
        const ownWrite = state('rgbcct', true, {}, { colorLightTemperatureOid: 4000 });
        expect(syncStep(idle, ownWrite, BOTH, readContext()).actions).toEqual([]);

        const colorView = state('rgbcct', false, { colorLightTemperatureOid: 4000 });
        expect(syncStep(state('rgbcct', false), colorView, BOTH, readContext()).actions).toEqual([]);

        const next = state('rgbcct', true, { colorLightTemperatureOid: 4000 });
        expect(syncStep(idle, next, { main: true, brightness: false }, readContext()).actions).toEqual([]);
    });

    it('ignores a flagged temperature without value', () => {
        const next = state('rgbcct', true, { colorLightTemperatureOid: null });

        expect(syncStep(idle, next, BOTH, readContext()).actions).toEqual([]);
    });
});

describe('syncStep: Fremdänderung Helligkeit', () => {
    it('mirrors the brightness into the Helligkeits-Picker of an „& cct" Lichttyp', () => {
        const prev = state('rgbcct', true);
        const next = state('rgbcct', true, { colorLightBrightnessOid: 40 });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toEqual([
            { kind: 'read', picker: 'brightness', target: { type: 'rgbcct', view: 'cct', picker: 'brightness' } },
        ]);
    });

    it('mirrors the brightness into the Helligkeits-Picker of the Lichttyp cct too, on the Hue-Skala (V1)', () => {
        const prev = state('cct', true);
        const next = state('cct', true, { colorLightBrightnessOid: 127 });
        const step = syncStep(prev, next, BOTH, readContext());

        expect(step.actions).toEqual([
            { kind: 'read', picker: 'brightness', target: { type: 'cct', view: 'cct', picker: 'brightness' } },
        ]);

        // 127 of 254 is 50 % on the Helligkeits-Picker.
        const brightness = new iro.Color({ h: 0, s: 0, v: 100 });
        applyPickerAction(
            step.actions[0],
            { main: null, brightness },
            {
                widgetData: {
                    ...DATA,
                    colorLightBrightnessOidObject: { maxValue: 254 },
                } as unknown as Light2WidgetData,
                getPropertyValue: name => (name === 'colorLightBrightnessOid' ? 127 : null),
            },
        );
        expect(brightness.value).toBe(50);
    });

    it('does nothing in the colour view (the main colour carries the h/s/v brightness there)', () => {
        const prev = state('rgbcct', false);
        const next = state('rgbcct', false, { colorLightBrightnessOid: 40 });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toEqual([]);
    });
});

describe('syncStep: Fremdänderung Hauptfarbe', () => {
    it('mirrors the colour-view Kanäle into the main picker', () => {
        const prev = state('rgb', false);
        const next = state('rgb', false, { colorLightRgbHexOid: '#ff0000' });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toEqual([
            { kind: 'read', picker: 'main', target: { type: 'rgb', view: 'color' } },
        ]);
    });

    it('follows a second foreign change of another Kanal of the same colour', () => {
        const prev = state('r/g/b', false, { colorLightRedOid: 10 });
        const next = state('r/g/b', false, { colorLightRedOid: 10, colorLightGreenOid: 20 });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toHaveLength(1);
    });

    it('leaves the picker alone on an own write to an unflagged Kanal (mid-drag)', () => {
        const prev = state('h/s/v', false, { colorLightHueOid: 120 }, { colorLightSaturationOid: 50 });
        const next = state('h/s/v', false, { colorLightHueOid: 120 }, { colorLightSaturationOid: 60 });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toEqual([]);
    });

    it('does nothing in the CCT-Ansicht', () => {
        const prev = state('rgbcct', true);
        const next = state('rgbcct', true, { colorLightRgbHexOid: '#ff0000' });

        expect(syncStep(prev, next, BOTH, readContext()).actions).toEqual([]);
    });
});

describe('syncStep: Betreten der CCT-Ansicht', () => {
    it('starts both pickers from the temperature, coupled', () => {
        const step = syncStep(
            state('rgbcct', false, {}, { colorLightTemperatureOid: 4000 }),
            state('rgbcct', true, {}, { colorLightTemperatureOid: 4000 }),
            BOTH,
            readContext({ colorLightTemperatureOid: 4000 }),
        );

        expect(step.actions).toEqual([
            { kind: 'read', picker: 'main', target: { type: 'rgbcct', view: 'cct', picker: 'kelvin' } },
            { kind: 'couple' },
        ]);
    });

    /** Entering the CCT-Ansicht of rgbcct with the temperature state `value` (the read sees it too). */
    const enter = (value: ioBroker.StateValue | undefined, data: Light2WidgetData = DATA): LampSyncStep =>
        syncStep(
            state('rgbcct', false, {}, { colorLightTemperatureOid: value }),
            state('rgbcct', true, {}, { colorLightTemperatureOid: value }),
            BOTH,
            { widgetData: data, getPropertyValue: () => value as ioBroker.StateValue },
        );

    it('writes the stored temperature, whole, so the lamp switches to white (not iro’s lossy read-back)', () => {
        expect(enter(4000).writes).toEqual([{ field: 'colorLightTemperatureOid', value: 4000 }]);
        expect(enter('2700').writes).toEqual([{ field: 'colorLightTemperatureOid', value: 2700 }]);
        expect(enter(3989.6).writes).toEqual([{ field: 'colorLightTemperatureOid', value: 3990 }]);
    });

    it.each([
        ['missing', undefined],
        ['null', null],
        ['empty', ''],
        ['blank', '  '],
        ['not numeric', 'warm'],
    ])('writes exactly 2000 K, whole, when the temperature is %s (V2)', (_case, value) => {
        expect(enter(value).writes).toEqual([{ field: 'colorLightTemperatureOid', value: 2000 }]);
    });

    it('writes nothing without a configured temperature Kanal', () => {
        const { colorLightTemperatureOid: _oid, ...withoutOid } = DATA as unknown as Record<string, unknown>;
        const { colorLightTemperatureOidObject: _object, ...withoutObject } = DATA as unknown as Record<
            string,
            unknown
        >;

        expect(enter(undefined, withoutOid as unknown as Light2WidgetData).writes).toEqual([]);
        expect(enter(undefined, withoutObject as unknown as Light2WidgetData).writes).toEqual([]);
    });

    it('re-inits without writing when an „& cct" Lichttyp arrives with the switch already on', () => {
        const step = syncStep(
            state('rgb', false, {}, { colorLightTemperatureOid: 4000 }),
            state('rgbcct', true, {}, { colorLightTemperatureOid: 4000 }),
            BOTH,
            readContext({ colorLightTemperatureOid: 4000 }),
        );

        expect(step).toEqual({
            actions: [
                { kind: 'read', picker: 'main', target: { type: 'rgbcct', view: 'cct', picker: 'kelvin' } },
                { kind: 'couple' },
            ],
            writes: [],
        });
    });

    it('does nothing for the Lichttyp cct (no view switch) or without the Helligkeits-Picker', () => {
        expect(syncStep(state('rgb', false), state('cct', true), BOTH, readContext()).actions).toEqual([]);
        expect(
            syncStep(state('rgbcct', false), state('rgbcct', true), { main: true, brightness: false }, readContext()),
        ).toEqual({ actions: [], writes: [] });
    });

    it('runs after a still-flagged temperature sync of the same render', () => {
        const step = syncStep(
            state('rgbcct', false, { colorLightTemperatureOid: 4000 }),
            state('rgbcct', true, { colorLightTemperatureOid: 4000 }),
            BOTH,
            readContext({ colorLightTemperatureOid: 4000 }),
        );

        expect(step.actions.map(action => action.kind)).toEqual(['kelvin', 'couple', 'read', 'couple']);
    });
});

describe('syncStep: Verlassen der CCT-Ansicht', () => {
    it('reads the brightness, then the colour view into the main picker', () => {
        const step = syncStep(state('r/g/b/cct', true), state('r/g/b/cct', false), BOTH, readContext());

        expect(step).toEqual({
            actions: [
                { kind: 'read', picker: 'main', target: { type: 'r/g/b/cct', view: 'cct', picker: 'brightness' } },
                { kind: 'read', picker: 'main', target: { type: 'r/g/b/cct', view: 'color' } },
            ],
            writes: [],
        });
    });

    /** Leaving the CCT-Ansicht of `type` with the stored Kanal `values`. */
    const leave = (type: string, values: Partial<Record<Light2ChannelField, ioBroker.StateValue>>): LampSyncStep =>
        syncStep(state(type, true, {}, values), state(type, false, {}, values), BOTH, readContext(values));

    it.each([
        ['rgbcct', { colorLightRgbHexOid: '#ff0000' }, [{ field: 'colorLightRgbHexOid', value: '#ff0000' }]],
        [
            'r/g/b/cct',
            { colorLightRedOid: 10, colorLightGreenOid: 20.4, colorLightBlueOid: '30' },
            [
                { field: 'colorLightRedOid', value: 10 },
                { field: 'colorLightGreenOid', value: 20 },
                { field: 'colorLightBlueOid', value: 30 },
            ],
        ],
        [
            'h/s/v/cct',
            { colorLightHueOid: 200, colorLightSaturationOid: 75, colorLightBrightnessOid: 40 },
            [
                { field: 'colorLightHueOid', value: 200 },
                { field: 'colorLightSaturationOid', value: 75 },
                { field: 'colorLightBrightnessOid', value: 40 },
            ],
        ],
    ])('writes the stored colour of %s back, so the lamp switches to colour again', (type, values, writes) => {
        expect(leave(type, values).writes).toEqual(writes);
    });

    it('skips a colour Kanal without OID, object or usable value', () => {
        const { colorLightGreenOidObject: _object, ...withoutGreenObject } = DATA as unknown as Record<string, unknown>;
        const values = { colorLightRedOid: 10, colorLightGreenOid: 20, colorLightBlueOid: '' };
        const step = syncStep(state('r/g/b/cct', true, {}, values), state('r/g/b/cct', false, {}, values), BOTH, {
            widgetData: withoutGreenObject as unknown as Light2WidgetData,
            getPropertyValue: name => values[name as keyof typeof values] as ioBroker.StateValue,
        });

        expect(step.writes).toEqual([{ field: 'colorLightRedOid', value: 10 }]);
        expect(leave('rgbcct', { colorLightRgbHexOid: '  ' }).writes).toEqual([]);
    });

    it('does nothing when the Lichttyp loses its view switch', () => {
        expect(syncStep(state('rgbcct', true), state('rgb', false), BOTH, readContext()).actions).toEqual([]);
    });
});

describe('syncStep: mount', () => {
    it('syncs a flagged Kanal of mounted pickers on the first run', () => {
        expect(
            syncStep(undefined, state('rgb', false, { colorLightRgbHexOid: '#00ff00' }), BOTH, readContext()),
        ).toEqual({
            actions: [{ kind: 'read', picker: 'main', target: { type: 'rgb', view: 'color' } }],
            writes: [],
        });
    });

    it('does nothing without mounted pickers', () => {
        expect(
            syncStep(
                undefined,
                state('rgb', false, { colorLightRgbHexOid: '#00ff00' }),
                { main: false, brightness: false },
                readContext(),
            ),
        ).toEqual({ actions: [], writes: [] });
    });
});

describe('inputStep: Ziehen', () => {
    const kelvinColor = (): iro.Color => {
        const color = new iro.Color('#ffffff');
        color.kelvin = 4000;
        return color;
    };

    it('the Kelvin-Picker writes the rounded temperature and couples (Kelvin-Kopplung)', () => {
        expect(inputStep({ type: 'cct', cctView: true }, 'main', kelvinColor(), undefined, DATA)).toEqual({
            actions: [{ kind: 'couple' }],
            writes: [{ field: 'colorLightTemperatureOid', value: 3989 }],
        });
    });

    it('the Helligkeits-Picker writes the brightness, uncoupled', () => {
        const color = new iro.Color({ h: 0, s: 0, v: 66.6 });

        expect(inputStep({ type: 'rgbcct', cctView: true }, 'brightness', color, undefined, DATA)).toEqual({
            actions: [],
            writes: [{ field: 'colorLightBrightnessOid', value: 67 }],
        });
    });

    it('the main picker of the colour view writes its Kanäle, gated by the HSV flags', () => {
        const color = new iro.Color({ h: 120.4, s: 33.3, v: 66.6 });

        expect(inputStep({ type: 'h/s/v/cct', cctView: false }, 'main', color, { h: true }, DATA)).toEqual({
            actions: [],
            writes: [{ field: 'colorLightHueOid', value: 120 }],
        });
    });

    it('does nothing without a Lichttyp or without Kanäle', () => {
        expect(inputStep({ type: undefined, cctView: false }, 'main', kelvinColor(), undefined, DATA)).toBeNull();
        expect(inputStep({ type: 'none', cctView: false }, 'main', kelvinColor(), undefined, DATA)).toEqual({
            actions: [],
            writes: [],
        });
    });
});

describe('Kelvin-Kopplung', () => {
    it('gives the Helligkeits-Picker the Kelvin colour and keeps its brightness', () => {
        const kelvin = new iro.Color('#ffffff');
        kelvin.kelvin = 2700;
        const brightness = new iro.Color({ h: 0, s: 0, v: 40 });

        coupleKelvinToBrightness(kelvin, brightness);

        expect(brightness.value).toBe(40);
        expect(brightness.hue).toBeCloseTo(kelvin.hue, 5);
        expect(brightness.saturation).toBeCloseTo(kelvin.saturation, 5);
    });
});

describe('applyPickerAction', () => {
    it('mirrors a read into the picker colour and sets a temperature on the Kelvin-Picker', () => {
        const main = new iro.Color('#ffffff');
        const colors = { main, brightness: null };

        applyPickerAction(
            { kind: 'read', picker: 'main', target: { type: 'rgb', view: 'color' } },
            colors,
            readContext({ colorLightRgbHexOid: '#ff0000' }),
        );
        expect(main.hexString).toBe('#ff0000');

        applyPickerAction({ kind: 'kelvin', value: 4000 }, colors, readContext());
        expect(main.kelvin).toBeCloseTo(3989.12, 2);
    });

    it('skips an action on a missing picker', () => {
        const main = new iro.Color('#ffffff');

        applyPickerAction({ kind: 'couple' }, { main, brightness: null }, readContext());
        applyPickerAction(
            { kind: 'read', picker: 'brightness', target: { type: 'cct', view: 'cct', picker: 'brightness' } },
            { main, brightness: null },
            readContext({ colorLightBrightnessOid: 10 }),
        );

        expect(main.hexString).toBe('#ffffff');
    });
});
