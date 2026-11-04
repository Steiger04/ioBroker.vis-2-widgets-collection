/**
 * Regeln für Farbeingaben — what a colour field stores for a text (ADR-0102).
 *
 * @module lib/helper/colorInputRules.test
 * @remarks
 * Pure node tests. The browser's CSS colour check is injected: `browserLike` accepts what a
 * browser's `CSS.supports('color', …)` accepts for the cases used here, `nothing` accepts no
 * solid colour at all, so the tests show which decisions come from the check and which from the
 * rules themselves.
 */
import { describe, expect, it } from 'vitest';

import { applyColorInputRules, type ColorInputOptions } from './colorInputRules';

/** Stand-in for `CSS.supports('color', …)`: hex, rgb(a), hsl(a), names, `transparent`, `var()`. */
const browserLike = (text: string): boolean =>
    /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|transparent|red|blue|rebeccapurple)$/i.test(text);
const nothing = (): boolean => false;

const typed = (allowGradient: boolean, isCssColor = browserLike): ColorInputOptions => ({
    source: 'typed',
    allowGradient,
    isCssColor,
});
const picked = (allowGradient: boolean, isCssColor = browserLike): ColorInputOptions => ({
    source: 'picked',
    allowGradient,
    isCssColor,
});

const GRADIENT = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)';
const RADIAL = 'radial-gradient(circle, #ff0000 0%, #0000ff 100%)';

describe('applyColorInputRules — empty input means Erben', () => {
    it.each(['', '   ', '\t\n'])('%j is empty, typed or picked', text => {
        expect(applyColorInputRules(text, typed(true))).toEqual({ kind: 'empty' });
        expect(applyColorInputRules(text, picked(false))).toEqual({ kind: 'empty' });
    });

    it('null and undefined are empty', () => {
        expect(applyColorInputRules(null, typed(false))).toEqual({ kind: 'empty' });
        expect(applyColorInputRules(undefined, picked(true))).toEqual({ kind: 'empty' });
    });
});

describe('applyColorInputRules — typed solid colours', () => {
    it.each([
        'red',
        'transparent',
        'hsl(120, 50%, 50%)',
        'var(--vis2c-palette-primary-main)',
        '#ABC',
        'rgba(1,2,3,0.5)',
    ])('keeps %s as typed when the browser accepts it', text => {
        expect(applyColorInputRules(text, typed(false))).toEqual({ kind: 'value', value: text });
    });

    it('stores the trimmed text', () => {
        expect(applyColorInputRules('  red ', typed(false))).toEqual({ kind: 'value', value: 'red' });
    });

    it('is invalid when the browser rejects it', () => {
        expect(applyColorInputRules('notacolor', typed(true))).toEqual({ kind: 'invalid', reason: 'notAColor' });
    });

    it('asks the injected check, not a fixed list', () => {
        expect(applyColorInputRules('#ff0000', typed(true, nothing))).toEqual({ kind: 'invalid', reason: 'notAColor' });
        expect(
            applyColorInputRules(
                'anything',
                typed(true, () => true),
            ),
        ).toEqual({ kind: 'value', value: 'anything' });
    });
});

describe('applyColorInputRules — gradients', () => {
    it.each([GRADIENT, RADIAL])('keeps %s unchanged where gradients are allowed, typed or picked', text => {
        expect(applyColorInputRules(text, typed(true, nothing))).toEqual({ kind: 'value', value: text });
        expect(applyColorInputRules(text, picked(true, nothing))).toEqual({ kind: 'value', value: text });
    });

    it.each([GRADIENT, RADIAL])('is invalid in a solid-only field, typed or picked: %s', text => {
        const invalid = { kind: 'invalid', reason: 'gradientNotAllowed' };
        expect(
            applyColorInputRules(
                text,
                typed(false, () => true),
            ),
        ).toEqual(invalid);
        expect(
            applyColorInputRules(
                text,
                picked(false, () => true),
            ),
        ).toEqual(invalid);
    });

    it.each([
        'conic-gradient(red, blue)',
        'repeating-linear-gradient(90deg, red 0 10px, blue 10px 20px)',
        'repeating-radial-gradient(circle, red, blue 20%)',
        'REPEATING-CONIC-GRADIENT(red, blue)',
    ])('reports every other CSS gradient in a solid-only field as a gradient: %s', text => {
        expect(applyColorInputRules(text, typed(false, nothing))).toEqual({
            kind: 'invalid',
            reason: 'gradientNotAllowed',
        });
    });

    it('takes no conic or repeating gradient where gradients are allowed — the Farbwähler cannot edit it', () => {
        expect(applyColorInputRules('conic-gradient(red, blue)', typed(true, nothing))).toEqual({
            kind: 'invalid',
            reason: 'notAColor',
        });
    });

    it('reports a half-typed gradient in a solid-only field as a gradient, not as a bad colour', () => {
        expect(applyColorInputRules('linear-gradient(', typed(false))).toEqual({
            kind: 'invalid',
            reason: 'gradientNotAllowed',
        });
    });

    it('is not a colour while a gradient is still unfinished where gradients are allowed', () => {
        expect(applyColorInputRules('linear-gradient(90deg, red', typed(true))).toEqual({
            kind: 'invalid',
            reason: 'notAColor',
        });
    });
});

