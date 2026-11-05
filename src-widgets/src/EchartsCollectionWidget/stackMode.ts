/**
 * The Balken-Stapelmodus resolution core (ADR-0084) — the ONE three-valued bar-stack resolver
 * and the ONE stack plan ({@link resolveStackPlan}, ADR-0103 K2) shared by the cartesian builder
 * (stack names, percent surfaces, sum anchors) and the value chain's final stage (the 100 %
 * shares), so the two can never drift apart: both read the same visible members on the same
 * EMITTED axis.
 *
 * @module EchartsCollectionWidget/stackMode
 * @remarks
 * Decision 2 (per-series three-valued, the ADR-0072 Erben-Override idiom): `'none'` = opted out
 * of every stack, `'A'|'B'|'C'` = own group (mode-independent), absent/`undefined` = ERBT the
 * chart-level mode. The legacy `''` sentinel and foreign values read as inherit — the editor
 * load heals them away, the builder tolerates them so an unopened widget renders identically
 * (mode default none ⇒ erben ≙ kein Stapel). Decision 3 (implicit axis coupling): the effective
 * name is always `${group || 'total'}#${axisIndex}` — adapter `total${yAxisIndex}` pattern; a
 * stack can never span foreign scales, and the name is builder-internal, never persisted.
 * Lines do NOT inherit (hand-set groups only, plain names — unchanged pre-0084 semantics);
 * scatter never stacks.
 */
import type {
    EchartsCartesianType,
    EchartsSeriesMeta,
    EchartsStackMode,
} from '../types/field-definitions/echarts-fields';
import type { AxisPlan } from './axisResolution';
import type { ChartSeries } from './optionBuilders/types';
import type { SeriesPoint } from './historyLogic';
import { parseRawOverride } from './utils/mergeOption';

/** Tolerant stackMode read (blob/runtime side): only the two real modes pass, all else = none. */
export const normalizeStackMode = (raw: unknown): EchartsStackMode =>
    raw === 'stack' || raw === 'percent' ? raw : 'none';

/**
 * The effective cartesian type of one series (the builder's own ADR-0008 r3 resolution): an
 * explicit bar/scatter/line override wins, else the chart's default. Shared by the builder,
 * the pipeline's percent step and the cartesian validation so the three cannot drift.
 */
export const effectiveCartesianType = (type: unknown, defaultType: EchartsCartesianType): EchartsCartesianType =>
    type === 'bar' || type === 'scatter' ? type : type === 'line' ? 'line' : defaultType;

/**
 * The VALUE slot of one datum — `[ts, v]` points and plain buckets alike; `null` = no value
 * (a gap never counts as 0). The sum anchor and the percent normalizer share it.
 */
export const datumValueSlot = (d: unknown): number | null => {
    if (Array.isArray(d)) {
        return typeof d[1] === 'number' && Number.isFinite(d[1]) ? d[1] : null;
    }
    return typeof d === 'number' && Number.isFinite(d) ? d : null;
};

/**
 * The effective bar stack NAME for one series — `undefined` = no stack (opted out, or inheriting
 * while the mode is off). The caller passes the series' AXIS index; the chart's stacks key on the
 * EMITTED index ({@link resolveStackPlan}), the editor's validation on its own index sight.
 */
export const effectiveStackName = (
    stack: string | undefined,
    mode: EchartsStackMode,
    axisIndex: number,
): string | undefined => {
    if (stack === 'none') {
        return undefined;
    }
    if (stack === 'A' || stack === 'B' || stack === 'C') {
        return `${stack}#${axisIndex}`;
    }
    // '' / undefined / foreign (unhealed body blobs) — the inherit branch.
    return mode === 'none' ? undefined : `total#${axisIndex}`;
};

/**
 * Does a series render SHARES (0–1, displayed as 0–100 %)? The pipeline normalizes exactly
 * these (ADR-0084 decision 4): a bar under stackMode 'percent' that resolves a stack (inherits
 * the mode or names a group — not opted out). Lines and scatter never stack as percent. Shared
 * by the builder and the editor so a value in display units (the Farbskala bounds, ADR-0101
 * ticket 08) converts for exactly the series the pipeline normalized.
 *
 * @param stack - The series' three-valued stack config.
 * @param type - The series' EFFECTIVE cartesian type ({@link effectiveCartesianType}).
 * @param mode - The chart-level Stapelmodus.
 */
export const isPercentStackedBar = (
    stack: string | undefined,
    type: EchartsCartesianType,
    mode: EchartsStackMode,
): boolean => mode === 'percent' && type === 'bar' && effectiveStackName(stack, mode, 0) !== undefined;

/**
 * A LINE's hand-set stack group (ADR-0084 decision 2): lines never inherit the mode — the plain
 * group name keeps the pre-0084 semantics, no axis coupling. Bars resolve through the stack plan,
 * scatter never stacks. `undefined` = the series entry carries no GUI stack key.
 */
export const lineStackGroup = (stack: string | undefined, type: EchartsCartesianType): string | undefined =>
    stack && stack !== 'none' && type === 'line' ? stack : undefined;

