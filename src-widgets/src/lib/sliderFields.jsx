import CollectionDivider from '../components/CollectionDivider';

const sliderFields = () => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'sliderSize',
        label: 'slider_size',
        type: 'select',
        options: [
            { value: 'small', label: 'slider_small' },
            { value: 'medium', label: 'slider_medium' },
        ],
        default: 'medium',
    },
    {
        name: 'sliderOrientation',
        label: 'slider_orientation',
        type: 'select',
        options: [
            { value: 'horizontal', label: 'horizontal' },
            { value: 'vertical', label: 'vertical' },
        ],
        default: 'horizontal',
    },
    {
        name: 'valueLabelDisplay',
        label: 'value_label_display',
        type: 'select',
        options: [
            { value: 'on', label: 'label_on' },
            { value: 'off', label: 'label_off' },
            { value: 'auto', label: 'label_auto' },
        ],
        default: 'off',
    },
    {
        name: 'labelPosition',
        label: 'label_position',
        type: 'text',
        default: '-5px',
        hidden: "data.valueLabelDisplay === 'off'",
    },
    {
        name: 'sliderColor',
        label: 'slider_color',
        type: 'color',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="values" />,
    },
    {
        name: 'minValue',
        type: 'number',
        label: 'min_value',
        default: 0,
    },
    {
        name: 'maxValue',
        type: 'number',
        label: 'max_value',
        default: 100,
    },
    {
        name: 'step',
        type: 'number',
        label: 'step',
        default: 10,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.values_count',
    },
    {
        name: 'onlyStates',
        type: 'checkbox',
        label: 'only_states',
        default: false,
        hidden: '!data.values_count',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="marks" />,
    },
    {
        name: 'marks',
        type: 'checkbox',
        label: 'marks',
        default: false,
        // hidden: "data.onlyStates",
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    },
    {
        name: 'markPosition',
        label: 'mark_position',
        type: 'text',
        default: '30px',
        hidden: '!data.marks',
    },
    {
        name: 'markStep',
        type: 'number',
        label: 'mark_step',
        default: 10,
        hidden: '!data.marks',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    },
    {
        name: 'markerTextColor',
        label: 'text_color',
        type: 'color',
        hidden: '!data.marks',
    },
    {
        name: 'markerTextSize',
        label: 'marker_text_size',
        type: 'slider',
        min: 0,
        max: 500,
        default: 80,
        step: 1,
        hidden: '!data.marks',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    },
    {
        name: 'iconSmallMin',
        label: 'icon_small_min',
        type: 'icon64',
        hidden: 'data.iconMin',
    },
    {
        name: 'iconMin',
        label: 'icon_min',
        type: 'image',
        hidden: 'data.iconSmallMin',
    },
    {
        name: 'iconSizeStart',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMin && !data.iconSmallMin',
    },
    {
        name: 'startIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMin && !data.iconSmallMin',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    },
    {
        name: 'iconSmallMax',
        label: 'icon_small_max',
        type: 'icon64',
        hidden: 'data.iconMax',
    },
    {
        name: 'iconMax',
        label: 'icon_max',
        type: 'image',
        hidden: 'data.iconSmallMax',
    },
    {
        name: 'iconSizeEnd',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMax && !data.iconSmallMax',
    },
    {
        name: 'endIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMax && !data.iconSmallMax',
    },
];

export default sliderFields;
