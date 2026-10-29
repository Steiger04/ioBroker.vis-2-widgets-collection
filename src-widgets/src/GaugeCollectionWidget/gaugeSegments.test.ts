/**
 * Highlight-Zone model tests (range semantics + segment style chains).
 *
 * @module GaugeCollectionWidget/gaugeSegments.test
 */

import { describe, it, expect } from 'vitest';

import {
    buildHighlights,
    findSegment,
    resolveSegmentBackground,
    resolveSegmentFrame,
    type Highlight,
    type HighlightState,
} from './gaugeSegments';
import type { StateStyleData } from '../hooks/useData/types';

/** Minimal state row (only the fields buildHighlights reads). */
const row = (value: number | string, textColor?: string): StateStyleData =>
    ({ value, textColor }) as unknown as StateStyleData;

describe('buildHighlights', () => {
    it('spans each row up to the next row value', () => {
        const zones = buildHighlights([row(0, '#0f0'), row(10, '#ff0'), row(20, '#f00')], 100);
        expect(zones.map(z => [z.from, z.to])).toEqual([
            [0, 10],
            [10, 20],
            [20, 100], // last zone stretched to the max
        ]);
        expect(zones.map(z => z.color)).toEqual(['#0f0', '#ff0', '#f00']);
    });

    it('treats a boundary of exactly 0 as a real limit (not falsy-unset)', () => {
        const zones = buildHighlights([row(-20), row(0), row(20)], 100);
        expect(zones[0].to).toBe(0);
        expect(zones[1].to).toBe(20);
    });

    it('keeps the last row end when it equals the max (no stretch)', () => {
        const zones = buildHighlights([row(0), row(100)], 100);
        expect(zones[1].to).toBe(100);
    });

    it('falls back to transparent without a plottable text color', () => {
        expect(buildHighlights([row(0)], 100)[0].color).toBe('transparent');
        expect(buildHighlights([row(0, 'some text')], 100)[0].color).toBe('transparent');
    });

    it('returns an empty zone list for empty state rows', () => {
        expect(buildHighlights([], 100)).toEqual([]);
    });
});

describe('findSegment — half-open intervals, closed at the absolute max', () => {
    const zones: Highlight[] = [
        { from: 0, to: 10, color: '', state: {} as HighlightState },
        { from: 10, to: 20, color: '', state: {} as HighlightState },
    ];

    it('matches inside a zone and at its inclusive start', () => {
        expect(findSegment(zones, 5, 20)).toBe(zones[0]);
        expect(findSegment(zones, 10, 20)).toBe(zones[1]); // start of the second zone
    });

    it('keeps the upper bound exclusive', () => {
        expect(findSegment(zones, 20, 100)).toBeNull(); // 20 is outside (max is 100)
    });

    it('closes the last zone at the absolute maximum', () => {
        const last: Highlight[] = [{ from: 10, to: 20, color: '', state: {} as HighlightState }];
        expect(findSegment(last, 20, 20)).toBe(last[0]);
    });

    it('returns null below the first zone and for negative ranges', () => {
        expect(findSegment(zones, -1, 20)).toBeNull();
        const negative: Highlight[] = [{ from: -30, to: -10, color: '', state: {} as HighlightState }];
        expect(findSegment(negative, -20, 0)).toBe(negative[0]);
        expect(findSegment(negative, -10, 0)).toBeNull();
    });
});

describe('resolveSegmentFrame / resolveSegmentBackground — active-first chains', () => {
    const seg = (state: HighlightState): Highlight => ({ from: 0, to: 1, color: '', state });

    it('active flat beats plain flat beats active background beats plain background', () => {
        const state = seg({
            frameBackgroundColorActive: 'A',
            frameBackgroundColor: 'B',
            frameBackgroundActive: 'C',
            frameBackground: 'D',
            backgroundColorActive: 'W',
            backgroundColor: 'X',
            backgroundActive: 'Y',
            background: 'Z',
        });
        expect(resolveSegmentFrame(state)).toBe('A');
        expect(resolveSegmentBackground(state)).toBe('W');
    });

    it('skips empty chain members', () => {
        const state = seg({
            frameBackgroundColor: '',
            frameBackgroundActive: 'C',
            backgroundColor: 'X',
        });
        expect(resolveSegmentFrame(state)).toBe('C');
        expect(resolveSegmentBackground(state)).toBe('X');
    });

    it('returns undefined when the zone sets nothing (base data passes through)', () => {
        const state = seg({ frameBackground: '', background: undefined });
        expect(resolveSegmentFrame(state)).toBeUndefined();
        expect(resolveSegmentBackground(state)).toBeUndefined();
    });
});
