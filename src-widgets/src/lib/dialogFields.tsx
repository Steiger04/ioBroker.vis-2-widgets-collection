/**
 * Runtime field generator für vis-2 Editor.
 * Types: Importiere aus `vis-2-widgets-collection/newTypes/field-definitions/dialog-fields`.
 */
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';

const dialogFields = (): RxWidgetInfoAttributesField[] => [
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
        name: 'oid',
        type: 'id',
        label: 'oid',
        tooltip: 'dialog_set_oid_tooltip',
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
    {
        name: 'dialogBackgroundColor',
        label: 'background_color',
        type: 'color',
    },

    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="dialog_button" />,
    },
    {
        name: 'value',
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
