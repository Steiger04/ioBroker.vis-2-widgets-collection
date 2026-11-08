/**
 * useStateTrigger — the hook around the Zustands-Auslöser core.
 *
 * @module widgets/StateCollectionWidget/useStateTrigger.hook.test
 * @remarks
 * What the hook adds around {@link module:widgets/StateCollectionWidget/stateTrigger.test}: which
 * input event becomes which event of the transition, events chaining within one tick, the write and
 * the dialog state. What reaches the socket is pinned in StateCollection.test.tsx.
 */
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { renderHook } from '../lib/testing/testHarness';
import { useStateTrigger } from './useStateTrigger';
import type { StateTrigger, StateTriggerOptions } from './useStateTrigger';

const TWO_STATES = [{ value: 1 }, { value: 0 }];

const mountTrigger = (
    options: Partial<StateTriggerOptions> = {},
): { result: { current: StateTrigger }; write: ReturnType<typeof vi.fn> } => {
    const write = vi.fn();
    const { result } = renderHook(() =>
        useStateTrigger({
            states: TWO_STATES,
            onlyStates: true,
            statePushButton: true,
            currentValue: 0,
            write,
            ...options,
        }),
    );

    return { result, write };
};

const written = (write: ReturnType<typeof vi.fn>): unknown[] => write.mock.calls.map(([value]: unknown[]) => value);

describe('useStateTrigger', () => {
    it.each([
        ['onMouseDown', [1]],
        ['onTouchStart', [1]],
        ['onMouseUp', [0]],
        ['onMouseOut', [0]],
        ['onTouchEnd', [0]],
        ['onClick', []],
    ] as const)('push button: %s writes %j', (handler, expected) => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps[handler]());

        expect(written(write)).toEqual(expected);
    });

    it('two events in one tick build on each other, without a render in between', () => {
        const { result, write } = mountTrigger();

        act(() => {
            const { onMouseDown, onMouseUp } = result.current.buttonProps;
            onMouseDown();
            onMouseUp();
        });

        expect(written(write)).toEqual([1, 0]);
    });

    it('a click on two states writes the other state', () => {
        const { result, write } = mountTrigger({ statePushButton: false, currentValue: 1 });

        act(() => result.current.buttonProps.onClick());

        expect(written(write)).toEqual([0]);
    });

    it('a click without onlyStates opens the dialog, close closes it, and neither writes', () => {
        const { result, write } = mountTrigger({ onlyStates: false, statePushButton: false });
        expect(result.current.dialog.open).toBe(false);

        act(() => result.current.buttonProps.onClick());
        expect(result.current.dialog.open).toBe(true);

        act(() => result.current.dialog.close());
        expect(result.current.dialog.open).toBe(false);

        expect(written(write)).toEqual([]);
    });
});
