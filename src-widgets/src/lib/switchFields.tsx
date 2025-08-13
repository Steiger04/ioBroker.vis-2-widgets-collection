import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

export interface SwitchFieldsRxData {
    thumbSize: number;
    thumbColorTrue: string;
    thumbColorFalse: string;
    trackSize: number;
    trackColor: string;
}

const switchFields = (): RxWidgetInfoAttributesField[] => [
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
    {
        name: 'thumbColorTrue',
        label: 'thumb_color_true',
        type: 'color',
    },
    {
        name: 'thumbColorFalse',
        label: 'thumb_color_false',
        type: 'color',
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
    {
        name: 'trackColor',
        label: 'track_color',
        type: 'color',
    },
];

export default switchFields;
