/**
 * useViewState — the Ansichtszustand over the browser's storage.
 *
 * @module widgets/JsonTableCollectionWidget/useViewState.hook.test
 * @remarks
 * Pins the hook fabric over the pure core (viewState.test.ts): the reload round trip
 * through localStorage, the re-read on a widget-id change and on a returning capability,
 * and that the storage keys and value forms of earlier versions are still read. Runs in
 * the dom project (happy-dom localStorage); imports neither TanStack nor the renderer.
 */
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { act } from 'react';

import { renderHook, type RenderHookHandle } from '../lib/testing/testHarness';
import { tableCapabilities, type TableCapabilities } from './capabilities';
import type { ColumnConfigEntry } from './types';
import { useViewState, type UseViewStateOptions, type ViewState } from './useViewState';

const ALL_ON = tableCapabilities({ tableFiltering: true, tableQuickFilter: true });

const OPTIONS: UseViewStateOptions = {
    widgetId: 'w000001',
    capabilities: ALL_ON,
    pageSize: 25,
    pageSizeOptions: '10,25,50,100',
    autoSize: false,
    columnConfig: [],
};

const mounted: RenderHookHandle<ViewState>[] = [];

/** Mount the hook — a fresh mount reads the storage like a reload. */
const mount = (options: Partial<UseViewStateOptions> = {}): RenderHookHandle<ViewState> => {
    const handle = renderHook(() => useViewState({ ...OPTIONS, ...options }));
    mounted.push(handle);
    return handle;
};

/** Simulate a reload: unmount and mount again with the same (or changed) options. */
const reload = (
    handle: RenderHookHandle<ViewState>,
    options: Partial<UseViewStateOptions> = {},
): RenderHookHandle<ViewState> => {
    handle.unmount();
    mounted.splice(mounted.indexOf(handle), 1);
    return mount(options);
};

beforeEach(() => localStorage.clear());
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
    localStorage.clear();
});

describe('useViewState — a changed widget id', () => {
    it('reads the view kept for the new id, and writes there', () => {
        localStorage.setItem('jtc_sorting_w000002', JSON.stringify([{ id: 'room', desc: false }]));
        const handle = mount();
        act(() => handle.result.current.onSortingChange([{ id: 'name', desc: true }]));

        handle.rerender(() => useViewState({ ...OPTIONS, widgetId: 'w000002' }));
        expect(handle.result.current.state.sorting).toEqual([{ id: 'room', desc: false }]);

        act(() => handle.result.current.onGlobalFilterChange('bath'));
        expect(localStorage.getItem('jtc_global_filter_w000002')).toBe('"bath"');
        expect(localStorage.getItem('jtc_global_filter_w000001')).toBeNull();
        expect(JSON.parse(localStorage.getItem('jtc_sorting_w000001') ?? 'null')).toEqual([{ id: 'name', desc: true }]);
    });
});

describe('useViewState — views stored by earlier versions', () => {
    const columnConfig: ColumnConfigEntry[] = [{ path: 'name', visible: true, headerName: 'Name', width: 200 }];
    const stored = (part: string): unknown => JSON.parse(localStorage.getItem(`${part}w000001`) ?? 'null');

    beforeEach(() => {
        localStorage.setItem('jtc_sorting_w000001', JSON.stringify([{ id: 'name', desc: true }]));
        localStorage.setItem(
            'jtc_filters_w000001',
            JSON.stringify([
                { id: 'temp', value: { operator: 'lessThan', value: 5 } },
                { id: 'room', value: 'kitchen' }, // pre-dialog bare value: discarded
            ]),
        );
        localStorage.setItem('jtc_global_filter_w000001', JSON.stringify('bath'));
        localStorage.setItem('jtc_pagination_w000001', JSON.stringify({ pageIndex: 1, pageSize: 50 }));
        localStorage.setItem('jtc_col_sizes_w000001', JSON.stringify({ name: 310, __select__: 48 }));
        localStorage.setItem('jtc_visibility_w000001', JSON.stringify({ temp: false }));
    });

    it('reads the old keys and value forms', () => {
        const { state } = mount({ columnConfig }).result.current;
        expect(state.sorting).toEqual([{ id: 'name', desc: true }]);
        expect(state.columnFilters).toEqual([{ id: 'temp', value: { operator: 'lessThan', value: 5 } }]);
        expect(state.globalFilter).toBe('bath');
        expect(state.pagination).toEqual({ pageIndex: 1, pageSize: 50 });
        expect(state.columnSizing).toEqual({ name: 310, __select__: 48 });
        expect(state.columnVisibility).toEqual({ temp: false });
    });

    it('records the configuration they were first read under, so a later edit wins', () => {
        const handle = mount({ columnConfig });
        expect(stored('jtc_pagination_')).toEqual({ pageIndex: 1, pageSize: 50, pageSizeBaseline: 25 });
        expect(stored('jtc_col_sizes_')).toEqual({
            name: { width: 310, baseline: 200 },
            __select__: { width: 48, baseline: null },
        });

        const edited = [{ ...columnConfig[0], width: 220 }];
        handle.rerender(() => useViewState({ ...OPTIONS, pageSize: 10, columnConfig: edited }));
        expect(handle.result.current.state.pagination).toEqual({ pageIndex: 0, pageSize: 10 });
        expect(handle.result.current.state.columnSizing).toEqual({ __select__: 48 });
    });
});

