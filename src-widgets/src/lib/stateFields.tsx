/**
 * vis-2 widget editor field generator for state/toggle display options.
 *
 * @module lib/stateFields
 * @remarks
 * Provides additional fields of the State and Input widgets (e.g. "only display", "only states", push-button
 * mode, and basic visibility toggles). The Slider does not use it: it declares `onlyStates` in `sliderFields`
 * (ADR-0106).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/state-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createOnlyDisplayField } from './fieldFactories';
import { pushButtonModeOffered } from './filledStateRows';
import { MAIN_OID_ROWS, stateRowCount } from './stateRows';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Options controlling which state fields are generated.
 */
type StateFieldsSettings = {
    /**
     * Include the discrete-state selection block (`onlyStates` + `statePushButton`).
     *
     * The widget that owns state-selection semantics here (State) uses the default `true`.
     * Widgets whose job is free-form entry (Input) pass `false` — picking from discrete states
     * is the Select widget's responsibility. See ADR-0002.
     *
     * @default true
     */
    onlyStates?: boolean;
};

/**
 * Build the state display/interaction field list.
 *
 * @param settings Optional generation settings.
 */
const stateFields = (settings?: StateFieldsSettings): RxWidgetInfoAttributesField[] => {
    const { onlyStates = true } = settings || {};

    return [
        // Discrete-state selection block — only for widgets that cycle/pick states directly.
        ...(onlyStates
            ? ([
                  {
                      type: 'custom',
                      component: () => <CollectionDivider />,
                  },
                  {
                      name: 'onlyStates',
                      type: 'checkbox',
                      label: 'only_states',
                      default: false,
                      // The option itself follows the Zustandsmenge, which counts blank rows too.
                      hidden: (data, _i) => stateRowCount(data, MAIN_OID_ROWS) === 0,
                  },
                  {
                      name: 'statePushButton',
                      type: 'checkbox',
                      label: 'state_push_button',
                      default: false,
                      hidden: (data, _i) => !pushButtonModeOffered(data),
                      tooltip: 'state_push_button_tooltip',
                  },
              ] as RxWidgetInfoAttributesField[])
            : []),
        {
            type: 'custom',
            component: () => <CollectionDivider />,
        },
        createOnlyDisplayField(),
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
};

export default stateFields;
