/**
 * vis-2 widget editor field generator for switch-specific styling options.
 *
 * @module lib/switchFields
 * @remarks
 * Provides thumb/track sizing and colors for the Switch collection widget.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/switch-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

const switchFields = (): (RxWidgetInfoAttributesField & {
    fallbackFields?: string[];
})[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'thumbSize',
        label: 'thumb_size',
        type: 'slider',
        min: 0,
        max: 500,
        default: 62,
        step: 1,
    },
    /* {
        name: 'thumbColorTrue',
        label: 'thumb_color_true',
        type: 'color',
    }, */
    {
        name: 'thumbColorTrue',
        label: 'thumb_color_true',
        default: '',
        type: 'custom', // important
        fallbackFields: [],
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
    /* {
        name: 'thumbColorFalse',
        label: 'thumb_color_false',
        type: 'color',
    }, */
    {
        name: 'thumbColorFalse',
        label: 'thumb_color_false',
        default: '',
        type: 'custom', // important
        fallbackFields: [],
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
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'trackSize',
        label: 'track_size',
        type: 'slider',
        min: 0,
        max: 100,
        default: 10,
        step: 1,
    },
    /* {
        name: 'trackColor',
        label: 'track_color',
        type: 'color',
    }, */
    {
        name: 'trackColor',
        label: 'track_color',
        default: '',
        type: 'custom', // important
        fallbackFields: [],
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

export default switchFields;
