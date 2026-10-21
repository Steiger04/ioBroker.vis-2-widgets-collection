/**
 * FAMILY_CORES — the runtime record of the family registry (ADR-0083).
 *
 * @module EchartsCollectionWidget/families/cores
 * @remarks
 * Exhaustive over the family union BY TYPE: a new family does not compile until its core is
 * delivered — the compiler-enforced lockstep that makes a half-registered family impossible.
 * Consumed by the runtime side (option builder, pipeline, registration); the cores
 * themselves import no editor modules. Ticket 01 fills the data-path slice; `buildOption`
 * and `echartsUse` join in ticket 02, `presentationFragment` in ticket 03.
 */
import type { EchartsChartFamily } from '../../types/field-definitions/echarts-fields';
import { CARTESIAN_CORE } from './cartesian/core';
import { PIE_CORE } from './pie/core';
import type { FamilyCore } from './types';

/** Every family's runtime core, keyed by the family union (compile-locked to the kernel). */
export const FAMILY_CORES: Record<EchartsChartFamily, FamilyCore> = {
    cartesian: CARTESIAN_CORE,
    pie: PIE_CORE,
};
