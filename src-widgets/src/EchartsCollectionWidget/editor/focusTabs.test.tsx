/**
 * The Problems-button tab jump (ADR-0073, spec ticket 08): a focus request carrying the TAB
 * of the first issue expands the section AND selects that tab — and the per-tab ⚠ dots wire
 * the validation issues onto their tabs while the header rollup chip stays.
 *
 * @module EchartsCollectionWidget/editor/focusTabs.test
 * @remarks
 * Heavy leaves are marker-mocked (the established pattern — icons barrel, pickers, raw
 * sections, axis cards); the identity-t stub surfaces label keys verbatim.
 */
import { describe, expect, it, vi } from 'vitest';

// The full section stack pulls many icons — every named import the stack touches, nulled.
vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
    ArrowDownward: () => null,
    ArrowUpward: () => null,
    Search: () => null,
    DeleteOutline: () => null,
    KeyboardArrowDown: () => null,
    KeyboardArrowUp: () => null,
    ContentCopy: () => null,
    Restore: () => null,
    InsertDriveFile: () => null,
    Image: () => null,
    Code: () => null,
    Close: () => null,
    CloseFullscreen: () => null,
    OpenInFull: () => null,
}));
vi.mock('./colorFields', () => ({ default: () => null, ColorListField: () => null }));
vi.mock('./OidPicker', () => ({ default: () => null }));
vi.mock('./sections/RawJsonSection', () => ({ default: () => <div>RAW_SECTION</div> }));
vi.mock('./sections/axes/XCard', () => ({ default: () => <div>X_CARD</div> }));
vi.mock('./sections/axes/AxisCard', () => ({ default: () => <div>AXIS_CARD</div> }));
vi.mock('./sections/axes/MarkCard', () => ({ default: () => <div>MARK_CARD</div> }));
vi.mock('./sections/series/shared', () => ({
    AddSeriesViaOid: () => null,
    EmptyState: () => null,
    IssueList: () => null,
    SeriesRawOverride: () => <div>RAW_OVERRIDE</div>,
    Swatch: () => null,
}));
// The adapter-react barrel (FileBrowser → icons → minutes of resolution): the ONE live
// importer in the chain gets a stub instead of the 10k-module library.
vi.mock('@iobroker/gui-components', () => ({
    SelectID: () => null,
    I18n: { t: (k: string) => k },
}));
vi.mock('./useEditorTheme', () => ({
    useEditorTheme: () => ({
        palette: ['#111', '#222'],
        themeTokens: { textPrimary: '#1', textSecondary: '#2', divider: '#3' },
        theme: { palette: { mode: 'light' } },
    }),
}));
vi.mock('./useJsonSeriesNames', () => ({ useJsonSeriesNames: () => [] }));
vi.mock('./useHistoryInstances', () => ({ useHistoryInstances: () => [] }));
// Belt-and-braces: whoever reaches the REAL collection-theme hook with the empty test
// pickerCtx gets a safe stub instead of a crash (host theme undefined).
vi.mock('../../hooks/useCollectionTheme', () => {
    const themeStub = (): object => ({
        theme: {
            name: 'light',
            palette: { mode: 'light', common: { white: '#fff' }, primary: { main: '#1' } },
            typography: {},
        },
        tokens: { primary: '#1', secondary: '#2', divider: '#3', textPrimary: '#1', textSecondary: '#2' },
        palette: ['#111', '#222'],
    });
    return { default: themeStub, useCollectionTheme: themeStub };
});

import { act, createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import EchartsEditorSections, { type FocusSectionRequest } from './EchartsEditorSections';
import { DEFAULT_EDITOR_STATE, type EditorState } from './editorState';
import { firstIssueTabOf, validateEditor, type SectionIssues } from './validation';

/** Mount the full section stack; returns the live container + a rerender for the focus prop. */
const mountSections = (
    issues: SectionIssues,
    focus: FocusSectionRequest | null,
    state: EditorState = { ...DEFAULT_EDITOR_STATE, chartType: 'line' },
): { container: HTMLElement; rerender: (next: FocusSectionRequest | null) => void } => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    const props = {
        state,
        set: () => undefined,
        issues,
        // A bound OID makes the series section resolve its object once — never answered here.
        pickerCtx: { socket: { getObject: () => new Promise(() => undefined) } },
        focusSection: focus,
    };
    const render = (f: FocusSectionRequest | null): void => {
        act(() => {
            root.render(createElement(EchartsEditorSections, { ...props, focusSection: f } as never));
        });
    };
    render(focus);
    return { container, rerender: render };
};

