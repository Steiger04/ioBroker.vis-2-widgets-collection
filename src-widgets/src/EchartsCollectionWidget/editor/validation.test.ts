/**
 * Unit tests for the advisory validation engine (ADR-0010): {@link validateEditor} +
 * {@link familySwitchLoss} + {@link familySwitchSnippetLoss} (ADR-0042).
 *
 * @module EchartsCollectionWidget/editor/validation.test
 */
import { describe, expect, it } from 'vitest';

import { DEFAULT_EDITOR_STATE, type EditorState } from './editorState';
import { familySwitchLoss, familySwitchSnippetLoss, validateEditor } from './validation';

/** Shorthand: a working state with the given overrides. */
const st = (patch: Partial<EditorState>): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...patch });

describe('validateEditor', () => {
    it('clean cartesian state → no issues', () => {
        const issues = validateEditor(st({ series: [{ oid: 'modbus.0.x', name: 'A' }] }));
        expect(issues).toEqual({});
    });

    it('cartesian series without OID → series roll-up with the series name', () => {
        const issues = validateEditor(
            st({
                series: [
                    { oid: '', name: 'Temp' },
                    { oid: 'x.y.z', name: 'B' },
                ],
            }),
        );
        expect(issues.series).toEqual([{ key: 'echarts_val_oid_missing', args: ['Temp'] }]);
    });

    it('series name falls back to the 1-based index when unnamed', () => {
        const issues = validateEditor(
            st({
                series: [
                    { oid: 'a.b.c', name: 'A' },
                    { oid: '', name: '' },
                ],
            }),
        );
        expect(issues.series?.[0].args).toEqual(['2']);
    });

    it('pie slices without OID → series roll-up', () => {
        const issues = validateEditor(st({ chartType: 'pie', series: [{ oid: '', name: 'Slice' }] }));
        expect(issues.series).toHaveLength(1);
        expect(issues.series?.[0].key).toBe('echarts_val_oid_missing');
    });

    it('gauge: missing OID → series issue; min ≥ max → family issue', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: '', name: '' }],
                gauge: { min: 100, max: 0, progressWidth: 14, unit: '' },
            }),
        );
        expect(issues.series?.[0]).toEqual({ key: 'echarts_val_oid_missing', args: ['1'] });
        expect(issues.family).toEqual([{ key: 'echarts_val_gauge_range', args: undefined }]);
    });

    it('gauge with sane range → no family issue', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: 'a.b.c', name: '' }],
                gauge: { min: 0, max: 100, progressWidth: 14, unit: '' },
            }),
        );
        expect(issues.family).toBeUndefined();
    });

    it('radar: indicator without OID and max ≤ 0 → two series issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'radar',
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [{ name: 'Speed', max: 0, oid: '' }],
                },
            }),
        );
        expect(issues.series?.map(i => i.key)).toEqual(['echarts_val_oid_missing', 'echarts_val_radar_max']);
    });

    it('axis min ≥ max (both set) → axesZoom issue; one side auto → clean (ADR-0012)', () => {
        expect(validateEditor(st({ yAxes: [{ min: 10, max: 5 }] })).axesZoom).toHaveLength(1);
        expect(validateEditor(st({ yAxes: [{ max: 5 }] })).axesZoom).toBeUndefined();
        expect(validateEditor(st({ yAxes: [{ min: 5, max: 10 }] })).axesZoom).toBeUndefined();
    });

    it('visualMap enabled + min ≥ max → colors issue; disabled → clean', () => {
        const on = validateEditor(st({ visualMap: { enabled: true, min: 50, max: 50, colors: '' } }));
        expect(on.colors?.[0].key).toBe('echarts_val_vmap_range');
        const off = validateEditor(st({ visualMap: { enabled: false, min: 50, max: 50, colors: '' } }));
        expect(off.colors).toBeUndefined();
    });

    it('gauge/radar states never produce cartesian-only issues', () => {
        const issues = validateEditor(
            st({
                chartType: 'gauge',
                series: [{ oid: 'a.b.c', name: '' }],
                yAxes: [{ min: 10, max: 5 }], // bad range, but gauge skips cartesian checks
                visualMap: { enabled: true, min: 9, max: 1, colors: '' },
            }),
        );
        expect(issues.axesZoom).toBeUndefined();
        expect(issues.colors).toBeUndefined();
    });
});

