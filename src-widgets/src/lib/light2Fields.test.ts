/**
 * Light2's switch-OID pick: the two Zustandszeilen of the button mode.
 *
 * @module lib/light2Fields.test
 * @remarks
 * Observed through the field's public contract: what its `onChange` hands to vis-2's
 * `changeData`. The socket (object database) is the system boundary and is faked. The pick
 * seeds the two rows TRUE/FALSE with the power icon — supplementing like the main-OID pick
 * (ADR-0104 §6, Nachtrag Ticket 02): rows the user already has keep order, alias and styles.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

import light2Fields from './light2Fields';

const SWITCH = 'hue.0.lamp.on';

const SWITCH_OBJECT = {
    _id: SWITCH,
    type: 'state',
    common: { name: 'On', type: 'boolean', role: 'switch.light', read: true, write: true },
};

/** A channel state of the given role — what the object database holds next to the switch. */
const channelState = (id: string, role: string, type = 'number'): Record<string, unknown> => ({
    _id: id,
    type: 'state',
    common: { name: id, type, role, read: true, write: true },
});

/** A fake object database holding the given channel (default: only the switch). */
const socketWith = (channel: Record<string, unknown>[] = [SWITCH_OBJECT]): Connection =>
    ({
        getObject: (id: string): Promise<unknown> => Promise.resolve(channel.find(object => object._id === id)),
        getObjectView: (): Promise<unknown> =>
            Promise.resolve(Object.fromEntries(channel.map(object => [object._id, object]))),
    }) as unknown as Connection;

const switchField = light2Fields().find(
    field => field.name === 'colorLightSwitchOid',
) as RxWidgetInfoAttributesField & {
    onChange: (
        field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ) => Promise<void>;
};

/** Runs one pick of the switch OID and returns the data the handler hands to vis-2. */
async function pickSwitch(data: WidgetData, socket = socketWith(), oid = SWITCH): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    await switchField.onChange(
        switchField,
        { ...data, colorLightSwitchOid: oid },
        newData => {
            emitted = newData;
        },
        socket,
    );
    if (!emitted) {
        throw new Error('the switch pick did not reach changeData');
    }
    return emitted;
}

/** The rows 1..values_count as `[value, alias, iconColor, iconSize]`. */
const rowsOf = (data: WidgetData): unknown[][] =>
    Array.from({ length: data.values_count as number }, (_, i) => [
        data[`value${i + 1}`],
        data[`alias${i + 1}`],
        data[`iconColor${i + 1}`],
        data[`iconSize${i + 1}`],
    ]);

describe('Light2 switch-OID pick — the two rows of the button mode', () => {
    it('seeds TRUE/FALSE with the red/green power icon on a first pick', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });

        expect(rowsOf(picked)).toEqual([
            [true, 'TRUE', 'red', 100],
            [false, 'FALSE', 'green', 100],
        ]);
        expect(picked.iconSmall1).toMatch(/^data:image\/svg\+xml/);
        expect(picked.iconSmall2).toBe(picked.iconSmall1);
        expect(picked.iconSize).toBe(0);
        expect(picked.ignoreCommonStates).toBe(false);
    });

    it('keeps order, alias and styles of the rows on a re-pick', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });
        const edited = {
            ...picked,
            iconSize: 50,
            value1: false,
            alias1: 'Aus',
            iconColor1: 'blue',
            iconSize1: 80,
            value2: true,
            alias2: 'An',
            iconColor2: 'yellow',
            iconSize2: 80,
        };

        const repicked = await pickSwitch(edited);

        expect(rowsOf(repicked)).toEqual([
            [false, 'Aus', 'blue', 80],
            [true, 'An', 'yellow', 80],
        ]);
        expect(repicked.iconSize).toBe(50);
    });

    it('appends only the missing row, with its power icon', async () => {
        const repicked = await pickSwitch({
            colorLightButton: true,
            values_count: 1,
            value1: true,
            alias1: 'An',
            iconColor1: 'blue',
            iconSize: 50,
        });

        expect(rowsOf(repicked)).toEqual([
            [true, 'An', 'blue', undefined],
            [false, 'FALSE', 'green', 100],
        ]);
        expect(repicked.iconSize).toBe(50);
    });

    it('seeds both rows with the power icon when the switch declares common.states', async () => {
        const statedSwitch = {
            ...SWITCH_OBJECT,
            common: { ...SWITCH_OBJECT.common, states: { true: 'An', false: 'Aus' } },
        };

        const picked = await pickSwitch({ colorLightButton: true }, socketWith([statedSwitch]));

        expect(picked.values_count).toBe(2);
        expect([picked.alias1, picked.alias2]).toEqual(['An', 'Aus']);
        expect([picked.value1, picked.iconColor1, picked.iconSize1]).toEqual([true, 'red', 100]);
        expect([picked.value2, picked.iconColor2, picked.iconSize2]).toEqual([false, 'green', 100]);
        expect(picked.iconSmall1).toMatch(/^data:image\/svg\+xml/);
        expect(picked.iconSize).toBe(0);
    });
});

