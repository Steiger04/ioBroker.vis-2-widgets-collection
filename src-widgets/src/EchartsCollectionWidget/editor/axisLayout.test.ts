/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018) + the derived-citizen
 * lifecycle (ADR-0069: an axis exists exactly while a series binds it — the last binder
 * leaving drops it).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import {
    alignTicksDisabledByOverride,
    axesFollowBinders,
    axisLayout,
    axisOptionLabel,
    axisPosition,
    balanceAxes,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    displayAxisIndex,
    dropUnboundAxes,
    effectiveAxisColor,
    emittedAxisRanks,
    jsonBoundAxisDeletePatch,
    jsonShowPatch,
    effectiveAxisName,
    isOneToOneBound,
    ownerPatch,
    reconcileJsonAxes,
    reindexJsonOverlay,
    jsonBindingView,
    remapMarkAxisIndices,
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

    it('isOneToOneBound keys the BOUND set — a sparse index sight still counts one axis per series', () => {
        // Under ADR-0069 holes close at the structural event, so in-state sights are contiguous —
        // but the predicate stays pure over the indices it is handed (characterization).
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

    it('falls back to the Series-N label when neither axis nor bound series has a name (F11: dropdown === card === chart)', () => {
        expect(effectiveAxisName({}, 2, series)).toBe('Series 3');
        expect(effectiveAxisName({}, 0, [{ yAxisIndex: 0 }])).toBe('Series 1');
    });

    it('a BOUND unnamed series keys its Series-N label by SERIES position — even in a misaligned binding (F11)', () => {
        // Series #0 (unnamed) binds axis 2: the builder renders "Series 1" and the Axis-card title
        // shows "Series 1" — the dropdown must not diverge to the axis index ("Series 3").
        expect(effectiveAxisName({}, 2, [{ yAxisIndex: 2 }])).toBe('Series 1');
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

describe('ownerPatch — owner maintenance over before/after bindings (ADR-0068, surviving half)', () => {
    it('returns undefined when no owner changes (referentially stable no-op)', () => {
        const bound = [{ id: 's1', yAxisIndex: 0, name: 'Temp' }];
        expect(ownerPatch(bound, bound, [{ id: 'a0', owner: 's1' }])).toBeUndefined();
        const idless = [{ yAxisIndex: 0, name: 'Temp' }]; // legacy sight — owner-less stays owner-less
        expect(ownerPatch(idless, idless, [{ id: 'a0' }])).toBeUndefined();
    });

    it('leaves a DYING axis untouched — the caller drops it, there is no owner to maintain', () => {
        const before = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 1, name: 'Power' },
        ];
        const after = [{ yAxisIndex: 0, name: 'Temp' }]; // Power deleted → axis 1 dies downstream
        expect(ownerPatch(before, after, [{ id: 'a0' }, { id: 'a1' }])).toBeUndefined();
    });
});

describe('implicit axis-0 binding — the materialised display sight (Q7)', () => {
    it('a legacy series without a stored index inherits axis 0 — the editor shows what the chart renders', () => {
        // Pre-ADR-0018 blobs / hand edits carry series without `yAxisIndex`; the builder binds
        // them to axis 0 (`?? 0`) and inherits name + colour there. The display helpers read the
        // SAME materialised sight (Q7): the Axis card and dropdown show the series name/colour,
        // not „Achse 1" + a grey swatch.
        expect(effectiveAxisName({}, 0, [{ name: 'PV' }])).toBe('PV');
        expect(effectiveAxisColor({}, 0, [{ color: '#f00' }], ['#aaa'])).toBe('#f00');
    });

    it('only axis 0 gains binders — an implicit binder never matches a higher axis', () => {
        expect(effectiveAxisName({}, 1, [{ name: 'PV' }])).toBe('Series 2');
        expect(effectiveAxisColor({}, 1, [{ color: '#f00' }], ['#aaa'])).toBeUndefined();
    });

    it('an implicit binder keeps axis 0 alive — the death sight materialises too (ADR-0069)', () => {
        // Rebinding the implicit binder AWAY transitions axis 0 like any other: the materialised
        // death sight sees the leave, the axis dies in the same step.
        const r = dropUnboundAxes([{ yAxisIndex: 1, name: 'PV' }], [{ id: 'a0' }, { id: 'a1' }], []);
        expect(r.diedIndices).toEqual([0]);
        expect(r.yAxes).toHaveLength(1); // a1 survives
    });

    it('the JSON sights stay STRICT — a cleared overlay entry never binds axis 0 (characterization)', () => {
        expect(boundJsonView(['A'], { A: { yAxisIndex: undefined } }, [])).toEqual([]);
    });
});

describe('jsonBindingView — the JSON binding view', () => {
    it('maps visible names to {index, display name} — authored name wins over the payload name', () => {
        const view = jsonBindingView(
            ['Temp', 'Leistung'],
            { Temp: { yAxisIndex: 0, name: 'Außen' }, Leistung: { yAxisIndex: 1 } },
            [],
        );
        expect(view).toEqual([
            { id: 'Temp', yAxisIndex: 0, name: 'Außen' },
            { id: 'Leistung', yAxisIndex: 1, name: 'Leistung' },
        ]);
    });

    it('filters hidden names — a hidden binder must not count as bound', () => {
        const view = jsonBindingView(['A', 'B'], { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } }, ['B']);
        expect(view).toEqual([{ id: 'A', yAxisIndex: 0, name: 'A' }]);
    });
});

describe('effectiveAxisColor — Axis-card swatch matches the bound Series card (ADR-0018, JSON fix)', () => {
    const palette = ['#aaa', '#bbb', '#ccc', '#ddd'];

    it("uses the bound series' palette slot by its DISPLAY position (history/live 1:1)", () => {
        const series = [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }];
        expect(effectiveAxisColor({}, 0, series, palette)).toBe('#aaa');
        expect(effectiveAxisColor({}, 2, series, palette)).toBe('#ccc');
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
        expect(effectiveAxisColor({}, 1, visibleSeries, palette)).toBe('#aaa'); // B's slot
        expect(effectiveAxisColor({}, 0, visibleSeries, palette)).toBe('#bbb'); // A's slot (visible pos 1)
        expect(effectiveAxisColor({}, 2, visibleSeries, palette)).toBe('#ccc'); // C's slot
    });

    it('an explicit bound-series colour wins over the palette slot', () => {
        const series = [{ yAxisIndex: 0, color: '#f00' }, { yAxisIndex: 1 }];
        expect(effectiveAxisColor({}, 0, series, palette)).toBe('#f00');
        expect(effectiveAxisColor({}, 1, series, palette)).toBe('#bbb');
    });

    it('returns undefined when no series is bound to the axis', () => {
        expect(effectiveAxisColor({}, 5, [{ yAxisIndex: 0 }], palette)).toBeUndefined();
    });
});

describe('dropUnboundAxes — the axis-death core (ADR-0069)', () => {
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
        { id: 'a2', position: 'left', offset: 80 },
    ];

    it('no death: everything passes through by reference, reindex is the identity', () => {
        const r = dropUnboundAxes([{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }], axes, [{ yAxisIndex: 1 }]);
        expect(r.diedIndices).toEqual([]);
        expect(r.yAxes[0]).toBe(axes[0]);
        expect(r.binders[0]).toHaveProperty('yAxisIndex', 0);
        expect(r.reindex(2)).toBe(2);
    });

    it('a single death (series-delete): axis dropped, binders + anchors re-indexed', () => {
        // The series on axis 1 is deleted → axis 1 dies; the series on axis 2 takes rank 1; the
        // marking on axis 1 anchors on the stack predecessor (axis 0), the one on 2 shifts down.
        const r = dropUnboundAxes([{ yAxisIndex: 0 }, { yAxisIndex: 2 }], axes, [
            { yAxisIndex: 0 },
            { yAxisIndex: 1 },
            { yAxisIndex: 2 },
        ]);
        expect(r.diedIndices).toEqual([1]);
        expect(r.yAxes.map(a => a.id)).toEqual(['a0', 'a2']);
        expect(r.binders.map(s => s.yAxisIndex)).toEqual([0, 1]);
        expect(r.markLines.map(m => m.yAxisIndex)).toEqual([0, 0, 1]);
        expect(r.reindex(2)).toBe(1);
        expect(r.reindex(1)).toBeUndefined(); // the dropped axis has no rank
    });

    it('a rebind death: the vacated axis' + ' anchors follow the series onto the rebind target', () => {
        // The axis-1 series rebinds onto axis 0 → axis 1 dies; its marking follows the series to
        // the TARGET (not the stack predecessor) — the marking stays with the data.
        const after = [{ yAxisIndex: 0 }, { yAxisIndex: 0 }, { yAxisIndex: 2 }];
        const r = dropUnboundAxes(after, axes, [{ yAxisIndex: 1 }, { yAxisIndex: 2 }], { from: 1, to: 0 });
        expect(r.diedIndices).toEqual([1]);
        expect(r.markLines.map(m => m.yAxisIndex)).toEqual([0, 1]); // 1 → target 0; 2 → rank 1
    });

    it('a multi death (payload-vanish): every unbound axis drops, ranks compact in order', () => {
        const r = dropUnboundAxes([{ yAxisIndex: 1 }], axes, [{ yAxisIndex: 0 }, { yAxisIndex: 2 }]);
        expect(r.diedIndices).toEqual([0, 2]);
        expect(r.yAxes.map(a => a.id)).toEqual(['a1']);
        expect(r.binders.map(s => s.yAxisIndex)).toEqual([0]);
        expect(r.markLines.map(m => m.yAxisIndex)).toEqual([0, 0]); // stack predecessor walks down
    });

    it('ALL axes die: the empty result, markings clamp to 0 (the next axis to be born anchors them)', () => {
        const r = dropUnboundAxes([], axes, [{ yAxisIndex: 1 }]);
        expect(r.diedIndices).toEqual([0, 1, 2]);
        expect(r.yAxes).toEqual([]);
        expect(r.markLines).toEqual([{ yAxisIndex: 0 }]);
    });

    it('an undefined binder index still binds axis 0 — axis 0 never dies under an implicit binder', () => {
        const r = dropUnboundAxes([{}], axes, []);
        expect(r.diedIndices).toEqual([1, 2]);
        expect(r.binders).toEqual([{}]); // untouched — undefined stays undefined
    });
});

