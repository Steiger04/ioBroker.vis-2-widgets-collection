/**
 * Render tests for the Karten-Tabs (ADR-0073, spec ticket 07) — the series card (Verlauf +
 * JSON), the Y-axis card and the X-Karte: the tab set per card/mode plus the field INVENTORY
 * across all tabs (no field may get lost in the move; the card headers stay outside).
 *
 * @module EchartsCollectionWidget/editor/sections/cardTabs.test
 * @remarks
 * Heavy leaves are marker-mocked (icons barrel, colour pickers, OidPicker, the RawJsonSection,
 * the shared series-card chrome) — the inventory reads LABEL KEYS via the identity-t stub.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
    DeleteOutline: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ContentCopy: () => null,
    Restore: () => null,
}));
vi.mock('../colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('../OidPicker', () => ({ default: () => null }));
vi.mock('./RawJsonSection', () => ({ default: () => <div>RAW_SECTION</div> }));
vi.mock('./series/shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    SeriesRawOverride: () => <div>RAW_OVERRIDE</div>,
    Swatch: () => null,
}));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import AxisCard from './axes/AxisCard';
import XCard from './axes/XCard';
import { CartesianSeriesList } from './series/CartesianSeriesCard';
import JsonSeriesCards from './series/JsonSeriesCards';
import { DEFAULT_EDITOR_STATE } from '../editorState';

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

const tabLabels = (el: HTMLElement): string[] =>
    Array.from(el.querySelectorAll('[role="tab"]')).map(t => (t.textContent ?? '').trim());

/** Click through every tab and return the UNION of all tab contents' text. */
const allTabsText = (el: HTMLElement): string => {
    const seen: string[] = [];
    for (const t of Array.from(el.querySelectorAll('[role="tab"]'))) {
        act(() => {
            t.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        seen.push(el.textContent ?? '');
    }
    return seen.join('');
};

const state = (over: Record<string, unknown> = {}): Record<string, unknown> => ({
    ...DEFAULT_EDITOR_STATE,
    ...over,
});

const noops = {
    onToggleCard: () => undefined,
    onUpdate: () => undefined,
    onRemove: () => undefined,
    onMove: () => undefined,
    onDuplicate: () => undefined,
    onAddWithOid: () => undefined,
    onRebindAxis: () => undefined,
    onUpdateJson: () => undefined,
    onRebindJsonAxis: () => undefined,
    onHideJson: () => undefined,
    onShowJson: () => undefined,
};

describe('Karten-Tabs — the cards (ADR-0073, spec ticket 07)', () => {
    it('Series card (Verlauf): Basis | Daten | Darstellung | Werte | Erweitert — full inventory', () => {
        const el = mount(CartesianSeriesList, {
            state: state({
                chartType: 'line',
                mode: 'history',
                yAxes: [{ id: 'ax-1', position: 'left' }],
                series: [{ id: 'sr-1', oid: 'a.0', name: 'A' }],
            }),
            pickerCtx: {},
            slot: () => '#111',
            labelColorFallback: '#222',
            historyInstances: ['sql.0'],
            expanded: { 0: true },
            ...noops,
        });
        expect(tabLabels(el)).toEqual([
            'echarts_grp_basis',
            'echarts_grp_data',
            'echarts_grp_presentation',
            'echarts_tab_values',
            'echarts_tab_advanced',
        ]);
        const all = allTabsText(el);
        for (const key of [
            'echarts_editor_series_name', // Basis
            'echarts_instance',
            'echarts_editor_series_yaxis',
            'echarts_aggregate', // Daten (the Erben-Override cluster)
            'echarts_series_xoffset_mode',
            'echarts_series_formula',
            'echarts_grp_line', // Darstellung (the type Sub-groups + legendOnly)
            'echarts_grp_area',
            'echarts_series_legend_only',
            'echarts_series_unit', // Werte
            'echarts_series_decimals',
            'RAW_OVERRIDE', // Erweitert
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Series card (JSON): no Daten tab — the transforms keep the slot, Werte stays its own', () => {
        const el = mount(JsonSeriesCards, {
            state: state({
                chartType: 'line',
                mode: 'json',
                jsonOid: 'javascript.0.chart', // the cards render only with a payload OID bound
                yAxes: [{ id: 'ax-1', position: 'left' }],
                jsonSeriesStyle: { Temp: {} },
                jsonHidden: [],
            }),
            pickerCtx: {},
            slot: () => '#111',
            labelColorFallback: '#222',
            jsonSeriesNames: ['Temp'],
            expanded: { 0: true },
            ...noops,
        });
        expect(tabLabels(el)).toEqual([
            'echarts_grp_basis',
            'echarts_grp_transform',
            'echarts_grp_presentation',
            'echarts_tab_values',
            'echarts_tab_advanced',
        ]);
        const all = allTabsText(el);
        expect(all).not.toContain('echarts_aggregate'); // no acquisition without a fetch
        expect(all).toContain('echarts_series_formula'); // the value transforms survive
        expect(all).toContain('echarts_series_unit'); // the Werte facts stay their own tab
        expect(all).toContain('RAW_OVERRIDE');
    });

    it('Y-axis card: Basis | Werte | Skala | Darstellung | Erweitert — full inventory', () => {
        const el = mount(AxisCard, {
            axis: { id: 'ax-1', position: 'left' },
            index: 0,
            emittedIndex: 0,
            emittedTotal: 1,
            open: true,
            onToggle: () => undefined,
            onChange: () => undefined,
            onRemove: () => undefined,
            pickerCtx: {},
            seriesColor: '#0af',
            seriesName: 'A',
            dividerColor: '#777',
        });
        expect(tabLabels(el)).toEqual([
            'echarts_grp_basis',
            'echarts_tab_values',
            'echarts_grp_scale_ticks',
            'echarts_grp_presentation',
            'echarts_tab_advanced',
        ]);
        const all = allTabsText(el);
        for (const key of [
            'echarts_axis_name', // Basis
            'echarts_axis_position',
            'echarts_axis_offset',
            'echarts_y_min', // Werte
            'echarts_y_max',
            'echarts_y_format',
            'echarts_axis_splitline', // Skala
            'echarts_axis_split_number',
            'echarts_axis_min_interval',
            'echarts_axis_label_font_size',
            'echarts_axis_name_rotate', // Darstellung
            'echarts_axis_name_gap',
            'RAW_SECTION', // Erweitert
        ]) {
            expect(all).toContain(key);
        }
    });

    it('X-Karte: Basis | Beschriftung | Ticks & Gitter | Erweitert — colour in Beschriftung, Feinjustur in Ticks', () => {
        const el = mount(XCard, {
            x: {},
            open: true,
            onToggle: () => undefined,
            onChange: () => undefined,
            pickerCtx: {},
            fallbackColor: '#0af',
            dividerColor: '#777',
        });
        expect(tabLabels(el)).toEqual([
            'echarts_grp_basis',
            'echarts_grp_labels',
            'echarts_tab_ticks_grid',
            'echarts_tab_advanced',
        ]);
        const all = allTabsText(el);
        for (const key of [
            'echarts_axis_name', // Basis
            'echarts_x_position',
            'echarts_axis_offset',
            'echarts_x_format', // Beschriftung (Zeitformat + colour + label knobs)
            'echarts_editor_series_color',
            'echarts_x_label_rotate',
            'echarts_axis_tick_show', // Ticks & Gitter
            'echarts_axis_splitline',
            'echarts_axis_split_number',
            'echarts_axis_name_rotate', // the Feinjustur sheet moved here
            'RAW_SECTION', // Erweitert
        ]) {
            expect(all).toContain(key);
        }
    });
});
