/**
 * JSON Table collection renderer.
 *
 * @module widgets/JsonTableCollection
 * @remarks
 * Functional component that reads a JSON string from the OID state value through the
 * Spalten-Merge (`./columns`), and renders a TanStack Table v8 (headless)
 * backed by MUI Table components, drawn in the Tabellen-Chrome (`./chrome`).
 */

import {
    Alert,
    Box,
    Checkbox,
    InputAdornment,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    TextField,
    Tooltip,
    Typography,
    IconButton,
    useTheme,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    type ColumnDef,
    type SortingState,
    type Column,
    type Header,
    type Row,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useContext, useMemo, useRef, useState, useEffect, useLayoutEffect } from 'react';
import type { FC } from 'react';

import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import Generic from '../Generic';
import { JSON_TABLE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';

import { parseColumnConfig } from './utils/columnConfig';
import { TableCellRenderer } from './components/TableCellRenderer';
import { useViewState } from './useViewState';
import { canHideColumn, type ViewColumn } from './viewState';
import ColumnMenu from './components/ColumnMenu';
import { buildColumnDefs } from './utils/columnDefinitions';
import { columnCapabilities, tableCapabilities, virtualizesRows, type EffectiveType } from './capabilities';
import { buildTableChrome, type TableChrome } from './chrome';
import { depthWarningText, emptyState, readJsonTable } from './columns';
import { translate } from '../lib/translate';
import { quickFilterOptions } from './utils/quickFilter';

import type { JsonTableCollectionContextProps } from '../types';

// ── TanStack Table module augmentation ──────────────────────────────────────
// Extend ColumnMeta to include custom alignment property for table cells and the
// Column's Effektiver Typ (each Column carries its own Spaltenfilter as filterFn)

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData, TValue> {
        align?: 'left' | 'center' | 'right';
        width?: number;
        /** The Column's Effektiver Typ: the filter dialog's operators and input */
        columnType?: EffectiveType;
    }
}

// ── FlatRow type ────────────────────────────────────────────────────────────

type FlatRow = Record<string, unknown>;

// ── Body row ────────────────────────────────────────────────────────────────

/**
 * One body row, the same markup for the virtualized and the paged body.
 *
 * @param row The TanStack row.
 * @param rowIndex The row's index on the page (drives the even/odd background).
 * @param chrome The resolved Tabellen-Chrome.
 * @returns The row element.
 */
