import { describe, expect, it } from 'vitest';

import {
    effectiveSeriesColor,
    effectiveSeriesName,
    markerHostIndex,
    resolveAxisPlan,
    type AxisPlanInput,
} from './axisResolution';
import type { EchartsAxisConfig } from '../types/field-definitions/echarts-fields';

const AXES: EchartsAxisConfig[] = [{ name: 'A0' }, { name: 'A1' }, { name: 'A2' }];

/** A plan input from (yAxisIndex, name) pairs; meta + payload names default to nothing. */
const input = (bindings: [unknown, string][], extra: Partial<Omit<AxisPlanInput, 'entries'>> = {}): AxisPlanInput => ({
    axes: AXES,
    entries: bindings.map(([yAxisIndex, name]) => ({ yAxisIndex, name })),
    meta: [],
    series: bindings.map(([, name]) => ({ name })),
    selection: undefined,
    ...extra,
});

describe('resolveAxisPlan', () => {
    it('materialises and clamps every binding to the configured axes', () => {
        const plan = resolveAxisPlan(
            input([
                [undefined, 'a'],
                [5, 'b'],
                ['1', 'c'],
                [2, 'd'],
            ]),
        );
        expect(plan.axisOf).toEqual([0, 0, 0, 2]);
    });

    it('falls back to one default axis when none is configured', () => {
        const plan = resolveAxisPlan(input([[1, 'a']], { axes: [] }));
        expect(plan.configured).toEqual([{}]);
        expect(plan.axisOf).toEqual([0]);
        expect(plan.emitted).toEqual([{}]);
    });

    it('compacts a hole in the middle and remaps the refs onto the emitted array', () => {
        const plan = resolveAxisPlan(
            input([
                [0, 'a'],
                [2, 'b'],
                [2, 'c'],
            ]),
        );
        expect(plan.emitted.map(a => a.name)).toEqual(['A0', 'A2']);
        expect([...plan.remap]).toEqual([
            [0, 0],
            [2, 1],
        ]);
        expect(plan.emittedOf).toEqual([0, 1, 1]);
        // Every axis bound → the authored geometry renders verbatim.
        expect(plan.display).toBe(plan.emitted);
    });

    it('emits only actively bound axes and re-slots the visible ones while one is dropped', () => {
        const axes: EchartsAxisConfig[] = [
            { name: 'A0', position: 'left', offset: 0 },
            { name: 'A1', position: 'right', offset: 0 },
            { name: 'A2', position: 'right', offset: 80 },
        ];
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [1, 'b'],
                    [2, 'c'],
                ],
                { axes, selection: { a: false } },
            ),
        );
        expect(plan.active).toEqual([false, true, true]);
        expect(plan.emitted.map(a => a.name)).toEqual(['A1', 'A2']);
        expect(plan.display).toEqual([
            { name: 'A1', position: 'left', offset: 0 },
            { name: 'A2', position: 'right', offset: 0 },
        ]);
    });

    it('honours „Nur in Legende" as the selection fallback', () => {
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [1, 'b'],
                ],
                { meta: [undefined, { legendOnly: true }], selection: { a: true } },
            ),
        );
        expect(plan.active).toEqual([true, false]);
        expect(plan.emitted.map(a => a.name)).toEqual(['A0']);
    });

    it('marks the all-deselected chart (series exist, none active)', () => {
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [1, 'b'],
                ],
                { selection: { a: false, b: false } },
            ),
        );
        expect(plan.allInactive).toBe(true);
        expect(plan.emitted).toEqual([{}]);
        expect(resolveAxisPlan(input([])).allInactive).toBe(false);
    });

    it('names an axis by its owner matched per meta id, even when a newcomer stands earlier', () => {
        const axes: EchartsAxisConfig[] = [{ owner: 's-b' }];
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [0, 'b'],
                ],
                { axes, meta: [{ id: 's-a' }, { id: 's-b' }] },
            ),
        );
        expect(plan.nameGivers).toEqual([1]);
    });

    it('names an axis by its owner matched per payload name when no meta id matches', () => {
        const axes: EchartsAxisConfig[] = [{ owner: 'Power' }];
        const plan = resolveAxisPlan({
            axes,
            entries: [
                { yAxisIndex: 0, name: 'Temperatur' },
                { yAxisIndex: 0, name: 'Leistung' },
            ],
            meta: [],
            series: [{ name: 'Temp' }, { name: 'Power' }],
            selection: undefined,
        });
        expect(plan.nameGivers).toEqual([1]);
    });

    it('falls back to the first binder when the owner no longer binds the axis', () => {
        const axes: EchartsAxisConfig[] = [{ owner: 's-c' }, {}];
        const plan = resolveAxisPlan(
            input(
                [
                    [1, 'a'],
                    [0, 'b'],
                    [1, 'c'],
                ],
                { axes, meta: [{ id: 's-a' }, { id: 's-b' }, { id: 's-c' }] },
            ),
        );
        expect(plan.nameGivers).toEqual([1, 0]);
    });
});

describe('markerHostIndex', () => {
    it('hangs a marking on the first ACTIVE series of its configured axis', () => {
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [1, 'b'],
                    [1, 'c'],
                ],
                { selection: { b: false } },
            ),
        );
        expect(markerHostIndex(plan, 1)).toBe(2);
        expect(markerHostIndex(plan, undefined)).toBe(0);
    });

    it('lets a marking rest on a fully deselected or unbound axis', () => {
        const plan = resolveAxisPlan(
            input(
                [
                    [0, 'a'],
                    [1, 'b'],
                ],
                { selection: { b: false } },
            ),
        );
        expect(markerHostIndex(plan, 1)).toBe(-1);
        expect(markerHostIndex(plan, 2)).toBe(-1);
        expect(markerHostIndex(plan, 7)).toBe(-1);
    });
});

describe('series identity', () => {
    it('effective colour: explicit, else the palette slot of the display position', () => {
        const palette = ['#a', '#b', '#c'];
        expect(effectiveSeriesColor({ color: '#f00' }, 4, palette)).toBe('#f00');
        expect(effectiveSeriesColor(undefined, 4, palette)).toBe('#b');
        expect(effectiveSeriesColor({}, 2, palette)).toBe('#c');
    });

    it('effective name: meta name, else series name, else Series N', () => {
        expect(effectiveSeriesName({ name: 'Meta' }, { name: 'Payload' }, 0)).toBe('Meta');
        expect(effectiveSeriesName({ name: '' }, { name: 'Payload' }, 0)).toBe('Payload');
        expect(effectiveSeriesName(undefined, { name: '' }, 2)).toBe('Series 3');
    });
});
