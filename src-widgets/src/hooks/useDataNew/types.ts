/**
 * Type definitions for useDataNew hook.
 *
 * @module hooks/useDataNew/types
 * @since 2.2.0
 */

import type { SliderFieldsRxData, CommonFieldsRxData } from '../../types/field-definitions';
import type { OidObject } from '../../types/utility-types';

/**
 * Derived style/presentation data for a Collection widget.
 *
 * @remarks
 * Mirrors the legacy definitions in useData for drop-in compatibility.
 */
export interface StyleData {
    /** Text color (from widget config or theme). */
    textColor?: string;
    /** Active-state text color. */
    textColorActive?: string;

    /** Header text (newlines removed). */
    header: string;
    /** Header font size (usually `%` or CSS size string). */
    headerSize: string | null;

    /** Footer text (newlines removed). */
    footer: string;
    /** Footer font size (usually `%` or CSS size string). */
    footerSize: string | null;

    /** Alias text shown instead of the raw value. */
    alias: string;
    /** Formatted value (may include unit). */
    value?: string;
    /** Value font size. */
    valueSize: string | null;
    /** Active value font size (or `false` when not configured). */
    valueSizeActive: string | null;

    /** Icon URL/name or `null` when not configured. */
    icon: string | null;
    /** Active icon URL/name (or `null`). */
    iconActive: string | null;
    /** Icon size as CSS string. */
    iconSize: string;
    /** Active icon size (or `false`). */
    iconSizeActive: string | false;
    /** Active icon size as numeric percent when available. */
    iconSizeActiveOnly?: number;
    /** Force color mask on icon when active. */
    forceColorMaskActive?: boolean;
    /** Icon size as numeric percent when available. */
    iconSizeOnly?: number;
    /** Icon color. */
    iconColor?: string;
    /** Active icon color. */
    iconColorActive?: string;
    /** Icon hover effect in percent. */
    iconHover?: string;
    /** Active icon hover effect in percent. */
    iconHoverActive?: string;
    /** Icon X offset as a CSS value (with unit). */
    iconXOffset: string;
    /** Icon Y offset as a CSS value (with unit). */
    iconYOffset: string;

    /** Background color. */
    backgroundColor: string;
    /** Active background color. */
    backgroundColorActive?: string;
    /** Background (gradient/image). */
    background: string;
    /** Active background. */
    backgroundActive?: string;

    /** Frame background color. */
    frameBackgroundColor: string;
    /** Active frame background color. */
    frameBackgroundColorActive?: string;
    /** Frame background (gradient/image). */
    frameBackground: string;
    /** Active frame background. */
    frameBackgroundActive?: string;
}

/**
 * Represents a state item with visual and data properties.
 * Mirrors the legacy StateItem shape for compatibility.
 */
export interface StateItem {
    value: string | number | boolean;
    valueSize: string | null;
    label: string;
    alias: string;
    fontSize?: string | null;
    textColor?: string;
    icon?: string;
    iconSize?: number;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor?: string;
    iconHover?: string;
    forceColorMask?: boolean;
    backgroundColor: string;
    backgroundColorActive?: string;
    background: string;
    backgroundActive?: string;
    frameBackgroundColor: string;
    frameBackgroundColorActive?: string;
    frameBackground: string;
    frameBackgroundActive?: string;
}

/**
 * Generic type for priority resolution.
 * Enables declarative fallback chains for property values.
 *
 * @template T - Type of the value to resolve
 * @example
 * ```typescript
 * const options: PriorityOption<number>[] = [
 *   { condition: isActive, value: activeSize },
 *   { value: defaultSize },
 *   { value: 100 }
 * ];
 * ```
 */
export interface PriorityOption<T> {
    /**
     * Optional: Condition that must be fulfilled.
     * If undefined, option is always considered.
     */
    condition?: boolean;

    /**
     * The value to use when condition=true (or no condition).
     */
    value: T | undefined;
}

/**
 * Generic interface for type-safe dynamic property access.
 * Enables safe access to indexed properties like `icon1`, `alias2`.
 *
 * @template T - Type of the object whose properties are resolved
 * @example
 * ```typescript
 * const resolver: PropertyResolver<CommonFieldsRxData> = createResolver(rxData);
 * const icon = resolver.resolve('icon', 1); // Accesses rxData.icon1
 * ```
 */
export interface PropertyResolver<T> {
    /**
     * Resolves a property value, optionally with index suffix.
     *
     * @param key - Property name (e.g. 'icon')
     * @param index - Optional: Index suffix (e.g. 1 for 'icon1')
     * @returns Property value or undefined
     */
    resolve<K extends keyof T>(key: K, index?: number): T[K] | undefined;
}

/**
 * Generic type for widget-specific property resolvers.
 * Base for `createSliderResolver()` and `createDefaultResolver()`.
 *
 * @template T - Type of the widget data object
 */
export type WidgetResolver<T> = {
    [K in keyof T]: T[K];
};

/**
 * Utility type for indexed properties.
 * Extracts value type from indexed properties like `icon1`, `icon2`.
 *
 * @template T - Type of the object
 * @template P - Prefix of the property name (e.g. 'icon')
 * @example
 * ```typescript
 * // If T = { icon1: string, icon2: string }
 * type IconValue = IndexedProperty<T, 'icon'>; // string
 * ```
 */
export type IndexedProperty<T, P extends string> = T extends Record<`${P}${number}`, infer V> ? V : never;

/**
 * Interface for slider-specific properties.
 * Used by `createSliderResolver()` in `widgetResolvers.ts`.
 */
export interface SliderProperties {
    /**
     * Size of the marker icon in pixels
     */
    markerIconSize?: number;

    /**
     * Color of the marker text
     */
    markerTextColor?: string;

    /**
     * Size of the marker text in pixels
     */
    markerTextSize?: number;

    /**
     * Color of the marker icon
     */
    markerIconColor?: string;
}

/**
 * Return type for useDataNew hook.
 * Matches the return type structure of useData for API compatibility.
 */
export interface UseDataResult {
    /** Array of computed state items with resolved properties */
    states: StateItem[];

    /** Mapping of state values to string labels for widget-specific use */
    widgetStates: Record<string, string>;

    /** Minimum numeric value (for slider/number types) or null */
    minValue: number | null;

    /** Maximum numeric value (for slider/number types) or null */
    maxValue: number | null;

    /** Resolved style/presentation data for current state */
    data: StyleData;

    /** Currently active state index (1-based) or undefined */
    activeIndex: number | undefined;

    /** Function to set the active state index */
    setActiveIndex: (index: number | undefined) => void;

    /** Current OID value from ioBroker */
    oidValue: ioBroker.StateValue;
}

// Re-exports
export type { SliderFieldsRxData, CommonFieldsRxData };
export type { OidObject };
