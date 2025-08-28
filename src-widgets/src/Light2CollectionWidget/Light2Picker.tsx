import React, { useContext, useEffect, useMemo, useRef } from 'react';
import iro from '@jaames/iro';
import { Box } from '@mui/material';
import { type ElementDimensions } from '../hooks/useElementDimensions';
import { type Light2FieldsRxData } from '../lib/light2Fields';
import { getColorLightLayout, getColorLightWidth, getMarginBetweenPickers } from './colorPickerUtils/colorPickerUtils';
import { CollectionContext } from '../components/CollectionProvider';

interface LightPickerProps {
    dimensions: ElementDimensions;
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'];
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'];
    colorLightBorderWidth: Light2FieldsRxData['colorLightBorderWidth'];
    colorLightBorderColor: Light2FieldsRxData['colorLightBorderColor'];
}

const Light2Picker: React.FC<LightPickerProps> = ({
    dimensions,
    colorLightUIComponent,
    colorLightSliderWidth,
    colorLightBorderWidth,
    colorLightBorderColor,
}) => {
    const { theme } = useContext(CollectionContext);
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const iroPickerRef = useRef<iro.ColorPicker | null>(null);

    const colorLightLayout = useMemo(() => getColorLightLayout(colorLightUIComponent), [colorLightUIComponent]);

    const colorLightWidth = useMemo(
        () => getColorLightWidth(dimensions, colorLightUIComponent),
        [dimensions, colorLightUIComponent],
    );

    const marginBetweenPickers = useMemo(
        () => getMarginBetweenPickers(dimensions, colorLightUIComponent, colorLightSliderWidth),
        [dimensions, colorLightUIComponent, colorLightSliderWidth],
    );

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

        console.log('iroPickerRef.current', iroPickerRef.current);

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
            sliderSize: (colorLightSliderWidth || 1) * 28,
            borderWidth: colorLightBorderWidth || 0,
            borderColor:
                !colorLightBorderColor ||
                (typeof colorLightBorderColor === 'string' && colorLightBorderColor.trim() === '')
                    ? theme.palette.primary.main
                    : colorLightBorderColor,
        });
    }, [
        theme.palette.primary.main,
        colorLightLayout,
        marginBetweenPickers,
        colorLightSliderWidth,
        colorLightBorderWidth,
        colorLightBorderColor,
    ]);

    return <Box ref={colorPickerRef} />;
};

export default Light2Picker;
