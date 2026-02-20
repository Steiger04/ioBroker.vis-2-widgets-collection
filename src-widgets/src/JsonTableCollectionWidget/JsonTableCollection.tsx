/**
 * JSON Table collection renderer.
 *
 * @module widgets/JsonTableCollection
 * @remarks
 * Functional component that reads a JSON string from the OID state value,
 * analyzes it with `useJsonTableAnalysis`, and renders a MUI X DataGrid (MIT).
 */

import { Box, MenuItem, Typography } from '@mui/material';
import type { MenuItemProps } from '@mui/material';
import type { TablePaginationProps } from '@mui/material/TablePagination';
import {
    DataGrid,
    GridPagination,
    GridToolbarContainer,
    GridToolbarQuickFilter,
    type GridColDef,
    type GridLocaleText,
    type GridRenderCellParams,
    type GridToolbarQuickFilterProps,
} from '@mui/x-data-grid';
import { deDE, enUS, esES, frFR, itIT, nlNL, plPL, ptBR, ruRU, ukUA, zhCN } from '@mui/x-data-grid/locales';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { useJsonTableAnalysis } from '../hooks/useJsonTableAnalysis';
import useOidValue from '../hooks/useOidValue';
import Generic from '../Generic';

import { parseColumnConfig, type ColumnConfigEntry } from './types';
import { formatBooleanValue, formatDateValue, formatNumberValue } from './utils/formatters';
import { evaluateLogic } from './utils/jsonLogicEngine';
import { gradientColor } from '../lib/helper/gradientColor';

import type { JsonTableCollectionContextProps } from '../types';
import type { JsonTableAnalysisOptions } from '../hooks/useJsonTableAnalysis';

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

/** Shape of a MUI X DataGrid locale package. */
type MuiDataGridLocale = {
    components: {
        MuiDataGrid: {
            defaultProps: { localeText: Partial<GridLocaleText> };
        };
    };
};

/** Language-code → locale mapping for all languages supported by ioBroker. */
const DATA_GRID_LOCALE_MAP: Partial<Record<ioBroker.Languages, MuiDataGridLocale>> = {
    de: deDE,
    en: enUS,
    es: esES,
    fr: frFR,
    it: itIT,
    nl: nlNL,
    pl: plPL,
    pt: ptBR,
    ru: ruRU,
    uk: ukUA,
    'zh-cn': zhCN,
};

/**
 * Maps an ioBroker language code to the corresponding MUI DataGrid localeText.
 * Falls back to English for unsupported languages.
 */
function getDataGridLocaleText(language: ioBroker.Languages): Partial<GridLocaleText> {
    const locale = DATA_GRID_LOCALE_MAP[language] ?? enUS;
    return locale.components.MuiDataGrid.defaultProps.localeText;
}

/**
 * Parse a raw date-like value into epoch milliseconds for sorting.
 * Returns 0 for unparseable values so they sort to the beginning.
 */
function toSortableTime(value: unknown): number {
    if (value === null || value === undefined) {
        return 0;
    }
    if (typeof value === 'number') {
        // Detect seconds vs milliseconds: epoch-ms >= 1e12, epoch-s >= 1e9 (consistent with typeDetector)
        return value >= 1e12 ? value : value * 1000;
    }
    if (typeof value === 'string') {
        const d = new Date(value);
        return isNaN(d.getTime()) ? 0 : d.getTime();
    }
    return 0;
}

/**
 * Quick-filter toolbar for the DataGrid.
 * Defined at module level to keep a stable reference across renders.
 * Accepts optional `quickFilterProps` forwarded via `slotProps.toolbar`.
 */
function QuickFilterToolbar(props: { quickFilterProps?: GridToolbarQuickFilterProps }): React.JSX.Element {
    return (
        <GridToolbarContainer>
            <GridToolbarQuickFilter {...props.quickFilterProps} />
        </GridToolbarContainer>
    );
}

/**
 * Custom MenuItem that wraps content in Typography for consistent styling.
 */
function TypographyMenuItem(props: MenuItemProps): React.JSX.Element {
    const { children, ...other } = props;
    return (
        <MenuItem {...other}>
            <Typography
                variant="body2"
                component="span"
            >
                {children}
            </Typography>
        </MenuItem>
    );
}

