/**
 * Hook that derives presentation and state-mapping data for Collection widgets.
 *
 * @module hooks/useData
 * @remarks
 * This hook centralizes common widget computations:
 * - reading the selected OID object metadata
 * - building state/value lists (e.g. for dropdowns or button groups)
 * - resolving dynamic, indexed properties (`icon1`, `alias2`, ...)
 * - computing style values and derived min/max for numeric OIDs
 */

import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useStyles from './useStyles';
import type { OidObject } from '../types/utility-types';
import { getDynamicProperty, isSliderFieldsRxData } from '../types/utility-types';
import { formatSizeRem } from '../lib/helper/formatSizeRem';

/**
 * Derived style/presentation data for a Collection widget.
 *
 * @remarks
 * This structure is consumed by multiple widget renderers to avoid duplicating
 * the same “resolve dynamic props and fallback to theme” logic everywhere.
 */
export interface StyleData {
    /** Text color (from widget config or theme). */
    textColor: string;
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

    /** Icon URL/name or `false` when not configured. */
    icon: string | false;
    /** Active icon URL/name (or `false`). */
    iconActive: string | false;
    /** Icon size as CSS string. */
    iconSize: string;
    /** Active icon size (or `false`). */
    iconSizeActive: string | false;
    /** Active icon size as numeric percent when available. */
    iconSizeActiveOnly?: number;
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
 * Internal representation of a state entry, enriched with resolved presentation properties.
 */
interface StateItem {
    value: string | number | boolean;
    label: string;
    fontSize?: string | null;
    textColor?: string;
    icon?: string;
    iconSize?: number;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor?: string;
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
 * Computes derived widget data for a given OID property name.
 *
 * @param oid - OID property name (e.g. `"oid"`, `"oid1"`).
 * @returns A data bundle used by widgets (states, style data, active index, min/max, etc.).
 * @example
 * ```ts
 * const { states, data, activeIndex } = useData('oid1');
 * ```
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
function useData(oid: string) {
    const {
        theme,
        widget,
        widget: {
            // data: { [`${oid}Object`]: oidObject },
            data: rxData,
        },
        // [`${oid}Object`]: oidObject,
        getPropertyValue,
    } = useContext(CollectionContext);

    const oidObject = rxData[`${oid}Object`] as OidObject | undefined;

    const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);
    const [activeIndex, setActiveIndex] = useState<number | undefined>();
    const oidValue = getPropertyValue(oid);

    const oidName = oidObject?.name;

    const formatSize = useCallback(formatSizeRem, []);

