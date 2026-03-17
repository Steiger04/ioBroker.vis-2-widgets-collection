/**
 * Checks if a color value is a CSS gradient (linear or radial).
 *
 * @module lib/helper/gradientColor
 * @remarks
 * Re-exports isGradientColor from colorValidation for backward compatibility.
 * The implementation is now centralized in colorValidation.ts.
 * @example
 * isGradientColor('linear-gradient(red, blue)') // returns the value
 * isGradientColor('#ff0000') // returns null
 */

import { isGradientColor as isGradientColorImpl } from './colorValidation';

/**
 * Checks if a color value is a CSS gradient (linear or radial).
 *
 * @param value - Color string to validate
 * @returns The value if it's a gradient, null if solid color or invalid
 * @example
 * gradientColor('linear-gradient(red, blue)') // 'linear-gradient(red, blue)'
 * gradientColor('radial-gradient(circle, red, blue)') // 'radial-gradient(circle, red, blue)'
 * gradientColor('#ff0000') // null
 * gradientColor(null) // null
 */
export function gradientColor(value: string | null | undefined): string | null {
    // Return null for null/undefined values
    if (value == null) {
        return null;
    }

    // Return null for non-string types
    if (typeof value !== 'string') {
        return null;
    }

    // Normalize whitespace and check for empty string
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
        return null;
    }

    // Use centralized gradient detection
    if (isGradientColorImpl(value)) {
        return value;
    }

    return null;
}