describe('Light2 switch-OID pick — the channel states it detects', () => {
    const DIMMER = 'hue.0.lamp.level';
    const CT = 'hue.0.lamp.ct';

    it('fills the empty channel fields from the roles in the channel', async () => {
        const picked = await pickSwitch(
            { colorLightButton: false, colorLightTemperatureOid: 'nothing_selected' },
            socketWith([
                SWITCH_OBJECT,
                channelState(DIMMER, 'level.dimmer'),
                channelState(CT, 'level.color.temperature'),
            ]),
        );

        expect(picked.colorLightBrightnessOid).toBe(DIMMER);
        expect(picked.colorLightTemperatureOid).toBe(CT);
        expect(picked.colorLightBrightnessOidObject).toMatchObject({ _id: DIMMER });
    });

    it('keeps a channel field the user already chose', async () => {
        const picked = await pickSwitch(
            { colorLightButton: false, colorLightBrightnessOid: 'zigbee.0.my.dimmer' },
            socketWith([SWITCH_OBJECT, channelState(DIMMER, 'level.dimmer')]),
        );

        expect(picked.colorLightBrightnessOid).toBe('zigbee.0.my.dimmer');
    });

    /** A colour-temperature state that declares its range in `common.min`/`common.max`. */
    const rangedCt = (id: string, min?: number, max?: number): Record<string, unknown> => {
        const state = channelState(id, 'level.color.temperature');
        return { ...state, common: { ...(state.common as object), min, max } };
    };

    // vis-2 stores the schema defaults 2000/6500 when the widget is created, so the CT range of a
    // fresh widget is never empty when the switch is picked.
    const FRESH_WIDGET = {
        colorLightButton: false,
        colorLightTemperatureOid: 'nothing_selected',
        colorLightCtMin: 2000,
        colorLightCtMax: 6500,
    };

    it('takes the CT range of a newly detected temperature state over the stored defaults', async () => {
        const picked = await pickSwitch(FRESH_WIDGET, socketWith([SWITCH_OBJECT, rangedCt(CT, 2200, 6000)]));

        expect(picked.colorLightTemperatureOid).toBe(CT);
        expect([picked.colorLightCtMin, picked.colorLightCtMax]).toEqual([2200, 6000]);
    });

    it('keeps the CT range when the detected temperature state declares none', async () => {
        const picked = await pickSwitch(FRESH_WIDGET, socketWith([SWITCH_OBJECT, rangedCt(CT)]));

        expect(picked.colorLightTemperatureOid).toBe(CT);
        expect([picked.colorLightCtMin, picked.colorLightCtMax]).toEqual([2000, 6500]);
    });

    it('takes only the bound the detected temperature state declares', async () => {
        const picked = await pickSwitch(FRESH_WIDGET, socketWith([SWITCH_OBJECT, rangedCt(CT, undefined, 6000)]));

        expect([picked.colorLightCtMin, picked.colorLightCtMax]).toEqual([2000, 6000]);
    });

    it('keeps a temperature OID the user chose together with its CT range', async () => {
        const picked = await pickSwitch(
            {
                ...FRESH_WIDGET,
                colorLightTemperatureOid: 'zigbee.0.my.ct',
                colorLightCtMin: 2700,
                colorLightCtMax: 5000,
            },
            socketWith([SWITCH_OBJECT, rangedCt(CT, 2200, 6000)]),
        );

        expect(picked.colorLightTemperatureOid).toBe('zigbee.0.my.ct');
        expect([picked.colorLightCtMin, picked.colorLightCtMax]).toEqual([2700, 5000]);
    });

    it('keeps the picked switch OID although another state of the channel has the role switch.light', async () => {
        const picked = await pickSwitch(
            { colorLightButton: true, values_count: 0 },
            socketWith([SWITCH_OBJECT, channelState('hue.0.lamp.power', 'switch.light', 'boolean')]),
        );

        expect(picked.colorLightSwitchOid).toBe(SWITCH);
        expect(picked.colorLightSwitchOidObject).toMatchObject({ _id: SWITCH, type: 'boolean' });
    });

    it('stores the switch object and seeds the rows when the picked switch has another role', async () => {
        const plainSwitch = 'zigbee.0.plug.state';
        const picked = await pickSwitch(
            { colorLightButton: true, values_count: 0 },
            socketWith([channelState(plainSwitch, 'switch', 'boolean'), channelState(DIMMER, 'level.dimmer')]),
            plainSwitch,
        );

        expect(picked.colorLightSwitchOidObject).toMatchObject({ _id: plainSwitch, type: 'boolean' });
        expect(rowsOf(picked)).toEqual([
            [true, 'TRUE', 'red', 100],
            [false, 'FALSE', 'green', 100],
        ]);
    });
});

