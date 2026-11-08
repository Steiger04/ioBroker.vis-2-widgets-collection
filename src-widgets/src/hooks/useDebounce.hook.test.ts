/**
 * useDebounce — what leaves the write stream.
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
import type { AllCollectionContextProps, DelayFieldsRxData } from '../types';
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
        captured.current = useDebounce({ oidObject: oid ? { _id: oid, type: 'number' } : undefined, data });
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
