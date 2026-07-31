/**
 * Unit tests for {@link buildTitlePlacement} (ADR-0009 title pixel-offset).
 *
 * @module EchartsCollectionWidget/presentation.test
 */
import { describe, expect, it } from 'vitest';

import { buildTitlePlacement } from './presentation';

describe('buildTitlePlacement', () => {
    describe('no offset (dx=0, dy=0) — the responsive named-anchor path', () => {
        it('topLeft → left edge anchor', () => {
            expect(buildTitlePlacement({ titlePos: 'topLeft', dx: 0, dy: 0 })).toEqual({
                left: 'left',
                top: 'top',
            });
        });
        it('topCenter → center anchor', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: 0, dy: 0 })).toEqual({
                left: 'center',
                top: 'top',
            });
        });
        it('topRight → right edge anchor', () => {
            expect(buildTitlePlacement({ titlePos: 'topRight', dx: 0, dy: 0 })).toEqual({
                left: 'right',
                top: 'top',
            });
        });
    });

    describe('topLeft offset — edge-based, no containerWidth needed', () => {
        it('dx shifts the left edge (resize-stable)', () => {
            expect(buildTitlePlacement({ titlePos: 'topLeft', dx: 12, dy: 0 })).toEqual({
                left: 12,
                top: 'top',
                textAlign: 'left',
            });
        });
        it('dy shifts the top edge', () => {
            expect(buildTitlePlacement({ titlePos: 'topLeft', dx: 0, dy: 7 })).toEqual({
                left: 'left',
                top: 7,
            });
        });
        it('dx + dy together', () => {
            expect(buildTitlePlacement({ titlePos: 'topLeft', dx: -3, dy: 4 })).toEqual({
                left: -3,
                top: 4,
                textAlign: 'left',
            });
        });
    });

    describe('topCenter offset — needs containerWidth to recenter', () => {
        it('dx folds into the text-center anchor (left = width/2 + dx)', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: 10, dy: 0, containerWidth: 400 })).toEqual({
                left: 210,
                top: 'top',
                textAlign: 'center',
            });
        });
        it('falls back to the named anchor when containerWidth is unknown', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: 10, dy: 0 })).toEqual({
                left: 'center',
                top: 'top',
            });
        });
        it('negative dx shifts left of center', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: -20, dy: 5, containerWidth: 400 })).toEqual({
                left: 180,
                top: 5,
                textAlign: 'center',
            });
        });
    });

    describe('topRight offset — needs containerWidth to recenter', () => {
        it('dx folds into the right-edge anchor (left = width + dx)', () => {
            expect(buildTitlePlacement({ titlePos: 'topRight', dx: 8, dy: 0, containerWidth: 400 })).toEqual({
                left: 408,
                top: 'top',
                textAlign: 'right',
            });
        });
        it('falls back to the named anchor when containerWidth is unknown', () => {
            expect(buildTitlePlacement({ titlePos: 'topRight', dx: 8, dy: 0 })).toEqual({
                left: 'right',
                top: 'top',
            });
        });
    });

    describe('non-finite dx/dy are ignored', () => {
        it('NaN dx is treated as no offset', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: Number.NaN, dy: 0, containerWidth: 400 })).toEqual({
                left: 'center',
                top: 'top',
            });
        });
    });
});
