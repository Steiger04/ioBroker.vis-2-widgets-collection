/**
 * useEditorHistoryKeys — the shared Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y binding (ADR-0038).
 *
 * @module lib/useEditorHistory.hook.test
 * @remarks
 * Pins the window-wide default (the echarts configurator, a modal) and the scoped mode a
 * non-modal editor uses (the Theme Studio stays open in the vis-2 editor, whose own undo must
 * keep working outside the panel).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { renderHook, type RenderHookHandle } from './testing/testHarness';
import { useEditorHistoryKeys, type EditorHistory } from './useEditorHistory';

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
