/**
 * parseStoredTheme — how the value of the theme state becomes a user theme.
 *
 * @module lib/theme/storedTheme.test
 */
import { describe, expect, it } from 'vitest';

import { parseStoredTheme } from './storedTheme';

describe('parseStoredTheme', () => {
    it('reads a valid stored theme', () => {
        expect(parseStoredTheme('{"palette":{"primary":{"main":"#ff0000"}}}')).toEqual({
            palette: { primary: { main: '#ff0000' } },
        });
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
