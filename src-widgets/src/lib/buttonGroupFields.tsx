/**
 * vis-2 widget editor field generator for button-group-specific options.
 *
 * @module lib/buttonGroupFields
 * @remarks
 * The vis-2 property editor consumes arrays of `RxWidgetInfoAttributesField`. This helper returns the additional
 * fields required by the ButtonGroup collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/button-group-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { buttonGroupColorContract } from './buttonGroupColorContract';
import { createColorField, createOnlyDisplayField } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const buttonGroupFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    createOnlyDisplayField(),
    {
        name: 'onlyIcon',
        type: 'checkbox',
        label: 'only_icon',
        hidden: 'data.onlyText',
    },
    {
        name: 'onlyText',
        type: 'checkbox',
        label: 'only_text',
        hidden: 'data.onlyIcon',
    },
    {
        name: 'buttonGroupVariant',
        label: 'button_group_variant',
        type: 'select',
        options: [
            { value: 'text', label: 'button_group_text' },
            { value: 'outlined', label: 'button_group_outlined' },
        ],
        default: 'text',
    },
    {
        name: 'buttonGroupOrientation',
        label: 'button_group_orientation',
        type: 'select',
        options: [
            { value: 'horizontal', label: 'horizontal' },
            { value: 'vertical', label: 'vertical' },
        ],
        default: 'horizontal',
    },
    // Separator/border colour, solid-only. Its cascade is the one contract the
    // Button-Group-Chrome resolves at runtime (ADR-0004): explicit value → theme text.
    createColorField({
        ...buttonGroupColorContract,
        label: 'button_group_color',
        noGradient: true,
    }),
];

export default buttonGroupFields;
