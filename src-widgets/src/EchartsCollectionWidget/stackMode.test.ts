/**
 * stackMode — the three-valued bar-stack resolver (ADR-0084 decisions 2+3).
 *
 * @module EchartsCollectionWidget/stackMode.test
 */
import { describe, expect, it } from 'vitest';

import { effectiveStackName, normalizeStackMode } from './stackMode';

describe('normalizeStackMode (tolerant blob read)', () => {
    it('passes the two real modes; absent/unknown/legacy heals to none', () => {
        expect(normalizeStackMode('stack')).toBe('stack');
        expect(normalizeStackMode('percent')).toBe('percent');
        expect(normalizeStackMode('none')).toBe('none');
        expect(normalizeStackMode(undefined)).toBe('none');
        expect(normalizeStackMode('bogus')).toBe('none');
        expect(normalizeStackMode('')).toBe('none');
    });
});

describe('effectiveStackName (three-valued resolution + axis coupling)', () => {
    it('opted-out never stacks, own group is mode-independent, inherit follows the mode', () => {
        expect(effectiveStackName('none', 'stack', 0)).toBeUndefined();
        expect(effectiveStackName('none', 'percent', 1)).toBeUndefined();
        expect(effectiveStackName('A', 'none', 2)).toBe('A#2');
        expect(effectiveStackName('B', 'stack', 0)).toBe('B#0');
        expect(effectiveStackName(undefined, 'none', 0)).toBeUndefined();
        expect(effectiveStackName(undefined, 'stack', 0)).toBe('total#0');
        expect(effectiveStackName(undefined, 'percent', 3)).toBe('total#3');
    });

    it('the legacy "" sentinel and foreign values read as INHERIT (unhealed body blobs)', () => {
        // '' meant "Keine" pre-0084 — with mode none (the fresh default) that is still no stack;
        // a healed widget never carries '' into a mode != none.
        expect(effectiveStackName('', 'none', 0)).toBeUndefined();
        expect(effectiveStackName('', 'stack', 0)).toBe('total#0');
        expect(effectiveStackName('bogus', 'stack', 0)).toBe('total#0');
    });
});
