/**
 * vis-2 widget editor field generator for write-delay and sampling options.
 *
 * @module lib/delayFields
 * @remarks
 * This field list is typically paired with widgets that write values and need a configurable delay or sampling
 * interval.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/delay-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { DEFAULT_SAMPLE_INTERVAL_MS, DEFAULT_WRITE_DELAY_MS } from './constants';

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
        // Also the write path's fallback for a missing or non-numeric interval (useDebounce).
        default: DEFAULT_SAMPLE_INTERVAL_MS,
        min: 0,
        max: 10000,
        step: 1,
        hidden: '!data.sampleInterval',
    },
    {
        name: 'delay',
        type: 'number',
        label: 'delay',
        // Also the write path's fallback for a missing or non-numeric delay (useDebounce).
        default: DEFAULT_WRITE_DELAY_MS,
        min: 0,
        max: 10000,
        step: 1,
        hidden: 'data.sampleInterval',
    },
];

export default delayFields;