/**
 * Custom pagination component that wraps labels in Typography for consistent styling.
 */
function TypographyPagination(props: Partial<TablePaginationProps>): React.JSX.Element {
    return (
        <GridPagination
            {...props}
            labelRowsPerPage={
                <Typography
                    variant="body2"
                    component="span"
                >
                    {props.labelRowsPerPage}
                </Typography>
            }
            labelDisplayedRows={paginationInfo => (
                <Typography
                    variant="body2"
                    component="span"
                >
                    {typeof props.labelDisplayedRows === 'function'
                        ? props.labelDisplayedRows(paginationInfo)
                        : `${paginationInfo.from}\u2013${paginationInfo.to} / ${paginationInfo.count}`}
                </Typography>
            )}
            slots={{
                menuItem: TypographyMenuItem,
            }}
            slotProps={{
                ...props.slotProps,
                select: {
                    ...((props.slotProps as Record<string, unknown>)?.select as Record<string, unknown>),
                    renderValue: (value: unknown) => (
                        <Typography
                            variant="body2"
                            component="span"
                        >
                            {String(value)}
                        </Typography>
                    ),
                    sx: {
                        '& .MuiSelect-icon': {
                            color: 'inherit',
                        },
                    },
                },
            }}
        />
    );
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

    /**
     * Render a cell value with optional formatting and conditional styling.
     * Wraps the output in Typography for consistent theme-aware rendering.
     */
    const createRenderCell = useCallback(
        (cfg: ColumnConfigEntry) =>
            // eslint-disable-next-line react/display-name
            (params: GridRenderCellParams): React.ReactNode => {
                const rawValue = params.value;
                let displayValue = rawValue != null ? String(rawValue) : '';

                // Apply formatting based on config
                if (cfg.format) {
                    switch (cfg.format.type) {
                        case 'number':
                            if (
                                typeof rawValue === 'number' ||
                                (typeof rawValue === 'string' && !isNaN(Number(rawValue)))
                            ) {
                                displayValue = formatNumberValue(Number(rawValue), {
                                    decimals: cfg.format.numberDecimals,
                                    prefix: cfg.format.numberPrefix,
                                    suffix: cfg.format.numberSuffix,
                                    thousands: cfg.format.numberThousandsSeparator,
                                });
                            }
                            break;
                        case 'date':
                            displayValue = formatDateValue(rawValue, cfg.format.dateFormat);
                            break;
                        case 'boolean':
                            displayValue = formatBooleanValue(
                                rawValue,
                                cfg.format.booleanTrue,
                                cfg.format.booleanFalse,
                            );
                            break;
                    }
                }

                // Evaluate conditional styling rules (first match wins)
                // Split into background styles (on cell wrapper) and text styles (on Typography)
                const bgSx: Record<string, unknown> = {};
                const textSx: Record<string, unknown> = {};
                if (cfg.cellStyle && cfg.cellStyle.length > 0) {
                    for (const rule of cfg.cellStyle) {
                        if (rule.logic && evaluateLogic(rule.logic, rawValue)) {
                            // Background: use `background` for gradients, `backgroundColor` for solid colors
                            if (rule.backgroundColor) {
                                const bgGradient = gradientColor(rule.backgroundColor);
                                if (bgGradient) {
                                    bgSx.background = bgGradient;
                                } else {
                                    bgSx.backgroundColor = rule.backgroundColor;
                                }
                            }
                            // Text: use backgroundClip text trick for gradients, plain color for solid
                            if (rule.textColor) {
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
                            if (rule.fontWeight) {
                                textSx.fontWeight = rule.fontWeight;
                            }
                            if (rule.fontStyle) {
                                textSx.fontStyle = rule.fontStyle;
                            }
                            break; // First match wins
                        }
                    }
                }

                const hasBg = 'background' in bgSx || 'backgroundColor' in bgSx;

                return (
                    <Box
                        sx={{
                            // Cell padding is 0 10px; expand Box to fill entire cell including padding area
                            width: hasBg ? 'calc(100% + 20px)' : '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            ...(hasBg && {
                                ml: '-10px',
                                px: '10px',
                            }),
                            ...bgSx,
                        }}
                    >
                        <Typography
                            variant="body2"
                            component="span"
                            noWrap
                            title={displayValue}
                            sx={{
                                width: '100%',
                                display: 'block',
                                lineHeight: 'inherit',
                                ...textSx,
                            }}
                        >
                            {displayValue}
                        </Typography>
                    </Box>
                );
            },
        [],
    );

    /**
     * Default renderCell that wraps values in Typography for theme propagation
     * (font-family, font-size, etc. from CollectionProvider theme overrides).
     */
    const defaultRenderCell = useCallback((params: GridRenderCellParams): React.ReactNode => {
        const displayValue = params.value != null ? String(params.value) : '';
        return (
            <Typography
                variant="body2"
                component="span"
                noWrap
                title={displayValue}
                sx={{
                    width: '100%',
                    display: 'block',
                    lineHeight: 'inherit',
                }}
            >
                {displayValue}
            </Typography>
        );
    }, []);

    /**
     * Default renderHeader that wraps column header names in Typography
     * for consistent theme-aware text rendering across all headers.
     */
    const defaultRenderHeader = useCallback((params: { colDef: GridColDef }): React.ReactNode => {
        return (
            <Typography
                variant="body2"
                component="span"
                fontWeight="medium"
                noWrap
                title={params.colDef.headerName || params.colDef.field}
                sx={{
                    width: '100%',
                    display: 'block',
                    lineHeight: 'inherit',
                }}
            >
                {params.colDef.headerName || params.colDef.field}
            </Typography>
        );
    }, []);

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
                        sortable: cfg.sortable ?? widget.data.tableSorting !== false,
                        filterable: cfg.filterable ?? widget.data.tableFiltering === true,
                        renderHeader: defaultRenderHeader,
                    };

                    // Apply renderCell: use formatted version if formatting/styling is configured,
                    // otherwise use default Typography wrapper for theme propagation
                    if (cfg.format || (cfg.cellStyle && cfg.cellStyle.length > 0)) {
                        col.renderCell = createRenderCell(cfg);
                    } else {
                        col.renderCell = defaultRenderCell;
                    }

                    // Add date sort comparator for correct chronological sorting
                    if (cfg.format?.type === 'date') {
                        col.sortComparator = (v1: unknown, v2: unknown) => toSortableTime(v1) - toSortableTime(v2);
                    }

                    return col;
                });
        }

        // Fallback: show all discovered columns with default Typography renderCell
        return analysisColumns.map(col => ({
            field: col.path,
            headerName: col.path.split('.').pop() || col.path,
            flex: 1,
            sortable: widget.data.tableSorting !== false,
            filterable: widget.data.tableFiltering === true,
            renderCell: defaultRenderCell,
            renderHeader: defaultRenderHeader,
        }));
    }, [
        columnConfig,
        analysisColumns,
        widget.data.tableSorting,
        widget.data.tableFiltering,
        createRenderCell,
        defaultRenderCell,
        defaultRenderHeader,
    ]);

    // Controlled pagination model — reacts immediately to tablePageSize changes
    const configuredPageSize = useMemo(() => Number(widget.data.tablePageSize) || 25, [widget.data.tablePageSize]);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: configuredPageSize });

    // Reset page to 0 and apply new page size when config changes
    useEffect(() => {
        setPaginationModel(prev =>
            prev.pageSize === configuredPageSize ? prev : { page: 0, pageSize: configuredPageSize },
        );
    }, [configuredPageSize]);

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

    // Custom styling from widget data, with gradient support for background colors
    const dataGridSx = useMemo(() => {
        const sx: Record<string, unknown> = {
            border: 0,
            width: '100%',
            height: '100%',
        };

        const headerBgColor = widget.data.tableHeaderBgColor;
        const headerTextColor = widget.data.tableHeaderTextColor;
        const headerFontSize = widget.data.tableHeaderFontSize;

        // Header styling: target both container and individual cells for reliable rendering
        if (headerBgColor || headerTextColor || headerFontSize) {
            const isGradientBg = headerBgColor ? gradientColor(headerBgColor) : null;

            sx['& .MuiDataGrid-columnHeaders'] = {
                ...(isGradientBg && { background: isGradientBg }),
                ...(!isGradientBg && headerBgColor && { backgroundColor: headerBgColor }),
            };
            sx['& .MuiDataGrid-columnHeader'] = {
                ...(isGradientBg && { background: isGradientBg }),
                ...(!isGradientBg && headerBgColor && { backgroundColor: headerBgColor }),
                ...(headerTextColor && { color: headerTextColor }),
                ...(headerFontSize && { fontSize: `${headerFontSize}px` }),
            };
            // Apply background to filler elements to prevent gaps at the right edge.
            // MuiDataGrid-filler is the flex-growing spacer after the last column header.
            // MuiDataGrid-scrollbarFiller--header is the fixed scrollbar-width cell that
            // appears when a vertical scrollbar is present. Both must be styled because
            // DataGrid v7 assigns no background to these elements by default.
            sx['& .MuiDataGrid-filler'] = {
                ...(isGradientBg && { background: isGradientBg }),
                ...(!isGradientBg && headerBgColor && { backgroundColor: headerBgColor }),
            };
            sx['& .MuiDataGrid-scrollbarFiller--header'] = {
                ...(isGradientBg && { background: isGradientBg }),
                ...(!isGradientBg && headerBgColor && { backgroundColor: headerBgColor }),
            };
        }

        // Cell styling
        if (widget.data.tableCellFontSize) {
            sx['& .MuiDataGrid-cell'] = {
                fontSize: `${widget.data.tableCellFontSize}px`,
            };
        }

        // Striped rows with gradient support
        if (widget.data.tableStripedColor) {
            const stripedColor = widget.data.tableStripedColor;
            const isGradientStriped = gradientColor(stripedColor);

            sx['& .MuiDataGrid-row:nth-of-type(even)'] = {
                background: isGradientStriped || stripedColor,
                backgroundColor: isGradientStriped ? 'transparent' : stripedColor,
            };
        }

        // Row borders — DataGrid v7 uses borderTop via --DataGrid-rowBorderColor CSS variable.
        // Setting it to transparent on the root hides all horizontal row separators.
        if (widget.data.tableShowRowBorders === false) {
            sx['--DataGrid-rowBorderColor'] = 'transparent';
        }

        // Hide the column separator on the last header column.
        // Note: :last-child won't work because DataGrid v7 appends a .MuiDataGrid-filler
        // div after the last column header. Use the built-in --last class instead.
        sx['& .MuiDataGrid-columnHeader--last .MuiDataGrid-columnSeparator'] = {
            display: 'none',
        };

        return sx;
    }, [
        widget.data.tableHeaderBgColor,
        widget.data.tableHeaderTextColor,
        widget.data.tableHeaderFontSize,
        widget.data.tableCellFontSize,
        widget.data.tableStripedColor,
        widget.data.tableShowRowBorders,
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
                        key={`grid-${widget.data.tableAutoSize}`}
                        localeText={getDataGridLocaleText(Generic.getLanguage())}
                        rows={gridRows}
                        columns={gridColumns}
                        density={widget.data.tableDensity || 'standard'}
                        rowHeight={Number(widget.data.tableRowHeight) || undefined}
                        columnHeaderHeight={Number(widget.data.tableHeaderHeight) || undefined}
                        pageSizeOptions={pageSizeOptions}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        hideFooter={widget.data.tablePagination === false}
                        disableColumnSorting={widget.data.tableSorting === false}
                        disableColumnFilter={widget.data.tableFiltering !== true}
                        disableColumnMenu={widget.data.tableColumnMenu === false}
                        checkboxSelection={widget.data.tableRowSelection === true}
                        disableRowSelectionOnClick
                        showCellVerticalBorder={widget.data.tableShowCellBorders === true}
                        showColumnVerticalBorder={widget.data.tableShowCellBorders === true}
                        autosizeOnMount={widget.data.tableAutoSize === true}
                        slots={{
                            ...(widget.data.tableQuickFilter === true && { toolbar: QuickFilterToolbar }),
                            pagination: TypographyPagination,
                        }}
                        {...(widget.data.tableQuickFilter === true && {
                            slotProps: {
                                toolbar: {
                                    quickFilterProps: {
                                        debounceMs: 300,
                                        variant: 'outlined' as const,
                                        size: 'small' as const,
                                    },
                                },
                            },
                        })}
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