describe('axesFollowBinders — the structural-event seam (ADR-0069 + 0067)', () => {
    const yAxes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
        { id: 'a2', position: 'left', offset: 80 },
    ];

    it('the series-leave death: the vacated axis is GONE, the survivors re-arrange densely', () => {
        // 3 axes 1:1; the series on axis 1 ("Power") is deleted → axis 1 dies (config gone), the
        // series of axis 2 re-indexes to 1 and re-arranges into balance slot 1.
        const before = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 1, name: 'Power' },
            { yAxisIndex: 2, name: 'Hum' },
        ];
        const after = [before[0], before[2]];
        const r = axesFollowBinders(before, after, yAxes, []);
        expect(r.diedIndices).toEqual([1]);
        expect(r.yAxes.map(a => a.id)).toEqual(['a0', 'a2']);
        expect(r.binders.map(s => s.yAxisIndex)).toEqual([0, 1]);
        expect(r.yAxes[1]).toMatchObject({ position: 'right', offset: 0 }); // balance slot 1 — hole closed
    });

    it('1:n: the axis survives until the LAST binder leaves', () => {
        const oneStays = [
            { yAxisIndex: 0, name: 'A' },
            { yAxisIndex: 0, name: 'B' },
            { yAxisIndex: 2, name: 'C' },
        ];
        expect(axesFollowBinders(oneStays, oneStays, yAxes, []).diedIndices).toEqual([1]);
        const lastLeaves = [oneStays[0], oneStays[2]]; // B deleted → axis 0 keeps A, still bound
        expect(axesFollowBinders(oneStays, lastLeaves, yAxes, []).diedIndices).toEqual([1]);
        const allLeave = [oneStays[2]]; // A + B gone → axis 0 dies with its last binder
        expect(axesFollowBinders(oneStays, allLeave, yAxes, []).diedIndices).toEqual([0, 1]);
    });

    it('the „Neue Achse" append: the fresh axis exists, is bound, and balances — one seam call', () => {
        const yAxesNow = [...yAxes, axisLayout(3)];
        const before = [
            { yAxisIndex: 0, name: 'Temp' },
            { yAxisIndex: 1, name: 'Power' },
            { yAxisIndex: 2, name: 'Hum' },
        ];
        const after = [before[0], { ...before[1], yAxisIndex: 3 }, before[2]];
        const r = axesFollowBinders(before, after, yAxesNow, [{ yAxisIndex: 1 }], { from: 1, to: 3 });
        expect(r.diedIndices).toEqual([1]);
        expect(r.yAxes.map(a => a.id)).toEqual(['a0', 'a2', yAxesNow[3].id]);
        expect(r.binders.map(s => s.yAxisIndex)).toEqual([0, 2, 1]); // Power → the fresh axis (rank 2), Hum compacts
        expect(r.markLines).toEqual([{ yAxisIndex: 2 }]); // followed the series onto the fresh axis
        expect(r.yAxes[2]).toMatchObject({ position: 'left', offset: 80 }); // balance slot 2
    });

    it('composed with the JSON binding view: hiding the last binder drops the axis (strict sight)', () => {
        const names = ['Temp', 'Leistung'];
        const overlay = { Temp: { yAxisIndex: 0 }, Leistung: { yAxisIndex: 1 } };
        const before = boundJsonView(names, overlay, []);
        const after = boundJsonView(names, overlay, ['Leistung']);
        const r = axesFollowBinders(before, after, yAxes.slice(0, 2), []);
        expect(r.diedIndices).toEqual([1]);
        expect(r.reindex(1)).toBeUndefined();
    });
});

