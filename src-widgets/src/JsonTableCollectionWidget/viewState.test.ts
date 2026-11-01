/**
 * The Ansichtszustand's pure core (CONTEXT „Ansichtszustand", ADR-0092).
 *
 * @module widgets/JsonTableCollectionWidget/viewState.test
 * @remarks
 * Pins the resolution stored snapshot → effective TanStack state and back: parking per
 * Tabellen-Fähigkeit, the user's choice against the configuration (page size, column
 * widths), the page's clamp and resets, and the admission of stored Spaltenfilter. The
 * storage round trip and the hook wiring live in useViewState.hook.test.ts.
 */
import { describe, expect, it } from 'vitest';

import { effectiveType, tableCapabilities, type CapabilitySettings, type EffectiveType } from './capabilities';
import {
    clampPage,
    recordBaselines,
    resolveView,
    storeChange,
    type StoredView,
    type TableView,
    type ViewColumn,
    type ViewConfig,
    type ViewPart,
} from './viewState';

/** Every view-hosting capability on (column filtering and quick filter default off). */
const ALL_ON = tableCapabilities({ tableFiltering: true, tableQuickFilter: true });

const CONFIG: ViewConfig = {
    pageSize: 25,
    pageSizeOptions: [10, 25, 50, 100],
    columnWidths: {},
    autoSize: false,
    columns: {},
};

describe('resolveView — nothing stored', () => {
    it('shows the configured page size, page 1, and no sorting, filters, widths or hidden columns', () => {
        expect(resolveView({}, ALL_ON, CONFIG)).toEqual({
            sorting: [],
            columnFilters: [],
            globalFilter: '',
            pagination: { pageIndex: 0, pageSize: 25 },
            columnSizing: {},
            columnVisibility: {},
        });
    });
});

/** A stored view touching every part, in the forms the hook writes. */
const STORED = {
    sorting: [{ id: 'name', desc: true }],
    columnFilters: [{ id: 'temp', value: { operator: 'greaterThan', value: 20 } }],
    globalFilter: 'kitchen',
    pagination: { pageIndex: 2, pageSize: 25, pageSizeBaseline: 25 },
    columnSizing: { name: { width: 240, baseline: null } },
    columnVisibility: { temp: false },
};

describe('resolveView — a stored view', () => {
    it('applies every part while its capability is on', () => {
        expect(resolveView(STORED, ALL_ON, CONFIG)).toEqual({
            sorting: [{ id: 'name', desc: true }],
            columnFilters: [{ id: 'temp', value: { operator: 'greaterThan', value: 20 } }],
            globalFilter: 'kitchen',
            pagination: { pageIndex: 2, pageSize: 25 },
            columnSizing: { name: 240 },
            columnVisibility: { temp: false },
        });
    });

    it.each([
        ['sorting off', { tableSorting: false }, 'sorting', []],
        ['column filtering off', { tableFiltering: false }, 'columnFilters', []],
        ['quick filter off', { tableQuickFilter: false }, 'globalFilter', ''],
        ['hiding off', { tableHiding: false }, 'columnVisibility', {}],
        ['column menu off (takes filtering and hiding)', { tableColumnMenu: false }, 'columnVisibility', {}],
    ] as const)('parks the part while %s', (_case, settings, part, parked) => {
        const capabilities = tableCapabilities({ tableFiltering: true, tableQuickFilter: true, ...settings });
        const view = resolveView(STORED, capabilities, CONFIG);
        expect(view[part]).toEqual(parked);
        expect(view.columnSizing).toEqual({ name: 240 });
    });

    it('shows all rows on one page while pagination is off', () => {
        const capabilities = tableCapabilities({
            tableFiltering: true,
            tableQuickFilter: true,
            tablePagination: false,
        });
        const { pagination } = resolveView(STORED, capabilities, CONFIG);
        expect(pagination.pageIndex).toBe(0);
        expect(pagination.pageSize).toBeGreaterThanOrEqual(Number.MAX_SAFE_INTEGER);
    });

    it('parks the widths in auto-size mode only — a hidden Header keeps them applied', () => {
        expect(resolveView(STORED, ALL_ON, { ...CONFIG, autoSize: true }).columnSizing).toEqual({});
        const headerless = resolveView(STORED, tableCapabilities({ tableShowHeader: false }), CONFIG);
        expect(headerless.columnSizing).toEqual({ name: 240 });
    });

    it('parks every header-hosted part while the Header is hidden', () => {
        const view = resolveView(STORED, tableCapabilities({ tableShowHeader: false, tableQuickFilter: true }), CONFIG);
        expect(view.sorting).toEqual([]);
        expect(view.columnFilters).toEqual([]);
        expect(view.columnVisibility).toEqual({});
        expect(view.globalFilter).toBe('kitchen');
        expect(view.pagination).toEqual({ pageIndex: 2, pageSize: 25 });
    });
});

