/**
 * useDebounce — what leaves the write stream, and when the widget goes away.
 *
 * @module hooks/useDebounce.hook.test
 * @remarks
 * The seam is the hook's writer (`next`/`cancel`) and the context's `setValue`, with fake timers;
 * the path up to the socket is pinned in the widgets' suites and in `useValueState.hook.test`.
 * `mount` renders through `createRoot` directly: `renderComponent` takes no StrictMode, and only
 * the async `act` flushes StrictMode's effect re-run.
 */
import { act, createElement, StrictMode, type FC } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { CollectionContext } from '../components/CollectionProvider';
import type { AllCollectionContextProps, DelayFieldsRxData, OidObject } from '../types';
import useDebounce, { type UseDebounceReturn } from './useDebounce';

// React 18 requires the act-environment flag when driving updates outside react-dom/test-utils.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const OID = 'adapter.0.test';

const DEBOUNCE: DelayFieldsRxData = { delay: 300 };
const THROTTLE: DelayFieldsRxData = { sampleInterval: true, sampleIntervalValue: 200 };

/** Both ways of waiting, with their window in ms. */
const WINDOWS: [string, DelayFieldsRxData, number][] = [
    ['debounce', DEBOUNCE, 300],
    ['throttle', THROTTLE, 200],
];

interface HookProps {
    oid?: string;
    data: DelayFieldsRxData;
}

interface Mounted {
    writer: () => UseDebounceReturn;
    setValue: ReturnType<typeof vi.fn>;
    rerender: (props: HookProps) => Promise<void>;
    unmount: () => Promise<void>;
}

const mount = async (initial: HookProps, { strict = false } = {}): Promise<Mounted> => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    const setValue = vi.fn();
    const context = { setValue } as unknown as AllCollectionContextProps;
    const captured: { current: UseDebounceReturn | null } = { current: null };

    const Inner: FC<HookProps> = ({ oid, data }) => {
        captured.current = useDebounce({ oidObject: oid ? ({ _id: oid } as OidObject) : undefined, data });
        return null;
    };

    const render = (props: HookProps): Promise<void> =>
        act(() => {
            const tree = createElement(CollectionContext.Provider, { value: context }, createElement(Inner, props));
            root.render(strict ? createElement(StrictMode, null, tree) : tree);
            return Promise.resolve();
        });

    await render(initial);

    return {
        writer: (): UseDebounceReturn => captured.current as UseDebounceReturn,
        setValue,
        rerender: render,
        unmount: async (): Promise<void> => {
            await act(() => {
                root.unmount();
                return Promise.resolve();
            });
            container.remove();
        },
    };
};

const advance = async (ms: number): Promise<void> => {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(ms);
    });
};

/** Far past every window: whatever a forgotten timer holds has gone out by then. */
const SETTLE_MS = 5000;

describe('useDebounce under StrictMode', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it.each(WINDOWS)('%s: the writer still sends after the double mount', async (_case, data, window) => {
        const { writer, setValue, unmount } = await mount({ oid: OID, data }, { strict: true });

        writer().next(1);
        await advance(window);

        expect(setValue.mock.calls).toEqual([[OID, 1]]);
        await unmount();
    });
});

describe('useDebounce: the waiting value on unmount (ticket 11)', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it.each(WINDOWS)('%s: unmounting inside the window sends the last value, once and at once', async (_case, data) => {
        const { writer, setValue, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        await advance(100);
        writer().next(2);
        await unmount();

        expect(setValue.mock.calls).toEqual([[OID, 2]]);

        await advance(SETTLE_MS);

        expect(setValue).toHaveBeenCalledTimes(1);
    });

    it.each(WINDOWS)('%s: unmounting with nothing ever waiting sends nothing', async (_case, data) => {
        const { setValue, unmount } = await mount({ oid: OID, data });

        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(WINDOWS)('%s: a value already sent does not go out again', async (_case, data, window) => {
        const { writer, setValue, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        await advance(window);
        expect(setValue.mock.calls).toEqual([[OID, 1]]);

        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).toHaveBeenCalledTimes(1);
    });

    it.each(WINDOWS)('%s: a value dropped by cancel does not come back', async (_case, data) => {
        const { writer, setValue, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        writer().cancel();
        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(WINDOWS)('%s: the value after a cancel is the one that waits', async (_case, data) => {
        const { writer, setValue, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        writer().cancel();
        writer().next(2);
        await unmount();

        expect(setValue.mock.calls).toEqual([[OID, 2]]);
    });

    it.each(WINDOWS)('%s: a changed OID still drops what waited, up to the unmount', async (_case, data) => {
        const { writer, setValue, rerender, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        await rerender({ oid: 'adapter.0.other', data });
        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).not.toHaveBeenCalled();
    });

    it.each(WINDOWS)('%s: a removed OID still drops what waited, up to the unmount', async (_case, data) => {
        const { writer, setValue, rerender, unmount } = await mount({ oid: OID, data });

        writer().next(1);
        await rerender({ data });
        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).not.toHaveBeenCalled();
    });

    it('a changed interval still drops what waited, up to the unmount', async () => {
        const { writer, setValue, rerender, unmount } = await mount({ oid: OID, data: DEBOUNCE });

        writer().next(1);
        await rerender({ oid: OID, data: { delay: 500 } });
        await unmount();
        await advance(SETTLE_MS);

        expect(setValue).not.toHaveBeenCalled();
    });

    it('a value waiting on a changed OID goes to that OID', async () => {
        const { writer, setValue, rerender, unmount } = await mount({ oid: OID, data: DEBOUNCE });

        await rerender({ oid: 'adapter.0.other', data: DEBOUNCE });
        writer().next(1);
        await unmount();

        expect(setValue.mock.calls).toEqual([['adapter.0.other', 1]]);
    });

    describe('under StrictMode', () => {
        const STRICT = { strict: true };

        it.each(WINDOWS)('%s: the double mount sends nothing', async (_case, data) => {
            const { setValue, unmount } = await mount({ oid: OID, data }, STRICT);

            await advance(SETTLE_MS);
            expect(setValue).not.toHaveBeenCalled();

            await unmount();
            await advance(SETTLE_MS);

            expect(setValue).not.toHaveBeenCalled();
        });

        it.each(WINDOWS)('%s: the waiting value goes out once on the real unmount', async (_case, data) => {
            const { writer, setValue, unmount } = await mount({ oid: OID, data }, STRICT);

            writer().next(1);
            await unmount();
            await advance(SETTLE_MS);

            expect(setValue.mock.calls).toEqual([[OID, 1]]);
        });
    });
});
