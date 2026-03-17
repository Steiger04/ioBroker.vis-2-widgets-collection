/**
 * Factory functions for creating color field definitions.
 *
 * @module lib/fieldFactories
 * @remarks
 * Provides factory functions to create consistent color field definitions
 * for use with CollectionGradientColorPicker. Reduces boilerplate and
 * ensures type safety across all field definition files.
 * @example
 * // Single color field
 * const sliderColorField = createColorField({
 *     name: 'sliderColor',
 *     label: 'slider_color',
 * });
 * @example
 * // Color field with fallback
 * const thumbColorField = createColorField({
 *     name: 'thumbColor',
 *     label: 'thumb_color',
 *     fallbackFields: ['sliderColor'],
 * });
 * @example
 * // Multiple color fields at once
 * const colorFields = createColorFields([
 *     { name: 'sliderColor', label: 'slider_color' },
 *     { name: 'thumbColor', label: 'thumb_color', fallbackFields: ['sliderColor'] },
 * ]);
 */

import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import type React from 'react';

/**
 * Options for creating a color field definition.
 */
export interface ColorFieldOptions {
    /** Field name (e.g., 'sliderColor', 'thumbColor') */
    name: string;
    /** Label translation key (e.g., 'slider_color', 'thumb_color') */
    label: string;
    /** Default value (empty string by default) */
    default?: string;
    /** Array of field names to use as fallback values during initialization */
    fallbackFields?: string[];
    /** When true, extracts solid color from gradients before saving */
    noGradient?: boolean;
    /** Hidden condition (string expression or function) */
    hidden?: string | ((data: Record<string, unknown>, index?: number) => boolean);
}

/**
 * Creates a color field definition for use with CollectionGradientColorPicker.
 *
 * @param options - Field configuration options
 * @returns ExtendedField definition ready for use in field arrays
 * @example
 * // Basic color field
 * createColorField({ name: 'sliderColor', label: 'slider_color' })
 * @example
 * // Color field with fallback and noGradient
 * createColorField({
 *     name: 'iconColor',
 *     label: 'icon_color',
 *     fallbackFields: ['textColor'],
 *     noGradient: true,
 * })
 */
export function createColorField(options: ColorFieldOptions): ExtendedField {
    const { name, label, default: defaultValue = '', fallbackFields, noGradient, hidden } = options;

    // Build the base field object with all properties
    const field: ExtendedField = {
        name,
        label,
        default: defaultValue,
        type: 'custom',
        component: (
            field: ExtendedField,
            data: WidgetData,
            onDataChange: (patch: WidgetData) => void,
            props: RxWidgetInfoCustomComponentProperties,
        ): React.JSX.Element => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    };

    // Only add optional properties if they have values
    if (fallbackFields !== undefined) {
        field.fallbackFields = fallbackFields;
    }

    if (noGradient !== undefined) {
        field.noGradient = noGradient;
    }

    if (hidden !== undefined) {
        // Cast to any to bypass readonly restriction
        (field as Record<string, unknown>).hidden = hidden;
    }

    return field;
}

/**
 * Creates multiple color field definitions at once.
 *
 * @param fields - Array of field configuration options
 * @returns Array of ExtendedField definitions
 * @example
 * const colorFields = createColorFields([
 *     { name: 'sliderColor', label: 'slider_color' },
 *     { name: 'thumbColor', label: 'thumb_color', fallbackFields: ['sliderColor'] },
 *     { name: 'thumbBorderColor', label: 'thumb_border_color', fallbackFields: ['sliderColor'] },
 * ]);
 */
export function createColorFields(fields: ColorFieldOptions[]): ExtendedField[] {
    return fields.map(createColorField);
}

/**
 * Creates a color field with common slider fallback pattern.
 *
 * Convenience function for slider-related color fields that fallback to 'sliderColor'.
 *
 * @param name - Field name
 * @param label - Label translation key
 * @param options - Additional options (noGradient, hidden)
 * @returns ExtendedField definition
 * @example
 * // Creates field with fallbackFields: ['sliderColor']
 * createSliderColorField('thumbColor', 'thumb_color')
 */
export function createSliderColorField(
    name: string,
    label: string,
    options?: Pick<ColorFieldOptions, 'noGradient' | 'hidden'>,
): ExtendedField {
    return createColorField({
        name,
        label,
        fallbackFields: ['sliderColor'],
        ...options,
    });
}
