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
import type { EchartsChartFamily, LegacyChartType } from '../../types/field-definitions/echarts-fields';
import { familyOf } from './kernel';
import { CARTESIAN_CORE } from './cartesian/core';
import { PIE_CORE } from './pie/core';
import type { FamilyCore } from './types';

/**
 * Every family's runtime core, keyed by the family union. `satisfies` keeps the
 * compile-locked lockstep (a new family does not compile without its core) while preserving
 * each core's precise fragment type.
 */
export const FAMILY_CORES = {
    cartesian: CARTESIAN_CORE,
    pie: PIE_CORE,
} satisfies Record<EchartsChartFamily, FamilyCore>;

/**
 * The runtime core of the family a chart type belongs to — the one accessor every consumer
 * dispatches through (boundary losses, option build, registration), so no site copies the
 * `FAMILY_CORES[familyOf(...)]` navigation.
 */
export const coreOf = (chartType: LegacyChartType): FamilyCore => FAMILY_CORES[familyOf(chartType)];
