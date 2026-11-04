/**
 * Centralized color validation patterns and utilities.
 *
 * @module lib/helper/colorValidation
 * @remarks
 * This module provides centralized color validation patterns and utilities
 * used across the widget collection to ensure consistent color handling.
 *
 * Supports multiple color formats:
 * - Hex colors: #fff, #ffffff, #ffffffff (with alpha)
 * - RGB/RGBA: rgb(255, 255, 255), rgba(255, 255, 255, 0.5)
 * - Gradients: linear-gradient(...), radial-gradient(...)
 */

/**
 * Centralized color validation regex patterns.
 *
 * @remarks
 * These patterns are used consistently across:
 * - the Regeln für Farbeingaben (`colorInputRules`: gradient detection, hex/rgb fallback)
 * - extractColorFromValue parsing
 * - gradientColor detection
 */
export const COLOR_PATTERNS = {
    /**
     * Hex color validation: #RGB, #RRGGBB, #RRGGBBAA
     */
    HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,

    /**
     * RGB/RGBA validation: rgb(r, g, b) or rgba(r, g, b, a)
     */
    RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i,

    /**
     * Full gradient validation: linear-gradient(...) or radial-gradient(...)
     */
    GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i,

    /**
     * Gradient prefix detection: linear-gradient( or radial-gradient(
     * Used for quick gradient detection without full validation.
     */
    GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i,
} as const;

/**
 * Color type classification.
 *
 * @remarks
 * Used to classify color values for appropriate handling.
 */
export type ColorType = 'hex' | 'rgb' | 'gradient' | 'empty' | 'invalid';

/**
 * Checks if a color value is a CSS gradient (linear or radial).
 *
 * @param value - Color string to validate
 * @returns true if gradient, false if solid color
 * @example
 * isGradientColor('linear-gradient(red, blue)') // true
 * isGradientColor('radial-gradient(circle, red, blue)') // true
 * isGradientColor('#ff0000') // false
 * isGradientColor('') // false
 */
export function isGradientColor(value: string | null | undefined): boolean {
    if (value == null || typeof value !== 'string') {
        return false;
    }

    const trimmedValue = value.trim();
    if (trimmedValue === '') {
        return false;
    }

    return COLOR_PATTERNS.GRADIENT_PREFIX.test(trimmedValue);
}

/**
 * Classifies a color value into its type.
 *
 * @param value - Color string to classify
 * @returns The color type classification
 * @example
 * classifyColor('#ff0000') // 'hex'
 * classifyColor('rgb(255, 0, 0)') // 'rgb'
 * classifyColor('linear-gradient(red, blue)') // 'gradient'
 * classifyColor('') // 'empty'
 * classifyColor('invalid') // 'invalid'
 */
export function classifyColor(value: string | null | undefined): ColorType {
    if (value == null || typeof value !== 'string') {
        return 'invalid';
    }

    const trimmedValue = value.trim();
    if (trimmedValue === '') {
        return 'empty';
    }

    if (COLOR_PATTERNS.HEX.test(trimmedValue)) {
        return 'hex';
    }

    if (COLOR_PATTERNS.RGB.test(trimmedValue)) {
        return 'rgb';
    }

    if (COLOR_PATTERNS.GRADIENT.test(trimmedValue)) {
        return 'gradient';
    }

    return 'invalid';
}