describe('resolveView — page size: the user choice wins until the configuration changes', () => {
    const chose50 = { pagination: { pageIndex: 3, pageSize: 50, pageSizeBaseline: 25 } };

    it.each([
        ['config unchanged → the choice', chose50, CONFIG, { pageIndex: 3, pageSize: 50 }],
        [
            'config changed since the choice → the config, page 1',
            chose50,
            { ...CONFIG, pageSize: 10 },
            { pageIndex: 0, pageSize: 10 },
        ],
        [
            'choice no longer offered → the config, page 1',
            chose50,
            { ...CONFIG, pageSizeOptions: [10, 25, 100] },
            { pageIndex: 0, pageSize: 25 },
        ],
        [
            'no baseline stored → counts as config unchanged',
            { pagination: { pageIndex: 3, pageSize: 50 } },
            { ...CONFIG, pageSize: 10 },
            { pageIndex: 3, pageSize: 50 },
        ],
        [
            'choice equals a changed config → stays on its page',
            { pagination: { pageIndex: 3, pageSize: 10, pageSizeBaseline: 25 } },
            { ...CONFIG, pageSize: 10 },
            { pageIndex: 3, pageSize: 10 },
        ],
    ] as const)('%s', (_case, stored, config, expected) => {
        expect(resolveView(stored, ALL_ON, config).pagination).toEqual(expected);
    });
});

describe('resolveView — column widths: the dragged width wins until its cfg.width changes', () => {
    const stored = {
        columnSizing: {
            name: { width: 240, baseline: 200 }, // dragged against cfg.width 200
            temp: { width: 90, baseline: null }, // dragged while no width was configured
            room: 310, // legacy form: no baseline
        },
    };

    it.each([
        ['config unchanged → every dragged width', { name: 200 }, { name: 240, temp: 90, room: 310 }],
        ['cfg.width of one column changed → that column yields', { name: 180 }, { temp: 90, room: 310 }],
        ['a width configured where none was → that column yields', { name: 200, temp: 120 }, { name: 240, room: 310 }],
        ['configured width removed → that column yields', {}, { temp: 90, room: 310 }],
        [
            'no baseline stored → counts as config unchanged',
            { name: 200, room: 150 },
            { name: 240, temp: 90, room: 310 },
        ],
    ] as const)('%s', (_case, columnWidths, expected) => {
        expect(resolveView(stored, ALL_ON, { ...CONFIG, columnWidths }).columnSizing).toEqual(expected);
    });
});

describe('resolveView — stored Spaltenfilter must have the form {operator, value}', () => {
    const fitting = { id: 'temp', value: { operator: 'greaterThan', value: 20 } };
    const empty = { id: 'room', value: { operator: 'isEmpty', value: '' } };

    it.each([
        ['a bare value (pre-dialog form)', { id: 'name', value: 'kitchen' }],
        ['no operator', { id: 'name', value: { value: 'kitchen' } }],
        ['no value', { id: 'name', value: { operator: 'contains' } }],
        ['a non-string operator', { id: 'name', value: { operator: 7, value: 'kitchen' } }],
        ['an object value', { id: 'name', value: { operator: 'equals', value: { nested: true } } }],
        ['no column id', { value: { operator: 'contains', value: 'kitchen' } }],
        ['not an object', 'contains:kitchen'],
    ])('discards %s and keeps the fitting ones', (_case, unfit) => {
        const stored = { columnFilters: [fitting, unfit, empty] };
        expect(resolveView(stored, ALL_ON, CONFIG).columnFilters).toEqual([fitting, empty]);
    });
});