    /**
     * Safe accessor for dynamic `rxData` properties.
     *
     * Uses {@link module:utility-types.getDynamicProperty} to keep dynamic access readable
     * while avoiding widespread `any` casts.
     *
     * @template T - Expected return type.
     * @param key - Base key name (e.g. `"icon"`, `"alias"`).
     * @param ext - Optional suffix (e.g. `"1"` for `icon1`).
     * @returns The property value or `undefined`.
     * @example
     * ```typescript
     * const icon = getDataValue<string>('icon', '1'); // icon1
     * const alias = getDataValue<string>('alias', String(i)); // alias${i}
     * ```
     */
    const getDataValue = useCallback(
        <T = unknown>(key: string, ext: string = ''): T | undefined => {
            const fullKey = `${key}${ext}`;
            // Use getDynamicProperty for type-safe access.
            // Note: rxData is cast to Record to avoid complex union type distribution
            const value = getDynamicProperty(rxData as Record<string, any>, fullKey);
            return value as T | undefined;
        },
        [rxData],
    );

    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const processStates = (): {
            states: StateItem[];
            widgetStates: Record<string, string>;
            minValue: number | null;
            maxValue: number | null;
        } => {
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
                    // const _unit = rxData.unit;
                    const _unit = oidObject?.unit;

                    if (_value !== undefined && _value !== null && /\S/.test(String(_value))) {
                        const commonStateEntry = commonStatesEntries.find(([value]) => value === String(_value));

                        states.push({
                            value: commonStateEntry
                                ? oidType === 'number'
                                    ? Number(commonStateEntry[0])
                                    : String(commonStateEntry[0])
                                : oidType === 'number'
                                  ? Number(_value)
                                  : _value,
                            label: String(
                                _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`,
                            ).replace(/(\r\n|\n|\r)/gm, ''),

                            // fontSize: Fallback chain analogous to ButtonGroupCollection
                            // 1. valueSizeActive (global, when this state is active)
                            // 2. valueSize${i} (individual for this state)
                            // 3. markerTextSize (only for slider marks)
                            // 4. valueSize (global)
                            // 5. undefined (fallback to global valueSize in CollectionMark)
                            fontSize: (() => {
                                // Check if this state is the currently active one
                                const isActive = String(oidValue) === String(_value);

                                // 1. If active: Use global valueSizeActive from commonFields
                                if (isActive && typeof rxData.valueSizeActive === 'number') {
                                    // return `${rxData.valueSizeActive}%`;
                                    return formatSize(rxData.valueSizeActive);
                                }

                                // 2. Use individual valueSize${i}
                                const individualSize = getDynamicProperty(
                                    rxData as Record<string, any>,
                                    `valueSize${i}`,
                                );
                                if (typeof individualSize === 'number') {
                                    // return `${individualSize}%`;
                                    return formatSize(individualSize);
                                }

                                // 3. Use markerTextSize (only for slider marks)
                                if (isSliderFieldsRxData(rxData) && typeof rxData.markerTextSize === 'number') {
                                    // return `${rxData.markerTextSize}%`;
                                    return formatSize(rxData.markerTextSize);
                                }

                                // 4. Use global valueSize
                                if (typeof rxData.valueSize === 'number') {
                                    // return `${rxData.valueSize}%`;
                                    return formatSize(rxData.valueSize);
                                }

                                // 5. No specific value found - undefined
                                return undefined;
                            })(),

                            textColor: (() => {
                                // Check if this state is the currently active one
                                const isActive = String(oidValue) === String(_value);

                                // 1. If active: Use global textColorActive from commonFields (Active group)
                                if (isActive && rxData.textColorActive) {
                                    return rxData.textColorActive;
                                }

                                // 2. Use individual textColor${i} (Value[1]-Value[n] group)
                                const individualColor = getDynamicProperty(
                                    rxData as Record<string, any>,
                                    `textColor${i}`,
                                );
                                if (individualColor) {
                                    return individualColor;
                                }

                                // 3. Use markerTextColor (Slider group, only for slider marks that are states)
                                if (isSliderFieldsRxData(rxData) && rxData.markerTextColor) {
                                    return rxData.markerTextColor;
                                }

                                // 4. Use global textColor (General group)
                                if (rxData.textColor) {
                                    return rxData.textColor;
                                }

                                // 5. No specific value found - undefined (fallback to theme)
                                return undefined;
                            })(),

                            icon: (() => {
                                const iconValue =
                                    rxData[`icon${i}`] || rxData[`iconSmall${i}`] || rxData.icon || rxData.iconSmall;
                                return typeof iconValue === 'string' ? iconValue : undefined;
                            })(),
                            iconSize: typeof rxData[`iconSize${i}`] === 'number' ? rxData[`iconSize${i}`] : undefined,
                            iconWidth: (() => {
                                // Check if this state is the currently active one
                                const isActive = String(oidValue) === String(_value);

                                // 1. Priority: iconSizeActive (global, when this state is active)
                                if (isActive && typeof rxData.iconSizeActive === 'number') {
                                    return rxData.iconSizeActive;
                                }

                                // 2. Priority: iconSize${i} (individual per state)
                                const dynamicSize = getDynamicProperty(rxData as Record<string, any>, `iconSize${i}`);
                                if (typeof dynamicSize === 'number') {
                                    return dynamicSize;
                                }

                                // 3. Priority: markerIconSize (only for slider marks)
                                if (isSliderFieldsRxData(rxData) && typeof rxData.markerIconSize === 'number') {
                                    return rxData.markerIconSize;
                                }

                                // 4. Priority: iconSize (global)
                                if (typeof rxData.iconSize === 'number') {
                                    return rxData.iconSize;
                                }

                                // 5. Fallback
                                return 100;
                            })(),
                            iconHeight: (() => {
                                // Check if this state is the currently active one
                                const isActive = String(oidValue) === String(_value);

                                // 1. Priority: iconSizeActive (global, when this state is active)
                                if (isActive && typeof rxData.iconSizeActive === 'number') {
                                    return rxData.iconSizeActive;
                                }

                                // 2. Priority: iconSize${i} (individual per state)
                                const dynamicSize = getDynamicProperty(rxData as Record<string, any>, `iconSize${i}`);
                                if (typeof dynamicSize === 'number') {
                                    return dynamicSize;
                                }

                                // 3. Priority: markerIconSize (only for slider marks)
                                if (isSliderFieldsRxData(rxData) && typeof rxData.markerIconSize === 'number') {
                                    return rxData.markerIconSize;
                                }

                                // 4. Priority: iconSize (global)
                                if (typeof rxData.iconSize === 'number') {
                                    return rxData.iconSize;
                                }

                                // 5. Fallback
                                return 100;
                            })(),
                            iconXOffset: (() => {
                                const val = getDataValue<string>('iconXOffset', String(i));
                                return val && val !== '0px' ? val : '0px';
                            })(),
                            iconYOffset: (() => {
                                const val = getDataValue<string>('iconYOffset', String(i));
                                return val && val !== '0px' ? val : '0px';
                            })(),
                            iconColor:
                                getDynamicProperty(rxData as Record<string, any>, `iconColor${i}`) ||
                                (isSliderFieldsRxData(rxData) ? rxData.markerIconColor : undefined) ||
                                rxData.iconColor ||
                                // rxData.textColor ||
                                // textStyles.color ||
                                theme.palette.primary.main,

                            backgroundColor: rxData.backgroundColor || backgroundStyles.backgroundColor || '',
                            backgroundColorActive: getDataValue<string>('backgroundColor', String(i)),

                            background: String(rxData.background || backgroundStyles.background || ''),
                            backgroundActive: getDataValue<string>('background', String(i)),

                            frameBackgroundColor: rxData.frameBackgroundColor || backgroundStyles.backgroundColor || '',
                            frameBackgroundColorActive: getDataValue<string>('frameBackgroundColor', String(i)),

                            frameBackground: String(rxData.frameBackground || backgroundStyles.background || ''),
                            frameBackgroundActive: getDataValue<string>('frameBackground', String(i)),
                        });

                        const key = commonStateEntry ? String(commonStateEntry[0]) : String(_value);
                        widgetStates[key] = _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`;
                    }
                }
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
        };

        return processStates();
    }, [
        oidObject?.type,
        oidObject?.commonStates,
        oidObject?.unit,
        rxData,
        theme.palette.primary.main,
        backgroundStyles.backgroundColor,
        backgroundStyles.background,
        getDataValue,
        oidValue,
        formatSize,
    ]);

