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
 * - CollectionGradientColorPicker validation
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
 * Validation result returned by validateColorInput.
 */
export interface ColorValidationResult {
    /** Whether the input is a valid color or empty string */
    isValid: boolean;
    /** The trimmed/normalized value */
    normalizedValue: string;
    /** The classified color type */
    colorType: ColorType;
}

/**
 * Validates color input string and returns normalized value with type classification.
 *
 * Validation rules:
 * - Empty or whitespace-only strings are considered valid and normalized to ''
 * - Hex colors must match #RGB, #RRGGBB, or #RRGGBBAA format (case-insensitive)
 * - RGB/RGBA must have valid syntax with numeric components
 * - Gradients must start with linear-gradient or radial-gradient
 * - All valid inputs are trimmed and returned as normalizedValue
 *
 * @param value - Input string to validate.
 * @returns Validation result with isValid flag, normalized value, and color type.
 * @example
 * validateColorInput('#ff0000')
 * // → { isValid: true, normalizedValue: '#ff0000', colorType: 'hex' }
 * @example
 * validateColorInput('rgba(255, 0, 0, 0.5)')
 * // → { isValid: true, normalizedValue: 'rgba(255, 0, 0, 0.5)', colorType: 'rgb' }
 * @example
 * validateColorInput('linear-gradient(red, blue)')
 * // → { isValid: true, normalizedValue: 'linear-gradient(red, blue)', colorType: 'gradient' }
 * @example
 * validateColorInput('')
 * // → { isValid: true, normalizedValue: '', colorType: 'empty' }
 * @example
 * validateColorInput('invalid')
 * // → { isValid: false, normalizedValue: 'invalid', colorType: 'invalid' }
 */
export function validateColorInput(value: string): ColorValidationResult {
    // Handle empty input
    if (!value || value.trim() === '') {
        return { isValid: true, normalizedValue: '', colorType: 'empty' };
    }

    const trimmedValue = value.trim();

    // Hex color validation: #RGB, #RRGGBB, #RRGGBBAA
    if (COLOR_PATTERNS.HEX.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue, colorType: 'hex' };
    }

    // RGB/RGBA validation: rgb(r, g, b) or rgba(r, g, b, a)
    if (COLOR_PATTERNS.RGB.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue, colorType: 'rgb' };
    }

    // Gradient validation: linear-gradient(...) or radial-gradient(...)
    if (COLOR_PATTERNS.GRADIENT.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue, colorType: 'gradient' };
    }

    return { isValid: false, normalizedValue: trimmedValue, colorType: 'invalid' };
}

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
