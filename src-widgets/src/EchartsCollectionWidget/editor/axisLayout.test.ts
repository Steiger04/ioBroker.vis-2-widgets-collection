/**
 * axisLayout helpers — stable axis identity + 1:1 layout (ADR-0018).
 *
 * @module EchartsCollectionWidget/editor/axisLayout.test
 */
import { describe, expect, it } from 'vitest';

import {
    alignTicksDisabledByOverride,
    axisLayout,
    axisOptionLabel,
    axisPosition,
    balanceAxes,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    displayAxisIndex,
    effectiveAxisColor,
    emittedAxisRanks,
    isRealSideFlip,
    jsonBoundAxisDeletePatch,
    jsonShowPatch,
    effectiveAxisName,
    isOneToOneBound,
    reconcileJsonAxes,
    jsonBindingView,
    remapMarkAxisIndices,
    restingAxisName,
    restingBalance,
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
        // A bound-but-unnamed series does not resurrect the resting name either — the Series-N
        // fallback keys by SERIES position (position 0 here, even though it binds axis 1): the
        // exact label the builder renders and the card title shows (F11).
        expect(effectiveAxisName({ restingName: 'Power' }, 1, [{ yAxisIndex: 1 }])).toBe('Series 1');
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

describe('implicit axis-0 binding — the materialised display sight (Q7)', () => {
    it('a legacy series without a stored index inherits axis 0 — the editor shows what the chart renders', () => {
        // Pre-ADR-0018 blobs / hand edits carry series without `yAxisIndex`; the builder binds
        // them to axis 0 (`?? 0`) and inherits name + colour there. The display helpers read the
        // SAME materialised sight (Q7): the Axis card and dropdown show the series name/colour,
        // not „Achse 1" + a grey swatch. (Pre-Q7 characterization: '1' / 'Alt' / undefined.)
        expect(effectiveAxisName({}, 0, [{ name: 'PV' }])).toBe('PV');
        expect(effectiveAxisName({ restingName: 'Alt' }, 0, [{ name: 'PV' }])).toBe('PV'); // bound ignores it
        expect(effectiveAxisColor(0, [{ color: '#f00' }], ['#aaa'])).toBe('#f00');
        expect(restingAxisName({}, 0, [{ name: 'PV' }])).toBe('PV');
    });

    it('only axis 0 gains binders — an implicit binder never matches a higher axis', () => {
        expect(effectiveAxisName({}, 1, [{ name: 'PV' }])).toBe('Series 2');
        expect(effectiveAxisColor(1, [{ color: '#f00' }], ['#aaa'])).toBeUndefined();
    });

    it('re-binding an implicit binder AWAY now transitions axis 0 — the resting snapshot fires', () => {
        // Pre-Q7 the resting diff never saw the implicit binder: axis 0 never transitioned, no
        // snapshot. Materialised, the leave is visible and the axis keeps its displayed name.
        const next = restingNamePatch([{ name: 'PV' }], [{ yAxisIndex: 1, name: 'PV' }], [{ id: 'a0' }]);
        expect(next?.[0]).toMatchObject({ restingName: 'PV' });
    });

    it('the JSON sights stay STRICT — a cleared overlay entry never binds axis 0 (characterization)', () => {
        expect(boundJsonView(['A'], { A: { yAxisIndex: undefined } }, [])).toEqual([]);
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

    it('a payload tick re-arranges a hand-flipped layout back to the standard interleaving (ADR-0067)', () => {
        // The exact JSON-mode cycle, ADR-0067 semantics: fresh payload → 1:1 layout → the user
        // flips axes by hand (a manual position is fine-justure ONLY between structural events —
        // setAxis leaves it, see the AxesZoomSection field-edit rule). The next payload tick
        // re-fires the reconcile — a structural event — and the balance snaps every BOUND axis
        // back to the standard interleaving; the flip is gone, exactly like a hand-tuned offset.
        // 1. Fresh payload → default 1:1 [A:left/0, B:right/0, C:left/80].
        const r0 = reconcileJsonAxes(['A', 'B', 'C'], {}, []);
        // 2. User flips B's and C's axes (index 1, 2) to the left — all three on the left.
        const handFlipped = r0.yAxes.map((a, i) => (i === 1 || i === 2 ? { ...a, position: 'left' as const } : a));
        // 3. Payload tick, same names → reconcile re-runs: bound axes re-arrange to standard.
        const r1 = reconcileJsonAxes(['A', 'B', 'C'], r0.overlay, handFlipped);
        expect(r1.yAxes.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'right', o: 0 },
            { p: 'left', o: 80 },
        ]);
    });

    it('closes holes densely — a fresh appended axis takes the next balance slot, not the append index', () => {
        // A hides B's payload series → axis 1 rests unbound at right/0. A NEW payload name
        // arrives: the strict 1:1 appends a fresh axis at index 2 (axisLayout(2) = left/80), but
        // the reconcile's balance runs over the BOUND set {0, 2} — the new axis lands in balance
        // slot 1 (right/0), dense behind axis 0; the unbound axis keeps its stored geometry.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: undefined } };
        const r = reconcileJsonAxes(['A', 'NEW'], overlay, [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0 },
        ]);
        expect(r.overlay.NEW?.yAxisIndex).toBe(2); // strict 1:1 — appended, no unbound claim
        expect(r.yAxes[2]).toMatchObject({ position: 'right', offset: 0 }); // balance slot 1
        expect(r.yAxes[1]).toMatchObject({ position: 'right', offset: 0 }); // unbound keeps its spot
    });

    it('a cleared JSON entry does NOT bind axis 0 (strict JSON binding semantics)', () => {
        // JSON binding is strict: an overlay entry with yAxisIndex undefined is UNBOUND — unlike a
        // history/live series without an index, which implicitly binds axis 0. Axis 0 here rests
        // unbound (right/160) and must not be re-arranged by the reconcile's balance.
        const overlay = { A: { yAxisIndex: 1 }, B: { yAxisIndex: undefined } };
        const r = reconcileJsonAxes(['A'], overlay, [
            { id: 'a0', position: 'right', offset: 160 },
            { id: 'a1', position: 'right', offset: 0 },
        ]);
        expect(r.yAxes[0]).toMatchObject({ position: 'right', offset: 160 }); // untouched
        expect(r.yAxes[1]).toMatchObject({ position: 'left', offset: 0 }); // A's balance slot 0
    });
});

