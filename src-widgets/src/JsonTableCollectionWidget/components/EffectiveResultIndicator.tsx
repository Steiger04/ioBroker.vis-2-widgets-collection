/**
 * Effective result indicator for column feature settings.
 *
 * @module JsonTableCollectionWidget/components/EffectiveResultIndicator
 * @remarks
 * Shows the effective result of a column feature (sorting/filtering)
 * considering both global settings and per-column overrides.
 * Supports 'auto' mode for type-based smart defaults.
 */

import { Box, Chip, Tooltip, Typography } from '@mui/material';
import { AutoFixHigh as AutoIcon, Edit as EditIcon } from '@mui/icons-material';
import type React from 'react';

import Generic from '../../Generic';
import { getSmartDefaults } from '../utils/columnDefinitions';

/** Props for the EffectiveResultIndicator component. */
interface EffectiveResultIndicatorProps {
    /** Whether the global feature is enabled */
    globalEnabled: boolean;
    /** The column-specific override (undefined/'auto' = use smart defaults, true/false = override) */
    columnOverride: boolean | 'auto' | undefined;
    /** The feature label for display (e.g., "Sorting", "Filtering") */
    featureLabel: string;
    /** The detected column type for smart defaults */
    detectedType?: string;
    /** Which feature to show smart defaults for ('sortable' or 'filterable') */
    featureType?: 'sortable' | 'filterable';
}

/**
 * Renders an indicator showing the effective result of a feature setting.
 *
 * Calculates and displays:
 * - The effective value (true/false) based on override, smart defaults, or global
 * - The source of the value ("auto", "global", or "override")
 * - Visual distinction between inherited and overridden values
 */
function EffectiveResultIndicator({
    globalEnabled,
    columnOverride,
    featureLabel,
    detectedType = 'string',
    featureType = 'sortable',
}: EffectiveResultIndicatorProps): React.JSX.Element {
    // Determine if we're using auto mode
    const isAutoMode = columnOverride === 'auto' || columnOverride === undefined;

    // Get smart defaults for the detected type
    const smartDefaults = getSmartDefaults(detectedType);
    const smartValue = featureType === 'sortable' ? smartDefaults.sortable : smartDefaults.filterable;

    // Calculate effective value
    let effective: boolean;
    let sourceKey: string;

    if (columnOverride === 'auto' || columnOverride === undefined) {
        // Use smart defaults combined with global setting
        effective = smartValue && globalEnabled;
        sourceKey = 'json_table_source_auto';
    } else {
        // Use explicit override
        effective = columnOverride;
        sourceKey = 'json_table_source_override';
    }

    // Determine the source of the effective value
    const isOverride = columnOverride !== undefined && columnOverride !== 'auto';

    // Build tooltip content with safe interpolation
    const interpolateTemplate = (template: string, values: Record<string, string>): string => {
        return template.replace(/\{(\w+)\}/g, (match: string, key: string): string => {
            if (key in values) {
                return values[key];
            }
            // Return original match if key not found (graceful degradation)
            return match;
        });
    };

    let tooltipContent: string;
    if (columnOverride === 'auto' || columnOverride === undefined) {
        tooltipContent = interpolateTemplate(Generic.t('json_table_auto_tooltip'), {
            feature: featureLabel,
            smart: smartValue ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off'),
            type: detectedType,
        });
    } else {
        tooltipContent = interpolateTemplate(Generic.t('json_table_override_tooltip'), {
            feature: featureLabel,
        });
    }

    return (
        <Tooltip
            title={tooltipContent}
            arrow
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    ml: 'auto',
                    cursor: 'help',
                }}
            >
                <Chip
                    size="small"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {effective ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off')}
                        </Box>
                    }
                    color={effective ? 'success' : 'default'}
                    variant={isOverride ? 'filled' : 'outlined'}
                    sx={{
                        height: 20,
                        fontSize: '0.65rem',
                        '& .MuiChip-label': { px: 0.75 },
                    }}
                />
                <Typography
                    variant="caption"
                    color={isOverride ? 'warning.main' : 'text.secondary'}
                    sx={{ fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: 0.25 }}
                >
                    {Generic.t(sourceKey)}
                    {isAutoMode && <AutoIcon sx={{ fontSize: 12, ml: 0.25 }} />}
                    {isOverride && <EditIcon sx={{ fontSize: 12, ml: 0.25 }} />}
                </Typography>
            </Box>
        </Tooltip>
    );
}

export default EffectiveResultIndicator;
