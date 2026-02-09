/**
 * Style data resolver utility for collection widgets.
 *
 * Computes resolved widget-level style data (header, footer, icon, background, etc.)
 * by delegating to property resolver functions with extension and active-state control.
 *
 * @module hooks/useData/styleDataResolver
 * @since 2.2.0
 */

import type { PropertyResolvers, StyleData } from './types';

/**
 * Computes StyleData by resolving all style properties through property resolvers.
 *
 * This pure function encapsulates the 50+ property assignments from the getStyleData
 * hook, making it reusable across multiple contexts (hooks, components, utilities).
 *
 * @param ext - State extension: '' for base, numeric index (1-N) for state-specific, 'Active' for active variant
 * @param includeActive - Flag to enable active-state properties in resolver fallback chains
 * @param propertyResolvers - Pre-built resolver object with 47 property resolution functions
 * @returns StyleData object with all resolved style properties
 * @since 2.2.0
 * @example
 * ```typescript
 * const styleData = getStyleData('', true, propertyResolvers);
 * console.log(styleData.header);      // e.g., "Light Brightness"
 * console.log(styleData.backgroundColor); // e.g., "#ffffff"
 * ```
 * @example
 * ```typescript
 * // Per-state resolution with active-aware styling
 * const stateStyle = getStyleData(1, true, propertyResolvers);
 * console.log(stateStyle.icon);       // e.g., "icon_on" (active variant)
 * ```
 */
export function getStyleData(
    ext: string | number = '',
    includeActive: boolean = false,
    propertyResolvers: PropertyResolvers,
): StyleData {
    return {
        // Icon properties
        icon: propertyResolvers.icon(ext, includeActive),
        iconActive: propertyResolvers.iconActive(ext, includeActive),
        iconSizeCm: propertyResolvers.iconSizeCm(ext, includeActive),
        iconSize: propertyResolvers.iconSize(ext, includeActive),
        iconSizeActive: propertyResolvers.iconSizeActive(ext, includeActive),
        iconSizeOnly: propertyResolvers.iconSizeOnly(ext, includeActive),
        iconWidth: propertyResolvers.iconWidth(ext, includeActive),
        iconHeight: propertyResolvers.iconHeight(ext, includeActive),
        iconSizeActiveOnly: propertyResolvers.iconSizeActiveOnly(ext, includeActive),
        forceColorMaskCm: propertyResolvers.forceColorMaskCm(ext, includeActive),
        forceColorMask: propertyResolvers.forceColorMask(ext, includeActive),
        forceColorMaskActive: propertyResolvers.forceColorMaskActive(ext, includeActive),
        iconColor: propertyResolvers.iconColor(ext, includeActive),
        iconColorActive: propertyResolvers.iconColorActive(ext, includeActive),
        iconHover: propertyResolvers.iconHover(ext, includeActive),
        iconHoverActive: propertyResolvers.iconHoverActive(ext, includeActive),
        iconXOffsetCm: propertyResolvers.iconXOffsetCm(ext, includeActive),
        iconYOffsetCm: propertyResolvers.iconYOffsetCm(ext, includeActive),
        iconXOffset: propertyResolvers.iconXOffset(ext, includeActive),
        iconYOffset: propertyResolvers.iconYOffset(ext, includeActive),
        iconXOffsetActive: propertyResolvers.iconXOffsetActive(ext, includeActive),
        iconYOffsetActive: propertyResolvers.iconYOffsetActive(ext, includeActive),

        // Text color properties
        textColorActive: propertyResolvers.textColorActive(ext, includeActive),
        textColorCm: propertyResolvers.textColorCm(ext, includeActive),
        textColor: propertyResolvers.textColor(ext, includeActive),

        // Header properties with fallback chain
        header: propertyResolvers.header(ext, includeActive),
        headerSize: propertyResolvers.headerSize(ext, includeActive),

        // Footer properties with fallback chain
        footer: propertyResolvers.footer(ext, includeActive),
        footerSize: propertyResolvers.footerSize(ext, includeActive),

        // Alias (remove newlines)
        alias: propertyResolvers.alias(ext, includeActive),

        // Value with unit suffix
        value: propertyResolvers.value(ext, includeActive),
        valueSize: propertyResolvers.valueSize(ext, includeActive),
        valueSizeActive: propertyResolvers.valueSizeActive(ext, includeActive),

        // Background properties
        backgroundColor: propertyResolvers.backgroundColor(ext, includeActive),
        backgroundColorActive: propertyResolvers.backgroundColorActive(ext, includeActive),
        background: propertyResolvers.background(ext, includeActive),
        backgroundActive: propertyResolvers.backgroundActive(ext, includeActive),

        // Frame background properties
        frameBackgroundColor: propertyResolvers.frameBackgroundColor(ext, includeActive),
        frameBackgroundColorActive: propertyResolvers.frameBackgroundColorActive(ext, includeActive),
        frameBackground: propertyResolvers.frameBackground(ext, includeActive),
        frameBackgroundActive: propertyResolvers.frameBackgroundActive(ext, includeActive),
    };
}
