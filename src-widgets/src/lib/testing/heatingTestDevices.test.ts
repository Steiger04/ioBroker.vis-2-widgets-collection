/**
 * The invariants of the heating test devices, checked on the data.
 *
 * @module lib/testing/heatingTestDevices.test
 * @remarks
 * The test devices stand in for the object database and the state values behind the faked
 * socket of the editor and widget seams, and later for the dev-server copy. These checks hold
 * the data to the invariants the tests rely on: the object hierarchy device → channel → state
 * (1), one state per meaning on the neutral device (2), the baits and the ambiguity cases (4),
 * the literal extract of the installation (5) and writability like the original with nothing
 * reacting (6). „No hint-table hit“ (3) needs the hint table and is checked where it lives.
 */
import { describe, expect, it } from 'vitest';

import {
    AMBIGUOUS_DEVICE,
    ANLAGE_FALMOT,
    ANLAGE_WTH2,
    HEATING_TEST_PREFIX,
    NEUTRAL_DEVICE,
    NEUTRAL_PAIR_DEVICE,
    STUMP_DEVICE,
    heatingTestDevices,
    valuesOf,
} from './heatingTestDevices';

const { objects, states } = heatingTestDevices();

/** The id one level up. */
const parentOf = (id: string): string => id.slice(0, id.lastIndexOf('.'));

/** The state objects below a device (by its id relative to the prefix). */
const statesOf = (device: string): ioBroker.StateObject[] =>
    Object.values(objects).filter(
        (object): object is ioBroker.StateObject =>
            object.type === 'state' && object._id.startsWith(`${HEATING_TEST_PREFIX}${device}.`),
    );

/** The state objects of a device carrying the given role. */
const withRole = (device: string, role: string): ioBroker.StateObject[] =>
    statesOf(device).filter(object => object.common.role === role);

/** The channel (relative to the device) a state of the device sits in. */
const channelOf = (device: string, id: string): string => parentOf(id).slice(`${HEATING_TEST_PREFIX}${device}.`.length);

/** The labels of a value list, in order of the device values. */
const labelsOf = (object: ioBroker.StateObject): unknown[] => Object.values(object.common.states ?? {});

const DEVICES = [
    NEUTRAL_DEVICE.id,
    NEUTRAL_PAIR_DEVICE.id,
    STUMP_DEVICE.id,
    AMBIGUOUS_DEVICE.id,
    ANLAGE_WTH2.id,
    ANLAGE_FALMOT.id,
];

describe('heating test devices — invariant 1: device → channel → state', () => {
    it('holds exactly the six devices', () => {
        const devices = Object.values(objects)
            .filter(object => object.type === 'device')
            .map(object => object._id);

        expect(devices.sort()).toEqual(DEVICES.map(device => `${HEATING_TEST_PREFIX}${device}`).sort());
    });

    it('puts every state in a channel and every channel in a device', () => {
        for (const object of Object.values(objects)) {
            if (object.type === 'state') {
                expect(objects[parentOf(object._id)]?.type, object._id).toBe('channel');
            }
            if (object.type === 'channel') {
                expect(objects[parentOf(object._id)]?.type, object._id).toBe('device');
            }
        }
    });

    it('keys every object by its own id below the prefix', () => {
        for (const [id, object] of Object.entries(objects)) {
            expect(object._id).toBe(id);
            expect(id.startsWith(HEATING_TEST_PREFIX)).toBe(true);
        }
    });

    it('carries a value for every state object and for nothing else', () => {
        const stateIds = Object.values(objects)
            .filter(object => object.type === 'state')
            .map(object => object._id);

        expect(Object.keys(states).sort()).toEqual(stateIds.sort());
    });

    it('spreads the neutral device over at least two channels', () => {
        const channels = new Set(statesOf(NEUTRAL_DEVICE.id).map(object => channelOf(NEUTRAL_DEVICE.id, object._id)));

        expect(channels.size).toBeGreaterThanOrEqual(2);
    });

    it('moves every id under another prefix', () => {
        const moved = heatingTestDevices('test.0.heating.');

        expect(Object.keys(moved.objects)).toHaveLength(Object.keys(objects).length);
        for (const [id, object] of Object.entries(moved.objects)) {
            expect(id.startsWith('test.0.heating.')).toBe(true);
            expect(object._id).toBe(id);
        }
        expect(Object.keys(moved.states).every(id => id.startsWith('test.0.heating.'))).toBe(true);
    });
});

