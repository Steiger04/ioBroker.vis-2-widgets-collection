import { useCallback, useContext, useMemo, useState } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useStyles from './useStyles';

// Typ-Definitionen
interface StateItem {
    value: string | number | boolean;
    label: string;
    fontSize: string | null;
    textColor?: string;
    icon: string | null;
    iconSize: number | null;
    iconWidth: number;
    iconHeight: number;
    iconXOffset: string;
    iconYOffset: string;
    iconColor: string | null;
    backgroundColor: string;
    backgroundColorActive?: string;
    background: string;
    backgroundActive?: string;
    frameBackgroundColor: string;
    frameBackgroundColorActive?: string;
    frameBackground: string;
    frameBackgroundActive?: string;
}

interface WidgetStates {
    [key: string]: string;
}

interface StyleData {
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

interface UseDataReturn {
    states: StateItem[];
    widgetStates: WidgetStates;
    minValue: number | null;
    maxValue: number | null;
    data: StyleData;
    activeIndex: number | undefined;
    setActiveIndex: (index: number | undefined) => void;
    oidValue: any;
}

function useData(oid: string): UseDataReturn {
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
    const getDataValue = useCallback((key: string, ext: string | number = ''): any => rxData[`${key}${ext}`], [rxData]);

    // States-Berechnung
    const { states, widgetStates, minValue, maxValue } = useMemo(() => {
        const processStates = (): {
            states: StateItem[];
            widgetStates: WidgetStates;
            minValue: number | null;
            maxValue: number | null;
        } => {
            const states: StateItem[] = [];
            const widgetStates: WidgetStates = {};
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
                                ? commonStateEntry[0]
                                : oidType === 'number'
                                  ? Number(_value)
                                  : _value,
                            label: String(
                                _alias || (commonStateEntry ? commonStateEntry[1] : `${_value}${_unit}`),
                            ).replace(/(\r\n|\n|\r)/gm, ''),

                            fontSize: formatSize(rxData[`valueSize${i}`]),

                            textColor: rxData[`textColor${i}`],

                            icon: rxData[`icon${i}`] || rxData[`iconSmall${i}`] || rxData.icon || null,
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
                            iconColor: rxData[`iconColor${i}`] || rxData.iconColor || null,

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
                        widgetStates[key] = _alias || (commonStateEntry ? commonStateEntry[1] : `${_value}${_unit}`);
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
    }, [oidObject, rxData, getDataValue, formatSize, backgroundStyles]);

    // Styling-Daten
    const data = useMemo(() => {
        const getStyleData = (ext: string | number = ''): StyleData => ({
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

            value:
                getDataValue('value', String(ext)) &&
                // `${getDataValue('value', ext)}${rxData.unit !== undefined ? rxData.unit : ''}`,
                `${getDataValue('value', String(ext))}${oidObject?.unit !== undefined ? oidObject.unit : ''}`,
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