describe('reindexJsonOverlay — overlay entries around dropped axes (ADR-0069)', () => {
    it('a kept axis takes its rank; an entry on the dropped axis is CLEARED', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 }, C: { yAxisIndex: 2 } };
        const out = reindexJsonOverlay(overlay, yi => (yi === 1 ? undefined : yi === 2 ? 1 : 0));
        expect(out).toEqual({ A: { yAxisIndex: 0 }, B: { yAxisIndex: undefined }, C: { yAxisIndex: 1 } });
    });

    it('an already-cleared entry passes through untouched', () => {
        const overlay = { B: { yAxisIndex: undefined, color: '#f00' } };
        expect(reindexJsonOverlay(overlay, () => 0)).toEqual(overlay);
    });
});

describe('reconcileJsonAxes — sticky JSON axis reconcile (ADR-0026) + the vanish death (ADR-0069)', () => {
    it('a fresh payload lands 1:1 — each name its own axis', () => {
        const r = reconcileJsonAxes(['A', 'B', 'C'], {}, []);
        expect(r.yAxes.length).toBe(3);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBe(1);
        expect(r.overlay.C?.yAxisIndex).toBe(2);
    });

    it('keeps a valid manual yAxisIndex — the freed axis DIES (sticky + ADR-0069)', () => {
        // B was merged onto A's axis (1:n); the freed axis 1 is DROPPED — there is no resting
        // state; a re-show/re-add gets a fresh axis.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0 } };
        const r = reconcileJsonAxes(['A', 'B'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBe(0); // sticky — NOT reset to 1
        expect(r.yAxes.length).toBe(1); // axis 1 freed → dropped
        expect(r.diedIndices).toEqual([1]);
    });

    it('clears yAxisIndex on a name no longer visible; its axis DIES (hidden or gone)', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const r = reconcileJsonAxes(['A'], overlay, [{ position: 'left' }, { position: 'right' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0);
        expect(r.overlay.B?.yAxisIndex).toBeUndefined(); // cleared (hidden/gone)
        expect(r.yAxes.length).toBe(1); // B's axis freed → dropped
    });

    it('heals a stale yAxisIndex (beyond the axis array) with a FRESH axis — never a claim', () => {
        // The stored 5 is invalid (the axis was deleted); the strict rule appends a fresh axis
        // for the name; the now-unbound axis 0 dies in the same pass and the fresh axis compacts
        // to index 0.
        const r = reconcileJsonAxes(['A'], { A: { yAxisIndex: 5 } }, [{ position: 'left' }]);
        expect(r.overlay.A?.yAxisIndex).toBe(0); // the fresh axis, post-compaction
        expect(r.yAxes.length).toBe(1);
        expect(r.diedIndices).toEqual([0]);
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

    it('a payload tick re-arranges a hand-flipped layout back to the standard interleaving (ADR-0067)', () => {
        // The exact JSON-mode cycle, ADR-0067 semantics: fresh payload → 1:1 layout → the user
        // flips axes by hand (a manual position is fine-justure ONLY between structural events —
        // setAxis leaves it, see the AxesZoomSection field-edit rule). The next payload tick
        // re-fires the reconcile — a structural event — and the balance snaps every axis back to
        // the standard interleaving; the flip is gone, exactly like a hand-tuned offset.
        const r0 = reconcileJsonAxes(['A', 'B', 'C'], {}, []);
        const handFlipped = r0.yAxes.map((a, i) => (i === 1 || i === 2 ? { ...a, position: 'left' as const } : a));
        const r1 = reconcileJsonAxes(['A', 'B', 'C'], r0.overlay, handFlipped);
        expect(r1.yAxes.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
        ]);
    });

    it('a name vanishing from the payload KILLS its axis — dropped, overlay + anchors re-indexed', () => {
        // B was bound to axis 1; the payload ticks and B is GONE. The death fires in the same
        // pass: axis 1 drops, C's binding compacts, the marking anchored to axis 1 follows to
        // the stack predecessor.
        const r = reconcileJsonAxes(
            ['A', 'C'],
            { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Power' }, C: { yAxisIndex: 2 } },
            [
                { id: 'a0', position: 'left', offset: 0 },
                { id: 'a1', position: 'right', offset: 0 },
                { id: 'a2', position: 'left', offset: 80 },
            ],
            [],
            [{ yAxisIndex: 1 }, { yAxisIndex: 2 }],
        );
        expect(r.overlay.B?.yAxisIndex).toBeUndefined(); // cleared — B anchors nothing
        expect(r.overlay.C?.yAxisIndex).toBe(1); // compacted around the hole
        expect(r.yAxes.map(a => a.id)).toEqual(['a0', 'a2']); // axis 1 DROPPED
        expect(r.diedIndices).toEqual([1]);
        expect(r.markLines).toEqual([{ yAxisIndex: 0 }, { yAxisIndex: 1 }]); // predecessor + shift
    });

    it('is idempotent — a second reconcile over its own output drops nothing further', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Power' } };
        const axes = [
            { id: 'a0', position: 'left' as const, offset: 0 },
            { id: 'a1', position: 'right' as const, offset: 0 },
        ];
        const r1 = reconcileJsonAxes(['A'], overlay, axes);
        const r2 = reconcileJsonAxes(['A'], r1.overlay, r1.yAxes);
        expect(r2.yAxes).toEqual(r1.yAxes); // stable — no second patch, no history entry
        expect(r2.diedIndices).toEqual([]);
    });

    it('a HIDDEN name is outside the sight — the reconcile heals a resting-era blob', () => {
        // Resting-era shape (ADR-0066): kw hidden with its axis still standing, Hum vanished.
        // The strict sight counts neither as a binder → BOTH axes die here (kw's died at hide
        // time under the new invariant; this heals a blob that skipped that step).
        const r = reconcileJsonAxes(
            ['temp'],
            { temp: { yAxisIndex: 0 }, kw: { yAxisIndex: 1, name: 'Kilowatt' }, Hum: { yAxisIndex: 2 } },
            [
                { id: 'a0', position: 'left', offset: 0 },
                { id: 'a1', position: 'right', offset: 0 },
                { id: 'a2', position: 'left', offset: 80 },
            ],
            ['kw'],
        );
        expect(r.overlay.kw?.yAxisIndex).toBeUndefined(); // cleared (bookkeeping)
        expect(r.overlay.Hum?.yAxisIndex).toBeUndefined();
        expect(r.yAxes.map(a => a.id)).toEqual(['a0']);
        expect(r.diedIndices).toEqual([1, 2]);
    });

    it('fresh payload name + vanish of the axis-0 binder in ONE reconcile: the fresh axis compacts onto rank 0 (strict sight)', () => {
        // 'Neu' has no overlay entry yet (undefined index) and never rendered anywhere; 'Gone'
        // bound axis 0 and vanished. The before-sight is the STRICT JSON view (defined indices
        // only) — an unfiltered sight would materialise 'Neu' onto axis 0 and count it a binder.
        const r = reconcileJsonAxes(['Neu'], { Gone: { yAxisIndex: 0, name: 'Alte' } }, [
            { id: 'a0', position: 'left', offset: 0 },
        ]);
        expect(r.overlay.Neu?.yAxisIndex).toBe(0); // the fresh axis, compacted into the hole
        expect(r.overlay.Gone?.yAxisIndex).toBeUndefined();
        expect(r.yAxes).toHaveLength(1); // a0 died, the fresh axis took rank 0
        expect(r.yAxes[0].id).not.toBe('a0');
    });
});

describe('jsonBoundAxisDeletePatch — JSON axis-delete hides ALL bound names, the axis dies (ADR-0069)', () => {
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
    ];

    it('a SHARED axis (1:n): every visible binder goes into jsonHidden, the axis is DROPPED', () => {
        // B and C share axis 1 (1:n is first-class). Deleting axis 1 must hide BOTH — hiding just
        // the first would leave the axis bound and rendered: the button would not do what it says.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' }, C: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B', 'C'], overlay, [], axes, 1, [{ yAxisIndex: 1 }]);
        expect(patch?.jsonHidden).toEqual(['B', 'C']);
        expect(patch?.yAxes).toHaveLength(1); // the axis DIED — not resting (ADR-0069)
        expect(patch?.yAxes[0]).toMatchObject({ position: 'left', offset: 0 }); // balance over {0}
        expect(patch?.jsonSeriesStyle).toEqual({
            A: { yAxisIndex: 0 },
            B: { yAxisIndex: undefined, name: 'Bezug' }, // authored fields survive the clear
            C: { yAxisIndex: undefined },
        });
        expect(patch?.markLines).toEqual([{ yAxisIndex: 0 }]); // stack predecessor
    });

    it('a single binder: unchanged hide semantics — exactly that name hides, the axis dies', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 1);
        expect(patch?.jsonHidden).toEqual(['B']);
        expect(patch?.yAxes).toHaveLength(1);
    });

    it('no VISIBLE binder → null: the caller takes the config-delete path', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        expect(jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 2)).toBeNull(); // no such axis
        expect(jsonBoundAxisDeletePatch(['A', 'B'], overlay, ['B'], axes, 1)).toBeNull(); // binder hidden
    });

    it('one patch → one undo step: jsonHidden AND yAxes AND jsonSeriesStyle (markLines when set) travel together', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 1);
        expect(patch && Object.keys(patch).sort()).toEqual(['jsonHidden', 'jsonSeriesStyle', 'markLines', 'yAxes']);
    });
});

