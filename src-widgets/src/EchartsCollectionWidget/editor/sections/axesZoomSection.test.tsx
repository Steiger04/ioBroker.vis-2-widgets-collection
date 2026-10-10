/**
 * Render tests for the Axes & Zoom section's TABELLARISCH sight (ADR-0075 family seam): the
 * tabellarisch family is POSITIONAL (state.series + yPath — the Verlauf twin), so the Axis
 * manager must resolve card titles and the axis-delete semantics from state.series, never
 * from the serien-förmig payload-name overlay — whose sight is EMPTY in this family (the
 * pre-fix symptom: cards titled "Achse 1/2" and a JSON-branch delete that never rebinds the
 * positional series).
 *
 * @module EchartsCollectionWidget/editor/sections/axesZoomSection.test
 * @remarks
 * The identity-t stub surfaces label keys verbatim (the sectionTabs precedent);
 * useEditorTheme is stubbed (the section only reads palette + tokens here).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('../useEditorTheme', () => ({
    useEditorTheme: () => ({
        palette: ['#111', '#222'],
        themeTokens: { textPrimary: '#1', textSecondary: '#2', divider: '#3' },
    }),
}));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import AxesZoomSection from './AxesZoomSection';
import { axisLayout } from '../axisLayout';
import { DEFAULT_EDITOR_STATE, type EditorState } from '../editorState';

/** Mount any component; returns the live container. */
const mount = (type: (props: never) => unknown, props: unknown): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    act(() => {
        root.render(createElement(type as never, props as never));
    });
    return container;
};

/** A mapped tabellarisch chart: two yPath series, one auto-axis each (ADR-0018 1:1). */
const tableState = (over: Partial<EditorState> = {}): EditorState => ({
    ...DEFAULT_EDITOR_STATE,
    mode: 'json',
    jsonKind: 'table',
    chartType: 'line',
    jsonOid: 'js.0.table',
    series: [
        { id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 },
        { id: 's1', oid: '', yPath: 'meta.room', yAxisIndex: 1 },
    ],
    yAxes: [axisLayout(0), axisLayout(1)],
    ...over,
});

describe('AxesZoomSection — the tabellarisch positional sight (ADR-0075 family seam)', () => {
    it('Axis-card titles carry the bound COLUMN names — never the "Achse N" fallback', () => {
        const el = mount(AxesZoomSection, { state: tableState(), set: () => undefined, pickerCtx: {} });
        // The binder display name is the path's LAST segment (tableSeriesName parity — the
        // full path stays the series card's subtitle, the axis title shows what the chart shows).
        expect(el.textContent).toContain('temp');
        expect(el.textContent).toContain('room');
        expect(el.textContent).not.toContain('Achse 1');
        expect(el.textContent).not.toContain('Achse 2');
    });

    it('deleting an axis REBINDS the positional series (Verlauf semantics), leaving nothing stale', () => {
        const set = vi.fn();
        const el = mount(AxesZoomSection, { state: tableState(), set, pickerCtx: {} });
        const deletes = Array.from(el.querySelectorAll('button[aria-label="echarts_axis_delete"]'));
        expect(deletes).toHaveLength(2); // one per Y-axis card (the X-Karte carries no delete)
        act(() => {
            deletes[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(set).toHaveBeenCalledTimes(1);
        const patch = set.mock.calls[0][0] as { series: { yPath?: string; yAxisIndex?: number }[]; yAxes: unknown[] };
        // The freed binder lands on the survivor (same format → axis 0), like Verlauf — the
        // JSON branch instead dropped the axis without ever touching state.series.
        expect(patch.series).toEqual([
            { id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 },
            { id: 's1', oid: '', yPath: 'meta.room', yAxisIndex: 0 },
        ]);
        expect(patch.yAxes).toHaveLength(1);
    });
});
