/**
 * Light2 collection renderer.
 *
 * @module widgets/Light2Collection
 */

import { Box, Divider, IconButton, SvgIcon } from '@mui/material';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { Light2CollectionContextProps } from '../types';
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
import { channelWrites, readChannelsIntoColor } from './channelMapping';
import type { ColorChanges, PickerTarget } from './channelMapping';
import { channelsOf, mainColorSyncFields, offersViewSwitch } from '../lib/light2Channels';
import type { Light2CctPicker, Light2ChannelField } from '../lib/light2Channels';
import { backendSyncKey } from './backendSyncKey';
import type { SyncChannel } from './backendSyncKey';

/** The picker of the CCT-Ansicht behind a component number (1 Kelvin, 2 Helligkeit). */
const cctPickerOf = (cctComponentNumber?: number): Light2CctPicker | undefined =>
    cctComponentNumber === 1 ? 'kelvin' : cctComponentNumber === 2 ? 'brightness' : undefined;

/**
 * The channel-mapping target of a picker, from the effective Lichttyp: 'cct' stands for the
 * CCT-Ansicht (of the Lichttyp cct or of an „& cct“ one — both bind the same Kanäle there).
 * Bridge until the one view notion replaces `effectiveColorLightType` (ADR-0108, ticket 10).
 */
const pickerTargetOf = (effectiveColorLightType: string | undefined, cctComponentNumber?: number): PickerTarget =>
    effectiveColorLightType === 'cct'
        ? { type: 'cct', view: 'cct', picker: cctPickerOf(cctComponentNumber) }
        : { type: effectiveColorLightType, view: 'color' };

/** The Kelvin- and the Helligkeits-Picker of the CCT-Ansicht as channel-mapping targets. */
const KELVIN_PICKER: PickerTarget = { type: 'cct', view: 'cct', picker: 'kelvin' };
const BRIGHTNESS_PICKER: PickerTarget = { type: 'cct', view: 'cct', picker: 'brightness' };

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

    const isCctLight = offersViewSwitch(rxData.colorLightType);

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
        readChannelsIntoColor(
            color,
            pickerTargetOf(effectiveColorLightType, cctComponentNumber),
            widget.data,
            getPropertyValue,
        );
    };

    // The useValueState setter of each Kanal: the write requests of the channel mapping run through them.
    const channelSetters = useMemo(
        (): Record<Light2ChannelField, (value: string | number) => void> => ({
            colorLightTemperatureOid: setTemperatureValueState,
            colorLightRgbHexOid: setRgbHexValueState,
            colorLightRedOid: setRedValueState,
            colorLightGreenOid: setGreenValueState,
            colorLightBlueOid: setBlueValueState,
            colorLightHueOid: setHueValueState,
            colorLightSaturationOid: setSaturationValueState,
            colorLightBrightnessOid: setBrightnessValueState,
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
                    const target = pickerTargetOf(effectiveColorLightType, cctComponentNumber);

                    // No Kanäle (none, an unknown Lichttyp): nothing to write, no Kelvin toggle.
                    if (!channelsOf(target.type, target.view).length) {
                        return;
                    }

                    for (const { field, value } of channelWrites(color, target, changes, widget.data)) {
                        channelSetters[field](value);
                    }

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
        [effectiveColorLightType, channelSetters, widget, processingRef],
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
    const channelSyncStates: Record<Light2ChannelField, SyncChannel> = {
        colorLightTemperatureOid: { changed: temperatureChanged, value: temperatureValue },
        colorLightRgbHexOid: { changed: rgbHexChanged, value: rgbHexValue },
        colorLightRedOid: { changed: redChanged, value: redValue },
        colorLightGreenOid: { changed: greenChanged, value: greenValue },
        colorLightBlueOid: { changed: blueChanged, value: blueValue },
        colorLightHueOid: { changed: hueChanged, value: hueValue },
        colorLightSaturationOid: { changed: saturationChanged, value: saturationValue },
        colorLightBrightnessOid: { changed: brightnessChanged, value: brightnessValue },
    };
    const mainColorTarget = pickerTargetOf(effectiveColorLightType);
    const mainColorSyncKey = backendSyncKey(
        mainColorSyncFields(mainColorTarget.type, mainColorTarget.view).map(field => channelSyncStates[field]),
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
            readChannelsIntoColor(
                brightnessPickerRef.current.color,
                BRIGHTNESS_PICKER,
                widgetDataRef.current,
                getPropertyValueRef.current,
            );
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
            readChannelsIntoColor(
                mainPickerRef.current.color,
                pickerTargetOf(effectiveColorLightType),
                widgetDataRef.current,
                getPropertyValueRef.current,
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
            readChannelsIntoColor(kelvinColor, KELVIN_PICKER, widgetDataRef.current, getPropertyValueRef.current);

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

        readChannelsIntoColor(
            mainPickerRef.current.color,
            BRIGHTNESS_PICKER,
            widgetDataRef.current,
            getPropertyValueRef.current,
        );
    }, [cctLight, isCctLight]);

    useEffect(() => {
        if (prevCctLightRef.current !== true || cctLight || !isCctLight || !mainPickerRef.current) {
            return;
        }

        isSyncingRef.current = true;
        try {
            readChannelsIntoColor(
                mainPickerRef.current.color,
                pickerTargetOf(effectiveColorLightType),
                widgetDataRef.current,
                getPropertyValueRef.current,
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
