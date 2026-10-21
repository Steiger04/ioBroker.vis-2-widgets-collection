/**
 * Family presentation-fragment tests (ADR-0083 ticket 03) — the profile-side assembly of the
 * per-family presentation share.
 *
 * @module EchartsCollectionWidget/families/fragments.test
 * @remarks
 * Node pool: the fragment modules read the body-side decode/coercion helpers only — no
 * section imports. The expectations are the pre-split goldmaster: every literal is derived
 * from the cartesian/pie fields `toPresentationConfig` assembled before the fragmentation,
 * so the profile seam proves itself Neu == Alt (byte-identical, not merely green).
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../../lib/encoding';
import { FAMILY_CORES } from './cores';
import type { PresentationCompanions } from './types';
import type { CartesianFragment } from '../optionBuilders/types';
import type { EchartsAxisConfig, EchartsMarkLine } from '../../types/field-definitions/echarts-fields';

const companions = (patch: Partial<PresentationCompanions> = {}): PresentationCompanions => ({
    src: {},
    chartConfig: {},
    markLines: [],
    ...patch,
});

describe('cartesian presentationFragment — the cartesian share of the presentation (goldmaster Neu == Alt)', () => {
    const fragment = (patch: Partial<PresentationCompanions> = {}): CartesianFragment =>
        FAMILY_CORES.cartesian.presentationFragment(companions(patch));

    it('derives the cartesian type from the chart-type field; anything else is line', () => {
        expect(fragment({ src: { chartType: 'bar' } }).cartesianType).toBe('bar');
        expect(fragment({ src: { chartType: 'scatter' } }).cartesianType).toBe('scatter');
        expect(fragment({ src: { chartType: 'line' } }).cartesianType).toBe('line');
        // A non-cartesian or legacy stored value never reaches a cartesian type — line (the
        // pre-split family-guarded derivation collapsed to the same answer).
        expect(fragment({ src: { chartType: 'pie' } }).cartesianType).toBe('line');
        expect(fragment({ src: { chartType: 'area' } }).cartesianType).toBe('line');
    });

    it('passes decoded Y-axes through; empty/absent synthesises axis 0 from the legacy scalars', () => {
        const decoded: EchartsAxisConfig[] = [{ id: 'ax-1', position: 'right', offset: 80 }];
        expect(fragment({ yAxes: decoded }).yAxes).toBe(decoded);
        expect(fragment({ yAxes: [] }).yAxes).toEqual([
            {
                name: '',
                min: undefined,
                max: undefined,
                log: false,
                format: undefined,
                splitLine: true,
                position: 'left',
            },
        ]);
        expect(
            fragment({ src: { yName: 'kWh', yMin: 0, yMax: 100, yLog: true, yFormat: '{value}', ySplit: false } })
                .yAxes,
        ).toEqual([
            { name: 'kWh', min: 0, max: 100, log: true, format: '{value}', splitLine: false, position: 'left' },
        ]);
    });

    it('reads the X-Karte: the editor object wins, else the blob, else the legacy xSplit synthesis', () => {
        const object = { name: 'Zeit' };
        expect(fragment({ src: { xAxis: object } }).xAxis).toBe(object);
        // Blob decode stays body-side (decodeXAxisWithLegacy) — the fragment just calls it.
        expect(fragment({ src: { xSplit: true } }).xAxis).toEqual({ splitLine: true });
        expect(fragment({}).xAxis).toEqual({});
    });

    // The dual-source X-Karte contract, moved verbatim from the pre-split presentation suite
    // (ADR-0035; the assertions are the Alt goldmaster, the seam is the fragment's).
    it('reads the editor-state xAxis OBJECT when present', () => {
        expect(fragment({ src: { xAxis: { format: '{HH}:{mm}' } } }).xAxis).toEqual({ format: '{HH}:{mm}' });
    });
    it('decodes the rxData xAxis BLOB when no object is present', () => {
        const blob = encodeBlob(JSON.stringify({ name: 'Zeit', splitLine: true }));
        expect(fragment({ src: { xAxis: blob } }).xAxis).toEqual({ name: 'Zeit', splitLine: true });
    });
    it('the blob wins over a stale legacy xSplit', () => {
        const blob = encodeBlob(JSON.stringify({ splitLine: false }));
        expect(fragment({ src: { xAxis: blob, xSplit: true } }).xAxis).toEqual({ splitLine: false });
    });

    it('carries the resolved markings and both zoom toggles (defaults off)', () => {
        const markLines: EchartsMarkLine[] = [{ id: 'm0', upper: 50 }];
        const f = fragment({ src: { dataZoomSlider: true, dataZoomInside: true }, markLines });
        expect(f.markLines).toBe(markLines);
        expect(f.dataZoomSlider).toBe(true);
        expect(f.dataZoomInside).toBe(true);
        expect(fragment().dataZoomSlider).toBe(false);
        expect(fragment().dataZoomInside).toBe(false);
    });

    it('assembles the visualMap only while enabled — min/max defaulted, colours parsed', () => {
        expect(fragment().visualMap).toBeUndefined();
        expect(fragment({ src: { visualMapEnabled: true } }).visualMap).toEqual({
            enabled: true,
            min: 0,
            max: 100,
            colors: [],
        });
        expect(
            fragment({
                src: { visualMapEnabled: true, visualMapMin: 5, visualMapMax: 55, visualMapColors: '#f00; #0f0' },
            }).visualMap,
        ).toEqual({ enabled: true, min: 5, max: 55, colors: ['#f00', '#0f0'] });
    });
});

describe('pie presentationFragment — the pie share of the presentation (goldmaster Neu == Alt)', () => {
    it('carries the decoded whole-pie config, undefined when the blob has none', () => {
        const pie = { aggregate: 'sum', innerRadius: 0.4 } as const;
        expect(FAMILY_CORES.pie.presentationFragment(companions({ chartConfig: { pie } })).pie).toBe(pie);
        expect(FAMILY_CORES.pie.presentationFragment(companions()).pie).toBeUndefined();
    });
});
