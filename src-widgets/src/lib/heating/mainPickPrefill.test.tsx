/**
 * Prefill on the pick of the main Bedeutung (ADR-0119 „Prefill on pick only“ with its addenda on
 * ambiguity, Bezeichnung and Unterzeile; ADR-0123 Nr. 7).
 *
 * @module lib/heating/mainPickPrefill.test
 * @remarks
 * Editor seam: the `soll` field's `onChange` over a fake object database built from the heating
 * test devices, observed through what it hands to vis-2's `changeData` (as the Light2 channel
 * detection is tested). The candidates of an ambiguous Bedeutung are observed in the attribute
 * panel through the vis-2 custom-field API (`Vis2GroupBody`).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // An own host class: `t` marks a translated text, `getLanguage` picks the text of a name.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: string[]): string {
            return [`t:${key}`, ...args].join('|');
        }

        static getLanguage(): string {
            return 'de';
        }
    };
});

import type React from 'react';

import type { Connection } from '@iobroker/gui-components';
import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    RxWidgetInfoFieldChangeHandler,
    WidgetData,
} from '@iobroker/types-vis-2';

import { renderComponent, type RenderComponentHandle } from '../testing/testHarness';
import { Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from '../testing/vis2GroupBody';
import {
    AMBIGUOUS_DEVICE,
    ANLAGE_FALMOT,
    ANLAGE_WTH2,
    HEATING_TEST_PREFIX,
    heatingTestDevices,
    NEUTRAL_DEVICE,
} from '../testing/heatingTestDevices';
import { heatingBindingFields } from './bindingFields';
import { ROOM_THERMOSTAT } from './meaningCatalog';

/** The absolute id of a test-device object. */
const at = (relative: string): string => `${HEATING_TEST_PREFIX}${relative}`;

/**
 * A fake object database: `getObject` answers from `objects`, `getObjectView` returns the objects
 * of the asked type whose id lies in the asked range — as the socket's object view does.
 */
const socketOver = (objects: Record<string, ioBroker.Object>): Connection =>
    ({
        getObject: (id: string): Promise<unknown> => Promise.resolve(objects[id]),
        getObjectView: (start: string, end: string, type: string): Promise<unknown> =>
            Promise.resolve(
                Object.fromEntries(
                    Object.entries(objects).filter(([id, object]) => object.type === type && id >= start && id <= end),
                ),
            ),
    }) as unknown as Connection;

type ChangeField = RxWidgetInfoAttributesField & { onChange: RxWidgetInfoFieldChangeHandler };

/** The Raumthermostat's id field of the main Bedeutung (or of entry `entry`). */
const mainField = (entry?: number): ChangeField => {
    const name = `soll${entry ?? ''}`;
    const found = heatingBindingFields(ROOM_THERMOSTAT, entry).find(one => one.name === name);
    if (!found) {
        throw new Error(`no field ${name}`);
    }
    return found as ChangeField;
};

/** Picks `id` as the main Bedeutung and returns the data the handler last hands to vis-2. */
async function pickMain(
    id: string,
    data: WidgetData = {},
    objects: Record<string, ioBroker.Object> = heatingTestDevices().objects,
    entry?: number,
): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    const field = mainField(entry);
    await field.onChange(
        field,
        { ...data, [`soll${entry ?? ''}`]: id },
        newData => {
            emitted = structuredClone(newData);
        },
        socketOver(objects),
    );
    vi.runAllTimers();
    if (!emitted) {
        throw new Error('the main pick did not reach changeData');
    }
    return emitted;
}

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('main pick on the neutral device — the role path, no hint-table entry', () => {
    it('binds every Bedeutung that has a role, each with its object', async () => {
        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll));

        for (const field of [
            'ist',
            'luftfeuchte',
            'betriebsart',
            'boost',
            'fenster',
            'erreichbarkeit',
            'batterieSchwach',
            'batteriestand',
        ]) {
            expect(picked[field], field).toBe(at(NEUTRAL_DEVICE.binding[field]));
            expect((picked[`${field}Object`] as { _id?: string } | undefined)?._id, field).toBe(
                at(NEUTRAL_DEVICE.binding[field]),
            );
        }
    });

    it('fills the mapping of every bound Bedeutung with fixed values', async () => {
        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll));

        expect(picked.betriebsartZuordnung).toEqual({ auto: [0], manuell: [1], urlaub: [2] });
        expect(picked.boostZuordnung).toEqual({ an: [true], aus: [false] });
        expect(picked.fensterZuordnung).toEqual({ zu: [0], offen: [2, 1] });
        expect(picked.erreichbarkeitZuordnung).toEqual({ erreichbar: [true], unerreichbar: [false] });
        expect(picked.batterieSchwachZuordnung).toEqual({ schwach: [true], ok: [false] });
    });

    it('leaves the baits empty (value.timer, text) and binds no valve', async () => {
        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll));

        expect(picked.boostRestzeit).toBeUndefined();
        expect(picked.urlaubEnde).toBeUndefined();
        expect(Object.values(picked)).not.toContain(at(NEUTRAL_DEVICE.binding.ventil));
        expect(Object.keys(picked).filter(key => key.startsWith('ventil'))).toEqual([]);
    });
});

