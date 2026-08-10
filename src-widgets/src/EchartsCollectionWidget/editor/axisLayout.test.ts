/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import { axisLayout, axisPosition, isOneToOne, normalizeAxes, packStaggeredAxes } from './axisLayout';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

describe('axisLayout — stable identity', () => {
    it('axisLayout stamps a unique id on every created axis', () => {
        const a = axisLayout(0);
        const b = axisLayout(1);
        expect(a.id).toBeTruthy();
        expect(b.id).toBeTruthy();
        expect(a.id).not.toBe(b.id);
    });

    it('axisLayout keeps the 1:1 geometry (alternating side, 80 px stagger, splitLine on axis 0)', () => {
        expect(axisLayout(0)).toMatchObject({ position: 'left', offset: 0, splitLine: true });
        expect(axisLayout(1)).toMatchObject({ position: 'right', offset: 0, splitLine: false });
        expect(axisLayout(2)).toMatchObject({ position: 'left', offset: 80, splitLine: false });
    });

    it('normalizeAxes backfills an id on axes missing one, leaves id-bearing axes untouched', () => {
        const withId: EchartsAxisConfig = { id: 'keep-me', name: 'A', position: 'left' };
        const withoutId: EchartsAxisConfig = { name: 'B', position: 'right' };
        const out = normalizeAxes([withId, withoutId]);
        expect(out[0].id).toBe('keep-me'); // preserved
        expect(out[0]).toBe(withId); // same reference — not cloned when id present
        expect(out[1].id).toBeTruthy(); // backfilled
        expect(out[1].name).toBe('B'); // other fields preserved
    });

    it('normalizeAxes gives every backfilled axis a distinct id', () => {
        const out = normalizeAxes([{ name: 'a' }, { name: 'b' }, { name: 'c' }]);
        const ids = out.map(a => a.id);
        expect(new Set(ids).size).toBe(3);
    });
});

describe('axisLayout — predicates', () => {
    it('isOneToOne is true for the default binding (series j → axis j)', () => {
        expect(isOneToOne([{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }])).toBe(true);
    });

    it('isOneToOne is false once a series is rebound away from its slot', () => {
        expect(isOneToOne([{ yAxisIndex: 0 }, { yAxisIndex: 0 }, { yAxisIndex: 2 }])).toBe(false);
        expect(isOneToOne([])).toBe(true); // vacuously true
    });

    it('axisPosition is pure geometry (no id), safe to re-spread without clobbering identity', () => {
        const existing: EchartsAxisConfig = { id: 'stable', name: 'A', color: '#f00' };
        const reStaggered = { ...existing, ...axisPosition(2) };
        expect(reStaggered.id).toBe('stable'); // identity preserved
        expect(reStaggered.color).toBe('#f00'); // other fields preserved
        expect(reStaggered).toMatchObject({ position: 'left', offset: 80 }); // geometry overwritten
    });
});

describe('packStaggeredAxes — gap closing (ADR-0023)', () => {
    it('re-packs a floating gap: surviving left axes 0/160 → 0/80', () => {
        // After deleting the middle axis (offset 80), the third axis floats at 160.
        const survivors: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 160 },
        ];
        const out = packStaggeredAxes(survivors);
        expect(out.map(a => a.offset)).toEqual([0, 80]); // gap closed, packed by order
        expect(out.every(a => a.position === 'left')).toBe(true); // position preserved
    });

    it('re-packs each side independently (left 0/160 + right 0 → left 0/80 + right 0)', () => {
        const survivors: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'right', offset: 0 },
            { position: 'left', offset: 160 },
        ];
        const out = packStaggeredAxes(survivors);
        expect(out.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
        ]);
    });

    it('leaves a hand-tuned (non-raster) offset untouched — never guesses around custom layouts', () => {
        const custom: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 100 }, // not on the 80-px raster
        ];
        expect(packStaggeredAxes(custom).map(a => a.offset)).toEqual([0, 100]); // unchanged
    });

    it('is a no-op for an already-packed set (idempotent)', () => {
        const packed: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'right', offset: 0 },
            { position: 'left', offset: 80 },
        ];
        expect(packStaggeredAxes(packed).map(a => a.offset)).toEqual([0, 0, 80]);
    });

    it('treats undefined offset as 0 (on the raster) and packs it', () => {
        const withDefault: EchartsAxisConfig[] = [
            { position: 'left' }, // offset undefined
            { position: 'left', offset: 80 },
        ];
        expect(packStaggeredAxes(withDefault).map(a => a.offset)).toEqual([0, 80]);
    });

    it('preserves identity + other fields, only normalising offset', () => {
        const survivors: EchartsAxisConfig[] = [
            { id: 'a', name: 'A', color: '#f00', position: 'left', offset: 0 },
            { id: 'c', name: 'C', color: '#00f', position: 'left', offset: 160 },
        ];
        const out = packStaggeredAxes(survivors);
        expect(out[0]).toMatchObject({ id: 'a', name: 'A', color: '#f00', position: 'left', offset: 0 });
        expect(out[1]).toMatchObject({ id: 'c', name: 'C', color: '#00f', position: 'left', offset: 80 });
    });
});
