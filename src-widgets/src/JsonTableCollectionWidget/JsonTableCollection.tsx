/**
 * JSON Table collection renderer.
 *
 * @module widgets/JsonTableCollection
 * @remarks
 * Functional component that reads a JSON string from the OID state value,
 * analyzes it with `useJsonTableAnalysis`, and renders a TanStack Table v8 (headless)
 * backed by MUI Table components.
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
    type FilterFn,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useContext, useMemo, useRef, useState, useEffect } from 'react';
import type { FC } from 'react';

import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useJsonTableAnalysis } from '../hooks/useJsonTableAnalysis';
import useOidValue from '../hooks/useOidValue';
import Generic from '../Generic';

import { parseColumnConfig } from './utils/columnConfig';
import { TableCellRenderer } from './components/TableCellRenderer';
import { useTableSettings } from './hooks/useTableSettings';
import ColumnMenu from './components/ColumnMenu';
import { gradientColor } from '../lib/helper/gradientColor';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { buildColumnDefs } from './utils/columnDefinitions';
import { customFilterFns } from './utils/filterFunctions';

import type { JsonTableCollectionContextProps } from '../types';
import type { JsonTableAnalysisOptions } from '../hooks/useJsonTableAnalysis';

// ── TanStack Table module augmentation ──────────────────────────────────────
// Extend ColumnMeta to include custom alignment property for table cells
// Extend FilterFns to include custom 'advanced' filter function

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData, TValue> {
        align?: 'left' | 'center' | 'right';
        width?: number;
        /** Detected column type for filter dialog (string, number, date, boolean) */
        columnType?: string;
    }

    interface FilterFns {
        advanced: FilterFn<unknown>;
    }
}

// ── FlatRow type ────────────────────────────────────────────────────────────

type FlatRow = Record<string, unknown>;

// ── Density row height mapping ───────────────────────────────────────────────

