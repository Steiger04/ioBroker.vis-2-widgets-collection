/**
 * vis-2 widget editor field generator for radio-group-specific options.
 *
 * @module lib/radioGroupFields
 * @remarks
 * The vis-2 property editor consumes arrays of `RxWidgetInfoAttributesField`. This helper returns the additional
 * fields required by the RadioGroup collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/radio-group-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createColorField, createOnlyDisplayField } from './fieldFactories';
import { radioUncheckedIconColorContract } from './radioColorContract';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

const radioGroupFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'radioOrientation',
        label: 'radio_orientation',
        type: 'select',
        options: [
            { value: 'horizontal', label: 'horizontal' },
            { value: 'vertical', label: 'vertical' },
        ],
        default: 'horizontal',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'hideLabels',
        label: 'hide_labels',
        type: 'checkbox',
        default: false,
    },
    {
        name: 'labelPlacement',
        label: 'label_placement',
        type: 'select',
        options: [
            { value: 'start', label: 'Start' },
            { value: 'end', label: 'End' },
        ],
        default: 'end',
        noTranslation: true,
        hidden: (data: WidgetData) => !!data.hideLabels,
        keepUnset:
            'added in v2.1.0: radio groups stored before carry no key and keep the label without the gap the default end adds',
        // '' (raw data, a binding) and null read like the missing key: MUI's end without the gap.
        emptiedReadsUnset: true,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    // Radio group unchecked icon color: the contract the renderer resolves (ADR-0004),
    // noGradient for icons
    createColorField({
        ...radioUncheckedIconColorContract,
        label: 'radio_group_unchecked_icon_color',
        noGradient: true,
    }),
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    createOnlyDisplayField(),
];

export default radioGroupFields;
