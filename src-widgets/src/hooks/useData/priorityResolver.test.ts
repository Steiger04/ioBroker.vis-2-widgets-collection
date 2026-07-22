import { describe, expect, it } from 'vitest';
import { resolvePriority } from './priorityResolver';

// Characterization tests pinning resolvePriority's de-facto contract:
// empty strings, whitespace, and null are SKIPPED (treated as absent); only
// `undefined` and `condition === false` stop an option from being considered.
// The first non-empty value in descending priority order wins.

describe('resolvePriority', () => {
    it('returns undefined for an empty options array', () => {
        expect(resolvePriority([])).toBeUndefined();
    });

    it('returns undefined when all conditions are false', () => {
        expect(
            resolvePriority([
                { condition: false, value: 'a' },
                { condition: false, value: 'b' },
            ]),
        ).toBeUndefined();
    });

    it('returns undefined when all values are undefined', () => {
        expect(resolvePriority([{ value: undefined }, { value: undefined }])).toBeUndefined();
    });

    it('skips empty strings and continues the fallback chain', () => {
        expect(resolvePriority([{ value: '' }, { value: 'b' }])).toBe('b');
    });

    it('skips whitespace-only strings', () => {
        expect(resolvePriority([{ value: '   ' }, { value: 'b' }])).toBe('b');
    });

    it('skips null and continues the fallback chain', () => {
        expect(resolvePriority([{ value: null }, { value: 'b' }])).toBe('b');
    });

    it('returns undefined when every option is empty/null/whitespace', () => {
        expect(resolvePriority([{ value: '' }, { value: null }, { value: '  ' }])).toBeUndefined();
    });

    it('skips an option whose condition is explicitly false, even with a value', () => {
        expect(resolvePriority([{ condition: false, value: 'a' }, { value: 'b' }])).toBe('b');
    });

    it('returns the first matching value in priority order', () => {
        expect(resolvePriority([{ value: 'first' }, { value: 'second' }])).toBe('first');
    });

    it('treats an omitted condition as considered', () => {
        expect(resolvePriority([{ value: 'x' }])).toBe('x');
    });

    it('returns the first option whose condition is true with a non-empty value', () => {
        const result = resolvePriority([
            { condition: false, value: 'no' },
            { condition: true, value: '' },
            { condition: true, value: 'yes' },
            { value: 'fallback' },
        ]);
        expect(result).toBe('yes');
    });
});
