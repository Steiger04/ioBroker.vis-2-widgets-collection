import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useStyles from './useStyles';
import { type AllCollectionContextProps } from '..';

// Interface for StyleData
export interface StyleData {
    textColor: string;
    textColorActive?: string;
    header: string;
    headerSize: string | null;
    footer: string;
    footerSize: string | null;
    alias: string;
    value?: string;
    valueSize: string | null;
    valueSizeActive: string | false | null;
    icon: string | false;
    iconActive: string | false;
    iconSize: string;
    iconSizeActive: string | false;
    iconSizeActiveOnly?: number;
    iconSizeOnly?: number;
    iconColor?: string;
    iconColorActive?: string;
    iconHover?: string;
    iconHoverActive?: string;
    iconXOffset: string;
    iconYOffset: string;
    backgroundColor: string;
    backgroundColorActive?: string;
    background: string;
    backgroundActive?: string;
    frameBackgroundColor: string;
    frameBackgroundColorActive?: string;
    frameBackground: string;
    frameBackgroundActive?: string;
}

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

    const oidObject = rxData[`${oid}Object`];

    const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);
    const [activeIndex, setActiveIndex] = useState<number | undefined>();
    const oidValue = getPropertyValue(oid);

    const oidName = oidObject?.name;

    // Hilfsfunktionen
    const formatSize = useCallback((size: any): string | null => (typeof size === 'number' ? `${size}%` : null), []);
    const getDataValue = useCallback(
        <T = unknown>(key: string, ext: string = ''): T | undefined => {
            const fullKey = `${key}${ext}`;
            if (fullKey in rxData) {
                return (rxData as Record<string, any>)[fullKey] as T;
            }
            return undefined;
        },
        [rxData],
    );

    // States-Berechnung
    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const processStates = (): {
            states: Partial<AllCollectionContextProps['widget']['data']>[];
            widgetStates: Partial<AllCollectionContextProps['widget']['data']>;
            minValue: number | null;
            maxValue: number | null;
        } => {
            const states: Partial<AllCollectionContextProps['widget']['data']>[] = [];
            const widgetStates: Partial<AllCollectionContextProps['widget']['data']> = {};
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

                            fontSize: formatSize(rxData[`valueSize${i}`]) ?? undefined,

                            textColor: rxData[`textColor${i}`] as string | undefined,

                            icon: (() => {
                                const iconValue =
                                    rxData[`icon${i}`] || rxData[`iconSmall${i}`] || rxData.icon || rxData.iconSmall;
                                return typeof iconValue === 'string' ? iconValue : undefined;
                            })(),
                            iconSize: typeof rxData[`iconSize${i}`] === 'number' ? rxData[`iconSize${i}`] : undefined,
                            iconWidth:
                                typeof rxData[`iconSize${i}`] === 'number'
                                    ? rxData[`iconSize${i}`]
                                    : typeof rxData.iconSize === 'number'
                                      ? rxData.iconSize
                                      : 100,
                            iconHeight:
                                typeof rxData[`iconSize${i}`] === 'number'
                                    ? rxData[`iconSize${i}`]
                                    : typeof rxData.iconSize === 'number'
                                      ? rxData.iconSize
                                      : 100,
                            iconXOffset: (() => {
                                const val = getDataValue<string>('iconXOffset', String(i));
                                return val && val !== '0px' ? val : '0px';
                            })(),
                            iconYOffset: (() => {
                                const val = getDataValue<string>('iconYOffset', String(i));
                                return val && val !== '0px' ? val : '0px';
                            })(),
                            iconColor:
                                rxData[`iconColor${i}`] ||
                                rxData.sliderColor ||
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
                        (widgetStates as unknown as Record<string, string>)[key] =
                            _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`;
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

            icon: !rxData.noIcon && (rxData.icon || rxData.iconSmall),
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
                const _activeIndex = states.findIndex(state => {
                    console.log('state.value:', state.value);
                    return String(state.value) === String(oidValue);
                });

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
