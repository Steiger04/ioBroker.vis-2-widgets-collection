import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { resolveSwitchColors } from '../lib/switchColorContract';
import { THUMB_SIZE_DEFAULT } from '../lib/switchFields';
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
 * Callback-only props that must never reach the DOM.
 *
 * @remarks
 * MUI v6 does not filter custom props anymore: `rootShouldForwardProp` only
 * strips `ownerState/theme/sx/as/classes` (`@emotion/is-prop-valid` is gone),
 * so without this filter `maxHeight` leaks onto the root span with a React
 * dev warning and the `data`/`widget` objects serialize as
 * `[object Object]` attributes. The filter controls DOM forwarding only —
 * the styled callback still receives all four props.
 */
const CALLBACK_ONLY_PROPS = new Set<PropertyKey>(['width', 'maxHeight', 'data', 'widget']);

/**
 * Switch thumb styling: pure mapping over the measured geometry.
 *
 * @remarks
 * The travel math and the checked input offset come from the pure functions in
 * {@link module:widgets/SwitchCollectionWidget/geometry} (tested there); this
 * callback only assembles CSS. The thumb and track colours and the track alpha come
 * from `resolveSwitchColors` ({@link module:lib/switchColorContract}, tested there):
 * the same contracts the colour fields' swatches resolve, with the MUI Switch
 * defaults, the fixed track alpha and the Sperre painted explicitly — MUI's own
 * checked/disabled thumb colour (`currentColor`) and track styling no longer decide.
 * Both track rules hang off the switch base (`:not(.Mui-checked)` / `.Mui-checked`
 * `+ .MuiSwitch-track`), which outranks MUI's `.Mui-checked` / `.Mui-disabled + track`
 * rules by specificity, whatever the stylesheet order. The icon overlay differs
 * between the states only in its fallback colour.
 */
const MaterialUISwitch = styled(Switch, {
    shouldForwardProp: prop => !CALLBACK_ONLY_PROPS.has(prop),
})<MaterialUISwitchProps>(({ width, maxHeight, data, widget, theme, disabled }) => {
    // Single source: the schema default in lib/switchFields.tsx
    const thumbSize = widget.data.thumbSize ?? THUMB_SIZE_DEFAULT;
    // Sperre = the switch's `disabled` (SwitchCollection passes the OID binding's `locked`).
    const colors = resolveSwitchColors(widget.data, theme, Boolean(disabled));
    const travel = resolveThumbTravel(thumbSize, maxHeight);
    const inputWidth = width || 0;

    /** The track of one state: its colour (as stored, gradients too) and MUI's fixed alpha. */
    const track = (state: { track: string; trackAlpha: number }): CSSObject => ({
        background: state.track,
        opacity: state.trackAlpha,
    });

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

            '&:not(.Mui-checked) + .MuiSwitch-track': track(colors.off),

            '&.Mui-checked': {
                top: '50%',
                left: '100%',
                transform: `translate(-50%, -50%) translateX(${-travel}px)`,

                '& .MuiSwitch-input': {
                    left: resolveCheckedInputLeft(width, thumbSize),
                    width: inputWidth,
                },

                '& .MuiSwitch-thumb': {
                    background: colors.on.thumb,

                    '&::before': iconOverlay(theme.palette.primary.dark),
                },

                '& + .MuiSwitch-track': track(colors.on),
            },
        },

        '& .MuiSwitch-thumb': {
            background: colors.off.thumb,

            width: thumbSize,
            maxWidth: maxHeight,
            height: thumbSize,
            maxHeight: maxHeight,

            '&::before': iconOverlay(theme.palette.primary.main),
        },
    };
});

export default MaterialUISwitch;
