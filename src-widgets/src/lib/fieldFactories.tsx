/**
 * Factory functions and shared constants for building vis-2 field definitions.
 *
 * @module lib/fieldFactories
 * @remarks
 * Provides the deep building blocks used across every `*Fields.tsx` file:
 * - color field factories (`createColorField`, `createColorFields`, `createSliderColorField`)
 * - the hidden-predicate family (`hiddenUnless`, `hiddenIf`, `hiddenWhenFalsy`)
 * - shared option constants (`fontWeightOptions`, `fontStyleOptions`, `sideOptions`)
 * - `createDivider` for section dividers
 *
 * Per-type factories for number/select/checkbox fields are intentionally NOT
 * provided: a factory that only injects the vis-2 field `type` and passes the
 * keys through is a shallow rename (deleting it just moves the keys inline —
 * complexity does not concentrate). Those fields stay as raw object literals
 * with a `hidden` clause; the depth lives here, in the predicates, option
 * constants, and dividers.
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
import CollectionDivider from '../components/CollectionDivider';
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

// ─────────────────────────────────────────────────────────────────────────────
// Hidden-predicate family
//
// Deep module: the same predicate bodies (e.g. `data.gaugeType !== 'linear'`)
// were inlined 30+ times in gaugeFields alone, and recur across every field
// file. One named predicate per recurring shape replaces them all. Rare
// compound conditions stay inline.
// ─────────────────────────────────────────────────────────────────────────────

/** A vis-2 field `hidden` predicate over widget data. */
export type HiddenPredicate = (data: Record<string, unknown>, index?: number) => boolean;

/**
 * Hides a field unless `data[field] === value` — i.e. the field is visible
 * only when `field` holds `value`. Covers the dominant `data.x !== 'y'` pattern.
 *
 * @example hiddenUnless('gaugeType', 'linear')
 */
export const hiddenUnless =
    (field: string, value: unknown): HiddenPredicate =>
    data =>
        data[field] !== value;

/**
 * Hides a field when `data[field] === value`.
 *
 * @example hiddenIf('oidObject', undefined)
 */
export const hiddenIf =
    (field: string, value: unknown): HiddenPredicate =>
    data =>
        data[field] === value;

/**
 * Hides a field when `data[field]` is falsy (0, '', false, null, undefined).
 *
 * @example hiddenWhenFalsy('write')
 */
export const hiddenWhenFalsy =
    (field: string): HiddenPredicate =>
    data =>
        !data[field];

// ─────────────────────────────────────────────────────────────────────────────
// Shared option constants
//
// Previously copy-pasted verbatim (font-weight ×4, font-style ×4, side ×3).
// One definition each; select fields reference the constant.
// ─────────────────────────────────────────────────────────────────────────────

export const fontStyleOptions = [
    { value: 'normal', label: 'normal' },
    { value: 'italic', label: 'italic' },
    { value: 'oblique', label: 'oblique' },
];

export const fontWeightOptions = [
    { value: 'normal', label: 'normal' },
    { value: 'bold', label: 'bold' },
    { value: 'bolder', label: 'bolder' },
    { value: 'lighter', label: 'lighter' },
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
    { value: '400', label: '400' },
    { value: '500', label: '500' },
    { value: '600', label: '600' },
    { value: '700', label: '700' },
    { value: '800', label: '800' },
    { value: '900', label: '900' },
];

export const sideOptions = [
    { value: 'both', label: 'both' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Divider builder
//
// The 5-line `{ label:'', type:'custom', component: () => <CollectionDivider dividerText=…/> }`
// block recurred 20+ times in gaugeFields and across all 14 field files.
// `createDivider` hides that tedium behind one call.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Options for {@link createDivider}.
 */
export interface DividerOptions {
    /** Predicate that hides the divider (e.g. `hiddenUnless('gaugeType', 'linear')`). */
    hidden?: HiddenPredicate;
}

/**
 * Builds a `CollectionDivider` section-divider field.
 *
 * @param dividerText - Translation key rendered as the divider label.
 * @param options - Optional {@link DividerOptions}.
 * @example createDivider('gauge_basic_options')
 * @example createDivider('gauge_linear_borders_options', { hidden: hiddenUnless('gaugeType', 'linear') })
 */
export function createDivider(dividerText: string, options?: DividerOptions): ExtendedField {
    const field: ExtendedField = {
        label: '',
        type: 'custom',
        component: (): React.JSX.Element => <CollectionDivider dividerText={dividerText} />,
    };

    if (options?.hidden !== undefined) {
        // Cast to bypass the readonly restriction, matching createColorField.
        (field as Record<string, unknown>).hidden = options.hidden;
    }

    return field;
}
