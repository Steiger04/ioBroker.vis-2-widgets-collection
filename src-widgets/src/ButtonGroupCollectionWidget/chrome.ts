/**
 * Pure presentation chrome for the Button-group collection widget.
 *
 * @module widgets/ButtonGroupCollectionWidget/chrome
 * @remarks
 * Extracted from the inline sx literals in ButtonGroupCollection.tsx (the
 * Slider chrome / Switch geometry pattern, ADR-0088 discipline) so the
 * variant/orientation interplay — outlined vs text borders, the inset
 * box-shadow separators, the vertical per-button cap, the hover/selected
 * lightening with its gradient escape — is testable as pure data without
 * mounting the widget. Behaviour is frozen: every rule reproduces the legacy
 * inline computation verbatim; the tests pin the results. The module owns the
 * separator alpha constants (0.6) and their fallback cascade
 * (`buttonGroupColor → theme.palette.text.primary`) — the CONTEXT.md term
 * "Button-Group-Chrome" (deliberately NOT a field-declared colour contract
 * like the Slider's Chrome-Farbvertrag). The content boxes (icon/text) are
 * not chrome and stay in the JSX.
 */

import { alpha, lighten, type CSSObject, type Theme } from '@mui/material/styles';

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { gradientColor } from '../lib/helper/gradientColor';

/** Alpha applied to both the configured colour and the theme fallback. */
const SEPARATOR_ALPHA = 0.6;

/** Input for {@link buildGroupChrome} — raw rxData fields plus theme and button count. */
export interface ButtonGroupChromeInput {
    /** rxData.buttonGroupVariant — `'outlined'` selects borders, anything else (incl. `'text'`) the borderless text mode. */
    variant: string | undefined;
    /** rxData.buttonGroupOrientation — `'vertical'` stacks and caps the buttons, anything else lays them out horizontally. */
    orientation: string | undefined;
    /** rxData.buttonGroupColor — separator colour source; falls back to the theme's primary text colour. */
    buttonGroupColor: string | null | undefined;
    /** rxData.basePadding — truthy keeps the group's rounded ends (borderRadius), falsy squares them off. */
    basePadding: unknown;
    /** Number of rendered toggle buttons (drives the vertical per-button height cap). May be 0 (rule then matches nothing). */
    count: number;
    /** MUI theme providing the separator fallback colour. */
    theme: Theme;
}

/**
 * Builds the complete sx for the MUI ToggleButtonGroup: orientation layout,
 * the vertical equal-height distribution of the buttons, and the variant
 * chrome (outlined borders vs removed borders with inset box-shadow
 * separators). The middle/last selector blocks share one separator fragment.
 *
 * @param input - Raw widget data fields, theme and button count.
 * @returns The group's sx object; spread onto `<ToggleButtonGroup sx={…}>`.
 */
export function buildGroupChrome(input: ButtonGroupChromeInput): CSSObject {
    const { variant, orientation, buttonGroupColor, basePadding, count, theme } = input;

    const isVertical = orientation === 'vertical';
    const isOutlined = variant === 'outlined';

    // Separator colour: configured group colour, else the theme's primary text
    // (used for the inset box-shadow dividers in text mode and the border color
    // in outlined mode).
    const separatorColor = buttonGroupColor
        ? alpha(buttonGroupColor, SEPARATOR_ALPHA)
        : alpha(theme.palette.text.primary, SEPARATOR_ALPHA);

    // Borderless mode: borders fully removed and inset box-shadows used for the
    // separator lines so they stay visible even when buttons have a background
    // colour. Shared by the middle and last button (the last additionally
    // carries the rounded end).
    const separatedFragment = !isOutlined && {
        border: 'none',
        marginLeft: isVertical ? undefined : 0,
        marginTop: isVertical ? 0 : undefined,
        boxShadow: isVertical ? `inset 0 1px 0 0 ${separatorColor}` : `inset 1px 0 0 0 ${separatorColor}`,
    };

    return {
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: isVertical ? '100%' : 'auto',
        maxHeight: isVertical ? '100%' : 'none',

        // Vertical: equal-height distribution, each button capped at its share.
        // A count of 0 yields the (invalid, frozen) `calc(100% / 0)` — the rule
        // then matches nothing because no buttons render.
        ...(isVertical && {
            '& .MuiToggleButton-root': {
                flex: '1 1 0',
                minHeight: 0,
                maxHeight: `calc(100% / ${count})`,
            },
        }),

        '& .MuiToggleButtonGroup-firstButton': {
            ...(!isOutlined && {
                border: 'none',
            }),
            ...(isOutlined && {
                borderColor: separatorColor,
            }),
            borderRadius: !basePadding ? 0 : undefined,
        },
        '& .MuiToggleButtonGroup-middleButton': {
            ...separatedFragment,
            ...(isOutlined && {
                borderColor: separatorColor,
            }),
        },
        '& .MuiToggleButtonGroup-lastButton': {
            ...separatedFragment,
            ...(isOutlined && {
                borderColor: separatorColor,
            }),
            borderRadius: !basePadding ? 0 : undefined,
        },
    };
}

/** Input for {@link buildButtonChrome}. */
export interface ButtonChromeInput {
    /** Per-state background (value-specific rxData) — a solid colour or a gradient. */
    background: string | null | undefined;
    /** Whether this button's state is the active one (drives the gradient dimming). */
    isActive: boolean;
}

/**
 * Builds the sx for a single toggle button: the state background as-is, plus
 * the hover/selected interplay. Solid colours lighten on hover (0.5) and on
 * selection (0.3); gradients never lighten — they dim via an opacity(80%)
 * filter instead (also applied on the active button's base).
 *
 * @param input - The state's background and its active flag.
 * @returns The button's sx object; spread onto `<ToggleButton sx={…}>`.
 */
export function buildButtonChrome(input: ButtonChromeInput): CSSObject {
    const { background, isActive } = input;

    const gradient = gradientColor(background);
    const color = extractColorFromValue(background);

    const hasGradient = !!gradient;
    const hoverBackground = gradient ? undefined : color && background ? lighten(background, 0.5) : undefined;
    const selectedBackground = gradient ? undefined : color && background ? lighten(background, 0.3) : undefined;

    return {
        width: '100%',
        height: '100%',
        p: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&.MuiToggleButton-root': {
            filter: isActive && hasGradient ? 'opacity(80%)' : undefined,
            background: background,

            '&:hover': {
                filter: hasGradient ? 'opacity(80%)' : undefined,
                background: hoverBackground,
            },

            '&.Mui-selected': {
                background: selectedBackground,
            },
        },
    };
}
