/**
 * The TanStack adapter over the table's Columns.
 *
 * @module JsonTableCollectionWidget/utils/columnDefinitions
 * @remarks
 * Which Columns a table has, their order, settings, Effektiver Typ and Datums-Leser are the
 * Spalten-Merge's (`../columns`); this module only translates each visible Column into a
 * TanStack column definition.
 */

import type { ColumnDef, SortingFn, SortingFnOption, Row } from '@tanstack/react-table';
import { columnCapabilities, type TableCapabilities } from '../capabilities';
import { columnFilterFn, readNumber } from '../columnFilter';
import type { EffectiveColumn } from '../columns';

// ── Types ─────────────────────────────────────────────────────────────────────

/** Flat row type used by TanStack Table */
type FlatRow = Record<string, unknown>;

/** The width of a Column without a configured one. */
const DEFAULT_WIDTH = 150;

/** Options for buildColumnDefs function */
export interface BuildColumnDefsOptions {
    /** The table's Columns after the Spalten-Merge; hidden ones get no definition */
    columns: readonly EffectiveColumn[];
    /** The resolved Tabellen-Fähigkeiten (see `../capabilities`) */
    capabilities: TableCapabilities;
    /** Renders one cell of a Column (with `column.cellConfig`; the Column is a `CellColumn`) */
    renderCell: (value: unknown, column: EffectiveColumn) => React.ReactNode;
    /** Selection column header renderer */
    renderSelectionHeader?: (table: {
        getIsSomePageRowsSelected: () => boolean;
        getIsAllPageRowsSelected: () => boolean;
        getToggleAllPageRowsSelectedHandler: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
    /** Selection column cell renderer */
    renderSelectionCell?: (row: {
        getIsSelected: () => boolean;
        getToggleSelectedHandler: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
}

// ── Sorting by the Effektiver Typ ──────────────────────────────────────────────

/**
 * Sorts by a reading of the values — a date by the instant its Column's Datums-Leser reads,
 * a number by the one number reading; an unreadable value counts as 0.
 */
function sortingByReading(read: (value: unknown) => number | null): SortingFn<FlatRow> {
    const sortable = (value: unknown): number => read(value) ?? 0;
    return (rowA: Row<FlatRow>, rowB: Row<FlatRow>, columnId: string): number =>
        sortable(rowA.getValue(columnId)) - sortable(rowB.getValue(columnId));
}

/** Numerically, by the one number reading (numeric strings included). */
const numberSortingFn = sortingByReading(readNumber);

/**
 * The sort order of a Column by its Effektiver Typ: a date chronologically by its
 * Datums-Leser, a number numerically, a string in natural text order without case
 * (TanStack's `alphanumeric`: "Raum 2" before "Raum 10") — whatever its values look like;
 * every other type keeps TanStack's default.
 */
function sortingFnOf(column: EffectiveColumn): SortingFnOption<FlatRow> | undefined {
    switch (column.type) {
        case 'date':
            return sortingByReading(column.readDate);
        case 'number':
            return numberSortingFn;
        case 'string':
            return 'alphanumeric';
        default:
            return undefined;
    }
}

// ── Main: buildColumnDefs ──────────────────────────────────────────────────────

/**
 * Builds the TanStack column definitions of a table's Columns.
 *
 * @param options - The Columns, the Tabellen-Fähigkeiten and the renderers
 * @returns The selection column (with row selection) followed by one definition per visible Column
 */
export function buildColumnDefs(options: BuildColumnDefsOptions): ColumnDef<FlatRow>[] {
    const { columns, capabilities, renderCell, renderSelectionHeader, renderSelectionCell } = options;

    // ── Selection Column ──────────────────────────────────────────────────────

    const selectionCol: ColumnDef<FlatRow> | null =
        capabilities.rowSelection && renderSelectionHeader && renderSelectionCell
            ? {
                  id: '__select__',
                  size: 48,
                  enableResizing: false,
                  enableSorting: false,
                  enableColumnFilter: false,
                  enableHiding: false,
                  header: ({ table }) => renderSelectionHeader(table),
                  cell: ({ row }) => renderSelectionCell(row),
                  meta: { align: 'center', width: 48 },
              }
            : null;

    // ── Data Columns ───────────────────────────────────────────────────────────

    const dataCols = columns
        .filter(column => column.config.visible)
        .map((column): ColumnDef<FlatRow> => {
            const { path, config, type } = column;
            const allowed = columnCapabilities(capabilities, type, config);
            const sortingFn = sortingFnOf(column);
            return {
                id: path,
                size: config.width ?? DEFAULT_WIDTH,
                accessorFn: (row: FlatRow) => row?.[path] ?? null,
                header: column.header,
                enableSorting: allowed.sortable,
                enableColumnFilter: allowed.filterable,
                enableHiding: allowed.hideable,
                ...(sortingFn && { sortingFn }),
                // The Spaltenfilter compares by the Effektiver Typ, never by a guessed one
                filterFn: columnFilterFn(type, column.readDate),
                cell: ({ getValue }) => renderCell(getValue(), column),
                meta: {
                    align: column.cellConfig.align || 'left',
                    width: config.width,
                    columnType: type,
                },
            };
        });

    return selectionCol ? [selectionCol, ...dataCols] : dataCols;
}