function renderBodyRow(row: Row<FlatRow>, rowIndex: number, chrome: TableChrome): React.JSX.Element {
    return (
        <TableRow
            key={row.id}
            data-row-index={rowIndex}
            sx={chrome.rowSx(rowIndex)}
        >
            {row.getVisibleCells().map(cell => (
                <TableCell
                    key={cell.id}
                    align={cell.column.columnDef.meta?.align || 'left'}
                    padding={cell.column.id === '__select__' ? 'checkbox' : 'normal'}
                    sx={chrome.cellSx}
                >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}

// ── TypographyMenuItem component for TablePagination ───────────────────────────

/**
 * Stable menu item component for TablePagination page size selector.
 * Extracted to module scope to avoid creating new function references on each render.
 */
const TypographyMenuItem: FC<{
    children?: React.ReactNode;
    value?: unknown;
    [key: string]: unknown;
}> = props => {
    const { children, value, ...rest } = props;
    return (
        <MenuItem
            {...rest}
            value={value as string | number}
        >
            <Typography
                variant="body2"
                component="span"
            >
                {children}
            </Typography>
        </MenuItem>
    );
};

// ── Main component ────────────────────────────────────────────────────────────

const JsonTableCollection: FC = () => {
    const context = useContext(CollectionContext) as JsonTableCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
        id: widgetId,
    } = context;

    const { data, oidValue } = useData('oid');
    const theme = useTheme();

    const oidType = oidObject?.type as string | undefined;
    const isValidType = isAllowedOidType(JSON_TABLE_TYPES, oidType);

    const columnConfig = useMemo(
        () => parseColumnConfig(widget.data.columnConfig as string),
        [widget.data.columnConfig],
    );

    // The Spalten-Merge: rows, Columns and depth warning — the same reading the column editor uses
    const {
        rows,
        columns: tableColumns,
        depthWarning,
    } = useMemo(
        () => readJsonTable(oidValue, columnConfig, widget.data.tableMaxDepth),
        [oidValue, columnConfig, widget.data.tableMaxDepth],
    );
    const emptyText = emptyState(tableColumns);

    // ── Tabellen-Chrome (frame, header bar, borders, row backgrounds, heights) ──

    const chrome = useMemo(() => buildTableChrome(widget.data, theme), [widget.data, theme]);

    // ── Grid rows ─────────────────────────────────────────────────────────────

    const gridRows = rows;

    // ── TanStack column definitions ───────────────────────────────────────────

    // Tabellen-Fähigkeiten, the one resolution of the feature settings (couplings included).
    // Keyed by content: vis-2 hands out new content-identical data refs (e.g. on an editor
    // move), and the column definitions must not rebuild for that.
    const resolvedCapabilities = tableCapabilities(widget.data);
    const capabilitiesKey = JSON.stringify(resolvedCapabilities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const capabilities = useMemo(() => resolvedCapabilities, [capabilitiesKey]);

    const columns = useMemo<ColumnDef<FlatRow>[]>(() => {
        return buildColumnDefs({
            columns: tableColumns,
            capabilities,
            renderCell: (value, column) => (
                <TableCellRenderer
                    value={value}
                    column={column}
                    valueSize={data.valueSize}
                />
            ),
            renderSelectionHeader: table => (
                <Checkbox
                    size="small"
                    indeterminate={table.getIsSomePageRowsSelected()}
                    checked={table.getIsAllPageRowsSelected()}
                    onChange={table.getToggleAllPageRowsSelectedHandler()}
                    aria-label="Select all rows"
                />
            ),
            renderSelectionCell: row => (
                <Checkbox
                    size="small"
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                    aria-label="Select row"
                />
            ),
        });
    }, [tableColumns, capabilities, data.valueSize]);

    // ── Date-aware global (quick) filter ────────────────────────────────────────
    // Built in utils/quickFilter.ts; date columns also match their formatted display
    // value via the formatter registry so filter and display can never drift.
    const quickFilter = useMemo(() => quickFilterOptions(tableColumns), [tableColumns]);

    // ── Ansichtszustand (sorting, filters, page, widths, hidden columns) ────────

    const isAutoSize = widget.data.tableAutoSize === true;

    // The visible Columns as the view judges their Spaltenfilter (Effektiver Typ, filterable),
    // keyed by content: data updates rebuild the Columns, but must not hand the view a new
    // configuration.
    const viewColumnsKey = useMemo(
        () =>
            JSON.stringify(
                Object.fromEntries(
                    tableColumns
                        .filter(column => column.config.visible)
                        .map(column => [
                            column.path,
                            {
                                type: column.type,
                                filterable: columnCapabilities(capabilities, column.type, column.config).filterable,
                            } satisfies ViewColumn,
                        ]),
                ),
            ),
        [tableColumns, capabilities],
    );
    const viewColumns = useMemo(() => JSON.parse(viewColumnsKey) as Record<string, ViewColumn>, [viewColumnsKey]);

    const view = useViewState({
        widgetId,
        capabilities,
        pageSize: Number(widget.data.tablePageSize) || 25,
        pageSizeOptions: widget.data.tablePageSizeOptions,
        autoSize: isAutoSize,
        columnConfig,
        columns: viewColumns,
    });
    const { sorting, columnFilters, globalFilter, pagination, columnVisibility } = view.state;
    const hasHiddenColumns = Object.keys(columnVisibility).some(k => columnVisibility[k] === false);
    const hideAllowed = canHideColumn(columnVisibility, viewColumns);

    // ── useReactTable ─────────────────────────────────────────────────────────

    const table = useReactTable<FlatRow>({
        data: gridRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableMultiSort: capabilities.multiSort,
        ...quickFilter,
        columnResizeMode: 'onChange',
        enableColumnResizing: !isAutoSize,
        defaultColumn: { minSize: 40, maxSize: 2000 },
        state: view.state,
        // The page survives data updates (TanStack would reset it on every new data array);
        // the view state resets it when sorting, filters or the page size change.
        autoResetPageIndex: false,
        onSortingChange: view.onSortingChange,
        onColumnFiltersChange: view.onColumnFiltersChange,
        onGlobalFilterChange: view.onGlobalFilterChange,
        onPaginationChange: view.onPaginationChange,
        onRowSelectionChange: view.onRowSelectionChange,
        onColumnSizingChange: view.onColumnSizingChange,
        onColumnVisibilityChange: view.onColumnVisibilityChange,
        enableRowSelection: capabilities.rowSelection,
        enableSorting: capabilities.sorting,
        enableColumnFilters: capabilities.columnFiltering,
        enableHiding: capabilities.hiding,
        enableGlobalFilter: capabilities.quickFilter,
    });

    // The rows to page through; the view clamps the page shown to them (before paint).
    const filteredRowCount = table.getFilteredRowModel().rows.length;
    const { setRowCount } = view;
    useLayoutEffect(() => setRowCount(filteredRowCount), [filteredRowCount, setRowCount]);

    // ── Column menu state ─────────────────────────────────────────────────────

    const tableContainerRef = useRef<HTMLDivElement>(null);
    const tableBodyRef = useRef<HTMLTableSectionElement>(null);

    const [headerWidths, setHeaderWidths] = useState<Record<string, number>>({});

    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const activeColumnRef = useRef<Column<FlatRow> | null>(null);

    // State for active column sort/filter - computed when menu opens
    const [activeColumnSorted, setActiveColumnSorted] = useState<SortingState[0] | undefined>(undefined);
    const [activeColumnFilter, setActiveColumnFilter] = useState<unknown>(undefined);

    const openColumnMenu = useCallback(
        (col: Column<FlatRow>, el: HTMLElement) => {
            activeColumnRef.current = col;
            // Compute sort/filter values when menu opens, not on every render
            const columnId = col.id;
            const sorted = sorting.find(s => s.id === columnId);
            const filterValue = columnFilters.find(f => f.id === columnId)?.value;
            setActiveColumnSorted(sorted);
            setActiveColumnFilter(filterValue);
            setMenuAnchor(el);
        },
        [sorting, columnFilters],
    );

    const closeColumnMenu = useCallback(() => {
        setMenuAnchor(null);
    }, []);

    // ── Auto-size column width measurement ───────────────────────────────────

    useEffect(() => {
        if (!isAutoSize) {
            return;
        }

        const bodyEl = tableBodyRef.current;
        if (!bodyEl) {
            return;
        }

        const observer = new ResizeObserver(() => {
            // In virtualized mode the first <tr> may be a padding row.
            // Therefore we select the first data row via the data-row-index attribute.
            const firstDataRow = bodyEl.querySelector('tr[data-row-index]');
            if (!firstDataRow) {
                return;
            }
            const cells = firstDataRow.querySelectorAll('td');
            const headerGroup = table.getHeaderGroups()[0];
            if (!headerGroup || cells.length !== headerGroup.headers.length) {
                return;
            }
            const widths: Record<string, number> = {};
            headerGroup.headers.forEach((header, idx) => {
                const cell = cells[idx];
                if (cell) {
                    widths[header.id] = cell.getBoundingClientRect().width;
                }
            });
            setHeaderWidths(widths);
        });

        observer.observe(bodyEl);
        return () => observer.disconnect();
    }, [isAutoSize, table]);

    // ── Header ────────────────────────────────────────────────────────────────

    // Header row visibility (default: visible). When hidden the entire TableHead is
    // skipped and the Tabellen-Fähigkeiten switch off every header-hosted capability.
    const showHeader = capabilities.header;

    const getHeaderCellWidth = useCallback(
        (header: Header<FlatRow, unknown>): number | 'auto' => {
            if (!isAutoSize) {
                return header.getSize();
            }
            return headerWidths[header.id] ?? 'auto';
        },
        [isAutoSize, headerWidths],
    );

    // ── Row virtualization ────────────────────────────────────────────────────

    const tableRows = table.getRowModel().rows;

    const rowVirtualizer = useVirtualizer({
        count: tableRows.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: () => chrome.rowHeight,
        // Higher overscan prevents flickering during fast scrolling
        // by rendering more rows outside the viewport
        overscan: 25,
        // Smooth scrolling behavior
        scrollPaddingStart: chrome.rowHeight,
    });

    const shouldVirtualize = virtualizesRows(capabilities, tableRows.length, widget.data.tableVirtualizeThreshold);
    const virtualItems = shouldVirtualize ? rowVirtualizer.getVirtualItems() : null;
    // FIX-P1-3: Use optional chaining for safe array access in virtualizer
    const firstItem = virtualItems?.[0];
    const lastItem = virtualItems?.[virtualItems.length - 1];
    const paddingTop = firstItem?.start ?? 0;
    const paddingBottom = lastItem ? rowVirtualizer.getTotalSize() - (lastItem.end ?? 0) : 0;

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
        >
            {emptyText === null ? (
                <Box sx={chrome.bodySx}>
                    {capabilities.quickFilter && (
                        <Box sx={{ p: 1, flexShrink: 0 }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                value={globalFilter}
                                onChange={e => view.onGlobalFilterChange(e.target.value)}
                                placeholder={Generic.t('json_table_search_placeholder')}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon fontSize="small" />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Box>
                    )}

                    {/* FIX-P2-4: Depth warning alert */}
                    {depthWarning && (
                        <Alert
                            severity="warning"
                            sx={{ m: 1 }}
                        >
                            <Typography variant="body2">{depthWarningText(depthWarning, translate)}</Typography>
                        </Alert>
                    )}

                    {/* Outer container with border and overflow:hidden to clip scrollbars at rounded corners */}
                    <Box sx={chrome.frameSx}>
                        {/* TanStack Table v8 best practice: Single table with sticky thead */}
                        <TableContainer
                            ref={tableContainerRef}
                            sx={chrome.scrollSx}
                        >
                            <Table
                                size={chrome.tableSize}
                                sx={chrome.tableSx}
                            >
                                {/* Sticky TableHead - follows TanStack Table v8 best practices.
                                     Skipped entirely when tableShowHeader is false, so no sticky
                                     bar or elevation shadow is rendered for an empty header. */}
                                {showHeader && (
                                    <TableHead sx={chrome.headerBarSx}>
                                        {table.getHeaderGroups().map(headerGroup => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map(header => {
                                                    const canSort = header.column.getCanSort();
                                                    const isSorted = header.column.getIsSorted();
                                                    const meta = header.column.columnDef.meta;
                                                    const isSelectCol = header.column.id === '__select__';
                                                    const isFixed = !isAutoSize;

                                                    return (
                                                        <TableCell
                                                            key={header.id}
                                                            component="th"
                                                            colSpan={header.colSpan}
                                                            align={meta?.align || 'left'}
                                                            padding={isSelectCol ? 'checkbox' : 'normal'}
                                                            sx={{
                                                                width: getHeaderCellWidth(header),
                                                                minWidth: isSelectCol ? 48 : 40,
                                                                position: 'relative',
                                                                ...chrome.headerCellSx,
                                                            }}
                                                        >
                                                            {isSelectCol ? (
                                                                flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext(),
                                                                )
                                                            ) : (
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent:
                                                                            meta?.align === 'right'
                                                                                ? 'flex-end'
                                                                                : meta?.align === 'center'
                                                                                  ? 'center'
                                                                                  : 'space-between',
                                                                        width: '100%',
                                                                    }}
                                                                >
                                                                    {canSort ? (
                                                                        <TableSortLabel
                                                                            active={isSorted !== false}
                                                                            direction={
                                                                                isSorted === 'desc' ? 'desc' : 'asc'
                                                                            }
                                                                            onClick={header.column.getToggleSortingHandler()}
                                                                        >
                                                                            <Typography
                                                                                variant="body2"
                                                                                component="span"
                                                                                fontWeight="medium"
                                                                                noWrap
                                                                                sx={chrome.headerTextSx}
                                                                            >
                                                                                {flexRender(
                                                                                    header.column.columnDef.header,
                                                                                    header.getContext(),
                                                                                )}
                                                                            </Typography>
                                                                        </TableSortLabel>
                                                                    ) : (
                                                                        <Typography
                                                                            variant="body2"
                                                                            component="span"
                                                                            fontWeight="medium"
                                                                            noWrap
                                                                            sx={chrome.headerTextSx}
                                                                        >
                                                                            {flexRender(
                                                                                header.column.columnDef.header,
                                                                                header.getContext(),
                                                                            )}
                                                                        </Typography>
                                                                    )}
                                                                    {capabilities.columnMenu &&
                                                                        (header.column.getCanSort() ||
                                                                            header.column.getCanFilter() ||
                                                                            (hideAllowed &&
                                                                                header.column.getCanHide()) ||
                                                                            hasHiddenColumns) && (
                                                                            <Tooltip
                                                                                title={Generic.t(
                                                                                    'json_table_column_menu',
                                                                                )}
                                                                            >
                                                                                <IconButton
                                                                                    size="small"
                                                                                    aria-label={Generic.t(
                                                                                        'json_table_column_menu',
                                                                                    )}
                                                                                    onClick={e => {
                                                                                        e.stopPropagation();
                                                                                        openColumnMenu(
                                                                                            header.column,
                                                                                            e.currentTarget,
                                                                                        );
                                                                                    }}
                                                                                    sx={{ ml: 0.5, opacity: 0.6 }}
                                                                                >
                                                                                    <MoreVertIcon fontSize="inherit" />
                                                                                </IconButton>
                                                                            </Tooltip>
                                                                        )}
                                                                </Box>
                                                            )}
                                                            {isFixed && header.column.getCanResize() && (
                                                                <Box
                                                                    className="resize-handle"
                                                                    onMouseDown={header.getResizeHandler()}
                                                                    onTouchStart={header.getResizeHandler()}
                                                                    onClick={e => e.stopPropagation()}
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        right: 0,
                                                                        top: 0,
                                                                        height: '100%',
                                                                        width: '4px',
                                                                        cursor: 'col-resize',
                                                                        userSelect: 'none',
                                                                        touchAction: 'none',
                                                                        zIndex: 1,
                                                                        opacity: header.column.getIsResizing() ? 1 : 0,
                                                                        bgcolor: header.column.getIsResizing()
                                                                            ? 'primary.main'
                                                                            : 'divider',
                                                                        transition: 'opacity 0.15s',
                                                                        '&:hover': {
                                                                            opacity: 1,
                                                                            bgcolor: 'primary.light',
                                                                        },
                                                                    }}
                                                                />
                                                            )}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHead>
                                )}
                                <TableBody ref={tableBodyRef}>
                                    {virtualItems ? (
                                        <>
                                            {paddingTop > 0 && (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={columns.length}
                                                        sx={{ height: paddingTop, p: 0, border: 'none' }}
                                                    />
                                                </TableRow>
                                            )}
                                            {virtualItems.map(virtualRow =>
                                                renderBodyRow(tableRows[virtualRow.index], virtualRow.index, chrome),
                                            )}
                                            {paddingBottom > 0 && (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={columns.length}
                                                        sx={{ height: paddingBottom, p: 0, border: 'none' }}
                                                    />
                                                </TableRow>
                                            )}
                                        </>
                                    ) : (
                                        tableRows.map((row, rowIndex) => renderBodyRow(row, rowIndex, chrome))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {capabilities.pagination && (
                        <TablePagination
                            component="div"
                            count={filteredRowCount}
                            page={pagination.pageIndex}
                            rowsPerPage={pagination.pageSize}
                            rowsPerPageOptions={view.pageSizeOptions}
                            onPageChange={(_e, newPage) =>
                                view.onPaginationChange(prev => ({ ...prev, pageIndex: newPage }))
                            }
                            onRowsPerPageChange={e =>
                                view.onPaginationChange(prev => ({ ...prev, pageSize: parseInt(e.target.value, 10) }))
                            }
                            labelRowsPerPage={
                                <Typography
                                    variant="body2"
                                    component="span"
                                >
                                    {Generic.t('json_table_rows_per_page')}
                                </Typography>
                            }
                            labelDisplayedRows={({ from, to, count }) => (
                                <Typography
                                    variant="body2"
                                    component="span"
                                >
                                    {`${from}\u2013${to} / ${count}`}
                                </Typography>
                            )}
                            slots={{
                                menuItem: TypographyMenuItem,
                            }}
                            slotProps={{
                                select: {
                                    renderValue: (value: unknown) => (
                                        <Typography
                                            variant="body2"
                                            component="span"
                                        >
                                            {String(value)}
                                        </Typography>
                                    ),
                                },
                            }}
                        />
                    )}

                    <ColumnMenu
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={closeColumnMenu}
                        activeColumn={activeColumnRef.current}
                        isSorted={activeColumnSorted !== undefined}
                        capabilities={capabilities}
                        activeColumnFilter={activeColumnFilter}
                        onSetSorting={view.onSortingChange}
                        onClearSorting={(columnId: string) =>
                            view.onSortingChange(old => old.filter(s => s.id !== columnId))
                        }
                        onShowAllColumns={view.showAllColumns}
                        hasHiddenColumns={hasHiddenColumns}
                        canHideColumn={hideAllowed}
                    />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        p: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {Generic.t(emptyText)}
                    </Typography>
                </Box>
            )}
        </CollectionBase>
    );
};

export default JsonTableCollection;
