/**
 * FAMILY_EDITORIAL tests (ADR-0083 ticket 02): the editorial record + every dispatcher seam
 * that reads it.
 *
 * @module EchartsCollectionWidget/families/editorial.test
 * @remarks
 * DOM pool: the editorial record imports the section modules (React), so this suite joins the
 * DOM_TS_TESTS list. The registry seam pins the two records' key parity (the compile-time
 * lockstep's runtime twin) and the membership consistency (every picker value lands at exactly
 * its family via the kernel); the inventory/summary literals are the pre-registry goldmaster —
 * Neu == Alt for the rail order, the slot titles and the family summary lines.
 */
import { describe, expect, it } from 'vitest';

import { FAMILY_CORES } from './cores';
import { FAMILY_EDITORIAL, chartTypePickerEntries } from './editorial';
import { familyOf } from './kernel';
import { sectionInventory } from '../editor/EchartsEditorSections';
import { sectionSummaries } from '../editor/summaries';
import { DEFAULT_EDITOR_STATE, type EditorState } from '../editor/editorState';

/** Translation identity — keys and interpolations stay visible in the assertions. */
const t = (key: string, ...args: string[]): string => (args.length ? `${key}(${args.join(',')})` : key);

const st = (patch: Partial<EditorState> = {}): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...patch });

describe('FAMILY_EDITORIAL — registry parity with the family union', () => {
    it('carries exactly the FAMILY_CORES keys — no family ships half-registered', () => {
        expect(Object.keys(FAMILY_EDITORIAL).sort()).toEqual(Object.keys(FAMILY_CORES).sort());
    });

    it('every profile owns at least one rail slot and one picker entry', () => {
        for (const [family, editorial] of Object.entries(FAMILY_EDITORIAL)) {
            expect(editorial.railSlots.length, `${family} rail slots`).toBeGreaterThan(0);
            expect(editorial.picker.length, `${family} picker entries`).toBeGreaterThan(0);
        }
    });
});

describe('picker membership — every picker value lands at exactly its family (kernel)', () => {
    it('each profile only lists chart types the kernel assigns to it', () => {
        for (const [family, editorial] of Object.entries(FAMILY_EDITORIAL)) {
            for (const entry of editorial.picker) {
                expect(familyOf(entry.value), `${entry.value} must map to ${family}`).toBe(family);
            }
        }
    });

    it('the concatenated picker is the four types in registry order — line, bar, scatter, pie', () => {
        expect(chartTypePickerEntries().map(e => e.value)).toEqual(['line', 'bar', 'scatter', 'pie']);
        expect(chartTypePickerEntries().map(e => e.label)).toEqual([
            'echarts_type_line',
            'echarts_type_bar',
            'echarts_type_scatter',
            'echarts_type_pie',
        ]);
    });
});

describe('rail slots — keys, titles and the section inventory (goldmaster Neu == Alt)', () => {
    it('cartesian owns the axesZoom slot, pie owns pieOptions (the renamed family slot)', () => {
        expect(FAMILY_EDITORIAL.cartesian.railSlots.map(s => s.key)).toEqual(['axesZoom']);
        expect(FAMILY_EDITORIAL.pie.railSlots.map(s => s.key)).toEqual(['pieOptions']);
        expect(Object.fromEntries(FAMILY_EDITORIAL.cartesian.railSlots.map(s => [s.key, s.titleKey]))).toEqual({
            axesZoom: 'echarts_sec_axes_zoom',
        });
        expect(Object.fromEntries(FAMILY_EDITORIAL.pie.railSlots.map(s => [s.key, s.titleKey]))).toEqual({
            pieOptions: 'echarts_sec_pie_options',
        });
    });

    it.each(['line', 'bar', 'scatter'] as const)(
        'the cartesian inventory keeps the slot right after series (%s)',
        chartType => {
            expect(sectionInventory(chartType)).toEqual([
                'dataSource',
                'series',
                'axesZoom',
                'title',
                'legend',
                'tooltip',
                'colors',
                'toolbox',
                'behavior',
            ]);
        },
    );

    it('the pie inventory carries pieOptions in the same slot position', () => {
        expect(sectionInventory('pie')).toEqual([
            'dataSource',
            'series',
            'pieOptions',
            'title',
            'legend',
            'tooltip',
            'colors',
            'toolbox',
            'behavior',
        ]);
    });
});

describe('family slot summaries (goldmaster Neu == Alt, via sectionSummaries)', () => {
    it('cartesian axesZoom digests „Y bounds · axis count · Zoom" (B8)', () => {
        expect(
            sectionSummaries(
                st({
                    yAxes: [{ position: 'left', min: 0, max: 100 }, { position: 'right' }, { position: 'left' }],
                    dataZoomSlider: true,
                    dataZoomInside: true,
                }),
                t,
            ).axesZoom,
        ).toBe('Y 0–100 · echarts_summary_axes(3) · echarts_tab_zoom');
        expect(sectionSummaries(st({ yAxes: [{ position: 'left' }] }), t).axesZoom).toBe('Y auto');
    });

    it('pie pieOptions digests donut / rose / plain — rose by its labels (B8)', () => {
        expect(sectionSummaries(st({ chartType: 'pie', pie: { innerRadius: 0.5 } }), t).pieOptions).toBe(
            'echarts_summary_donut(50%)',
        );
        expect(sectionSummaries(st({ chartType: 'pie', pie: { rose: 'radius' } }), t).pieOptions).toBe(
            'echarts_pie_rose · echarts_rose_radius',
        );
        expect(sectionSummaries(st({ chartType: 'pie' }), t).pieOptions).toBe('');
    });
});

describe('series card traits (ADR-0100 decision 2 — the family share of the card)', () => {
    it('cartesian authors every tab, type, colour and axis', () => {
        expect(FAMILY_EDITORIAL.cartesian.seriesCard).toEqual({
            tabs: ['basis', 'daten', 'stil', 'format', 'json'],
            type: true,
            color: true,
            axis: true,
            ring: false,
        });
    });

    it('pie rings: Basis · Daten · JSON, no type, no colour, no axis, ring identity (ADR-0082)', () => {
        expect(FAMILY_EDITORIAL.pie.seriesCard).toEqual({
            tabs: ['basis', 'daten', 'json'],
            type: false,
            color: false,
            axis: false,
            ring: true,
        });
    });
});