describe('reconcileJsonAxes — payload-vanish resting snapshot (ADR-0066 addendum)', () => {
    it('a name vanishing from the payload snapshots its axis name — no collapse to „Achse N"', () => {
        // B was bound to axis 1; the payload ticks and B is GONE. Every other leave transition
        // (rebind / series-delete / hide / JSON axis-delete) snapshots the displayed name — the
        // vanish must too (ADR-0066: snapshot on EVERY leave). The overlay-authored name wins,
        // else the payload name.
        const r = reconcileJsonAxes(['A'], { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Power' } }, [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0 },
        ]);
        expect(r.overlay.B?.yAxisIndex).toBeUndefined(); // cleared — B anchors nothing
        expect(r.yAxes[1]).toMatchObject({ restingName: 'Power' }); // overlay name wins
    });

    it('falls back to the payload name when the overlay carries none', () => {
        const r = reconcileJsonAxes(['A'], { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } }, [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0 },
        ]);
        expect(r.yAxes[1]).toMatchObject({ restingName: 'B' }); // payload name
    });

    it('is idempotent — a second reconcile over its own output re-snapshots nothing', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Power' } };
        const axes = [
            { id: 'a0', position: 'left' as const, offset: 0 },
            { id: 'a1', position: 'right' as const, offset: 0 },
        ];
        const r1 = reconcileJsonAxes(['A'], overlay, axes);
        const r2 = reconcileJsonAxes(['A'], r1.overlay, r1.yAxes);
        expect(r2.yAxes).toEqual(r1.yAxes); // stable — no second patch, no history entry
    });

    it('a HIDDEN name is outside the before-sight — its leave was snapshotted at hide time', () => {
        // kw is freshly hidden (hideJson already snapshotted "kw"; jsonHidden carries it, the
        // overlay index is cleared HERE as bookkeeping only). Hum VANISHED from the payload.
        // The reconcile snapshots Hum's axis and leaves kw's resting name untouched. kw's overlay
        // name deliberately DIFFERS from its hide-time snapshot — a re-snapshot would overwrite
        // 'kw' with 'Kilowatt', so the assertion discriminates (the hidden filter really excludes).
        const r = reconcileJsonAxes(
            ['temp'],
            { temp: { yAxisIndex: 0 }, kw: { yAxisIndex: 1, name: 'Kilowatt' }, Hum: { yAxisIndex: 2 } },
            [
                { id: 'a0', position: 'left', offset: 0 },
                { id: 'a1', position: 'right', offset: 0, restingName: 'kw' }, // from hideJson
                { id: 'a2', position: 'left', offset: 80 },
            ],
            ['kw'],
        );
        expect(r.overlay.kw?.yAxisIndex).toBeUndefined(); // cleared (bookkeeping)
        expect(r.yAxes[1]).toMatchObject({ restingName: 'kw' }); // untouched — NOT 'Kilowatt'
        expect(r.yAxes[2]).toMatchObject({ restingName: 'Hum' }); // the vanish snapshots
    });

    it('fresh payload name + vanish of the axis-0 binder in ONE reconcile: the snapshot takes the DISPLAYED name (Q7 seam)', () => {
        // 'Neu' has no overlay entry yet (undefined index) and never rendered anywhere; 'Alte'
        // bound axis 0 and vanished. The before-sight is the STRICT JSON view (defined indices
        // only) — an unfiltered sight would materialise 'Neu' onto axis 0 and let it STEAL the
        // snapshot (visible-first order). The resting diff may materialise (Q7, history/live),
        // so JSON callers MUST hand it defined-only entries.
        const r = reconcileJsonAxes(['Neu'], { Gone: { yAxisIndex: 0, name: 'Alte' } }, [
            { id: 'a0', position: 'left', offset: 0 },
        ]);
        expect(r.overlay.Neu?.yAxisIndex).toBe(1); // fresh axis appended, never axis 0
        expect(r.overlay.Gone?.yAxisIndex).toBeUndefined();
        expect(r.yAxes[0]).toMatchObject({ restingName: 'Alte' }); // the displayed name — NOT 'Neu'
    });
});

