import React, { useEffect, useMemo, useRef } from 'react';
import iro from '@jaames/iro';
import { Box } from '@mui/material';
import { type ElementDimensions } from '../hooks/useElementDimensions';
import { type Light2FieldsRxData } from '../lib/light2Fields';

interface LightPickerProps {
    dimensions: ElementDimensions;
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'];
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'];
}

const Light2Picker: React.FC<LightPickerProps> = ({ dimensions, colorLightUIComponent, colorLightSliderWidth }) => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const iroPickerRef = useRef<iro.ColorPicker | null>(null);

    const colorLightLayout = useMemo(() => {
        switch (colorLightUIComponent) {
            case 'wheel':
                return [
                    {
                        component: iro.ui.Wheel,
                        options: {
                            wheelLightness: false,
                        },
                    },
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'value',
                        },
                    },
                ];
            case 'box':
                return [
                    {
                        component: iro.ui.Box,
                        options: {
                            boxLightness: false,
                        },
                    },
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'hue',
                        },
                    },
                ];

            case 'slider':
                return [
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'red',
                        },
                    },
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'green',
                        },
                    },
                    {
                        component: iro.ui.Slider,
                        options: {
                            sliderType: 'blue',
                        },
                    },
                ];
            default:
                return [];
        }
    }, [colorLightUIComponent]);

    const colorLightWidth = useMemo(() => {
        switch (colorLightUIComponent) {
            case 'wheel':
            case 'box':
                return dimensions.maxWidth;

            case 'slider':
                return dimensions.height;
            default:
                return 0;
        }
    }, [dimensions, colorLightUIComponent]);

    const marginBetweenPickers = useMemo(() => {
        if (!dimensions.width || colorLightUIComponent !== 'slider') {
            return 12;
        }

        return (dimensions.width - 3 * Number(colorLightSliderWidth ?? 1) * 28) / 2;
    }, [dimensions, colorLightUIComponent, colorLightSliderWidth]);

    // Initialize color picker
    useEffect(() => {
        if (!colorPickerRef.current) {
            return;
        }

        iroPickerRef.current = iro.ColorPicker(colorPickerRef.current, {
            width: 0, // Startpunkt, wird mit erstem resize sofort überschrieben
            margin: 12,
            sliderSize: 28,
            display: 'flex',
            padding: 6,
            handleRadius: 8,
            layoutDirection: 'horizontal',
        });

        return () => {
            iroPickerRef.current = null;
        };
    }, []);

    // Update color picker dimensions
    useEffect(() => {
        if (!colorLightWidth) {
            return;
        }

        iroPickerRef.current?.resize(colorLightWidth); // etwas Padding abziehen
    }, [colorLightWidth]);

    // Update color picker options
    useEffect(() => {
        if (!iroPickerRef.current) {
            return;
        }

        iroPickerRef.current.setOptions({
            layout: colorLightLayout,
            margin: marginBetweenPickers,
            sliderSize: Number(colorLightSliderWidth ?? 1) * 28,
        });
    }, [colorLightLayout, marginBetweenPickers, colorLightSliderWidth]);

    return <Box ref={colorPickerRef} />;
};

export default Light2Picker;
