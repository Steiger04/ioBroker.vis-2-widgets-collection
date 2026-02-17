/**
 * JSON Table collection renderer.
 *
 * @module widgets/JsonTableCollection
 * @remarks
 * Functional component that reads a JSON string from the OID state value,
 * analyzes it with `useJsonTableAnalysis`, and renders a MUI X DataGrid (MIT).
 */

import { Box, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useContext, useMemo } from 'react';
import type { FC } from 'react';

import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useJsonTableAnalysis } from '../hooks/useJsonTableAnalysis';
import useOidValue from '../hooks/useOidValue';
import Generic from '../Generic';

import type { JsonTableCollectionContextProps } from '../types';
import type { JsonTableAnalysisOptions } from '../hooks/useJsonTableAnalysis';

/** Per-column configuration stored in widget data (JSON-stringified). */
interface ColumnConfigEntry {
    path: string;
    visible: boolean;
    headerName: string;
    width?: number;
    align?: 'left' | 'center' | 'right';
}

/**
 * Parse stored column config from widget data.
 */
function parseColumnConfig(raw: string | undefined | null): ColumnConfigEntry[] {
    if (!raw) {
        return [];
    }
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? (parsed as ColumnConfigEntry[]) : [];
    } catch {
        return [];
    }
}

/**
 * Parse a comma-separated string of numbers into a number array.
 */
function parsePageSizeOptions(raw: string | undefined): number[] {
    if (!raw) {
        return [10, 25, 50, 100];
    }
    const result = raw
        .split(',')
        .map(s => parseInt(s.trim(), 10))
        .filter(n => !isNaN(n) && n > 0);
    return result.length > 0 ? result : [10, 25, 50, 100];
}

/**
 * Renders a data grid from JSON state values.
 */
const JsonTableCollection: FC = () => {
    const context = useContext(CollectionContext) as JsonTableCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');

    const oidType = oidObject?.type;
    const isValidType = oidType === 'string' || oidType === 'mixed';

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

    // Analysis options from widget config
    const analysisOptions = useMemo<JsonTableAnalysisOptions>(
        () => ({
            maxDepth: widget.data.tableMaxDepth || 10,
        }),
        [widget.data.tableMaxDepth],
    );

    // Analyze JSON structure
    const { columns: analysisColumns, rows } = useJsonTableAnalysis(jsonData, analysisOptions);

    // Column config from widget data
    const columnConfig = useMemo(
        () => parseColumnConfig(widget.data.columnConfig as string),
        [widget.data.columnConfig],
    );

    // Build DataGrid column definitions
    const gridColumns = useMemo<GridColDef[]>(() => {
        // If there is a column config, use its ordering and visibility
        if (columnConfig.length > 0) {
            return columnConfig
                .filter(cfg => cfg.visible)
                .map(cfg => {
                    const col: GridColDef = {
                        field: cfg.path,
                        headerName: cfg.headerName || cfg.path,
                        flex: cfg.width ? 0 : 1,
                        width: cfg.width,
                        headerAlign: cfg.align || 'left',
                        align: cfg.align || 'left',
                        sortable: widget.data.tableSorting !== false,
                        filterable: widget.data.tableFiltering === true,
                    };
                    return col;
                });
        }

        // Fallback: show all discovered columns
        return analysisColumns.map(col => ({
            field: col.path,
            headerName: col.path.split('.').pop() || col.path,
            flex: 1,
            sortable: widget.data.tableSorting !== false,
            filterable: widget.data.tableFiltering === true,
        }));
    }, [columnConfig, analysisColumns, widget.data.tableSorting, widget.data.tableFiltering]);

    // Build DataGrid rows with an auto-generated unique id
    const gridRows = useMemo(
        () =>
            rows.map((row, index) => ({
                id: index,
                ...row,
            })),
        [rows],
    );

    // Page size options
    const pageSizeOptions = useMemo(
        () => parsePageSizeOptions(widget.data.tablePageSizeOptions as string),
        [widget.data.tablePageSizeOptions],
    );

    // Custom styling from widget data
    const dataGridSx = useMemo(() => {
        const sx: Record<string, unknown> = {
            border: 0,
            width: '100%',
            height: '100%',
        };

        // Header styling
        if (widget.data.tableHeaderBgColor || widget.data.tableHeaderTextColor || widget.data.tableHeaderFontSize) {
            sx['& .MuiDataGrid-columnHeaders'] = {
                ...(widget.data.tableHeaderBgColor && { backgroundColor: widget.data.tableHeaderBgColor }),
                ...(widget.data.tableHeaderTextColor && { color: widget.data.tableHeaderTextColor }),
                ...(widget.data.tableHeaderFontSize && { fontSize: `${widget.data.tableHeaderFontSize}px` }),
            };
        }

        // Cell styling
        if (widget.data.tableCellFontSize) {
            sx['& .MuiDataGrid-cell'] = {
                fontSize: `${widget.data.tableCellFontSize}px`,
            };
        }

        // Striped rows
        if (widget.data.tableStripedColor) {
            sx['& .MuiDataGrid-row:nth-of-type(even)'] = {
                backgroundColor: widget.data.tableStripedColor,
            };
        }

        // Cell borders
        if (widget.data.tableShowCellBorders) {
            sx['& .MuiDataGrid-cell'] = {
                ...(sx['& .MuiDataGrid-cell'] as Record<string, unknown>),
                borderRight: '1px solid',
                borderColor: 'divider',
            };
        }

        return sx;
    }, [
        widget.data.tableHeaderBgColor,
        widget.data.tableHeaderTextColor,
        widget.data.tableHeaderFontSize,
        widget.data.tableCellFontSize,
        widget.data.tableStripedColor,
        widget.data.tableShowCellBorders,
    ]);

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
            {isValidType && gridColumns.length > 0 ? (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <DataGrid
                        rows={gridRows}
                        columns={gridColumns}
                        density={widget.data.tableDensity || 'standard'}
                        rowHeight={widget.data.tableRowHeight || undefined}
                        columnHeaderHeight={widget.data.tableHeaderHeight || undefined}
                        pageSizeOptions={pageSizeOptions}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: widget.data.tablePageSize || 25,
                                },
                            },
                        }}
                        pagination={widget.data.tablePagination !== false || undefined}
                        disableColumnSorting={widget.data.tableSorting === false}
                        disableColumnFilter={widget.data.tableFiltering !== true}
                        disableColumnMenu={widget.data.tableColumnMenu === false}
                        hideFooter={widget.data.tableHideFooter === true}
                        checkboxSelection={widget.data.tableRowSelection === true}
                        disableRowSelectionOnClick
                        showCellVerticalBorder={widget.data.tableShowCellBorders === true}
                        showColumnVerticalBorder={widget.data.tableShowCellBorders === true}
                        autosizeOnMount={widget.data.tableAutoSize === true}
                        sx={dataGridSx}
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
                        {!isValidType ? Generic.t('json_table_invalid_type') : Generic.t('json_table_no_data')}
                    </Typography>
                </Box>
            )}
        </CollectionBase>
    );
};

export default JsonTableCollection;
