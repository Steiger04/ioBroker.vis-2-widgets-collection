/**
 * Editor OID-pick handler tests over a fake ioBroker object database.
 *
 * @module lib/commonObjectFields.test
 * @remarks
 * Observed through the handler's public contract: what it hands to vis-2's
 * `changeData`. The socket is the system boundary and is faked; nothing else is.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, RxWidgetInfoFieldChangeHandler, WidgetData } from '@iobroker/types-vis-2';

// The module's field lists (its own, and the per-state list its row keys come from) render
// CollectionDivider and colour fields, which pull Generic (extends window.visRxWidget, absent
// outside vis-2). The handler under test never renders them.
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));

import { ANY_VALUE_TYPES, JSON_TABLE_TYPES } from './allowedOidTypes';
import commonObjectFields, { oidChangeHandlerAsync } from './commonObjectFields';

const STATUS = 'zigbee.0.lamp.mode_status';
const COMMAND = 'zigbee.0.lamp.mode_set';
const MODES = { 0: 'Off', 1: 'Eco', 2: 'Comfort' };

// Typical control-ID setup: a read-only status state plus a writable command state
// with its own icon and range, so any leak into the root fields is visible.
const OBJECTS: Record<string, unknown> = {
    'zigbee.0.lamp': { _id: 'zigbee.0.lamp', type: 'device', common: { name: 'Lamp', icon: 'lamp.png' } },
    [STATUS]: {
        _id: STATUS,
        type: 'state',
        common: {
            name: 'Mode status',
            type: 'number',
            role: 'value',
            read: true,
            write: false,
            min: 0,
            max: 2,
            states: MODES,
        },
    },
    [COMMAND]: {
        _id: COMMAND,
        type: 'state',
        common: {
            name: 'Mode command',
            type: 'number',
            role: 'level',
            read: true,
            write: true,
            min: 10,
            max: 20,
            icon: 'command.png',
            unit: 'W',
            states: MODES,
        },
    },
};

const SCENE = 'zigbee.0.lamp.scene';
const POWER = 'zigbee.0.lamp.on';
OBJECTS[SCENE] = {
    _id: SCENE,
    type: 'state',
    common: { name: 'Scene', type: 'number', role: 'level', read: true, write: true, states: { 1: 'Eco', 3: 'Party' } },
};
OBJECTS[POWER] = {
    _id: POWER,
    type: 'state',
    common: { name: 'Power', type: 'boolean', role: 'switch', read: true, write: true },
};

const numberState = (
    id: string,
    common: { min?: number; max?: number; step?: number | null; unit?: string },
): unknown => ({
    _id: id,
    type: 'state',
    common: { name: id, type: 'number', role: 'level', read: true, write: true, ...common },
});

// Numbers without common.states, one per shape a real range can take.
const COOLING = 'zigbee.0.lamp.cooling';
const NO_RANGE = 'zigbee.0.lamp.no_range';
const MIN_ONLY = 'zigbee.0.lamp.min_only';
const MAX_ONLY = 'zigbee.0.lamp.max_only';
OBJECTS[COOLING] = numberState(COOLING, { min: -10, max: 0 });
OBJECTS[NO_RANGE] = numberState(NO_RANGE, {});
OBJECTS[MIN_ONLY] = numberState(MIN_ONLY, { min: 5 });
OBJECTS[MAX_ONLY] = numberState(MAX_ONLY, { max: 50 });

const TEMPERATURE = 'zigbee.0.lamp.temperature';
OBJECTS[TEMPERATURE] = numberState(TEMPERATURE, { unit: '°C' });

const fakeSocket = {
    getObject: (id: string): Promise<unknown> => Promise.resolve(OBJECTS[id]),
} as unknown as Connection;

const FIELD = {} as RxWidgetInfoAttributesField;

/** Runs one editor pick of `idName` and returns the data the handler hands to vis-2. */
async function pick(
    idName: string,
    data: WidgetData,
    handler: RxWidgetInfoFieldChangeHandler = oidChangeHandlerAsync(ANY_VALUE_TYPES, idName),
    socket: Connection = fakeSocket,
): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    await handler(
        FIELD,
        data,
        newData => {
            emitted = newData;
        },
        socket,
    );
    vi.runAllTimers();
    if (!emitted) {
        throw new Error(`the ${idName} pick did not reach changeData`);
    }
    return emitted;
}

