/**
 * Ticket 10 (configurator review 2026-11-03) — does the Balken-Stapelmodus (ADR-0084) act
 * outside Verlauf? The reproduction walks the real chain: a Verlauf bar chart set to „Gestapelt"
 * crosses into JSON (the `changeMode` structure event), Apply persists the working copy, the
 * body decodes the blob into the cartesian fragment, and the builder emits the option.
 *
 * @module EchartsCollectionWidget/stackModeAcrossModes.test
 */
import { describe, expect, it, vi } from 'vitest';

// DOM pool: editorState's heal dispatch loads the family profiles' section modules — they
// pull the adapter-react barrel.
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));

import { decodeBlob } from '../lib/encoding';
import { DEFAULT_EDITOR_STATE, saveEditorState, type EditorState } from './editor/editorState';
import { applyStructureEvent } from './editor/structureEvents';
import { cartesianPresentationFragment } from './families/cartesian/fragment';
import { buildGeneratedOption } from './optionBuilder';
import type { PresentationBase } from './optionBuilders/types';

const BASE: PresentationBase = {
    legendShow: true,
    legendPos: 'topCenter',
    legendShowValues: false,
    tooltipTrigger: 'axis',
    animation: true,
    animationDuration: 600,
    bgColor: 'transparent',
    palette: ['#1', '#2', '#3'],
    themeTokens: {
        primary: '#p',
        secondary: '#s',
        success: '#su',
        warning: '#w',
        error: '#e',
        info: '#i',
        divider: '#d',
        textPrimary: '#tp',
        textSecondary: '#ts',
        paper: '#pa',
    },
    themeDark: false,
};

describe('Balken-Stapelmodus across the data modes (ticket 10)', () => {
    const history: EditorState = {
        ...DEFAULT_EDITOR_STATE,
        chartType: 'bar',
        mode: 'history',
        stackMode: 'stack',
        series: [
            { oid: 'a.0.x', name: 'X', yAxisIndex: 0 },
            { oid: 'a.0.y', name: 'Y', yAxisIndex: 0 },
        ],
        yAxes: [{ id: 'ax0', position: 'left', offset: 0 }],
    };

    it('the mode crossing keeps stackMode — the data-path reset does not touch it', () => {
        const r = applyStructureEvent({ ...history, payloadNames: [] }, { type: 'changeMode', to: 'json' });
        expect(r.patch).toBeTruthy();
        expect(r.patch && 'stackMode' in r.patch).toBe(false);
        expect({ ...history, ...r.patch }.stackMode).toBe('stack');
    });

    it('the JSON payload bars stack in the emitted option — the mode applies in every data mode', () => {
        const r = applyStructureEvent({ ...history, payloadNames: [] }, { type: 'changeMode', to: 'json' });
        const json: EditorState = { ...history, ...r.patch, jsonOid: 'a.0.payload' };
        // Apply → the persisted blob still carries the mode …
        const chartConfig = JSON.parse(decodeBlob(saveEditorState(json, 0).chartConfig as string)) as Record<
            string,
            unknown
        >;
        expect(chartConfig.stackMode).toBe('stack');
        // … the body's cartesian fragment reads it mode-agnostically …
        const fragment = cartesianPresentationFragment({
            src: { chartType: 'bar', mode: 'json' },
            chartConfig,
            markLines: [],
            yAxes: [{}],
        });
        expect(fragment.stackMode).toBe('stack');
        // … and the payload's (inheriting) bar series join the mode stack.
        const option = buildGeneratedOption({
            family: 'cartesian',
            series: [
                { name: 'P1', data: [[1, 2]] },
                { name: 'P2', data: [[1, 3]] },
            ],
            meta: [{ name: 'P1' }, { name: 'P2' }],
            p: { ...BASE, ...fragment },
        }) as { series: { stack?: string }[] };
        expect(option.series.map(s => s.stack)).toEqual(['total#0', 'total#0']);
    });
});
