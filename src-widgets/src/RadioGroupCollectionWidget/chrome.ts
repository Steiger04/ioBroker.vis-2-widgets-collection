/**
 * Pure presentation chrome for the Radio-group collection widget.
 *
 * @module widgets/RadioGroupCollectionWidget/chrome
 * @remarks
 * Extracted from the inline sx literals in the state loop of RadioGroupCollection.tsx (the
 * Button-Group-Chrome pattern: one function for the group, one for the entry) so the
 * orientation/Content-Box interplay is testable as pure data without mounting the widget —
 * the term "Radio-Chrome". Behaviour is frozen: every rule reproduces the legacy
 * inline computation verbatim; the tests pin the results.
 *
 * The icon over the dot and the label (2-line clamp, HTML) are per-state content, not chrome;
 * they stay in the renderer (ADR-0091). The renderer still reads the Content-Box (ADR-0098)
 * and hands its height in.
 *
 * Open question (not answered here, deliberately no alignment): stacked, every entry's
 * button is fixed at a px share `Content-Box height / count`. The Button-Group caps its
 * vertical buttons with a CSS share (`calc(100% / count)`) that needs no measurement —
 * would that suffice here too? The px share is frozen until that is decided; changing it
 * alters the unmeasured first paint and the rounding of the share.
 */

import type { CSSObject, Theme } from '@mui/material/styles';

import { resolveRadioColors } from '../lib/radioColorContract';
import type { RadioColorData } from '../lib/radioColorContract';
import type { RadioGroupFieldsRxData } from '../types/field-definitions/radio-group-fields';

/** Input for {@link buildRadioGroupChrome}. */
export interface RadioGroupChromeInput {
    /** rxData.radioOrientation — only `'horizontal'` lays out a row; anything else (incl. unset) stacks. */
    orientation: RadioGroupFieldsRxData['radioOrientation'];
}

/** The stack's chrome: the MUI Stack `direction` prop plus its sx. */
export interface RadioGroupChrome {
    /** Spread onto `<Stack direction={…}>`. */
    direction: 'row' | 'column';
    /** Spread onto `<Stack sx={…}>`: width and alignment of the stack. */
    sx: CSSObject;
}

/**
 * Builds the chrome of the radio stack: direction, width and alignment. Horizontal, the
 * radios share a full-width row, evenly spaced and centred; stacked, they run top-down and
 * stretch to the stack's width.
 *
 * @param input - The raw orientation.
 * @returns The Stack's `direction` and sx.
 */
export function buildRadioGroupChrome(input: RadioGroupChromeInput): RadioGroupChrome {
    const isHorizontal = input.orientation === 'horizontal';

    return {
        direction: isHorizontal ? 'row' : 'column',
        sx: {
            width: isHorizontal ? '100%' : 'auto',
            height: '100%',
            justifyContent: isHorizontal ? 'space-around' : 'flex-start',
            alignItems: isHorizontal ? 'center' : 'stretch',
        },
    };
}

/** Input for {@link buildRadioItemChrome} — one entry (state) of the radio stack. */
export interface RadioItemChromeInput {
    /** rxData.radioOrientation — only `'horizontal'` lays out a row; anything else (incl. unset) stacks. */
    orientation: RadioGroupFieldsRxData['radioOrientation'];
    /** The Content-Box height in px (ADR-0098); `undefined` (or 0) until the first measurement. */
    contentBoxHeight: number | undefined;
    /** Number of rendered entries — the stacked share divides the height by it. May be 0. */
    count: number;
    /** rxData.hideLabels — hides the label and centres the radio. */
    hideLabels: RadioGroupFieldsRxData['hideLabels'];
    /** rxData.labelPlacement — the label side that gets the gap to the radio. */
    labelPlacement: RadioGroupFieldsRxData['labelPlacement'];
    /** Widget data (rxData) the radio colour contract resolves over. */
    data: RadioColorData;
    /** The state's resolved icon colour (`state.iconColor`): checked dot, lock colour and ripple. */
    iconColor: string | undefined;
    /** Whether the group is locked (Sperre: `onlyDisplay` or a non-writable object). */
    locked: boolean;
    /** Effective MUI theme for the radio colour contract. */
    theme: Theme;
}