/** The main-OID pick of the read-only status state, as the editor stores it today (rows: value and alias only). */
const STATUS_PICKED = {
    oid: STATUS,
    oidObject: {
        _id: STATUS,
        name: 'Mode status',
        type: 'number',
        icon: 'lamp.png',
        write: false,
        onlyDisplay: true,
        unit: '',
        minValue: 0,
        maxValue: 2,
        commonStates: MODES,
    },
    icon: 'lamp.png',
    write: false,
    onlyDisplay: true,
    unit: '',
    minValue: 0,
    maxValue: 2,
    values_count: 3,
    ignoreCommonStates: false,
    value1: 0,
    alias1: 'Off',
    value2: 1,
    alias2: 'Eco',
    value3: 2,
    alias3: 'Comfort',
};

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('oidChangeHandlerAsync — main OID without a control ID (unchanged)', () => {
    it('stores the object, the root fields and the onlyDisplay suggestion', async () => {
        expect(await pick('oid', { oid: STATUS })).toEqual(STATUS_PICKED);
    });

    it('suggests an interactive control for a writable main OID', async () => {
        expect((await pick('oid', { oid: COMMAND })).onlyDisplay).toBe(false);
    });
});

describe('oidChangeHandlerAsync — the seeded range of a main-OID pick', () => {
    it('keeps a real common.max of 0 in the root field and the object copy', async () => {
        const picked = await pick('oid', { oid: COOLING });

        expect(picked).toMatchObject({ minValue: -10, maxValue: 0 });
        expect(picked.oidObject).toMatchObject({ minValue: -10, maxValue: 0 });
    });

    it('seeds a missing range with 0..100', async () => {
        const picked = await pick('oid', { oid: NO_RANGE });

        expect(picked).toMatchObject({ minValue: 0, maxValue: 100 });
        expect(picked.oidObject).toMatchObject({ minValue: 0, maxValue: 100 });
    });
});

describe('commonObjectFields — { inventRange: false }: a pick takes only the real range (ADR-0109 Nr. 8)', () => {
    /** A main-OID pick through the field the option builds. */
    const pickReal = (data: WidgetData): Promise<WidgetData> => {
        const field = commonObjectFields(ANY_VALUE_TYPES, { inventRange: false }).find(f => f.name === 'oid');

        return pick('oid', data, (field as { onChange: RxWidgetInfoFieldChangeHandler }).onChange);
    };

    it('leaves the root fields empty for an object without a range, the object copy stays seeded', async () => {
        const picked = await pickReal({ oid: NO_RANGE });

        expect(picked).not.toHaveProperty('minValue');
        expect(picked).not.toHaveProperty('maxValue');
        expect(picked.oidObject).toMatchObject({ minValue: 0, maxValue: 100 });
    });

    it('takes a real range, a bound of 0 included', async () => {
        expect(await pickReal({ oid: COOLING })).toMatchObject({ minValue: -10, maxValue: 0 });
    });

    it('removes the old range when the next object has none', async () => {
        const ranged = await pickReal({ oid: COOLING });

        const repicked = await pickReal({ ...ranged, oid: NO_RANGE });

        expect(repicked).not.toHaveProperty('minValue');
        expect(repicked).not.toHaveProperty('maxValue');
    });

    it.each([
        { oid: MIN_ONLY, kept: { minValue: 5 }, removed: 'maxValue' },
        { oid: MAX_ONLY, kept: { maxValue: 50 }, removed: 'minValue' },
    ])('checks each bound on its own: $oid takes $kept and loses $removed', async ({ oid, kept, removed }) => {
        const picked = await pickReal({ oid, minValue: 1, maxValue: 9 });

        expect(picked).toMatchObject(kept);
        expect(picked).not.toHaveProperty(removed);
    });

    it('changes nothing else of the pick', async () => {
        expect(await pickReal({ oid: STATUS })).toEqual(STATUS_PICKED);
    });
});

/** The rows 1..values_count as `[value, alias, iconColor]` — what the runtime walks. */
const rowsOf = (data: WidgetData): unknown[][] =>
    Array.from({ length: data.values_count as number }, (_, i) => [
        data[`value${i + 1}`],
        data[`alias${i + 1}`],
        data[`iconColor${i + 1}`],
    ]);

