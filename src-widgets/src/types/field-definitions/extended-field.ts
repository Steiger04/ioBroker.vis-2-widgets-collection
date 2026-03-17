/**
 * Extended field definition with optional fallbackFields array and noGradient flag.
 *
 * @module types/field-definitions/extended-field
 * @remarks
 * This type extends RxWidgetInfoAttributesField to support custom properties
 * used by CollectionGradientColorPicker and field definitions across the widget collection.
 *
 * [fallbackFields] - Optional array of field names to use as fallbacks during initialization.
 *                                         When the color picker opens with an empty field, it checks these fields
 *                                         for valid color values in order. Use empty array [] to disable all fallbacks.
 * [noGradient] - When true, extracts solid color at 50% position from gradients before saving.
 *                                    User can still input/view gradients in UI, but only solid colors are persisted.
 *
 * @example
 * // Color field with fallback to sliderColor
 * const field: ExtendedField = {
 *     name: 'thumbColor',
 *     label: 'thumb_color',
 *     type: 'custom',
 *     fallbackFields: ['sliderColor'],
 *     component: (field, data, onDataChange, props) => (
 *         <CollectionGradientColorPicker field={field} data={data} onDataChange={onDataChange} props={props} />
 *     ),
 * };
 *
 * @example
 * // Icon color field that only accepts solid colors (no gradients)
 * const iconColorField: ExtendedField = {
 *     name: 'iconColor',
 *     label: 'icon_color',
 *     type: 'custom',
 *     noGradient: true,
 *     component: (field, data, onDataChange, props) => (
 *         <CollectionGradientColorPicker field={field} data={data} onDataChange={onDataChange} props={props} />
 *     ),
 * };
 */

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Extended field definition with optional fallbackFields array and noGradient flag.
 *
 * This type extends RxWidgetInfoAttributesField to allow custom field extensions
 * without violating TypeScript excess property checks.
 *
 * Note: Uses intersection type instead of interface extension because
 * RxWidgetInfoAttributesField is a union type.
 */
export type ExtendedField = RxWidgetInfoAttributesField & {
    /**
     * Optional array of field names to use as fallback values during initialization.
     *
     * When the color picker opens with an empty field, it checks these fields
     * for valid color values in order. The first valid value found is used.
     *
     * Use an empty array `[]` to disable all fallbacks (including theme.palette.primary.main).
     * If undefined, the picker defaults to `theme.palette.primary.main`.
     */
    fallbackFields?: string[];

    /**
     * When true, extracts solid color at 50% position from gradients before saving.
     *
     * User can still input/view gradients in UI, but only solid colors are persisted.
     * This is useful for properties that only support solid colors (e.g., icon colors).
     */
    noGradient?: boolean;
};
