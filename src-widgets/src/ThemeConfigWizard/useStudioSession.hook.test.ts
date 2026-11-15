/**
 * useStudioSession — the draft lifecycle wiring of one Studio session.
 *
 * @module ThemeConfigWizard/useStudioSession.hook.test
 * @remarks
 * Pins what only the hook owns (ADR-0020 addendum 2026-11-02): the seed and the late load, a
 * change of the stored theme from outside while the session is open (ADR-0115), the single
 * 100 ms canvas throttle, save, discard, the end invariant (session ends ⇒ the draft leaves
 * the canvas, except after a save) and the beforeunload warning. The decisions behind
 * them are pinned in studioSessionSteps.test.ts. The canvas is observed through the draft
 * store: its writes are wrapped in spies (to count pushes), its rAF flush runs on the fake
 * timers.
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Connection } from '@iobroker/gui-components';
import type * as DraftThemeStore from '../lib/theme/draftThemeStore';

vi.mock('../lib/theme/draftThemeStore', async importOriginal => {
    const original = await importOriginal<typeof DraftThemeStore>();
    return { ...original, setDraftTheme: vi.fn(original.setDraftTheme) };
});

import { THEME_STATE_ID } from '../lib/constants';
import { clearDraftTheme, getDraftTheme, setDraftTheme } from '../lib/theme/draftThemeStore';
import { getLastKnownTheme, setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { renderHook, type RenderHookHandle } from '../lib/testing/testHarness';
import type { UserTheme } from '../lib/theme/themeTypes';
import useStudioSession, { type StudioSession } from './useStudioSession';

const SEED: UserTheme = { palette: { primary: { main: '#ff0000' } } };
const STORED: UserTheme = { palette: { primary: { main: '#0000ff' } } };

type StateHandler = (id: string, state: ioBroker.State | null) => void;

/**
 * A socket whose state read answers only when the test resolves it, and whose theme state the
 * test can change from outside (another browser, an MCP client, a theme request).
 */
interface FakeSocket {
    socket: Connection;
    setState: ReturnType<typeof vi.fn>;
    resolveState: (val: unknown) => Promise<void>;
    /** Reports a changed theme state to everyone subscribed right now (several values: back to back). */
    push: (...vals: unknown[]) => void;
    /** Reports it to everyone who ever subscribed — a report already on its way at unsubscribe. */
    pushLate: (val: unknown) => void;
    /** How many handlers are subscribed right now. */
    subscribers: () => number;
}

const fakeSocket = (setStateImpl: () => Promise<void> = () => Promise.resolve()): FakeSocket => {
    let resolve: (state: ioBroker.State | null) => void = () => {};
    const pending = new Promise<ioBroker.State | null>(r => {
        resolve = r;
    });
    const setState = vi.fn(setStateImpl);
    const subscribed = new Set<StateHandler>();
    const everSubscribed = new Set<StateHandler>();
    const socket = {
        getState: vi.fn(() => pending),
        setState,
        subscribeState: vi.fn((_id: string, handler: StateHandler) => {
            subscribed.add(handler);
            everSubscribed.add(handler);
            return Promise.resolve();
        }),
        unsubscribeState: vi.fn((_id: string, handler: StateHandler) => {
            subscribed.delete(handler);
        }),
    } as unknown as Connection;
    const report = (handlers: Iterable<StateHandler>, vals: unknown[]): void =>
        act(() => {
            for (const val of vals) {
                for (const handler of [...handlers]) {
                    handler(THEME_STATE_ID, val === undefined ? null : ({ val } as ioBroker.State));
                }
            }
        });
    return {
        socket,
        setState,
        push: (...vals) => report(subscribed, vals),
        pushLate: val => report(everSubscribed, [val]),
        subscribers: () => subscribed.size,
        resolveState: async val => {
            await act(async () => {
                resolve(val === undefined ? null : ({ val } as ioBroker.State));
                await pending;
            });
        },
    };
};

