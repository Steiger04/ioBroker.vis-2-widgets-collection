/**
 * useValueState — the hook fabric over the pure transitions.
 *
 * @module hooks/useValueState.hook.test
 * @remarks
 * Pins what the hook adds AROUND {@link module:hooks/useValueState.test} (the pure
 * decision logic): the `updateValue` guards (no OID, read-only, rejected
 * conversion), the optimistic `setState` shape (`.val` + `.lc` sentinel) and the
 * ignore-window echo absorption end-to-end, for both outputs (`hasBackendChange`,
 * `hasForeignChange`), and the immediate option (ADR-0110 Nr. 5). The pure transitions' semantics
 * (ADR-0087) are pinned in the node-project suite; the string case here
 * mirrors it once for the composed path.
 */
import { act } from 'react';
import { createElement, type FC } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CollectionContext } from '../components/CollectionProvider';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import useValueState, { type UseValueStateReturn } from './useValueState';
import type { AllCollectionContextProps } from '../types';

const OID = 'adapter.0.test';

/** Mutable box the stub context reads from — the widget's state.values in miniature. */
interface ContextBox {
    data: Record<string, unknown>;
    values: Record<string, unknown>;
    setState: ReturnType<typeof vi.fn>;
    setValue: ReturnType<typeof vi.fn>;
}

const makeBox = (data: Record<string, unknown>, values: Record<string, unknown> = {}): ContextBox => {
    const box = {} as ContextBox;

    box.data = data;
    box.values = values;
    box.setValue = vi.fn();
    box.setState = vi.fn(
        (updater: (prev: { values: Record<string, unknown> }) => { values: Record<string, unknown> }) => {
            // Apply like the real widget: the merged values land in state.values.
            box.values = updater({ values: box.values }).values ?? box.values;
        },
    );

    return box;
};

const makeContext = (box: ContextBox): AllCollectionContextProps =>
    ({
        widget: { data: box.data },
        get values(): Record<string, unknown> {
            return box.values;
        },
        getPropertyValue: (name: string): unknown => box.values[`${box.data[name]}.val`],
        setState: box.setState,
        setValue: box.setValue,
    }) as unknown as AllCollectionContextProps;

interface Mounted {
    captured: { current?: UseValueStateReturn };
    rerender: () => void;
    unmount: () => void;
}

const mount = (box: ContextBox): Mounted => {
    const captured: { current?: UseValueStateReturn } = {};

    const Inner: FC = () => {
        captured.current = useValueState('oid');
        return null;
    };

    const Probe: FC<{ context: AllCollectionContextProps }> = ({ context }) =>
        createElement(CollectionContext.Provider, { value: context }, createElement(Inner));

    const handle: RenderComponentHandle<{ context: AllCollectionContextProps }> = renderComponent(Probe, {
        context: makeContext(box),
    });

    return {
        captured,
        rerender: (): void => handle.rerender({ context: makeContext(box) }),
        unmount: (): void => handle.unmount(),
    };
};

const numberOid = (): Record<string, unknown> => ({
    oid: OID,
    oidObject: { _id: OID, type: 'number', write: true },
    delay: 0,
});

const stringOid = (): Record<string, unknown> => ({
    oid: OID,
    oidObject: { _id: OID, type: 'string', write: true },
    delay: 0,
});

const flushWrites = async (ms: number): Promise<void> => {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(ms);
    });
};

