import iro from '@jaames/iro';
import { Box } from '@mui/material';
import React, { useRef, useEffect, useMemo, forwardRef } from 'react';

const LightPicker = forwardRef(({ widget, initColor, cctLight, onMount, onChange, wheelSize, cctBri = false }, ref) => {
    const elementRef = useRef(null);
    const lightPicker = useRef(null);

    const layout = useMemo(() => {
        const wheel = { component: iro.ui.Wheel, options: {} };
        const box = { component: iro.ui.Box, options: {} };
        const hueSlider = { component: iro.ui.Slider, options: { sliderType: 'hue' } };
        const saturationSlider = { component: iro.ui.Slider, options: { sliderType: 'saturation' } };
        const valueSlider = { component: iro.ui.Slider, options: { sliderType: 'value' } };
        const redSlider = { component: iro.ui.Slider, options: { sliderType: 'red' } };
        const greenSlider = { component: iro.ui.Slider, options: { sliderType: 'green' } };
        const blueSlider = { component: iro.ui.Slider, options: { sliderType: 'blue' } };
        const kelvinSlider = {
            component: iro.ui.Slider,
            options: {
                sliderType: 'kelvin',
                sliderShape: 'circle',
                minTemperature: widget.data.colorLightCtMin,
                maxTemperature: widget.data.colorLightCtMax,
            },
        };

        const type = cctLight ? 'cct' : widget.data.colorLightType;
        switch (type) {
            case 'rgb':
            case 'rgbcct':
            case 'r/g/b':
            case 'r/g/b/cct':
                switch (widget.data.colorLightUIComponent) {
                    case 'wheel':
                        return [wheel, valueSlider];
                    case 'box':
                        return [box, hueSlider];
                    case 'slider':
                        return [redSlider, greenSlider, blueSlider];
                    default:
                        return [];
                }
            case 'h/s/v':
            case 'h/s/v/cct':
                switch (widget.data.colorLightUIComponent) {
                    case 'wheel':
                        return [wheel, valueSlider];
                    case 'box':
                        return [box, hueSlider];
                    case 'slider':
                        return [hueSlider, saturationSlider, valueSlider];
                    default:
                        return [];
                }
            case 'cct':
                return !cctBri ? [kelvinSlider] : [valueSlider];
            default:
                return [];
        }
    }, [
        widget.data.colorLightType,
        widget.data.colorLightUIComponent,
        widget.data.colorLightCtMin,
        widget.data.colorLightCtMax,
        cctBri,
        cctLight,
    ]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        ref.current = lightPicker.current = new iro.ColorPicker(elementRef.current, {
            display: 'flex',
            layoutDirection: 'horizontal',
            wheelLightness: widget.data.colorWheelLightness,
            layout,
        });

        lightPicker.current.state.sliderSize = wheelSize * widget.data.colorLightSliderWidth;
        lightPicker.current.resize(wheelSize);
        lightPicker.current.forceUpdate();

        lightPicker.current.on('mount', onMount);
        lightPicker.current.on('input:change', onChange);

        return () => {
            lightPicker.current.off('mount', onMount);
            lightPicker.current.off('input:change', onChange);
            lightPicker.current.base.remove();
            lightPicker.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [layout]);

    // onChange-Handler immer aktuell halten
    useEffect(() => {
        if (!lightPicker.current) return;
        lightPicker.current.off('input:change', onChange);
        lightPicker.current.on('input:change', onChange);
    }, [onChange]);

    // initColor bei Änderung setzen
    useEffect(() => {
        if (!initColor || !lightPicker.current) return;

        const type = cctLight ? 'cct' : widget.data.colorLightType;
        switch (type) {
            case 'cct':
                if (cctBri) {
                    lightPicker.current.color.kelvin = initColor.kelvin;
                    lightPicker.current.color.value = initColor.value;
                } else {
                    lightPicker.current.color.kelvin = initColor.kelvin;
                }
                break;
            case 'rgb':
            case 'rgbcct':
                lightPicker.current.color.hexString = initColor.hexString;
                break;
            case 'r/g/b':
            case 'r/g/b/cct':
                lightPicker.current.color.rgb = {
                    r: initColor.red,
                    g: initColor.green,
                    b: initColor.blue,
                };
                break;
            case 'h/s/v':
            case 'h/s/v/cct':
                lightPicker.current.color.hue = initColor.hue;
                lightPicker.current.color.saturation = initColor.saturation;
                lightPicker.current.color.value = initColor.value;
                break;
            default:
                break;
        }
    }, [cctBri, initColor, cctLight, widget.data.colorLightType]);

    // Wheel-Größe und Slider-Breite anpassen
    useEffect(() => {
        setTimeout(() => {
            if (!lightPicker.current) return;
            lightPicker.current.state.sliderSize = wheelSize * widget.data.colorLightSliderWidth;
            lightPicker.current.resize(wheelSize);
        }, 0);
    }, [wheelSize, widget.data.colorLightSliderWidth]);

    // WheelLightness-Änderung übernehmen
    useEffect(() => {
        if (!lightPicker.current) return;
        lightPicker.current.state.wheelLightness = widget.data.colorWheelLightness;
        lightPicker.current.forceUpdate();
    }, [widget.data.colorWheelLightness]);

    return (
        <Box
            id="LIGHT_PICKER"
            ref={elementRef}
            sx={{
                overflow: 'visible',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& .IroColorPicker': {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                '& .IroWheelHue, & .IroWheelSaturation, & .IroWheelLightness, & .IroWheelBorder': {
                    width: `${wheelSize}px!important`,
                    height: `${wheelSize}px!important`,
                },
                '& .IroWheelBorder': {
                    borderColor: theme =>
                        (widget.data.colorLightBorderColor && `${widget.data.colorLightBorderColor}!important`) ||
                        `${theme.palette.primary.main}!important`,
                    borderWidth: `${widget.data.colorLightBorderWidth}px!important`,
                },
                '& .IroSliderGradient, & .IroBox': {
                    borderWidth: `${widget.data.colorLightBorderWidth}px!important`,
                    borderColor: theme =>
                        (widget.data.colorLightBorderColor && `${widget.data.colorLightBorderColor}!important`) ||
                        `${theme.palette.primary.main}!important`,
                },
            }}
        />
    );
});

export default LightPicker;
