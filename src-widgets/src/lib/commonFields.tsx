import CollectionDivider from '../components/CollectionDivider';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

type Settings = {
    groupName?: string;
    allFields?: boolean;
};

export interface CommonFieldsRxData {
    [key: `iconSmall${string}`]: string;
    [key: `icon${string}?`]: string | number;
    [key: `iconSize${string}`]: number;
    [key: `iconColor${string}`]: string;
    [key: `iconHover${string}`]: number;
    [key: `iconXOffset${string}`]: string;
    [key: `iconYOffset${string}`]: string;
    [key: `noHeader${string}`]: boolean;
    [key: `noHeaderIcon${string}`]: boolean;
    [key: `header${string}`]: string | number;
    [key: `headerSize${string}`]: number;
    [key: `valueSize${string}`]: number;
    [key: `noFooter${string}`]: boolean;
    [key: `footer${string}`]: number | string;
    [key: `footerSize${string}`]: number;
    [key: `noCard${string}`]: boolean;
    [key: `squaredCorner${string}`]: boolean;
    [key: `textColor${string}`]: string;
    [key: `outlined${string}`]: boolean;
    [key: `outlinedFrame${string}`]: boolean;
    [key: `basePadding${string}`]: number;
    [key: `baseElevation${string}`]: number;
    [key: `square${string}`]: boolean;
    [key: `ellipse${string}`]: boolean;
    [key: `circle${string}`]: boolean;
    [key: `background${string}`]: string;
    [key: `backgroundColor${string}`]: string;
    [key: `frameBackground${string}`]: string;
    [key: `frameBackgroundColor${string}`]: string;
}