describe('useValueState hook', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('returns the bound value from the context', () => {
        const box = makeBox(stringOid(), { [`${OID}.val`]: 'hallo' });
        const { captured, unmount } = mount(box);

        expect(captured.current?.value).toBe('hallo');
        unmount();
    });

    it('updateValue is a no-op without a bound OID object', () => {
        const box = makeBox({ oid: 'nothing_selected' });
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('x');
        });

        expect(box.setState).not.toHaveBeenCalled();
        unmount();
    });

    it('updateValue never writes to a read-only state (write === false)', () => {
        const box = makeBox({ oid: OID, oidObject: { _id: OID, type: 'string', write: false }, delay: 0 });
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('x');
        });

        expect(box.setState).not.toHaveBeenCalled();
        expect(box.setValue).not.toHaveBeenCalled();
        unmount();
    });

    it.each([
        ['onlyDisplay', true, { onlyDisplay: true, oidObject: { _id: OID, type: 'string', write: true } }],
        [
            'a non-writable bound object (write === false)',
            true,
            { oidObject: { _id: OID, type: 'string', write: false } },
        ],
        ['a writable bound object', false, { oidObject: { _id: OID, type: 'string', write: true } }],
        ['a bound object without write (writable by convention)', false, { oidObject: { _id: OID, type: 'string' } }],
        // The lock follows the object actually bound, not the root `write` copy.
        [
            'a stale root write === false over a writable object',
            false,
            { write: false, oidObject: { _id: OID, type: 'string', write: true } },
        ],
    ])('locked (Sperre) for %s is %s', (_case, locked, data) => {
        const box = makeBox({ oid: OID, delay: 0, ...data });
        const { captured, unmount } = mount(box);

        expect(captured.current?.locked).toBe(locked);
        unmount();
    });

    it('Sperre ist weiter als der Guard: onlyDisplay locks, yet updateValue still writes a writable object', async () => {
        // A leaked onlyDisplay on a Light2 Hilfs-OID (ADR-0096, no heal) must not stop its writes.
        const box = makeBox({ ...stringOid(), onlyDisplay: true });
        const { captured, unmount } = mount(box);

        expect(captured.current?.locked).toBe(true);

        act(() => {
            captured.current?.updateValue('neu');
        });
        await flushWrites(1);

        expect(box.values[`${OID}.val`]).toBe('neu');
        expect(box.setValue).toHaveBeenCalledWith(OID, 'neu');
        unmount();
    });

    it('updateValue drops values that fail type conversion', () => {
        const box = makeBox(numberOid());
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('not-a-number');
        });

        expect(box.setState).not.toHaveBeenCalled();
        unmount();
    });

    it('updateValue applies the optimistic state shape and writes through the debounce', async () => {
        const box = makeBox(stringOid());
        const { captured, rerender, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('neu');
        });

        // Optimistic shape: value under `.val`, own-write sentinel under `.lc`.
        expect(box.values[`${OID}.val`]).toBe('neu');
        expect(box.values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);

        rerender();
        expect(captured.current?.value).toBe('neu');

        await flushWrites(1);
        expect(box.setValue).toHaveBeenCalledWith(OID, 'neu');
        unmount();
    });

    it('absorbs the own write echo and flags a later foreign numeric change', async () => {
        const box = makeBox(numberOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 5 });
        const { captured, rerender, unmount } = mount(box);

        // First observation initialises without flagging.
        rerender();
        expect(captured.current?.hasBackendChange).toBe(false);

        act(() => {
            captured.current?.updateValue(6);
        });
        await flushWrites(1);

        // Echo inside the ignore window: absorbed. NOTE the window quirk this pins:
        // delay 0 is falsy, so `Number(delay) || 300` makes the effective delay 300
        // → the window is 300 + 1500 = 1800 ms (the write itself still debounces
        // with 0 — useDebounce keeps an explicit 0).
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 6 };
        await flushWrites(100);
        rerender();
        expect(captured.current?.hasBackendChange).toBe(false);

        // Foreign change past the window: flagged (numeric delta ≥ 1).
        box.values = { ...box.values, [`${OID}.lc`]: 3000, [`${OID}.val`]: 42 };
        await flushWrites(2500);
        rerender();
        expect(captured.current?.hasBackendChange).toBe(true);
        unmount();
    });

    it('flags a foreign string change past the window (ADR-0087)', async () => {
        const box = makeBox(stringOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 'an' });
        const { captured, rerender, unmount } = mount(box);

        rerender(); // first observation
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 'aus' };
        await flushWrites(2000);
        rerender();

        // One non-coercing side ('an'/'aus') → any change is significant.
        expect(captured.current?.hasBackendChange).toBe(true);
        unmount();
    });

    it('stays true across two consecutive foreign changes — a state, not an event', async () => {
        const box = makeBox(numberOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 10 });
        const { captured, rerender, unmount } = mount(box);

        rerender(); // first observation
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 20 };
        await flushWrites(2000);
        rerender();
        expect(captured.current?.hasBackendChange).toBe(true);

        // The second foreign change does NOT toggle the flag: a consumer effect
        // keyed on the flag alone never re-runs — it must key on the value too.
        box.values = { ...box.values, [`${OID}.lc`]: 3000, [`${OID}.val`]: 30 };
        await flushWrites(2000);
        rerender();
        expect(captured.current?.hasBackendChange).toBe(true);
        expect(captured.current?.value).toBe(30);
        unmount();
    });

    it('flags sub-unit jitter as a Fremdänderung, not as significant (ADR-0087 addendum)', async () => {
        const box = makeBox(numberOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 0.2 });
        const { captured, rerender, unmount } = mount(box);

        rerender(); // first observation
        expect(captured.current?.hasForeignChange).toBe(false);

        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 0.7 };
        await flushWrites(2000);
        rerender();

        expect(captured.current?.hasForeignChange).toBe(true);
        expect(captured.current?.hasBackendChange).toBe(false);
        unmount();
    });

    it('absorbs the own write echo for hasForeignChange too', async () => {
        const box = makeBox(numberOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 0.2 });
        const { captured, rerender, unmount } = mount(box);

        rerender(); // first observation
        act(() => {
            captured.current?.updateValue(0.5);
        });
        rerender();
        expect(captured.current?.hasForeignChange).toBe(false);

        // Echo inside the 1800 ms window (see the quirk above): absorbed.
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 0.4 };
        await flushWrites(100);
        rerender();
        expect(captured.current?.hasForeignChange).toBe(false);
        unmount();
    });
});

