/**
 * The Lese-Naht for a missing Wertezuordnung (ADR-0120 Nachtrag „Spec Stufe 1 schreiben“): a bound
 * Bedeutung without its stored mapping reads what the pick of that one field would have stored.
 *
 * @module lib/heating/mappingReadSeam.test
 * @remarks
 * The existing seam of the loading hook (`usePickedWidgetData`) over a fake socket built from the
 * heating test devices, with the reading the widget takes from the Raumthermostat's binding fields
 * (`oidPickFieldsOf`). Observed: what the widget reads, the stored data, the socket's writes.
 */
import { act, createElement, type FC } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

import usePickedWidgetData from '../../hooks/usePickedWidgetData';
import { NO_FIELD_DEFAULTS } from '../fieldDefaults';
import { oidPickFieldsOf, type WidgetDataReading } from '../pickedWidgetData';
import { ANLAGE_WTH2, HEATING_TEST_PREFIX, heatingTestDevices } from '../testing/heatingTestDevices';
import { createTestRoot } from '../testing/testRoots';
import { heatingBindingFields } from './bindingFields';
import { ROOM_THERMOSTAT } from './meaningCatalog';

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const WTH2 = `${HEATING_TEST_PREFIX}${ANLAGE_WTH2.id}`;
const MODE = `${WTH2}.1.SET_POINT_MODE`;

const GROUPS: RxWidgetInfoGroup[] = [{ name: 'binding', fields: heatingBindingFields(ROOM_THERMOSTAT) }];
const READING: WidgetDataReading = { oidPickFields: oidPickFieldsOf(GROUPS), defaults: NO_FIELD_DEFAULTS };

/** A fake socket over the test devices; the writes must stay uncalled. */
const fakeSocket = (): {
    getObject: ReturnType<typeof vi.fn>;
    setObject: ReturnType<typeof vi.fn>;
    setState: ReturnType<typeof vi.fn>;
} => {
    const { objects } = heatingTestDevices();
    return {
        getObject: vi.fn((id: string): Promise<unknown> => Promise.resolve(objects[id])),
        setObject: vi.fn(),
        setState: vi.fn(),
    };
};

const unmounts: (() => void)[] = [];

afterEach(() => {
    unmounts.splice(0).forEach(unmount => unmount());
});

/** Renders the hook over `data` until its object reads have landed; returns what the widget reads. */
const readThrough = async (
    data: Record<string, unknown>,
    socket: ReturnType<typeof fakeSocket>,
): Promise<Record<string, unknown>> => {
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
        await new Promise(resolve => setTimeout(resolve, 0));
    });
    unmounts.push(() => act(() => root.unmount()));
    return captured.current!;
};

describe('Lese-Naht — a bound Bedeutung without its Wertezuordnung', () => {
    it('reads the mapping the pick of that field would have stored, and writes nothing', async () => {
        const stored = Object.freeze({ betriebsart: MODE });
        const socket = fakeSocket();

        const read = await readThrough(stored, socket);

        expect(read.betriebsartZuordnung).toEqual({ auto: [0], manuell: [1], urlaub: [2] });
        expect(stored).toEqual({ betriebsart: MODE });
        expect(socket.setObject).not.toHaveBeenCalled();
        expect(socket.setState).not.toHaveBeenCalled();
    });

    it('fills no other Bedeutung of the device', async () => {
        const read = await readThrough({ betriebsart: MODE }, fakeSocket());

        expect(Object.keys(read).sort()).toEqual(['betriebsart', 'betriebsartObject', 'betriebsartZuordnung']);
    });

    it('reads the derived mapping for a Bedeutung with its own object but no mapping, keeping the object', async () => {
        // E.g. after the user removed the last chip of a picked Bedeutung: the key is gone.
        const own = Object.freeze({ _id: MODE, type: 'number', commonStates: { 0: 'AUTO-MODE' } });
        const stored = Object.freeze({ betriebsart: MODE, betriebsartObject: own });
        const socket = fakeSocket();

        const read = await readThrough(stored, socket);

        expect(read.betriebsartZuordnung).toEqual({ auto: [0], manuell: [1], urlaub: [2] });
        expect(read.betriebsartObject).toBe(own);
        expect(socket.setObject).not.toHaveBeenCalled();
        expect(socket.setState).not.toHaveBeenCalled();
    });

    it('keeps a stored mapping', async () => {
        const own = { auto: [1], manuell: [0] };

        const read = await readThrough({ betriebsart: MODE, betriebsartZuordnung: own }, fakeSocket());

        expect(read.betriebsartZuordnung).toEqual(own);
    });
});