/** One series as the stack plan reads it ({@link stackPlanSeriesOf}). */
export interface StackPlanSeries {
    /** The series' EFFECTIVE cartesian type ({@link effectiveCartesianType}). */
    type: unknown;
    /** The series' three-valued stack config (`meta.stack`). */
    stack?: string;
    /**
     * The stack key the folded entry carries before the plan stamps it (a line's hand-set group,
     * else a raw-authored `stack`) — it stays effective where the mode resolves no stack (the raw
     * escape hatch keeps its key). A percent member only where it names a mode-resolved stack.
     */
    authored?: unknown;
}

/**
 * The stack-relevant fields of one cartesian series AFTER its raw fold (ADR-0015) — the ONE read
 * the builder and the value chain's percent stage feed {@link resolveStackPlan}, so the 100 %
 * denominators and the stacks echarts draws come from the same fields. The GUI entry always
 * carries `type`, `yAxisIndex` and `name`, so a raw override of these never wins the fold; only
 * a raw `stack` is a free key — it rides as `authored` behind a line's hand-set group, exactly
 * the key the folded entry carries.
 */
export const stackPlanSeriesOf = (
    meta: Pick<EchartsSeriesMeta, 'type' | 'stack' | 'raw'> | undefined,
    defaultType: EchartsCartesianType,
): StackPlanSeries => {
    const type = effectiveCartesianType(meta?.type, defaultType);
    return {
        type,
        stack: meta?.stack,
        authored: lineStackGroup(meta?.stack, type) ?? parseRawOverride(meta?.raw).stack,
    };
};

/** The input of {@link resolveStackPlan}. */
export interface StackPlanInput {
    /** One entry per series, in series order. */
    series: readonly StackPlanSeries[];
    /** Per series: the name its percent absolutes are keyed by (the tooltip's row lookup). */
    names: readonly string[];
    /** The normalized chart-level Stapelmodus. */
    mode: EchartsStackMode;
    /** The axis plan (ADR-0103 K3): the active flag and the emitted axis per series. */
    axes: Pick<AxisPlan, 'active' | 'emittedOf' | 'bindsEmitted'>;
}

/** One resolved stack: its key, its emitted axis and its VISIBLE members. */
export interface ResolvedStack {
    /** The stack key echarts stacks by — `${group}#${emittedAxis}`, or an authored raw key. */
    key: string;
    /** The emitted axis the stack sits on (its first member's). */
    axis: number;
    /** The ACTIVE member series indices, in series order (deselected members leave the stack). */
    members: readonly number[];
}

/** The resolved stack plan of one cartesian build. */
export interface StackPlan {
    mode: EchartsStackMode;
    /** Per series: the share-absolute key ({@link StackPlanInput.names}). */
    names: readonly string[];
    /**
     * Per series: the mode-resolved stack name the builder stamps on a BAR (deselected bars too —
     * a re-selected bar must land in its stack); `undefined` = no mode-resolved stack.
     */
    stackOf: readonly (string | undefined)[];
    /**
     * Per series: renders SHARES (ADR-0084 decision 4) — a VISIBLE member of a 100 % stack (a
     * mode-resolved stack key, also where a raw-authored key joins it); every percent surface
     * formats it as percent.
     */
    percent: readonly boolean[];
    /** The emitted axes that carry shares (a 0..1 scale labelled as percent). */
    percentAxes: ReadonlySet<number>;
    /** The stacks with at least one visible member, in order of their first visible member. */
    stacks: readonly ResolvedStack[];
}

/**
 * Resolve the stack membership ONCE (ADR-0103 K2): per bar its mode-resolved stack name on the
 * EMITTED axis ({@link effectiveStackName} — the remap compacts the actively bound axes, so one
 * configured axis is one emitted axis and a stack still never spans foreign scales), its percent
 * membership, and the stacks with their visible members. The 100 % shares ({@link stackShares})
 * and the sum anchor ({@link stackSums}) read the same plan — per construction the same members.
 */
