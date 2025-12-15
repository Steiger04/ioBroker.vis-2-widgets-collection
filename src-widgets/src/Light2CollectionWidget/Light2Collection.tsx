import { Box, Divider, IconButton, SvgIcon } from '@mui/material';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import type { Light2CollectionContextProps } from '../newTypes';
import withButtonModal from '../components/withButtonModal';
import useData from '../hooks/useData';
import useOidValue from '../hooks/useOidValue';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import LightPicker from './Light2Picker';
import { getMarginBetweenPickers } from './colorPickerUtils/colorPickerMemos';
import type iro from '@jaames/iro';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ColorWheelSvg from '../img/colorWheel.svg?react';
import { initializeColorFromStates, initializeKelvin, initializeBrightness } from './initHandlers';

// Changes-Typ für H/S/V-Änderungsinformationen
type ColorChanges = {
    h?: boolean;
    s?: boolean;
    v?: boolean;
};

// Skalare Properties, die tatsächlich in der Konfigurations-Map verwendet werden
type ScalarColorProp = 'kelvin' | 'hexString' | 'red' | 'green' | 'blue' | 'hue' | 'saturation' | 'value';
// Konfigurations-Typ für Lichttyp-zu-OID-Mapping
type ColorPropertyConfig = {
    colorProp: ScalarColorProp;
    oidField: string;
    setter: (value: string | number) => void;
    normalize?: boolean;
    cctComponent?: 1 | 2;
    changeKey?: 'h' | 's' | 'v'; // Optionaler Key für Changes-basierte Filterung
};

const shouldApplyChange = (changeKey: ColorPropertyConfig['changeKey'], changes?: ColorChanges): boolean => {
    if (!changeKey) {
        return true;
    }

    if (!changes) {
        return true;
    }

    return Boolean(changes[changeKey]);
};

const getDefaultValueForColorProp = (colorProp: ScalarColorProp): string | number => {
    if (colorProp === 'kelvin') {
        return 2000;
    }

    if (colorProp === 'hexString') {
        return '#ffffff';
    }

    return 0;
};

const syncKelvinHexToBrightness = (kelvinColor: iro.Color, brightnessColor: iro.Color): void => {
    const tmpValue = brightnessColor.value;
    brightnessColor.hexString = kelvinColor.hexString;
    brightnessColor.value = tmpValue;
};

const ColorWheelIcon: React.FC<React.ComponentProps<typeof SvgIcon>> = props => (
    <SvgIcon
        component={ColorWheelSvg}
        viewBox="0 0 128 128"
        {...props}
    />
);

const CctWhiteIcon: React.FC<React.ComponentProps<typeof SvgIcon>> = props => (
    <SvgIcon
        viewBox="0 0 512 512"
        {...props}
    >
        <defs>
            <linearGradient
                id="cctGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
            >
                <stop
                    offset="0%"
                    stopColor="#1E90FF"
                />
                <stop
                    offset="100%"
                    stopColor="#FF8C00"
                />
            </linearGradient>

            {/* Optionaler Schlagschatten-Filter für Tiefe */}
            <filter
                id="insetShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
            >
                <feOffset
                    dx="0"
                    dy="2"
                />
                <feGaussianBlur
                    stdDeviation="4"
                    result="offset-blur"
                />
                <feComposite
                    operator="out"
                    in="SourceGraphic"
                    in2="offset-blur"
                    result="inverse"
                />
                <feFlood
                    floodColor="#FFF176"
                    floodOpacity="0.4"
                />
                <feComposite
                    in2="inverse"
                    operator="in"
                    result="shadow"
                />
                <feComposite
                    in="shadow"
                    in2="SourceGraphic"
                    operator="over"
                />
            </filter>
        </defs>

        {/* Dicker, kräftiger Außenrand */}
        <circle
            cx="256"
            cy="256"
            r="252"
            fill="#FFF176"
        />

        {/* Deutlich kleinerer innerer Kreis mit Verlauf & Schatteneffekt */}
        <circle
            cx="256"
            cy="256"
            r="240"
            fill="url(#cctGradient)"
            filter="url(#insetShadow)"
        />

        {/* Vergrößertes Lampensymbol */}
        <g transform="translate(256 280) scale(1.2) translate(-256 -256)">
            <path
                d="M192 200c0-35 29-64 64-64s64 29 64 64c0 23.1-12.2 43.5-30.6 55.3V288c0 8.8-7.2 16-16 16h-35c-8.8 0-16-7.2-16-16v-32.7C204.2 243.5 192 223.1 192 200zm56 136h16c4.4 0 8 3.6 8 8v16h-32v-16c0-4.4 3.6-8 8-8z"
                fill="#FFF176"
                stroke="#000000"
                strokeWidth="4"
            />
        </g>
    </SvgIcon>
);

