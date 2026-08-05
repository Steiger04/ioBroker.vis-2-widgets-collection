/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import { axisLayout, axisPosition, isOneToOne, normalizeAxes } from './axisLayout';
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