export const resolveStackPlan = ({ series, names, mode, axes }: StackPlanInput): StackPlan => {
    const bar = series.map(s => s.type === 'bar');
    const stackOf = series.map((s, i) => (bar[i] ? effectiveStackName(s.stack, mode, axes.emittedOf[i]) : undefined));
    // The key echarts stacks a bar by: the mode-resolved name, else its authored key.
    const keyOf = series.map((s, i) =>
        bar[i] ? (stackOf[i] ?? (typeof s.authored === 'string' ? s.authored : undefined)) : undefined,
    );
    // Percent membership = VISIBLE membership of a mode-resolved stack, like the shares'
    // denominator: a deselected bar keeps its absolute values (it left the stack), so every
    // surface — legend value, axis scale — formats it with its own series format, never as a
    // share. A raw-authored key that names a mode-resolved stack joins it (echarts stacks it
    // there, so it is normalized there); an authored stack of its own keeps its absolutes.
    const modeKeys = new Set(stackOf.filter((key): key is string => key !== undefined));
    const percent = keyOf.map(
        (key, i) => mode === 'percent' && key !== undefined && modeKeys.has(key) && axes.active[i],
    );
    const percentAxes = new Set<number>();
    percent.forEach((p, i) => {
        // Only an axis the bar truly binds (an active series always does — defensive).
        const bound = axes.bindsEmitted[i];
        if (p && bound !== undefined) {
            percentAxes.add(bound);
        }
    });
    const byKey = new Map<string, number[]>();
    keyOf.forEach((key, i) => {
        if (key === undefined || !axes.active[i]) {
            return; // not a bar, no stack, or invisible — contributes to no stack
        }
        const list = byKey.get(key);
        if (list) {
            list.push(i);
        } else {
            byKey.set(key, [i]);
        }
    });
    const stacks = [...byKey].map(([key, members]) => ({ key, axis: axes.emittedOf[members[0]], members }));
    return { mode, names, stackOf, percent, percentAxes, stacks };
};

/** The per-category sums of one stack — the sum anchor's label values. */
export interface StackSums {
    stack: ResolvedStack;
    /** Per category: the sum of the visible members' values; `null` = no member contributes (no label). */
    sums: (number | null)[];
    /** Per category: the first member's timestamp (the time path's anchor point), `null` = none. */
    ts: (number | null)[];
    /** Some member datum is a `[ts, v]` point (the anchor emits points, else plain values). */
    pointShaped: boolean;
}

/**
 * The per-category sums of every planned stack (adapter getSumSeries parity): the visible
 * members' ABSOLUTE values; a gap never counts as 0 — a category no member contributes to stays
 * `null` (the anchor renders no label there).
 */
export const stackSums = (plan: StackPlan, series: readonly ChartSeries[]): StackSums[] =>
    plan.stacks.map(stack => {
        const { members } = stack;
        const length = members.reduce((max, i) => Math.max(max, series[i]?.data.length ?? 0), 0);
        const totals: (number | null)[] = [];
        const ts: (number | null)[] = [];
        let pointShaped = false;
        for (let c = 0; c < length; c++) {
            let sum: number | null = null;
            let t: number | null = null;
            for (const i of members) {
                const d = series[i]?.data[c];
                if (Array.isArray(d)) {
                    pointShaped = true;
                    if (t === null && typeof d[0] === 'number') {
                        t = d[0]; // the time path's anchor point rides the first member's ts
                    }
                }
                const v = datumValueSlot(d);
                if (v !== null) {
                    sum = (sum ?? 0) + v;
                }
            }
            totals.push(sum);
            ts.push(t);
        }
        return { stack, sums: totals, ts, pointShaped };
    });

/**
 * Balken-Stapelmodus 100 % (ADR-0084 decision 4) over the plan: each stack normalizes per
 * category — share = value / stack sum, sum ≤ 0 → 0 (the example's defensive formula — negative
 * totals are the documented fragility, the InfoBox says it), gaps stay gaps. The ABSOLUTE values
 * come back keyed by {@link StackPlan.names} for the tooltip (share AND absolute). Per data INDEX,
 * the same alignment echarts stacks by (table rows, payload points, Verlauf buckets). Non-members
 * (opted out, non-bar, deselected, an authored stack of its own) keep their absolute values; a
 * lone member is always 100 %.
 * Outside the percent mode the series pass unchanged.
 */
export const stackShares = (
    plan: StackPlan,
    series: readonly ChartSeries[],
): { series: ChartSeries[]; absolutes?: Record<string, (number | null)[]> } => {
    const out = [...series];
    if (plan.mode !== 'percent') {
        return { series: out };
    }
    const absolutes: Record<string, (number | null)[]> = {};
    // The denominators are the sum anchor's sums ({@link stackSums}) — a category no member
    // contributes to (null) divides like a zero sum.
    for (const { stack, sums: totals } of stackSums(plan, series)) {
        if (!plan.percent[stack.members[0]]) {
            continue; // an authored stack of its own (raw escape hatch) keeps its absolutes
        }
        for (const i of stack.members) {
            const s = out[i];
            absolutes[plan.names[i]] = s.data.map(d => datumValueSlot(d));
            // Narrowed from the ChartSeries union: a series' data is homogeneous by
            // construction (points OR plain values — the map preserves whichever it finds).
            out[i] = {
                name: s.name,
                data: s.data.map((d, c): SeriesPoint | number | null => {
                    const share = datumValueSlot(d);
                    if (share === null) {
                        return Array.isArray(d) ? [d[0], null] : null; // a gap stays a gap — never a 0 % lie
                    }
                    const total = totals[c] ?? 0;
                    const value = total > 0 ? share / total : 0; // sum ≤ 0 → 0 (defensive)
                    return Array.isArray(d) ? [d[0], value] : value;
                }) as SeriesPoint[] | (number | null)[],
            };
        }
    }
    return Object.keys(absolutes).length ? { series: out, absolutes } : { series: out };
};
