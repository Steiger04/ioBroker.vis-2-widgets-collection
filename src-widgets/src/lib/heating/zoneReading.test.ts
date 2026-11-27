/**
 * Heizzonen-Lesung — what the bound data of one Heizzone say, at the module's interface (ADR-0121
 * Nachtrag 2026-11-27).
 *
 * @module lib/heating/zoneReading.test
 * @remarks
 * Runs in the dom project (`DOM_TS_TESTS`): the display text of a neutral value is translated, and
 * the stub's `t` returns the key. Widget data and values are written by hand, as the host stores
 * and spreads them: `<id>.val`, `.q`, `.lc`, `.ts`.
 */
import { describe, expect, it } from 'vitest';

import { readZone, type StateValues } from './zoneReading';

import type { WidgetData } from '@iobroker/types-vis-2';

const WINDOW = 'dev.0.room.window';
const SETPOINT = 'dev.0.room.setpoint';

describe('state of a Bedeutung', () => {
    it('reads an empty id field and vis-2’s nothing_selected as unbound', () => {
        expect(readZone({}, {}).meaning('soll').kind).toBe('unbound');
        expect(readZone({ soll: 'nothing_selected' }, {}).meaning('soll').kind).toBe('unbound');
    });

    it('reads a bound data point without a value, and the host’s placeholder, as no value', () => {
        expect(readZone({ soll: SETPOINT }, {}).meaning('soll')).toMatchObject({ kind: 'noValue', id: SETPOINT });
        const placeholder = { [`${SETPOINT}.val`]: 'null', [`${SETPOINT}.q`]: 0 };
        expect(readZone({ soll: SETPOINT }, placeholder).meaning('soll').kind).toBe('noValue');
    });

    it('reads the device’s substitute value (q = 0x20) as not yet reported, whatever the value', () => {
        const values = { [`${SETPOINT}.val`]: 4.5, [`${SETPOINT}.q`]: 0x20 };
        const reading = readZone({ soll: SETPOINT }, values).meaning('soll');
        expect(reading.kind).toBe('notReported');
        expect(reading.number).toBeUndefined();
    });

    it('reads a reported value with when it last changed and was last reported', () => {
        const values = {
            [`${SETPOINT}.val`]: 21.5,
            [`${SETPOINT}.q`]: 0,
            [`${SETPOINT}.lc`]: 10,
            [`${SETPOINT}.ts`]: 20,
        };
        expect(readZone({ soll: SETPOINT }, values).meaning('soll')).toMatchObject({
            kind: 'reported',
            id: SETPOINT,
            value: 21.5,
            lc: 10,
            ts: 20,
        });
    });

    it('reads the binding of its entry number: the number before every suffix', () => {
        const data: WidgetData = { soll: 'other.0.setpoint', soll3: SETPOINT };
        const values = { [`${SETPOINT}.val`]: 19 };
        expect(readZone(data, values, 3).meaning('soll')).toMatchObject({ kind: 'reported', id: SETPOINT, value: 19 });
        expect(readZone(data, values).meaning('soll')).toMatchObject({ kind: 'noValue', id: 'other.0.setpoint' });
    });
});

describe('neutral value and display text', () => {
    const windowData = (mapping: unknown, object: unknown = { _id: WINDOW }): WidgetData => ({
        fenster: WINDOW,
        fensterObject: object,
        fensterZuordnung: mapping,
    });
    const reports = (value: unknown): StateValues => ({ [`${WINDOW}.val`]: value, [`${WINDOW}.q`]: 0 });

    it('reads several device values as one neutral value (n:1), compared as text', () => {
        const mapping = { zu: [0], offen: [1, 2] };
        expect(readZone(windowData(mapping), reports(2)).meaning('fenster').neutral).toBe('offen');
        expect(readZone(windowData(mapping), reports('1')).meaning('fenster').neutral).toBe('offen');
        expect(readZone(windowData(mapping), reports(0)).meaning('fenster').neutral).toBe('zu');
    });

    it('lets the first neutral value in catalogue order win where two list the same device value', () => {
        // The catalogue lists `zu` before `offen`; the stored order does not count.
        const mapping = { offen: [1], zu: [1] };
        expect(readZone(windowData(mapping), reports(1)).meaning('fenster').neutral).toBe('zu');
    });

    it('shows the neutral value’s label for a mapped value', () => {
        expect(readZone(windowData({ zu: [0], offen: [1] }), reports(1)).meaning('fenster').text).toBe(
            'heating_neutral_offen',
        );
    });

    it('falls back to the device value’s commonStates label, then to the raw value, without a mapping for it', () => {
        const object = { _id: WINDOW, commonStates: { 2: 'TILTED' } };
        const zone = (value: unknown): ReturnType<typeof readZone> =>
            readZone(windowData({ zu: [0], offen: [1] }, object), reports(value));
        expect(zone(2).meaning('fenster')).toMatchObject({ neutral: undefined, text: 'TILTED' });
        expect(zone(7).meaning('fenster')).toMatchObject({ neutral: undefined, text: '7' });
    });

    it('shows „–“ while nothing has reported, whatever the mapping', () => {
        const data = windowData({ zu: [0], offen: [1] });
        expect(readZone(data, {}).meaning('fenster')).toMatchObject({ neutral: undefined, text: '–' });
        expect(readZone(data, { [`${WINDOW}.val`]: 1, [`${WINDOW}.q`]: 0x20 }).meaning('fenster')).toMatchObject({
            neutral: undefined,
            text: '–',
        });
    });

    it('reads the mapping of its entry number', () => {
        const data: WidgetData = { fenster2: WINDOW, fensterZuordnung: { zu: [1] }, fenster2Zuordnung: { offen: [1] } };
        expect(readZone(data, reports(1), 2).meaning('fenster').neutral).toBe('offen');
    });
});

