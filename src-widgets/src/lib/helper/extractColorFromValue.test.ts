/**
 * Unit tests for the gradient-stop extractor (visualMap colour scale → echarts colour array).
 *
 * @module lib/helper/extractColorFromValue.test
 */
import { describe, expect, it } from 'vitest';

import { extractGradientColors, toEchartsLinearGradient } from './extractColorFromValue';

describe('extractGradientColors', () => {
    it('extracts stops from a linear-gradient with explicit positions, in order', () => {
        expect(extractGradientColors('linear-gradient(90deg, #1976d2 0%, #4caf50 100%)')).toEqual([
            '#1976d2',
            '#4caf50',
        ]);
    });

    it('extracts more than two stops in gradient order', () => {
        expect(extractGradientColors('linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)')).toEqual([
            '#ff0000',
            '#00ff00',
            '#0000ff',
        ]);
    });

    it('handles rgba stops', () => {
        expect(extractGradientColors('linear-gradient(90deg, rgba(255,0,0,0.5) 0%, rgba(0,0,255,1) 100%)')).toEqual([
            'rgba(255,0,0,0.5)',
            'rgba(0,0,255,1)',
        ]);
    });

    it('returns null for a solid colour (not a gradient)', () => {
        expect(extractGradientColors('#ff0000')).toBeNull();
        expect(extractGradientColors('rgba(1,2,3,0.5)')).toBeNull();
    });

    it('returns null for null / undefined / empty', () => {
        expect(extractGradientColors(null)).toBeNull();
        expect(extractGradientColors(undefined)).toBeNull();
        expect(extractGradientColors('')).toBeNull();
    });
});

describe('toEchartsLinearGradient', () => {
    it('parses stops + a 180deg angle into a vertical top→bottom gradient', () => {
        const g = toEchartsLinearGradient('linear-gradient(180deg, #8ec6ad 0%, #ffe 100%)');
        expect(g).toEqual({
            type: 'linear',
            x: 0.5,
            y: 0,
            x2: 0.5,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#8ec6ad' },
                { offset: 1, color: '#ffe' },
            ],
        });
    });

    it('parses a 90deg angle into a horizontal left→right gradient', () => {
        const g = toEchartsLinearGradient('linear-gradient(90deg, #aaa 0%, #bbb 100%)');
        expect(g).toMatchObject({ x: 0, y: 0.5, x2: 1, y2: 0.5 });
        expect(g!.colorStops.map(s => s.color)).toEqual(['#aaa', '#bbb']);
    });

    it('maps the "to top" keyword (0deg) to a bottom→top gradient', () => {
        const g = toEchartsLinearGradient('linear-gradient(to top, #aaa 0%, #bbb 100%)');
        expect(g).toMatchObject({ x: 0.5, y: 1, x2: 0.5, y2: 0 });
    });

    it('maps the "to right" keyword to a left→right gradient', () => {
        const g = toEchartsLinearGradient('linear-gradient(to right, #aaa 0%, #bbb 100%)');
        expect(g).toMatchObject({ x: 0, y: 0.5, x2: 1, y2: 0.5 });
    });

    it('defaults to top→bottom when no direction is given', () => {
        const g = toEchartsLinearGradient('linear-gradient(#aaa, #bbb)');
        expect(g).toMatchObject({ x: 0.5, y: 0, x2: 0.5, y2: 1 });
    });

    it('distributes stops evenly when positions are missing', () => {
        const g = toEchartsLinearGradient('linear-gradient(180deg, #aaa, #bbb, #ccc)');
        expect(g!.colorStops.map(s => s.offset)).toEqual([0, 0.5, 1]);
    });

    it('returns null for a solid colour or radial-gradient', () => {
        expect(toEchartsLinearGradient('#ff0000')).toBeNull();
        expect(toEchartsLinearGradient('radial-gradient(#aaa, #bbb)')).toBeNull();
    });

    it('returns null for null / undefined / empty', () => {
        expect(toEchartsLinearGradient(null)).toBeNull();
        expect(toEchartsLinearGradient(undefined)).toBeNull();
        expect(toEchartsLinearGradient('')).toBeNull();
    });
});
