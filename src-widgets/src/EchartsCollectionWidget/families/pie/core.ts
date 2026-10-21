/**
 * Pie family core (ADR-0083 ticket 01 — the data-path slice).
 *
 * @module EchartsCollectionWidget/families/pie/core
 * @remarks
 * The pie profile. Ticket 01 delivers its data-path share: no markings exist on a pie, so
 * the marks share of every boundary loss is zero even when markLines linger in a working
 * copy; the reset is the shared full wipe. Later tickets grow this core (option builder
 * dispatch, the PieChart registration, the pie presentation fragment).
 */
import { familyDataPath } from '../dataPath';
import type { FamilyCore } from '../types';

/** The pie family's runtime core. */
export const PIE_CORE: FamilyCore = {
    dataPath: familyDataPath(() => 0),
};
