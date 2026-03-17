/**
 * vis-2 widget editor field generator for slider-specific options.
 *
 * @module lib/sliderFields
 * @remarks
 * Includes configuration for orientation, value label display, min/max/step, optional marks, and min/max icons.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/slider-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createColorField, createSliderColorField } from './fieldFactories';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const sliderFields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
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
        name: 'sliderGap',
        label: 'slider_gap',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
        step: 0.1,
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
    // Color fields using factory function
    createColorField({ name: 'sliderColor', label: 'slider_color' }),
    {
        name: 'sliderPadding',
        label: 'slider_padding',
        type: 'number',
        default: 1,
        min: 0,
        step: 0.5,
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="thumb" />,
    } as const,
    {
        name: 'thumbWidth',
        label: 'thumb_width',
        type: 'number',
        default: 20,
        min: 0,
    } as const,
    {
        name: 'thumbHeight',
        label: 'thumb_height',
        type: 'number',
        default: 20,
        min: 0,
    } as const,
    // Color fields with sliderColor fallback using convenience function
    createSliderColorField('thumbColor', 'thumb_color'),
    {
        name: 'thumbBorderWidth',
        label: 'thumb_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    createSliderColorField('thumbBorderColor', 'thumb_border_color'),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="track" />,
    } as const,
    {
        name: 'trackLength',
        label: 'track_length',
        type: 'number',
        default: 4,
        min: 0,
    } as const,
    createSliderColorField('trackBackgroundColor', 'track_background_color'),
    {
        name: 'trackBorderWidth',
        label: 'track_border_width',
        type: 'number',
        default: 1,
        min: 0,
        max: 100,
    } as const,
    createSliderColorField('trackBorderColor', 'track_border_color'),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="rail" />,
    } as const,
    {
        name: 'railLength',
        label: 'rail_length',
        type: 'number',
        default: 4,
        min: 0,
    } as const,
    createSliderColorField('railBackgroundColor', 'rail_background_color'),
    {
        name: 'railBorderWidth',
        label: 'rail_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    createSliderColorField('railBorderColor', 'rail_border_color'),
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="mark" />,
    } as const,
    {
        name: 'markWidth',
        label: 'mark_width',
        type: 'number',
        default: 2,
        min: 0,
    } as const,
    {
        name: 'markHeight',
        label: 'mark_height',
        type: 'number',
        default: 2,
        min: 0,
    } as const,
    createSliderColorField('markBackgroundColor', 'mark_background_color'),
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
        hidden: (data: Record<string, unknown>) =>
            !data.values_count && !Object.keys((data.oidObject as Record<string, unknown>)?.commonStates || {}).length,
    } as const,
    {
        name: 'onlyStates',
        type: 'checkbox',
        label: 'only_states',
        default: false,
        hidden: (data: Record<string, unknown>) =>
            !data.values_count && !Object.keys((data.oidObject as Record<string, unknown>)?.commonStates || {}).length,
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
    createSliderColorField('markerTextColor', 'marker_text_color'),
    {
        name: 'markerTextSize',
        label: 'marker_text_size',
        type: 'slider',
        min: 0,
        max: 500,
        step: 1,
        hidden: '!data.marks',
    } as const,
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.marks',
    } as const,
    {
        name: 'markerIconColor',
        label: 'marker_icon_color',
        type: 'color',
        hidden: '!data.marks',
    } as const,
    {
        name: 'markerIconSize',
        label: 'marker_icon_size',
        type: 'slider',
        min: 1,
        max: 500,
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
    // Icon color with noGradient flag (only solid colors allowed)
    createSliderColorField('startIconColor', 'icon_color', {
        noGradient: true,
        hidden: '!data.iconMin && !data.iconSmallMin',
    }),
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
    // Icon color with noGradient flag (only solid colors allowed)
    createSliderColorField('endIconColor', 'icon_color', {
        noGradient: true,
        hidden: '!data.iconMax && !data.iconSmallMax',
    }),
];

export default sliderFields;
