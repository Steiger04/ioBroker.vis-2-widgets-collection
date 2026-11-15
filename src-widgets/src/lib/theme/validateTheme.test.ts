/**
 * validateThemeOptions — radius range boundaries.
 *
 * @module lib/theme/validateTheme.test
 * @remarks
 * Guards the corner-radius ceiling: the slider
 * and the schema must share one limit, because an out-of-range value is an
 * ERROR and therefore discards the ENTIRE theme at load (`useCollectionTheme`
 * falls back to `{}`). The 96/97 literals come from the spec, not from the
 * shared constant — the test must be able to disagree with the code.
 */

import { describe, expect, it } from 'vitest';

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
