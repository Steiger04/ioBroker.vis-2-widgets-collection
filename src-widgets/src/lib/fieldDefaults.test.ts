/**
 * The one meaning of „unset“ the Lese-Naht reads (ADR-0114, ADR-0117 addendum 2026-11-17): the
 * pick, the field defaults and the frame stage fill a key exactly where it is unset.
 *
 * @module lib/fieldDefaults.test
 */
import { describe, expect, it } from 'vitest';

import { isUnset, withFieldDefaults } from './fieldDefaults';
import { withWidgetFrame } from './widgetFrame';

/** Stored values and whether the widget reads them as unset. */
const VALUES: readonly (readonly [string, unknown, boolean])[] = [
    ['a missing key', undefined, true],
    ['a null the assistant’s flat update wrote', null, true],
    ['an emptied text', '', false],
    ['zero', 0, false],
    ['false', false, false],
    ['NaN', Number.NaN, false],
    ['the text "null"', 'null', false],
    ['an empty object', {}, false],
];

describe('isUnset: the one meaning of unset', () => {
    it.each(VALUES)('%s (%o) reads as unset: %s', (_label, value, unset) => {
        expect(isUnset(value)).toBe(unset);
    });
});

describe('the field defaults and the frame stage fill the same keys', () => {
    it.each(VALUES)('%s', (_label, value, unset) => {
        const defaulted = withFieldDefaults({ key: value }, new Map([['key', 'default']]));
        const framed = withWidgetFrame({ noCard: value }, ['noCard'], { noCard: true });

        expect(defaulted.key).toBe(unset ? 'default' : value);
        expect(framed.noCard).toBe(unset ? true : value);
    });
});
