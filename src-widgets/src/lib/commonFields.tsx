/**
 * vis-2 widget editor field generator for shared (cross-widget) options.
 *
 * @module lib/commonFields
 * @remarks
 * Many widgets in this collection share a large set of configuration fields (icons, header/value/footer,
 * card/frame settings, background, etc.). This helper produces those shared fields and supports a suffix
 * mechanism (`groupName`) to generate indexed variants.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/common-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';
import { isUrlIcon } from './helper/isUrlIcon';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Options controlling how the shared field list is generated.
 */
type Settings = {
    /** Optional suffix used to create grouped/indexed field names (e.g. `iconSmall1`). */
    groupName?: string;
    /** If `true`, includes the full common field list; otherwise generates a reduced subset. */
    allFields?: boolean;
};

/**
 * Build the shared editor field list used by most widgets.
 *
 * @param settings Optional generation settings.
 */
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
            name: `icon${groupName}`,
            label: 'icon',
            type: 'image',
            /* hidden: (data, i) =>
                data.noIcon ||
                data[`iconSmall${i === undefined ? '' : i}`] ||
                (`iconSmall${groupName}` === 'iconSmallActive' && data[`iconSmall${groupName}`]), */
        },
        {
            name: `iconSmall${groupName}`,
            label: 'small_icon',
            type: 'icon64',
            /* hidden: (data, i) =>
                data.noIcon ||
                data[`icon${i === undefined ? '' : i}`] ||
                (`icon${groupName}` === 'iconActive' && data[`icon${groupName}`]), */
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
            name: `enableIconColorMask${groupName}`,
            label: 'enable_icon_color_mask',
            type: 'checkbox',
            default: false,
            tooltip: 'enable_icon_color_mask_tooltip',
            hidden: (data, index) => {
                let _hidden = true;

                const suffix = index !== undefined ? index : groupName;
                const iconField = data[`icon${suffix}`];
                const iconSmallField = data[`iconSmall${suffix}`];

                if (suffix === '' || suffix === 'Active') {
                    _hidden = !data.iconColor && !isUrlIcon(iconField) && !isUrlIcon(iconSmallField);
                }

                if (index !== undefined) {
                    _hidden = (!data.icon || !data.iconColor) && !isUrlIcon(iconField) && !isUrlIcon(iconSmallField);
                }

                return _hidden;
            },
            /* hidden: (data, index) => {
                const suffix = index !== undefined ? index : groupName;
                const iconField = data[`icon${suffix}`];
                const iconSmallField = data[`iconSmall${suffix}`];
                return !isUrlIcon(iconField) && !isUrlIcon(iconSmallField);
            }, */
        },
        {
            name: `iconColor${groupName}`,
            label: 'icon_color',
            type: 'color',
            hidden: 'data.noIcon',
        },
        /* {
            name: `iconHover${groupName}`,
            label: 'icon_hover',
            type: 'slider',
            min: 0,
            max: 300,

            step: 1,
            hidden: 'data.noIcon',
        }, */
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
            hidden: (data, _i) => data.oidObject?.type === 'boolean' || data.name === 'valueActive',
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
        /* {
            name: `textColor${groupName}`,
            label: 'text_color',
            type: 'color',
        }, */
        {
            name: `textColor${groupName}`,
            label: 'text_color',
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
