/**
 * The Raumthermostat's actions at the module's interface: what each key writes where, and whether it
 * may (ADR-0118 Nachtrag 2026-11-27 K4, ADR-0120).
 *
 * @module HeatingThermostatCollectionWidget/thermostatActions.test
 * @remarks
 * Runs in the dom project (`DOM_TS_TESTS`): the Heizzonen-Lesung translates display texts. Widget
 * data and values are written by hand, as the pick stores them (`<field>`, `<field>Object`,
 * `<field>Zuordnung`) and as the host spreads them (`<id>.val`, `.q`).
 */
import { describe, expect, it } from 'vitest';

import { readZone, type StateValues } from '../lib/heating/zoneReading';
import { thermostatActions, type ThermostatAction, type ThermostatActions } from './thermostatActions';
import type { ThermostatStatus } from './thermostatStatus';

import type { WidgetData } from '@iobroker/types-vis-2';

const SETPOINT = 'dev.0.room.setpoint';
const MODE = 'dev.0.room.mode';
const MODE_SET = 'dev.0.room.modeSet';
const BOOST = 'dev.0.room.boost';
const BOOST_END = 'dev.0.room.boostEnd';
const HOLIDAY = 'dev.0.room.holiday';

/** A Bedeutung bound with its stored object (and mapping), as a pick stores it. */
const bind = (
    field: string,
    id: string,
    object: Record<string, unknown> = {},
    mapping?: Record<string, unknown[]>,
): WidgetData => ({
    [field]: id,
    [`${field}Object`]: { _id: id, ...object },
    ...(mapping ? { [`${field}Zuordnung`]: mapping } : {}),
});

/** A reported set-point. */
const reported = (val: number): StateValues => ({ [`${SETPOINT}.val`]: val, [`${SETPOINT}.q`]: 0 });

/** The set-point on 5–30 °C in steps of 0.5 K. */
const setpoint = (object: Record<string, unknown> = {}): WidgetData =>
    bind('soll', SETPOINT, { minValue: 5, maxValue: 30, step: 0.5, ...object });

/** A quiet status: not off, no Boost, no Urlaub, no known mode. */
const QUIET: Pick<ThermostatStatus, 'off' | 'mode' | 'boosting' | 'holiday'> = { off: false, boosting: false };

/** The actions of a zone. */
const actionsOf = (
    data: WidgetData,
    values: StateValues = {},
    status: Partial<Pick<ThermostatStatus, 'off' | 'mode' | 'boosting' | 'holiday'>> = {},
    temperatures: { komfort?: unknown; absenk?: unknown } = { komfort: 21, absenk: 17 },
): ThermostatActions => thermostatActions(readZone(data, values), { ...QUIET, ...status }, temperatures);

/** One pill by its key. */
const pill = (actions: ThermostatActions, key: string): ThermostatAction | undefined =>
    actions.pills.find(action => action.key === key);

describe('Absenk and Komfort', () => {
    it('write the widget values into the set-point, lit while the reported set-point equals their value', () => {
        const actions = actionsOf(setpoint(), reported(21));

        expect(pill(actions, 'absenk')).toEqual({
            key: 'absenk',
            field: 'soll',
            value: 17,
            active: false,
            locked: false,
        });
        expect(pill(actions, 'komfort')).toMatchObject({ field: 'soll', value: 21, active: true, locked: false });
    });

    it('stay unlit but writable while the set-point has not reported', () => {
        const actions = actionsOf(setpoint(), { [`${SETPOINT}.val`]: 21, [`${SETPOINT}.q`]: 0x20 });

        expect(pill(actions, 'komfort')).toMatchObject({ value: 21, active: false, locked: false });
    });

    it('read a widget value vis-2 stored as text as its number (ADR-0109 Nr. 7)', () => {
        const actions = actionsOf(setpoint(), reported(21), {}, { komfort: '21', absenk: '17.5' });

        expect(pill(actions, 'komfort')).toMatchObject({ field: 'soll', value: 21, active: true });
        expect(pill(actions, 'absenk')).toMatchObject({ field: 'soll', value: 17.5, active: false });
    });

    it('leave out a widget value that is no number', () => {
        const actions = actionsOf(setpoint(), {}, {}, { komfort: 'warm', absenk: '' });

        expect(actions.pills.map(action => action.key)).toEqual(['aus']);
    });
});

