/**
 * FAMILY_CORES tests (ADR-0083 ticket 01): the data-path slice of the family cores.
 *
 * @module EchartsCollectionWidget/families/cores.test
 * @remarks
 * The record is exhaustive over the family union at compile time; these pin the runtime
 * parity (record keys = family union) and the data-path behaviour the boundary machinery
 * delegates to: the marks share the boundary loss pulls via `marksOf` (ADR-0099), and the
 * full-wipe reset patch (ADR-0067/0075 — byte-identical to the
 * pre-registry `dataPathReset`). The editor-state seam itself is characterized by the
 * validation/lifecycleGuards suites; the fixtures here are deliberately lean structural
 * states — the profiles read the data-path slice only.
 */
import { describe, expect, it } from 'vitest';

import { FAMILY_CHART_TYPES } from './kernel';
import { FAMILY_CORES } from './cores';
import type { DataPathState } from './types';

/** Lean structural state — only the data-path slice the profiles read. */
const dp = (patch: Partial<DataPathState> = {}): DataPathState => ({
    series: [{}, {}, {}],
    yAxes: [{}, {}],
    markLines: [{}, {}],
    jsonOid: '',
    ...patch,
});

describe('FAMILY_CORES — record parity with the family union', () => {
    it('carries exactly the kernel families, no more, no less', () => {
        expect(Object.keys(FAMILY_CORES).sort()).toEqual(Object.keys(FAMILY_CHART_TYPES).sort());
    });

    it('every family core exposes the data-path slice', () => {
        for (const core of Object.values(FAMILY_CORES)) {
            expect(typeof core.dataPath.marksOf).toBe('function');
            expect(typeof core.dataPath.reset).toBe('function');
        }
    });
});

describe('dataPath.marksOf — the marks share of the shared boundary functions', () => {
    it('cartesian counts its markings (markLines are cartesian-only, F10)', () => {
        expect(FAMILY_CORES.cartesian.dataPath.marksOf(dp())).toBe(2);
        expect(FAMILY_CORES.cartesian.dataPath.marksOf(dp({ markLines: [] }))).toBe(0);
    });

    it('pie reports none even with markLines present', () => {
        expect(FAMILY_CORES.pie.dataPath.marksOf(dp())).toBe(0);
    });
});

describe('dataPath.reset — the full data-path wipe both families share (ADR-0067/0075)', () => {
    it('empties the ENTIRE data path and nothing else — the patch keys are the data path alone', () => {
        for (const [family, core] of Object.entries(FAMILY_CORES)) {
            const patch = core.dataPath.reset();
            expect(Object.keys(patch).sort(), `${family} reset scope`).toEqual([
                'jsonHidden',
                'jsonKind',
                'jsonOid',
                'jsonRowPath',
                'jsonSeriesStyle',
                'jsonXPath',
                'markLines',
                'series',
                'yAxes',
            ]);
        }
    });

    it('is the byte-stable ADR-0067 patch: emptied lists, overlay, deny-list, jsonOid; kind back to series', () => {
        expect(FAMILY_CORES.cartesian.dataPath.reset()).toEqual({
            series: [],
            yAxes: [],
            markLines: [],
            jsonSeriesStyle: {},
            jsonHidden: [],
            jsonOid: '',
            jsonKind: 'series',
            jsonRowPath: '',
            jsonXPath: '',
        });
        expect(FAMILY_CORES.pie.dataPath.reset()).toEqual(FAMILY_CORES.cartesian.dataPath.reset());
    });
});
