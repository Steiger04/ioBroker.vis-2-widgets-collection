/**
 * Column list panel for the JsonTable column editor modal.
 *
 * @module JsonTableCollectionWidget/components/ColumnList
 * @remarks
 * Renders a searchable, scrollable list of column cards in the left panel
 * of the column editor modal. Each card shows the column path, detected type
 * badge, and a visibility checkbox. Clicking a card selects it for detail
 * editing in the right panel.
 */

import {
    Box,
    Card,
    Checkbox,
    Chip,
    IconButton,
    InputAdornment,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    DragIndicator as DragIndicatorIcon,
    Refresh as RefreshIcon,
    RestartAlt as RestartAltIcon,
    Search as SearchIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { useCallback, useMemo, useRef, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import { TYPE_COLORS } from '../utils/columnConfig';
import type { ColumnConfigEntry } from '../types';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';

/** Props for the ColumnList component. */
interface ColumnListProps {
    /** Current column configuration (editable copy) */
    columns: ColumnConfigEntry[];
    /** Column metadata from analysis (type, stats) */
    discoveredColumns: JsonTableColumn[];
    /** Currently selected column path (highlighted in list) */
    selectedPath: string | null;
    /** Callback when a column is selected for detail editing */
    onSelect: (path: string) => void;
    /** Callback when column list changes (visibility toggled, bulk actions) */
    onChange: (columns: ColumnConfigEntry[]) => void;
    /** Callback to re-discover columns from OID state */
    onRefresh: () => void;
    /** Whether a refresh operation is in progress */
    loading: boolean;
}

/**
 * Renders the left panel column list with search, bulk actions, and selectable cards.
 */
function ColumnList({
    columns,
    discoveredColumns,
    selectedPath,
    onSelect,
    onChange,
    onRefresh,
    loading,
}: ColumnListProps): React.JSX.Element {
    const [searchText, setSearchText] = useState('');
    const [draggedPath, setDraggedPath] = useState<string | null>(null);
    const [dropTargetPath, setDropTargetPath] = useState<string | null>(null);
    const dragCounter = useRef(0);

    // Disable drag when search filter is active (reorder would be confusing on a subset)
    const isDragEnabled = !searchText;

    // Filter columns by search text (path or headerName)
    const filteredColumns = useMemo(() => {
        if (!searchText) {
            return columns;
        }
        const search = searchText.toLowerCase();
        return columns.filter(
            col => col.path.toLowerCase().includes(search) || col.headerName.toLowerCase().includes(search),
        );
    }, [columns, searchText]);

    const visibleCount = useMemo(() => columns.filter(c => c.visible).length, [columns]);

    // Toggle visibility for a single column (stop event propagation to prevent card selection)
    const handleToggleVisibility = useCallback(
        (e: React.MouseEvent, path: string): void => {
            e.stopPropagation();
            onChange(columns.map(c => (c.path === path ? { ...c, visible: !c.visible } : c)));
        },
        [columns, onChange],
    );

    // Bulk toggle all columns
    const handleToggleAll = useCallback(
        (visible: boolean): void => {
            onChange(columns.map(c => ({ ...c, visible })));
        },
        [columns, onChange],
    );

    // --- Drag & Drop handlers ---
    const handleDragStart = useCallback((e: React.DragEvent<HTMLDivElement>, path: string): void => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', path);
        setDraggedPath(path);
    }, []);

    const handleDragEnter = useCallback(
        (e: React.DragEvent<HTMLDivElement>, path: string): void => {
            e.preventDefault();
            dragCounter.current += 1;
            if (path !== draggedPath) {
                setDropTargetPath(path);
            }
        },
        [draggedPath],
    );

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        dragCounter.current -= 1;
        if (dragCounter.current <= 0) {
            dragCounter.current = 0;
            setDropTargetPath(null);
        }
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>, targetPath: string): void => {
            e.preventDefault();
            dragCounter.current = 0;
            setDropTargetPath(null);
            setDraggedPath(null);

            const sourcePath = e.dataTransfer.getData('text/plain');
            if (!sourcePath || sourcePath === targetPath) {
                return;
            }

            const reordered = [...columns];
            const sourceIdx = reordered.findIndex(c => c.path === sourcePath);
            const targetIdx = reordered.findIndex(c => c.path === targetPath);
            if (sourceIdx === -1 || targetIdx === -1) {
                return;
            }

            // Remove source and insert before target
            const [moved] = reordered.splice(sourceIdx, 1);
            reordered.splice(targetIdx, 0, moved);
            onChange(reordered);
        },
        [columns, onChange],
    );

    const handleDragEnd = useCallback((): void => {
        dragCounter.current = 0;
        setDraggedPath(null);
        setDropTargetPath(null);
    }, []);

    // Reset all columns to default settings (keep paths, clear all customizations)
    const handleResetAll = useCallback((): void => {
        onChange(
            columns.map(c => ({
                path: c.path,
                visible: true,
                headerName: c.path.split('.').pop() || c.path,
            })),
        );
    }, [columns, onChange]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Toolbar with search and bulk actions */}
            <Toolbar
                variant="dense"
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    gap: 0.5,
                    px: 1.5,
                    minHeight: 48,
                }}
            >
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
                    sx={{ flexGrow: 1, minWidth: 0 }}
                />
                <Tooltip title={Generic.t('json_table_refresh_columns')}>
                    <span>
                        <IconButton
                            size="small"
                            onClick={onRefresh}
                            disabled={loading}
                        >
                            <RefreshIcon fontSize="small" />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title={Generic.t('json_table_show_all')}>
                    <IconButton
                        size="small"
                        onClick={() => handleToggleAll(true)}
                    >
                        <VisibilityIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title={Generic.t('json_table_hide_all')}>
                    <IconButton
                        size="small"
                        onClick={() => handleToggleAll(false)}
                    >
                        <VisibilityOffIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title={Generic.t('json_table_reset_all')}>
                    <IconButton
                        size="small"
                        onClick={handleResetAll}
                    >
                        <RestartAltIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Toolbar>

            {/* Scrollable column list */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                }}
            >
                {filteredColumns.length === 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {columns.length === 0
                                ? Generic.t('json_table_no_columns')
                                : Generic.t('json_table_no_search_results')}
                        </Typography>
                    </Box>
                ) : (
                    filteredColumns.map(col => {
                        const discovered = discoveredColumns.find(d => d.path === col.path);
                        const isSelected = selectedPath === col.path;
                        const detectedType = discovered?.type || 'string';

                        return (
                            <Card
                                key={col.path}
                                onClick={() => onSelect(col.path)}
                                draggable={isDragEnabled}
                                onDragStart={isDragEnabled ? e => handleDragStart(e, col.path) : undefined}
                                onDragEnter={isDragEnabled ? e => handleDragEnter(e, col.path) : undefined}
                                onDragLeave={isDragEnabled ? handleDragLeave : undefined}
                                onDragOver={isDragEnabled ? handleDragOver : undefined}
                                onDrop={isDragEnabled ? e => handleDrop(e, col.path) : undefined}
                                onDragEnd={isDragEnabled ? handleDragEnd : undefined}
                                variant="outlined"
                                sx={{
                                    p: 1,
                                    cursor: isDragEnabled ? 'grab' : 'pointer',
                                    flexShrink: 0,
                                    border: 2,
                                    borderColor: isSelected ? 'primary.main' : 'divider',
                                    backgroundColor: isSelected ? 'action.selected' : 'background.paper',
                                    opacity: draggedPath === col.path ? 0.4 : col.visible ? 1 : 0.55,
                                    borderTop: dropTargetPath === col.path ? '3px solid' : undefined,
                                    borderTopColor: dropTargetPath === col.path ? 'primary.main' : undefined,
                                    '&:hover': {
                                        backgroundColor: isSelected ? 'action.selected' : 'action.hover',
                                    },
                                    transition: 'all 0.15s ease-in-out',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {isDragEnabled && (
                                        <DragIndicatorIcon
                                            fontSize="small"
                                            sx={{ color: 'text.disabled', cursor: 'grab', flexShrink: 0 }}
                                        />
                                    )}
                                    <Checkbox
                                        checked={col.visible}
                                        onClick={e => handleToggleVisibility(e, col.path)}
                                        size="small"
                                        sx={{ p: 0.5 }}
                                    />
                                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                fontSize: '0.8rem',
                                            }}
                                            title={col.path}
                                        >
                                            {col.headerName || col.path}
                                        </Typography>
                                        {col.headerName && col.headerName !== col.path && (
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: 'monospace',
                                                    fontSize: '0.65rem',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                    display: 'block',
                                                }}
                                                title={col.path}
                                            >
                                                {col.path}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Chip
                                        label={detectedType}
                                        size="small"
                                        sx={{
                                            backgroundColor: TYPE_COLORS[detectedType] || TYPE_COLORS.string,
                                            color: '#fff',
                                            fontWeight: 600,
                                            fontSize: '0.65rem',
                                            height: 20,
                                            minWidth: 48,
                                            flexShrink: 0,
                                        }}
                                    />
                                </Box>
                            </Card>
                        );
                    })
                )}
            </Box>

            {/* Footer summary */}
            {columns.length > 0 && (
                <Box
                    sx={{
                        borderTop: 1,
                        borderColor: 'divider',
                        px: 2,
                        py: 1,
                    }}
                >
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {visibleCount} / {columns.length} {Generic.t('json_table_columns_visible')}
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default ColumnList;
