/**
 * Shared data-path defaults of the family cores (ADR-0083 ticket 01).
 *
 * @module EchartsCollectionWidget/families/dataPath
 * @remarks
 * The ADR-0067/0075 reset semantics live HERE since the registry: both families share the
 * identical full-wipe patch and the identical loss shape, so the defaults below are written
 * once and the family variance plugs in through `marksOf` alone (cartesian counts its
 * markings, pie has none). The boundary machinery (lifecycleGuards, validation) delegates
 * here instead of copying a family check — the semantics moved INTO the profiles, the
 * behaviour stayed byte-identical.
 */
import type { DataPathResetPatch, DataPathState, FamilyBoundaryLoss, FamilyDataPath } from './types';

/**
 * The data-path patch a structural boundary reset applies (ADR-0067): series/OIDs, Y-axes
 * (the 0-axes start — the JSON reconcile rebuilds 1:1 from the payload on entry), markings,
 * the JSON overlay + deny-list + jsonOid (the leaving mode's data input), and since ADR-0075
 * the Zuordnung scalars (family + rows/X paths — both ADR-0067 crossings leave the json
 * family entirely, so the kind returns to its 'series' default). Everything presentationary
 * — title, legend, tooltip, colours, toolbox, raws, X-Karte, zoom, and the time window — is
 * untouched.
 *
 * The caller merges this with the boundary flip (mode/chartType) into ONE `set()` patch, so
 * undo restores the crossing AND the deletion together in a single step.
 */
export const fullDataPathReset = (): DataPathResetPatch => ({
    series: [],
    yAxes: [],
    markLines: [],
    jsonSeriesStyle: {},
    jsonHidden: [],
    jsonOid: '',
    jsonKind: 'series',
    jsonRowPath: '',
    jsonXPath: '',
});

/**
 * Assemble a family's data-path slice over its marks variance: the loss counts the whole
 * series/axis set of the current family plus whatever `marksOf` reports (the pre-ADR-0067
 * survival model — cartesian→pie keeping the series as slices — is pensioned with it), and
 * the reset is the shared full wipe.
 */
export const familyDataPath = (marksOf: (state: DataPathState) => number): FamilyDataPath => ({
    loss: (state: DataPathState): FamilyBoundaryLoss => ({
        series: state.series.length,
        axes: state.yAxes.length,
        marks: marksOf(state),
        dataPoint: !!state.jsonOid,
    }),
    marksOf,
    reset: fullDataPathReset,
});