describe('oidChangeHandlerAsync — common.step joins the object copy (ticket 16, ADR-0110 Nr. 12)', () => {
    const STEPPED = 'zigbee.0.lamp.stepped';
    OBJECTS[STEPPED] = numberState(STEPPED, { step: 0.5 });

    it('takes common.step into the object copy', async () => {
        const picked = await pick('oid', { oid: STEPPED });

        expect(picked.oidObject?.step).toBe(0.5);
    });

    it('leaves the key out for an object without common.step', async () => {
        const picked = await pick('oid', { oid: NO_RANGE });

        expect(Object.keys(picked.oidObject ?? {})).not.toContain('step');
    });

    it('leaves the key out for a common.step of null', async () => {
        const nullStep = 'zigbee.0.lamp.null_step';
        OBJECTS[nullStep] = numberState(nullStep, { step: null });

        const picked = await pick('oid', { oid: nullStep });

        expect(Object.keys(picked.oidObject ?? {})).not.toContain('step');
    });

    it('drops an old step when the next object has none', async () => {
        const picked = await pick('oid', { oid: NO_RANGE, oidObject: { step: 0.5 } });

        expect(Object.keys(picked.oidObject ?? {})).not.toContain('step');
    });

    it('does not touch a root field step', async () => {
        expect((await pick('oid', { oid: STEPPED, step: 7 })).step).toBe(7);
        expect(Object.keys(await pick('oid', { oid: STEPPED }))).not.toContain('step');
    });

    it.each(['cid', 'dialogId'])('%s: takes it into its own copy, never into the root', async idName => {
        const picked = await pick(idName, { [idName]: STEPPED });

        expect(picked[`${idName}Object`]?.step).toBe(0.5);
        expect(Object.keys(picked)).not.toContain('step');
    });
});

describe('oidChangeHandlerAsync — the main-OID pick supplements the Zustandszeilen (ADR-0104 §6)', () => {
    it('creates one row per state on a first pick, with ignoreCommonStates off', async () => {
        const picked = await pick('oid', { oid: STATUS, values_count: 0 });

        expect(rowsOf(picked)).toEqual([
            [0, 'Off', undefined],
            [1, 'Eco', undefined],
            [2, 'Comfort', undefined],
        ]);
        expect(picked.ignoreCommonStates).toBe(false);
    });

    it('re-picking keeps order, alias and styles of the existing rows and appends the missing states', async () => {
        /** The user moved Comfort to the top, renamed and styled it; Off is gone. */
        const edited = {
            ...STATUS_PICKED,
            values_count: 2,
            value1: 2,
            alias1: 'Warm',
            iconColor1: 'blue',
            value2: 1,
            alias2: 'Eco',
            iconColor2: 'green',
            value3: null,
            alias3: null,
        };

        const repicked = await pick('oid', { ...edited, oid: SCENE });

        expect(rowsOf(repicked)).toEqual([
            [2, 'Warm', 'blue'],
            [1, 'Eco', 'green'],
            [3, 'Party', undefined],
        ]);
        expect(repicked.ignoreCommonStates).toBe(false);
    });

    it('takes over a widget saved with ignoreCommonStates on: its rows stay, the new states are appended', async () => {
        // Saved with the switch on: values_count 0, the three rows of the old OID filled.
        const legacy = { ...STATUS_PICKED, values_count: 0, ignoreCommonStates: true, iconColor3: 'red' };

        const repicked = await pick('oid', { ...legacy, oid: SCENE });

        expect(rowsOf(repicked)).toEqual([
            [0, 'Off', undefined],
            [1, 'Eco', undefined],
            [2, 'Comfort', 'red'],
            [3, 'Party', undefined],
        ]);
        expect(repicked.ignoreCommonStates).toBe(false);
    });

    it('seeds a boolean OID without common.states with TRUE/FALSE, and keeps them on a re-pick', async () => {
        const picked = await pick('oid', { oid: POWER, values_count: 0 });
        expect(rowsOf(picked)).toEqual([
            [true, 'TRUE', undefined],
            [false, 'FALSE', undefined],
        ]);

        const styled = { ...picked, value1: false, alias1: 'Aus', value2: true, alias2: 'An', iconColor2: 'red' };
        expect(rowsOf(await pick('oid', styled))).toEqual([
            [false, 'Aus', undefined],
            [true, 'An', 'red'],
        ]);
    });

    it('keeps own rows when the OID has no common.states', async () => {
        const own = { ...STATUS_PICKED, oid: 'zigbee.0.lamp.level', values_count: 1, value1: 7, alias1: 'Seven' };
        OBJECTS['zigbee.0.lamp.level'] = {
            _id: 'zigbee.0.lamp.level',
            type: 'state',
            common: { name: 'Level', type: 'number', role: 'level', read: true, write: true },
        };

        expect(rowsOf(await pick('oid', own))).toEqual([[7, 'Seven', undefined]]);
    });
});

