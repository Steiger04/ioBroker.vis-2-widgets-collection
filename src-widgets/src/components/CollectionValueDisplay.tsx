/**
 * The shared icon + value display cluster of the Collection widgets.
 *
 * @module components/CollectionValueDisplay
 * @remarks
 * Whatever is present (icon, value, or both) renders centered as one group —
 * the presentation cluster State and Input used to carry as two verbatim
 * ~95-line copies. Pure rendering over the ALREADY RESOLVED presentation data
 * (`StyleData` from useData): colour resolution stays at the field/resolver
 * (ADR-0004), this module draws what it is handed. Interaction (click-to-edit,
 * state cycling) stays with the consumer — it wraps this cluster in its own
 * clickable Box/Button.
 */

import { Avatar, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { JSX } from 'react';

import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { StyleData } from '../hooks/useData/types';

/**
 * Props for {@link module:components/CollectionValueDisplay.default}.
 */
export interface CollectionValueDisplayProps {
    /** Presentation data produced by {@link module:hooks/useData} (icon, colors, sizes, offsets). */
    data: StyleData;
    /** Formatted display value (alias → value → oidValue+unit; may contain HTML). */
    contentValue: string;
    /** Hide the icon (the widget's `noIcon` flag). */
    noIcon?: boolean;
    /** Hide the value text (the widget's `noValue` flag). */
    noValue?: boolean;
}

/**
 * Renders the centered icon + value group.
 *
 * @param props - Display props.
 * @param props.data - Presentation data from useData.
 * @param props.contentValue - Formatted display value (may contain HTML).
 * @param props.noIcon - Hide the icon (the widget's `noIcon` flag).
 * @param props.noValue - Hide the value text (the widget's `noValue` flag).
 * @returns The icon/value cluster (icon and value each gated by their flag).
 */
const CollectionValueDisplay = ({
    data,
    contentValue,
    noIcon = false,
    noValue = false,
}: CollectionValueDisplayProps): JSX.Element => {
    const theme = useTheme();

    const showIcon = !noIcon && Boolean(data.icon);
    const iconSrc = data.icon;
    const iconColor = data.iconColor || theme.palette.primary.main;
    const iconStyles = getIconColorStyles(iconSrc, iconColor, Boolean(data.forceColorMask));
    const textColor = data.textColor;

    return (
        <>
            {showIcon && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,

                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Avatar
                        variant="square"
                        src={iconSrc || undefined}
                        slotProps={{
                            img: {
                                style: {
                                    objectFit: 'contain',
                                    ...iconStyles,
                                },
                            },
                        }}
                        sx={{
                            overflow: 'visible',

                            width: data.iconSizeOnly,
                            height: data.iconSizeOnly,

                            left: `calc(0px + ${data.iconXOffset})`,
                            top: `calc(0px - ${data.iconYOffset})`,
                        }}
                    />
                </Box>
            )}
            {!noValue && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,

                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Typography
                        component={Box}
                        variant="body2"
                        sx={{
                            fontSize: data.valueSize,
                            textAlign: 'center', // For HTML content with tags
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
                            alignItems: 'center', // Vertical centering
                            justifyContent: 'center', // Horizontal centering of text block
                            overflowWrap: 'break-word', // Modern CSS property for word wrapping
                            wordBreak: 'break-word', // Additional protection for long words
                            whiteSpace: 'normal', // Allows line breaks
                            hyphens: 'auto', // Automatic hyphenation when supported
                            '& > div': {
                                textAlign: 'left', // Left-aligned lines for breaks in HTML
                                display: 'inline-block',
                            },
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `<div style="text-align: left; display: inline-block;">${contentValue || ''}</div>`,
                        }}
                    />
                </Box>
            )}
        </>
    );
};

export default CollectionValueDisplay;
