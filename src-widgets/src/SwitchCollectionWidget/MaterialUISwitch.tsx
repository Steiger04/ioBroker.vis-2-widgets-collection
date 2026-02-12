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