describe('Aus', () => {
    const MODES = { auto: [0], manuell: [1], aus: [3] };

    it('writes the first value of `aus` into „Betriebsart setzen“ while it is bound', () => {
        const data = {
            ...setpoint(),
            ...bind('betriebsart', MODE, {}, MODES),
            ...bind('betriebsartSetzen', MODE_SET, {}, { aus: [7, 8] }),
        };

        expect(pill(actionsOf(data), 'aus')).toEqual({
            key: 'aus',
            field: 'betriebsartSetzen',
            value: 7,
            active: false,
            locked: false,
        });
    });

    it('writes through „Betriebsart“ without „Betriebsart setzen“, lit by the status', () => {
        const data = { ...setpoint(), ...bind('betriebsart', MODE, {}, MODES) };

        expect(pill(actionsOf(data, {}, { off: true }), 'aus')).toMatchObject({
            field: 'betriebsart',
            value: 3,
            active: true,
        });
    });

    it('writes the set-point’s real minimum where the operating mode maps no `aus`', () => {
        const data = { ...setpoint(), ...bind('betriebsart', MODE, {}, { auto: [0], manuell: [1] }) };

        expect(pill(actionsOf(data), 'aus')).toMatchObject({ field: 'soll', value: 5 });
    });

    it('is not there without a mapped `aus` and without a real minimum', () => {
        const data = { ...bind('soll', SETPOINT), ...bind('betriebsart', MODE, {}, { auto: [0], manuell: [1] }) };

        expect(pill(actionsOf(data), 'aus')).toBeUndefined();
    });

    it('is not there while its target is not writable — a bound „Betriebsart setzen“ never falls back', () => {
        const readOnlyMode = { ...setpoint(), ...bind('betriebsart', MODE, { write: false }, MODES) };
        expect(pill(actionsOf(readOnlyMode), 'aus')).toBeUndefined();

        const foreignModeSet = {
            ...setpoint(),
            ...bind('betriebsart', MODE, {}, MODES),
            ...bind('betriebsartSetzen', MODE_SET, {}, { aus: [7] }),
            betriebsartSetzenObject: { _id: 'other.0.modeSet' },
        };
        expect(pill(actionsOf(foreignModeSet), 'aus')).toBeUndefined();
    });
});

describe('a target that is not writable', () => {
    it('has no action: a read-only set-point leaves no Absenk, Komfort, steps or Aus by its minimum', () => {
        for (const data of [setpoint({ write: false }), { ...setpoint(), onlyDisplay: true }, { soll: SETPOINT }]) {
            const actions = actionsOf(data, reported(21));

            expect(actions.pills).toEqual([]);
            expect(actions.steps).toBeUndefined();
            expect(actions.ring).toBeUndefined();
        }
    });
});

describe('steps', () => {
    it('step the reported set-point by one step of its scale', () => {
        const { steps } = actionsOf(setpoint(), reported(21));

        expect(steps?.down).toEqual({ key: 'down', field: 'soll', value: 20.5, active: false, locked: false });
        expect(steps?.up).toMatchObject({ key: 'up', field: 'soll', value: 21.5, locked: false });
    });

    it('snap a set-point off the grid to the next step', () => {
        const { steps } = actionsOf(setpoint(), reported(21.2));

        expect(steps?.down.value).toBe(21);
        expect(steps?.up.value).toBe(21.5);
    });

    it('lock up at the maximum and down at the minimum, without a value to write there', () => {
        const top = actionsOf(setpoint(), reported(30)).steps;
        expect(top?.up.locked).toBe(true);
        expect(top?.up.value).toBeUndefined();
        expect(top?.down).toMatchObject({ locked: false, value: 29.5 });

        const bottom = actionsOf(setpoint(), reported(5)).steps;
        expect(bottom?.down.locked).toBe(true);
        expect(bottom?.down.value).toBeUndefined();
        expect(bottom?.up).toMatchObject({ locked: false, value: 5.5 });
    });

    it('lock both while the set-point has not reported, without a value to write', () => {
        const notReported: StateValues[] = [{}, { [`${SETPOINT}.val`]: 21, [`${SETPOINT}.q`]: 0x20 }];
        for (const values of notReported) {
            const { steps } = actionsOf(setpoint(), values);

            for (const step of [steps?.down, steps?.up]) {
                expect(step?.locked).toBe(true);
                expect(step?.value).toBeUndefined();
            }
        }
    });
});

describe('the ring of the dial', () => {
    it('drags into the set-point — the pointer gives the value — and locks while it has not reported', () => {
        expect(actionsOf(setpoint(), reported(21)).ring).toEqual({
            key: 'ring',
            field: 'soll',
            active: false,
            locked: false,
        });
        expect(actionsOf(setpoint(), {}).ring).toMatchObject({ field: 'soll', locked: true });
    });
});