describe('useValueState hook — the immediate option (ticket 06)', () => {
    const IMMEDIATE = { immediate: true };

    /** A writable string OID behind the given write interval. */
    const stringOidWith = (writeInterval: Record<string, unknown>): Record<string, unknown> => ({
        oid: OID,
        oidObject: { _id: OID, type: 'string', write: true },
        ...writeInterval,
    });

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('sends at once, past the debounce, and keeps the optimistic patch', () => {
        const box = makeBox(stringOidWith({ delay: 1000 }));
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('neu', IMMEDIATE);
        });

        expect(box.setValue.mock.calls).toEqual([[OID, 'neu']]);
        expect(box.values[`${OID}.val`]).toBe('neu');
        expect(box.values[`${OID}.lc`]).toBe(VALUE_NOT_CHANGED_TIMESTAMP);
        unmount();
    });

    it('sends each value once, in order, and the debounce adds nothing later', async () => {
        const box = makeBox(stringOidWith({}));
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('erster', IMMEDIATE);
            captured.current?.updateValue('zweiter', IMMEDIATE);
        });
        expect(box.setValue.mock.calls).toEqual([
            [OID, 'erster'],
            [OID, 'zweiter'],
        ]);

        await flushWrites(5000);

        expect(box.setValue).toHaveBeenCalledTimes(2);
        unmount();
    });

    it.each([
        ['debounce', {}],
        ['throttle', { sampleInterval: true, sampleIntervalValue: 200 }],
    ])('%s: a waiting value is dropped, not sent afterwards', async (_case, writeInterval) => {
        const box = makeBox(stringOidWith(writeInterval));
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('wartend');
        });
        await flushWrites(100);
        act(() => {
            captured.current?.updateValue('sofort', IMMEDIATE);
        });
        await flushWrites(5000);

        expect(box.setValue.mock.calls).toEqual([[OID, 'sofort']]);
        unmount();
    });

    it.each([
        ['debounce', {}, 300],
        ['throttle', { sampleInterval: true, sampleIntervalValue: 200 }, 200],
    ])('%s: the next plain value waits its interval again', async (_case, writeInterval, interval) => {
        const box = makeBox(stringOidWith(writeInterval));
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('sofort', IMMEDIATE);
            captured.current?.updateValue('danach');
        });
        await flushWrites(interval - 1);
        expect(box.setValue.mock.calls).toEqual([[OID, 'sofort']]);

        await flushWrites(1);
        expect(box.setValue.mock.calls).toEqual([
            [OID, 'sofort'],
            [OID, 'danach'],
        ]);
        unmount();
    });

    it('a plain value without the option still waits', async () => {
        const box = makeBox(stringOidWith({}));
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('neu', { immediate: false });
        });
        expect(box.setValue).not.toHaveBeenCalled();

        await flushWrites(300);
        expect(box.setValue.mock.calls).toEqual([[OID, 'neu']]);
        unmount();
    });

    it('converts the value like the debounced write', () => {
        const box = makeBox({ ...numberOid(), delay: 300 });
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('5', IMMEDIATE);
        });

        expect(box.setValue.mock.calls).toEqual([[OID, 5]]);
        unmount();
    });

    it.each([
        ['no bound object', { oid: 'nothing_selected' }, 'x'],
        [
            'a read-only object (write === false)',
            { oid: OID, oidObject: { _id: OID, type: 'string', write: false } },
            'x',
        ],
        ['a failed conversion', numberOid(), 'not-a-number'],
    ])('the guards hold: %s sends nothing', (_case, data, value) => {
        const box = makeBox(data);
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue(value, IMMEDIATE);
        });

        expect(box.setState).not.toHaveBeenCalled();
        expect(box.setValue).not.toHaveBeenCalled();
        unmount();
    });

    it('a failed conversion leaves a waiting value alone', async () => {
        const box = makeBox({ ...numberOid(), delay: 300 });
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue(7);
            captured.current?.updateValue('not-a-number', IMMEDIATE);
        });
        await flushWrites(300);

        expect(box.setValue.mock.calls).toEqual([[OID, 7]]);
        unmount();
    });

    it('the echo of an immediate value is no Fremdänderung, a later change is (ADR-0087)', async () => {
        const box = makeBox(numberOid(), { [`${OID}.lc`]: 1000, [`${OID}.val`]: 5 });
        const { captured, rerender, unmount } = mount(box);

        rerender(); // first observation
        act(() => {
            captured.current?.updateValue(6, IMMEDIATE);
        });
        rerender();

        // Echo inside the 1800 ms window (delay 0 counts as 300 there, see above): absorbed.
        box.values = { ...box.values, [`${OID}.lc`]: 2000, [`${OID}.val`]: 6 };
        await flushWrites(100);
        rerender();
        expect(captured.current?.hasForeignChange).toBe(false);
        expect(captured.current?.hasBackendChange).toBe(false);

        box.values = { ...box.values, [`${OID}.lc`]: 3000, [`${OID}.val`]: 42 };
        await flushWrites(2500);
        rerender();
        expect(captured.current?.hasForeignChange).toBe(true);
        expect(captured.current?.hasBackendChange).toBe(true);
        unmount();
    });
});

