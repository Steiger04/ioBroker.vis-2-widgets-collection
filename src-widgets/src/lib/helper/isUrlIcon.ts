/**
 * Checks if an icon is a URL-based image (not a data URI or icon name).
 *
 * URL-based icons are external resources loaded via relative or absolute paths.
 * Examples: relative paths ('./icon.png', '/local/icon.svg'), absolute URLs ('https://...').
 *
 * Data URIs (Base64-encoded images or inline SVG) are NOT URL-based icons.
 * They start with 'data:' and embed the image data directly in the string.
 *
 * Icon names (like 'mdi-home', 'fa fa-play') are NOT URL-based icons.
 *
 * @param icon - The icon string (URL, data URI, or icon name)
 * @returns true if the icon is a URL-based image, otherwise false
 * @example
 * ```typescript
 * // URL-based icons (returns true)
 * isUrlIcon('/local/icon.png')                   // true
 * isUrlIcon('./assets/icon.svg')                 // true
 * isUrlIcon('https://example.com/icon.png')      // true
 * isUrlIcon('../images/icon.jpg')                // true
 * isUrlIcon('//cdn.example.com/icon.png')        // true
 *
 * // Data URIs (returns false)
 * isUrlIcon('data:image/png;base64,iVBORw0K...') // false
 * isUrlIcon('data:image/svg+xml;base64,PHN2...')  // false
 *
 * // Icon names (returns false)
 * isUrlIcon('mdi-home')                           // false
 * isUrlIcon('fa fa-play')                         // false
 * isUrlIcon('material-icons')                     // false
 *
 * // Invalid inputs (returns false)
 * isUrlIcon(null)                                 // false
 * isUrlIcon(undefined)                            // false
 * isUrlIcon('')                                   // false
 * isUrlIcon('   ')                                // false
 * ```
 */
export const isUrlIcon = (icon: string | null | undefined): boolean => {
    if (!icon || typeof icon !== 'string') {
        return false;
    }

    const trimmedIcon = icon.trim();
    if (trimmedIcon === '') {
        return false;
    }

    // Data URIs are not URL-based icons
    if (trimmedIcon.startsWith('data:')) {
        return false;
    }

    // Check for actual URLs and file paths:
    // - HTTP/HTTPS URLs: http://, https://
    // - Protocol-relative URLs: //
    // - Absolute paths: /
    // - Relative paths: ./, ../
    // - Paths with separators and file extension: contains / or \ and has file extension
    if (
        trimmedIcon.startsWith('http://') ||
        trimmedIcon.startsWith('https://') ||
        trimmedIcon.startsWith('//') ||
        trimmedIcon.startsWith('/') ||
        trimmedIcon.startsWith('./') ||
        trimmedIcon.startsWith('../')
    ) {
        return true;
    }

    // Check for file paths with separators (/ or \) and file extension
    // This catches cases like "images/icon.png" or "images\icon.png"
    if ((trimmedIcon.includes('/') || trimmedIcon.includes('\\')) && /\.[a-zA-Z0-9]+$/.test(trimmedIcon)) {
        return true;
    }

    // Everything else (icon names like 'mdi-home', 'fa fa-play') is not a URL
    return false;
};
