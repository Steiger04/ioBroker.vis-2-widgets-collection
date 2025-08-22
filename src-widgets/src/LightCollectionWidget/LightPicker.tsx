import { type IroColor } from '@irojs/iro-core/dist/color';
import iro from '@jaames/iro';
import { type IroColorPicker } from '@jaames/iro/dist/ColorPicker';
import { Box } from '@mui/material';
import React, { useRef, useEffect, useMemo, forwardRef } from 'react';

interface Changes {
    [key: string]: boolean;
}

interface LightPickerProps {
    widget: {
        data: any;
        style: React.CSSProperties;
    };
    initColor?: IroColor | null;
    cctLight?: boolean;
    onMount?: (picker: any) => void;
    onChange?: (color: any, change: any) => void;
    wheelSize?: number;
    cctBri?: boolean;
}

const LightPicker = forwardRef<IroColorPicker, LightPickerProps>(
    ({ widget, cctLight, onMount, onChange, wheelSize, cctBri = false }, ref) => {
        const elementRef = useRef<HTMLDivElement>(null);
        const lightPicker = useRef<IroColorPicker>(null);

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

        useEffect(() => {
            if (elementRef.current && ref && typeof ref === 'object' && 'current' in ref) {
                ref.current = lightPicker.current = iro.ColorPicker(elementRef.current, {
                    display: 'flex',
                    layoutDirection: 'horizontal',
                    wheelLightness: widget.data.colorWheelLightness,
                    layout,
                });

                if (lightPicker.current) {
                    lightPicker.current.state.sliderSize =
                        (wheelSize || 200) * (widget.data.colorLightSliderWidth || 1);
                    lightPicker.current.resize(wheelSize || 200);
                    lightPicker.current.forceUpdate();

                    if (onMount) {
                        lightPicker.current.on('mount', (_picker: { color: IroColor }) => {
                            console.log('mount', _picker);
                            onMount(_picker);
                        });
                    }
                    if (onChange) {
                        lightPicker.current.on('input:change', (color: IroColor, changes: Changes) => {
                            console.log('input:change', color, changes);
                            onChange(color, changes);
                        });
                    }
                }
            }

            return () => {
                if (lightPicker.current) {
                    if (onMount) {
                        lightPicker.current.off('mount', onMount);
                    }
                    if (onChange) {
                        lightPicker.current.off('input:change', onChange);
                    }
                    lightPicker.current.base!.remove();
                    lightPicker.current = null;
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [layout]);

        // Wheel-Größe und Slider-Breite anpassen
        useEffect(() => {
            setTimeout(() => {
                if (!lightPicker.current) {
                    return;
                }
                lightPicker.current.state.sliderSize = (wheelSize || 200) * (widget.data.colorLightSliderWidth || 1);
                lightPicker.current.resize(wheelSize || 200);
            }, 0);
        }, [wheelSize, widget.data.colorLightSliderWidth]);

        // WheelLightness-Änderung übernehmen
        useEffect(() => {
            if (!lightPicker.current) {
                return;
            }
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
                        width: `${wheelSize || 200}px!important`,
                        height: `${wheelSize || 200}px!important`,
                    },
                    '& .IroWheelBorder': {
                        borderColor: (theme: any) =>
                            (widget.data.colorLightBorderColor && `${widget.data.colorLightBorderColor}!important`) ||
                            `${theme.palette.primary.main}!important`,
                        borderWidth: `${widget.data.colorLightBorderWidth || 2}px!important`,
                    },
                    '& .IroSliderGradient, & .IroBox': {
                        borderWidth: `${widget.data.colorLightBorderWidth || 2}px!important`,
                        borderColor: (theme: any) =>
                            (widget.data.colorLightBorderColor && `${widget.data.colorLightBorderColor}!important`) ||
                            `${theme.palette.primary.main}!important`,
                    },
                }}
            />
        );
    },
);

LightPicker.displayName = 'LightPicker';

export default LightPicker;
