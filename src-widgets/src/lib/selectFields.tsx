import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';

export interface SelectFieldsRxData {
    arrowColor: string;
    cid: string;
}

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
        default: '#000000',
    },
];

export default selectFields;