describe('oidChangeHandlerAsync — the unit field of a main-OID pick (ADR-0109 Nr. 12)', () => {
    it('fills the field from the object, next to the object copy', async () => {
        const picked = await pick('oid', { oid: TEMPERATURE });

        expect(picked.unit).toBe('°C');
        expect(picked.oidObject?.unit).toBe('°C');
    });

    it('replaces an old override with the next object unit', async () => {
        const picked = await pick('oid', { oid: TEMPERATURE, unit: 'kWh', oidObject: { unit: 'kWh' } });

        expect(picked.unit).toBe('°C');
        expect(picked.oidObject?.unit).toBe('°C');
    });

    it('replaces an old unit with nothing when the next object has none', async () => {
        const picked = await pick('oid', { oid: NO_RANGE, unit: '°C', oidObject: { unit: '°C' } });

        expect(picked.unit).toBe('');
        expect(picked.oidObject?.unit).toBe('');
    });

    it('removes the field with the OID when the field is cleared', async () => {
        const picked = await pick('oid', { oid: TEMPERATURE });

        const cleared = await pick('oid', { ...picked, unit: 'K', oid: '' });

        expect(cleared.unit).toBeUndefined();
        expect(cleared.oidObject).toBeUndefined();
    });
});

describe('commonObjectFields — the unit field feeds the object copy', () => {
    const unitField = (): RxWidgetInfoAttributesField => {
        const field = commonObjectFields(ANY_VALUE_TYPES).find(f => f.name === 'unit');
        if (!field) {
            throw new Error('commonObjectFields built no unit field');
        }
        return field;
    };

    /** The panel's edit of the field: vis-2 stores the value, then runs the field's onChange. */
    const edit = (data: WidgetData, unit: string): Promise<WidgetData> =>
        pick('unit', { ...data, unit }, (unitField() as { onChange: RxWidgetInfoFieldChangeHandler }).onChange);

    it('overrides the copy with what the field says', async () => {
        const edited = await edit(await pick('oid', { oid: TEMPERATURE }), 'K');

        expect(edited.unit).toBe('K');
        expect(edited.oidObject?.unit).toBe('K');
    });

    it('removes the unit from the copy when the field is emptied', async () => {
        const edited = await edit(await pick('oid', { oid: TEMPERATURE }), '');

        expect(edited.unit).toBe('');
        expect(edited.oidObject?.unit).toBe('');
    });

    it('offers no unit field with { unit: false } (JSON table)', () => {
        const names = commonObjectFields(ANY_VALUE_TYPES, { unit: false }).map(field => field.name);

        expect(names).toEqual(['oid']);
    });
});

describe('commonObjectFields — the panel no longer offers the value-group switches', () => {
    it('has no ignoreCommonStates checkbox and no values_count number field', () => {
        const names = commonObjectFields(ANY_VALUE_TYPES).map(field => field.name);

        expect(names).not.toContain('ignoreCommonStates');
        expect(names).not.toContain('values_count');
    });
});

describe('commonObjectFields — the object dialog offers only the allowed types (ADR-0111 Nr. 4)', () => {
    it.each([
        { family: 'ANY_VALUE_TYPES', types: ANY_VALUE_TYPES },
        { family: 'JSON_TABLE_TYPES', types: JSON_TABLE_TYPES },
        { family: 'a single type', types: ['number'] as const },
    ])('the oid field filters on $family', ({ types }) => {
        const field = commonObjectFields(types).find(candidate => candidate.name === 'oid');

        expect((field as { filter?: unknown }).filter).toEqual({ common: { type: [...types] } });
    });
});

