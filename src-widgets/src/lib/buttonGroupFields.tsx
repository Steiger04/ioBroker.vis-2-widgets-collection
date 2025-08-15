import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

export interface ButtonGroupFieldsRxData {
    onlyIcon: boolean;
    onlyText: boolean;
    buttonGroupVariant: 'text' | 'outlined';
    buttonGroupOrientation: 'horizontal' | 'vertical';
    buttonGroupColor: string;
}

const buttonGroupFields = (): RxWidgetInfoAttributesField[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
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
    {
        name: 'buttonGroupColor',
        label: 'button_group_color',
        type: 'color',
    },
];

export default buttonGroupFields;
