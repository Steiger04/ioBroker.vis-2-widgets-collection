import React, { useEffect, useRef } from 'react';
import iro from '@jaames/iro';
import { Box } from '@mui/material';

interface ColorPickerProps {
    color?: string;
    onChange?: (color: string) => void;
    width?: number;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color = '#f00', onChange, width }) => {
    const pickerRef = useRef<HTMLDivElement | null>(null);
    const iroRef = useRef<iro.ColorPicker | null>(null);

    // Initialisierung
    useEffect(() => {
        if (pickerRef.current && !iroRef.current) {
            iroRef.current = iro.ColorPicker(pickerRef.current, {
                width,
                color,
                layout: [
                    {
                        component: iro.ui.Wheel,
                    },
                ],
            });

            iroRef.current.on('color:change', (c: iro.Color) => {
                onChange?.(c.hexString);
            });
        }
    }, [onChange, width, color]);

    // Reagiere auf Änderungen der Props
    useEffect(() => {
        if (iroRef.current) {
            if (color) {
                iroRef.current.color.set(color);
            }
            if (width) {
                console.log('Width changed:', width);
                iroRef.current.resize(width);
            }
        }
    }, [color, width]);

    return (
        <Box
            ref={pickerRef}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 1,
            }}
        />
    );
};

export default ColorPicker;
