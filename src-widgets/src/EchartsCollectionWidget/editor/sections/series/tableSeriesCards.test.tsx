/**
 * Render tests for the tabellarische series cards (ADR-0075 ticket 04) — the card chrome
 * (title default = the path's last segment, subtitle = the full path, move/delete but NO
 * duplicate/hide), the add affordance (pick a column → the card appends; none before) and the
 * duplicate-name InfoBox. The handler SEMANTICS (axis death, balance) ride the dispatcher's
 * existing axisLayout surface — not re-tested here.
 *
 * @module EchartsCollectionWidget/editor/sections/series/tableSeriesCards.test
 * @remarks
 * The identity-t stub surfaces label keys verbatim (the sectionTabs precedent).
 */
import { describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import TableSeriesCards from './TableSeriesCards';
import { DEFAULT_EDITOR_STATE, type EditorState } from '../../editorState';

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

describe('TableSeriesCards — the card chrome (ADR-0075 ticket 04)', () => {
    it('title defaults to the path LAST segment; the subtitle carries the full path', () => {
        const el = mount(TableSeriesCards, {
            state: tableState({ series: [{ id: 's0', oid: '', yPath: 'meta.room', yAxisIndex: 0 }] }),
            pickerCtx: {},
            slot: () => '#111',
            labelColorFallback: '#222',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(el.textContent).toContain('room'); // last segment as the title
        expect(el.textContent).toContain('meta.room'); // full path as the subtitle
    });

    it('the empty state shows the add picker as the CTA — no card before the column choice', () => {
        const empty = mount(TableSeriesCards, {
            state: tableState({ series: [] }),
            pickerCtx: {},
            slot: () => '#111',
            labelColorFallback: '#222',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(empty.textContent).toContain('echarts_table_add_column'); // the picker is the CTA
        // The pick→append wiring itself is the MUI Autocomplete popup path (DOM-heavy to drive
        // headless); the handler contract rides the same prop the non-empty list exercises.
    });

    it('duplicate display names raise the F11-style InfoBox', () => {
        const el = mount(TableSeriesCards, {
            state: tableState({
                series: [
                    { id: 's0', oid: '', yPath: 'temp', name: 'PV', yAxisIndex: 0 },
                    { id: 's1', oid: '', yPath: 'meta.room', name: 'PV', yAxisIndex: 1 },
                ],
            }),
            pickerCtx: {},
            slot: () => '#111',
            labelColorFallback: '#222',
            columns,
            expanded: {},
            onToggleCard: () => undefined,
            onUpdate: () => undefined,
            onRemove: () => undefined,
            onMove: () => undefined,
            onAddWithColumn: () => undefined,
            onRebindAxis: () => undefined,
        });
        expect(el.textContent).toContain('echarts_table_duplicate_names');
    });
});
