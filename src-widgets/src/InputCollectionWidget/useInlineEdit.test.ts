/**
 * Pure transitions of useInlineEdit — the inline-edit session rules.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit.test
 * @remarks
 * Pins the session semantics WITHOUT React: draft sync (backend adoption only
 * while not editing), the blur mode decision (OK commits, live leaves) and the
 * key decision. The key cases document the STATUS QUO (Escape does nothing);
 * the follow-up feat commit turns Escape into a cancel that leaves the session
 * without committing.
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

    it('STATUS QUO: ignores Escape (no cancel path yet)', () => {
        expect(keyAction('Escape')).toBe('none');
    });

    it('ignores every other key', () => {
        expect(keyAction('a')).toBe('none');
        expect(keyAction('Tab')).toBe('none');
        expect(keyAction('ArrowLeft')).toBe('none');
    });
});
