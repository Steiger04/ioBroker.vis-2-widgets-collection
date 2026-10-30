/**
 * Unit tests for the effective state count rule (Zustandsmenge).
 *
 * @module lib/effectiveStateCount.test
 */
import { describe, expect, it } from 'vitest';

import effectiveStateCount from './effectiveStateCount';

describe('effectiveStateCount', () => {
    it('lets the authored rows govern when ignoreCommonStates is false', () => {
        expect(
            effectiveStateCount({
                valuesCount: 2,
                commonStatesCount: 3,
                ignoreCommonStates: false,
            }),
        ).toBe(2);
    });

    it('prefers the commonStates count when common states are not ignored', () => {
        expect(
            effectiveStateCount({
                valuesCount: 5,
                commonStatesCount: 3,
                ignoreCommonStates: true,
            }),
        ).toBe(3);
    });

    it('treats a missing ignoreCommonStates like true (commonStates govern)', () => {
        expect(
            effectiveStateCount({
                valuesCount: 5,
                commonStatesCount: 2,
            }),
        ).toBe(2);
    });

    it('falls back to the authored rows without commonStates (boolean OIDs)', () => {
        expect(
            effectiveStateCount({
                valuesCount: 2,
                commonStatesCount: 0,
                ignoreCommonStates: true,
            }),
        ).toBe(2);
    });

    it('regression: authored rows of 0 win over commonStates when ignoreCommonStates is false', () => {
        // Editor divergence case: the old hidden closures showed the push-button toggle here
        // while the runtime resolved 0 states. The ONE rule must keep returning 0.
        expect(
            effectiveStateCount({
                valuesCount: 0,
                commonStatesCount: 2,
                ignoreCommonStates: false,
            }),
        ).toBe(0);
    });

    it('handles null / undefined inputs as zero states', () => {
        expect(effectiveStateCount({ valuesCount: undefined, commonStatesCount: undefined })).toBe(0);
        expect(effectiveStateCount({ valuesCount: null, commonStatesCount: null, ignoreCommonStates: null })).toBe(0);
        expect(effectiveStateCount({ valuesCount: undefined, commonStatesCount: 1, ignoreCommonStates: false })).toBe(
            0,
        );
        expect(effectiveStateCount({ valuesCount: null, commonStatesCount: null, ignoreCommonStates: true })).toBe(0);
    });
});