describe('heating test devices — invariant 2: one state per meaning on the neutral device', () => {
    /** The STATE_ROLES role per meaning of the stage-1 subset that has one. */
    const ROLE_OF: Record<string, string> = {
        soll: 'level.temperature',
        ist: 'value.temperature',
        luftfeuchte: 'value.humidity',
        betriebsart: 'level.mode.thermostat',
        boost: 'switch.mode.boost',
        fenster: 'value.window',
        erreichbarkeit: 'indicator.reachable',
        batterieSchwach: 'indicator.lowbat',
        batteriestand: 'value.battery',
        ventil: 'value.valve',
    };

    it.each(Object.entries(ROLE_OF))('carries exactly one state for %s (%s)', (meaning, role) => {
        const candidates = withRole(NEUTRAL_DEVICE.id, role);

        expect(candidates).toHaveLength(1);
        expect(candidates[0]._id).toBe(`${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.binding[meaning]}`);
    });

    it('names a state for every meaning with a role, and only those', () => {
        expect(Object.keys(NEUTRAL_DEVICE.binding).sort()).toEqual(Object.keys(ROLE_OF).sort());
    });

    it('gives the mode the STATE_ROLES value list AUTO/MANUAL/VACATION', () => {
        const [mode] = withRole(NEUTRAL_DEVICE.id, 'level.mode.thermostat');

        expect(labelsOf(mode)).toEqual(['AUTO', 'MANUAL', 'VACATION']);
    });

    it('gives the window the STATE_ROLES value list CLOSED/TILTED/OPEN', () => {
        const [window] = withRole(NEUTRAL_DEVICE.id, 'value.window');

        expect(labelsOf(window)).toEqual(['CLOSED', 'TILTED', 'OPEN']);
    });

    it('holds no state beyond the meanings and the baits', () => {
        const named = [...Object.values(NEUTRAL_DEVICE.binding), ...Object.values(NEUTRAL_DEVICE.baits)].map(
            id => `${HEATING_TEST_PREFIX}${id}`,
        );

        expect(
            statesOf(NEUTRAL_DEVICE.id)
                .map(object => object._id)
                .sort(),
        ).toEqual(named.sort());
    });

    it('reports every value of the neutral device', () => {
        for (const object of statesOf(NEUTRAL_DEVICE.id)) {
            expect(states[object._id].q, object._id).toBe(0);
            expect(states[object._id].ack, object._id).toBe(true);
        }
    });
});

describe('heating test devices — the neutral pair device', () => {
    const relative = (object: ioBroker.StateObject): string =>
        object._id.slice(`${HEATING_TEST_PREFIX}${NEUTRAL_PAIR_DEVICE.id}`.length);

    it('carries the neutral device and the mode command, nothing else', () => {
        const neutral = statesOf(NEUTRAL_DEVICE.id).map(object =>
            object._id.slice(`${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.id}`.length),
        );

        expect(statesOf(NEUTRAL_PAIR_DEVICE.id).map(relative).sort()).toEqual(
            [...neutral, '.thermostat.modeCommand'].sort(),
        );
    });

    it('puts a write-only mode command of a generic role with the mode value list into the mode channel', () => {
        const mode = objects[
            `${HEATING_TEST_PREFIX}${NEUTRAL_PAIR_DEVICE.binding.betriebsart}`
        ] as ioBroker.StateObject;
        const command = objects[
            `${HEATING_TEST_PREFIX}${NEUTRAL_PAIR_DEVICE.binding.betriebsartSetzen}`
        ] as ioBroker.StateObject;

        expect(command.common).toMatchObject({ role: 'level', type: 'number', read: false, write: true });
        expect(command.common.states).toEqual(mode.common.states);
        expect(mode.common.role).toBe('level.mode.thermostat');
        expect(parentOf(command._id)).toBe(parentOf(mode._id));
    });
});

describe('heating test devices — the stump device', () => {
    it('carries only the set point and the actual temperature', () => {
        const roles = statesOf(STUMP_DEVICE.id).map(object => object.common.role);

        expect(roles.sort()).toEqual(['level.temperature', 'value.temperature']);
        expect(objects[`${HEATING_TEST_PREFIX}${STUMP_DEVICE.binding.soll}`].common).toMatchObject({
            role: 'level.temperature',
        });
        expect(objects[`${HEATING_TEST_PREFIX}${STUMP_DEVICE.binding.ist}`].common).toMatchObject({
            role: 'value.temperature',
        });
    });
});

