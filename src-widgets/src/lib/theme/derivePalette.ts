/**
 * Derive a harmonious secondary palette color from a primary.
 *
 * @module lib/theme/derivePalette
 * @remarks
 * Pure helper shared by the studio panel preview AND the runtime hook
 * ({@link module:hooks/useCollectionTheme.useCollectionTheme}), so the "derived
 * secondary" is identical in the preview and at runtime. The derivation is an
 * analogous hue shift in HSL space — a small, predictable offset that stays in
 * key with the primary. It only applies while `palette.secondary.main` is NOT
 * explicitly set, so a manual override always wins.
 */

import type { UserTheme } from './themeTypes';
import { getNestedValue, setNestedValue } from './themeUtils';

/** Hue offset (degrees) added to the primary hue for the analogous secondary. */
const HUE_OFFSET = 30;
/** Floor for the derived saturation, so muted primaries still read as color. */
const SATURATION_FLOOR = 45;
/** Fixed lightness so the secondary sits as a sibling next to the primary. */
const LIGHTNESS = 46;
/** MUI's default secondary — safe fallback when the primary cannot be parsed. */
const DEFAULT_SECONDARY = '#ba68c8';

/**
 * Converts a hex color (`#rgb` / `#rrggbb`, with or without `#`) to HSL.
 *
 * @returns `[H(0-360), S(0-100), L(0-100)]`, or `null` if the input is not hex.
 */
function hexToHsl(hex: string): [number, number, number] | null {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
    if (!match) {
        return null;
    }
    let digits = match[1];
    if (digits.length === 3) {
        digits = digits
            .split('')
            .map(char => char + char)
            .join('');
    }
    const r = parseInt(digits.slice(0, 2), 16) / 255;
    const g = parseInt(digits.slice(2, 4), 16) / 255;
    const b = parseInt(digits.slice(4, 6), 16) / 255;
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

/** Converts HSL (`H 0-360, S/L 0-100`) to a `#rrggbb` hex string. */
function hslToHex(h: number, s: number, l: number): string {
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
    const toHex = (value: number): string =>
        Math.round((value + m) * 255)
            .toString(16)
            .padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Derives a secondary palette color from a primary color.
 *
 * Accepts a CSS hex color. Non-hex inputs (named colors, `hsl()`, `transparent`,
 * invalid strings) fall back to {@link DEFAULT_SECONDARY} so the result is always
 * a usable color — derivation simply cannot run on an unparseable input.
 *
 * @param primaryMain - The primary color, ideally a hex string.
 * @returns A hex color derived as an analogous sibling of the primary.
 */
export function deriveSecondary(primaryMain: string): string {
    const hsl = hexToHsl(primaryMain);
    if (!hsl) {
        return DEFAULT_SECONDARY;
    }
    const [hue] = hsl;
    const saturation = Math.max(hsl[1], SATURATION_FLOOR);
    return hslToHex(hue + HUE_OFFSET, saturation, LIGHTNESS);
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
