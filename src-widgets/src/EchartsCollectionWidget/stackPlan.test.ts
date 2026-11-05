/**
 * Narrow suite for the stack plan (ADR-0103 K2): {@link resolveStackPlan} resolves the stack
 * membership once — the 100 % {@link stackShares} and the sum anchor's {@link stackSums} read the same
 * visible members on the same EMITTED axis. The option-level behaviour stays pinned in
 * `optionBuilder.test.ts`, `stackModeAcrossModes.test.ts` and the value-chain net.
 *
 * @module EchartsCollectionWidget/stackPlan.test
 */
import { describe, expect, it } from 'vitest';

import {
    resolveStackPlan,
    stackShares,
    stackSums,
    type StackPlan,
    type StackPlanInput,
    type StackPlanSeries,
} from './stackMode';
import type { ChartSeries } from './optionBuilders/types';

/** An axis plan where every series is active and binds emitted axis 0 unless told otherwise. */
const axesOf = (
    n: number,
    over: { active?: boolean[]; emittedOf?: number[]; bindsEmitted?: (number | undefined)[] } = {},
): StackPlanInput['axes'] => {
    const emittedOf = over.emittedOf ?? Array.from({ length: n }, () => 0);
    return {
        active: over.active ?? Array.from({ length: n }, () => true),
        emittedOf,
        bindsEmitted: over.bindsEmitted ?? emittedOf,
    };
};

const bars = (...stacks: (string | undefined)[]): StackPlanSeries[] => stacks.map(stack => ({ type: 'bar', stack }));

const names = (n: number): string[] => Array.from({ length: n }, (_v, i) => `S${i}`);

describe('resolveStackPlan', () => {
    it('only visible bars are stack members; a deselected bar keeps its stack name', () => {
        const plan = resolveStackPlan({
            series: bars(undefined, undefined, undefined),
            names: names(3),
            mode: 'stack',
            axes: axesOf(3, { active: [true, false, true] }),
        });
        expect(plan.stackOf).toEqual(['total#0', 'total#0', 'total#0']);
        expect(plan.stacks).toEqual([{ key: 'total#0', axis: 0, members: [0, 2] }]);
    });

    it('opt-out none, own groups A/B/C and non-bars', () => {
        const plan = resolveStackPlan({
            series: [...bars('none', 'A', undefined, 'B', 'A', 'C'), { type: 'line', stack: 'A' }, { type: 'scatter' }],
            names: names(8),
            mode: 'stack',
            axes: axesOf(8),
        });
        expect(plan.stackOf).toEqual([undefined, 'A#0', 'total#0', 'B#0', 'A#0', 'C#0', undefined, undefined]);
        expect(plan.stacks).toEqual([
            { key: 'A#0', axis: 0, members: [1, 4] },
            { key: 'total#0', axis: 0, members: [2] },
            { key: 'B#0', axis: 0, members: [3] },
            { key: 'C#0', axis: 0, members: [5] },
        ]);
        expect(plan.percent).toEqual(Array.from({ length: 8 }, () => false));
    });

    it('inheriting bars stack only while the mode is on; own groups stack regardless', () => {
        const plan = resolveStackPlan({
            series: bars(undefined, 'A'),
            names: names(2),
            mode: 'none',
            axes: axesOf(2),
        });
        expect(plan.stackOf).toEqual([undefined, 'A#0']);
    });

    it('a stack never spans axes: the same group on two emitted axes is two stacks', () => {
        const plan = resolveStackPlan({
            series: bars(undefined, undefined, 'A', 'A'),
            names: names(4),
            mode: 'stack',
            axes: axesOf(4, { emittedOf: [0, 1, 1, 0] }),
        });
        expect(plan.stacks.map(s => [s.key, s.axis, s.members])).toEqual([
            ['total#0', 0, [0]],
            ['total#1', 1, [1]],
            ['A#1', 1, [2]],
            ['A#0', 0, [3]],
        ]);
    });

    it('an authored raw key stays effective where the mode resolves no stack', () => {
        const plan = resolveStackPlan({
            series: [
                { type: 'bar', stack: 'none', authored: 'raw' },
                { type: 'bar', authored: 'raw' },
                { type: 'bar', stack: 'A', authored: 'raw' },
            ],
            names: names(3),
            mode: 'none',
            axes: axesOf(3),
        });
        expect(plan.stackOf).toEqual([undefined, undefined, 'A#0']);
        expect(plan.stacks).toEqual([
            { key: 'raw', axis: 0, members: [0, 1] },
            { key: 'A#0', axis: 0, members: [2] },
        ]);
    });

    it('percent mode: stacked bars carry shares on the axis they truly bind', () => {
        const plan = resolveStackPlan({
            series: [...bars(undefined, 'none', 'A'), { type: 'line' }],
            names: names(4),
            mode: 'percent',
            axes: axesOf(4, { emittedOf: [0, 0, 1, 0] }),
        });
        expect(plan.percent).toEqual([true, false, true, false]);
        expect([...plan.percentAxes]).toEqual([0, 1]);
    });

    it('percent mode: a deselected bar renders no share and lends its axis no share scale', () => {
        const plan = resolveStackPlan({
            series: bars(undefined, 'A'),
            names: names(2),
            mode: 'percent',
            axes: axesOf(2, { active: [true, false], emittedOf: [0, 1] }),
        });
        expect(plan.stackOf).toEqual(['total#0', 'A#1']);
        expect(plan.percent).toEqual([true, false]);
        expect([...plan.percentAxes]).toEqual([0]);
    });
});

