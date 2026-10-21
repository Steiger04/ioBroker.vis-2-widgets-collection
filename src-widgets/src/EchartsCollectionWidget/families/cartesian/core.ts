/**
 * Cartesian family core (ADR-0083 ticket 01 — the data-path slice).
 *
 * @module EchartsCollectionWidget/families/cartesian/core
 * @remarks
 * The cartesian profile (line/bar/scatter — per-series render modes of one coordinate
 * system). Ticket 01 delivers its data-path share: markings count in every boundary loss
 * (markLines anchor on cartesian Y-axes, F10), the reset is the shared full wipe. Later
 * tickets grow this core (option builder dispatch, echarts registration, the cartesian
 * presentation fragment).
 */
import { familyDataPath } from '../dataPath';
import type { FamilyCore } from '../types';

/** The cartesian family's runtime core. */
export const CARTESIAN_CORE: FamilyCore = {
    dataPath: familyDataPath(state => state.markLines.length),
};
