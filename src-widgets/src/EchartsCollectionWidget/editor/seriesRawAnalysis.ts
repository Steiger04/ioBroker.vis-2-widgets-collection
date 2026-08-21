/**
 * Series-raw merge analysis — classifies the keys of a series card's raw JSON against the keys
 * the series builders actually emit, STATE-AWARE (the ADR-0037 axis analysis applied to series).
 *
 * @module EchartsCollectionWidget/editor/seriesRawAnalysis
 * @remarks
 * Since the ADR-0042 addendum the UI chips that surfaced this analysis are RETIRED — the module
 * lives on as the series-catalog audit gate (every Series template must bring ≥1 key the builders
 * do not emit; the guard test enforces it). The classification itself is unchanged: the raw
 * override is deep-merged UNDER the built series entry (`applyRawOverride` — the GUI wins
 * collisions), so a raw key is ✓ effective only where the builder does NOT emit it. Like the axis
 * builder, the series builders' managed sets are partly CONDITIONAL (`symbolSize`/`step`/`areaStyle`
 * only when the card sets them; the gauge `detail.formatter` only with a unit; `roseType` only with
 * a rose mode; `animationEasing` only when the chart-level easing is set), so a static map would
 * false-red free keys — the classifier resolves the managed LEAF paths from the card state.
 *
 * INVARIANT (as with axes): the managed sets here MUST stay in sync with the builders
 * (`buildCartesianSeriesEntry`, `buildPieOption`, `buildGaugeOption`, `buildRadarOption`) — add a
 * leaf here whenever a series card starts owning another subkey. Pinned by tests.
 */

