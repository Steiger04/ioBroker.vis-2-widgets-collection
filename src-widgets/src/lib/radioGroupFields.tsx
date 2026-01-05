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

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

const radioGroupFields = (): RxWidgetInfoAttributesField[] => [
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
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'radioGroupUncheckedIconColor',
        label: 'radio_group_unchecked_icon_color',
        type: 'color',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'onlyDisplay',
        type: 'checkbox',
        label: 'only_display',
        disabled: (data: WidgetData, _i) => !data.write,
        default: false,
        hidden: (data: WidgetData, _i) => !data.write,
    },
];

export default radioGroupFields;
