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
    Box,
    Checkbox,
    InputAdornment,
    Menu,
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
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ClearIcon from '@mui/icons-material/Clear';
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
    type ColumnSizingState,
    type SortingState,
    type ColumnFiltersState,
    type PaginationState,
    type RowSelectionState,
    type SortingFn,
    type Row,
    type Column,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useContext, useMemo, useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useJsonTableAnalysis } from '../hooks/useJsonTableAnalysis';
import useOidValue from '../hooks/useOidValue';
import Generic from '../Generic';

import { parseColumnConfig, type ColumnConfigEntry } from './types';
import {
    formatBooleanValue,
    formatDateValue,
    formatNumberValue,
    formatStringValue,
    normalizeToIsoDate,
} from './utils/formatters';
import { evaluateLogic } from './utils/jsonLogicEngine';

import type { DateFormatId } from '../hooks/useJsonTableAnalysis/types';
import { gradientColor } from '../lib/helper/gradientColor';

import type { JsonTableCollectionContextProps } from '../types';
import type { JsonTableAnalysisOptions } from '../hooks/useJsonTableAnalysis';

// ── TanStack Table module augmentation ──────────────────────────────────────

declare module '@tanstack/react-table' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData, TValue> {
        align?: 'left' | 'center' | 'right';
        width?: number;
        getCellSx?: (rawValue: unknown) => Record<string, unknown>;
    }
}

// ── FlatRow type ────────────────────────────────────────────────────────────

type FlatRow = Record<string, unknown>;

// ── Density row height mapping ───────────────────────────────────────────────

const DENSITY_ROW_HEIGHT: Record<string, number> = { compact: 36, standard: 52, comfortable: 68 };
const DENSITY_HEADER_HEIGHT: Record<string, number> = { compact: 36, standard: 56, comfortable: 68 };

// ── Helpers ──────────────────────────────────────────────────────────────────

function parsePageSizeOptions(raw: string | undefined): number[] {
    const defaults = [10, 25, 50, 100];
    if (!raw) {
        return defaults;
    }
    const result = raw
        .split(',')
        .map(s => parseInt(s.trim(), 10))
        .filter(n => !isNaN(n) && n > 0);
    return result.length > 0 ? [...new Set(result)].sort((a, b) => a - b) : defaults;
}

function toSortableTime(value: unknown, inputFormat?: DateFormatId): number {
    if (value === null || value === undefined) {
        return 0;
    }
    if (typeof value === 'number') {
        return value >= 1e12 ? value : value * 1000;
    }
    if (typeof value === 'string') {
        const iso = normalizeToIsoDate(value, inputFormat);
        if (!iso) {
            return 0;
        }
        return new Date(iso).getTime();
    }
    return 0;
}

// ── Cell content builder return type ────────────────────────────────────────

