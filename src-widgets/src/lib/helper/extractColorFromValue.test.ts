/**
 * Unit tests for the gradient-stop extractor (visualMap colour scale → echarts colour array).
 *
 * @module lib/helper/extractColorFromValue.test
 */
import { describe, expect, it } from 'vitest';

import { extractGradientColors } from './extractColorFromValue';

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