    // Styling data
    const data = useMemo(() => {
        const getStyleData = (ext: string | number = ''): StyleData => ({
            textColor: rxData.textColor || textStyles.color || theme.palette.primary.main,
            textColorActive: getDataValue<string>('textColor', String(ext)),

            header: String(
                rxData.headerActive || getDataValue<string>('header', String(ext)) || rxData.header || oidName || '',
            ).replace(/(\r\n|\n|\r)/gm, ''),
            headerSize:
                formatSize(rxData.headerSize) ||
                formatSize(rxData.headerSizeActive) ||
                formatSize(getDataValue('headerSize', String(ext))) ||
                (typeof fontStyles.fontSize === 'string' ? fontStyles.fontSize : null),

            footer: String(
                rxData.footerActive || getDataValue<string>('footer', String(ext)) || rxData.footer || '',
            ).replace(/(\r\n|\n|\r)/gm, ''),
            footerSize:
                formatSize(rxData.footerSize) ||
                formatSize(rxData.footerSizeActive) ||
                formatSize(getDataValue('footerSize', String(ext))) ||
                (typeof fontStyles.fontSize === 'string' ? fontStyles.fontSize : null),

            alias: String(getDataValue<string>('alias', String(ext)) || '').replace(/(\r\n|\n|\r)/gm, ''),

            value: (() => {
                const val = getDataValue<ioBroker.StateValue>('value', String(ext));
                return val !== undefined && val !== null
                    ? `${val}${oidObject?.unit !== undefined ? oidObject.unit : ''}`
                    : undefined;
            })(),
            valueSize:
                formatSize(rxData.valueSize) || (typeof fontStyles.fontSize === 'string' ? fontStyles.fontSize : null),
            valueSizeActive:
                typeof getDataValue('valueSize', String(ext)) === 'number'
                    ? formatSize(getDataValue('valueSize', String(ext)))
                    : null,

            icon: (() => {
                if (rxData.noIcon) {
                    return false;
                }
                const iconValue = rxData.icon || rxData.iconSmall;
                return typeof iconValue === 'string' ? iconValue : false;
            })(),
            iconActive: (() => {
                const iconVal =
                    !rxData.noIcon &&
                    (getDataValue<string>('icon', String(ext)) || getDataValue<string>('iconSmall', String(ext)));
                return typeof iconVal === 'string' ? iconVal : false;
            })(),
            iconSize: (typeof rxData.iconSize === 'number' && `calc(24px * ${rxData.iconSize} / 100)`) || '24px',
            iconSizeActive: (() => {
                const size = getDataValue<number>('iconSize', String(ext));
                return size ? `calc(24px * ${size} / 100)` : false;
            })(),

            iconSizeActiveOnly: getDataValue<number>('iconSize', String(ext)),
            iconSizeOnly:
                getDataValue<number>('iconSize', String(ext)) || getDataValue<number>('iconSize', String(ext)) === 0
                    ? getDataValue<number>('iconSize', String(ext))
                    : rxData.iconSize,

            iconColor: rxData.iconColor,
            iconColorActive: getDataValue<string>('iconColor', String(ext)),

            iconHover: rxData.iconHover ? `${rxData.iconHover}%` : undefined,
            iconHoverActive: (() => {
                const val = getDataValue<number>('iconHover', String(ext));
                return val ? `${val}%` : undefined;
            })(),

            iconXOffset:
                (!!getDataValue<string>('iconXOffset', String(ext)) &&
                    getDataValue<string>('iconXOffset', String(ext)) !== '0px' &&
                    getDataValue<string>('iconXOffset', String(ext))) ||
                '0px',
            iconYOffset:
                (!!getDataValue<string>('iconYOffset', String(ext)) &&
                    getDataValue<string>('iconYOffset', String(ext)) !== '0px' &&
                    getDataValue<string>('iconYOffset', String(ext))) ||
                '0px',

            backgroundColor: rxData.backgroundColor || backgroundStyles.backgroundColor || '',
            backgroundColorActive: getDataValue<string>('backgroundColor', String(ext)),

            background: String(rxData.background || backgroundStyles.background || ''),
            backgroundActive: getDataValue<string>('background', String(ext)),

            frameBackgroundColor: rxData.frameBackgroundColor || backgroundStyles.backgroundColor || '',
            frameBackgroundColorActive: getDataValue<string>('frameBackgroundColor', String(ext)),

            frameBackground: String(rxData.frameBackground || backgroundStyles.background || ''),
            frameBackgroundActive: getDataValue<string>('frameBackground', String(ext)),
        });

        // const oidType = oidObject?.common?.type;
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
    }, [
        oidObject,
        oidValue,
        oidName,
        rxData,
        states,
        theme,
        fontStyles,
        textStyles,
        backgroundStyles,
        formatSize,
        getDataValue,
    ]);

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

export default useData;
