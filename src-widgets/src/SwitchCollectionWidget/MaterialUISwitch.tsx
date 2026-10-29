import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { resolveCheckedInputLeft, resolveThumbTravel } from './geometry';
import type { SwitchCollectionContextProps } from '../types';
import type { StyleData } from '../hooks/useData';
import type { CSSObject } from '@mui/material/styles';

interface MaterialUISwitchProps {
    /** Measured container width (px). */
    width?: number;
    /** Max thumb height (px). */
    maxHeight?: number;
    /** Presentation data computed by {@link module:hooks/useData}. */
    data: StyleData;
    /** Widget instance (used for reading switch config fields). */
    widget: SwitchCollectionContextProps['widget'];
}

/**
 * Switch thumb styling: pure mapping over the measured geometry.
 *
 * @remarks
 * The travel math and the checked input offset come from the pure functions in
 * {@link module:widgets/SwitchCollectionWidget/geometry} (tested there); this
 * callback only assembles CSS. Behaviour frozen: the thumb-color fields fall
 * back to the MUI Switch defaults (checked thumb is primary.main anyway), the
 * icon overlay differs between the states only in its fallback colour.
 */
const MaterialUISwitch = styled(Switch)<MaterialUISwitchProps>(({ width, maxHeight, data, widget, theme }) => {
    // Mirrors the editor field default in lib/switchFields.tsx
    const thumbSize = widget.data.thumbSize ?? 62;
    const travel = resolveThumbTravel(thumbSize, maxHeight);
    const inputWidth = width || 0;

    /** The icon overlay pseudo-element; only the fallback colour varies by state. */
    const iconOverlay = (fallbackColor: string): CSSObject => ({
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
        ...getIconColorStyles(data.icon, data.iconColor || fallbackColor, data.forceColorMask),
    });

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
            transform: `translate(-50%, -50%) translateX(${travel}px)`,

            '& .MuiSwitch-input': {
                left: 0,
                width: inputWidth,
            },

            '&.Mui-checked': {
                top: '50%',
                left: '100%',
                transform: `translate(-50%, -50%) translateX(${-travel}px)`,

                '& .MuiSwitch-input': {
                    left: resolveCheckedInputLeft(width, thumbSize),
                    width: inputWidth,
                },

                '& .MuiSwitch-thumb': {
                    background: widget.data.thumbColorTrue,

                    '&::before': iconOverlay(theme.palette.primary.dark),
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
            maxWidth: maxHeight,
            height: thumbSize,
            maxHeight: maxHeight,

            '&::before': iconOverlay(theme.palette.primary.main),
        },
    };
});

export default MaterialUISwitch;
