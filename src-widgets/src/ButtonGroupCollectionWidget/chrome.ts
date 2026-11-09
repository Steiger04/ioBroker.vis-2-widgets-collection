/**
 * Pure presentation chrome for the Button-group collection widget.
 *
 * @module widgets/ButtonGroupCollectionWidget/chrome
 * @remarks
 * Extracted from the inline sx literals in ButtonGroupCollection.tsx (after the
 * Slider chrome and the former Switch geometry module, since folded into the
 * sibling Schalter-Chrome; ADR-0088 discipline) so the
 * variant/orientation interplay — outlined vs text borders, the inset
 * box-shadow separators, the vertical per-button cap, the hover/selected
 * lightening with its gradient escape — is testable as pure data without
 * mounting the widget. Behaviour is frozen: every rule reproduces the legacy
 * inline computation verbatim; the tests pin the results — the CONTEXT.md term
 * "Button-Group-Chrome". The separator/border colour is a colour contract
 * (ADR-0004, the Slider's Chrome-Farbvertrag pattern): the `buttonGroupColor`
 * field declares `buttonGroupColorContract` (explicit value → theme text) and
 * this module resolves the same contract. The separator alpha (0.6) and the
 * hover/selected tints stay frozen presentation. The content boxes (icon/text)
 * are not chrome and stay in the JSX.
 */

import type { CSSObject, Theme } from '@mui/material/styles';

import { buttonGroupColorContract } from '../lib/buttonGroupColorContract';
import { alphaOf, lightenOf, solidOf } from '../lib/helper/colorDerivation';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { gradientColor } from '../lib/helper/gradientColor';
import { resolveEffectiveSolidColor } from '../lib/helper/resolveEffectiveColor';
import type { BaseFieldsRxData, ButtonGroupFieldsRxData } from '../types';

/** Alpha applied to the separator's resolved colour (explicit value or theme text). */
const SEPARATOR_ALPHA = 0.6;

/** The widget data the group chrome reads, raw as vis-2 stores it (any key may be missing). */
export type ButtonGroupChromeData = Readonly<
    Pick<ButtonGroupFieldsRxData, 'buttonGroupColor'> & Pick<BaseFieldsRxData, 'basePadding'>
>;

/** Input for {@link buildGroupChrome} — raw rxData fields plus theme and button count. */
export interface ButtonGroupChromeInput {
    /** rxData.buttonGroupVariant — `'outlined'` selects borders, anything else (incl. `'text'`) the borderless text mode. */
    variant: string | undefined;
    /** rxData.buttonGroupOrientation — `'vertical'` stacks and caps the buttons, anything else lays them out horizontally. */
    orientation: string | undefined;
    /**
     * Widget data (rxData): the separator's colour contract (`buttonGroupColorContract`)
     * resolves over it, and a truthy `basePadding` keeps the group's rounded ends
     * (borderRadius), a falsy one squares them off.
     */
    data: ButtonGroupChromeData;
    /** Number of rendered toggle buttons (drives the vertical per-button height cap). May be 0 (rule then matches nothing). */
    count: number;
    /** MUI theme providing the contract's terminal (theme text). */
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
    const { variant, orientation, data, count, theme } = input;
    const { basePadding } = data;

    const isVertical = orientation === 'vertical';
    const isOutlined = variant === 'outlined';

    // Separator colour (the inset box-shadow dividers in text mode, the border
    // colour in outlined mode): the button-group colour contract — explicit
    // `buttonGroupColor`, else the theme text — as a solid colour. A gradient
    // yields its midpoint; a value without a Repräsentative Vollfarbe counts as
    // unset. No vis-2 style stage (no textStyles): the contract does not
    // inherit it. Only a theme text without a solid colour draws no separator.
    // The explicit value counts as stored first, as before the contract: alpha()
    // drew every value the colour calculation reads. Since the cascade reads stored
    // values by the Regeln für Farbeingaben (hsl() and a 4-digit hex included), the
    // contract reaches the same colour for hsl(), every hex, colour names and complete
    // gradients. The explicit-first read stays for what those rules reject and the
    // calculation still reads: a gradient without its closing parenthesis or with text
    // after it, an rgb() with text after it. The contract alone would draw the theme text.
    const separatorColor = alphaOf(
        solidOf(data.buttonGroupColor) ?? resolveEffectiveSolidColor(buttonGroupColorContract, data, theme),
        SEPARATOR_ALPHA,
    );

    // Borderless mode: borders fully removed and inset box-shadows used for the
    // separator lines so they stay visible even when buttons have a background
    // colour. Shared by the middle and last button (the last additionally
    // carries the rounded end).
    const separatedFragment = !isOutlined && {
        border: 'none',
        marginLeft: isVertical ? undefined : 0,
        marginTop: isVertical ? 0 : undefined,
        boxShadow:
            separatorColor && (isVertical ? `inset 0 1px 0 0 ${separatorColor}` : `inset 1px 0 0 0 ${separatorColor}`),
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
 * filter instead (also applied on the active button's base). Only a background
 * the button's own reading takes (`extractColorFromValue`: hex, rgb(a)) is
 * tinted, as before colorDerivation — not hsl() or a 4-digit hex, though MUI
 * could. Any other background (a colour name, a CSS variable) still paints the
 * button but gets no hover/selected tint — it never throws.
 *
 * @param input - The state's background and its active flag.
 * @returns The button's sx object; spread onto `<ToggleButton sx={…}>`.
 */
export function buildButtonChrome(input: ButtonChromeInput): CSSObject {
    const { background, isActive } = input;

    const gradient = gradientColor(background);

    const hasGradient = !!gradient;
    const tintable = !gradient && extractColorFromValue(background) !== null;
    const hoverBackground = tintable ? lightenOf(background, 0.5) : undefined;
    const selectedBackground = tintable ? lightenOf(background, 0.3) : undefined;

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
