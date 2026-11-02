/**
 * Pure transitions of useValueState — the write path's decision logic.
 *
 * @module hooks/useValueState.test
 * @remarks
 * Pins the echo/significance contract WITHOUT React: type conversion, the
 * significance heuristic and the window/sentinel precedence of
 * {@link decideBackendChange}. Since ADR-0087 significance is type-aware:
 * numeric-like pairs keep the delta ≥ 1 jitter filter, any pair with a
 * non-coercing side (pure strings) counts every change.
 */
import { describe, expect, it } from 'vitest';

import { VALUE_NOT_CHANGED_TIMESTAMP } from '../lib/constants';
import { convertToOidType, decideBackendChange, isSignificantBackendChange } from './useValueState';

describe('convertToOidType', () => {
    it('stringifies for string OIDs', () => {
        expect(convertToOidType(42, 'string')).toBe('42');
        expect(convertToOidType(true, 'string')).toBe('true');
    });

    it('converts numeric input for number OIDs', () => {
        expect(convertToOidType('42', 'number')).toBe(42);
        expect(convertToOidType('3.5', 'number')).toBe(3.5);
        expect(convertToOidType(7, 'number')).toBe(7);
    });

    it('rejects non-numeric and blank input for number OIDs', () => {
        expect(convertToOidType('abc', 'number')).toBeUndefined();
        expect(convertToOidType('', 'number')).toBeUndefined();
    });

    it('mixed tries boolean before number before string', () => {
        expect(convertToOidType('true', 'mixed')).toBe(true);
        expect(convertToOidType('FALSE', 'mixed')).toBe(false);
        expect(convertToOidType('42', 'mixed')).toBe(42);
        expect(convertToOidType('42x', 'mixed')).toBe('42x');
        expect(convertToOidType(true, 'mixed')).toBe(true);
    });

    it('boolean only accepts the string "true" (case-insensitive)', () => {
        expect(convertToOidType('true', 'boolean')).toBe(true);
        expect(convertToOidType('TRUE', 'boolean')).toBe(true);
        expect(convertToOidType(true, 'boolean')).toBe(true);
        // Everything else — including "1" and "yes" — becomes false.
        expect(convertToOidType('1', 'boolean')).toBe(false);
        expect(convertToOidType('yes', 'boolean')).toBe(false);
        expect(convertToOidType(false, 'boolean')).toBe(false);
    });

    it('passes the value through for an unknown OID type', () => {
        expect(convertToOidType('42', undefined)).toBe('42');
    });
});

describe('isSignificantBackendChange', () => {
    it('treats equal values as insignificant', () => {
        expect(isSignificantBackendChange('on', 'on')).toBe(false);
        expect(isSignificantBackendChange(5, 5)).toBe(false);
        expect(isSignificantBackendChange(undefined, null)).toBe(false);
    });

    it('treats numeric deltas of at least 1 as significant', () => {
        expect(isSignificantBackendChange(5, 10)).toBe(true);
        expect(isSignificantBackendChange('5', '10')).toBe(true);
        expect(isSignificantBackendChange(true, false)).toBe(true); // 1 vs 0
    });

    it('treats numeric deltas below 1 as insignificant (jitter filter)', () => {
        expect(isSignificantBackendChange('21.5', '21.9')).toBe(false);
        expect(isSignificantBackendChange(100, 100.4)).toBe(false);
    });

    it('treats purely non-numeric string changes as always significant (ADR-0087)', () => {
        // Number('#ff0000') is NaN — one non-coercing side makes ANY change
        // significant (the former NaN >= 1 comparison swallowed these forever).
        expect(isSignificantBackendChange('#ff0000', '#00ff00')).toBe(true);
        expect(isSignificantBackendChange('an', 'aus')).toBe(true);
        expect(isSignificantBackendChange('x', '')).toBe(true);
    });

    it('treats numeric-to-blank changes as significant (Number("") is 0)', () => {
        expect(isSignificantBackendChange('5', '')).toBe(true);
        expect(isSignificantBackendChange(undefined, 5)).toBe(true); // 0 vs 5
    });
});

