/**
 * Advanced-JSON merge analysis (ADR-0007/0030) — classifies raw-JSON keys against the
 * GUI-managed set, per key: effective / partial / ignored.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonAnalysis
 * @remarks
 * Since the ADR-0042 addendum the UI chips that surfaced this analysis are RETIRED — the
 * module lives on as the chart-level catalog audit gate (every template must bring ≥1 key the
 * GUI does not own; the guard test enforces it). The classification itself is unchanged:
 * the Advanced JSON (U) supplements keys the GUI does not expose; G wins every collision
 * (ADR-0007). Most managed top-level keys are WHOLLY owned — a U value is silently overridden (→ ✗).
 * `title`, `legend` and `tooltip` are PARTIALLY owned: the GUI sets only SOME subkeys (title text/
 * placement/textStyle colour-size-weight-style; legend show/data/items/frame; tooltip trigger/formatter/
 * valueFormatter/show; xAxis type/name/format/colour/ticks/splitlines — ADR-0035), so a U object
 * that avoids those subkeys is EFFECTIVE (→ ✓). {@link MANAGED_PATHS} enumerates the GUI-owned
 * subkey paths (one level, plus the {@link NESTED_LEAF_KEYS} at two levels and the
 * {@link DEEP_LEAF_KEYS} at three — the nested objects with GUI-owned CHILDREN) for that partial
 * analysis. Kept in a pure module so it is
 * unit-testable.
 *
 * INVARIANT (ADR-0030/0032/0035): `MANAGED_PATHS.title` / `.legend` / `.tooltip` / `.xAxis` MUST stay
 * in sync with the keys `buildTitleOption` (`presentation.ts`), `buildLegend`, `buildTooltip`
 * (`optionBuilders/tooltip.ts`), and `buildXAxisEntry` (`optionBuilders/cartesian.ts`) actually
 * emit — add a subkey here whenever the GUI starts owning another of their subkeys.
 */

/** Top-level option keys the GUI owns (at least partially). Drives the analysis. */
export const MANAGED_KEYS = [
    'series',
    'legend',
    'xAxis',
    'yAxis',
    'title',
    'tooltip',
    'grid',
    'dataZoom',
    'visualMap',
    'animation',
    'animationEasing',
    'animationDuration',
    'color', // the series palette
    'markLine',
] as const;

const MANAGED_KEYS_SET: ReadonlySet<string> = new Set(MANAGED_KEYS);

/**
 * GUI-owned subkey paths for the PARTIALLY-managed top-level keys (ADR-0030). A dotted path is a
 * leaf the GUI force-emits, so a U value for it is silently overridden. Only the keys in
 * {@link NESTED_LEAF_KEYS} are nested (two levels) — objects with BOTH GUI-owned and free
 * children; every other nested object (subtextStyle, itemStyle, selectorLabel, …) is wholly
 * free, so it counts as one non-managed leaf.
 */
const MANAGED_PATHS: Record<string, ReadonlySet<string>> = {
    title: new Set([
        'text',
        'left',
        'top',
        'right',
        'bottom',
        'textAlign',
        'textStyle.color',
        'textStyle.fontSize',
        'textStyle.fontWeight',
        'textStyle.fontStyle',
    ]),
    legend: new Set([
        'show',
        'data',
        'left',
        'top',
        'right',
        'bottom',
        'orient',
        'icon',
        'itemWidth',
        'itemHeight',
        'itemGap',
        'inactiveColor',
        'backgroundColor',
        'borderWidth',
        'borderColor',
        'borderRadius',
        'padding',
        'textStyle.color',
        'textStyle.fontSize',
        'textStyle.fontWeight',
        'textStyle.fontStyle',
    ]),
    // ADR-0032: the four keys `buildTooltip` (optionBuilders/tooltip.ts) can emit. tooltip.textStyle /
    // tooltip.axisPointer and every other subkey are free → they merge through (buildTooltip is sparse).
    tooltip: new Set(['trigger', 'formatter', 'valueFormatter', 'show']),
    // ADR-0035: the subkeys `buildXAxisEntry` (optionBuilders/cartesian.ts) emits. `axisLine.lineStyle`
    // is refined to its `.color` LEAF (ADR-0036): the GUI emits only the colour inside it when an axis
    // colour is set — a U `width`/`type` there merges through, and the xAxis scaffold carries both.
    // `splitNumber`/`minInterval`/`nameRotate` joined when the X-Karte got the Y-cards' tick-density
    // and name-rotation knobs, `axisLabel.rotate` with the label-rotation slider, `offset` with the
    // Versatz field (all conditional-emit, unset = echarts default).
    xAxis: new Set([
        'type',
        'name',
        'nameLocation',
        'nameGap',
        'axisLabel.formatter',
        'axisLabel.color',
        'axisLabel.rotate',
        'axisLine.show',
        'axisLine.lineStyle.color',
        'nameTextStyle.color',
        'splitLine.show',
        'axisTick.show',
        'splitNumber',
        'minInterval',
        'nameRotate',
        'offset',
    ]),
};

