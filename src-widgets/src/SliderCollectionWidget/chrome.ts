/**
 * Pure presentation chrome for the Slider collection widget — the CONTEXT.md term
 * "Slider-Chrome".
 *
 * @module widgets/SliderCollectionWidget/chrome
 * @remarks
 * Pattern Schalter-Chrome (ADR-0106 decision 6): the complete sx of the MUI Slider built as
 * data from the raw slider fields, the resolved label style and the theme — testable without
 * mounting the widget. It replaces the former styled() wrapper (and its guard against the
 * `data`/`chrome` props leaking into the DOM) and the body's own sx. Behaviour is frozen:
 * every rule reproduces the former styled callback and body sx verbatim; the tests pin the
 * results. The sx carries the same selectors on the same root class as the styled callback
 * did (emotion merged the wrapper's rules into the root class), so the specificity is
 * unchanged.
 *
 * Colours implement the Chrome-Farbvertrag (CONTEXT.md): the cascade of thumb, track, rail
 * and marks is DECLARED once in the component-free contract module (`lib/sliderColorContract`
 * → `sliderColorContracts`, which the fields spread) and resolved here through
 * `resolveEffectiveColor` — no hand-rolled `a || b || theme.x` chains. Label chains (value
 * label, mark label) are NOT chrome: their colour and size come in already resolved by the
 * state-resolver system (useData's StyleData).
 *
 * Frozen layers, not contract: the active mark's `filter: brightness(2.5)` with its
 * `backgroundColor` before `background`; MUI's rail opacity 0.38 and active-mark opacity 0.8
 * are MUI's own and deliberately not set here.
 *
 * The mark-label space and the end symbols' rail offset are one layout decision: the margin
 * reserved for the mark labels shifts the rail off the container centre, and the end symbols
 * follow it through {@link railOffset} (an internal seam with its own suite).
 *
 * Lengths go out as px strings: the sx engine reads a number in (0, 1] for `width` and
 * `height` as a fraction (`1` → `100%`), the styled callback read it as px. The per-mark
 * content (label, icon) stays outside: CollectionMark paints the data `buildSliderMarks`
 * wrote onto the mark.
 */

import type { CSSObject, Theme } from '@mui/material/styles';

import type { StyleData } from '../hooks/useData';
import { alphaOf } from '../lib/helper/colorDerivation';
import { resolveEffectiveColor, resolveEffectiveSolidColor } from '../lib/helper/resolveEffectiveColor';
import { sliderColorContracts, type SliderColorField } from '../lib/sliderColorContract';
import type { SliderFieldsRxData } from '../types';
import { MARK_LABEL_SPACE, railOffset } from './railOffset';

/** The resolved label style the label containers read (useData's active StyleData). */
export type SliderChromeLabel = Readonly<Pick<StyleData, 'valueSize' | 'textColor'>>;

/** The orientation of the rendered slider. */
export type SliderOrientation = 'horizontal' | 'vertical';

/** Input for {@link buildSliderChrome}. */
export interface SliderChromeInput {
    /** Widget data (rxData): the slider geometry fields and the fields of the slider colour contracts, raw. */
    data: SliderFieldsRxData;
    /** The resolved active style: the value label's colour and size, the mark-label container's size. */
    label: SliderChromeLabel;
    /** The effective MUI theme (the collection theme). */
    theme: Theme;
}

/** The Slider-Chrome: the MUI Slider's sx and the transform that puts the end symbols onto the rail axis. */
export interface SliderChrome {
    /**
     * The orientation the slider renders in: `'vertical'` only when stored so, otherwise
     * `'horizontal'` (MUI's default) — the one reading for the body, the end symbols and MUI.
     */
    orientation: SliderOrientation;
    /** The slider's sx object; pass it as `<Slider sx={…}>`. */
    sx: CSSObject;
    /** CSS transform of both end symbols (the rail offset along the cross axis). */
    endSymbolTransform: string;
}

/** The chrome colours of one render: backgrounds may carry a gradient, the other slots are solid. */
interface ChromeColors {
    thumbBackground: string;
    /** Base of the hover/active halo. */
    thumbShadowBase: string | undefined;
    thumbBorder: string | undefined;
    trackBackground: string;
    trackBorder: string | undefined;
    railBackground: string;
    railBorder: string | undefined;
    /** Shared by the inactive and the active mark. */
    markBackground: string;
}

/**
 * Resolves the chrome colours: one slot per painted part.
 *
 * Each slot resolves its field contract without textStyles: chrome fields never inherit the
 * vis-2 text color (no `inheritTextStyle` among them). Backgrounds keep their raw resolved
 * value (the cascade accepts every CSS colour and gradients, and the surfaces render them).
 * Border and shadow slots need a solid, so they resolve through `resolveEffectiveSolidColor`:
 * a gradient yields its midpoint color, and a stage without a Repräsentative Vollfarbe (a
 * colour name, a gradient with named stops) falls through the cascade — e.g. to `sliderColor`,
 * then the primary terminal. Solid slots are `undefined` only when no stage has one — with the
 * `primary` terminal of every slider chrome field that needs an unreadable theme primary.
 *
 * Behavior delta vs. the legacy hand-rolled cascade (ADR-0004 intention): invalid explicit
 * colors (e.g. historic free-text entries) fall through to the fallback/terminal instead of
 * flowing into CSS unchecked — the picker only ever stores validated values.
 */
