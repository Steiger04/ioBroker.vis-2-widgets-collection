/**
 * Highlight-Zone model tests (range semantics, arcs, active zone style).
 *
 * @module GaugeCollectionWidget/gaugeSegments.test
 * @remarks
 * States are built in the shape useData publishes: `frameBackground` is always set
 * (terminal paper), the legacy per-state colour keys never appear.
 */

import { describe, it, expect } from 'vitest';

import { resolveZones } from './gaugeSegments';
import type { StateStyleData } from '../hooks/useData/types';

/** A state as useData publishes it (`useData.tsx` states mapping). */
const state = (value: number, style: Partial<StateStyleData> = {}): StateStyleData => ({
    fieldNumber: 1,
    active: false,
    value,
    alias: undefined,
    textColor: undefined,
    icon: undefined,
    iconSize: undefined,
    iconSizeOnly: undefined,
    iconXOffset: undefined,
    iconYOffset: undefined,
    iconColor: undefined,
    iconHover: undefined,
    forceColorMask: undefined,
    valueSize: undefined,
    background: undefined,
    frameBackground: '#ffffff',
    ...style,
});

/** Index of the active zone among `states`, -1 for none — identified by its frame background. */
const activeIndex = (states: StateStyleData[], maxValue: number, value: number): number => {
    const { active } = resolveZones(states, maxValue, value);
    return active ? states.findIndex(s => s.frameBackground === active.frameBackground) : -1;
};

/** States with distinct frame backgrounds, so the active zone is identifiable. */
const tagged = (...values: number[]): StateStyleData[] =>
    values.map((value, index) => state(value, { frameBackground: `zone-${index}` }));

describe('resolveZones — arcs', () => {
    it('spans each row up to the next row value, the last zone stretched to the max', () => {
        const { arcs } = resolveZones(
            [state(0, { textColor: '#0f0' }), state(10, { textColor: '#ff0' }), state(20, { textColor: '#f00' })],
            100,
            0,
        );
        expect(arcs).toEqual([
            { from: 0, to: 10, color: '#0f0' },
            { from: 10, to: 20, color: '#ff0' },
            { from: 20, to: 100, color: '#f00' },
        ]);
    });

    it('treats a boundary of exactly 0 as a real limit (not falsy-unset)', () => {
        const { arcs } = resolveZones([state(-20), state(0), state(20)], 100, 0);
        expect(arcs.map(arc => [arc.from, arc.to])).toEqual([
            [-20, 0],
            [0, 20],
            [20, 100],
        ]);
    });

    it('keeps the last row end when it equals the max (no stretch)', () => {
        const { arcs } = resolveZones([state(0), state(100)], 100, 0);
        expect(arcs[1]).toMatchObject({ from: 100, to: 100 });
    });

    it('falls back to transparent without a plottable text color', () => {
        const { arcs } = resolveZones([state(0), state(10, { textColor: 'some text' })], 100, 0);
        expect(arcs.map(arc => arc.color)).toEqual(['transparent', 'transparent']);
    });

    it('carries only from/to/color, never the state', () => {
        const { arcs } = resolveZones([state(0, { icon: 'a.svg', background: '#123' })], 100, 0);
        expect(Object.keys(arcs[0]).sort()).toEqual(['color', 'from', 'to']);
    });

    it('returns no arcs and no active zone for empty states', () => {
        expect(resolveZones([], 100, 5)).toEqual({ arcs: [], active: null });
    });
});

describe('resolveZones — active zone: half-open intervals, closed at the absolute max', () => {
    it.each([
        { value: 5, maxValue: 20, expected: 0, note: 'inside the first zone' },
        { value: 10, maxValue: 20, expected: 1, note: 'inclusive start of the second zone' },
        { value: 19.99, maxValue: 20, expected: 1, note: 'just below the upper bound' },
        { value: 20, maxValue: 20, expected: 1, note: 'closed at the absolute maximum' },
        { value: 25, maxValue: 20, expected: -1, note: 'above the maximum' },
        { value: -1, maxValue: 20, expected: -1, note: 'below the first zone' },
    ])('$note ($value of max $maxValue)', ({ value, maxValue, expected }) => {
        expect(activeIndex(tagged(0, 10), maxValue, value)).toBe(expected);
    });

    it('hands an inner boundary to the upper zone (upper bound exclusive)', () => {
        expect(activeIndex(tagged(0, 10, 20), 100, 9.99)).toBe(0);
        expect(activeIndex(tagged(0, 10, 20), 100, 10)).toBe(1);
        expect(activeIndex(tagged(0, 10, 20), 100, 20)).toBe(2);
    });

    it('closes the zone ending at the max before a degenerate last zone [max, max]', () => {
        // Last row at the max: its zone is [100, 100]; the zone before it, closed at the max, wins.
        expect(activeIndex(tagged(0, 10, 100), 100, 100)).toBe(1);
    });

    it('takes 0 as a real boundary', () => {
        expect(activeIndex(tagged(-20, 0, 20), 100, -0.5)).toBe(0);
        expect(activeIndex(tagged(-20, 0, 20), 100, 0)).toBe(1);
    });

    it('resolves negative ranges', () => {
        expect(activeIndex(tagged(-30, -10), -5, -20)).toBe(0);
        expect(activeIndex(tagged(-30, -10), -5, -10)).toBe(1);
        expect(activeIndex(tagged(-30, -10), -5, -5)).toBe(1); // closed at the max
        expect(activeIndex(tagged(-30, -10), -5, -31)).toBe(-1);
    });

    it('stretches the last zone up to the max', () => {
        expect(activeIndex(tagged(0, 10), 100, 99)).toBe(1);
    });
});

describe('resolveZones — active zone style', () => {
    it("is exactly the zone's style keys, taken as useData resolved them", () => {
        const { active } = resolveZones(
            [
                state(0),
                state(10, {
                    frameBackground: '#336699',
                    background: '#aa0000',
                    icon: 'warm.svg',
                    iconColor: '#f00',
                    forceColorMask: true,
                    iconSizeOnly: '24px',
                    iconXOffset: '2px',
                    iconYOffset: '3px',
                    textColor: '#0f0',
                    alias: 'warm',
                }),
            ],
            100,
            50,
        );
        expect(active).toStrictEqual({
            frameBackground: '#336699',
            background: '#aa0000',
            icon: 'warm.svg',
            iconColor: '#f00',
            forceColorMask: true,
            iconSizeOnly: '24px',
            iconXOffset: '2px',
            iconYOffset: '3px',
        });
    });

    it('is null when the value lies in no zone', () => {
        expect(resolveZones([state(10)], 100, 5).active).toBeNull();
    });
});