describe('useValueState hook — write interval (delayFields defaults)', () => {
    /** A writable string OID with the given write-interval configuration — and nothing else. */
    const stringOidWith = (writeInterval: Record<string, unknown>): Record<string, unknown> => ({
        oid: OID,
        oidObject: { _id: OID, type: 'string', write: true },
        ...writeInterval,
    });

    /** Writes 'neu', then takes the backend writes made so far at each elapsed time (ms, ascending). */
    const writesAt = async (data: Record<string, unknown>, checkpoints: number[]): Promise<unknown[][][]> => {
        const box = makeBox(data);
        const { captured, unmount } = mount(box);

        act(() => {
            captured.current?.updateValue('neu');
        });

        const snapshots: unknown[][][] = [];
        let elapsed = 0;
        for (const checkpoint of checkpoints) {
            await flushWrites(checkpoint - elapsed);
            elapsed = checkpoint;
            snapshots.push([...box.setValue.mock.calls]);
        }
        unmount();

        return snapshots;
    };

    /** The one backend write of 'neu'. */
    const WRITTEN = [[OID, 'neu']];

    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it.each([
        ['missing', {}],
        ['blank', { delay: '' }],
        ['not a number', { delay: 'soon' }],
    ])('debounces with the 300 ms field default when the delay is %s', async (_case, writeInterval) => {
        // Nothing written at 299 ms, the write at 300 ms.
        expect(await writesAt(stringOidWith(writeInterval), [299, 300])).toEqual([[], WRITTEN]);
    });

    it('keeps an explicit delay of 0: the write goes out at once', async () => {
        expect(await writesAt(stringOidWith({ delay: 0 }), [1])).toEqual([WRITTEN]);
    });

    it('throttles with the 200 ms field default when sampling without an interval', async () => {
        // Trailing throttle: nothing written at 199 ms, the write at 200 ms.
        expect(await writesAt(stringOidWith({ sampleInterval: true }), [199, 200])).toEqual([[], WRITTEN]);
    });
});
