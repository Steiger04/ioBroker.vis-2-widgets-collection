/**
 * Pure transitions of useInlineEdit — the inline-edit session rules.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit.test
 * @remarks
 * Pins the session semantics WITHOUT React: draft sync (backend adoption only
 * while not editing), the blur mode decision (OK commits, live leaves) and the
 * key decision (Enter commits via the blur path, Escape cancels — leave without
 * committing).
 */
import { describe, expect, it } from 'vitest';

import { blurAction, keyAction, syncDraft } from './useInlineEdit';

describe('syncDraft', () => {
    it('adopts the backend value while not editing', () => {
        expect(syncDraft('old', 'backend', false)).toBe('backend');
    });

    it('keeps the local draft while editing', () => {
        expect(syncDraft('typed', 'backend', true)).toBe('typed');
    });
});

describe('blurAction', () => {
    it('commits in OK-button mode', () => {
        expect(blurAction(true)).toBe('commit');
    });

    it('only leaves in live mode', () => {
        expect(blurAction(false)).toBe('leave');
    });
});

describe('keyAction', () => {
    it('runs the blur (commit) path for Enter', () => {
        expect(keyAction('Enter')).toBe('commit');
    });

    it('cancels the session for Escape', () => {
        expect(keyAction('Escape')).toBe('cancel');
    });

    it('ignores every other key', () => {
        expect(keyAction('a')).toBe('none');
        expect(keyAction('Tab')).toBe('none');
        expect(keyAction('ArrowLeft')).toBe('none');
    });
});
