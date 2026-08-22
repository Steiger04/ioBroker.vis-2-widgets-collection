/**
 * Guard tests for the radar template catalog — the ADR-0037-style collision audit applied to the
 * RadarOptionsSection's raw (ADR-0045, ticket 04).
 *
 * @module EchartsCollectionWidget/editor/radarTemplates.test
 * @remarks
 * Every entry must be wholly FREE: no leaf may collide with a key the radar builder emits from
 * the GUI (shape / splitNumber / area / indicator — the RadarOptionsSection + RadarIndicators
 * own them) — the builder wins every collision (the raw folds UNDER the built radar entry), so a
 * colliding leaf could never take effect.
 */
import { describe, expect, it } from 'vitest';

import { RADAR_CATEGORY_ORDER, RADAR_TEMPLATES } from './radarTemplates';

/**
 * The radar leaves the GUI owns: buildRadarOption emits `indicator`, `shape`, `splitNumber` and
 * the series-level `areaStyle` comes from the `area` toggle (which maps to the SERIES, not the
 * radar component — but a component-level `area` key would be equally foreign to the catalog).
 * Keep in sync when the radar builder starts owning another leaf.
 */
const GUI_OWNED = ['shape', 'splitNumber', 'indicator', 'area'];

/** All leaf paths of a JSON object, dot-joined (arrays atomic). */
const leafPaths = (value: unknown, prefix = ''): string[] => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return prefix ? [prefix] : [];
    }
    return Object.entries(value).flatMap(([key, child]) => leafPaths(child, prefix ? `${prefix}.${key}` : key));
};

describe('radar section catalog (ADR-0045) — shape + collision audit', () => {
    it('every category covered, ids unique, payloads valid JSON objects', () => {
        expect(RADAR_TEMPLATES.length).toBeGreaterThan(0);
        const ids = new Set<string>();
        for (const cat of RADAR_CATEGORY_ORDER) {
            expect(
                RADAR_TEMPLATES.some(t => t.category === cat),
                `category '${cat}' has no entries`,
            ).toBe(true);
        }
        for (const tpl of RADAR_TEMPLATES) {
            expect(ids.has(tpl.id), `duplicate id '${tpl.id}'`).toBe(false);
            ids.add(tpl.id);
            const json = JSON.parse(tpl.json) as unknown;
            expect(json && typeof json === 'object' && !Array.isArray(json), tpl.id).toBe(true);
        }
    });

    it('no scaffold leaf collides with a radar GUI-owned key — every payload is wholly effective', () => {
        for (const tpl of RADAR_TEMPLATES) {
            for (const leaf of leafPaths(JSON.parse(tpl.json))) {
                expect(
                    !GUI_OWNED.includes(leaf),
                    `${tpl.id}: leaf '${leaf}' collides with a GUI-owned radar key (the GUI wins — it could never take effect)`,
                ).toBe(true);
            }
        }
    });

    it('the ids carry over the former chart-level radar names (recognition, NOT migration)', () => {
        // The former chart-level catalog shipped exactly these ids (ADR-0040 regroup). ADR-0045
        // migrates NO activations (chart-level snippets die with the section) — the ids keep the
        // names only so the entries read familiar to a user of the old catalog.
        expect(RADAR_TEMPLATES.map(t => t.id)).toEqual(['radar-splitarea', 'radar-axisname']);
    });
});
