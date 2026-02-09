import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../../components/CollectionProvider';
import useStyles from '../useStyles';
import { getDynamicProperty, isSliderFieldsRxData } from '../../types/utility-types';
import { formatSizeRem } from '../../lib/helper/formatSizeRem';
import { createSliderResolver, createDefaultResolver } from './widgetResolvers';
import { createPropertyResolvers } from './propertyResolvers';
import { getStyleData } from './styleDataResolver';

import type { OidObject } from '../../types/utility-types';
import type { UseDataResult, SliderProperties, StyleData, StateStyleData } from './types';
import type { SliderFieldsRxData } from '../../types/field-definitions';

function useData(_oid: string): UseDataResult {
    const {
        theme,
        widget,
        widget: { data: rxData },
        getPropertyValue,
    } = useContext(CollectionContext);

    const oidObject = rxData[`${_oid}Object`];
    const oidValue = getPropertyValue(_oid);
    const oidName = oidObject?.name;

    const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);

    const [activeIndex, setActiveIndex] = useState<number | undefined>();

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

    const widgetResolver: SliderProperties | Record<string, never> = useMemo(() => {
        if (isSliderFieldsRxData(rxData)) {
            return createSliderResolver(rxData as SliderFieldsRxData);
        }
        return createDefaultResolver(rxData);
    }, [rxData]);

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

    // getStyleData is now a pure function imported from styleDataResolver.ts
    // This wrapper memoizes the call with the current propertyResolvers
    const resolveStyleData = useCallback(
        (ext: string | number = '', includeActive: boolean = false): StyleData =>
            getStyleData(ext, includeActive, propertyResolvers),
        [propertyResolvers],
    );

    // Independent per-state resolution using active-aware styles.
    const { statesNew, widgetStates, minValue, maxValue } = useMemo(() => {
        const widgetStates: Record<string, string> = {};
        let minValue: number | null = null;
        let maxValue: number | null = null;
        const statesNew: StateStyleData[] = [];
        const oidType = oidObject?.type;
        const commonStates = oidObject?.commonStates || {};
        const commonStatesEntries = Object.entries(commonStates);

        if (oidType === 'number' || oidType === 'string' || oidType === 'boolean' || oidType === 'mixed') {
            for (let i = 1; i <= rxData.values_count; i++) {
                const _value = getDataValue<string | number | boolean | undefined>('value', String(i));
                const _alias = rxData[`alias${i}`];
                const _unit = oidObject?.unit;

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
                statesNew.push({
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

                // Map state value to label for widget-specific use
                const key = commonStateEntry ? String(commonStateEntry[0]) : String(_value);
                widgetStates[key] = _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`;
            }
        }

        // Calculate min/max for numeric types
        if (oidType === 'number' && statesNew.length) {
            const numericValues = statesNew
                .map(state => (typeof state.value === 'number' ? state.value : NaN))
                .filter(val => !isNaN(val));
            if (numericValues.length > 0) {
                minValue = Math.min(...numericValues);
                maxValue = Math.max(...numericValues);
            }
        }

        return { statesNew, widgetStates, minValue, maxValue };
    }, [oidObject?.type, oidObject?.commonStates, oidObject?.unit, rxData, getDataValue, oidValue, resolveStyleData]);

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
 * Use this when you only need the style resolver without the full useData result.
 * Internally uses useData, so all context dependencies are automatically resolved.
 *
 * @param _oid - OID property name from rxData (e.g. "oid", "oid1")
 * @returns Memoized style data resolver function
 * @since 2.2.3
 * @example
 * ```typescript
 * import { useStyleData } from '../hooks/useData';
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
    const { resolveStyleData } = useData(_oid);
    return resolveStyleData;
}

export default useData;