function resolveColors(data: SliderFieldsRxData, theme: Theme): ChromeColors {
    const fields = data as Record<string, unknown>;
    const background = (field: SliderColorField): string =>
        resolveEffectiveColor(sliderColorContracts[field], fields, theme);
    const solid = (field: SliderColorField): string | undefined =>
        resolveEffectiveSolidColor(sliderColorContracts[field], fields, theme);

    return {
        thumbBackground: background('thumbColor'),
        thumbShadowBase: solid('thumbColor'),
        thumbBorder: solid('thumbBorderColor'),
        trackBackground: background('trackBackgroundColor'),
        trackBorder: solid('trackBorderColor'),
        railBackground: background('railBackgroundColor'),
        railBorder: solid('railBorderColor'),
        markBackground: background('markBackgroundColor'),
    };
}

/**
 * Builds the Slider-Chrome.
 *
 * @param input - Raw slider fields, the resolved label style and the theme.
 * @returns The slider's sx and the end symbols' transform.
 * @remarks
 * Every rule reads one orientation, normalised like MUI renders it: only a stored
 * `'vertical'` is vertical, anything else — legacy data, an import or a script may leave the
 * field out — horizontal. The vertical mark fallbacks (16 × 3 px against the horizontal
 * 2 × 2 px) are frozen.
 */
export function buildSliderChrome(input: SliderChromeInput): SliderChrome {
    const { data, label, theme } = input;

    const colors = resolveColors(data, theme);
    const orientation: SliderOrientation = data.sliderOrientation === 'vertical' ? 'vertical' : 'horizontal';
    const isHorizontal = orientation === 'horizontal';
    const marks = !!data.marks;

    const thumbBorderWidth = data.thumbBorderWidth ?? 0;
    // Hover/active halo; none when the thumb cascade has no Repräsentative Vollfarbe.
    const thumbShadow = alphaOf(colors.thumbShadowBase, 0.32);

    const markWidth = isHorizontal ? `${data.markWidth ?? 2}px` : `${data.markHeight ?? 16}px`;
    const markHeight = isHorizontal ? `${data.markHeight ?? 2}px` : `${data.markWidth ?? 3}px`;

    const offset = railOffset(marks, orientation);

    const sx: CSSObject = {
        '& .MuiSlider-thumb': {
            width: `${data.thumbWidth ?? 20}px`,
            height: `${data.thumbHeight ?? 20}px`,
            background: colors.thumbBackground,
            // A border only for a positive width; without a solid border colour it draws in
            // currentColor, the CSS default of the shorthand.
            ...(thumbBorderWidth > 0 && {
                border: `${thumbBorderWidth}px solid ${colors.thumbBorder ?? 'currentColor'}`,
            }),
            '&:hover': {
                boxShadow: thumbShadow && `0px 0px 0px 8px ${thumbShadow}`,
            },
            '&:active': {
                boxShadow: thumbShadow && `0px 0px 0px 14px ${thumbShadow}`,
            },
        },
        '& .MuiSlider-track': {
            height: isHorizontal ? `${data.trackLength ?? 4}px` : 'auto',
            width: !isHorizontal ? `${data.trackLength ?? 4}px` : 'auto',
            borderColor: colors.trackBorder,
            background: colors.trackBackground,

            borderWidth: data.trackBorderWidth ? `${data.trackBorderWidth}px` : '0px',
            borderStyle: 'solid',
        },
        '& .MuiSlider-rail': {
            height: isHorizontal ? `${data.railLength ?? 4}px` : '100%',
            width: !isHorizontal ? `${data.railLength ?? 4}px` : '100%',
            background: colors.railBackground,

            borderWidth: data.railBorderWidth ? `${data.railBorderWidth}px` : '0px',
            borderStyle: 'solid',
            borderColor: colors.railBorder,
        },
        '& .MuiSlider-mark': {
            width: markWidth,
            height: markHeight,
            background: colors.markBackground,
        },
        // The active mark: same size and colour, plus the frozen brightness layer.
        // `backgroundColor` before `background` is frozen too.
        '& .MuiSlider-markActive': {
            width: markWidth,
            height: markHeight,
            backgroundColor: colors.markBackground,
            background: colors.markBackground,
            filter: 'brightness(2.5)',
        },
        // The mark-label space: below a horizontal, right of a vertical slider.
        mb: marks && isHorizontal ? `${MARK_LABEL_SPACE.horizontal}px` : '0px',
        mr: marks && !isHorizontal ? `${MARK_LABEL_SPACE.vertical}px` : '0px',
        '& .MuiSlider-valueLabel': {
            // The resolved active style (CONTEXT "Chrome-Farbvertrag"): valueSizeActive →
            // active state → base → vis-2 font size, textColorActive → active state → base →
            // vis-2 text style → theme text. It carries no marker layer: the value label is
            // not a mark.
            fontSize: label.valueSize,
            color: label.textColor,
            bgcolor: 'transparent',
            top: isHorizontal ? data.labelPosition : undefined,
            right: !isHorizontal ? data.labelPosition : undefined,
        },
        '& .MuiSlider-markLabel': {
            // Not the text size (CollectionMark's Typography sets its own): the inherited size
            // sets the line box of the icon row, so it moves the mark icon. No colour here: the
            // mark text paints its own resolved colour, and an inherited colour never tints the
            // icon — the <img> shows its image as is unless getIconColorStyles applies its
            // colour mask.
            fontSize: label.valueSize,
            top: isHorizontal ? data.markPosition : undefined,
            left: !isHorizontal ? data.markPosition : undefined,
        },
    };

    return {
        orientation,
        sx,
        endSymbolTransform: isHorizontal ? `translateY(${offset.y}px)` : `translateX(${offset.x}px)`,
    };
}
