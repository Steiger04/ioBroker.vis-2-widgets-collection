import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useStyles from './useStyles';
import type { OidObject } from '../types/utility-types';
import { getDynamicProperty, isSliderFieldsRxData } from '../types/utility-types';
/**
 * Interface für Style-Daten eines Collection Widgets.
 * Enthält alle visuellen Eigenschaften für Icons, Header, Footer, Werte und Hintergründe.
 */
export interface StyleData {
    /** Textfarbe (Standard oder aus Theme) */
    textColor: string;
    /** Textfarbe im aktiven Zustand */
    textColorActive?: string;

    /** Header-Text (mit Zeilenumbrüchen entfernt) */
    header: string;
    /** Header-Schriftgröße in % oder px */
    headerSize: string | null;

    /** Footer-Text (mit Zeilenumbrüchen entfernt) */
    footer: string;
    /** Footer-Schriftgröße in % oder px */
    footerSize: string | null;

    /** Alias-Text für Wert-Anzeige */
    alias: string;
    /** Formatierter Wert mit Einheit */
    value?: string;
    /** Wert-Schriftgröße in % oder px */
    valueSize: string | null;
    /** Aktive Wert-Schriftgröße oder false wenn nicht gesetzt */
    valueSizeActive: string | false | null;

    /** Icon-Pfad oder false wenn kein Icon */
    icon: string | false;
    /** Aktives Icon-Pfad oder false */
    iconActive: string | false;
    /** Icon-Größe als CSS calc() oder px */
    iconSize: string;
    /** Aktive Icon-Größe oder false */
    iconSizeActive: string | false;
    /** Nur Icon-Größe als Zahl (aktiv) */
    iconSizeActiveOnly?: number;
    /** Nur Icon-Größe als Zahl */
    iconSizeOnly?: number;
    /** Icon-Farbe */
    iconColor?: string;
    /** Aktive Icon-Farbe */
    iconColorActive?: string;
    /** Icon-Hover-Effekt in % */
    iconHover?: string;
    /** Aktiver Icon-Hover-Effekt in % */
    iconHoverActive?: string;
    /** Icon X-Offset (CSS-Wert mit Einheit) */
    iconXOffset: string;
    /** Icon Y-Offset (CSS-Wert mit Einheit) */
    iconYOffset: string;

    /** Hintergrundfarbe */
    backgroundColor: string;
    /** Aktive Hintergrundfarbe */
    backgroundColorActive?: string;
    /** Hintergrund (Gradient/Image) */
    background: string;
    /** Aktiver Hintergrund */
    backgroundActive?: string;

    /** Frame-Hintergrundfarbe */
    frameBackgroundColor: string;
    /** Aktive Frame-Hintergrundfarbe */
    frameBackgroundColorActive?: string;
    /** Frame-Hintergrund (Gradient/Image) */
    frameBackground: string;
    /** Aktiver Frame-Hintergrund */
    frameBackgroundActive?: string;
}

/**
 * Interface für State-Array-Items mit allen visuellen Properties.
 */
interface StateItem {
    value: string | number | boolean;
    label: string;
    fontSize?: string;
    textColor?: string;
    icon?: string;
    iconSize?: number;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor: string;
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
 * Hook für Widget-Daten-Management mit State-Verarbeitung und Styling.
 * Dieser Hook verarbeitet OID-Objekt-Daten, dynamische Style-Properties,
 * State-Werte und deren Visualisierung, sowie Min/Max-Werte für numerische States.
 *
 * @param oid - OID-Bezeichner (z.B. 'oid', 'oid1', 'oid2')
 * @returns Objekt mit states, widgetStates, minValue, maxValue, data, activeIndex, setActiveIndex, oidValue
 * @example
 * const { states, data, activeIndex } = useData('oid1');
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

    // Hilfsfunktionen
    const formatSize = useCallback(
        (size: number | string | undefined): string | null => (typeof size === 'number' ? `${size}%` : null),
        [],
    );

    /**
     * Hilfsfunktion zum sicheren Zugriff auf dynamische rxData-Properties.
     *
     * Nutzt getDynamicProperty für type-safe Zugriffe ohne any-Casts.
     * Diese Funktion wird intern von useData verwendet für dynamische Property-Zugriffe.
     *
     * @template T - Erwarteter Rückgabe-Type
     * @param key - Basis-Property-Name (z.B. 'icon', 'alias')
     * @param ext - Optionaler Suffix (z.B. '1', '2' für icon1, icon2)
     * @returns Property-Wert oder undefined
     * @example
     * ```typescript
     * const icon = getDataValue<string>('icon', '1'); // icon1
     * const alias = getDataValue<string>('alias', String(i)); // alias${i}
     * ```
     */
    const getDataValue = useCallback(
        <T = unknown>(key: string, ext: string = ''): T | undefined => {
            const fullKey = `${key}${ext}`;
            // Nutze getDynamicProperty für type-safe Zugriff
            // Note: rxData is cast to Record to avoid complex union type distribution
            const value = getDynamicProperty(rxData as Record<string, any>, fullKey);
            return value as T | undefined;
        },
        [rxData],
    );

    // States-Berechnung
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

                        // Wofür war das? Noch gebraucht?
                        /* if (commonStateEntry && oidType === 'number') {
                            commonStateEntry[0] = Number(commonStateEntry[0]);
                        } */

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

                            fontSize:
                                formatSize(getDynamicProperty(rxData as Record<string, any>, `valueSize${i}`)) ||
                                undefined,

                            textColor: getDynamicProperty(rxData as Record<string, any>, `textColor${i}`),

                            icon: (() => {
                                const iconValue =
                                    rxData[`icon${i}`] || rxData[`iconSmall${i}`] || rxData.icon || rxData.iconSmall;
                                return typeof iconValue === 'string' ? iconValue : undefined;
                            })(),
                            iconSize: typeof rxData[`iconSize${i}`] === 'number' ? rxData[`iconSize${i}`] : undefined,
                            iconWidth: (() => {
                                const dynamicSize = getDynamicProperty(rxData as Record<string, any>, `iconSize${i}`);
                                return typeof dynamicSize === 'number'
                                    ? dynamicSize
                                    : typeof rxData.iconSize === 'number'
                                      ? rxData.iconSize
                                      : 100;
                            })(),
                            iconHeight: (() => {
                                const dynamicSize = getDynamicProperty(rxData as Record<string, any>, `iconSize${i}`);
                                return typeof dynamicSize === 'number'
                                    ? dynamicSize
                                    : typeof rxData.iconSize === 'number'
                                      ? rxData.iconSize
                                      : 100;
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
                                (isSliderFieldsRxData(rxData) ? rxData.sliderColor : undefined) ||
                                rxData.iconColor ||
                                rxData.textColor ||
                                textStyles.color ||
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

            /* if (oidType === "boolean") {
				for (let i = 1; i <= Number(rxData.values_count); i++) {
					const _value = rxData[`value${i}`];
					const _alias = rxData[`alias${i}`];

					states.push({
						value: _value,
						label: _alias,
					});
					widgetStates[String(_value)] = _value;
				}
			} */

            return { states, widgetStates, minValue, maxValue };
        };

        return processStates();
    }, [oidObject, rxData, getDataValue, formatSize, backgroundStyles, textStyles.color, theme.palette.primary.main]);

    // Styling-Daten
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
                    : false,

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