describe('applyColorInputRules — picked solid colours become #rrggbb / #rrggbbaa', () => {
    it.each([
        ['rgba(255, 0, 0, 1)', '#ff0000'],
        ['rgba(18,52,86,1)', '#123456'],
        ['rgb(0, 128, 255)', '#0080ff'],
        ['rgba(255, 0, 0, 0.5)', '#ff000080'],
        ['rgba(0,0,0,0)', '#00000000'],
        ['rgba(17, 34, 51, 50%)', '#11223380'],
        ['rgb(10 20 30 / 0.25)', '#0a141e40'],
        ['rgba(254.6, -3, 300, 1)', '#ff00ff'],
        ['#abc', '#aabbcc'],
        ['#ABCDEF', '#abcdef'],
        ['#abcd', '#aabbccdd'],
        ['#abcf', '#aabbcc'],
        ['#112233ff', '#112233'],
        ['#11223380', '#11223380'],
    ])('%s → %s', (text, hex) => {
        expect(applyColorInputRules(text, picked(false))).toEqual({ kind: 'value', value: hex });
    });

    it('keeps a picked colour no colour calculation can read as it is, when the browser accepts it', () => {
        expect(applyColorInputRules('var(--vis2c-palette-primary-main)', picked(false))).toEqual({
            kind: 'value',
            value: 'var(--vis2c-palette-primary-main)',
        });
        expect(applyColorInputRules('hsl(120, 50%, 50%)', picked(true))).toEqual({
            kind: 'value',
            value: 'hsl(120, 50%, 50%)',
        });
    });

    it('is invalid when a picked text is no colour at all', () => {
        expect(applyColorInputRules('notacolor', picked(true))).toEqual({ kind: 'invalid', reason: 'notAColor' });
    });

    it('typed colours are never normalised', () => {
        expect(applyColorInputRules('rgba(255, 0, 0, 1)', typed(false))).toEqual({
            kind: 'value',
            value: 'rgba(255, 0, 0, 1)',
        });
        expect(applyColorInputRules('#ABC', typed(false))).toEqual({ kind: 'value', value: '#ABC' });
    });
});

describe('applyColorInputRules — default CSS check', () => {
    it('falls back to hex / rgb(a) where no CSS.supports exists (node)', () => {
        expect(applyColorInputRules('#ff0000', { source: 'typed', allowGradient: false })).toEqual({
            kind: 'value',
            value: '#ff0000',
        });
        expect(applyColorInputRules('red', { source: 'typed', allowGradient: false })).toEqual({
            kind: 'invalid',
            reason: 'notAColor',
        });
    });

    it("uses CSS.supports('color', …) where it exists", () => {
        const calls: Array<[string, string]> = [];
        const original = (globalThis as { CSS?: unknown }).CSS;
        (globalThis as { CSS?: unknown }).CSS = {
            supports: (property: string, value: string): boolean => {
                calls.push([property, value]);
                return value === 'red';
            },
        };
        try {
            expect(applyColorInputRules('red', { source: 'typed', allowGradient: false })).toEqual({
                kind: 'value',
                value: 'red',
            });
            expect(applyColorInputRules('#ff0000', { source: 'typed', allowGradient: false })).toEqual({
                kind: 'invalid',
                reason: 'notAColor',
            });
            expect(calls).toEqual([
                ['color', 'red'],
                ['color', '#ff0000'],
            ]);
        } finally {
            (globalThis as { CSS?: unknown }).CSS = original;
        }
    });
});
