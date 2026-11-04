/**
 * Radio-group collection widget.
 *
 * @module widgets/RadioGroupCollectionWidget
 */

import React from 'react';
import Generic from '../Generic';
import commonFields from '../lib/commonFields';
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
                {
                    name: 'values',
                    label: 'values',
                    indexFrom: 1,
                    indexTo: 'values_count',
                    fields: [...commonFields({ groupName: '', allFields: false, perState: true })],
                },
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

    // Do not delete this method. It is used by vis to read the widget configuration.
    // eslint-disable-next-line class-methods-use-this
    getWidgetInfo(): RxWidgetInfo {
        return RadioGroupCollectionWidget.getWidgetInfo();
    }

    // eslint-disable-next-line class-methods-use-this
    propertiesUpdate(): void {
        // Intentionally empty.
        // Kept as a hook for future state/object initialization.
    }

    // This function is called every time when rxData is changed
    // eslint-disable-next-line class-methods-use-this
    onRxDataChanged(): void {
        // this.propertiesUpdate();
    }

    // This function is called every time when rxStyle is changed
    // eslint-disable-next-line class-methods-use-this
    onRxStyleChanged(): void {}

    // This function is called every time when some Object State updated, but all changes lands into this.state.values too
    // eslint-disable-next-line class-methods-use-this
    onStateUpdated(_id: string, _state: ioBroker.State): void {}

    componentDidMount(): void {
        super.componentDidMount();
        // Update data
        // this.propertiesUpdate();
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element | React.JSX.Element[] | null {
        super.renderWidgetBody(props);

        return this.renderWithProvider(<RadioGroupCollection />, props);
    }
}

export default RadioGroupCollectionWidget;
