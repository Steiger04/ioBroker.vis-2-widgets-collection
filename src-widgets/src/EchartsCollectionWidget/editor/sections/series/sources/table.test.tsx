/**
 * Render tests for the tabellarisch Kartenquelle (ADR-0075 ticket 04, ADR-0100) — the card
 * chrome (title default = the path's last segment, subtitle = the full path, move/duplicate/
 * delete but NO hide), the add affordance (pick a column → the card appends; none before) and
 * the duplicate-name InfoBox. The handler SEMANTICS (axis death, balance) ride the dispatcher's
 * structure-event surface (ADR-0099) — not re-tested here.
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/table.test
 * @remarks
 * The identity-t stub surfaces label keys verbatim (the sectionTabs precedent).
 */
import { describe, expect, it, vi } from 'vitest';

// The expanded card mounts the colour pickers (Basis + Darstellung) — they build a collection
// theme off the host theme, which a headless mount cannot provide (the sectionTabs precedent).
vi.mock('../../../colorFields', () => ({
    default: () => null,
    ColorListField: () => null,
}));
import { act, createElement } from 'react';
import type { Root } from 'react-dom/client';
import { createTestRoot } from '../../../../../lib/testing/testRoots';
import { TableSeriesList } from './table';
import { DEFAULT_EDITOR_STATE, type EditorState } from '../../../editorState';
import { axisLayout } from '../../../structureEvents';

/** Mount any component; returns the live container. */
const mount = (type: (props: never) => unknown, props: unknown): HTMLElement => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createTestRoot(container);
    act(() => {
        root.render(createElement(type as never, props as never));
    });
    return container;
};

const columns = [
    {
        path: 'temp',
        type: 'number' as const,
        nullable: false,
        typeCounts: {},
        nullCount: 0,
        distinctCount: 2,
        confidence: 1,
    },
    {
        path: 'meta.room',
        type: 'string' as const,
        nullable: false,
        typeCounts: {},
        nullCount: 0,
        distinctCount: 2,
        confidence: 1,
    },
];

const tableState = (over: Partial<EditorState> = {}): EditorState => ({
    ...DEFAULT_EDITOR_STATE,
    mode: 'json',
    jsonKind: 'table',
    chartType: 'line',
    jsonOid: 'js.0.table',
    ...over,
});