describe('familySwitchLoss', () => {
    it('gauge keeps only the first bound series OID; radar indicators drop too', () => {
        const n = familySwitchLoss(
            st({
                chartType: 'gauge',
                series: [
                    { oid: 'a', name: '' },
                    { oid: 'b', name: '' },
                    { oid: '', name: '' },
                ],
                radar: { shape: 'polygon', splitNumber: 5, area: true, indicators: [{ name: 'I', max: 1, oid: 'c' }] },
            }),
        );
        expect(n).toBe(2); // series b + indicator c
    });

    it('gauge with a single bound series → no loss', () => {
        expect(familySwitchLoss(st({ chartType: 'gauge', series: [{ oid: 'a', name: '' }] }))).toBe(0);
    });

    it('radar drops every bound series OID (indicators survive)', () => {
        const n = familySwitchLoss(
            st({
                chartType: 'radar',
                series: [
                    { oid: 'a', name: '' },
                    { oid: 'b', name: '' },
                ],
                radar: { shape: 'polygon', splitNumber: 5, area: true, indicators: [{ name: 'I', max: 1, oid: 'c' }] },
            }),
        );
        expect(n).toBe(2);
    });

    it('cartesian/pie drop bound radar indicators, keep series OIDs', () => {
        const n = familySwitchLoss(
            st({
                chartType: 'line',
                series: [{ oid: 'a', name: '' }],
                radar: {
                    shape: 'polygon',
                    splitNumber: 5,
                    area: true,
                    indicators: [
                        { name: 'I', max: 1, oid: 'c' },
                        { name: 'J', max: 1, oid: 'd' },
                    ],
                },
            }),
        );
        expect(n).toBe(2);
    });

    it('nothing bound → zero loss for every family', () => {
        expect(familySwitchLoss(st({ chartType: 'gauge', series: [{ oid: '', name: '' }] }))).toBe(0);
        expect(familySwitchLoss(st({ chartType: 'pie' }))).toBe(0);
        expect(familySwitchLoss(st({ chartType: 'radar' }))).toBe(0);
    });
});

describe('familySwitchSnippetLoss (ADR-0042 — activations the family switch prunes on Apply)', () => {
    it('chart-level family-invalid activations count (radar snippet on a cartesian target)', () => {
        // (The classic xAxis-snippet case moved to the X-Karte's own raw with the ADR-0037
        // addendum; the chart catalog's family-stale case is radar-only ids on cartesian.)
        const n = familySwitchSnippetLoss(
            st({ chartType: 'line', chartSnippets: ['radar-splitarea', 'title-scaffold'] }),
        );
        expect(n).toBe(1);
    });

    it('gauge drops the series beyond the first with their activations; the survivor goes slot-stale', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'gauge',
                series: [
                    { oid: 'a', name: '', snippets: ['line-sampling'] },
                    { oid: 'b', name: '', snippets: ['line-clip', 'line-markpoint'] },
                ],
            }),
        );
        expect(n).toBe(3);
    });

    it('radar drops every cartesian series (survivor stale + dropped counted)', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'radar',
                series: [
                    { oid: 'a', name: '', snippets: ['line-sampling'] },
                    { oid: 'b', name: '', snippets: ['line-clip'] },
                ],
            }),
        );
        expect(n).toBe(2);
    });

    it('pie target: slice-slot-stale cartesian activations count', () => {
        const n = familySwitchSnippetLoss(
            st({ chartType: 'pie', series: [{ oid: 'a', name: '', snippets: ['line-sampling', 'slice-itemstyle'] }] }),
        );
        expect(n).toBe(1);
    });

    it('valid activations cost nothing — cartesian line activations on a cartesian line target', () => {
        const n = familySwitchSnippetLoss(
            st({
                chartType: 'line',
                chartSnippets: ['title-scaffold'],
                series: [{ oid: 'a', name: '', snippets: ['line-sampling'] }],
            }),
        );
        expect(n).toBe(0);
    });

    it('no activations → zero for every family', () => {
        expect(familySwitchSnippetLoss(st({ chartType: 'gauge', series: [{ oid: '', name: '' }] }))).toBe(0);
        expect(familySwitchSnippetLoss(st({ chartType: 'radar' }))).toBe(0);
        expect(familySwitchSnippetLoss(st({ chartType: 'pie' }))).toBe(0);
    });
});
