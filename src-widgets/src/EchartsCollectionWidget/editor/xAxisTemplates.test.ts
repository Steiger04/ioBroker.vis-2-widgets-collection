/**
 * Guard tests for the X-axis template catalog — the ADR-0037 axis-catalog audit applied to the
 * X-Karte's own raw (X joins the axis anatomy; see the ADR-0037 addendum).
 *
 * @module EchartsCollectionWidget/editor/xAxisTemplates.test
 * @remarks
 * Every entry must be wholly FREE: no leaf may collide with a key `buildXAxisEntry` emits — the
 * card wins every collision, so a colliding leaf could never take effect (checked via
 * `classifyUserKeys`, which keeps this audit in sync with `MANAGED_PATHS.xAxis` by construction —
 * the documented ADR-0030 invariant). Theme-neutrality per ADR-0037: no light-mode colour
 * hardcodes (the axisPointer label's #fff is the deliberate dark-chip contrast, Y precedent).
 */
import { describe, expect, it } from 'vitest';

import { X_AXIS_TEMPLATES } from './xAxisTemplates';
import { AXIS_CATEGORY_ORDER, type AxisTemplateCategory } from './axisTemplates';
import { classifyUserKeys } from './advancedJsonAnalysis';

const chipOf = (payload: Record<string, unknown>): { cls: string; managed: string[] } | undefined =>
    classifyUserKeys({ xAxis: payload }).find(c => c.key === 'xAxis');

/**
 * The ten option groups the X catalog covers — an EXPLICIT list, so a future Y-only category
 *  (e.g. a log-scale group) never forces an artificial X entry.
 */
const X_CATEGORIES: readonly AxisTemplateCategory[] = [
    'name',
    'axisLine',
    'axisTick',
    'minorTick',
    'axisLabel',
    'splitLine',
    'minorSplitLine',
    'splitArea',
    'axisPointer',
    'scale',
];

describe('X-axis templates — catalog shape', () => {
    it('is non-empty and every X category has entries (all shared with Y)', () => {
        expect(X_AXIS_TEMPLATES.length).toBeGreaterThan(0);
        for (const cat of X_CATEGORIES) {
            expect(AXIS_CATEGORY_ORDER, `X category '${cat}' is not a shared axis category`).toContain(cat);
            expect(
                X_AXIS_TEMPLATES.some(t => t.category === cat),
                `category '${cat}' has no entries`,
            ).toBe(true);
        }
    });

    it('has unique ids and every payload is a valid JSON object', () => {
        const ids = new Set<string>();
        for (const tpl of X_AXIS_TEMPLATES) {
            expect(ids.has(tpl.id), `duplicate id '${tpl.id}'`).toBe(false);
            ids.add(tpl.id);
            const json = JSON.parse(tpl.json) as unknown;
            expect(json && typeof json === 'object' && !Array.isArray(json), tpl.id).toBe(true);
        }
    });
});

describe('X-axis templates × buildXAxisEntry collision audit (ADR-0037 rule)', () => {
    it('no template leaf duplicates a GUI-owned xAxis key — every payload is wholly effective', () => {
        // classifyUserKeys resolves against MANAGED_PATHS.xAxis, which must stay in sync with
        // buildXAxisEntry (ADR-0030 invariant) — a managed leaf here fails red with its name.
        for (const tpl of X_AXIS_TEMPLATES) {
            const chip = chipOf(JSON.parse(tpl.json) as Record<string, unknown>);
            expect(chip, tpl.id).toBeDefined();
            expect(chip?.cls, `${tpl.id}: collides with GUI-owned leaves [${chip?.managed.join(', ')}]`).toBe(
                'effective',
            );
            expect(chip?.managed ?? [], `${tpl.id}: managed leaves must be empty`).toEqual([]);
        }
    });
});
