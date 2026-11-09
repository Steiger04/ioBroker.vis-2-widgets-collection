/**
 * lifecycleGuards — characterization of the editor lifecycle's invariant steps (ADR-0048).
 *
 * @module EchartsCollectionWidget/editor/lifecycleGuards.test
 * @remarks
 * These pin the POLICIES the modal's four effects implemented inline before the extraction:
 * firing gates (mode/family/empty guards folded into the steps), the stringify idempotence
 * guards (a no-op must return null so no empty history entry destroys the redo branch), and
 * the re-stagger behaviour on a drop (ADR-0028). The effects' dependency arrays themselves
 * stay with the owning hook — deliberately untested (useSplitPane / useEditorHistory
 * precedent: the pure exports are the test surface).
 */
import { describe, expect, it, vi } from 'vitest';

// DOM pool since ADR-0083: this suite transitively loads the family profiles' section
// modules — they pull the adapter-react barrel (FileBrowser → icons — the focusTabs stub).
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';
import { DEFAULT_EDITOR_STATE, type EditorPatch, type EditorState } from './editorState';
import {
    crossesFamilyBoundary,
    crossesJsonBoundary,
    crossesJsonKindBoundary,
    dataPathReset,
    healStableIds,
    jsonKindReset,
    loadedOidCount,
} from './lifecycleGuards';

const state = (overrides: Partial<EditorState>): EditorState => ({ ...DEFAULT_EDITOR_STATE, ...overrides });

/** Assert the step produced a patch and narrow it for field assertions (fields present by construction). */
const asPatch = (patch: EditorPatch | null): Required<EditorPatch> => {
    expect(patch).not.toBeNull();
    return patch as Required<EditorPatch>;
};

/** Left/right axis fixture with explicit id + stagger geometry (axisLayout defaults). */
const axis = (id: string, position: 'left' | 'right', offset: number): EchartsAxisConfig => ({
    id,
    position,
    offset,
    splitLine: offset === 0 && position === 'left',
});

describe('healStableIds', () => {
    it('returns null when every keyed list carries an id (pure read, no history entry)', () => {
        const clean = state({
            yAxes: [axis('a0', 'left', 0)],
            series: [{ oid: 'oid1', id: 's0' }],
            markLines: [{ value: 20, id: 'm0' }],
        });
        expect(healStableIds(clean)).toBeNull();
    });

    it('backfills ids on all three lists in one patch', () => {
        const dirty = state({
            yAxes: [{ position: 'left', splitLine: true }],
            series: [{ oid: 'oid1' }],
            markLines: [{ value: 20 }],
        });
        const patch = asPatch(healStableIds(dirty));
        expect(patch.yAxes[0]?.id).toBeTruthy();
        expect(patch.series[0]?.id).toBeTruthy();
        expect(patch.markLines[0]?.id).toBeTruthy();
    });

    it('keeps already-id’d items by reference and their fields untouched', () => {
        const cleanSeries = { oid: 'oid1', id: 's0', name: 'PV', yAxisIndex: 1 };
        const dirty = state({
            yAxes: [{ position: 'left', splitLine: true }], // only this list is dirty
            series: [cleanSeries],
            markLines: [{ value: 20, id: 'm0' }],
        });
        const patch = asPatch(healStableIds(dirty));
        expect(patch.series[0]).toBe(cleanSeries);
        expect(patch.markLines[0]?.id).toBe('m0');
    });
});

describe('loadedOidCount', () => {
    it('counts the series', () => {
        const line = state({
            chartType: 'line',
            series: [
                { oid: 'oid1', id: 's0' },
                { oid: 'oid2', id: 's1' },
                { oid: 'oid3', id: 's2' },
                { oid: 'oid4', id: 's3' },
            ],
        });
        expect(loadedOidCount(line)).toBe(4);
    });
});

describe('JSON-boundary data-path reset (ADR-0067)', () => {
    it('crossesJsonBoundary fires on into-JSON and out-of-JSON — never on a re-select', () => {
        expect(crossesJsonBoundary('history', 'json')).toBe(true);
        expect(crossesJsonBoundary('json', 'history')).toBe(true);
        expect(crossesJsonBoundary('history', 'history')).toBe(false);
        expect(crossesJsonBoundary('json', 'json')).toBe(false);
    });

    it('crossesFamilyBoundary fires across chart families — never within cartesian or on identity', () => {
        expect(crossesFamilyBoundary('line', 'pie')).toBe(true);
        expect(crossesFamilyBoundary('pie', 'line')).toBe(true);
        // line↔bar↔scatter share the series structure — no boundary, no reset
        expect(crossesFamilyBoundary('line', 'bar')).toBe(false);
        expect(crossesFamilyBoundary('bar', 'scatter')).toBe(false);
        expect(crossesFamilyBoundary('scatter', 'line')).toBe(false);
        // identity (a re-select of the same type) is no crossing either
        expect(crossesFamilyBoundary('line', 'line')).toBe(false);
    });

    it('dataPathReset empties the ENTIRE data path — series, axes, markings, JSON state', () => {
        const patch = dataPathReset();
        expect(patch.series).toEqual([]);
        expect(patch.yAxes).toEqual([]); // 0-axes start — the reconcile rebuilds 1:1 on JSON entry
        expect(patch.markLines).toEqual([]);
        expect(patch.jsonSeriesStyle).toEqual({});
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonOid).toBe('');
        // ADR-0075: both ADR-0067 crossings leave the json family — the Zuordnung scalars fall
        // with it (the kind returns to its 'series' default).
        expect(patch.jsonKind).toBe('series');
        expect(patch.jsonRowPath).toBe('');
        expect(patch.jsonXPath).toBe('');
    });

    it('dataPathReset never touches the presentation — the patch keys are the data path alone', () => {
        const patch = dataPathReset();
        // The presentation fields above are all UNTOUCHED — the patch carries data-path keys only.
        expect(Object.keys(patch).sort()).toEqual([
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
    });
});

describe('payload-family boundary (ADR-0075)', () => {
    it('crossesJsonKindBoundary fires on series↔table — never on a re-select', () => {
        expect(crossesJsonKindBoundary('series', 'table')).toBe(true);
        expect(crossesJsonKindBoundary('table', 'series')).toBe(true);
        expect(crossesJsonKindBoundary('series', 'series')).toBe(false);
        expect(crossesJsonKindBoundary('table', 'table')).toBe(false);
    });

    it('jsonKindReset clears the derived data path WITHOUT jsonOid and writes the target kind', () => {
        const patch = jsonKindReset('table');
        expect(patch.jsonKind).toBe('table');
        expect(patch.series).toEqual([]);
        expect(patch.yAxes).toEqual([]);
        expect(patch.markLines).toEqual([]);
        expect(patch.jsonSeriesStyle).toEqual({});
        expect(patch.jsonHidden).toEqual([]);
        expect(patch.jsonRowPath).toBe('');
        expect(patch.jsonXPath).toBe('');
        // The ONE difference to dataPathReset: the data point SURVIVES (the same state, read
        // the other way) — the patch carries no jsonOid key at all.
        expect(patch).not.toHaveProperty('jsonOid');
    });
});