describe('emittedAxisRanks — the emitted (effective) axis positions (Q5)', () => {
    it('identity when every axis is bound: rank === configured index (any insertion order)', () => {
        expect([...emittedAxisRanks(new Set([0, 1, 2]))]).toEqual([
            [0, 0],
            [1, 1],
            [2, 2],
        ]);
        // unsorted insertion exercises the ascending-sort guard — the rank follows the ARRAY
        // order, not the Set's insertion order.
        expect([...emittedAxisRanks(new Set([2, 0, 1]))]).toEqual([
            [0, 0],
            [1, 1],
            [2, 2],
        ]);
    });

    it('a sparse bound set compacts the ranks (defense parity with the builder filter)', () => {
        expect([...emittedAxisRanks(new Set([0, 2]))]).toEqual([
            [0, 0],
            [2, 1],
        ]);
    });

    it('no bound axis at all: empty map (size 0 — the 0-axes state is deliberate)', () => {
        expect(emittedAxisRanks(new Set()).size).toBe(0);
    });
});

describe('boundJsonView — the strict JSON balance sight (ADR-0067)', () => {
    it('filters the visible binding view down to DEFINED indices', () => {
        const overlay = { A: { yAxisIndex: 1 }, B: { yAxisIndex: 0 }, C: { yAxisIndex: undefined } };
        expect(boundJsonView(['A', 'B', 'C'], overlay, [])).toEqual([
            { id: 'A', yAxisIndex: 1, name: 'A' },
            { id: 'B', yAxisIndex: 0, name: 'B' },
        ]);
    });

    it('hidden names never reach the sight', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        expect(boundJsonView(['A', 'B'], overlay, ['B'])).toEqual([{ id: 'A', yAxisIndex: 0, name: 'A' }]);
    });
});

