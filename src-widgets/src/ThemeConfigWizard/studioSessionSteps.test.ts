/**
 * Studio session — the pure decisions behind the draft lifecycle.
 *
 * @module ThemeConfigWizard/studioSessionSteps.test
 * @remarks
 * Pins the policy the session hook only wires (ADR-0020 addendum 2026-11-02): when the stored
 * theme may replace the draft, when the draft counts as dirty, when Save is allowed and how a
 * stored state value becomes a draft. The wiring (load, canvas mirror, end invariant) is pinned
 * in useStudioSession.hook.test.ts.
 */
import { describe, expect, it } from 'vitest';

import type { UserTheme } from '../lib/theme/themeTypes';
import { canSave, isDirty, parseStoredTheme, shouldRebase } from './studioSessionSteps';

const SEED: UserTheme = { palette: { primary: { main: '#ff0000' } } };

describe('shouldRebase', () => {
    it('rebases an untouched seeded draft', () => {
        expect(shouldRebase({ palette: { primary: { main: '#ff0000' } } }, SEED)).toBe(true);
    });

    it('keeps a draft the user already touched', () => {
        expect(shouldRebase({ palette: { primary: { main: '#00ff00' } } }, SEED)).toBe(false);
    });

    it('rebases the empty draft when there was no seed', () => {
        expect(shouldRebase({}, null)).toBe(true);
    });

    it('keeps an edit made while waiting for the first load without a seed', () => {
        expect(shouldRebase({ spacing: 4 }, null)).toBe(false);
    });
});

describe('isDirty', () => {
    it('is clean when the draft equals the snapshot', () => {
        expect(isDirty({ palette: { primary: { main: '#ff0000' } } }, SEED)).toBe(false);
    });

    it('is dirty when the draft differs from the snapshot', () => {
        expect(isDirty({}, SEED)).toBe(true);
    });
});

describe('canSave', () => {
    it('allows a valid, dirty draft that is not being saved', () => {
        expect(canSave({ valid: true, dirty: true, saving: false })).toBe(true);
    });

    it.each([
        ['invalid', { valid: false, dirty: true, saving: false }],
        ['clean', { valid: true, dirty: false, saving: false }],
        ['already saving', { valid: true, dirty: true, saving: true }],
    ])('refuses a draft that is %s', (_label, input) => {
        expect(canSave(input)).toBe(false);
    });
});

describe('parseStoredTheme', () => {
    it('reads a valid stored theme', () => {
        expect(parseStoredTheme('{"palette":{"primary":{"main":"#ff0000"}}}')).toEqual(SEED);
    });

    it.each([
        ['an unset state', undefined],
        ['an empty string', ''],
        ['a non-string value', 42],
        ['corrupt JSON', '{"palette":'],
        // A range error (colour checks need CSS.supports, absent under node).
        ['an invalid theme', '{"corners":{"topLeft":-1}}'],
        ['a non-object theme', '[1]'],
    ])('falls back to the empty theme for %s', (_label, raw) => {
        expect(parseStoredTheme(raw)).toEqual({});
    });
});
