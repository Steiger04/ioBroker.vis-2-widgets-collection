/**
 * validateThemeOptions — radius range boundaries, and where an issue sits.
 *
 * @module lib/theme/validateTheme.test
 * @remarks
 * Guards the corner-radius ceiling: the slider
 * and the schema must share one limit, because an out-of-range value is an
 * ERROR — it blocks Save in the studio, and a stored one falls away at load
 * (`parseStoredTheme`). The 96/97 literals come from the spec, not from the
 * shared constant — the test must be able to disagree with the code.
 *
 * The issue location (`keys`) is what the stored-theme reader removes by, so it
 * is pinned here next to the display path.
 */

import { createTheme } from '@mui/material/styles';
import { describe, expect, it, vi } from 'vitest';

import { validateThemeOptions } from './validateTheme';

describe('validateThemeOptions: radius range', () => {
    it('accepts corner radii up to 96', () => {
        const result = validateThemeOptions({
            corners: { topLeft: 96, topRight: 96, bottomRight: 96, bottomLeft: 96 },
        });
        expect(result.issues.filter(issue => issue.severity === 'error')).toEqual([]);
        expect(result.isValid).toBe(true);
    });

    it('rejects a corner radius above 96 with number-out-of-range', () => {
        const result = validateThemeOptions({ corners: { topLeft: 97 } });
        expect(result.isValid).toBe(false);
        expect(result.issues).toContainEqual(
            expect.objectContaining({ path: 'corners.topLeft', code: 'number-out-of-range' }),
        );
    });

    it('carries the range bounds so the studio can name them', () => {
        const result = validateThemeOptions({ corners: { topLeft: -1 } });
        expect(result.issues).toContainEqual(
            expect.objectContaining({ path: 'corners.topLeft', code: 'number-out-of-range', params: ['0', '96'] }),
        );
    });

    it('accepts hand-written shape.borderRadius up to 96', () => {
        const result = validateThemeOptions({ shape: { borderRadius: 96 } });
        expect(result.issues.filter(issue => issue.severity === 'error')).toEqual([]);
        expect(result.isValid).toBe(true);
    });

    it('rejects hand-written shape.borderRadius above 96', () => {
        const result = validateThemeOptions({ shape: { borderRadius: 97 } });
        expect(result.isValid).toBe(false);
        expect(result.issues).toContainEqual(
            expect.objectContaining({ path: 'shape.borderRadius', code: 'number-out-of-range' }),
        );
    });
});

