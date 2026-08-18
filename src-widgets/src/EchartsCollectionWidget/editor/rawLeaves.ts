/**
 * The two-level raw-key leaf walk shared by the per-card ✓/◐/✗ analyses (ADR-0037 axes,
 * ADR-0041 series).
 *
 * @module EchartsCollectionWidget/editor/rawLeaves
 * @remarks
 * Direct children of a raw key's object are leaves, except the key's nested CONTAINERS whose own
 * children are the leaves (so `axisLine.lineStyle.color` / `progress.itemStyle.color` are
 * distinguishable from their free siblings one level down). The chart-level analysis
 * (advancedJsonAnalysis.ts) keeps its own three-level variant — a superset walk with different
 * needs; this is the axis/series twin, extracted at copy #2.
 */

/**
 * The present leaf paths of a raw value, RELATIVE to its top-level key. A non-object value
 * (scalar/array) yields no leaves — the whole key is overridden.
 *
 * @param value - The raw key's value.
 * @param nested - The key's child containers whose own children are the leaves.
 */
export const presentLeaves = (value: unknown, nested: ReadonlySet<string>): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return [];
    }
    const obj = value as Record<string, unknown>;
    const isPlainObject = (v: unknown): v is Record<string, unknown> =>
        !!v && typeof v === 'object' && !Array.isArray(v);
    const leaves: string[] = [];
    for (const [k, v] of Object.entries(obj)) {
        if (nested.has(k) && isPlainObject(v)) {
            for (const sub of Object.keys(v)) {
                leaves.push(`${k}.${sub}`);
            }
        } else {
            leaves.push(k);
        }
    }
    return leaves;
};
