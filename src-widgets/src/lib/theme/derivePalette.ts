/**
 * Derive a harmonious secondary palette color from a primary.
 *
 * @module lib/theme/derivePalette
 * @remarks
 * Pure helper shared by the studio panel (PaletteSection field + ThemePreviewBlock)
 * AND the runtime hook ({@link module:hooks/useCollectionTheme.useCollectionTheme}),
 * so the "derived secondary" is identical everywhere. The derivation is a **triadic**
 * hue shift (+120°) that keeps the primary's saturation and lightness — clearly
 * different (e.g. blue → magenta) while tracking every change to the primary. It
 * only applies while `palette.secondary.main` is NOT explicitly set, so a manual
 * override always wins.
 *
 * The parser accepts the formats a color picker commonly emits — hex (`#rgb`,
 * `#rrggbb`, `#rrggbbaa`), `rgb()/rgba()`, `hsl()/hsla()` — so an unusual output
 * format can't silently fall back to the default.
 */

import type { UserTheme } from './themeTypes';
import { getNestedValue, setNestedValue } from './themeUtils';

/** Triadic hue offset (degrees): blue → magenta, red → green, etc. */
const HUE_OFFSET = 120;
/** Floor for the derived saturation, so very muted primaries still read as color. */
const SATURATION_FLOOR = 40;
/** MUI's default secondary — safe fallback when the primary cannot be parsed. */
const DEFAULT_SECONDARY = '#ba68c8';

/** Clamps a number to the 0–255 byte range and rounds it. */
function clampByte(value: number): number {
    return Math.max(0, Math.min(255, Math.round(value)));
}

/**
 * Parses a CSS color string into an `[r, g, b]` triple (each 0–255).
 *
 * @returns The RGB triple, or `null` for empty/unparseable input.
 */
function parseColorToRgb(input: string): [number, number, number] | null {
    if (typeof input !== 'string') {
        return null;
    }
    const s = input.trim();
    if (!s) {
        return null;
    }

    // Hex: #rgb, #rrggbb, #rrggbbaa (alpha ignored for palette colors).
    let m = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(s);
    if (m) {
        let digits = m[1];
        if (digits.length === 3) {
            digits = digits
                .split('')
                .map(char => char + char)
                .join('');
        }
        if (digits.length === 8) {
            digits = digits.slice(0, 6); // strip alpha
        }
        return [parseInt(digits.slice(0, 2), 16), parseInt(digits.slice(2, 4), 16), parseInt(digits.slice(4, 6), 16)];
    }

    // rgb() / rgba()
    m = /^rgba?\(\s*([\d.]+)\s*[,\s]\s*([\d.]+)\s*[,\s]\s*([\d.]+)/i.exec(s);
    if (m) {
        return [clampByte(+m[1]), clampByte(+m[2]), clampByte(+m[3])];
    }

    // hsl() / hsla()
    m = /^hsla?\(\s*([\d.]+)(?:deg)?\s*[,\s]\s*([\d.]+)%\s*[,\s]\s*([\d.]+)%/i.exec(s);
    if (m) {
        return hslToRgb(+m[1], +m[2], +m[3]);
    }

    return null;
}

/** Converts RGB (0–255) to HSL `[H(0-360), S(0-100), L(0-100)]`. */
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            default:
                h = (r - g) / d + 4;
        }
        h *= 60;
    }
    return [h, s * 100, l * 100];
}

/** Converts HSL (`H 0-360, S/L 0-100`) to an `[r, g, b]` triple (0–255). */
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    const hue = ((h % 360) + 360) % 360;
    const sat = Math.max(0, Math.min(100, s)) / 100;
    const light = Math.max(0, Math.min(100, l)) / 100;
    const c = (1 - Math.abs(2 * light - 1)) * sat;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = light - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hue < 60) {
        [r, g, b] = [c, x, 0];
    } else if (hue < 120) {
        [r, g, b] = [x, c, 0];
    } else if (hue < 180) {
        [r, g, b] = [0, c, x];
    } else if (hue < 240) {
        [r, g, b] = [0, x, c];
    } else if (hue < 300) {
        [r, g, b] = [x, 0, c];
    } else {
        [r, g, b] = [c, 0, x];
    }
    return [clampByte((r + m) * 255), clampByte((g + m) * 255), clampByte((b + m) * 255)];
}

/** Converts HSL (`H 0-360, S/L 0-100`) to a `#rrggbb` hex string. */
function hslToHex(h: number, s: number, l: number): string {
    const [r, g, b] = hslToRgb(h, s, l);
    const toHex = (value: number): string => value.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Derives a secondary palette color from a primary color.
 *
 * Accepts any common CSS color format (hex, rgb/rgba, hsl/hsla). Unparseable or
 * empty input falls back to {@link DEFAULT_SECONDARY} so the result is always a
 * usable color. Keeps the primary's saturation (floored) and lightness so the
 * secondary tracks the primary's properties, with a triadic hue shift.
 *
 * @param primaryMain - The primary color.
 * @returns A hex color derived as a triadic sibling of the primary.
 */
export function deriveSecondary(primaryMain: string): string {
    const rgb = parseColorToRgb(primaryMain);
    if (!rgb) {
        return DEFAULT_SECONDARY;
    }
    const [h, s, l] = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    return hslToHex(h + HUE_OFFSET, Math.max(s, SATURATION_FLOOR), l);
}

/**
 * Returns a copy of `theme` with a derived `palette.secondary.main` injected.
 *
 * @remarks
 * No-op when the theme has no `palette.primary.main` (nothing to derive from)
 * or already sets `palette.secondary.main` (manual override wins). Used by the
 * runtime hook so the derived secondary applies live and survives save/reload.
 */
export function withDerivedSecondary(theme: UserTheme): UserTheme {
    const primaryMain = getNestedValue<string>(theme, 'palette.primary.main');
    const secondaryMain = getNestedValue<string>(theme, 'palette.secondary.main');
    if (!primaryMain || secondaryMain) {
        return theme;
    }
    return setNestedValue(theme, 'palette.secondary.main', deriveSecondary(primaryMain));
}
