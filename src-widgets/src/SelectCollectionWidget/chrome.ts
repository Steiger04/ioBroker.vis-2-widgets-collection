/**
 * Pure presentation chrome for the Select collection widget.
 *
 * @module widgets/SelectCollectionWidget/chrome
 * @remarks
 * Extracted from the inline sx literals in SelectCollection.tsx (the
 * Button-Group-Chrome pattern) so the shell the renderer draws AROUND the
 * per-state content is testable as pure data without mounting the widget: the
 * popup surface, the per-entry hover/selected treatment, the arrow colour and
 * the width bound from the measured content box — the CONTEXT.md term
 * "Select-Chrome". Behaviour is frozen: every rule reproduces the legacy
 * inline computation verbatim, with two exceptions — an invalid arrow colour
 * falls back along the arrow contract instead of to the MUI default, and a
 * state background MUI cannot parse tints nothing on hover instead of
 * throwing; the tests pin the results. Like the Button-Group-Chrome it is NOT
 * a colour contract — except the arrow, which resolves the one arrow contract
 * the `arrowColor` field declares too (`lib/selectColorContract`, ADR-0004).
 * The icon/label content of a state is not chrome and stays in the renderer.
 */

import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { Theme } from '@mui/material';
import type { MenuProps } from '@mui/material/Menu';

import { alphaOf } from '../lib/helper/colorDerivation';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { gradientColor } from '../lib/helper/gradientColor';
import { resolveEffectiveColor, type StyleColor } from '../lib/helper/resolveEffectiveColor';
import { cleanSx } from '../lib/helper/sxUtils';
import { arrowColorContract } from '../lib/selectColorContract';

/**
 * A plain sx object. Loosely typed on purpose: frozen legacy values include
 * `null` (gradientColor's "no gradient", extractColorFromValue's "no colour"),
 * which MUI's sx skips like `undefined` but emotion's CSSObject typing rejects.
 */
type SxObject = Record<string, unknown>;

/** Content-box width (px) assumed until the first measurement arrives. */
const UNMEASURED_WIDTH = 300;

/** The measured content-box width, or the unmeasured default (a measured 0 stays 0). */
const boundWidth = (width: number | undefined): number => width ?? UNMEASURED_WIDTH;

/** Input for {@link buildSelectChrome}. */
export interface SelectChromeInput {
    /** Content-Box width in px (useContentBox) — `undefined` until the first measurement. */
    width: number | undefined;
    /** rxData.arrowColor — the explicit arrow colour; an invalid one counts as unset. */
    arrowColor: string | null | undefined;
    /**
     * The ACTIVE state's resolved text colour (useData `data.textColor`) — the value the
     * arrow contract's `textColor` fallback reads. The resolver ends on the theme text
     * colour (terminal `text`), so at runtime it is never empty.
     */
    textColor: string | null | undefined;
    /** The widget's vis-2 text styles (useStyles `textStyles`) — the contract's CSS colour step. */
    textStyles: StyleColor;
    /** The effective MUI theme — the contract's terminal (theme text). */
    theme: Theme;
}

/**
 * Builds the sx for the select field itself: it fills its box, bounded by the
 * measured content width minus 10 %, and colours the arrow through the arrow
 * contract (`arrowColorContract`, ADR-0004) — `arrowColor`, else the active
 * state's text colour, else the vis-2 CSS colour, else the theme text colour;
 * an invalid colour counts as unset. A gradient yields its 50 % colour; a value
 * without a hex/rgb colour (a vis-2 CSS colour by name) leaves the arrow to the
 * MUI default. The editor swatch resolves the same contract over the base
 * fields instead of the active text colour.
 *
 * @param input - Measured width, the explicit arrow colour, the active text colour, text styles and theme.
 * @returns The field's sx; pass it as `<Select sx={…}>`.
 */
export function buildSelectChrome(input: SelectChromeInput): SxObject {
    const { width, arrowColor, textColor, textStyles, theme } = input;
    const arrow = resolveEffectiveColor(arrowColorContract, { arrowColor, textColor }, theme, textStyles);

    return {
        width: '100%',
        height: '100%',
        maxWidth: `calc(${boundWidth(width)}px - 10%)`,

        '& .MuiSelect-icon': {
            color: extractColorFromValue(arrow),
        },
    };
}