import type { EchartsMarkLine, EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';
import { normalizeAreaMode } from '../optionBuilders/cartesian';
import { presentLeaves } from './rawLeaves';
import type { SeriesTemplateSlot } from './seriesTemplates';

/** Same three verdicts as the axis/chart-level analyses so the chips read alike. */
export type SeriesKeyClass = 'effective' | 'partial' | 'ignored';

export interface SeriesKeyChip {
    /** The top-level raw key. */
    key: string;
    /** ✓ effective (works) · ◐ partial (some subkeys eaten by the card) · ✗ ignored (wholly managed). */
    cls: SeriesKeyClass;
    /** Card-owned subkey paths present in the raw value (for the partial tooltip). */
    managed: string[];
}

/**
 * The card state the classifiers need, resolved from what each call site already holds. Every
 * field is optional; absent = the builder does not emit that conditional key (it stays free).
 */
export interface SeriesAnalysisContext {
    slot: SeriesTemplateSlot;
    /** The card's series meta (cartesian + pie-slice): drives the conditional cartesian/pie keys. */
    meta?: EchartsSeriesMeta;
    /** Pie whole-series: a rose mode is active (`roseType` emitted). */
    pieRoseActive?: boolean;
    /** Chart-level easing is set (pie/gauge/radar emit `animationEasing`(+`Update`)). */
    animationEasingActive?: boolean;
    /** Radar: the area fill is on (`areaStyle` emitted). */
    radarAreaActive?: boolean;
    /** Gauge: a unit is set (`detail.formatter` emitted). */
    gaugeUnitActive?: boolean;
    /** Gauge: a target marker is configured (`axisLine.lineStyle.color` emitted). */
    gaugeTargetActive?: boolean;
    /** Cartesian: this card hosts the threshold markLines (`markLine.silent/symbol/data` emitted). */
    markLineHost?: boolean;
}

/** Top-level series keys the card CAN own per slot — everything else is always effective. */
const MANAGED_TOP_KEYS: Record<SeriesTemplateSlot, ReadonlySet<string>> = {
    'cartesian-line': new Set([
        'name',
        'type',
        'yAxisIndex',
        'data',
        'color',
        'itemStyle',
        'label',
        'stack',
        'smooth',
        'showSymbol',
        'symbolSize',
        'connectNulls',
        'step',
        'lineStyle',
        'areaStyle',
        'markLine',
    ]),
    'cartesian-bar': new Set([
        'name',
        'type',
        'yAxisIndex',
        'data',
        'color',
        'itemStyle',
        'label',
        'stack',
        'barGap',
        'barCategoryGap',
        'markLine',
    ]),
    pie: new Set([
        'type',
        'radius',
        'roseType',
        'label',
        'data',
        'animation',
        'animationDuration',
        'animationDurationUpdate',
        'animationEasing',
        'animationEasingUpdate',
    ]),
    'pie-slice': new Set(['name', 'value', 'itemStyle']),
    gauge: new Set([
        'type',
        'min',
        'max',
        'radius',
        'progress',
        'axisLine',
        'axisTick',
        'splitLine',
        'pointer',
        'detail',
        'data',
        'animation',
        'animationDuration',
        'animationDurationUpdate',
        'animationEasing',
        'animationEasingUpdate',
    ]),
    radar: new Set([
        'type',
        'lineStyle',
        'itemStyle',
        'areaStyle',
        'data',
        'animation',
        'animationDuration',
        'animationDurationUpdate',
        'animationEasing',
        'animationEasingUpdate',
    ]),
};

/**
 * Per managed top-level key: child containers whose OWN children are the leaves (so
 * `progress.itemStyle.color` is a leaf, not the whole `progress` object). Only gauge needs
 * two-level leaves; cartesian/pie/radar carry their leaves one level under the top key.
 */
const NESTED_LEAF_KEYS: Record<string, ReadonlySet<string>> = {
    progress: new Set(['itemStyle']),
    axisLine: new Set(['lineStyle']),
    pointer: new Set(['itemStyle']),
};

const ANIMATION_LEAVES = ['animation', 'animationDuration', 'animationDurationUpdate'];

/**
 * The series leaf paths the builder emits for THIS card state, per slot. Mirrors the builders
 * field-by-field (see the module remarks for the invariant).
 */
const managedLeafPaths = (ctx: SeriesAnalysisContext): ReadonlySet<string> => {
    const paths = new Set<string>();
    const m = ctx.meta;

    if (ctx.slot === 'cartesian-line' || ctx.slot === 'cartesian-bar') {
        paths.add('name');
        paths.add('type');
        paths.add('yAxisIndex');
        paths.add('data');
        paths.add('color');
        paths.add('itemStyle.color');
        if (m?.cornerRadius) {
            paths.add('itemStyle.borderRadius');
        }
        if (m?.label) {
            paths.add('label.show');
        }
        if (m?.stack) {
            paths.add('stack');
        }
        if (ctx.slot === 'cartesian-line') {
            paths.add('smooth');
            paths.add('showSymbol');
            paths.add('connectNulls');
            paths.add('lineStyle.width');
            paths.add('lineStyle.type');
            if (m?.symbolSize !== undefined) {
                paths.add('symbolSize');
            }
            if (m?.step && m.step !== 'none') {
                paths.add('step');
            }
            const area = normalizeAreaMode(m);
            if (area !== 'off') {
                paths.add('areaStyle.opacity');
                if (area === 'gradient') {
                    paths.add('areaStyle.color');
                }
            }
        } else if (m?.barGap !== undefined) {
            paths.add('barGap');
        }
        if (m && (ctx.slot === 'cartesian-bar' ? m.barCategoryGap !== undefined : false)) {
            paths.add('barCategoryGap');
        }
        if (ctx.markLineHost) {
            paths.add('markLine.silent');
            paths.add('markLine.symbol');
            paths.add('markLine.data');
        }
        return paths;
    }

    if (ctx.slot === 'pie') {
        paths.add('type');
        paths.add('radius');
        paths.add('label.show');
        paths.add('label.formatter');
        paths.add('data');
        ANIMATION_LEAVES.forEach(p => paths.add(p));
        if (ctx.pieRoseActive) {
            paths.add('roseType');
        }
        if (ctx.animationEasingActive) {
            paths.add('animationEasing');
            paths.add('animationEasingUpdate');
        }
        return paths;
    }

    if (ctx.slot === 'pie-slice') {
        paths.add('name');
        paths.add('value');
        paths.add('itemStyle.color');
        return paths;
    }

    if (ctx.slot === 'gauge') {
        paths.add('type');
        paths.add('min');
        paths.add('max');
        paths.add('radius');
        paths.add('progress.show');
        paths.add('progress.width');
        paths.add('progress.itemStyle.color');
        paths.add('axisLine.lineStyle.width');
        if (ctx.gaugeTargetActive) {
            paths.add('axisLine.lineStyle.color');
        }
        paths.add('axisTick.show');
        paths.add('splitLine.length');
        paths.add('pointer.itemStyle.color');
        paths.add('detail.valueAnimation');
        paths.add('detail.fontSize');
        paths.add('detail.offsetCenter');
        if (ctx.gaugeUnitActive) {
            paths.add('detail.formatter');
        }
        paths.add('data');
        ANIMATION_LEAVES.forEach(p => paths.add(p));
        if (ctx.animationEasingActive) {
            paths.add('animationEasing');
            paths.add('animationEasingUpdate');
        }
        return paths;
    }

    // radar
    paths.add('type');
    paths.add('lineStyle.color');
    paths.add('itemStyle.color');
    if (ctx.radarAreaActive) {
        paths.add('areaStyle.color');
        paths.add('areaStyle.opacity');
    }
    paths.add('data');
    ANIMATION_LEAVES.forEach(p => paths.add(p));
    if (ctx.animationEasingActive) {
        paths.add('animationEasing');
        paths.add('animationEasingUpdate');
    }
    return paths;
};

/**
 * Classify each top-level raw key against the card state: ✓ effective (the builder does not emit
 * it), ◐ partial (object with both card-owned and free leaves), ✗ ignored (every present leaf —
 * or the scalar value itself — is card-owned). Non-managed keys are always effective.
 */
export const classifySeriesKeys = (rawValue: Record<string, unknown>, ctx: SeriesAnalysisContext): SeriesKeyChip[] => {
    const paths = managedLeafPaths(ctx);
    const managedTop = MANAGED_TOP_KEYS[ctx.slot];
    return Object.keys(rawValue).map(key => {
        if (!managedTop.has(key)) {
            return { key, cls: 'effective', managed: [] };
        }
        const keyLeaves = [...paths].filter(p => p === key || p.startsWith(`${key}.`));
        if (!keyLeaves.length) {
            return { key, cls: 'effective', managed: [] };
        }
        const leaves = presentLeaves(rawValue[key], NESTED_LEAF_KEYS[key] ?? new Set()).map(l => `${key}.${l}`);
        if (leaves.length === 0) {
            return { key, cls: 'ignored', managed: [key] };
        }
        const managed = leaves.filter(l => paths.has(l));
        const nonManaged = leaves.filter(l => !paths.has(l));
        const cls: SeriesKeyClass =
            managed.length && nonManaged.length ? 'partial' : managed.length ? 'ignored' : 'effective';
        return { key, cls, managed };
    });
};

/**
 * Whether series `index` is the HOST the cartesian builder attaches the threshold markLines to —
 * the `markLineHost` context flag. Mirrors the builder's grouping (optionBuilders/cartesian.ts):
 * thresholds group by their `yAxisIndex` (default 0; out-of-range indexes normalise to 0 against
 * the AXIS count, as the builder does) and each group attaches to the FIRST series bound to that
 * axis, falling back to series 0 when the axis has no series.
 *
 * @param markLines - The chart's threshold markLines.
 * @param yAxisIndexes - Each series' effective yAxisIndex (0 default), in card order.
 * @param index - The queried series' index.
 * @param yAxisCount - The chart's configured Y-axis count (the builder's normalisation bound).
 */
export const hostsMarkLines = (
    markLines: readonly EchartsMarkLine[],
    yAxisIndexes: readonly number[],
    index: number,
    yAxisCount: number,
): boolean => {
    if (markLines.length === 0 || yAxisIndexes.length === 0) {
        return false;
    }
    const effective = yAxisIndexes.map(yi => (yi >= yAxisCount ? 0 : yi));
    return markLines.some(ml => {
        const ax = typeof ml.yAxisIndex === 'number' ? ml.yAxisIndex : 0;
        const host = effective.findIndex(yi => yi === ax);
        return (host === -1 ? 0 : host) === index;
    });
};
