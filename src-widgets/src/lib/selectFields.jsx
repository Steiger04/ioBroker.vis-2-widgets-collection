import CollectionDivider from '../components/CollectionDivider';

const selectFields = () => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'cid',
        type: 'id',
        label: 'cid',
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