/** Input for {@link buildMenuChrome}. */
export interface MenuChromeInput {
    /** Content-Box width in px (useContentBox) — `undefined` until the first measurement. */
    width: number | undefined;
    /**
     * rxData.noCard — the EXPLICIT flag only, never `wrappedContent`: the popup is
     * portaled to the body, so an embedded Select keeps its own elevated surface.
     */
    noCard: boolean | undefined;
    /**
     * The active state's resolved frame background (useData `data.frameBackground`).
     * Unset in the widget it resolves to the theme paper (terminal `paper`), so the
     * transparent noCard surface only shows for an empty resolved value.
     */
    frameBackground: string | null | undefined;
    /** The widget's vis-2 border styles (useStyles `borderStyles`) — the popup takes the widget's frame. */
    borderStyles: WidgetStyleState | undefined;
}

/**
 * Builds the MenuProps of the popup: the paper surface (noCard flattens it —
 * no shadow, no overlay; a frame background always paints it, and since an
 * unset one resolves to the theme paper, a noCard popup stays opaque — it is
 * transparent only for an empty resolved value, a defensive branch; the
 * widget's border styles frame it; a long list scrolls inside), the
 * transparent backdrop, and the popup root bounded by the measured content
 * width, offset below the field, list unpadded.
 *
 * @param input - Measured width, the explicit noCard flag, frame background and border styles.
 * @returns The popup's MenuProps; pass them as `<Select MenuProps={…}>`.
 */
export function buildMenuChrome(input: MenuChromeInput): Partial<MenuProps> {
    const { width, noCard, frameBackground, borderStyles } = input;

    return {
        PaperProps: {
            sx: {
                overflow: 'hidden',
                '& .MuiMenu-list': {
                    maxHeight: '100vh',
                    overflowY: 'auto',
                },
                ...(noCard && {
                    '--Paper-overlay': 'none !important',
                    '--Paper-shadow': 'none !important',
                    boxShadow: 'none !important',
                }),
                background: frameBackground || (noCard ? 'transparent' : undefined),
                ...cleanSx(borderStyles),
            },
        },
        slotProps: {
            backdrop: {
                style: { backgroundColor: 'transparent !important' },
            },
            root: {
                sx: {
                    maxWidth: boundWidth(width),
                    mt: 0.5,

                    '& .MuiList-root': {
                        py: 0,
                    },
                },
            },
        },
    };
}

/**
 * Builds the sx for one menu entry from its state background: a solid colour
 * paints the entry (selected or not) and hovers in its 50 % alpha; a gradient
 * paints over a transparent base and hovers in the 50 % alpha of its midpoint
 * colour (its Repräsentative Vollfarbe); without a background nothing is tinted.
 * A background without a Repräsentative Vollfarbe (a named colour, a CSS
 * variable, a gradient without hex/rgb stops) still paints the entry but tints
 * nothing on hover — it never throws (`alphaOf`, lib/helper/colorDerivation).
 *
 * @param bgColor - The state's resolved background — a solid colour, a gradient or nothing.
 * @returns The entry's sx; pass it as `<MenuItem sx={…}>`.
 */
export function buildMenuItemChrome(bgColor: string | null | undefined): SxObject {
    const gradient = gradientColor(bgColor);
    const hoverBg = alphaOf(bgColor, 0.5);

    return {
        background: gradient,
        bgcolor: gradient ? 'transparent' : bgColor,

        '&.Mui-selected': {
            background: gradient,
            bgcolor: gradient ? undefined : bgColor,
        },

        '&.Mui-selected:hover': {
            background: gradient ? hoverBg : undefined,
            bgcolor: gradient ? undefined : hoverBg,
        },
        '&:hover': {
            background: gradient ? hoverBg : undefined,
            bgcolor: gradient ? undefined : hoverBg,
        },
    };
}