describe('axis raw survival (ADR-0037) — the yAxes blob is field-preserving', () => {
    const RAW = '{ "minorTick": { "show": true } }';
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', name: 'kW', raw: RAW },
        { id: 'a1', name: '°C', position: 'right', raw: RAW },
    ];

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

describe('balanceAxes — auto-balance (ADR-0067)', () => {
    it('standard interleaving: bound axes in array order alternate left/right, dense on the raster', () => {
        // Every axis stored left (a hand-tuned set) — the balance redistributes the geometry
        // from scratch: slot 0/1/2/3 → L0, R0, L80, R80 regardless of the stored side.
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

    it('an index outside the bound computation takes NO slot (defense characterization — unreachable in state since ADR-0069)', () => {
        // The bound-set mapping leaves an unbound axis' geometry untouched — parity with the
        // builder's bound-only filter over hand-edited JSON.
        const axes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 120 },
            { id: 'a2', position: 'left', offset: 80 },
        ];
        const out = balanceAxes(axes, [{ yAxisIndex: 0 }, { yAxisIndex: 2 }]);
        expect(out.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 }, // bound slot 0
            { p: 'right', o: 120 }, // unbound — stored geometry survives verbatim
            { p: 'right', o: 0 }, // bound slot 1 — dense behind slot 0
        ]);
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

describe('axisOptionLabel — the binding-dropdown item carries the axis number (B1)', () => {
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
    ];

    it('prefixes the 1-based axis number — the item stays identifiable among equal effective names', () => {
        // Two series share effective name fragments after a rebind; the number disambiguates.
        const shared = [
            { yAxisIndex: 1, name: 'N1' },
            { yAxisIndex: 1, name: 'N2' },
        ];
        expect(axisOptionLabel(1, axes[1], shared)).toBe('2 · N1');
    });

    it('an explicit axis name stays dominant', () => {
        expect(axisOptionLabel(0, { ...axes[0], name: 'kW' }, [])).toBe('1 · kW');
    });

    it('the unnamed fallback inherits the Series-N label — prefixed like every other name', () => {
        expect(axisOptionLabel(1, axes[1], [{ yAxisIndex: 0, name: '' }])).toBe('2 · Series 2');
    });
});

describe('boundJsonAxisIndices / boundJsonAxisName — the STRICT JSON card sight (B2)', () => {
    it('a hidden entry whose index awaits the clear does NOT bind — card and dropdown agree', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' } };
        expect(boundJsonAxisIndices(['A', 'B'], overlay, ['B'])).toEqual(new Set([0]));
    });

    it('boundJsonAxisName: the title comes from the first VISIBLE binder only', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' } };
        expect(boundJsonAxisName({}, 1, ['A', 'B'], overlay, ['B'])).toBeUndefined(); // hidden binder titles nothing
        expect(boundJsonAxisName({}, 1, ['A', 'B'], overlay, [])).toBe('Bezug'); // authored name wins
        expect(boundJsonAxisName({}, 0, ['A'], { A: { yAxisIndex: 0 } }, [])).toBe('A'); // payload name fallback
        expect(boundJsonAxisName({}, 2, ['A'], { A: { yAxisIndex: 0 } }, [])).toBeUndefined(); // unbound
    });

    it('a hidden binder and a visible binder SHARING one axis: the axis stays bound, titled by the visible one', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0, name: 'Bezug' } };
        expect(boundJsonAxisIndices(['A', 'B'], overlay, ['A'])).toEqual(new Set([0]));
        expect(boundJsonAxisName({}, 0, ['A', 'B'], overlay, ['A'])).toBe('Bezug');
    });
});