describe('heating test devices — invariant 4: baits and ambiguity', () => {
    it('baits the boost remaining time with the generic value.timer', () => {
        const bait = objects[`${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.baits.boostRestzeit}`] as ioBroker.StateObject;

        expect(bait.common).toMatchObject({ role: 'value.timer', type: 'number' });
    });

    it.each(['urlaubBeginn', 'urlaubEnde'])('baits the holiday time %s as plain text', key => {
        const bait = objects[`${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.baits[key]}`] as ioBroker.StateObject;

        expect(bait.common).toMatchObject({ role: 'text', type: 'string' });
    });

    it('resolves one candidate in the set point channel against one elsewhere in the device', () => {
        const { role, inSetPointChannel, elsewhere } = AMBIGUOUS_DEVICE.resolvedByChannel;
        const soll = `${HEATING_TEST_PREFIX}${AMBIGUOUS_DEVICE.soll}`;
        const candidates = withRole(AMBIGUOUS_DEVICE.id, role).map(object => object._id);

        expect(candidates.sort()).toEqual(
            [`${HEATING_TEST_PREFIX}${inSetPointChannel}`, `${HEATING_TEST_PREFIX}${elsewhere}`].sort(),
        );
        expect(parentOf(`${HEATING_TEST_PREFIX}${inSetPointChannel}`)).toBe(parentOf(soll));
        expect(parentOf(`${HEATING_TEST_PREFIX}${elsewhere}`)).not.toBe(parentOf(soll));
    });

    it('leaves several candidates outside the set point channel and none inside', () => {
        const { role, candidates } = AMBIGUOUS_DEVICE.unresolved;
        const soll = `${HEATING_TEST_PREFIX}${AMBIGUOUS_DEVICE.soll}`;
        const found = withRole(AMBIGUOUS_DEVICE.id, role).map(object => object._id);

        expect(candidates.length).toBeGreaterThanOrEqual(2);
        expect(found.sort()).toEqual(candidates.map(id => `${HEATING_TEST_PREFIX}${id}`).sort());
        expect(found.every(id => parentOf(id) !== parentOf(soll))).toBe(true);
    });

    it('keeps the set point unique on the ambiguous device', () => {
        expect(withRole(AMBIGUOUS_DEVICE.id, 'level.temperature').map(object => object._id)).toEqual([
            `${HEATING_TEST_PREFIX}${AMBIGUOUS_DEVICE.soll}`,
        ]);
    });
});

describe('heating test devices — invariant 5: the installation extract', () => {
    it('holds the WTH-2 whole: 8 channels, 37 states, the _ALARM states included', () => {
        const channels = Object.values(objects).filter(
            object => object.type === 'channel' && parentOf(object._id) === `${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}`,
        );
        const wth2 = statesOf(ANLAGE_WTH2.id);

        expect(channels).toHaveLength(8);
        expect(wth2).toHaveLength(37);
        expect(wth2.filter(object => object._id.endsWith('_ALARM'))).toHaveLength(4);
    });

    it('holds the FALMOT whole: 17 channels, 173 states, the dew point and humidity alarm baits included', () => {
        const channels = Object.values(objects).filter(
            object => object.type === 'channel' && parentOf(object._id) === `${HEATING_TEST_PREFIX}${ANLAGE_FALMOT.id}`,
        );
        const falmot = statesOf(ANLAGE_FALMOT.id).map(object => object._id);

        expect(channels).toHaveLength(17);
        expect(falmot).toHaveLength(173);
        expect(falmot).toContain(`${HEATING_TEST_PREFIX}${ANLAGE_FALMOT.id}.0.HUMIDITY_ALARM`);
        expect(falmot).toContain(`${HEATING_TEST_PREFIX}${ANLAGE_FALMOT.id}.1.DEW_POINT_ALARM`);
    });

    it('names the WTH-2 without a person: „Thermostat Bad“', () => {
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}`].common.name).toBe('Thermostat Bad');
    });

    it('keeps the channel types the hint table reads', () => {
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.0`].native.TYPE).toBe('MAINTENANCE');
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.1`].native.TYPE).toBe(
            'HEATING_CLIMATECONTROL_TRANSCEIVER',
        );
    });

    it('carries the not-yet-reported placeholder of the export (q = 0x20 with 0 / 4.5)', () => {
        const at = (name: string): ioBroker.State | Partial<ioBroker.State> =>
            states[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.1.${name}`];

        expect(at('SET_POINT_TEMPERATURE')).toMatchObject({ val: 4.5, q: 0x20 });
        expect(at('ACTUAL_TEMPERATURE')).toMatchObject({ val: 0, q: 0x20 });
    });

    it('references only the invented serial numbers in ids and native addresses', () => {
        const invented = [ANLAGE_WTH2.id, ANLAGE_FALMOT.id];
        const serialLike = /\b[0-9A-F]{14}\b/g;

        for (const id of [...Object.keys(objects), ...Object.keys(states)]) {
            for (const serial of id.match(serialLike) ?? []) {
                expect(invented, id).toContain(serial);
            }
        }
        for (const object of Object.values(objects)) {
            for (const serial of JSON.stringify(object.native).match(serialLike) ?? []) {
                expect(invented, object._id).toContain(serial);
            }
        }
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}`].native.ADDRESS).toBe(ANLAGE_WTH2.id);
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.1`].native).toMatchObject({
            ADDRESS: `${ANLAGE_WTH2.id}:1`,
            PARENT: ANLAGE_WTH2.id,
        });
        expect(objects[`${HEATING_TEST_PREFIX}${ANLAGE_FALMOT.id}`].native.ADDRESS).toBe(ANLAGE_FALMOT.id);
    });
});

