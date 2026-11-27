/**
 * Recognition of a Bedeutung's Wertezuordnung on the pick of that one Bedeutung (ADR-0119,
 * ADR-0120 with its addenda): the role path, the hint table, „set stays“.
 *
 * @module lib/heating/singlePick.test
 * @remarks
 * Editor seam: a Bedeutung field's `onChange` over a fake object database built from the heating
 * test devices, observed through what it hands to vis-2's `changeData` (as the Light2 channel
 * detection is tested). Beside it the hint table at its interface: no data point name of the
 * neutral device hits an entry (invariant 3 of the test devices).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, RxWidgetInfoFieldChangeHandler, WidgetData } from '@iobroker/types-vis-2';

import { ANLAGE_WTH2, HEATING_TEST_PREFIX, heatingTestDevices, NEUTRAL_DEVICE } from '../testing/heatingTestDevices';
import { heatingBindingFields } from './bindingFields';
import { HINT_TABLE } from './hintTable';
import { ROOM_THERMOSTAT } from './meaningCatalog';

import type { MeaningField } from './meaningCatalog';

const WTH2 = `${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}`;

/** A fake object database: `getObject` answers from `objects`. */
const socketOver = (objects: Record<string, unknown>): Connection =>
    ({ getObject: (id: string): Promise<unknown> => Promise.resolve(objects[id]) }) as unknown as Connection;

type ChangeField = RxWidgetInfoAttributesField & { onChange: RxWidgetInfoFieldChangeHandler };

/** The Raumthermostat's id field of a Bedeutung. */
const idField = (field: MeaningField): ChangeField => {
    const found = heatingBindingFields(ROOM_THERMOSTAT).find(one => one.name === field);
    if (!found) {
        throw new Error(`no field ${field}`);
    }
    return found as ChangeField;
};

/** Picks `id` into the Bedeutung field and returns the data its handler hands to vis-2. */
async function pick(
    field: MeaningField,
    id: string,
    data: WidgetData = {},
    objects: Record<string, unknown> = heatingTestDevices().objects,
): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    const one = idField(field);
    await one.onChange(
        one,
        { ...data, [field]: id },
        newData => {
            emitted = newData;
        },
        socketOver(objects),
    );
    vi.runAllTimers();
    if (!emitted) {
        throw new Error(`the ${field} pick did not reach changeData`);
    }
    return emitted;
}

/** The absolute id of a neutral-device state. */
const neutral = (relative: string): string => `${HEATING_TEST_PREFIX}${relative}`;

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('single pick on the neutral device — the role path', () => {
    it.each<[MeaningField, Record<string, unknown>]>([
        ['betriebsart', { auto: [0], manuell: [1], urlaub: [2] }],
        ['boost', { an: [true], aus: [false] }],
        // OPEN is the window's own value, TILTED reads as open too: OPEN first, the write value.
        ['fenster', { zu: [0], offen: [2, 1] }],
        ['erreichbarkeit', { erreichbar: [true], unerreichbar: [false] }],
        ['batterieSchwach', { schwach: [true], ok: [false] }],
    ])('fills the mapping of %s from role and value list', async (field, mapping) => {
        const picked = await pick(field, neutral(NEUTRAL_DEVICE.binding[field]));

        expect(picked[`${field}Zuordnung`]).toEqual(mapping);
    });

    it.each<[MeaningField, string]>([
        ['boostRestzeit', NEUTRAL_DEVICE.baits.boostRestzeit],
        ['urlaubEnde', NEUTRAL_DEVICE.baits.urlaubEnde],
    ])('leaves %s without a mapping for its bait (value.timer, text)', async (field, relative) => {
        const picked = await pick(field, neutral(relative));

        expect(picked[`${field}Object`]).toBeDefined();
        expect(`${field}Zuordnung` in picked).toBe(false);
    });

    it('fills nothing but the picked Bedeutung', async () => {
        const picked = await pick('fenster', neutral(NEUTRAL_DEVICE.binding.fenster));

        expect(Object.keys(picked).sort()).toEqual(['fenster', 'fensterObject', 'fensterZuordnung']);
    });
});

describe('single pick — further STATE_ROLES encodings', () => {
    const ID = neutral(`${NEUTRAL_DEVICE.id}.thermostat.extra`);

    /** The test devices plus one state of that `common` in the neutral thermostat channel. */
    const withState = (common: Record<string, unknown>): Record<string, unknown> => ({
        ...heatingTestDevices().objects,
        [ID]: { _id: ID, type: 'state', common: { name: 'Extra', read: true, write: false, ...common }, native: {} },
    });

    it.each<[MeaningField, Record<string, unknown>, Record<string, unknown>]>([
        ['boost', { role: 'switch.boost', type: 'boolean' }, { an: [true], aus: [false] }],
        ['fenster', { role: 'sensor.window', type: 'boolean' }, { zu: [false], offen: [true] }],
        [
            'erreichbarkeit',
            { role: 'indicator.maintenance.unreach', type: 'boolean' },
            { erreichbar: [false], unerreichbar: [true] },
        ],
        [
            'batterieSchwach',
            { role: 'indicator.maintenance.lowbat', type: 'boolean' },
            { schwach: [true], ok: [false] },
        ],
        // Labels are compared without case; an array value list stores its labels as device values.
        [
            'betriebsart',
            { role: 'level.mode.thermostat', type: 'string', states: ['auto', 'manual'] },
            { auto: ['auto'], manuell: ['manual'] },
        ],
    ])('fills the mapping of %s for %o', async (field, common, mapping) => {
        const picked = await pick(field, ID, {}, withState(common));

        expect(picked[`${field}Zuordnung`]).toEqual(mapping);
    });

    it.each<[MeaningField, Record<string, unknown>]>([
        // A label outside the STATE_ROLES list: nothing is guessed.
        [
            'betriebsart',
            { role: 'level.mode.thermostat', type: 'number', states: { 0: 'AUTO', 1: 'MANUAL', 2: 'BOOST' } },
        ],
        ['betriebsart', { role: 'level.mode.thermostat', type: 'number' }],
        // The role of a boolean encoding on a data point that is no boolean.
        ['batterieSchwach', { role: 'indicator.lowbat', type: 'string' }],
    ])('fills no mapping of %s for %o', async (field, common) => {
        const picked = await pick(field, ID, {}, withState(common));

        expect(`${field}Zuordnung` in picked).toBe(false);
    });
});

