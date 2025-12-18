/**
 * Light2 color picker wrapper (iro.js).
 *
 * @module widgets/Light2Picker
 */

import { useContext, useEffect, useMemo, useRef, forwardRef } from 'react';
import type { MutableRefObject, Ref } from 'react';
import type iro from '@jaames/iro';
import { Box } from '@mui/material';
import { type ElementDimensions } from '../hooks/useElementDimensions';
import type { Light2FieldsRxData } from '../types';
import { getColorLightLayout, getColorLightWidth, getMarginBetweenPickers } from './colorPickerUtils/colorPickerMemos';
import { CollectionContext } from '../components/CollectionProvider';

import {
    initializeColorPicker,
    cleanupColorPicker,
    resizeColorPicker,
    setColorPickerOptions,
    type ColorChanges,
} from './colorPickerUtils/colorPickerEffects';

/**
 * Assigns a value to a forwarded ref (callback or object ref).
 */
function setRef<T>(ref: Ref<T> | undefined, value: T): void {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref && 'current' in ref) {
        (ref as MutableRefObject<T>).current = value;
    }
}

interface LightPickerProps {
    /** Host element dimensions used to compute picker layout. */
    dimensions: ElementDimensions;
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'];
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'];
    colorLightBorderWidth: Light2FieldsRxData['colorLightBorderWidth'];
    colorLightBorderColor: Light2FieldsRxData['colorLightBorderColor'];
    colorWheelLightness: Light2FieldsRxData['colorWheelLightness'];
    colorLightType: Light2FieldsRxData['colorLightType'];
    colorLightCtMin: Light2FieldsRxData['colorLightCtMin'];
    colorLightCtMax: Light2FieldsRxData['colorLightCtMax'];
    colorLightGamut: Light2FieldsRxData['colorLightGamut'];
    /** 1 = CCT kelvin picker, 2 = CCT brightness picker (only relevant for CCT mode). */
    cctComponentNumber: number;
    /** Called on user interaction (includes granular change info where available). */
    onInputChange?: (color: iro.Color, changes?: ColorChanges) => void;
    /** Called after picker initialization to sync the initial color from backend state. */
    onColorInit?: (color: iro.Color, cctComponentNumber?: number) => void;
}

const Light2Picker = forwardRef<iro.ColorPicker, LightPickerProps>(
    (
        {
            dimensions,
            colorLightUIComponent,
            colorLightSliderWidth,
            colorLightBorderWidth,
            colorLightBorderColor,
            colorWheelLightness,
            colorLightType,
            colorLightCtMin,
            colorLightCtMax,
            colorLightGamut: _colorLightGamut,
            cctComponentNumber,
            onInputChange,
            onColorInit,
        },
        ref,
    ) => {
        const { theme } = useContext(CollectionContext);
        const colorPickerRef = useRef<HTMLDivElement>(null);
        const iroPickerRef = useRef<iro.ColorPicker | null>(null);
        const onColorInitRef = useRef(onColorInit);
        const onInputChangeRef = useRef(onInputChange);
        onColorInitRef.current = onColorInit;
        onInputChangeRef.current = onInputChange;

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
                (color, changes) => onInputChangeRef.current?.(color, changes),
                (color, componentNumber) => onColorInitRef.current?.(color, componentNumber),
                cctComponentNumber,
            );
            setRef(ref, iroPickerRef.current);
            return () => cleanupColorPicker(iroPickerRef);
        }, [ref, cctComponentNumber]);

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
    },
);

Light2Picker.displayName = 'Light2Picker';

export default Light2Picker;
