/**
 * The ONE pure rule for how many discrete states a widget effectively has (Zustandsmenge).
 *
 * @module lib/effectiveStateCount
 * @remarks
 * Zustandsmenge: `ignoreCommonStates === false` → the authored rows
 * (`values_count`) govern; otherwise the OID's `commonStates` count, falling back to
 * `values_count` when absent (e.g. boolean OIDs without commonStates).
 */
import optionalNumber from './helper/optionalNumber';

export type EffectiveStateCountInputs = {
    /**
     * Number of authored value rows (widget field `values_count`); a numeric string counts as its
     * number ({@link module:lib/helper/optionalNumber}), as the Rückfall-Regel lets it through.
     */
    valuesCount: number | string | null | undefined;
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
    // `values_count` declares the stored value 'number' (lib/stateEditorFields). The runtime gets it
    // through the Rückfall-Regel already; the Zustandseditor reads the raw data through the same
    // number reading, so a value the rule drops counts no rows here too, and both count the same rows.
    const rows = optionalNumber(valuesCount) ?? 0;
    if (ignoreCommonStates === false) {
        return rows;
    }
    const common = commonStatesCount ?? 0;
    return common > 0 ? common : rows;
};

export default effectiveStateCount;