/** Runs the draft store's rAF flush (and any due throttle timer). */
const nextFrame = (): void => {
    act(() => {
        vi.advanceTimersByTime(20);
    });
};

/** Waits out the throttle window, so the trailing push has landed on the canvas too. */
const settle = (): void => {
    act(() => {
        vi.advanceTimersByTime(120);
    });
    nextFrame();
};

let session: RenderHookHandle<StudioSession> | null = null;

const start = (socket: Connection): RenderHookHandle<StudioSession> => {
    session = renderHook(() => useStudioSession(socket));
    return session;
};

beforeEach(() => {
    vi.useFakeTimers();
    vi.mocked(setDraftTheme).mockClear();
    setLastKnownTheme(SEED);
});

afterEach(() => {
    session?.unmount();
    session = null;
    clearDraftTheme();
    nextFrame();
    vi.useRealTimers();
});

describe('useStudioSession canvas mirror', () => {
    it('throttles a burst of edits to one leading and one trailing push, the last value landing', () => {
        const { result } = start(fakeSocket().socket);
        act(() => {
            vi.advanceTimersByTime(200);
        });
        vi.mocked(setDraftTheme).mockClear();

        for (const spacing of [1, 2, 3, 4, 5]) {
            act(() => result.current.edit('spacing', spacing));
            act(() => {
                vi.advanceTimersByTime(10);
            });
        }
        expect(setDraftTheme).toHaveBeenCalledTimes(1);

        act(() => {
            vi.advanceTimersByTime(100);
        });
        nextFrame();

        expect(vi.mocked(setDraftTheme).mock.calls).toEqual([[{ ...SEED, spacing: 1 }], [{ ...SEED, spacing: 5 }]]);
        expect(getDraftTheme()).toEqual({ ...SEED, spacing: 5 });
    });
});

describe('useStudioSession seed and load', () => {
    it('seeds the draft from the last known theme and shows it on the canvas at once', () => {
        const { result } = start(fakeSocket().socket);
        nextFrame();

        expect(result.current.draft).toEqual(SEED);
        expect(result.current.loading).toBe(false);
        expect(result.current.dirty).toBe(false);
        expect(getDraftTheme()).toEqual(SEED);
    });

    it('rebases an untouched draft onto the stored theme once it arrives', async () => {
        const fake = fakeSocket();
        const { result } = start(fake.socket);

        await fake.resolveState(JSON.stringify(STORED));
        settle();

        expect(fake.socket.getState).toHaveBeenCalledWith(THEME_STATE_ID);
        expect(result.current.draft).toEqual(STORED);
        expect(result.current.dirty).toBe(false);
        expect(result.current.canUndo).toBe(false);
        expect(getLastKnownTheme()).toEqual(STORED);
        expect(getDraftTheme()).toEqual(STORED);
    });

    it('keeps an edit made before the stored theme arrives and compares it against that theme', async () => {
        const fake = fakeSocket();
        const { result } = start(fake.socket);
        act(() => result.current.edit('palette.primary.main', '#00ff00'));

        await fake.resolveState(JSON.stringify(STORED));

        expect(result.current.draft).toEqual({ palette: { primary: { main: '#00ff00' } } });
        expect(result.current.canUndo).toBe(true);
        // Undo back to the seed: still dirty, because the stored theme is the new baseline.
        act(() => result.current.undo());
        expect(result.current.draft).toEqual(SEED);
        expect(result.current.dirty).toBe(true);
    });

    it('waits for the stored theme when there is no seed', async () => {
        setLastKnownTheme(null);
        const fake = fakeSocket();
        const { result } = start(fake.socket);
        expect(result.current.loading).toBe(true);

        await fake.resolveState(JSON.stringify(STORED));

        expect(result.current.loading).toBe(false);
        expect(result.current.draft).toEqual(STORED);
        expect(result.current.dirty).toBe(false);
    });

    it.each([
        ['corrupt', '{"palette":'],
        ['unset', undefined],
        ['empty', ''],
        ['a list, not an object', '[1]'],
        ['a text, not an object', '"dark"'],
    ])('opens on the empty theme when the stored state is %s', async (_label, stored) => {
        setLastKnownTheme(null);
        const fake = fakeSocket();
        const { result } = start(fake.socket);

        await fake.resolveState(stored);

        expect(result.current.loading).toBe(false);
        expect(result.current.draft).toEqual({});
        expect(result.current.dirty).toBe(false);
    });

    // Rückfall-Regel (ADR-0115): an unusable value falls away, the rest holds.
    it('opens with the rest of a stored theme when single values are unusable', async () => {
        setLastKnownTheme(null);
        const fake = fakeSocket();
        const { result } = start(fake.socket);

        await fake.resolveState('{"corners":{"topLeft":-1,"topRight":8},"palette":{"mode":"purple"},"spacing":4}');
        settle();

        const rest = { corners: { topRight: 8 }, spacing: 4 };
        expect(result.current.draft).toEqual(rest);
        // The rest is the session's baseline: nothing to save, nothing to undo.
        expect(result.current.dirty).toBe(false);
        expect(result.current.canUndo).toBe(false);
        expect(result.current.validation.isValid).toBe(true);
        expect(getLastKnownTheme()).toEqual(rest);
        expect(getDraftTheme()).toEqual(rest);
    });

    it('opens a fully valid theme unchanged, with Google fonts, component overrides and CSS variables', async () => {
        setLastKnownTheme(null);
        const stored: UserTheme = {
            palette: { mode: 'dark', primary: { main: '#ff0000' } },
            cssVariables: { cssVarPrefix: 'my' },
            components: { MuiButton: { defaultProps: { disableRipple: true } } },
            googleFonts: { Lobster: [{ weight: 400, data: 'data:font/woff2;base64,AAAA' }] },
        };
        const fake = fakeSocket();
        const { result } = start(fake.socket);

        await fake.resolveState(JSON.stringify(stored));

        expect(result.current.draft).toEqual(stored);
        expect(result.current.dirty).toBe(false);
    });
});

