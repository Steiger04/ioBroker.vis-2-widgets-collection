/**
 * The Verlauf Kartenquelle through the one SeriesCard (ADR-0100 decision 6) — tab set, header
 * actions, the translated title fallback, the type gate and the rebind routing.
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/history.test
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: string[]): string {
            return args.length ? `${key}(${args.join(',')})` : key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
    ArrowDownward: () => null,
    ArrowUpward: () => null,
    DeleteOutline: () => null,
    DonutLarge: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ContentCopy: () => null,
    Restore: () => null,
    VisibilityOff: () => null,
}));
vi.mock('../../../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('@iobroker/adapter-react-v5', () => ({ SelectID: () => null }));
vi.mock('../../../OidPicker', () => ({ default: () => null }));
vi.mock('../shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    SeriesRawOverride: () => <div>RAW_OVERRIDE</div>,
    Swatch: () => null,
}));

import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { HistorySeriesList } from './history';
import { DEFAULT_EDITOR_STATE, type EditorSeries } from '../../../editorState';

const mount = (props: Record<string, unknown>): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        createRoot(container).render(createElement(HistorySeriesList as never, props as never));
    });
    return container;
};

const base = (series: EditorSeries[], over: Record<string, unknown> = {}): Record<string, unknown> => ({
    state: {
        ...DEFAULT_EDITOR_STATE,
        chartType: 'line',
        mode: 'history',
        yAxes: [{ id: 'ax-1', position: 'left' }],
        series,
    },
    pickerCtx: {},
    slot: () => '#111',
    labelColorFallback: '#222',
    historyInstances: { instances: [], loaded: true },
    expanded: { 0: true },
    onToggleCard: () => undefined,
    onUpdate: () => undefined,
    onRemove: () => undefined,
    onMove: () => undefined,
    onDuplicate: () => undefined,
    onAddWithOid: () => undefined,
    onRebindAxis: () => undefined,
    ...over,
});

const labels = (el: HTMLElement, selector: string, attr?: string): string[] =>
    Array.from(el.querySelectorAll(selector)).map(n =>
        attr ? (n.getAttribute(attr) ?? '') : (n.textContent ?? '').trim(),
    );

describe('HistorySeriesList — the Verlauf source over SeriesCard', () => {
    it('renders the derived tab set with the uniform labels', () => {
        const el = mount(base([{ id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 }]));
        expect(labels(el, '[role="tab"]')).toEqual([
            'echarts_card_tab_basis',
            'echarts_card_tab_data',
            'echarts_card_tab_style',
            'echarts_card_tab_format',
            'echarts_card_tab_json',
        ]);
    });

    it('offers move, duplicate and remove in the header', () => {
        const el = mount(base([{ id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 }]));
        expect(labels(el, 'button[aria-label]', 'aria-label')).toEqual(
            expect.arrayContaining([
                'echarts_editor_series_move_up',
                'echarts_editor_series_move_down',
                'echarts_editor_series_duplicate',
                'echarts_editor_series_remove',
            ]),
        );
    });

    it('an unnamed series titles with the translated position fallback, never a hard-coded "Series N"', () => {
        const el = mount(
            base([
                { id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 },
                { id: 's2', oid: 'b.0', name: '', yAxisIndex: 0 },
            ]),
        );
        expect(el.textContent).toContain('echarts_series_title_fallback(2)');
        expect(el.textContent).not.toContain('Series 2');
    });

    it('the type select appears from two series on', () => {
        const one = mount(base([{ id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 }]));
        expect(one.textContent).not.toContain('echarts_editor_series_type');
        const two = mount(
            base([
                { id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 },
                { id: 's2', oid: 'b.0', name: 'B', yAxisIndex: 0 },
            ]),
        );
        expect(two.textContent).toContain('echarts_editor_series_type');
    });

    it('the remove action routes to the dispatcher with the card index', () => {
        const onRemove = vi.fn();
        const el = mount(
            base(
                [
                    { id: 's1', oid: 'a.0', name: 'A', yAxisIndex: 0 },
                    { id: 's2', oid: 'b.0', name: 'B', yAxisIndex: 0 },
                ],
                { onRemove },
            ),
        );
        const removes = el.querySelectorAll('button[aria-label="echarts_editor_series_remove"]');
        act(() => {
            removes[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onRemove).toHaveBeenCalledWith(1);
    });
});
