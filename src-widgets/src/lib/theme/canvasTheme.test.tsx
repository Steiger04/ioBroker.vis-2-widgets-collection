/**
 * Leinwand-Theme — which user theme the canvas shows right now (ADR-0117 addendum 2026-11-17).
 *
 * @module lib/theme/canvasTheme.test
 * @remarks
 * Pins the interface of the one module that owns the precedence (the Studio draft before the
 * stored theme) and the stored theme as last known on this page: its synchronous reading, its hook
 * reading, and that it learns the stored theme only on its occasions — a reading instance's read,
 * a subscription's read, the Studio session's save.
 *
 * The test file is one page: the first block runs before anything here has read a theme.
 */
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Connection } from '@iobroker/gui-components';

import { THEME_STATE_ID } from '../constants';
import { renderHook, type RenderHookHandle } from '../testing/testHarness';
import * as canvasThemeModule from './canvasTheme';
import { canvasUserTheme, followStoredTheme, lastStoredTheme, noteSavedTheme, useCanvasTheme } from './canvasTheme';
import { setDraftTheme } from './draftThemeStore';
import type { UserTheme } from './themeTypes';

type StateHandler = (id: string, state: ioBroker.State | null) => void;

/** A socket whose theme state holds `val`; `answer: false` keeps the read pending. */
const themeSocket = (
    val: unknown,
    { answer = true } = {},
): { socket: Connection; answered: Promise<unknown>; push: (val: unknown) => void } => {
    const answered = Promise.resolve(val === undefined ? null : ({ val } as ioBroker.State));
    const handlers = new Set<StateHandler>();
    const socket = {
        getState: vi.fn(() => (answer ? answered : new Promise<never>(() => undefined))),
        subscribeState: vi.fn((_id: string, cb: StateHandler) => {
            handlers.add(cb);
            return Promise.resolve();
        }),
        unsubscribeState: vi.fn((_id: string, cb: StateHandler) => {
            handlers.delete(cb);
        }),
    } as unknown as Connection;
    return {
        socket,
        answered,
        push: next =>
            act(() => {
                for (const handler of [...handlers]) {
                    handler(THEME_STATE_ID, { val: next } as ioBroker.State);
                }
            }),
    };
};

/** Puts a Studio draft on the canvas (null: takes it off) and waits for the draft store's frame. */
const studioDraft = (draft: UserTheme | null): Promise<void> => {
    setDraftTheme(draft);
    return act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );
};

const STORED: UserTheme = { widgetFrame: { noHeader: true }, spacing: 4 };
const DRAFT: UserTheme = { widgetFrame: { noHeader: false } };

const mounted: Pick<RenderHookHandle<unknown>, 'unmount'>[] = [];

/** Mounts a reading instance (a widget, an editor field) over `socket` and waits for its read. */
const reader = async (
    fake: ReturnType<typeof themeSocket>,
): Promise<RenderHookHandle<ReturnType<typeof useCanvasTheme>>> => {
    const handle = renderHook(() => useCanvasTheme(fake.socket));
    mounted.push(handle);
    await act(async () => {
        await fake.answered;
    });
    return handle;
};

afterEach(async () => {
    await studioDraft(null);
    for (const handle of mounted.splice(0)) {
        handle.unmount();
    }
});

describe('before the page has read a theme', () => {
    it('is empty in both readings', async () => {
        expect(canvasUserTheme()).toBeNull();
        expect(lastStoredTheme()).toBeNull();

        // A reading instance whose read has no answer yet renders the empty theme and teaches nothing.
        const pending = await reader(themeSocket(JSON.stringify(STORED), { answer: false }));
        expect(pending.result.current).toEqual({ theme: {}, stored: {}, draft: null });
        expect(canvasUserTheme()).toBeNull();
    });
});

describe('the interface', () => {
    it('writes only on its occasions: no setter of the last known theme is exported', () => {
        expect(Object.keys(canvasThemeModule).sort()).toEqual([
            'canvasUserTheme',
            'followStoredTheme',
            'lastStoredTheme',
            'noteSavedTheme',
            'useCanvasTheme',
        ]);
    });
});