describe('jsonShowPatch — un-hide + reconcile in ONE step (B3, ADR-0069 re-birth)', () => {
    const baseAxes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
    ];

    it('sticky case (no interim reconcile): the kept index survives, nothing else changes', () => {
        // hide → show without a payload change in between: B still carries yAxisIndex 1 —
        // no fresh axis (count unchanged), no death, one deny-list change.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonShowPatch(['A', 'B'], overlay, baseAxes, ['B'], 'B');
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(1); // sticky
        expect(patch.yAxes).toHaveLength(2); // no fresh axis
        expect(patch.yAxes[1]).toMatchObject({ position: 'right', offset: 0 });
    });

    it('cleared case (the axis died at hide time): the shown name re-binds to a FRESH axis', () => {
        // hide dropped B's axis; a payload change cleared B's index in between. The show must
        // not linger index-less (dropdown „Achse 1", editor unbound, builder axis 0 — three
        // truths): the reconcile appends a FRESH axis NOW (default config — a re-birth, not a
        // resurrection, ADR-0069).
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: undefined } };
        const patch = jsonShowPatch(['A', 'B'], overlay, baseAxes, ['B'], 'B');
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(1); // the fresh axis, post-compaction
        expect(patch.yAxes).toHaveLength(2);
        expect(patch.yAxes[1].id).not.toBe('a1'); // a1 is GONE — replaced by the fresh axis
    });

    it('a second run over its own output changes nothing (no fresh axis, no churn)', () => {
        // The idempotence requirement, pinned at the helper seam: the editor-side no-op
        // guarantee rests on this — repeat inputs must not append axes.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const run1 = jsonShowPatch(['A', 'B'], overlay, baseAxes, ['B'], 'B');
        const run2 = jsonShowPatch(['A', 'B'], run1.jsonSeriesStyle, run1.yAxes, run1.jsonHidden, 'B');
        expect(run2.yAxes).toEqual(run1.yAxes);
        expect(run2.jsonSeriesStyle).toEqual(run1.jsonSeriesStyle);
        expect(run2.jsonHidden).toEqual(run1.jsonHidden);
    });
});

