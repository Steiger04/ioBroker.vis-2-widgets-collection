/**
 * Status banner displaying global table feature settings.
 *
 * @module JsonTableCollectionWidget/components/StatusBanner
 * @remarks
 * Shows the table-wide Tabellen-Fähigkeiten behind the per-column overrides — the resolved
 * set (couplings included), not the raw settings.
 */

import { Box, Chip, Typography } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import type React from 'react';

import Generic from '../../Generic';
import type { TableCapabilities } from '../capabilities';

/** Props for the StatusBanner component. */
interface StatusBannerProps {
    /** The resolved Tabellen-Fähigkeiten */
    capabilities: Pick<TableCapabilities, 'sorting' | 'columnFiltering' | 'hiding'>;
}

/**
 * Renders a compact status banner showing the table-wide capabilities.
 *
 * Displays sorting, filtering and hiding status with visual indicators:
 * - Green checkmark for enabled features
 * - Red cross for disabled features
 */
function StatusBanner({ capabilities }: StatusBannerProps): React.JSX.Element {
    const { sorting: globalSorting, columnFiltering: globalFiltering, hiding: globalHiding } = capabilities;
    return (
        <Box
            sx={{
                p: 1,
                mb: 2,
                bgcolor: 'action.hover',
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
            }}
        >
            <Typography
                variant="caption"
                sx={{ fontWeight: 500, display: 'block', mb: 0.5 }}
            >
                {Generic.t('json_table_global_status')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                    size="small"
                    icon={globalSorting ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_sorting')}: ${globalSorting ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={globalSorting ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
                <Chip
                    size="small"
                    icon={globalFiltering ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_filtering')}: ${globalFiltering ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={globalFiltering ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
                <Chip
                    size="small"
                    icon={globalHiding ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_hiding')}: ${globalHiding ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={globalHiding ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
            </Box>
        </Box>
    );
}

export default StatusBanner;
