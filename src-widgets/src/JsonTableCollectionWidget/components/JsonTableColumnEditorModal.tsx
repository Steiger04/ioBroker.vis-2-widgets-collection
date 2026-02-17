/**
 * Modal dialog for comprehensive JsonTable column configuration.
 *
 * @module JsonTableCollectionWidget/components/JsonTableColumnEditorModal
 * @remarks
 * Full-featured column editor with split-panel layout:
 * - Left panel (40%): Searchable column list with type badges and visibility toggles
 * - Right panel (60%): Detail editor with accordion sections for basic settings,
 *   formatting, conditional styling, and advanced options
 *
 * Opens as a MUI Dialog from the custom attribute button in the property editor.
 * Uses ThemeProvider with the vis-2 theme from `props.context.theme`.
 */

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';

import Generic from '../../Generic';
import ColumnList from './ColumnList';
import ColumnDetailEditor from './ColumnDetailEditor';
import { analyzeJsonTable } from '../../hooks/useJsonTableAnalysis';
import type { ColumnConfigEntry } from '../types';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis/types';
import type { VisTheme, WidgetData } from '@iobroker/types-vis-2';

/** Props for the JsonTableColumnEditorModal component. */
interface JsonTableColumnEditorModalProps {
    /** Whether the dialog is open */
    open: boolean;
    /** Callback when the dialog should close */
    onClose: () => void;
    /** Current column configuration */
    columns: ColumnConfigEntry[];
    /** Callback when configuration is saved */
    onSave: (columns: ColumnConfigEntry[]) => void;
    /** vis-2 theme for ThemeProvider */
    theme: VisTheme;
    /** Current widget data (for OID access) */
    data: WidgetData;
    /** ioBroker socket for state queries */
    socket: {
        getState: (id: string) => Promise<{ val?: unknown } | null>;
    };
}

/**
 * Modal dialog component for configuring JSON table columns.
 *
 * Features:
 * - Split-panel layout with column list (left) and detail editor (right)
 * - Auto-discovers columns from OID state on open
 * - Tracks unsaved changes with confirmation on close
 * - Theme-aware via ThemeProvider
 */
function JsonTableColumnEditorModal({
    open,
    onClose,
    columns,
    onSave,
    theme,
    data,
    socket,
}: JsonTableColumnEditorModalProps): React.JSX.Element {
    // Working copy of columns (edited in-place, saved on "Save")
    const [editedColumns, setEditedColumns] = useState<ColumnConfigEntry[]>(columns);
    // Selected column path for the detail editor
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    // Whether any changes have been made since last save
    const [hasChanges, setHasChanges] = useState(false);
    // Discovered column metadata from analysis
    const [discoveredColumns, setDiscoveredColumns] = useState<JsonTableColumn[]>([]);
    // Loading state for refresh operations
    const [loading, setLoading] = useState(false);

    // Ref to track if initial discovery has been done for this open
    const initialDiscoveryDone = useRef(false);

    // Ref to hold the latest discoverColumns, so the effect doesn't need it as a dependency
    const discoverColumnsRef = useRef<() => Promise<void>>(() => Promise.resolve());

    // Reset state when dialog opens with fresh data
    useEffect(() => {
        if (open) {
            setEditedColumns(columns);
            setHasChanges(false);
            setSelectedPath(columns.length > 0 ? columns[0].path : null);
            initialDiscoveryDone.current = false;
        }
    }, [open, columns]);

    // Auto-discover columns on first open (discoverColumns is defined below; called after initialization)
    useEffect(() => {
        if (open && !initialDiscoveryDone.current) {
            initialDiscoveryDone.current = true;
            void discoverColumnsRef.current();
        }
    }, [open]);

    // Discover columns by analyzing the OID state value
    const discoverColumns = useCallback(async () => {
        setLoading(true);
        try {
            const oid = data.oid as string | undefined;
            if (!oid) {
                setLoading(false);
                return;
            }

            const state = await socket.getState(oid);
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

            // Store discovered column metadata
            setDiscoveredColumns(result.columns);

            // Merge with existing config: preserve user edits, add newly discovered columns
            setEditedColumns(prev => {
                const existingMap = new Map(prev.map(c => [c.path, c]));
                const merged: ColumnConfigEntry[] = result.columns.map(col => {
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

                return merged;
            });
        } catch {
            // Silently handle errors during discovery
        } finally {
            setLoading(false);
        }
    }, [data, socket]);

    // Keep ref in sync with the latest discoverColumns callback
    discoverColumnsRef.current = discoverColumns;

    // Update a column in the edited list
    const handleColumnChange = useCallback((updated: ColumnConfigEntry) => {
        setEditedColumns(prev => prev.map(c => (c.path === updated.path ? updated : c)));
        setHasChanges(true);
    }, []);

    // Handle list-level changes (bulk visibility, etc.)
    const handleListChange = useCallback((updatedColumns: ColumnConfigEntry[]) => {
        setEditedColumns(updatedColumns);
        setHasChanges(true);
    }, []);

    // Save and close
    const handleSave = useCallback(() => {
        onSave(editedColumns);
        setHasChanges(false);
        onClose();
    }, [editedColumns, onSave, onClose]);

    // Handle close — discard changes silently and close
    const handleClose = useCallback(
        (_event?: object, reason?: string) => {
            // Prevent close on backdrop click when there are unsaved changes
            if (reason === 'backdropClick' && hasChanges) {
                return;
            }
            onClose();
        },
        [hasChanges, onClose],
    );

    // Currently selected column for the detail editor
    const selectedColumn = selectedPath ? editedColumns.find(c => c.path === selectedPath) : null;
    const selectedDiscovered = selectedPath ? discoveredColumns.find(c => c.path === selectedPath) : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            height: '80vh',
                            maxHeight: '900px',
                        },
                    },
                }}
            >
                <DialogTitle sx={{ py: 1.5, px: 2.5 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6">{Generic.t('json_table_column_editor_title')}</Typography>
                        <IconButton
                            onClick={() => handleClose()}
                            size="small"
                            sx={{ color: 'text.secondary' }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent
                    dividers
                    sx={{ p: 0, display: 'flex', overflow: 'hidden' }}
                >
                    {/* Left Panel - Column List (40%) */}
                    <Box
                        sx={{
                            width: '40%',
                            minWidth: 280,
                            borderRight: 1,
                            borderColor: 'divider',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        <ColumnList
                            columns={editedColumns}
                            discoveredColumns={discoveredColumns}
                            selectedPath={selectedPath}
                            onSelect={setSelectedPath}
                            onChange={handleListChange}
                            onRefresh={discoverColumns}
                            loading={loading}
                        />
                    </Box>

                    {/* Right Panel - Detail Editor (60%) */}
                    <Box
                        sx={{
                            width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        {selectedColumn ? (
                            <ColumnDetailEditor
                                column={selectedColumn}
                                discoveredColumn={selectedDiscovered}
                                onChange={handleColumnChange}
                            />
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {editedColumns.length > 0
                                        ? Generic.t('json_table_select_column')
                                        : Generic.t('json_table_no_columns')}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 2.5, py: 1.5 }}>
                    <Button onClick={() => handleClose()}>{Generic.t('cancel')}</Button>
                    <Button
                        variant="contained"
                        onClick={handleSave}
                        disabled={!hasChanges}
                    >
                        {Generic.t('save')}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default JsonTableColumnEditorModal;
