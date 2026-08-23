/**
 * Axis-raw merge analysis (ADR-0037) — classifies the keys of an Axis card's raw JSON against the
 * keys `buildYAxisEntry` (optionBuilders/cartesian.ts) actually emits, STATE-AWARE.
 *
 * @module EchartsCollectionWidget/editor/axisRawAnalysis
 * @remarks
 * Since the ADR-0042 addendum the UI chips that surfaced this analysis are RETIRED — the module
 * lives on as the axis-catalog audit gate (every Axis template must bring ≥1 key the card does
 * not emit; the guard test enforces it). The classification itself is unchanged: the raw
 * override is deep-merged UNDER the built yAxis entry (the card wins collisions), so a raw
 * key is ✓ effective only where the builder does NOT emit it. Unlike a static managed-paths
 * map (the retired chart-level analysis died with the chart-U, ADR-0045), the axis builder's
 * managed set is partly CONDITIONAL:
 * `axisLabel.color` / `nameTextStyle.color` / `axisLine` are emitted only when an axis colour is
 * set (explicit or inherited from the bound series), `axisLabel.formatter` only when the format
 * field is filled, `axisLabel.fontSize`/`axisTick.lineStyle.color`/`splitLine.lineStyle.color`
 * only when their Build D fine-tuning fields are set (ADR-0055), and
 * `min`/`max`/`scale`/`splitNumber`/`minInterval`/`nameRotate`/`name` only when
 * their card fields are set. A static map would false-red keys that are actually free — the
 * classifier therefore resolves the managed LEAF paths from the axis config (+ the same inherited
 * colour/name defaults the builder receives) on every call.
 *
 * INVARIANT (ADR-0037): the managed sets here MUST stay in sync with `buildYAxisEntry` — add a
 * leaf here whenever the card starts owning another yAxis subkey. Pinned by tests.
 */

import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import { presentLeaves } from './rawLeaves';

/** Same three verdicts as the chart-level analysis (ADR-0030) so the chips read alike. */
export type AxisKeyClass = 'effective' | 'partial' | 'ignored';

export interface AxisKeyChip {
    /** The top-level raw key. */
    key: string;
    /** ✓ effective (works) · ◐ partial (some subkeys eaten by the card) · ✗ ignored (wholly managed). */
    cls: AxisKeyClass;
    /** Card-owned subkey paths present in the raw value (for the partial tooltip). */
    managed: string[];
}

/**
 * The builder-relevant card state: the axis config plus the two inherited defaults
 * `buildYAxisEntry(a, i, seriesColor, seriesName)` receives. Passing them keeps the classifier
 * honest about the inherited colour/name paths (an axis without explicit colour still emits the
 * colour trio when its bound series has one).
 */
export interface AxisAnalysisInput {
    axis: EchartsAxisConfig;
    /** Effective colour of the first bound series (the axis-colour default, ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series (the axis-name default, ADR-0018). */
    seriesName?: string;
}

/** Top-level yAxis keys the card CAN own (state-resolved below) — everything else is free. */
const MANAGED_TOP_KEYS: ReadonlySet<string> = new Set([
    'type',
    'position',
    'offset',
    'alignTicks',
    'nameLocation',
    'nameGap',
    'name',
    'min',
    'max',
    'scale',
    'splitNumber',
    'minInterval',
    'nameRotate',
    'axisLabel',
    'axisLine',
    'nameTextStyle',
    'splitLine',
    'axisTick',
]);

/**
 * Per managed top-level key: the DIRECT-CHILD containers whose own children are the leaves (so
 * `axisLine.lineStyle.color` is distinguishable from the free `.width`/`.type` siblings — the GUI
 * owns only the colour inside `lineStyle`, and only when an axis colour is set). `axisTick` and
 * `splitLine` joined with parity Build D (ADR-0055): their `lineStyle.color` is conditionally
 * card-owned (tick/grid colour fields). `axisLabel`/`nameTextStyle` carry their leaves directly.
 */
