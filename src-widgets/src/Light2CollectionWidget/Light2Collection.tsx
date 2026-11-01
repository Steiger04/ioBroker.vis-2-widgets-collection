/**
 * Light2 collection renderer.
 *
 * @module widgets/Light2Collection
 */

import { Box, Divider, IconButton, SvgIcon } from '@mui/material';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import type { Light2CollectionContextProps, OidObjectMeta } from '../types';
import withButtonModal from './withButtonModal';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import LightPicker from './Light2Picker';
import { getMarginBetweenPickers, withMainPickerBound } from './colorPickerUtils/colorPickerMemos';
import type iro from '@jaames/iro';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ColorWheelSvg from '../img/colorWheel.svg?react';
import CctWhiteSvg from '../img/cctWhite.svg?react';
import { initializeColorFromStates, initializeKelvin, initializeBrightness } from './initHandlers';
import { isHueScale, toHueScale } from './hueScale';
import { backendSyncKey } from './backendSyncKey';

// Changes type used for H/S/V change information.
type ColorChanges = {
    h?: boolean;
    s?: boolean;
    v?: boolean;
};

// Scalar properties that are actually used in the config map.
type ScalarColorProp = 'kelvin' | 'hexString' | 'red' | 'green' | 'blue' | 'hue' | 'saturation' | 'value';
// Configuration type for light-type to OID mapping.
type ColorPropertyConfig = {
    colorProp: ScalarColorProp;
    oidField: string;
    setter: (value: string | number) => void;
    normalize?: boolean;
    cctComponent?: 1 | 2;
    changeKey?: 'h' | 's' | 'v'; // Optional key for changes-based filtering.
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
        component={CctWhiteSvg}
        viewBox="0 0 512 512"
        {...props}
    />
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

    const { data } = useData('');

    // Callback-ref-as-state: useElementDimensions re-runs when the element mounts.
    // (A plain useRef would leave the hook memoizing the null of the first render.)
    // Measured locally, not the frame's Content-Box: the picker box carries its own
    // colorLightPadding (ADR-0098). Light2 adds its main-picker bound itself.
    const [boxElement, setBoxElement] = useState<HTMLDivElement | null>(null);
    const measuredBox = useElementDimensions(boxElement);
    const sliderSize = (rxData.colorLightSliderWidth || 1) * 28;
    const dimensions = useMemo(() => withMainPickerBound(measuredBox, sliderSize), [measuredBox, sliderSize]);
    const mainPickerRef = useRef<iro.ColorPicker | null>(null);
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
    const {
        value: brightnessValue,
        updateValue: setBrightnessValueState,
        hasBackendChange: brightnessChanged,
    } = useValueState('colorLightBrightnessOid');

    // RGB Hex
    const {
        value: rgbHexValue,
        updateValue: setRgbHexValueState,
        hasBackendChange: rgbHexChanged,
    } = useValueState('colorLightRgbHexOid');

    // Single R/G/B channels
    const {
        value: redValue,
        updateValue: setRedValueState,
        hasBackendChange: redChanged,
    } = useValueState('colorLightRedOid');
    const {
        value: greenValue,
        updateValue: setGreenValueState,
        hasBackendChange: greenChanged,
    } = useValueState('colorLightGreenOid');
    const {
        value: blueValue,
        updateValue: setBlueValueState,
        hasBackendChange: blueChanged,
    } = useValueState('colorLightBlueOid');

    // H/S/V
    const {
        value: hueValue,
        updateValue: setHueValueState,
        hasBackendChange: hueChanged,
    } = useValueState('colorLightHueOid');
    const {
        value: saturationValue,
        updateValue: setSaturationValueState,
        hasBackendChange: saturationChanged,
    } = useValueState('colorLightSaturationOid');

    // Type-safe access to the OID object.
    const colorLightSwitchOidObject = widget.data.colorLightSwitchOidObject;
    const oidType = colorLightSwitchOidObject?.type;
    const isValidType = oidType === 'boolean';

    const initHandler = (color: iro.Color, cctComponentNumber?: number): void => {
        initializeColorFromStates(color, effectiveColorLightType, getPropertyValue, widget.data, cctComponentNumber);
    };

    // Helper for value normalization (Hue-compatible 0-254 channels; see hueScale.ts).
    const normalizeValue = useMemo(
        () =>
            (value: number, oidObject: OidObjectMeta | undefined): number =>
                isHueScale(oidObject?.maxValue) ? toHueScale(value) : Math.round(value),
        [],
    );

    // Config map for light-type to OID mapping.
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

    // Central handleColorChange function.
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

                        // For CCT mode: only process the relevant picker component.
                        if (cctComponent !== undefined && cctComponentNumber !== cctComponent) {
                            return;
                        }

                        // For H/S/V types: only write when the corresponding change flag is set.
                        if (!shouldApplyChange(changeKey, changes)) {
                            return;
                        }

                        // Ensure the OID object exists.
                        const oidObjectKey = `${oidField}Object` as keyof typeof widget.data;
                        const oidObject = widget.data[oidObjectKey] as OidObjectMeta | undefined;

                        if (!oidObject) {
                            return;
                        }

                        // Extract the value from iro.Color.
                        let value: string | number | undefined = color[colorProp];

                        // Normalize if needed.
                        if (normalize && typeof value === 'number') {
                            value = normalizeValue(value, oidObject);
                        } else if (typeof value === 'number') {
                            value = Math.round(value);
                        }

                        // Fallback for undefined/null.
                        if (value === undefined || value === null) {
                            value = getDefaultValueForColorProp(colorProp);
                        }

                        // Update state.
                        setter(value);
                    });

                    // For kelvin changes: toggle a flag (used to sync gradients into brightness picker).
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

    // Shared props for LightPicker.
    const commonLightPickerProps = useMemo(
        () => ({
            dimensions,
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

    /*
     * Sync Kelvin picker UI changes into the brightness picker so gradients stay identical.
     */
    useEffect(() => {
        if (effectiveColorLightType !== 'cct') {
            return;
        }

        if (!mainPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        const kelvinColor = mainPickerRef.current.color;
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

    /*
     * Foreign backend changes → picker sync. Each effect keys on a backendSyncKey
     * (not on the hasBackendChange flags): the flag stays true across consecutive
     * foreign changes, the key changes with each of them.
     */
    const temperatureSyncKey = backendSyncKey([{ changed: temperatureChanged, value: temperatureValue }]);
    const brightnessSyncKey = backendSyncKey([{ changed: brightnessChanged, value: brightnessValue }]);
    const mainColorSyncKey = backendSyncKey(
        ['rgb', 'rgbcct'].includes(effectiveColorLightType || '')
            ? [{ changed: rgbHexChanged, value: rgbHexValue }]
            : ['r/g/b', 'r/g/b/cct'].includes(effectiveColorLightType || '')
              ? [
                    { changed: redChanged, value: redValue },
                    { changed: greenChanged, value: greenValue },
                    { changed: blueChanged, value: blueValue },
                ]
              : ['h/s/v', 'h/s/v/cct'].includes(effectiveColorLightType || '')
                ? [
                      { changed: hueChanged, value: hueValue },
                      { changed: saturationChanged, value: saturationValue },
                      { changed: brightnessChanged, value: brightnessValue },
                  ]
                : [],
    );

    /*
     * Sync backend temperature updates into both Kelvin and brightness pickers.
     */
    useEffect(() => {
        if (effectiveColorLightType !== 'cct' || temperatureSyncKey === null) {
            return;
        }

        if (!mainPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        if (temperatureValue === undefined || temperatureValue === null) {
            return;
        }

        const kelvinColor = mainPickerRef.current.color;
        const brightnessColor = brightnessPickerRef.current.color;

        isSyncingRef.current = true;
        try {
            kelvinColor.kelvin = Number(temperatureValue);
            syncKelvinHexToBrightness(kelvinColor, brightnessColor);
        } finally {
            isSyncingRef.current = false;
        }
    }, [effectiveColorLightType, temperatureSyncKey, temperatureValue]);

    /*
     * Sync backend brightness updates into the CCT brightness picker.
     */
    useEffect(() => {
        if (!cctLight || effectiveColorLightType !== 'cct' || brightnessSyncKey === null) {
            return;
        }

        if (!brightnessPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeBrightness(brightnessPickerRef.current.color, widgetDataRef.current, getPropertyValueRef.current);
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, effectiveColorLightType, brightnessSyncKey]);

    /*
     * Sync backend color updates (rgb hex, r/g/b or h/s/v channels) into the main picker.
     */
    useEffect(() => {
        if (cctLight || mainColorSyncKey === null || !mainPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                mainPickerRef.current.color,
                effectiveColorLightType,
                getPropertyValueRef.current,
                widgetDataRef.current,
            );
        } finally {
            isSyncingRef.current = false;
        }
    }, [cctLight, effectiveColorLightType, mainColorSyncKey]);

    /*
     * When switching to the Kelvin part of a CCT light, initialize both pickers in sync.
     */
    useEffect(() => {
        if (!cctLight || !isCctLight) {
            return;
        }

        if (!mainPickerRef.current || !brightnessPickerRef.current) {
            return;
        }

        const kelvinColor = mainPickerRef.current.color;
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

        if (!mainPickerRef.current) {
            return;
        }

        initializeBrightness(mainPickerRef.current.color, widgetDataRef.current, getPropertyValueRef.current);
    }, [cctLight, isCctLight]);

    useEffect(() => {
        if (prevCctLightRef.current !== true || cctLight || !isCctLight || !mainPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            initializeColorFromStates(
                mainPickerRef.current.color,
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
                ref={setBoxElement}
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
                                ref={mainPickerRef}
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
