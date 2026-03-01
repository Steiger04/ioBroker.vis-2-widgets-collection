/**
 * Column header context menu for sorting, filtering, and hiding actions.
 *
 * @module JsonTableCollectionWidget/components/ColumnMenu
 * @remarks
 * Renders a context menu for column headers with conditional visibility
 * based on column capabilities (sortable, filterable, hideable).
 * Only displays menu items that are actually available for the active column.
 * Includes a filter dialog for advanced filter configuration.
 */

import { Divider, Menu, MenuItem, Typography, ListItemIcon } from '@mui/material';
import {
    ArrowUpward as ArrowUpwardIcon,
    ArrowDownward as ArrowDownwardIcon,
    Clear as ClearIcon,
    VisibilityOff as VisibilityOffIcon,
    FilterList as FilterListIcon,
} from '@mui/icons-material';
import type React from 'react';
import { useState } from 'react';

import Generic from '../../Generic';
import FilterDialog from './FilterDialog';

/** Props for the ColumnMenu component. */
export interface ColumnMenuProps {
    /** DOM element to anchor the menu to */
    anchorEl: HTMLElement | null;
    /** Whether the menu is open */
    open: boolean;
    /** Callback when menu should close */
    onClose: () => void;
    /** Ref to the currently active column for capability checks */
    activeColumn: {
        /** Column identifier */
        id: string;
        /** Whether the column can be sorted */
        getCanSort: () => boolean;
        /** Whether the column can be filtered */
        getCanFilter: () => boolean;
        /** Whether the column can be hidden */
        getCanHide?: () => boolean;
        /** Set a filter value on the column */
        setFilterValue: (value: unknown) => void;
        /** Get the current filter value */
        getFilterValue?: () => unknown;
        /** Toggle column visibility */
        toggleVisibility?: (value?: boolean) => void;
        /** Column definition with meta containing columnType */
        columnDef?: {
            meta?: {
                columnType?: string;
            };
        };
    } | null;
    /** Whether the column is currently sorted */
    isSorted: boolean;
    /** Whether global table filtering is enabled */
    tableFiltering: boolean;
    /** Current filter value on the active column (undefined means no filter) */
    activeColumnFilter: unknown;
    /** Callback to set sorting state */
    onSetSorting: (sorting: { id: string; desc: boolean }[]) => void;
    /** Callback to clear sorting for a specific column */
    onClearSorting: (columnId: string) => void;
    /** Callback to show all columns (reset visibility) */
    onShowAllColumns?: () => void;
    /** Whether any columns are currently hidden */
    hasHiddenColumns?: boolean;
}

/**
 * Renders a context menu for column headers with sorting, filtering, and hiding actions.
 *
 * Features:
 * - Conditionally renders menu items based on column capabilities
 * - Shows sort options only if column is sortable
 * - Shows filter options only if filtering is enabled and column is filterable
 * - Shows hide option only if column can be hidden
 * - Includes filter dialog for advanced filter configuration
 */
function ColumnMenu({
    anchorEl,
    open,
    onClose,
    activeColumn,
    isSorted,
    tableFiltering,
    activeColumnFilter,
    onSetSorting,
    onClearSorting,
    onShowAllColumns,
    hasHiddenColumns,
}: ColumnMenuProps): React.JSX.Element | null {
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);

    // Check which menu items are visible to conditionally render the menu
    const canSort = activeColumn?.getCanSort?.() === true;
    const canFilter = tableFiltering && activeColumn?.getCanFilter?.() === true;
    const canHide = activeColumn?.getCanHide?.() === true;
    const hasFilter = activeColumnFilter !== undefined && activeColumnFilter !== null;

    const hasVisibleItems = canSort || canFilter || canHide;

    if (!hasVisibleItems) {
        return null;
    }

    const handleSortAsc = (): void => {
        if (activeColumn) {
            onSetSorting([{ id: activeColumn.id, desc: false }]);
        }
        onClose();
    };

    const handleSortDesc = (): void => {
        if (activeColumn) {
            onSetSorting([{ id: activeColumn.id, desc: true }]);
        }
        onClose();
    };

    const handleClearSort = (): void => {
        if (activeColumn) {
            onClearSorting(activeColumn.id);
        }
        onClose();
    };

    const handleOpenFilterDialog = (): void => {
        setFilterDialogOpen(true);
    };

    const handleCloseFilterDialog = (): void => {
        setFilterDialogOpen(false);
    };

    const handleApplyFilter = (value: unknown): void => {
        activeColumn?.setFilterValue(value);
        setFilterDialogOpen(false);
        onClose();
    };

    const handleClearFilter = (): void => {
        activeColumn?.setFilterValue(undefined);
        onClose();
    };

    const handleHideColumn = (): void => {
        activeColumn?.toggleVisibility?.(false);
        onClose();
    };

    const handleShowAllColumns = (): void => {
        onShowAllColumns?.();
        onClose();
    };

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
            >
                {canSort && (
                    <>
                        <MenuItem onClick={handleSortAsc}>
                            <ListItemIcon>
                                <ArrowUpwardIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="body2">{Generic.t('json_table_sort_asc')}</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleSortDesc}>
                            <ListItemIcon>
                                <ArrowDownwardIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="body2">{Generic.t('json_table_sort_desc')}</Typography>
                        </MenuItem>
                        {isSorted && (
                            <MenuItem onClick={handleClearSort}>
                                <Typography variant="body2">{Generic.t('json_table_sort_clear')}</Typography>
                            </MenuItem>
                        )}
                    </>
                )}
                {canSort && canFilter && <Divider />}
                {canFilter && (
                    <>
                        <MenuItem onClick={handleOpenFilterDialog}>
                            <ListItemIcon>
                                <FilterListIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="body2">{Generic.t('json_table_set_filter')}</Typography>
                        </MenuItem>
                        {hasFilter && (
                            <MenuItem onClick={handleClearFilter}>
                                <ListItemIcon>
                                    <ClearIcon fontSize="small" />
                                </ListItemIcon>
                                <Typography variant="body2">{Generic.t('json_table_filter_clear')}</Typography>
                            </MenuItem>
                        )}
                    </>
                )}
                {(canSort || canFilter) && canHide && <Divider />}
                {canHide && (
                    <MenuItem onClick={handleHideColumn}>
                        <ListItemIcon>
                            <VisibilityOffIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="body2">{Generic.t('json_table_hide_column')}</Typography>
                    </MenuItem>
                )}
                {hasHiddenColumns && onShowAllColumns && (
                    <MenuItem onClick={handleShowAllColumns}>
                        <Typography variant="body2">{Generic.t('json_table_show_all_columns')}</Typography>
                    </MenuItem>
                )}
            </Menu>
            {canFilter && activeColumn && filterDialogOpen && (
                <FilterDialog
                    open={filterDialogOpen}
                    onClose={handleCloseFilterDialog}
                    onApply={handleApplyFilter}
                    currentValue={activeColumn.getFilterValue?.()}
                    columnId={activeColumn.id}
                    columnType={activeColumn.columnDef?.meta?.columnType}
                />
            )}
        </>
    );
}

export default ColumnMenu;