/** One entry's chrome: the FormControlLabel sx and the Radio sx. */
export interface RadioItemChrome {
    /** Spread onto `<FormControlLabel sx={…}>`: label area, button base and lock colours. */
    label: CSSObject;
    /** Spread onto `<Radio sx={…}>`: the radio root with its cap and ripple colour. */
    radio: CSSObject;
}

/**
 * Builds the chrome of one radio entry:
 *
 * - label area: the gap on the label's side (none while labels are hidden), the flex share —
 *   stacked, every entry takes an equal `flex: 1 1 0`; side by side, the full height;
 * - button base: side by side square, capped at the Content-Box height; stacked, fixed at the
 *   px share `height / count` (frozen, see the module's open question);
 * - radio root: the unchecked colour (radio colour contract), the cap, the ripple in the
 *   state's icon colour;
 * - lock colours (only while locked — the `.Mui-disabled` rule matches nothing otherwise):
 *   checked keeps the state's icon colour, unchecked draws the contract's lock colour.
 *
 * @param input - Orientation, Content-Box height, entry count, label options, widget data,
 *   the state's icon colour, the lock flag and the theme.
 * @returns The FormControlLabel and Radio sx of the entry.
 */
export function buildRadioItemChrome(input: RadioItemChromeInput): RadioItemChrome {
    const { orientation, contentBoxHeight, count, hideLabels, labelPlacement, data, iconColor, locked, theme } = input;

    const isHorizontal = orientation === 'horizontal';
    const itemSize = contentBoxHeight && count > 0 ? contentBoxHeight / count : undefined;
    const radioCap = isHorizontal ? contentBoxHeight || undefined : itemSize;
    const radioColors = resolveRadioColors(data, iconColor, theme);

    return {
        label: {
            m: 0,
            pr: labelPlacement === 'end' && !hideLabels ? 1 : 0,
            pl: labelPlacement === 'start' && !hideLabels ? 1 : 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: hideLabels ? 'center' : 'flex-start',
            width: '100%',
            // Stacked: equal height distribution
            ...(!isHorizontal && {
                flex: '1 1 0',
                minHeight: 0,
            }),
            // Side by side: auto sizing based on content
            ...(isHorizontal && {
                height: '100%',
            }),
            '& .MuiButtonBase-root': {
                width: '100%',
                padding: 0,
                // Side by side: enforce square shape
                ...(isHorizontal && {
                    aspectRatio: '1',
                    maxWidth: contentBoxHeight || undefined,
                    maxHeight: contentBoxHeight || undefined,
                    flexShrink: 0,
                }),
                // Stacked: fixed size per button
                ...(!isHorizontal && {
                    height: itemSize ? `${itemSize}px` : 'auto',
                    maxWidth: itemSize || undefined,
                    maxHeight: itemSize || undefined,
                    flexShrink: 0,
                }),
                ...(locked && {
                    '&.Mui-disabled': {
                        '&.Mui-checked': {
                            color: radioColors.checked,
                        },
                        color: radioColors.disabledUnchecked,
                    },
                }),
            },
            '& .MuiFormControlLabel-label': {
                flex: '1 1 auto',
                minWidth: 0,
                overflow: 'hidden',
                ...(hideLabels && {
                    display: 'none',
                }),
            },
        },
        radio: {
            color: radioColors.unchecked,
            width: '100%',
            height: '100%',
            maxHeight: radioCap,
            '& .MuiTouchRipple-root': {
                color: iconColor,
            },
            '& .MuiSvgIcon-root': {
                width: '100%',
                height: '100%',
                maxHeight: radioCap,
            },
        },
    };
}
