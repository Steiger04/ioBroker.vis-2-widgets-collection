/**
 * Compact help affordance: a "?" icon button wrapped in a tooltip.
 *
 * @module components/HelpHint
 * @remarks
 * Used for short explanatory text next to controls in the narrow studio panel:
 * the full text lives in the tooltip, so nothing gets truncated and no extra
 * layout space is consumed. The tooltip is keyboard-focusable (hover/focus).
 */

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton, Tooltip } from '@mui/material';
import type React from 'react';

/** Props for {@link HelpHint}. */
interface HelpHintProps {
    /** Tooltip content (plain text or nodes). */
    title: React.ReactNode;
}

/** Renders a compact "?" icon button wrapped in a tooltip. */
function HelpHint({ title }: HelpHintProps): React.JSX.Element {
    return (
        <Tooltip
            title={title}
            arrow
            placement="top"
            slotProps={{ tooltip: { sx: { maxWidth: 280 } } }}
        >
            <IconButton
                size="small"
                sx={{ p: 0.5 }}
                aria-label={typeof title === 'string' ? title : 'help'}
            >
                <HelpOutlineIcon
                    fontSize="small"
                    color="action"
                />
            </IconButton>
        </Tooltip>
    );
}

export default HelpHint;
