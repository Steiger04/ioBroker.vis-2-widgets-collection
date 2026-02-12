/**
 * vis-2 widget editor field generator for select-specific options.
 *
 * @module lib/selectFields
 * @remarks
 * Provides additional fields used by the Select collection widget (e.g. content OID and arrow styling).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/select-fields`.
 */
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';
import CollectionGradientColorPicker from '../components/CollectionGradientColorPicker';

type ExtendedSelectField = RxWidgetInfoAttributesField & {
    /** Optional array of field names to use as fallback values (used by CollectionGradientColorPicker) */
    fallbackFields?: string[];
    noGradient?: boolean;
};

const selectFields = (): ExtendedSelectField[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="selection" />,
    },
    {
        name: 'cid',
        type: 'id',
        label: 'cid',
        onChange: oidChangeHandlerAsync(['boolean', 'number', 'string', 'mixed'], 'cid'),
    },
    {
        type: 'custom',
        component: () => <CollectionDivider dividerText="arrow" />,
    },
    {
        name: 'arrowColor',
        label: 'arrow_color',
        default: '',
        type: 'custom', // important
        fallbackFields: [''],
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
    },
];

export default selectFields;