describe('oidChangeHandlerAsync — main OID cleared', () => {
    it('removes every key of every Zustandszeile, the icon colour mask included', async () => {
        const picked = await pick('oid', { oid: STATUS });
        const styled = { ...picked, enableIconColorMask2: true, iconColor2: 'red', header1: 'Off', iconHover3: 'x' };

        const cleared = await pick('oid', { ...styled, oid: '' });

        expect(Object.keys(cleared).filter(key => /\d$/.test(key))).toEqual([]);
    });

    it('removes the icon colour mask of a row with the row (authored rows, ignoreCommonStates off)', async () => {
        const rows = { oid: STATUS, ignoreCommonStates: false, values_count: 1, value1: 0, enableIconColorMask1: true };

        const cleared = await pick('oid', { ...rows, oid: '' });

        expect(cleared).not.toHaveProperty('enableIconColorMask1');
    });

    it('drops the bindings of the removed row keys and keeps every other binding', async () => {
        const picked = await pick('oid', { oid: STATUS });
        const bound = { ...picked, header1: '{a}', iconColor3: '{b}', title: '{c}' };

        const cleared = await pick('oid', { ...bound, oid: '', bindings: ['header1', 'title', 'iconColor3'] });

        expect(cleared.bindings).toEqual(['title']);
    });

    it('removes the rows of a widget saved with ignoreCommonStates on, counted from its states', async () => {
        const legacy = { ...STATUS_PICKED, values_count: 0, ignoreCommonStates: true };

        const cleared = await pick('oid', { ...legacy, oid: '' });

        expect(Object.keys(cleared).filter(key => /\d$/.test(key))).toEqual([]);
        expect(cleared.values_count).toBe(0);
        expect(cleared).not.toHaveProperty('icon');
        expect(cleared).not.toHaveProperty('oidObject');
    });
});

describe('oidChangeHandlerAsync — a pick without a usable object (ADR-0111 Nr. 1)', () => {
    const PARTIAL_ID = 'zigbee.0.la';
    /** A device: it resolves, but carries no value type. */
    const DEVICE = 'zigbee.0.lamp';

    const failingSocket = {
        getObject: (): Promise<unknown> => Promise.reject(new Error('socket down')),
    } as unknown as Connection;

    /** The ways to reach the case: the picked id, the field's allowed types, the socket. */
    const UNUSABLE = [
        { how: 'a type the field does not allow', id: COMMAND, types: ['boolean'] as const, socket: fakeSocket },
        { how: 'an object without a value type', id: DEVICE, types: ANY_VALUE_TYPES, socket: fakeSocket },
        { how: 'an id that does not resolve', id: PARTIAL_ID, types: ANY_VALUE_TYPES, socket: fakeSocket },
        { how: 'a socket error', id: COMMAND, types: ANY_VALUE_TYPES, socket: failingSocket },
    ];

    /** STATUS_PICKED without its OID object: what stays once the object is gone. */
    const { oidObject: _oidObject, ...STATUS_KEPT } = STATUS_PICKED;

    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe.each(UNUSABLE)('$how', ({ id, types, socket }) => {
        const pickUnusable = (name: string, data: WidgetData): Promise<WidgetData> =>
            pick(name, { ...data, [name]: id }, oidChangeHandlerAsync(types, name), socket);

        it('Haupt-OID: only its object goes, rows, bindings and root fields stay', async () => {
            const styled = { iconColor2: 'red', header1: '{a}', bindings: ['header1'] };

            expect(await pickUnusable('oid', { ...STATUS_PICKED, ...styled })).toEqual({
                ...STATUS_KEPT,
                ...styled,
                oid: id,
            });
        });

        it('Haupt-OID of a widget saved with ignoreCommonStates on: its rows stay, counted first', async () => {
            const legacy = { ...STATUS_PICKED, values_count: 0, ignoreCommonStates: true };

            // The same two keys a successful pick writes, or the rows would go with the states.
            expect(await pickUnusable('oid', legacy)).toEqual({ ...STATUS_KEPT, oid: id });
        });

        it('Steuer ID: its object goes, the write target falls back and the suggestion follows it', async () => {
            const commandPicked = await pick('cid', { ...STATUS_PICKED, cid: COMMAND });
            expect(commandPicked.onlyDisplay).toBe(false);

            expect(await pickUnusable('cid', commandPicked)).toEqual({ ...STATUS_PICKED, cid: id });
        });

        it.each(['dialogId', 'colorLightSwitchOid'])('Hilfs-OID %s: only its own object goes', async name => {
            const root = { icon: 'button.png', write: false, values_count: 2, value1: true, value2: false };
            const data = { ...root, [name]: STATUS, [`${name}Object`]: { _id: STATUS, type: 'number' } };

            expect(await pickUnusable(name, data)).toEqual({ ...root, [name]: id });
        });

        it('a later usable pick shows the rows again and supplements the missing states', async () => {
            const edited = { ...STATUS_PICKED, values_count: 2, alias2: 'Spar', iconColor2: 'green' };
            const dropped = await pickUnusable('oid', edited);

            const corrected = await pick('oid', { ...dropped, oid: SCENE });

            expect(rowsOf(corrected)).toEqual([
                [0, 'Off', undefined],
                [1, 'Spar', 'green'],
                [3, 'Party', undefined],
            ]);
            expect(corrected.oidObject).toMatchObject({ _id: SCENE });
        });

        it('a later usable pick brings back the rows of a widget saved with ignoreCommonStates on', async () => {
            const dropped = await pickUnusable('oid', {
                ...STATUS_PICKED,
                values_count: 0,
                ignoreCommonStates: true,
            });

            const corrected = await pick('oid', { ...dropped, oid: SCENE });

            expect(rowsOf(corrected)).toEqual([
                [0, 'Off', undefined],
                [1, 'Eco', undefined],
                [2, 'Comfort', undefined],
                [3, 'Party', undefined],
            ]);
        });

        it('emptying the field afterwards still removes the rows', async () => {
            const dropped = await pickUnusable('oid', STATUS_PICKED);

            const cleared = await pick('oid', { ...dropped, oid: '' });

            expect(Object.keys(cleared).filter(key => /\d$/.test(key))).toEqual([]);
            expect(cleared.values_count).toBe(0);
        });
    });

    it('sets no root field on a widget that has none yet', async () => {
        const picked = await pick('oid', { oid: PARTIAL_ID });

        expect(picked).toEqual({ oid: PARTIAL_ID, values_count: 0, ignoreCommonStates: false });
    });
});

