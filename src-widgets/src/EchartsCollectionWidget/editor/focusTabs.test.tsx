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

vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});
// The full section stack pulls many icons — every named import the stack touches, nulled.
vi.mock('@mui/icons-material', () => ({
    ExpandMore: () => null,
    Add: () => null,
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
vi.mock('@iobroker/adapter-react-v5', () => ({
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
import { DEFAULT_EDITOR_STATE } from './editorState';
import type { SectionIssues } from './validation';

/** Mount the full section stack; returns the live container + a rerender for the focus prop. */
const mountSections = (
    issues: SectionIssues,
    focus: FocusSectionRequest | null,
): { container: HTMLElement; rerender: (next: FocusSectionRequest | null) => void } => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root: Root = createRoot(container);
    const props = {
        state: { ...DEFAULT_EDITOR_STATE, chartType: 'line' },
        set: () => undefined,
        issues,
        pickerCtx: {},
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
    const vmapIssues: SectionIssues = {
        colors: [{ key: 'echarts_val_vmap_range' }],
    };

    it('a focus request WITH a tab selects that tab in the addressed section', () => {
        const { container } = mountSections(vmapIssues, { key: 'colors', token: 1, tab: 'scale' });
        // The Colours section's tab row: Farbskala (scale) must be the SELECTED tab.
        const scaleTab = Array.from(container.querySelectorAll('[role="tab"]')).find(t =>
            t.textContent?.includes('echarts_tab_color_scale'),
        );
        expect(scaleTab?.getAttribute('aria-selected')).toBe('true');
        // ...and its content is mounted (the visualMap cluster shows).
        expect(container.textContent).toContain('echarts_visualmap_enable');
    });

    it('the ⚠ dot marks the issue tab; the header rollup chip still counts the section', () => {
        // Sections start collapsed — a (tab-less) focus expands the section so the dots render.
        const { container } = mountSections(vmapIssues, { key: 'colors', token: 1 });
        const dot = container.querySelector('[data-issue-dot]');
        expect(dot).toBeTruthy();
        expect(dot?.closest('[role="tab"]')?.textContent).toContain('echarts_tab_color_scale');
    });

    it('the jump is ONE-SHOT: a parent re-render with the same live focus does not snap back', () => {
        // Regression (ticket 08 review): the effect used to key on the focus OBJECT identity —
        // every modal re-render (any field edit) re-fired the jump after a manual tab switch.
        const { container, rerender } = mountSections(vmapIssues, { key: 'colors', token: 1, tab: 'scale' });
        // The user manually switches to Palette…
        const paletteTab = Array.from(container.querySelectorAll('[role=tab]')).find(t =>
            t.textContent?.includes('echarts_tab_palette'),
        );
        act(() => {
            paletteTab?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(paletteTab?.getAttribute('aria-selected')).toBe('true');
        // …a parent re-render with the SAME live focus request (same token, fresh objects)…
        rerender({ key: 'colors', token: 1, tab: 'scale' });
        // …must NOT snap back to Farbskala.
        expect(paletteTab?.getAttribute('aria-selected')).toBe('true');
    });

    it('a repeated request (fresh token) re-triggers the jump to the same tab', () => {
        const { container, rerender } = mountSections(vmapIssues, null);
        rerender({ key: 'colors', token: 1, tab: 'scale' });
        rerender({ key: 'colors', token: 2, tab: 'scale' });
        const scaleTab = Array.from(container.querySelectorAll('[role="tab"]')).find(t =>
            t.textContent?.includes('echarts_tab_color_scale'),
        );
        expect(scaleTab?.getAttribute('aria-selected')).toBe('true');
    });

    it('a focus request WITHOUT a tab expands the section; the tab-less card list needs no jump', () => {
        const seriesIssues: SectionIssues = { series: [{ key: 'echarts_val_oid_missing', args: ['A'] }] };
        const { container } = mountSections(seriesIssues, { key: 'series', token: 1 });
        // The section expanded (its Verlauf instance hint renders only in the open body)…
        expect(container.textContent).toContain('echarts_instance_auto_hint');
        // …and its header carries the ⚠ rollup chip (the tab dots' sibling, unchanged).
        expect(container.textContent).toContain('⚠ 1');
    });
});
