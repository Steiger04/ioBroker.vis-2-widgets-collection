/**
 * vis-2 widget editor field generator for button-group-specific options.
 *
 * @module lib/buttonGroupFields
 * @remarks
 * The vis-2 property editor consumes arrays of `RxWidgetInfoAttributesField`. This helper returns the additional
 * fields required by the ButtonGroup collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/button-group-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

type ExtendedButtonGroupField = RxWidgetInfoAttributesField & {
    /** Optional array of field names to use as fallback values (used by CollectionGradientColorPicker) */
    fallbackFields?: string[];
    noGradient?: boolean;
};

const buttonGroupFields = (): ExtendedButtonGroupField[] => [
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
        default: '',
        type: 'custom', // important
        fallbackFields: ['textColor'],
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
    },
];

export default buttonGroupFields;