describe('remapMarkAxisIndices — marking anchors follow an axis delete (B4)', () => {
    it('history/live: a marking on the deleted axis follows the rebind target, higher anchors shift down', () => {
        const marks = [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }, { label: 'x' }];
        expect(remapMarkAxisIndices(marks, 1, 0)).toEqual([
            { yAxisIndex: 0 }, // below the deleted index — untouched
            { yAxisIndex: 0 }, // was on the deleted axis 1 → survivor target 0
            { yAxisIndex: 1 }, // shifted down around the hole
            { label: 'x' }, // undefined anchor passes through untouched
        ]);
    });

    it('JSON config-delete target: the anchor stays at the stack position the deleted axis occupied', () => {
        // i=1 of 3 → the marking on axis 1 lands on max(0, i-1)=0; axis 2 shifts down.
        expect(remapMarkAxisIndices([{ yAxisIndex: 1 }, { yAxisIndex: 2 }], 1, Math.max(0, 1 - 1))).toEqual([
            { yAxisIndex: 0 },
            { yAxisIndex: 1 },
        ]);
        // i=0: max(0, -1) = 0 — the anchor keeps the slot; everything above shifts down.
        expect(remapMarkAxisIndices([{ yAxisIndex: 0 }, { yAxisIndex: 1 }], 0, Math.max(0, 0 - 1))).toEqual([
            { yAxisIndex: 0 },
            { yAxisIndex: 0 },
        ]);
    });
});

describe('displayAxisIndex — the select clamp shows the builder truth (B4, F7/Q6 idiom)', () => {
    it('a stale index (>= total) displays as axis 1; a valid one passes through', () => {
        expect(displayAxisIndex(5, 3)).toBe(0);
        expect(displayAxisIndex(undefined, 3)).toBe(0);
        expect(displayAxisIndex(2, 3)).toBe(2);
    });

    it('the 0-axes state stays displayable (axis 1)', () => {
        expect(displayAxisIndex(undefined, 0)).toBe(0);
        expect(displayAxisIndex(0, 0)).toBe(0);
    });
});