describe('the operating-mode segment', () => {
    const MODES = { auto: [0, 5], manuell: [1, 6], aus: [3] };
    const BOOST_MAPPING = { an: [true], aus: [false] };

    /** One pill of the segment by its key. */
    const mode = (actions: ThermostatActions, key: string): ThermostatAction | undefined =>
        actions.modes.find(action => action.key === key);

    it('writes the first device value of Auto and Manuell into „Betriebsart“, lit by the status’s mode', () => {
        const actions = actionsOf(bind('betriebsart', MODE, {}, MODES), {}, { mode: 'manuell' });

        expect(actions.modes.map(action => action.key)).toEqual(['auto', 'manuell']);
        expect(mode(actions, 'auto')).toEqual({
            key: 'auto',
            field: 'betriebsart',
            value: 0,
            active: false,
            locked: false,
        });
        expect(mode(actions, 'manuell')).toMatchObject({ field: 'betriebsart', value: 1, active: true });
    });

    it('writes Auto and Manuell into a bound „Betriebsart setzen“ and never falls back from it', () => {
        const data = {
            ...bind('betriebsart', MODE, {}, MODES),
            ...bind('betriebsartSetzen', MODE_SET, {}, { auto: [0], manuell: [1] }),
        };
        expect(mode(actionsOf(data), 'auto')).toMatchObject({ field: 'betriebsartSetzen', value: 0 });

        const readOnlySet = {
            ...data,
            ...bind('betriebsartSetzen', MODE_SET, { write: false }, { auto: [0], manuell: [1] }),
        };
        expect(actionsOf(readOnlySet).modes).toEqual([]);
    });

    it('has no pill for a value mapped as „nicht vorhanden“ (empty list) or not mapped', () => {
        const actions = actionsOf(bind('betriebsart', MODE, {}, { auto: [], aus: [3] }));

        expect(actions.modes).toEqual([]);
    });

    it('starts Boost with `boost` = an, and ends a running one with `boost` = aus without „Boost beenden“', () => {
        const data = bind('boost', BOOST, {}, BOOST_MAPPING);

        expect(mode(actionsOf(data), 'boost')).toEqual({
            key: 'boost',
            field: 'boost',
            value: true,
            active: false,
            locked: false,
        });
        expect(mode(actionsOf(data, {}, { boosting: true }), 'boost')).toMatchObject({
            field: 'boost',
            value: false,
            active: true,
        });
    });

    it('ends a running Boost with `boostBeenden` = beenden where it is bound, and only where writable', () => {
        const data = {
            ...bind('boost', BOOST, {}, BOOST_MAPPING),
            ...bind('boostBeenden', BOOST_END, {}, { beenden: [true] }),
        };
        expect(mode(actionsOf(data, {}, { boosting: true }), 'boost')).toMatchObject({
            field: 'boostBeenden',
            value: true,
        });

        const readOnlyEnd = { ...data, ...bind('boostBeenden', BOOST_END, { write: false }, { beenden: [true] }) };
        expect(mode(actionsOf(readOnlyEnd, {}, { boosting: true }), 'boost')).toBeUndefined();
        expect(mode(actionsOf(readOnlyEnd), 'boost')).toMatchObject({ field: 'boost', value: true });
    });

    it('shows Urlaub only while it runs, lit, with its end; locked without a value unless `urlaub` is writable', () => {
        expect(mode(actionsOf({}), 'urlaub')).toBeUndefined();

        const showing = actionsOf({}, {}, { holiday: { end: 1_000 } });
        expect(mode(showing, 'urlaub')).toEqual({
            key: 'urlaub',
            field: 'urlaub',
            active: true,
            locked: true,
            end: 1_000,
        });

        const writable = actionsOf(bind('urlaub', HOLIDAY, {}, { aus: [false] }), {}, { holiday: { end: undefined } });
        expect(mode(writable, 'urlaub')).toEqual({
            key: 'urlaub',
            field: 'urlaub',
            value: false,
            active: true,
            locked: false,
        });
    });

    it('stands in display order: Auto, Manuell, Boost, Urlaub', () => {
        const data = { ...bind('betriebsart', MODE, {}, MODES), ...bind('boost', BOOST, {}, BOOST_MAPPING) };

        expect(actionsOf(data, {}, { holiday: { end: undefined } }).modes.map(action => action.key)).toEqual([
            'auto',
            'manuell',
            'boost',
            'urlaub',
        ]);
    });
});
