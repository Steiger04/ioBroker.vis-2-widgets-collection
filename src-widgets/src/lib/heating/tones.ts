/**
 * Heating tones: the one place that turns a Tönung into colours (ADR-0124).
 *
 * @module lib/heating/tones
 * @remarks
 * Chip, status sign and hint line name only the tone; which palette slot, which mode and which
 * contrast step stay in here. Source is the resolved collection theme's palette only (cascade
 * Theme Studio → vis-2 theme → MUI default, ADR-0004/ADR-0078): Störung and Hinweis take `error`
 * (Meldungsfarbe), heizt `warning`, kühl `info`, neutral the secondary text colour, all on the
 * paper. No theme key, no colour field, nothing in widget data.
 *
 * - **Filled** (Störung): the slot colour as surface, black or white text, whichever contrasts more.
 * - **Tinted** (Hinweis, heizt, kühl, neutral): the slot colour at alpha 0.16 (dark) / 0.10
 *   (light) on the paper; the text is the slot colour, lightened on a dark surface and darkened
 *   on a light one in small steps until it reaches 4.5:1 — at the end of the steps it is white
 *   or black, so every theme colour stays readable.
 *
 * The **Bedienakzent** (ADR-0124 Nachtrag 2026-11-27) is built the same way from the theme's
 * primary colour: what a user sets or chooses — the set-point ring, the lit pill, the ± keys, the
 * Kartenkopf symbol — takes it, never a tone, so it reads the same in every state. The arc takes
 * the primary itself, stepped until 3:1 on the paper (a graphical object); surfaces take its tint,
 * the hover a step stronger; a sign or text on them is stepped until 4.5:1 on both.
 *
 * The **Neutralstufe** (ADR-0124 Nachtrag 2 2026-11-27) gives the quiet parts — lines, the scale,
 * labels, the resting pills — a light primary hue: the secondary text colour on the paper with a
 * fifth of the primary mixed in. Lines are stepped until 2:1, ticks until 3:1, labels until 4.5:1,
 * each on every card the widget may stand on (in dark mode MUI lightens an elevated card by up to
 * 0.16 white) and the labels on the resting pill surface and its hover as well.
 *
 * Every returned colour is opaque, so the contrast holds whatever lies beneath the surface — except
 * the Neutralstufe's pill surface and hover: a faint translucent primary that takes on the card it
 * lies on; the labels on it are checked against every card beneath.
 * Pure and component-free; never throws on an unreadable theme colour.
 */

import { darken, decomposeColor, getContrastRatio, hslToRgb, lighten } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

import { alphaOf } from '../helper/colorDerivation';

/** The five tones of the heating family. */
export type HeatingTone = 'neutral' | 'heizt' | 'kühl' | 'störung' | 'hinweis';

/** Every tone, in display order. */
export const HEATING_TONES: readonly HeatingTone[] = ['neutral', 'heizt', 'kühl', 'störung', 'hinweis'];

/** The colours of one tone. */
export interface ToneColors {
    /** Opaque surface colour (chip, hint line, filled sign). */
    surface: string;
    /** Opaque text colour, at least 4.5:1 on `surface`. */
    text: string;
    /** The sign the tone carries: the warning triangle for a Meldung (Störung, Hinweis). */
    mark: 'triangle' | null;
}

/** WCAG AA for normal text — the chips' 12 px text. */
const MIN_CONTRAST = 4.5;

/** WCAG AA for graphical objects — the ring's arc against the card. */
const MIN_GRAPHIC_CONTRAST = 3;

/** How much stronger the hover tint of an accent surface is than its rest tint. */
const HOVER_TINT_FACTOR = 1.75;

/** WCAG 2:1 for the quiet lines (pill borders, the readings bar's rule) against the card. */
const MIN_LINE_CONTRAST = 2;

/** Share of the primary colour mixed into the Neutralstufe's secondary text colour. */
const NEUTRAL_HUE_SHARE = 0.2;

/** Alpha of the Neutralstufe's translucent pill surface, per mode. */
const NEUTRAL_SURFACE_ALPHA = { dark: 0.06, light: 0.05 } as const;

/** Start alpha of a quiet line or tick over the paper, raised until it reaches its contrast. */
const NEUTRAL_LINE_START = 0.2;

/** The strongest white overlay MUI lays on a dark elevated card (elevation 24). */
const MAX_CARD_OVERLAY = 0.16;

/** Alpha of the tint on the paper, per mode (start values of the design). */
const TINT_ALPHA = { dark: 0.16, light: 0.1 } as const;

/** Step of the lighten/darken coefficient on the way to AA. */
const CONTRAST_STEP = 0.02;

/** MUI's defaults per mode — only a never-throw guard for a colour no calculation reads. */
const FALLBACK = {
    dark: { paper: '#121212', text: 'rgba(255, 255, 255, 0.7)', primary: '#90caf9' },
    light: { paper: '#ffffff', text: 'rgba(0, 0, 0, 0.6)', primary: '#1976d2' },
} as const;

