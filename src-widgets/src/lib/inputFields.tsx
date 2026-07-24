/**
 * vis-2 widget editor field generator for input-specific options.
 *
 * @module lib/inputFields
 * @remarks
 * Provides configuration for the Input widget: an OK-button commit mode and the
 * numeric range/step used when the bound OID is a number.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/input-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

// Numeric fields only make sense when the bound OID is a number.
const hiddenUnlessNumber = (data: Record<string, unknown>): boolean =>
    (data.oidObject as { type?: string } | undefined)?.type !== 'number';

const inputFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="input" />,
    } as const,
    {
        name: 'showOkButton',
        type: 'checkbox',
        label: 'show_ok_button',
        default: false,
        tooltip: 'show_ok_button_tooltip',
    } as const,
    {
        name: 'inputVariant',
        type: 'select',
        label: 'input_variant',
        default: 'standard',
        options: [
            { value: 'standard', label: 'variant_standard' },
            { value: 'outlined', label: 'variant_outlined' },
            { value: 'filled', label: 'variant_filled' },
        ],
    } as const,
    {
        name: 'inputPadding',
        type: 'number',
        label: 'input_padding',
        default: 1,
        min: 0,
        step: 0.5,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="number" />,
        hidden: hiddenUnlessNumber,
    } as const,
    {
        name: 'step',
        type: 'number',
        label: 'step',
        default: 1,
        min: 0,
        hidden: hiddenUnlessNumber,
    } as const,
    {
        name: 'minValue',
        type: 'number',
        label: 'min_value',
        hidden: hiddenUnlessNumber,
    } as const,
    {
        name: 'maxValue',
        type: 'number',
        label: 'max_value',
        hidden: hiddenUnlessNumber,
    } as const,
];

export default inputFields;
