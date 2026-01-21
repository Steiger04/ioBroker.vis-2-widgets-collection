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
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

/**
 * Extended field definition that supports additional custom properties like fallbackFields.
 * This extends the base RxWidgetInfoAttributesField to allow custom field extensions
 * without violating TypeScript excess property checks.
 */
type ExtendedSliderField = RxWidgetInfoAttributesField & {
    fallbackFields?: string[];
    noGradient?: boolean;
};

const sliderFields = (): ExtendedSliderField[] => [
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
    /* {
        name: 'sliderColor',
        label: 'slider_color',
        type: 'color',
    } as const, */
    {
        name: 'sliderColor',
        label: 'slider_color',
        default: '',
        type: 'custom', // important
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
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
    /* {
        name: 'thumbColor',
        label: 'thumb_color',
        type: 'color',
    } as const, */
    {
        name: 'thumbColor',
        label: 'thumb_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
    {
        name: 'thumbBorderWidth',
        label: 'thumb_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    /* {
        name: 'thumbBorderColor',
        label: 'thumb_border_color',
        type: 'color',
    } as const, */
    {
        name: 'thumbBorderColor',
        label: 'thumb_border_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
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
    /* {
        name: 'trackBackgroundColor',
        label: 'track_background_color',
        type: 'color',
    } as const, */
    {
        name: 'trackBackgroundColor',
        label: 'track_background_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
    {
        name: 'trackBorderWidth',
        label: 'track_border_width',
        type: 'number',
        default: 1,
        min: 0,
        max: 100,
    } as const,
    /* {
        name: 'trackBorderColor',
        label: 'track_border_color',
        type: 'color',
    } as const, */
    {
        name: 'trackBorderColor',
        label: 'track_border_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
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
    /* {
        name: 'railBackgroundColor',
        label: 'rail_background_color',
        type: 'color',
    } as const, */
    {
        name: 'railBackgroundColor',
        label: 'rail_background_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
    {
        name: 'railBorderWidth',
        label: 'rail_border_width',
        type: 'number',
        default: 0,
        min: 0,
        max: 100,
    } as const,
    {
        name: 'railBorderColor',
        label: 'rail_border_color',
        default: '',
        type: 'custom',
        fallbackFields: ['sliderColor'],
        component: (field, data, onDataChange, props) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
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
    /* {
        name: 'markBackgroundColor',
        label: 'mark_background_color',
        type: 'color',
    } as const, */
    {
        name: 'markBackgroundColor',
        label: 'mark_background_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
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
    /* {
        name: 'markerTextColor',
        label: 'marker_text_color',
        type: 'color',
        hidden: '!data.marks',
    } as const, */
    {
        name: 'markerTextColor',
        label: 'marker_text_color',
        default: '',
        type: 'custom', // important
        fallbackFields: ['sliderColor'],
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
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
        // default: 0,
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
    /* {
        name: 'startIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMin && !data.iconSmallMin',
    } as const, */
    {
        name: 'startIconColor',
        label: 'icon_color',
        default: '',
        type: 'custom', // important
        hidden: '!data.iconMin && !data.iconSmallMin',
        fallbackFields: ['sliderColor'],
        noGradient: true,
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
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
    /* {
        name: 'endIconColor',
        label: 'icon_color',
        type: 'color',
        hidden: '!data.iconMax && !data.iconSmallMax',
    } as const, */
    {
        name: 'endIconColor',
        label: 'icon_color',
        default: '',
        type: 'custom', // important
        hidden: '!data.iconMax && !data.iconSmallMax',
        fallbackFields: ['sliderColor'],
        noGradient: true,
        component: (
            // important
            field, // field properties: {name, label, type, set, singleName, component,...}
            data, // widget data
            onDataChange, // function to call, when data changed
            props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
            // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
            // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
        ) => (
            <CollectionGradientColorPicker
                field={field}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        ),
    } as const,
];

export default sliderFields;
