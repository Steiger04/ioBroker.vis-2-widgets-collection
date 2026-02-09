/**
 * Widget-specific property resolvers for collection widgets.
 *
 * Provides resolver functions for different widget types:
 * - Slider widgets: createSliderResolver (extracts slider-specific properties)
 * - Other widgets: createDefaultResolver (returns empty resolver)
 * - StateItem builder: buildStateItem (constructs state items with priority resolution)
 *
 * @module hooks/useData/widgetResolvers
 * @since 2.2.0
 */

import type { SliderProperties } from './types';
import type { SliderFieldsRxData, CommonFieldsRxData } from '../../types/field-definitions';

/**
 * Creates resolver for slider-specific properties.
 *
 * Extracts four slider-specific marker properties from widget configuration:
 * - markerIconSize: Size of marker icons (in pixels or percentage)
 * - markerTextColor: Color of marker text (CSS color value)
 * - markerTextSize: Size of marker text (font-size value)
 * - markerIconColor: Color of marker icons (CSS color value)
 * - markerBackgroundColor: Background color of marker (CSS color value)
 *
 * These properties are used in buildStateItem() fallback chains for slider widgets only.
 *
 * @param rxData - Slider widget data (must include SliderFieldsRxData interface)
 * @returns SliderProperties object with extracted optional values
 * @since 2.2.0
 * @see {@link SliderProperties} for property type definitions
 * @see {@link buildStateItem} for how these properties are consumed
 * @example
 * const sliderProps = createSliderResolver(rxData);
 * // Returns: { markerIconSize: 24, markerTextColor: '#fff', ... }
 */
export function createSliderResolver(rxData: SliderFieldsRxData): SliderProperties {
    return {
        markerIconSize: rxData.markerIconSize,
        markerTextColor: rxData.markerTextColor,
        markerTextSize: rxData.markerTextSize,
        markerIconColor: rxData.markerIconColor,
    };
}

/**
 * Creates default resolver for non-slider widgets.
 *
 * Returns an empty object indicating no widget-specific properties available.
 * Used for all Collection widgets except Slider (State, ButtonGroup, Switch, etc.).
 *
 * This resolver exists to maintain consistent API with createSliderResolver(),
 * allowing buildStateItem() to uniformly handle both slider and non-slider widgets.
 *
 * @param _rxData - Common widget data (unused parameter, present for API consistency)
 * @returns Empty object (no widget-specific properties)
 * @since 2.2.0
 * @see {@link createSliderResolver} for slider-specific variant
 * @example
 * const defaultProps = createDefaultResolver(rxData);
 * // Returns: {}
 */
export function createDefaultResolver(_rxData: CommonFieldsRxData): Record<string, never> {
    return {};
}