interface CellContent {
    displayValue: string;
    textSx: Record<string, unknown>;
    bgSx: Record<string, unknown>;
}

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

    const { columns: analysisColumns, rows } = useJsonTableAnalysis(jsonData, analysisOptions);

    const columnConfig = useMemo(
        () => parseColumnConfig(widget.data.columnConfig as string),
        [widget.data.columnConfig],
    );

    // ── Row height / header height ────────────────────────────────────────────

    const density = widget.data.tableDensity || 'standard';
    const effectiveRowHeight = Number(widget.data.tableRowHeight) || DENSITY_ROW_HEIGHT[density] || 52;
    const effectiveHeaderHeight = Number(widget.data.tableHeaderHeight) || DENSITY_HEADER_HEIGHT[density] || 56;

    // ── Cell content builder ──────────────────────────────────────────────────

    const buildCellContent = useCallback((rawValue: unknown, cfg: ColumnConfigEntry): CellContent => {
        let displayValue =
            rawValue != null
                ? typeof rawValue === 'object'
                    ? JSON.stringify(rawValue)
                    : String(rawValue as string | number | boolean | bigint)
                : '';

        if (cfg.format) {
            switch (cfg.format.type) {
                case 'number':
                    if (typeof rawValue === 'number' || (typeof rawValue === 'string' && !isNaN(Number(rawValue)))) {
                        displayValue = formatNumberValue(Number(rawValue), {
                            decimals: cfg.format.numberDecimals,
                            prefix: cfg.format.numberPrefix,
                            suffix: cfg.format.numberSuffix,
                            thousands: cfg.format.numberThousandsSeparator,
                        });
                    }
                    break;
                case 'date':
                    displayValue = formatDateValue(rawValue, cfg.format.dateFormat, cfg.format.dateInputFormat);
                    break;
                case 'boolean':
                    displayValue = formatBooleanValue(rawValue, cfg.format.booleanTrue, cfg.format.booleanFalse);
                    break;
                case 'string':
                    displayValue = formatStringValue(displayValue, cfg.format);
                    break;
            }
        }

        const stopAfterFirst = !cfg.cellStyleMode || cfg.cellStyleMode === 'first-match';
        const evalValue =
            cfg.format?.type === 'date' ? normalizeToIsoDate(rawValue, cfg.format.dateInputFormat) : rawValue;
        const bgSx: Record<string, unknown> = {};
        const textSx: Record<string, unknown> = {};

        if (cfg.cellStyle && cfg.cellStyle.length > 0) {
            for (const rule of cfg.cellStyle) {
                if (rule.logic && evaluateLogic(rule.logic, evalValue)) {
                    if (rule.backgroundColor && !('background' in bgSx) && !('backgroundColor' in bgSx)) {
                        const bgGradient = gradientColor(rule.backgroundColor);
                        if (bgGradient) {
                            bgSx.background = bgGradient;
                        } else {
                            bgSx.backgroundColor = rule.backgroundColor;
                        }
                    }
                    if (rule.textColor && !('color' in textSx) && !('background' in textSx)) {
                        const textGradient = gradientColor(rule.textColor);
                        if (textGradient) {
                            textSx.background = textGradient;
                            textSx.backgroundClip = 'text';
                            textSx.WebkitBackgroundClip = 'text';
                            textSx.color = 'transparent';
                        } else {
                            textSx.color = rule.textColor;
                        }
                    }
                    if (rule.fontWeight && !textSx.fontWeight) {
                        textSx.fontWeight = rule.fontWeight;
                    }
                    if (rule.fontStyle && !textSx.fontStyle) {
                        textSx.fontStyle = rule.fontStyle;
                    }
                    if (stopAfterFirst) {
                        break;
                    }
                }
            }
        }

        // Apply static string format visual styles as fallback (conditional rules take priority)
        if (cfg.format?.type === 'string') {
            if (cfg.format.stringFontWeight === 'bold' && !textSx.fontWeight) {
                textSx.fontWeight = 'bold';
            }
            if (cfg.format.stringFontStyle === 'italic' && !textSx.fontStyle) {
                textSx.fontStyle = 'italic';
            }
            if (cfg.format.stringFontSize && !textSx.fontSize) {
                textSx.fontSize = `${cfg.format.stringFontSize}px`;
            }
            if (cfg.format.stringTextColor && !('color' in textSx) && !('background' in textSx)) {
                textSx.color = cfg.format.stringTextColor;
            }
        }

        return { displayValue, textSx, bgSx };
    }, []);

    // ── Grid rows ─────────────────────────────────────────────────────────────

    const gridRows = useMemo(() => rows.map((row, index) => ({ __id: index, ...row })), [rows]);

    // ── TanStack column definitions ───────────────────────────────────────────

    const columns = useMemo<ColumnDef<FlatRow>[]>(() => {
        const analysisDateFormats = new Map<string, DateFormatId | undefined>(
            analysisColumns.map(c => [c.path, c.dateFormat]),
        );

        const selectionCol: ColumnDef<FlatRow> | null =
            widget.data.tableRowSelection === true
                ? {
                      id: '__select__',
                      size: 48,
                      enableResizing: false,
                      enableSorting: false,
                      enableColumnFilter: false,
                      header: ({ table }) => (
                          <Checkbox
                              size="small"
                              indeterminate={table.getIsSomePageRowsSelected()}
                              checked={table.getIsAllPageRowsSelected()}
                              onChange={table.getToggleAllPageRowsSelectedHandler()}
                              aria-label="Select all rows"
                          />
                      ),
                      cell: ({ row }) => (
                          <Checkbox
                              size="small"
                              checked={row.getIsSelected()}
                              onChange={row.getToggleSelectedHandler()}
                              aria-label="Select row"
                          />
                      ),
                      meta: { align: 'center', width: 48 },
                  }
                : null;

        let dataCols: ColumnDef<FlatRow>[];

        if (columnConfig.length > 0) {
            dataCols = columnConfig
                .filter(cfg => cfg.visible)
                .map(cfg => {
                    const inputFmt = cfg.format?.dateInputFormat ?? analysisDateFormats.get(cfg.path);
                    const isDate = cfg.format?.type === 'date';

                    const customDateSortingFn: SortingFn<FlatRow> = (
                        rowA: Row<FlatRow>,
                        rowB: Row<FlatRow>,
                        columnId: string,
                    ) =>
                        toSortableTime(rowA.getValue(columnId), inputFmt) -
                        toSortableTime(rowB.getValue(columnId), inputFmt);

                    const col: ColumnDef<FlatRow> = {
                        id: cfg.path,
                        size: cfg.width ?? 150,
                        accessorFn: (row: FlatRow) => row[cfg.path],
                        header: cfg.headerName || cfg.path,
                        enableSorting: cfg.sortable ?? widget.data.tableSorting !== false,
                        enableColumnFilter: cfg.filterable ?? widget.data.tableFiltering === true,
                        ...(isDate && { sortingFn: customDateSortingFn }),
                        cell: ({ getValue }) => {
                            const rawValue = getValue();
                            const { displayValue, textSx } = buildCellContent(rawValue, cfg);
                            return (
                                <Typography
                                    variant="body2"
                                    component="span"
                                    noWrap
                                    title={displayValue}
                                    sx={{ width: '100%', display: 'block', lineHeight: 'inherit', ...textSx }}
                                >
                                    {displayValue}
                                </Typography>
                            );
                        },
                        meta: {
                            align: cfg.align || 'left',
                            width: cfg.width,
                            getCellSx: (rawValue: unknown) => {
                                const { bgSx } = buildCellContent(rawValue, cfg);
                                return bgSx;
                            },
                        },
                    };
                    return col;
                });
        } else {
            dataCols = analysisColumns.map(col => {
                const isDate = col.type === 'date' && col.dateFormat;
                const fmt = col.dateFormat;

                const customDateSortingFn: SortingFn<FlatRow> = (
                    rowA: Row<FlatRow>,
                    rowB: Row<FlatRow>,
                    columnId: string,
                ) => toSortableTime(rowA.getValue(columnId), fmt) - toSortableTime(rowB.getValue(columnId), fmt);

                const colDef: ColumnDef<FlatRow> = {
                    id: col.path,
                    size: 150,
                    accessorFn: (row: FlatRow) => row[col.path],
                    header: col.path.split('.').pop() || col.path,
                    enableSorting: widget.data.tableSorting !== false,
                    enableColumnFilter: widget.data.tableFiltering === true,
                    ...(isDate && { sortingFn: customDateSortingFn }),
                    cell: ({ getValue }) => {
                        const rawValue = getValue();
                        const displayValue =
                            rawValue != null
                                ? typeof rawValue === 'object'
                                    ? JSON.stringify(rawValue)
                                    : String(rawValue as string | number | boolean | bigint)
                                : '';
                        return (
                            <Typography
                                variant="body2"
                                component="span"
                                noWrap
                                title={displayValue}
                                sx={{ width: '100%', display: 'block', lineHeight: 'inherit' }}
                            >
                                {displayValue}
                            </Typography>
                        );
                    },
                    meta: { align: 'left' },
                };
                return colDef;
            });
        }

        return selectionCol ? [selectionCol, ...dataCols] : dataCols;
    }, [
        columnConfig,
        analysisColumns,
        widget.data.tableSorting,
        widget.data.tableFiltering,
        widget.data.tableRowSelection,
        buildCellContent,
    ]);

    // ── Table state ───────────────────────────────────────────────────────────

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [columnSizing, setColumnSizing] = useState<ColumnSizingState>(() => {
        if (widget.data.tableAutoSize !== false) {
            return {};
        }
        const storageKey = `jtc_col_sizes_${widgetId}`;
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                return JSON.parse(stored) as ColumnSizingState;
            }
        } catch {
            // ignore corrupt data
        }
        const init: ColumnSizingState = {};
        columnConfig.forEach(cfg => {
            if (cfg.width) {
                init[cfg.path] = cfg.width;
            }
        });
        if (widget.data.tableRowSelection === true) {
            init.__select__ = 48;
        }
        return init;
    });

    useEffect(() => {
        if (widget.data.tableAutoSize !== false) {
            return;
        }
        localStorage.setItem(`jtc_col_sizes_${widgetId}`, JSON.stringify(columnSizing));
    }, [columnSizing, widgetId, widget.data.tableAutoSize]);

    const configuredPageSize = useMemo(() => Number(widget.data.tablePageSize) || 25, [widget.data.tablePageSize]);
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: configuredPageSize });

    useEffect(() => {
        setPagination(prev =>
            prev.pageSize === configuredPageSize ? prev : { pageIndex: 0, pageSize: configuredPageSize },
        );
    }, [configuredPageSize]);

    const effectivePagination = useMemo<PaginationState>(
        () =>
            widget.data.tablePagination === false
                ? { pageIndex: 0, pageSize: Math.max(gridRows.length, 1) }
                : pagination,
        [widget.data.tablePagination, gridRows.length, pagination],
    );

    const pageSizeOptions = useMemo(
        () => parsePageSizeOptions(widget.data.tablePageSizeOptions as string),
        [widget.data.tablePageSizeOptions],
    );

    // ── useReactTable ─────────────────────────────────────────────────────────

    const table = useReactTable<FlatRow>({
        data: gridRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableMultiSort: false,
        globalFilterFn: 'includesString',
        columnResizeMode: 'onChange',
        enableColumnResizing: widget.data.tableAutoSize === false,
        defaultColumn: { minSize: 40, maxSize: 2000 },
        state: {
            sorting,
            columnFilters,
            globalFilter,
            pagination: effectivePagination,
            rowSelection,
            columnSizing,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: widget.data.tablePagination !== false ? setPagination : undefined,
        onRowSelectionChange: setRowSelection,
        onColumnSizingChange: setColumnSizing,
        enableRowSelection: widget.data.tableRowSelection === true,
        enableSorting: widget.data.tableSorting !== false,
        enableColumnFilters: widget.data.tableFiltering === true,
        enableGlobalFilter: widget.data.tableQuickFilter === true,
    });

    // ── Column menu state ─────────────────────────────────────────────────────

    const tableContainerRef = useRef<HTMLDivElement>(null);

    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const activeColumnRef = useRef<Column<FlatRow> | null>(null);

    const openColumnMenu = useCallback((col: Column<FlatRow>, el: HTMLElement) => {
        activeColumnRef.current = col;
        setMenuAnchor(el);
    }, []);

    const closeColumnMenu = useCallback(() => {
        setMenuAnchor(null);
    }, []);

    // ── sx memos ──────────────────────────────────────────────────────────────

    const tableSx = useMemo(() => {
        const sx: Record<string, unknown> = {
            tableLayout: widget.data.tableAutoSize === false ? 'fixed' : 'auto',
            width: '100%',
        };
        if (widget.data.tableShowRowBorders === false) {
            sx['& .MuiTableCell-root'] = { borderBottom: 'none' };
        }
        if (widget.data.tableShowCellBorders === true) {
            sx['& .MuiTableCell-root'] = {
                ...(sx['& .MuiTableCell-root'] as Record<string, unknown>),
                borderRight: '1px solid',
                borderRightColor: 'divider',
            };
        }
        return sx;
    }, [widget.data.tableShowRowBorders, widget.data.tableShowCellBorders, widget.data.tableAutoSize]);

    const headerBgColor = widget.data.tableHeaderBgColor;
    const headerTextColor = widget.data.tableHeaderTextColor;
    const headerFontSize = widget.data.tableHeaderFontSize;

    const headerCellSx = useMemo(() => {
        const isGradientBg = headerBgColor ? gradientColor(headerBgColor) : null;
        return {
            height: effectiveHeaderHeight,
            whiteSpace: 'nowrap' as const,
            // Fallback background for sticky header to prevent content showing through
            ...(!isGradientBg && !headerBgColor && { backgroundColor: 'background.paper' }),
            ...(isGradientBg && { background: isGradientBg }),
            ...(!isGradientBg && headerBgColor && { backgroundColor: headerBgColor }),
            ...(headerTextColor && { color: headerTextColor }),
            ...(headerFontSize && { fontSize: `${headerFontSize}px` }),
        };
    }, [effectiveHeaderHeight, headerBgColor, headerTextColor, headerFontSize]);

    const cellBaseSx = useMemo(
        () => ({
            ...(widget.data.tableCellFontSize && { fontSize: `${widget.data.tableCellFontSize}px` }),
            overflow: 'hidden',
            height: effectiveRowHeight,
            maxHeight: effectiveRowHeight,
            padding: '0 8px',
        }),
        [widget.data.tableCellFontSize, effectiveRowHeight],
    );

    const stripedColor = widget.data.tableStripedColor;
    const isGradientStriped = stripedColor ? gradientColor(stripedColor) : null;

    const getRowSx = useCallback(
        (rowIndex: number) => {
            if (!stripedColor || rowIndex % 2 === 0) {
                return undefined;
            }
            return {
                background: isGradientStriped || stripedColor,
                ...(isGradientStriped ? {} : { backgroundColor: stripedColor }),
            };
        },
        [stripedColor, isGradientStriped],
    );

    // ── Active column sort/filter state for menu ──────────────────────────────

    const activeColumnSorted = activeColumnRef.current
        ? sorting.find(s => s.id === activeColumnRef.current?.id)
        : undefined;

    const activeColumnFilter = activeColumnRef.current
        ? (columnFilters.find(f => f.id === activeColumnRef.current?.id)?.value as string | undefined)
        : undefined;

    // ── Row virtualization ────────────────────────────────────────────────────

    const tableRows = table.getRowModel().rows;

    const rowVirtualizer = useVirtualizer({
        count: tableRows.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: () => effectiveRowHeight,
        overscan: 10,
    });

    const shouldVirtualize = widget.data.tablePagination === false && tableRows.length > 50;
    const virtualItems = shouldVirtualize ? rowVirtualizer.getVirtualItems() : null;
    const paddingTop = virtualItems && virtualItems.length > 0 ? virtualItems[0].start : 0;
    const paddingBottom =
        virtualItems && virtualItems.length > 0
            ? rowVirtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1].end ?? 0)
            : 0;

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
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

                    <TableContainer
                        ref={tableContainerRef}
                        sx={{ flex: 1, overflow: 'auto' }}
                    >
                        <Table
                            size={density === 'compact' ? 'small' : 'medium'}
                            sx={tableSx}
                            stickyHeader
                        >
                            <TableHead>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <TableRow
                                        key={headerGroup.id}
                                        sx={{
                                            height: effectiveHeaderHeight,
                                            '&:hover .resize-handle': { opacity: 1 },
                                        }}
                                    >
                                        {headerGroup.headers.map(header => {
                                            const canSort = header.column.getCanSort();
                                            const isSorted = header.column.getIsSorted();
                                            const meta = header.column.columnDef.meta;
                                            const isSelectCol = header.column.id === '__select__';
                                            const isFixed = widget.data.tableAutoSize === false;

                                            return (
                                                <TableCell
                                                    key={header.id}
                                                    align={meta?.align || 'left'}
                                                    padding={isSelectCol ? 'checkbox' : 'normal'}
                                                    sx={{
                                                        ...headerCellSx,
                                                        ...(isFixed && { width: header.column.getSize() }),
                                                        minWidth: isSelectCol ? 48 : 40,
                                                        userSelect: 'none',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Box sx={{ position: 'relative', height: '100%' }}>
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
                                                                    >
                                                                        {flexRender(
                                                                            header.column.columnDef.header,
                                                                            header.getContext(),
                                                                        )}
                                                                    </Typography>
                                                                )}
                                                                {widget.data.tableColumnMenu !== false && (
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
                                                    </Box>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                                {widget.data.tableFiltering === true && (
                                    <TableRow>
                                        {table.getHeaderGroups()[0]?.headers.map(header => {
                                            if (header.column.id === '__select__') {
                                                return (
                                                    <TableCell
                                                        key={header.id}
                                                        padding="checkbox"
                                                        sx={{ py: 0.5, px: 0.5 }}
                                                    />
                                                );
                                            }
                                            if (!header.column.getCanFilter()) {
                                                return (
                                                    <TableCell
                                                        key={header.id}
                                                        sx={{ py: 0.5, px: 0.5 }}
                                                    />
                                                );
                                            }
                                            const filterVal = (header.column.getFilterValue() ?? '') as string;
                                            return (
                                                <TableCell
                                                    key={header.id}
                                                    sx={{ py: 0.5, px: 0.5, verticalAlign: 'bottom' }}
                                                >
                                                    <TextField
                                                        size="small"
                                                        variant="standard"
                                                        fullWidth
                                                        value={filterVal}
                                                        onChange={e =>
                                                            header.column.setFilterValue(e.target.value || undefined)
                                                        }
                                                        placeholder={Generic.t('json_table_filter_placeholder')}
                                                        slotProps={{
                                                            input: {
                                                                endAdornment: filterVal ? (
                                                                    <InputAdornment position="end">
                                                                        <Tooltip
                                                                            title={Generic.t('json_table_filter_clear')}
                                                                        >
                                                                            <IconButton
                                                                                size="small"
                                                                                onClick={() =>
                                                                                    header.column.setFilterValue(
                                                                                        undefined,
                                                                                    )
                                                                                }
                                                                                aria-label={Generic.t(
                                                                                    'json_table_filter_clear',
                                                                                )}
                                                                            >
                                                                                <ClearIcon fontSize="inherit" />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    </InputAdornment>
                                                                ) : undefined,
                                                            },
                                                        }}
                                                    />
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                )}
                            </TableHead>

                            <TableBody>
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
                                                    sx={{
                                                        height: effectiveRowHeight,
                                                        ...getRowSx(rowIndex),
                                                    }}
                                                >
                                                    {row.getVisibleCells().map(cell => {
                                                        const isSelectCell = cell.column.id === '__select__';
                                                        const cellBgSx =
                                                            !isSelectCell && cell.column.columnDef.meta?.getCellSx
                                                                ? cell.column.columnDef.meta.getCellSx(cell.getValue())
                                                                : {};
                                                        return (
                                                            <TableCell
                                                                key={cell.id}
                                                                align={cell.column.columnDef.meta?.align || 'left'}
                                                                padding={isSelectCell ? 'checkbox' : 'normal'}
                                                                sx={{ ...cellBaseSx, ...cellBgSx }}
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
                                            sx={{
                                                height: effectiveRowHeight,
                                                ...getRowSx(rowIndex),
                                            }}
                                        >
                                            {row.getVisibleCells().map(cell => {
                                                const isSelectCell = cell.column.id === '__select__';
                                                const cellBgSx =
                                                    !isSelectCell && cell.column.columnDef.meta?.getCellSx
                                                        ? cell.column.columnDef.meta.getCellSx(cell.getValue())
                                                        : {};
                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        align={cell.column.columnDef.meta?.align || 'left'}
                                                        padding={isSelectCell ? 'checkbox' : 'normal'}
                                                        sx={{ ...cellBaseSx, ...cellBgSx }}
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
                        />
                    )}

                    <Menu
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={closeColumnMenu}
                    >
                        <MenuItem
                            onClick={() => {
                                if (activeColumnRef.current) {
                                    setSorting([{ id: activeColumnRef.current.id, desc: false }]);
                                }
                                closeColumnMenu();
                            }}
                        >
                            <ArrowUpwardIcon
                                fontSize="small"
                                sx={{ mr: 1 }}
                            />
                            <Typography variant="body2">{Generic.t('json_table_sort_asc')}</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                if (activeColumnRef.current) {
                                    setSorting([{ id: activeColumnRef.current.id, desc: true }]);
                                }
                                closeColumnMenu();
                            }}
                        >
                            <ArrowDownwardIcon
                                fontSize="small"
                                sx={{ mr: 1 }}
                            />
                            <Typography variant="body2">{Generic.t('json_table_sort_desc')}</Typography>
                        </MenuItem>
                        {activeColumnSorted && (
                            <MenuItem
                                onClick={() => {
                                    setSorting([]);
                                    closeColumnMenu();
                                }}
                            >
                                <Typography variant="body2">{Generic.t('json_table_sort_clear')}</Typography>
                            </MenuItem>
                        )}
                        {widget.data.tableFiltering === true &&
                            activeColumnRef.current?.getCanFilter() === true &&
                            activeColumnFilter && (
                                <MenuItem
                                    onClick={() => {
                                        activeColumnRef.current?.setFilterValue(undefined);
                                        closeColumnMenu();
                                    }}
                                >
                                    <ClearIcon
                                        fontSize="small"
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="body2">{Generic.t('json_table_filter_clear')}</Typography>
                                </MenuItem>
                            )}
                    </Menu>
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
                        {!isValidType ? Generic.t('json_table_invalid_type') : Generic.t('json_table_no_data')}
                    </Typography>
                </Box>
            )}
        </CollectionBase>
    );
};

export default JsonTableCollection;
