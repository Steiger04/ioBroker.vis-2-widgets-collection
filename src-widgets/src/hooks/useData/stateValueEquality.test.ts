import { describe, expect, it } from 'vitest';
import { sameStateValue } from './stateValueEquality';

// Characterization tests pinning sameStateValue's de-facto contract: two state
// values count as equal exactly when their string coercions are equal. ioBroker
// delivers the "same" value as `1` or `'1'` depending on source and state type,
// so every activity check (useData state loop, index search, toggle renderers)
// must go through this function instead of a type-strict comparison.

describe('sameStateValue', () => {
    it('treats number 1 and string "1" as equal (both sides coerce to string)', () => {
        expect(sameStateValue(1, '1')).toBe(true);
        expect(sameStateValue('1', 1)).toBe(true);
    });

    it('treats boolean true and string "true" as equal', () => {
        expect(sameStateValue(true, 'true')).toBe(true);
        expect(sameStateValue('true', true)).toBe(true);
    });

    it('treats boolean false and string "false" as equal', () => {
        expect(sameStateValue(false, 'false')).toBe(true);
    });

    it('distinguishes values with different string coercions', () => {
        expect(sameStateValue('1', 2)).toBe(false);
        expect(sameStateValue(true, false)).toBe(false);
        expect(sameStateValue('abc', 'abd')).toBe(false);
    });

    it('distinguishes 0 from false ("0" vs "false")', () => {
        expect(sameStateValue(0, false)).toBe(false);
    });

    it('distinguishes null from undefined ("null" vs "undefined")', () => {
        expect(sameStateValue(null, undefined)).toBe(false);
        expect(sameStateValue(undefined, null)).toBe(false);
    });

    it('matches null against null and undefined against undefined', () => {
        expect(sameStateValue(null, null)).toBe(true);
        expect(sameStateValue(undefined, undefined)).toBe(true);
    });

    it('matches null/undefined against their literal string forms (frozen coercion quirk)', () => {
        // String(null) === 'null' and String(undefined) === 'undefined': a
        // configured state value that is literally the string "null" matches
        // a null backend value. This is the frozen legacy behavior.
        expect(sameStateValue(null, 'null')).toBe(true);
        expect(sameStateValue(undefined, 'undefined')).toBe(true);
    });

    it('never matches a NaN-coerced state value against real backend values', () => {
        // A number state configured with non-numeric input coerces to NaN.
        // Real backend values (numbers, null, undefined, strings, booleans)
        // never stringify to 'NaN' — ioBroker serializes NaN as null — so
        // such a state can never become active. Frozen, deliberately not fixed.
        expect(sameStateValue(NaN, 1)).toBe(false);
        expect(sameStateValue(NaN, 0)).toBe(false);
        expect(sameStateValue(NaN, null)).toBe(false);
        expect(sameStateValue(NaN, undefined)).toBe(false);
        expect(sameStateValue(NaN, true)).toBe(false);
        expect(sameStateValue(NaN, 'abc')).toBe(false);
    });

    it('compares purely by string, so NaN matches the literal string "NaN" (frozen legacy quirk)', () => {
        // String(NaN) === 'NaN': the comparison has no NaN special-casing.
        // A backend value whose string form is literally 'NaN' would match a
        // NaN-coerced state value. Real backend values never take that shape
        // (see test above), so the quirk is characterized, not fixed.
        expect(sameStateValue(NaN, 'NaN')).toBe(true);
        expect(sameStateValue('NaN', NaN)).toBe(true);
    });
});