describe('decideBackendChange', () => {
    it('never flags own optimistic writes (lc sentinel)', () => {
        const decision = decideBackendChange(
            { lc: 1000, value: 'old' },
            { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: 'mine' },
            0,
            5000,
        );

        expect(decision.significant).toBe(false);
        expect(decision.next).toEqual({ lc: VALUE_NOT_CHANGED_TIMESTAMP, value: 'mine' });
    });

    it('absorbs changes inside the ignore window (own write echo)', () => {
        const decision = decideBackendChange({ lc: 1000, value: 5 }, { lc: 2000, value: 42 }, 10_000, 5000);

        expect(decision.significant).toBe(false);
        expect(decision.next).toEqual({ lc: 2000, value: 42 });
    });

    it('does not flag the first observation (initialisation)', () => {
        const decision = decideBackendChange({ lc: undefined, value: undefined }, { lc: 2000, value: 42 }, 0, 5000);

        expect(decision.significant).toBe(false);
        expect(decision.next).toEqual({ lc: 2000, value: 42 });
    });

    it('requires an lc change even when the value changed', () => {
        const decision = decideBackendChange({ lc: 2000, value: 5 }, { lc: 2000, value: 42 }, 0, 5000);

        expect(decision.significant).toBe(false);
    });

    it('flags significant foreign changes outside the window', () => {
        const decision = decideBackendChange({ lc: 1000, value: 5 }, { lc: 2000, value: 42 }, 0, 5000);

        expect(decision.significant).toBe(true);
        expect(decision.next).toEqual({ lc: 2000, value: 42 });
    });

    it('keeps numeric jitter outside the window insignificant', () => {
        const decision = decideBackendChange({ lc: 1000, value: 100 }, { lc: 2000, value: 100.4 }, 0, 5000);

        expect(decision.significant).toBe(false);
    });

    it('flags a foreign string change outside the window (ADR-0087)', () => {
        const decision = decideBackendChange({ lc: 1000, value: '#ff0000' }, { lc: 2000, value: '#00ff00' }, 0, 5000);

        expect(decision.significant).toBe(true);
    });
});

describe('decideBackendChange — foreign (Fremdänderung, ADR-0087 addendum)', () => {
    it.each([
        [
            'an own optimistic write (lc sentinel)',
            { lc: 1000, value: 0.2 },
            { lc: VALUE_NOT_CHANGED_TIMESTAMP, value: 0.7 },
            0,
        ],
        ['an echo inside the ignore window', { lc: 1000, value: 0.2 }, { lc: 2000, value: 0.7 }, 10_000],
        ['the first observation', { lc: undefined, value: undefined }, { lc: 2000, value: 0.7 }, 0],
        ['an unchanged lc', { lc: 2000, value: 0.2 }, { lc: 2000, value: 0.7 }, 0],
    ])('is false for %s', (_case, prev, current, ignoreUntil) => {
        expect(decideBackendChange(prev, current, ignoreUntil, 5000).foreign).toBe(false);
    });

    it.each([
        ['0.2 → 0.7', 0.2, 0.7],
        ['21 → 21.5', 21, 21.5],
        ['5 → 42', 5, 42],
        ['#ff0000 → #00ff00', '#ff0000', '#00ff00'],
    ])('is true for an lc change outside the window, whatever the delta (%s)', (_case, from, to) => {
        expect(decideBackendChange({ lc: 1000, value: from }, { lc: 2000, value: to }, 0, 5000).foreign).toBe(true);
    });

    it('keeps significant = foreign AND the jitter filter: a sub-unit change is foreign, not significant', () => {
        const decision = decideBackendChange({ lc: 1000, value: 0.2 }, { lc: 2000, value: 0.7 }, 0, 5000);

        expect(decision.foreign).toBe(true);
        expect(decision.significant).toBe(false);
        expect(decision.next).toEqual({ lc: 2000, value: 0.7 });
    });
});
