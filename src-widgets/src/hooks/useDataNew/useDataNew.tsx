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
import { getStyleData } from './styleDataResolver';
import type { UseDataResult, SliderProperties, StyleData, StateStyleData } from './types';
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

    // getStyleData is now a pure function imported from styleDataResolver.ts
    // This wrapper memoizes the call with the current propertyResolvers
    const resolveStyleData = useCallback(
        (ext: string | number = '', includeActive: boolean = false): StyleData =>
            getStyleData(ext, includeActive, propertyResolvers),
        [propertyResolvers],
    );

    // ============= PHASE 6: States Computation (Analog to useData lines 214-466) =============

    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const states: StateStyleData[] = [];
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

    // ============= PHASE 8: statesNew Computation =============

    /**
     * Computes statesNew array with independent property resolution per state.
     * Each state item receives resolved properties via getStateStyleData().
     *
     * @since 2.2.2
     */
    // PHASE 7.5: Independent per-state resolution using active-aware styles.
    const statesNew = useMemo(() => {
        const result: StateStyleData[] = [];
        const oidType = oidObject?.type;
        const commonStates = oidObject?.commonStates || {};
        const commonStatesEntries = Object.entries(commonStates);

        if (oidType === 'number' || oidType === 'string' || oidType === 'boolean' || oidType === 'mixed') {
            for (let i = 1; i <= rxData.values_count; i++) {
                const _value = getDataValue<string | number | boolean | undefined>('value', String(i));

                if (_value === undefined || !/\S/.test(String(_value))) {
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

                // Get style data via resolveStyleData
                const styleData = resolveStyleData(i, isActive);

                // Map to StateItem interface
                result.push({
                    value: convertedValue,
                    label: styleData.alias || String(styleData.value),
                    alias: styleData.alias,
                    fontSize: styleData.valueSize,
                    textColor: styleData.textColor,
                    icon: styleData.icon,
                    iconSize: styleData.iconSize,
                    iconSizeOnly: styleData.iconSizeOnly,
                    iconWidth: styleData.iconWidth,
                    iconHeight: styleData.iconHeight,
                    iconXOffset: styleData.iconXOffset,
                    iconYOffset: styleData.iconYOffset,
                    iconColor: styleData.iconColor,
                    iconHover: styleData.iconHover,
                    forceColorMask: styleData.forceColorMask,
                    valueSize: styleData.valueSize,
                    background: styleData.background,
                    frameBackground: styleData.frameBackground,
                });
            }
        }

        return result;
    }, [oidObject?.type, oidObject?.commonStates, rxData.values_count, getDataValue, oidValue, resolveStyleData]);

    // ============= PHASE 7: Active State Detection and Data Resolution =============

    /**
     * Detects active state and returns appropriate StyleData.
     * Applies state-specific overrides via resolveStyleData when an active state is matched.
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
                const _activeIndex = statesNew.findIndex(state => String(state.value) === String(oidValue));

                if (_activeIndex !== -1) {
                    setActiveIndex(_activeIndex + 1);
                    // Apply state-specific styles with active properties
                    return resolveStyleData(_activeIndex + 1, true);
                }

                setActiveIndex(undefined);
                // Default to base state properties with active properties included
                return resolveStyleData('', true);
            }
            default:
                return resolveStyleData('', true);
        }
    }, [oidObject, oidValue, statesNew, resolveStyleData]);

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
        resolveStyleData,
    };
}

/**
 * Convenience hook that returns only the resolveStyleData function.
 *
 * Use this when you only need the style resolver without the full useDataNew result.
 * Internally uses useDataNew, so all context dependencies are automatically resolved.
 *
 * @param _oid - OID property name from rxData (e.g. "oid", "oid1")
 * @returns Memoized style data resolver function
 * @since 2.2.3
 * @example
 * ```typescript
 * import { useStyleData } from '../hooks/useDataNew';
 *
 * function MyWidget() {
 *   const resolveStyleData = useStyleData('oid');
 *
 *   // Use resolveStyleData anywhere - no parameter collection needed
 *   const baseData = resolveStyleData('', true);
 *   const stateStyle = resolveStyleData(1, false);
 *
 *   return <div style={{ background: baseData.backgroundColor }}>...</div>;
 * }
 * ```
 */
export function useStyleData(_oid: string): (ext: string | number, includeActive: boolean) => StyleData {
    const { resolveStyleData } = useDataNew(_oid);
    return resolveStyleData;
}

export default useDataNew;
