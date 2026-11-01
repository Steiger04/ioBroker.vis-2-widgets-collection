/**
 * Status banner showing the table-wide Tabellen-Fähigkeiten.
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
    const { sorting, columnFiltering, hiding } = capabilities;
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
                    icon={sorting ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_sorting')}: ${sorting ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={sorting ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
                <Chip
                    size="small"
                    icon={columnFiltering ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_filtering')}: ${columnFiltering ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={columnFiltering ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
                <Chip
                    size="small"
                    icon={hiding ? <CheckIcon /> : <CloseIcon />}
                    label={`${Generic.t('json_table_hiding')}: ${hiding ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
                    color={hiding ? 'success' : 'default'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                />
            </Box>
        </Box>
    );
}

export default StatusBanner;
