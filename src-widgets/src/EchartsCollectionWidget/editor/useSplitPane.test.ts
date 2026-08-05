/**
 * useSplitPane — rail-width clamp math + persistence (ADR-0019).
 *
 * @module EchartsCollectionWidget/editor/useSplitPane.test
 */
import { beforeEach, describe, expect, it } from 'vitest';

import {
    clampRailWidth,
    RAIL_DEFAULT,
    RAIL_MAX,
    RAIL_MIN,
    RAIL_STORAGE_KEY,
    readStoredRailWidth,
    storeRailWidth,
} from './useSplitPane';

describe('clampRailWidth', () => {
    it('passes a width inside the range through unchanged (rounded)', () => {
        expect(clampRailWidth(440, 1600)).toBe(440);
        expect(clampRailWidth(440.6, 1600)).toBe(441);
    });

    it('clamps to RAIL_MIN below the minimum', () => {
        expect(clampRailWidth(100, 1600)).toBe(RAIL_MIN);
        expect(clampRailWidth(0, 1600)).toBe(RAIL_MIN);
        expect(clampRailWidth(-50, 1600)).toBe(RAIL_MIN);
    });

    it('clamps to RAIL_MAX above the maximum', () => {
        expect(clampRailWidth(2000, 4000)).toBe(RAIL_MAX);
    });

    it('keeps the preview floor: container width − PREVIEW_MIN caps below RAIL_MAX', () => {
        // 1000 px container → rail may take at most 600 so the preview keeps 400.
        expect(clampRailWidth(700, 1000)).toBe(600);
        expect(clampRailWidth(500, 1000)).toBe(500);
    });

    it('stays total on degenerate (tiny) containers: rail wins its minimum', () => {
        // 600 px container cannot honour rail-min + preview-min — the rail keeps RAIL_MIN.
        expect(clampRailWidth(440, 600)).toBe(RAIL_MIN);
        expect(clampRailWidth(100, 600)).toBe(RAIL_MIN);
    });
});

describe('rail-width persistence', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('round-trips a stored width', () => {
        storeRailWidth(512);
        expect(readStoredRailWidth()).toBe(512);
        expect(localStorage.getItem(RAIL_STORAGE_KEY)).toBe('512');
    });

    it('returns null when nothing is stored', () => {
        expect(readStoredRailWidth()).toBeNull();
    });

    it('rejects invalid stored values', () => {
        localStorage.setItem(RAIL_STORAGE_KEY, 'abc');
        expect(readStoredRailWidth()).toBeNull();
        localStorage.setItem(RAIL_STORAGE_KEY, '-20');
        expect(readStoredRailWidth()).toBeNull();
        localStorage.setItem(RAIL_STORAGE_KEY, '0');
        expect(readStoredRailWidth()).toBeNull();
        localStorage.setItem(RAIL_STORAGE_KEY, '');
        expect(readStoredRailWidth()).toBeNull();
    });

    it('never throws when storage is unavailable', () => {
        const broken = {
            getItem: () => {
                throw new Error('denied');
            },
            setItem: () => {
                throw new Error('denied');
            },
        } as unknown as Storage;
        expect(readStoredRailWidth(broken)).toBeNull();
        expect(() => storeRailWidth(440, broken)).not.toThrow();
    });

    it('exposes a sane default', () => {
        expect(RAIL_DEFAULT).toBeGreaterThanOrEqual(RAIL_MIN);
        expect(RAIL_DEFAULT).toBeLessThanOrEqual(RAIL_MAX);
    });
});
