import { useCallback, useContext, useMemo } from 'react';
import { CollectionContext } from '../../components/CollectionProvider';
import useStyles from '../useStyles';
import { getDynamicProperty } from '../../types/utility-types';
import { formatSizeRem } from '../../lib/helper/formatSizeRem';
import effectiveStateCount from '../../lib/effectiveStateCount';
import { isBlankStateValue } from '../../lib/filledStateRows';
import { createPropertyResolvers } from './propertyResolvers';
import { getStyleData } from './styleDataResolver';
import { sameStateValue } from './stateValueEquality';

import type { OidObject } from '../../types/utility-types';
import type { UseDataResult, MarkerLayer, MarkBaseStyle, StyleData, StateStyleData } from './types';

/** Options of {@link useData}. */
export interface UseDataOptions {
    /**
     * The widget's marker layer (see {@link MarkerLayer}), applied to marks only:
     * `states` and `markBaseStyle` resolve with it, `data` and `resolveStyleData`
     * without. Omitted, nothing carries the tier. Read by content, so the
     * reference need not be stable.
     */
    markerLayer?: MarkerLayer;
}

/** Resolves without the marker tier. */
const NO_MARKER_LAYER: MarkerLayer = {};

/**
 * Resolves the widget's states and style data from the CollectionContext.
 *
 * @param _oid - OID property name from rxData (e.g. "oid", "oid1")
 * @param options - Optional caller-supplied tiers, see {@link UseDataOptions}
 */