describe('main pick on the installation extract — role path and hint table', () => {
    const WTH2 = at(ANLAGE_WTH2.id);
    const FALMOT = at(ANLAGE_FALMOT.id);

    it('fills from both channels of the HmIP-WTH-2 with every mapping', async () => {
        const picked = await pickMain(`${WTH2}.1.SET_POINT_TEMPERATURE`);

        const bound = Object.fromEntries(
            ROOM_THERMOSTAT.meanings.filter(field => field !== 'soll').map(field => [field, picked[field]]),
        );
        expect(bound).toEqual({
            ist: `${WTH2}.1.ACTUAL_TEMPERATURE`,
            luftfeuchte: `${WTH2}.1.HUMIDITY`,
            betriebsart: `${WTH2}.1.SET_POINT_MODE`,
            betriebsartSetzen: `${WTH2}.1.CONTROL_MODE`,
            boost: `${WTH2}.1.BOOST_MODE`,
            boostBeenden: undefined,
            boostRestzeit: `${WTH2}.1.BOOST_TIME`,
            urlaub: `${WTH2}.1.PARTY_MODE`,
            urlaubEnde: `${WTH2}.1.PARTY_TIME_END`,
            fenster: `${WTH2}.1.WINDOW_STATE`,
            batterieSchwach: `${WTH2}.0.LOW_BAT`,
            batteriestand: `${WTH2}.0.OPERATING_VOLTAGE`,
            erreichbarkeit: `${WTH2}.0.UNREACH`,
        });
        expect(picked.betriebsartZuordnung).toEqual({ auto: [0], manuell: [1], urlaub: [2] });
        expect(picked.betriebsartSetzenZuordnung).toEqual({ auto: [0], manuell: [1] });
        expect(picked.boostRestzeitZuordnung).toEqual({ einheit: 'min' });
        expect(picked.urlaubZuordnung).toEqual({ an: [true], aus: [false] });
        expect(picked.urlaubEndeZuordnung).toEqual({ zeitformat: 'YYYY_MM_DD HH:mm' });
        expect(picked.boostZuordnung).toEqual({ an: [true], aus: [false] });
        expect(picked.fensterZuordnung).toEqual({ zu: [0], offen: [1] });
        expect(picked.erreichbarkeitZuordnung).toEqual({ erreichbar: [false], unerreichbar: [true] });
        expect(picked.batterieSchwachZuordnung).toEqual({ schwach: [true], ok: [false] });
    });

    it('binds no valve of the HmIP-FALMOT and takes the supply voltage of a device without battery flag for no battery', async () => {
        const picked = await pickMain(`${FALMOT}.1.LEVEL`);

        expect(picked.erreichbarkeit).toBe(`${FALMOT}.0.UNREACH`);
        expect(picked.batteriestand).toBeUndefined();
        const bound = ROOM_THERMOSTAT.meanings.filter(field => field !== 'soll' && picked[field] !== undefined);
        expect(bound).toEqual(['erreichbarkeit']);
        expect(Object.keys(picked).filter(key => key.startsWith('ventil'))).toEqual([]);
    });
});

describe('main pick — set fields stay', () => {
    it('keeps set fields and set mappings unchanged', async () => {
        const own = {
            ist: 'other.0.temperature',
            fensterZuordnung: { zu: [2], offen: [0] },
            boost: 'nothing_selected',
        };

        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll), own);

        expect(picked.ist).toBe('other.0.temperature');
        expect(picked.istObject).toBeUndefined();
        expect(picked.fenster).toBe(at(NEUTRAL_DEVICE.binding.fenster));
        expect(picked.fensterZuordnung).toEqual({ zu: [2], offen: [0] });
        // `nothing_selected` is vis-2's empty id field: it is filled.
        expect(picked.boost).toBe(at(NEUTRAL_DEVICE.binding.boost));
    });

    it('prefills nothing on an emptied or unusable main pick', async () => {
        const emptied = await pickMain('');
        const unusable = await pickMain(at(NEUTRAL_DEVICE.binding.boost));

        expect(Object.keys(emptied)).toEqual(['soll']);
        expect(Object.keys(unusable)).toEqual(['soll']);
    });

    it('prefills nothing on the pick of another Bedeutung', async () => {
        const field = heatingBindingFields(ROOM_THERMOSTAT).find(one => one.name === 'ist') as ChangeField;
        let emitted: WidgetData | undefined;

        await field.onChange(
            field,
            { ist: at(NEUTRAL_DEVICE.binding.ist) },
            newData => {
                emitted = newData;
            },
            socketOver(heatingTestDevices().objects),
        );
        vi.runAllTimers();

        expect(Object.keys(emitted ?? {}).sort()).toEqual(['ist', 'istObject']);
    });
});

