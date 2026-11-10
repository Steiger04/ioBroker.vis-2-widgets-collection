import { useCallback, useContext, useMemo } from 'react';
import { CollectionContext } from '../../components/CollectionProvider';
import useStyles from '../useStyles';
import { getDynamicProperty } from '../../types/utility-types';
import { formatSizeRem } from '../../lib/helper/formatSizeRem';
import effectiveStateCount from '../../lib/effectiveStateCount';
import { isBlankStateValue } from '../../lib/filledStateRows';
import { createPropertyResolvers, resolveStyleEntry } from './propertyResolvers';
import { sameStateValue } from './stateValueEquality';

import type { OidObject } from '../../types/utility-types';
import type { UseDataResult, MarkerLayer, MarkBaseStyle, StyleData, StateStyleData } from './types';

/** Options of {@link useData}. */
export interface UseDataOptions {
    /**
     * The widget's marker layer (see {@link MarkerLayer}), applied to marks only:
     * `states` and `markBaseStyle` resolve with it, `data` without. Omitted, nothing
     * carries the tier. Read by content, so the reference need not be stable.
     */
    markerLayer?: MarkerLayer;
}

/** Resolves without the marker tier. */
const NO_MARKER_LAYER: MarkerLayer = {};

/**
 * An object's name as text: `common.name` can hold one text per language. The text stays as
 * written, like a plain name. Without a text in the host language or in English nothing is shown.
 */
const displayName = (name: ioBroker.StringOrTranslated | undefined, lang: ioBroker.Languages): string | undefined => {
    if (typeof name !== 'object' || name === null) {
        return name;
    }
    const texts = name as Record<string, string | undefined>;
    return texts[lang] || texts.en;
};

/**
 * Resolves the widget's states and style data from the CollectionContext.
 *
 * @param _oid - OID property name from rxData (e.g. "oid", "oid1")
 * @param options - Optional caller-supplied tiers, see {@link UseDataOptions}
 */
function useData(_oid: string, options?: UseDataOptions): UseDataResult {
    const {
        lang,
        theme,
        widget,
        widget: { data: rxData },
        getPropertyValue,
    } = useContext(CollectionContext);

    const oidObject = rxData[`${_oid}Object`];
    const oidValue = getPropertyValue(_oid);
    const oidName = displayName(oidObject?.name, lang);

    const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);

    const formatSize = formatSizeRem;

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
    // with it, `data` without. Without a marker layer both resolve alike, so the
    // marks reuse the one set.
    const propertyResolvers = useMemo(
        () => createPropertyResolvers({ ...resolverParams, markerLayer: NO_MARKER_LAYER }),
        [resolverParams],
    );
    const markResolvers = useMemo(
        () => (hasMarkerLayer ? createPropertyResolvers({ ...resolverParams, markerLayer }) : propertyResolvers),
        [hasMarkerLayer, resolverParams, markerLayer, propertyResolvers],
    );

    const resolveStyleData = useCallback(
        (ext: string | number, includeActive: boolean): StyleData =>
            resolveStyleEntry(propertyResolvers, ext, includeActive),
        [propertyResolvers],
    );

    const resolveMarkStyleData = useCallback(
        (ext: string | number, includeActive: boolean): StyleData =>
            resolveStyleEntry(markResolvers, ext, includeActive),
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
    const { states, minValue, maxValue } = useMemo(() => {
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

                if (isBlankStateValue(_value)) {
                    continue;
                }

                const commonStateEntry = commonStatesEntries.find(([value]) => value === String(_value));

                // The row's value in the OID's type: a commonStates key is a string, a number OID reads numbers.
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

                states.push({
                    // The field row's own number — after a skipped blank row it is NOT position + 1.
                    fieldNumber: i,
                    // Aktiver Zustand: published so renderers never re-derive it (ADR-0105).
                    active: isActive,
                    value: convertedValue,
                    // A blank alias names nothing; the value resolver brings the unit along. A row
                    // value without a text (object, NaN) leaves the label empty.
                    label: isBlankStateValue(styleData.alias) ? String(styleData.value ?? '') : styleData.alias,
                    alias: styleData.alias,
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
                    frameBackgroundInherited: styleData.frameBackgroundInherited,
                });
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

        return { states, minValue, maxValue };
    }, [oidObject?.type, oidObject?.commonStates, rxData, getDataValue, oidValue, resolveMarkStyleData]);

    // `data` and `activePosition` are pure functions of the current OID value and
    // resolved states, so they are derived together here — no setState side effect
    // during render (the previous setActiveIndex-in-useMemo was a React anti-pattern
    // and could leave it stale relative to `data`).
    const { data, activePosition } = useMemo(() => {
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
                    return {
                        data: resolveStyleData(states[position].fieldNumber, true),
                        activePosition: position,
                    };
                }

                // Default to base state properties with active properties included.
                return { data: baseStyle.active, activePosition: undefined };
            }
            default:
                return { data: baseStyle.active, activePosition: undefined };
        }
    }, [oidObject, states, resolveStyleData, baseStyle]);

    return {
        minValue,
        maxValue,
        data,
        activePosition,
        oidValue,
        states,
        markBaseStyle,
    };
}

export default useData;