describe('Light2 switch-OID pick — emptying the switch', () => {
    it('drops the switch object and keeps the rows when the switch OID is emptied', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });

        const emptied = await pickSwitch(picked, socketWith(), '');

        expect(emptied.colorLightSwitchOidObject).toBeUndefined();
        expect(rowsOf(emptied)).toEqual(rowsOf(picked));
    });

    it('drops the switch object when the picked OID does not resolve', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });

        const unresolved = await pickSwitch(picked, socketWith(), 'hue.0.gone.on');

        expect(unresolved.colorLightSwitchOidObject).toBeUndefined();
        expect(rowsOf(unresolved)).toEqual(rowsOf(picked));
    });
});

describe('Light2 id fields — the object dialog offers only the allowed types (ADR-0111 Nr. 4)', () => {
    const idFields = light2Fields().filter(
        field => (field as { type?: string }).type === 'id',
    ) as (RxWidgetInfoAttributesField & { filter?: unknown })[];

    it('covers the switch and all eight channels', () => {
        expect(idFields.map(field => field.name)).toEqual([
            'colorLightSwitchOid',
            'colorLightTemperatureOid',
            'colorLightRgbHexOid',
            'colorLightRedOid',
            'colorLightGreenOid',
            'colorLightBlueOid',
            'colorLightHueOid',
            'colorLightSaturationOid',
            'colorLightBrightnessOid',
        ]);
    });

    it.each(idFields.map(field => [field.name, field] as const))('%s filters on the Light2 OID types', (_, field) => {
        expect(field.filter).toEqual({ common: { type: ['boolean', 'number', 'string', 'mixed'] } });
    });
});

describe('Light2 id fields — what the panel shows stays', () => {
    /** What the panel shows, literally: the factory's default label is the data property. */
    const LABELS = [
        ['colorLightSwitchOid', 'color_light_switch_oid'],
        ['colorLightTemperatureOid', 'color_light_temperature_oid'],
        ['colorLightRgbHexOid', 'color_light_rgb_hex_oid'],
        ['colorLightRedOid', 'color_light_red_oid'],
        ['colorLightGreenOid', 'color_light_green_oid'],
        ['colorLightBlueOid', 'color_light_blue_oid'],
        ['colorLightHueOid', 'color_light_hue_oid'],
        ['colorLightSaturationOid', 'color_light_saturation_oid'],
        ['colorLightBrightnessOid', 'color_light_brightness_oid'],
    ];

    it.each(LABELS)('%s keeps its label', (name, label) => {
        expect(light2Fields().find(field => field.name === name)).toMatchObject({ label });
    });
});

