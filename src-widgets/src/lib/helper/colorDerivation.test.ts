import { describe, expect, it } from 'vitest';

import { alphaOf, lightenOf, solidOf } from './colorDerivation';

/** Two-stop gradients whose midpoint is a known literal (each channel 127.5 → 128). */
const LINEAR = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
const RADIAL = 'radial-gradient(circle, #000000 0%, #ffffff 100%)';

/** Values no color calculation can read — none of them has a Repräsentative Vollfarbe. */
const UNREADABLE: Array<string | null | undefined> = [
    'red',
    'transparent',
    'var(--x)',
    'linear-gradient(red, blue)',
    '',
    '   ',
    undefined,
    null,
];

/** Every input class of the table, readable or not. */
const ALL_INPUTS: Array<string | null | undefined> = [
    '#ff0000',
    'rgb(255, 0, 0)',
    'rgba(255, 0, 0, 0.5)',
    LINEAR,
    RADIAL,
    ...UNREADABLE,
];

describe('solidOf — the Repräsentative Vollfarbe of a color value', () => {
    it.each([
        ['hex', '#ff0000', '#ff0000'],
        ['short hex', '#f00', '#f00'],
        ['rgb', 'rgb(255, 0, 0)', 'rgb(255, 0, 0)'],
        ['rgba', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
        ['linear gradient → its midpoint', LINEAR, 'rgb(128, 0, 128)'],
        ['radial gradient → its midpoint', RADIAL, 'rgb(128, 128, 128)'],
    ])('%s', (_label, value, expected) => {
        expect(solidOf(value)).toBe(expected);
    });

    it.each(UNREADABLE.map(value => [String(value), value]))('%s has none → undefined', (_label, value) => {
        expect(solidOf(value)).toBeUndefined();
    });
});

describe('alphaOf', () => {
    it('applies the opacity to a solid color', () => {
        expect(alphaOf('#ff0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
        expect(alphaOf('rgb(51, 153, 204)', 0.6)).toBe('rgba(51, 153, 204, 0.6)');
    });

    it("applies the opacity to a gradient's midpoint", () => {
        expect(alphaOf(LINEAR, 0.5)).toBe('rgba(128, 0, 128, 0.5)');
    });

    it.each(UNREADABLE.map(value => [String(value), value]))('%s → undefined', (_label, value) => {
        expect(alphaOf(value, 0.5)).toBeUndefined();
    });

    it.each(ALL_INPUTS.map(value => [String(value), value]))('never throws on %s', (_label, value) => {
        expect(() => alphaOf(value, 0.5)).not.toThrow();
    });
});

describe('lightenOf', () => {
    it('lightens a solid color', () => {
        expect(lightenOf('#3399cc', 0.5)).toBe('rgb(153, 204, 229)');
        expect(lightenOf('#3399cc', 0.3)).toBe('rgb(112, 183, 219)');
    });

    it("lightens a gradient's midpoint", () => {
        expect(lightenOf(LINEAR, 0.5)).toBe('rgb(191, 127, 191)');
    });

    it.each(UNREADABLE.map(value => [String(value), value]))('%s → undefined', (_label, value) => {
        expect(lightenOf(value, 0.5)).toBeUndefined();
    });

    it.each(ALL_INPUTS.map(value => [String(value), value]))('never throws on %s', (_label, value) => {
        expect(() => lightenOf(value, 0.5)).not.toThrow();
    });
});
