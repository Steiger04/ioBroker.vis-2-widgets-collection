/**
 * Extracts a usable color from a color value or gradient.
 *
 * @module lib/helper/extractColorFromValue
 * @remarks
 * For normal colors (Hex, RGB, RGBA), the value is returned unchanged.
 * For gradients (linear-gradient, radial-gradient), the color at 50% position
 * is calculated through linear interpolation between adjacent color stops.
 *
 * This is useful for extracting a representative color from gradients to use
 * in contexts that only support solid colors (e.g., icon colors, text colors).
 *
 * Uses centralized COLOR_PATTERNS from colorValidation.ts for consistency.
 */

import { COLOR_PATTERNS } from './colorValidation';

/**
 * Color stop interface for gradient parsing
 */
interface ColorStop {
    color: string; // Original color string (hex, rgb, rgba)
    position: number; // Position 0-100
}

/**
 * RGB color interface with alpha channel
 */
interface RGBColor {
    r: number; // 0-255
    g: number; // 0-255
    b: number; // 0-255
    a: number; // 0-1 (Alpha)
}

/**
 * Converts a hex color string to RGB color object.
 *
 * Supports 3, 6, and 8 character hex formats:
 * - #RGB (3 chars) → expands to #RRGGBB
 * - #RRGGBB (6 chars) → standard format
 * - #RRGGBBAA (8 chars) → includes alpha channel
 *
 * @param hex - Hex color string with leading #
 * @returns RGB color object or null if invalid format
 */
function hexToRGB(hex: string): RGBColor | null {
    if (!hex || typeof hex !== 'string') {
        return null;
    }

    const match = hex.match(COLOR_PATTERNS.HEX);

    if (!match) {
        return null;
    }

    let hexValue = match[1];

    // Expand 3-char hex to 6-char
    if (hexValue.length === 3) {
        hexValue = hexValue
            .split('')
            .map(char => char + char)
            .join('');
    }

    // Parse RGB values
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);

    // Parse alpha if present (8-char hex)
    let a = 1.0;
    if (hexValue.length === 8) {
        const alphaValue = parseInt(hexValue.substring(6, 8), 16);
        a = Math.round((alphaValue / 255) * 1000) / 1000; // Round to 3 decimals
    }

    return { r, g, b, a };
}

/**
 * Converts an RGB/RGBA string to RGB color object.
 *
 * Supports both rgb() and rgba() formats.
 * Alpha defaults to 1.0 for rgb() format.
 *
 * @param rgb - RGB or RGBA string
 * @returns RGB color object or null if invalid format
 */
function rgbToRGB(rgb: string): RGBColor | null {
    if (!rgb || typeof rgb !== 'string') {
        return null;
    }

    const match = rgb.match(COLOR_PATTERNS.RGB);

    if (!match) {
        return null;
    }

    // Extract values from the match
    const components = rgb.match(/\d+\.?\d*/g);
    if (!components || components.length < 3) {
        return null;
    }

    const r = parseInt(components[0], 10);
    const g = parseInt(components[1], 10);
    const b = parseInt(components[2], 10);
    const a = components[3] !== undefined ? parseFloat(components[3]) : 1.0;

    // Validate ranges
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0 || a > 1) {
        return null;
    }

    return { r, g, b, a: Math.round(a * 1000) / 1000 }; // Round to 3 decimals
}

/**
 * Parses a color string to RGB color object.
 *
 * Dispatcher function that detects color format and calls appropriate parser.
 * Supports: Hex (#RGB, #RRGGBB, #RRGGBBAA), RGB, and RGBA formats.
 *
 * @param color - Color string in any supported format
 * @returns RGB color object or null if invalid format
 */
function parseColorToRGB(color: string): RGBColor | null {
    if (!color || typeof color !== 'string') {
        return null;
    }

    const trimmedColor = color.trim();

    // Hex format
    if (trimmedColor.startsWith('#')) {
        return hexToRGB(trimmedColor);
    }

    // RGB/RGBA format - case-insensitive
    if (trimmedColor.toLowerCase().startsWith('rgb')) {
        return rgbToRGB(trimmedColor);
    }

    return null;
}

/**
 * Parses gradient color stops from a gradient string.
 *
 * Extracts color values and positions from linear-gradient or radial-gradient strings.
 * Missing positions are distributed evenly (0%, 50%, 100% for 3 stops, etc.).
 * Vendor prefixes and direction keywords are ignored.
 *
 * @param gradient - Gradient string (linear-gradient or radial-gradient)
 * @returns Array of color stops sorted by position, or null if invalid
 */
function parseGradientColorStops(gradient: string): ColorStop[] | null {
    if (!gradient || typeof gradient !== 'string') {
        return null;
    }

    const colorStopRegex = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi;
    const matches = Array.from(gradient.matchAll(colorStopRegex));

    if (matches.length < 2) {
        return null; // Invalid gradient: need at least 2 color stops
    }

    const colorStops: ColorStop[] = matches.map((match, index) => {
        const color = match[1];
        let position: number;

        if (match[2]) {
            // Position explicitly specified
            position = parseFloat(match[2]);
        } else {
            // Calculate evenly distributed position
            position = (index / (matches.length - 1)) * 100;
        }

        return { color, position };
    });

    // Sort by position (ascending)
    colorStops.sort((a, b) => a.position - b.position);

    return colorStops;
}

