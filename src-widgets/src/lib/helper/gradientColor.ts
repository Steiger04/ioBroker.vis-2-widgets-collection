/**
 * Checks if a color value is a CSS gradient (linear or radial).
 *
 * @param value - Color string to validate
 * @returns true if gradient, false if solid color, null if invalid/empty
 * @example
 * isGradientColor('linear-gradient(red, blue)') // true
 * isGradientColor('radial-gradient(circle, red, blue)') // true
 * isGradientColor('#ff0000') // false
 * isGradientColor(null) // null
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

    // Test for linear-gradient() or radial-gradient() CSS functions
    const gradientRegex = /^(linear-gradient|radial-gradient)\(/i;
    const isGradient = gradientRegex.test(trimmedValue);

    if (isGradient) {
        return value;
    }

    return null;
}
