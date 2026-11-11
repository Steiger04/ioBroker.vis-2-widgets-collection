/**
 * Pure presentation chrome for the Switch collection widget — the term
 * "Schalter-Chrome".
 *
 * @module widgets/SwitchCollectionWidget/chrome
 * @remarks
 * Pattern Button-Group-Chrome: the complete sx of the MUI Switch built as data from the
 * measured geometry, the raw field values, the state's icon values, the Sperre and the
 * theme — testable without mounting the widget. It replaces the former styled() wrapper
 * (and its guard against callback props leaking into the DOM) and the former geometry
 * module, whose travel and input-offset formulas live on here as internal helpers.
 * Behaviour is frozen: every rule reproduces the former styled callback verbatim; the
 * tests pin the results. The sx carries the same selectors on the same root class as the
 * styled callback did, so the specificity is unchanged (a DOM test guards it).
 *
 * The thumb and track colours and the track alpha come from `resolveSwitchColors`
 * ({@link module:lib/switchColorContract}, tested there): the same contracts the colour
 * fields' swatches resolve, with the MUI Switch defaults, the fixed track alpha and the
 * Sperre painted explicitly — MUI's own checked/disabled thumb colour (`currentColor`) and
 * track styling no longer decide. Both track rules hang off the switch base
 * (`:not(.Mui-checked)` / `.Mui-checked` `+ .MuiSwitch-track`), which outranks MUI's
 * `.Mui-checked` / `.Mui-disabled + track` rules by specificity, whatever the stylesheet
 * order. The icon overlay is the same in both states: the thumb rule draws it on and off,
 * in the state's resolved icon colour (useData's icon colour chain ends on the primary
 * terminal, so there is no fallback); the ripple takes the same colour.
 *
 * Lengths go out as px strings: the sx engine reads a number in (0, 1] for `width`,
 * `height`, `maxWidth` and `maxHeight` as a fraction (`1` → `100%`), the styled callback
 * as px.
 */

import type { CSSObject, Theme } from '@mui/material/styles';

import type { StyleData } from '../hooks/useData';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { resolveSwitchColors } from '../lib/switchColorContract';
import type { SwitchColorData, SwitchStateColors } from '../lib/switchColorContract';
import { THUMB_SIZE_DEFAULT } from '../lib/switchFields';
import type { SwitchFieldsRxData } from '../types';

/**
 * Legacy inset subtracted from the thumb travel.
 *
 * Inherited from the original inline styling; its exact derivation (the MUI track's inner
 * edge) is no longer verifiable. The value is frozen — the chrome tests pin it.
 */
const TRAVEL_INSET_PX = 4;

/** The widget data the switch chrome reads, raw as vis-2 stores it (any key may be missing). */
export type SwitchChromeData = Readonly<Pick<SwitchFieldsRxData, 'thumbSize'> & SwitchColorData>;

/** The state's icon values the chrome reads, as useData resolves them. */
export type SwitchChromeIcon = Readonly<
    Pick<StyleData, 'icon' | 'iconSizeOnly' | 'iconXOffset' | 'iconYOffset' | 'iconColor' | 'forceColorMask'>
>;

/** Input for {@link buildSwitchChrome}. */
export interface SwitchChromeInput {
    /** Widget data (rxData): the thumb size and the fields of the switch colour contracts. */
    data: SwitchChromeData;
    /** The state's icon values (useData's StyleData): the thumb's icon overlay and the ripple colour. */
    icon: SwitchChromeIcon;
    /** Measured width of the track row (px), `undefined` while unmeasured. */
    width: number | undefined;
    /** Height budget (px): the frame's Content-Box height (ADR-0098), `undefined` while unmeasured. */
    contentBoxHeight: number | undefined;
    /** Whether the switch is locked (Sperre: only display, or not writable). */
    locked: boolean;
    /** The effective MUI theme (the collection theme). */
    theme: Theme;
}

/** The track of one state: its colour (as stored, gradients too) and MUI's fixed alpha. */
const track = (state: SwitchStateColors): CSSObject => ({
    background: state.track,
    opacity: state.trackAlpha,
});

/** The icon overlay pseudo-element, identical on and off (the thumb rule covers both). */
const iconOverlay = (icon: SwitchChromeIcon): CSSObject => ({
    content: "''",
    position: 'absolute',

    width: '100%',
    height: '100%',

    left: `calc(0px + ${icon.iconXOffset})`,
    top: `calc(0px - ${icon.iconYOffset})`,

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    backgroundSize: icon.iconSizeOnly,
    backgroundImage: `url('${icon.icon}')`,
    ...getIconColorStyles(icon.icon, icon.iconColor, icon.forceColorMask),
});

/** A length in px as a CSS string (see the module remarks on the sx number reading). */
const px = (value: number): string => `${value}px`;

/**
 * Horizontal travel magnitude of the switch base in px; negate for the checked side.
 *
 * While the thumb fits (`contentBoxHeight >= thumbSize`) it travels half its own size minus the
 * inset; once the height budget caps the thumb, half the cap minus the inset. An unmeasured
 * budget counts as `0` (first render). May go negative when the budget undercuts twice the
 * inset (legacy formula, frozen).
 */
function thumbTravel(thumbSize: number, contentBoxHeight: number | undefined): number {
    const effectiveHeight = contentBoxHeight || 0;
    const travelBase = effectiveHeight >= thumbSize ? thumbSize : effectiveHeight;
    return travelBase / 2 - TRAVEL_INSET_PX;
}

/**
 * Left offset of the invisible a11y input in the checked state, in px: keeps the native
 * input covering the track row as the base slides to the right end. An unmeasured width
 * counts as `0`.
 */
function checkedInputLeft(width: number | undefined, thumbSize: number): number {
    return -(width || 0) + thumbSize;
}

/**
 * Builds the complete sx of the MUI Switch.
 *
 * @param input - Raw field values, measured geometry, Sperre and theme.
 * @returns The switch's sx object; pass it as `<Switch sx={…}>`.
 */
export function buildSwitchChrome(input: SwitchChromeInput): CSSObject {
    const { data, icon, width, contentBoxHeight, locked, theme } = input;

    // Single source: the schema default in lib/switchFields.tsx. A numeric string (binding,
    // assistant) is a usable stored value (lib/usableWidgetData) and reads as its number.
    const stored: unknown = data.thumbSize ?? THUMB_SIZE_DEFAULT;
    const thumbSize = (typeof stored === 'string' && stored !== '' ? Number(stored) : stored) as number;
    const colors = resolveSwitchColors(data, theme, locked);
    const travel = thumbTravel(thumbSize, contentBoxHeight);
    const inputWidth = px(width || 0);
    const cap = contentBoxHeight === undefined ? undefined : px(contentBoxHeight);

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
                    left: px(checkedInputLeft(width, thumbSize)),
                    width: inputWidth,
                },

                '& .MuiSwitch-thumb': {
                    background: colors.on.thumb,
                },

                '& + .MuiSwitch-track': track(colors.on),
            },
        },

        '& .MuiSwitch-thumb': {
            background: colors.off.thumb,

            width: px(thumbSize),
            maxWidth: cap,
            height: px(thumbSize),
            maxHeight: cap,

            '&::before': iconOverlay(icon),
        },

        '& .MuiTouchRipple-root': {
            // useData's icon colour chain ends on the primary terminal.
            color: icon.iconColor,
        },
    };
}
