/**
 * Improved data computation hook for collection widgets.
 *
 * Refactors the monolithic useData hook into a modular architecture using:
 * - Declarative priority resolution (resolvePriority)
 * - Widget-specific resolvers (buildStateItem, createSliderResolver)
 * - Dependency tracking for optimal memoization
 *
 * Maintains full API compatibility with useData for drop-in replacement capability.
 *
 * @module hooks/useDataNew
 * @since 2.2.0
 * @see {@link resolvePriority} for priority-based fallback resolution
 * @see {@link buildStateItem} for state item construction
 * @see {@link createSliderResolver} for slider-specific property resolution
 * @example
 * ```typescript
 * // Basic usage in ButtonGroupCollection or StateCollection
 * import useDataNew from '../hooks/useDataNew/useDataNew';
 *
 * function MyWidget() {
 *   const { states, data, activeIndex, oidValue } = useDataNew('oid');
 *   // Use states, data, etc. exactly like useData
 * }
 * ```
 * @example
 * ```typescript
 * // Advanced: Access slider-specific properties
 * import useDataNew from '../hooks/useDataNew/useDataNew';
 *
 * function SliderWidget() {
 *   const { states, data, activeIndex, minValue, maxValue, step } = useDataNew('oid');
 *
 *   return (
 *     <Slider
 *       min={minValue}
 *       max={maxValue}
 *       step={step}
 *       value={oidValue}
 *       marks={states.map((s, i) => ({ value: i + 1, label: s.text }))}
 *     />
 *   );
 * }
 * ```
 */

import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../../components/CollectionProvider';
import useStyles from '../useStyles';
import { getDynamicProperty, isSliderFieldsRxData } from '../../types/utility-types';
import type { OidObject } from '../../types/utility-types';
import { formatSizeRem } from '../../lib/helper/formatSizeRem';
import { buildStateItem, createSliderResolver, createDefaultResolver } from './widgetResolvers';
import { createPropertyResolvers } from './propertyResolvers';
import type { UseDataResult, SliderProperties, StyleData, StateStyleData, StateItem } from './types';
import type { SliderFieldsRxData } from '../../types/field-definitions';

