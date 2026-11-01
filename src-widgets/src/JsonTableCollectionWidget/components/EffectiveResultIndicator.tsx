/**
 * Effective result indicator for column feature settings.
 *
 * @module JsonTableCollectionWidget/components/EffectiveResultIndicator
 * @remarks
 * Renders a column's resolved capability (sorting/filtering/hiding) as computed by
 * `../capabilities` — the same resolution the runtime uses. It computes nothing itself.
 */

import { Box, Chip, Tooltip, Typography } from '@mui/material';
import { AutoFixHigh as AutoIcon, Edit as EditIcon } from '@mui/icons-material';
import type React from 'react';

import Generic from '../../Generic';
import type { EffectiveType } from '../capabilities';

/** Props for the EffectiveResultIndicator component. */
interface EffectiveResultIndicatorProps {
    /** The column's resolved capability (table capability ∧ (override ?? type default)) */
    effective: boolean;
    /** Whether the table-wide capability is on (couplings included) */
    tableEnabled: boolean;
    /** The type default of the column's Effektiver Typ */
    typeDefault: boolean;
    /** The column-specific override (undefined/'auto' = type default, true/false = override) */
    columnOverride: boolean | 'auto' | undefined;
    /** The feature label for display (e.g., "Sorting", "Filtering") */
    featureLabel: string;
    /** The column's Effektiver Typ, named in the auto tooltip */
    columnType: EffectiveType;
}

/** Replaces `{key}` placeholders; unknown keys stay as they are. */
const interpolateTemplate = (template: string, values: Record<string, string>): string =>
    template.replace(/\{(\w+)\}/g, (match: string, key: string): string => (key in values ? values[key] : match));

/**
 * Renders an indicator showing the effective result of a feature setting.
 *
 * Displays the resolved value (on/off) and its source ("auto" or "override"); the tooltip
 * names the type default, the override, or the switched-off table capability.
 */
function EffectiveResultIndicator({
    effective,
    tableEnabled,
    typeDefault,
    columnOverride,
    featureLabel,
    columnType,
}: EffectiveResultIndicatorProps): React.JSX.Element {
    const isOverride = columnOverride === true || columnOverride === false;
    const sourceKey = isOverride ? 'json_table_source_override' : 'json_table_source_auto';

    let tooltipContent: string;
    if (!tableEnabled) {
        tooltipContent = interpolateTemplate(Generic.t('json_table_table_off_tooltip'), { feature: featureLabel });
    } else if (isOverride) {
        tooltipContent = interpolateTemplate(Generic.t('json_table_override_tooltip'), { feature: featureLabel });
    } else {
        tooltipContent = interpolateTemplate(Generic.t('json_table_auto_tooltip'), {
            feature: featureLabel,
            smart: typeDefault ? Generic.t('json_table_status_on') : Generic.t('json_table_status_off'),
            type: columnType,
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
                    {!isOverride && <AutoIcon sx={{ fontSize: 12, ml: 0.25 }} />}
                    {isOverride && <EditIcon sx={{ fontSize: 12, ml: 0.25 }} />}
                </Typography>
            </Box>
        </Tooltip>
    );
}

export default EffectiveResultIndicator;
