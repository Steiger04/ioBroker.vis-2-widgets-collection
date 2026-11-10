/**
 * useEditorHistoryKeys — the shared Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y binding (ADR-0038) — and
 * the coalescing run of useEditorHistory itself.
 *
 * @module lib/useEditorHistory.hook.test
 * @remarks
 * Pins the window-wide default (the echarts configurator, a modal) and the scoped mode a
 * non-modal editor uses (the Theme Studio stays open in the vis-2 editor, whose own undo must
 * keep working outside the panel). The coalescing run spans `set` calls; undo, redo and a rebase
 * (also the one a load issues while rendering) end it.
 */
import { act, useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { renderHook, type RenderHookHandle } from './testing/testHarness';
import { COALESCE_WINDOW_MS, useEditorHistory, useEditorHistoryKeys, type EditorHistory } from './useEditorHistory';

const history = (): EditorHistory<number> => ({
    present: 0,
    set: vi.fn(),
    undo: vi.fn(),
    redo: vi.fn(),
    rebase: vi.fn(),
    canUndo: true,
    canRedo: true,
});

/** Dispatches Ctrl+Z on `target` and reports whether a handler claimed it. */
const pressUndo = (target: EventTarget): boolean => {
    const event = new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, bubbles: true, cancelable: true });
    target.dispatchEvent(event);
    return event.defaultPrevented;
};

let handle: RenderHookHandle<void> | null = null;
let historyHandle: RenderHookHandle<EditorHistory<number>> | null = null;
const elements: HTMLElement[] = [];

const element = (): HTMLElement => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    elements.push(el);
    return el;
};

afterEach(() => {
    handle?.unmount();
    handle = null;
    historyHandle?.unmount();
    historyHandle = null;
    vi.restoreAllMocks();
    elements.splice(0).forEach(el => el.remove());
});

describe('useEditorHistoryKeys', () => {
    it('binds the whole window by default', () => {
        const h = history();
        handle = renderHook(() => useEditorHistoryKeys(h, true));

        expect(pressUndo(element())).toBe(true);
        expect(h.undo).toHaveBeenCalledTimes(1);
    });

    it('with a scope, handles keys inside it and leaves the rest of the page alone', () => {
        const h = history();
        const panel = element();
        const inside = document.createElement('button');
        panel.appendChild(inside);
        const outside = element();
        const scope = { current: panel };
        handle = renderHook(() => useEditorHistoryKeys(h, true, scope));

        expect(pressUndo(outside)).toBe(false);
        expect(h.undo).not.toHaveBeenCalled();

        expect(pressUndo(inside)).toBe(true);
        expect(h.undo).toHaveBeenCalledTimes(1);
    });

    it('with a scope that is not mounted yet, handles nothing', () => {
        const h = history();
        handle = renderHook(() => useEditorHistoryKeys(h, true, { current: null }));

        expect(pressUndo(element())).toBe(false);
        expect(h.undo).not.toHaveBeenCalled();
    });
});

describe('useEditorHistory — the coalescing run', () => {
    /** Mounts a history over `0` whose clock reads `now()`. */
    const mount = (now: () => number): RenderHookHandle<EditorHistory<number>> => {
        vi.spyOn(Date, 'now').mockImplementation(now);
        return renderHook(() => useEditorHistory(0));
    };
    const run = (step: (h: EditorHistory<number>) => void): void => {
        act(() => step(historyHandle!.result.current));
    };

    it('folds same-key edits inside the window into one undo step', () => {
        let time = 1000;
        historyHandle = mount(() => time);

        run(h => h.set(1, 'drag'));
        time += COALESCE_WINDOW_MS - 1;
        run(h => h.set(2, 'drag'));
        run(h => h.undo());

        expect(historyHandle.result.current.present).toBe(0);
        expect(historyHandle.result.current.canUndo).toBe(false);
    });

    it('ends the run on undo — the next same-key edit is its own step', () => {
        historyHandle = mount(() => 1000);

        run(h => h.set(1, 'drag'));
        run(h => h.set(2, 'drag'));
        run(h => h.undo());
        run(h => h.set(3, 'drag'));
        run(h => h.undo());

        expect(historyHandle.result.current.present).toBe(0);
    });

    it('ends the run on a rebase — the next same-key edit can be undone back to the loaded value', () => {
        historyHandle = mount(() => 1000);

        run(h => h.set(1, 'drag'));
        run(h => h.rebase(10));
        run(h => h.set(11, 'drag'));
        run(h => h.undo());

        expect(historyHandle.result.current.present).toBe(10);
    });

    it('ends the run on the rebase a load issues while rendering', () => {
        vi.spyOn(Date, 'now').mockReturnValue(1000);
        let token = 0;
        /** The load pattern of the echarts lifecycle: a new input rebases while rendering. */
        const useLoadedHistory = (): EditorHistory<number> => {
            const h = useEditorHistory(0);
            const [loadedToken, setLoadedToken] = useState(token);
            if (loadedToken !== token) {
                setLoadedToken(token);
                h.rebase(token * 10);
            }
            return h;
        };
        historyHandle = renderHook(useLoadedHistory);

        run(h => h.set(1, 'drag'));
        token = 1;
        historyHandle.rerender(useLoadedHistory);
        expect(historyHandle.result.current.present).toBe(10);

        run(h => h.set(11, 'drag'));
        run(h => h.undo());

        expect(historyHandle.result.current.present).toBe(10);
    });
});
