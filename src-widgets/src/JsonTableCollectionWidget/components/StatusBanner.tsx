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

/** Props for the StatusChip component. */
interface StatusChipProps {
    /** The i18n key of the capability's name */
    featureLabel: string;
    /** Whether the capability is on */
    on: boolean;
}

/** One capability's status: green checkmark when on, grey cross when off. */
function StatusChip({ featureLabel, on }: StatusChipProps): React.JSX.Element {
    return (
        <Chip
            size="small"
            icon={on ? <CheckIcon /> : <CloseIcon />}
            label={`${Generic.t(featureLabel)}: ${on ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}`}
            color={on ? 'success' : 'default'}
            variant="outlined"
            sx={{ fontSize: '0.7rem' }}
        />
    );
}

/**
 * Renders a compact status banner showing the table-wide capabilities.
 *
 * Displays sorting, filtering and hiding status with visual indicators:
 * - Green checkmark for enabled features
 * - Grey cross for disabled features
 */
function StatusBanner({ capabilities }: StatusBannerProps): React.JSX.Element {
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
                {Generic.t('json_table_capabilities_status')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <StatusChip
                    featureLabel="json_table_sorting"
                    on={capabilities.sorting}
                />
                <StatusChip
                    featureLabel="json_table_filtering"
                    on={capabilities.columnFiltering}
                />
                <StatusChip
                    featureLabel="json_table_hiding"
                    on={capabilities.hiding}
                />
            </Box>
        </Box>
    );
}

export default StatusBanner;
