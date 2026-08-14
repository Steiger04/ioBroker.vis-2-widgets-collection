/**
 * The ADR-0036 template guard: every echarts component mainType a template sets MUST be in
 * `REPLACE_MERGE` — deleting a template must revert the preview AND the widget, and merge-mode
 * `setOption` silently refuses to do that (the xAxis template was deletable while its keys kept
 * rendering until `'xAxis'` joined the list). A future template that forgets fails HERE, red,
 * instead of shipping a delete-does-nothing bug.
 *
 * @module EchartsCollectionWidget/editor/advancedJsonTemplates.test
 */
import { describe, expect, it } from 'vitest';

import { TEMPLATES_BY_FAMILY, TPL_ALL } from './advancedJsonTemplates';
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

describe('Advanced-JSON templates × REPLACE_MERGE guard (ADR-0036)', () => {
    const all = [...TPL_ALL, ...Object.values(TEMPLATES_BY_FAMILY).flat()];

    it('the catalog is non-empty (the guard is actually guarding something)', () => {
        expect(all.length).toBeGreaterThan(0);
    });

    it('every template is valid JSON', () => {
        for (const tpl of all) {
            expect(() => JSON.parse(tpl.json), tpl.label).not.toThrow();
        }
    });

    it('every component mainType a template sets is in REPLACE_MERGE — deletion must revert', () => {
        for (const tpl of all) {
            const json = JSON.parse(tpl.json) as Record<string, unknown>;
            for (const key of Object.keys(json)) {
                if (COMPONENT_MAINTYPES.has(key)) {
                    expect(REPLACE_MERGE, `${tpl.label}: '${key}' must be in REPLACE_MERGE (ADR-0036)`).toContain(key);
                }
            }
        }
    });
});
