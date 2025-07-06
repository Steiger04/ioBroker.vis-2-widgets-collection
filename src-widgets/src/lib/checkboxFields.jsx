import CollectionDivider from '../components/CollectionDivider';

const checkboxFields = () => [
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
        disabled: '!data.write',
        default: '!data.write',
        hidden: '!data.write',
    },
];

export default checkboxFields;
