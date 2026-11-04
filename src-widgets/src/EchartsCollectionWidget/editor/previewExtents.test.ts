/**
 * The preview's loaded data extents (ADR-0101): what the editor honestly knows about a series'
 * values — an extent, „loaded without any finite value" (`null`), or nothing (absent key).
 *
 * @module EchartsCollectionWidget/editor/previewExtents.test
 */
import { describe, expect, it } from 'vitest';

import { previewExtentOf, previewSeriesExtents, sameExtents } from './previewExtents';

describe('previewSeriesExtents', () => {
    it('records the loaded extent per series name', () => {
        const extents = previewSeriesExtents({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, 4],
                        [2, -2],
                    ],
                },
            ],
        });
        expect(previewExtentOf(extents, 'A')).toEqual({ min: -2, max: 4 });
    });

    it('marks a loaded series without finite values as known-empty (null), not as unknown', () => {
        const extents = previewSeriesExtents({
            series: [
                {
                    name: 'A',
                    data: [
                        [1, null],
                        [2, Number.NaN],
                    ],
                },
            ],
        });
        expect(previewExtentOf(extents, 'A')).toBeNull();
        expect(previewExtentOf(extents, 'B')).toBeUndefined();
    });

    it('drops an ambiguous name — the card then knows nothing instead of a neighbour’s extent', () => {
        const extents = previewSeriesExtents({
            series: [
                { name: 'A', data: [[1, 1]] },
                { name: 'A', data: [[1, 9]] },
            ],
        });
        expect(previewExtentOf(extents, 'A')).toBeUndefined();
    });

    it('never reads an inherited object key as an extent', () => {
        expect(previewExtentOf(previewSeriesExtents({ series: [] }), 'constructor')).toBeUndefined();
    });
});

describe('sameExtents', () => {
    it('compares content, the known-empty marker included', () => {
        expect(sameExtents({ A: null }, { A: null })).toBe(true);
        expect(sameExtents({ A: null }, { A: { min: 0, max: 1 } })).toBe(false);
        expect(sameExtents({ A: { min: 0, max: 1 } }, { A: null })).toBe(false);
        expect(sameExtents({ A: { min: 0, max: 1 } }, { A: { min: 0, max: 1 } })).toBe(true);
        expect(sameExtents({ A: null }, { B: null })).toBe(false);
    });
});
