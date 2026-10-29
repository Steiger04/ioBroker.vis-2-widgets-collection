import { describe, expect, it } from 'vitest';

import { gradientTextSx } from './gradientTextSx';

describe('gradientTextSx — gradient input', () => {
    it('clips the gradient through the text (all four properties in relation)', () => {
        expect(gradientTextSx('linear-gradient(red, blue)')).toEqual({
            background: 'linear-gradient(red, blue)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
        });
    });

    it('passes a radial gradient through as the background', () => {
        const sx = gradientTextSx('radial-gradient(circle, #ff0000, #0000ff)');

        expect(sx.background).toBe('radial-gradient(circle, #ff0000, #0000ff)');
        expect(sx.color).toBe('transparent');
    });

    it('owns only the colour/clip fragment — font size and layout stay with the caller', () => {
        expect(Object.keys(gradientTextSx('linear-gradient(red, blue)'))).toEqual([
            'background',
            'WebkitBackgroundClip',
            'backgroundClip',
            'color',
        ]);
    });
});

describe('gradientTextSx — solid colour input', () => {
    it('keeps the clip properties, leaves the background null and paints the text directly', () => {
        const sx = gradientTextSx('#ff0000');

        // frozen legacy shape: the call sites pipe gradientColor's null into background
        expect(sx.background).toBeNull();
        expect(sx.WebkitBackgroundClip).toBe('text');
        expect(sx.backgroundClip).toBe('text');
        expect(sx.color).toBe('#ff0000');
    });
});

describe('gradientTextSx — unset input', () => {
    it('returns the legacy undefined shape: null background, clip properties, colour key present but unset', () => {
        const sx = gradientTextSx(undefined);

        expect(sx.background).toBeNull();
        expect(sx.WebkitBackgroundClip).toBe('text');
        expect(sx.backgroundClip).toBe('text');
        // the incantation writes `color: gradient ? 'transparent' : value` — the key exists
        expect('color' in sx).toBe(true);
        expect(sx.color).toBeUndefined();
    });

    it('treats null like every other unset value', () => {
        const sx = gradientTextSx(null);

        expect(sx.background).toBeNull();
        expect(sx.WebkitBackgroundClip).toBe('text');
        expect(sx.backgroundClip).toBe('text');
        expect(sx.color).toBeUndefined();
    });

    it('keeps an empty string colour as-is (it is not a gradient)', () => {
        const sx = gradientTextSx('');

        expect(sx.background).toBeNull();
        expect(sx.WebkitBackgroundClip).toBe('text');
        expect(sx.backgroundClip).toBe('text');
        expect(sx.color).toBe('');
    });
});