describe('heating test devices — invariant 6: writable like the original, nothing reacts', () => {
    it('makes the neutral device writable where a thermostat takes a value', () => {
        const writable = statesOf(NEUTRAL_DEVICE.id)
            .filter(object => object.common.write)
            .map(object => object._id);
        const expected = [
            NEUTRAL_DEVICE.binding.soll,
            NEUTRAL_DEVICE.binding.betriebsart,
            NEUTRAL_DEVICE.binding.boost,
            NEUTRAL_DEVICE.baits.urlaubBeginn,
            NEUTRAL_DEVICE.baits.urlaubEnde,
        ].map(id => `${HEATING_TEST_PREFIX}${id}`);

        expect(writable.sort()).toEqual(expected.sort());
    });

    it.each([
        ['1.SET_POINT_TEMPERATURE', true, true],
        ['1.SET_POINT_MODE', true, true],
        ['1.CONTROL_MODE', false, true],
        ['1.BOOST_MODE', false, true],
        ['1.BOOST_TIME', true, false],
        ['1.PARTY_MODE', true, false],
        ['1.PARTY_TIME_END', true, true],
        ['1.WINDOW_STATE', true, true],
        ['1.ACTUAL_TEMPERATURE', true, false],
        ['0.UNREACH', true, false],
        ['0.LOW_BAT_ALARM', true, true],
    ])('keeps the WTH-2 access of %s (read %s, write %s)', (name, read, write) => {
        const object = objects[`${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.${name}`] as ioBroker.StateObject;

        expect(object.common).toMatchObject({ read, write });
    });

    it('is plain data: nothing but JSON, so nothing reacts to a write', () => {
        const fresh = heatingTestDevices();

        expect(JSON.parse(JSON.stringify(fresh))).toEqual(fresh);
    });

    it('hands every caller its own copy', () => {
        const first = heatingTestDevices();
        const id = `${HEATING_TEST_PREFIX}${NEUTRAL_DEVICE.binding.soll}`;
        first.states[id].val = 30;
        (first.objects[id].common as ioBroker.StateCommon).write = false;

        const second = heatingTestDevices();

        expect(second.states[id].val).not.toBe(30);
        expect((second.objects[id].common as ioBroker.StateCommon).write).toBe(true);
    });
});

describe('heating test devices — the values map of the widget seam', () => {
    it('spreads each state into the keys the host fills: val, ack, ts, lc, q', () => {
        const id = `${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}.1.SET_POINT_TEMPERATURE`;
        const values = valuesOf({ [id]: states[id] });

        expect(values).toEqual({
            [`${id}.val`]: 4.5,
            [`${id}.ack`]: states[id].ack,
            [`${id}.ts`]: states[id].ts,
            [`${id}.lc`]: states[id].lc,
            [`${id}.q`]: 0x20,
        });
    });
});
