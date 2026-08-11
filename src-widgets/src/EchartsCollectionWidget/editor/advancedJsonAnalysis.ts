/**
 * Advanced-JSON merge analysis (ADR-0007/0030) — classifies the user's U (Advanced JSON) keys
 * against the GUI-managed set, so the merge-preview chips tell the truth PER KEY.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonAnalysis
 * @remarks
 * The Advanced JSON (U) supplements keys the GUI does not expose; G wins every collision
 * (ADR-0007). Most managed top-level keys are WHOLLY owned — a U value is silently overridden (→ ✗).
 * `title` and `legend` are PARTIALLY owned: the GUI sets only SOME subkeys (title text/placement/
 * textStyle colour-size-weight-style; legend show/data/items/frame), so a U object that avoids those
 * subkeys is EFFECTIVE (→ ✓). {@link MANAGED_PATHS} enumerates the GUI-owned subkey paths (one level,
 * plus `textStyle.*` at two levels — only `textStyle` has GUI-owned CHILDREN) for that partial
 * analysis. Kept in a pure module so it is unit-testable and the component stays presentational.
 *
 * INVARIANT (ADR-0030): `MANAGED_PATHS.title` / `.legend` MUST stay in sync with the keys
 * `buildTitleOption` (`presentation.ts`) and `buildLegend` actually emit — add a subkey here whenever
 * the GUI starts owning another title/legend subkey.
 */

/** Top-level option keys the GUI owns (at least partially). Drives the static "Managed keys" box + the analysis. */
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
 * leaf the GUI force-emits, so a U value for it is silently overridden. Only `textStyle` is nested
 * (two levels) because it has BOTH GUI-owned children (colour/size/weight/style) and free children
 * (fontFamily, lineHeight, textShadow*, …); every other nested object (subtextStyle, itemStyle,
 * selectorLabel, …) is wholly free, so it counts as one non-managed leaf.
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
 * The present leaf paths of a title/legend U value, depth ≤ 2: top-level keys are leaves, EXCEPT
 * `textStyle` whose direct children are the leaves (so `textStyle.color` is distinguishable from
 * `textStyle.fontFamily`). A non-object value yields no leaves (the whole key is overridden).
 */
const presentLeaves = (value: unknown): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return [];
    }
    const obj = value as Record<string, unknown>;
    const leaves: string[] = [];
    for (const [k, v] of Object.entries(obj)) {
        if (k === 'textStyle' && v && typeof v === 'object' && !Array.isArray(v)) {
            for (const sub of Object.keys(v as Record<string, unknown>)) {
                leaves.push(`textStyle.${sub}`);
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
        const leaves = presentLeaves(userValue[key]);
        if (leaves.length === 0) {
            return { key, cls: 'ignored', managed: [] };
        }
        const managed = leaves.filter(l => paths.has(l));
        const nonManaged = leaves.filter(l => !paths.has(l));
        const cls: UKeyClass =
            managed.length && nonManaged.length ? 'partial' : managed.length ? 'ignored' : 'effective';
        return { key, cls, managed };
    });
