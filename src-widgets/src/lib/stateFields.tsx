/**
 * Runtime field generator für vis-2 Editor.
 * Types: Importiere aus `vis-2-widgets-collection/newTypes/field-definitions/state-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

const stateFields = (): RxWidgetInfoAttributesField[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'onlyStates',
        type: 'checkbox',
        label: 'only_states',
        default: false,
        hidden: '!data.values_count',
    },
    {
        name: 'statePushButton',
        type: 'checkbox',
        label: 'state_push_button',
        default: false,
        hidden: (data, _i) => !data.onlyStates || Number(data.values_count) !== 2,
        tooltip: 'state_push_button_tooltip',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: '!data.values_count',
    },
    {
        name: 'onlyDisplay',
        type: 'checkbox',
        label: 'only_display',
        disabled: (data, _i) => !data.write,
        default: false,
        hidden: (data, _i) => !data.write,
    },
    {
        name: 'noIcon',
        type: 'checkbox',
        label: 'no_icon',
    },
    {
        name: 'noValue',
        type: 'checkbox',
        label: 'no_value',
    },
];

export default stateFields;
