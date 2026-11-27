/**
 * The binding building block of the heating family: the panel fields of a subset of the meaning
 * catalogue (ADR-0119, ADR-0121, ADR-0123 Nr. 8).
 *
 * @module lib/heating/bindingFields.test
 * @remarks
 * Two seams. The editor seam: a field's `onChange` with a fake object database, observed through
 * what it hands to vis-2's `changeData` (as the Light2 channel detection is tested). The Lese-Naht:
 * the existing recognition of the pick fields (`oidPickFieldsOf`) over a group holding the fields.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, RxWidgetInfoFieldChangeHandler, WidgetData } from '@iobroker/types-vis-2';

import { oidPickFieldsOf } from '../pickedWidgetData';
import { heatingBindingFields } from './bindingFields';
import { ROOM_THERMOSTAT } from './meaningCatalog';

const SET_POINT = 'hm-rpc.1.000A1BE9A6B4B1.1.SET_POINT_TEMPERATURE';
const MODE = 'hm-rpc.1.000A1BE9A6B4B1.1.SET_POINT_MODE';

/** The objects of a HmIP wall thermostat, with an icon, a unit and a range a root field could take. */
const OBJECTS: Record<string, unknown> = {
    'hm-rpc.1.000A1BE9A6B4B1': {
        _id: 'hm-rpc.1.000A1BE9A6B4B1',
        type: 'device',
        common: { name: 'Bad', icon: 'thermostat.png' },
    },
    [SET_POINT]: {
        _id: SET_POINT,
        type: 'state',
        common: {
            name: 'Set point',
            type: 'number',
            role: 'level.temperature',
            read: true,
            write: true,
            min: 4.5,
            max: 30.5,
            unit: '°C',
        },
    },
    [MODE]: {
        _id: MODE,
        type: 'state',
        common: {
            name: 'Mode',
            type: 'number',
            role: 'level.mode.thermostat',
            read: true,
            write: true,
            min: 0,
            max: 3,
            states: { 0: 'AUTO-MODE', 1: 'MANU-MODE', 2: 'PARTY-MODE' },
        },
    },
};

const fakeSocket = {
    getObject: (id: string): Promise<unknown> => Promise.resolve(OBJECTS[id]),
} as unknown as Connection;

/** What the tests read of a built field. */
type PanelField = { name: string; type?: string; label?: string };

/** The built fields as the tests read them. */
const panelFields = (fields: readonly RxWidgetInfoAttributesField[]): PanelField[] => fields as unknown as PanelField[];

type ChangeField = RxWidgetInfoAttributesField & { onChange: RxWidgetInfoFieldChangeHandler };

/** The field the building block built under that name. */
const fieldNamed = (fields: readonly RxWidgetInfoAttributesField[], name: string): ChangeField => {
    const field = fields.find(one => one.name === name);
    if (!field) {
        throw new Error(`no field ${name}`);
    }
    return field as ChangeField;
};

/** Runs one pick of the field and returns the data its handler hands to vis-2. */
async function pick(field: ChangeField, data: WidgetData): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    await field.onChange(
        field,
        data,
        newData => {
            emitted = newData;
        },
        fakeSocket,
    );
    vi.runAllTimers();
    if (!emitted) {
        throw new Error(`the ${field.name} pick did not reach changeData`);
    }
    return emitted;
}

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('heating binding block — editor seam: the pick of a Bedeutung field', () => {
    it('stores only the field and its object with commonStates, no root field (Hilfs-ID)', async () => {
        const fields = heatingBindingFields(ROOM_THERMOSTAT);

        const picked = await pick(fieldNamed(fields, 'betriebsart'), { betriebsart: MODE });

        expect(Object.keys(picked).sort()).toEqual(['betriebsart', 'betriebsartObject']);
        expect(picked.betriebsartObject).toMatchObject({
            _id: MODE,
            type: 'number',
            commonStates: { 0: 'AUTO-MODE', 1: 'MANU-MODE', 2: 'PARTY-MODE' },
        });
    });

    it('stores no root icon, unit or range for the main Bedeutung soll either', async () => {
        const fields = heatingBindingFields(ROOM_THERMOSTAT);

        const picked = await pick(fieldNamed(fields, 'soll'), { soll: SET_POINT, bezeichnung: '' });

        expect(Object.keys(picked).sort()).toEqual(['bezeichnung', 'soll', 'sollObject']);
        expect(picked.sollObject).toMatchObject({ _id: SET_POINT, unit: '°C', minValue: 4.5, maxValue: 30.5 });
    });

    it('builds soll3 for entry number 3, and its pick stores soll3Object', async () => {
        const fields = heatingBindingFields(ROOM_THERMOSTAT, 3);

        const picked = await pick(fieldNamed(fields, 'soll3'), { soll3: SET_POINT });

        expect(Object.keys(picked).sort()).toEqual(['soll3', 'soll3Object']);
        expect(picked.soll3Object).toMatchObject({ _id: SET_POINT });
        expect(fields.some(field => field.name === 'soll')).toBe(false);
    });
});

