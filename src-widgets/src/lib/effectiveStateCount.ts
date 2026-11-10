/**
 * The ONE pure rule for how many discrete states a widget effectively has (Zustandsmenge).
 *
 * @module lib/effectiveStateCount
 * @remarks
 * Zustandsmenge: `ignoreCommonStates === false` → the authored rows
 * (`values_count`) govern; otherwise the OID's `commonStates` count, falling back to
 * `values_count` when absent (e.g. boolean OIDs without commonStates).
 */
export type EffectiveStateCountInputs = {
    /** Number of authored value rows (widget field `values_count`). */
    valuesCount: number | null | undefined;
    /** Number of entries in the OID's `common.states`. */
    commonStatesCount: number | null | undefined;
    /** Whether the editor ignores the OID's common states (default `true`). */
    ignoreCommonStates?: boolean | null;
};

/**
 * Compute the effective number of discrete states.
 *
 * @param inputs The raw counting inputs (authored rows, common states, editor mode).
 * @param inputs.valuesCount Number of authored value rows (widget field `values_count`).
 * @param inputs.commonStatesCount Number of entries in the OID's `common.states`.
 * @param inputs.ignoreCommonStates Whether the editor ignores the OID's common states.
 * @returns The effective state count (`0` when nothing is defined).
 */
const effectiveStateCount = ({
    valuesCount,
    commonStatesCount,
    ignoreCommonStates,
}: EffectiveStateCountInputs): number => {
    const rows = valuesCount ?? 0;
    if (ignoreCommonStates === false) {
        return rows;
    }
    const common = commonStatesCount ?? 0;
    return common > 0 ? common : rows;
};

export default effectiveStateCount;
