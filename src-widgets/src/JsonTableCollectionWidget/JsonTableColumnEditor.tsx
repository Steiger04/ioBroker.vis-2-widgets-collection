/**
 * Custom editor component for JSON Table column configuration.
 *
 * @module JsonTableCollectionWidget/JsonTableColumnEditor
 * @remarks
 * Used in the vis-2 property editor to configure column visibility,
 * header labels, width, and alignment. Reads the current OID value
 * to auto-discover columns via `analyzeJsonTable()`.
 *
 * Design: Modern MUI5 layout with cards, type badges, toggles, and search.
 */

import {
    Box,
    Button,
    Card,
    Chip,
    IconButton,
    InputAdornment,
    MenuItem,
    Select,
    Switch,
    TextField,
    ThemeProvider,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    Refresh as RefreshIcon,
    Search as SearchIcon,
    VisibilityOff as VisibilityOffIcon,
    Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { analyzeJsonTable } from '../hooks/useJsonTableAnalysis';
import Generic from '../Generic';

import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    VisTheme,
    WidgetData,
} from '@iobroker/types-vis-2';

/** Per-column configuration persisted in widget data. */
interface ColumnConfigEntry {
    path: string;
    visible: boolean;
    headerName: string;
    width?: number;
    align?: 'left' | 'center' | 'right';
}

/** Type-to-color mapping for the type badge chips. */
const TYPE_COLORS: Record<string, string> = {
    string: '#2196f3',
    number: '#4caf50',
    boolean: '#ff9800',
    date: '#9c27b0',
    null: '#9e9e9e',
    object: '#795548',
    array: '#00bcd4',
    mixed: '#f44336',
};

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
 * Custom editor component for configuring JSON table columns.
 *
 * Discovers columns by analyzing the current OID state value and allows users
 * to toggle visibility, rename headers, set widths and alignment per column.
 *
 * Signature matches the vis-2 custom component contract:
 * (field, data, onDataChange, props) => JSX.Element
 */
