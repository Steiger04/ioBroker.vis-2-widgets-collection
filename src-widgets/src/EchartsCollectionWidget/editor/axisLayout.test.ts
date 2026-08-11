/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import {
    axisLayout,
    axisPosition,
    dropOrphanAxis,
    effectiveAxisColor,
    effectiveAxisName,
    isOneToOne,
    normalizeAxes,
    packStaggeredAxes,
    reconcileJsonAxes,
    sameFormatSurvivor,
} from './axisLayout';
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

describe('packStaggeredAxes — dense restagger (ADR-0023, reversed by ADR-0028)', () => {
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

    it('normalises a hand-tuned (non-raster) offset to the raster (ADR-0028 reversed the escape hatch)', () => {
        const custom: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 100 }, // not on the 80-px raster
        ];
        // No longer left untouched: a structural change must resolve collisions even in a custom
        // layout, so the 100 px offset snaps to the next raster slot.
        expect(packStaggeredAxes(custom).map(a => a.offset)).toEqual([0, 80]);
    });

    it('resolves a side-flip collision — flips axis 2 to the right and repacks both sides (ADR-0028)', () => {
        // Default 1:1 [L0/0, R0/0, L1/80, R1/80]; the user flips axis 2 (L1) to the right. Its
        // offset stays 80 → it would collide with axis 3 (R1/80) on the right. packStaggeredAxes
        // repacks each side densely by array order, so the overlap is gone.
        const flipped: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'right', offset: 0 },
            { position: 'right', offset: 80 }, // was left/80, now right — collides with the next
            { position: 'right', offset: 80 },
        ];
        expect(packStaggeredAxes(flipped).map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 }, // axis 0 alone on the left
            { p: 'right', o: 0 }, // axes 1, 2, 3 repacked to 0/80/160 by running order
            { p: 'right', o: 80 },
            { p: 'right', o: 160 },
        ]);
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

describe('sameFormatSurvivor — axis-delete rebind target (ADR-0025)', () => {
    it('returns the first survivor index sharing the deleted format', () => {
        const survivors: EchartsAxisConfig[] = [{ format: '{value} kW' }, { format: '{value} °C' }];
        expect(sameFormatSurvivor('{value} °C', survivors)).toBe(1);
    });

    it('returns null when no survivor shares the format (caller falls back to axis 0 + toast)', () => {
        const survivors: EchartsAxisConfig[] = [{ format: '{value} kW' }, { format: '%' }];
        expect(sameFormatSurvivor('{value} °C', survivors)).toBeNull();
    });

    it('treats empty/undefined format as matching empty (the same-unit proxy, like alignTicks)', () => {
        expect(sameFormatSurvivor(undefined, [{}, { format: '' }])).toBe(0); // first empty matches
        expect(sameFormatSurvivor('', [{ format: 'kW' }, {}])).toBe(1);
    });

    it('returns the FIRST match when several survivors share the format', () => {
        const survivors: EchartsAxisConfig[] = [{ format: '°C' }, { format: '°C' }];
        expect(sameFormatSurvivor('°C', survivors)).toBe(0);
    });
});