describe('useViewState — parking', () => {
    it('neither applies nor writes a part while its capability is off, and reads it anew when it returns', () => {
        const handle = mount();
        act(() => handle.result.current.onSortingChange([{ id: 'name', desc: true }]));

        const headerless: TableCapabilities = tableCapabilities({ tableShowHeader: false });
        handle.rerender(() => useViewState({ ...OPTIONS, capabilities: headerless }));
        expect(handle.result.current.state.sorting).toEqual([]);

        act(() => handle.result.current.onSortingChange([{ id: 'temp', desc: false }]));
        expect(JSON.parse(localStorage.getItem('jtc_sorting_w000001') ?? 'null')).toEqual([{ id: 'name', desc: true }]);

        // Kept elsewhere meanwhile (e.g. the runtime in another tab): the return reads storage.
        localStorage.setItem('jtc_sorting_w000001', JSON.stringify([{ id: 'room', desc: true }]));
        handle.rerender(() => useViewState(OPTIONS));
        expect(handle.result.current.state.sorting).toEqual([{ id: 'room', desc: true }]);
    });

    it('parks the dragged widths in auto-size mode, not with a hidden Header', () => {
        const handle = mount();
        act(() => handle.result.current.onColumnSizingChange({ name: 240 }));

        handle.rerender(() =>
            useViewState({ ...OPTIONS, capabilities: tableCapabilities({ tableShowHeader: false }) }),
        );
        expect(handle.result.current.state.columnSizing).toEqual({ name: 240 });

        handle.rerender(() => useViewState({ ...OPTIONS, autoSize: true }));
        expect(handle.result.current.state.columnSizing).toEqual({});

        handle.rerender(() => useViewState(OPTIONS));
        expect(handle.result.current.state.columnSizing).toEqual({ name: 240 });
    });
});

describe('useViewState — the page and the rows', () => {
    it('shows the last page while fewer rows are there, and the stored page again when they return', () => {
        const handle = mount();
        act(() => handle.result.current.onPaginationChange({ pageIndex: 3, pageSize: 25 }));

        act(() => handle.result.current.setRowCount(60));
        expect(handle.result.current.state.pagination).toEqual({ pageIndex: 2, pageSize: 25 });
        expect(JSON.parse(localStorage.getItem('jtc_pagination_w000001') ?? 'null')).toMatchObject({ pageIndex: 3 });

        act(() => handle.result.current.setRowCount(200));
        expect(handle.result.current.state.pagination).toEqual({ pageIndex: 3, pageSize: 25 });
    });

    it('pages on from the page shown, not the stored one', () => {
        const handle = mount();
        act(() => handle.result.current.onPaginationChange({ pageIndex: 3, pageSize: 25 }));
        act(() => handle.result.current.setRowCount(60));

        act(() => handle.result.current.onPaginationChange(old => ({ ...old, pageIndex: old.pageIndex - 1 })));
        expect(handle.result.current.state.pagination.pageIndex).toBe(1);
    });
});

describe('useViewState — reload round trip', () => {
    it('keeps a page size of 50 chosen against a configured 25', () => {
        const first = mount();
        act(() => first.result.current.onPaginationChange({ pageIndex: 0, pageSize: 50 }));
        expect(first.result.current.state.pagination).toEqual({ pageIndex: 0, pageSize: 50 });

        expect(reload(first).result.current.state.pagination).toEqual({ pageIndex: 0, pageSize: 50 });
    });

    it('keeps sorting, filters, quick-filter term, page, widths and hidden columns', () => {
        const first = mount();
        const view = first.result.current;
        act(() => view.onSortingChange([{ id: 'name', desc: true }]));
        act(() => view.onColumnFiltersChange([{ id: 'temp', value: { operator: 'greaterThan', value: 20 } }]));
        act(() => view.onGlobalFilterChange('kitchen'));
        act(() => view.onPaginationChange(old => ({ ...old, pageIndex: 3 })));
        act(() => view.onColumnSizingChange(old => ({ ...old, name: 240 })));
        act(() => view.onColumnVisibilityChange({ temp: false }));

        const { rowSelection, ...persisted } = reload(first).result.current.state;
        expect(persisted).toEqual({
            sorting: [{ id: 'name', desc: true }],
            columnFilters: [{ id: 'temp', value: { operator: 'greaterThan', value: 20 } }],
            globalFilter: 'kitchen',
            pagination: { pageIndex: 3, pageSize: 25 },
            columnSizing: { name: 240 },
            columnVisibility: { temp: false },
        });
        expect(rowSelection).toEqual({});
    });

    it('applies changes batched into one render on top of each other', () => {
        const first = mount();
        act(() => first.result.current.onPaginationChange({ pageIndex: 3, pageSize: 25 }));
        act(() => {
            first.result.current.onSortingChange([{ id: 'name', desc: false }]);
            first.result.current.onColumnVisibilityChange({ temp: false });
        });

        const { state } = reload(first).result.current;
        expect(state.sorting).toEqual([{ id: 'name', desc: false }]);
        expect(state.columnVisibility).toEqual({ temp: false });
        expect(state.pagination.pageIndex).toBe(0);
    });

    it('keeps the row selection in the session only', () => {
        const first = mount({ capabilities: tableCapabilities({ tableRowSelection: true }) });
        act(() => first.result.current.onRowSelectionChange({ 3: true }));
        expect(first.result.current.state.rowSelection).toEqual({ 3: true });

        expect(reload(first).result.current.state.rowSelection).toEqual({});
    });
});