describe('number and unit', () => {
    it('gives a number only for a reported finite number, with the stored object’s unit', () => {
        const data: WidgetData = { ist: 'dev.0.t', istObject: { _id: 'dev.0.t', unit: '°F' } };
        expect(readZone(data, { 'dev.0.t.val': 70.5 }).meaning('ist')).toMatchObject({ number: 70.5, unit: '°F' });
        expect(readZone(data, { 'dev.0.t.val': 'warm' }).meaning('ist').number).toBeUndefined();
        expect(readZone(data, { 'dev.0.t.val': 70.5, 'dev.0.t.q': 0x20 }).meaning('ist').number).toBeUndefined();
        expect(readZone({ ist: 'dev.0.t' }, {}).meaning('ist').unit).toBeUndefined();
    });
});

describe('write value of a neutral value', () => {
    const MODE = 'dev.0.room.mode';

    it('writes the first device value of the neutral value’s list', () => {
        const data: WidgetData = { betriebsart: MODE, betriebsartZuordnung: { manuell: [1, 'MANU'], auto: [0] } };
        expect(readZone(data, {}).meaning('betriebsart').writeValue('manuell')).toBe(1);
    });

    it('writes nothing for „nicht vorhanden“ (empty list), an unmapped neutral value or an unbound Bedeutung', () => {
        const mapping = { aus: [], auto: [0] };
        const reading = readZone({ betriebsart: MODE, betriebsartZuordnung: mapping }, {}).meaning('betriebsart');
        expect(reading.writeValue('aus')).toBeUndefined();
        expect(reading.writeValue('manuell')).toBeUndefined();
        expect(
            readZone({ betriebsartZuordnung: mapping }, {}).meaning('betriebsart').writeValue('auto'),
        ).toBeUndefined();
    });
});

describe('writable', () => {
    const bound = (object: unknown, extra: WidgetData = {}): WidgetData => ({
        soll: SETPOINT,
        sollObject: object,
        ...extra,
    });

    it('is writable while bound and its own object does not forbid writing', () => {
        expect(readZone(bound({ _id: SETPOINT }), {}).meaning('soll').writable).toBe(true);
        expect(readZone(bound({ _id: SETPOINT, write: true }), {}).meaning('soll').writable).toBe(true);
    });

    it('is not writable while unbound', () => {
        expect(readZone({ sollObject: { _id: SETPOINT } }, {}).meaning('soll').writable).toBe(false);
    });

    it('is not writable while the stored object belongs to another id, or is missing', () => {
        expect(readZone(bound({ _id: 'other.0.setpoint' }), {}).meaning('soll').writable).toBe(false);
        expect(readZone(bound(undefined), {}).meaning('soll').writable).toBe(false);
    });

    it('is not writable for write: false', () => {
        expect(readZone(bound({ _id: SETPOINT, write: false }), {}).meaning('soll').writable).toBe(false);
    });

    it('is not writable for a display-only widget, also when a binding resolved onlyDisplay to text', () => {
        expect(readZone(bound({ _id: SETPOINT }, { onlyDisplay: true }), {}).meaning('soll').writable).toBe(false);
        expect(readZone(bound({ _id: SETPOINT }, { onlyDisplay: 'true' }), {}).meaning('soll').writable).toBe(false);
        expect(readZone(bound({ _id: SETPOINT }, { onlyDisplay: 'false' }), {}).meaning('soll').writable).toBe(true);
    });

    it('answers for the Bedeutung of its entry number', () => {
        const data: WidgetData = {
            soll: SETPOINT,
            sollObject: { _id: SETPOINT },
            soll3: 'x.0.s',
            soll3Object: { _id: 'y' },
        };
        expect(readZone(data, {}, 3).meaning('soll').writable).toBe(false);
        expect(readZone(data, {}).meaning('soll').writable).toBe(true);
    });
});

describe('valve mean of the zone', () => {
    /** Fixture: four valves — two in zone 3, one in zone 1, one without a zone reference. */
    const data: WidgetData = {
        ventilAnzahl: 4,
        ventil1: 'v.1',
        ventil1Zone: 3,
        ventil2: 'v.2',
        ventil2Zone: 1,
        ventil3: 'v.3',
        ventil4: 'v.4',
        ventil4Zone: 3,
    };
    const values = { 'v.1.val': 20, 'v.2.val': 100, 'v.3.val': 60, 'v.4.val': 40 };

    it('counts every bound valve without an entry number (single-room types)', () => {
        expect(readZone(data, values).valveMean).toBe(55);
    });

    it('counts with entry number 3 only the valves of zone 3; a valve without zone counts nowhere', () => {
        expect(readZone(data, values, 3).valveMean).toBe(30);
        expect(readZone(data, values, 1).valveMean).toBe(100);
        expect(readZone(data, values, 2).valveMean).toBeUndefined();
    });

    it('is undefined without a bound valve, null while no bound valve has reported a number', () => {
        expect(readZone({}, {}).valveMean).toBeUndefined();
        expect(readZone({ ventilAnzahl: 2, ventil2: 'v.2' }, { 'v.2.val': 1, 'v.2.q': 0x20 }).valveMean).toBeNull();
    });

    it('counts only the valves the counter covers', () => {
        expect(readZone({ ventilAnzahl: 1, ventil1: 'v.1', ventil2: 'v.2' }, values).valveMean).toBe(20);
    });
});
