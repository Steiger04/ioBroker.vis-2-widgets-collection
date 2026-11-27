/**
 * The Maßstab rule of the heating family at its interface (ADR-0122 Nachtrag „Maßstab und
 * Anordnungswahl“ Nr. 1, 2).
 *
 * @module lib/heating/scaleRule.test
 * @remarks
 * Pinned: the bounds (at most 2.0; ± keep 40 px, no text below 11 px), the least Maßstab a design
 * allows by them, the damped head (1 at the design, about 1.3 at 2.0) and design measures at a
 * factor, and the largest Maßstab at which an arrangement fits its box.
 */
import { describe, expect, it } from 'vitest';

import { fittingScale, headScale, leastScale, legible, SCALE_BOUNDS, scaled } from './scaleRule';
import { kartenkopfSizes, pillSizes } from './partSizes';

describe('scaleRule: bounds', () => {
    it('allows at most 2.0, ± of at least 40 px and no text below 11 px', () => {
        expect(SCALE_BOUNDS).toEqual({ max: 2, minControl: 40, minText: 11 });
    });

    it.each([
        // ± 52 px reach 40 px at 0.77; 12 px of text reach 11 px only at 0.92.
        ['the smallest text binds', { controls: [52], texts: [12, 16] }, 11 / 12],
        // The tile's ± 44 px reach 40 px at 0.91; 19 px of text 11 px at 0.58.
        ['the smallest control binds', { controls: [52, 44], texts: [19] }, 40 / 44],
        ['a design without controls', { controls: [], texts: [22] }, 0.5],
    ])('gives the least Maßstab where %s', (_case, design, least) => {
        expect(leastScale(design)).toBeCloseTo(least, 6);
    });

    it('never asks more than the design itself while it holds the bounds', () => {
        expect(leastScale({ controls: [40], texts: [11] })).toBe(1);
    });
});

describe('scaleRule: the damped head', () => {
    it.each([
        [1, 1],
        [2, 1.3],
    ])('draws the head at Maßstab %d with %d', (scale, head) => {
        expect(headScale(scale)).toBeCloseTo(head, 6);
    });

    it('grows and shrinks less than the Maßstab, in the same direction', () => {
        expect(headScale(1.5)).toBeGreaterThan(1);
        expect(headScale(1.5)).toBeLessThan(1.5);
        expect(headScale(0.8)).toBeLessThan(1);
        expect(headScale(0.8)).toBeGreaterThan(0.8);
    });
});

describe('scaleRule: design measures at a factor', () => {
    it('keeps the design at 1 and multiplies every measure otherwise', () => {
        const design = { height: 44, font: 13.5, gapUnits: 1 };

        expect(scaled(design, 1)).toEqual(design);
        expect(scaled(design, 1.5)).toEqual({ height: 66, font: 20.25, gapUnits: 1.5 });
    });
});

describe('scaleRule: legible text', () => {
    it.each([
        ['keeps a text above the bound', 13.5, 13.5],
        ['holds a text at the bound', 11, 11],
        ['stops a smaller text at 11 px', 8.8, 11],
    ])('%s (%d px)', (_case, px, shown) => {
        expect(legible(px)).toBe(shown);
    });

    it('holds the pills and the Kartenkopf legible at the least Maßstab of ± 52 px', () => {
        // 13.5 px × 0.769 = 10.4 px; the Kartenkopf at 0.7 is damped to 0.87: 12.5 px → 10.9 px.
        expect(pillSizes(40 / 52)).toMatchObject({ font: 11, height: 44 * (40 / 52) });
        expect(kartenkopfSizes(0.7)).toMatchObject({ name: 19 * 0.7, second: 11, chipFont: 11 });
    });
});

describe('scaleRule: the Maßstab that fills the box', () => {
    it('finds the largest Maßstab at which a part fits, to a thousandth', () => {
        // A part 100 px wide at the design in a box of 137 px.
        expect(fittingScale(scale => 100 * scale <= 137)).toBe(1.37);
        expect(fittingScale(scale => 300 * scale <= 100)).toBe(0.333);
    });

    it('stops at the upper bound of 2.0', () => {
        expect(fittingScale(scale => 100 * scale <= 900)).toBe(2);
    });

    it('gives 0 when not even the smallest Maßstab fits', () => {
        expect(fittingScale(() => false)).toBe(0);
    });
});
