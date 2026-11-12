/**
 * vis-2 widget editor field generator for checkbox-specific options.
 *
 * @module lib/checkboxFields
 * @remarks
 * The vis-2 property editor consumes arrays of `RxWidgetInfoAttributesField`. This helper returns the additional
 * fields required by the Checkbox collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/checkbox-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createOnlyDisplayField } from './fieldFactories';

import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const checkboxFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="label" />,
    },
    {
        name: 'withoutLabel',
        label: 'without_label',
        type: 'checkbox',
        default: false,
    },
    {
        name: 'checkboxLabelPlacement',
        label: 'checkbox_label_placement',
        type: 'select',
        options: [
            { value: 'top', label: 'checkbox_top' },
            { value: 'bottom', label: 'checkbox_bottom' },
            { value: 'start', label: 'checkbox_start' },
            { value: 'end', label: 'checkbox_end' },
        ],
        default: 'end',
        // '' (raw data, a binding) places the label at the default end.
        emptiedReadsUnset: true,
        hidden: 'data.withoutLabel',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    createOnlyDisplayField(),
];

export default checkboxFields;
