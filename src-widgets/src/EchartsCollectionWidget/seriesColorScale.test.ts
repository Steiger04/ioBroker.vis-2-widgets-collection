import { describe, expect, it } from 'vitest';
import { COLOR_SCALE_SAMPLE_COUNT, colorScaleColorAt, colorScaleColorsFromStops } from './seriesColorScale';

/** The evenly spaced sample position (0–1) of resampled colour `i`. */
const at = (i: number): number => i / (COLOR_SCALE_SAMPLE_COUNT - 1);

describe('colorScaleColorsFromStops — the chosen stop positions (ADR-0101)', () => {
    it('resamples uneven positions: the chosen colours sit at their positions, linear in between', () => {
        const colors = colorScaleColorsFromStops([
            { offset: 0, color: '#00ff00' },
            { offset: 0.8, color: '#ffff00' },
            { offset: 1, color: '#ff0000' },
        ]);
        expect(colors).toHaveLength(COLOR_SCALE_SAMPLE_COUNT);
        expect(colors[0]).toBe('rgba(0, 255, 0, 1)');
        expect(colors[COLOR_SCALE_SAMPLE_COUNT - 1]).toBe('rgba(255, 0, 0, 1)');
        // The sample grid is fine enough to land on 80 %, 40 % and 90 %.
        const i80 = Math.round(0.8 * (COLOR_SCALE_SAMPLE_COUNT - 1));
        const i40 = Math.round(0.4 * (COLOR_SCALE_SAMPLE_COUNT - 1));
        const i90 = Math.round(0.9 * (COLOR_SCALE_SAMPLE_COUNT - 1));
        expect([at(i80), at(i40), at(i90)]).toEqual([0.8, 0.4, 0.9]);
        expect(colors[i80]).toBe('rgba(255, 255, 0, 1)');
        // Halfway green → yellow (0 % → 80 %) and halfway yellow → red (80 % → 100 %).
        expect(colors[i40]).toBe('rgba(128, 255, 0, 1)');
        expect(colors[i90]).toBe('rgba(255, 128, 0, 1)');
    });

    it('passes evenly placed colours through unchanged', () => {
        expect(
            colorScaleColorsFromStops([
                { offset: 0, color: '#00ff00' },
                { offset: 0.5, color: 'rgba(1, 2, 3, 0.5)' },
                { offset: 1, color: '#ff0000' },
            ]),
        ).toEqual(['#00ff00', 'rgba(1, 2, 3, 0.5)', '#ff0000']);
        // Float noise from percent → offset (33.333…%) still counts as even.
        expect(
            colorScaleColorsFromStops([
                { offset: 0, color: '#000000' },
                { offset: 33.3333333 / 100, color: '#111111' },
                { offset: 66.6666667 / 100, color: '#222222' },
                { offset: 1, color: '#333333' },
            ]),
        ).toEqual(['#000000', '#111111', '#222222', '#333333']);
    });

    it('clamps positions outside 0–100 % — clamped even positions pass through', () => {
        expect(
            colorScaleColorsFromStops([
                { offset: -0.2, color: '#00ff00' },
                { offset: 0.5, color: '#ffff00' },
                { offset: 1.5, color: '#ff0000' },
            ]),
        ).toEqual(['#00ff00', '#ffff00', '#ff0000']);
    });

    it('sorts unsorted stops by position', () => {
        expect(
            colorScaleColorsFromStops([
                { offset: 1, color: '#ff0000' },
                { offset: 0, color: '#00ff00' },
            ]),
        ).toEqual(['#00ff00', '#ff0000']);
        const colors = colorScaleColorsFromStops([
            { offset: 1, color: '#ff0000' },
            { offset: 0.8, color: '#ffff00' },
            { offset: 0, color: '#00ff00' },
        ]);
        expect(colors[0]).toBe('rgba(0, 255, 0, 1)');
        expect(colors[Math.round(0.8 * (COLOR_SCALE_SAMPLE_COUNT - 1))]).toBe('rgba(255, 255, 0, 1)');
        expect(colors[COLOR_SCALE_SAMPLE_COUNT - 1]).toBe('rgba(255, 0, 0, 1)');
    });

    it('keeps the first/last colour outside the outermost stops', () => {
        const colors = colorScaleColorsFromStops([
            { offset: 0.2, color: '#00ff00' },
            { offset: 0.6, color: '#ff0000' },
        ]);
        expect(colors.slice(0, 5).every(c => c === 'rgba(0, 255, 0, 1)')).toBe(true); // 0–20 %
        expect(colors.slice(12).every(c => c === 'rgba(255, 0, 0, 1)')).toBe(true); // 60–100 %
    });

    it('interpolates the alpha as well', () => {
        const colors = colorScaleColorsFromStops([
            { offset: 0, color: 'rgba(0, 0, 255, 0)' },
            { offset: 0.8, color: 'rgba(0, 0, 255, 1)' },
            { offset: 1, color: 'rgba(0, 0, 255, 1)' },
        ]);
        expect(colors[Math.round(0.4 * (COLOR_SCALE_SAMPLE_COUNT - 1))]).toBe('rgba(0, 0, 255, 0.5)');
    });

    it('returns a single stop as its one colour', () => {
        expect(colorScaleColorsFromStops([{ offset: 0.3, color: '#123456' }])).toEqual(['#123456']);
    });
});

describe('colorScaleColorAt — the colour at a position of an evenly spaced scale', () => {
    it('gives the middle colour at 50 % and interpolates between even colours', () => {
        expect(colorScaleColorAt(['#ff8080', '#ff0000', '#800000'], 0.5)).toBe('rgba(255, 0, 0, 1)');
        expect(colorScaleColorAt(['#00ff00', '#ff0000'], 0.5)).toBe('rgba(128, 128, 0, 1)');
        expect(colorScaleColorAt(['#00ff00', '#ff0000'], 2)).toBe('rgba(255, 0, 0, 1)');
        expect(colorScaleColorAt(['#00ff00'], 0.5)).toBe('rgba(0, 255, 0, 1)');
        expect(colorScaleColorAt([], 0.5)).toBeNull();
    });
});
