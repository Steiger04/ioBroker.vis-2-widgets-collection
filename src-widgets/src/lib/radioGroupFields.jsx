import CollectionDivider from '../components/CollectionDivider';

const radioGroupFields = () => [
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
        disabled: '!data.write',
        default: '!data.write',
        hidden: '!data.write',
    },
];

export default radioGroupFields;