/** A colour as channels: `[r, g, b]` in 0–255 and its alpha in 0–1. */
interface Rgba {
    rgb: [number, number, number];
    alpha: number;
}

/** The alpha a colour declares (1 when it declares none or MUI cannot read it). */
function declaredAlpha(color: string): number {
    try {
        const alpha = decomposeColor(color.trim().toLowerCase()).values[3];
        return typeof alpha === 'number' && alpha >= 0 && alpha <= 1 ? alpha : 1;
    } catch {
        return 1;
    }
}

/** Reads a theme colour as {@link Rgba}; a value no colour calculation reads yields `fallback`. */
function rgbaOf(value: unknown, fallback: string): Rgba {
    const source = typeof value === 'string' && alphaOf(value, 1) !== undefined ? value : fallback;
    const solid = alphaOf(source, 1) as string; // MUI's comma syntax, alpha 1
    const parsed = decomposeColor(solid);
    let values = parsed.values;
    if (parsed.type.startsWith('hsl')) {
        values = decomposeColor(hslToRgb(solid)).values;
    } else if (parsed.type === 'color') {
        values = values.map(channel => channel * 255) as typeof values;
    }
    return { rgb: [values[0], values[1], values[2]], alpha: declaredAlpha(source) };
}

/** `overlay` at `opacity` (times its own alpha) over the opaque `base`, as opaque `rgb()`. */
function composite(base: Rgba, overlay: Rgba, opacity: number): string {
    const weight = Math.max(0, Math.min(1, opacity * overlay.alpha));
    const channel = (index: number): number => Math.round(base.rgb[index] * (1 - weight) + overlay.rgb[index] * weight);
    return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
}

/** Black or white, whichever contrasts more with `surface`. */
function blackOrWhite(surface: string): '#000' | '#fff' {
    return getContrastRatio('#000', surface) >= getContrastRatio('#fff', surface) ? '#000' : '#fff';
}

/**
 * The colour lightened (dark surface) or darkened (light surface) in small steps until it
 * reaches `minContrast` on `surface`. The last step is white or black.
 */
function readableOn(surface: string, color: string, minContrast = MIN_CONTRAST): string {
    const towardsWhite = blackOrWhite(surface) === '#fff';
    for (let step = 0; step * CONTRAST_STEP < 1; step++) {
        const coefficient = step * CONTRAST_STEP;
        const candidate = towardsWhite ? lighten(color, coefficient) : darken(color, coefficient);
        if (getContrastRatio(candidate, surface) >= minContrast) {
            return candidate;
        }
    }
    return blackOrWhite(surface);
}

/**
 * {@link readableOn} for several surfaces at once: stepped in the direction the first surface asks
 * for until the colour reaches `minContrast` on every one. The last step is white or black.
 */
function readableOnAll(surfaces: readonly string[], color: string, minContrast: number): string {
    const towardsWhite = blackOrWhite(surfaces[0]) === '#fff';
    const reaches = (candidate: string): boolean =>
        surfaces.every(surface => getContrastRatio(candidate, surface) >= minContrast);
    for (let step = 0; step * CONTRAST_STEP < 1; step++) {
        const coefficient = step * CONTRAST_STEP;
        const candidate = towardsWhite ? lighten(color, coefficient) : darken(color, coefficient);
        if (reaches(candidate)) {
            return candidate;
        }
    }
    return towardsWhite ? '#fff' : '#000';
}

/** The palette slot colour a tone derives from. */
function slotOf(theme: Theme, tone: HeatingTone): unknown {
    switch (tone) {
        case 'störung':
        case 'hinweis':
            return theme.palette.error?.main;
        case 'heizt':
            return theme.palette.warning?.main;
        case 'kühl':
            return theme.palette.info?.main;
        case 'neutral':
            return theme.palette.text?.secondary;
    }
}

/**
 * The colours of a tone in the given theme.
 *
 * @param theme - The resolved collection theme (`useCollectionTheme`).
 * @param tone - The tone the chip, dot or hint line names.
 * @returns Opaque surface, text with at least 4.5:1 on it, and the sign.
 */
export function toneColors(theme: Theme, tone: HeatingTone): ToneColors {
    const mode = theme.palette.mode === 'dark' ? 'dark' : 'light';
    const fallback = FALLBACK[mode];
    const paper = rgbaOf(theme.palette.background?.paper, fallback.paper);
    const base: Rgba = { rgb: paper.rgb, alpha: 1 };
    const slot = rgbaOf(slotOf(theme, tone), fallback.text);
    const mark = tone === 'störung' || tone === 'hinweis' ? 'triangle' : null;

    if (tone === 'störung') {
        const surface = composite(base, slot, 1);
        return { surface, text: blackOrWhite(surface), mark };
    }
    const surface = composite(base, slot, TINT_ALPHA[mode]);
    const slotOnSurface = composite(rgbaOf(surface, fallback.paper), slot, 1);
    return { surface, text: readableOn(surface, slotOnSurface), mark };
}

