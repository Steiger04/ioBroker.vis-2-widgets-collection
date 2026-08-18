/**
 * useEditorHistory — pure history transitions (ADR-0038, generalised from ADR-0020).
 *
 * @module lib/useEditorHistory.test
 */
import { describe, expect, it } from 'vitest';

import {
    COALESCE_WINDOW_MS,
    HISTORY_LIMIT,
    historyReducer,
    shouldCoalesce,
    type HistoryState,
} from './useEditorHistory';

interface Draft {
    value: number;
}

const state = (past: number[], present: number, future: number[] = []): HistoryState<Draft> => ({
    past: past.map(value => ({ value })),
    present: { value: present },
    future: future.map(value => ({ value })),
});

describe('historyReducer set', () => {
    it('pushes a discrete edit onto the past and clears the future', () => {
        const result = historyReducer(state([1], 2, [3]), { type: 'set', next: { value: 4 }, coalesce: false });
        expect(result.past.map(d => d.value)).toEqual([1, 2]);
        expect(result.present.value).toBe(4);
        expect(result.future).toEqual([]);
    });

    it('replaces the present without pushing when coalescing', () => {
        const result = historyReducer(state([1], 2), { type: 'set', next: { value: 3 }, coalesce: true });
        expect(result.past.map(d => d.value)).toEqual([1]);
        expect(result.present.value).toBe(3);
        expect(result.future).toEqual([]);
    });

    it('resolves an updater against the previous present', () => {
        const result = historyReducer(state([], 2), {
            type: 'set',
            next: (prev: Draft) => ({ value: prev.value * 10 }),
            coalesce: false,
        });
        expect(result.present.value).toBe(20);
    });

    it('bounds the past to HISTORY_LIMIT entries', () => {
        let current = state([], 0);
        for (let i = 1; i <= HISTORY_LIMIT + 10; i += 1) {
            current = historyReducer(current, { type: 'set', next: { value: i }, coalesce: false });
        }
        expect(current.past).toHaveLength(HISTORY_LIMIT);
        expect(current.past[current.past.length - 1].value).toBe(HISTORY_LIMIT + 10 - 1);
        expect(current.present.value).toBe(HISTORY_LIMIT + 10);
    });
});

describe('historyReducer undo/redo', () => {
    it('undo moves the present onto the future and restores the last past entry', () => {
        const undone = historyReducer(state([1, 2], 3), { type: 'undo' });
        expect(undone.present.value).toBe(2);
        expect(undone.past.map(d => d.value)).toEqual([1]);
        expect(undone.future.map(d => d.value)).toEqual([3]);
    });

    it('redo restores the future head and bounds nothing', () => {
        const redone = historyReducer(state([1], 2, [3, 4]), { type: 'redo' });
        expect(redone.present.value).toBe(3);
        expect(redone.past.map(d => d.value)).toEqual([1, 2]);
        expect(redone.future.map(d => d.value)).toEqual([4]);
    });

    it('undo at the stack floor and redo at the top are no-ops (same reference)', () => {
        const floor = state([], 1);
        expect(historyReducer(floor, { type: 'undo' })).toBe(floor);
        const top = state([1], 2, []);
        expect(historyReducer(top, { type: 'redo' })).toBe(top);
    });
});

describe('historyReducer rebase', () => {
    it('resets past/present/future to the fresh value', () => {
        const result = historyReducer(state([1, 2], 3, [4]), { type: 'rebase', value: { value: 9 } });
        expect(result).toEqual({ past: [], present: { value: 9 }, future: [] });
    });
});

describe('shouldCoalesce', () => {
    it('coalesces the same key within the window', () => {
        expect(shouldCoalesce({ key: 'a', time: 1000 }, 'a', 1000 + COALESCE_WINDOW_MS - 1)).toBe(true);
    });

    it('stops coalescing at the window edge, across keys, and without a previous edit', () => {
        expect(shouldCoalesce({ key: 'a', time: 1000 }, 'a', 1000 + COALESCE_WINDOW_MS)).toBe(false);
        expect(shouldCoalesce({ key: 'a', time: 1000 }, 'b', 1000 + 1)).toBe(false);
        expect(shouldCoalesce(null, 'a', 1000)).toBe(false);
    });
});
