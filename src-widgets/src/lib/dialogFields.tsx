/**
 * vis-2 widget editor field generator for dialog-specific options.
 *
 * @module lib/dialogFields
 * @remarks
 * Provides the additional fields required by the Dialog collection widget (view selection, sizing, auto-close,
 * close button options, and button/icon presentation).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/dialog-fields`.
 */
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

/**
 * Extended field type with custom properties for collection widgets.
 */
type ExtendedDialogField = RxWidgetInfoAttributesField & {
    /** Optional array of field names to use as fallback values (used by CollectionGradientColorPicker) */
    fallbackFields?: string[];
    noGradient?: boolean;
};

const dialogFields = (): ExtendedDialogField[] => [
    {
        name: 'view',
        label: 'view',
        type: 'select-views',
        multiple: false,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'dialogAutoClose',
        label: 'dialog_auto_close',
        type: 'slider',
        min: 0,
        max: 30000,
        step: 100,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'dialogId',
        type: 'id',
        label: 'oid',
        tooltip: 'dialog_set_oid_tooltip',
        onChange: oidChangeHandlerAsync(['boolean'], 'dialogId'),
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'dialogHeaderAsTitle',
        label: 'dialog_header_as_title',
        type: 'checkbox',
        default: false,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'dialogWidth',
        label: 'dialog_width',
        type: 'slider',
        min: 1,
        max: 100,
        default: 100,
        step: 1,
    },
    {
        name: 'dialogHeight',
        label: 'dialog_height',
        type: 'slider',
        min: 1,
        max: 100,
        default: 100,
        step: 1,
    },
    {
        name: 'dialogInPixel',
        label: 'dialog_in_pixel',
        type: 'checkbox',
        default: false,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    /* {
        name: 'dialogBackgroundColor',
        label: 'background_color',
        type: 'color',
    }, */
    {
        name: 'dialogBackgroundColor',
        label: 'background_color',
        default: '',
        type: 'custom', // important
        fallbackFields: [''],
        noGradient: false,
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
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="dialog_button" />,
    },
    {
        name: 'dialogText',
        label: 'dialog_text',
        type: 'html',
        default: '',
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'dialogCloseButtonTop',
        label: 'dialog_close_button_top',
        type: 'checkbox',
        default: false,
    },
    {
        name: 'dialogCloseButtonBottom',
        label: 'dialog_close_button_bottom',
        type: 'checkbox',
        default: false,
    },
    {
        name: 'dialogCloseButtonColor',
        label: 'dialog_close_button_color',
        type: 'color',
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'onlyIcon',
        label: 'only_icon',
        type: 'checkbox',
        default: false,
        hidden: 'data.onlyText',
    },
    {
        name: 'onlyText',
        label: 'only_text',
        type: 'checkbox',
        default: false,
        hidden: 'data.onlyIcon',
    },
];

export default dialogFields;