describe('single pick on the installation extract (HmIP-WTH-2) — hint table and role path', () => {
    it.each<[MeaningField, string, Record<string, unknown>]>([
        // The role level.mode.thermostat fits, its value list AUTO-MODE/MANU-MODE/PARTY-MODE does not.
        ['betriebsart', '1.SET_POINT_MODE', { auto: [0], manuell: [1], urlaub: [2] }],
        ['betriebsartSetzen', '1.CONTROL_MODE', { auto: [0], manuell: [1] }],
        ['boostRestzeit', '1.BOOST_TIME', { einheit: 'min' }],
        ['urlaub', '1.PARTY_MODE', { an: [true], aus: [false] }],
        ['urlaubEnde', '1.PARTY_TIME_END', { zeitformat: 'YYYY_MM_DD HH:mm' }],
        ['boost', '1.BOOST_MODE', { an: [true], aus: [false] }],
        ['fenster', '1.WINDOW_STATE', { zu: [0], offen: [1] }],
        ['erreichbarkeit', '0.UNREACH', { erreichbar: [false], unerreichbar: [true] }],
        ['batterieSchwach', '0.LOW_BAT', { schwach: [true], ok: [false] }],
    ])('fills the mapping of %s from %s', async (field, relative, mapping) => {
        const picked = await pick(field, `${WTH2}.${relative}`);

        expect(picked[`${field}Zuordnung`]).toEqual(mapping);
    });

    it('recognises an entry only in its channel type: the same names in a BidCos channel hit nothing', async () => {
        const objects = heatingTestDevices().objects;
        const channel = objects[`${WTH2}.1`];
        objects[`${WTH2}.1`] = {
            ...channel,
            native: { ...channel.native, TYPE: 'CLIMATECONTROL_RT_TRANSCEIVER' },
        } as ioBroker.Object;

        const control = await pick('betriebsartSetzen', `${WTH2}.1.CONTROL_MODE`, {}, objects);
        const party = await pick('urlaub', `${WTH2}.1.PARTY_MODE`, {}, objects);
        const remaining = await pick('boostRestzeit', `${WTH2}.1.BOOST_TIME`, {}, objects);

        expect('betriebsartSetzenZuordnung' in control).toBe(false);
        expect('urlaubZuordnung' in party).toBe(false);
        expect('boostRestzeitZuordnung' in remaining).toBe(false);
    });

    it('recognises nothing from the hint table for a data point named like an entry in a non-channel parent', async () => {
        const objects = heatingTestDevices().objects;
        objects[`${WTH2}.1`] = { ...objects[`${WTH2}.1`], type: 'folder' } as ioBroker.Object;

        const picked = await pick('betriebsartSetzen', `${WTH2}.1.CONTROL_MODE`, {}, objects);

        expect('betriebsartSetzenZuordnung' in picked).toBe(false);
    });

    it('fills no mapping when the picked data point is recognised as another Bedeutung', async () => {
        const picked = await pick('betriebsartSetzen', `${WTH2}.1.SET_POINT_MODE`);

        expect('betriebsartSetzenZuordnung' in picked).toBe(false);
    });
});

describe('single pick — a set mapping stays', () => {
    it('keeps a stored mapping of the picked Bedeutung unchanged', async () => {
        const own = { zu: [1], offen: [0] };

        const picked = await pick('fenster', `${WTH2}.1.WINDOW_STATE`, { fensterZuordnung: own });

        expect(picked.fensterZuordnung).toEqual(own);
    });

    it('keeps a stored mapping on the hint-table path too', async () => {
        const own = { einheit: 's' };

        const picked = await pick('boostRestzeit', `${WTH2}.1.BOOST_TIME`, { boostRestzeitZuordnung: own });

        expect(picked.boostRestzeitZuordnung).toEqual(own);
    });
});

describe('hint table — at its interface', () => {
    it('holds no data point name of the neutral device (invariant 3)', () => {
        const { objects } = heatingTestDevices();
        const neutralNames = Object.values(objects)
            .filter(object => object.type === 'state' && object._id.startsWith(neutral(`${NEUTRAL_DEVICE.id}.`)))
            .map(object => object._id.split('.').pop());

        expect(neutralNames.length).toBeGreaterThan(10);
        expect(HINT_TABLE.filter(entry => neutralNames.includes(entry.name))).toEqual([]);
    });

    it('keeps the excluded data points out of the table', () => {
        const excluded = [
            'BOOST_TIME_PERIOD',
            'DURATION_UNIT',
            'DURATION_VALUE',
            'QUICK_VETO_TIME',
            'PARTY_TIME_START',
            'PARTY_SET_POINT_TEMPERATURE',
        ];

        expect(HINT_TABLE.filter(entry => excluded.includes(entry.name))).toEqual([]);
    });
});
