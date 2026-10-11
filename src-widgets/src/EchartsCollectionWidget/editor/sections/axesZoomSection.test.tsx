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
import Generic from '../../../Generic';
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

describe('AxesZoomSection — the Achsen-Platz stepper (ADR-0079)', () => {
    /** Three axes on the LEFT (places 1/2/3) + one alone on the right. */
    const placedState = (): EditorState => ({
        ...tableState(),
        series: [
            { id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 },
            { id: 's1', oid: '', yPath: 'meta.room', yAxisIndex: 1 },
            { id: 's2', oid: '', yPath: 'hum', yAxisIndex: 2 },
            { id: 's3', oid: '', yPath: 'pv', yAxisIndex: 3 },
        ],
        yAxes: [
            axisLayout(0), // left 0 → place 1
            { ...axisLayout(1), position: 'left', offset: 80 }, // place 2
            { ...axisLayout(2), position: 'left', offset: 160 }, // place 3
            { ...axisLayout(3), position: 'right', offset: 0 }, // right, alone
        ],
    });

    it('▼ moves the axis one place outward — insert-shift, array order and the lone right axis untouched', () => {
        const set = vi.fn();
        const el = mount(AxesZoomSection, { state: placedState(), set, pickerCtx: {} });
        const downs = Array.from(el.querySelectorAll('button[aria-label="echarts_axis_move_down"]'));
        expect(downs).toHaveLength(4); // one per Y-axis card (the X-Karte carries no stepper)
        act(() => {
            downs[1].dispatchEvent(new MouseEvent('click', { bubbles: true })); // axis 1: place 2 → 3
        });
        expect(set).toHaveBeenCalledTimes(1);
        const patch = set.mock.calls[0][0] as { yAxes: { position?: string; offset?: number }[] };
        expect(patch.yAxes.map(a => ({ p: a.position, o: a.offset }))).toEqual([
            { p: 'left', o: 0 },
            { p: 'left', o: 160 }, // moved outward: raster 160 + travelling 0
            { p: 'left', o: 80 }, // closed up
            { p: 'right', o: 0 }, // the other side: referentially untouched
        ]);
    });

    it('grey at the place bounds and while alone on the side; the subtitle carries the place pattern', () => {
        const el = mount(AxesZoomSection, { state: placedState(), set: () => undefined, pickerCtx: {} });
        const ups = Array.from(el.querySelectorAll('button[aria-label="echarts_axis_move_up"]'));
        const downs = Array.from(el.querySelectorAll('button[aria-label="echarts_axis_move_down"]'));
        expect((ups[0] as HTMLButtonElement).disabled).toBe(true); // axis 0: place 1, ▲
        expect((downs[0] as HTMLButtonElement).disabled).toBe(false); // ▼ works
        expect((ups[3] as HTMLButtonElement).disabled).toBe(true); // axis 3: alone on the right
        expect((downs[3] as HTMLButtonElement).disabled).toBe(true);
        // The t-stub surfaces the pattern key verbatim (placeholders live in the real dicts).
        expect(el.textContent).toContain('echarts_axis_place_subtitle');
    });

    it('the subtitle composes "Seite · Platz/Total" from the i18n pattern placeholders', () => {
        // The hoisted t-stub returns keys verbatim, so the {side}/{place}/{total} replacement
        // never runs against real placeholders — mock JUST the pattern key to prove the
        // composition (side label from its own key, numbers from the sight).
        const t = vi
            .spyOn(Generic, 't')
            .mockImplementation(k => (k === 'echarts_axis_place_subtitle' ? '{side} · {place}/{total}' : k));
        try {
            const el = mount(AxesZoomSection, { state: placedState(), set: () => undefined, pickerCtx: {} });
            expect(el.textContent).toContain('echarts_axis_left · 2/3'); // axis 1: left place 2 of 3
            expect(el.textContent).toContain('echarts_axis_right · 1/1'); // axis 3: alone on the right
        } finally {
            t.mockRestore();
        }
    });

    it('serien-förmig JSON rides the same path: the stepper re-places the payload axes identically', () => {
        const set = vi.fn();
        const el = mount(AxesZoomSection, {
            state: {
                ...tableState(),
                jsonKind: 'series',
                series: [], // the payload owns the series — the overlay binds
                jsonSeriesNames: ['A', 'B'],
                jsonSeriesStyle: { A: { yAxisIndex: 0 }, B: { yAxisIndex: 1 } },
                yAxes: [
                    { ...axisLayout(0), position: 'left', offset: 0 },
                    { ...axisLayout(1), position: 'left', offset: 80 },
                ],
            },
            set,
            pickerCtx: {},
        });
        const downs = Array.from(el.querySelectorAll('button[aria-label="echarts_axis_move_down"]'));
        expect(downs).toHaveLength(2);
        act(() => {
            downs[0].dispatchEvent(new MouseEvent('click', { bubbles: true })); // axis 0: place 1 → 2
        });
        expect(set).toHaveBeenCalledTimes(1);
        const patch = set.mock.calls[0][0] as { yAxes: { offset?: number }[] };
        expect(patch.yAxes.map(a => a.offset)).toEqual([80, 0]);
    });
});