describe('Problems-button tab jump (ADR-0073, spec ticket 08)', () => {
    // The Datenabruf tab (Data source, Verlauf) hosts the bar cluster — the stack time-axis
    // advisory is placed there (ADR-0084 decision 6). It is the SECOND tab, so a jump is visible.
    const fetchIssues: SectionIssues = {
        dataSource: [{ key: 'echarts_val_stack_timeaxis' }],
    };
    const tabByLabel = (container: HTMLElement, labelKey: string): Element | undefined =>
        Array.from(container.querySelectorAll('[role="tab"]')).find(t => t.textContent?.includes(labelKey));

    it('a focus request WITH a tab selects that tab in the addressed section', () => {
        const { container } = mountSections(fetchIssues, { key: 'dataSource', token: 1, tab: 'fetch' });
        // The Data source section's tab row: Datenabruf (fetch) must be the SELECTED tab.
        expect(tabByLabel(container, 'echarts_tab_data_fetch')?.getAttribute('aria-selected')).toBe('true');
        // ...and its content is mounted (the acquisition defaults show).
        expect(container.textContent).toContain('echarts_aggregate');
    });

    it('the ⚠ dot marks the issue tab; the header rollup chip still counts the section', () => {
        // Sections start collapsed — a (tab-less) focus expands the section so the dots render.
        const { container } = mountSections(fetchIssues, { key: 'dataSource', token: 1 });
        const dot = container.querySelector('[data-issue-dot]');
        expect(dot).toBeTruthy();
        expect(dot?.closest('[role="tab"]')?.textContent).toContain('echarts_tab_data_fetch');
    });

    it('the jump is ONE-SHOT: a parent re-render with the same live focus does not snap back', () => {
        // Regression (ticket 08 review): the effect used to key on the focus OBJECT identity —
        // every modal re-render (any field edit) re-fired the jump after a manual tab switch.
        const { container, rerender } = mountSections(fetchIssues, { key: 'dataSource', token: 1, tab: 'fetch' });
        // The user manually switches to Zeitfenster…
        const windowTab = tabByLabel(container, 'echarts_tab_time_window');
        act(() => {
            windowTab?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(windowTab?.getAttribute('aria-selected')).toBe('true');
        // …a parent re-render with the SAME live focus request (same token, fresh objects)…
        rerender({ key: 'dataSource', token: 1, tab: 'fetch' });
        // …must NOT snap back to Datenabruf.
        expect(windowTab?.getAttribute('aria-selected')).toBe('true');
    });

    it('a repeated request (fresh token) re-triggers the jump to the same tab', () => {
        const { container, rerender } = mountSections(fetchIssues, null);
        rerender({ key: 'dataSource', token: 1, tab: 'fetch' });
        rerender({ key: 'dataSource', token: 2, tab: 'fetch' });
        expect(tabByLabel(container, 'echarts_tab_data_fetch')?.getAttribute('aria-selected')).toBe('true');
    });

    it('a jump to the retired Farbskala tab key lands on a valid Colours tab, never on an empty body', () => {
        // ADR-0101 removed the chart-level colour scale tab ('scale'). A stale focus request
        // (an old issue placement, a remembered jump) must still open the section on a real tab.
        const { container } = mountSections({}, { key: 'colors', token: 1, tab: 'scale' });
        const tabs = Array.from(container.querySelectorAll('[role="tab"]'));
        expect(tabs.map(t => t.textContent?.trim())).toEqual([
            'echarts_tab_palette',
            'echarts_tab_surface',
            'echarts_tab_frame',
        ]);
        // The fallback is the first tab — selected, with its content mounted.
        expect(tabByLabel(container, 'echarts_tab_palette')?.getAttribute('aria-selected')).toBe('true');
        expect(container.textContent).toContain('echarts_palette_source');
    });

    it('a focus request WITHOUT a tab expands the section; the tab-less card list needs no jump', () => {
        const seriesIssues: SectionIssues = { series: [{ key: 'echarts_val_oid_missing', args: ['A'] }] };
        const { container } = mountSections(seriesIssues, { key: 'series', token: 1 });
        // The section expanded (its Verlauf instance hint renders only in the open body)…
        expect(container.textContent).toContain('echarts_instance_auto_hint');
        // …and its header carries the ⚠ rollup chip (the tab dots' sibling, unchanged).
        expect(container.textContent).toContain('⚠ 1');
    });

    it('a Farbskala warning jump opens the AFFECTED series card on its Stil tab (ticket 05)', () => {
        const state: EditorState = {
            ...DEFAULT_EDITOR_STATE,
            chartType: 'line',
            series: [
                { id: 's1', oid: 'a.0', name: 'A' },
                { id: 's2', oid: 'b.0', name: 'B', colorScale: true, colorScaleMin: 9, colorScaleMax: 1 },
            ],
        };
        const issues = validateEditor(state);
        // The Problems button's glue: the series section's first issue addresses the Stil tab.
        const tab = firstIssueTabOf(issues, 'series');
        expect(tab).toBe('stil');
        const { container } = mountSections(issues, { key: 'series', token: 1, tab }, state);
        // Only B's card opened — ONE card tab row, its Stil tab selected and dotted.
        const selected = Array.from(container.querySelectorAll('[role="tab"][aria-selected="true"]')).map(
            t => t.textContent,
        );
        expect(selected).toEqual(['echarts_card_tab_style']);
        expect(container.querySelector('[data-issue-dot]')?.closest('[role="tab"]')?.textContent).toBe(
            'echarts_card_tab_style',
        );
        // The Stil body is mounted with the field error.
        expect(container.textContent).toContain('echarts_val_color_scale_range');
    });
});
