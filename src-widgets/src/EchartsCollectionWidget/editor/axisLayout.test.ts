/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import {
    alignTicksDisabledByOverride,
    axisLayout,
    axisPosition,
    balanceAxes,
    boundAxisIndices,
    effectiveAxisColor,
    effectiveAxisName,
    isOneToOneBound,
    packStaggeredAxes,
    reconcileJsonAxes,
    jsonBindingView,
    restingAxisName,
    restingNamePatch,
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
});

describe('axisLayout — predicates', () => {
    it('isOneToOneBound is true for the default binding (series j → axis j)', () => {
        expect(isOneToOneBound([{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }])).toBe(true);
    });

    it('isOneToOneBound ignores unbound axes — a rebound series that left a hole still owns its axis', () => {
        // Series 0 rebound onto axis 1 → axis 0 unbound; series 1 stays on axis 2. Each series
        // still sits on its OWN bound axis → dense (ADR-0066: the hole does not make it shared).
        expect(isOneToOneBound([{ yAxisIndex: 1 }, { yAxisIndex: 2 }])).toBe(true);
    });

    it('isOneToOneBound is false when an axis is genuinely shared (2+ series on it)', () => {
        expect(isOneToOneBound([{ yAxisIndex: 0 }, { yAxisIndex: 0 }, { yAxisIndex: 2 }])).toBe(false);
        expect(isOneToOneBound([])).toBe(true); // vacuously true
    });

    it('boundAxisIndices collects the referenced indices (undefined → 0, like the builder)', () => {
        expect(boundAxisIndices([{ yAxisIndex: 0 }, { yAxisIndex: 2 }, {}])).toEqual(new Set([0, 2]));
        expect(boundAxisIndices([])).toEqual(new Set());
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

    it('treats empty/undefined format as matching empty (the same-unit proxy — empty matches empty)', () => {
        expect(sameFormatSurvivor(undefined, [{}, { format: '' }])).toBe(0); // first empty matches
        expect(sameFormatSurvivor('', [{ format: 'kW' }, {}])).toBe(1);
    });

    it('returns the FIRST match when several survivors share the format', () => {
        const survivors: EchartsAxisConfig[] = [{ format: '°C' }, { format: '°C' }];
        expect(sameFormatSurvivor('°C', survivors)).toBe(0);
    });
});

describe('alignTicksDisabledByOverride — tick override defeats alignment (ADR-0034)', () => {
    it('is false for a bare axis (no bounds, no tick knobs) — alignment can take effect', () => {
        expect(alignTicksDisabledByOverride({})).toBe(false);
    });

    it('is true when min or max is set (a fixed value range fixes the interval)', () => {
        expect(alignTicksDisabledByOverride({ min: 0 })).toBe(true);
        expect(alignTicksDisabledByOverride({ max: 100 })).toBe(true);
        expect(alignTicksDisabledByOverride({ min: 0, max: 100 })).toBe(true);
    });

    it('is true when splitNumber or minInterval is set (a tick-density knob fixes the interval)', () => {
        expect(alignTicksDisabledByOverride({ splitNumber: 5 })).toBe(true);
        expect(alignTicksDisabledByOverride({ minInterval: 1 })).toBe(true);
    });

    it('ignores non-tick fields (position/offset/log/colour/name do NOT defeat alignment)', () => {
        expect(
            alignTicksDisabledByOverride({ position: 'right', offset: 80, log: true, color: '#f00', name: 'kW' }),
        ).toBe(false);
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

    it('shows the restingName while UNBOUND — the last name survives the series leaving (ADR-0066)', () => {
        // Axis 1 lost its series (Power rebound away); its resting name keeps the label stable.
        expect(effectiveAxisName({ restingName: 'Power' }, 1, [{ yAxisIndex: 0, name: 'Temp' }])).toBe('Power');
    });

    it('ignores the restingName while BOUND — live series inheritance wins (ADR-0018)', () => {
        const rebound = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 1, name: 'Verbrauch' },
        ];
        expect(effectiveAxisName({ restingName: 'Power' }, 1, rebound)).toBe('Verbrauch');
        // A bound-but-unnamed series does not resurrect the resting name either — index fallback.
        expect(effectiveAxisName({ restingName: 'Power' }, 1, [{ yAxisIndex: 1 }])).toBe('2');
    });
});

describe('restingAxisName — the snapshot to persist when an axis goes unbound (ADR-0066)', () => {
    const series = [
        { yAxisIndex: 0, name: 'Temp' },
        { yAxisIndex: 1, name: 'Power' },
    ];

    it('captures the inherited series name (the name the axis displayed)', () => {
        expect(restingAxisName({}, 1, series)).toBe('Power');
    });

    it('captures nothing when the axis has an explicit name (already persisted)', () => {
        expect(restingAxisName({ name: 'Eigene' }, 1, series)).toBeUndefined();
    });

    it('captures nothing when the bound series is unnamed (nothing worth freezing)', () => {
        expect(restingAxisName({}, 1, [{ yAxisIndex: 1 }])).toBeUndefined();
    });
});

describe('restingNamePatch — transition diff over before/after bindings (ADR-0066)', () => {
    const axes: EchartsAxisConfig[] = [{ id: 'a0' }, { id: 'a1' }, { id: 'a2', restingName: 'Altlast' }];

    it('snapshots the displayed name on the axis a rebind vacated', () => {
        const before = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 1, name: 'Power' },
        ];
        const after = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 0, name: 'Power' }, // Power merged onto axis 0 → axis 1 unbound
        ];
        const next = restingNamePatch(before, after, axes);
        expect(next?.[1]).toMatchObject({ restingName: 'Power' });
        expect(next?.[0]).toBe(axes[0]); // untouched axis keeps its reference (no churn)
    });

    it('clears the resting name on the axis a rebind targets (live inheritance resumes)', () => {
        const before = [{ yAxisIndex: 0, name: 'Temp' }];
        const after = [{ yAxisIndex: 2, name: 'Temp' }]; // onto the axis carrying a stale name
        const next = restingNamePatch(before, after, axes);
        expect(next?.[2]?.restingName).toBeUndefined(); // cleared (key dropped on blob encode)
    });

    it('returns undefined when no axis transitions (referentially stable no-op)', () => {
        const same = [{ yAxisIndex: 0, name: 'Temp' }];
        expect(restingNamePatch(same, same, axes)).toBeUndefined();
    });

    it('a series-delete snapshots the vacated axis (the remove path)', () => {
        const before = [{ yAxisIndex: 1, name: 'Power' }];
        const after: { yAxisIndex: number; name: string }[] = [];
        const next = restingNamePatch(before, after, axes);
        expect(next?.[1]).toMatchObject({ restingName: 'Power' });
    });

    it('composed with the JSON binding view: hiding the last binder snapshots the payload name', () => {
        // The AxesZoomSection JSON axis-delete path: hiding the bound payload series must snapshot
        // the axis' displayed name even though the overlay entry keeps its yAxisIndex until the
        // reconcile clears it — the VISIBILITY view sees the transition the raw overlay misses.
        const names = ['Temp', 'Leistung'];
        const overlay = { Temp: { yAxisIndex: 0 }, Leistung: { yAxisIndex: 1 } };
        const before = jsonBindingView(names, overlay, []);
        const after = jsonBindingView(names, overlay, ['Leistung']);
        const next = restingNamePatch(before, after, axes);
        expect(next?.[1]).toMatchObject({ restingName: 'Leistung' }); // payload name, no authored one
    });
});