/** A filterable Column of an Effektiver Typ. */
const filterable = (type: EffectiveType): ViewColumn => ({ type, filterable: true });

describe("resolveView — a stored Spaltenfilter its Column's Effektiver Typ does not offer is discarded", () => {
    const contains = { id: 'temp', value: { operator: 'contains', value: '2' } };
    const room = { id: 'room', value: { operator: 'contains', value: 'kit' } };
    const stored = { columnFilters: [contains, room] };

    it('discards contains on a Column whose Format type was changed to number', () => {
        const columns = {
            temp: filterable(effectiveType('number', 'string')),
            room: filterable(effectiveType(undefined, 'string')),
        };
        expect(resolveView(stored, ALL_ON, { ...CONFIG, columns }).columnFilters).toEqual([room]);
    });

    it('keeps it while the Column is still a string column', () => {
        const columns = {
            temp: filterable(effectiveType(undefined, 'string')),
            room: filterable(effectiveType(undefined, 'string')),
        };
        expect(resolveView(stored, ALL_ON, { ...CONFIG, columns }).columnFilters).toEqual([contains, room]);
    });

    it('keeps a filter on a Column of unknown type (no data yet), judging only its form', () => {
        const unknownOperator = { id: 'temp', value: { operator: 'matches', value: '2' } };
        const view = resolveView({ columnFilters: [contains, unknownOperator] }, ALL_ON, CONFIG);
        expect(view.columnFilters).toEqual([contains]);
    });
});

describe('a stored Spaltenfilter on a Column that is not filterable is parked: neither applied nor deleted', () => {
    const room = { id: 'room', value: { operator: 'contains', value: 'kit' } };
    const bath = { id: 'room', value: { operator: 'contains', value: 'bath' } };
    const configWith = (temp?: ViewColumn): ViewConfig => ({
        ...CONFIG,
        columns: { room: filterable('string'), ...(temp && { temp }) },
    });

    it.each<[string, ViewColumn | undefined, unknown, boolean, boolean]>([
        // case, the Column, the stored filter, applied, kept when the user writes another filter
        ['filterable, offered operator', filterable('number'), { operator: 'greaterThan', value: 20 }, true, true],
        [
            'not filterable (override off) → parked',
            { type: 'number', filterable: false },
            { operator: 'greaterThan', value: 20 },
            false,
            true,
        ],
        [
            'not filterable (type default off) → parked',
            { type: 'image', filterable: false },
            { operator: 'contains', value: 'png' },
            false,
            true,
        ],
        [
            'filterable, operator not offered → discarded',
            filterable('number'),
            { operator: 'contains', value: '2' },
            false,
            false,
        ],
        [
            'not filterable, operator not offered → discarded, not parked',
            { type: 'number', filterable: false },
            { operator: 'contains', value: '2' },
            false,
            false,
        ],
        ['Column not known → judged by its form only', undefined, { operator: 'greaterThan', value: 20 }, true, true],
    ])('%s', (_case, temp, value, applied, kept) => {
        const filter = { id: 'temp', value };
        const stored = { columnFilters: [filter] };
        const config = configWith(temp);
        const view = resolveView(stored, ALL_ON, config);
        expect(view.columnFilters.some(f => f.id === 'temp')).toBe(applied);

        const written = storeChange(view, { columnFilters: [...view.columnFilters, room] }, ALL_ON, config, stored);
        expect(written.columnFilters).toEqual(expect.arrayContaining([room]));
        expect((written.columnFilters as unknown[]).some(f => (f as { id: string }).id === 'temp')).toBe(kept);
    });

    describe('round trip', () => {
        const temp = { id: 'temp', value: { operator: 'greaterThan', value: 20 } };
        const parkedConfig = configWith({ type: 'number', filterable: false });
        const stored = { columnFilters: [temp, room] };

        it('survives the user changing and clearing the other filters, and applies again with its Column', () => {
            const changed = storeChange(
                resolveView(stored, ALL_ON, parkedConfig),
                { columnFilters: [bath] },
                ALL_ON,
                parkedConfig,
                stored,
            );
            const afterChange = { ...stored, ...changed };
            expect(resolveView(afterChange, ALL_ON, parkedConfig).columnFilters).toEqual([bath]);

            const cleared = storeChange(
                resolveView(afterChange, ALL_ON, parkedConfig),
                { columnFilters: [] },
                ALL_ON,
                parkedConfig,
                afterChange,
            );
            const afterClear = { ...afterChange, ...cleared };
            expect(resolveView(afterClear, ALL_ON, parkedConfig).columnFilters).toEqual([]);

            const filterableAgain = configWith(filterable('number'));
            expect(resolveView(afterClear, ALL_ON, filterableAgain).columnFilters).toEqual([temp]);
        });
    });
});