describe('Light2 channel pick in the panel — an auxiliary OID like every other (ADR-0111 Nr. 1)', () => {
    const CHANNELS = [
        'colorLightTemperatureOid',
        'colorLightRgbHexOid',
        'colorLightRedOid',
        'colorLightGreenOid',
        'colorLightBlueOid',
        'colorLightHueOid',
        'colorLightSaturationOid',
        'colorLightBrightnessOid',
    ];

    const OLD = 'hue.0.other.level';
    const USABLE = 'hue.0.lamp.level';
    const REJECTED = 'hue.0.lamp.scene';

    /** A widget in use: nothing of this may change on a channel pick. */
    const WIDGET = {
        colorLightButton: true,
        colorLightSwitchOid: SWITCH,
        colorLightSwitchOidObject: { _id: SWITCH, type: 'boolean' },
        colorLightCtMin: 2000,
        colorLightCtMax: 6500,
        icon: 'button.png',
        write: false,
        unit: 'kWh',
        onlyDisplay: true,
        iconSize: 0,
        values_count: 2,
        value1: true,
        alias1: 'An',
        value2: false,
        alias2: 'Aus',
    };

    const usableState = channelState(USABLE, 'level.color.temperature');
    const database = socketWith([
        // Declares a range: only the Kanalerkennung brings one along, a panel pick must not.
        { ...usableState, common: { ...(usableState.common as object), min: 2200, max: 6000 } },
        channelState(REJECTED, 'level.dimmer', 'object'),
    ]);
    const failingSocket = {
        getObject: (): Promise<unknown> => Promise.reject(new Error('socket down')),
    } as unknown as Connection;

    /** Runs one panel pick of the channel, the way vis-2 calls it: through the field's `onChange`. */
    async function pickChannel(name: string, data: WidgetData, socket: Connection): Promise<WidgetData> {
        const field = light2Fields().find(candidate => candidate.name === name) as typeof switchField;
        let emitted: WidgetData | undefined;
        await field.onChange(
            field,
            data,
            newData => {
                emitted = newData;
            },
            socket,
        );
        vi.runAllTimers();
        if (!emitted) {
            throw new Error(`the ${name} pick did not reach changeData`);
        }
        return emitted;
    }

    beforeEach(() => {
        vi.useFakeTimers();
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    describe.each(CHANNELS)('%s', name => {
        const OBJECT_KEY = `${name}Object`;
        /** The channel bound to another state: the object a write would still go to. */
        const BOUND = { ...WIDGET, [name]: OLD, [OBJECT_KEY]: { _id: OLD, type: 'number' } };

        it('a usable pick stores its object, and only that', async () => {
            expect(await pickChannel(name, { ...BOUND, [name]: USABLE }, database)).toEqual({
                ...WIDGET,
                [name]: USABLE,
                [OBJECT_KEY]: expect.objectContaining({ _id: USABLE, type: 'number', write: true }),
            });
        });

        it.each([
            { how: 'a rejected type', id: REJECTED, socket: database },
            { how: 'an id that does not resolve', id: 'hue.0.la', socket: database },
            { how: 'a socket error', id: USABLE, socket: failingSocket },
            { how: 'an emptied field', id: '', socket: database },
        ])('$how drops the old object, and only that', async ({ id, socket }) => {
            expect(await pickChannel(name, { ...BOUND, [name]: id }, socket)).toEqual({ ...WIDGET, [name]: id });
        });
    });
});

describe('Light2 switch-OID pick — without a usable object (ADR-0111 Nr. 3)', () => {
    const DIMMER = 'hue.0.lamp.level';
    const REJECTED = 'hue.0.lamp.scene';
    /** A state of a type no Light2 OID may have, next to a channel state of a matching role. */
    const rejectedChannel = (): Connection =>
        socketWith([channelState(REJECTED, 'switch.light', 'object'), channelState(DIMMER, 'level.dimmer')]);
    const failingSocket = {
        getObject: (): Promise<unknown> => Promise.reject(new Error('socket down')),
        getObjectView: (): Promise<unknown> => Promise.resolve({ [DIMMER]: channelState(DIMMER, 'level.dimmer') }),
    } as unknown as Connection;

    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe.each([
        { how: 'a rejected type', socket: rejectedChannel },
        { how: 'a socket error', socket: (): Connection => failingSocket },
    ])('$how', ({ socket }) => {
        it('fills neither rows nor channels on a first pick', async () => {
            const picked = await pickSwitch({ colorLightButton: true, values_count: 0 }, socket(), REJECTED);

            expect(picked.values_count).toBe(0);
            expect(picked.value1).toBeUndefined();
            expect(picked.iconSize).toBeUndefined();
            expect(picked.colorLightBrightnessOid).toBeUndefined();
            expect(picked.colorLightSwitchOidObject).toBeUndefined();
        });

        it('keeps the rows and the channel fields of a working widget and drops the switch object', async () => {
            const working = await pickSwitch(
                { colorLightButton: true, values_count: 0 },
                socketWith([SWITCH_OBJECT, channelState('hue.0.lamp.ct', 'level.color.temperature')]),
            );

            const rejected = await pickSwitch(working, socket(), REJECTED);

            expect(rowsOf(rejected)).toEqual(rowsOf(working));
            expect(rejected.colorLightTemperatureOid).toBe('hue.0.lamp.ct');
            expect(rejected.colorLightBrightnessOid).toBeUndefined();
            expect(rejected.colorLightSwitchOid).toBe(REJECTED);
            expect(rejected.colorLightSwitchOidObject).toBeUndefined();
        });
    });
});
