/**
 * Guard tests for the X-axis template catalog — the ADR-0037 axis-catalog audit applied to the
 * X-Karte's own raw (X joins the axis anatomy; see the ADR-0037 addendum).
 *
 * @module EchartsCollectionWidget/editor/xAxisTemplates.test
 * @remarks
 * Every entry must be wholly FREE: no leaf may collide with a key `buildXAxisEntry` emits — the
 * card wins every collision, so a colliding leaf could never take effect. The GUI-owned set
 * below mirrors the builder's emissions (the former MANAGED_PATHS.xAxis of the retired
 * advancedJsonAnalysis, ADR-0045); keep it in sync when the X-Karte starts owning another leaf.
 * Theme-neutrality per ADR-0037: no light-mode colour hardcodes (the axisPointer label's #fff is
 * the deliberate dark-chip contrast, Y precedent).
 */
import { describe, expect, it } from 'vitest';

import { X_AXIS_TEMPLATES } from './xAxisTemplates';
import { AXIS_CATEGORY_ORDER, type AxisTemplateCategory } from './axisTemplates';

/**
 * The xAxis leaves `buildXAxisEntry` (optionBuilders/cartesian.ts) emits — the ADR-0030
 * invariant, now a local set since the chart-U analysis module retired with the chart-U
 * (ADR-0045). Add a leaf here whenever the X-Karte GUI starts owning another subkey.
 */
const X_GUI_OWNED = new Set([
    'type',
    'name',
    'nameLocation',
    'nameGap',
    'axisLabel.formatter',
    'axisLabel.color',
    'axisLabel.rotate',
    'axisLine.show',
    'axisLine.lineStyle.color',
    'axisLine.onZero',
    'nameTextStyle.color',
    'splitLine.show',
    'axisTick.show',
    'splitNumber',
    'minInterval',
    'nameRotate',
    'offset',
]);

/** The nested containers whose own children are the leaves (objects with GUI-owned CHILDREN). */
const X_NESTED = new Set(['axisLabel', 'axisLine', 'nameTextStyle', 'splitLine', 'axisTick']);

/**
 * The present leaf paths of a template payload (the two-level walk of the axis raw analysis):
 * direct children are leaves, except the nested containers whose own children are the leaves.
 */
const leafPaths = (value: unknown, nested: ReadonlySet<string>, prefix = ''): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return prefix ? [prefix] : [];
    }
    return Object.entries(value).flatMap(([key, child]) =>
        prefix === '' && nested.has(key) && child && typeof child === 'object' && !Array.isArray(child)
            ? Object.keys(child).map(sub => `${key}.${sub}`)
            : leafPaths(child, nested, prefix ? `${prefix}.${key}` : key),
    );
};

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
        // A GUI-owned leaf fails red with its name — the card wins every collision, so it could
        // never take effect.
        for (const tpl of X_AXIS_TEMPLATES) {
            for (const leaf of leafPaths(JSON.parse(tpl.json), X_NESTED)) {
                expect(!X_GUI_OWNED.has(leaf), `${tpl.id}: leaf '${leaf}' collides with a GUI-owned xAxis key`).toBe(
                    true,
                );
            }
        }
    });
});