describe('main pick of a list entry (ADR-0121 seam)', () => {
    it('fills the numbered keys of the entry', async () => {
        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll), {}, undefined, 3);

        expect(picked.ist3).toBe(at(NEUTRAL_DEVICE.binding.ist));
        expect((picked.ist3Object as { _id?: string })._id).toBe(at(NEUTRAL_DEVICE.binding.ist));
        expect(picked.fenster3Zuordnung).toEqual({ zu: [0], offen: [2, 1] });
        expect(picked.ist).toBeUndefined();
    });
});

type PanelProps = { data: WidgetData };

/** The attribute panel's binding fields of the Raumthermostat over one widget's stored data. */
function Panel({ data }: PanelProps): React.JSX.Element {
    const props = {
        context: { theme: vis2HostTheme, socket: {}, views: { v: { widgets: { w1: { data } } } } },
        selectedView: 'v',
        selectedWidgets: ['w1'],
        selectedWidget: 'w1',
        Editor: () => null,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    // The Wertezuordnung rows are covered elsewhere; this panel shows the prefill's own rows.
    const fields = heatingBindingFields(ROOM_THERMOSTAT).filter(field => !field.name?.startsWith('zuordnung:'));
    return (
        <Vis2GroupBody
            fields={fields as Vis2PanelField[]}
            data={data}
            stored={[data]}
            onDataChange={() => undefined}
            props={props}
        />
    );
}

let panel: RenderComponentHandle<PanelProps> | undefined;

afterEach(() => {
    panel?.unmount();
    panel = undefined;
});

/** The text of every InfoBox the panel shows for `data`. */
const infoBoxesOf = (data: WidgetData): string[] => {
    panel = renderComponent<PanelProps>(Panel, { data });
    return [...panel.container.querySelectorAll('[data-info-box]')].map(box => box.textContent ?? '');
};

describe('main pick — two candidates of one role (ADR-0119 Nachtrag)', () => {
    const SOLL = at(AMBIGUOUS_DEVICE.soll);

    it('takes the one candidate in the channel of the main Bedeutung', async () => {
        const picked = await pickMain(SOLL);

        expect(picked.ist).toBe(at(AMBIGUOUS_DEVICE.resolvedByChannel.inSetPointChannel));
    });

    it('leaves the field empty when the device holds several and its channel none', async () => {
        const picked = await pickMain(SOLL);

        expect(picked.fenster).toBeUndefined();
        expect(picked.fensterObject).toBeUndefined();
        expect(picked.fensterZuordnung).toBeUndefined();
    });

    it('leaves the field empty when the channel of the main Bedeutung holds several', async () => {
        const objects = heatingTestDevices().objects;
        const second = at(`${AMBIGUOUS_DEVICE.id}.thermostat.humidity2`);
        objects[second] = {
            ...objects[at(`${AMBIGUOUS_DEVICE.id}.thermostat.humidity`)],
            _id: second,
        } as ioBroker.Object;

        const picked = await pickMain(SOLL, {}, objects);

        expect(picked.luftfeuchte).toBeUndefined();
        expect(infoBoxesOf(picked).join()).toContain(second);
    });

    it('names the candidates in an InfoBox of the panel', async () => {
        const picked = await pickMain(SOLL);

        const boxes = infoBoxesOf(picked);

        expect(boxes).toHaveLength(1);
        expect(boxes[0]).toContain('t:heating_vorfuellen_mehrdeutig');
        expect(boxes[0]).toContain('t:heating_fenster');
        for (const candidate of AMBIGUOUS_DEVICE.unresolved.candidates) {
            expect(boxes[0]).toContain(at(candidate));
        }
        // The resolved Bedeutung is no candidate.
        expect(boxes[0]).not.toContain('t:heating_ist');
    });

    it('stores no candidate in the widget data', async () => {
        const picked = await pickMain(SOLL);

        expect(JSON.stringify(picked)).not.toContain(AMBIGUOUS_DEVICE.unresolved.candidates[0]);
    });

    it('drops the InfoBox once the field is set, and for another main pick', async () => {
        const picked = await pickMain(SOLL);

        expect(infoBoxesOf({ ...picked, fenster: 'other.0.window' })).toEqual([]);
        panel?.unmount();
        expect(infoBoxesOf({ ...picked, soll: at(NEUTRAL_DEVICE.binding.soll) })).toEqual([]);
    });

    it('shows no InfoBox after an unambiguous pick', async () => {
        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll));

        expect(infoBoxesOf(picked)).toEqual([]);
    });
});