const commonFields = (settings?: Settings): RxWidgetInfoAttributesField[] => {
    const { groupName = '', allFields = true } = settings || {};

    const fields = [
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="icon" />,
            hidden: 'data.noIcon',
        },
        {
            name: `iconSmall${groupName}`,
            label: 'small_icon',
            type: 'icon64',
            hidden: (data, i) =>
                data.noIcon ||
                data[`icon${i === undefined ? '' : i}`] ||
                (`icon${groupName}` === 'iconActive' && data[`icon${groupName}`]),
        },
        {
            name: `icon${groupName}`,
            label: 'icon',
            type: 'image',
            hidden: (data, i) =>
                data.noIcon ||
                data[`iconSmall${i === undefined ? '' : i}`] ||
                (`iconSmall${groupName}` === 'iconSmallActive' && data[`iconSmall${groupName}`]),
        },
        {
            name: `iconSize${groupName}`,
            label: 'icon_size',
            type: 'slider',
            min: 1,
            max: 500,
            // default: 0,
            step: 1,
            hidden: 'data.noIcon',
        },
        {
            name: `iconColor${groupName}`,
            label: 'icon_color',
            type: 'color',
            hidden: 'data.noIcon',
        },
        {
            name: `iconHover${groupName}`,
            label: 'icon_hover',
            type: 'slider',
            min: 0,
            max: 300,

            step: 1,
            hidden: 'data.noIcon',
        },
        {
            name: `iconXOffset${groupName}`,
            label: 'icon_x_offset',
            type: 'text',
            default: '0px',
            hidden: 'data.noIcon',
        },
        {
            name: `iconYOffset${groupName}`,
            label: 'icon_y_offset',
            type: 'text',
            default: '0px',
            hidden: 'data.noIcon',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="header" />,
            hidden: (data, _i) => data.noHeader && !allFields,
        },
        {
            name: `noHeader${groupName}`,
            type: 'checkbox',
            label: 'no_header',
        },
        {
            name: `noHeaderIcon${groupName}`,
            type: 'checkbox',
            label: 'no_header_icon',
            default: false,
            hidden: 'data.noHeader',
        },
        {
            name: `header${groupName}`,
            label: 'header_text',
            type: 'html',
            default: '',
            hidden: 'data.noHeader',
        },
        {
            name: `headerSize${groupName}`,
            label: 'header_size',
            type: 'slider',
            min: 0,
            max: 500,

            step: 1,
            hidden: 'data.noHeader',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="value" />,
        },
        {
            name: `alias${groupName}`,
            label: 'alias',
            type: 'html',
            default: '',
        },
        {
            name: `value${groupName}`,
            label: 'value',
            type: 'text',
            default: '',
            hidden: (data, _i) => data.oidObject.type === 'boolean' || data.name === 'valueActive',
        },
        {
            name: `valueSize${groupName}`,
            label: 'value_size',
            type: 'slider',
            min: 0,
            max: 500,

            step: 1,
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="footer" />,
            hidden: (data, _i) => data.noFooter && !allFields,
        },
        {
            name: `noFooter${groupName}`,
            label: 'no_footer',
            type: 'checkbox',
        },
        {
            name: `footer${groupName}`,
            label: 'footer_text',
            type: 'html',
            default: '',
            hidden: 'data.noFooter',
        },
        {
            name: `footerSize${groupName}`,
            label: 'footer_size',
            type: 'slider',
            min: 0,
            max: 500,

            step: 1,
            hidden: 'data.noFooter',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="characteristics" />,
        },
        {
            name: `noCard${groupName}`,
            label: 'without_card',
            type: 'checkbox',
        },
        {
            name: `squaredCorner${groupName}`,
            label: 'squared_corner',
            type: 'checkbox',
        },
        {
            name: `textColor${groupName}`,
            label: 'text_color',
            type: 'color',
        },
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider />,
        },
        {
            name: `outlined${groupName}`,
            label: 'outlined',
            type: 'checkbox',
        },
        {
            name: `outlinedFrame${groupName}`,
            label: 'outlined_frame',
            type: 'checkbox',
        },
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider />,
        },
        {
            name: `basePadding${groupName}`,
            label: 'base_padding',
            type: 'slider',
            min: 0,
            max: 10,
            step: 0.1,
            default: 1,
        },
        {
            name: `baseElevation${groupName}`,
            label: 'base_elevation',
            type: 'slider',
            min: 0,
            max: 24,
            step: 1,
            default: 4,
        },
        {
            label: '',
            name: 'allFieldsDivider',
            type: 'custom',
            component: () => <CollectionDivider dividerText="geometry" />,
        },
        {
            name: `square${groupName}`,
            label: 'square',
            type: 'checkbox',
            hidden: 'data.circle || data.ellipse',
        },
        {
            name: `ellipse${groupName}`,
            label: 'ellipse',
            type: 'checkbox',
            hidden: 'data.circle || data.square',
        },
        {
            name: `circle${groupName}`,
            label: 'circle',
            type: 'checkbox',
            hidden: 'data.ellipse || data.square',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="background" />,
        },

        {
            name: `background${groupName}`,
            label: 'background',
            default: '',
            type: 'custom', // important
            component: (
                // important
                field, // field properties: {name, label, type, set, singleName, component,...}
                data, // widget data
                onDataChange, // function to call, when data changed
                _props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
                // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
                // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
            ) => (
                <CollectionGradientColorPicker
                    field={field}
                    data={data}
                    onDataChange={onDataChange}
                />
            ),
        },
        {
            name: `backgroundColor${groupName}`,
            label: 'background_color',
            type: 'color',
        },
        {
            label: '',
            type: 'custom',
            component: () => <CollectionDivider dividerText="frame_background" />,
        },
        {
            name: `frameBackground${groupName}`,
            label: 'frame_background',
            default: '',
            type: 'custom', // important
            component: (
                // important
                field, // field properties: {name, label, type, set, singleName, component,...}
                data, // widget data
                onDataChange, // function to call, when data changed
                _props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
                // widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
                // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
            ) => (
                <CollectionGradientColorPicker
                    field={field}
                    data={data}
                    onDataChange={onDataChange}
                />
            ),
        },
        {
            name: `frameBackgroundColor${groupName}`,
            label: 'frame_background_color',
            type: 'color',
        },
    ] as RxWidgetInfoAttributesField[];

    if (allFields) {
        const valuesToDelete = [`alias${groupName}`, `value${groupName}`];

        return fields.filter(obj => !valuesToDelete.includes(obj.name!));
    }

    const valuesToDelete = [
        'allFieldsDivider',
        `noHeader${groupName}`,
        `noHeaderIcon${groupName}`,
        groupName === 'Active' ? `value${groupName}` : '',
        `noFooter${groupName}`,
        `noCard${groupName}`,
        `squaredCorner${groupName}`,
        `outlined${groupName}`,
        `outlinedFrame${groupName}`,
        `basePadding${groupName}`,
        `baseElevation${groupName}`,
        `square${groupName}`,
        `ellipse${groupName}`,
        `circle${groupName}`,
    ];

    return fields.filter(obj => !valuesToDelete.includes(obj.name!));
};

export default commonFields;
