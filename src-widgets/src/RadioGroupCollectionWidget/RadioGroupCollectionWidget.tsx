/**
 * Radio-group collection widget.
 *
 * @module widgets/RadioGroupCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
import { stateEditorGroup } from '../lib/stateEditorFields';
import commonObjectFields from '../lib/commonObjectFields';
import delayFields from '../lib/delayFields';
import radioGroupFields from '../lib/radioGroupFields';
import { ANY_VALUE_TYPES } from '../lib/allowedOidTypes';
import RadioGroupCollection from './RadioGroupCollection';

import type { RxWidgetInfo, RxRenderWidgetProps, RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';
import type { WidgetRegistry } from '../types';

/**
 * Widget entry (vis-2 runtime).
 *
 * @remarks
 * This class mainly defines the widget schema via {@link getWidgetInfo} and
 * provides the collection context consumed by {@link RadioGroupCollection}.
 */
class RadioGroupCollectionWidget extends Generic<WidgetRegistry['tplRadioGroupCollectionWidget']> {
    static getWidgetInfo(): RxWidgetInfo {
        return {
            id: 'tplRadioGroupCollectionWidget',
            visSet: 'vis-2-widgets-collection', // Widget set name in which this widget is located
            visSetLabel: 'widgets_collection', // Widget set translated label (should be defined only in one widget of a set)
            visName: 'RadioGroupCollectionWidget', // Name of widget
            visWidgetLabel: 'radio_group_collection_widget', // Label for widget
            visOrder: 6,
            visAttrs: [
                {
                    name: 'common', // group name
                    fields: [...commonFields({ groupName: '', allFields: true })],
                },
                {
                    name: 'radioGroup', // group name
                    label: 'radio_group',
                    fields: [
                        ...commonObjectFields(ANY_VALUE_TYPES),
                        ...delayFields(),
                        ...radioGroupFields(),
                    ] as RxWidgetInfoAttributesField[],
                },
                stateEditorGroup(),
                // check here all possible types https://github.com/ioBroker/ioBroker.vis/blob/react/src/src/Attributes/Widget/SCHEMA.md
            ],
            visDefaultStyle: {
                width: '100%',
                height: '100px',
                position: 'relative' as const,
            },
            visPrev: 'widgets/vis-2-widgets-collection/img/prev-collection-radio-group.png',
        };
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<RadioGroupCollection />, props);
    }
}

export default RadioGroupCollectionWidget;