const DENSITY_ROW_HEIGHT: Record<string, number> = { compact: 36, standard: 52, comfortable: 68 };
const DENSITY_HEADER_HEIGHT: Record<string, number> = { compact: 36, standard: 56, comfortable: 68 };

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

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');
    const theme = useTheme();

    const oidType = oidObject?.type as string | undefined;
    const isValidType = oidType === 'string' || oidType === 'mixed' || oidType === 'json';

    // Parse JSON from state value
    const jsonData = useMemo<unknown[]>(() => {
        if (oidValue === undefined || oidValue === null) {
            return [];
        }
        let raw: unknown;
        if (typeof oidValue === 'string') {
            try {
                raw = JSON.parse(oidValue);
            } catch {
                return [];
            }
        } else {
            raw = oidValue;
        }
        if (Array.isArray(raw)) {
            return raw;
        }
        if (typeof raw === 'object' && raw !== null) {
            return [raw];
        }
        return [];
    }, [oidValue]);

    const analysisOptions = useMemo<JsonTableAnalysisOptions>(
        () => ({ maxDepth: widget.data.tableMaxDepth || 10 }),
        [widget.data.tableMaxDepth],
    );

    const { columns: analysisColumns, rows, meta } = useJsonTableAnalysis(jsonData, analysisOptions);

    // FIX-P2-4: Add depth warning when JSON depth exceeds configured maxDepth
    const depthWarning = useMemo(() => {
        const configuredMax = widget.data.tableMaxDepth || 10;
        if (meta.maxDepth > configuredMax) {
            return {
                actual: meta.maxDepth,
                configured: configuredMax,
            };
        }
        return null;
    }, [meta.maxDepth, widget.data.tableMaxDepth]);

    const columnConfig = useMemo(
        () => parseColumnConfig(widget.data.columnConfig as string),
        [widget.data.columnConfig],
    );

    // ── Row height / header height ────────────────────────────────────────────

    const density = widget.data.tableDensity || 'standard';
    const effectiveRowHeight = Number(widget.data.tableRowHeight) || DENSITY_ROW_HEIGHT[density] || 52;
    const effectiveHeaderHeight = Number(widget.data.tableHeaderHeight) || DENSITY_HEADER_HEIGHT[density] || 56;

    // ── Grid rows ─────────────────────────────────────────────────────────────

    const gridRows = useMemo(() => rows.map((row, index) => ({ __id: index, ...row })), [rows]);

    // ── TanStack column definitions ───────────────────────────────────────────

    // Feature flags (must be defined before useMemo that references them)
    const canUserAccessColumnFiltering = widget.data.tableFiltering === true && widget.data.tableColumnMenu !== false;

    const columns = useMemo<ColumnDef<FlatRow>[]>(() => {
        return buildColumnDefs({
            columnConfig,
            analysisColumns,
            widgetData: {
                tableSorting: widget.data.tableSorting !== false,
                tableFiltering: canUserAccessColumnFiltering,
                tableRowSelection: widget.data.tableRowSelection === true,
                tableHiding: widget.data.tableHiding !== false,
            },
            renderConfiguredCell: (value, config) => (
                <TableCellRenderer
                    value={value}
                    config={config}
                />
            ),
            renderAutoDetectedCell: value => <TableCellRenderer value={value} />,
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
    }, [
        columnConfig,
        analysisColumns,
        widget.data.tableSorting,
        canUserAccessColumnFiltering,
        widget.data.tableRowSelection,
        widget.data.tableHiding,
    ]);

    // ── Table state via custom hook ─────────────────────────────────────────────

    const isAutoSize = widget.data.tableAutoSize === true;

    const {
        sorting,
        columnFilters,
        globalFilter,
        rowSelection,
        columnSizing,
        pagination,
        effectivePagination,
        columnVisibility,
        setSorting,
        setColumnFilters,
        setGlobalFilter,
        setRowSelection,
        setColumnSizing,
        setPagination,
        setColumnVisibility,
        pageSizeOptions,
        showAllColumns,
    } = useTableSettings({
        widgetId,
        columnConfig,
        tableAutoSize: isAutoSize,
        tableRowSelection: widget.data.tableRowSelection === true,
        tablePageSize: Number(widget.data.tablePageSize) || 25,
        tablePageSizeOptions: widget.data.tablePageSizeOptions,
        tablePagination: widget.data.tablePagination !== false,
        tableFiltering: canUserAccessColumnFiltering,
        tableSorting: widget.data.tableSorting !== false,
        tableQuickFilter: widget.data.tableQuickFilter === true,
        gridRowsLength: gridRows.length,
    });

    // ── useReactTable ─────────────────────────────────────────────────────────

    const table = useReactTable<FlatRow>({
        data: gridRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableMultiSort: widget.data.tableSortingMulti ?? false,
        globalFilterFn: 'includesString',
        filterFns: customFilterFns,
        columnResizeMode: 'onChange',
        enableColumnResizing: !isAutoSize,
        defaultColumn: { minSize: 40, maxSize: 2000, filterFn: 'advanced' },
        state: {
            sorting,
            columnFilters,
            globalFilter,
            pagination: effectivePagination,
            rowSelection,
            columnSizing,
            columnVisibility,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: widget.data.tablePagination !== false ? setPagination : undefined,
        onRowSelectionChange: setRowSelection,
        onColumnSizingChange: setColumnSizing,
        onColumnVisibilityChange: setColumnVisibility,
        enableRowSelection: widget.data.tableRowSelection === true,
        enableSorting: widget.data.tableSorting !== false,
        enableColumnFilters: canUserAccessColumnFiltering,
        enableGlobalFilter: widget.data.tableQuickFilter === true,
    });

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

    // ── sx memos ──────────────────────────────────────────────────────────────

    const tableSx = useMemo(() => {
        const sx: Record<string, unknown> = {
            tableLayout: isAutoSize ? 'auto' : 'fixed',
            width: '100%',
        };

        // Horizontal borders (row borders)
        if (widget.data.tableShowRowBorders === false) {
            sx['& .MuiTableCell-root'] = { borderBottom: 'none' };
        } else {
            const hBorderWidth = widget.data.horizontalCellBorderWidth ?? 1;
            const hBorderColorValue = extractColorFromValue(widget.data.horizontalCellBorderColor);
            sx['& .MuiTableCell-root'] = {
                ...(sx['& .MuiTableCell-root'] as Record<string, unknown>),
                borderBottom: `${hBorderWidth}px solid`,
                borderBottomColor: hBorderColorValue || 'divider',
            };
        }

        // Vertical borders (cell borders) - exclude first and last cell borders
        if (widget.data.tableShowCellBorders === true) {
            const vBorderWidth = widget.data.verticalCellBorderWidth ?? 1;
            const vBorderColorValue = extractColorFromValue(widget.data.verticalCellBorderColor);
            // Apply borderRight only to cells that are NOT the last in their row
            // This hides the outer vertical borders (first left and last right)
            sx['& .MuiTableCell-root:not(:last-child)'] = {
                borderRight: `${vBorderWidth}px solid`,
                borderRightColor: vBorderColorValue || 'divider',
            };
        }
        return sx;
    }, [
        widget.data.tableShowRowBorders,
        widget.data.tableShowCellBorders,
        widget.data.horizontalCellBorderWidth,
        widget.data.horizontalCellBorderColor,
        widget.data.verticalCellBorderWidth,
        widget.data.verticalCellBorderColor,
        isAutoSize,
    ]);

    const headerBgColor = widget.data.tableHeaderBgColor;
    const headerTextColor = widget.data.tableHeaderTextColor;
    const headerFontSize = widget.data.tableHeaderFontSize;

    const headerCellSx = useMemo(
        () => ({
            height: effectiveHeaderHeight,
            padding: 0,
            whiteSpace: 'nowrap' as const,
            ...(headerTextColor && { color: headerTextColor }),
            ...(headerFontSize && { fontSize: `${headerFontSize}px` }),
        }),
        [effectiveHeaderHeight, headerTextColor, headerFontSize],
    );

    // Typography sx for header text - ensures color and fontSize are applied correctly
    const headerTextSx = useMemo(
        () => ({
            ...(headerTextColor && { color: headerTextColor }),
            ...(headerFontSize && { fontSize: `${headerFontSize}px` }),
        }),
        [headerTextColor, headerFontSize],
    );

    const noCard = widget.data.noCard === true;

    // Header border styling
    const headerBorderWidth = widget.data.headerBorderWidth ?? 0;
    const headerBorderColorValue = extractColorFromValue(widget.data.headerBorderColor);

    // Header container styling - uses configurable elevation (default: 6)
    // backgroundColor fallback ensures header is not transparent
    const headerContainerSx = useMemo(() => {
        const headerElevation = widget.data.tableHeaderElevation ?? 6;

        const base: Record<string, unknown> = noCard
            ? { backgroundColor: 'transparent', boxShadow: 'none' }
            : {
                  backgroundColor: 'background.paper',
                  boxShadow: headerElevation > 0 ? theme.shadows[headerElevation] : 'none',
              };

        // Add header bottom border as pseudo-element for sticky positioning
        // Using ::after ensures the border stays visible when scrolling
        if (headerBorderWidth > 0) {
            base['&::after'] = {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: `${headerBorderWidth}px`,
                backgroundColor: headerBorderColorValue || theme.palette.divider,
                pointerEvents: 'none',
            };
        }

        const gradientBg = headerBgColor ? gradientColor(headerBgColor) : null;
        if (gradientBg) {
            return { ...base, background: gradientBg };
        }
        if (headerBgColor) {
            return { ...base, backgroundColor: headerBgColor };
        }
        return base;
    }, [
        noCard,
        headerBgColor,
        theme.shadows,
        theme.palette.divider,
        widget.data.tableHeaderElevation,
        headerBorderWidth,
        headerBorderColorValue,
    ]);

    // Outer container styling (border and overflow:hidden to clip scrollbars)
    const outerContainerSx = useMemo(() => {
        const base: Record<string, unknown> = {
            flex: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        };

        const borderWidth = widget.data.borderWidth;
        const borderStyle = widget.data.borderStyle || 'solid';
        const borderColor = extractColorFromValue(widget.data.borderColor);
        const borderRadius = widget.data.borderRadius;

        if (borderWidth && borderWidth > 0) {
            base.border = `${borderWidth}px ${borderStyle}`;
            base.borderColor = borderColor || 'divider';
        }
        if (borderRadius) {
            base.borderRadius = borderRadius;
        }

        return base;
    }, [widget.data.borderWidth, widget.data.borderStyle, widget.data.borderColor, widget.data.borderRadius]);

    // Inner table container styling (overflow:auto for scrollbars)
    const tableContainerSx = useMemo(
        () => ({
            flex: 1,
            overflow: 'auto',
        }),
        [],
    );

    const getHeaderCellWidth = useCallback(
        (header: Header<FlatRow, unknown>): number | 'auto' => {
            if (!isAutoSize) {
                return header.getSize();
            }
            return headerWidths[header.id] ?? 'auto';
        },
        [isAutoSize, headerWidths],
    );

    const cellBaseSx = useMemo(
        () => ({
            ...(widget.data.tableCellFontSize && { fontSize: `${widget.data.tableCellFontSize}px` }),
            overflow: 'hidden',
            height: effectiveRowHeight,
            maxHeight: effectiveRowHeight,
            padding: 0, // Padding moved to TableCellRenderer for proper background color coverage
            verticalAlign: 'middle',
        }),
        [widget.data.tableCellFontSize, effectiveRowHeight],
    );

    const evenRowColorValue = widget.data.evenRowColor || null;
    const oddRowColorValue = widget.data.oddRowColor || null;
    const evenRowGradient = evenRowColorValue ? gradientColor(evenRowColorValue) : null;
    const oddRowGradient = oddRowColorValue ? gradientColor(oddRowColorValue) : null;

    const getRowSx = useCallback(
        (rowIndex: number) => {
            const isEven = rowIndex % 2 === 0;
            const colorValue = isEven ? evenRowColorValue : oddRowColorValue;
            const gradient = isEven ? evenRowGradient : oddRowGradient;

            if (!colorValue) {
                return undefined;
            }

            if (gradient) {
                return { background: gradient };
            }

            return {
                backgroundColor: colorValue,
            };
        },
        [evenRowColorValue, oddRowColorValue, evenRowGradient, oddRowGradient],
    );

    // ── Row virtualization ────────────────────────────────────────────────────

    const tableRows = table.getRowModel().rows;

    const rowVirtualizer = useVirtualizer({
        count: tableRows.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: () => effectiveRowHeight,
        // Higher overscan prevents flickering during fast scrolling
        // by rendering more rows outside the viewport
        overscan: 25,
        // Smooth scrolling behavior
        scrollPaddingStart: effectiveRowHeight,
    });

    const virtualizeThreshold = widget.data.tableVirtualizeThreshold ?? 50;
    const shouldVirtualize = widget.data.tablePagination === false && tableRows.length > virtualizeThreshold;
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
            // oidValue={oidValue}
            oidValue=""
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            {isValidType && columns.length > 0 ? (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        p: Number(widget.data.jsonTablePadding) || 0,
                    }}
                >
                    {widget.data.tableQuickFilter === true && (
                        <Box sx={{ p: 1, flexShrink: 0 }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                value={globalFilter}
                                onChange={e => setGlobalFilter(e.target.value)}
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
                            <Typography variant="body2">
                                {Generic.t('json_table_depth_warning')
                                    .replace('{{actual}}', String(depthWarning.actual))
                                    .replace('{{configured}}', String(depthWarning.configured))}
                            </Typography>
                        </Alert>
                    )}

                    {/* Outer container with border and overflow:hidden to clip scrollbars at rounded corners */}
                    <Box sx={outerContainerSx}>
                        {/* TanStack Table v8 best practice: Single table with sticky thead */}
                        <TableContainer
                            ref={tableContainerRef}
                            sx={tableContainerSx}
                        >
                            <Table
                                size={density === 'compact' ? 'small' : 'medium'}
                                sx={tableSx}
                            >
                                {/* Sticky TableHead - follows TanStack Table v8 best practices */}
                                <TableHead
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 2,
                                        ...headerContainerSx,
                                        '& .resize-handle': { opacity: 0 },
                                        '&:hover .resize-handle': { opacity: 1 },
                                    }}
                                >
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
                                                            ...headerCellSx,
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
                                                                        direction={isSorted === 'desc' ? 'desc' : 'asc'}
                                                                        onClick={header.column.getToggleSortingHandler()}
                                                                    >
                                                                        <Typography
                                                                            variant="body2"
                                                                            component="span"
                                                                            fontWeight="medium"
                                                                            noWrap
                                                                            sx={headerTextSx}
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
                                                                        sx={headerTextSx}
                                                                    >
                                                                        {flexRender(
                                                                            header.column.columnDef.header,
                                                                            header.getContext(),
                                                                        )}
                                                                    </Typography>
                                                                )}
                                                                {widget.data.tableColumnMenu !== false &&
                                                                    (header.column.getCanSort() ||
                                                                        (canUserAccessColumnFiltering &&
                                                                            header.column.getCanFilter()) ||
                                                                        header.column.getCanHide()) && (
                                                                        <Tooltip
                                                                            title={Generic.t('json_table_column_menu')}
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
                                            {virtualItems.map(virtualRow => {
                                                const row = tableRows[virtualRow.index];
                                                const rowIndex = virtualRow.index;
                                                return (
                                                    <TableRow
                                                        key={row.id}
                                                        data-row-index={rowIndex}
                                                        sx={{
                                                            height: effectiveRowHeight,
                                                            ...getRowSx(rowIndex),
                                                        }}
                                                    >
                                                        {row.getVisibleCells().map(cell => {
                                                            const isSelectCell = cell.column.id === '__select__';
                                                            return (
                                                                <TableCell
                                                                    key={cell.id}
                                                                    align={cell.column.columnDef.meta?.align || 'left'}
                                                                    padding={isSelectCell ? 'checkbox' : 'normal'}
                                                                    sx={{
                                                                        ...cellBaseSx,
                                                                    }}
                                                                >
                                                                    {flexRender(
                                                                        cell.column.columnDef.cell,
                                                                        cell.getContext(),
                                                                    )}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
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
                                        tableRows.map((row, rowIndex) => (
                                            <TableRow
                                                key={row.id}
                                                data-row-index={rowIndex}
                                                sx={{
                                                    height: effectiveRowHeight,
                                                    ...getRowSx(rowIndex),
                                                }}
                                            >
                                                {row.getVisibleCells().map(cell => {
                                                    const isSelectCell = cell.column.id === '__select__';
                                                    return (
                                                        <TableCell
                                                            key={cell.id}
                                                            align={cell.column.columnDef.meta?.align || 'left'}
                                                            padding={isSelectCell ? 'checkbox' : 'normal'}
                                                            sx={{
                                                                ...cellBaseSx,
                                                            }}
                                                        >
                                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {widget.data.tablePagination !== false && (
                        <TablePagination
                            component="div"
                            count={table.getFilteredRowModel().rows.length}
                            page={pagination.pageIndex}
                            rowsPerPage={pagination.pageSize}
                            rowsPerPageOptions={pageSizeOptions}
                            onPageChange={(_e, newPage) => setPagination(prev => ({ ...prev, pageIndex: newPage }))}
                            onRowsPerPageChange={e =>
                                setPagination({ pageIndex: 0, pageSize: parseInt(e.target.value, 10) })
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
                        tableFiltering={canUserAccessColumnFiltering}
                        activeColumnFilter={activeColumnFilter}
                        onSetSorting={setSorting}
                        onClearSorting={(columnId: string) => setSorting(old => old.filter(s => s.id !== columnId))}
                        onShowAllColumns={showAllColumns}
                        hasHiddenColumns={Object.keys(columnVisibility).some(k => columnVisibility[k] === false)}
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
                        {oidType === undefined
                            ? Generic.t('json_table_no_oid')
                            : !isValidType
                              ? Generic.t('json_table_invalid_type')
                              : columnConfig.length > 0 && columns.length === 0
                                ? Generic.t('json_table_all_columns_hidden')
                                : Generic.t('json_table_no_data')}
                    </Typography>
                </Box>
            )}
        </CollectionBase>
    );
};

export default JsonTableCollection;
