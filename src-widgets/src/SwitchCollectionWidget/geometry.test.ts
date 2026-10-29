import { describe, expect, it } from 'vitest';

import { resolveCheckedInputLeft, resolveThumbTravel } from './geometry';

describe('resolveThumbTravel', () => {
    it('travels half the thumb size minus the inset while the thumb fits', () => {
        expect(resolveThumbTravel(62, 400)).toBe(62 / 2 - 4);
    });

    it('clamps to half the available height once it undercuts the thumb', () => {
        expect(resolveThumbTravel(62, 40)).toBe(40 / 2 - 4);
    });

    it('treats the boundary (maxHeight === thumbSize) as fitting', () => {
        expect(resolveThumbTravel(62, 62)).toBe(62 / 2 - 4);
    });

    it('treats an unmeasured height as zero (first render)', () => {
        expect(resolveThumbTravel(62, undefined)).toBe(-4);
    });

    it('may go negative when the height undercuts twice the inset (legacy, frozen)', () => {
        expect(resolveThumbTravel(62, 0)).toBe(-4);
        expect(resolveThumbTravel(62, 6)).toBe(-1);
    });

    it('honours the field caps', () => {
        // thumbSize 0 (slider minimum): the inset dominates
        expect(resolveThumbTravel(0, 400)).toBe(-4);
        // thumbSize 500 (slider maximum), capped by a smaller height
        expect(resolveThumbTravel(500, 400)).toBe(400 / 2 - 4);
        expect(resolveThumbTravel(500, 600)).toBe(500 / 2 - 4);
    });
});

describe('resolveCheckedInputLeft', () => {
    it('shifts right by the thumb size', () => {
        expect(resolveCheckedInputLeft(200, 62)).toBe(-200 + 62);
    });

    it('treats an unmeasured width as zero (first render)', () => {
        expect(resolveCheckedInputLeft(undefined, 62)).toBe(62);
    });

    it('degrades to the thumb size at width zero', () => {
        expect(resolveCheckedInputLeft(0, 62)).toBe(62);
    });
});
