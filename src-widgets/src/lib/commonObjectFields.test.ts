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
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

// The module's field list renders CollectionDivider, which pulls Generic (extends
// window.visRxWidget, absent outside vis-2). The handler under test never renders it.
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import { ANY_VALUE_TYPES } from './allowedOidTypes';
import { oidChangeHandlerAsync } from './commonObjectFields';

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
            states: MODES,
        },
    },
};

const fakeSocket = {
    getObject: (id: string): Promise<unknown> => Promise.resolve(OBJECTS[id]),
} as unknown as Connection;

const FIELD = {} as RxWidgetInfoAttributesField;

/** Runs one editor pick of `idName` and returns the data the handler hands to vis-2. */
async function pick(idName: string, data: WidgetData): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    await oidChangeHandlerAsync(ANY_VALUE_TYPES, idName)(
        FIELD,
        data,
        newData => {
            emitted = newData;
        },
        fakeSocket,
    );
    vi.runAllTimers();
    if (!emitted) {
        throw new Error(`the ${idName} pick did not reach changeData`);
    }
    return emitted;
}

/** The main-OID pick of the read-only status state, as the editor stores it today. */
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
    minValue: 0,
    maxValue: 2,
    values_count: 0,
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

describe('oidChangeHandlerAsync — control ID (Schreibziel, ADR-0090)', () => {
    /** The command state's metadata as stored in `cidObject`. */
    const COMMAND_OBJECT = {
        _id: COMMAND,
        name: 'Mode command',
        type: 'number',
        icon: 'command.png',
        write: true,
        onlyDisplay: false,
        unit: '',
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

describe('oidChangeHandlerAsync — auxiliary IDs other than the control ID (unchanged)', () => {
    it("keeps writing the picked object's root fields (Dialog's dialogId, Light2's channel IDs)", async () => {
        expect(await pick('dialogId', { dialogId: COMMAND })).toMatchObject({
            dialogIdObject: { _id: COMMAND },
            icon: 'command.png',
            write: true,
            onlyDisplay: false,
            minValue: 10,
            maxValue: 20,
        });
    });
});
