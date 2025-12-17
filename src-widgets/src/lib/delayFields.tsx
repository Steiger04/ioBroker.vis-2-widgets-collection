/**
 * Runtime field generator für vis-2 Editor.
 * Types: Importiere aus `vis-2-widgets-collection/types/field-definitions/delay-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const delayFields = (): RxWidgetInfoAttributesField[] => [
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider dividerText="write_value" />,
    },
    {
        name: 'sampleInterval',
        type: 'checkbox',
        label: 'sample_interval',
        default: false,
    },
    {
        name: 'sampleIntervalValue',
        type: 'number',
        label: 'sample_interval_value',
        default: 200,
        min: 0,
        max: 10000,
        step: 1,
        hidden: '!data.sampleInterval',
    },
    {
        name: 'delay',
        type: 'number',
        label: 'delay',
        default: 300,
        min: 0,
        max: 10000,
        step: 1,
        hidden: 'data.sampleInterval',
    },
];

export default delayFields;
