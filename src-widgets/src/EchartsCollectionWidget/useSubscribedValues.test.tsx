/**
 * useSubscribedValues — the live value map follows the watched OIDs.
 *
 * @module EchartsCollectionWidget/useSubscribedValues.test
 * @remarks
 * The map is seeded from the current states and updated by the subscription. An OID that leaves
 * the list leaves the map, even when the seed of the new list fails.
 */
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Connection } from '@iobroker/gui-components';

import { useSubscribedValues, type SubscribedValues } from './useSubscribedValues';
import { renderHook, type RenderHookHandle } from '../lib/testing/testHarness';

const mounted: RenderHookHandle<SubscribedValues>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
});

/** A socket whose states hold the given values; `failSeed` makes every later getState reject. */
const socketWith = (vals: Record<string, ioBroker.StateValue>): { socket: Connection; failSeed: () => void } => {
    let failing = false;
    const socket = {
        getState: vi.fn((id: string) =>
            failing ? Promise.reject(new Error('offline')) : Promise.resolve({ val: vals[id] }),
        ),
        subscribeStateAsync: vi.fn(() => Promise.resolve()),
        unsubscribeState: vi.fn(),
    } as unknown as Connection;
    return { socket, failSeed: () => (failing = true) };
};

/** Lets the getState seed settle. */
const settle = async (): Promise<void> => {
    await act(async () => {
        await Promise.resolve();
        await Promise.resolve();
    });
};

describe('useSubscribedValues', () => {
    it('seeds the map with the current values', async () => {
        const { socket } = socketWith({ 'a.0': 1, 'b.0': 2 });
        const handle = renderHook(() => useSubscribedValues(['a.0', 'b.0'], socket));
        mounted.push(handle);
        await settle();
        expect(handle.result.current).toEqual({ 'a.0': 1, 'b.0': 2 });
    });

    it('drops an OID that leaves the list, also when the new seed fails', async () => {
        const { socket, failSeed } = socketWith({ 'a.0': 1, 'b.0': 2 });
        const handle = renderHook(() => useSubscribedValues(['a.0', 'b.0'], socket));
        mounted.push(handle);
        await settle();

        failSeed();
        act(() => {
            handle.rerender(() => useSubscribedValues(['a.0'], socket));
        });
        await settle();
        expect(handle.result.current).toEqual({ 'a.0': 1 });
    });
});