describe('a reading instance learns the stored theme', () => {
    it('reads the stored theme through the Rückfall-Regel and notes it for the synchronous reading', async () => {
        const fake = themeSocket(JSON.stringify({ ...STORED, direction: 'up' }));
        const handle = await reader(fake);

        expect(handle.result.current).toEqual({ theme: STORED, stored: STORED, draft: null });
        expect(canvasUserTheme()).toEqual(STORED);
        expect(lastStoredTheme()).toEqual(STORED);
    });

    it('follows a changed stored theme', async () => {
        const fake = themeSocket(JSON.stringify(STORED));
        const handle = await reader(fake);

        fake.push(JSON.stringify({ spacing: 8 }));

        expect(handle.result.current.stored).toEqual({ spacing: 8 });
        expect(canvasUserTheme()).toEqual({ spacing: 8 });
    });

    it('keeps the identity of the stored theme while the state reports the same value again', async () => {
        const fake = themeSocket(JSON.stringify(STORED));
        const handle = await reader(fake);
        const first = handle.result.current.stored;

        fake.push(JSON.stringify(STORED));

        expect(handle.result.current.stored).toBe(first);
    });

    it('a later instance keeps what an earlier one read until its own read answers', async () => {
        await reader(themeSocket(JSON.stringify(STORED)));
        await reader(themeSocket(JSON.stringify({ spacing: 2 }), { answer: false }));

        expect(canvasUserTheme()).toEqual(STORED);
    });

    it('notes an unset state as the empty theme', async () => {
        await reader(themeSocket(JSON.stringify(STORED)));
        await reader(themeSocket(undefined));

        expect(canvasUserTheme()).toEqual({});
    });
});

describe('the Studio draft goes before the stored theme', () => {
    it('in the hook reading and in the synchronous reading, while it lasts', async () => {
        const handle = await reader(themeSocket(JSON.stringify(STORED)));

        await studioDraft(DRAFT);
        expect(handle.result.current).toEqual({ theme: DRAFT, stored: STORED, draft: DRAFT });
        expect(canvasUserTheme()).toEqual(DRAFT);
        // The stored theme as last known stays what was read.
        expect(lastStoredTheme()).toEqual(STORED);

        await studioDraft(null);
        expect(handle.result.current.theme).toEqual(STORED);
        expect(canvasUserTheme()).toEqual(STORED);
    });
});

describe('the other occasions', () => {
    it('a subscription notes every read it passes on, and tells when the read has answered', async () => {
        const fake = themeSocket(JSON.stringify({ spacing: 3 }));
        const taken: UserTheme[] = [];
        const onRead = vi.fn();
        const stop = followStoredTheme(fake.socket, theme => taken.push(theme), onRead);
        await act(async () => {
            await fake.answered;
        });

        expect(taken).toEqual([{ spacing: 3 }]);
        expect(onRead).toHaveBeenCalledOnce();
        expect(lastStoredTheme()).toEqual({ spacing: 3 });

        fake.push(JSON.stringify({ spacing: 5 }));
        expect(lastStoredTheme()).toEqual({ spacing: 5 });

        stop();
        fake.push(JSON.stringify({ spacing: 7 }));
        expect(lastStoredTheme()).toEqual({ spacing: 5 });
    });

    it('a subscription without a taker still notes what it reads', async () => {
        const fake = themeSocket(JSON.stringify({ spacing: 9 }));
        const stop = followStoredTheme(fake.socket);
        await act(async () => {
            await fake.answered;
        });

        expect(lastStoredTheme()).toEqual({ spacing: 9 });
        stop();
    });

    it('the Studio session saving notes the saved theme', () => {
        noteSavedTheme({ spacing: 6 });

        expect(lastStoredTheme()).toEqual({ spacing: 6 });
        expect(canvasUserTheme()).toEqual({ spacing: 6 });
    });
});