const NESTED_LEAF_KEYS: Record<string, ReadonlySet<string>> = {
    axisLine: new Set(['lineStyle']),
    axisTick: new Set(['lineStyle']),
    splitLine: new Set(['lineStyle']),
};

/**
 * The yAxis leaf paths the builder emits for THIS axis state (always-emitted keys + the
 * conditional ones resolved from the card fields and inherited defaults). Mirrors
 * `buildYAxisEntry` field-by-field. Paths are ABSOLUTE (`splitLine.show`) — the classifier
 * prefixes the per-key relative leaves to compare.
 */
const managedLeafPaths = ({ axis: a, seriesColor, seriesName }: AxisAnalysisInput): ReadonlySet<string> => {
    const paths = new Set<string>([
        'type', // a.log ? 'log' : 'value' — always emitted
        'position',
        'offset',
        'alignTicks',
        'splitLine.show',
        'axisTick.show',
        'nameLocation', // card field since ADR-0037 (always emitted)
        'nameGap', // card field since ADR-0037 (always emitted)
    ]);
    // `entry.name` is emitted when an explicit OR inherited name exists ('' counts as unset).
    if (a.name || seriesName) {
        paths.add('name');
    }
    if (a.min !== undefined) {
        paths.add('min');
    }
    if (a.max !== undefined) {
        paths.add('max');
    }
    if (a.scale) {
        paths.add('scale');
    }
    if (a.splitNumber !== undefined) {
        paths.add('splitNumber');
    }
    if (a.minInterval !== undefined) {
        paths.add('minInterval');
    }
    if (a.nameRotate !== undefined) {
        paths.add('nameRotate');
    }
    if (a.format) {
        paths.add('axisLabel.formatter');
    }
    // Parity Build D (ADR-0055): the three fine-tuning leaves are conditionally card-owned —
    // sparse like the format/colour conditionals above, so an unset field keeps the leaf free.
    if (a.labelFontSize !== undefined) {
        paths.add('axisLabel.fontSize');
    }
    if (a.tickColor) {
        paths.add('axisTick.lineStyle.color');
    }
    if (a.gridColor) {
        paths.add('splitLine.lineStyle.color');
    }
    if (a.color ?? seriesColor) {
        paths.add('axisLabel.color');
        paths.add('axisLine.show');
        paths.add('axisLine.lineStyle.color');
        paths.add('nameTextStyle.color');
    }
    return paths;
};

/**
 * Classify each top-level raw key against the axis state: ✓ effective (the builder does not emit
 * it), ◐ partial (object with both card-owned and free leaves), ✗ ignored (every present leaf —
 * or the scalar value itself — is card-owned). Non-managed keys are always effective.
 */
export const classifyAxisKeys = (rawValue: Record<string, unknown>, input: AxisAnalysisInput): AxisKeyChip[] => {
    const paths = managedLeafPaths(input);
    return Object.keys(rawValue).map(key => {
        if (!MANAGED_TOP_KEYS.has(key)) {
            return { key, cls: 'effective', managed: [] };
        }
        const keyLeaves = [...paths].filter(p => p === key || p.startsWith(`${key}.`));
        if (!keyLeaves.length) {
            return { key, cls: 'effective', managed: [] };
        }
        // Relative leaves (chart-level walk) → prefixed to compare against the absolute paths.
        const leaves = presentLeaves(rawValue[key], NESTED_LEAF_KEYS[key] ?? new Set()).map(l => `${key}.${l}`);
        if (leaves.length === 0) {
            // Scalar/array value on a managed key → wholly overridden (the builder's value wins).
            return { key, cls: 'ignored', managed: [key] };
        }
        const managed = leaves.filter(l => paths.has(l));
        const nonManaged = leaves.filter(l => !paths.has(l));
        const cls: AxisKeyClass =
            managed.length && nonManaged.length ? 'partial' : managed.length ? 'ignored' : 'effective';
        return { key, cls, managed };
    });
};
