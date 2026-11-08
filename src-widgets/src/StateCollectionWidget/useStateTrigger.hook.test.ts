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

const TWO_STATES = [
    { value: 1, active: false },
    { value: 0, active: false },
];

const mountTrigger = (
    options: Partial<StateTriggerOptions> = {},
): { result: { current: StateTrigger }; write: ReturnType<typeof vi.fn> } => {
    const write = vi.fn();
    const { result } = renderHook(() =>
        useStateTrigger({
            states: TWO_STATES,
            onlyStates: true,
            statePushButton: true,
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
        ['onClick', []],
    ] as const)('push button: %s writes %j', (handler, expected) => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps[handler]());

        expect(written(write)).toEqual(expected);
    });

    it.each(['onMouseUp', 'onMouseOut', 'onTouchEnd'] as const)(
        'push button: %s writes Wert[2] out of an open press, and nothing without one',
        handler => {
            const { result, write } = mountTrigger();

            act(() => result.current.buttonProps[handler]());
            expect(written(write)).toEqual([]);

            act(() => result.current.buttonProps.onMouseDown());
            act(() => result.current.buttonProps[handler]());
            expect(written(write)).toEqual([1, 0]);
        },
    );

    it('two events in one tick build on each other, without a render in between', () => {
        const { result, write } = mountTrigger();

        act(() => {
            const { onMouseDown, onMouseUp } = result.current.buttonProps;
            onMouseDown();
            onMouseUp();
            // The first release ended the press: this one must find none, without a render in between.
            onMouseUp();
        });

        expect(written(write)).toEqual([1, 0]);
    });

    it('the press survives a re-render in between', () => {
        const write = vi.fn();
        const options = (): StateTriggerOptions => ({
            states: TWO_STATES,
            onlyStates: true,
            statePushButton: true,
            write,
        });
        const { result, rerender } = renderHook(() => useStateTrigger(options()));

        act(() => result.current.buttonProps.onMouseDown());
        rerender(() => useStateTrigger(options()));
        act(() => result.current.buttonProps.onMouseUp());

        expect(written(write)).toEqual([1, 0]);
    });

    it('a click on two states writes the state after the active one', () => {
        const { result, write } = mountTrigger({
            statePushButton: false,
            states: [
                { value: 1, active: true },
                { value: 0, active: false },
            ],
        });

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

describe('useStateTrigger — the slider gate (ticket 17)', () => {
    it('hands the dialog the range of the gate', () => {
        const { result } = mountTrigger({
            onlyStates: false,
            oidObject: { type: 'number', minValue: -20, maxValue: 40 },
        });

        expect(result.current.dialog.slider).toEqual({ min: -20, max: 40 });
    });

    it('no gate, no range', () => {
        const { result } = mountTrigger({
            onlyStates: false,
            oidObject: { type: 'number', minValue: 200, maxValue: 100 },
        });

        expect(result.current.dialog.slider).toBeUndefined();
    });

    it('a click with neither a list nor a slider leaves the dialog closed', () => {
        const { result, write } = mountTrigger({ states: [], onlyStates: false, oidObject: { type: 'string' } });

        act(() => result.current.buttonProps.onClick());

        expect(result.current.dialog.open).toBe(false);
        expect(written(write)).toEqual([]);
    });
});