function Light2CollectionContent(): React.ReactElement {
    const [cctLight, setCctLight] = useState(false);
    const context = useContext(CollectionContext) as Light2CollectionContextProps;
    const {
        widget,
        widget: { data: rxData },
        values,
        getPropertyValue,
    } = context;

    const { data } = useData('oid');
    const oidValue = useOidValue('oid');

    const boxRef = useRef<HTMLDivElement>(null);
    const dimensions = useElementDimensions(boxRef.current, (rxData.colorLightSliderWidth || 1) * 28);
    const kelvinPickerRef = useRef<iro.ColorPicker | null>(null);
    const brightnessPickerRef = useRef<iro.ColorPicker | null>(null);
    const prevCctLightRef = useRef(cctLight);
    const widgetDataRef = useRef(widget.data);
    widgetDataRef.current = widget.data;
    const getPropertyValueRef = useRef(getPropertyValue);
    getPropertyValueRef.current = getPropertyValue;
    const [kelvinChanged, setKelvinChanged] = useState(false);
    const isSyncingRef = useRef(false);
    const processingRef = useRef(false);

    const isCctLight =
        rxData.colorLightType === 'rgbcct' ||
        rxData.colorLightType === 'r/g/b/cct' ||
        rxData.colorLightType === 'h/s/v/cct';

    const effectiveColorLightType = cctLight && isCctLight ? 'cct' : rxData.colorLightType;

    // ON/OFF
    const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');

    // Temperature (Backend/OID)
    const {
        value: temperatureValue,
        hasBackendChange: temperatureChanged,
        updateValue: setTemperatureValueState,
    } = useValueState('colorLightTemperatureOid');

    // Brightness
    const { updateValue: setBrightnessValueState, hasBackendChange: brightnessChanged } =
        useValueState('colorLightBrightnessOid');

    // RGB Hex
    const { updateValue: setRgbHexValueState, hasBackendChange: rgbHexChanged } = useValueState('colorLightRgbHexOid');

    // R/G/B einzeln
    const { updateValue: setRedValueState, hasBackendChange: redChanged } = useValueState('colorLightRedOid');
    const { updateValue: setGreenValueState, hasBackendChange: greenChanged } = useValueState('colorLightGreenOid');
    const { updateValue: setBlueValueState, hasBackendChange: blueChanged } = useValueState('colorLightBlueOid');

    // H/S/V
    const { updateValue: setHueValueState, hasBackendChange: hueChanged } = useValueState('colorLightHueOid');
    const { updateValue: setSaturationValueState, hasBackendChange: saturationChanged } =
        useValueState('colorLightSaturationOid');

    // Type-safe Zugriff auf das OID Object
    const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
    const oidType = colorLightSwitchOidObject?.type;
    const isValidType = oidType === 'boolean';

    const initHandler = (color: iro.Color, cctComponentNumber?: number): void => {
        initializeColorFromStates(color, effectiveColorLightType, getPropertyValue, widget.data, cctComponentNumber);
    };

    // Hilfsfunktion für Wert-Normalisierung (Hue-kompatible Werte mit maxValue 254)
    const normalizeValue = useMemo(
        () =>
            (value: number, oidObject: { maxValue?: number | null } | undefined): number => {
                const isHueCompatible = oidObject?.maxValue === 254;
                const roundedValue = Math.round(value);

                if (isHueCompatible) {
                    return Math.round((value / 100) * 254);
                }

                return roundedValue;
            },
        [],
    );

    // Konfigurations-Map für Lichttyp-zu-OID-Mapping
    const lightTypeConfigMap = useMemo(
        (): Record<string, ColorPropertyConfig[]> => ({
            cct: [
                {
                    colorProp: 'kelvin',
                    oidField: 'colorLightTemperatureOid',
                    setter: setTemperatureValueState,
                    cctComponent: 1,
                },
                {
                    colorProp: 'value',
                    oidField: 'colorLightBrightnessOid',
                    setter: setBrightnessValueState,
                    normalize: true,
                    cctComponent: 2,
                },
            ],
            rgb: [
                {
                    colorProp: 'hexString',
                    oidField: 'colorLightRgbHexOid',
                    setter: setRgbHexValueState,
                },
            ],
            rgbcct: [
                {
                    colorProp: 'hexString',
                    oidField: 'colorLightRgbHexOid',
                    setter: setRgbHexValueState,
                },
            ],
            'r/g/b': [
                {
                    colorProp: 'red',
                    oidField: 'colorLightRedOid',
                    setter: setRedValueState,
                },
                {
                    colorProp: 'green',
                    oidField: 'colorLightGreenOid',
                    setter: setGreenValueState,
                },
                {
                    colorProp: 'blue',
                    oidField: 'colorLightBlueOid',
                    setter: setBlueValueState,
                },
            ],
            'r/g/b/cct': [
                {
                    colorProp: 'red',
                    oidField: 'colorLightRedOid',
                    setter: setRedValueState,
                },
                {
                    colorProp: 'green',
                    oidField: 'colorLightGreenOid',
                    setter: setGreenValueState,
                },
                {
                    colorProp: 'blue',
                    oidField: 'colorLightBlueOid',
                    setter: setBlueValueState,
                },
            ],
            'h/s/v': [
                {
                    colorProp: 'hue',
                    oidField: 'colorLightHueOid',
                    setter: setHueValueState,
                    changeKey: 'h',
                },
                {
                    colorProp: 'saturation',
                    oidField: 'colorLightSaturationOid',
                    setter: setSaturationValueState,
                    normalize: true,
                    changeKey: 's',
                },
                {
                    colorProp: 'value',
                    oidField: 'colorLightBrightnessOid',
                    setter: setBrightnessValueState,
                    normalize: true,
                    changeKey: 'v',
                },
            ],
            'h/s/v/cct': [
                {
                    colorProp: 'hue',
                    oidField: 'colorLightHueOid',
                    setter: setHueValueState,
                    changeKey: 'h',
                },
                {
                    colorProp: 'saturation',
                    oidField: 'colorLightSaturationOid',
                    setter: setSaturationValueState,
                    normalize: true,
                    changeKey: 's',
                },
                {
                    colorProp: 'value',
                    oidField: 'colorLightBrightnessOid',
                    setter: setBrightnessValueState,
                    normalize: true,
                    changeKey: 'v',
                },
            ],
        }),
        [
            setTemperatureValueState,
            setBrightnessValueState,
            setRgbHexValueState,
            setRedValueState,
            setGreenValueState,
            setBlueValueState,
            setHueValueState,
            setSaturationValueState,
        ],
    );

    // Zentrale handleColorChange-Funktion
    const handleColorChange = useMemo(
        () =>
            (color: iro.Color, cctComponentNumber?: number, changes?: ColorChanges): void => {
                if (!effectiveColorLightType || processingRef.current || isSyncingRef.current) {
                    return;
                }

                processingRef.current = true;

                try {
                    const config = lightTypeConfigMap[effectiveColorLightType];

                    if (!config) {
                        return;
                    }

                    config.forEach((configItem: ColorPropertyConfig) => {
                        const { colorProp, oidField, setter, normalize, cctComponent, changeKey } = configItem;

                        // Für CCT-Modus: Nur relevanten Picker-Werte verarbeiten
                        if (cctComponent !== undefined && cctComponentNumber !== cctComponent) {
                            return;
                        }

                        // Für H/S/V-Typen: Nur schreiben wenn entsprechender Change-Flag gesetzt ist
                        if (!shouldApplyChange(changeKey, changes)) {
                            return;
                        }

                        // Prüfen ob OID-Objekt existiert
                        const oidObjectKey = `${oidField}Object` as keyof typeof widget.data;
                        const oidObject = widget.data[oidObjectKey] as { maxValue?: number | null } | undefined;

                        if (!oidObject) {
                            return;
                        }

                        // Wert aus iro.Color extrahieren
                        let value: string | number | undefined = color[colorProp];

                        // Wert normalisieren falls nötig
                        if (normalize && typeof value === 'number') {
                            value = normalizeValue(value, oidObject);
                        } else if (typeof value === 'number') {
                            value = Math.round(value);
                        }

                        // Fallback-Werte für undefined
                        if (value === undefined || value === null) {
                            value = getDefaultValueForColorProp(colorProp);
                        }

                        // State aktualisieren
                        setter(value);
                    });

                    // Für Kelvin-Änderungen: Flag setzen (für Brightness-Picker-Sync)
                    if (cctComponentNumber === 1) {
                        setKelvinChanged(prev => !prev);
                    }
                } finally {
                    void Promise.resolve().then(() => {
                        processingRef.current = false;
                    });
                }
            },
        [effectiveColorLightType, lightTypeConfigMap, widget, normalizeValue, processingRef],
    );

    const marginLeft = useMemo(
        () =>
            getMarginBetweenPickers(
                dimensions,
                rxData.colorLightUIComponent,
                rxData.colorLightSliderWidth,
                effectiveColorLightType,
            ),
        [dimensions, rxData.colorLightUIComponent, rxData.colorLightSliderWidth, effectiveColorLightType],
    );

    // Gemeinsame Props für LightPicker
    const commonLightPickerProps = useMemo(
        () => ({
            dimensions,
            colorLightGamut: rxData.colorLightGamut,
            colorWheelLightness: rxData.colorWheelLightness,
            colorLightUIComponent: rxData.colorLightUIComponent,
            colorLightSliderWidth: rxData.colorLightSliderWidth,
            colorLightBorderWidth: rxData.colorLightBorderWidth,
            colorLightBorderColor: rxData.colorLightBorderColor,
            colorLightType: effectiveColorLightType,
            colorLightCtMin: rxData.colorLightCtMin,
            colorLightCtMax: rxData.colorLightCtMax,
        }),
        [
            dimensions,
            rxData.colorLightGamut,
            rxData.colorWheelLightness,
            rxData.colorLightUIComponent,
            rxData.colorLightSliderWidth,
            rxData.colorLightBorderWidth,
            rxData.colorLightBorderColor,
            rxData.colorLightCtMin,
            rxData.colorLightCtMax,
            effectiveColorLightType,
        ],
    );

    /* Synchronisiert Kelvin-Picker-Änderungen aus der UI in den Brightness-Picker, damit die Verläufe identisch bleiben. */
    useEffect(() => {
        if (effectiveColorLightType !== 'cct') {
            return;
        }

        if (!kelvinPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        const kelvinColor = kelvinPickerRef.current.color;
        const brightnessColor = brightnessPickerRef.current.color;

        if (kelvinChanged) {
            isSyncingRef.current = true;
            try {
                syncKelvinHexToBrightness(kelvinColor, brightnessColor);
            } finally {
                isSyncingRef.current = false;
            }
        }
    }, [effectiveColorLightType, kelvinChanged]);

    /* Synchronisiert Backend-Temperaturänderungen in Kelvin- und Brightness-Picker, wenn eine neue Temperatur eintrifft. */
    useEffect(() => {
        if (effectiveColorLightType !== 'cct') {
            return;
        }

        if (!kelvinPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        if (!temperatureChanged) {
            return;
        }

        const kelvinColor = kelvinPickerRef.current.color;
        const brightnessColor = brightnessPickerRef.current.color;

        if (temperatureValue === undefined || temperatureValue === null) {
            return;
        }

        isSyncingRef.current = true;
        try {
            kelvinColor.kelvin = Number(temperatureValue);
            syncKelvinHexToBrightness(kelvinColor, brightnessColor);
        } finally {
            isSyncingRef.current = false;
        }
    }, [effectiveColorLightType, temperatureChanged, temperatureValue]);

    useEffect(() => {
        if (!cctLight || effectiveColorLightType !== 'cct') {
            return;
        }

        if (!brightnessChanged || !brightnessPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeBrightness(brightnessPickerRef.current.color, widgetDataRef.current, getPropertyValueRef.current);
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, effectiveColorLightType, brightnessChanged]);

    useEffect(() => {
        if (cctLight || !['rgb', 'rgbcct'].includes(effectiveColorLightType || '')) {
            return;
        }

        if (!rgbHexChanged || !kelvinPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                kelvinPickerRef.current.color,
                effectiveColorLightType,
                getPropertyValue,
                widget.data,
            );
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, effectiveColorLightType, rgbHexChanged, getPropertyValue, widget.data]);

    useEffect(() => {
        if (cctLight || !['r/g/b', 'r/g/b/cct'].includes(effectiveColorLightType || '')) {
            return;
        }

        if ((!redChanged && !greenChanged && !blueChanged) || !kelvinPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                kelvinPickerRef.current.color,
                effectiveColorLightType,
                getPropertyValue,
                widget.data,
            );
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, effectiveColorLightType, redChanged, greenChanged, blueChanged, getPropertyValue, widget.data]);

    useEffect(() => {
        if (cctLight || !['h/s/v', 'h/s/v/cct'].includes(effectiveColorLightType || '')) {
            return;
        }

        if ((!hueChanged && !saturationChanged && !brightnessChanged) || !kelvinPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                kelvinPickerRef.current.color,
                effectiveColorLightType,
                getPropertyValue,
                widget.data,
            );
        } finally {
            isSyncingRef.current = false;
        }
    }, [
        cctLight,
        effectiveColorLightType,
        hueChanged,
        saturationChanged,
        brightnessChanged,
        getPropertyValue,
        widget.data,
    ]);

    /* Beim Umschalten auf den Kelvin-Teil des CCT-Lichts beide Picker initial synchronisieren. */
    useEffect(() => {
        if (!cctLight || !isCctLight) {
            return;
        }

        if (!kelvinPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        const kelvinColor = kelvinPickerRef.current.color;
        const brightnessColor = brightnessPickerRef.current.color;

        isSyncingRef.current = true;
        try {
            initializeKelvin(kelvinColor, widgetDataRef.current, getPropertyValueRef.current);

            if (prevCctLightRef.current === false) {
                if (Number(temperatureValue) !== Number(kelvinColor.kelvin)) {
                    setTemperatureValueState(Number(kelvinColor.kelvin));
                }
            }

            syncKelvinHexToBrightness(kelvinColor, brightnessColor);
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, isCctLight]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!prevCctLightRef.current || cctLight || !isCctLight) {
            return;
        }

        if (!kelvinPickerRef.current) {
            return;
        }

        initializeBrightness(kelvinPickerRef.current.color, widgetDataRef.current, getPropertyValueRef.current);
    }, [cctLight, isCctLight]);

    useEffect(() => {
        if (prevCctLightRef.current !== true || cctLight || !isCctLight || !kelvinPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                kelvinPickerRef.current.color,
                effectiveColorLightType,
                getPropertyValueRef.current,
                widgetDataRef.current,
            );
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, isCctLight, effectiveColorLightType]);

    useEffect(() => {
        prevCctLightRef.current = cctLight;
    }, [cctLight]);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />
            {rxData.colorLightType !== 'none' ? (
                <Box
                    sx={{
                        minWidth: 0,
                        height: '100%',
                        display: 'flex',
                        flexShrink: 0,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        onClick={() => {
                            if (onOffValue) {
                                setOnOffValueState(false);
                            } else {
                                setOnOffValueState(true);
                            }
                        }}
                    >
                        <PowerSettingsNewIcon
                            sx={{
                                color: onOffValue ? 'red' : 'green',
                                width: '26px',
                                height: '26px',
                            }}
                        />
                    </IconButton>

                    {isCctLight && (
                        <Box
                            sx={{
                                display: 'inline-block',
                            }}
                        >
                            <Divider
                                orientation="horizontal"
                                flexItem
                                variant="fullWidth"
                            />
                            <IconButton onClick={() => setCctLight(false)}>
                                <ColorWheelIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    )}

                    {/* <Divider
                    flexItem
                    variant="middle"
                /> */}

                    {isCctLight && (
                        <Box
                            sx={{
                                display: 'block',
                            }}
                        >
                            <IconButton onClick={() => setCctLight(true)}>
                                <CctWhiteIcon
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            ) : null}

            <Divider
                orientation="vertical"
                flexItem
                variant="middle"
            />

            <Box
                ref={boxRef}
                sx={{
                    minWidth: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: Number(rxData.colorLightPadding) || 0,
                }}
            >
                {Object.keys(values).length !== 0 &&
                    dimensions.width !== undefined &&
                    rxData.colorLightType !== 'none' && (
                        <>
                            <LightPicker
                                cctComponentNumber={1} // kelvin
                                ref={kelvinPickerRef}
                                onColorInit={initHandler}
                                onInputChange={(color, changes) => handleColorChange(color, 1, changes)}
                                {...commonLightPickerProps}
                            />

                            {effectiveColorLightType === 'cct' && (
                                <Box sx={{ ml: `${marginLeft}px` }}>
                                    <LightPicker
                                        cctComponentNumber={2} // brightness
                                        onColorInit={initHandler}
                                        onInputChange={(color, changes) => handleColorChange(color, 2, changes)}
                                        ref={brightnessPickerRef}
                                        {...commonLightPickerProps}
                                    />
                                </Box>
                            )}
                        </>
                    )}
            </Box>
        </CollectionBase>
    );
}

const Light2Collection = withButtonModal(Light2CollectionContent);

export default Light2Collection;
