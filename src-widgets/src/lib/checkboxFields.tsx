import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

export interface CheckboxFieldsRxData {
    withoutLabel: boolean;
    checkboxLabelPlacement: 'top' | 'bottom' | 'start' | 'end';
    onlyDisplay: boolean;
}

const checkboxFields = (): RxWidgetInfoAttributesField[] => [
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
        hidden: 'data.withoutLabel',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'onlyDisplay',
        type: 'checkbox',
        label: 'only_display',
        disabled: (data: WidgetData) => !data.write,
        default: false,
        hidden: (data: WidgetData) => !data.write,
    },
];

export default checkboxFields;