/** The colours of the Bedienakzent. */
export interface AccentColors {
    /** Opaque line colour for the ring's arc and handle, at least 3:1 on the paper. */
    line: string;
    /** Opaque tinted surface: the lit pill, the ± keys, the ring's track, the Kartenkopf symbol. */
    surface: string;
    /** Opaque hover surface, a step stronger than {@link AccentColors.surface}. */
    hover: string;
    /** Opaque sign and text colour on the surface, at least 4.5:1 on the surface and its hover. */
    text: string;
}

/**
 * The colours of the Bedienakzent in the given theme: the theme's primary colour in the shades of a
 * Tönung (ADR-0124 Nachtrag 2026-11-27).
 *
 * @param theme - The resolved collection theme (`useCollectionTheme`).
 * @returns Opaque line, surface, hover and text colours.
 */
export function accentColors(theme: Theme): AccentColors {
    const mode = theme.palette.mode === 'dark' ? 'dark' : 'light';
    const fallback = FALLBACK[mode];
    const paperRgba = rgbaOf(theme.palette.background?.paper, fallback.paper);
    const base: Rgba = { rgb: paperRgba.rgb, alpha: 1 };
    const paper = composite(base, base, 1);
    const primary = rgbaOf(theme.palette.primary?.main, fallback.primary);

    const surface = composite(base, primary, TINT_ALPHA[mode]);
    const hover = composite(base, primary, TINT_ALPHA[mode] * HOVER_TINT_FACTOR);
    const primaryOnPaper = composite(base, primary, 1);
    // A sign readable on the stronger hover tint reads on the rest tint as well; checked by test.
    const onHover = readableOn(hover, primaryOnPaper);
    const text = getContrastRatio(onHover, surface) >= MIN_CONTRAST ? onHover : readableOn(surface, onHover);
    return { line: readableOn(paper, primaryOnPaper, MIN_GRAPHIC_CONTRAST), surface, hover, text };
}

/** The colours of the Neutralstufe. */
export interface NeutralColors {
    /** Opaque line colour (pill borders, the readings bar's rule), at least 2:1 on every card. */
    line: string;
    /** Opaque colour of the scale's ticks, at least 3:1 on every card. */
    tick: string;
    /** Opaque label colour, at least 4.5:1 on every card and on the pill surface and its hover. */
    label: string;
    /** Translucent primary: the resting pill's faint surface. */
    surface: string;
    /** Translucent primary, a step stronger than {@link NeutralColors.surface}: the resting pill's hover. */
    hover: string;
}

/**
 * The colours of the Neutralstufe in the given theme: the quiet parts with a light primary hue
 * (ADR-0124 Nachtrag 2 2026-11-27).
 *
 * @param theme - The resolved collection theme (`useCollectionTheme`).
 * @returns Opaque line, tick and label colours, and a translucent surface and hover.
 */
export function neutralColors(theme: Theme): NeutralColors {
    const mode = theme.palette.mode === 'dark' ? 'dark' : 'light';
    const fallback = FALLBACK[mode];
    const paperRgba = rgbaOf(theme.palette.background?.paper, fallback.paper);
    const base: Rgba = { rgb: paperRgba.rgb, alpha: 1 };
    const paper = composite(base, base, 1);
    const cards =
        mode === 'dark' ? [paper, composite(base, { rgb: [255, 255, 255], alpha: 1 }, MAX_CARD_OVERLAY)] : [paper];
    const primary = rgbaOf(theme.palette.primary?.main, fallback.primary);

    const secondaryOnPaper = composite(base, rgbaOf(theme.palette.text?.secondary, fallback.text), 1);
    const hue = rgbaOf(composite(rgbaOf(secondaryOnPaper, fallback.text), primary, NEUTRAL_HUE_SHARE), fallback.text);

    /** The hue over the paper, from faint to full, until it reaches `minContrast` on every card. */
    const quiet = (minContrast: number): string => {
        for (let opacity = NEUTRAL_LINE_START; opacity < 1; opacity += CONTRAST_STEP) {
            const candidate = composite(base, hue, opacity);
            if (cards.every(card => getContrastRatio(candidate, card) >= minContrast)) {
                return candidate;
            }
        }
        return readableOnAll(cards, composite(base, hue, 1), minContrast);
    };

    const translucent = (opacity: number): string => {
        const alpha = Math.round(opacity * primary.alpha * 1000) / 1000;
        const [r, g, b] = primary.rgb.map(channel => Math.round(channel));
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const surfaceOpacity = NEUTRAL_SURFACE_ALPHA[mode];
    const surface = translucent(surfaceOpacity);
    const hover = translucent(surfaceOpacity * HOVER_TINT_FACTOR);
    const beneath = cards.flatMap(card => {
        const under = rgbaOf(card, fallback.paper);
        return [
            card,
            composite(under, primary, surfaceOpacity),
            composite(under, primary, surfaceOpacity * HOVER_TINT_FACTOR),
        ];
    });

    return {
        line: quiet(MIN_LINE_CONTRAST),
        tick: quiet(MIN_GRAPHIC_CONTRAST),
        label: readableOnAll(beneath, composite(base, hue, 1), MIN_CONTRAST),
        surface,
        hover,
    };
}
