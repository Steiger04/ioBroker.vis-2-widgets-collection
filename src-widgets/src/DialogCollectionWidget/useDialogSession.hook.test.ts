/**
 * useDialogSession — the auto-close timer's lifetime in the wiring.
 *
 * @module widgets/DialogCollectionWidget/useDialogSession.hook.test
 * @remarks
 * Pins what only the hook owns (ADR-0095): a running auto-close timer keeps the duration it
 * was started with when `dialogAutoClose` changes, and an unmount clears it — no write after
 * the widget is gone. The decision matrix is pinned in dialogSession.test.ts, the rendered
 * wiring in DialogCollection.test.tsx.
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { renderHook } from '../lib/testing/testHarness';
import useDialogSession, { type DialogSessionInputs } from './useDialogSession';

const DIALOG_OID = 'demo.0.dialog';

const inputs = (autoClose: unknown, setValue: DialogSessionInputs['setValue']): DialogSessionInputs => ({
    oidValue: false,
    dialogIdObject: { _id: DIALOG_OID, write: true },
    autoClose,
    setValue,
});

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe('useDialogSession auto-close timer', () => {
    it.each([20_000, 1_000])(
        'a running timer keeps its 5 s when dialogAutoClose changes to %i ms',
        changedAutoClose => {
            const setValue = vi.fn();
            const session = renderHook(() => useDialogSession(inputs(5_000, setValue)));
            act(() => session.result.current.onClick());

            act(() => {
                vi.advanceTimersByTime(2_000);
            });
            session.rerender(() => useDialogSession(inputs(changedAutoClose, setValue)));

            act(() => {
                vi.advanceTimersByTime(2_999);
            });
            expect(session.result.current.open).toBe(true);

            act(() => {
                vi.advanceTimersByTime(1);
            });
            expect(session.result.current.open).toBe(false);
            expect(setValue.mock.calls).toEqual([
                [DIALOG_OID, true],
                [DIALOG_OID, false],
            ]);

            session.unmount();
        },
    );

    it('an unmount with a running timer writes nothing afterwards', () => {
        const setValue = vi.fn();
        const session = renderHook(() => useDialogSession(inputs(5_000, setValue)));
        act(() => session.result.current.onClick());

        session.unmount();
        act(() => {
            vi.advanceTimersByTime(10_000);
        });

        expect(setValue.mock.calls).toEqual([[DIALOG_OID, true]]);
    });
});
