/**
 * The shared value-text typography of the Collection widgets.
 *
 * @module components/CollectionValueText
 * @remarks
 * One definition of the formatted-value typography the Wert-Anzeige cluster
 * ({@link module:components/CollectionValueDisplay}) renders centered and the
 * Checkbox renders as its label: gradient-text clip, break/hyphen rules, HTML
 * passthrough through the left-aligned inline-block wrapper. Pure rendering
 * over already-resolved presentation values (ADR-0004 — colour RESOLUTION
 * stays at the field/resolver, this module draws what it is handed). Consumer
 * deltas (the checkbox label's flex-start alignment and wider right padding)
 * ride in through `sx`, layered over the frozen base as the LAST spread.
 */

import { Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import type { JSX } from 'react';

import { gradientColor } from '../lib/helper/gradientColor';

import type { StyleData } from '../hooks/useData/types';

/**
 * Props for {@link module:components/CollectionValueText.default}.
 */
export interface CollectionValueTextProps {
    /** Resolved font size (StyleData.valueSize). */
    valueSize: StyleData['valueSize'];
    /** Resolved text colour (StyleData.textColor) — gradient strings clip. */
    textColor: StyleData['textColor'];
    /** Formatted display value (may contain HTML). */
    contentValue: string;
    /** Consumer deltas layered over the frozen base (alignment, padding). */
    sx?: SxProps<Theme>;
}

/**
 * Renders the value typography.
 *
 * @param props - See {@link CollectionValueTextProps}.
 * @param props.valueSize - Resolved font size (StyleData.valueSize).
 * @param props.textColor - Resolved text colour — gradient strings clip.
 * @param props.contentValue - Formatted display value (may contain HTML).
 * @param props.sx - Consumer deltas layered over the frozen base.
 * @returns The typography with the HTML content wrapped left-aligned.
 */
const CollectionValueText = ({ valueSize, textColor, contentValue, sx }: CollectionValueTextProps): JSX.Element => (
    <Typography
        component="div"
        variant="body2"
        sx={{
            fontSize: valueSize,
            textAlign: 'center',
            bgcolor: 'transparent',

            background: gradientColor(textColor),
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: gradientColor(textColor) ? 'transparent' : textColor,

            textTransform: 'none',
            px: 1,
            pl: 0,
            pr: 1,
            width: '100%',
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            hyphens: 'auto',
            '& > div': {
                textAlign: 'left',
                display: 'inline-block',
            },
            ...sx,
        }}
        dangerouslySetInnerHTML={{
            __html: `<div style="text-align: left; display: inline-block;">${contentValue || ''}</div>`,
        }}
    />
);

export default CollectionValueText;
