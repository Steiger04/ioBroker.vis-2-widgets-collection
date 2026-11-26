/**
 * usePickedWidgetData — the objects the Lese-Naht reads through the widget's socket, and the data
 * the widget reads with them (KI-Integration, ADR-0114).
 *
 * @module hooks/usePickedWidgetData.test
 * @remarks
 * The seam is the hook's result over a fake socket (the system boundary). The widget-level reading
 * of the 13 widgets lives in `lib/aiRawDataRender.test`; this suite pins what a field's own pick
 * derivation reads: the state object and the object of its channel.
 */
import { act, createElement, type FC } from 'react';
import { describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

import { ANY_VALUE_TYPES } from '../lib/allowedOidTypes';
import { createIdField } from '../lib/commonObjectFields';
import { NO_FIELD_DEFAULTS } from '../lib/fieldDefaults';
import { oidPickFieldsOf, type WidgetDataReading } from '../lib/pickedWidgetData';
import { createTestRoot } from '../lib/testing/testRoots';
import usePickedWidgetData from './usePickedWidgetData';

// React 18+ requires the act-environment flag when driving updates outside react-dom/test-utils.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const DEVICE = 'hm-rpc.0.ABC';
const CHANNEL = `${DEVICE}.1`;
const SETPOINT = `${CHANNEL}.SET_POINT_MODE`;

const OBJECTS: Record<string, unknown> = {
    [DEVICE]: { _id: DEVICE, type: 'device', common: { name: 'Thermostat', icon: 'thermostat.png' }, native: {} },
    [CHANNEL]: {
        _id: CHANNEL,
        type: 'channel',
        common: { name: 'Climate' },
        native: { TYPE: 'HEATING_CLIMATECONTROL_TRANSCEIVER' },
    },
    [SETPOINT]: {
        _id: SETPOINT,
        type: 'state',
        common: { name: 'Mode', type: 'number', role: 'level.mode.thermostat', read: true, write: true },
        native: {},
    },
};

/** Stand-in field: derives `probeZuordnung` from its channel's type, nothing without a channel. */
const PROBE: RxWidgetInfoGroup[] = [
    {
        name: 'common',
        fields: [
            createIdField('probe', ANY_VALUE_TYPES, {
                pickDerivation: ({ channel }) =>
                    channel ? { probeZuordnung: { channelType: channel.native.TYPE as unknown } } : undefined,
            }),
        ],
    },
];

const READING: WidgetDataReading = { oidPickFields: oidPickFieldsOf(PROBE), defaults: NO_FIELD_DEFAULTS };

/** The socket calls the Lese-Naht may make; the writes must stay uncalled. */
interface FakeSocket {
    getObject: ReturnType<typeof vi.fn>;
    setObject: ReturnType<typeof vi.fn>;
    setState: ReturnType<typeof vi.fn>;
}

/** A fake socket over `objects`; `failing` ids reject like a socket error. */
const fakeSocket = (objects: Record<string, unknown>, failing: readonly string[] = []): FakeSocket => ({
    getObject: vi.fn((id: string): Promise<unknown> =>
        failing.includes(id) ? Promise.reject(new Error('socket error')) : Promise.resolve(objects[id]),
    ),
    setObject: vi.fn(),
    setState: vi.fn(),
});

/** Renders the hook over `data` until its object reads have landed; returns what the widget reads. */
const readThrough = async (data: Record<string, unknown>, socket: FakeSocket): Promise<Record<string, unknown>> => {
    const captured: { current?: Record<string, unknown> } = {};
    const Probe: FC = () => {
        captured.current = usePickedWidgetData(data, READING, socket as unknown as Connection);
        return null;
    };
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    await act(async () => {
        root.render(createElement(Probe));
        // The object, icon and channel reads land.
        await new Promise(resolve => setTimeout(resolve, 0));
    });
    return captured.current!;
};

describe('usePickedWidgetData — a field with its own pick derivation', () => {
    it('reads the channel object of the picked state for the derivation', async () => {
        const read = await readThrough({ probe: SETPOINT }, fakeSocket(OBJECTS));

        expect(read.probeZuordnung).toEqual({ channelType: 'HEATING_CLIMATECONTROL_TRANSCEIVER' });
        expect(read.probeObject).toMatchObject({ _id: SETPOINT });
    });

    it('reads no derivation without the channel object, and writes nothing', async () => {
        const socket = fakeSocket({ ...OBJECTS, [CHANNEL]: undefined });

        const read = await readThrough({ probe: SETPOINT }, socket);

        expect(read).not.toHaveProperty('probeZuordnung');
        expect(read.probeObject).toMatchObject({ _id: SETPOINT });
        expect(socket.setObject).not.toHaveBeenCalled();
        expect(socket.setState).not.toHaveBeenCalled();
    });

    it('reads no derivation when the channel read fails, and writes nothing', async () => {
        const socket = fakeSocket(OBJECTS, [CHANNEL]);

        const read = await readThrough({ probe: SETPOINT }, socket);

        expect(read).not.toHaveProperty('probeZuordnung');
        expect(read.probeObject).toMatchObject({ _id: SETPOINT });
        expect(socket.setObject).not.toHaveBeenCalled();
        expect(socket.setState).not.toHaveBeenCalled();
    });

    it('reads no object and no derivation when the state read fails', async () => {
        const read = await readThrough({ probe: SETPOINT }, fakeSocket(OBJECTS, [SETPOINT]));

        expect(read).toEqual({ probe: SETPOINT });
    });

    it('lets a stored key win and leaves the stored data untouched', async () => {
        const data = Object.freeze({ probe: SETPOINT, probeZuordnung: { auto: [0] } });

        const read = await readThrough(data, fakeSocket(OBJECTS));

        expect(read.probeZuordnung).toEqual({ auto: [0] });
        expect(data).toEqual({ probe: SETPOINT, probeZuordnung: { auto: [0] } });
    });
});
