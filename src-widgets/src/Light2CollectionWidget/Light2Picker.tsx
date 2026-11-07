/**
 * Light2 color picker wrapper (iro.js).
 *
 * @module widgets/Light2Picker
 * @remarks
 * Draws one iro picker of the Lampen-Bedienelement from the picker geometry
 * ({@link module:Light2CollectionWidget/pickerGeometry}): creates the iro instance and wires its
 * events, resizes it and keeps its options in step. Only the border and the wheel lightness come
 * from the widget directly; the border colour resolves through the field contract here, where
 * the theme is (ADR-0078).
 */

import { useContext, useEffect, useRef, forwardRef } from 'react';
import type { MutableRefObject, Ref } from 'react';
import iro from '@jaames/iro';
import { Box } from '@mui/material';
import type { Light2FieldsRxData } from '../types';
import { INITIAL_IRO_GEOMETRY, type PickerGeometry } from './pickerGeometry';
import type { ColorChanges } from './channelMapping';
import { CollectionContext } from '../components/CollectionProvider';
import { resolveLight2BorderColor } from '../lib/light2ColorContract';

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
    /** Sizes and layouts from the picker geometry (the body measures the box). */
    geometry: PickerGeometry;
    colorLightBorderWidth: Light2FieldsRxData['colorLightBorderWidth'];
    colorLightBorderColor: Light2FieldsRxData['colorLightBorderColor'];
    colorWheelLightness: Light2FieldsRxData['colorWheelLightness'];
    /** 1 = CCT kelvin picker, 2 = CCT brightness picker (only relevant for CCT mode). */
    cctComponentNumber: 1 | 2;
    /** Called on user interaction (includes granular change info where available). */
    onInputChange?: (color: iro.Color, changes?: ColorChanges) => void;
    /** Called after picker initialization to sync the initial color from backend state. */
    onColorInit?: (color: iro.Color, cctComponentNumber?: number) => void;
}

const Light2Picker = forwardRef<iro.ColorPicker, LightPickerProps>(
    (
        {
            geometry,
            colorLightBorderWidth,
            colorLightBorderColor,
            colorWheelLightness,
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

        const { resizeWidth, gap, sliderSize } = geometry;
        const layout = geometry.layouts[cctComponentNumber - 1];

        // Create the iro instance and wire its init and input events.
        useEffect(() => {
            if (colorPickerRef.current) {
                const picker = iro.ColorPicker(colorPickerRef.current, {
                    color: '#ffffff',
                    ...INITIAL_IRO_GEOMETRY,
                    display: 'flex',
                    padding: 6,
                    handleRadius: 8,
                    layoutDirection: 'horizontal',
                });
                iroPickerRef.current = picker;

                // Initialize the current color when iro fires its init event.
                picker.on('color:init', (color: iro.Color) => onColorInitRef.current?.(color, cctComponentNumber));
                // Subscribe to interactive changes (optionally with HSV change flags).
                picker.on('input:change', (color: iro.Color, changes: ColorChanges) =>
                    onInputChangeRef.current?.(color, changes),
                );
            }
            setRef(ref, iroPickerRef.current);
            return () => {
                iroPickerRef.current = null;
            };
        }, [ref, cctComponentNumber]);

        useEffect(() => {
            if (iroPickerRef.current && resizeWidth) {
                iroPickerRef.current.resize(resizeWidth);
            }
        }, [resizeWidth]);

        // A string: the options effect runs again only when the drawn colour changes, not on every
        // new theme object.
        const borderColor = resolveLight2BorderColor({ colorLightBorderColor }, theme);

        useEffect(() => {
            iroPickerRef.current?.setOptions({
                layout,
                margin: gap,
                wheelLightness: colorWheelLightness,
                sliderSize,
                borderWidth: colorLightBorderWidth || 0,
                borderColor,
            });
        }, [layout, gap, sliderSize, colorLightBorderWidth, borderColor, colorWheelLightness]);

        return <Box ref={colorPickerRef} />;
    },
);

Light2Picker.displayName = 'Light2Picker';

export default Light2Picker;