describe('dropOrphanAxis — orphan cleanup on series-leave (ADR-0025)', () => {
    it('drops the orphan axis and shifts higher yAxisIndex down by 1', () => {
        const series = [{ yAxisIndex: 0 }, { yAxisIndex: 2 }, { yAxisIndex: 3 }];
        const yAxes: EchartsAxisConfig[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];
        const out = dropOrphanAxis(series, yAxes, 1); // axis 1 orphaned
        expect(out.yAxes.map(a => a.name)).toEqual(['A', 'C', 'D']); // axis 1 removed
        expect(out.series.map(s => s.yAxisIndex)).toEqual([0, 1, 2]); // >1 shifted down
    });

    it('leaves series on lower axes unchanged', () => {
        const series = [{ yAxisIndex: 0 }, { yAxisIndex: 0 }, { yAxisIndex: 2 }];
        const yAxes: EchartsAxisConfig[] = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
        const out = dropOrphanAxis(series, yAxes, 1);
        expect(out.series.map(s => s.yAxisIndex)).toEqual([0, 0, 1]); // the two on axis 0 stay
    });

    it('does NOT re-stagger — offsets are unchanged (the caller applies the restagger policy)', () => {
        const yAxes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 160 },
        ];
        const out = dropOrphanAxis([], yAxes, 0);
        expect(out.yAxes.map(a => a.offset)).toEqual([160]); // not packed to 0
    });

    it('preserves survivor identity + fields', () => {
        const yAxes: EchartsAxisConfig[] = [
            { id: 'a', name: 'A', color: '#f00' },
            { id: 'b', name: 'B' },
        ];
        const out = dropOrphanAxis([], yAxes, 0);
        expect(out.yAxes).toEqual([{ id: 'b', name: 'B' }]);
    });

    it('leaves a series bound to the orphan index untouched (caller guarantees no survivors on it)', () => {
        // The rebound series in a rebind already carries its NEW yAxisIndex; dropOrphanAxis only
        // re-indexes around the dropped slot. A series still pointing at the orphan index (should not
        // happen post-orphan-check) is left as-is — defensive.
        const series = [{ yAxisIndex: 1 }];
        const out = dropOrphanAxis(series, [{ name: 'A' }, { name: 'B' }], 1);
        expect(out.series).toEqual([{ yAxisIndex: 1 }]);
    });
});

describe('effectiveAxisName — binding-dropdown label (ADR-0025)', () => {
    const series = [
        { yAxisIndex: 0, name: 'Temp' },
        { yAxisIndex: 1, name: 'Power' },
    ];

    it('uses the explicit axis name when set', () => {
        expect(effectiveAxisName({ name: 'Eigene' }, 0, series)).toBe('Eigene');
    });

    it('inherits the first bound series name when no explicit name', () => {
        expect(effectiveAxisName({}, 0, series)).toBe('Temp');
        expect(effectiveAxisName({}, 1, series)).toBe('Power');
    });

    it('falls back to the 1-based index when neither axis nor bound series has a name', () => {
        expect(effectiveAxisName({}, 2, series)).toBe('3');
        expect(effectiveAxisName({}, 0, [{ yAxisIndex: 0 }])).toBe('1');
    });

    it('prefers the explicit axis name over a bound series name', () => {
        expect(effectiveAxisName({ name: 'Axis' }, 0, series)).toBe('Axis');
    });

    it('takes the FIRST series bound to the axis when several share it (1:n)', () => {
        const shared = [
            { yAxisIndex: 0, name: 'First' },
            { yAxisIndex: 0, name: 'Second' },
        ];
        expect(effectiveAxisName({}, 0, shared)).toBe('First');
    });
});

describe('effectiveAxisColor — Axis-card swatch matches the bound Series card (ADR-0018, JSON fix)', () => {
    const palette = ['#aaa', '#bbb', '#ccc', '#ddd'];

    it("uses the bound series' palette slot by its DISPLAY position (history/live 1:1)", () => {
        const series = [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }];
        expect(effectiveAxisColor(0, series, palette)).toBe('#aaa');
        expect(effectiveAxisColor(2, series, palette)).toBe('#ccc');
    });

    it('uses the VISIBLE position, not the axis index, when the binding is permuted (JSON reorder)', () => {
        // JSON after a payload-name reorder: visible order [B, A, C], but the sticky overlay keeps
        // yAxisIndex B→1, A→0, C→2. The Series cards show palette[B]=palette[0], palette[A]=palette[1].
        // axis 1 is B's axis → its swatch must show palette[0] (B's visible slot), NOT palette[1]
        // (the axis index — the old fallback, which diverged here).
        const visibleSeries = [
            { yAxisIndex: 1 }, // B (visible position 0)
            { yAxisIndex: 0 }, // A (visible position 1)
            { yAxisIndex: 2 }, // C (visible position 2)
        ];
        expect(effectiveAxisColor(1, visibleSeries, palette)).toBe('#aaa'); // B's slot
        expect(effectiveAxisColor(0, visibleSeries, palette)).toBe('#bbb'); // A's slot (visible pos 1)
        expect(effectiveAxisColor(2, visibleSeries, palette)).toBe('#ccc'); // C's slot
    });

    it('an explicit bound-series colour wins over the palette slot', () => {
        const series = [{ yAxisIndex: 0, color: '#f00' }, { yAxisIndex: 1 }];
        expect(effectiveAxisColor(0, series, palette)).toBe('#f00');
        expect(effectiveAxisColor(1, series, palette)).toBe('#bbb');
    });

    it('returns undefined when no series is bound to the axis', () => {
        expect(effectiveAxisColor(5, [{ yAxisIndex: 0 }], palette)).toBeUndefined();
    });
});

