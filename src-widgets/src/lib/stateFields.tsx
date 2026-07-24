/**
 * vis-2 widget editor field generator for state/toggle display options.
 *
 * @module lib/stateFields
 * @remarks
 * Provides additional fields used across widgets that display or write state values (e.g. "only display",
 * "only states", push-button mode, and basic visibility toggles).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/state-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Options controlling which state fields are generated.
 */
type StateFieldsSettings = {
    /**
     * Include the discrete-state selection block (`onlyStates` + `statePushButton`).
     *
     * Widgets that own state-selection semantics (State, Slider) use the default `true`.
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
                      hidden: (data, _i) =>
                          !data.values_count && !Object.keys(data.oidObject?.commonStates || {}).length,
                  },
                  {
                      name: 'statePushButton',
                      type: 'checkbox',
                      label: 'state_push_button',
                      default: false,
                      hidden: (data, _i) => {
                          const effectiveCount =
                              data.values_count || Object.keys(data.oidObject?.commonStates || {}).length;
                          return !data.onlyStates || effectiveCount !== 2;
                      },
                      tooltip: 'state_push_button_tooltip',
                  },
              ] as RxWidgetInfoAttributesField[])
            : []),
        {
            type: 'custom',
            component: () => <CollectionDivider />,
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
};

export default stateFields;
