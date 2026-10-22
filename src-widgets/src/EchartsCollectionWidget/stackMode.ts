/**
 * The Balken-Stapelmodus resolution core (ADR-0084) — the ONE three-valued bar-stack resolver
 * shared by the cartesian builder (option emission) and the chart pipeline (percent
 * normalization groups), so the two can never drift apart.
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
import type { EchartsCartesianType, EchartsStackMode } from '../types/field-definitions/echarts-fields';

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
 * while the mode is off). The caller passes the series' AXIS index; the builder feeds the
 * EMITTED index (post-remap), the pipeline the configured one (grouping is index-consistent
 * either way: the remap is a function of the axis set, so one configured axis maps to one
 * emitted index).
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
