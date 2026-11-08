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
import type { StateTrigger, StateTriggerOptions, StateTriggerPointerEvent } from './useStateTrigger';

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

/** The pointer event the handlers read: the first pointer, its main button, on a fresh element. */
const pointer = (init: { pointerId?: number; button?: number; target?: Element } = {}): StateTriggerPointerEvent => ({
    pointerId: 1,
    button: 0,
    target: document.createElement('span'),
    ...init,
});

describe('useStateTrigger', () => {
    it('push button: onPointerDown writes Wert[1]', () => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps.onPointerDown(pointer()));

        expect(written(write)).toEqual([1]);
    });

    it('push button: onClick writes nothing', () => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps.onClick());

        expect(written(write)).toEqual([]);
    });

    it.each(['onPointerUp', 'onPointerLeave', 'onPointerCancel'] as const)(
        'push button: %s writes Wert[2] out of an open press, and nothing without one',
        handler => {
            const { result, write } = mountTrigger();

            act(() => result.current.buttonProps[handler](pointer()));
            expect(written(write)).toEqual([]);

            act(() => result.current.buttonProps.onPointerDown(pointer()));
            act(() => result.current.buttonProps[handler](pointer()));
            expect(written(write)).toEqual([1, 0]);
        },
    );

    it.each(['onPointerUp', 'onPointerLeave', 'onPointerCancel'] as const)(
        'push button: %s of another pointer ends nothing',
        handler => {
            const { result, write } = mountTrigger();

            act(() => result.current.buttonProps.onPointerDown(pointer()));
            act(() => result.current.buttonProps[handler](pointer({ pointerId: 2 })));
            expect(written(write)).toEqual([1]);

            act(() => result.current.buttonProps[handler](pointer()));
            expect(written(write)).toEqual([1, 0]);
        },
    );

    it('push button: a press with another button writes nothing', () => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps.onPointerDown(pointer({ button: 2 })));

        expect(written(write)).toEqual([]);
    });

    it('the Sperre starts no press', () => {
        const { result, write } = mountTrigger({ locked: true });

        act(() => result.current.buttonProps.onPointerDown(pointer()));
        act(() => result.current.buttonProps.onPointerUp(pointer()));

        expect(written(write)).toEqual([]);
    });

    it.each([
        ['a press hands back the capture', {}, false],
        ['another button keeps it', { button: 2 }, true],
        ['the Sperre keeps it', { locked: true }, true],
        ['outside push-button mode it stays', { statePushButton: false }, true],
    ] as [string, { button?: number; locked?: boolean; statePushButton?: boolean }, boolean][])(
        'the implicit capture of the target: %s',
        (_case, { button = 0, ...options }, kept) => {
            const { result } = mountTrigger(options);
            const target = document.createElement('span');
            target.setPointerCapture(1);

            act(() => result.current.buttonProps.onPointerDown(pointer({ target, button })));

            expect(target.hasPointerCapture(1)).toBe(kept);
        },
    );

    it('two events in one tick build on each other, without a render in between', () => {
        const { result, write } = mountTrigger();

        act(() => {
            const { onPointerDown, onPointerUp } = result.current.buttonProps;
            onPointerDown(pointer());
            onPointerUp(pointer());
            // The first release ended the press: this one must find none, without a render in between.
            onPointerUp(pointer());
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

        act(() => result.current.buttonProps.onPointerDown(pointer()));
        rerender(() => useStateTrigger(options()));
        act(() => result.current.buttonProps.onPointerUp(pointer()));

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

    it('press and release hand the write the immediate option (ticket 06)', () => {
        const { result, write } = mountTrigger();

        act(() => result.current.buttonProps.onPointerDown(pointer()));
        act(() => result.current.buttonProps.onPointerUp(pointer()));

        expect(write.mock.calls).toEqual([
            [1, { immediate: true }],
            [0, { immediate: true }],
        ]);
    });

    it('a click hands the write no option: it stays behind the debounce (ticket 06)', () => {
        const { result, write } = mountTrigger({ statePushButton: false });

        act(() => result.current.buttonProps.onClick());

        expect(write.mock.calls).toEqual([[1]]);
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