describe('axis name owner „Namensgeber" — the incumbent keeps the axis identity (ADR-0068)', () => {
    const baseAxes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
        { id: 'a2', position: 'left', offset: 80 },
    ];
    const oneToOne = [
        { id: 's1', yAxisIndex: 0, name: 'S1' },
        { id: 's2', yAxisIndex: 1, name: 'S2' },
        { id: 's3', yAxisIndex: 2, name: 'S3' },
    ];

    it("the user regression: rebinding S2 onto S3's axis NEVER renames it — and the vacated axis dies (ADR-0068 + 0069)", () => {
        // 3 series 1:1 (no owner yet — bootstraps from BEFORE); S2 rebinds onto axis 2.
        // Before the owner rule the newcomer stood FIRST in series order and stole name +
        // colour: every surface read "S2", the axis of S3 was name-gone ("komplett
        // verschwunden"). With the owner, axis 2 keeps "S3"; axis 1 — vacated — DIES.
        const after = [oneToOne[0], { ...oneToOne[1], yAxisIndex: 2 }, oneToOne[2]];
        const r = axesFollowBinders(oneToOne, after, baseAxes, []);
        expect(r.yAxes.map(a => a.id)).toEqual(['a0', 'a2']); // axis 1 died with S2's leave
        expect(r.yAxes[1]).toMatchObject({ owner: 's3' });
        expect(axisOptionLabel(1, r.yAxes[1], r.binders)).toBe('2 · S3');
        expect(r.binders.map(s => s.yAxisIndex)).toEqual([0, 1, 1]); // S2 re-indexed beside S3
    });

    it('effectiveAxisName resolves owner-first — even when the newcomer stands EARLIER in the array', () => {
        const axis: EchartsAxisConfig = { id: 'a2', position: 'left', offset: 80, owner: 's3' };
        const series = [
            { id: 's1', yAxisIndex: 0, name: 'S1' },
            { id: 's2', yAxisIndex: 2, name: 'S2' }, // newcomer, array position 1
            { id: 's3', yAxisIndex: 2, name: 'S3' }, // incumbent owner, later position
        ];
        expect(effectiveAxisName(axis, 2, series)).toBe('S3');
    });

    it('the owner leaving hands the name to the first remaining binder', () => {
        // axis 1 carries s2 (owner) + s3; s2 rebinds onto axis 0 → owner becomes s3.
        const before = [
            { id: 's1', yAxisIndex: 0, name: 'S1' },
            { id: 's2', yAxisIndex: 1, name: 'S2' },
            { id: 's3', yAxisIndex: 1, name: 'S3' },
        ];
        const after = [
            { id: 's1', yAxisIndex: 0, name: 'S1' },
            { id: 's2', yAxisIndex: 0, name: 'S2' },
            { id: 's3', yAxisIndex: 1, name: 'S3' },
        ];
        const patched = ownerPatch(before, after, [
            baseAxes[0],
            { id: 'a1', position: 'right', offset: 0, owner: 's2' },
            baseAxes[2],
        ])!;
        expect(patched[1]).toMatchObject({ owner: 's3' });
        expect(effectiveAxisName(patched[1], 1, after)).toBe('S3');
    });

    it('a GAIN on an owner-less axis names the arriving binder', () => {
        const before = [{ id: 's1', yAxisIndex: 0, name: 'S1' }];
        const after = [...before, { id: 's2', yAxisIndex: 1, name: 'S2' }];
        const patched = ownerPatch(before, after, baseAxes)!;
        expect(patched[1]).toMatchObject({ owner: 's2' });
    });

    it("effectiveAxisColor paints the swatch with the owner series' colour", () => {
        const axis: EchartsAxisConfig = { id: 'a1', position: 'right', offset: 0, owner: 's3' };
        const series = [
            { id: 's2', yAxisIndex: 1, color: '#0f0' },
            { id: 's3', yAxisIndex: 1, color: '#00f' },
        ];
        expect(effectiveAxisColor(axis, 1, series, ['#f00', '#0f0', '#00f'])).toBe('#00f');
        // without an explicit colour the owner's palette SLOT paints — the OWNER's display
        // position (s3 sits at position 1 → palette[1]), not the axis index.
        expect(
            effectiveAxisColor(
                axis,
                1,
                [
                    { id: 's2', yAxisIndex: 1 },
                    { id: 's3', yAxisIndex: 1 },
                ],
                ['#f00', '#0f0', '#00f'],
            ),
        ).toBe('#0f0');
    });

    it('id-less sights (legacy lists without ids) keep the first-binder fallback', () => {
        const axis: EchartsAxisConfig = { id: 'a1', position: 'right', offset: 0 };
        expect(effectiveAxisName(axis, 1, [{ yAxisIndex: 1, name: 'X' }])).toBe('X');
    });

    it('boundJsonAxisName resolves the JSON owner (the payload name) before the first binder', () => {
        const axis: EchartsAxisConfig = { id: 'a1', position: 'right', offset: 0, owner: 'N3' };
        const overlay = { N2: { yAxisIndex: 1 }, N3: { yAxisIndex: 1, name: 'Drei' } };
        expect(boundJsonAxisName(axis, 1, ['N2', 'N3'], overlay, [])).toBe('Drei');
        // owner gone/hidden → first visible binder
        expect(boundJsonAxisName(axis, 1, ['N2', 'N3'], overlay, ['N3'])).toBe('N2');
    });
});
