/**
 * Runtime field generator für vis-2 Editor.
 * Types: Importiere aus `vis-2-widgets-collection/newTypes/field-definitions/select-fields`.
 */
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';

const selectFields = (): RxWidgetInfoAttributesField[] => [
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
        type: 'color',
    },
];

export default selectFields;
