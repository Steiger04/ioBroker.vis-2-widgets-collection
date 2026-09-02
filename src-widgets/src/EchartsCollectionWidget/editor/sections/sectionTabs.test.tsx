/**
 * Render tests for the section bodies' Sektions-Tabs (ADR-0073, spec ticket 06) — the tab SET
 * per section/mode/family, the JSON Leerfall without tab chrome, and the field INVENTORY: no
 * field may get lost in the regrouping (every field label key must render on SOME tab).
 *
 * @module EchartsCollectionWidget/editor/sections/sectionTabs.test
 * @remarks
 * Heavy leaves are marker-mocked (the icons barrel, the colour pickers, OidPicker, the
 * RawJsonSection, the axis cards) — the inventory reads the LABEL KEYS, which the identity-t
 * stub surfaces verbatim. Behaviour (Verhalten | Renderer) rode with ticket 05's own test.
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
vi.mock('@mui/icons-material', () => ({ ExpandMore: () => null, Add: () => null }));
vi.mock('../colorFields', () => ({
    default: () => null,
    ColorListField: () => null,
}));
vi.mock('../OidPicker', () => ({ default: () => null }));
vi.mock('./RawJsonSection', () => ({ default: () => <div>RAW_SECTION</div> }));
vi.mock('./axes/XCard', () => ({ default: () => <div>X_CARD</div> }));
vi.mock('./axes/AxisCard', () => ({ default: () => <div>AXIS_CARD</div> }));
vi.mock('./axes/MarkCard', () => ({ default: () => <div>MARK_CARD</div> }));
vi.mock('../useEditorTheme', () => ({
    // Sections read `palette` (string[]) + `themeTokens`; the Toolbox also reads the MUI
    // theme's palette mode (the toolbox token resolution) — both shapes stubbed.
    useEditorTheme: () => ({
        palette: ['#111', '#222'],
        themeTokens: { textPrimary: '#1', textSecondary: '#2', divider: '#3' },
        theme: { palette: { mode: 'light' } },
    }),
}));

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import DataSourceSection from './DataSourceSection';
import TitleSection from './TitleSection';
import AxesZoomSection from './AxesZoomSection';
import LegendSection from './LegendSection';
import TooltipSection from './TooltipSection';
import ColorsSection from './ColorsSection';
import ToolboxSection from './ToolboxSection';
import { PieOptionsSection } from './FamilySections';
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
    const tabs = Array.from(el.querySelectorAll('[role="tab"]'));
    for (const t of tabs) {
        act(() => {
            t.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        seen.push(el.textContent ?? ''); // only the ACTIVE tab's content is mounted
    }
    return seen.join('');
};

/** The editor state with a history cartesian bar default (fields per test overridden). */
const state = (over: Record<string, unknown> = {}): Record<string, unknown> => ({
    ...DEFAULT_EDITOR_STATE,
    ...over,
});

