/**
 * The internal algorithm seam of the structure events (ADR-0099 decision 7): the 1:1 axis
 * factory (ADR-0018), the auto-balance (ADR-0067), the Achsen-Platz insert/move + slot memory
 * (ADR-0079) and the lifecycle invariants (load heal `dropUnboundAxes` + `reindexJsonOverlay`,
 * ADR-0069). Event behaviour itself is tested at the interface (`structureEvents.test`, the
 * characterisation table).
 *
 * @module EchartsCollectionWidget/editor/structureEvents.seams.test
 */
import { describe, expect, it } from 'vitest';

import { axisCardOrder, axisPlace } from './axisSight';
import {
    axisLayout,
    balanceAxes,
    dropUnboundAxes,
    insertAxisAtPlace,
    moveAxisPlace,
    reindexJsonOverlay,
    syncSlotMemory,
} from './structureEvents';
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

describe('Achsen-Platz — the per-side depth rank (ADR-0079 + addendum: place = the offset order, insert-shift, the offset hangs on the PLACE)', () => {
    it('axisPlace: rank by offset within the side, per-side totals', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'right', offset: 80 },
            { position: 'left', offset: 160 },
            { position: 'right', offset: 0 },
        ];
        expect(axisPlace(axes, 0)).toEqual({ place: 1, sideTotal: 2 });
        expect(axisPlace(axes, 1)).toEqual({ place: 2, sideTotal: 2 });
        expect(axisPlace(axes, 2)).toEqual({ place: 2, sideTotal: 2 });
        expect(axisPlace(axes, 3)).toEqual({ place: 1, sideTotal: 2 });
        expect(axisPlace(axes, 9)).toBeNull();
    });

    it('axisPlace: undefined offset counts as 0; an unstored position counts on its displayPosition side', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left' }, // left, offset ?? 0
            { offset: 80 }, // index 1 → renders RIGHT
            { position: 'right', offset: 0 },
        ];
        expect(axisPlace(axes, 0)).toEqual({ place: 1, sideTotal: 1 });
        expect(axisPlace(axes, 1)).toEqual({ place: 2, sideTotal: 2 });
        expect(axisPlace(axes, 2)).toEqual({ place: 1, sideTotal: 2 });
    });

    it('axisPlace: stable index tie-break for equal offsets', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 80 },
            { position: 'left', offset: 80 },
        ];
        expect(axisPlace(axes, 0)).toEqual({ place: 1, sideTotal: 2 });
        expect(axisPlace(axes, 1)).toEqual({ place: 2, sideTotal: 2 });
    });

    it('moveAxisPlace: one place per call, insert-shift, array order untouched (A ▼ then ▼ again)', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 80, name: 'B' },
            { position: 'left', offset: 160, name: 'C' },
        ];
        const once = moveAxisPlace(axes, 0, 1); // A: place 1 → 2
        expect(once).toBeDefined();
        expect(once!.map(a => ({ n: a.name, o: a.offset }))).toEqual([
            { n: 'A', o: 80 }, // takes place 2 — array position unchanged
            { n: 'B', o: 0 }, // B moves up
            { n: 'C', o: 160 },
        ]);
        expect(axisPlace(once!, 0)?.place).toBe(2);
        const twice = moveAxisPlace(once!, 0, 1); // A: place 2 → 3 (the 1→3 chain)
        expect(twice).toBeDefined();
        expect(twice!.map(a => ({ n: a.name, o: a.offset }))).toEqual([
            { n: 'A', o: 160 },
            { n: 'B', o: 0 },
            { n: 'C', o: 80 },
        ]);
        expect(axisPlace(twice!, 0)?.place).toBe(3);
    });

    it('moveAxisPlace: the SLOT keeps its value — swapping places exchanges the offsets (addendum)', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'Temp' },
            { position: 'left', offset: 100, name: 'Druck' },
            { position: 'left', offset: 165, name: 'Luft' },
        ];
        const out = moveAxisPlace(axes, 1, 1); // Druck ▼ to place 3
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, o: a.offset }))).toEqual([
            { n: 'Temp', o: 0 },
            { n: 'Druck', o: 165 }, // takes place 3's value — the geometry never moves
            { n: 'Luft', o: 100 }, // takes place 2's value
        ]);
    });

    it('moveAxisPlace: a hand-tuned slot value stays when an axis moves onto it; untouched axes keep their offsets', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 60, name: 'B' },
            { position: 'left', offset: 160, name: 'C' },
        ];
        const out = moveAxisPlace(axes, 1, -1); // B ▲ to place 1
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, o: a.offset }))).toEqual([
            { n: 'A', o: 60 }, // shifts to place 2 — adopts ITS value
            { n: 'B', o: 0 }, // takes place 1's value
            { n: 'C', o: 160 }, // untouched
        ]);
    });

    it('moveAxisPlace: no-op at the place boundaries and for a lone axis — undefined, no undo step', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 80 },
        ];
        expect(moveAxisPlace(axes, 0, -1)).toBeUndefined(); // place 1, ▲
        expect(moveAxisPlace(axes, 1, 1)).toBeUndefined(); // place 2 of 2, ▼
        const lone: EchartsAxisConfig[] = [{ position: 'left', offset: 0 }];
        expect(moveAxisPlace(lone, 0, 1)).toBeUndefined(); // sideTotal 1
        expect(moveAxisPlace(lone, 0, -1)).toBeUndefined();
    });

    it('moveAxisPlace: only the same side moves; the other side and non-offset fields stay identical', () => {
        const axes: EchartsAxisConfig[] = [
            { id: 'a', position: 'left', offset: 0, name: 'A', color: '#f00' },
            { id: 'r', position: 'right', offset: 0, name: 'R' },
            { id: 'b', position: 'left', offset: 80, name: 'B', splitLine: true },
        ];
        const out = moveAxisPlace(axes, 2, -1); // B ▲ over A
        expect(out![1]).toBe(axes[1]); // the right axis: referentially untouched
        expect(out![0]).toMatchObject({ id: 'a', name: 'A', color: '#f00', offset: 80 });
        expect(out![2]).toMatchObject({ id: 'b', name: 'B', splitLine: true, offset: 0 });
    });

    it('insertAxisAtPlace: the rank travels — A (place 1, left) flips right and displaces X, Y', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 80, name: 'B' },
            { position: 'right', offset: 0, name: 'X' },
            { position: 'right', offset: 80, name: 'Y' },
        ];
        const out = insertAxisAtPlace(axes, 0, 'right');
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, p: a.position, o: a.offset }))).toEqual([
            { n: 'A', p: 'right', o: 0 }, // keeps place 1 on the target side
            { n: 'B', p: 'left', o: 0 }, // source side closes
            { n: 'X', p: 'right', o: 80 }, // displaced one outward
            { n: 'Y', p: 'right', o: 160 }, // displaced one outward
        ]);
    });

    it('insertAxisAtPlace: clamps to the end when the target side is shorter', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 80, name: 'B' },
            { position: 'left', offset: 160, name: 'C' },
            { position: 'right', offset: 0, name: 'X' },
            { position: 'right', offset: 80, name: 'Y' },
        ];
        const out = insertAxisAtPlace(axes, 2, 'right'); // C, place 3, target has 2
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, p: a.position, o: a.offset }))).toEqual([
            { n: 'A', p: 'left', o: 0 },
            { n: 'B', p: 'left', o: 80 },
            { n: 'C', p: 'right', o: 160 }, // clamped: appended at place 3
            { n: 'X', p: 'right', o: 0 },
            { n: 'Y', p: 'right', o: 80 },
        ]);
    });

    it('insertAxisAtPlace: the TARGET slot value applies across the flip; new slots take the raster default (addendum)', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 100, name: 'D' }, // left place 2, hand-tuned
            { position: 'left', offset: 0, name: 'A' },
            { position: 'right', offset: 0, name: 'X' },
            { position: 'right', offset: 80, name: 'Y' },
        ];
        const out = insertAxisAtPlace(axes, 0, 'right');
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, p: a.position, o: a.offset }))).toEqual([
            { n: 'D', p: 'right', o: 80 }, // takes the target side's place-2 value — nothing travels
            { n: 'A', p: 'left', o: 0 }, // source side closes
            { n: 'X', p: 'right', o: 0 },
            { n: 'Y', p: 'right', o: 160 }, // displaced to the NEW place 3 → raster default
        ]);
    });

    it('insertAxisAtPlace: a HAND-TUNED target value applies verbatim (not the raster) — the binding discriminator', () => {
        // Right's place 2 carries a hand value 130 — a raster snap and the old travelling-deviation
        // rule would both land elsewhere; only place binding takes the slot's own value.
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 100, name: 'D' }, // left place 2
            { position: 'left', offset: 0, name: 'A' },
            { position: 'right', offset: 0, name: 'X' },
            { position: 'right', offset: 130, name: 'Y' }, // hand-tuned place 2
        ];
        const out = insertAxisAtPlace(axes, 0, 'right');
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, p: a.position, o: a.offset }))).toEqual([
            { n: 'D', p: 'right', o: 130 }, // the target slot's OWN value
            { n: 'A', p: 'left', o: 0 },
            { n: 'X', p: 'right', o: 0 },
            { n: 'Y', p: 'right', o: 160 }, // displaced to the new place 3 → raster default
        ]);
    });

    it('insertAxisAtPlace: a MIDDLE departure — the source remainder adopts the vacated earlier value (addendum)', () => {
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 100, name: 'D' }, // middle place 2, hand-tuned
            { position: 'left', offset: 165, name: 'E' },
            { position: 'right', offset: 0, name: 'X' },
        ];
        const out = insertAxisAtPlace(axes, 1, 'right'); // D flips right at place 2
        expect(out).toBeDefined();
        expect(out!.map(a => ({ n: a.name, p: a.position, o: a.offset }))).toEqual([
            { n: 'A', p: 'left', o: 0 }, // stays place 1
            { n: 'D', p: 'right', o: 80 }, // target place 2 (raster there)
            { n: 'E', p: 'left', o: 100 }, // closes onto the vacated place-2 VALUE (not its raster 80)
            { n: 'X', p: 'right', o: 0 },
        ]);
    });

    it('insertAxisAtPlace: writes the flipped position explicitly, other fields and the array order stay', () => {
        const axes: EchartsAxisConfig[] = [
            { id: 'a', position: 'left', offset: 0, name: 'A', color: '#f00' },
            { id: 'x', position: 'right', offset: 0, name: 'X', splitLine: true },
        ];
        const out = insertAxisAtPlace(axes, 0, 'right');
        expect(out).toBeDefined();
        expect(out!.map(a => a.id)).toEqual(['a', 'x']);
        expect(out![0]).toMatchObject({ id: 'a', name: 'A', color: '#f00', position: 'right', offset: 0 });
        expect(out![1]).toMatchObject({ id: 'x', name: 'X', splitLine: true, position: 'right', offset: 80 });
    });

    it('Platz-Gedächtnis (addendum): a flip onto an EMPTY side takes its remembered value (the user report)', () => {
        // Two axes left (the inner one hand-tuned to 20); the right side is vacant but REMEMBERS
        // place 1 = 5 — the flipping axis must render at 5, not the raster 0.
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 20, name: 'In' },
            { position: 'left', offset: 80, name: 'Out' },
        ];
        const out = insertAxisAtPlace(axes, 0, 'right', { right: [5] });
        expect(out).toBeDefined();
        expect(out![0]).toMatchObject({ position: 'right', offset: 5 }); // the remembered value
        expect(out![1]).toMatchObject({ position: 'left', offset: 20 }); // source side closes around
    });

    it('Platz-Gedächtnis (addendum): the remembered TAIL supplements places beyond the live occupancy', () => {
        // Right holds [0] live; its place 2 remembers 165. C (left place 3) flips right and
        // CLAMPS to place 2 → the remembered tail 165, X undisplaced. A second flip (B onto
        // place 2) displaces C onto the NEVER-seen place 3 → the raster default.
        const axes: EchartsAxisConfig[] = [
            { position: 'left', offset: 0, name: 'A' },
            { position: 'left', offset: 80, name: 'B' },
            { position: 'left', offset: 160, name: 'C' },
            { position: 'right', offset: 0, name: 'X' },
        ];
        const once = insertAxisAtPlace(axes, 2, 'right', { right: [0, 165] });
        expect(once).toBeDefined();
        expect(once![2]).toMatchObject({ position: 'right', offset: 165 }); // remembered tail
        expect(once![3]).toMatchObject({ position: 'right', offset: 0 }); // X keeps place 1
        const twice = insertAxisAtPlace(once!, 1, 'right', { right: [0, 165] });
        expect(twice).toBeDefined();
        expect(twice![1]).toMatchObject({ position: 'right', offset: 165 }); // B takes place 2
        expect(twice![2]).toMatchObject({ position: 'right', offset: 160 }); // C displaced → raster 2×80
    });

    it('syncSlotMemory: the live place values overlay the remembered — vacated places keep their last', () => {
        const before: EchartsAxisConfig[] = [
            { position: 'left', offset: 0 },
            { position: 'left', offset: 100 },
            { position: 'right', offset: 5 },
        ];
        const mem = syncSlotMemory(before, undefined);
        expect(mem).toEqual({ left: [0, 100], right: [5] });
        // The middle axis leaves (a delete): its place KEEPS 100 in the memory — the next
        // arrival behind the live end finds it instead of the raster.
        const after: EchartsAxisConfig[] = [before[0], before[2]];
        const next = syncSlotMemory(after, mem);
        expect(next).toEqual({ left: [0, 100], right: [5] });
        expect(syncSlotMemory(after, next)).toBe(next); // reference-stable when nothing moves
        // An occupied place UPDATES its value (the Versatz field): place 1 left → 12.
        const tuned: EchartsAxisConfig[] = [{ position: 'left', offset: 12 }, before[2]];
        expect(syncSlotMemory(tuned, next)).toEqual({ left: [12, 100], right: [5] });
        // Nothing live and nothing remembered → undefined: a no-op yAxes patch on a fresh
        // state must not materialize an empty object (it would flip `hasChanges`).
        expect(syncSlotMemory([], undefined)).toBeUndefined();
    });

    it('balanceAxes with Platz-Gedächtnis: slot offsets come from the remembered values, else the raster', () => {
        const yAxes: EchartsAxisConfig[] = [{}, {}, {}];
        const series = [{ yAxisIndex: 0 }, { yAxisIndex: 1 }, { yAxisIndex: 2 }];
        // Interleaving: slot 0 left/0, slot 1 right/0, slot 2 left level 1 — the memory hands
        // right place 1 the remembered 7 and left place 2 the remembered 100.
        const out = balanceAxes(yAxes, series, { left: [0, 100], right: [7] });
        expect(out.map(a => [a.position, a.offset])).toEqual([
            ['left', 0],
            ['right', 7], // remembered, not the raster 0
            ['left', 100], // remembered, not the raster 80
        ]);
        // Without memory: the plain raster (the pre-addendum behaviour).
        expect(balanceAxes(yAxes, series).map(a => [a.position, a.offset])).toEqual([
            ['left', 0],
            ['right', 0],
            ['left', 80],
        ]);
    });

    it('axisCardOrder: the card list mirrors the chart — complete left side (place 1 first), then right (addendum 3)', () => {
        // Array order scrambled against the draw order; an unstored position counts on its
        // displayPosition side, an undefined offset as place 1 materialised by the sort.
        const axes: EchartsAxisConfig[] = [
            { position: 'right', offset: 80, name: 'R2' },
            { position: 'left', offset: 100, name: 'L2' },
            { position: 'right', offset: 0, name: 'R1' },
            { position: 'left', offset: 0, name: 'L1' },
        ];
        expect(axisCardOrder(axes).map(i => axes[i].name)).toEqual(['L1', 'L2', 'R1', 'R2']);
        // A lone side stays contiguous (one group, no phantom ordering); empty input is empty.
        const lone: EchartsAxisConfig[] = [
            { position: 'right', offset: 80 },
            { position: 'right', offset: 0 },
        ];
        expect(axisCardOrder(lone).map(i => lone[i].offset)).toEqual([0, 80]);
        expect(axisCardOrder([])).toEqual([]);
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
