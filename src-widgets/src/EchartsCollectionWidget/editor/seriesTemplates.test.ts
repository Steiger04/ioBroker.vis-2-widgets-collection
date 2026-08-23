/**
 * Unit tests for the per-series Option-group scaffold catalog (ADR-0043).
 *
 * @module EchartsCollectionWidget/editor/seriesTemplates.test
 * @remarks
 * Two mechanical guarantees:
 *  1. Catalog shape: globally-unique ids, valid JSON objects, every category in the order map
 *     with an i18n header.
 *  2. The LEAF AUDIT: no template may touch an ALWAYS-builder-emitted leaf, and a
 *     CONDITIONALLY-owned leaf only via the explicit `CONDITIONAL_ALLOW` list. Audited against
 *     the FULLEST card state per slot (every conditional emit active) — if a template classifies
 *     clean here, it is clean under ANY card state except its allow-listed conditionals. Mirrors
 *     the ADR-0037 axis audit, with the ADR-0043 allow-list as the series-side extension.
 */
import { describe, expect, it } from 'vitest';

import {
    CONDITIONAL_ALLOW,
    SERIES_CATEGORY_I18N,
    SERIES_CATEGORY_ORDER,
    SERIES_TEMPLATES,
    type SeriesTemplate,
    type SeriesTemplateSlot,
} from './seriesTemplates';
import { classifySeriesKeys, type SeriesAnalysisContext } from './seriesRawAnalysis';
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';

/** Every conditional card emit ACTIVE — the most restrictive state each slot can be in. */
const FULLEST: Record<SeriesTemplateSlot, SeriesAnalysisContext> = {
    'cartesian-line': {
        slot: 'cartesian-line',
        meta: {
            label: true,
            stack: 's',
            symbolSize: 6,
            step: 'end',
            cornerRadius: 4,
            area: 'gradient',
            unit: '°C', // ADR-0057: the per-series Wert-Formatter facts activate label.formatter
        } as EchartsSeriesMeta,
        markLineHost: true,
    },
    'cartesian-bar': {
        slot: 'cartesian-bar',
        meta: {
            label: true,
            labelPosition: 'inside',
            labelFontSize: 14,
            labelColor: '#abc',
            stack: 's',
            cornerRadius: 4,
            barGap: 0.2,
            barCategoryGap: 0.3,
            barWidth: '20',
        } as EchartsSeriesMeta,
        markLineHost: true,
        barLabelFormatterActive: true,
    },
    pie: { slot: 'pie', pieRoseActive: true, animationEasingActive: true },
    'pie-slice': { slot: 'pie-slice', meta: {} as EchartsSeriesMeta },
    gauge: { slot: 'gauge', gaugeUnitActive: true, gaugeTargetActive: true, animationEasingActive: true },
    radar: { slot: 'radar', radarAreaActive: true, animationEasingActive: true },
};

describe('SERIES_TEMPLATES catalog shape (ADR-0043)', () => {
    it('has globally-unique ids, valid object JSON and a known, headered category', () => {
        const ids = new Set<string>();
        for (const templates of Object.values(SERIES_TEMPLATES)) {
            for (const t of templates) {
                expect(ids.has(t.id), `duplicate id ${t.id}`).toBe(false);
                ids.add(t.id);
                expect(SERIES_CATEGORY_ORDER).toContain(t.category);
                expect(SERIES_CATEGORY_I18N[t.category]).toBeTruthy();
                const v = JSON.parse(t.json) as unknown;
                expect(v && typeof v === 'object' && !Array.isArray(v), `${t.id} must be a JSON object`).toBe(true);
            }
        }
    });

    it('each slot carries at least one entry per category it surfaces', () => {
        for (const templates of Object.values(SERIES_TEMPLATES)) {
            expect(templates.length).toBeGreaterThan(0);
            for (const t of templates) {
                expect(templates.filter(x => x.category === t.category).length).toBeGreaterThan(0);
            }
        }
    });
});

describe('SERIES_TEMPLATES leaf audit (ADR-0043) — no ALWAYS-managed leaf; conditionals only allow-listed', () => {
    it('every template classifies effective/partial against the FULLEST card state, never ignored', () => {
        for (const [slot, templates] of Object.entries(SERIES_TEMPLATES) as [SeriesTemplateSlot, SeriesTemplate[]][]) {
            const ctx = FULLEST[slot];
            const allow = CONDITIONAL_ALLOW[slot];
            for (const t of templates) {
                const chips = classifySeriesKeys(JSON.parse(t.json) as Record<string, unknown>, ctx);
                for (const chip of chips) {
                    // 'ignored' is acceptable ONLY when every swallowed leaf is allow-listed (the
                    // template is deliberately conditional — e.g. areaStyle · gradient is wholly
                    // card-owned in gradient area mode, effective otherwise).
                    if (chip.cls === 'ignored') {
                        expect(
                            chip.managed.every(m => allow.has(m)),
                            `${slot}/${t.id}: key '${chip.key}' is wholly card-owned (${chip.managed.join(', ')}) with leaves outside CONDITIONAL_ALLOW — omit them`,
                        ).toBe(true);
                        continue;
                    }
                    const unallowed = chip.managed.filter(m => !allow.has(m));
                    expect(
                        unallowed,
                        `${slot}/${t.id}: '${chip.key}' touches card-owned leaves outside CONDITIONAL_ALLOW (${unallowed.join(', ')})`,
                    ).toEqual([]);
                }
            }
        }
    });

    it('every CONDITIONAL_ALLOW leaf is actually touched by some template of its slot (no rotted entries)', () => {
        for (const [slot, allow] of Object.entries(CONDITIONAL_ALLOW) as [SeriesTemplateSlot, ReadonlySet<string>][]) {
            const touched = new Set<string>();
            for (const t of SERIES_TEMPLATES[slot]) {
                for (const chip of classifySeriesKeys(JSON.parse(t.json) as Record<string, unknown>, FULLEST[slot])) {
                    chip.managed.forEach(m => touched.add(m));
                }
            }
            for (const leaf of allow) {
                expect(touched.has(leaf), `${slot}: allow-listed '${leaf}' is touched by no template`).toBe(true);
            }
        }
    });
});
