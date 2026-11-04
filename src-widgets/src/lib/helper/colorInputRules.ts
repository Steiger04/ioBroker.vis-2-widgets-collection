/**
 * Regeln für Farbeingaben — the one decision what a colour field stores for a text.
 *
 * @module lib/helper/colorInputRules
 * @remarks
 * Pure (ADR-0102 addendum). Input: the text, where it came from (`typed` into a text field or
 * `picked` in the Farbwähler) and whether the field allows gradients. Result: the value to
 * store, `empty` (Erben — the caller stores `null`) or `invalid` (the caller marks the field and
 * stores nothing). Rules, in order:
 * 1. trimmed empty → `empty`;
 * 2. a gradient (`linear-gradient(…)` / `radial-gradient(…)`) → unchanged where the field allows
 *    gradients, otherwise `invalid` with reason `gradientNotAllowed` — never reduced to a solid;
 * 3. a picked solid colour a colour calculation can read (hex, `rgb()` / `rgba()`) → `#rrggbb`,
 *    with alpha < 1 `#rrggbbaa`;
 * 4. otherwise valid when the browser accepts it as a CSS colour (`isCssColor`, default
 *    `CSS.supports('color', …)`): colour names, `transparent`, `hsl()`, `var(--…)` included.
 *    Typed values are stored as typed (trimmed), never normalised.
 *
 * Replaced the former regex validation (`validateColorInput`, removed) in the editor and in the
 * Auflösungskaskade (`resolveEffectiveColor` reads stored values as `typed` with gradients
 * allowed), so every value the editor stores also takes effect in swatch and widget.
 */

import { COLOR_PATTERNS } from './colorValidation';

/** Where a colour text came from: typed into a text field, or picked in the Farbwähler. */
export type ColorInputSource = 'typed' | 'picked';

/** Why a colour text cannot be stored. */
export type ColorInputInvalidReason = 'gradientNotAllowed' | 'notAColor';

/** What a colour field stores for a text. */
export type ColorInputResult =
    | { kind: 'value'; value: string }
    | { kind: 'empty' }
    | { kind: 'invalid'; reason: ColorInputInvalidReason };

/** Options of {@link applyColorInputRules}. */
export interface ColorInputOptions {
    /** Typed text is stored as typed; picked solid colours are normalised to hex. */
    source: ColorInputSource;
    /** Whether the field accepts gradients (`false` for `noGradient` / solid-only fields). */
    allowGradient: boolean;
    /** Whether the browser accepts the (trimmed) text as a CSS colour. Default {@link isBrowserCssColor}. */
    isCssColor?: (text: string) => boolean;
}

/**
 * The browser's CSS colour check: `CSS.supports('color', text)`. Where no `CSS.supports` exists
 * (node, old test environments) only hex and `rgb()` / `rgba()` count — the former regex rule.
 *
 * @param text - Trimmed colour text.
 * @returns Whether the text is a CSS colour.
 */
export function isBrowserCssColor(text: string): boolean {
    const css = (globalThis as { CSS?: { supports?: (property: string, value: string) => boolean } }).CSS;
    if (typeof css?.supports === 'function') {
        return css.supports('color', text);
    }
    return COLOR_PATTERNS.HEX.test(text) || COLOR_PATTERNS.RGB.test(text);
}

/** `rgb()` / `rgba()` in comma or space syntax; alpha as number or percent. */
const RGB_FUNCTION =
    /^rgba?\(\s*(-?[\d.]+)\s*[,\s]\s*(-?[\d.]+)\s*[,\s]\s*(-?[\d.]+)\s*(?:[,/]\s*(-?[\d.]+)(%?)\s*)?\)$/i;
/** `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`. */
const HEX_COLOR = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

/**
 * Limits a number to a range.
 *
 * @param value - The number.
 * @param min - Lower bound.
 * @param max - Upper bound.
 * @returns The number within `min..max`.
 */
export const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

/**
 * One colour channel as two hex digits (rounded, clamped to 0..255).
 *
 * @param value - Channel value.
 * @returns Two lowercase hex digits.
 */