describe('useStudioSession end invariant', () => {
    /** Starts a session with an edit whose trailing push is still pending. */
    const startWithPendingPush = (): RenderHookHandle<StudioSession> => {
        const handle = start(fakeSocket().socket);
        settle();
        act(() => handle.result.current.edit('spacing', 1));
        act(() => handle.result.current.edit('spacing', 2));
        return handle;
    };

    it('takes the draft off the canvas when the session unmounts', () => {
        const handle = startWithPendingPush();

        handle.unmount();
        session = null;
        settle();

        expect(getDraftTheme()).toBeNull();
    });

    it('takes the draft off the canvas on discard, and a pending push does not bring it back', () => {
        const handle = startWithPendingPush();

        act(() => handle.result.current.discard());
        settle();

        expect(getDraftTheme()).toBeNull();
    });
});

describe('useStudioSession save', () => {
    it('writes the draft to the state and leaves it on the canvas for the save handoff', async () => {
        const fake = fakeSocket();
        const handle = start(fake.socket);
        settle();
        act(() => handle.result.current.edit('spacing', 4));
        expect(handle.result.current.canSave).toBe(true);

        let saved = false;
        await act(async () => {
            saved = await handle.result.current.save();
        });

        expect(saved).toBe(true);
        expect(fake.setState).toHaveBeenCalledWith(THEME_STATE_ID, JSON.stringify({ ...SEED, spacing: 4 }));
        expect(getLastKnownTheme()).toEqual({ ...SEED, spacing: 4 });
        expect(handle.result.current.dirty).toBe(false);

        handle.unmount();
        session = null;
        settle();
        expect(getDraftTheme()).toEqual({ ...SEED, spacing: 4 });
    });

    it('puts the final draft on the canvas at once when saved inside the throttle window', async () => {
        const handle = start(fakeSocket().socket);
        settle();
        act(() => handle.result.current.edit('spacing', 1));
        act(() => handle.result.current.edit('spacing', 2));

        await act(async () => {
            await handle.result.current.save();
        });
        handle.unmount();
        session = null;
        nextFrame();

        expect(getDraftTheme()).toEqual({ ...SEED, spacing: 2 });
    });

    it('does not hand off an edit made while the write is in flight: the session stays open and its end clears the canvas', async () => {
        let finishWrite: () => void = () => {};
        const fake = fakeSocket(
            () =>
                new Promise<void>(resolve => {
                    finishWrite = resolve;
                }),
        );
        const handle = start(fake.socket);
        settle();
        act(() => handle.result.current.edit('spacing', 4));

        let saving: Promise<boolean> = Promise.resolve(true);
        act(() => {
            saving = handle.result.current.save();
        });
        act(() => handle.result.current.edit('spacing', 5));
        let saved = true;
        await act(async () => {
            finishWrite();
            saved = await saving;
        });

        expect(saved).toBe(false);
        expect(handle.result.current.draft).toEqual({ ...SEED, spacing: 5 });
        expect(handle.result.current.dirty).toBe(true);
        handle.unmount();
        session = null;
        settle();
        expect(getDraftTheme()).toBeNull();
    });

    it('still hands off when the edits during the write end on the saved value', async () => {
        let finishWrite: () => void = () => {};
        const fake = fakeSocket(
            () =>
                new Promise<void>(resolve => {
                    finishWrite = resolve;
                }),
        );
        const handle = start(fake.socket);
        settle();
        act(() => handle.result.current.edit('spacing', 4));

        let saving: Promise<boolean> = Promise.resolve(false);
        act(() => {
            saving = handle.result.current.save();
        });
        act(() => handle.result.current.edit('spacing', 5));
        settle();
        act(() => handle.result.current.edit('spacing', 4));
        let saved = false;
        await act(async () => {
            finishWrite();
            saved = await saving;
        });

        expect(saved).toBe(true);
        handle.unmount();
        session = null;
        settle();
        expect(getDraftTheme()).toEqual({ ...SEED, spacing: 4 });
    });

    // Reading is tolerant (ADR-0115), saving is not: the check before the write stays as it was.
    it('refuses to save a draft with an unusable value, although such a stored theme opens', async () => {
        const fake = fakeSocket();
        const handle = start(fake.socket);
        act(() => handle.result.current.edit('corners.topLeft', -1));
        expect(handle.result.current.dirty).toBe(true);
        expect(handle.result.current.validation.isValid).toBe(false);
        expect(handle.result.current.canSave).toBe(false);

        let saved = true;
        await act(async () => {
            saved = await handle.result.current.save();
        });

        expect(saved).toBe(false);
        expect(fake.setState).not.toHaveBeenCalled();
    });

    it('refuses to save a clean draft', async () => {
        const fake = fakeSocket();
        const handle = start(fake.socket);
        expect(handle.result.current.canSave).toBe(false);

        let saved = true;
        await act(async () => {
            saved = await handle.result.current.save();
        });

        expect(saved).toBe(false);
        expect(fake.setState).not.toHaveBeenCalled();
    });

    it('keeps the session dirty after a failed write, and its end still clears the canvas', async () => {
        const fake = fakeSocket(() => Promise.reject(new Error('offline')));
        const error = vi.spyOn(console, 'error').mockImplementation(() => {});
        const handle = start(fake.socket);
        act(() => handle.result.current.edit('spacing', 4));

        let saved = true;
        await act(async () => {
            saved = await handle.result.current.save();
        });

        expect(saved).toBe(false);
        expect(handle.result.current.saveFailed).toBe(true);
        expect(handle.result.current.saving).toBe(false);
        expect(handle.result.current.dirty).toBe(true);
        handle.unmount();
        session = null;
        settle();
        expect(getDraftTheme()).toBeNull();
        error.mockRestore();
    });
});

