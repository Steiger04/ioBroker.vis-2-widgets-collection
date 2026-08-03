/**
 * Unit tests for {@link buildTitlePlacement} (ADR-0009 title pixel-offset, simplified: dx topLeft-only).
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

    describe('topLeft offset — edge-based, measurement-free', () => {
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

    describe('topCenter / topRight — dx ignored (simplified ADR-0009), dy still applies', () => {
        it('topCenter ignores dx → named center anchor', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: 10, dy: 0 })).toEqual({
                left: 'center',
                top: 'top',
            });
        });
        it('topRight ignores dx → named right anchor', () => {
            expect(buildTitlePlacement({ titlePos: 'topRight', dx: 8, dy: 0 })).toEqual({
                left: 'right',
                top: 'top',
            });
        });
        it('dy still shifts the top edge on topCenter', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: 10, dy: 5 })).toEqual({
                left: 'center',
                top: 5,
            });
        });
        it('dy still shifts the top edge on topRight', () => {
            expect(buildTitlePlacement({ titlePos: 'topRight', dx: 8, dy: 5 })).toEqual({
                left: 'right',
                top: 5,
            });
        });
    });

    describe('non-finite dx/dy are ignored', () => {
        it('NaN dx is treated as no offset', () => {
            expect(buildTitlePlacement({ titlePos: 'topCenter', dx: Number.NaN, dy: 0 })).toEqual({
                left: 'center',
                top: 'top',
            });
        });
    });
});
