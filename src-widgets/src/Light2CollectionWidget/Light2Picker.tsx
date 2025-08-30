import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import type iro from '@jaames/iro';
import { Box } from '@mui/material';
import { type ElementDimensions } from '../hooks/useElementDimensions';
import { type Light2FieldsRxData } from '../lib/light2Fields';
import { getColorLightLayout, getColorLightWidth, getMarginBetweenPickers } from './colorPickerUtils/colorPickerMemos';
import { CollectionContext } from '../components/CollectionProvider';

import {
    initializeColorPicker,
    cleanupColorPicker,
    resizeColorPicker,
    setColorPickerOptions,
} from './colorPickerUtils/colorPickerEffects';

interface LightPickerProps {
    dimensions: ElementDimensions;
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'];
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'];
    colorLightBorderWidth: Light2FieldsRxData['colorLightBorderWidth'];
    colorLightBorderColor: Light2FieldsRxData['colorLightBorderColor'];
    colorWheelLightness: Light2FieldsRxData['colorWheelLightness'];
    colorLightType: Light2FieldsRxData['colorLightType'];
    colorLightCtMin: Light2FieldsRxData['colorLightCtMin'];
    colorLightCtMax: Light2FieldsRxData['colorLightCtMax'];
    cctComponentNumber: number;
    onInputChange?: (color: iro.Color) => void; // optionaler Handler
    onColorInit?: (color: iro.Color) => void; // optionaler Handler
}

const Light2Picker: React.FC<LightPickerProps> = ({
    dimensions,
    colorLightUIComponent,
    colorLightSliderWidth,
    colorLightBorderWidth,
    colorLightBorderColor,
    colorWheelLightness,
    colorLightType,
    colorLightCtMin,
    colorLightCtMax,
    cctComponentNumber,
    onInputChange,
    onColorInit,
}) => {
    const { theme } = useContext(CollectionContext);
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const iroPickerRef = useRef<iro.ColorPicker | null>(null);

    // 1. useCallback für den Handler (optional, aber empfohlen)
    const handleColorInit = useCallback(
        (color: iro.Color) => {
            if (onColorInit) {
                onColorInit(color);
            }
        },
        [onColorInit],
    );

    // 2. Ref für den Handler, immer aktuell halten
    const onColorInitRef = useRef(handleColorInit);
    onColorInitRef.current = handleColorInit;

    // 1. useCallback für den Handler (optional, aber empfohlen)
    const handleInputChange = useCallback(
        (color: iro.Color) => {
            if (onInputChange) {
                onInputChange(color);
            }
        },
        [onInputChange],
    );

    // 2. Ref für den Handler, immer aktuell halten
    const onInputChangeRef = useRef(handleInputChange);
    onInputChangeRef.current = handleInputChange;

    const colorLightLayout = useMemo(
        () =>
            getColorLightLayout(
                cctComponentNumber,
                colorLightUIComponent,
                colorLightType,
                colorLightCtMin,
                colorLightCtMax,
            ),
        [cctComponentNumber, colorLightUIComponent, colorLightType, colorLightCtMin, colorLightCtMax],
    );

    const colorLightWidth = useMemo(
        () => getColorLightWidth(dimensions, colorLightUIComponent, colorLightType),
        [dimensions, colorLightUIComponent, colorLightType],
    );

    const marginBetweenPickers = useMemo(
        () => getMarginBetweenPickers(dimensions, colorLightUIComponent, colorLightSliderWidth, colorLightType),
        [dimensions, colorLightUIComponent, colorLightSliderWidth, colorLightType],
    );

    useEffect(() => {
        initializeColorPicker(
            colorPickerRef,
            iroPickerRef,
            {
                color: '#ffffff',
                width: 0,
                margin: 12,
                sliderSize: 28,
                display: 'flex',
                padding: 6,
                handleRadius: 8,
                layoutDirection: 'horizontal',
            },
            color => onInputChangeRef.current(color), // Proxy-Handler
            color => onColorInitRef.current(color), // Proxy-Handler
        );
        return () => cleanupColorPicker(iroPickerRef);
    }, []);

    useEffect(() => {
        resizeColorPicker(iroPickerRef.current, colorLightWidth);
    }, [colorLightWidth]);

    useEffect(() => {
        setColorPickerOptions(iroPickerRef.current, {
            layout: colorLightLayout,
            margin: marginBetweenPickers,
            wheelLightness: colorWheelLightness,
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
        colorWheelLightness,
    ]);

    return <Box ref={colorPickerRef} />;
};

export default Light2Picker;
