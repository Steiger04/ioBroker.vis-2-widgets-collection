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
 * inline computation verbatim; the tests pin the results. Like the
 * Button-Group-Chrome it is NOT a colour contract — except the arrow, whose
 * fallback the `arrowColor` field declares (ADR-0004). The icon/label content
 * of a state is not chrome and stays in the renderer.
 */

import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import type { MenuProps } from '@mui/material/Menu';
import { alpha } from '@mui/material/styles';

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { gradientColor } from '../lib/helper/gradientColor';
import { cleanSx } from '../lib/helper/sxUtils';

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
    /** Measured content-box width in px (useElementDimensions) — `undefined` until the first measurement. */
    width: number | undefined;
    /** rxData.arrowColor — the explicit arrow colour. */
    arrowColor: string | null | undefined;
    /**
     * The ACTIVE state's resolved text colour (useData `data.textColor`) — the arrow's
     * fallback. The resolver ends on the theme text colour (terminal `text`), so at
     * runtime it is never empty.
     */
    textColor: string | null | undefined;
}

/**
 * Builds the sx for the select field itself: it fills its box, bounded by the
 * measured content width minus 10 %, and colours the arrow with `arrowColor`,
 * else with the active state's text colour — a gradient yields its 50 %
 * colour, an unparsable value leaves the arrow to the MUI default. The editor
 * swatch shows the same fallback's base cascade: the `arrowColor` field
 * declares `textColor` as its fallback, terminal `text` (ADR-0004).
 *
 * @param input - Measured width, the explicit arrow colour and the active text colour.
 * @returns The field's sx; pass it as `<Select sx={…}>`.
 */
export function buildSelectChrome(input: SelectChromeInput): SxObject {
    const { width, arrowColor, textColor } = input;

    return {
        width: '100%',
        height: '100%',
        maxWidth: `calc(${boundWidth(width)}px - 10%)`,

        '& .MuiSelect-icon': {
            color: extractColorFromValue(arrowColor || textColor),
        },
    };
}

/** Input for {@link buildMenuChrome}. */
export interface MenuChromeInput {
    /** Measured content-box width in px (useElementDimensions) — `undefined` until the first measurement. */
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
 * no shadow, no overlay, transparent without a frame background, frozen; a
 * frame background always paints it; the widget's border styles frame it; a
 * long list scrolls inside), the transparent backdrop, and the popup root
 * bounded by the measured content width, offset below the field, list
 * unpadded.
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
 * paints over a transparent base and hovers in the 50 % alpha of its extracted
 * colour; without a background nothing is tinted.
 *
 * @param bgColor - The state's resolved background — a solid colour, a gradient or nothing.
 * @returns The entry's sx; pass it as `<MenuItem sx={…}>`.
 */
export function buildMenuItemChrome(bgColor: string | null | undefined): SxObject {
    const gradient = gradientColor(bgColor);
    const extractedColor = gradient ? extractColorFromValue(bgColor) : undefined;
    const hoverBg = extractedColor ? alpha(extractedColor, 0.5) : bgColor ? alpha(bgColor, 0.5) : undefined;

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