describe('section bodies — the tab SET per section (ADR-0073, spec ticket 06)', () => {
    it('Data source (Verlauf): Zeitfenster | Datenabruf — window fields vs acquisition defaults', () => {
        const el = mount(DataSourceSection, { state: state(), set: () => undefined, pickerCtx: {} });
        expect(tabLabels(el)).toEqual(['echarts_tab_time_window', 'echarts_tab_data_fetch']);
        expect(el.textContent).toContain('echarts_time_type'); // tab 1 = the window
        expect(el.textContent).not.toContain('echarts_aggregate');
        // Full inventory across BOTH tabs (no field may vanish in the regrouping).
        const all = allTabsText(el);
        for (const key of [
            'echarts_time_type',
            'echarts_relative_end',
            'echarts_datasource_preset_hint',
            'echarts_aggregate',
            'echarts_step_seconds',
            'echarts_count',
            'echarts_refresh',
            'echarts_ignore_null',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Data source (BAR): the bar cluster rides the Datenabruf tab (interval + diff)', () => {
        const el = mount(DataSourceSection, {
            state: state({ chartType: 'bar', barInterval: '1d' }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(tabLabels(el)).toEqual(['echarts_tab_time_window', 'echarts_tab_data_fetch']);
        const all = allTabsText(el);
        expect(all).toContain('echarts_bar_interval');
        expect(all).toContain('echarts_bar_diff');
    });

    it('Data source (JSON): the Leerfall — NO tab chrome, just the payload OID', () => {
        const el = mount(DataSourceSection, {
            state: state({ mode: 'json' }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(el.querySelectorAll('[role="tablist"]')).toHaveLength(0);
        expect(el.textContent).toContain('echarts_json_oid');
    });

    it('Data source (JSON tabellarisch, ADR-0075): Datenpunkt | Zuordnung — the mapping fields ride tab 2', () => {
        const el = mount(DataSourceSection, {
            state: state({ mode: 'json', jsonKind: 'table' }),
            set: () => undefined,
            pickerCtx: {}, // no socket — the schema hook's disabled oid list touches nothing
        });
        expect(tabLabels(el)).toEqual(['echarts_tab_datapoint', 'echarts_tab_mapping']);
        const all = allTabsText(el);
        // Tab 1 keeps the payload OID; tab 2 carries the Zuordnung (row path + X + the honest
        // no-rows hint — no payload subscribed here, so the empty schema state shows).
        expect(all).toContain('echarts_json_oid');
        expect(all).toContain('echarts_mapping_rowpath');
        expect(all).toContain('echarts_mapping_xpath');
        expect(all).toContain('echarts_mapping_no_array');
    });

    it('Title: Text | Position | Stil | Vorlagen — every field renders on SOME tab', () => {
        const el = mount(TitleSection, { state: state({ titlePos: 'topLeft' }), set: () => undefined, pickerCtx: {} });
        expect(tabLabels(el)).toEqual([
            'echarts_tab_text',
            'echarts_tab_position',
            'echarts_tab_style',
            'echarts_tab_templates',
        ]);
        const all = allTabsText(el);
        for (const key of [
            'echarts_editor_title_text',
            'echarts_title_position',
            'echarts_title_dx',
            'echarts_title_dy',
            'echarts_title_color',
            'echarts_title_font_size',
            'echarts_weight',
            'echarts_font_style',
            'RAW_SECTION',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Axes & Zoom: Achsen | Markierungen | Zoom', () => {
        // Zero-axes start (ADR-0067): seed one axis + one marking so both card types render.
        const el = mount(AxesZoomSection, {
            state: state({
                yAxes: [{ id: 'ax-1', position: 'left' }],
                markLines: [{ id: 'm-1', upper: 5, label: '', lineStyle: 'dashed' }],
            }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(tabLabels(el)).toEqual(['echarts_tab_axes', 'echarts_tab_marks', 'echarts_tab_zoom']);
        const all = allTabsText(el);
        for (const key of [
            'X_CARD',
            'AXIS_CARD',
            'MARK_CARD',
            'echarts_mark_add',
            'echarts_zoom_slider',
            'echarts_zoom_inside',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Legend: Anzeige | Stil | Vorlagen — display cluster vs the three style Sub-groups', () => {
        const el = mount(LegendSection, {
            state: state({ legendPos: 'topLeft' }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(tabLabels(el)).toEqual(['echarts_tab_display', 'echarts_tab_style', 'echarts_tab_templates']);
        const all = allTabsText(el);
        for (const key of [
            'echarts_legend_show',
            'echarts_legend_values',
            'echarts_legend_position',
            'echarts_legend_orient',
            'echarts_legend_offset_x', // topLeft ⇒ offsetX relevant
            'echarts_legend_group_text',
            'echarts_legend_group_symbol',
            'echarts_legend_group_frame',
            'RAW_SECTION',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Tooltip: Verhalten | Werte | Vorlagen — trigger+template vs value formatting vs raw', () => {
        const el = mount(TooltipSection, { state: state(), set: () => undefined, pickerCtx: {} });
        expect(tabLabels(el)).toEqual(['echarts_tab_behavior', 'echarts_tab_values', 'echarts_tab_templates']);
        const all = allTabsText(el);
        for (const key of [
            'echarts_tooltip_trigger',
            'echarts_tooltip_template',
            'echarts_tooltip_tpl_a',
            'echarts_tooltip_decimals',
            'echarts_tooltip_units',
            'echarts_tooltip_bg',
            'echarts_tooltip_no_interpolate',
            'echarts_tooltip_hide_nulls',
            'echarts_decimal_comma',
            'RAW_SECTION',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Tooltip (pie): the cartesian row filters vanish but the TAB SET stays', () => {
        const el = mount(TooltipSection, {
            state: state({ chartType: 'pie' }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(tabLabels(el)).toEqual(['echarts_tab_behavior', 'echarts_tab_values', 'echarts_tab_templates']);
        const all = allTabsText(el);
        expect(all).not.toContain('echarts_tooltip_no_interpolate'); // cartesian-only fields drop
        expect(all).toContain('echarts_tooltip_decimals'); // the tab keeps its remaining fields
    });

    it('Colours (cartesian): Palette | Fläche | Rahmen | Farbskala — the scale tab rides the family', () => {
        const el = mount(ColorsSection, { state: state(), set: () => undefined, pickerCtx: {} });
        expect(tabLabels(el)).toEqual([
            'echarts_tab_palette',
            'echarts_tab_surface',
            'echarts_tab_frame',
            'echarts_tab_color_scale',
        ]);
        const all = allTabsText(el);
        for (const key of [
            'echarts_palette_source',
            'echarts_dark_mode',
            'echarts_background',
            'echarts_frame_show',
            'echarts_frame_width',
            'echarts_visualmap_enable',
            'echarts_visualmap_min',
            'echarts_visualmap_max',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Colours (pie): NO Farbskala tab — an empty tab is the one allowed drop (Leerfall rule)', () => {
        const el = mount(ColorsSection, { state: state({ chartType: 'pie' }), set: () => undefined, pickerCtx: {} });
        expect(tabLabels(el)).toEqual(['echarts_tab_palette', 'echarts_tab_surface', 'echarts_tab_frame']);
    });

    it('Toolbox: Allgemein | Funktionen while ON — and NO chrome at all while off', () => {
        const on = mount(ToolboxSection, {
            state: state({ toolbox: { ...DEFAULT_EDITOR_STATE.toolbox, show: true } }),
            set: () => undefined,
            pickerCtx: {},
        });
        expect(tabLabels(on)).toEqual(['echarts_tab_general', 'echarts_tab_features']);
        const all = allTabsText(on);
        for (const key of [
            'echarts_toolbox_position',
            'echarts_toolbox_orient',
            'echarts_toolbox_item_size',
            'echarts_toolbox_feat_save_as_image',
            'echarts_toolbox_feat_magic_type',
        ]) {
            expect(all).toContain(key);
        }
        const off = mount(ToolboxSection, { state: state(), set: () => undefined, pickerCtx: {} });
        expect(off.querySelectorAll('[role="tablist"]')).toHaveLength(0);
    });

    it('Pie options: Form | Werte', () => {
        const el = mount(PieOptionsSection, { state: state({ chartType: 'pie' }), set: () => undefined });
        expect(tabLabels(el)).toEqual(['echarts_tab_shape', 'echarts_tab_values']);
        const all = allTabsText(el);
        for (const key of [
            'echarts_pie_inner_radius',
            'echarts_pie_rose',
            'echarts_pie_aggregate',
            'echarts_pie_label',
        ]) {
            expect(all).toContain(key);
        }
    });

    it('Pie options TABELLARISCH (ADR-0075 ticket 06): the aggregate cluster hides — nothing collapses', () => {
        const el = mount(PieOptionsSection, {
            state: state({ chartType: 'pie', mode: 'json', jsonKind: 'table' }),
            set: () => undefined,
        });
        const all = allTabsText(el);
        expect(all).not.toContain('echarts_pie_aggregate'); // every row IS the value
        for (const key of ['echarts_pie_inner_radius', 'echarts_pie_rose', 'echarts_pie_label']) {
            expect(all).toContain(key); // donut/rose/label stay
        }
    });
});