describe('jsonBindingView — the JSON binding view (ADR-0066)', () => {
    it('maps visible names to {index, display name} — authored name wins over the payload name', () => {
        const view = jsonBindingView(
            ['Temp', 'Leistung'],
            { Temp: { yAxisIndex: 0, name: 'Außen' }, Leistung: { yAxisIndex: 1 } },
            [],
        );
        expect(view).toEqual([
            { yAxisIndex: 0, name: 'Außen' },
            { yAxisIndex: 1, name: 'Leistung' },
        ]);
    });

    it('filters hidden names — a hidden binder must not count as bound', () => {
        const view = jsonBindingView(['A', 'B'], { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } }, ['B']);
        expect(view).toEqual([{ yAxisIndex: 0, name: 'A' }]);
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

    it('keeps a valid manual yAxisIndex — the freed axis rests unbound (sticky, ADR-0066)', () => {
        // B was merged onto A's axis (1:n); the freed axis 1 STAYS as an unbound axis —
        // selectable in the dropdown, never rendered — instead of being dropped.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 } };
        const r = reconcileJsonAxes(['A', 'B'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBe(0); // sticky — NOT reset to 1
        expect(r.yAxes.length).toBe(2); // axis 1 freed → unbound, not dropped
    });

    it('clears yAxisIndex on a name no longer visible; its axis stays unbound', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const r = reconcileJsonAxes(['A'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBeUndefined(); // cleared (hidden/gone)
        expect(r.yAxes.length).toBe(2); // B's axis freed → unbound, not dropped
    });

    it('heals a stale yAxisIndex (beyond the axis array) with a FRESH axis — never a claim', () => {
        // The stored 5 is invalid (the axis was deleted); the strict rule (ADR-0066) appends a
        // fresh axis for the name instead of claiming the unbound axis 0 — which rests unbound.
        const r = reconcileJsonAxes(['A'], { A: { yAxisIndex: 5 } }, [{ position: 'left' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(1); // the fresh appended axis, not 5, not the claim
        expect(r.yAxes.length).toBe(2); // axis 0 rests unbound
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

describe('axis raw survival (ADR-0037) — the yAxes blob is field-preserving', () => {
    const RAW = '{ "minorTick": { "show": true } }';
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', name: 'kW', raw: RAW },
        { id: 'a1', name: '°C', position: 'right', raw: RAW },
    ];

    it('packStaggeredAxes rewrites only offset — raw survives the re-stagger', () => {
        const packed = packStaggeredAxes(axes);
        expect(packed.every(a => a.raw === RAW)).toBe(true);
    });

    it('balanceAxes rewrites only geometry — raw survives the balance', () => {
        const balanced = balanceAxes(axes, [{ yAxisIndex: 0 }, { yAxisIndex: 1 }]);
        expect(balanced.every(a => a.raw === RAW)).toBe(true);
    });

    it('reconcileJsonAxes keeps raw on sticky axes; a fresh axis starts WITHOUT raw', () => {
        const overlay = { PV: { yAxisIndex: 0 }, TEMP: { yAxisIndex: 1 }, NEW: { yAxisIndex: 2 } };
        const { yAxes } = reconcileJsonAxes(['PV', 'TEMP', 'NEW'], overlay, axes);
        // PV/TEMP keep their sticky axes 0/1 (with raw); NEW gets the appended fresh axis
        // (no raw — the payload owns that series, ADR-0031 semantics).
        expect(yAxes[0].raw).toBe(RAW);
        expect(yAxes[1].raw).toBe(RAW);
        expect(yAxes[2].raw).toBeUndefined();
    });
});

describe('balanceAxes — auto-balance over BOUND axes (ADR-0067)', () => {
    it('standard interleaving: bound axes in array order alternate left/right, dense on the raster', () => {
        // Every axis stored left (a hand-tuned set) — the balance redistributes the geometry
        // from scratch: bound slot 0/1/2/3 → L0, R0, L80, R80 regardless of the stored side.
        const allLeft: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'left', offset: 80 },
            { id: 'a2', position: 'left', offset: 160 },
            { id: 'a3', position: 'left', offset: 240 },
        ];
        const out = balanceAxes(allLeft, [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }, { yAxisIndex: 3 }]);
        expect(out.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
            { p: 'right', o: 80 },
        ]);
    });

    it('an unbound axis takes NO slot — it keeps its stored position/offset untouched', () => {
        // A series-delete vacated axis 1 (kept as unbound at its old right/120 spot). The two
        // bound axes interleave L0/R0 — the unbound axis' geometry is neither consulted nor
        // overwritten (it is the preference a later re-bind's balance re-arranges).
        const axes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 120 },
            { id: 'a2', position: 'left', offset: 80 },
        ];
        const out = balanceAxes(axes, [{ yAxisIndex: 0 }, { yAxisIndex: 2 }]);
        expect(out.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 }, // bound slot 0
            { p: 'right', o: 120 }, // unbound — stored geometry survives verbatim
            { p: 'right', o: 0 }, // bound slot 1 — dense behind slot 0, no gap for the unbound axis
        ]);
    });

    it('a delete-hole closes densely: the surviving bound axes re-arrange with no gap', () => {
        // 1:1 layout [L0, R0, L80]; the series on axis 1 is deleted → axis 1 rests unbound at
        // right/0, the series of axis 2 re-arranges into bound slot 1 (right/0's GEOMETRY —
        // the unbound axis does not reserve it, the builder never renders it).
        const axes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0 },
            { id: 'a2', position: 'left', offset: 80 },
        ];
        const out = balanceAxes(axes, [{ yAxisIndex: 0 }, { yAxisIndex: 2 }]);
        expect(out[2]).toMatchObject({ position: 'right', offset: 0 });
        expect(out[1]).toMatchObject({ position: 'right', offset: 0 }); // unbound keeps right/0 too — no slot
    });

    it('a series without yAxisIndex binds axis 0 (mirrors the builder), so axis 0 balances', () => {
        const axes: EchartsAxisConfig[] = [{ id: 'a0', position: 'right', offset: 160 }];
        const out = balanceAxes(axes, [{}]);
        expect(out[0]).toMatchObject({ position: 'left', offset: 0 });
    });

    it('no bound series at all → nothing is arranged, every axis passes through by reference', () => {
        const axes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'right', offset: 160 },
            { id: 'a1', position: 'left', offset: 40 },
        ];
        expect(balanceAxes(axes, [])).toEqual(axes);
        expect(balanceAxes(axes, [])[0]).toBe(axes[0]); // referential pass-through
        expect(balanceAxes(axes, [])[1]).toBe(axes[1]);
    });

    it('three bound axes pack 0/80 dense per side (L0, R0, L80)', () => {
        const axes: EchartsAxisConfig[] = [{ id: 'a0' }, { id: 'a1' }, { id: 'a2' }];
        const out = balanceAxes(axes, [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }]);
        expect(out.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
        ]);
    });

    it('preserves identity + every non-geometry field — only position/offset are rewritten', () => {
        const axes: EchartsAxisConfig[] = [{ id: 'a0', name: 'kW', color: '#f00', splitLine: false, format: '1.1' }];
        const [out] = balanceAxes(axes, [{ yAxisIndex: 0 }]);
        expect(out.id).toBe('a0');
        expect(out.name).toBe('kW');
        expect(out.color).toBe('#f00');
        expect(out.splitLine).toBe(false);
        expect(out.format).toBe('1.1');
        expect(out).toMatchObject({ position: 'left', offset: 0 });
    });

    it('a stale series index (>= yAxes.length) balances nothing extra — no crash, no phantom slot', () => {
        const axes: EchartsAxisConfig[] = [{ id: 'a0', position: 'right', offset: 42 }];
        const out = balanceAxes(axes, [{ yAxisIndex: 3 }]);
        expect(out).toEqual(axes); // index 3 has no axis → the set has no member → pass-through
    });
});
