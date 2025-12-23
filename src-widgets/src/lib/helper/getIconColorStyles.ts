import { isBase64Icon } from './isBase64Icon';

/**
 * Interface for icon color styles
 */
export interface IconColorStyles {
    color?: string;
    filter?: string;
    transform?: string;
}

/**
 * Returns CSS styles for colored icons.
 *
 * This function applies the CSS filter technique (drop-shadow + translateY)
 * to color Base64-encoded icons. The technique works for all
 * Base64 image formats (SVG, PNG, JPG, GIF), but not for regular URLs.
 *
 * The technique:
 * 1. Sets the icon color
 * 2. Shifts the icon 10000px down (translateY)
 * 3. Creates a shadow at the original position (drop-shadow)
 * 4. The result: A colored icon at the original position
 *
 * @param iconSrc - The icon string (data URI or URL)
 * @param iconColor - The desired color for the icon
 * @returns Object with CSS styles or empty object
 */
export const getIconColorStyles = (
    iconSrc: string | null | undefined,
    iconColor: string | null | undefined,
): IconColorStyles => {
    // Check if the icon is Base64-encoded
    if (!isBase64Icon(iconSrc)) {
        return {};
    }

    // Check if a color is specified
    if (!iconColor || iconColor === '') {
        return {};
    }

    // Return the filter styles
    return {
        color: iconColor,
        filter: 'drop-shadow(0px 10000px 0)',
        transform: 'translateY(-10000px)',
    };
};