function useData(_oid: string, options?: UseDataOptions): UseDataResult {
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

    // Keyed by content, not by reference: vis-2 hands out new, content-equal refs
    // on editor moves, so a caller's unmemoised literal must not rebuild the resolvers.
    const hasMarkerLayer = options?.markerLayer !== undefined;
    const { iconSize, iconColor, textColor, textSize } = options?.markerLayer ?? {};
    const markerLayer: MarkerLayer = useMemo(
        () => ({ iconSize, iconColor, textColor, textSize }),
        [iconSize, iconColor, textColor, textSize],
    );

    const resolverParams = useMemo(
        () => ({
            rxData,
            oidObject: oidObject as OidObject | undefined,
            oidName,
            theme,
            fontStyles,
            textStyles,
            backgroundStyles,
            formatSize,
            getDataValue,
        }),
        [rxData, oidObject, oidName, theme, fontStyles, textStyles, backgroundStyles, formatSize, getDataValue],
    );

    // Two resolver sets over the same widget data: the marker layer applies to
    // marks only (CONTEXT "Marker-Ebene") — `states` and `markBaseStyle` resolve
    // with it, `data` and `resolveStyleData` without. Without a marker layer both
    // resolve alike, so the marks reuse the one set.
    const propertyResolvers = useMemo(
        () => createPropertyResolvers({ ...resolverParams, markerLayer: NO_MARKER_LAYER }),
        [resolverParams],
    );
    const markResolvers = useMemo(
        () => (hasMarkerLayer ? createPropertyResolvers({ ...resolverParams, markerLayer }) : propertyResolvers),
        [hasMarkerLayer, resolverParams, markerLayer, propertyResolvers],
    );

    // getStyleData is now a pure function imported from styleDataResolver.ts
    // This wrapper memoizes the call with the current propertyResolvers
    const resolveStyleData = useCallback(
        (ext: string | number = '', includeActive: boolean = false): StyleData =>
            getStyleData(ext, includeActive, propertyResolvers),
        [propertyResolvers],
    );

    const resolveMarkStyleData = useCallback(
        (ext: string | number, includeActive: boolean): StyleData => getStyleData(ext, includeActive, markResolvers),
        [markResolvers],
    );

    // The base style data, inactive and active: the active one is `data` while no
    // state is active, and without a marker layer the pair is the marks' base too.
    const baseStyle: MarkBaseStyle = useMemo(
        () => ({ inactive: resolveStyleData('', false), active: resolveStyleData('', true) }),
        [resolveStyleData],
    );

    const markBaseStyle: MarkBaseStyle = useMemo(
        () =>
            hasMarkerLayer
                ? { inactive: resolveMarkStyleData('', false), active: resolveMarkStyleData('', true) }
                : baseStyle,
        [hasMarkerLayer, resolveMarkStyleData, baseStyle],
    );

    // Independent per-state resolution using active-aware styles.
    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const widgetStates: Record<string, string> = {};
        let minValue: number | null = null;
        let maxValue: number | null = null;
        const states: StateStyleData[] = [];
        const oidType = oidObject?.type;
        const commonStates = oidObject?.commonStates || {};
        const commonStatesEntries = Object.entries(commonStates);

        if (oidType === 'number' || oidType === 'string' || oidType === 'boolean' || oidType === 'mixed') {
            // The ONE rule (Zustandsmenge): authored rows vs. commonStates vs. boolean fallback.
            const effectiveCount = effectiveStateCount({
                valuesCount: rxData.values_count,
                commonStatesCount: commonStatesEntries.length,
                ignoreCommonStates: rxData.ignoreCommonStates,
            });

            for (let i = 1; i <= effectiveCount; i++) {
                const _value = getDataValue<string | number | boolean | undefined>('value', String(i));
                const _alias = rxData[`alias${i}`];
                const _unit = oidObject?.unit;

                if (isBlankStateValue(_value)) {
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

                // Calculate isActive for this state (named equality contract)
                const isActive = sameStateValue(oidValue, convertedValue);

                // A state is the basis of a Zustandsmarke, so it carries the marker layer.
                const styleData = resolveMarkStyleData(i, isActive);

                // Map to StateItem interface
                states.push({
                    // The field row's own number — after a skipped blank row it is NOT position + 1.
                    fieldNumber: i,
                    // Aktiver Zustand: published so renderers never re-derive it (ADR-0105).
                    active: isActive,
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
        if (oidType === 'number' && states.length) {
            const numericValues = states
                .map(state => (typeof state.value === 'number' ? state.value : NaN))
                .filter(val => !isNaN(val));
            if (numericValues.length > 0) {
                minValue = Math.min(...numericValues);
                maxValue = Math.max(...numericValues);
            }
        }

        return { states, widgetStates, minValue, maxValue };
    }, [
        oidObject?.type,
        oidObject?.commonStates,
        oidObject?.unit,
        rxData,
        getDataValue,
        oidValue,
        resolveMarkStyleData,
    ]);

    // `data`, `activeFieldNumber` and `activePosition` are pure functions of the
    // current OID value and resolved states, so they are derived together here — no
    // setState side effect during render (the previous setActiveIndex-in-useMemo was
    // a React anti-pattern and could leave it stale relative to `data`).
    const { data, activeFieldNumber, activePosition } = useMemo(() => {
        const oidType = oidObject?.type;

        switch (oidType) {
            case 'mixed':
            case 'boolean':
            case 'number':
            case 'string': {
                // First active state wins (duplicate values → the first state). The
                // `active` flag is the one match decision (ADR-0105) — not re-derived here.
                const position = states.findIndex(state => state.active);

                if (position !== -1) {
                    // Apply state-specific styles with active properties — keyed by the state's
                    // Feldnummer, never by its list position.
                    const { fieldNumber } = states[position];
                    return {
                        data: resolveStyleData(fieldNumber, true),
                        activeFieldNumber: fieldNumber,
                        activePosition: position,
                    };
                }

                // Default to base state properties with active properties included.
                return { data: baseStyle.active, activeFieldNumber: undefined, activePosition: undefined };
            }
            default:
                return { data: baseStyle.active, activeFieldNumber: undefined, activePosition: undefined };
        }
    }, [oidObject, states, resolveStyleData, baseStyle]);

    return {
        widgetStates,
        minValue,
        maxValue,
        data,
        activeFieldNumber,
        activePosition,
        oidValue,
        states,
        markBaseStyle,
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
