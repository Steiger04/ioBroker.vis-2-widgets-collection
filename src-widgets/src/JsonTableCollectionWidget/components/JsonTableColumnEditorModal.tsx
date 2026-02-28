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
    Alert,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Snackbar,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
    // Discovered column metadata from analysis
    const [discoveredColumns, setDiscoveredColumns] = useState<JsonTableColumn[]>([]);
    // Loading state for refresh operations
    const [loading, setLoading] = useState(false);
    // Whether to show unsaved-changes warning snackbar
    const [showUnsavedWarning, setShowUnsavedWarning] = useState(false);
    // Error message from column discovery
    const [discoveryError, setDiscoveryError] = useState<string | null>(null);

    // Ref to track if initial discovery has been done for this open
    const initialDiscoveryDone = useRef(false);

    // Ref to hold the latest discoverColumns, so the effect doesn't need it as a dependency
    const discoverColumnsRef = useRef<() => Promise<void>>(() => Promise.resolve());

    // Ref to hold the latest editedColumns for use in discoverColumns without dependency issues
    const editedColumnsRef = useRef<ColumnConfigEntry[]>(columns);

    // Serialized snapshot of the original columns prop for deep-equality comparison
    const originalColumnsJson = useMemo(() => JSON.stringify(columns), [columns]);

    // Declaratively compute whether there are unsaved changes by comparing
    // the current edited state against the original columns prop (deep equality).
    // This automatically resets hasChanges to false when the user reverts all edits.
    const hasChanges = useMemo(
        () => JSON.stringify(editedColumns) !== originalColumnsJson,
        [editedColumns, originalColumnsJson],
    );

    // Reset state when dialog opens with fresh data
    useEffect(() => {
        if (open) {
            setEditedColumns(columns);
            editedColumnsRef.current = columns;
            setSelectedPath(columns.length > 0 ? columns[0].path : null);
            initialDiscoveryDone.current = false;
            setDiscoveryError(null);
        }
    }, [open, columns]);

    // Auto-discover columns on first open (discoverColumns is defined below; called after initialization)
    useEffect(() => {
        if (open && !initialDiscoveryDone.current) {
            initialDiscoveryDone.current = true;
            void discoverColumnsRef.current();
        }
    }, [open]);

    // Discover columns by analyzing the OID state value.
    // `selectedPath` is intentionally omitted from deps: the functional setter form
    // of setSelectedPath is used for auto-selection, avoiding unnecessary re-creations.
    // `setLoading(false)` is only called in the finally block — early returns inside
    // the try block do NOT need explicit setLoading(false) calls.
    const discoverColumns = useCallback(async () => {
        setLoading(true);
        setDiscoveryError(null);
        try {
            const oid = data.oid as string | undefined;
            if (!oid) {
                return;
            }

            const state = await socket.getState(oid);
            if (state?.val === null || state?.val === undefined) {
                return;
            }

            let jsonData: unknown[];
            const rawVal = state.val;

            if (typeof rawVal === 'string') {
                try {
                    const parsed = JSON.parse(rawVal);
                    jsonData = Array.isArray(parsed) ? parsed : [parsed];
                } catch {
                    return;
                }
            } else if (Array.isArray(rawVal)) {
                jsonData = rawVal;
            } else if (typeof rawVal === 'object' && rawVal !== null) {
                jsonData = [rawVal];
            } else {
                return;
            }

            // FIX-P2-5: Show warning when actual JSON depth exceeds configured maxDepth
            const configuredMaxDepth = (data.tableMaxDepth as number) || 10;
            const result = analyzeJsonTable(jsonData, { maxDepth: configuredMaxDepth });

            // Warn if actual depth exceeds configured depth
            if (result.meta.maxDepth > configuredMaxDepth) {
                setDiscoveryError(
                    `JSON depth (${result.meta.maxDepth}) exceeds configured max (${configuredMaxDepth}). ` +
                        `Increase maxDepth to see all nested data.`,
                );
            }

            // Store discovered column metadata
            setDiscoveredColumns(result.columns);

            // Merge with existing config: preserve user's saved order, append newly discovered columns
            const existingMap = new Map(editedColumnsRef.current.map(c => [c.path, c]));
            const discoveredSet = new Set(result.columns.map(c => c.path));

            // Keep saved columns that still exist in the data (in their saved order)
            const preserved = editedColumnsRef.current.filter(c => discoveredSet.has(c.path));

            // Append any newly discovered columns not yet in the saved config
            // Apply type-based smart defaults for sortable/filterable
            const newColumns: ColumnConfigEntry[] = result.columns
                .filter(col => !existingMap.has(col.path))
                .map(col => ({
                    path: col.path,
                    visible: true,
                    headerName: col.path.split('.').pop() || col.path,
                    // Use 'auto' to enable type-based smart defaults at render time
                    sortable: 'auto' as const,
                    filterable: 'auto' as const,
                }));

            const merged = [...preserved, ...newColumns];

            setEditedColumns(merged);
            editedColumnsRef.current = merged;

            // Auto-select first column if none is selected yet.
            // Functional setter avoids capturing selectedPath in the dependency array.
            setSelectedPath(prev => (prev === null && merged.length > 0 ? merged[0].path : prev));
        } catch (error) {
            // Handle errors during discovery and show alert to user
            const message = error instanceof Error ? error.message : 'Failed to discover columns';
            setDiscoveryError(message);
        } finally {
            setLoading(false);
        }
    }, [data, socket]);

    // Keep ref in sync with the latest discoverColumns callback (must be an effect, not a render side-effect)
    useEffect(() => {
        discoverColumnsRef.current = discoverColumns;
    }, [discoverColumns]);

    // Keep editedColumnsRef in sync with editedColumns state for use in async callbacks
    useEffect(() => {
        editedColumnsRef.current = editedColumns;
    }, [editedColumns]);

    // Update a column in the edited list
    const handleColumnChange = useCallback((updated: ColumnConfigEntry) => {
        setEditedColumns(prev => prev.map(c => (c.path === updated.path ? updated : c)));
    }, []);

    // Handle list-level changes (bulk visibility, etc.)
    const handleListChange = useCallback((updatedColumns: ColumnConfigEntry[]) => {
        setEditedColumns(updatedColumns);
    }, []);

    // Save and close
    const handleSave = useCallback(() => {
        onSave(editedColumns);
        onClose();
    }, [editedColumns, onSave, onClose]);

    // Handle close — discard changes silently and close
    const handleClose = useCallback(
        (_event?: object, reason?: string) => {
            // Prevent close on backdrop click when there are unsaved changes
            if (reason === 'backdropClick' && hasChanges) {
                setShowUnsavedWarning(true);
                return;
            }
            onClose();
        },
        [hasChanges, onClose],
    );

    // Currently selected column for the detail editor (memoized to avoid recomputation on every render)
    const selectedColumn = useMemo(
        () => (selectedPath ? editedColumns.find(c => c.path === selectedPath) : null),
        [selectedPath, editedColumns],
    );
    const selectedDiscovered = useMemo(
        () => (selectedPath ? discoveredColumns.find(c => c.path === selectedPath) : undefined),
        [selectedPath, discoveredColumns],
    );

    // Memoize dialog title id for aria-labelledby
    const dialogTitleId = useMemo(() => 'json-table-column-editor-title', []);

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                aria-labelledby={dialogTitleId}
                slotProps={{
                    paper: {
                        sx: {
                            height: '80vh',
                            maxHeight: '900px',
                        },
                    },
                }}
            >
                <DialogTitle
                    sx={{ py: 1.5, px: 2.5 }}
                    id={dialogTitleId}
                >
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
                            aria-label={Generic.t('close')}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent
                    dividers
                    sx={{ p: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                >
                    {/* Discovery Error Alert */}
                    {discoveryError && (
                        <Alert
                            severity="error"
                            onClose={() => setDiscoveryError(null)}
                            sx={{ mx: 2, mt: 2 }}
                        >
                            {discoveryError}
                        </Alert>
                    )}
                    {/* Main Content - Flex Row */}
                    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
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
                                    globalSorting={data.tableSorting as boolean}
                                    globalFiltering={data.tableFiltering as boolean}
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
            <Snackbar
                open={showUnsavedWarning}
                autoHideDuration={3000}
                onClose={() => setShowUnsavedWarning(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="warning"
                    onClose={() => setShowUnsavedWarning(false)}
                >
                    {Generic.t('json_table_unsaved_changes')}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}

export default JsonTableColumnEditorModal;
