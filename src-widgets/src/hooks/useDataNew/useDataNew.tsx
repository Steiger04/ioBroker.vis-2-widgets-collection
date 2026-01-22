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
import { formatSizeRem } from '../../lib/helper/formatSizeRem';
import { buildStateItem, createSliderResolver, createDefaultResolver } from './widgetResolvers';
import { resolvePriority } from './priorityResolver';
import type { UseDataResult, SliderProperties, StyleData, StateItem } from './types';
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
 * const { states, data, activeIndex, minValue, maxValue } = useDataNew('oid');
 *
 * // Access computed style data for current state
 * const { header, icon, backgroundColor } = data;
 *
 * // Iterate over states to render buttons
 * states.forEach((state, index) => {
 *   console.log(`State ${index + 1}:`, state.text, state.value);
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

    const { fontStyles, backgroundStyles } = useStyles(widget.style);

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

    // ============= PHASE 7: StyleData Computation (Analog to useData lines 469-590) =============

    const data = useMemo(() => {
        /**
         * Helper to normalize empty strings to undefined for fallback chains.
         * Ensures resolvePriority treats empty strings as falsy like useData's || operator.
         */
        const normalizeString = (val: string | number | undefined): string | undefined =>
            val && String(val) !== '' ? String(val) : undefined;

        /**
         * Helper function to resolve StyleData properties.
         * Uses resolvePriority for declarative fallback chains.
         */
        const getStyleData = (ext: string | number = ''): StyleData => ({
            // Text color properties
            textColor: rxData.textColor,
            textColorActive: getDataValue<string>('textColor', String(ext)),

            // Header properties with fallback chain
            // Normalize empty strings to enable proper fallback to oidName
            header: String(
                resolvePriority([
                    { value: normalizeString(rxData.headerActive) },
                    { value: normalizeString(getDataValue<string>('header', String(ext))) },
                    { value: normalizeString(rxData.header) },
                    { value: normalizeString(oidName) },
                    { value: '' },
                ]) ?? '',
            ).replace(/(\r\n|\n|\r)/gm, ''),

            headerSize:
                resolvePriority([
                    { value: formatSize(rxData.headerSize) },
                    { value: formatSize(rxData.headerSizeActive) },
                    { value: formatSize(getDataValue<number>('headerSize', String(ext))) },
                    { value: typeof fontStyles?.['font-size'] === 'string' ? fontStyles?.['font-size'] : null },
                ]) ?? null,

            // Footer properties with fallback chain
            // Normalize empty strings to enable proper fallback
            footer: String(
                resolvePriority([
                    { value: normalizeString(rxData.footerActive) },
                    { value: normalizeString(getDataValue<string>('footer', String(ext))) },
                    { value: normalizeString(rxData.footer) },
                    { value: '' },
                ]) ?? '',
            ).replace(/(\r\n|\n|\r)/gm, ''),

            footerSize:
                resolvePriority([
                    { value: formatSize(rxData.footerSize) },
                    { value: formatSize(rxData.footerSizeActive) },
                    { value: formatSize(getDataValue<number>('footerSize', String(ext))) },
                    { value: typeof fontStyles?.['font-size'] === 'string' ? fontStyles?.['font-size'] : null },
                ]) ?? null,

            // Alias (remove newlines)
            alias: String(getDataValue<string>('alias', String(ext)) || '').replace(/(\r\n|\n|\r)/gm, ''),

            // Value with unit suffix
            value: (() => {
                const val = getDataValue<ioBroker.StateValue>('value', String(ext));
                return val !== undefined && val !== null
                    ? `${val}${oidObject?.unit !== undefined ? oidObject.unit : ''}`
                    : undefined;
            })(),

            valueSize:
                resolvePriority([
                    { value: formatSize(rxData.valueSize) },
                    { value: typeof fontStyles?.['font-size'] === 'string' ? fontStyles?.['font-size'] : null },
                ]) ?? null,

            valueSizeActive:
                resolvePriority([
                    {
                        value:
                            typeof getDataValue<number>('valueSize', String(ext)) === 'number'
                                ? formatSize(getDataValue<number>('valueSize', String(ext)))
                                : null,
                    },
                ]) ?? null,

            // Icon properties
            icon:
                resolvePriority([
                    { condition: !!rxData.noIcon, value: null },
                    { value: getDataValue<string>('icon') },
                    { value: getDataValue<string>('iconSmall') },
                ]) ?? null,

            iconActive:
                resolvePriority([
                    { condition: !!rxData.noIcon, value: null },
                    { value: getDataValue<string>('icon', String(ext)) },
                    { value: getDataValue<string>('iconSmall', String(ext)) },
                ]) ?? null,

            iconSize:
                resolvePriority([
                    {
                        value:
                            typeof rxData.iconSize === 'number' ? `calc(24px * ${rxData.iconSize} / 100)` : undefined,
                    },
                    { value: '24px' },
                ]) ?? '24px',

            iconSizeActive:
                resolvePriority([
                    {
                        value: getDataValue<number>('iconSize', String(ext))
                            ? `calc(24px * ${getDataValue<number>('iconSize', String(ext))} / 100)`
                            : false,
                    },
                ]) ?? false,

            forceColorMaskActive:
                resolvePriority([{ value: getDataValue<boolean>('enableIconColorMask', String(ext)) }]) ?? false,

            iconSizeActiveOnly:
                resolvePriority([{ value: getDataValue<number>('iconSize', String(ext)) }]) ?? undefined,

            iconSizeOnly:
                resolvePriority([
                    {
                        value:
                            getDataValue<number>('iconSize', String(ext)) ||
                            getDataValue<number>('iconSize', String(ext)) === 0
                                ? getDataValue<number>('iconSize', String(ext))
                                : undefined,
                    },
                    { value: rxData.iconSize },
                ]) ?? undefined,

            iconColor: resolvePriority([{ value: rxData.iconColor }]) ?? undefined,

            iconColorActive: resolvePriority([{ value: getDataValue<string>('iconColor', String(ext)) }]) ?? undefined,

            iconHover: resolvePriority([{ value: rxData.iconHover ? `${rxData.iconHover}%` : undefined }]) ?? undefined,

            iconHoverActive:
                resolvePriority([
                    {
                        value: getDataValue<number>('iconHover', String(ext))
                            ? `${getDataValue<number>('iconHover', String(ext))}%`
                            : undefined,
                    },
                ]) ?? undefined,

            iconXOffset:
                resolvePriority([
                    {
                        value:
                            !!getDataValue<string>('iconXOffset', String(ext)) &&
                            getDataValue<string>('iconXOffset', String(ext)) !== '0px'
                                ? getDataValue<string>('iconXOffset', String(ext))
                                : undefined,
                    },
                    { value: '0px' },
                ]) ?? '0px',

            iconYOffset:
                resolvePriority([
                    {
                        value:
                            !!getDataValue<string>('iconYOffset', String(ext)) &&
                            getDataValue<string>('iconYOffset', String(ext)) !== '0px'
                                ? getDataValue<string>('iconYOffset', String(ext))
                                : undefined,
                    },
                    { value: '0px' },
                ]) ?? '0px',

            // Background properties
            // Normalize empty strings to undefined to enable fallback chain continuation
            backgroundColor:
                resolvePriority([
                    {
                        value:
                            rxData.backgroundColor && rxData.backgroundColor !== ''
                                ? rxData.backgroundColor
                                : undefined,
                    },
                    { value: backgroundStyles?.['background-color'] },
                    { value: '' },
                ]) ?? '',

            backgroundColorActive: getDataValue<string>('backgroundColor', String(ext)),

            background: String(
                resolvePriority([
                    {
                        value: rxData.background && rxData.background !== '' ? rxData.background : undefined,
                    },
                    { value: backgroundStyles?.background },
                    { value: '' },
                ]) ?? '',
            ),

            backgroundActive: getDataValue<string>('background', String(ext)),

            // Frame background properties
            // Normalize empty strings to undefined to enable fallback chain continuation
            frameBackgroundColor:
                resolvePriority([
                    {
                        value:
                            rxData.frameBackgroundColor && rxData.frameBackgroundColor !== ''
                                ? rxData.frameBackgroundColor
                                : undefined,
                    },
                    { value: backgroundStyles?.['background-color'] },
                    { value: '' },
                ]) ?? '',

            frameBackgroundColorActive: getDataValue<string>('frameBackgroundColor', String(ext)),

            frameBackground: String(
                resolvePriority([
                    {
                        value:
                            rxData.frameBackground && rxData.frameBackground !== ''
                                ? rxData.frameBackground
                                : undefined,
                    },
                    { value: backgroundStyles?.background },
                    { value: '' },
                ]) ?? '',
            ),

            frameBackgroundActive: getDataValue<string>('frameBackground', String(ext)),
        });

        // ============= PHASE 8: Active State Detection =============

        const oidType = oidObject?.type;

        switch (oidType) {
            case 'mixed':
            case 'boolean':
            case 'number':
            case 'string': {
                const _activeIndex = states.findIndex(state => String(state.value) === String(oidValue));

                if (_activeIndex !== -1) {
                    setActiveIndex(_activeIndex + 1);
                    return getStyleData(String(_activeIndex + 1));
                }

                setActiveIndex(undefined);
                return getStyleData('');
            }
            default:
                return getStyleData('');
        }
    }, [oidObject, oidValue, oidName, rxData, states, fontStyles, backgroundStyles, formatSize, getDataValue]);

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
    };
}

export default useDataNew;
