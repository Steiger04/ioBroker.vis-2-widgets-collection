/**
 * Light2's switch-OID pick: the two Zustandszeilen of the button mode (Tastenmodus).
 *
 * @module lib/light2Fields.test
 * @remarks
 * Observed through the field's public contract: what its `onChange` hands to vis-2's
 * `changeData`. The socket (object database) is the system boundary and is faked. The pick
 * seeds the two rows TRUE/FALSE with the power icon — supplementing like the main-OID pick
 * (ADR-0104 §6, Nachtrag Ticket 02): rows the user already has keep order, alias and styles.
 */
import { describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

// The field lists render CollectionDivider and colour fields, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The handler under test never renders them.
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));

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
