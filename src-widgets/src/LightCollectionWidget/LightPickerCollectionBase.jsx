import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Divider, IconButton, Stack, SvgIcon } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useRefDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
// import { ReactComponent as ColorWheelSvg } from '../img/colorWheel.svg';
import ColorWheelSvg from '../img/colorWheel.svg';
import LightPicker from './LightPicker';

const ColorWheelIcon = props => (
    <SvgIcon
        component={ColorWheelSvg}
        viewBox="0 0 128 128"
        {...props}
    />
);

const CctWhiteIcon = props => (
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

function LightPickerCollectionBase() {
    const [initColor, setInitColor] = useState(null);

    const {
        values,
        getPropertyValue,
        widget,
        colorLightTemperatureOidObject,
        colorLightRgbHexOidObject,
        colorLightRedOidObject,
        colorLightGreenOidObject,
        colorLightBlueOidObject,
        colorLightHueOidObject,
        colorLightSaturationOidObject,
        colorLightBrightnessOidObject,
    } = useContext(CollectionContext);

    const { data } = useData('');

    // ON/OFF
    const { value: onOffValue, setValueState: setOnOffValueState } = useValueState('colorLightSwitchOid');

    // Temperature
    const {
        value: temperatureValue,
        hasValueChanged: temperatureChanged,
        setValueState: setTemperatureValueState,
    } = useValueState('colorLightTemperatureOid');

    // RGB
    const {
        value: rgbHexValue,
        hasValueChanged: rgbHexChanged,
        setValueState: setRgbHexValueState,
    } = useValueState('colorLightRgbHexOid');

    // R/G/B
    const {
        value: redValue,
        hasValueChanged: redChanged,
        setValueState: setRedValueState,
    } = useValueState('colorLightRedOid');
    const {
        value: greenValue,
        hasValueChanged: greenChanged,
        setValueState: setGreenValueState,
    } = useValueState('colorLightGreenOid');
    const {
        value: blueValue,
        hasValueChanged: blueChanged,
        setValueState: setBlueValueState,
    } = useValueState('colorLightBlueOid');

    // H/S/V
    const {
        value: hueValue,
        hasValueChanged: hueChanged,
        setValueState: setHueValueState,
    } = useValueState('colorLightHueOid');
    const {
        value: saturationValue,
        hasValueChanged: saturationChanged,
        setValueState: setSaturationValueState,
    } = useValueState('colorLightSaturationOid');
    const {
        value: brightnessValue,
        hasValueChanged: brightnessChanged,
        setValueState: setBrightnessValueState,
    } = useValueState('colorLightBrightnessOid');

    const isValues = Object.values(values).length > 0;

    const isCctLight =
        widget.data.colorLightType === 'rgbcct' ||
        widget.data.colorLightType === 'r/g/b/cct' ||
        widget.data.colorLightType === 'h/s/v/cct';

    const [cctLight, setCctLight] = useState(false);

    const iroRef = useRef(null);
    const iroCctBriRef = useRef(null);
    const wheelRef = useRef(null);
    const { width: wheelWidth, height: wheelHeight } = useRefDimensions(wheelRef?.current);

    const wheelSize = wheelWidth <= wheelHeight ? Math.max(wheelWidth, wheelHeight) : Math.min(wheelWidth, wheelHeight);

    const mountHandler = picker => {
        // console.log("LightPicker mounted", picker);

        const color = {};

        color.kelvin = getPropertyValue('colorLightTemperatureOid') ?? 2000;
        color.hexString = getPropertyValue('colorLightRgbHexOid') ?? '#000000';
        color.red = getPropertyValue('colorLightRedOid') ?? 0;
        color.green = getPropertyValue('colorLightGreenOid') ?? 0;
        color.blue = getPropertyValue('colorLightBlueOid') ?? 0;
        color.hue = getPropertyValue('colorLightHueOid') ?? 0;

        const isHueSat = colorLightSaturationOidObject.common?.max === 254;
        let sat = getPropertyValue('colorLightSaturationOid') ?? 0;
        if (isHueSat) sat = Math.round((sat / 254) * 100);
        else sat = Math.round(sat);
        color.saturation = sat;

        const isHueVal = colorLightBrightnessOidObject.common?.max === 254;
        let val = getPropertyValue('colorLightBrightnessOid') ?? 0;
        if (isHueVal) val = Math.round((val / 254) * 100);
        else val = Math.round(val);
        color.value = val;

        setInitColor(color);
    };

    const changeHandler = (color, change) => {
        if (!change || !color) return;

        let type;
        if (cctLight) {
            type = 'cct';
        } else {
            type = widget.data.colorLightType;
        }

        const isHueVal = colorLightBrightnessOidObject.common?.max === 254;
        let val = Math.round(color.value);
        if (isHueVal) val = Math.round((color.value / 100) * 254);

        switch (type) {
            case 'cct':
                if (
                    change.v &&
                    !change.h &&
                    !change.s &&
                    colorLightBrightnessOidObject &&
                    !colorLightBrightnessOidObject.noObject
                )
                    setBrightnessValueState(val || 0);
                else if (colorLightTemperatureOidObject && !colorLightTemperatureOidObject.noObject)
                    setTemperatureValueState(Math.round(color.kelvin) || 2000);
                break;

            case 'rgb':
            case 'rgbcct':
                if (colorLightRgbHexOidObject && !colorLightRgbHexOidObject.noObject)
                    setRgbHexValueState(color.hexString || '#000000');

                break;

            case 'r/g/b':
            case 'r/g/b/cct':
                if (colorLightRedOidObject && !colorLightRedOidObject.noObject) setRedValueState(color.red || 0);

                if (colorLightGreenOidObject && !colorLightGreenOidObject.noObject)
                    setGreenValueState(color.green || 0);

                if (colorLightBlueOidObject && !colorLightBlueOidObject.noObject) setBlueValueState(color.blue || 0);
                break;

            case 'h/s/v':
            case 'h/s/v/cct':
                if (change.h && colorLightHueOidObject && !colorLightHueOidObject.noObject) {
                    setHueValueState(Math.round(color.hue) || 0);
                }

                if (change.s && colorLightSaturationOidObject && !colorLightSaturationOidObject.noObject) {
                    const isHueSat = colorLightSaturationOidObject.common?.max === 254;
                    // console.log("isHueSat: ", isHueSat);

                    let sat = Math.round(color.saturation);

                    if (isHueSat) sat = Math.round((color.saturation / 100) * 254);

                    // console.log("color.saturation: ", sat);
                    setSaturationValueState(sat || 0);
                }

                if (change.v && colorLightBrightnessOidObject && !colorLightBrightnessOidObject.noObject) {
                    const isHueVal = colorLightBrightnessOidObject.common?.max === 254;
                    // console.log("isHueVal: ", isHueVal);

                    let val = Math.round(color.value);

                    if (isHueVal) val = Math.round((color.value / 100) * 254);
                    // console.log("color.value: ", Math.round(color.value));
                    setBrightnessValueState(val || 0);
                }

                break;

            default:
                break;
        }
    };

    // temperature changes
    useEffect(() => {
        if (!iroRef.current || !iroCctBriRef.current) return;

        const color = iroRef.current.color;
        const cctBriColor = iroCctBriRef.current.color;

        // console.log("temperatureValue: ", temperatureValue);
        // console.log("temperatureChanged: ", temperatureChanged);

        if (temperatureChanged) {
            color.kelvin = temperatureValue;

            const tmpValue = cctBriColor.value;
            cctBriColor.hexString = color.hexString;
            cctBriColor.value = tmpValue;
        }
    }, [temperatureChanged, temperatureValue]);

    // RGB Hex changes, R/G/B changes
    useEffect(() => {
        if (!iroRef.current) return;

        const color = iroRef.current.color;

        // console.log("redChanged: ", redChanged);
        // console.log("greenChanged: ", greenChanged);
        // console.log("blueChanged: ", blueChanged);
        // console.log("rgbHexChanged: ", rgbHexChanged);

        if (redChanged) color.red = redValue;

        if (greenChanged) color.green = greenValue;

        if (blueChanged) color.blue = blueValue;

        if (rgbHexChanged) color.hexString = rgbHexValue;
    }, [redChanged, greenChanged, blueChanged, redValue, greenValue, blueValue, rgbHexValue, rgbHexChanged]);

    // H/S/V changes
    useEffect(() => {
        if (!iroRef.current) return;

        const color = iroRef.current.color;
        const uiComponent = widget.data.colorLightUIComponent;

        const roundedHue = Math.round(hueValue);

        const roundedSaturation =
            colorLightSaturationOidObject.common?.max === 254
                ? Math.round((saturationValue / 254) * 100)
                : Math.round(saturationValue);

        const roundedBrightness =
            colorLightBrightnessOidObject.common?.max === 254
                ? Math.round((brightnessValue / 254) * 100)
                : Math.round(brightnessValue);

        // const roundedBrightness = Math.round(brightnessValue);

        const setHue = () => hueChanged && (color.hue = roundedHue);

        const setSaturation = () => saturationChanged && (color.saturation = roundedSaturation);

        const setBrightness = () => brightnessChanged && (color.value = roundedBrightness);

        /* console.log("hueChanged: ", hueChanged);
		console.log("saturationChanged: ", saturationChanged);
		console.log("brightnessChanged: ", brightnessChanged); */

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
        widget.data.colorLightUIComponent,
        colorLightSaturationOidObject,
        colorLightBrightnessOidObject,
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
                {/* <Divider flexItem variant="middle" /> */}
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

                    p: Number(widget.data.colorLightPadding),
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
                                initColor={initColor}
                                cctLight={cctLight}
                                widget={widget}
                                onChange={changeHandler}
                                onMount={mountHandler}
                                wheelSize={wheelSize}
                            />
                        )}
                        {isValues && (widget.data.colorLightType === 'cct' || cctLight) && (
                            <Box>
                                <LightPicker
                                    cctBri={true}
                                    ref={iroCctBriRef}
                                    initColor={initColor}
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
