import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';

const selectFields = () => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'cid',
        type: 'id',
        label: 'cid',
        onChange: oidChangeHandlerAsync(['boolean', 'number', 'string', 'mixed'], 'cid'),
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'arrowColor',
        label: 'arrow_color',
        type: 'color',
    },
];

export default selectFields;
