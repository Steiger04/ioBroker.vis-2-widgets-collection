import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Divider, IconButton, Stack, SvgIcon } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useRefDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
// import { ReactComponent as ColorWheelSvg } from '../img/colorWheel.svg';
import ColorWheelSvg from '../img/colorWheel.svg?react';
import LightPicker from './LightPicker';

import type { IroColor } from '@irojs/iro-core';
import { type LightCollectionContextProps } from '..';
import { type IroColorPicker } from '@jaames/iro/dist/ColorPicker';

interface Changes {
    [key: string]: boolean;
}

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

function LightPickerCollectionBase(): React.ReactElement {
    const { values, getPropertyValue, widget } = useContext(CollectionContext) as LightCollectionContextProps;

    const widgetData = widget.data;

    const { data } = useData('');

    // ON/OFF
    const { value: onOffValue, updateValue: setOnOffValueState } = useValueState('colorLightSwitchOid');

    // Temperature
    const {
        value: temperatureValue,
        hasValueChanged: temperatureChanged,
        updateValue: setTemperatureValueState,
    } = useValueState('colorLightTemperatureOid');

    // RGB
    const {
        value: rgbHexValue,
        hasValueChanged: rgbHexChanged,
        updateValue: setRgbHexValueState,
    } = useValueState('colorLightRgbHexOid');

    // R/G/B
    const {
        value: redValue,
        hasValueChanged: redChanged,
        updateValue: setRedValueState,
    } = useValueState('colorLightRedOid');
    const {
        value: greenValue,
        hasValueChanged: greenChanged,
        updateValue: setGreenValueState,
    } = useValueState('colorLightGreenOid');
    const {
        value: blueValue,
        hasValueChanged: blueChanged,
        updateValue: setBlueValueState,
    } = useValueState('colorLightBlueOid');

    // H/S/V
    const {
        value: hueValue,
        hasValueChanged: hueChanged,
        updateValue: setHueValueState,
    } = useValueState('colorLightHueOid');
    const {
        value: saturationValue,
        hasValueChanged: saturationChanged,
        updateValue: setSaturationValueState,
    } = useValueState('colorLightSaturationOid');
    const {
        value: brightnessValue,
        hasValueChanged: brightnessChanged,
        updateValue: setBrightnessValueState,
    } = useValueState('colorLightBrightnessOid');

    const isValues = Object.values(values).length > 0;

    const isCctLight =
        widgetData.colorLightType === 'rgbcct' ||
        widgetData.colorLightType === 'r/g/b/cct' ||
        widgetData.colorLightType === 'h/s/v/cct';

    const [cctLight, setCctLight] = useState(false);

    const iroRef = useRef<any>(null);
    const iroCctBriRef = useRef<any>(null);
    const wheelRef = useRef<HTMLDivElement>(null);

    const { width: wheelWidth, height: wheelHeight } = useRefDimensions(wheelRef?.current);
    const wheelSize =
        wheelWidth && wheelHeight
            ? wheelWidth <= wheelHeight
                ? Math.max(wheelWidth, wheelHeight)
                : Math.min(wheelWidth, wheelHeight)
            : 200;

    const mountHandler = (_picker: IroColorPicker): void => {
        // Initialisiere nur die für den Lichttyp relevanten Farbwerte

        const color = _picker.color;
        const type = cctLight ? 'cct' : widgetData.colorLightType;

        switch (type) {
            case 'cct':
                color.kelvin = Number(getPropertyValue('colorLightTemperatureOid')) || 2000;
                if (widgetData.colorLightBrightnessOidObject) {
                    const isHueVal = widgetData.colorLightBrightnessOidObject?.maxValue === 254;
                    let val = Number(getPropertyValue('colorLightBrightnessOid')) || 0;
                    if (isHueVal) {
                        val = Math.round((val / 254) * 100);
                    } else {
                        val = Math.round(val);
                    }
                    color.value = val;
                }
                break;

            case 'rgb':
            case 'rgbcct':
                color.hexString = (getPropertyValue('colorLightRgbHexOid') as string) || '#000000';
                break;

            case 'r/g/b':
            case 'r/g/b/cct': {
                color.red = Number(getPropertyValue('colorLightRedOid')) || 0;
                color.green = Number(getPropertyValue('colorLightGreenOid')) || 0;
                color.blue = Number(getPropertyValue('colorLightBlueOid')) || 0;

                const isHueVal = widgetData.colorLightBrightnessOidObject?.maxValue === 254;
                let val = Number(getPropertyValue('colorLightBrightnessOid')) || 0;
                if (isHueVal) {
                    val = Math.round((val / 254) * 100);
                } else {
                    val = Math.round(val);
                }
                color.value = val;
                break;
            }

            case 'h/s/v':
            case 'h/s/v/cct': {
                color.hue = Number(getPropertyValue('colorLightHueOid')) || 0;
                const isHueSat = widgetData.colorLightSaturationOidObject?.maxValue === 254;
                let sat = Number(getPropertyValue('colorLightSaturationOid')) || 0;
                if (isHueSat) {
                    sat = Math.round((sat / 254) * 100);
                } else {
                    sat = Math.round(sat);
                }
                color.saturation = sat;

                const isHueVal = widgetData.colorLightBrightnessOidObject?.maxValue === 254;
                let val = Number(getPropertyValue('colorLightBrightnessOid')) || 0;
                if (isHueVal) {
                    val = Math.round((val / 254) * 100);
                } else {
                    val = Math.round(val);
                }
                color.value = val;
                break;
            }

            default:
                break;
        }
    };

    const changeHandler = (color: IroColor, changes: Changes): void => {
        if (!changes || !color) {
            return;
        }

        let type: string;
        if (cctLight) {
            type = 'cct';
        } else {
            type = widgetData.colorLightType!;
        }

        const isHueVal = widgetData.colorLightBrightnessOidObject?.maxValue === 254;
        let val = Math.round(color.value);
        if (isHueVal) {
            val = Math.round((color.value / 100) * 254);
        }

        switch (type) {
            case 'cct':
                if (changes.v && !changes.h && !changes.s && widgetData.colorLightBrightnessOidObject) {
                    setBrightnessValueState(val || 0);
                } else if (widgetData.colorLightTemperatureOidObject) {
                    setTemperatureValueState(Math.round(color.kelvin) || 2000);
                }
                break;

            case 'rgb':
            case 'rgbcct':
                if (widgetData.colorLightRgbHexOidObject) {
                    setRgbHexValueState(color.hexString || '#000000');
                }

                break;

            case 'r/g/b':
            case 'r/g/b/cct':
                if (widgetData.colorLightRedOidObject) {
                    setRedValueState(color.red || 0);
                }

                if (widgetData.colorLightGreenOidObject) {
                    setGreenValueState(color.green || 0);
                }

                if (widgetData.colorLightBlueOidObject) {
                    setBlueValueState(color.blue || 0);
                }
                break;

            case 'h/s/v':
            case 'h/s/v/cct':
                if (changes.h && widgetData.colorLightHueOidObject) {
                    setHueValueState(Math.round(color.hue) || 0);
                }

                if (changes.s && widgetData.colorLightSaturationOidObject) {
                    const isHueSat = widgetData.colorLightSaturationOidObject?.maxValue === 254;

                    let sat = Math.round(color.saturation);

                    if (isHueSat) {
                        sat = Math.round((color.saturation / 100) * 254);
                    }

                    setSaturationValueState(sat || 0);
                }

                if (changes.v && widgetData.colorLightBrightnessOidObject) {
                    const isHueVal = widgetData.colorLightBrightnessOidObject?.maxValue === 254;

                    let val = Math.round(color.value);

                    if (isHueVal) {
                        val = Math.round((color.value / 100) * 254);
                    }

                    setBrightnessValueState(val || 0);
                }

                break;

            default:
                break;
        }
    };

    // temperature changes
    useEffect(() => {
        if (!iroRef.current || !iroCctBriRef.current) {
            return;
        }

        const color = iroRef.current.color;
        const cctBriColor = iroCctBriRef.current.color;

        if (temperatureChanged) {
            color.kelvin = temperatureValue;

            const tmpValue = cctBriColor.value;
            cctBriColor.hexString = color.hexString;
            cctBriColor.value = tmpValue;
        }
    }, [temperatureChanged, temperatureValue]);

    // RGB Hex changes, R/G/B changes
    useEffect(() => {
        if (!iroRef.current) {
            return;
        }

        const color = iroRef.current.color;

        if (redChanged) {
            color.red = redValue;
        }

        if (greenChanged) {
            color.green = greenValue;
        }

        if (blueChanged) {
            color.blue = blueValue;
        }

        if (rgbHexChanged) {
            color.hexString = rgbHexValue || '#000000';
        }
    }, [redChanged, greenChanged, blueChanged, redValue, greenValue, blueValue, rgbHexValue, rgbHexChanged]);

    // H/S/V changes
    useEffect(() => {
        if (!iroRef.current) {
            return;
        }

        const color = iroRef.current.color;
        const uiComponent = widgetData.colorLightUIComponent;

        const roundedHue = Math.round(Number(hueValue) || 0);

        const roundedSaturation =
            widgetData.colorLightSaturationOidObject?.maxValue === 254
                ? Math.round((Number(saturationValue) / 254) * 100)
                : Math.round(Number(saturationValue) || 0);

        const roundedBrightness =
            widgetData.colorLightBrightnessOidObject?.maxValue === 254
                ? Math.round((Number(brightnessValue) / 254) * 100)
                : Math.round(Number(brightnessValue) || 0);

        const setHue = (): void => {
            if (hueChanged) {
                color.hue = roundedHue;
            }
        };

        const setSaturation = (): void => {
            if (saturationChanged) {
                color.saturation = roundedSaturation;
            }
        };

        const setBrightness = (): void => {
            if (brightnessChanged) {
                color.value = roundedBrightness;
            }
        };

        if (uiComponent === 'wheel' || uiComponent === 'box' || uiComponent === 'slider') {
            setHue();
            setSaturation();
            setBrightness();
        }
    }, [
        hueChanged,
        saturationChanged,
        brightnessChanged,
        hueValue,
        saturationValue,
        brightnessValue,
        widgetData.colorLightUIComponent,
        widgetData.colorLightSaturationOidObject,
        widgetData.colorLightBrightnessOidObject,
    ]);

    return (
        <CollectionBase
            sx={{
                alignItems: 'flex-start',
            }}
            data={data}
            oidValue={JSON.stringify(iroRef.current?.color.rgb)}
        >
            <Box
                sx={{
                    pt: 0.5,

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box>
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
                                width: '1.1em',
                                height: '1.1em',
                            }}
                        />
                    </IconButton>
                </Box>
                {isCctLight && (
                    <>
                        <IconButton onClick={() => setCctLight(false)}>
                            <ColorWheelIcon
                                sx={{
                                    width: '1.1em',
                                    height: '1.1em',
                                }}
                            />
                        </IconButton>
                        {/* <Divider flexItem variant="middle" /> */}
                        <IconButton onClick={() => setCctLight(true)}>
                            <CctWhiteIcon
                                sx={{
                                    width: '1.1em',
                                    height: '1.1em',
                                }}
                            />
                        </IconButton>
                    </>
                )}
            </Box>
            <Divider
                orientation="vertical"
                flexItem
                variant="middle"
            />
            <Box
                id="PADDING"
                sx={{
                    width: '100%',
                    height: '100%',

                    p: Number(widgetData.colorLightPadding),
                }}
            >
                <Box
                    id="REF"
                    ref={wheelRef}
                    sx={{
                        width: '100%',
                        height: '100%',

                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            overflow: 'hidden',

                            width: '100%',
                            height: '100%',

                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {isValues && (
                            <LightPicker
                                ref={iroRef}
                                cctLight={cctLight}
                                widget={widget}
                                onChange={changeHandler}
                                onMount={mountHandler}
                                wheelSize={wheelSize}
                            />
                        )}
                        {isValues && (widgetData.colorLightType === 'cct' || cctLight) && (
                            <Box>
                                <LightPicker
                                    cctBri={true}
                                    ref={iroCctBriRef}
                                    cctLight={cctLight}
                                    widget={widget}
                                    onChange={changeHandler}
                                    onMount={mountHandler}
                                    wheelSize={wheelSize}
                                />
                            </Box>
                        )}
                    </Stack>
                </Box>
            </Box>
        </CollectionBase>
    );
}

export default LightPickerCollectionBase;
