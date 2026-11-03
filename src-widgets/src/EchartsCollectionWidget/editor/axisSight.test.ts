/**
 * axisSight — the read side of the axis–series coupling (ADR-0099 decision 6): display names and
 * colours (owner-first, ADR-0068), the binding views, emitted ranks, option labels, the 1:1
 * geometry. Moved from the dissolved `axisLayout` suite; the write-side tests the structure-event
 * table covers are gone (replace, don't layer).
 *
 * @module EchartsCollectionWidget/editor/axisSight.test
 */
import { describe, expect, it } from 'vitest';

import {
    alignTicksDisabledByOverride,
    axisOptionLabel,
    axisPosition,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    displayAxisIndex,
    effectiveAxisColor,
    effectiveAxisName,
    emittedAxisRanks,
    jsonBindingView,
} from './axisSight';
import { dropUnboundAxes } from './structureEvents';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

describe('binding predicates + the 1:1 geometry', () => {
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

describe('effectiveAxisName — the tabellarisch yPath default (ADR-0075 family seam)', () => {
    // The tabellarisch family is POSITIONAL (state.series + yPath, the Verlauf twin) and its
    // series carry NO stored name by default — the display default is the column's last
    // segment (tableSeriesName). The axis name resolution must read the same default, so
    // dropdowns/cards never degrade to "Series N" on a fully mapped series.
    const tableSeries = [
        { yAxisIndex: 0, yPath: 'meta.room' },
        { yAxisIndex: 1, yPath: 'values.humidity' },
    ];

    it("an unnamed table series titles the axis with the yPath column's LAST segment", () => {
        expect(effectiveAxisName({}, 0, tableSeries)).toBe('room');
        expect(effectiveAxisName({}, 1, tableSeries)).toBe('humidity');
    });

    it('an authored series name still wins over the column default', () => {
        expect(effectiveAxisName({}, 0, [{ yAxisIndex: 0, yPath: 'meta.room', name: 'PV' }])).toBe('PV');
    });

    it('a whitespace-only name falls through to the column default', () => {
        expect(effectiveAxisName({}, 0, [{ yAxisIndex: 0, yPath: 'temp', name: '   ' }])).toBe('temp');
    });

    it('history sights (no yPath, no name) keep the Series-N fallback', () => {
        expect(effectiveAxisName({}, 0, [{ yAxisIndex: 0 }])).toBe('Series 1');
    });

    it('axisOptionLabel prefixes the index — the Series dropdown reads the same column name', () => {
        expect(axisOptionLabel(1, {}, tableSeries)).toBe('2 · humidity');
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

    it("uses the bound series' palette slot by its DISPLAY position (history 1:1)", () => {
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
    it('effectiveAxisName resolves owner-first — even when the newcomer stands EARLIER in the array', () => {
        const axis: EchartsAxisConfig = { id: 'a2', position: 'left', offset: 80, owner: 's3' };
        const series = [
            { id: 's1', yAxisIndex: 0, name: 'S1' },
            { id: 's2', yAxisIndex: 2, name: 'S2' }, // newcomer, array position 1
            { id: 's3', yAxisIndex: 2, name: 'S3' }, // incumbent owner, later position
        ];
        expect(effectiveAxisName(axis, 2, series)).toBe('S3');
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