const plain = (name: string, data: (number | null)[]): ChartSeries => ({ name, data });

describe('stackShares', () => {
    const plan = (series: StackPlanSeries[], active?: boolean[]): StackPlan =>
        resolveStackPlan({
            series,
            names: series.map((_s, i) => `abs${i}`),
            mode: 'percent',
            axes: axesOf(series.length, { active }),
        });

    it('normalizes each visible stack per category; gaps stay gaps, sum ≤ 0 → 0', () => {
        const out = stackShares(plan(bars(undefined, undefined, 'none')), [
            plain('a', [1, null, 0, -1]),
            plain('b', [3, 2, 0, 1]),
            plain('c', [9, 9, 9, 9]),
        ]);
        expect(out.series.map(s => s.data)).toEqual([
            [0.25, null, 0, 0],
            [0.75, 1, 0, 0],
            [9, 9, 9, 9],
        ]);
        // the absolutes ride the plan's names (the tooltip's row keys)
        expect(out.absolutes).toEqual({ abs0: [1, null, 0, -1], abs1: [3, 2, 0, 1] });
    });

    it('points keep their timestamps; a deselected member leaves the denominator', () => {
        const out = stackShares(plan(bars(undefined, undefined), [true, false]), [
            {
                name: 'a',
                data: [
                    [1, 2],
                    [2, null],
                ],
            },
            {
                name: 'b',
                data: [
                    [1, 6],
                    [2, 6],
                ],
            },
        ]);
        expect(out.series.map(s => s.data)).toEqual([
            [
                [1, 1],
                [2, null],
            ],
            [
                [1, 6],
                [2, 6],
            ],
        ]);
        expect(out.absolutes).toEqual({ abs0: [2, null] });
    });

    it('outside the percent mode the series pass unchanged and no absolutes come back', () => {
        const stackPlan = resolveStackPlan({ series: bars(undefined), names: ['a'], mode: 'stack', axes: axesOf(1) });
        expect(stackShares(stackPlan, [plain('a', [5])])).toEqual({ series: [plain('a', [5])] });
    });
});

describe('stackSums', () => {
    it('sums the visible members per category; a category nobody contributes to stays null', () => {
        const stackPlan = resolveStackPlan({
            series: bars(undefined, undefined, undefined),
            names: names(3),
            mode: 'stack',
            axes: axesOf(3, { active: [true, true, false] }),
        });
        const [only] = stackSums(stackPlan, [
            plain('a', [1, null, null, -2]),
            plain('b', [2, 3, null, 1]),
            plain('c', [100, 100, 100, 100]),
        ]);
        expect(only.stack.members).toEqual([0, 1]);
        expect(only.sums).toEqual([3, 3, null, -1]);
        expect(only.pointShaped).toBe(false);
        expect(only.ts).toEqual([null, null, null, null]);
    });

    it('point-shaped members: the first member timestamp anchors each category', () => {
        const stackPlan = resolveStackPlan({
            series: bars('A', 'A'),
            names: names(2),
            mode: 'stack',
            axes: axesOf(2),
        });
        const [only] = stackSums(stackPlan, [
            {
                name: 'a',
                data: [
                    [10, 1],
                    [20, null],
                ],
            },
            {
                name: 'b',
                data: [
                    [11, 2],
                    [21, null],
                ],
            },
        ]);
        expect(only.sums).toEqual([3, null]);
        expect(only.ts).toEqual([10, 20]);
        expect(only.pointShaped).toBe(true);
    });
});
