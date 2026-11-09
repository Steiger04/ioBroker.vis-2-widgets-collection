/**
 * The serien-förmig JSON Kartenquelle through the one SeriesCard (ADR-0100 decision 6) — tab
 * set, the hide action as an eye (B4), the type gate over the VISIBLE series and the routing.
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/json.test
 */
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));
vi.mock('../shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    SeriesRawOverride: () => <div>RAW_OVERRIDE</div>,
    Swatch: () => null,
}));

import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { JsonSeriesList } from './json';
import { DEFAULT_EDITOR_STATE } from '../../../editorState';

const mount = (props: Record<string, unknown>): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(createElement(JsonSeriesList as never, props as never));
    });
    return container;
};

const props = (over: Record<string, unknown> = {}, state: Record<string, unknown> = {}): Record<string, unknown> => ({
    state: {
        ...DEFAULT_EDITOR_STATE,
        chartType: 'line',
        mode: 'json',
        jsonOid: 'javascript.0.chart',
        yAxes: [{ id: 'ax-1', position: 'left' }],
        jsonSeriesStyle: {},
        jsonHidden: [],
        ...state,
    },
    pickerCtx: {},
    slot: () => '#111',
    chartCanvas: 'transparent',
    jsonSeriesNames: ['Temp', 'Hum'],
    expanded: { 0: true },
    onToggleCard: () => undefined,
    onUpdateJson: () => undefined,
    onRebindJsonAxis: () => undefined,
    onHideJson: () => undefined,
    onShowJson: () => undefined,
    ...over,
});

describe('JsonSeriesList — the JSON source over SeriesCard', () => {
    it('renders the uniform tab set', () => {
        const el = mount(props());
        expect(Array.from(el.querySelectorAll('[role="tab"]')).map(t => t.textContent)).toEqual([
            'echarts_card_tab_basis',
            'echarts_card_tab_data',
            'echarts_card_tab_style',
            'echarts_card_tab_format',
            'echarts_card_tab_json',
        ]);
    });

    it('the only header action is the restorable hide, labelled „Serie ausblenden" — no remove, move or duplicate', () => {
        const onHideJson = vi.fn();
        const el = mount(props({ onHideJson }));
        const hides = el.querySelectorAll('button[aria-label="echarts_editor_series_hide"]');
        expect(hides).toHaveLength(2);
        expect(el.querySelector('button[aria-label="echarts_editor_series_remove"]')).toBeNull();
        expect(el.querySelector('button[aria-label="echarts_editor_series_duplicate"]')).toBeNull();
        expect(el.querySelector('button[aria-label="echarts_editor_series_move_up"]')).toBeNull();
        act(() => {
            hides[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onHideJson).toHaveBeenCalledWith('Hum');
    });

    it('the type select counts the VISIBLE series — one left after a hide shows none', () => {
        expect(mount(props()).textContent).toContain('echarts_editor_series_type');
        expect(mount(props({}, { jsonHidden: ['Hum'] })).textContent).not.toContain('echarts_editor_series_type');
    });

    it('pie slice rows hide with the same eye label', () => {
        const el = mount(props({}, { chartType: 'pie' }));
        expect(el.querySelectorAll('button[aria-label="echarts_editor_series_hide"]')).toHaveLength(2);
        expect(el.querySelector('button[aria-label="echarts_editor_series_remove"]')).toBeNull();
    });
});