function JsonTableColumnEditor(
    field: RxWidgetInfoAttributesField,
    data: WidgetData,
    onDataChange: (newData: WidgetData) => void,
    props: RxWidgetInfoCustomComponentProperties,
): React.JSX.Element {
    const fieldName = field.name || 'columnConfig';
    const theme: VisTheme = props.context.theme;

    const [searchText, setSearchText] = useState('');
    const [columns, setColumns] = useState<ColumnConfigEntry[]>(() => parseColumnConfig(data[fieldName] as string));
    const [discoveredTypes, setDiscoveredTypes] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    // Persist changes to widget data
    const persistConfig = useCallback(
        (updatedColumns: ColumnConfigEntry[]) => {
            setColumns(updatedColumns);
            onDataChange({ [fieldName]: JSON.stringify(updatedColumns) });
        },
        [fieldName, onDataChange],
    );

    // Discover columns from the current OID state value
    const discoverColumns = useCallback(async () => {
        setLoading(true);
        try {
            const oid = data.oid as string | undefined;
            if (!oid) {
                setLoading(false);
                return;
            }

            const state = await props.context.socket.getState(oid);
            if (!state?.val) {
                setLoading(false);
                return;
            }

            let jsonData: unknown[];
            const rawVal = state.val;

            if (typeof rawVal === 'string') {
                try {
                    const parsed = JSON.parse(rawVal);
                    jsonData = Array.isArray(parsed) ? parsed : [parsed];
                } catch {
                    setLoading(false);
                    return;
                }
            } else if (Array.isArray(rawVal)) {
                jsonData = rawVal;
            } else if (typeof rawVal === 'object' && rawVal !== null) {
                jsonData = [rawVal];
            } else {
                setLoading(false);
                return;
            }

            const maxDepth = (data.tableMaxDepth as number) || 10;
            const result = analyzeJsonTable(jsonData, { maxDepth });

            // Build type map
            const typeMap: Record<string, string> = {};
            for (const col of result.columns) {
                typeMap[col.path] = col.type;
            }
            setDiscoveredTypes(typeMap);

            // Merge with existing config: preserve user edits, add new columns
            const existingMap = new Map(columns.map(c => [c.path, c]));
            const mergedColumns: ColumnConfigEntry[] = result.columns.map(col => {
                const existing = existingMap.get(col.path);
                if (existing) {
                    return existing;
                }
                return {
                    path: col.path,
                    visible: true,
                    headerName: col.path.split('.').pop() || col.path,
                };
            });

            persistConfig(mergedColumns);
        } catch {
            // Silently handle errors
        } finally {
            setLoading(false);
        }
    }, [data, props.context.socket, columns, persistConfig]);

    // Auto-discover on mount if no columns are configured
    useEffect(() => {
        if (columns.length === 0 && data.oid) {
            void discoverColumns();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Toggle visibility of a single column
    const handleToggleVisibility = useCallback(
        (path: string) => {
            const updated = columns.map(c => (c.path === path ? { ...c, visible: !c.visible } : c));
            persistConfig(updated);
        },
        [columns, persistConfig],
    );

    // Update header name
    const handleHeaderChange = useCallback(
        (path: string, headerName: string) => {
            const updated = columns.map(c => (c.path === path ? { ...c, headerName } : c));
            persistConfig(updated);
        },
        [columns, persistConfig],
    );

    // Update width
    const handleWidthChange = useCallback(
        (path: string, widthStr: string) => {
            const width = widthStr ? parseInt(widthStr, 10) : undefined;
            const updated = columns.map(c =>
                c.path === path ? { ...c, width: width && !isNaN(width) ? width : undefined } : c,
            );
            persistConfig(updated);
        },
        [columns, persistConfig],
    );

    // Update alignment
    const handleAlignChange = useCallback(
        (path: string, align: string) => {
            const updated = columns.map(c =>
                c.path === path ? { ...c, align: (align as ColumnConfigEntry['align']) || undefined } : c,
            );
            persistConfig(updated);
        },
        [columns, persistConfig],
    );

    // Toggle all visible / all hidden
    const handleToggleAll = useCallback(() => {
        const allVisible = columns.every(c => c.visible);
        const updated = columns.map(c => ({ ...c, visible: !allVisible }));
        persistConfig(updated);
    }, [columns, persistConfig]);

    // Filtered columns based on search
    const filteredColumns = useMemo(
        () =>
            searchText
                ? columns.filter(
                      c =>
                          c.path.toLowerCase().includes(searchText.toLowerCase()) ||
                          c.headerName.toLowerCase().includes(searchText.toLowerCase()),
                  )
                : columns,
        [columns, searchText],
    );

    const allVisible = columns.length > 0 && columns.every(c => c.visible);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ mt: 1, width: '100%' }}>
                {/* Toolbar */}
                <Box sx={{ display: 'flex', gap: 0.5, mb: 1, alignItems: 'center' }}>
                    <TextField
                        size="small"
                        placeholder={Generic.t('json_table_search_columns')}
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{ flex: 1, minWidth: 0 }}
                    />
                    <Tooltip title={Generic.t('json_table_refresh_columns')}>
                        <IconButton
                            size="small"
                            onClick={discoverColumns}
                            disabled={loading}
                        >
                            <RefreshIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={allVisible ? Generic.t('json_table_hide_all') : Generic.t('json_table_show_all')}>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={handleToggleAll}
                            startIcon={allVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            sx={{ minWidth: 'auto', textTransform: 'none', whiteSpace: 'nowrap' }}
                        >
                            {allVisible ? Generic.t('json_table_hide_all') : Generic.t('json_table_show_all')}
                        </Button>
                    </Tooltip>
                </Box>

                {/* Column cards */}
                {columns.length === 0 ? (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: 'center', py: 2 }}
                    >
                        {Generic.t('json_table_no_columns')}
                    </Typography>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, maxHeight: 400, overflow: 'auto' }}>
                        {filteredColumns.map(col => {
                            const detectedType = discoveredTypes[col.path] || 'string';
                            const typeColor = TYPE_COLORS[detectedType] || TYPE_COLORS.string;

                            return (
                                <Card
                                    key={col.path}
                                    variant="outlined"
                                    sx={{
                                        p: 1,
                                        opacity: col.visible ? 1 : 0.5,
                                        transition: 'opacity 0.2s',
                                    }}
                                >
                                    {/* Row 1: Path + Type badge + Visibility toggle */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            mb: 0.5,
                                        }}
                                    >
                                        <Chip
                                            label={detectedType}
                                            size="small"
                                            sx={{
                                                bgcolor: typeColor,
                                                color: '#fff',
                                                fontWeight: 600,
                                                fontSize: '0.65rem',
                                                height: 20,
                                                minWidth: 50,
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                flex: 1,
                                                fontFamily: 'monospace',
                                                fontSize: '0.7rem',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                            title={col.path}
                                        >
                                            {col.path}
                                        </Typography>
                                        <Switch
                                            size="small"
                                            checked={col.visible}
                                            onChange={() => handleToggleVisibility(col.path)}
                                        />
                                    </Box>

                                    {/* Row 2: Header name, width, alignment */}
                                    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                                        <TextField
                                            size="small"
                                            label={Generic.t('json_table_header_label')}
                                            value={col.headerName}
                                            onChange={e => handleHeaderChange(col.path, e.target.value)}
                                            sx={{ flex: 1, minWidth: 0 }}
                                            slotProps={{
                                                htmlInput: { style: { fontSize: '0.75rem' } },
                                                inputLabel: { style: { fontSize: '0.75rem' } },
                                            }}
                                        />
                                        <TextField
                                            size="small"
                                            label={Generic.t('json_table_width')}
                                            type="number"
                                            value={col.width ?? ''}
                                            onChange={e => handleWidthChange(col.path, e.target.value)}
                                            sx={{ width: 70 }}
                                            slotProps={{
                                                htmlInput: {
                                                    style: { fontSize: '0.75rem' },
                                                    min: 30,
                                                },
                                                inputLabel: { style: { fontSize: '0.75rem' } },
                                            }}
                                        />
                                        <Select
                                            size="small"
                                            value={col.align || 'left'}
                                            onChange={e => handleAlignChange(col.path, e.target.value)}
                                            sx={{ width: 80, fontSize: '0.75rem' }}
                                        >
                                            <MenuItem value="left">{Generic.t('json_table_align_left')}</MenuItem>
                                            <MenuItem value="center">{Generic.t('json_table_align_center')}</MenuItem>
                                            <MenuItem value="right">{Generic.t('json_table_align_right')}</MenuItem>
                                        </Select>
                                    </Box>
                                </Card>
                            );
                        })}
                    </Box>
                )}

                {/* Summary */}
                {columns.length > 0 && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 0.5, display: 'block' }}
                    >
                        {columns.filter(c => c.visible).length} / {columns.length}{' '}
                        {Generic.t('json_table_columns_visible')}
                    </Typography>
                )}
            </Box>
        </ThemeProvider>
    );
}

export default JsonTableColumnEditor;
