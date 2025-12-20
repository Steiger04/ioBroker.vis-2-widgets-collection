/**
 * vis-2 widget editor field generator for slider-specific options.
 *
 * @module lib/sliderFields
 * @remarks
 * Includes configuration for orientation, value label display, min/max/step, optional marks, and min/max icons.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/slider-fields`.
 */
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';

const sliderFields = (): RxWidgetInfoAttributesField[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    } as const,
    {
        name: 'sliderSize',
        label: 'slider_size',
        type: 'select',
        options: [
            { value: 'small', label: 'slider_small' },
            { value: 'medium', label: 'slider_medium' },
        ],
        default: 'medium',
    } as const,
    {
        name: 'sliderOrientation',
        label: 'slider_orientation',
        type: 'select',
        options: [
            { value: 'horizontal', label: 'horizontal' },
            { value: 'vertical', label: 'vertical' },
        ],
        default: 'horizontal',
    } as const,
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
    } as const,
    {
        name: 'labelPosition',
        label: 'label_position',
        type: 'text',
        default: '-5px',
        hidden: "data.valueLabelDisplay === 'off'",
    } as const,
    {
        name: 'sliderColor',
        label: 'slider_color',
        type: 'color',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="values" />,
    } as const,
    {
        name: 'minValue',
        type: 'number',
        label: 'min_value',
        default: 0,
    } as const,
    {
        name: 'maxValue',
        type: 'number',
        label: 'max_value',
        default: 100,
    } as const,
    {
        name: 'step',
        type: 'number',
        label: 'step',
        default: 10,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.values_count',
    } as const,
    {
        name: 'onlyStates',
        type: 'checkbox',
        label: 'only_states',
        default: false,
        hidden: '!data.values_count',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="marks" />,
    } as const,
    {
        name: 'marks',
        type: 'checkbox',
        label: 'marks',
        default: false,
        // hidden: "data.onlyStates",
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    {
        name: 'markPosition',
        label: 'mark_position',
        type: 'text',
        default: '30px',
        hidden: '!data.marks',
    } as const,
    {
        name: 'markStep',
        type: 'number',
        label: 'mark_step',
        default: 10,
        hidden: '!data.marks',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    {
        name: 'markerTextColor',
        label: 'text_color',
        type: 'color',
        hidden: '!data.marks',
    } as const,
    {
        name: 'markerTextSize',
        label: 'marker_text_size',
        type: 'slider',
        min: 0,
        max: 500,
        // default: 80,
        step: 1,
        hidden: '!data.marks',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    } as const,
    {
        name: 'iconSmallMin',
        label: 'icon_small_min',
        type: 'icon64',
        hidden: 'data.iconMin',
    } as const,
    {
        name: 'iconMin',
        label: 'icon_min',
        type: 'image',
        hidden: 'data.iconSmallMin',
    } as const,
    {
        name: 'iconSizeStart',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMin && !data.iconSmallMin',
    } as const,
    {
        name: 'startIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMin && !data.iconSmallMin',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="icon" />,
    } as const,
    {
        name: 'iconSmallMax',
        label: 'icon_small_max',
        type: 'icon64',
        hidden: 'data.iconMax',
    } as const,
    {
        name: 'iconMax',
        label: 'icon_max',
        type: 'image',
        hidden: 'data.iconSmallMax',
    } as const,
    {
        name: 'iconSizeEnd',
        label: 'icon_size',
        type: 'text',
        default: '24px',
        hidden: '!data.iconMax && !data.iconSmallMax',
    } as const,
    {
        name: 'endIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMax && !data.iconSmallMax',
    } as const,
];

export default sliderFields;
