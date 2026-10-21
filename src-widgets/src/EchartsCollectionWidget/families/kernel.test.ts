/**
 * Membership-Kernel tests (ADR-0083 ticket 01): the ONE table chartType → family.
 *
 * @module EchartsCollectionWidget/families/kernel.test
 * @remarks
 * The kernel is the single source of family membership — `familyOf` reads it, every
 * family-aware consumer reads `familyOf`. These pin the kernel's self-consistency (every
 * member maps back to its owning family) and the legacy tolerance arms older widgets still
 * store. The compat re-export at the orchestrator (`optionBuilder.familyOf`) is pinned by
 * the existing optionBuilder suite.
 */
import { describe, expect, it } from 'vitest';

import { FAMILY_CHART_TYPES, familyOf } from './kernel';
import type { EchartsChartFamily, EchartsChartType } from '../../types/field-definitions/echarts-fields';

describe('FAMILY_CHART_TYPES — the membership kernel', () => {
    it('every member of every family maps back to exactly that family via familyOf', () => {
        for (const [family, types] of Object.entries(FAMILY_CHART_TYPES) as [
            EchartsChartFamily,
            readonly EchartsChartType[],
        ][]) {
            for (const chartType of types) {
                expect(familyOf(chartType), `${chartType} must belong to ${family}`).toBe(family);
            }
        }
    });

    it('covers the full concrete type union — the flattened kernel is the four chart types', () => {
        expect(Object.values(FAMILY_CHART_TYPES).flat().sort()).toEqual(['bar', 'line', 'pie', 'scatter']);
    });

    it('keeps the families disjoint — no chart type appears under two families', () => {
        const all = Object.values(FAMILY_CHART_TYPES).flat();
        expect(new Set(all).size).toBe(all.length);
    });
});

describe('familyOf — legacy tolerance (no auto-migration)', () => {
    it.each([['cartesian'], ['area'], ['gauge'], ['radar'], [undefined]] as const)(
        'legacy %s → cartesian (the family-only default)',
        legacy => {
            expect(familyOf(legacy)).toBe('cartesian');
        },
    );
});