/** Store a change over a stored view and resolve again — what a reload would show. */
const reload = (stored: StoredView, written: StoredView, config = CONFIG): ReturnType<typeof resolveView> =>
    resolveView({ ...stored, ...written }, ALL_ON, config);

describe('storeChange — a chosen page size survives a reload', () => {
    it('keeps 50 chosen against a configured 25', () => {
        const view = resolveView({}, ALL_ON, CONFIG);
        const written = storeChange(view, { pagination: { pageIndex: 0, pageSize: 50 } }, ALL_ON, CONFIG, {});
        expect(reload({}, written).pagination).toEqual({ pageIndex: 0, pageSize: 50 });
    });

    it('yields to a page size the editor changes after the choice', () => {
        const view = resolveView({}, ALL_ON, CONFIG);
        const written = storeChange(view, { pagination: { pageIndex: 0, pageSize: 50 } }, ALL_ON, CONFIG, {});
        expect(reload({}, written, { ...CONFIG, pageSize: 100 }).pagination).toEqual({ pageIndex: 0, pageSize: 100 });
    });
});

describe('storeChange — back to page 1 only when sorting, filters, quick-filter term or page size change', () => {
    const onPage3 = resolveView(STORED, ALL_ON, CONFIG); // page index 2

    it.each<[string, Partial<TableView>]>([
        ['sorting', { sorting: [{ id: 'temp', desc: false }] }],
        ['column filters', { columnFilters: [] }],
        ['quick-filter term', { globalFilter: 'bath' }],
        ['page size', { pagination: { pageIndex: 2, pageSize: 50 } }],
    ])('a changed %s restarts on page 1', (_case, change) => {
        const written = storeChange(onPage3, change, ALL_ON, CONFIG, STORED);
        expect(reload(STORED, written).pagination.pageIndex).toBe(0);
    });

    it.each<[string, Partial<TableView>, number]>([
        ['a width', { columnSizing: { name: 300 } }, 2],
        ['the visibility', { columnVisibility: {} }, 2],
        ['the page', { pagination: { pageIndex: 4, pageSize: 25 } }, 4],
        ['the sorting to what it already is', { sorting: [{ id: 'name', desc: true }] }, 2],
    ])('changing %s keeps the page', (_case, change, pageIndex) => {
        const written = storeChange(onPage3, change, ALL_ON, CONFIG, STORED);
        expect(reload(STORED, written).pagination.pageIndex).toBe(pageIndex);
    });

    it('does not write the reset of a parked page', () => {
        const noPaging = tableCapabilities({ tableFiltering: true, tableQuickFilter: true, tablePagination: false });
        const written = storeChange(
            resolveView(STORED, noPaging, CONFIG),
            { globalFilter: 'bath' },
            noPaging,
            CONFIG,
            STORED,
        );
        expect(written).toEqual({ globalFilter: 'bath' });
    });
});

