/**
 * Checks if an icon is a Base64-encoded image.
 *
 * Base64 icons are embedded as data URIs and can be colored using CSS filters.
 * Supported formats: SVG, PNG, JPG/JPEG, GIF.
 *
 * The CSS filter technique (drop-shadow + translateY) works for all Base64 image formats,
 * although coloring works best with SVG graphics.
 *
 * @param icon - The icon string (data URI or URL)
 * @returns true if the icon is a Base64-encoded image, otherwise false
 */
export const isBase64Icon = (icon: string | null | undefined): boolean => {
    if (!icon || typeof icon !== 'string') {
        return false;
    }

    // Detects all common Base64 image formats: SVG, PNG, JPG/JPEG, GIF
    // Case-insensitive check for 'data:image/<format>;base64,'
    return /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(icon);
};
