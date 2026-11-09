/**
 * Decision tables for the Tabellen-Fähigkeiten and the Effektiver Typ (CONTEXT.md).
 *
 * @module JsonTableCollectionWidget/capabilities.test
 * @remarks
 * Inputs are RAW widget data, exactly as the runtime (`widget.data`) and the vis-2
 * `hidden` closures receive them. Expected values come from the ticket's tables, not
 * from re-deriving the rule.
 */
import { describe, expect, it } from 'vitest';

import { columnCapabilities, effectiveType, tableCapabilities, typeDefaults, virtualizesRows } from './capabilities';

describe('virtualizesRows', () => {
    const paged = tableCapabilities({});
    const unpaged = tableCapabilities({ tablePagination: false });

    it('never virtualizes a paged table', () => {
        expect(virtualizesRows(paged, 1000, 50)).toBe(false);
    });

    it('virtualizes above the threshold, 50 when unset', () => {
        expect(virtualizesRows(unpaged, 51)).toBe(true);
        expect(virtualizesRows(unpaged, 50)).toBe(false);
        expect(virtualizesRows(unpaged, 11, 10)).toBe(true);
        expect(virtualizesRows(unpaged, 10, 10)).toBe(false);
    });

    it('never virtualizes with the threshold 0, as the field tooltip promises', () => {
        expect(virtualizesRows(unpaged, 1000, 0)).toBe(false);
    });
});

describe('tableCapabilities — missing keys keep their historic polarity', () => {
    it('resolves empty widget data to the documented defaults', () => {
        expect(tableCapabilities({})).toEqual({
            header: true,
            sorting: true,
            multiSort: false,
            columnFiltering: false,
            quickFilter: false,
            columnMenu: true,
            hiding: true,
            pagination: true,
            rowSelection: false,
        });
    });

    // key, capability, explicit true ⇒, explicit false ⇒ (every other key missing)
    it.each([
        ['tableShowHeader', 'header', true, false],
        ['tableSorting', 'sorting', true, false],
        ['tableSortingMulti', 'multiSort', true, false],
        ['tableFiltering', 'columnFiltering', true, false],
        ['tableQuickFilter', 'quickFilter', true, false],
        ['tableColumnMenu', 'columnMenu', true, false],
        ['tableHiding', 'hiding', true, false],
        ['tablePagination', 'pagination', true, false],
        ['tableRowSelection', 'rowSelection', true, false],
    ] as const)('%s: true ⇒ %s %s, false ⇒ %s', (key, capability, onTrue, onFalse) => {
        expect(tableCapabilities({ [key]: true })[capability]).toBe(onTrue);
        expect(tableCapabilities({ [key]: false })[capability]).toBe(onFalse);
    });
});

describe('tableCapabilities — couplings', () => {
    const everythingOn = {
        tableShowHeader: true,
        tableSorting: true,
        tableSortingMulti: true,
        tableFiltering: true,
        tableQuickFilter: true,
        tableColumnMenu: true,
        tableHiding: true,
        tablePagination: true,
        tableRowSelection: true,
    };

    // header, column menu ⇒ sorting, multiSort, columnFiltering, hiding, columnMenu
    it.each([
        [true, true, true, true, true, true, true],
        [true, false, true, true, false, false, false],
        [false, true, false, false, false, false, false],
        [false, false, false, false, false, false, false],
    ])(
        'header %s × menu %s ⇒ sorting %s, multiSort %s, filtering %s, hiding %s, menu %s',
        (header, menu, sorting, multiSort, columnFiltering, hiding, columnMenu) => {
            const caps = tableCapabilities({ ...everythingOn, tableShowHeader: header, tableColumnMenu: menu });
            expect({
                sorting: caps.sorting,
                multiSort: caps.multiSort,
                columnFiltering: caps.columnFiltering,
                hiding: caps.hiding,
                columnMenu: caps.columnMenu,
            }).toEqual({ sorting, multiSort, columnFiltering, hiding, columnMenu });
        },
    );

    it('regression: a hidden Header switches off every header-hosted capability', () => {
        // Stored sorting / filters / hidden columns stayed active without any UI to undo them.
        const caps = tableCapabilities({ ...everythingOn, tableShowHeader: false });
        expect(caps.header).toBe(false);
        expect(caps.sorting).toBe(false);
        expect(caps.multiSort).toBe(false);
        expect(caps.columnFiltering).toBe(false);
        expect(caps.hiding).toBe(false);
        expect(caps.columnMenu).toBe(false);
    });

    it('regression: a switched-off column menu takes column filtering and hiding with it', () => {
        const caps = tableCapabilities({ ...everythingOn, tableColumnMenu: false });
        expect(caps.columnFiltering).toBe(false);
        expect(caps.hiding).toBe(false);
        // Sorting stays reachable by header click.
        expect(caps.sorting).toBe(true);
    });

    it('keeps quick filter, pagination and row selection independent of the Header', () => {
        const caps = tableCapabilities({ ...everythingOn, tableShowHeader: false, tableColumnMenu: false });
        expect(caps.quickFilter).toBe(true);
        expect(caps.pagination).toBe(true);
        expect(caps.rowSelection).toBe(true);
    });

    it('offers no multi-sort while sorting itself is off', () => {
        expect(tableCapabilities({ ...everythingOn, tableSorting: false }).multiSort).toBe(false);
    });
});

