/**
 * The ONE resolution of the Tabellen-Fähigkeiten and the Effektiver Typ.
 *
 * @module JsonTableCollectionWidget/capabilities
 * @remarks
 * Pure. Reads RAW widget data, so the runtime (`widget.data`) and the vis-2 `hidden`
 * closures (which receive raw data) share the same answer.
 */

import type { WidgetData } from '@iobroker/types-vis-2';
import { TABLE_VIRTUALIZE_THRESHOLD_DEFAULT } from '../lib/jsonTableDefaults';
import type { DetectedType } from '../hooks/useJsonTableAnalysis/types';
import type { ColumnConfigEntry, ColumnFormatType } from './types';

/**
 * The type a Column is treated as. Every Format type is also a Detected type, so the
 * union is the Detected type's.
 */
export type EffectiveType = DetectedType;

/**
 * The Effektiver Typ: the Format type when one is set, otherwise the Detected type.
 *
 * @param formatType The column's Format type (`format.type`), if configured.
 * @param detectedType The analysis engine's Detected type, if known.
 * @returns The Effektiver Typ (`'string'` when neither is known).
 */
export function effectiveType(
    formatType: ColumnFormatType | undefined,
    detectedType: DetectedType | undefined,
): EffectiveType {
    return formatType ?? detectedType ?? 'string';
}

/** The effective feature set of one table, couplings included. */
export type TableCapabilities = Readonly<{
    /** Column-header row shown (`tableShowHeader`, missing ⇒ on). */
    header: boolean;
    /** Sorting by header click or column menu (`tableSorting`, missing ⇒ on). */
    sorting: boolean;
    /** Sorting by several columns at once (`tableSortingMulti`, missing ⇒ off). */
    multiSort: boolean;
    /** Spaltenfilter via the column menu (`tableFiltering`, missing ⇒ off). */
    columnFiltering: boolean;
    /** Table-wide quick filter (`tableQuickFilter`, missing ⇒ off). */
    quickFilter: boolean;
    /** Per-column header menu (`tableColumnMenu`, missing ⇒ on). */
    columnMenu: boolean;
    /** Hiding columns via the column menu (`tableHiding`, missing ⇒ on). */
    hiding: boolean;
    /** Paged rows (`tablePagination`, missing ⇒ on). */
    pagination: boolean;
    /** Row checkboxes (`tableRowSelection`, missing ⇒ off). */
    rowSelection: boolean;
}>;

/** The widget data key of one raw feature setting. */
export type CapabilitySetting =
    | 'tableShowHeader'
    | 'tableSorting'
    | 'tableSortingMulti'
    | 'tableFiltering'
    | 'tableQuickFilter'
    | 'tableColumnMenu'
    | 'tableHiding'
    | 'tablePagination'
    | 'tableRowSelection';

/** The raw feature settings as vis-2 stores them in the widget data (any key may be missing). */
export type CapabilitySettings = Readonly<Partial<Record<CapabilitySetting, unknown>>>;

/** Default-on setting: only an explicit `false` switches it off. */
const onUnlessFalse = (value: unknown): boolean => value !== false;

/** Default-off setting: only an explicit `true` switches it on. */
const offUnlessTrue = (value: unknown): boolean => value === true;

/**
 * Resolve the Tabellen-Fähigkeiten from raw widget data.
 *
 * @param data Raw widget data (`widget.data` or the `hidden` closure's argument).
 * @returns The effective feature set.
 * @remarks
 * Couplings: a hidden Header switches off every header-hosted capability (sorting,
 * multi-sort, column filtering, hiding, column menu); a switched-off column menu takes
 * column filtering and hiding with it (both live only in that menu — without it a stored
 * filter or hidden column would stay invisibly active). Multi-sort needs sorting. Quick
 * filter, pagination and row selection do not depend on the Header.
 */
export function tableCapabilities(data: CapabilitySettings | WidgetData): TableCapabilities {
    const header = onUnlessFalse(data.tableShowHeader);
    const columnMenu = header && onUnlessFalse(data.tableColumnMenu);
    const sorting = header && onUnlessFalse(data.tableSorting);
    return {
        header,
        sorting,
        multiSort: sorting && offUnlessTrue(data.tableSortingMulti),
        columnFiltering: columnMenu && offUnlessTrue(data.tableFiltering),
        quickFilter: offUnlessTrue(data.tableQuickFilter),
        columnMenu,
        hiding: columnMenu && onUnlessFalse(data.tableHiding),
        pagination: onUnlessFalse(data.tablePagination),
        rowSelection: offUnlessTrue(data.tableRowSelection),
    };
}

/**
 * Whether the table body renders only the rows in view: never while it pages, otherwise above
 * the threshold.
 *
 * @param table The Tabellen-Fähigkeiten.
 * @param rowCount The rows after filtering.
 * @param threshold `tableVirtualizeThreshold` (unset ⇒ 50, 0 ⇒ never).
 * @returns `true` when the rows are virtualized.
 */
export function virtualizesRows(table: TableCapabilities, rowCount: number, threshold?: number | null): boolean {
    const limit = threshold ?? TABLE_VIRTUALIZE_THRESHOLD_DEFAULT;
    return !table.pagination && limit > 0 && rowCount > limit;
}

/** What one Column allows its users. */
export type ColumnCapabilities = Readonly<{
    sortable: boolean;
    filterable: boolean;
    hideable: boolean;
}>;

/** The per-column overrides of a column configuration (`'auto'`/missing ⇒ type default). */
export type ColumnOverrides = Pick<ColumnConfigEntry, 'sortable' | 'filterable' | 'enableHiding'>;

/**
 * The type defaults of a Column's capabilities.
 *
 * @param type The column's Effektiver Typ.
 * @returns Whether a column of that type is sortable, filterable and hideable by default.
 * @remarks
 * Booleans have two values, sorting them adds nothing; images, arrays and objects have no
 * meaningful order or comparison. Every column is hideable; unknown types allow all.
 */
export function typeDefaults(type: EffectiveType): ColumnCapabilities {
    switch (type) {
        case 'boolean':
            return { sortable: false, filterable: true, hideable: true };
        case 'image':
        case 'array':
        case 'object':
            return { sortable: false, filterable: false, hideable: true };
        default:
            return { sortable: true, filterable: true, hideable: true };
    }
}

/** An explicit override wins over the type default; `'auto'` or missing does not. */
const overrideOr = (override: boolean | 'auto' | undefined, typeDefault: boolean): boolean =>
    typeof override === 'boolean' ? override : typeDefault;

/**
 * Resolve what one Column allows: the table capability ∧ (override ?? type default).
 *
 * @param table The Tabellen-Fähigkeiten.
 * @param type The column's Effektiver Typ.
 * @param overrides The column's configured overrides (none for unconfigured columns).
 * @returns The column's sortability, filterability and hideability — never more than the
 *   table allows, even with an explicit override `true`.
 */
export function columnCapabilities(
    table: TableCapabilities,
    type: EffectiveType,
    overrides: ColumnOverrides = {},
): ColumnCapabilities {
    const defaults = typeDefaults(type);
    return {
        sortable: table.sorting && overrideOr(overrides.sortable, defaults.sortable),
        filterable: table.columnFiltering && overrideOr(overrides.filterable, defaults.filterable),
        hideable: table.hiding && overrideOr(overrides.enableHiding, defaults.hideable),
    };
}
