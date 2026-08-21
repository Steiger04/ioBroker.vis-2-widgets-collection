/**
 * The ADR-0036 template guard + the ADR-0040 catalog audits.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates.test
 * @remarks
 * Three mechanical guarantees over the chart-level catalog:
 *  1. Every echarts component mainType a template sets MUST be in `REPLACE_MERGE` — deleting the
 *     template must revert the preview AND the widget, and merge-mode `setOption` silently refuses
 *     to do that. A future template that forgets fails HERE, red.
 *  2. No template leaf duplicates a builder-emitted (GUI-owned) key (the ADR-0037 audit rule
 *     applied chart-wide) — a colliding leaf would silently lose to the GUI and mislead.
 *  3. Value variants + the audited xAxis/radar entries stay SMALL (≤ 8 leaves — the ADR-0040
 *     one-capability rule); the four complete basis SCAFFOLDS (ADR-0043 partial reversion of
 *     ADR-0040's snippet-only form) are exempt by design — completeness is their point.
 */
import { describe, expect, it } from 'vitest';

import { CHART_CATEGORY_ORDER, CHART_TEMPLATES } from './advancedJsonTemplates';
import { classifyUserKeys } from './advancedJsonAnalysis';
import { REPLACE_MERGE } from '../replaceMerge';

// echarts component mainTypes an option top-level key can name (the coordinate systems, the
// overlays, the axes). `aria`/`dataset` are deliberately absent for the reason `replaceMerge.ts`
// documents (preprocessors — replaceMerge rejects them), so this hand-list must be revisited on an
// echarts upgrade that adds a new component type.
const COMPONENT_MAINTYPES: ReadonlySet<string> = new Set([
    'series',
    'title',
    'legend',
    'tooltip',
    'toolbox',
    'grid',
    'xAxis',
    'yAxis',
    'radiusAxis',
    'angleAxis',
    'singleAxis',
    'polar',
    'radar',
    'parallel',
    'parallelAxis',
    'calendar',
    'timeline',
    'dataZoom',
    'visualMap',
    'graphic',
    'axisPointer',
    'brush',
]);

/** GUI-owned leaves per component (the builders emit these — ADR-0021/0029/0032/0035 + legendConfig). */
const GUI_OWNED_LEAVES: Record<string, string[]> = {
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
    legend: [
        'show',
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
    tooltip: ['show', 'trigger', 'formatter', 'valueFormatter'],
    toolbox: [],
    xAxis: [
        'type',
        'name',
        'nameLocation',
        'nameGap',
        'nameRotate',
        'nameTextStyle',
        'splitNumber',
        'minInterval',
        'offset',
        'axisLabel.formatter',
        'axisLabel.rotate',
        'axisLabel.color',
        'axisLine.lineStyle.color',
        'axisTick.show',
        'splitLine.show',
    ],
    radar: [],
};

/** All leaf paths of a JSON object, dot-joined. */
const leafPaths = (value: unknown, prefix = ''): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return prefix ? [prefix] : [];
    }
    return Object.entries(value).flatMap(([key, child]) => leafPaths(child, prefix ? `${prefix}.${key}` : key));
};

const countLeaves = (value: unknown): number => leafPaths(value).length;

describe('Advanced-JSON templates × REPLACE_MERGE guard (ADR-0036)', () => {
    it('the catalog is non-empty and every category has entries', () => {
        expect(CHART_TEMPLATES.length).toBeGreaterThan(0);
        for (const cat of CHART_CATEGORY_ORDER) {
            expect(
                CHART_TEMPLATES.some(t => t.category === cat),
                `category '${cat}' has no entries`,
            ).toBe(true);
        }
    });

    it('ids are unique and every template is a valid JSON object', () => {
        const ids = new Set<string>();
        for (const tpl of CHART_TEMPLATES) {
            expect(ids.has(tpl.id), `duplicate id '${tpl.id}'`).toBe(false);
            ids.add(tpl.id);
            const json = JSON.parse(tpl.json) as unknown;
            expect(json && typeof json === 'object' && !Array.isArray(json), tpl.id).toBe(true);
        }
    });

    it('every component mainType a template sets is in REPLACE_MERGE — deletion must revert', () => {
        for (const tpl of CHART_TEMPLATES) {
            const json = JSON.parse(tpl.json) as Record<string, unknown>;
            for (const key of Object.keys(json)) {
                if (COMPONENT_MAINTYPES.has(key)) {
                    expect(REPLACE_MERGE, `${tpl.id}: '${key}' must be in REPLACE_MERGE (ADR-0036)`).toContain(key);
                }
            }
        }
    });
});

describe('Advanced-JSON templates × GUI-owned-leaf audit (ADR-0040/0043)', () => {
    it('no template leaf duplicates a builder-emitted (GUI-owned) key', () => {
        for (const tpl of CHART_TEMPLATES) {
            const owned = GUI_OWNED_LEAVES[tpl.category];
            const json = JSON.parse(tpl.json) as Record<string, unknown>;
            const ownedLeaves = leafPaths(json[tpl.category]);
            for (const leaf of ownedLeaves) {
                expect(
                    owned,
                    `${tpl.id}: leaf '${leaf}' collides with a GUI-owned key (the GUI wins — the snippet would mislead)`,
                ).not.toContain(leaf);
            }
        }
    });

    it('every template brings ≥1 effective key (ADR-0042 addendum — classifyUserKeys audit gate)', () => {
        // The merge-analysis module lives on ONLY as this catalog audit (its UI chips are
        // retired): a template whose EVERY key the GUI would swallow can never take effect.
        for (const tpl of CHART_TEMPLATES) {
            const chips = classifyUserKeys(JSON.parse(tpl.json) as Record<string, unknown>);
            expect(
                chips.some(c => c.cls === 'effective'),
                `${tpl.id}: every key is GUI-owned — the template can never take effect`,
            ).toBe(true);
        }
    });

    it('non-scaffold entries stay small — one capability per entry, max 8 leaves (ADR-0040/0043)', () => {
        for (const tpl of CHART_TEMPLATES) {
            if (tpl.id.endsWith('-scaffold')) {
                continue; // complete basis scaffold (ADR-0043) — completeness is the point
            }
            const json = JSON.parse(tpl.json) as Record<string, unknown>;
            expect(countLeaves(json), `${tpl.id} has too many leaves for a snippet`).toBeLessThanOrEqual(8);
        }
    });

    it('family-scoped entries name valid families', () => {
        const valid = ['cartesian', 'pie', 'gauge', 'radar'];
        for (const tpl of CHART_TEMPLATES) {
            for (const family of tpl.families ?? []) {
                expect(valid, `${tpl.id}: unknown family '${family}'`).toContain(family);
            }
        }
    });
});
