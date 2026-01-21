/**
 * Utility functions for MUI sx prop manipulation.
 *
 * @module lib/helper/sxUtils
 */

/**
 * Converts kebab-case CSS property names to camelCase.
 *
 * @param key - CSS property name (e.g., 'font-size', 'text-shadow')
 * @returns camelCase property name (e.g., 'fontSize', 'textShadow')
 */
const kebabToCamelCase = (key: string): string => {
    // Don't convert CSS selectors (starting with '&' or containing spaces)
    if (key.startsWith('&') || key.includes(' ') || key.startsWith('@')) {
        return key;
    }

    return key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Cleans nested selector objects (e.g., '& .MuiPaper-root') by removing undefined values.
 * Handles arrays and nested objects recursively.
 *
 * @param selectorObj - Nested selector object
 * @returns Cleaned selector object or undefined if empty
 */
const cleanNestedSelector = (selectorObj: Record<string, any>): Record<string, any> | undefined => {
    const cleaned = Object.fromEntries(
        Object.entries(selectorObj)
            .map(([key, value]) => {
                // Handle arrays - convert readonly arrays to mutable arrays
                if (Array.isArray(value)) {
                    const cleanedArray = value.filter(v => v !== undefined && v !== null);
                    return [kebabToCamelCase(key), cleanedArray.length > 0 ? cleanedArray : undefined];
                }
                // Handle nested objects
                if (typeof value === 'object' && value !== null) {
                    return [kebabToCamelCase(key), cleanNestedSelector(value)];
                }
                return [kebabToCamelCase(key), value];
            })
            .filter(([, value]) => value !== undefined && value !== null),
    );

    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
};

/**
 * Recursively removes undefined and null values from sx objects and nested selectors.
 * MUI's SxProps<Theme> type doesn't allow undefined property values.
 * Converts kebab-case CSS properties to camelCase.
 * Converts readonly arrays to mutable arrays for MUI compatibility.
 *
 * @param sx - Object potentially containing undefined/null values at any nesting level
 * @returns Cleaned object safe for MUI's sx prop, or empty object if input is empty
 */
export const cleanSx = (sx: Record<string, any> | undefined): Record<string, any> => {
    if (!sx) {
        return {};
    }

    const cleaned = Object.fromEntries(
        Object.entries(sx)
            .map(([key, value]) => {
                const camelKey = kebabToCamelCase(key);

                // Handle arrays - convert readonly arrays to mutable arrays
                if (Array.isArray(value)) {
                    const cleanedArray = value.filter(v => v !== undefined && v !== null);
                    return [camelKey, cleanedArray.length > 0 ? cleanedArray : undefined];
                }

                // Handle nested selectors (e.g., '& .MuiPaper-root', '&:hover')
                if (typeof value === 'object' && value !== null) {
                    const nestedCleaned = cleanNestedSelector(value);
                    return [camelKey, nestedCleaned];
                }
                // Keep top-level values (filter at next step)
                return [camelKey, value];
            })
            .filter(([, value]) => value !== undefined && value !== null),
    );

    return Object.keys(cleaned).length > 0 ? cleaned : {};
};