/**
 * Nested objects (per partial-managed key) whose DIRECT children are the leaves — because they
 * carry BOTH GUI-owned and free children. For title/legend that is only `textStyle`; for the
 * X-axis it is the five objects `buildXAxisEntry` writes into (ADR-0035).
 */
const NESTED_LEAF_KEYS: Record<string, ReadonlySet<string>> = {
    title: new Set(['textStyle']),
    legend: new Set(['textStyle']),
    xAxis: new Set(['axisLabel', 'axisLine', 'nameTextStyle', 'splitLine', 'axisTick']),
};

/**
 * Two-level containers (dotted paths inside a {@link NESTED_LEAF_KEYS} object) whose OWN children
 * are the leaves — depth 3, because the GUI owns only PART of the sub-object. Only the X-axis
 * `axisLine.lineStyle` needs it (ADR-0036): the GUI owns `.color`, while `width`/`type` are free
 * and ship in the xAxis scaffold — so the chip must distinguish them instead of eating the whole
 * style object.
 */
const DEEP_LEAF_KEYS: Record<string, ReadonlySet<string>> = {
    xAxis: new Set(['axisLine.lineStyle']),
};

/** Merge-preview chip verdict for one top-level U key. */
export type UKeyClass = 'effective' | 'partial' | 'ignored';

export interface UKeyChip {
    /** The top-level U key. */
    key: string;
    /** ✓ effective (works) · ◐ partial (some subkeys eaten by the GUI) · ✗ ignored (wholly managed). */
    cls: UKeyClass;
    /** GUI-owned subkey paths present in the U value (for the partial tooltip). */
    managed: string[];
}

/**
 * The present leaf paths of a partial-managed U value, depth ≤ 3: top-level keys are leaves,
 * EXCEPT the {@link NESTED_LEAF_KEYS} of the key whose direct children are the leaves (so
 * `textStyle.color` / `splitLine.show` are distinguishable from their free siblings) — and, one
 * level further, the {@link DEEP_LEAF_KEYS} containers whose children are leaves (so
 * `axisLine.lineStyle.color` is distinguishable from the free `.width`/`.type` siblings). A
 * non-object value yields no leaves (the whole key is overridden).
 */
const presentLeaves = (
    value: unknown,
    nested: ReadonlySet<string>,
    deep: ReadonlySet<string> = new Set(),
): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return [];
    }
    const obj = value as Record<string, unknown>;
    const isPlainObject = (v: unknown): v is Record<string, unknown> =>
        !!v && typeof v === 'object' && !Array.isArray(v);
    const leaves: string[] = [];
    for (const [k, v] of Object.entries(obj)) {
        if (nested.has(k) && isPlainObject(v)) {
            for (const [sub, subV] of Object.entries(v)) {
                if (deep.has(`${k}.${sub}`) && isPlainObject(subV)) {
                    for (const leaf of Object.keys(subV)) {
                        leaves.push(`${k}.${sub}.${leaf}`);
                    }
                } else {
                    leaves.push(`${k}.${sub}`);
                }
            }
        } else {
            leaves.push(k);
        }
    }
    return leaves;
};

/**
 * Classify each top-level U key against the managed set (ADR-0030). A non-managed key is effective;
 * a wholly-managed key (no partial map, e.g. `grid`/`tooltip`) is ignored; `title`/`legend` get
 * sub-key recursion → effective (no GUI subkeys present), partial (mixed), or ignored (all present
 * subkeys are GUI-owned). A non-object title/legend value is wholly overridden → ignored.
 */
export const classifyUserKeys = (userValue: Record<string, unknown>): UKeyChip[] =>
    Object.keys(userValue).map(key => {
        if (!MANAGED_KEYS_SET.has(key)) {
            return { key, cls: 'effective', managed: [] };
        }
        const paths = MANAGED_PATHS[key];
        if (!paths) {
            return { key, cls: 'ignored', managed: [] };
        }
        const leaves = presentLeaves(
            userValue[key],
            NESTED_LEAF_KEYS[key] ?? new Set(),
            DEEP_LEAF_KEYS[key] ?? new Set(),
        );
        if (leaves.length === 0) {
            return { key, cls: 'ignored', managed: [] };
        }
        const managed = leaves.filter(l => paths.has(l));
        const nonManaged = leaves.filter(l => !paths.has(l));
        const cls: UKeyClass =
            managed.length && nonManaged.length ? 'partial' : managed.length ? 'ignored' : 'effective';
        return { key, cls, managed };
    });
