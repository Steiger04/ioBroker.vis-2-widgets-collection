import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

export interface RadioGroupFieldsRxData {
    radioOrientation?: 'horizontal' | 'vertical';
    radioGroupUncheckedIconColor?: string;
    onlyDisplay?: boolean;
}

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
