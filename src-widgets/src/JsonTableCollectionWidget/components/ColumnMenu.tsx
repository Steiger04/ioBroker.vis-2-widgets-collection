/**
 * Column header context menu for sorting and filtering actions.
 *
 * @module JsonTableCollectionWidget/components/ColumnMenu
 * @remarks
 * Renders a context menu for column headers with conditional visibility
 * based on column capabilities (sortable, filterable).
 * Only displays menu items that are actually available for the active column.
 */

import { Divider, Menu, MenuItem, Typography } from '@mui/material';
import {
    ArrowUpward as ArrowUpwardIcon,
    ArrowDownward as ArrowDownwardIcon,
    Clear as ClearIcon,
} from '@mui/icons-material';
import type React from 'react';

import Generic from '../../Generic';

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
        /** Set a filter value on the column */
        setFilterValue: (value: unknown) => void;
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
}

/**
 * Renders a context menu for column headers with sorting and filtering actions.
 *
 * Features:
 * - Conditionally renders menu items based on column capabilities
 * - Shows sort options only if column is sortable
 * - Shows filter clear option only if filtering is enabled and column has a filter
 * - Adds visual separator between sort and filter actions when both are present
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
}: ColumnMenuProps): React.JSX.Element | null {
    // Check which menu items are visible to conditionally render the menu
    const canSort = activeColumn?.getCanSort() === true;
    const canFilter = tableFiltering && activeColumn?.getCanFilter() === true && activeColumnFilter !== undefined;
    const hasVisibleItems = canSort || canFilter;

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

    const handleClearFilter = (): void => {
        activeColumn?.setFilterValue(undefined);
        onClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            {canSort && (
                <>
                    <MenuItem onClick={handleSortAsc}>
                        <ArrowUpwardIcon
                            fontSize="small"
                            sx={{ mr: 1 }}
                        />
                        <Typography variant="body2">{Generic.t('json_table_sort_asc')}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleSortDesc}>
                        <ArrowDownwardIcon
                            fontSize="small"
                            sx={{ mr: 1 }}
                        />
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
                <MenuItem onClick={handleClearFilter}>
                    <ClearIcon
                        fontSize="small"
                        sx={{ mr: 1 }}
                    />
                    <Typography variant="body2">{Generic.t('json_table_filter_clear')}</Typography>
                </MenuItem>
            )}
        </Menu>
    );
}

export default ColumnMenu;
