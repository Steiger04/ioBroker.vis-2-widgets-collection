/**
 * validateThemeOptions — radius range boundaries.
 *
 * @module lib/theme/validateTheme.test
 * @remarks
 * Guards the corner-radius ceiling (spec `.scratch/eckradius-96`): the slider
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