/**
 * Interpolates color at 50% position between color stops.
 *
 * Finds two adjacent color stops around 50% position and performs linear
 * interpolation for RGB and alpha channels. Handles edge cases where all
 * stops are below or above 50%, or there's an exact stop at 50%.
 *
 * @param colorStops - Array of color stops sorted by position
 * @returns Interpolated color as rgba() string, or null if invalid
 */
function interpolateColorAt50(colorStops: ColorStop[]): string | null {
    if (!colorStops || colorStops.length < 2) {
        return null;
    }

    // Find exact stop at 50%
    const exactStop = colorStops.find(stop => stop.position === 50);
    if (exactStop) {
        const rgb = parseColorToRGB(exactStop.color);
        if (!rgb) {
            return null;
        }
        return rgb.a === 1 ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }

    // Find adjacent stops around 50%
    let lowerStop: ColorStop | null = null;
    let upperStop: ColorStop | null = null;

    for (let i = 0; i < colorStops.length; i++) {
        if (colorStops[i].position <= 50) {
            lowerStop = colorStops[i];
        }
        if (colorStops[i].position > 50 && !upperStop) {
            upperStop = colorStops[i];
            break;
        }
    }

    // Edge case: All stops below 50%
    if (!upperStop && lowerStop) {
        const rgb = parseColorToRGB(lowerStop.color);
        if (!rgb) {
            return null;
        }
        return rgb.a === 1 ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }

    // Edge case: All stops above 50%
    if (!lowerStop && upperStop) {
        const rgb = parseColorToRGB(upperStop.color);
        if (!rgb) {
            return null;
        }
        return rgb.a === 1 ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }

    // Should not happen with valid gradient, but defensive check
    if (!lowerStop || !upperStop) {
        return null;
    }

    // Parse both colors
    const lowerRGB = parseColorToRGB(lowerStop.color);
    const upperRGB = parseColorToRGB(upperStop.color);

    if (!lowerRGB || !upperRGB) {
        return null;
    }

    // Calculate interpolation factor
    const range = upperStop.position - lowerStop.position;

    // Handle division by zero (identical positions)
    if (range === 0) {
        const rgb = upperRGB;
        return rgb.a === 1 ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }

    const factor = (50 - lowerStop.position) / range;

    // Interpolate each channel
    const r = Math.round(lowerRGB.r + (upperRGB.r - lowerRGB.r) * factor);
    const g = Math.round(lowerRGB.g + (upperRGB.g - lowerRGB.g) * factor);
    const b = Math.round(lowerRGB.b + (upperRGB.b - lowerRGB.b) * factor);
    const a = Math.round((lowerRGB.a + (upperRGB.a - lowerRGB.a) * factor) * 1000) / 1000; // 3 decimals

    // Return as rgba string
    return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Extracts a usable color from a color value or gradient.
 *
 * For normal colors (Hex, RGB, RGBA), the value is returned unchanged.
 * For gradients (linear-gradient, radial-gradient), the color at 50% position
 * is calculated through linear interpolation between adjacent color stops.
 *
 * This is useful for extracting a representative color from gradients to use
 * in contexts that only support solid colors (e.g., icon colors, text colors).
 *
 * @param value - Color value (Hex, RGB, RGBA) or gradient (linear/radial)
 * @returns The color as string (for gradients: interpolated color at 50%), or null on error
 * @example
 * // Normal colors (returned unchanged)
 * extractColorFromValue('#ff0000') // → '#ff0000'
 * extractColorFromValue('rgba(255, 0, 0, 0.5)') // → 'rgba(255, 0, 0, 0.5)'
 * @example
 * // Linear gradient with explicit stops
 * extractColorFromValue('linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)')
 * // → 'rgba(0, 255, 0, 1)' (exact color at 50%)
 * @example
 * // Invalid inputs
 * extractColorFromValue(null) // → null
 * extractColorFromValue('invalid-color') // → null
 */
export function extractColorFromValue(value: string | null | undefined): string | null {
    // Null/undefined check
    if (value == null) {
        return null;
    }

    // Type guard for string
    if (typeof value !== 'string') {
        return null;
    }

    // Trim and empty check
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
        return null;
    }

    // Check if value is a gradient using centralized pattern
    const isGradient = COLOR_PATTERNS.GRADIENT_PREFIX.test(trimmedValue);

    // For solid colors, validate and return unchanged
    if (!isGradient) {
        // Validate that it's a valid color format
        const validColor = parseColorToRGB(trimmedValue);
        if (!validColor) {
            return null;
        }
        return trimmedValue;
    }

    // For gradients, parse and interpolate at 50%
    try {
        const colorStops = parseGradientColorStops(trimmedValue);
        if (!colorStops) {
            return null;
        }

        const interpolatedColor = interpolateColorAt50(colorStops);
        return interpolatedColor;
    } catch {
        // Parse error: return null
        return null;
    }
}