describe('TableSeriesList — the card chrome (ADR-0075 ticket 04)', () => {
    it('title defaults to the path LAST segment; the subtitle carries the full path', () => {
        const el = mount(TableSeriesList, {
            state: tableState({ series: [{ id: 's0', oid: '', yPath: 'meta.room', yAxisIndex: 0 }] }),
            pickerCtx: {},
            slot: () => '#111',
            chartCanvas: 'transparent',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onDuplicate: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(el.textContent).toContain('room'); // last segment as the title
        expect(el.textContent).toContain('meta.room'); // full path as the subtitle
        // zuordnung-redesign Q7: the sample-values line is X-ONLY — a yPath row must never
        // carry it (the boundary is structural: the cards never pass the slot; pinned here).
        expect(el.textContent).not.toContain('echarts_mapping_samples_prefix');
    });

    it('the empty state shows the add picker as the CTA — no card before the column choice', () => {
        const empty = mount(TableSeriesList, {
            state: tableState({ series: [] }),
            pickerCtx: {},
            slot: () => '#111',
            chartCanvas: 'transparent',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onDuplicate: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(empty.textContent).toContain('echarts_table_add_column'); // the picker is the CTA
        // The pick→append wiring itself is the MUI Autocomplete popup path (DOM-heavy to drive
        // headless); the handler contract rides the same prop the non-empty list exercises.
    });

    it('duplicate display names raise the F11-style InfoBox', () => {
        const el = mount(TableSeriesList, {
            state: tableState({
                series: [
                    { id: 's0', oid: '', yPath: 'temp', name: 'PV', yAxisIndex: 0 },
                    { id: 's1', oid: '', yPath: 'meta.room', name: 'PV', yAxisIndex: 1 },
                ],
            }),
            pickerCtx: {},
            slot: () => '#111',
            chartCanvas: 'transparent',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onDuplicate: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(el.textContent).toContain('echarts_table_duplicate_names');
    });

    it('the Basis-tab Y-axis select shows the bound COLUMN name, not "Series N" (family seam)', () => {
        // The axis labels resolve through the same positional sight as the Verlauf cards:
        // an unnamed table series defaults to the yPath column's last segment — never the
        // "Series N" fallback (the pre-fix symptom: "1 · Series 1" on a fully mapped series).
        const el = mount(TableSeriesList, {
            state: tableState({
                series: [{ id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 }],
                yAxes: [axisLayout(0)],
            }),
            pickerCtx: {},
            slot: () => '#111',
            chartCanvas: 'transparent',
            columns,
            expanded: { 0: true },
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onDuplicate: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(el.textContent).toContain('1 · temp'); // the select's rendered value
        expect(el.textContent).not.toContain('Series 1');
    });
});

describe('TableSeriesList — pie rings (ADR-0082 ticket 01: ring cards pie-bewusst)', () => {
    const handlers = {
        pickerCtx: {},
        slot: () => '#111',
        chartCanvas: 'transparent',
        columns,
        expanded: { 0: true } as Record<number, boolean>,
        onToggleCard: () => undefined,
        onUpdate: () => undefined,
        onRemove: () => undefined,
        onMove: () => undefined,
        onDuplicate: () => undefined,
        onAddWithColumn: () => undefined,
        onRebindAxis: () => undefined,
    };

    it('a pie ring card shows Basis | Daten | JSON — the cartesian-only knobs are gone', () => {
        const el = mount(TableSeriesList, {
            state: tableState({
                chartType: 'pie',
                series: [{ id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 }],
            }),
            ...handlers,
        });
        expect(el.textContent).toContain('echarts_card_tab_basis');
        expect(el.textContent).toContain('echarts_card_tab_data');
        expect(el.textContent).toContain('echarts_card_tab_json');
        // The two cartesian-only tab bodies never enter the tab row for pie
        expect(el.textContent).not.toContain('echarts_card_tab_style');
        expect(el.textContent).not.toContain('echarts_card_tab_format');
        // Basis (first tab, active on open): rings author no colour and no cartesian type
        expect(el.textContent).not.toContain('echarts_editor_series_color');
        expect(el.textContent).not.toContain('echarts_editor_series_type');
        // The header carries the ring identity, not a colour that paints nothing
        expect(el.querySelector('[data-testid="ring-swatch"]')).not.toBeNull();
    });

    it('a cartesian card keeps the full tab inventory — the gate is pie-only (type from two series on)', () => {
        const el = mount(TableSeriesList, {
            state: tableState({
                chartType: 'line',
                series: [
                    { id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 },
                    { id: 's1', oid: '', yPath: 'meta.room', yAxisIndex: 0 },
                ],
            }),
            ...handlers,
        });
        expect(el.textContent).toContain('echarts_card_tab_style');
        expect(el.textContent).toContain('echarts_card_tab_format');
        expect(el.textContent).toContain('echarts_editor_series_color');
        expect(el.textContent).toContain('echarts_editor_series_type');
        expect(el.querySelector('[data-testid="ring-swatch"]')).toBeNull();
    });
});

describe('TableSeriesList — aligned with the other sources (ADR-0100 decision 4)', () => {
    const handlers = {
        pickerCtx: {},
        slot: () => '#111',
        chartCanvas: 'transparent',
        columns,
        expanded: {} as Record<number, boolean>,
        onToggleCard: () => undefined,
        onUpdate: () => undefined,
        onRemove: () => undefined,
        onMove: () => undefined,
        onAddWithColumn: () => undefined,
        onRebindAxis: () => undefined,
    };

    it('offers duplicate like Verlauf and routes it with the card index', () => {
        const onDuplicate = vi.fn();
        const el = mount(TableSeriesList, {
            state: tableState({
                series: [
                    { id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 },
                    { id: 's1', oid: '', yPath: 'meta.room', yAxisIndex: 1 },
                ],
            }),
            ...handlers,
            onDuplicate,
        });
        const dups = el.querySelectorAll('button[aria-label="echarts_editor_series_duplicate"]');
        expect(dups).toHaveLength(2);
        act(() => {
            dups[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onDuplicate).toHaveBeenCalledWith(1);
        // never the serien-förmig hide — the table family owns its structure
        expect(el.querySelector('button[aria-label="echarts_editor_series_hide"]')).toBeNull();
    });

    it('a single series shows no type select (the picker IS its type)', () => {
        const el = mount(TableSeriesList, {
            state: tableState({ series: [{ id: 's0', oid: '', yPath: 'temp', yAxisIndex: 0 }] }),
            ...handlers,
            expanded: { 0: true },
            onDuplicate: () => undefined,
        });
        expect(el.textContent).not.toContain('echarts_editor_series_type');
    });

    it('a series without name and yPath titles with the translated fallback', () => {
        const el = mount(TableSeriesList, {
            state: tableState({ series: [{ id: 's0', oid: '', yAxisIndex: 0 }] }),
            ...handlers,
            onDuplicate: () => undefined,
        });
        expect(el.textContent).toContain('echarts_series_title_fallback');
        expect(el.textContent).not.toContain('Series 1');
    });
});