/**
 * Computes derived widget data for a given OID property name.
 *
 * This hook extracts context/styles, creates widget-specific resolvers, computes state items
 * via buildStateItem(), and resolves StyleData via resolvePriority(). Manages activeIndex state
 * to track which state item matches the current OID value.
 *
 * @since 2.2.0
 * @param _oid - OID property name from rxData (e.g. "oid", "oid1", "oid_slider")
 * @returns UseDataResult containing:
 *   - states: Array of StateItem objects with resolved properties for each state
 *   - statesNew: Array of StateItem objects resolved per state with active-aware styles
 *   - data: StyleData object with widget-level properties (header, footer, icon, etc.)
 *   - activeIndex: 1-based index of currently active state (null if no match)
 *   - oidValue: Current value from ioBroker state
 *   - minValue: Minimum value (slider widgets only)
 *   - maxValue: Maximum value (slider widgets only)
 *   - step: Step value (slider widgets only)
 * @see {@link UseDataResult} for complete return type definition
 * @see {@link resolvePriority} for understanding fallback chain resolution
 * @see {@link buildStateItem} for state item construction logic
 * @example
 * ```typescript
 * // Drop-in replacement for useData() in existing widgets
 * const { states, statesNew, data, activeIndex, minValue, maxValue } = useDataNew('oid');
 *
 * // Access computed style data for current state
 * const { header, icon, backgroundColor } = data;
 *
 * // Iterate over states to render buttons
 * states.forEach((state, index) => {
 *   console.log(`State ${index + 1}:`, state.text, state.value);
 * });
 *
 * // Access per-state resolved styles with active-aware values
 * statesNew.forEach((state, index) => {
 *   console.log(`State ${index + 1}:`, state.alias, state.backgroundColor);
 * });
 * ```
 * @example
 * ```typescript
 * // Using with slider widgets
 * function SliderCollection() {
 *   const { states, data, activeIndex, minValue, maxValue, step } = useDataNew('oid');
 *
 *   return (
 *     <div>
 *       <h2>{data.header}</h2>
 *       <Slider
 *         min={minValue ?? 0}
 *         max={maxValue ?? 100}
 *         step={step ?? 1}
 *         value={activeIndex ?? minValue ?? 0}
 *         marks={states}
 *       />
 *       <p>{data.footer}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useDataNew(_oid: string): UseDataResult {
    // ============= PHASE 1: Context Extraction =============

    const {
        theme,
        widget,
        widget: { data: rxData },
        getPropertyValue,
    } = useContext(CollectionContext);

    const oidObject = rxData[`${_oid}Object`];
    const oidValue = getPropertyValue(_oid);
    const oidName = oidObject?.name;

    // ============= PHASE 2: Styles Computation =============

    const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);

    // ============= PHASE 3: State Management =============

    const [activeIndex, setActiveIndex] = useState<number | undefined>();

    // ============= PHASE 4: Helper Callbacks =============

    const formatSize = useCallback(formatSizeRem, []);

    /**
     * Safe accessor for dynamic rxData properties.
     * Uses getDynamicProperty for type-safe access while avoiding widespread any casts.
     */
    const getDataValue = useCallback(
        <T = unknown,>(key: string, ext: string = ''): T | undefined => {
            const fullKey = `${key}${ext}`;
            const value = getDynamicProperty(rxData as Record<string, any>, fullKey);
            return value as T | undefined;
        },
        [rxData],
    );

    // ============= PHASE 5: Widget Resolver Creation =============

    const widgetResolver: SliderProperties | Record<string, never> = useMemo(() => {
        if (isSliderFieldsRxData(rxData)) {
            return createSliderResolver(rxData as SliderFieldsRxData);
        }
        return createDefaultResolver(rxData);
    }, [rxData]);

    // PHASE 5.5: Property Resolvers Creation
    const propertyResolvers = useMemo(
        () =>
            createPropertyResolvers({
                rxData,
                oidObject: oidObject as OidObject | undefined,
                oidName,
                theme,
                fontStyles,
                textStyles,
                backgroundStyles,
                formatSize,
                getDataValue,
                widgetResolver,
                isSlider: isSliderFieldsRxData(rxData),
            }),
        [
            rxData,
            oidObject,
            oidName,
            theme,
            fontStyles,
            textStyles,
            backgroundStyles,
            formatSize,
            getDataValue,
            widgetResolver,
        ],
    );

    // ============= PHASE 6.5: Style Data Resolver =============

    // PHASE 6.5: Centralized style resolver for widget-level data.

    /**
     * Memoized function to compute StyleData with given extension and active flag.
     * Used by baseStyleData and data useMemos to resolve style properties.
     *
     * @param ext - Extension (empty string for base, numeric index for state-specific)
     * @param includeActive - Whether to include active state properties
     * @returns Resolved StyleData object
     * @since 2.2.2
     */
    const getStyleData = useCallback(
        (ext: string | number = '', includeActive: boolean = false): StyleData => ({
            // Icon properties
            // fixed
            icon: propertyResolvers.icon(ext, includeActive),

            // fixed
            iconActive: propertyResolvers.iconActive(ext, includeActive),

            iconSizeCm: propertyResolvers.iconSizeCm(ext, includeActive),

            iconSize: propertyResolvers.iconSize(ext, includeActive),

            // fixed
            /* iconSize:
                resolvePriority([
                    { condition: getDataValue<number | string>('iconSize') === 0, value: '0px' },
                    {
                        condition: Boolean(getDataValue<number | string>('iconSize')),
                        value: `calc(24px * ${getDataValue<number | string>('iconSize')} / 100)`,
                    },
                ]) ?? '24px', */

            // fixed
            iconSizeActive: propertyResolvers.iconSizeActive(ext, includeActive),

            // fixed
            iconSizeOnly: propertyResolvers.iconSizeOnly(ext, includeActive),

            // ???
            iconSizeActiveOnly: propertyResolvers.iconSizeActiveOnly(ext, includeActive),

            forceColorMaskCm: propertyResolvers.forceColorMaskCm(ext, includeActive),

            // fixed
            forceColorMask: propertyResolvers.forceColorMask(ext, includeActive),

            // ???
            forceColorMaskActive: propertyResolvers.forceColorMaskActive(ext, includeActive),

            // fixed
            iconColor: propertyResolvers.iconColor(ext, includeActive),

            // fixed
            iconColorActive: propertyResolvers.iconColorActive(ext, includeActive),

            iconHover: propertyResolvers.iconHover(ext, includeActive),

            iconHoverActive: propertyResolvers.iconHoverActive(ext, includeActive),

            iconXOffsetCm: propertyResolvers.iconXOffsetCm(ext, includeActive),

            // fixed
            iconYOffsetCm: propertyResolvers.iconYOffsetCm(ext, includeActive),

            iconXOffset: propertyResolvers.iconXOffset(ext, includeActive),

            // fixed and new
            iconYOffset: propertyResolvers.iconYOffset(ext, includeActive),

            // fixed and new
            iconXOffsetActive: propertyResolvers.iconXOffsetActive(ext, includeActive),

            // fixed and new
            iconYOffsetActive: propertyResolvers.iconYOffsetActive(ext, includeActive),

            // Text color properties
            // textColor: rxData.textColor,
            textColorActive: propertyResolvers.textColorActive(ext, includeActive),

            textColorCm: propertyResolvers.textColorCm(ext, includeActive),

            textColor: propertyResolvers.textColor(ext, includeActive),

            // Header properties with fallback chain
            // Normalize empty strings to enable proper fallback to oidName
            header: propertyResolvers.header(ext, includeActive),

            headerSize: propertyResolvers.headerSize(ext, includeActive),
            /* headerSize:
                resolvePriority([
                    { value: formatSize(rxData.headerSize) },
                    { value: formatSize(rxData.headerSizeActive) },
                    { value: formatSize(getDataValue<number>('headerSize', String(ext))) },
                    { value: typeof fontStyles?.['font-size'] === 'string' ? fontStyles?.['font-size'] : null },
                ]) ?? null, */

            // Footer properties with fallback chain
            // Normalize empty strings to enable proper fallback
            footer: propertyResolvers.footer(ext, includeActive),

            footerSize: propertyResolvers.footerSize(ext, includeActive),

            // Alias (remove newlines)
            alias: propertyResolvers.alias(ext, includeActive),

            // Value with unit suffix
            value: propertyResolvers.value(ext, includeActive),

            valueSize: propertyResolvers.valueSize(ext, includeActive),

            valueSizeActive: propertyResolvers.valueSizeActive(ext, includeActive),

            // Background properties
            // Normalize empty strings to undefined to enable fallback chain continuation
            backgroundColor: propertyResolvers.backgroundColor(ext, includeActive),

            backgroundColorActive: propertyResolvers.backgroundColorActive(ext, includeActive),

            background: propertyResolvers.background(ext, includeActive),

            backgroundActive: propertyResolvers.backgroundActive(ext, includeActive),

            // Frame background properties
            // Normalize empty strings to undefined to enable fallback chain continuation
            frameBackgroundColor: propertyResolvers.frameBackgroundColor(ext, includeActive),

            frameBackgroundColorActive: propertyResolvers.frameBackgroundColorActive(ext, includeActive),

            frameBackground: propertyResolvers.frameBackground(ext, includeActive),

            frameBackgroundActive: propertyResolvers.frameBackgroundActive(ext, includeActive),
        }),
        [propertyResolvers],
    );

    /**
     * Resolves StateStyleData for a specific state index.
     *
     * @param index - 1-based state index
     * @param isActive - Whether the state is currently active
     * @returns StateStyleData with active-aware fallbacks applied
     * @since 2.2.2
     */
    // PHASE 6.6: State-level style resolver for per-state computation.
    const getStateStyleData = useMemo(
        () =>
            (index: number, isActive: boolean): StateStyleData => ({
                // Content Properties
                alias: propertyResolvers.alias(index, isActive),
                value: propertyResolvers.value(index, isActive),

                // Size Properties
                fontSize: propertyResolvers.fontSize(index, isActive),
                valueSize: propertyResolvers.valueSize(index, isActive),

                // Text Properties
                textColor: propertyResolvers.textColor(index, isActive),

                // Icon Properties
                icon: propertyResolvers.icon(index, isActive),
                iconSize: propertyResolvers.iconSize(index, isActive),
                iconWidth: propertyResolvers.iconWidth(index, isActive),
                iconHeight: propertyResolvers.iconHeight(index, isActive),
                iconXOffset: propertyResolvers.iconXOffset(index, isActive),
                iconYOffset: propertyResolvers.iconYOffset(index, isActive),
                iconColor: propertyResolvers.iconColor(index, isActive),
                iconHover: propertyResolvers.iconHover(index, isActive),
                forceColorMask: propertyResolvers.forceColorMask(index, isActive),

                // Background Properties
                backgroundColor: propertyResolvers.backgroundColor(index, isActive),
                background: propertyResolvers.background(index, isActive),
                frameBackgroundColor: propertyResolvers.frameBackgroundColor(index, isActive),
                frameBackground: propertyResolvers.frameBackground(index, isActive),
            }),
        [propertyResolvers],
    );

    // ============= PHASE 6: States Computation (Analog to useData lines 214-466) =============

    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const states: StateItem[] = [];
        const widgetStates: Record<string, string> = {};
        let minValue: number | null = null;
        let maxValue: number | null = null;

        const oidType = oidObject?.type;
        const commonStates = oidObject?.commonStates || {};
        const commonStatesEntries = Object.entries(commonStates);

        if (oidType === 'number' || oidType === 'string' || oidType === 'boolean' || oidType === 'mixed') {
            for (let i = 1; i <= rxData.values_count; i++) {
                const _value = rxData[`value${i}`];
                const _alias = rxData[`alias${i}`];
                const _unit = oidObject?.unit;

                if (_value !== undefined && _value !== null && /\S/.test(String(_value))) {
                    const commonStateEntry = commonStatesEntries.find(([value]) => value === String(_value));

                    // Convert value to correct type based on oidType
                    const convertedValue = commonStateEntry
                        ? oidType === 'number'
                            ? Number(commonStateEntry[0])
                            : String(commonStateEntry[0])
                        : oidType === 'number'
                          ? Number(_value)
                          : _value;

                    // Build state item using the resolver
                    const stateItem = buildStateItem({
                        value: convertedValue,
                        rawValue: _value,
                        index: i,
                        rxData: rxData as Record<string, any>,
                        oidObject: oidObject as any,
                        oidValue,
                        widgetResolver,
                        formatSize,
                        getDynamicProperty: getDataValue,
                        backgroundStyles,
                        theme,
                    });

                    states.push(stateItem);

                    // Map state value to label for widget-specific use
                    const key = commonStateEntry ? String(commonStateEntry[0]) : String(_value);
                    widgetStates[key] = _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`;
                }
            }

            // Calculate min/max for numeric types
            if (oidType === 'number' && states.length) {
                const numericValues = states
                    .map(state => (typeof state.value === 'number' ? state.value : NaN))
                    .filter(val => !isNaN(val));
                if (numericValues.length > 0) {
                    minValue = Math.min(...numericValues);
                    maxValue = Math.max(...numericValues);
                }
            }
        }

        return { states, widgetStates, minValue, maxValue };
    }, [oidObject, rxData, theme, backgroundStyles, getDataValue, oidValue, formatSize, widgetResolver]);

    // ============= PHASE 7: Active State Detection and Data Resolution =============

    /**
     * Detects active state and returns appropriate StyleData.
     * Applies state-specific overrides via getStyleData when an active state is matched.
     * Falls back to default state properties when no match is found.
     *
     * @since 2.2.2
     */
    const data = useMemo(() => {
        const oidType = oidObject?.type;

        switch (oidType) {
            case 'mixed':
            case 'boolean':
            case 'number':
            case 'string': {
                const _activeIndex = states.findIndex(state => String(state.value) === String(oidValue));

                if (_activeIndex !== -1) {
                    setActiveIndex(_activeIndex + 1);
                    // Apply state-specific styles with active properties
                    return getStyleData(_activeIndex + 1, true);
                }

                setActiveIndex(undefined);
                // Default to base state properties with active properties included
                return getStyleData('', true);
            }
            default:
                return getStyleData('', true);
        }
    }, [oidObject, oidValue, states, getStyleData]);

    // ============= PHASE 8: statesNew Computation =============

    /**
     * Computes statesNew array with independent property resolution per state.
     * Each state item receives resolved properties via getStateStyleData().
     *
     * @since 2.2.2
     */
    // PHASE 7.5: Independent per-state resolution using active-aware styles.
    const statesNew = useMemo(() => {
        const result: StateItem[] = [];
        const oidType = oidObject?.type;
        const commonStates = oidObject?.commonStates || {};
        const commonStatesEntries = Object.entries(commonStates);

        if (oidType === 'number' || oidType === 'string' || oidType === 'boolean' || oidType === 'mixed') {
            for (let i = 1; i <= rxData.values_count; i++) {
                const _value = rxData[`value${i}`];

                if (_value === undefined || _value === null || !/\S/.test(String(_value))) {
                    continue;
                }

                const commonStateEntry = commonStatesEntries.find(([value]) => value === String(_value));

                // Type conversion (analog to states useMemo Lines 402-408)
                const convertedValue = commonStateEntry
                    ? oidType === 'number'
                        ? Number(commonStateEntry[0])
                        : String(commonStateEntry[0])
                    : oidType === 'number'
                      ? Number(_value)
                      : _value;

                // Calculate isActive for this state
                const isActive = String(oidValue) === String(convertedValue);
                console.log(`State ${i} (value=${convertedValue}) isActive:`, isActive);

                // Get style data via getStateStyleData
                const styleData = getStateStyleData(i, isActive);

                // Map to StateItem interface
                result.push({
                    value: convertedValue,
                    label: styleData.alias,
                    alias: styleData.alias,
                    fontSize: styleData.fontSize,
                    textColor: styleData.textColor,
                    icon: styleData.icon,
                    iconSize: styleData.iconSize ? parseInt(styleData.iconSize) || undefined : undefined,
                    iconWidth: styleData.iconWidth,
                    iconHeight: styleData.iconHeight,
                    iconXOffset: styleData.iconXOffset,
                    iconYOffset: styleData.iconYOffset,
                    iconColor: styleData.iconColor,
                    iconHover: styleData.iconHover,
                    forceColorMask: styleData.forceColorMask,
                    valueSize: styleData.valueSize,
                    backgroundColor: styleData.backgroundColor,
                    backgroundColorActive: propertyResolvers.backgroundColorActive(i, isActive),
                    background: styleData.background,
                    backgroundActive: propertyResolvers.backgroundActive(i, isActive),
                    frameBackgroundColor: styleData.frameBackgroundColor,
                    frameBackgroundColorActive: propertyResolvers.frameBackgroundColorActive(i, isActive),
                    frameBackground: styleData.frameBackground,
                    frameBackgroundActive: propertyResolvers.frameBackgroundActive(i, isActive),
                });
            }
        }

        return result;
    }, [rxData, oidObject, oidValue, getStateStyleData, propertyResolvers]);

    // ============= PHASE 9: Assemble Return Object =============

    return {
        states,
        widgetStates,
        minValue,
        maxValue,
        data,
        activeIndex,
        setActiveIndex,
        oidValue,
        statesNew,
    };
}

export default useDataNew;
