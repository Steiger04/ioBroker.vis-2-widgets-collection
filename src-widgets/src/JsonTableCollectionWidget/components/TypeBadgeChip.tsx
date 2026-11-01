/**
 * The type badge of the column editor as a chip.
 *
 * @module JsonTableCollectionWidget/components/TypeBadgeChip
 * @remarks
 * Shows the Effektiver Typ in its colour; where the Format type overrides the Detected
 * type, the tooltip and the accessible label name the Detected type too (`./typeBadge`).
 */

import { Chip, Tooltip, type SxProps, type Theme } from '@mui/material';
import type React from 'react';

import { translate } from '../translate';
import { TYPE_COLORS } from '../utils/columnConfig';
import { typeBadgeText, type TypeBadge } from './typeBadge';

/** Props for the TypeBadgeChip component. */
interface TypeBadgeChipProps {
    /** What the badge shows (`typeBadgeOf`). */
    badge: TypeBadge;
    /** Size and spacing of the chip at its place. */
    sx?: SxProps<Theme>;
}

/** Renders the type badge of a Column. */
function TypeBadgeChip({ badge, sx }: TypeBadgeChipProps): React.JSX.Element {
    const { tooltip, ariaLabel } = typeBadgeText(badge, translate);
    const chip = (
        <Chip
            label={badge.type}
            size="small"
            aria-label={ariaLabel}
            sx={[
                { backgroundColor: TYPE_COLORS[badge.type] || TYPE_COLORS.string, color: '#fff', fontWeight: 600 },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        />
    );
    return tooltip === null ? chip : <Tooltip title={tooltip}>{chip}</Tooltip>;
}

export default TypeBadgeChip;
