/**
 * Widget-specific property resolvers for collection widgets.
 *
 * Provides resolver functions for different widget types:
 * - Slider widgets: createSliderResolver (extracts slider-specific properties)
 * - Other widgets: createDefaultResolver (returns empty resolver)
 * - StateItem builder: buildStateItem (constructs state items with priority resolution)
 *
 * @module hooks/useDataNew/widgetResolvers
 * @since 2.2.0
 */

import type { SliderProperties, StateStyleData } from './types';
import type { SliderFieldsRxData, CommonFieldsRxData } from '../../types/field-definitions';
import type { OidObject } from '../../types/utility-types';
import type { Theme } from '@mui/material';
import type { WidgetStyleState } from '@iobroker/types-vis-2/visBaseWidget';
import { resolvePriority } from './priorityResolver';

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

/**
 * Type guard to check if widgetResolver contains slider properties.
 *
 * Used in buildStateItem() to determine if slider-specific properties should be
 * considered in fallback chains. Checks for presence of at least one slider property.
 *
 * @param resolver - Widget resolver to check (SliderProperties or empty object)
 * @returns true if resolver is a SliderProperties object with slider-specific properties
 * @since 2.2.0
 * @internal
 */
function isSliderResolver(resolver: SliderProperties | Record<string, never>): resolver is SliderProperties {
    return 'markerIconSize' in resolver || 'markerTextColor' in resolver;
}

/**
 * Builds a single StateItem from OID metadata and widget data.
 *
 * Replicates the complex fallback logic from useData.ts (lines 240-435) using
 * declarative priority resolution. Each property uses resolvePriority() to
 * evaluate a priority chain of values until a defined value is found.
 *
 * Priority chains consider:
 * 1. Active state values (when this item is the currently selected state)
 * 2. Individual values for this state item (indexed by i)
 * 3. Slider-specific values (if widget is a Slider)
 * 4. Global widget configuration values
 * 5. Theme defaults or fallbacks
 *
 * @param params - Parameter object with all required data
 * @param params.value - Current value of the state (converted to correct type)
 * @param params.rawValue - Original unconverted value (used for label/alias to preserve formatting)
 * @param params.index - 1-based index of this state item (for dynamic properties)
 * @param params.rxData - Widget configuration data (CommonFieldsRxData or subtype)
 * @param params.oidObject - Object metadata from ioBroker (name, unit, type, etc.)
 * @param params.oidValue - Current state value from ioBroker (for active state detection)
 * @param params.widgetResolver - Widget-specific property resolver (SliderProperties or empty)
 * @param params.formatSize - Function to format size values (e.g., `${size}%`)
 * @param params.getDynamicProperty - Function to get dynamic properties with index suffix
 * @param params.backgroundStyles - Computed background styles from widget style
 * @param params.theme - MUI theme object for color defaults
 * @returns Complete StateItem with all properties resolved
 * @example
 * ```typescript
 * const stateItem = buildStateItem({
 *   value: 'On',
 *   index: 1,
 *   rxData: buttonGroupData,
 *   oidObject: { _id: 'light.1', name: 'Lamp', unit: '' },
 *   oidValue: 'On',
 *   widgetResolver: {},
 *   formatSize: (size) => `${size}px`,
 *   getDynamicProperty: (key, ext) => buttonGroupData[`${key}${ext}`],
 *   backgroundStyles: { background: 'white' },
 *   theme: muiTheme
 * });
 * ```
 */