describe('heating binding block — the fields it builds', () => {
    it('builds one id field per Bedeutung, its Wertezuordnung below it, Bezeichnung and Unterzeile after the main one', () => {
        const fields = heatingBindingFields(ROOM_THERMOSTAT);

        expect(panelFields(fields).map(field => [field.name, field.type])).toEqual([
            ['soll', 'id'],
            ['bezeichnung', 'text'],
            ['unterzeile', 'text'],
            ['ist', 'id'],
            ['luftfeuchte', 'id'],
            ['betriebsart', 'id'],
            ['zuordnung:betriebsart', 'custom'],
            ['betriebsartSetzen', 'id'],
            ['zuordnung:betriebsartSetzen', 'custom'],
            ['boost', 'id'],
            ['zuordnung:boost', 'custom'],
            ['boostBeenden', 'id'],
            ['zuordnung:boostBeenden', 'custom'],
            ['boostRestzeit', 'id'],
            ['zuordnung:boostRestzeit', 'custom'],
            ['urlaub', 'id'],
            ['zuordnung:urlaub', 'custom'],
            ['urlaubEnde', 'id'],
            ['zuordnung:urlaubEnde', 'custom'],
            ['fenster', 'id'],
            ['zuordnung:fenster', 'custom'],
            ['batterieSchwach', 'id'],
            ['zuordnung:batterieSchwach', 'custom'],
            ['batteriestand', 'id'],
            ['erreichbarkeit', 'id'],
            ['zuordnung:erreichbarkeit', 'custom'],
        ]);
    });

    it('numbers the Wertezuordnung field with the entry, under a name no data key has', () => {
        const names = heatingBindingFields(ROOM_THERMOSTAT, 3).map(field => field.name);

        expect(names).toContain('zuordnung:betriebsart3');
        expect(names.filter(name => name?.startsWith('zuordnung:')).every(name => /\d$/.test(name!))).toBe(true);
    });

    it('labels the fields with heating_ keys, a numbered entry with the same ones', () => {
        const labels = panelFields(heatingBindingFields(ROOM_THERMOSTAT)).map(field => field.label);
        const numbered = panelFields(heatingBindingFields(ROOM_THERMOSTAT, 3)).map(field => field.label);

        expect(labels.slice(0, 4)).toEqual([
            'heating_soll',
            'heating_bezeichnung',
            'heating_unterzeile',
            'heating_ist',
        ]);
        expect(numbered).toEqual(labels);
    });

    it('numbers Bezeichnung and Unterzeile with the entry', () => {
        const names = heatingBindingFields(ROOM_THERMOSTAT, 3).map(field => field.name);

        expect(names.slice(0, 4)).toEqual(['soll3', 'bezeichnung3', 'unterzeile3', 'ist3']);
    });
});

describe('heating binding block — Lese-Naht', () => {
    it('lets the existing recognition of the pick fields find every Bedeutung field, real range only', () => {
        const recognised = oidPickFieldsOf([{ name: 'binding', fields: heatingBindingFields(ROOM_THERMOSTAT) }]);

        expect(recognised.map(field => field.name)).toEqual(ROOM_THERMOSTAT.meanings);
        expect(recognised.every(field => !field.inventRange)).toBe(true);
        expect(recognised.find(field => field.name === 'soll')?.allowedTypes).toEqual(['number']);
    });
});
