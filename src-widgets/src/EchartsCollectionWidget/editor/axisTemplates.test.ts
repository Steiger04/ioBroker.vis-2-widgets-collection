/**
 * Unit tests for the per-axis template catalog (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/axisTemplates.test
 */
import { describe, expect, it } from 'vitest';

import { AXIS_CATEGORY_I18N, AXIS_CATEGORY_ORDER, AXIS_TEMPLATES, type AxisTemplateCategory } from './axisTemplates';
import { classifyAxisKeys } from './axisRawAnalysis';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

describe('AXIS_TEMPLATES catalog shape (ADR-0037, option-group categories ADR-0043)', () => {
    it('has unique ids, valid object JSON and a known category', () => {
        const ids = new Set<string>();
        for (const t of AXIS_TEMPLATES) {
            expect(ids.has(t.id), `duplicate id ${t.id}`).toBe(false);
            ids.add(t.id);
            expect(AXIS_CATEGORY_ORDER).toContain(t.category);
            expect(AXIS_CATEGORY_I18N[t.category]).toBeTruthy();
            const v = JSON.parse(t.json) as unknown;
            expect(v && typeof v === 'object' && !Array.isArray(v), `${t.id} must be a JSON object`).toBe(true);
        }
    });

    it('covers all ten echarts option-group categories (ADR-0043)', () => {
        const byCat = new Map<AxisTemplateCategory, number>();
        for (const t of AXIS_TEMPLATES) {
            byCat.set(t.category, (byCat.get(t.category) ?? 0) + 1);
        }
        for (const cat of AXIS_CATEGORY_ORDER) {
            expect(byCat.get(cat) ?? 0, `category '${cat}' has no entries`).toBeGreaterThan(0);
        }
    });
});

describe('AXIS_TEMPLATES audit (ADR-0037/0043) — no template touches a builder-emitted leaf', () => {
    // The MOST restrictive card state: every conditional emit active (name/min/max/scale/
    // splitNumber/minInterval/nameRotate/format/colour + inherited series colour/name). If a
    // template classifies `effective` here, it is effective under ANY card state — this is the
    // series-template "audited against the builder" rule, state-resolved.
    const fullest: EchartsAxisConfig = {
        name: 'kW',
        min: 0,
        max: 100,
        scale: true,
        format: '{value} kW',
        color: '#f00',
        splitNumber: 5,
        minInterval: 1,
        nameRotate: 45,
        log: true,
        position: 'left',
        offset: 0,
        alignTicks: true,
        splitLine: true,
        axisTick: true,
        nameLocation: 'middle',
        nameGap: 18,
    };

    it('every snippet is wholly effective against a fully-configured axis', () => {
        for (const t of AXIS_TEMPLATES) {
            const chips = classifyAxisKeys(JSON.parse(t.json) as Record<string, unknown>, {
                axis: fullest,
                seriesColor: '#abc',
                seriesName: 'Power',
            });
            const bad = chips.filter(c => c.cls !== 'effective');
            expect(
                bad,
                `${t.id} touches card-managed keys: ${bad.map(c => `${c.key} (${c.cls}: ${c.managed.join(',')})`).join('; ')}`,
            ).toEqual([]);
        }
    });
});