// The stored theme changes while the Studio is open (ADR-0115): a theme request, an external
// MCP client, a second browser.
describe('useStudioSession foreign change of the stored theme', () => {
    const FOREIGN: UserTheme = { palette: { primary: { main: '#00aa00' } }, spacing: 6 };

    /** Starts a session that has loaded STORED and shows it: open and untouched. */
    const startLoaded = async (): Promise<{ fake: FakeSocket; handle: RenderHookHandle<StudioSession> }> => {
        const fake = fakeSocket();
        const handle = start(fake.socket);
        await fake.resolveState(JSON.stringify(STORED));
        settle();
        return { fake, handle };
    };

    it('takes the new theme over in an untouched session: draft, canvas and baseline follow', async () => {
        const { fake, handle } = await startLoaded();

        fake.push(JSON.stringify(FOREIGN));
        settle();

        expect(handle.result.current.draft).toEqual(FOREIGN);
        expect(getDraftTheme()).toEqual(FOREIGN);
        // Still untouched: nothing to save, nothing to undo, and the next open starts from it.
        expect(handle.result.current.dirty).toBe(false);
        expect(handle.result.current.canSave).toBe(false);
        expect(handle.result.current.canUndo).toBe(false);
        expect(getLastKnownTheme()).toEqual(FOREIGN);
    });

    it('keeps the draft of an edited session, in the Studio and on the canvas', async () => {
        const { fake, handle } = await startLoaded();
        act(() => handle.result.current.edit('spacing', 4));

        fake.push(JSON.stringify(FOREIGN));
        settle();

        expect(handle.result.current.draft).toEqual({ ...STORED, spacing: 4 });
        expect(getDraftTheme()).toEqual({ ...STORED, spacing: 4 });
        expect(handle.result.current.dirty).toBe(true);
        expect(handle.result.current.canUndo).toBe(true);
        // The next open starts from what is stored now, not from the abandoned draft.
        expect(getLastKnownTheme()).toEqual(FOREIGN);
    });

    it('measures an edited session against the new stored theme', async () => {
        const { fake, handle } = await startLoaded();
        act(() => handle.result.current.edit('spacing', 4));
        fake.push(JSON.stringify(FOREIGN));

        // Undo back to what the session loaded: that is no longer the stored theme.
        act(() => handle.result.current.undo());
        expect(handle.result.current.draft).toEqual(STORED);
        expect(handle.result.current.dirty).toBe(true);

        // A draft equal to the new stored theme has nothing to save.
        act(() => handle.result.current.apply(() => FOREIGN));
        expect(handle.result.current.dirty).toBe(false);
        expect(handle.result.current.canSave).toBe(false);
    });

    it('saves the draft of an edited session over the foreign change', async () => {
        const { fake, handle } = await startLoaded();
        act(() => handle.result.current.edit('spacing', 4));
        fake.push(JSON.stringify(FOREIGN));
        expect(handle.result.current.canSave).toBe(true);

        let saved = false;
        await act(async () => {
            saved = await handle.result.current.save();
        });
        // The state reports the write back, as it reports every change.
        fake.push(fake.setState.mock.calls[0][1]);

        expect(saved).toBe(true);
        expect(fake.setState).toHaveBeenCalledTimes(1);
        expect(fake.setState).toHaveBeenCalledWith(THEME_STATE_ID, JSON.stringify({ ...STORED, spacing: 4 }));
        expect(handle.result.current.draft).toEqual({ ...STORED, spacing: 4 });
        expect(handle.result.current.dirty).toBe(false);
        expect(getLastKnownTheme()).toEqual({ ...STORED, spacing: 4 });
    });

    it('wins with a save whose write is still in flight when the foreign change arrives', async () => {
        let finishWrite: () => void = () => {};
        const fake = fakeSocket(
            () =>
                new Promise<void>(resolve => {
                    finishWrite = resolve;
                }),
        );
        const handle = start(fake.socket);
        await fake.resolveState(JSON.stringify(STORED));
        settle();
        act(() => handle.result.current.edit('spacing', 4));

        let saving: Promise<boolean> = Promise.resolve(false);
        act(() => {
            saving = handle.result.current.save();
        });
        fake.push(JSON.stringify(FOREIGN));
        let saved = false;
        await act(async () => {
            finishWrite();
            saved = await saving;
        });

        expect(saved).toBe(true);
        expect(handle.result.current.draft).toEqual({ ...STORED, spacing: 4 });
        expect(handle.result.current.dirty).toBe(false);
        expect(getLastKnownTheme()).toEqual({ ...STORED, spacing: 4 });
    });

    // Rückfall-Regel (ADR-0115): the foreign change is read like the theme at opening.
    it('takes a foreign change with unusable single values over value by value', async () => {
        const { fake, handle } = await startLoaded();

        fake.push('{"corners":{"topLeft":-1,"topRight":8},"palette":{"mode":"purple"},"spacing":4}');
        settle();

        const rest = { corners: { topRight: 8 }, spacing: 4 };
        expect(handle.result.current.draft).toEqual(rest);
        expect(handle.result.current.dirty).toBe(false);
        expect(handle.result.current.validation.isValid).toBe(true);
        expect(getLastKnownTheme()).toEqual(rest);
        expect(getDraftTheme()).toEqual(rest);
    });

    it('ends an untouched session on the last of two changes reported back to back', async () => {
        const { fake, handle } = await startLoaded();

        fake.push(JSON.stringify({ spacing: 2 }), JSON.stringify(FOREIGN));
        settle();

        expect(handle.result.current.draft).toEqual(FOREIGN);
        expect(handle.result.current.dirty).toBe(false);
        expect(getDraftTheme()).toEqual(FOREIGN);
    });

    it('leaves the session alone when the unchanged theme is reported again: redo survives', async () => {
        const { fake, handle } = await startLoaded();
        act(() => handle.result.current.edit('spacing', 4));
        act(() => handle.result.current.undo());

        fake.push(JSON.stringify(STORED));

        expect(handle.result.current.dirty).toBe(false);
        expect(handle.result.current.canRedo).toBe(true);
    });

    it('does not bring a draft back to the canvas after discard', async () => {
        const { fake, handle } = await startLoaded();
        act(() => handle.result.current.discard());
        settle();

        fake.push(JSON.stringify(FOREIGN));
        settle();

        expect(getDraftTheme()).toBeNull();
    });

    it('stops listening when the session closes: a later change reaches neither Studio nor canvas', async () => {
        const { fake, handle } = await startLoaded();
        expect(fake.subscribers()).toBe(1);

        handle.unmount();
        session = null;
        settle();

        expect(fake.subscribers()).toBe(0);
        fake.pushLate(JSON.stringify(FOREIGN));
        settle();
        expect(getLastKnownTheme()).toEqual(STORED);
        expect(getDraftTheme()).toBeNull();
    });
});

describe('useStudioSession beforeunload warning', () => {
    /** Dispatches a cancelable beforeunload and reports whether the session objected. */
    const leavePage = (): boolean => {
        const event = new Event('beforeunload', { cancelable: true });
        window.dispatchEvent(event);
        return event.defaultPrevented;
    };

    it('lets the page go while the draft is clean', () => {
        start(fakeSocket().socket);

        expect(leavePage()).toBe(false);
    });

    it('warns while the draft is dirty, and stops once it is clean again', () => {
        const handle = start(fakeSocket().socket);
        act(() => handle.result.current.edit('spacing', 4));

        expect(leavePage()).toBe(true);

        act(() => handle.result.current.undo());
        expect(leavePage()).toBe(false);
    });

    it('stops warning when the session ends', () => {
        const handle = start(fakeSocket().socket);
        act(() => handle.result.current.edit('spacing', 4));

        handle.unmount();
        session = null;

        expect(leavePage()).toBe(false);
    });
});