describe('recordBaselines — a value stored without baseline takes the configuration it was first read under', () => {
    const legacy = {
        pagination: { pageIndex: 1, pageSize: 50 },
        columnSizing: { room: 310, name: { width: 240, baseline: 200 } },
    };
    const config = { ...CONFIG, columnWidths: { name: 200, room: 150 } };

    it('records the configured page size and widths as baselines, keeping the values', () => {
        expect(recordBaselines(legacy, ALL_ON, config)).toEqual({
            pagination: { pageIndex: 1, pageSize: 50, pageSizeBaseline: 25 },
            columnSizing: { room: { width: 310, baseline: 150 }, name: { width: 240, baseline: 200 } },
        });
    });

    it('lets a later configuration change win over the recorded values', () => {
        const recorded = { ...legacy, ...recordBaselines(legacy, ALL_ON, config) };
        const edited = { ...config, pageSize: 10, columnWidths: { name: 200, room: 180 } };
        const view = resolveView(recorded, ALL_ON, edited);
        expect(view.pagination).toEqual({ pageIndex: 0, pageSize: 10 });
        expect(view.columnSizing).toEqual({ name: 240 });
    });

    it('records nothing when every value has its baseline', () => {
        const recorded = { ...legacy, ...recordBaselines(legacy, ALL_ON, config) };
        expect(recordBaselines(recorded, ALL_ON, config)).toEqual({});
    });

    it('records nothing for a parked part', () => {
        const noPaging = tableCapabilities({ tablePagination: false });
        expect(recordBaselines(legacy, noPaging, { ...config, autoSize: true })).toEqual({});
    });
});

describe('clampPage — the page survives data updates, clamped to the last page', () => {
    const page3 = { pageIndex: 2, pageSize: 25 };

    it.each([
        ['enough rows for page 3 → page 3', 100, 2],
        ['exactly three pages → page 3', 75, 2],
        ['fewer rows → the last page', 40, 1],
        ['no rows → page 1', 0, 0],
        ['rows not counted yet → page 3', undefined, 2],
    ] as const)('%s', (_case, rowCount, pageIndex) => {
        expect(clampPage(page3, rowCount)).toEqual({ pageIndex, pageSize: 25 });
    });

    it('returns the same state when nothing is clamped', () => {
        expect(clampPage(page3, 100)).toBe(page3);
    });
});

describe('storeChange — a parked part is not written and returns with its capability', () => {
    it.each<[ViewPart, CapabilitySettings, ViewConfig, Partial<TableView>]>([
        ['sorting', { tableSorting: false }, CONFIG, { sorting: [{ id: 'temp', desc: false }] }],
        ['columnFilters', { tableFiltering: false }, CONFIG, { columnFilters: [] }],
        ['columnFilters', { tableShowHeader: false }, CONFIG, { columnFilters: [] }],
        ['globalFilter', { tableQuickFilter: false }, CONFIG, { globalFilter: '' }],
        ['columnVisibility', { tableHiding: false }, CONFIG, { columnVisibility: {} }],
        ['columnVisibility', { tableColumnMenu: false }, CONFIG, { columnVisibility: {} }],
        ['columnSizing', {}, { ...CONFIG, autoSize: true }, { columnSizing: { temp: 300 } }],
        ['pagination', { tablePagination: false }, CONFIG, { pagination: { pageIndex: 0, pageSize: 10 } }],
    ])('%s (off via %j)', (part, settings, offConfig, change) => {
        const off = tableCapabilities({ tableFiltering: true, tableQuickFilter: true, ...settings });
        const written = storeChange(resolveView(STORED, off, offConfig), change, off, offConfig, STORED);

        expect(written).not.toHaveProperty(part);
        expect(reload(STORED, written)[part]).toEqual(resolveView(STORED, ALL_ON, CONFIG)[part]);
    });
});

describe('storeChange — a dragged width survives a reload until its cfg.width changes', () => {
    const config = { ...CONFIG, columnWidths: { name: 200 } };
    const view = resolveView({}, ALL_ON, config);
    const written = storeChange(view, { columnSizing: { name: 240, temp: 90 } }, ALL_ON, config, {});

    it('keeps the dragged widths while the configuration stays', () => {
        expect(reload({}, written, config).columnSizing).toEqual({ name: 240, temp: 90 });
    });

    it('lets a column yield whose cfg.width the editor changes, and only that one', () => {
        expect(reload({}, written, { ...config, columnWidths: { name: 260 } }).columnSizing).toEqual({ temp: 90 });
    });

    it('lets a column yield that gets a cfg.width where none was', () => {
        const widths = { name: 200, temp: 120 };
        expect(reload({}, written, { ...config, columnWidths: widths }).columnSizing).toEqual({ name: 240 });
    });
});