describe('jsonBoundAxisDeletePatch — JSON axis-delete hides ALL bound names (Q3, ADR-0066 addendum)', () => {
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
    ];

    it('a SHARED axis (1:n): every visible binder goes into jsonHidden, the axis rests with the FIRST binder name', () => {
        // B and C share axis 1 (1:n is first-class). Deleting axis 1 must hide BOTH — hiding just
        // the first would leave the axis bound and rendered: the button would not do what it says.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' }, C: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B', 'C'], overlay, [], axes, 1);
        expect(patch?.jsonHidden).toEqual(['B', 'C']);
        expect(patch?.yAxes).toHaveLength(2); // the axis RESTS — not dropped (ADR-0066)
        expect(patch?.yAxes[1]).toMatchObject({ restingName: 'Bezug' }); // first binder, overlay name
        expect(patch?.yAxes[0]).toMatchObject({ position: 'left', offset: 0 }); // balance over {0}
    });

    it('a single binder: unchanged behaviour — exactly that name hides (regression)', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 1);
        expect(patch?.jsonHidden).toEqual(['B']);
        expect(patch?.yAxes[1]).toMatchObject({ restingName: 'B' });
    });

    it('no VISIBLE binder (unbound axis, or only already-hidden binders) → null: the caller takes the config-delete path', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        expect(jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 2)).toBeNull(); // unbound axis
        expect(jsonBoundAxisDeletePatch(['A', 'B'], overlay, ['B'], axes, 1)).toBeNull(); // binder hidden
    });

    it('one patch → one undo step: jsonHidden AND yAxes travel together', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonBoundAxisDeletePatch(['A', 'B'], overlay, [], axes, 1);
        expect(patch && Object.keys(patch).sort()).toEqual(['jsonHidden', 'yAxes']);
    });
});