describe('main pick — Bezeichnung and Unterzeile', () => {
    const SOLL = at(NEUTRAL_DEVICE.binding.soll);
    const DEVICE = at(NEUTRAL_DEVICE.id);

    /** The test devices plus room enums: id → [name, members]. */
    const withRooms = (
        rooms: Record<string, [ioBroker.StringOrTranslated, string[]]>,
    ): Record<string, ioBroker.Object> => {
        const objects = heatingTestDevices().objects;
        for (const [id, [name, members]] of Object.entries(rooms)) {
            objects[id] = { _id: id, type: 'enum', common: { name, members }, native: {} };
        }
        return objects;
    };

    it('takes the device name without room membership and leaves the Unterzeile empty', async () => {
        const picked = await pickMain(SOLL);
        const wth2 = await pickMain(`${at(ANLAGE_WTH2.id)}.1.SET_POINT_TEMPERATURE`);

        expect(picked.bezeichnung).toBe('Neutral thermostat');
        expect(picked.unterzeile).toBeUndefined();
        expect(wth2.bezeichnung).toBe('Thermostat Bad');
    });

    it('takes the room of the device, in the editor language, and the device name as Unterzeile', async () => {
        const objects = withRooms({ 'enum.rooms.bath': [{ en: 'Bathroom', de: 'Bad' }, [DEVICE]] });

        const picked = await pickMain(SOLL, {}, objects);

        expect(picked.bezeichnung).toBe('Bad');
        expect(picked.unterzeile).toBe('Neutral thermostat');
    });

    it('looks state, then channel, then device up — the first enum a member is in wins', async () => {
        const objects = withRooms({
            'enum.rooms.attic': ['Attic', [DEVICE]],
            'enum.rooms.hall': ['Hall', [at(`${NEUTRAL_DEVICE.id}.thermostat`)]],
            'enum.rooms.kitchen': ['Kitchen', [SOLL]],
            'enum.rooms.office': ['Office', [SOLL]],
        });

        const picked = await pickMain(SOLL, {}, objects);
        delete objects['enum.rooms.kitchen'];
        delete objects['enum.rooms.office'];
        const byChannel = await pickMain(SOLL, {}, objects);

        expect(picked.bezeichnung).toBe('Kitchen');
        expect(byChannel.bezeichnung).toBe('Hall');
    });

    it('ignores enums outside the rooms', async () => {
        const objects = withRooms({ 'enum.functions.heating': ['Heating', [DEVICE]] });

        const picked = await pickMain(SOLL, {}, objects);

        expect(picked.bezeichnung).toBe('Neutral thermostat');
        expect(picked.unterzeile).toBeUndefined();
    });

    it('keeps a set Bezeichnung and a set Unterzeile', async () => {
        const objects = withRooms({ 'enum.rooms.bath': ['Bath', [DEVICE]] });

        const ownName = await pickMain(SOLL, { bezeichnung: 'Mine' }, objects);
        const ownLine = await pickMain(SOLL, { unterzeile: 'Mine too' }, objects);

        expect(ownName.bezeichnung).toBe('Mine');
        // The Bezeichnung did not come from the room enum on this pick: no Unterzeile either.
        expect(ownName.unterzeile).toBeUndefined();
        expect(ownLine.bezeichnung).toBe('Bath');
        expect(ownLine.unterzeile).toBe('Mine too');
    });

    it('fills the numbered Bezeichnung of a list entry', async () => {
        const picked = await pickMain(SOLL, {}, undefined, 3);

        expect(picked.bezeichnung3).toBe('Neutral thermostat');
        expect(picked.bezeichnung).toBeUndefined();
    });
});

describe('main pick — what counts as the device', () => {
    it('reads the channel alone when no device stands above it', async () => {
        const objects = heatingTestDevices().objects;
        delete objects[at(NEUTRAL_DEVICE.id)];

        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll), {}, objects);

        expect(picked.ist).toBe(at(NEUTRAL_DEVICE.binding.ist));
        // The maintenance channel is another channel: without the device it is not read.
        expect(picked.erreichbarkeit).toBeUndefined();
        expect(picked.bezeichnung).toBe('Thermostat');
    });

    it('prefills nothing for a state without a channel above it', async () => {
        const objects = heatingTestDevices().objects;
        delete objects[at(NEUTRAL_DEVICE.id)];
        objects[at(`${NEUTRAL_DEVICE.id}.thermostat`)] = {
            ...objects[at(`${NEUTRAL_DEVICE.id}.thermostat`)],
            type: 'meta',
        } as ioBroker.Object;

        const picked = await pickMain(at(NEUTRAL_DEVICE.binding.soll), {}, objects);

        expect(Object.keys(picked).sort()).toEqual(['soll', 'sollObject']);
    });
});