describe('reconcileJsonAxes — sticky JSON axis reconcile (ADR-0026)', () => {
    it('a fresh payload lands 1:1 — each name its own axis', () => {
        const r = reconcileJsonAxes(['A', 'B', 'C'], {}, []);
        expect(r.yAxes.length).toBe(3);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBe(1);
        expect(r.overlay.C?.yAxisIndex).toBe(2);
    });

    it('keeps a valid manual yAxisIndex — a rebind survives a payload change (sticky)', () => {
        // B was merged onto A's axis (1:n); the freed axis 1 must drop, B stays on 0.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 } };
        const r = reconcileJsonAxes(['A', 'B'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBe(0); // sticky — NOT reset to 1
        expect(r.yAxes.length).toBe(1); // axis 1 orphaned (no name) → dropped
    });

    it('clears yAxisIndex on a name no longer visible and drops the orphaned axis', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const r = reconcileJsonAxes(['A'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBeUndefined(); // cleared (hidden/gone)
        expect(r.yAxes.length).toBe(1); // B's axis dropped
    });

    it('reassigns a name whose stored yAxisIndex is stale (beyond the axis array) to a valid axis', () => {
        const r = reconcileJsonAxes(['A'], { A: { yAxisIndex: 5 } }, [{ position: 'left' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0); // a valid home, not 5
        expect(r.yAxes.length).toBe(1);
    });

    it('a new payload name gets its own fresh axis (1:1 default), not axis 0', () => {
        const r = reconcileJsonAxes(['A', 'B'], { A: { yAxisIndex: 0 } }, [{ position: 'left' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0); // kept
        expect(r.overlay.B?.yAxisIndex).toBe(1); // fresh axis, not a merge onto 0
        expect(r.yAxes.length).toBe(2);
    });

    it('preserves a deliberate 1:n binding without orphaning either axis', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 }, C: { yAxisIndex: 1 } };
        const r = reconcileJsonAxes(['A', 'B', 'C'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay).toMatchObject({
            A: { yAxisIndex: 0 },
            B: { yAxisIndex: 0 },
            C: { yAxisIndex: 1 },
        });
        expect(r.yAxes.length).toBe(2); // both axes still bound
    });

    it('a manual position flip survives a names-identical reconcile (JSON side-flip, ADR-0028)', () => {
        // The exact JSON-mode cycle: fresh payload → 1:1 layout → user flips an axis in the Axes
        // section (setAxis repacks) → the payload ticks with the SAME names, so the modal reconcile
        // effect re-runs with the flipped axes as input. The sticky path keeps each bound axis, so
        // the flip + repack survive — JSON must behave like history/live here.
        // 1. Fresh payload → default 1:1 [A:left/0, B:right/0, C:left/80].
        const r0 = reconcileJsonAxes(['A', 'B', 'C'], {}, []);
        // 2. User flips B's axis (index 1) to the left; setAxis repacks.
        const flipped = r0.yAxes.map((a, i) => (i === 1 ? { ...a, position: 'left' as const } : a));
        const packed = packStaggeredAxes(flipped); // all three on the left: 0/80/160
        expect(packed.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'left', o: 80 },
            { p: 'left', o: 160 },
        ]);
        // 3. Payload tick, same names → reconcile re-runs over the flipped axes. Flip survives.
        const r1 = reconcileJsonAxes(['A', 'B', 'C'], r0.overlay, packed);
        expect(r1.yAxes.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'left', o: 80 },
            { p: 'left', o: 160 },
        ]);
    });
});