describe("isRealSideFlip — the flip detector with the select's index-aware default (Q4)", () => {
    it('re-selecting the DISPLAYED value on an axis without a stored position is NOT a flip', () => {
        // Axis 1 has no stored position (a hand-edit blob): the card displays the index-aware
        // default 'right'. Re-selecting 'right' must not count as a flip — the index-blind
        // `?? 'left'` default mis-read it as one and re-rastered every bound axis' hand-tuned
        // offset through the balance (ADR-0067).
        expect(
            isRealSideFlip(
                [
                    { id: 'a0', position: 'left', offset: 0 },
                    { id: 'a1', offset: 42 },
                ],
                1,
                {
                    position: 'right',
                },
            ),
        ).toBe(false); // offsets survive — no balance run
    });

    it('a REAL flip (stored or default position differs) is a flip', () => {
        const axes = [
            { id: 'a0', position: 'left' as const, offset: 0 },
            { id: 'a1', offset: 42 },
            { id: 'a2', position: 'left' as const, offset: 80 },
        ];
        expect(isRealSideFlip(axes, 1, { position: 'left' })).toBe(true); // displayed 'right' → left
        expect(isRealSideFlip(axes, 2, { position: 'right' })).toBe(true); // stored left → right
        expect(isRealSideFlip(axes, 0, { position: 'right' })).toBe(true); // default left → right
    });

    it('a real flip of an UNBOUND axis still fires (its geometry sticks — the balance never touches it)', () => {
        // The detector does not care about boundness: the unbound flip keeps triggering the
        // balance path exactly as before; the balance leaves the unbound axis alone (ADR-0067).
        expect(isRealSideFlip([{ id: 'a1', offset: 42 }], 0, { position: 'right' })).toBe(true);
    });

    it('a patch without a position key is never a flip', () => {
        expect(isRealSideFlip([{ id: 'a0', position: 'left', offset: 0 }], 0, { offset: 120 })).toBe(false);
        expect(isRealSideFlip([{ id: 'a0', position: 'left', offset: 0 }], 0, {})).toBe(false);
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

    it('an unbound axis 0 makes axis 1 the EMITTED reference (rank 0) — the switch must hide there', () => {
        // Configured axis 0 rests unbound; the builder emits axis 1 first — echarts aligns
        // followers against IT, so axis 1 is the reference and carries no alignTicks switch.
        expect([...emittedAxisRanks(new Set([1]))]).toEqual([[1, 0]]);
    });

    it('a hole in the middle compacts the ranks: axis 2 with axis 1 unbound is emitted index 1', () => {
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
            { yAxisIndex: 1, name: 'A' },
            { yAxisIndex: 0, name: 'B' },
        ]);
    });

    it('hidden names never reach the sight', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        expect(boundJsonView(['A', 'B'], overlay, ['B'])).toEqual([{ yAxisIndex: 0, name: 'A' }]);
    });
});

describe('restingBalance — the series-leave→re-arrange seam (ADR-0066 + 0067)', () => {
    it('snapshots the vacated axis against BEFORE, then balances the AFTER bound set', () => {
        // 3 axes 1:1; the series on axis 1 (named "Power") leaves → axis 1 rests unbound with the
        // resting name "Power" (kept geometry), and the series of axis 2 re-arranges into slot 1.
        const yAxes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0 },
            { id: 'a2', position: 'left', offset: 80 },
        ];
        const out = restingBalance(
            [
                { yAxisIndex: 0, name: 'Temp' },
                { yAxisIndex: 1, name: 'Power' },
                { yAxisIndex: 2, name: 'Hum' },
            ],
            // `after` feeds the balance only — the resting snapshot reads BEFORE, so no names here.
            [{ yAxisIndex: 0 }, { yAxisIndex: 2 }],
            yAxes,
        );
        expect(out[0]).toMatchObject({ position: 'left', offset: 0 }); // balance slot 0
        expect(out[1]).toMatchObject({ restingName: 'Power', position: 'right', offset: 0 }); // unbound
        expect(out[2]).toMatchObject({ position: 'right', offset: 0 }); // balance slot 1 — hole closed
    });

    it('a GAIN clears a stale restingName — the showJson wiring (ADR-0066 addendum)', () => {
        // showJson diffs the CURRENT hidden sight against the shown one (symmetric to hideJson
        // and rebindJsonAxis): an axis that wins its binder back drops the stale restingName —
        // bound axes inherit live (ADR-0018), the next leave re-snapshots. Pure data hygiene:
        // bound cards never display the resting name anyway.
        const yAxes: EchartsAxisConfig[] = [
            { id: 'a0', position: 'left', offset: 0 },
            { id: 'a1', position: 'right', offset: 0, restingName: 'kw' },
        ];
        const out = restingBalance([{ yAxisIndex: 0 }], [{ yAxisIndex: 0 }, { yAxisIndex: 1 }], yAxes);
        expect(out[1].restingName).toBeUndefined(); // cleared on the gain
        expect(out[1]).toMatchObject({ position: 'right', offset: 0 }); // balance slot 1
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

describe('axisOptionLabel — the binding-dropdown item carries the axis number (B1)', () => {
    const axes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0 },
    ];

    it('prefixes the 1-based axis number — the clicked item stays identifiable after a rebind', () => {
        // B1: N1 rebinds onto axis 1 → axis 1 inherits "N1" (first binder, live) and axis 0
        // keeps "N1" as its resting name. Without the number both dropdown items read "N1"
        // and the selection is unreadable; with it they are "1 · N1" / "2 · N1".
        const rebound = [
            { yAxisIndex: 1, name: 'N1' },
            { yAxisIndex: 1, name: 'N2' },
        ];
        expect(axisOptionLabel(0, { ...axes[0], restingName: 'N1' }, rebound)).toBe('1 · N1');
        expect(axisOptionLabel(1, axes[1], rebound)).toBe('2 · N1');
    });

    it('an explicit axis name stays dominant', () => {
        expect(axisOptionLabel(0, { ...axes[0], name: 'kW' }, [])).toBe('1 · kW');
    });

    it('the unnamed fallback inherits the Series-N label — prefixed like every other name', () => {
        expect(axisOptionLabel(1, axes[1], [{ yAxisIndex: 0, name: '' }])).toBe('2 · Series 2');
    });
});

