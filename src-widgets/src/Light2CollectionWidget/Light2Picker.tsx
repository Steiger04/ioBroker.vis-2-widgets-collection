import React, { useEffect, useRef } from 'react';
import iro from '@jaames/iro';
import { Box } from '@mui/material';
import { type ElementDimensions } from '../hooks/useElementDimensions';

interface LightPickerProps {
    dimensions: ElementDimensions;
}

const MinimalColorPicker: React.FC<LightPickerProps> = ({ dimensions }) => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const iroPickerRef = useRef<iro.ColorPicker | null>(null);

    useEffect(() => {
        if (!colorPickerRef.current) {
            return;
        }

        iroPickerRef.current = iro.ColorPicker(colorPickerRef.current, {
            width: 0, // Startpunkt, wird mit erstem resize sofort überschrieben
            margin: 32,
            sliderSize: 40,
            display: 'flex',
            padding: 6,
            handleRadius: 8,
            layoutDirection: 'horizontal',
            layout: [
                {
                    component: iro.ui.Wheel,
                    options: {
                        wheelLightness: false, // wir regeln Helligkeit über Slider
                    },
                },
                {
                    component: iro.ui.Slider,
                    options: {
                        sliderType: 'value',
                    },
                },
            ],
        });

        return () => {
            iroPickerRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!dimensions.maxWidth) {
            return;
        }

        iroPickerRef.current?.resize(dimensions.maxWidth); // etwas Padding abziehen
    }, [dimensions]);

    return (
        <Box
            ref={colorPickerRef}

            /* sx={{
                '& .IroColorPicker': {},
                '& .IroWheel': {
                    width: '200px !important',
                    height: '200px !important',
                },
                '& .IroSlider': {
                    width: '200px !important',
                    height: '90px !important',
                    '& .IroHandle': {
                        transform: 'translate(186px, 45px) !important',
                    },
                },
            }} */
        />
    );
};

export default MinimalColorPicker;