describe('oidChangeHandlerAsync — control ID (Schreibziel, ADR-0090)', () => {
    /** The command state's metadata as stored in `cidObject`. */
    const COMMAND_OBJECT = {
        _id: COMMAND,
        name: 'Mode command',
        type: 'number',
        icon: 'command.png',
        write: true,
        onlyDisplay: false,
        unit: 'W',
        minValue: 10,
        maxValue: 20,
        commonStates: MODES,
    };

    it("regression: picking it after the main OID leaves the main OID's root fields alone", async () => {
        const statusPicked = await pick('oid', { oid: STATUS });

        expect(await pick('cid', { ...statusPicked, cid: COMMAND })).toEqual({
            ...STATUS_PICKED,
            cid: COMMAND,
            cidObject: COMMAND_OBJECT,
            // The only root field the control ID owns: its writable command unlocks the Select.
            onlyDisplay: false,
        });
    });

    it("keeps the control ID's suggestion when the main OID is picked afterwards (order-independent)", async () => {
        const commandPicked = await pick('cid', { cid: COMMAND });

        // Same stored data as the opposite picking order above.
        expect(await pick('oid', { ...commandPicked, oid: STATUS })).toEqual({
            ...STATUS_PICKED,
            cid: COMMAND,
            cidObject: COMMAND_OBJECT,
            onlyDisplay: false,
        });
    });

    it.each([
        { how: 'field cleared', cid: '' },
        { how: 'object no longer exists', cid: 'zigbee.0.lamp.removed' },
    ])('hands the suggestion back to the main OID when the control ID is gone ($how)', async ({ cid }) => {
        const statusPicked = await pick('oid', { oid: STATUS });
        const commandPicked = await pick('cid', { ...statusPicked, cid: COMMAND });

        // cidObject removed; the read-only status suggests display-only again.
        expect(await pick('cid', { ...commandPicked, cid })).toEqual({ ...STATUS_PICKED, cid });
    });
});

describe('oidChangeHandlerAsync — Hilfs-OID (ADR-0096)', () => {
    /** Root fields owned by the main OID; each differs from the command state's metadata. */
    const ROOT = { icon: 'button.png', write: false, onlyDisplay: true, unit: 'kWh', minValue: 1, maxValue: 5 };

    /** The command state's metadata as stored in `<name>Object`. */
    const COMMAND_OBJECT = {
        _id: COMMAND,
        name: 'Mode command',
        type: 'number',
        icon: 'command.png',
        write: true,
        onlyDisplay: false,
        unit: 'W',
        minValue: 10,
        maxValue: 20,
        commonStates: MODES,
    };

    // Dialog's session OID and one of Light2's channel IDs (resolved per channel).
    describe.each(['dialogId', 'colorLightSwitchOid'])('%s', name => {
        it('regression: a pick stores only its own object and leaves the root fields alone', async () => {
            expect(await pick(name, { ...ROOT, [name]: COMMAND })).toEqual({
                ...ROOT,
                [name]: COMMAND,
                [`${name}Object`]: COMMAND_OBJECT,
            });
        });

        it('clearing it removes only its own object and leaves the root fields alone', async () => {
            const picked = await pick(name, { ...ROOT, [name]: COMMAND });

            expect(await pick(name, { ...picked, [name]: '' })).toEqual({ ...ROOT, [name]: '' });
        });
    });
});