describe('boundJsonAxisIndices / boundJsonAxisName — the STRICT JSON card sight (B2)', () => {
    it('a hidden entry whose index awaits the reconcile clear does NOT bind — card and dropdown agree', () => {
        // hideJson leaves the overlay index standing (the reconcile clears it on the next
        // payload change). Reading Object.values — the old Axis-card sight — counted it as a
        // binder: badge off, position locked, title from the hidden name, while the Series
        // dropdown suffixed the same axis „(unbenutzt)".
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' } };
        expect(boundJsonAxisIndices(['A', 'B'], overlay, ['B'])).toEqual(new Set([0]));
    });

    it('boundJsonAxisName: the title comes from the first VISIBLE binder only', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1, name: 'Bezug' } };
        expect(boundJsonAxisName(1, ['A', 'B'], overlay, ['B'])).toBeUndefined(); // hidden binder titles nothing
        expect(boundJsonAxisName(1, ['A', 'B'], overlay, [])).toBe('Bezug'); // authored name wins
        expect(boundJsonAxisName(0, ['A'], { A: { yAxisIndex: 0 } }, [])).toBe('A'); // payload name fallback
        expect(boundJsonAxisName(2, ['A'], { A: { yAxisIndex: 0 } }, [])).toBeUndefined(); // unbound
    });

    it('a hidden binder and a visible binder SHARING one axis: the axis stays bound, titled by the visible one', () => {
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 0, name: 'Bezug' } };
        expect(boundJsonAxisIndices(['A', 'B'], overlay, ['A'])).toEqual(new Set([0]));
        expect(boundJsonAxisName(0, ['A', 'B'], overlay, ['A'])).toBe('Bezug');
    });
});

describe('jsonShowPatch — un-hide + reconcile in ONE step (B3)', () => {
    const baseAxes: EchartsAxisConfig[] = [
        { id: 'a0', position: 'left', offset: 0 },
        { id: 'a1', position: 'right', offset: 0, restingName: 'B' }, // from hideJson
    ];

    it('sticky case (no interim reconcile): the kept index survives, the gained axis clears its restingName', () => {
        // hide → show without a payload change in between: B still carries yAxisIndex 1 —
        // no fresh axis (count unchanged), and axis 1's hide-time restingName drops (gain).
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } };
        const patch = jsonShowPatch(['A', 'B'], overlay, baseAxes, ['B'], 'B');
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(1); // sticky
        expect(patch.yAxes).toHaveLength(2); // no fresh axis
        expect(patch.yAxes[1].restingName).toBeUndefined(); // gain-clear
    });

    it('cleared case (interim reconcile): the shown name gets a FRESH axis immediately', () => {
        // hide → payload change (the reconcile cleared B's index; its axis rests) → show: B
        // must not linger index-less (dropdown „Achse 1", editor unbound, builder axis 0 —
        // three truths) — the reconcile appends a fresh axis NOW; the old one keeps its name.
        const overlay = { A: { yAxisIndex: 0 }, B: { yAxisIndex: undefined } };
        const patch = jsonShowPatch(['A', 'B'], overlay, baseAxes, ['B'], 'B');
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonSeriesStyle.B?.yAxisIndex).toBe(2); // fresh axis appended — not the resting 1
        expect(patch.yAxes).toHaveLength(3);
        expect(patch.yAxes[1]).toMatchObject({ restingName: 'B' }); // the old axis rests on
    });

    it('a second run over its own output changes nothing (no fresh axis, no re-snapshot, no churn)', () => {
        // Ticket 03's idempotence requirement, pinned at the helper seam: the editor-side
        // no-op guarantee rests on this — repeat inputs must not append axes or touch names.
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