export const hexByte = (value: number): string =>
    Math.round(clamp(value, 0, 255))
        .toString(16)
        .padStart(2, '0');

/**
 * The hex a solid colour is stored as: `#rrggbb` when its alpha byte is ff, else `#rrggbbaa`.
 *
 * @param r - Red 0..255.
 * @param g - Green 0..255.
 * @param b - Blue 0..255.
 * @param alpha - Alpha 0..1.
 * @returns The lowercase hex.
 */
export function rgbaToHex(r: number, g: number, b: number, alpha: number): string {
    const a = Math.round(clamp(alpha, 0, 1) * 255);
    return `#${hexByte(r)}${hexByte(g)}${hexByte(b)}${a === 255 ? '' : hexByte(a)}`;
}

/**
 * Reads `#rgb` / `#rgba` / `#rrggbb` / `#rrggbbaa` (short forms expanded).
 *
 * @param text - Trimmed hex text with `#`.
 * @returns Channels 0..255 and the alpha 0..1 — `undefined` without alpha digits —, or null.
 */
export function parseHexColor(text: string): { r: number; g: number; b: number; alpha?: number } | null {
    const hex = HEX_COLOR.exec(text);
    if (!hex) {
        return null;
    }
    let digits = hex[1].toLowerCase();
    if (digits.length <= 4) {
        digits = [...digits].map(d => d + d).join('');
    }
    const byte = (i: number): number => parseInt(digits.slice(i * 2, i * 2 + 2), 16);
    return { r: byte(0), g: byte(1), b: byte(2), ...(digits.length === 8 ? { alpha: byte(3) / 255 } : {}) };
}

/**
 * A solid colour as `#rrggbb` / `#rrggbbaa`, or undefined when no colour calculation reads it.
 *
 * @param text - Trimmed colour text.
 * @returns The normalised hex, or undefined.
 */
export function normaliseSolid(text: string): string | undefined {
    const hex = parseHexColor(text);
    if (hex) {
        return rgbaToHex(hex.r, hex.g, hex.b, hex.alpha ?? 1);
    }
    const rgb = RGB_FUNCTION.exec(text);
    if (rgb) {
        const [, r, g, b, a, percent] = rgb;
        const alpha = a === undefined ? 1 : Number(a) / (percent ? 100 : 1);
        return rgbaToHex(Number(r), Number(g), Number(b), alpha);
    }
    return undefined;
}

/**
 * Decides what a colour field stores for a text (Regeln für Farbeingaben, ADR-0102).
 *
 * @param text - The colour text (typed or picked); null/undefined count as empty.
 * @param options - Source, whether gradients are allowed, optional CSS colour check.
 * @returns The value to store, `empty` (Erben, stored as null) or `invalid` with its reason.
 * @example
 * applyColorInputRules('rgba(255, 0, 0, 0.5)', { source: 'picked', allowGradient: false })
 * // → { kind: 'value', value: '#ff000080' }
 * @example
 * applyColorInputRules('linear-gradient(red, blue)', { source: 'typed', allowGradient: false })
 * // → { kind: 'invalid', reason: 'gradientNotAllowed' }
 */
export function applyColorInputRules(text: string | null | undefined, options: ColorInputOptions): ColorInputResult {
    const trimmed = typeof text === 'string' ? text.trim() : '';
    if (trimmed === '') {
        return { kind: 'empty' };
    }

    if (COLOR_PATTERNS.GRADIENT_PREFIX.test(trimmed)) {
        if (!options.allowGradient) {
            return { kind: 'invalid', reason: 'gradientNotAllowed' };
        }
        return COLOR_PATTERNS.GRADIENT.test(trimmed)
            ? { kind: 'value', value: trimmed }
            : { kind: 'invalid', reason: 'notAColor' };
    }

    if (options.source === 'picked') {
        const hex = normaliseSolid(trimmed);
        if (hex !== undefined) {
            return { kind: 'value', value: hex };
        }
    }

    const isCssColor = options.isCssColor ?? isBrowserCssColor;
    return isCssColor(trimmed) ? { kind: 'value', value: trimmed } : { kind: 'invalid', reason: 'notAColor' };
}