export function buildStateItem(params: {
    value: string | number | boolean;
    rawValue: string | number | boolean;
    index: number;
    rxData: Record<string, any>;
    oidObject: OidObject;
    oidValue: ioBroker.StateValue;
    widgetResolver: SliderProperties | Record<string, never>;
    formatSize: (size: number | string | undefined) => string | undefined;
    getDynamicProperty: <K>(key: string, ext: string) => K | undefined;
    backgroundStyles: WidgetStyleState | undefined;
    theme: Theme;
}): StateStyleData {
    const {
        value,
        rawValue,
        index,
        rxData,
        oidObject,
        oidValue,
        widgetResolver,
        formatSize,
        getDynamicProperty: getDynProp,
        backgroundStyles,
        theme,
    } = params;

    const _value = value;
    const _rawValue = rawValue;
    const _unit = oidObject.unit || '';
    const _alias = getDynProp<string>(`alias`, String(index));

    // Helper for dynamic property access
    const getDataValue = <K>(key: string, ext: string): K | undefined => getDynProp<K>(key, ext);

    // Check if this state is the currently active one
    const isActive = String(oidValue) === String(_value);

    // Check if widgetResolver contains slider properties
    const isSlider = isSliderResolver(widgetResolver);

    return {
        value: _value,

        valueSize:
            typeof getDataValue<string>('valueSize', String(index)) === 'number'
                ? formatSize(getDataValue<number>('valueSize', String(index)))
                : null,

        label: String(_alias && String(_alias).trim() !== '' ? _alias : `${_rawValue}${_unit}`).replace(
            /(\r\n|\n|\r)/gm,
            '',
        ),

        alias: String(_alias && String(_alias).trim() !== '' ? _alias : `${_rawValue}${_unit}`).replace(
            /(\r\n|\n|\r)/gm,
            '',
        ),

        // fontSize: Fallback chain: active -> individual -> slider -> global -> undefined
        // Only format numeric sizes; skip null values from formatSize() to continue fallback chain
        fontSize: resolvePriority([
            {
                condition: isActive && typeof rxData.valueSizeActive === 'number',
                value: formatSize(rxData.valueSizeActive),
            },
            {
                value:
                    typeof getDataValue<number>('valueSize', String(index)) === 'number'
                        ? formatSize(getDataValue<number>('valueSize', String(index)))
                        : undefined,
            },
            {
                condition: isSlider && typeof widgetResolver.markerTextSize === 'number',
                value: formatSize(widgetResolver.markerTextSize),
            },
            {
                value: typeof rxData.valueSize === 'number' ? formatSize(rxData.valueSize) : undefined,
            },
            { value: undefined },
        ]),

        // textColor: Fallback chain: active -> individual -> slider -> global -> undefined
        // Normalize empty strings to undefined to enable fallback chain
        textColor: resolvePriority([
            {
                condition: isActive,
                value: rxData.textColorActive && rxData.textColorActive !== '' ? rxData.textColorActive : undefined,
            },
            {
                value: getDataValue<string>('textColor', String(index)),
                condition: getDataValue<string>('textColor', String(index)) !== '',
            },
            {
                condition: isSlider,
                value:
                    widgetResolver.markerTextColor && widgetResolver.markerTextColor !== ''
                        ? widgetResolver.markerTextColor
                        : undefined,
            },
            { value: rxData.textColor && rxData.textColor !== '' ? rxData.textColor : undefined },
            { value: undefined },
        ]),

        // icon: Fallback chain: individual -> individual small -> global -> global small -> undefined
        // Normalize empty strings to undefined to enable fallback chain
        icon: resolvePriority([
            {
                value: getDataValue<string>('icon', String(index)),
                condition: getDataValue<string>('icon', String(index)) !== '',
            },
            {
                value: getDataValue<string>('iconSmall', String(index)),
                condition: getDataValue<string>('iconSmall', String(index)) !== '',
            },
            { value: rxData.icon && rxData.icon !== '' ? rxData.icon : undefined },
            { value: rxData.iconSmall && rxData.iconSmall !== '' ? rxData.iconSmall : undefined },
            { value: undefined },
        ]),

        // iconSize: Individual icon size (1-based index)
        iconSize: getDataValue<number>('iconSize', String(index)),

        // iconWidth: Fallback chain: active -> individual -> slider -> global -> 100
        iconWidth:
            resolvePriority([
                { condition: isActive, value: rxData.iconSizeActive },
                { value: getDataValue<number>('iconSize', String(index)) },
                { condition: isSlider, value: widgetResolver.markerIconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        // iconHeight: Fallback chain: active -> individual -> slider -> global -> 100
        iconHeight:
            resolvePriority([
                { condition: isActive, value: rxData.iconSizeActive },
                { value: getDataValue<number>('iconSize', String(index)) },
                { condition: isSlider, value: widgetResolver.markerIconSize },
                { value: rxData.iconSize },
                { value: 100 },
            ]) ?? 100,

        // iconXOffset: Individual offset or '0px' fallback
        iconXOffset: (() => {
            const val = getDataValue<string>('iconXOffset', String(index));
            return val && val !== '0px' ? val : '0px';
        })(),

        // iconYOffset: Individual offset or '0px' fallback
        iconYOffset: (() => {
            const val = getDataValue<string>('iconYOffset', String(index));
            return val && val !== '0px' ? val : '0px';
        })(),

        // iconColor: Fallback chain: individual -> slider -> global -> theme primary
        // Normalize empty strings to undefined to enable fallback chain
        iconColor:
            resolvePriority([
                {
                    value: getDataValue<string>('iconColor', String(index)),
                    condition: getDataValue<string>('iconColor', String(index)) !== '',
                },
                {
                    condition: isSlider,
                    value:
                        widgetResolver.markerIconColor && widgetResolver.markerIconColor !== ''
                            ? widgetResolver.markerIconColor
                            : undefined,
                },
                { value: rxData.iconColor && rxData.iconColor !== '' ? rxData.iconColor : undefined },
                { value: theme.palette.primary.main },
            ]) ?? theme.palette.primary.main,

        // iconHover: Individual hover size formatted as percentage
        iconHover: (() => {
            const val = getDataValue<number>('iconHover', String(index));
            return val ? `${val}%` : undefined;
        })(),

        // forceColorMask: Individual color mask flag
        forceColorMask: getDataValue<boolean>('enableIconColorMask', String(index)),

        // backgroundColor: Fallback chain: global -> background styles -> empty string
        // Normalize empty strings to undefined to enable fallback chain
        backgroundColor:
            resolvePriority([
                { value: rxData.backgroundColor && rxData.backgroundColor !== '' ? rxData.backgroundColor : undefined },
                {
                    value: backgroundStyles?.['background-color'],
                    condition: backgroundStyles?.['background-color'] !== '',
                },
                { value: '' },
            ]) ?? '',

        // backgroundColorActive: Individual background color when active
        backgroundColorActive: getDataValue<string>('backgroundColor', String(index)),

        // background: Fallback chain: global -> background styles -> empty string
        // Normalize empty strings to undefined to enable fallback chain
        background: String(
            resolvePriority([
                { value: rxData.background && rxData.background !== '' ? rxData.background : undefined },
                {
                    value: backgroundStyles?.background,
                    condition: backgroundStyles?.background !== '',
                },
                { value: '' },
            ]) ?? '',
        ),

        // backgroundActive: Individual background style when active
        backgroundActive: getDataValue<string>('background', String(index)),

        // frameBackgroundColor: Fallback chain: global -> background styles -> empty string
        // Normalize empty strings to undefined to enable fallback chain
        frameBackgroundColor:
            resolvePriority([
                {
                    value:
                        rxData.frameBackgroundColor && rxData.frameBackgroundColor !== ''
                            ? rxData.frameBackgroundColor
                            : undefined,
                },
                {
                    value: backgroundStyles?.['background-color'],
                    condition: backgroundStyles?.['background-color'] !== '',
                },
                { value: '' },
            ]) ?? '',

        // frameBackgroundColorActive: Individual frame background color when active
        frameBackgroundColorActive: getDataValue<string>('frameBackgroundColor', String(index)),

        // frameBackground: Fallback chain: global -> background styles -> empty string
        // Normalize empty strings to undefined to enable fallback chain
        frameBackground: String(
            resolvePriority([
                { value: rxData.frameBackground && rxData.frameBackground !== '' ? rxData.frameBackground : undefined },
                {
                    value: backgroundStyles?.background,
                    condition: backgroundStyles?.background !== '',
                },
                { value: '' },
            ]) ?? '',
        ),

        // frameBackgroundActive: Individual frame background style when active
        frameBackgroundActive: getDataValue<string>('frameBackground', String(index)),
    };
}
