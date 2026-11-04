/**
 * Contract tests for the series-colour derivations (ADR-0101, ADR-0027 „erben, nicht stempeln"):
 * the derived Flächen-Verlauf (one function → echarts LinearGradient + the equivalent CSS string)
 * and the colour helpers it is built from.
 *
 * @module EchartsCollectionWidget/seriesColorDerive.test
 */
import { describe, expect, it } from 'vitest';
import { toEchartsLinearGradient } from '../lib/helper/extractColorFromValue';
import {
    RGBA_BLACK,
    RGBA_WHITE,
    deriveAreaGradient,
    mixRgba,
    parseSeriesColor,
    toRgbaString,
} from './seriesColorDerive';

describe('deriveAreaGradient — the derived Flächen-Verlauf', () => {
    it('derives a vertical 3-stop gradient (alpha 1 / 0.5 / 0) from a hex series colour', () => {
        const d = deriveAreaGradient('#5470c6');
        expect(d).not.toBeNull();
        expect(d!.echarts).toEqual({
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: 'rgba(84, 112, 198, 1)' },
                { offset: 0.5, color: 'rgba(84, 112, 198, 0.5)' },
                { offset: 1, color: 'rgba(84, 112, 198, 0)' },
            ],
        });
        expect(d!.css).toBe(
            'linear-gradient(180deg, rgba(84, 112, 198, 1) 0%, rgba(84, 112, 198, 0.5) 50%, rgba(84, 112, 198, 0) 100%)',
        );
    });

    it('derives the same shape from an rgb() series colour', () => {
        const d = deriveAreaGradient('rgb(10, 20, 30)');
        expect(d!.echarts.colorStops).toEqual([
            { offset: 0, color: 'rgba(10, 20, 30, 1)' },
            { offset: 0.5, color: 'rgba(10, 20, 30, 0.5)' },
            { offset: 1, color: 'rgba(10, 20, 30, 0)' },
        ]);
    });

    it('scales a translucent series colour by its own alpha', () => {
        const d = deriveAreaGradient('rgba(10, 20, 30, 0.5)');
        expect(d!.echarts.colorStops.map(s => s.color)).toEqual([
            'rgba(10, 20, 30, 0.5)',
            'rgba(10, 20, 30, 0.25)',
            'rgba(10, 20, 30, 0)',
        ]);
    });

    it.each(['#5470c6', 'rgb(10, 20, 30)', 'hsl(120, 50%, 50%)'])(
        'its CSS string parses (existing CSS→echarts parser) to the same vertical gradient — %s',
        input => {
            const d = deriveAreaGradient(input)!;
            const parsed = toEchartsLinearGradient(d.css)!;
            expect(parsed.colorStops).toEqual(d.echarts.colorStops);
            // Same direction: top → bottom. x is irrelevant for a vertical gradient (x === x2).
            expect(parsed.y).toBe(d.echarts.y);
            expect(parsed.y2).toBe(d.echarts.y2);
            expect(parsed.x).toBe(parsed.x2);
            expect(d.echarts.x).toBe(d.echarts.x2);
        },
    );

    it.each(['', 'var(--accent)', 'linear-gradient(180deg, #000 0%, #fff 100%)', 'not-a-colour'])(
        'returns null for a colour it cannot resolve — %j',
        input => {
            expect(deriveAreaGradient(input)).toBeNull();
        },
    );
});

describe('series colour helpers (shared with the derived Farbskala)', () => {
    it('parses hex, rgb(a), hsl and named colours to [r, g, b, a]', () => {
        expect(parseSeriesColor('#fff')).toEqual([255, 255, 255, 1]);
        expect(parseSeriesColor('rgba(1, 2, 3, 0.4)')).toEqual([1, 2, 3, 0.4]);
        expect(parseSeriesColor('hsl(0, 100%, 50%)')).toEqual([255, 0, 0, 1]);
        expect(parseSeriesColor('red')).toEqual([255, 0, 0, 1]);
        expect(parseSeriesColor(undefined)).toBeNull();
    });

    it('formats rgba() with an optional alpha factor', () => {
        expect(toRgbaString([84, 112, 198, 1])).toBe('rgba(84, 112, 198, 1)');
        expect(toRgbaString([84, 112, 198, 0.8], 0.5)).toBe('rgba(84, 112, 198, 0.4)');
    });

    it('mixes with white / black by a share (0 = unchanged, 1 = target), keeping alpha', () => {
        expect(mixRgba([100, 50, 200, 1], RGBA_WHITE, 0.5)).toEqual([178, 153, 228, 1]);
        expect(mixRgba([100, 50, 200, 0.6], RGBA_BLACK, 0.5)).toEqual([50, 25, 100, 0.6]);
        expect(mixRgba([100, 50, 200, 1], RGBA_BLACK, 0)).toEqual([100, 50, 200, 1]);
    });
});