describe('effectiveType — Format type when set, else Detected type', () => {
    // format type, detected type ⇒ effective type
    it.each([
        ['date', 'string', 'date'],
        ['image', 'string', 'image'],
        ['string', 'image', 'string'],
        ['number', undefined, 'number'],
        [undefined, 'number', 'number'],
        [undefined, 'object', 'object'],
        [undefined, 'mixed', 'mixed'],
        [undefined, undefined, 'string'],
    ] as const)('format %s, detected %s ⇒ %s', (format, detected, expected) => {
        expect(effectiveType(format, detected)).toBe(expected);
    });
});

describe('typeDefaults — sortability, filterability and hideability per Effektiver Typ', () => {
    // type ⇒ sortable, filterable, hideable
    it.each([
        ['string', true, true, true],
        ['number', true, true, true],
        ['date', true, true, true],
        ['boolean', false, true, true],
        ['image', false, false, true],
        ['array', false, false, true],
        ['object', false, false, true],
        ['null', true, true, true],
        ['mixed', true, true, true],
    ] as const)('%s ⇒ sortable %s, filterable %s, hideable %s', (type, sortable, filterable, hideable) => {
        expect(typeDefaults(type)).toEqual({ sortable, filterable, hideable });
    });
});

describe('columnCapabilities — table capability ∧ (override ?? type default)', () => {
    const tableOn = tableCapabilities({ tableFiltering: true });
    const tableOff = tableCapabilities({ tableSorting: false, tableFiltering: false, tableHiding: false });

    // table on?, override, type ⇒ sortable
    it.each([
        [true, undefined, 'string', true],
        [true, 'auto', 'string', true],
        [true, undefined, 'boolean', false],
        [true, 'auto', 'image', false],
        [true, true, 'boolean', true],
        [true, true, 'image', true],
        [true, false, 'string', false],
        [false, undefined, 'string', false],
        [false, 'auto', 'string', false],
        [false, true, 'string', false],
        [false, true, 'image', false],
        [false, false, 'string', false],
    ] as const)('sorting: table %s, override %s, type %s ⇒ %s', (on, sortable, type, expected) => {
        expect(columnCapabilities(on ? tableOn : tableOff, type, { sortable }).sortable).toBe(expected);
    });

    // table on?, override, type ⇒ filterable
    it.each([
        [true, undefined, 'number', true],
        [true, 'auto', 'boolean', true],
        [true, 'auto', 'array', false],
        [true, true, 'array', true],
        [true, false, 'number', false],
        [false, undefined, 'number', false],
        [false, true, 'number', false],
        [false, true, 'array', false],
    ] as const)('filtering: table %s, override %s, type %s ⇒ %s', (on, filterable, type, expected) => {
        expect(columnCapabilities(on ? tableOn : tableOff, type, { filterable }).filterable).toBe(expected);
    });

    // table on?, override, type ⇒ hideable
    it.each([
        [true, undefined, 'object', true],
        [true, 'auto', 'image', true],
        [true, true, 'string', true],
        [true, false, 'string', false],
        [false, undefined, 'string', false],
        [false, true, 'string', false],
    ] as const)('hiding: table %s, override %s, type %s ⇒ %s', (on, enableHiding, type, expected) => {
        expect(columnCapabilities(on ? tableOn : tableOff, type, { enableHiding }).hideable).toBe(expected);
    });

    it('treats a column without overrides as all type defaults', () => {
        expect(columnCapabilities(tableOn, 'boolean')).toEqual({ sortable: false, filterable: true, hideable: true });
    });

    it('regression: an explicit override true never beats a switched-off table capability', () => {
        // The editor used to claim "on" here while TanStack enforced "off"; hiding was even
        // enabled at runtime, because the table-level hiding switch never reached TanStack.
        expect(
            columnCapabilities(tableOff, 'string', { sortable: true, filterable: true, enableHiding: true }),
        ).toEqual({ sortable: false, filterable: false, hideable: false });
    });

    it('regression: a switched-off column menu leaves no column filterable or hideable', () => {
        const menuOff = tableCapabilities({ tableFiltering: true, tableColumnMenu: false });
        expect(columnCapabilities(menuOff, 'string', { filterable: true, enableHiding: true })).toEqual({
            sortable: true,
            filterable: false,
            hideable: false,
        });
    });

    it("lets an 'image' Format type on a detected string column default to not sortable / filterable", () => {
        expect(columnCapabilities(tableOn, effectiveType('image', 'string'))).toEqual({
            sortable: false,
            filterable: false,
            hideable: true,
        });
    });
});
