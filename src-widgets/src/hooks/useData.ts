import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useStyles from './useStyles';
import { type AllCollectionContextProps } from '..';

function useData(oid: string): any {
    const {
        theme,
        widget,
        widget: {
            // data: { [`${oid}Object`]: oidObject },
            data: rxData,
        },
        // [`${oid}Object`]: oidObject,
        getPropertyValue,
    } = useContext(CollectionContext) as AllCollectionContextProps;

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
                                ? StringcommonStateEntry[0]
                                : oidType === 'number'
                                  ? Number(_value)
                                  : _value,
                            label: String(
                                _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`,
                            ).replace(/(\r\n|\n|\r)/gm, ''),

                            fontSize: formatSize(rxData[`valueSize${i}`]),

                            textColor: rxData[`textColor${i}`],

                            icon:
                                rxData[`icon${i}`] ||
                                rxData[`iconSmall${i}`] ||
                                rxData.icon ||
                                rxData.iconSmall ||
                                null,
                            iconSize: typeof rxData[`iconSize${i}`] === 'number' ? rxData[`iconSize${i}`] : null,
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
                            iconXOffset:
                                (!!getDataValue('iconXOffset', String(i)) &&
                                    getDataValue('iconXOffset', String(i)) !== '0px' &&
                                    getDataValue('iconXOffset', String(i))) ||
                                '0px',
                            iconYOffset:
                                (!!getDataValue('iconYOffset', String(i)) &&
                                    getDataValue('iconYOffset', String(i)) !== '0px' &&
                                    getDataValue('iconYOffset', String(i))) ||
                                '0px',
                            iconColor:
                                rxData[`iconColor${i}`] ||
                                rxData.sliderColor ||
                                rxData.iconColor ||
                                rxData.textColor ||
                                textStyles.color ||
                                theme.palette.primary.main,

                            backgroundColor: rxData.backgroundColor || backgroundStyles.backgroundColor || '',
                            backgroundColorActive: getDataValue('backgroundColor', String(i)),

                            background: String(rxData.background || backgroundStyles.background || ''),
                            backgroundActive: getDataValue('background', String(i)),

                            frameBackgroundColor: rxData.frameBackgroundColor || backgroundStyles.backgroundColor || '',
                            frameBackgroundColorActive: getDataValue('frameBackgroundColor', String(i)),

                            frameBackground: String(rxData.frameBackground || backgroundStyles.background || ''),
                            frameBackgroundActive: getDataValue('frameBackground', String(i)),
                        });

                        const key = commonStateEntry ? String(commonStateEntry[0]) : String(_value);
                        widgetStates[key] = _alias && String(_alias).trim() !== '' ? _alias : `${_value}${_unit}`;
                    }
                }
                if (oidType === 'number' && states.length) {
                    minValue = Math.min(...states.map(state => state.value as number));
                    maxValue = Math.max(...states.map(state => state.value as number));
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
        const getStyleData = (ext: string | number = ''): any => ({
            textColor: rxData.textColor || textStyles.color || theme.palette.primary.main,
            textColorActive: getDataValue('textColor', ext),

            header: (rxData.headerActive || getDataValue('header', ext) || rxData.header || oidName || '').replace(
                /(\r\n|\n|\r)/gm,
                '',
            ),
            headerSize:
                formatSize(rxData.headerSize) ||
                formatSize(rxData.headerSizeActive) ||
                formatSize(getDataValue('headerSize', String(ext))) ||
                (typeof fontStyles.fontSize === 'string' ? fontStyles.fontSize : null),

            footer: (rxData.footerActive || getDataValue('footer', String(ext)) || rxData.footer || '').replace(
                /(\r\n|\n|\r)/gm,
                '',
            ),
            footerSize:
                formatSize(rxData.footerSize) ||
                formatSize(rxData.footerSizeActive) ||
                formatSize(getDataValue('footerSize', String(ext))) ||
                (typeof fontStyles.fontSize === 'string' ? fontStyles.fontSize : null),

            alias: String(getDataValue('alias', String(ext)) || '').replace(/(\r\n|\n|\r)/gm, ''),

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
            iconActive: !rxData.noIcon && (getDataValue('icon', String(ext)) || getDataValue('iconSmall', String(ext))),
            iconSize: (typeof rxData.iconSize === 'number' && `calc(24px * ${rxData.iconSize} / 100)`) || '24px',
            iconSizeActive:
                getDataValue('iconSize', String(ext)) && `calc(24px * ${getDataValue('iconSize', String(ext))} / 100)`,

            iconSizeActiveOnly: getDataValue('iconSize', String(ext)),
            iconSizeOnly:
                getDataValue('iconSize', String(ext)) || getDataValue('iconSize', String(ext)) === 0
                    ? getDataValue('iconSize', String(ext))
                    : rxData.iconSize,

            iconColor: rxData.iconColor,
            iconColorActive: getDataValue('iconColor', String(ext)),

            iconHover: rxData.iconHover ? `${rxData.iconHover}%` : undefined,
            iconHoverActive: getDataValue('iconHover', String(ext)) && `${getDataValue('iconHover', String(ext))}%`,

            iconXOffset:
                (!!getDataValue('iconXOffset', String(ext)) &&
                    getDataValue('iconXOffset', String(ext)) !== '0px' &&
                    getDataValue('iconXOffset', String(ext))) ||
                '0px',
            iconYOffset:
                (!!getDataValue('iconYOffset', String(ext)) &&
                    getDataValue('iconYOffset', String(ext)) !== '0px' &&
                    getDataValue('iconYOffset', String(ext))) ||
                '0px',

            backgroundColor: rxData.backgroundColor || backgroundStyles.backgroundColor || '',
            backgroundColorActive: getDataValue('backgroundColor', String(ext)),

            background: String(rxData.background || backgroundStyles.background || ''),
            backgroundActive: getDataValue('background', String(ext)),

            frameBackgroundColor: rxData.frameBackgroundColor || backgroundStyles.backgroundColor || '',
            frameBackgroundColorActive: getDataValue('frameBackgroundColor', String(ext)),

            frameBackground: String(rxData.frameBackground || backgroundStyles.background || ''),
            frameBackgroundActive: getDataValue('frameBackground', String(ext)),
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
