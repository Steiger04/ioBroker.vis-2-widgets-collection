/**
 * Pie presentation fragment (ADR-0083 ticket 03) — the pie family's share of the presentation
 * assembly.
 *
 * @module EchartsCollectionWidget/families/pie/fragment
 * @remarks
 * The pie fragment carries exactly one thing: the decoded whole-pie structured config
 * (aggregation, donut radius, rose mode, labels — ADR-0082). An absent blob stays `undefined`
 * (the builder applies its defaults), byte-identical to the pre-split `pie: chartConfig.pie`.
 */
import type { PieFragment } from '../../optionBuilders/types';
import type { PresentationCompanions } from '../types';

/** Assemble the pie presentation fragment from the decoded companions. */
export const piePresentationFragment = (companions: PresentationCompanions): PieFragment => ({
    pie: companions.chartConfig.pie,
});
