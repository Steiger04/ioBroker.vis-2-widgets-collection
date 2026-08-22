/**
 * Guard tests for the title / legend / tooltip section catalogs — the ADR-0037-style collision
 * audit applied to the three components the ADR-0044 move gave their own raw sections.
 *
 * @module EchartsCollectionWidget/editor/componentTemplates.test
 * @remarks
 * Every entry must be wholly FREE: no leaf may collide with a key the component's builder emits
 * (`buildTitleOption` / `buildLegend` / `buildTooltip`) — the GUI wins every collision, so a
 * colliding leaf could never take effect. The GUI-owned sets below mirror the builders' emissions
 * (the former advancedJsonTemplates GUI_OWNED_LEAVES lists, ADR-0021/0029/0032); keep them in
 * sync when a builder starts owning another leaf.
 */
import { describe, expect, it } from 'vitest';

import { TITLE_CATEGORY_ORDER, TITLE_TEMPLATES } from './titleTemplates';
import { LEGEND_CATEGORY_ORDER, LEGEND_TEMPLATES } from './legendTemplates';
import { TOOLTIP_CATEGORY_ORDER, TOOLTIP_TEMPLATES } from './tooltipTemplates';

/** GUI-owned leaves per component (the builders emit these). */
const GUI_OWNED: Record<string, string[]> = {
    // buildTitleOption: text + placement (dx/dy fold into left/top) + the four style knobs.
    title: [
        'text',
        'left',
        'top',
        'right',
        'bottom',
        'textStyle.color',
        'textStyle.fontSize',
        'textStyle.fontWeight',
        'textStyle.fontStyle',
    ],
    // buildLegend: show/data/placement/orient + swatch geometry + frame + the four style knobs
    // (ADR-0021 legendConfig) + inactiveColor (always-emit, b30b9ff).
    legend: [
        'show',
        'data',
        'left',
        'top',
        'right',
        'bottom',
        'orient',
        'icon',
        'itemWidth',
        'itemHeight',
        'itemGap',
        'inactiveColor',
        'backgroundColor',
        'borderColor',
        'borderWidth',
        'borderRadius',
        'padding',
        'textStyle.color',
        'textStyle.fontSize',
        'textStyle.fontWeight',
        'textStyle.fontStyle',
    ],
    // buildTooltip (ADR-0032): trigger/template formatter + valueFormatter + show:none.
    tooltip: ['show', 'trigger', 'formatter', 'valueFormatter'],
};

/** All leaf paths of a JSON object, dot-joined (arrays atomic). */
const leafPaths = (value: unknown, prefix = ''): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return prefix ? [prefix] : [];
    }
    return Object.entries(value).flatMap(([key, child]) => leafPaths(child, prefix ? `${prefix}.${key}` : key));
};

const checkCatalog = (
    component: string,
    order: readonly string[],
    templates: { id: string; category: string; label: string; json: string }[],
): void => {
    expect(templates.length, `${component} catalog empty`).toBeGreaterThan(0);
    const ids = new Set<string>();
    for (const cat of order) {
        expect(
            templates.some(t => t.category === cat),
            `${component} category '${cat}' has no entries`,
        ).toBe(true);
    }
    const owned = GUI_OWNED[component];
    for (const tpl of templates) {
        expect(ids.has(tpl.id), `duplicate id '${tpl.id}'`).toBe(false);
        ids.add(tpl.id);
        const json = JSON.parse(tpl.json) as Record<string, unknown>;
        expect(json && typeof json === 'object' && !Array.isArray(json), tpl.id).toBe(true);
        for (const leaf of leafPaths(json)) {
            expect(
                !owned.includes(leaf),
                `${tpl.id}: leaf '${leaf}' collides with a GUI-owned key (the GUI wins — it could never take effect)`,
            ).toBe(true);
        }
    }
};

describe('title/legend/tooltip section catalogs (ADR-0044) — shape + collision audit', () => {
    it('title: every category covered, ids unique, JSON valid, no GUI-owned leaf', () => {
        checkCatalog('title', TITLE_CATEGORY_ORDER, TITLE_TEMPLATES);
    });

    it('legend: every category covered, ids unique, JSON valid, no GUI-owned leaf', () => {
        checkCatalog('legend', LEGEND_CATEGORY_ORDER, LEGEND_TEMPLATES);
    });

    it('tooltip: every category covered, ids unique, JSON valid, no GUI-owned leaf', () => {
        checkCatalog('tooltip', TOOLTIP_CATEGORY_ORDER, TOOLTIP_TEMPLATES);
    });
});
