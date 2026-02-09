/**
 * MUI Switch variant used by the Switch Collection widget.
 *
 * @module widgets/MaterialUISwitch
 * @remarks
 * This is a styled wrapper around MUI's `Switch` that supports:
 * - dynamic sizing based on the widget container
 * - configurable thumb/track colors
 * - optional icon rendering inside the thumb
 */

import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import type { SwitchCollectionContextProps } from '../types';
import type { StyleData } from '../hooks/useData';

interface MaterialUISwitchProps {
    /** Measured container width (px). */
    width?: number;
    /** Max thumb height (px). */
    maxheight?: number;
    /** Presentation data computed by {@link module:hooks/useData}. */
    data: StyleData;
    /** Widget instance (used for reading switch config fields). */
    widget: SwitchCollectionContextProps['widget'];
}

/**
 * Validates a string against common CSS color formats.
 *
 * @param str - Candidate color string.
 * @returns `true` when the format looks like a CSS color.
 */
/* function isValidColorFormat(str: string): boolean {
    const patterns = [
        /^#([0-9a-fA-F]{3})$/, // #nnn
        /^#([0-9a-fA-F]{6})$/, // #nnnnnn
        /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/, // rgb(r, g, b)
        /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0|1|0?\.\d+)\s*\)$/, // rgba(r, g, b, a)
        /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/, // hsl(h, s%, l%)
        /^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*(0|1|0?\.\d+)\s*\)$/, // hsla(h, s%, l%, a)
        /^color\(\s*[\w-]+\s+(?:\d+(\.\d+)?%?\s*)+\)$/, // basic CSS4 color() check
    ];

    return patterns.some(pattern => pattern.test(str));
} */

const MaterialUISwitch = styled(Switch)<MaterialUISwitchProps>(({ width, maxheight, data, widget, theme }) => {
    const thumbSize = widget.data.thumbSize ?? 62;

    return {
        width: '100%',
        height: '100%',

        padding: 0,
        margin: 0,

        '&.MuiSwitch-root': {
            overflow: 'visible',
        },

        '& .MuiSwitch-switchBase': {
            margin: 0,
            padding: 0,

            top: '50%',
            left: '0%',
            transform: `translate(-50%, -50%) translateX(${(maxheight || 0) >= thumbSize ? thumbSize / 2 - 4 : (maxheight || 0) / 2 - 4}px)`,

            '& .MuiSwitch-input': {
                left: 0,
                width: width || 0,
            },

            '&.Mui-checked': {
                top: '50%',
                left: '100%',
                transform: `translate(-50%, -50%) translateX(${(maxheight || 0) >= thumbSize ? -(thumbSize / 2 - 4) : -((maxheight || 0) / 2 - 4)}px)`,

                '& .MuiSwitch-input': {
                    left: -(width || 0) + thumbSize,
                    width: width || 0,
                },

                '& .MuiSwitch-thumb': {
                    background: widget.data.thumbColorTrue || theme.palette.primary.main,
                },

                '& .MuiSwitch-thumb:before': {
                    top: `calc(${data.iconYOffset} * -1)`,
                    left: data.iconXOffset,

                    backgroundSize: data.iconSizeOnly,
                    backgroundImage: `url('${data.icon}')`,
                    ...getIconColorStyles(data.icon, data.iconColor || theme.palette.primary.dark, data.forceColorMask),
                },

                '& + .MuiSwitch-track': {
                    background: widget.data.trackColor,
                },
            },
        },

        '& .MuiSwitch-track': {
            background: widget.data.trackColor,
        },

        '& .MuiSwitch-thumb': {
            background: widget.data.thumbColorFalse,

            width: thumbSize,
            maxWidth: maxheight,
            height: thumbSize,
            maxHeight: maxheight,

            '&::before': {
                content: "''",
                position: 'absolute',

                width: '100%',
                height: '100%',

                left: `calc(0px + ${data.iconXOffset})`,
                top: `calc(0px - ${data.iconYOffset})`,

                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

                backgroundSize: data.iconSizeOnly,
                backgroundImage: `url('${data.icon}')`,
                ...getIconColorStyles(data.icon, data.iconColor || theme.palette.primary.main, data.forceColorMask),
            },
        },
    };
});

export default MaterialUISwitch;