describe('validateThemeOptions: a colour of the palette', () => {
    it('reports a colour MUI cannot compute with, at its value', () => {
        const result = validateThemeOptions({ palette: { text: { primary: 'white' }, divider: '#101010' } });
        expect(result.isValid).toBe(false);
        expect(result.issues).toEqual([
            expect.objectContaining({
                path: 'palette.text.primary',
                keys: ['palette', 'text', 'primary'],
                severity: 'error',
                code: 'uncomputable-color',
            }),
        ]);
    });

    // A slot has alternative shapes, so its error names the slot; the code still says why.
    it.each([
        ['its main colour', { main: 'transparent' }],
        ['a variant', { main: '#ff0000', dark: 'red' }],
    ])('reports an accent slot with such a colour as %s as the slot, and says why', (_label, slot) => {
        expect(validateThemeOptions({ palette: { primary: slot } }).issues).toEqual([
            expect.objectContaining({
                path: 'palette.primary',
                keys: ['palette', 'primary'],
                severity: 'error',
                code: 'uncomputable-color',
            }),
        ]);
    });

    it('keeps the wrong-type code for a slot whose colour is none to the browser', () => {
        vi.stubGlobal('CSS', { supports: (_property: string, value?: string): boolean => value !== 'nope' });
        try {
            expect(validateThemeOptions({ palette: { primary: { main: 'nope' } } }).issues).toEqual([
                expect.objectContaining({ path: 'palette.primary', code: 'invalid-type' }),
            ]);
        } finally {
            vi.unstubAllGlobals();
        }
    });

    it('keeps the wrong-type code for a slot that is broken in more than one way', () => {
        expect(validateThemeOptions({ palette: { primary: { main: 'red', light: 5 } } }).issues).toEqual([
            expect.objectContaining({ path: 'palette.primary', code: 'invalid-type' }),
        ]);
    });

    // MUI builds an accent from its `main`, or from the shade it takes for it; without either,
    // `createTheme` throws.
    it.each<[string, string, Record<string, string>]>([
        ['only variants', 'primary', { light: '#ffaaaa', dark: '#aa0000' }],
        ['shades without the main one', 'primary', { 300: '#ffaaaa', 700: '#aa0000' }],
        ['the main shade of the other accents', 'secondary', { 500: '#ff0000' }],
    ])('rejects an accent slot that holds %s', (_label, name, slot) => {
        expect(() => createTheme({ palette: { [name]: slot } })).toThrow();
        expect(validateThemeOptions({ palette: { [name]: slot } }).issues).toEqual([
            expect.objectContaining({ path: `palette.${name}`, severity: 'error', code: 'invalid-type' }),
        ]);
    });

    it.each<[string, string, Record<string, string>]>([
        ['its main shade', 'primary', { 500: '#ff0000', 300: '#ffaaaa' }],
        ['its main shade, which differs for secondary', 'secondary', { A400: '#ff0000' }],
    ])('accepts an accent slot that holds %s', (_label, name, slot) => {
        const palette = { [name]: slot };
        expect(() => createTheme({ palette })).not.toThrow();
        expect(validateThemeOptions({ palette })).toEqual({ isValid: true, theme: { palette }, issues: [] });
    });

    it('accepts hex, rgb(), hsl() and color()', () => {
        const palette = {
            primary: { main: '#1976d2', light: 'rgb(66, 165, 245)', dark: 'hsl(210, 79%, 46%)' },
            divider: 'rgba(0, 0, 0, 0.12)',
            background: { paper: '#fff', default: 'color(srgb 0.98 0.98 0.98)' },
        };
        expect(validateThemeOptions({ palette })).toEqual({ isValid: true, theme: { palette }, issues: [] });
    });
});

describe('validateThemeOptions: where an issue sits', () => {
    it('names the keys leading to the value, next to the display path', () => {
        const result = validateThemeOptions({ corners: { topLeft: -1 } });
        expect(result.issues).toContainEqual(
            expect.objectContaining({ path: 'corners.topLeft', keys: ['corners', 'topLeft'] }),
        );
    });

    it('keeps a key that contains a dot in one piece', () => {
        const result = validateThemeOptions({
            components: { MuiButton: { styleOverrides: { root: { '&.Mui-disabled': { color: null } } } } },
        });
        expect(result.issues).toContainEqual(
            expect.objectContaining({
                path: 'components.MuiButton.styleOverrides.root.&.Mui-disabled.color',
                keys: ['components', 'MuiButton', 'styleOverrides', 'root', '&.Mui-disabled', 'color'],
            }),
        );
    });

    it('names a list entry by its position', () => {
        const result = validateThemeOptions({ shadows: ['none', 5] });
        expect(result.issues).toContainEqual(expect.objectContaining({ path: 'shadows[1]', keys: ['shadows', 1] }));
    });

    it('names an unknown key the same way', () => {
        const result = validateThemeOptions({ palette: { myOwnKey: 1 } });
        expect(result.issues).toContainEqual(
            expect.objectContaining({ path: 'palette.myOwnKey', severity: 'warning', keys: ['palette', 'myOwnKey'] }),
        );
    });

    it('names the theme itself with no key', () => {
        const result = validateThemeOptions([1]);
        expect(result.issues).toContainEqual(expect.objectContaining({ path: '', keys: [] }));
    });
});
