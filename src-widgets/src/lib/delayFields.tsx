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

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/**
 * Options of the field list.
 */
type DelayFieldsSettings = {
    /**
     * Hides the whole block, its divider included, while the options have no effect. Stored values
     * stay and apply again once the predicate turns `false` (ADR-0110 Nr. 6: State widget).
     *
     * vis-2 hands it the raw widget data.
     */
    hiddenWhen?: (data: WidgetData) => boolean;
};

/**
 * Build the write-delay and sampling field list.
 *
 * @param settings Optional generation settings.
 */
const delayFields = (settings?: DelayFieldsSettings): RxWidgetInfoAttributesField[] => {
    const { hiddenWhen } = settings || {};

    // A string condition cannot be combined with a predicate without `eval`, so `hiddenWhen` takes
    // the rule as a predicate too; a widget without it keeps vis-2's string condition.
    const hiddenBy = (condition: string, rule: (data: WidgetData) => boolean): RxWidgetInfoAttributesField['hidden'] =>
        hiddenWhen ? data => hiddenWhen(data) || rule(data) : condition;

    return [
        {
            label: '',
            type: 'custom',
            hidden: hiddenWhen,
            component: () => <CollectionDivider dividerText="write_value" />,
        },
        {
            name: 'sampleInterval',
            type: 'checkbox',
            label: 'sample_interval',
            default: false,
            hidden: hiddenWhen,
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
            hidden: hiddenBy('!data.sampleInterval', data => !data.sampleInterval),
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
            hidden: hiddenBy('data.sampleInterval', data => Boolean(data.sampleInterval)),
        },
    ];
};

export default delayFields;
